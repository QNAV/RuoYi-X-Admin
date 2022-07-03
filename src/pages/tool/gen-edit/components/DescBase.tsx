import { CClassName, CFunctionAuthor, CRemark, CTableComment, CTableName } from '@/columns';
import type { GenTableRes } from '@/pages/tool/gen-edit/data';
import { ProDescriptions } from '@ant-design/pro-components';
import type { FC } from 'react';

const DescBase: FC<{
  dataSource?: GenTableRes;
  handleEdit: (p: Partial<API.GenTableReq>) => Promise<void>;
}> = ({ dataSource, handleEdit }) => {
  return (
    <ProDescriptions
      dataSource={dataSource}
      columns={[CTableName, CTableComment, CClassName, CFunctionAuthor, CRemark]}
      editable={{
        onSave: async (k, record) => {
          const key = k as keyof Omit<API.GenTableReq, 'tableId'>;

          await handleEdit({ [key]: record[key] });
        },
      }}
    />
  );
};

export default DescBase;
