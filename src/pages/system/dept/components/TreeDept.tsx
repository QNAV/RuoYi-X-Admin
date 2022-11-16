import { EmptySimple } from '@/components';
import { EnableDisableStatus } from '@/constants';
import { useQueryDict } from '@/models';
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

        <Tag color={itemData.status === EnableDisableStatus.ENABLE ? 'success' : 'error'}>
          {itemData.status === EnableDisableStatus.ENABLE ? '启用中' : '已禁用'}
        </Tag>
      </Space>
    </>
  );
};

const TreeDept: FC = () => {
  const [expandedKeys, setExpandedKeys] = useState<TreeProps['expandedKeys']>([]);
  const [searchParams, setSearchParams] = useState<SysDeptQueryBo>({});

  const { data: dictSysNormalDisable } = useQueryDict('sys_normal_disable');

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

          <ProFormSelect
            name="status"
            label="状态"
            valueEnum={dictSysNormalDisable?.mapData ?? {}}
            initialValue={dictSysNormalDisable?.defaultValue}
          />
        </LightFilter>
      </div>

      {data?.treeData ? (
        <Spin spinning={isFetching}>
          <div className="h-[calc(100vh-270px)]">
            <Tree<any>
              blockNode
              showLine={{ showLeafIcon: false }}
              titleRender={titleRender}
              treeData={data.treeData}
              expandedKeys={expandedKeys}
              onExpand={setExpandedKeys}
              fieldNames={{
                title: 'deptName',
                key: 'deptId',
              }}
              onSelect={(selectedKeys, { selected, node: { key } }) => {
                if (!selected) return;

                showDeptDetails(key, data!.map.get(key)!.deptName);
              }}
            />
          </div>
        </Spin>
      ) : (
        <EmptySimple />
      )}
    </>
  );
};

export default TreeDept;
