import type { ProItem } from '@/types';
import type { TreeData } from '@/utils';

// 部门名称
export const CDeptName: ProItem = {
  title: '部门名称',
  dataIndex: 'deptName',
  key: 'deptName',
  valueType: 'text',
};

// 负责人
export const CLeader: ProItem = {
  title: '负责人',
  dataIndex: 'leader',
  key: 'leader',
  valueType: 'text',
};

// 联系电话
export const CPhone: ProItem = {
  title: '联系电话',
  dataIndex: 'phone',
  key: 'phone',
  valueType: 'text',
};

// 邮箱
export const CEmail: ProItem = {
  title: '邮箱',
  dataIndex: 'email',
  key: 'email',
  valueType: 'text',
};

// 上级部门
export const genCDeptParentId = (treeData: TreeData[] = []): ProItem => {
  return {
    title: '上级部门',
    dataIndex: 'parentId',
    key: 'parentId',
    valueType: 'treeSelect',
    fieldProps: {
      treeData,
      dropdownMatchSelectWidth: 250,
      fieldNames: {
        value: 'id',
      },
    },
  };
};
