import type { ValueEnumMap } from '@/constants';
import { sysDictDataGetType } from '@/services/system/System';
import { convertDict2ValueEnum } from '@/utils';
import { useQuery } from '@tanstack/react-query';

export const useQueryDict = (dictType: string) => {
  return useQuery(
    ['global', 'dict', dictType],
    async () => {
      const dict = await sysDictDataGetType({ dictType });
      return convertDict2ValueEnum(dict);
    },
    {
      cacheTime: Infinity,
      staleTime: Infinity,
    },
  );
};

// sys_normal_disable
export const useQueryDictSysNormalDisable = () => {
  const { data } = useQueryDict('sys_normal_disable');
  const defaultValueSysNormalDisable: string | null = data?.defaultValue ?? null;
  const valueEnumSysNormalDisable: ValueEnumMap<string> = data?.valueEnum ?? new Map();
  return {
    defaultValueSysNormalDisable,
    valueEnumSysNormalDisable,
  };
};

// sys_show_hide
export const useQueryDictSysShowHide = () => {
  const { data } = useQueryDict('sys_show_hide');
  const defaultValueSysShowHide: string | null = data?.defaultValue ?? null;
  const valueEnumSysShowHide: ValueEnumMap<string> = data?.valueEnum ?? new Map();
  return {
    defaultValueSysShowHide,
    valueEnumSysShowHide,
  };
};

// sys_yes_no
export const useQueryDictSysYesNo = () => {
  const { data } = useQueryDict('sys_yes_no');
  const defaultValueSysYesNo: string | null = data?.defaultValue ?? null;
  const valueEnumSysYesNo: ValueEnumMap<string> = data?.valueEnum ?? new Map();
  return {
    defaultValueSysYesNo,
    valueEnumSysYesNo,
  };
};

// sys_notice_type
export const useQueryDictSysNoticeType = () => {
  const { data } = useQueryDict('sys_notice_type');
  const defaultValueSysNoticeType: string | null = data?.defaultValue ?? null;
  const valueEnumSysNoticeType: ValueEnumMap<string> = data?.valueEnum ?? new Map();
  return {
    defaultValueSysNoticeType,
    valueEnumSysNoticeType,
  };
};

// sys_notice_status
export const useQueryDictSysNoticeStatus = () => {
  const { data } = useQueryDict('sys_notice_status');
  const defaultValueSysNoticeStatus: string | null = data?.defaultValue ?? null;
  const valueEnumSysNoticeStatus: ValueEnumMap<string> = data?.valueEnum ?? new Map();
  return {
    defaultValueSysNoticeStatus,
    valueEnumSysNoticeStatus,
  };
};

// sys_oper_type
export const useQueryDictSysOperType = () => {
  const { data } = useQueryDict('sys_oper_type');
  const defaultValueSysOperType: string | null = data?.defaultValue ?? null;
  const valueEnumSysOperType: ValueEnumMap<string> = data?.valueEnum ?? new Map();
  return {
    defaultValueSysOperType,
    valueEnumSysOperType,
  };
};

// sys_common_status
export const useQueryDictSysCommonStatus = () => {
  const { data } = useQueryDict('sys_common_status');
  const defaultValueSysCommonStatus: string | null = data?.defaultValue ?? null;
  const valueEnumSysCommonStatus: ValueEnumMap<string> = data?.valueEnum ?? new Map();
  return {
    defaultValueSysCommonStatus,
    valueEnumSysCommonStatus,
  };
};
