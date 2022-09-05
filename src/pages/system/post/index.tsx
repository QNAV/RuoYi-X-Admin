import { CCreateTime, CEnableDisableStatus, CPostCode, CPostId, CPostName, CPostSort, CRemark } from '@/columns';
import ButtonAdd from '@/pages/system/post/components/ButtonAdd';
import ButtonEdit from '@/pages/system/post/components/ButtonEdit';
import ButtonRemove from '@/pages/system/post/components/ButtonRemove';
import ModalAddOrEdit from '@/pages/system/post/components/ModalAddOrEdit';
import { useMainTableActionRef } from '@/pages/system/post/model';
import { SysPostPostList } from '@/services/sys/SysPostService';
import type { ProItem } from '@/types';
import { convertParams } from '@/utils';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import type { FC } from 'react';

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
  const actionRef = useMainTableActionRef();

  return (
    <PageContainer>
      <ProTable
        actionRef={actionRef}
        rowKey="postId"
        request={(...p) => SysPostPostList(convertParams(...p))}
        columns={columns}
        toolbar={{
          actions: [<ButtonAdd key="ButtonAdd" />],
        }}
      />

      <ModalAddOrEdit />
    </PageContainer>
  );
};

export default PagePost;
