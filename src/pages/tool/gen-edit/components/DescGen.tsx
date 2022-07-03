import { CBusinessName, CFunctionName, CGenPath, CGenType, CModuleName, CPackageName, CTplCategory } from '@/columns';
import { GenType } from '@/constants';
import type { GenTableRes } from '@/pages/tool/gen-edit/data';
import { ProDescriptions } from '@ant-design/pro-components';
import type { FC } from 'react';

const DescGen: FC<{
  dataSource?: GenTableRes;
  handleEdit: (p: Partial<API.GenTableReq>) => Promise<void>;
}> = ({ dataSource, handleEdit }) => {
  return (
    <ProDescriptions
      columns={[
        CTplCategory,
        CPackageName,
        CModuleName,
        CBusinessName,
        CFunctionName,
        CGenType,
        ...(dataSource?.genType === GenType.ZIP ? [] : [CGenPath]),
      ]}
      dataSource={dataSource}
      editable={{
        onSave: async (k, record) => {
          const key = k as keyof Omit<API.GenTableReq, 'tableId'>;

          await handleEdit({ [key]: record[key] });
        },
      }}
    />
  );
};

export default DescGen;
