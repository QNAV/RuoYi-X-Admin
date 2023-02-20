import { useInitActionType } from '@/hooks';
import { useQueryDictSysAccessPolicy, useQueryDictSysNormalDisable, useQueryDictSysYesNo } from '@/models';
import ButtonEdit from '@/pages/system/ossConfig/components/ButtonEdit';
import ButtonRemove from '@/pages/system/ossConfig/components/ButtonRemove';
import type { SysOssConfigVo } from '@/services/system/data-contracts';
import { genColumnItem } from '@/utils';
import type { ActionType, ProColumns, ProFormColumnsType } from '@ant-design/pro-components';
import { atom, useAtomValue, useSetAtom } from 'jotai';
import { atomWithReset, useResetAtom } from 'jotai/utils';

// configKey 配置key
const [ColumnItemTableConfigKey, , ColumnItemFormConfigKey] = genColumnItem({
  title: '配置key',
  dataIndex: 'configKey',
  table: {
    valueType: 'text',
  },
  form: {
    valueType: 'text',
    formItemProps: {
      rules: [
        {
          required: true,
        },
      ],
    },
  },
});

// endpoint 访问站点
const [ColumnItemTableEndpoint, , ColumnItemFormEndpoint] = genColumnItem({
  title: '访问站点',
  dataIndex: 'endpoint',
  hideInSearch: true,
  table: {
    valueType: 'text',
  },
  form: {
    valueType: 'text',
    formItemProps: {
      rules: [
        {
          required: true,
        },
      ],
    },
  },
});

// domain 自定义域名
const [ColumnItemTableDomain, , ColumnItemFormDomain] = genColumnItem({
  title: '自定义域名',
  dataIndex: 'domain',
  hideInSearch: true,
  table: {
    valueType: 'text',
  },
  form: {
    valueType: 'text',
  },
});

// accessKey
const [ColumnItemTableAccessKey, , ColumnItemFormAccessKey] = genColumnItem({
  title: 'accessKey',
  dataIndex: 'accessKey',
  hideInSearch: true,
  table: {
    valueType: 'text',
  },
  form: {
    valueType: 'text',
    formItemProps: {
      rules: [
        {
          required: true,
        },
      ],
    },
  },
});

// secretKey
const [ColumnItemTableSecretKey, , ColumnItemFormSecretKey] = genColumnItem({
  title: 'secretKey',
  dataIndex: 'secretKey',
  hideInSearch: true,
  table: {
    valueType: 'text',
  },
  form: {
    valueType: 'text',
    formItemProps: {
      rules: [
        {
          required: true,
        },
      ],
    },
  },
});

// bucketName 桶名称
const [ColumnItemTableBucketName, , ColumnItemFormBucketName] = genColumnItem({
  title: '桶名称',
  dataIndex: 'bucketName',
  table: {
    valueType: 'text',
  },
  form: {
    valueType: 'text',
    formItemProps: {
      rules: [
        {
          required: true,
        },
      ],
    },
  },
});

// prefix 前缀
const [ColumnItemTablePrefix, , ColumnItemFormPrefix] = genColumnItem({
  title: '前缀',
  dataIndex: 'prefix',
  hideInSearch: true,
  table: {
    valueType: 'text',
  },
  form: {
    valueType: 'text',
  },
});

// isHttps 是否HTTPS
const initValueIsHttps: SysOssConfigVo['isHttps'] = 'NO';
const useColumnItemIsHttps = () => {
  const { valueEnumSysYesNo } = useQueryDictSysYesNo();

  return genColumnItem({
    title: '是否HTTPS',
    dataIndex: 'isHttps',
    valueEnum: valueEnumSysYesNo,
    hideInSearch: true,
    table: {
      valueType: 'select',
    },
    form: {
      valueType: 'radio',
      initialValue: initValueIsHttps,
    },
  });
};

// accessPolicy 桶权限类型
const useColumnItemAccessPolicy = () => {
  const { valueEnumSysAccessPolicy, defaultValueSysAccessPolicy } = useQueryDictSysAccessPolicy();

  return genColumnItem({
    title: '桶权限类型',
    dataIndex: 'accessPolicy',
    valueEnum: valueEnumSysAccessPolicy,
    hideInSearch: true,
    table: {
      valueType: 'select',
    },
    form: {
      valueType: 'radio',
      initialValue: defaultValueSysAccessPolicy,
    },
  });
};

