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
