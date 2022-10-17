import { EmptySimple } from '@/components';
import { useSetAtomSelectedDeptId } from '@/pages/system/user/model';
import { SysDeptPostTreeSelect } from '@/services/sys/SysDeptService';
import { useRequest } from 'ahooks';
import { Input, Spin, Tree } from 'antd';
import type { FC } from 'react';
import { useState } from 'react';

const TreeDept: FC = () => {
  const [deptName, setDeptName] = useState<string>('');
  const setRecoilSelectedDeptId = useSetAtomSelectedDeptId();

  const { data, loading } = useRequest(
    () =>
      SysDeptPostTreeSelect({
        deptName,
      }),
    {
      refreshDeps: [deptName],
    },
  );

  if (!data) {
    return <EmptySimple />;
  }

  return (
    <Spin spinning={loading}>
      <Input.Search
        allowClear
        placeholder="请输入部门名称"
        className="mb-3"
        onSearch={(e) => {
          setDeptName(e);
        }}
      />

      <Tree
        treeData={data}
        defaultExpandAll
        fieldNames={{
          title: 'label',
          key: 'id',
        }}
        onSelect={(_, { node: { key } }) => {
          setRecoilSelectedDeptId(key as number);
        }}
      />
    </Spin>
  );
};

export default TreeDept;
