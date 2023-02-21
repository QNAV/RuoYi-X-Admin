import { BasePageContainer, BaseProTable } from '@/components';
import {
  descriptionsColumns,
  useCacheKeyTableColumns,
  useCacheNameTableColumns,
} from '@/pages/monitor/cacheList/model';
import type { SysCache } from '@/services/system/data-contracts';
import {
  cacheDeleteClearCacheAll,
  cacheDeleteClearCacheKey,
  cacheDeleteClearCacheName,
  cacheGetCacheKeys,
  cacheGetCacheNames,
  cacheGetCacheValue,
} from '@/services/system/Monitor';
import { ClearOutlined, ReloadOutlined } from '@ant-design/icons';
import { ProCard, ProDescriptions } from '@ant-design/pro-components';
import { useMutation } from '@tanstack/react-query';
import { useRequest } from 'ahooks';
import { App, Button, Spin } from 'antd';
import type { FC } from 'react';
import { useState } from 'react';

const PageCacheList: FC = () => {
  const [cacheName, setCacheName] = useState<string>();
  const [cacheKey, setCacheKey] = useState<string>();

  const { message } = App.useApp();

  const { data: cacheNames, refresh: refreshCacheNames, loading: loadingCacheNames } = useRequest(cacheGetCacheNames);

  const {
    data: cacheKeys,
    refresh: refreshCacheKeys,
    loading: loadingCacheKeys,
    mutate: mutateCacheKeysData,
  } = useRequest(
    async () => {
      const e = await cacheGetCacheKeys(cacheName!);
      return e.map((cacheKey) => ({ cacheKey }));
    },
    {
      ready: !!cacheName,
      refreshDeps: [cacheName],
    },
  );

  const {
    data: cacheValues,
    mutate: mutateValuesData,
    loading: isLoadingValues,
  } = useRequest(() => cacheGetCacheValue(cacheName!, cacheKey!), {
    ready: !!cacheKey,
    refreshDeps: [cacheKey],
  });

  const { mutate: mutateNames, isLoading: isLoadingNames } = useMutation(async (name: string) => {
    await cacheDeleteClearCacheName(name);
    if (name === cacheName) {
      mutateCacheKeysData([]);
    }
    refreshCacheNames();
    message.success('操作成功');
  });

  const { mutate: mutateKeys, isLoading: isLoadingKeys } = useMutation(async (key: string) => {
    await cacheDeleteClearCacheKey(cacheName!, key);
    if (key === cacheKey) {
      mutateValuesData({});
    }
    refreshCacheKeys();
    message.success('操作成功');
  });

  const { mutate: mutateValues, isLoading: isLoadingValue } = useMutation(async () => {
    await cacheDeleteClearCacheAll();
    mutateValuesData({});
    message.success('操作成功');
  });

  const cacheNameTableColumns = useCacheNameTableColumns(mutateNames);
  const cacheKeyTableColumns = useCacheKeyTableColumns(mutateKeys);

  return (
    <BasePageContainer>
      <ProCard ghost gutter={[8, 8]}>
        <ProCard
          title="缓存列表"
          extra={[
            <Button
              key="Button"
              type="text"
              icon={<ReloadOutlined />}
              onClick={refreshCacheNames}
              loading={isLoadingNames}
            />,
          ]}
        >
          <BaseProTable<SysCache>
            rowKey="cacheName"
            ghost
            search={false}
            rowSelection={false}
            pagination={false}
            columns={cacheNameTableColumns}
            options={false}
            dataSource={cacheNames}
            scroll={{}}
            loading={loadingCacheNames}
            onRow={(record) => ({
              onClick: () => setCacheName(record.cacheName),
            })}
          />
        </ProCard>

        <ProCard
          title="键名列表"
          extra={[
            <Button
              key="Button"
              type="text"
              icon={<ReloadOutlined />}
              onClick={refreshCacheKeys}
              loading={isLoadingKeys}
            />,
          ]}
        >
          <BaseProTable<{
            cacheKey: string;
          }>
            rowKey="cacheKey"
            ghost
            search={false}
            rowSelection={false}
            pagination={false}
            columns={cacheKeyTableColumns}
            options={false}
            dataSource={cacheKeys}
            scroll={{}}
            loading={loadingCacheKeys}
            onRow={(record) => ({
              onClick: () => setCacheKey(record.cacheKey),
            })}
          />
        </ProCard>

        <ProCard
          title="缓存内容"
          extra={[
            <Button
              key="Button"
              type="text"
              icon={<ClearOutlined />}
              onClick={() => mutateValues()}
              loading={isLoadingValue}
            />,
          ]}
        >
          <Spin spinning={isLoadingValues}>
            <ProDescriptions column={1} columns={descriptionsColumns} dataSource={cacheValues} />
          </Spin>
        </ProCard>
      </ProCard>
    </BasePageContainer>
  );
};

export default PageCacheList;