// center 域
const [ColumnItemTableCenter, , ColumnItemFormCenter] = genColumnItem({
  title: '域',
  dataIndex: 'center',
  hideInSearch: true,
  table: {
    valueType: 'text',
  },
  form: {
    valueType: 'text',
  },
});

// remark 备注
const [ColumnItemTableRemark, , ColumnItemFormRemark] = genColumnItem({
  title: '备注',
  dataIndex: 'remark',
  hideInSearch: true,
  table: {
    valueType: 'text',
  },
  form: {
    valueType: 'text',
  },
});

// status 状态
const initValueStatus: SysOssConfigVo['status'] = 'NORMAL';
const useColumnItemStatus = () => {
  const { valueEnumSysNormalDisable } = useQueryDictSysNormalDisable();

  return genColumnItem({
    title: '状态',
    dataIndex: 'status',
    valueEnum: valueEnumSysNormalDisable,
    table: {
      valueType: 'select',
    },
    form: {
      valueType: 'radio',
      initialValue: initValueStatus,
    },
  });
};

export const useTableColumns = (): ProColumns<SysOssConfigVo>[] => {
  const [ColumnItemTableStatus] = useColumnItemStatus();
  const [ColumnItemTableIsHttps] = useColumnItemIsHttps();
  const [ColumnItemTableAccessPolicy] = useColumnItemAccessPolicy();

  return [
    ColumnItemTableConfigKey,
    ColumnItemTableEndpoint,
    ColumnItemTableDomain,
    ColumnItemTableAccessKey,
    ColumnItemTableSecretKey,
    ColumnItemTableBucketName,
    ColumnItemTablePrefix,
    ColumnItemTableStatus,
    ColumnItemTableIsHttps,
    ColumnItemTableAccessPolicy,
    ColumnItemTableCenter,
    ColumnItemTableRemark,
    {
      title: '操作',
      valueType: 'option',
      render: (dom, entity) => {
        return (
          <>
            <ButtonEdit ossConfigId={entity.ossConfigId} />
            <ButtonRemove ossConfigIds={[entity.ossConfigId]} />
          </>
        );
      },
    },
  ];
};

export const useFormColumns = (): ProFormColumnsType[] => {
  const [, , ColumnItemFormStatus] = useColumnItemStatus();
  const [, , ColumnItemFormIsHttps] = useColumnItemIsHttps();
  const [, , ColumnItemFormAccessPolicy] = useColumnItemAccessPolicy();

  return [
    ColumnItemFormConfigKey,
    ColumnItemFormEndpoint,
    ColumnItemFormDomain,
    ColumnItemFormAccessKey,
    ColumnItemFormSecretKey,
    ColumnItemFormBucketName,
    ColumnItemFormPrefix,
    {
      valueType: 'group',
      columns: [ColumnItemFormStatus, ColumnItemFormIsHttps, ColumnItemFormAccessPolicy],
    },
    ColumnItemFormCenter,
    ColumnItemFormRemark,
  ];
};

const atomMainTableActions = atom<ActionType | undefined>(undefined);
export const useAtomValueMainTableActions = () => useAtomValue(atomMainTableActions);
export const useActionRefMainTable = () => useInitActionType(atomMainTableActions);

export enum OssConfigActionType {
  Add,
  Edit,
}
export const OssConfigActionTypeTextMap = {
  [OssConfigActionType.Add]: '新增',
  [OssConfigActionType.Edit]: '编辑',
};
export interface AtomAddOrEditModal {
  open: boolean;
  actionType: OssConfigActionType;
  ossConfigId?: number;
}
const atomAddOrEditModal = atomWithReset<AtomAddOrEditModal>({
  open: false,
  actionType: OssConfigActionType.Add,
});
export const useAtomValueAddOrEditModal = () => useAtomValue(atomAddOrEditModal);
export const useShowAddModal = () => {
  const setAtom = useSetAtom(atomAddOrEditModal);
  return () => {
    setAtom({
      open: true,
      actionType: OssConfigActionType.Add,
    });
  };
};
export const useShowEditModal = () => {
  const setAtom = useSetAtom(atomAddOrEditModal);
  return (ossConfigId: number) => {
    setAtom({
      open: true,
      actionType: OssConfigActionType.Edit,
      ossConfigId,
    });
  };
};
export const useHideAddOrEditModal = () => useResetAtom(atomAddOrEditModal);
