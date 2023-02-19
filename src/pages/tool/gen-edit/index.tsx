import { BasePageContainer } from '@/components';
import DescBase from '@/pages/tool/gen-edit/components/DescBase';
import EditableTableField from '@/pages/tool/gen-edit/components/EditableTableField';
import type { GenTable } from '@/services/gen/data-contracts';
import { genGetInfo, genPostEdit } from '@/services/gen/Tool';
import { ProCard } from '@ant-design/pro-components';
import { useMutation } from '@tanstack/react-query';
import { useRequest } from 'ahooks';
import { App } from 'antd';
import type { FC } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

enum TabKey {
  BASE_INFO = 'BASE_INFO',
  FIELD_INFO = 'FIELD_INFO',
}

const TabName = {
  [TabKey.BASE_INFO]: '基本信息',
  [TabKey.FIELD_INFO]: '字段信息',
};

const GenEditPage: FC = () => {
  const params = useParams();
  const tableId = Number(params?.tableId ?? '0') as number;

  const { message } = App.useApp();

  const [tab, setTab] = useState<TabKey>(TabKey.BASE_INFO);

  const { data, refresh } = useRequest(() => genGetInfo({ tableId }), {
    ready: tableId > 0,
    refreshDeps: [tableId],
  });

  const { mutateAsync, isLoading } = useMutation(
    async (params: Partial<GenTable>) => {
      await genPostEdit({
        tableId,
        businessName: data!.info.businessName,
        functionName: data!.info.functionName,
        className: data!.info.className,
        functionAuthor: data!.info.functionAuthor,
        moduleName: data!.info.moduleName,
        packageName: data!.info.packageName,
        tableComment: data!.info.tableComment,
        tableName: data!.info.tableName,
        columns: data!.rows,
        ...params,
      });
    },
    {
      onSuccess: () => {
        refresh();
        message.success('保存成功');
      },
    },
  );

  return (
    <BasePageContainer>
      <ProCard
        tabs={{
          items: [
            {
              label: TabName[TabKey.BASE_INFO],
              key: TabKey.BASE_INFO,
              children: <DescBase dataSource={data?.info} handleEdit={mutateAsync} />,
            },
            {
              label: TabName[TabKey.FIELD_INFO],
              key: TabKey.FIELD_INFO,
              children: <EditableTableField dataSource={data?.rows} handleEdit={mutateAsync} loading={isLoading} />,
            },
          ],
          activeKey: tab,
          onChange: (key) => {
            setTab(key as TabKey);
          },
        }}
      />
    </BasePageContainer>
  );
};

export default GenEditPage;
