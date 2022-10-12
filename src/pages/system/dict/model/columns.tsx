import { CCreateTime, CCreateTimeRange, CDictId, CDictName, CDictType, CEnableDisableStatus, CRemark } from '@/columns';
import { WarpTableOption } from '@/components';
import ButtonDetails from '@/pages/system/dict/components/ButtonDetails';
import ButtonEdit from '@/pages/system/dict/components/ButtonEdit';
import ButtonRemove from '@/pages/system/dict/components/ButtonRemove';
import type { ProItem } from '@/typings';

export const tableColumns: ProItem[] = [
  CDictId,
  CDictName,
  CDictType,
  CEnableDisableStatus,
  CRemark,
  CCreateTime,
  CCreateTimeRange,
  {
    title: '操作',
    valueType: 'option',
    render: (dom, entity: API.SysDictTypeVo) => {
      return (
        <WarpTableOption>
          <ButtonDetails dictId={entity.dictId} />
          <ButtonEdit record={entity} />
          <ButtonRemove dictId={entity.dictId} dictName={entity.dictName} />
        </WarpTableOption>
      );
    },
  },
];
