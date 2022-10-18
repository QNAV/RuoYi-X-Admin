import {
  CDictCode,
  CDictLabel,
  CDictSort,
  CDictValue,
  CEnableDisableStatus,
  CRemark,
  TCreateTime,
  TCreateTimeRange,
} from '@/columns';
import { BaseProTable, WarpTableOption } from '@/components';
import { useActivated, useRowClick } from '@/hooks';
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
  const { rowSelection, onClick } = useRowClick<API.SysDictDataVo>(rowKey);

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
        CDictCode,
        CDictLabel,
        CDictValue,
        CDictSort,
        CEnableDisableStatus,
        CRemark,
        TCreateTime,
        TCreateTimeRange,
        {
          title: '操作',
          valueType: 'option',
          render: (dom, entity: API.SysDictDataVo) => {
            return (
              <WarpTableOption>
                <ButtonEdit record={entity} />
                <ButtonRemove dictCode={entity.dictCode} dictLabel={entity.dictLabel} />
              </WarpTableOption>
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
      rowSelection={rowSelection}
      onRow={(record) => {
        return {
          onClick: () => {
            onClick(record);
          },
        };
      }}
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
