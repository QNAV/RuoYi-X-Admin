import {
  EnableDisableStatus,
  EnableDisableStatusMap,
  MenuType,
  MenuTypeMap,
  YesNoStatus,
  YesNoStatusMap,
} from '@/constants';
import {
  queryMenuListKey,
  useCreateModalVisibleValue,
  useHideCreateModal,
  useSelectedMenuIdValue,
  useShowCreateModal,
} from '@/pages/system/menu/model';
import { SysMenuPostAdd, SysMenuPostList } from '@/services/sys/SysMenuService';
import { parseSimpleTreeData, sortByOrderNum } from '@/utils';
import { Access, useAccess } from '@@/plugin-access';
import { PlusOutlined } from '@ant-design/icons';
import type { ProFormInstance } from '@ant-design/pro-components';
import {
  ProForm,
  ProFormCascader,
  ProFormDependency,
  ProFormDigit,
  ProFormGroup,
  ProFormRadio,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { useQueryClient } from '@tanstack/react-query';
import { useRequest } from 'ahooks';
import { Button, message, Modal } from 'antd';
import type { FC } from 'react';
import { useEffect, useRef } from 'react';

export interface OptionsParentId {
  menuId: number;
  menuName: string;
  children?: OptionsParentId[];
}

const getSelectedParentIds = (data: Record<string, API.SysMenu>, menuId: number): number[] => {
  const parentIds: number[] = [0];

  if (menuId === 0) {
    return parentIds;
  }

  const findParentId = (id: string) => {
    if (!data?.[id]) {
      return;
    }

    if (data?.[id]?.parentId) {
      findParentId(data[id].parentId.toString());
    }

    if (data[id].menuType !== MenuType.F) {
      parentIds.push(Number(id));
    }
  };

  findParentId(menuId.toString());

  return parentIds;
};

const getOptions = (data?: API.SysMenu0[]): OptionsParentId[] => {
  const formatOptions = (items: API.SysMenu0[]): OptionsParentId[] => {
    return items
      .filter((item) => item.menuType !== MenuType.F)
      .map(({ menuId, menuName, children }) => {
        return { menuId, menuName, children: children ? formatOptions(children) : [] };
      });
  };

  return [{ menuId: 0, menuName: '根目录', children: data ? formatOptions(data) : [] }];
};

const ButtonCreate: FC = () => {
  const formRef = useRef<ProFormInstance>();

  const access = useAccess();

  const showCreateModal = useShowCreateModal();
  const hideCreateModal = useHideCreateModal();
  const visible = useCreateModalVisibleValue();
  const queryClient = useQueryClient();

  const selectedMenuId = useSelectedMenuIdValue();

  const { data, refresh } = useRequest(async (params: API.SysMenuQueryBo = {}) => {
    const data = await SysMenuPostList(params);

    const treeData = parseSimpleTreeData(data, {
      id: 'menuId',
      pId: 'parentId',
      rootPId: null,
    }) as API.SysMenu[];

    return {
      options: getOptions(sortByOrderNum(treeData)),
      map: data.reduce((map, item) => {
        return { ...map, [item.menuId]: item };
      }, {}),
    };
  });

  useEffect(() => {
    if (formRef?.current?.setFieldsValue && data?.map) {
      formRef?.current?.setFieldsValue({ parentId: getSelectedParentIds(data?.map, selectedMenuId) });
    }
  }, [selectedMenuId, data?.map, formRef?.current]);

  return (
    <Access accessible={access.canAddSysMenu}>
      <Button type="primary" onClick={() => showCreateModal(true)} icon={<PlusOutlined />}>
        新建
      </Button>

      <Modal visible={visible} onCancel={hideCreateModal} title="新建菜单" footer={false} width={515}>
        <ProForm<API.SysMenu>
          onFinish={async (e) => {
            await SysMenuPostAdd(e);

            await queryClient.invalidateQueries(queryMenuListKey);

            hideCreateModal();

            refresh();

            formRef?.current?.resetFields();

            message.success('新建成功');
          }}
          formRef={formRef}
        >
          <ProFormCascader
            name="parentId"
            label="父级菜单"
            initialValue={getSelectedParentIds(data?.map ?? {}, selectedMenuId)}
            fieldProps={{
              options: data?.options,
              fieldNames: { label: 'menuName', value: 'menuId', children: 'children' },
              changeOnSelect: true,
            }}
            rules={[{ required: true, message: '请选择父级菜单' }]}
            transform={(value) => {
              return { parentId: value[value.length - 1] };
            }}
          />

          <ProFormRadio.Group
            name="menuType"
            label="菜单类型"
            valueEnum={MenuTypeMap}
            rules={[{ required: true, message: '请选择菜单类型' }]}
          />

          <ProFormDependency name={['menuType']}>
            {({ menuType }) => {
              if (!menuType) {
                return null;
              }

              return (
                <>
                  <ProFormGroup>
                    <ProFormText name="menuName" label="菜单名称" width="sm" rules={[{ required: true }]} />

                    <ProFormDigit
                      name="orderNum"
                      label="显示排序"
                      tooltip="默认数值为0，数值越大排序越靠后，数值相等按照创建时间先后排序"
                      rules={[{ required: true }]}
                      width="sm"
                      initialValue={0}
                    />
                  </ProFormGroup>

                  {menuType !== MenuType.F && (
                    <>
                      <ProFormGroup>
                        <ProFormRadio.Group
                          tooltip="选择停用则路由将不会出现在侧边栏，也不能被访问"
                          name="status"
                          label="菜单状态"
                          valueEnum={EnableDisableStatusMap}
                          required
                          initialValue={EnableDisableStatus.ENABLE}
                        />

                        <ProFormRadio.Group
                          name="visible"
                          label="菜单是否显示"
                          valueEnum={YesNoStatusMap}
                          required
                          initialValue={YesNoStatus.YES}
                          tooltip="选择否则路由将不会出现在侧边栏，但仍然可以访问"
                        />

                        <ProFormRadio.Group
                          name="isFrame"
                          label="是否外链"
                          valueEnum={YesNoStatusMap}
                          required
                          initialValue={YesNoStatus.NO}
                          tooltip="选择是外链则路由地址需要以`http(s)://`开头"
                        />
                      </ProFormGroup>

                      <ProFormGroup>
                        <ProFormText
                          name="icon"
                          label="菜单图标"
                          width="sm"
                          tooltip="https://ant.design/components/icon-cn/"
                        />

                        <ProFormText
                          width="sm"
                          name="path"
                          label="路由地址"
                          tooltip="访问的路由地址，如：`user`，如外网地址需内链访问则以`http(s)://`开头"
                          rules={[{ required: true }]}
                        />
                      </ProFormGroup>
                    </>
                  )}

                  {menuType === MenuType.C && (
                    <ProFormText
                      name="queryParam"
                      label="路由参数"
                      tooltip={'访问路由的默认传递参数，如：{"id": 1, "name": "ry"}'}
                    />
                  )}

                  {menuType !== MenuType.M && <ProFormText name="perms" label="权限标识" />}
                </>
              );
            }}
          </ProFormDependency>

          <ProFormTextArea name="remark" label="备注" />
        </ProForm>
      </Modal>
    </Access>
  );
};

export default ButtonCreate;
