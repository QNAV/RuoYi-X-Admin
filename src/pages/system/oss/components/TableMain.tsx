import { BaseProTable } from '@/components';
import ButtonToConfigPage from '@/pages/system/oss/components/ButtonToConfigPage';
import ModalFormUpdate from '@/pages/system/oss/components/ModalFormUpdate';
import { useActionRefMainTable } from '@/pages/system/oss/model';
import type { SysOssPageQueryBo, SysOssVo } from '@/services/system/data-contracts';
import { sysOssPostList } from '@/services/system/System';
import { convertParams } from '@/utils';
import type { ProColumns } from '@ant-design/pro-components';
import type { FC } from 'react';

const columns: ProColumns<SysOssVo>[] = [
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
    title: '服务商',
    dataIndex: 'service',
    key: 'service',
    valueType: 'text',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime',
    valueType: 'dateTime',
    hideInSearch: true,
  },
  {
    title: '创建时间',
    dataIndex: 'createTimeRange',
    key: 'createTimeRange',
    valueType: 'dateTimeRange',
    hideInTable: true,
  },
];

const TableMain: FC = () => {
  const actionRef = useActionRefMainTable();

  return (
    <BaseProTable<SysOssVo, SysOssPageQueryBo>
      rowKey="ossId"
      actionRef={actionRef}
      columns={columns}
      request={(...p) => sysOssPostList(convertParams(...p))}
      toolbar={{
        actions: [<ModalFormUpdate key="ModalFormUpdate" />, <ButtonToConfigPage key="ButtonToConfigPage" />],
      }}
    />
  );
};

export default TableMain;
