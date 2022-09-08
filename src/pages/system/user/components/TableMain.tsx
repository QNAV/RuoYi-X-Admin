import { CCreateTime, CEnableDisableStatus, CNickName, CUserDeptName, CUserId, CUserName, CUserPhone } from '@/columns';
import ButtonAdd from '@/pages/system/user/components/ButtonAdd';
import { useMainTableActionRef, useRecoilValueSelectedDeptId } from '@/pages/system/user/model';
import { SysUserPostList } from '@/services/sys/SysUserService';
import { convertParams } from '@/utils';
import { ProTable } from '@ant-design/pro-components';
import type { FC } from 'react';

const columns = [CUserId, CUserName, CNickName, CUserDeptName, CUserPhone, CEnableDisableStatus, CCreateTime];

const TableMain: FC = () => {
  const mainTableActionRef = useMainTableActionRef();
  const recoilValueSelectedDeptId = useRecoilValueSelectedDeptId();
  const params = recoilValueSelectedDeptId > 0 ? { deptId: recoilValueSelectedDeptId } : {};

  return (
    <ProTable
      rowKey="userId"
      actionRef={mainTableActionRef}
      columns={columns}
      params={params}
      search={{
        span: {
          xs: 24,
          sm: 24,
          md: 12,
          lg: 12,
          xl: 12,
          xxl: 6,
        },
      }}
      request={(...p) => SysUserPostList(convertParams(...p))}
      toolbar={{
        actions: [<ButtonAdd key="ButtonAdd" />],
      }}
    />
  );
};

export default TableMain;
