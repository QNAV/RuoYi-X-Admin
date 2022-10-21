import { BasePageContainer } from '@/components';
import { EnableDisableStatusMap } from '@/constants';
import ButtonAdd from '@/pages/system/post/components/ButtonAdd';
import ButtonEdit from '@/pages/system/post/components/ButtonEdit';
import type { SearchParams } from '@/pages/system/post/components/ButtonExport';
import ButtonExport from '@/pages/system/post/components/ButtonExport';
import ButtonRemove from '@/pages/system/post/components/ButtonRemove';
import ModalAddOrEdit from '@/pages/system/post/components/ModalAddOrEdit';
import { useActionRefMainTable } from '@/pages/system/post/model';
import { SysPostPostList } from '@/services/sys/SysPostService';
import { convertParams } from '@/utils';
import type { ProFormInstance, ProTableProps } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import type { FC } from 'react';
import { useRef, useState } from 'react';

const rowKey = 'postId';

const PagePost: FC = () => {
  const [searchParams, setSearchParams] = useState<SearchParams>({});

  const formRef = useRef<ProFormInstance<API.SysPostQueryBo>>();

  const actionRef = useActionRefMainTable();

  const tableAlertOptionRender: ProTableProps<API.SysPostVo, 'text'>['tableAlertOptionRender'] = ({ selectedRows }) => {
    const disabled = selectedRows.length === 0;

    return (
      <>
        <ButtonRemove
          disabled={disabled}
          isBatch
          postId={selectedRows.map((i) => i.postId).join(',') as unknown as number}
          postName={selectedRows.map((i) => i.postName).join(',')}
        />

        <ButtonExport searchParams={searchParams} />
      </>
    );
  };

  return (
    <BasePageContainer>
      <ProTable<API.SysPostVo>
        formRef={formRef}
        actionRef={actionRef}
        rowKey={rowKey}
        request={async (...p) => {
          const params = convertParams(...p);
          setSearchParams(params);
          return await SysPostPostList(params);
        }}
        columns={[
          { dataIndex: 'postId', key: 'postId', title: '岗位编号', valueType: 'text', hideInSearch: true },
          { dataIndex: 'postCode', key: 'postCode', title: '岗位编码', valueType: 'text' },
          { dataIndex: 'postName', key: 'postName', title: '岗位名称', valueType: 'text' },
          { dataIndex: 'postSort', key: 'postSort', title: '显示顺序', valueType: 'text', hideInSearch: true },
          { title: '状态', dataIndex: 'status', key: 'status', valueType: 'select', valueEnum: EnableDisableStatusMap },
          { title: '备注', dataIndex: 'remark', key: 'remark', valueType: 'textarea', hideInSearch: true },
          {
            title: '创建时间',
            dataIndex: 'createTime',
            key: 'createTime',
            valueType: 'dateTime',
            editable: false,
            hideInSearch: true,
            sorter: true,
          },
          {
            title: '操作',
            valueType: 'option',
            render: (dom, entity: API.SysPostVo) => {
              return (
                <>
                  <ButtonEdit record={entity} />

                  <ButtonRemove postId={entity.postId} postName={entity.postName} />
                </>
              );
            },
          },
        ]}
        toolbar={{
          actions: [<ButtonAdd key="ButtonAdd" />],
        }}
        tableAlertOptionRender={tableAlertOptionRender}
      />

      <ModalAddOrEdit />
    </BasePageContainer>
  );
};

export default PagePost;
