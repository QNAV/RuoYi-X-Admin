import { GenType, GenTypeMap, TemplateTypeMap } from '@/constants';
import type { GenTableReq, GenTableRes } from '@/services/gen/data-contracts';
import type { ProDescriptionsProps } from '@ant-design/pro-components';
import { ProDescriptions } from '@ant-design/pro-components';
import { Divider } from 'antd';
import type { FC } from 'react';

const DescBase: FC<{
  dataSource?: GenTableRes;
  handleEdit: (p: Partial<GenTableReq>) => Promise<void>;
}> = ({ dataSource, handleEdit }) => {
  const editable: ProDescriptionsProps['editable'] = {
    onSave: async (k, record) => {
      const key = k as keyof Omit<GenTableReq, 'tableId'>;

      await handleEdit({ [key]: record[key] });
    },
  };

  return (
    <>
      <ProDescriptions
        dataSource={dataSource}
        columns={[
          { title: '表名称', dataIndex: 'tableName', key: 'tableName', valueType: 'text' },
          { title: '表描述', dataIndex: 'tableComment', key: 'tableComment', valueType: 'text' },
          { title: '实体名称', dataIndex: 'className', key: 'className', valueType: 'text', hideInSearch: true },
          { title: '作者', dataIndex: 'functionAuthor', key: 'functionAuthor', valueType: 'text' },
          { title: '备注', dataIndex: 'remark', key: 'remark', valueType: 'textarea', hideInSearch: true },
        ]}
        editable={editable}
      />

      <Divider />

      <ProDescriptions
        columns={[
          {
            title: '生成模版',
            dataIndex: 'tplCategory',
            key: 'tplCategory',
            valueType: 'select',
            valueEnum: TemplateTypeMap,
          },
          { title: '生成包路径', dataIndex: 'packageName', key: 'packageName', valueType: 'text' },
          { title: '生成模块名', dataIndex: 'moduleName', key: 'moduleName', valueType: 'text' },
          { title: '生成业务名', dataIndex: 'businessName', key: 'businessName', valueType: 'text' },
          { title: '生成功能名', dataIndex: 'functionName', key: 'functionName', valueType: 'text' },
          { title: '生成代码方式', dataIndex: 'genType', key: 'genType', valueType: 'select', valueEnum: GenTypeMap },
          ...(dataSource?.genType === GenType.ZIP
            ? []
            : [{ title: '自定义路径', dataIndex: 'genPath', key: 'genPath', valueType: 'text' }]),
        ]}
        dataSource={dataSource}
        editable={editable}
      />
    </>
  );
};

export default DescBase;
