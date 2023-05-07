import { genColumnItem } from '@/utils';
import { DeleteOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { Button } from 'antd';

// cacheName 缓存名称
const [ColumnItemTableCacheName, ColumnItemDescriptionsCacheName] = genColumnItem({
  title: '缓存名称',
  dataIndex: 'cacheName',
  table: {
    valueType: 'text',
    ellipsis: true,
  },
  descriptions: {
    valueType: 'text',
    copyable: true,
  },
});

// cacheKey 缓存键名
const [ColumnItemTableCacheKey, ColumnItemDescriptionsCacheKey] = genColumnItem({
  title: '缓存键名',
  dataIndex: 'cacheKey',
  table: {
    valueType: 'text',
    ellipsis: true,
  },
  descriptions: {
    valueType: 'text',
    copyable: true,
  },
});

// cacheValue 缓存内容
const [, ColumnItemDescriptionsCacheValue] = genColumnItem({
  title: '缓存内容',
  dataIndex: 'cacheValue',
  descriptions: {
    valueType: 'text',
    copyable: true,
  },
});

// remark 备注
const [ColumnItemTableRemark, ColumnItemDescriptionsRemark] = genColumnItem({
  title: '备注',
  dataIndex: 'remark',
  table: {
    valueType: 'text',
  },
  descriptions: {
    valueType: 'text',
  },
});

export const useCacheNameTableColumns = (onDelete: (cacheName: string) => void): ProColumns[] => {
  return [
    { title: '序号', valueType: 'indexBorder', width: 50 },
    ColumnItemTableCacheName,
    ColumnItemTableRemark,
    {
      title: '操作',
      valueType: 'option',
      width: 50,
      render: (_dom, entity) => {
        return (
          <Button
            type="text"
            danger
            icon={<DeleteOutlined />}
            onClick={(e) => {
              e.stopPropagation();

              onDelete(entity.cacheName);
            }}
          />
        );
      },
    },
  ];
};

export const useCacheKeyTableColumns = (onDelete: (cacheKey: string) => void): ProColumns[] => {
  return [
    { title: '序号', valueType: 'indexBorder', width: 50 },
    ColumnItemTableCacheKey,
    {
      title: '操作',
      valueType: 'option',
      width: 50,
      render: (_dom, entity) => {
        return (
          <Button
            type="text"
            danger
            icon={<DeleteOutlined />}
            onClick={(e) => {
              e.stopPropagation();
              onDelete(entity.cacheKey);
            }}
          />
        );
      },
    },
  ];
};

export const descriptionsColumns = [
  ColumnItemDescriptionsCacheName,
  ColumnItemDescriptionsCacheKey,
  ColumnItemDescriptionsCacheValue,
  ColumnItemDescriptionsRemark,
];
