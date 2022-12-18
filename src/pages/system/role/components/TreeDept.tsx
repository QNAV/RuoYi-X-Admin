import { EmptySimple } from '@/components';
import { OptionsDataScope } from '@/constants';
import { AccessWithState } from '@/features';
import { useAtomValueRoleDetails, useQueryRoleDetails } from '@/pages/system/role/model';
import { sysDeptGetRoleDeptTreeSelect, sysRolePostDataScope } from '@/services/system/System';
import type { TreeData } from '@/utils';
import { filterCheckedTree, getExpandedKeys, getMenuIds } from '@/utils';
import { CaretDownOutlined, CaretRightOutlined, EditOutlined, SaveOutlined } from '@ant-design/icons';
import type { ProFormInstance } from '@ant-design/pro-components';
import { ProForm, ProFormSelect } from '@ant-design/pro-components';
import { useMutation } from '@tanstack/react-query';
import { useRequest } from 'ahooks';
import { Button, Checkbox, message, Space, Spin, Tree } from 'antd';
import type { FC, Key } from 'react';
import { useEffect, useRef, useState } from 'react';

const TreeDept: FC = () => {
  const [checkedKeys, setCheckedKeys] = useState<number[]>([]);
  const [checkable, setCheckable] = useState(false);
  const [expandedKeys, setExpandedKeys] = useState<Key[]>([]);
  const [treeData, setTreeData] = useState<TreeData[]>([]);
  const [checkAll, setCheckAll] = useState(false);
  const [indeterminate, setIndeterminate] = useState(true);

  const [dataScope, setDataScope] = useState<string>();
  const formRef = useRef<ProFormInstance>();

  const { open, roleId } = useAtomValueRoleDetails();

  const { refetch } = useQueryRoleDetails(({ dataScope }) => {
    setDataScope(dataScope);
    formRef.current?.setFieldsValue({ dataScope });
  });

  const { loading, refresh, data } = useRequest(
    async () => {
      const { depts, checkedKeys } = (await sysDeptGetRoleDeptTreeSelect({ roleId })) as unknown as {
        depts: TreeData[];
        checkedKeys: number[];
      };

      return {
        treeData: depts,
        selectedMenuIds: checkedKeys,
        selectedTreeData: filterCheckedTree(depts, checkedKeys),
        allMenuIds: getMenuIds(depts),
        allExpandedKeys: getExpandedKeys(depts),
      };
    },
    {
      ready: open,
      refreshDeps: [roleId],
      onSuccess: (res) => {
        setCheckable(false);
        setTreeData(res.selectedTreeData);
      },
    },
  );

  const { isLoading, mutate } = useMutation(
    async () => {
      await sysRolePostDataScope({
        roleId,
        dataScope,
        deptIds: checkedKeys,
      } as any);
    },
    {
      onSuccess: () => {
        refresh();
        refetch();
        message.success('保存成功');
      },
    },
  );

  const isAllExpanded = expandedKeys.length === data?.allExpandedKeys.length;

  // 全选/全不选
  const handleCheckedAllChange = (checked: boolean) => {
    if (checked || indeterminate) {
      setCheckedKeys(data?.allMenuIds ?? []);
      return;
    }

    setCheckedKeys([]);
  };

  useEffect(() => {
    if (data?.allMenuIds.length === checkedKeys.length) {
      setCheckAll(true);
      setIndeterminate(false);
      return;
    }

    if (checkedKeys.length === 0) {
      setCheckAll(false);
      setIndeterminate(false);
      return;
    }

    setIndeterminate(true);
  }, [data?.allMenuIds, checkedKeys]);

  return (
    <>
      <header className="flex justify-between items-start flex-wrap">
        <ProForm formRef={formRef} submitter={false} layout="horizontal">
          <ProFormSelect
            name="dataScope"
            label="数据权限范围"
            fieldProps={{
              options: OptionsDataScope,
              onChange: (value) => {
                setDataScope(value);
              },
            }}
            readonly={!checkable}
          />
        </ProForm>

        <AccessWithState accessKey="system:role:edit">
          {checkable ? (
            <Space>
              <Button
                loading={isLoading}
                onClick={() => {
                  setCheckable(false);
                  setTreeData(data?.selectedTreeData ?? []);
                }}
              >
                取消编辑
              </Button>
              <Button type="primary" ghost icon={<SaveOutlined />} loading={isLoading} onClick={() => mutate()}>
                保存
              </Button>
            </Space>
          ) : (
            <Button
              type="primary"
              ghost
              icon={<EditOutlined />}
              onClick={() => {
                setCheckable(true);
                setCheckedKeys(data?.selectedMenuIds ?? []);
                setTreeData(data?.treeData ?? []);
              }}
            >
              编辑数据权限
            </Button>
          )}
        </AccessWithState>
      </header>

      {dataScope === '2' && (
        <>
          <Space wrap className="my-2">
            {treeData.length > 0 && (
              <Button
                size="small"
                icon={isAllExpanded ? <CaretDownOutlined /> : <CaretRightOutlined />}
                onClick={() => setExpandedKeys(isAllExpanded ? [] : data!.allExpandedKeys)}
              >
                {isAllExpanded ? '全部折叠' : '全部展开'}
              </Button>
            )}

            {checkable && (
              <Checkbox
                indeterminate={indeterminate}
                onChange={(e) => handleCheckedAllChange(e.target.checked)}
                checked={checkAll}
              >
                全选/全不选
              </Checkbox>
            )}
          </Space>
          <Spin spinning={loading}>
            {treeData.length > 0 ? (
              <Tree<any>
                blockNode
                showLine={{ showLeafIcon: false }}
                checkable={checkable}
                checkStrictly
                fieldNames={{
                  title: 'label',
                  key: 'id',
                }}
                checkedKeys={checkedKeys}
                treeData={treeData}
                expandedKeys={expandedKeys}
                onExpand={(keys) => setExpandedKeys(keys)}
                onCheck={(_) => {
                  setCheckedKeys((_ as { checked: number[]; halfChecked: number[] }).checked);
                }}
              />
            ) : (
              <EmptySimple description="暂未分配数据权限" />
            )}
          </Spin>
        </>
      )}
    </>
  );
};

export default TreeDept;
