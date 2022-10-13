import {
  CCreateTime,
  CCreateTimeRange,
  CDictCode,
  CDictLabel,
  CDictSort,
  CDictValue,
  CEnableDisableStatus,
  CRemark,
} from '@/columns';
import { WarpTableOption } from '@/components';
import ButtonEdit from '@/pages/system/dictDetails/components/ButtonEdit';
import ButtonRemove from '@/pages/system/dictDetails/components/ButtonRemove';
import type { ProItem } from '@/typings';

export const tableColumns: ProItem[] = [
  CDictCode,
  CDictLabel,
  CDictValue,
  CDictSort,
  CEnableDisableStatus,
  CRemark,
  CCreateTime,
  CCreateTimeRange,
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
];
