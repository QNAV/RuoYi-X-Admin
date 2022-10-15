import { EnableDisableStatusMap } from '@/constants';
import ButtonRemove from '@/pages/monitor/logininfor/components/ButtonRemove';
import { getColumn } from '@/utils';

// 访问编号
const CInfoId = getColumn('table', {
  title: '访问编号',
  dataIndex: 'infoId',
  key: 'infoId',
  valueType: 'text',
  hideInSearch: true,
});

// 用户名称
const CUserName = getColumn('table', {
  title: '用户名称',
  dataIndex: 'userName',
  key: 'userName',
  valueType: 'text',
});

// 登录地址
const CIpaddr = getColumn('table', {
  title: '登录地址',
  dataIndex: 'ipaddr',
  key: 'ipaddr',
  valueType: 'text',
});

// 登录地点
const CLoginLocation = getColumn('table', {
  title: '登录地点',
  dataIndex: 'loginLocation',
  key: 'loginLocation',
  valueType: 'text',
  hideInSearch: true,
});

// 浏览器
const CBrowser = getColumn('table', {
  title: '浏览器',
  dataIndex: 'browser',
  key: 'browser',
  valueType: 'text',
  hideInSearch: true,
});

// 操作系统
const COs = getColumn('table', {
  title: '操作系统',
  dataIndex: 'os',
  key: 'os',
  valueType: 'text',
  hideInSearch: true,
});

// 操作信息
const CMsg = getColumn('table', {
  title: '操作信息',
  dataIndex: 'msg',
  key: 'msg',
  valueType: 'text',
  hideInSearch: true,
});

const CStatus = getColumn('table', {
  title: '操作状态',
  dataIndex: 'status',
  key: 'status',
  valueType: 'select',
  valueEnum: EnableDisableStatusMap,
});

// 登录日期
const CLoginTime = getColumn('table', {
  title: '登录日期',
  dataIndex: 'loginTime',
  key: 'loginTime',
  valueType: 'dateTime',
  hideInSearch: true,
});

// 操作
const COption = getColumn('table', {
  title: '操作',
  dataIndex: 'option',
  key: 'option',
  valueType: 'option',
  fixed: 'right',
  render: (dom, entity) => {
    return <ButtonRemove infoId={entity.infoId} />;
  },
});

export const useTableColumns = () => {
  return [CInfoId, CUserName, CIpaddr, CLoginLocation, CBrowser, COs, CStatus, CMsg, CLoginTime, COption];
};
