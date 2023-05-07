import { WangEditor } from '@/features';
import { useQueryDictSysNoticeStatus, useQueryDictSysNoticeType } from '@/models';
import ButtonEdit from '@/pages/system/notice/components/ButtonEdit';
import ButtonRemove from '@/pages/system/notice/components/ButtonRemove';
import type { SysNoticeVo } from '@/services/system/data-contracts';
import { genColumnItem } from '@/utils';
import type { ProColumns, ProFormColumnsType } from '@ant-design/pro-components';

// noticeId 公告编号
const [ColumnItemTableNoticeId] = genColumnItem({
  title: '公告编号',
  dataIndex: 'noticeId',
  table: {
    valueType: 'text',
    hideInSearch: true,
  },
});

// noticeTitle 公告标题
const [ColumnItemTableNoticeTitle, , ColumnItemFormNoticeTitle] = genColumnItem({
  title: '公告标题',
  dataIndex: 'noticeTitle',
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

// noticeType 公告类型
const useColumnItemNoticeType = () => {
  const { valueEnumSysNoticeType } = useQueryDictSysNoticeType();

  return genColumnItem({
    title: '公告类型',
    dataIndex: 'noticeType',
    valueEnum: valueEnumSysNoticeType,
    table: {
      valueType: 'select',
    },
    form: {
      valueType: 'select',
      formItemProps: {
        rules: [
          {
            required: true,
          },
        ],
      },
    },
  });
};

// status 状态
const initialValueStatus: SysNoticeVo['status'] = 'NORMAL';
const useColumnItemStatus = () => {
  const { valueEnumSysNoticeStatus } = useQueryDictSysNoticeStatus();

  return genColumnItem({
    title: '状态',
    dataIndex: 'status',
    valueEnum: valueEnumSysNoticeStatus,
    table: {
      valueType: 'select',
      hideInSearch: true,
    },
    form: {
      valueType: 'radio',
      formItemProps: {
        rules: [
          {
            required: true,
          },
        ],
      },
      initialValue: initialValueStatus,
    },
  });
};

// createBy 创建者
const [ColumnItemTableCreateBy] = genColumnItem({
  title: '创建者',
  dataIndex: 'createBy',
  table: {
    valueType: 'text',
  },
});

// createTime 创建时间
const [ColumnItemTableCreateTime] = genColumnItem({
  title: '创建时间',
  dataIndex: 'createTime',
  table: {
    valueType: 'dateTime',
    hideInSearch: true,
    sorter: true,
  },
});

export const useTableColumns = (): ProColumns<SysNoticeVo>[] => {
  const [ColumnItemNoticeType] = useColumnItemNoticeType();
  const [ColumnItemStatus] = useColumnItemStatus();

  return [
    ColumnItemTableNoticeId,
    ColumnItemTableNoticeTitle,
    ColumnItemNoticeType,
    ColumnItemStatus,
    ColumnItemTableCreateBy,
    ColumnItemTableCreateTime,
    {
      title: '操作',
      valueType: 'option',
      render: (_dom, entity) => {
        return (
          <>
            <ButtonEdit record={entity} />

            <ButtonRemove noticeIds={[entity.noticeId]} />
          </>
        );
      },
    },
  ];
};

export const useFormColumns = (): ProFormColumnsType[] => {
  const [, , ColumnItemFormNoticeType] = useColumnItemNoticeType();
  const [, , ColumnItemFormStatus] = useColumnItemStatus();

  return [
    ColumnItemFormNoticeTitle,
    ColumnItemFormNoticeType,
    ColumnItemFormStatus,
    {
      name: 'noticeContent',
      title: '内容',
      colProps: {
        span: 24,
      },
      renderFormItem: () => <WangEditor />,
    },
  ];
};
