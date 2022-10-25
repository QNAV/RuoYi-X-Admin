import { Access } from '@/components';
import { MenuType, MenuTypeMap, YesNoStatus, YesNoStatusMap } from '@/constants';
import { useAtomValueAccess, useQueryDict } from '@/models';
import {
  useAtomValueCreateModal,
  useAtomValueSelectedMenuData,
  useHideCreateModal,
  useQueryMenuOptions,
  useReFetchMenuList,
} from '@/pages/system/menu/model';
import { SysMenuPostAdd } from '@/services/sys/SysMenuService';
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
import { useMutation } from '@tanstack/react-query';
import { message, Modal } from 'antd';
import type { FC } from 'react';
import { useEffect, useRef } from 'react';

export interface OptionsParentId {
  menuId: number;
  menuName: string;
  children?: OptionsParentId[];
}

const getSelectedParentIds = (data: Map<number, API.SysMenuVo>, menuId: number): number[] => {
  const parentIds: number[] = [0];

  if (menuId === 0) {
    return parentIds;
  }

  const findParentId = (id: number) => {
    const menu = data.get(id);

    if (!menu) return;

    if (menu?.parentId !== undefined) {
      findParentId(menu.parentId);
    }

    if (menu.menuType !== MenuType.F) {
      parentIds.push(id);
    }
  };

  findParentId(menuId);

  return parentIds;
};

const ModalAdd: FC = () => {
  const { canAddSysMenu } = useAtomValueAccess();

  const formRef = useRef<ProFormInstance>();

  const hideCreateModal = useHideCreateModal();
  const open = useAtomValueCreateModal();

  const { selectedMenuId } = useAtomValueSelectedMenuData();

  const { data: dictSysNormalDisable } = useQueryDict('sys_normal_disable');
  const { data: dictSysShowHide } = useQueryDict('sys_show_hide');

  const { data, refetch } = useQueryMenuOptions();
  const reFetchMenuList = useReFetchMenuList();

  const { isLoading, mutate: handleSubmit } = useMutation(
    async () => {
      const formData = await formRef.current?.validateFieldsReturnFormatValue?.();

      if (!formData) return;

      await SysMenuPostAdd(formData);
    },
    {
      onSuccess: async () => {
        await Promise.all([refetch(), reFetchMenuList()]);

        hideCreateModal();

        formRef?.current?.resetFields();

        message.success('新建成功');
      },
    },
  );

  useEffect(() => {
    if (open && data?.map && formRef?.current?.setFieldsValue) {
      formRef.current.setFieldsValue({
        parentId: getSelectedParentIds(data.map, selectedMenuId),
      });
    }
  }, [open, formRef?.current?.setFieldsValue]);

  return (
    <Access accessible={canAddSysMenu}>
      <Modal
        open={open}
        onCancel={hideCreateModal}
        title="新建菜单"
        width={515}
        okText="提交"
        onOk={() => handleSubmit()}
        okButtonProps={{
          loading: isLoading,
        }}
      >
        <ProForm<API.SysMenuVo> submitter={false} formRef={formRef}>
          <ProFormCascader
            name="parentId"
            label="父级菜单"
            fieldProps={{
              options: data?.options ?? [],
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
                          required
                          valueEnum={dictSysNormalDisable?.mapData ?? {}}
                          initialValue={dictSysNormalDisable?.defaultValue}
                        />

                        <ProFormRadio.Group
                          name="visible"
                          label="菜单是否显示"
                          valueEnum={dictSysShowHide?.mapData ?? {}}
                          required
                          initialValue={dictSysShowHide?.defaultValue}
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

export default ModalAdd;
