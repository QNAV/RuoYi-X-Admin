import { Access } from '@/components';
import { EnableDisableStatus, EnableDisableStatusMap } from '@/constants';
import { useAccess } from '@/models';
import { useQueryDeptTreeData } from '@/pages/system/dept/model';
import { SysDeptPostAdd } from '@/services/sys/SysDeptService';
import { PlusOutlined } from '@ant-design/icons';
import type { ProFormInstance } from '@ant-design/pro-components';
import { ProForm, ProFormDigit, ProFormRadio, ProFormText, ProFormTreeSelect } from '@ant-design/pro-components';
import { useMutation } from '@tanstack/react-query';
import { useBoolean } from 'ahooks';
import { Button, message, Modal } from 'antd';
import type { FC } from 'react';
import { useRef } from 'react';

const ButtonCreate: FC = () => {
  const access = useAccess();
  const formRef = useRef<ProFormInstance<API.SysDeptAddBo>>();
  const [open, { toggle }] = useBoolean();
  const { data: treeData, refetch } = useQueryDeptTreeData();

  const { mutate, isLoading } = useMutation(
    async () => {
      const formData = await formRef.current?.validateFields();

      await SysDeptPostAdd(formData!);
    },
    {
      onSuccess: () => {
        message.success('新建成功');

        refetch();

        toggle();

        formRef.current?.resetFields();
      },
    },
  );

  return (
    <Access accessible={access.canAddSysDept}>
      <Button type="primary" icon={<PlusOutlined />} onClick={toggle}>
        新建
      </Button>

      <Modal
        title="新建部门"
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
                value: 'id',
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
            valueEnum={EnableDisableStatusMap}
            initialValue={EnableDisableStatus.ENABLE}
            colProps={{
              span: 12,
            }}
          />
        </ProForm>
      </Modal>
    </Access>
  );
};

export default ButtonCreate;
