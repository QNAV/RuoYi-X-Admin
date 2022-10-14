import type { ProItem } from '@/typings';

// 序号
export const CNoticeId: ProItem = {
  title: '序号',
  dataIndex: 'noticeId',
  key: 'noticeId',
  valueType: 'text',
  hideInSearch: true,
};

// 公共标题
export const CNoticeTitle: ProItem = {
  title: '公告标题',
  dataIndex: 'noticeTitle',
  key: 'noticeTitle',
  valueType: 'text',
};

// 公告类型
export const CNoticeType: ProItem = {
  title: '公告类型',
  dataIndex: 'noticeType',
  key: 'noticeType',
  valueType: 'select',
  valueEnum: {},
};
