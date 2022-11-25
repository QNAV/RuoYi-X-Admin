import { BaseProTable } from '@/components';
import { useQueryDict } from '@/models';
import ButtonAdd from '@/pages/system/post/components/ButtonAdd';
import ButtonEdit from '@/pages/system/post/components/ButtonEdit';
import type { SearchParams } from '@/pages/system/post/components/ButtonExport';
import ButtonExport from '@/pages/system/post/components/ButtonExport';
import ButtonRemove from '@/pages/system/post/components/ButtonRemove';
import { useActionRefMainTable } from '@/pages/system/post/model';
import type { SysPostQueryBo, SysPostVo } from '@/services/system/data-contracts';
import { sysPostPostList } from '@/services/system/System';
import { convertParams } from '@/utils';
import type { ProColumns, ProFormInstance, ProTableProps } from '@ant-design/pro-components';
import { useRef, useState } from 'react';

const useColumns = (): ProColumns<SysPostVo>[] => {
  const { data } = useQueryDict('sys_normal_disable');

  return [
    { dataIndex: 'postId', key: 'postId', title: '岗位编号', valueType: 'text', hideInSearch: true },
    { dataIndex: 'postCode', key: 'postCode', title: '岗位编码', valueType: 'text' },
    { dataIndex: 'postName', key: 'postName', title: '岗位名称', valueType: 'text' },
    { dataIndex: 'postSort', key: 'postSort', title: '显示顺序', valueType: 'text', hideInSearch: true },
    { title: '状态', dataIndex: 'status', key: 'status', valueType: 'select', valueEnum: data?.valueEnum ?? {} },
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
      render: (dom, entity: SysPostVo) => {
        return (
          <>
            <ButtonEdit record={entity} />

            <ButtonRemove postId={entity.postId} />
          </>
        );
      },
    },
  ];
};

const tableAlertOptionRender: ProTableProps<SysPostVo, 'text'>['tableAlertOptionRender'] = ({ selectedRows }) => {
  return (
    <ButtonRemove
      disabled={selectedRows.length === 0}
      isBatch
      postId={selectedRows.map((i) => i.postId).join(',') as unknown as number}
    />
  );
};

const TableMain = () => {
  const [searchParams, setSearchParams] = useState<SearchParams>({});

  const formRef = useRef<ProFormInstance<SysPostQueryBo>>();

  const actionRef = useActionRefMainTable();

  const columns = useColumns();

  return (
    <BaseProTable<SysPostVo, SysPostQueryBo>
      formRef={formRef}
      actionRef={actionRef}
      rowKey="postId"
      request={async (...p) => {
        const params = convertParams(...p);
        setSearchParams(params);
        return await sysPostPostList(params);
      }}
      columns={columns}
      toolbar={{
        actions: [<ButtonExport key="ButtonExport" searchParams={searchParams} />, <ButtonAdd key="ButtonAdd" />],
      }}
      tableAlertOptionRender={tableAlertOptionRender}
    />
  );
};

export default TableMain;
