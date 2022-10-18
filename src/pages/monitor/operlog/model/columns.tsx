// 日志编号
import { useQueryDict } from '@/models';
import ButtonRemove from '@/pages/monitor/operlog/components/ButtonRemove';
import { generateColumns } from '@/utils';

const [TOperId] = generateColumns({
  title: '日志编号',
  dataIndex: 'operId',
  key: 'operId',
  valueType: 'text',
  hideInSearch: true,
});

// 系统模块
const [TTitle] = generateColumns({
  title: '系统模块',
  dataIndex: 'title',
  key: 'title',
  valueType: 'text',
});

// 请求方式
const [TMethod] = generateColumns({
  title: '请求方式',
  dataIndex: 'requestMethod',
  key: 'requestMethod',
  valueType: 'text',
  hideInSearch: true,
});

// 操作人员
const [TOperName] = generateColumns({
  title: '操作人员',
  dataIndex: 'operName',
  key: 'operName',
  valueType: 'text',
});

// 操作地址
const [TOperIp] = generateColumns({
  title: '操作地址',
  dataIndex: 'operIp',
  key: 'operIp',
  valueType: 'text',
  hideInSearch: true,
});

// 操作地点
const [TOperLocation] = generateColumns({
  title: '操作地点',
  dataIndex: 'operLocation',
  key: 'operLocation',
  valueType: 'text',
  hideInSearch: true,
});

// 操作日期
const COperTime = generateColumns({
  title: '操作日期',
  dataIndex: 'operTime',
  key: 'operTime',
  valueType: 'dateTime',
  hideInSearch: true,
});

// 操作
const [TOption] = generateColumns(
  {
    title: '操作',
    dataIndex: 'option',
    key: 'option',
    valueType: 'option',
    render: (dom, entity) => {
      return <ButtonRemove title={entity.title} operId={entity.operId} />;
    },
  },
  {
    table: {
      fixed: 'right',
    },
  },
);

// 操作类型
const useCBusinessType = () => {
  const { data } = useQueryDict('sys_oper_type');

  return generateColumns({
    title: '操作类型',
    dataIndex: 'businessType',
    key: 'businessType',
    valueType: 'select',
    valueEnum: data ?? {},
  });
};

// 操作状态
const useCStatus = () => {
  const { data } = useQueryDict('sys_common_status');

  return generateColumns({
    title: '操作状态',
    dataIndex: 'status',
    key: 'status',
    valueType: 'select',
    valueEnum: data ?? {},
  });
};

export const useTableColumns = () => {
  return [
    TOperId,
    TTitle,
    useCBusinessType(),
    TMethod,
    TOperName,
    TOperIp,
    TOperLocation,
    useCStatus(),
    COperTime,
    TOption,
  ];
};
