import { CCreateTime, CCreateTimeRange } from '@/columns';
import { useQueryDict } from '@/models';
import ButtonEdit from '@/pages/system/user/components/ButtonEdit';
import ButtonRemove from '@/pages/system/user/components/ButtonRemove';
import ButtonResetPwd from '@/pages/system/user/components/ButtonResetPwd';
import { getColumn } from '@/utils';

// 用户编号
const CUserId = getColumn('table', {
  dataIndex: 'userId',
  key: 'userId',
  title: '用户编号',
  valueType: 'text',
  editable: false,
  hideInSearch: true,
});

// 用户名称
const CUserName = getColumn('table', {
  dataIndex: 'userName',
  key: 'userName',
  title: '用户名称',
  valueType: 'text',
});

// 用户昵称
const CNickName = getColumn('table', {
  dataIndex: 'nickName',
  key: 'nickName',
  title: '用户昵称',
  valueType: 'text',
  hideInSearch: true,
});

// 部门名称
const CUserDeptName = getColumn('table', {
  dataIndex: ['dept', 'deptName'],
  key: 'deptDeptName',
  title: '部门名称',
  valueType: 'text',
  hideInSearch: true,
});

// 手机号码
const CUserPhone = getColumn('table', {
  dataIndex: 'phoneNumber',
  key: 'phoneNumber',
  title: '手机号码',
  valueType: 'text',
  copyable: true,
});

// 启用禁用状态
const useCStatusNormalDisable = () => {
  const { data } = useQueryDict('sys_normal_disable');
  return getColumn('table', {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    valueType: 'select',
    valueEnum: data ?? {},
  });
};

// 操作
const COption = getColumn('table', {
  title: '操作',
  valueType: 'option',
  fixed: 'right',
  width: 300,
  render: (dom, entity: API.SysUserVo) => {
    return (
      <>
        <ButtonEdit record={entity} />

        <ButtonRemove userId={entity.userId} userName={entity.userName} />

        <ButtonResetPwd record={entity} />
      </>
    );
  },
});

export const useTableColumns = () => {
  return [
    CUserId,
    CUserName,
    CNickName,
    CUserDeptName,
    CUserPhone,
    useCStatusNormalDisable(),
    CCreateTime,
    COption,
    CCreateTimeRange,
  ];
};
