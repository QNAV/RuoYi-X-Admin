import { EmptySimple } from '@/components';
import { EnableDisableStatus, EnableDisableStatusMap } from '@/constants';
import {
  useHandleSearchDeptList,
  useHideDeptDetails,
  useQueryDeptList,
  useShowDeptDetails,
} from '@/pages/system/dept/model';
import { CaretDownOutlined, CaretRightOutlined } from '@ant-design/icons';
import { LightFilter, ProFormSelect, ProFormText } from '@ant-design/pro-components';
import type { TreeProps } from 'antd';
import { Button, Space, Spin, Tag, Tree } from 'antd';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

const titleRender: TreeProps<any>['titleRender'] = (item: API.SysDeptVo) => {
  return (
    <>
      <Tag color="rgb(148 163 184)">{item.orderNum}</Tag>

      <Space>
        {item.deptName}

        <Tag color={item.status === EnableDisableStatus.ENABLE ? 'success' : 'error'}>
          {item.status === EnableDisableStatus.ENABLE ? '启用中' : '已禁用'}
        </Tag>
      </Space>
    </>
  );
};

const TreeDept: FC = () => {
  const [expandedKeys, setExpandedKeys] = useState<TreeProps['expandedKeys']>([]);

  const handleSearchDeptList = useHandleSearchDeptList();

  const { data, isFetching } = useQueryDeptList();

  const showDeptDetails = useShowDeptDetails();
  const hideDeptDetails = useHideDeptDetails();

  const isAllExpanded = expandedKeys?.length !== 0 && expandedKeys?.length === data?.allParentIds?.length;

  useEffect(() => {
    if (data?.allParentIds) {
      setExpandedKeys(data.allParentIds);
    }
  }, [data?.allParentIds]);

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

        <LightFilter<API.SysDeptQueryBo>
          onFinish={async (values) => {
            handleSearchDeptList(values);
          }}
        >
          <ProFormText name="deptName" label="部门名称" />

          <ProFormSelect name="status" label="状态" valueEnum={EnableDisableStatusMap} />
        </LightFilter>
      </div>

      {data?.treeData ? (
        <Spin spinning={isFetching}>
          <Tree<any>
            blockNode
            showLine={{ showLeafIcon: false }}
            titleRender={titleRender}
            treeData={data?.treeData ?? []}
            expandedKeys={expandedKeys}
            onExpand={setExpandedKeys}
            fieldNames={{
              title: 'deptName',
              key: 'deptId',
              children: 'children',
            }}
            onSelect={(selectedKeys, { selected, node: { key } }) => {
              if (selected) {
                showDeptDetails({
                  visible: true,
                  deptId: key,
                  deptName: data!.data.find((item) => item.deptId === key)!.deptName,
                });
                return;
              }

              hideDeptDetails();
            }}
          />
        </Spin>
      ) : (
        <EmptySimple />
      )}
    </>
  );
};

export default TreeDept;
