import { generateColumns, regEmail } from '@/utils';

// 用户编号
export const [TUserId, FUserId, DUserId] = generateColumns({
  dataIndex: 'userId',
  key: 'userId',
  title: '用户编号',
  valueType: 'text',
  editable: false,
  hideInSearch: true,
});

// 用户名称
export const [TUserName, FUserName, DUserName] = generateColumns({
  dataIndex: 'userName',
  key: 'userName',
  title: '用户名称',
  valueType: 'text',
});

// 用户昵称
export const [TEmail, FEmail, DEmail] = generateColumns({
  dataIndex: 'email',
  title: '邮箱',
  valueType: 'text',
  hideInSearch: true,
  formItemProps: {
    rules: [
      {
        required: true,
        message: '请输入邮箱',
      },
      {
        pattern: regEmail,
        message: '邮箱格式错误',
      },
    ],
  },
});

// 邮箱
export const [TNickName, FNickName, DNickName] = generateColumns({
  dataIndex: 'nickName',
  key: 'nickName',
  title: '用户昵称',
  valueType: 'text',
  hideInSearch: true,
});

// 部门名称
export const [TDeptDeptName, FDeptDeptName, DDeptDeptName] = generateColumns({
  dataIndex: ['dept', 'deptName'],
  key: 'deptDeptName',
  title: '部门名称',
  valueType: 'text',
  hideInSearch: true,
});

// 手机号码
export const [TPhoneNumber, FPhoneNumber, DPhoneNumber] = generateColumns(
  {
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
    title: '手机号码',
    valueType: 'text',
  },
  {
    table: { copyable: true },
  },
);
