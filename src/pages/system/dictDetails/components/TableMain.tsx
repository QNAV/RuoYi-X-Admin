import { BaseProTable } from '@/components';
import { EnableDisableStatusMap } from '@/constants';
import { useActivated } from '@/hooks';
import ButtonAdd from '@/pages/system/dictDetails/components/ButtonAdd';
import ButtonEdit from '@/pages/system/dictDetails/components/ButtonEdit';
import ButtonExport from '@/pages/system/dictDetails/components/ButtonExport';
import ButtonRemove from '@/pages/system/dictDetails/components/ButtonRemove';
import { useAtomCurDictType, useMainTableActionRef } from '@/pages/system/dictDetails/model';
import { SysDictDataPostList } from '@/services/sys/SysDictDataService';
import { optionSelectUsingGET } from '@/services/sys/SysDictTypeService';
import { convertParams } from '@/utils';
import type { ProFormInstance, ProTableProps } from '@ant-design/pro-components';
import { LightFilter, ProFormSelect } from '@ant-design/pro-components';
import { useRequest } from 'ahooks';
import type { FC } from 'react';
import { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

const rowKey = 'dictCode';

const tableAlertOptionRender: ProTableProps<API.SysDictDataVo, 'text'>['tableAlertOptionRender'] = ({
  selectedRows,
}) => {
  return (
    <ButtonRemove
      disabled={selectedRows.length === 0}
      isBatch
      dictCode={selectedRows.map((i) => i.dictCode).join(',') as unknown as number}
      dictLabel={selectedRows.map((i) => i.dictLabel).join(',')}
    />
  );
};

const TableMain: FC = () => {
  const params = useParams<{ dictType: string }>();

  const [searchParams, setSearchParams] = useState<API.SysDictDataQueryBo>({});

  const actionRef = useMainTableActionRef();

  const formRef = useRef<ProFormInstance>();

  const [curDictType, setCurDictType] = useAtomCurDictType();

  const { data: valueEnum, run } = useRequest(
    async () => {
      const data = await optionSelectUsingGET();
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
        formRef.current?.setFieldsValue({ dictType });
        actionRef?.current?.reload();
      },
    },
  );

  useActivated('/system/dict/:dictType', () => {
    run();
  });

  return (
    <BaseProTable<API.SysDictDataVo>
      rowKey={rowKey}
      actionRef={actionRef}
      columns={[
        { title: '字典编码', dataIndex: 'dictCode', key: 'dictCode', valueType: 'text', hideInSearch: true },
        { title: '字典标签', dataIndex: 'dictLabel', key: 'dictLabel', valueType: 'text' },
        { title: '字典键值', dataIndex: 'dictValue', key: 'dictValue', valueType: 'text', hideInSearch: true },
        { title: '字典排序', dataIndex: 'dictSort', key: 'dictSort', valueType: 'text', hideInSearch: true },
        { title: '状态', dataIndex: 'status', key: 'status', valueType: 'select', valueEnum: EnableDisableStatusMap },
        { title: '备注', dataIndex: 'remark', key: 'remark', valueType: 'textarea', hideInSearch: true },
        {
          title: '创建时间',
          dataIndex: 'createTime',
          key: 'createTime',
          valueType: 'dateTime',
          editable: false,
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
          render: (dom, entity: API.SysDictDataVo) => {
            return (
              <>
                <ButtonEdit record={entity} />
                <ButtonRemove dictCode={entity.dictCode} dictLabel={entity.dictLabel} />
              </>
            );
          },
        },
      ]}
      params={curDictType}
      request={async (...p) => {
        const params = convertParams(...p);
        setSearchParams(params as API.SysDictDataQueryBo);
        return await SysDictDataPostList(convertParams(...p));
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
