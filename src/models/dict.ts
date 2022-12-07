import { sysDictDataGetType } from '@/services/system/System';
import { convertDict2ValueEnum } from '@/utils';
import { useQuery } from '@tanstack/react-query';

export const useQueryDict = (dictType: string, options: { valueType?: 'number' | 'string' } = {}) => {
  const { valueType = 'string' } = options;

  return useQuery(
    ['global', 'dict', dictType],
    async () => {
      const dict = await sysDictDataGetType({ dictType });

      return convertDict2ValueEnum(dict, valueType);
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
  return {
    defaultValueSysNormalDisable: data?.defaultValue ?? null,
    valueEnumSysNormalDisable: data?.valueEnum ?? new Map(),
  };
};

// sys_show_hide
export const useQueryDictSysShowHide = () => {
  const { data } = useQueryDict('sys_show_hide');
  return {
    defaultValueSysShowHide: data?.defaultValue ?? null,
    valueEnumSysShowHide: data?.valueEnum ?? new Map(),
  };
};

// sys_yes_no
export const useQueryDictSysYesNo = () => {
  const { data } = useQueryDict('sys_yes_no');
  return {
    defaultValueSysYesNo: data?.defaultValue ?? null,
    valueEnumSysYesNo: data?.valueEnum ?? new Map(),
  };
};

// sys_notice_type
export const useQueryDictSysNoticeType = () => {
  const { data } = useQueryDict('sys_notice_type');
  return {
    defaultValueSysNoticeType: data?.defaultValue ?? null,
    valueEnumSysNoticeType: data?.valueEnum ?? new Map(),
  };
};

// sys_notice_status
export const useQueryDictSysNoticeStatus = () => {
  const { data } = useQueryDict('sys_notice_status');
  return {
    defaultValueSysNoticeStatus: data?.defaultValue ?? null,
    valueEnumSysNoticeStatus: data?.valueEnum ?? new Map(),
  };
};

// sys_oper_type
export const useQueryDictSysOperType = () => {
  const { data } = useQueryDict('sys_oper_type');
  return {
    defaultValueSysOperType: data?.defaultValue ?? null,
    valueEnumSysOperType: data?.valueEnum ?? new Map(),
  };
};

// sys_common_status
export const useQueryDictSysCommonStatus = () => {
  const { data } = useQueryDict('sys_common_status');
  return {
    defaultValueSysCommonStatus: data?.defaultValue ?? null,
    valueEnumSysCommonStatus: data?.valueEnum ?? new Map(),
  };
};
