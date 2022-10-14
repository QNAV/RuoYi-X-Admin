import { SysDictDataGetType } from '@/services/sys/SysDictDataService';
import { convertDict2ValueEnum } from '@/utils';
import { useQuery } from '@tanstack/react-query';

export const useQueryDict = (dictType: string, options: { valueType?: 'number' | 'string' } = {}) => {
  const { valueType = 'string' } = options;
  return useQuery(['global', 'dict', dictType], async () => {
    const dict = await SysDictDataGetType({ dictType });

    return convertDict2ValueEnum(dict, valueType);
  });
};
