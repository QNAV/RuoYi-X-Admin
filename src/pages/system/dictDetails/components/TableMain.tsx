import { BaseProTable } from '@/components';
import { ListClassMap } from '@/constants';
import { useActivated } from '@/hooks';
import { useQueryDictSysNormalDisable } from '@/models';
import ButtonAdd from '@/pages/system/dictDetails/components/ButtonAdd';
import ButtonEdit from '@/pages/system/dictDetails/components/ButtonEdit';
import ButtonExport from '@/pages/system/dictDetails/components/ButtonExport';
import ButtonRemove from '@/pages/system/dictDetails/components/ButtonRemove';
import { useActionRefMainTable, useAtomCurDictType } from '@/pages/system/dictDetails/model';
import type { SysDictDataQueryBo, SysDictDataVo } from '@/services/system/data-contracts';
import { sysDictDataPostList, sysDictTypeGetOptionSelect } from '@/services/system/System';
import { convertParams } from '@/utils';
import type { ProColumns, ProFormInstance, ProTableProps } from '@ant-design/pro-components';
import { LightFilter, ProFormSelect } from '@ant-design/pro-components';
import { useRequest } from 'ahooks';
import type { FC } from 'react';
import { startTransition, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

const useColumns = (): ProColumns<SysDictDataVo>[] => {
  const { valueEnumSysNormalDisable } = useQueryDictSysNormalDisable();

  return [
    { title: '字典编码', dataIndex: 'dictCode', key: 'dictCode', valueType: 'text', hideInSearch: true },
    { title: '字典标签', dataIndex: 'dictLabel', key: 'dictLabel', valueType: 'text' },
    { title: '字典键值', dataIndex: 'dictValue', key: 'dictValue', valueType: 'text', hideInSearch: true },
    { title: '字典排序', dataIndex: 'dictSort', key: 'dictSort', valueType: 'text', hideInSearch: true },
    {
      title: '回显样式',
      dataIndex: 'listClass',
      key: 'listClass',
      valueType: 'select',
      valueEnum: ListClassMap,
    },
    { title: '状态', dataIndex: 'status', key: 'status', valueType: 'select', valueEnum: valueEnumSysNormalDisable },
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
      batch
      dictCode={selectedRows.map((i) => i.dictCode).join(',') as unknown as number}
    />
  );
};

let lastDictType: string;

const TableMain: FC = () => {
  const params = useParams<{ dictType: string }>();

  const [searchParams, setSearchParams] = useState<SysDictDataQueryBo>({});

  const actionRef = useActionRefMainTable();

  const columns = useColumns();

  const formRef = useRef<ProFormInstance>();

  const [curDictType, setCurDictType] = useAtomCurDictType();

  const { data: valueEnum, run } = useRequest(
    async () => {
      const data = await sysDictTypeGetOptionSelect();
      return data.reduce<Record<string, string>>((pre, cur) => {
        pre[cur.dictType] = cur.dictName;
        return pre;
      }, {});
    },
    {
      ready: !!params.dictType,
      onSuccess: (data) => {
        const dictType = params.dictType!;
        setCurDictType({
          dictType,
          dictName: data[dictType],
        });
        startTransition(() => {
          formRef.current?.setFieldsValue({ dictType });
          actionRef?.current?.clearSelected?.();
          actionRef.current?.reloadAndRest?.();
        });
      },
    },
  );

  useActivated(() => {
    if (params.dictType === undefined || params.dictType === lastDictType) {
      return;
    }

    lastDictType = params.dictType;

    run();
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
                actionRef?.current?.clearSelected?.();
                actionRef.current?.reset?.();
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
