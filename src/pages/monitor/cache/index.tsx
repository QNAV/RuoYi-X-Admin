import { BasePageContainer } from '@/components';
import Descriptions from '@/pages/monitor/cache/components/Descriptions';
import PieCommandStats from '@/pages/monitor/cache/components/PieCommandStats';
import PieUsedMemory from '@/pages/monitor/cache/components/PieUsedMemory';
import { cacheGetInfo } from '@/services/system/Monitor';
import { ReloadOutlined } from '@ant-design/icons';
import { ProCard } from '@ant-design/pro-components';
import { useRequest } from 'ahooks';
import { Button, Spin } from 'antd';
import type { FC } from 'react';

const colSpan = {
  xxl: 12,
  xl: 12,
  lg: 12,
  md: 24,
  sm: 24,
  xs: 24,
};

const getInfo = async () => {
  const { dbSize, info, commandStats } = await cacheGetInfo();

  return {
    info: {
      ...info,
      dbSize: dbSize!,
    },
    commandStats: commandStats?.map((i) => ({
      name: i.name,
      value: Number(i.value),
    })),
    used_memory_human: info?.used_memory_human ? parseFloat(info.used_memory_human as unknown as string) : 0,
  };
};

const PageCache: FC = () => {
  const { data, loading, refresh } = useRequest(getInfo);

  return (
    <BasePageContainer>
      <Spin spinning={loading}>
        <ProCard ghost wrap gutter={[16, 16]}>
          <ProCard
            title="基本信息"
            colSpan={24}
            extra={<Button key="reload" type="text" icon={<ReloadOutlined />} onClick={refresh} />}
          >
            <Descriptions dataSource={data?.info} />
          </ProCard>

          <ProCard title="命令统计" colSpan={colSpan}>
            <PieCommandStats data={data?.commandStats} />
          </ProCard>

          <ProCard title="内存信息" colSpan={colSpan}>
            <PieUsedMemory data={data?.used_memory_human} />
          </ProCard>
        </ProCard>
      </Spin>
    </BasePageContainer>
  );
};

export default PageCache;
