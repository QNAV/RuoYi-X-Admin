import { EnableDisableStatusMap } from '@/constants';
import ButtonRemove from '@/pages/monitor/logininfor/components/ButtonRemove';
import { generateColumns } from '@/utils';

// 访问编号
const [TInfoId, FInfoId, DInfoId] = generateColumns({
  title: '访问编号',
  dataIndex: 'infoId',
  key: 'infoId',
  valueType: 'text',
  hideInSearch: true,
});

// 用户名称
const [TUserName, FUserName, DUserName] = generateColumns({
  title: '用户名称',
  dataIndex: 'userName',
  key: 'userName',
  valueType: 'text',
});

// 登录地址
const [TIpaddr, FIpaddr, DIpaddr] = generateColumns({
  title: '登录地址',
  dataIndex: 'ipaddr',
  key: 'ipaddr',
  valueType: 'text',
});

// 登录地点
const [TLoginLocation, FLoginLocation, DLoginLocation] = generateColumns({
  title: '登录地点',
  dataIndex: 'loginLocation',
  key: 'loginLocation',
  valueType: 'text',
  hideInSearch: true,
});

// 浏览器
const [TBrowser, FBrowser, DBrowser] = generateColumns({
  title: '浏览器',
  dataIndex: 'browser',
  key: 'browser',
  valueType: 'text',
  hideInSearch: true,
});

// 操作系统
const [TOs, FOs, DOs] = generateColumns({
  title: '操作系统',
  dataIndex: 'os',
  key: 'os',
  valueType: 'text',
  hideInSearch: true,
});

// 操作信息
const [TMsg, FMsg, DMsg] = generateColumns({
  title: '操作信息',
  dataIndex: 'msg',
  key: 'msg',
  valueType: 'text',
  hideInSearch: true,
});

const [TStatus, FStatus, DStatus] = generateColumns({
  title: '操作状态',
  dataIndex: 'status',
  key: 'status',
  valueType: 'select',
  valueEnum: EnableDisableStatusMap,
});

// 登录日期
const [TLoginTime, FLoginTime, DLoginTime] = generateColumns({
  title: '登录日期',
  dataIndex: 'loginTime',
  key: 'loginTime',
  valueType: 'dateTime',
  hideInSearch: true,
});

// 操作
const COption = generateColumns(
  {
    title: '操作',
    dataIndex: 'option',
    key: 'option',
    valueType: 'option',
    render: (dom, entity) => {
      return <ButtonRemove infoId={entity.infoId} />;
    },
  },
  {
    table: {
      fixed: 'right',
    },
  },
);

export const useTableColumns = () => {
  return [TInfoId, TUserName, TIpaddr, TLoginLocation, TBrowser, TOs, TStatus, TMsg, TLoginTime, COption];
};
