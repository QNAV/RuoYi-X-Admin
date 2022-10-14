import { YNStatusMap } from '@/constants';
import type { ProItem } from '@/typings';

// 参数主键
export const CConfigId: ProItem = {
  title: '参数主键',
  dataIndex: 'configId',
  key: 'configId',
  valueType: 'text',
  hideInSearch: true,
};

// 参数名称
export const CConfigName: ProItem = {
  title: '参数名称',
  dataIndex: 'configName',
  key: 'configName',
  valueType: 'text',
};

// 参数键名
export const CConfigKey: ProItem = {
  title: '参数键名',
  dataIndex: 'configKey',
  key: 'configKey',
  valueType: 'text',
};

// 参数键值
export const CConfigValue: ProItem = {
  title: '参数键值',
  dataIndex: 'configValue',
  key: 'configValue',
  valueType: 'text',
  hideInSearch: true,
};

// 系统内置（Y是 N否）
export const CConfigType: ProItem = {
  title: '系统内置',
  dataIndex: 'configType',
  key: 'configType',
  valueType: 'select',
  valueEnum: YNStatusMap,
};
