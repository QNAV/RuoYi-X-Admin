import { CCreateTime, CEnableDisableStatus, CPostCode, CPostId, CPostName, CPostSort, CRemark } from '@/columns';
import { BasePageContainer } from '@/components';
import { useRowClick } from '@/hooks';
import ButtonAdd from '@/pages/system/post/components/ButtonAdd';
import ButtonEdit from '@/pages/system/post/components/ButtonEdit';
import type { SearchParams } from '@/pages/system/post/components/ButtonExport';
import ButtonExport from '@/pages/system/post/components/ButtonExport';
import ButtonRemove from '@/pages/system/post/components/ButtonRemove';
import ModalAddOrEdit from '@/pages/system/post/components/ModalAddOrEdit';
import { useActionRefMainTable } from '@/pages/system/post/model';
import { SysPostPostList } from '@/services/sys/SysPostService';
import type { ProItem } from '@/typings';
import { convertParams } from '@/utils';
import type { ProFormInstance, ProTableProps } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import type { FC } from 'react';
import { useRef, useState } from 'react';

const columns: ProItem[] = [
  CPostId,
  CPostCode,
  CPostName,
  CPostSort,
  CEnableDisableStatus,
  CRemark,
  CCreateTime,
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
];

const rowKey = 'postId';

const PagePost: FC = () => {
  const [searchParams, setSearchParams] = useState<SearchParams>({});

  const formRef = useRef<ProFormInstance<API.SysPostQueryBo>>();

  const actionRef = useActionRefMainTable();

  const { rowSelection, onClick } = useRowClick<API.SysPostVo>(rowKey);

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
        columns={columns}
        toolbar={{
          actions: [<ButtonAdd key="ButtonAdd" />],
        }}
        rowSelection={rowSelection}
        onRow={(record) => ({
          onClick: () => onClick(record),
        })}
        tableAlertOptionRender={tableAlertOptionRender}
      />

      <ModalAddOrEdit />
    </BasePageContainer>
  );
};

export default PagePost;
