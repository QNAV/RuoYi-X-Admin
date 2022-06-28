import type { EnableDisableStatus } from '@/constants';
import { request } from '@/utils';

export interface GetRoleListParams extends API.PaginationParameters {
  roleId?: number;
  roleName?: string;
  roleKey?: string;
  status?: EnableDisableStatus;
}

/**
 * SysRoleRes
 */
export interface SysRoleRes {
  /**
   * 是否管理员
   */
  admin: boolean;
  /**
   * 创建者
   */
  createBy: string;
  /**
   * 创建时间
   */
  createTime: Date;
  /**
   * 数据范围（1：所有数据权限；2：自定义数据权限；3：本部门数据权限；4：本部门及以下数据权限；5：仅本人数据权限）
   */
  dataScope: string;
  /**
   * 删除标志（0代表存在 2代表删除）
   */
  delFlag: string;
  /**
   * 部门树选择项是否关联显示（0：父子不互相关联显示 1：父子互相关联显示 ）
   */
  deptCheckStrictly: boolean;
  /**
   * 部门组（数据权限）
   */
  deptIds: number[];
  /**
   * 用户是否存在此角色标识 默认不存在
   */
  flag: boolean;
  /**
   * 菜单树选择项是否关联显示（ 0：父子不互相关联显示 1：父子互相关联显示）
   */
  menuCheckStrictly: boolean;
  /**
   * 菜单组
   */
  menuIds: number[];
  /**
   * 备注
   */
  remark: string;
  /**
   * 角色ID
   */
  roleId: number;
  /**
   * 角色权限
   */
  roleKey: string;
  /**
   * 角色名称
   */
  roleName: string;
  /**
   * 角色排序
   */
  roleSort: number;
  /**
   * 角色状态（0正常 1停用）
   */
  status: string;
  /**
   * 更新者
   */
  updateBy: string;
  /**
   * 更新时间
   */
  updateTime: Date;
}

/**
 * CreateRoleParams
 */
export interface CreateRoleParams {
  /**
   * 备注
   */
  remark?: string;
  /**
   * 角色权限
   */
  roleKey: string;
  /**
   * 角色名称
   */
  roleName: string;
  /**
   * 角色排序
   */
  roleSort: number;
  /**
   * 角色状态（0正常 1停用）
   */
  status?: string;
}

// 查询角色列表
export const reqGetRoleList = (params: GetRoleListParams) =>
  request<SysRoleRes>('/system/role/list', { params, convertToProData: true });

// 新建角色
export const reqCreateRole = (data: CreateRoleParams) => request('/system/role', { method: 'POST', data });
