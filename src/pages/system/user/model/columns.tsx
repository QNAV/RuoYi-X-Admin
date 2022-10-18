import { TCreateTime, TCreateTimeRange } from '@/columns';
import { useQueryDict } from '@/models';
import ButtonEdit from '@/pages/system/user/components/ButtonEdit';
import ButtonRemove from '@/pages/system/user/components/ButtonRemove';
import ButtonResetPwd from '@/pages/system/user/components/ButtonResetPwd';
import { generateColumns } from '@/utils';

// 用户编号
const [TUserId, FUserId, DUserId] = generateColumns({
  dataIndex: 'userId',
  key: 'userId',
  title: '用户编号',
  valueType: 'text',
  editable: false,
  hideInSearch: true,
});

// 用户名称
const [TUserName] = generateColumns({
  dataIndex: 'userName',
  key: 'userName',
  title: '用户名称',
  valueType: 'text',
});

// 用户昵称
const [TNickName] = generateColumns({
  dataIndex: 'nickName',
  key: 'nickName',
  title: '用户昵称',
  valueType: 'text',
  hideInSearch: true,
});

// 部门名称
const [TDeptDeptName] = generateColumns({
  dataIndex: ['dept', 'deptName'],
  key: 'deptDeptName',
  title: '部门名称',
  valueType: 'text',
  hideInSearch: true,
});

// 手机号码
const [TPhoneNumber] = generateColumns(
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

// 启用禁用状态
const useCStatusNormalDisable = () => {
  const { data } = useQueryDict('sys_normal_disable');
  return generateColumns({
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    valueType: 'select',
    valueEnum: data ?? {},
  });
};

// 操作
const COption = generateColumns(
  {
    title: '操作',
    valueType: 'option',
    render: (dom, entity: API.SysUserVo) => {
      return (
        <>
          <ButtonEdit record={entity} />

          <ButtonRemove userId={entity.userId} userName={entity.userName} />

          <ButtonResetPwd record={entity} />
        </>
      );
    },
  },
  {
    table: {
      fixed: 'right',
      width: 300,
    },
  },
);

export const useTableColumns = () => {
  return [
    TUserId,
    TUserName,
    TNickName,
    TDeptDeptName,
    TPhoneNumber,
    useCStatusNormalDisable(),
    TCreateTime,
    COption,
    TCreateTimeRange,
  ];
};
