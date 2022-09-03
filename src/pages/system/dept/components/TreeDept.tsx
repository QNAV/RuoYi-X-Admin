import type { DeptItemData } from '@/pages/system/dept/model';
import { useHideDetails, useQueryDeptList, useSetSelectedDeptId } from '@/pages/system/dept/model';
import type { TreeProps } from 'antd';
import { Spin, Tag, Tree } from 'antd';
import type { FC } from 'react';

const titleRender: TreeProps<any>['titleRender'] = (item: DeptItemData) => {
  return (
    <>
      <Tag color="rgb(148 163 184)">{item.orderNum}</Tag>

      {item.deptName}
    </>
  );
};

const TreeDept: FC = () => {
  const { data, isFetching } = useQueryDeptList();
  const setSelectedDeptId = useSetSelectedDeptId();
  const hideDetails = useHideDetails();

  if (!data?.treeData) {
    return null;
  }

  return (
    <Spin spinning={isFetching}>
      <Tree<any>
        blockNode
        defaultExpandAll
        showLine={{ showLeafIcon: false }}
        titleRender={titleRender}
        treeData={data?.treeData ?? []}
        fieldNames={{
          title: 'deptName',
          key: 'deptId',
          children: 'children',
        }}
        onSelect={(selectedKeys, { selected, node: { key } }) => {
          if (selected) {
            setSelectedDeptId(key);

            return;
          }

          hideDetails();
        }}
      />
    </Spin>
  );
};

export default TreeDept;
