import { BaseProTable } from '@/components';
import { useActivated, useDeactivated } from '@/hooks';
import { useQueryDict } from '@/models';
import ButtonAdd from '@/pages/system/dictDetails/components/ButtonAdd';
import ButtonEdit from '@/pages/system/dictDetails/components/ButtonEdit';
import ButtonExport from '@/pages/system/dictDetails/components/ButtonExport';
import ButtonRemove from '@/pages/system/dictDetails/components/ButtonRemove';
import { useActionRefMainTable, useAtomCurDictType } from '@/pages/system/dictDetails/model';
import type { SysDictDataQueryBo, SysDictDataVo } from '@/services/system/data-contracts';
import { optionSelectUsingGet, sysDictDataPostList } from '@/services/system/System';
import { convertParams } from '@/utils';
import type { ProColumns, ProFormInstance, ProTableProps } from '@ant-design/pro-components';
import { LightFilter, ProFormSelect } from '@ant-design/pro-components';
import { useRequest } from 'ahooks';
import type { FC } from 'react';
import { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

const useColumns = (): ProColumns<SysDictDataVo>[] => {
  const { data } = useQueryDict('sys_normal_disable');

  return [
    { title: '字典编码', dataIndex: 'dictCode', key: 'dictCode', valueType: 'text', hideInSearch: true },
    { title: '字典标签', dataIndex: 'dictLabel', key: 'dictLabel', valueType: 'text' },
    { title: '字典键值', dataIndex: 'dictValue', key: 'dictValue', valueType: 'text', hideInSearch: true },
    { title: '字典排序', dataIndex: 'dictSort', key: 'dictSort', valueType: 'text', hideInSearch: true },
    { title: '状态', dataIndex: 'status', key: 'status', valueType: 'select', valueEnum: data?.valueEnum ?? {} },
    { title: '备注', dataIndex: 'remark', key: 'remark', valueType: 'textarea', hideInSearch: true },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
      valueType: 'dateTime',
      hideInSearch: true,
      sorter: true,
    },
    {
      title: '创建时间',
      dataIndex: 'createTimeRange',
      key: 'createTimeRange',
      valueType: 'dateTimeRange',
      hideInTable: true,
    },
    {
      title: '操作',
      valueType: 'option',
      render: (dom, entity: SysDictDataVo) => {
        return (
          <>
            <ButtonEdit record={entity} />
            <ButtonRemove dictCode={entity.dictCode} />
          </>
        );
      },
    },
  ];
};

const tableAlertOptionRender: ProTableProps<SysDictDataVo, 'text'>['tableAlertOptionRender'] = ({ selectedRows }) => {
  return (
    <ButtonRemove
      disabled={selectedRows.length === 0}
      isBatch
      dictCode={selectedRows.map((i) => i.dictCode).join(',') as unknown as number}
    />
  );
};

const TableMain: FC = () => {
  const params = useParams<{ dictType: string }>();

  const [searchParams, setSearchParams] = useState<SysDictDataQueryBo>({});

  const actionRef = useActionRefMainTable();

  const columns = useColumns();

  const formRef = useRef<ProFormInstance>();

  const [curDictType, setCurDictType] = useAtomCurDictType();

  const { data: valueEnum, run } = useRequest(
    async () => {
      const data = await optionSelectUsingGet();
      return data.reduce<Record<string, string>>((pre, cur) => {
        pre[cur.dictType] = cur.dictName;
        return pre;
      }, {});
    },
    {
      manual: true,
      onSuccess: (data) => {
        const dictType = params.dictType!;
        setCurDictType({
          dictType,
          dictName: data[dictType],
        });
        const timer = setTimeout(() => {
          formRef.current?.setFieldsValue({ dictType });
          actionRef?.current?.reload();
          clearTimeout(timer);
        }, 0);
      },
    },
  );

  useActivated(() => {
    console.log('activated');
    run();
  });
  useDeactivated(() => {
    console.log('deactivated');
  });

  return (
    <BaseProTable<SysDictDataVo, SysDictDataQueryBo>
      rowKey="dictCode"
      actionRef={actionRef}
      columns={columns}
      params={curDictType}
      request={async (...p) => {
        const params = convertParams(...p);
        setSearchParams(params);
        return await sysDictDataPostList(convertParams(...p));
      }}
      tableAlertOptionRender={tableAlertOptionRender}
      manualRequest
      toolbar={{
        actions: [<ButtonExport key="ButtonExport" searchParams={searchParams} />, <ButtonAdd key="ButtonAdd" />],
      }}
      headerTitle={
        <LightFilter formRef={formRef}>
          <ProFormSelect
            name="dictType"
            valueEnum={valueEnum ?? {}}
            allowClear={false}
            showSearch
            fieldProps={{
              onChange: (value) => {
                setCurDictType({
                  dictType: value,
                  dictName: valueEnum![value]!,
                });
              },
            }}
          />
        </LightFilter>
      }
    />
  );
};

export default TableMain;
