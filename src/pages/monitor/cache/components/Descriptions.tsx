import type { ProDescriptionsItemProps } from '@ant-design/pro-components';
import { ProDescriptions } from '@ant-design/pro-components';
import type { FC } from 'react';

const columns: ProDescriptionsItemProps[] = [
  // Redis 版本
  {
    dataIndex: 'redis_version',
    title: 'Redis 版本',
    valueType: 'text',
  },
  // 运行模式
  {
    dataIndex: 'redis_mode',
    title: '运行模式',
    valueType: 'text',
    renderText: (text) => (text === 'standalone' ? '单机' : '集群'),
  },
  // 端口
  {
    dataIndex: 'tcp_port',
    title: '端口',
    valueType: 'text',
  },
  // 客户端数
  {
    dataIndex: 'connected_clients',
    title: '客户端数',
    valueType: 'text',
  },
  // 运行时间（天）
  {
    dataIndex: 'uptime_in_days',
    title: '运行时间（天）',
    valueType: 'text',
  },
  // 使用内存
  {
    dataIndex: 'used_memory_human',
    title: '使用内存',
    valueType: 'text',
  },
  // 使用 CPU
  {
    dataIndex: 'used_cpu_user_children',
    title: '使用 CPU',
    valueType: 'text',
    renderText: (text) => parseFloat(text).toFixed(2),
  },
  // 内存配置
  {
    dataIndex: 'maxmemory_human',
    title: '内存配置',
    valueType: 'text',
  },
  // AOF 是否开启
  {
    dataIndex: 'aof_enabled',
    title: 'AOF 是否开启',
    valueType: 'text',
    renderText: (text) => (text === '0' ? '否' : '是'),
  },
  // RDB 是否成功
  {
    dataIndex: 'rdb_last_bgsave_status',
    title: 'RDB 是否成功',
    valueType: 'text',
  },
  // Key 数量
  {
    dataIndex: 'dbSize',
    title: 'Key 数量',
    valueType: 'text',
  },
  // 网络入口/出口
  {
    dataIndex: 'instantaneous_input_kbps',
    title: '网络入口/出口',
    valueType: 'text',
    renderText: (text, record) => `${record.instantaneous_input_kbps}kps/${record.instantaneous_output_kbps}kps`,
  },
];

const column = {
  xxl: 4,
  xl: 4,
  lg: 3,
  md: 3,
  sm: 2,
  xs: 1,
};

const Descriptions: FC<{ dataSource?: Record<string, string> }> = ({ dataSource = {} }) => {
  return <ProDescriptions columns={columns} column={column} dataSource={dataSource} />;
};

export default Descriptions;
