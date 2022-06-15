import { request } from '@/utils';

export interface DictItemData {
  searchValue?: any;
  createBy: string;
  createTime: string;
  updateBy: string;
  updateTime?: any;
  params: Record<any, any>;
  dictCode: number;
  dictSort: number;
  dictLabel: string;
  dictValue: string;
  dictType: string;
  cssClass: string;
  listClass: string;
  isDefault: string;
  status: string;
  remark: string;
  default: boolean;
}

export type Dict = DictItemData[];

// 查询显示/隐藏字典
export const reqGetShowHideDict = () => request<Dict>({ url: '/system/dict/data/type/sys_show_hide' });

// 查询正常/禁用字典
export const reqGetEnableDisableDict = () => request<Dict>({ url: '/system/dict/data/type/sys_normal_disable' });
