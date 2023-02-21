import { BaseProTable } from '@/components';
import ButtonDownload from '@/pages/system/oss/components/ButtonDownload';
import ButtonPreviewConfig from '@/pages/system/oss/components/ButtonPreviewConfig';
import ButtonRemove from '@/pages/system/oss/components/ButtonRemove';
import ButtonToConfigPage from '@/pages/system/oss/components/ButtonToConfigPage';
import ButtonUploadFile from '@/pages/system/oss/components/ButtonUploadFile';
import ButtonUploadImg from '@/pages/system/oss/components/ButtonUploadImg';
import { useActionRefMainTable } from '@/pages/system/oss/model';
import type { SysOssPageQueryBo, SysOssVo } from '@/services/system/data-contracts';
import { sysConfigGetConfigKeySkipErrorHandler, sysOssPostList } from '@/services/system/System';
import { convertParams } from '@/utils';
import type { ProColumns, ProTableProps } from '@ant-design/pro-components';
import { useRequest } from 'ahooks';
import { Image } from 'antd';
import { isArray } from 'lodash-es';
import type { FC } from 'react';

const useColumns = (configValue: boolean): ProColumns<SysOssVo>[] => {
  return [
    {
      title: '对象存储主键',
      dataIndex: 'ossId',
      key: 'ossId',
      valueType: 'text',
      hideInSearch: true,
    },
    {
      title: '文件名',
      dataIndex: 'fileName',
      key: 'fileName',
      valueType: 'text',
    },
    {
      title: '原名',
      dataIndex: 'originalName',
      key: 'originalName',
      valueType: 'text',
    },
    {
      title: '文件后缀名',
      dataIndex: 'fileSuffix',
      key: 'fileSuffix',
      valueType: 'text',
    },
    {
      title: '文件展示',
      dataIndex: 'url',
      key: 'url',
      valueType: 'text',
      render: (_, record) => {
        if (['png', 'jpg', 'jpeg'].includes(record.fileSuffix) && configValue) {
          return <Image src={record.url} width={100} height={100} />;
        }
        return record.url;
      },
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
      valueType: 'dateTime',
      hideInSearch: true,
      sorter: true,
    },
    {
      title: '上传人',
      dataIndex: 'createBy',
      key: 'createBy',
      valueType: 'text',
    },
    {
      title: '服务商',
      dataIndex: 'service',
      key: 'service',
      valueType: 'text',
      sorter: true,
    },
    {
      title: '创建时间',
      dataIndex: 'dateTimeRange',
      key: 'dateTimeRange',
      valueType: 'dateTimeRange',
      hideInTable: true,
    },
    {
      title: '操作',
      dataIndex: 'action',
      valueType: 'option',
      render: (_, record) => {
        return (
          <>
            <ButtonDownload ossId={record.ossId} />
            <ButtonRemove ossIds={[record.ossId]} />
          </>
        );
      },
    },
  ];
};

const tableAlertOptionRender: ProTableProps<SysOssVo, SysOssPageQueryBo>['tableAlertOptionRender'] = ({
  selectedRowKeys,
}) => {
  return <ButtonRemove disabled={selectedRowKeys.length === 0} batch ossIds={selectedRowKeys as number[]} />;
};

const configKey = 'sys.oss.previewListResource';

const TableMain: FC = () => {
  const actionRef = useActionRefMainTable();

  const { data, refresh } = useRequest(async () => {
    const {
      data: { msg },
    } = await sysConfigGetConfigKeySkipErrorHandler({
      configKey,
    });

    return msg === 'true';
  });

  const columns = useColumns(!!data);

  return (
    <BaseProTable<
      SysOssVo,
      SysOssPageQueryBo & {
        dateTimeRange?: [string, string];
      }
    >
      rowKey="ossId"
      actionRef={actionRef}
      columns={columns}
      request={async (...p) => {
        const { dateTimeRange, ...params } = convertParams(...p);

        if (isArray(dateTimeRange)) {
          params.beginCreateTime = dateTimeRange[0];
          params.endCreateTime = dateTimeRange[1];
        }

        return await sysOssPostList(params);
      }}
      toolbar={{
        actions: [
          <ButtonUploadFile key="ButtonUploadFile" />,
          <ButtonUploadImg key="ButtonUploadImg" />,
          <ButtonPreviewConfig
            key="ButtonPreviewConfig"
            configKey={configKey}
            configValue={!!data}
            onFinish={() => {
              refresh();
            }}
          />,
          <ButtonToConfigPage key="ButtonToConfigPage" />,
        ],
      }}
      tableAlertOptionRender={tableAlertOptionRender}
    />
  );
};

export default TableMain;
