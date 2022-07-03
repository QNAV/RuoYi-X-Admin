import {
  CBusinessName,
  CClassName,
  CFunctionAuthor,
  CFunctionName,
  CGenPath,
  CGenType,
  CModuleName,
  CPackageName,
  CRemark,
  CTableComment,
  CTableName,
  CTplCategory,
} from '@/columns';
import { GenType } from '@/constants';
import type { GenTableRes } from '@/pages/tool/gen-edit/data';
import type { ProDescriptionsProps } from '@ant-design/pro-components';
import { ProDescriptions } from '@ant-design/pro-components';
import { Divider } from 'antd';
import type { FC } from 'react';

const DescBase: FC<{
  dataSource?: GenTableRes;
  handleEdit: (p: Partial<API.GenTableReq>) => Promise<void>;
}> = ({ dataSource, handleEdit }) => {
  const editable: ProDescriptionsProps['editable'] = {
    onSave: async (k, record) => {
      const key = k as keyof Omit<API.GenTableReq, 'tableId'>;

      await handleEdit({ [key]: record[key] });
    },
  };

  return (
    <>
      <ProDescriptions
        dataSource={dataSource}
        columns={[CTableName, CTableComment, CClassName, CFunctionAuthor, CRemark]}
        editable={editable}
      />

      <Divider />

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
        editable={editable}
      />
    </>
  );
};

export default DescBase;
