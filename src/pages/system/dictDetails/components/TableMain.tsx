import { BaseProTable } from '@/components';
import { ListClassMap } from '@/constants';
import { useQueryDictSysNormalDisable, useQueryDictSysYesNo } from '@/models';
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
import { startTransition, useEffect, useRef, useState } from 'react';
import { useMatch, useParams } from 'react-router-dom';

const useColumns = (): ProColumns<SysDictDataVo>[] => {
  const { valueEnumSysNormalDisable } = useQueryDictSysNormalDisable();
  const { valueEnumSysYesNo } = useQueryDictSysYesNo();
  return [
    { title: '字典编码', dataIndex: 'dictCode', key: 'dictCode', valueType: 'text', hideInSearch: true },
    { title: '字典标签', dataIndex: 'dictLabel', key: 'dictLabel', valueType: 'text' },
    { title: '字典键值', dataIndex: 'dictValue', key: 'dictValue', valueType: 'text', hideInSearch: true },
    {
      title: '是否默认值',
      dataIndex: 'isDefault',
      key: 'isDefault',
      valueType: 'radio',
      valueEnum: valueEnumSysYesNo,
      hideInSearch: true,
    },
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
      render: (_dom, entity: SysDictDataVo) => {
        return (
          <>
            <ButtonEdit record={entity} />
            <ButtonRemove dictCode={[entity.dictCode]} />
          </>
        );
      },
    },
  ];
};

const tableAlertOptionRender: ProTableProps<SysDictDataVo, 'text'>['tableAlertOptionRender'] = ({
  selectedRowKeys,
}) => {
  return <ButtonRemove disabled={selectedRowKeys.length === 0} batch dictCode={selectedRowKeys as number[]} />;
};

let lastDictType: string;

const path = '/system/dict/:dictType';

const TableMain: FC = () => {
  const params = useParams<{ dictType: string }>();

  const [searchParams, setSearchParams] = useState<SysDictDataQueryBo>({});
  const match = useMatch(path);

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

  useEffect(() => {
    if (params.dictType === undefined || params.dictType === lastDictType) {
      return;
    }

    lastDictType = params.dictType;

    run();
  }, [match]);

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
