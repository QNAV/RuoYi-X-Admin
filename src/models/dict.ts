import type { ValueEnumMap } from '@/constants';
import { sysDictDataGetType } from '@/services/system/System';
import { convertDict2ValueEnum } from '@/utils';
import { useQuery } from '@tanstack/react-query';

const useQueryDict = (dictType: string) => {
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

// sys_normal_disable 系统开关
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

// sys_yes_no 系统是否
export const useQueryDictSysYesNo = () => {
  const { data } = useQueryDict('sys_yes_no');
  const defaultValueSysYesNo: string | null = data?.defaultValue ?? null;
  const valueEnumSysYesNo: ValueEnumMap<string> = data?.valueEnum ?? new Map();
  return {
    defaultValueSysYesNo,
    valueEnumSysYesNo,
  };
};

// sys_notice_type 通知类型
export const useQueryDictSysNoticeType = () => {
  const { data } = useQueryDict('sys_notice_type');
  const defaultValueSysNoticeType: string | null = data?.defaultValue ?? null;
  const valueEnumSysNoticeType: ValueEnumMap<string> = data?.valueEnum ?? new Map();
  return {
    defaultValueSysNoticeType,
    valueEnumSysNoticeType,
  };
};

// sys_notice_status 通知状态
export const useQueryDictSysNoticeStatus = () => {
  const { data } = useQueryDict('sys_notice_status');
  const defaultValueSysNoticeStatus: string | null = data?.defaultValue ?? null;
  const valueEnumSysNoticeStatus: ValueEnumMap<string> = data?.valueEnum ?? new Map();
  return {
    defaultValueSysNoticeStatus,
    valueEnumSysNoticeStatus,
  };
};

// sys_oper_type 操作类型
export const useQueryDictSysOperType = () => {
  const { data } = useQueryDict('sys_oper_type');
  const defaultValueSysOperType: string | null = data?.defaultValue ?? null;
  const valueEnumSysOperType: ValueEnumMap<string> = data?.valueEnum ?? new Map();
  return {
    defaultValueSysOperType,
    valueEnumSysOperType,
  };
};

// sys_user_sex
export const useQueryDictSysUserSex = () => {
  const { data } = useQueryDict('sys_user_sex');
  const defaultValueSysUserSex: string | null = data?.defaultValue ?? null;
  const valueEnumSysUserSex: ValueEnumMap<string> = data?.valueEnum ?? new Map();
  return {
    defaultValueSysUserSex,
    valueEnumSysUserSex,
  };
};

// sys_menu_type 菜单类型
export const useQueryDictSysMenuType = () => {
  const { data } = useQueryDict('sys_menu_type');
  const defaultValueSysMenuType: string | null = data?.defaultValue ?? null;
  const valueEnumSysMenuType: ValueEnumMap<string> = data?.valueEnum ?? new Map();
  return {
    defaultValueSysMenuType,
    valueEnumSysMenuType,
  };
};

// sys_gen_type 生成代码方式
export const useQueryDictSysGenType = () => {
  const { data } = useQueryDict('sys_gen_type');
  const defaultValueSysGenType: string | null = data?.defaultValue ?? null;
  const valueEnumSysGenType: ValueEnumMap<string> = data?.valueEnum ?? new Map();
  return {
    defaultValueSysGenType,
    valueEnumSysGenType,
  };
};

// sys_query_type 查询方式
export const useQueryDictSysQueryType = () => {
  const { data } = useQueryDict('sys_query_type');
  const defaultValueSysQueryType: string | null = data?.defaultValue ?? null;
  const valueEnumSysQueryType: ValueEnumMap<string> = data?.valueEnum ?? new Map();
  return {
    defaultValueSysQueryType,
    valueEnumSysQueryType,
  };
};

// sys_tpl_category 生成模版类型
export const useQueryDictSysTplCategory = () => {
  const { data } = useQueryDict('sys_tpl_category');
  const defaultValueSysTplCategory: string | null = data?.defaultValue ?? null;
  const valueEnumSysTplCategory: ValueEnumMap<string> = data?.valueEnum ?? new Map();
  return {
    defaultValueSysTplCategory,
    valueEnumSysTplCategory,
  };
};

// sys_java_type JAVA类型
export const useQueryDictSysJavaType = () => {
  const { data } = useQueryDict('sys_java_type');
  const defaultValueSysJavaType: string | null = data?.defaultValue ?? null;
  const valueEnumSysJavaType: ValueEnumMap<string> = data?.valueEnum ?? new Map();
  return {
    defaultValueSysJavaType,
    valueEnumSysJavaType,
  };
};

// sys_data_scope 数据权限范围
export const useQueryDictSysDataScope = () => {
  const { data } = useQueryDict('sys_data_scope');
  const defaultValueSysDataScope: string | null = data?.defaultValue ?? null;
  const valueEnumSysDataScope: ValueEnumMap<string> = data?.valueEnum ?? new Map();
  return {
    defaultValueSysDataScope,
    valueEnumSysDataScope,
  };
};
