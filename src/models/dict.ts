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
