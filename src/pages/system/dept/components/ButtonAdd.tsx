import { BaseButtonAdd } from '@/components';
import { AccessWithState } from '@/features';
import { useQueryDictSysNormalDisable } from '@/models';
import { useQueryDeptOptions } from '@/pages/system/dept/model';
import type { SysDeptAddBo } from '@/services/system/data-contracts';
import { sysDeptPostAdd } from '@/services/system/System';
import type { ProFormInstance } from '@ant-design/pro-components';
import { ProForm, ProFormDigit, ProFormRadio, ProFormText, ProFormTreeSelect } from '@ant-design/pro-components';
import { useMutation } from '@tanstack/react-query';
import { useBoolean } from 'ahooks';
import { App, Modal } from 'antd';
import type { FC } from 'react';
import { useRef } from 'react';

const ButtonAdd: FC = () => {
  const { message } = App.useApp();

  const formRef = useRef<ProFormInstance<SysDeptAddBo>>();

  const [open, { toggle }] = useBoolean();

  const { data: treeData, refetch } = useQueryDeptOptions();

  const { defaultValueSysNormalDisable, valueEnumSysNormalDisable } = useQueryDictSysNormalDisable();

  const { mutate, isLoading } = useMutation(
    async () => {
      const formData = await formRef.current?.validateFields();

      await sysDeptPostAdd(formData!);
    },
    {
      onSuccess: async () => {
        toggle();
        formRef.current?.resetFields();

        refetch();

        message.success('新增成功');
      },
    },
  );

  return (
    <AccessWithState accessKey="system:dept:add">
      <BaseButtonAdd onClick={toggle} />

      <Modal
        title="新增部门"
        okText="提交"
        open={open}
        onCancel={toggle}
        onOk={() => mutate()}
        okButtonProps={{ loading: isLoading }}
      >
        <ProForm
          submitter={false}
          formRef={formRef}
          grid
          rowProps={{
            gutter: [16, 0],
          }}
        >
          <ProFormTreeSelect
            name="parentId"
            label="上级部门"
            rules={[{ required: true, message: '请选择上级部门' }]}
            fieldProps={{
              treeData: treeData ?? [],
              fieldNames: {
                label: 'deptName',
                value: 'deptId',
              },
            }}
          />

          <ProFormText
            name="deptName"
            label="部门名称"
            rules={[
              {
                required: true,
              },
            ]}
            colProps={{
              span: 12,
            }}
          />

          <ProFormDigit
            name="orderNum"
            label="显示排序"
            initialValue={0}
            rules={[
              {
                required: true,
              },
            ]}
            colProps={{
              span: 12,
            }}
          />

          <ProFormText
            name="leader"
            label="负责人"
            colProps={{
              span: 12,
            }}
          />

          <ProFormText
            name="phone"
            label="联系电话"
            colProps={{
              span: 12,
            }}
          />

          <ProFormText
            name="email"
            label="邮箱"
            colProps={{
              span: 12,
            }}
          />

          <ProFormRadio.Group
            name="status"
            label="状态"
            valueEnum={valueEnumSysNormalDisable}
            initialValue={defaultValueSysNormalDisable}
            colProps={{
              span: 12,
            }}
          />
        </ProForm>
      </Modal>
    </AccessWithState>
  );
};

export default ButtonAdd;
