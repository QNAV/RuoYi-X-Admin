import { CCreateTime, CEnableDisableStatus, CPostCode, CPostId, CPostName, CPostSort, CRemark } from '@/columns';
import { BasePageContainer } from '@/components';
import ButtonAdd from '@/pages/system/post/components/ButtonAdd';
import ButtonEdit from '@/pages/system/post/components/ButtonEdit';
import type { SearchParams } from '@/pages/system/post/components/ButtonExport';
import ButtonExport from '@/pages/system/post/components/ButtonExport';
import ButtonRemove from '@/pages/system/post/components/ButtonRemove';
import ModalAddOrEdit from '@/pages/system/post/components/ModalAddOrEdit';
import { useMainTableActionRef } from '@/pages/system/post/model';
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

          <ButtonRemove postId={entity.postId} />
        </>
      );
    },
  },
];

const PagePost: FC = () => {
  const [searchParams, setSearchParams] = useState<SearchParams>({});

  const formRef = useRef<ProFormInstance<API.SysPostQueryBo>>();

  const actionRef = useMainTableActionRef();

  const tableAlertOptionRender: ProTableProps<any, any>['tableAlertOptionRender'] = ({ selectedRowKeys }) => {
    const disabled = selectedRowKeys.length === 0;

    return (
      <>
        <ButtonRemove disabled={disabled} isBatch postId={selectedRowKeys.join(',') as unknown as number} />

        <ButtonExport searchParams={searchParams} />
      </>
    );
  };

  return (
    <BasePageContainer>
      <ProTable<API.SysPostVo>
        formRef={formRef}
        actionRef={actionRef}
        rowKey="postId"
        request={async (...p) => {
          const params = convertParams(...p);
          setSearchParams(params);
          return await SysPostPostList(params);
        }}
        columns={columns}
        toolbar={{
          actions: [<ButtonAdd key="ButtonAdd" />],
        }}
        rowSelection={{
          alwaysShowAlert: true,
        }}
        tableAlertOptionRender={tableAlertOptionRender}
      />

      <ModalAddOrEdit />
    </BasePageContainer>
  );
};

export default PagePost;
