import { EmptySimple } from '@/components';
import { useQueryDictSysNormalDisable } from '@/models';
import { useQueryDeptList, useShowDeptDetails } from '@/pages/system/dept/model';
import type { SysDeptQueryBo, SysDeptVo } from '@/services/system/data-contracts';
import { CaretDownOutlined, CaretRightOutlined } from '@ant-design/icons';
import { LightFilter, ProFormSelect, ProFormText } from '@ant-design/pro-components';
import type { TreeProps } from 'antd';
import { Button, Space, Spin, Tag, Tree } from 'antd';
import type { FC } from 'react';
import { useState } from 'react';

const titleRender: TreeProps<any>['titleRender'] = (itemData: SysDeptVo) => {
  return (
    <>
      <Tag color="rgb(148 163 184)">{itemData.orderNum}</Tag>

      <Space>
        {itemData.deptName}

        <Tag color={itemData.status === 'NORMAL' ? 'success' : 'error'}>
          {itemData.status === 'NORMAL' ? '启用中' : '已禁用'}
        </Tag>
      </Space>
    </>
  );
};

const TreeDept: FC = () => {
  const [expandedKeys, setExpandedKeys] = useState<TreeProps['expandedKeys']>([]);
  const [searchParams, setSearchParams] = useState<SysDeptQueryBo>({});

  const { valueEnumSysNormalDisable } = useQueryDictSysNormalDisable();

  const { data, isFetching } = useQueryDeptList(searchParams, {
    onSuccess: (allParentIds) => {
      setExpandedKeys(allParentIds);
    },
  });

  const showDeptDetails = useShowDeptDetails();

  const isAllExpanded = expandedKeys?.length !== 0 && expandedKeys?.length === data?.allParentIds?.length;

  return (
    <>
      <div className="flex justify-between items-center">
        <Button
          size="small"
          className="my-2"
          icon={isAllExpanded ? <CaretDownOutlined /> : <CaretRightOutlined />}
          onClick={() => setExpandedKeys(isAllExpanded ? [] : data?.allParentIds)}
        >
          {isAllExpanded ? '全部折叠' : '全部展开'}
        </Button>

        <LightFilter<SysDeptQueryBo> onFinish={async (values) => setSearchParams(values)}>
          <ProFormText name="deptName" label="部门名称" />

          <ProFormSelect name="status" label="状态" valueEnum={valueEnumSysNormalDisable} />
        </LightFilter>
      </div>

      <Spin spinning={isFetching}>
        {data?.treeData.length ? (
          <Tree<any>
            blockNode
            showLine={{ showLeafIcon: false }}
            titleRender={titleRender}
            treeData={data.treeData}
            expandedKeys={expandedKeys}
            onExpand={setExpandedKeys}
            height={700}
            fieldNames={{
              title: 'deptName',
              key: 'deptId',
            }}
            onSelect={(_selectedKeys, { selected, node: { key } }) => {
              if (!selected) return;

              showDeptDetails(key, data!.map.get(key)!.deptName);
            }}
          />
        ) : (
          <EmptySimple />
        )}
      </Spin>
    </>
  );
};

export default TreeDept;
