/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** 用户信息编辑业务对象 */
export interface SysUserEditBo {
  /**
   * 用户ID
   * @format int64
   */
  userId: number;
  /**
   * 部门ID
   * @format int64
   */
  deptId?: number;
  /**
   * 用户账号
   * @minLength 0
   * @maxLength 30
   */
  userName?: string;
  /**
   * 用户昵称
   * @minLength 0
   * @maxLength 30
   */
  nickName?: string;
  /** 用户类型（PC=电脑端 ANDROID=安卓app端 IOS=苹果app端 WXAPP=微信小程序端 WXMP=微信公众号端 ALIPAYAPP=支付宝小程序端） */
  userType?: 'PC' | 'ANDROID' | 'IOS' | 'WXAPP' | 'WXMP' | 'ALIPAYAPP';
  /**
   * 用户邮箱
   * @minLength 0
   * @maxLength 50
   */
  email?: string;
  /** 手机号码 */
  phoneNumber?: string;
  /** 用户性别（UNKNOWN=未知 MAN=男 WOMAN=女） */
  sex?: 'UNKNOWN' | 'MAN' | 'WOMAN';
  /** 用户头像 */
  avatar?: string;
  /** 密码 */
  password?: string;
  /** 帐号状态（NORMAL=正常 DISABLE=停用） */
  status?: 'NORMAL' | 'DISABLE';
  /** 备注 */
  remark?: string;
  /** 角色组 */
  roleIds: number[];
  /** 岗位组 */
  postIds: number[];
  admin?: boolean;
}

/** 响应信息主体 */
export interface RVoid {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 数据对象 */
  data: object;
}

/** 已登录用户信息更新业务对象 */
export interface LoginUserUpdateBo {
  /**
   * 用户昵称
   * @minLength 0
   * @maxLength 30
   */
  nickName?: string;
  /**
   * 用户邮箱
   * @minLength 0
   * @maxLength 50
   */
  email?: string;
  /** 手机号码 */
  phoneNumber?: string;
  /** 用户性别 */
  sex?: 'UNKNOWN' | 'MAN' | 'WOMAN';
  /** 用户头像 */
  avatar?: string;
}

/** 修改密码表单对象 */
export interface UpdatePwdBo {
  /** 原密码 */
  oldPassword: string;
  /** 新密码 */
  newPassword: string;
}

/** 用户头像上传返回对象 */
export interface AvatarUploadVo {
  /** 头像地址 */
  imgUrl?: string;
}

/** 响应信息主体 */
export interface RAvatarUploadVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 用户头像上传返回对象 */
  data: AvatarUploadVo;
}

/** 用户信息分页查询对象 */
export interface SysUserPageQueryBo {
  /**
   * 分页大小
   * @format int32
   */
  pageSize?: number;
  /**
   * 当前页数
   * @format int32
   */
  pageNum?: number;
  /** 排序列 */
  orderByColumn?: string;
  /**
   * 排序的方向
   * @example "asc,desc"
   */
  isAsc?: string;
  /**
   * 部门ID
   * @format int64
   */
  deptId?: number;
  /**
   * 角色ID
   * @format int64
   */
  roleId?: number;
  /**
   * 用户ID
   * @format int64
   */
  userId?: number;
  /** 用户账号 */
  userName?: string;
  /** 手机号码 */
  phoneNumber?: string;
  /** 帐号状态（NORMAL=正常 DISABLE=停用） */
  status?: 'NORMAL' | 'DISABLE';
  /**
   * 开始创建时间
   * @format date-time
   */
  beginCreateTime?: string;
  /**
   * 结束创建时间
   * @format date-time
   */
  endCreateTime?: string;
}

/** 部门视图对象 */
export interface SysDeptVo {
  /** 创建者 */
  createBy: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
  /** 更新者 */
  updateBy?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** 父菜单名称 */
  parentName?: string;
  /**
   * 父菜单ID
   * @format int64
   */
  parentId?: number;
  /** 子部门 */
  children?: SysDeptVo[];
  /**
   * 部门id
   * @format int64
   */
  deptId: number;
  /** 部门名称 */
  deptName: string;
  /**
   * 显示顺序
   * @format int32
   */
  orderNum: number;
  /** 负责人 */
  leader?: string;
  /** 联系电话 */
  phone?: string;
  /** 邮箱 */
  email?: string;
  /** 部门状态（NORMAL=正常 DISABLE=停用） */
  status: 'NORMAL' | 'DISABLE';
  /** 删除标志（EXIST=代表存在 DELETED=代表删除） */
  delFlag: 'EXIST' | 'DELETED';
  /** 祖级列表 */
  ancestors?: string;
}

/** 角色视图对象 */
export interface SysRoleVo {
  /** 创建者 */
  createBy: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
  /** 更新者 */
  updateBy?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /**
   * 角色ID
   * @format int64
   */
  roleId: number;
  /** 角色名称 */
  roleName: string;
  /** 角色权限 */
  roleKey: string;
  /**
   * 角色排序
   * @format int32
   */
  roleSort: number;
  /** 数据范围（ALL=全部数据权限 CUSTOM=自定数据权限 DEPT=本部门数据权限 DEPT_CHILD=本部门及以下数据权限 SELF=仅本人数据权限） */
  dataScope: 'ALL' | 'CUSTOM' | 'DEPT' | 'DEPT_CHILD' | 'SELF';
  /** 菜单树选择项是否关联显示（NO=父子不互相关联显示 YES=父子互相关联显示） */
  menuCheckStrictly: 'YES' | 'NO';
  /** 部门树选择项是否关联显示（NO=父子不互相关联显示 YES=父子互相关联显示 ） */
  deptCheckStrictly: 'YES' | 'NO';
  /** 角色状态（NORMAL=正常 DISABLE=停用） */
  status: 'NORMAL' | 'DISABLE';
  /** 删除标志（EXIST=代表存在 DELETED=代表删除） */
  delFlag: 'EXIST' | 'DELETED';
  /** 备注 */
  remark?: string;
  /** 用户是否存在此角色标识 默认不存在 */
  flag: boolean;
  /** 菜单组 */
  menuIds: number[];
  /** 部门组（数据权限） */
  deptIds: number[];
  /** 是否管理员 */
  admin: boolean;
}

/** 后台用户信息视图对象 */
export interface SysUserVo {
  /** 创建者 */
  createBy: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
  /** 更新者 */
  updateBy?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /**
   * 用户ID
   * @format int64
   */
  userId: number;
  /**
   * 部门ID
   * @format int64
   */
  deptId: number;
  /** 用户账号 */
  userName: string;
  /** 用户昵称 */
  nickName: string;
  /** 用户类型（PC=电脑端 ANDROID=安卓app端 IOS=苹果app端 WXAPP=微信小程序端 WXMP=微信公众号端 ALIPAYAPP=支付宝小程序端） */
  userType: 'PC' | 'ANDROID' | 'IOS' | 'WXAPP' | 'WXMP' | 'ALIPAYAPP';
  /** 用户邮箱 */
  email?: string;
  /** 手机号码 */
  phoneNumber?: string;
  /** 用户性别（UNKNOWN=未知 MAN=男 WOMAN=女） */
  sex: 'UNKNOWN' | 'MAN' | 'WOMAN';
  /** 用户头像 */
  avatar?: string;
  /** 密码 */
  password: string;
  /** 帐号状态（NORMAL=正常 DISABLE=停用） */
  status: 'NORMAL' | 'DISABLE';
  /** 删除标志（EXIST=代表存在 DELETED=代表删除） */
  delFlag: 'EXIST' | 'DELETED';
  /** 最后登录IP */
  loginIp?: string;
  /**
   * 最后登录时间
   * @format date-time
   */
  loginDate?: string;
  /** 备注 */
  remark?: string;
  /** 部门视图对象 */
  dept: SysDeptVo;
  /** 角色对象 */
  roles: SysRoleVo[];
  /** 角色组 */
  roleIds: number[];
  /** 岗位组 */
  postIds: number[];
  /**
   * 角色ID
   * @format int64
   */
  roleId: number;
  /** 是否管理员 */
  admin: boolean;
}

/** 表格分页数据对象 */
export interface TableDataInfoSysUserVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 分页数据对象 */
  data: TableDataSysUserVo;
}

/** 分页数据对象 */
export interface TableDataSysUserVo {
  /**
   * 总记录数
   * @format int64
   */
  total: number;
  /** 列表数据 */
  data: SysUserVo[];
}

/** 授权用户角色表单对象 */
export interface AuthRoleAllBo {
  /**
   * 用户Id
   * @format int64
   */
  userId: number;
  /** 角色ID串 */
  roleIds: number[];
}

/** 用户信息查询对象 */
export interface SysUserQueryBo {
  /**
   * 部门ID
   * @format int64
   */
  deptId?: number;
  /**
   * 角色ID
   * @format int64
   */
  roleId?: number;
  /**
   * 用户ID
   * @format int64
   */
  userId?: number;
  /** 用户账号 */
  userName?: string;
  /** 手机号码 */
  phoneNumber?: string;
  /** 帐号状态（NORMAL=正常 DISABLE=停用） */
  status?: 'NORMAL' | 'DISABLE';
  /**
   * 开始创建时间
   * @format date-time
   */
  beginCreateTime?: string;
  /**
   * 结束创建时间
   * @format date-time
   */
  endCreateTime?: string;
}

/** 部门查询对象 */
export interface SysDeptQueryBo {
  /**
   * 部门id
   * @format int64
   */
  deptId?: number;
  /** 部门名称 */
  deptName?: string;
  /**
   * 父菜单ID
   * @format int64
   */
  parentId?: number;
  /** 部门状态（NORMAL=正常 DISABLE=停用） */
  status?: 'NORMAL' | 'DISABLE';
}

/** 响应信息主体 */
export interface RListTreeLong {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 数据对象 */
  data: TreeLong[];
}

export interface TreeLong {
  config?: TreeNodeConfig;
  weight?: object;
  /** @format int64 */
  parentId?: number;
  /** @format int64 */
  id?: number;
  name?: object;
  empty?: boolean;
  [key: string]: any;
}

export interface TreeNodeConfig {
  idKey?: string;
  parentIdKey?: string;
  weightKey?: string;
  nameKey?: string;
  childrenKey?: string;
  /** @format int32 */
  deep?: number;
}

/** 用户信息新增业务对象 */
export interface SysUserAddBo {
  /**
   * 部门ID
   * @format int64
   */
  deptId?: number;
  /**
   * 用户账号
   * @minLength 0
   * @maxLength 30
   */
  userName: string;
  /**
   * 用户昵称
   * @minLength 0
   * @maxLength 30
   */
  nickName: string;
  /** 用户类型（PC=电脑端 ANDROID=安卓app端 IOS=苹果app端 WXAPP=微信小程序端 WXMP=微信公众号端 ALIPAYAPP=支付宝小程序端） */
  userType?: 'PC' | 'ANDROID' | 'IOS' | 'WXAPP' | 'WXMP' | 'ALIPAYAPP';
  /**
   * 用户邮箱
   * @minLength 0
   * @maxLength 50
   */
  email?: string;
  /** 手机号码 */
  phoneNumber?: string;
  /** 用户性别（UNKNOWN=未知 MAN=男 WOMAN=女） */
  sex?: 'UNKNOWN' | 'MAN' | 'WOMAN';
  /** 用户头像 */
  avatar?: string;
  /** 密码 */
  password: string;
  /** 帐号状态（NORMAL=正常 DISABLE=停用） */
  status?: 'NORMAL' | 'DISABLE';
  /** 备注 */
  remark?: string;
  /** 角色组 */
  roleIds: number[];
  /** 岗位组 */
  postIds: number[];
}

/** 角色查询对象 */
export interface SysRolePageQueryBo {
  /**
   * 分页大小
   * @format int32
   */
  pageSize?: number;
  /**
   * 当前页数
   * @format int32
   */
  pageNum?: number;
  /** 排序列 */
  orderByColumn?: string;
  /**
   * 排序的方向
   * @example "asc,desc"
   */
  isAsc?: string;
  /**
   * 角色ID
   * @format int64
   */
  roleId?: number;
  /** 角色名称 */
  roleName?: string;
  /** 角色权限 */
  roleKey?: string;
  /** 角色状态（NORMAL=正常 DISABLE=停用） */
  status?: 'NORMAL' | 'DISABLE';
  /**
   * 开始创建时间
   * @format date-time
   */
  beginCreateTime?: string;
  /**
   * 结束创建时间
   * @format date-time
   */
  endCreateTime?: string;
}

/** 表格分页数据对象 */
export interface TableDataInfoSysRoleVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 分页数据对象 */
  data: TableDataSysRoleVo;
}

/** 分页数据对象 */
export interface TableDataSysRoleVo {
  /**
   * 总记录数
   * @format int64
   */
  total: number;
  /** 列表数据 */
  data: SysRoleVo[];
}

/** 角色查询对象 */
export interface SysRoleQueryBo {
  /**
   * 角色ID
   * @format int64
   */
  roleId?: number;
  /** 角色名称 */
  roleName?: string;
  /** 角色权限 */
  roleKey?: string;
  /** 角色状态（NORMAL=正常 DISABLE=停用） */
  status?: 'NORMAL' | 'DISABLE';
  /**
   * 开始创建时间
   * @format date-time
   */
  beginCreateTime?: string;
  /**
   * 结束创建时间
   * @format date-time
   */
  endCreateTime?: string;
}

/** 角色实体对象 */
export interface SysRole {
  /** 创建者 */
  createBy?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 更新者 */
  updateBy?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /**
   * 角色ID
   * @format int64
   */
  roleId?: number;
  /**
   * 角色名称
   * @minLength 0
   * @maxLength 30
   */
  roleName: string;
  /**
   * 角色权限
   * @minLength 0
   * @maxLength 100
   */
  roleKey: string;
  /**
   * 角色排序
   * @format int32
   */
  roleSort: number;
  /** 数据范围（ALL=全部数据权限 CUSTOM=自定数据权限 DEPT=本部门数据权限 DEPT_CHILD=本部门及以下数据权限 SELF=仅本人数据权限） */
  dataScope?: 'ALL' | 'CUSTOM' | 'DEPT' | 'DEPT_CHILD' | 'SELF';
  /** 菜单树选择项是否关联显示（NO=父子不互相关联显示 YES=父子互相关联显示） */
  menuCheckStrictly?: 'YES' | 'NO';
  /** 部门树选择项是否关联显示（NO=父子不互相关联显示 YES=父子互相关联显示 ） */
  deptCheckStrictly?: 'YES' | 'NO';
  /** 角色状态（NORMAL=正常 DISABLE=停用） */
  status: 'NORMAL' | 'DISABLE';
  /** 删除标志（EXIST=代表存在 DELETED=代表删除） */
  delFlag?: 'EXIST' | 'DELETED';
  /** 备注 */
  remark?: string;
  /** 用户是否存在此角色标识 默认不存在 */
  flag?: boolean;
  /** 菜单组 */
  menuIds: number[];
  /** 部门组（数据权限） */
  deptIds?: number[];
  /** 是否管理员 */
  admin?: boolean;
}

/** 批量授权用户表单对象 */
export interface AuthUserAllBo {
  /**
   * 角色ID
   * @format int64
   */
  roleId: number;
  /** 用户ID串 */
  userIds: number[];
}

/** 用户和角色关联 */
export interface SysUserRole {
  /**
   * 用户ID
   * @format int64
   */
  userId?: number;
  /**
   * 角色ID
   * @format int64
   */
  roleId?: number;
}

/** 岗位信息分页查询对象 */
export interface SysPostPageQueryBo {
  /**
   * 分页大小
   * @format int32
   */
  pageSize?: number;
  /**
   * 当前页数
   * @format int32
   */
  pageNum?: number;
  /** 排序列 */
  orderByColumn?: string;
  /**
   * 排序的方向
   * @example "asc,desc"
   */
  isAsc?: string;
  /** 岗位编码 */
  postCode?: string;
  /** 岗位名称 */
  postName?: string;
  /** 状态（NORMAL=正常 DISABLE=停用） */
  status?: 'NORMAL' | 'DISABLE';
}

/** 岗位信息视图对象 */
export interface SysPostVo {
  /** 创建者 */
  createBy: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
  /** 更新者 */
  updateBy?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /**
   * 岗位序号
   * @format int64
   */
  postId: number;
  /** 岗位编码 */
  postCode: string;
  /** 岗位名称 */
  postName: string;
  /**
   * 岗位排序
   * @format int32
   */
  postSort: number;
  /** 状态（NORMAL=正常 DISABLE=停用） */
  status: 'NORMAL' | 'DISABLE';
  /** 备注 */
  remark?: string;
  /** 用户是否存在此岗位标识 默认不存在 */
  flag: boolean;
}

/** 表格分页数据对象 */
export interface TableDataInfoSysPostVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 分页数据对象 */
  data: TableDataSysPostVo;
}

/** 分页数据对象 */
export interface TableDataSysPostVo {
  /**
   * 总记录数
   * @format int64
   */
  total: number;
  /** 列表数据 */
  data: SysPostVo[];
}

/** 岗位信息查询对象 */
export interface SysPostQueryBo {
  /** 岗位编码 */
  postCode?: string;
  /** 岗位名称 */
  postName?: string;
  /** 状态（NORMAL=正常 DISABLE=停用） */
  status?: 'NORMAL' | 'DISABLE';
}

/** 岗位信息修改业务对象 */
export interface SysPostEditBo {
  /**
   * 岗位序号
   * @format int64
   */
  postId: number;
  /**
   * 岗位编码
   * @minLength 0
   * @maxLength 64
   */
  postCode: string;
  /**
   * 岗位名称
   * @minLength 1
   * @maxLength 50
   */
  postName: string;
  /**
   * 岗位排序
   * @format int32
   */
  postSort: number;
  /** 状态（NORMAL=正常 DISABLE=停用） */
  status: 'NORMAL' | 'DISABLE';
  /** 备注 */
  remark?: string;
}

/** 岗位信息新增业务对象 */
export interface SysPostAddBo {
  /**
   * 岗位编码
   * @minLength 0
   * @maxLength 64
   */
  postCode: string;
  /**
   * 岗位名称
   * @minLength 1
   * @maxLength 50
   */
  postName: string;
  /**
   * 岗位排序
   * @format int32
   */
  postSort: number;
  /** 状态（NORMAL=正常 DISABLE=停用） */
  status: 'NORMAL' | 'DISABLE';
  /** 备注 */
  remark?: string;
}

/** OSS上传结果返回对象 */
export interface OssUploadVo {
  /** URL地址 */
  url?: string;
  /** 原名 */
  fileName?: string;
  /** 对象存储主键 */
  ossId?: string;
}

/** 响应信息主体 */
export interface ROssUploadVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** OSS上传结果返回对象 */
  data: OssUploadVo;
}

/** OSS对象存储分页查询对象 */
export interface SysOssPageQueryBo {
  /**
   * 分页大小
   * @format int32
   */
  pageSize?: number;
  /**
   * 当前页数
   * @format int32
   */
  pageNum?: number;
  /** 排序列 */
  orderByColumn?: string;
  /**
   * 排序的方向
   * @example "asc,desc"
   */
  isAsc?: string;
  /** 文件名 */
  fileName?: string;
  /** 原名 */
  originalName?: string;
  /** 文件后缀名 */
  fileSuffix?: string;
  /** URL地址 */
  url?: string;
  /** 服务商 */
  service?: string;
  /**
   * 开始创建时间
   * @format date-time
   */
  beginCreateTime?: string;
  /**
   * 结束创建时间
   * @format date-time
   */
  endCreateTime?: string;
  /** 创建者 */
  createBy?: string;
}

/** OSS对象存储视图对象 */
export interface SysOssVo {
  /** 上传人 */
  createBy?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
  /** 更新者 */
  updateBy?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /**
   * 对象存储主键
   * @format int64
   */
  ossId: number;
  /** 文件名 */
  fileName: string;
  /** 原名 */
  originalName: string;
  /** 文件后缀名 */
  fileSuffix: string;
  /** URL地址 */
  url: string;
  /** 服务商 */
  service: string;
}

/** 表格分页数据对象 */
export interface TableDataInfoSysOssVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 分页数据对象 */
  data: TableDataSysOssVo;
}

/** 分页数据对象 */
export interface TableDataSysOssVo {
  /**
   * 总记录数
   * @format int64
   */
  total: number;
  /** 列表数据 */
  data: SysOssVo[];
}

/** 对象存储配置分页查询对象 */
export interface SysOssConfigPageQueryBo {
  /**
   * 分页大小
   * @format int32
   */
  pageSize?: number;
  /**
   * 当前页数
   * @format int32
   */
  pageNum?: number;
  /** 排序列 */
  orderByColumn?: string;
  /**
   * 排序的方向
   * @example "asc,desc"
   */
  isAsc?: string;
  /** 配置key */
  configKey?: string;
  /** 桶名称 */
  bucketName?: string;
  /** 状态（NORMAL=正常 DISABLE=停用） */
  status?: 'NORMAL' | 'DISABLE';
}

/** 对象存储配置视图对象 */
export interface SysOssConfigVo {
  /** 创建者 */
  createBy: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
  /** 更新者 */
  updateBy?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /**
   * 主建
   * @format int64
   */
  ossConfigId: number;
  /** 配置key */
  configKey: string;
  /** accessKey */
  accessKey: string;
  /** secretKey */
  secretKey: string;
  /** 桶名称 */
  bucketName: string;
  /** 前缀 */
  prefix?: string;
  /** 访问站点 */
  endpoint: string;
  /** 自定义域名 */
  domain?: string;
  /** 是否https（NO=否 YES=是） */
  isHttps: 'YES' | 'NO';
  /** 域 */
  region?: string;
  /** 桶权限类型（PUBLIC=公开 PRIVATE=私有 CUSTOM=自定义） */
  accessPolicy: 'PUBLIC' | 'PRIVATE' | 'CUSTOM';
  /** 状态（NORMAL=正常 DISABLE=停用） */
  status: 'NORMAL' | 'DISABLE';
  /** 扩展字段 */
  ext1?: string;
  /** 备注 */
  remark?: string;
}

/** 表格分页数据对象 */
export interface TableDataInfoSysOssConfigVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 分页数据对象 */
  data: TableDataSysOssConfigVo;
}

/** 分页数据对象 */
export interface TableDataSysOssConfigVo {
  /**
   * 总记录数
   * @format int64
   */
  total: number;
  /** 列表数据 */
  data: SysOssConfigVo[];
}

/** 对象存储配置修改业务对象 */
export interface SysOssConfigEditBo {
  /**
   * 主建
   * @format int64
   */
  ossConfigId: number;
  /**
   * 配置key
   * @minLength 2
   * @maxLength 100
   */
  configKey?: string;
  /**
   * accessKey
   * @minLength 2
   * @maxLength 100
   */
  accessKey?: string;
  /**
   * secretKey
   * @minLength 2
   * @maxLength 100
   */
  secretKey?: string;
  /**
   * 桶名称
   * @minLength 2
   * @maxLength 100
   */
  bucketName?: string;
  /** 前缀 */
  prefix?: string;
  /**
   * 访问站点
   * @minLength 2
   * @maxLength 100
   */
  endpoint?: string;
  /** 自定义域名 */
  domain?: string;
  /** 是否https（NO=否 YES=是） */
  isHttps?: 'YES' | 'NO';
  /** 桶权限类型（PUBLIC=公开 PRIVATE=私有 CUSTOM=自定义） */
  accessPolicy?: 'PUBLIC' | 'PRIVATE' | 'CUSTOM';
  /** 状态（NORMAL=正常 DISABLE=停用） */
  status?: 'NORMAL' | 'DISABLE';
  /** 域 */
  region?: string;
  /** 扩展字段 */
  ext1?: string;
  /** 备注 */
  remark?: string;
}

/** 对象存储配置新增业务对象 */
export interface SysOssConfigAddBo {
  /**
   * 配置key
   * @minLength 2
   * @maxLength 100
   */
  configKey: string;
  /**
   * accessKey
   * @minLength 2
   * @maxLength 100
   */
  accessKey: string;
  /**
   * secretKey
   * @minLength 2
   * @maxLength 100
   */
  secretKey: string;
  /**
   * 桶名称
   * @minLength 2
   * @maxLength 100
   */
  bucketName: string;
  /** 前缀 */
  prefix?: string;
  /**
   * 访问站点
   * @minLength 2
   * @maxLength 100
   */
  endpoint: string;
  /** 自定义域名 */
  domain?: string;
  /** 是否https（NO=否 YES=是） */
  isHttps?: 'YES' | 'NO';
  /** 桶权限类型（PUBLIC=公开 PRIVATE=私有 CUSTOM=自定义） */
  accessPolicy: 'PUBLIC' | 'PRIVATE' | 'CUSTOM';
  /** 状态（NORMAL=正常 DISABLE=停用） */
  status?: 'NORMAL' | 'DISABLE';
  /** 域 */
  region?: string;
  /** 扩展字段 */
  ext1?: string;
  /** 备注 */
  remark?: string;
}

/** 通知公告分页查询对象 */
export interface SysNoticePageQueryBo {
  /**
   * 分页大小
   * @format int32
   */
  pageSize?: number;
  /**
   * 当前页数
   * @format int32
   */
  pageNum?: number;
  /** 排序列 */
  orderByColumn?: string;
  /**
   * 排序的方向
   * @example "asc,desc"
   */
  isAsc?: string;
  /** 公告标题 */
  noticeTitle?: string;
  /** 公告类型（NOTICE=通知 BULLETIN=公告） */
  noticeType?: 'NOTICE' | 'BULLETIN';
  /** 创建者 */
  createBy?: string;
}

/** 通知公告视图对象 */
export interface SysNoticeVo {
  /** 创建者 */
  createBy: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
  /** 更新者 */
  updateBy?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /**
   * 公告ID
   * @format int64
   */
  noticeId: number;
  /** 公告标题 */
  noticeTitle: string;
  /** 公告类型（NOTICE=通知 BULLETIN=公告） */
  noticeType: 'NOTICE' | 'BULLETIN';
  /** 公告内容 */
  noticeContent: string;
  /** 公告状态（NORMAL=正常 DISABLE=关闭） */
  status: 'NORMAL' | 'DISABLE';
  /** 备注 */
  remark?: string;
}

/** 表格分页数据对象 */
export interface TableDataInfoSysNoticeVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 分页数据对象 */
  data: TableDataSysNoticeVo;
}

/** 分页数据对象 */
export interface TableDataSysNoticeVo {
  /**
   * 总记录数
   * @format int64
   */
  total: number;
  /** 列表数据 */
  data: SysNoticeVo[];
}

/** 通知公告编辑业务对象 */
export interface SysNoticeEditBo {
  /**
   * 公告ID
   * @format int64
   */
  noticeId: number;
  /**
   * 公告标题
   * @minLength 0
   * @maxLength 50
   */
  noticeTitle?: string;
  /** 公告类型（NOTICE=通知 BULLETIN=公告） */
  noticeType?: 'NOTICE' | 'BULLETIN';
  /** 公告内容 */
  noticeContent?: string;
  /** 公告状态（NORMAL=正常 DISABLE=关闭） */
  status?: 'NORMAL' | 'DISABLE';
  /** 备注 */
  remark?: string;
}

/** 通知公告新增业务对象 */
export interface SysNoticeAddBo {
  /**
   * 公告标题
   * @minLength 0
   * @maxLength 50
   */
  noticeTitle: string;
  /** 公告类型（NOTICE=通知 BULLETIN=公告） */
  noticeType: 'NOTICE' | 'BULLETIN';
  /** 公告内容 */
  noticeContent: string;
  /** 公告状态（NORMAL=正常 DISABLE=关闭） */
  status: 'NORMAL' | 'DISABLE';
  /** 备注 */
  remark?: string;
}

/** 菜单权限查询对象 */
export interface SysMenuQueryBo {
  /**
   * 分页大小
   * @format int32
   */
  pageSize?: number;
  /**
   * 当前页数
   * @format int32
   */
  pageNum?: number;
  /** 排序列 */
  orderByColumn?: string;
  /**
   * 排序的方向
   * @example "asc,desc"
   */
  isAsc?: string;
  /** 菜单名称 */
  menuName?: string;
  /** 显示状态（Y显示 N隐藏） */
  visible?: 'YES' | 'NO';
  /** 菜单状态（N正常 D停用） */
  status?: 'NORMAL' | 'DISABLE';
}

/** 响应信息主体 */
export interface RListSysMenuVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 数据对象 */
  data: SysMenuVo[];
}

/** 菜单权限视图对象 */
export interface SysMenuVo {
  /** 创建者 */
  createBy: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
  /** 更新者 */
  updateBy?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** 父菜单名称 */
  parentName?: string;
  /**
   * 父菜单ID
   * @format int64
   */
  parentId?: number;
  /** 子部门 */
  children?: SysMenuVo[];
  /**
   * 菜单ID
   * @format int64
   */
  menuId: number;
  /** 菜单名称 */
  menuName: string;
  /**
   * 显示顺序
   * @format int32
   */
  orderNum: number;
  /** 路由地址 */
  path?: string;
  /** 组件路径 */
  component?: string;
  /** 路由参数 */
  queryParam?: string;
  /** 是否为外链（YES=缓存 NO=不缓存） */
  isFrame: 'YES' | 'NO';
  /** 是否缓存（YES=缓存 NO=不缓存） */
  isCache: 'YES' | 'NO';
  /** 类型（DIRECTORY=目录 MENU=菜单 BUTTON=按钮） */
  menuType: 'DIRECTORY' | 'MENU' | 'BUTTON';
  /** 显示状态（YES=显示 NO=隐藏） */
  visible: 'YES' | 'NO';
  /** 菜单状态（NORMAL=正常 DISABLE=停用） */
  status: 'NORMAL' | 'DISABLE';
  /** 权限字符串 */
  perms?: string;
  /** 菜单图标 */
  icon?: string;
  /** 备注 */
  remark?: string;
}

/** 菜单权限业务对象 */
export interface SysMenu {
  /** 创建者 */
  createBy?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 更新者 */
  updateBy?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** 父菜单名称 */
  parentName?: string;
  /**
   * 父菜单ID
   * @format int64
   */
  parentId?: number;
  /** 子级数据 */
  children?: SysMenu[];
  /**
   * 菜单ID
   * @format int64
   */
  menuId?: number;
  /**
   * 菜单名称
   * @minLength 0
   * @maxLength 50
   */
  menuName: string;
  /**
   * 显示顺序
   * @format int32
   */
  orderNum: number;
  /**
   * 路由地址
   * @minLength 0
   * @maxLength 200
   */
  path?: string;
  /**
   * 组件路径
   * @minLength 0
   * @maxLength 200
   */
  component?: string;
  /** 路由参数 */
  queryParam?: string;
  /** 是否为外链（YES=是 NO=否） */
  isFrame?: 'YES' | 'NO';
  /** 是否缓存（YES=缓存 NO=不缓存） */
  isCache?: 'YES' | 'NO';
  /** 类型（DIRECTORY=目录 MENU=菜单 BUTTON=按钮） */
  menuType: 'DIRECTORY' | 'MENU' | 'BUTTON';
  /** 显示状态（YES=显示 NO=隐藏） */
  visible?: 'YES' | 'NO';
  /** 菜单状态（NORMAL=正常 DISABLE=停用） */
  status?: 'NORMAL' | 'DISABLE';
  /**
   * 权限字符串
   * @minLength 0
   * @maxLength 100
   */
  perms?: string;
  /** 菜单图标 */
  icon?: string;
  /** 备注 */
  remark?: string;
}

/** 菜单权限编辑业务对象 */
export interface SysMenuEditBo {
  /**
   * 菜单ID
   * @format int64
   */
  menuId: number;
  /**
   * 菜单名称
   * @minLength 1
   * @maxLength 50
   */
  menuName?: string;
  /**
   * 显示顺序
   * @format int32
   */
  orderNum?: number;
  /**
   * 路由地址
   * @minLength 0
   * @maxLength 200
   */
  path?: string;
  /**
   * 组件路径
   * @minLength 0
   * @maxLength 200
   */
  component?: string;
  /** 路由参数 */
  queryParam?: string;
  /** 是否为外链（Y是 N否） */
  isFrame?: 'YES' | 'NO';
  /** 是否缓存（Y缓存 N不缓存） */
  isCache?: 'YES' | 'NO';
  /** 类型（D目录 M菜单 B按钮） */
  menuType?: 'DIRECTORY' | 'MENU' | 'BUTTON';
  /** 显示状态（Y显示 N隐藏） */
  visible?: 'YES' | 'NO';
  /** 菜单状态（N正常 D停用） */
  status?: 'NORMAL' | 'DISABLE';
  /**
   * 权限字符串
   * @minLength 1
   * @maxLength 100
   */
  perms?: string;
  /** 菜单图标 */
  icon?: string;
  /** 备注 */
  remark?: string;
  /** 父菜单名称 */
  parentName?: string;
  /**
   * 父菜单ID
   * @format int64
   */
  parentId?: number;
  /** 子菜单 */
  children?: SysMenu[];
}

/** 菜单权限新增业务对象 */
export interface SysMenuAddBo {
  /**
   * 菜单名称
   * @minLength 0
   * @maxLength 50
   */
  menuName: string;
  /**
   * 显示顺序
   * @format int32
   */
  orderNum: number;
  /**
   * 路由地址
   * @minLength 0
   * @maxLength 200
   */
  path?: string;
  /**
   * 组件路径
   * @minLength 0
   * @maxLength 200
   */
  component?: string;
  /** 路由参数 */
  queryParam?: string;
  /** 是否为外链（Y是 N否） */
  isFrame?: 'YES' | 'NO';
  /** 是否缓存（Y缓存 N不缓存） */
  isCache?: 'YES' | 'NO';
  /** 类型（D目录 M菜单 B按钮） */
  menuType: 'DIRECTORY' | 'MENU' | 'BUTTON';
  /** 显示状态（Y显示 N隐藏） */
  visible?: 'YES' | 'NO';
  /** 菜单状态（N正常 D停用） */
  status?: 'NORMAL' | 'DISABLE';
  /**
   * 权限字符串
   * @minLength 0
   * @maxLength 100
   */
  perms?: string;
  /** 菜单图标 */
  icon?: string;
  /** 备注 */
  remark?: string;
  /** 父菜单名称 */
  parentName?: string;
  /**
   * 父菜单ID
   * @format int64
   */
  parentId?: number;
  /** 子菜单 */
  children?: SysMenu[];
}

/** 业务用户登录记录业务分页查询对象 */
export interface BizLogininforPageQueryBo {
  /**
   * 分页大小
   * @format int32
   */
  pageSize?: number;
  /**
   * 当前页数
   * @format int32
   */
  pageNum?: number;
  /** 排序列 */
  orderByColumn?: string;
  /**
   * 排序的方向
   * @example "asc,desc"
   */
  isAsc?: string;
  /** 用户名(也可能是手机号等) */
  userName?: string;
  /** 登录状态（LOGINOK=登录成功 LOGINFAIL=登录失败 LOGOUT=注销登录 REGISTER=注册） */
  status?: 'LOGINOK' | 'LOGINFAIL' | 'LOGOUT' | 'REGISTER';
  /**
   * 创建开始时间
   * @format date-time
   */
  createBeginTime?: string;
  /**
   * 创建结束时间
   * @format date-time
   */
  createEndTime?: string;
}

/** 业务用户登录记录视图对象 */
export interface BizLogininforVo {
  /**
   * 访问ID
   * @format int64
   */
  infoId: number;
  /** 用户名(也可能是手机号等) */
  userName: string;
  /** 登录IP地址 */
  ipaddr: string;
  /** 登录地点 */
  loginLocation?: string;
  /** 浏览器类型 */
  browser?: string;
  /** 操作系统 */
  os?: string;
  /** 登录状态（LOGINOK=登录成功 LOGINFAIL=登录失败 LOGOUT=注销登录 REGISTER=注册） */
  status: 'LOGINOK' | 'LOGINFAIL' | 'LOGOUT' | 'REGISTER';
  /** 提示消息 */
  msg?: string;
  /**
   * 访问时间
   * @format date-time
   */
  loginTime: string;
}

/** 分页数据对象 */
export interface TableDataBizLogininforVo {
  /**
   * 总记录数
   * @format int64
   */
  total: number;
  /** 列表数据 */
  data: BizLogininforVo[];
}

/** 表格分页数据对象 */
export interface TableDataInfoBizLogininforVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 分页数据对象 */
  data: TableDataBizLogininforVo;
}

/** 业务用户登录记录业务查询对象 */
export interface BizLogininforQueryBo {
  /** 用户名(也可能是手机号等) */
  userName?: string;
  /** 登录状态（LOGINOK=登录成功 LOGINFAIL=登录失败 LOGOUT=注销登录 REGISTER=注册） */
  status?: 'LOGINOK' | 'LOGINFAIL' | 'LOGOUT' | 'REGISTER';
  /**
   * 创建开始时间
   * @format date-time
   */
  createBeginTime?: string;
  /**
   * 创建结束时间
   * @format date-time
   */
  createEndTime?: string;
}

/** 业务用户登录记录业务编辑对象 */
export interface BizLogininforEditBo {
  /**
   * 访问ID
   * @format int64
   */
  infoId: number;
  /** 用户名(也可能是手机号等) */
  userName: string;
  /** 登录IP地址 */
  ipaddr: string;
  /** 登录地点 */
  loginLocation?: string;
  /** 浏览器类型 */
  browser?: string;
  /** 操作系统 */
  os?: string;
  /** 登录状态（LOGINOK=登录成功 LOGINFAIL=登录失败 LOGOUT=注销登录 REGISTER=注册） */
  status: 'LOGINOK' | 'LOGINFAIL' | 'LOGOUT' | 'REGISTER';
  /** 提示消息 */
  msg?: string;
  /**
   * 访问时间
   * @format date-time
   */
  loginTime: string;
}

/** 业务用户登录记录业务新增对象 */
export interface BizLogininforAddBo {
  /** 用户名(也可能是手机号等) */
  userName: string;
  /** 登录IP地址 */
  ipaddr: string;
  /** 登录地点 */
  loginLocation?: string;
  /** 浏览器类型 */
  browser?: string;
  /** 操作系统 */
  os?: string;
  /** 登录状态（LOGINOK=登录成功 LOGINFAIL=登录失败 LOGOUT=注销登录 REGISTER=注册） */
  status: 'LOGINOK' | 'LOGINFAIL' | 'LOGOUT' | 'REGISTER';
  /** 提示消息 */
  msg?: string;
  /**
   * 访问时间
   * @format date-time
   */
  loginTime: string;
}

/** 字典类型分页查询对象 */
export interface SysDictTypePageQueryBo {
  /**
   * 分页大小
   * @format int32
   */
  pageSize?: number;
  /**
   * 当前页数
   * @format int32
   */
  pageNum?: number;
  /** 排序列 */
  orderByColumn?: string;
  /**
   * 排序的方向
   * @example "asc,desc"
   */
  isAsc?: string;
  /** 字典名称 */
  dictName?: string;
  /** 字典类型 */
  dictType?: string;
  /** 状态（NORMAL=正常 DISABLE=停用） */
  status?: 'NORMAL' | 'DISABLE';
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
}

/** 字典类型视图对象 */
export interface SysDictTypeVo {
  /** 创建者 */
  createBy: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
  /** 更新者 */
  updateBy?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /**
   * 字典主键
   * @format int64
   */
  dictId: number;
  /** 字典名称 */
  dictName: string;
  /** 字典类型 */
  dictType: string;
  /** 状态（NORMAL=正常 DISABLE=停用） */
  status: 'NORMAL' | 'DISABLE';
  /** 备注 */
  remark?: string;
}

/** 表格分页数据对象 */
export interface TableDataInfoSysDictTypeVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 分页数据对象 */
  data: TableDataSysDictTypeVo;
}

/** 分页数据对象 */
export interface TableDataSysDictTypeVo {
  /**
   * 总记录数
   * @format int64
   */
  total: number;
  /** 列表数据 */
  data: SysDictTypeVo[];
}

/** 字典类型查询对象 */
export interface SysDictTypeQueryBo {
  /** 字典名称 */
  dictName?: string;
  /** 字典类型 */
  dictType?: string;
  /** 状态（NORMAL=正常 DISABLE=停用） */
  status?: 'NORMAL' | 'DISABLE';
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
}

/** 字典类型编辑业务对象 */
export interface SysDictTypeEditBo {
  /**
   * 字典主键
   * @format int64
   */
  dictId: number;
  /** 字典名称 */
  dictName?: string;
  /** 字典类型 */
  dictType?: string;
  /** 状态（NORMAL=正常 DISABLE=停用） */
  status?: 'NORMAL' | 'DISABLE';
  /** 备注 */
  remark?: string;
}

/** 字典类型新增业务对象 */
export interface SysDictTypeAddBo {
  /** 字典名称 */
  dictName: string;
  /** 字典类型 */
  dictType: string;
  /** 状态（NORMAL=正常 DISABLE=停用） */
  status?: 'NORMAL' | 'DISABLE';
  /** 备注 */
  remark?: string;
}

/** 字典数据分页查询对象 */
export interface SysDictDataPageQueryBo {
  /**
   * 分页大小
   * @format int32
   */
  pageSize?: number;
  /**
   * 当前页数
   * @format int32
   */
  pageNum?: number;
  /** 排序列 */
  orderByColumn?: string;
  /**
   * 排序的方向
   * @example "asc,desc"
   */
  isAsc?: string;
  /** 字典标签 */
  dictLabel?: string;
  /** 字典类型 */
  dictType?: string;
  /** 状态（NORMAL=正常 DISABLE=停用） */
  status?: 'NORMAL' | 'DISABLE';
}

/** 字典数据视图对象 */
export interface SysDictDataVo {
  /** 创建者 */
  createBy: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
  /** 更新者 */
  updateBy?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /**
   * 字典编码
   * @format int64
   */
  dictCode: number;
  /**
   * 字典排序
   * @format int32
   */
  dictSort: number;
  /** 字典标签 */
  dictLabel: string;
  /** 字典键值 */
  dictValue: string;
  /** 字典类型 */
  dictType: string;
  /** 样式属性（其他样式扩展） */
  cssClass?: string;
  /** 表格字典样式 */
  listClass?: string;
  /** 是否默认（YES=是 NO=否） */
  isDefault: 'YES' | 'NO';
  /** 状态（NORMAL=正常 DISABLE=停用） */
  status: 'NORMAL' | 'DISABLE';
  /** 备注 */
  remark?: string;
}

/** 表格分页数据对象 */
export interface TableDataInfoSysDictDataVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 分页数据对象 */
  data: TableDataSysDictDataVo;
}

/** 分页数据对象 */
export interface TableDataSysDictDataVo {
  /**
   * 总记录数
   * @format int64
   */
  total: number;
  /** 列表数据 */
  data: SysDictDataVo[];
}

/** 字典数据查询对象 */
export interface SysDictDataQueryBo {
  /** 字典标签 */
  dictLabel?: string;
  /** 字典类型 */
  dictType?: string;
  /** 状态（NORMAL=正常 DISABLE=停用） */
  status?: 'NORMAL' | 'DISABLE';
}

/** 字典数据编辑业务对象 */
export interface SysDictDataEditBo {
  /**
   * 字典编码
   * @format int64
   */
  dictCode: number;
  /**
   * 字典排序
   * @format int32
   */
  dictSort?: number;
  /**
   * 字典标签
   * @minLength 0
   * @maxLength 100
   */
  dictLabel?: string;
  /**
   * 字典键值
   * @minLength 0
   * @maxLength 100
   */
  dictValue?: string;
  /**
   * 字典类型
   * @minLength 0
   * @maxLength 100
   */
  dictType?: string;
  /**
   * 样式属性（其他样式扩展）
   * @minLength 0
   * @maxLength 100
   */
  cssClass?: string;
  /** 表格字典样式 */
  listClass?: string;
  /** 是否默认（YES=是 NO=否） */
  isDefault?: 'YES' | 'NO';
  /** 状态（NORMAL=正常 DISABLE=停用） */
  status?: 'NORMAL' | 'DISABLE';
  /** 备注 */
  remark?: string;
}

/** 字典数据新增业务对象 */
export interface SysDictDataAddBo {
  /**
   * 字典排序
   * @format int32
   */
  dictSort?: number;
  /**
   * 字典标签
   * @minLength 0
   * @maxLength 100
   */
  dictLabel: string;
  /**
   * 字典键值
   * @minLength 0
   * @maxLength 100
   */
  dictValue: string;
  /**
   * 字典类型
   * @minLength 0
   * @maxLength 100
   */
  dictType: string;
  /**
   * 样式属性（其他样式扩展）
   * @minLength 0
   * @maxLength 100
   */
  cssClass?: string;
  /** 表格字典样式 */
  listClass?: string;
  /** 是否默认（YES=是 NO=否） */
  isDefault?: 'YES' | 'NO';
  /** 状态（NORMAL=正常 DISABLE=停用） */
  status?: 'NORMAL' | 'DISABLE';
  /** 备注 */
  remark?: string;
}

/** 响应信息主体 */
export interface RListSysDeptVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 数据对象 */
  data: SysDeptVo[];
}

/** 部门业务对象 */
export interface SysDept {
  /** 创建者 */
  createBy?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 更新者 */
  updateBy?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** 父菜单名称 */
  parentName?: string;
  /**
   * 父菜单ID
   * @format int64
   */
  parentId?: number;
  /** 子级数据 */
  children?: SysDept[];
  /**
   * 部门id
   * @format int64
   */
  deptId?: number;
  /**
   * 部门名称
   * @minLength 0
   * @maxLength 30
   */
  deptName: string;
  /**
   * 显示顺序
   * @format int32
   */
  orderNum: number;
  /** 负责人 */
  leader?: string;
  /**
   * 联系电话
   * @minLength 0
   * @maxLength 11
   */
  phone?: string;
  /**
   * 邮箱
   * @minLength 0
   * @maxLength 50
   */
  email?: string;
  /** 部门状态（NORMAL=正常 DISABLE=停用） */
  status?: 'NORMAL' | 'DISABLE';
  /** 删除标志（EXIST=代表存在 DELETED=代表删除） */
  delFlag?: 'EXIST' | 'DELETED';
  /** 祖级列表 */
  ancestors?: string;
}

/** 部门编辑业务对象 */
export interface SysDeptEditBo {
  /**
   * 部门id
   * @format int64
   */
  deptId: number;
  /**
   * 部门名称
   * @minLength 1
   * @maxLength 30
   */
  deptName: string;
  /**
   * 显示顺序
   * @format int32
   */
  orderNum: number;
  /** 负责人 */
  leader?: string;
  /**
   * 联系电话
   * @minLength 0
   * @maxLength 11
   */
  phone?: string;
  /**
   * 邮箱
   * @minLength 0
   * @maxLength 50
   */
  email?: string;
  /** 部门状态（NORMAL=正常 DISABLE=停用） */
  status?: 'NORMAL' | 'DISABLE';
  /** 删除标志（EXIST=代表存在 DELETED=代表删除） */
  delFlag?: 'EXIST' | 'DELETED';
  /** 祖级列表 */
  ancestors?: string;
  /** 父菜单名称 */
  parentName?: string;
  /**
   * 父菜单ID, 无父级则传0
   * @format int64
   */
  parentId: number;
  /** 子部门 */
  children?: SysDept[];
}

/** 部门新增业务对象 */
export interface SysDeptAddBo {
  /**
   * 部门名称
   * @minLength 0
   * @maxLength 30
   */
  deptName: string;
  /**
   * 显示顺序
   * @format int32
   */
  orderNum: number;
  /** 负责人 */
  leader?: string;
  /**
   * 联系电话
   * @minLength 0
   * @maxLength 11
   */
  phone?: string;
  /**
   * 邮箱
   * @minLength 0
   * @maxLength 50
   */
  email?: string;
  /** 部门状态（NORMAL=正常 DISABLE=停用） */
  status?: 'NORMAL' | 'DISABLE';
  /** 删除标志（EXIST=代表存在 DELETED=代表删除） */
  delFlag?: 'EXIST' | 'DELETED';
  /** 祖级列表 */
  ancestors?: string;
  /** 父菜单名称 */
  parentName?: string;
  /**
   * 父菜单ID
   * @format int64
   */
  parentId?: number;
  /** 子部门 */
  children?: SysDept[];
}

/** 参数配置修改业务对象 */
export interface SysConfigEditBo {
  /**
   * 参数主键
   * @format int64
   */
  configId: number;
  /**
   * 参数名称
   * @minLength 1
   * @maxLength 100
   */
  configName?: string;
  /**
   * 参数键名
   * @minLength 1
   * @maxLength 100
   */
  configKey?: string;
  /** 参数值类型 */
  valueType?: 'TEXT' | 'BOOLEAN' | 'DATETIME';
  /**
   * 参数键值
   * @minLength 1
   * @maxLength 500
   */
  configValue?: string;
  /** 系统内置（YES=是 NO=否） */
  configType?: 'YES' | 'NO';
  /** 备注 */
  remark?: string;
}

/** 参数配置分页查询对象 */
export interface SysConfigPageQueryBo {
  /**
   * 分页大小
   * @format int32
   */
  pageSize?: number;
  /**
   * 当前页数
   * @format int32
   */
  pageNum?: number;
  /** 排序列 */
  orderByColumn?: string;
  /**
   * 排序的方向
   * @example "asc,desc"
   */
  isAsc?: string;
  /** 参数名称 */
  configName?: string;
  /** 参数键名 */
  configKey?: string;
  /** 系统内置（YES=是 NO=否） */
  configType?: 'YES' | 'NO';
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
}

/** 参数配置视图对象 */
export interface SysConfigVo {
  /** 创建者 */
  createBy: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
  /** 更新者 */
  updateBy?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /**
   * 参数主键
   * @format int64
   */
  configId: number;
  /** 参数名称 */
  configName: string;
  /** 参数键名 */
  configKey: string;
  /** 参数键值 */
  configValue: string;
  /** 系统内置（YES=是 NO=否） */
  configType: 'YES' | 'NO';
  /** 备注 */
  remark?: string;
}

/** 表格分页数据对象 */
export interface TableDataInfoSysConfigVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 分页数据对象 */
  data: TableDataSysConfigVo;
}

/** 分页数据对象 */
export interface TableDataSysConfigVo {
  /**
   * 总记录数
   * @format int64
   */
  total: number;
  /** 列表数据 */
  data: SysConfigVo[];
}

/** 参数配置查询对象 */
export interface SysConfigQueryBo {
  /** 参数名称 */
  configName?: string;
  /** 参数键名 */
  configKey?: string;
  /** 系统内置（YES=是 NO=否） */
  configType?: 'YES' | 'NO';
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
}

/** 参数配置新增业务对象 */
export interface SysConfigAddBo {
  /**
   * 参数名称
   * @minLength 1
   * @maxLength 100
   */
  configName: string;
  /**
   * 参数键名
   * @minLength 1
   * @maxLength 100
   */
  configKey: string;
  /** 参数值类型 */
  valueType: 'TEXT' | 'BOOLEAN' | 'DATETIME';
  /**
   * 参数键值
   * @minLength 1
   * @maxLength 500
   */
  configValue: string;
  /** 系统内置（YES=是 NO=否） */
  configType?: 'YES' | 'NO';
  /** 备注 */
  remark?: string;
}

/** 短信登录对象 */
export interface SmsLoginBo {
  /** 用户手机号 */
  phoneNumber: string;
  /** 短信验证码 */
  smsCode: string;
}

/** 用户登录返回对象 */
export interface LoginVo {
  /** 身份令牌 */
  token: string;
}

/** 响应信息主体 */
export interface RLoginVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 用户登录返回对象 */
  data: LoginVo;
}

/** 用户名账户注册对象 */
export interface UserNameRegisterBo {
  /** 用户名 */
  username: string;
  /** 用户密码 */
  password: string;
  /** 验证码 */
  code: string;
  /** 唯一标识 */
  uuid: string;
  /** 用户类型 */
  userType?: 'PC' | 'ANDROID' | 'IOS' | 'WXAPP' | 'WXMP' | 'ALIPAYAPP';
}

/** 操作日志记录分页查询对象 */
export interface SysOperLogPageQueryBo {
  /**
   * 分页大小
   * @format int32
   */
  pageSize?: number;
  /**
   * 当前页数
   * @format int32
   */
  pageNum?: number;
  /** 排序列 */
  orderByColumn?: string;
  /**
   * 排序的方向
   * @example "asc,desc"
   */
  isAsc?: string;
  /** 操作模块 */
  title?: string;
  /** 业务类型（ADD=新增 MODIFY=修改 DELETE=删除 GRANT=授权 EXPORT=导出 IMPORT=导入 FORCED=强退 GENCODE=生成代码 CLEAR=清空数据 OTHER=其他） */
  businessType?: 'ADD' | 'MODIFY' | 'DELETE' | 'GRANT' | 'EXPORT' | 'IMPORT' | 'FORCED' | 'GENCODE' | 'CLEAR' | 'OTHER';
  /** 业务类型数组 */
  businessTypes?: number[];
  /** 操作人员 */
  operName?: string;
  /** 操作状态（NORMAL=正常 EXCEPTION=异常） */
  status?: 'NORMAL' | 'EXCEPTION';
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
}

/** 操作日志记录视图对象 */
export interface SysOperLogVo {
  /**
   * 日志主键
   * @format int64
   */
  operId: number;
  /** 操作模块 */
  title: string;
  /** 业务类型（ADD=新增 MODIFY=修改 DELETE=删除 GRANT=授权 EXPORT=导出 IMPORT=导入 FORCED=强退 GENCODE=生成代码 CLEAR=清空数据 OTHER=其他） */
  businessType: 'ADD' | 'MODIFY' | 'DELETE' | 'GRANT' | 'EXPORT' | 'IMPORT' | 'FORCED' | 'GENCODE' | 'CLEAR' | 'OTHER';
  /** 业务类型数组 */
  businessTypes: number[];
  /** 请求方法 */
  method: string;
  /** 请求方式 */
  requestMethod: string;
  /** 操作类别（PC=电脑端 ANDROID=安卓app端 IOS=苹果app端 WXAPP=微信小程序端 WXMP=微信公众号端 ALIPAYAPP=支付宝小程序端） */
  operatorType: 'PC' | 'ANDROID' | 'IOS' | 'WXAPP' | 'WXMP' | 'ALIPAYAPP';
  /** 操作人员 */
  operName: string;
  /** 部门名称 */
  deptName?: string;
  /** 请求url */
  operUrl: string;
  /** 操作地址 */
  operIp: string;
  /** 操作地点 */
  operLocation?: string;
  /** 请求参数 */
  operParam: string;
  /** 返回参数 */
  jsonResult?: string;
  /** 操作状态（NORMAL=正常 EXCEPTION=异常） */
  status: 'NORMAL' | 'EXCEPTION';
  /** 错误消息 */
  errorMsg?: string;
  /**
   * 操作时间
   * @format date-time
   */
  operTime: string;
}

/** 表格分页数据对象 */
export interface TableDataInfoSysOperLogVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 分页数据对象 */
  data: TableDataSysOperLogVo;
}

/** 分页数据对象 */
export interface TableDataSysOperLogVo {
  /**
   * 总记录数
   * @format int64
   */
  total: number;
  /** 列表数据 */
  data: SysOperLogVo[];
}

/** 操作日志记录查询对象 */
export interface SysOperLogQueryBo {
  /** 操作模块 */
  title?: string;
  /** 业务类型（ADD=新增 MODIFY=修改 DELETE=删除 GRANT=授权 EXPORT=导出 IMPORT=导入 FORCED=强退 GENCODE=生成代码 CLEAR=清空数据 OTHER=其他） */
  businessType?: 'ADD' | 'MODIFY' | 'DELETE' | 'GRANT' | 'EXPORT' | 'IMPORT' | 'FORCED' | 'GENCODE' | 'CLEAR' | 'OTHER';
  /** 业务类型数组 */
  businessTypes?: number[];
  /** 操作人员 */
  operName?: string;
  /** 操作状态（NORMAL=正常 EXCEPTION=异常） */
  status?: 'NORMAL' | 'EXCEPTION';
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
}

/** 系统访问记录分页查询对象 */
export interface SysLogininforPageQueryBo {
  /**
   * 分页大小
   * @format int32
   */
  pageSize?: number;
  /**
   * 当前页数
   * @format int32
   */
  pageNum?: number;
  /** 排序列 */
  orderByColumn?: string;
  /**
   * 排序的方向
   * @example "asc,desc"
   */
  isAsc?: string;
  /** 用户账号 */
  userName?: string;
  /** 登录状态（LOGINOK=登录成功 LOGINFAIL=登录失败 LOGOUT=注销登录 REGISTER=注册） */
  status?: 'LOGINOK' | 'LOGINFAIL' | 'LOGOUT' | 'REGISTER';
  /** 登录IP地址 */
  ipaddr?: string;
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
}

/** 系统访问记录视图返回对象 */
export interface SysLogininforVo {
  /**
   * 访问ID
   * @format int64
   */
  infoId: number;
  /** 用户账号 */
  userName: string;
  /** 登录状态（LOGINOK=登录成功 LOGINFAIL=登录失败 LOGOUT=注销登录 REGISTER=注册） */
  status: 'LOGINOK' | 'LOGINFAIL' | 'LOGOUT' | 'REGISTER';
  /** 登录IP地址 */
  ipaddr: string;
  /** 登录地点 */
  loginLocation: string;
  /** 浏览器类型 */
  browser: string;
  /** 操作系统 */
  os: string;
  /** 提示消息 */
  msg: string;
  /**
   * 访问时间
   * @format date-time
   */
  loginTime: string;
}

/** 表格分页数据对象 */
export interface TableDataInfoSysLogininforVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 分页数据对象 */
  data: TableDataSysLogininforVo;
}

/** 分页数据对象 */
export interface TableDataSysLogininforVo {
  /**
   * 总记录数
   * @format int64
   */
  total: number;
  /** 列表数据 */
  data: SysLogininforVo[];
}

/** 系统访问记录查询对象 */
export interface SysLogininforQueryBo {
  /** 用户账号 */
  userName?: string;
  /** 登录状态（LOGINOK=登录成功 LOGINFAIL=登录失败 LOGOUT=注销登录 REGISTER=注册） */
  status?: 'LOGINOK' | 'LOGINFAIL' | 'LOGOUT' | 'REGISTER';
  /** 登录IP地址 */
  ipaddr?: string;
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
}

/** 用户密码登录表单对象 */
export interface UserNameLoginBo {
  /** 用户名 */
  username: string;
  /** 用户密码 */
  password: string;
  /** 验证码 */
  code: string;
  /** 唯一标识 */
  uuid: string;
}

/** 业务用户信息业务分页查询对象 */
export interface BizUserPageQueryBo {
  /**
   * 分页大小
   * @format int32
   */
  pageSize?: number;
  /**
   * 当前页数
   * @format int32
   */
  pageNum?: number;
  /** 排序列 */
  orderByColumn?: string;
  /**
   * 排序的方向
   * @example "asc,desc"
   */
  isAsc?: string;
  /** appid */
  appid?: string;
  /** unionid */
  unionid?: string;
  /** openid */
  openid?: string;
  /** 用户账号 */
  userName?: string;
  /** 用户昵称 */
  nickName?: string;
  /** 用户类型（PC=电脑端 ANDROID=安卓app端 IOS=苹果app端 WXAPP=微信小程序端 WXMP=微信公众号端 ALIPAYAPP=支付宝小程序端） */
  userType?: 'PC' | 'ANDROID' | 'IOS' | 'WXAPP' | 'WXMP' | 'ALIPAYAPP';
  /** 用户邮箱 */
  email?: string;
  /** 手机号码 */
  phoneNumber?: string;
  /** 用户性别（UNKNOWN=未知 MAN=男 WOMAN=女） */
  sex?: 'UNKNOWN' | 'MAN' | 'WOMAN';
  /** 头像地址 */
  avatar?: string;
  /** 密码 */
  password?: string;
  /** 帐号状态（NORMAL=正常 DISABLE=停用） */
  status?: 'NORMAL' | 'DISABLE';
  /** 国家 */
  country?: string;
  /** 省份 */
  province?: string;
  /** 城市 */
  city?: string;
  /** 最后登录IP */
  loginIp?: string;
  /**
   * 最后登录时间
   * @format date-time
   */
  loginDate?: string;
  /**
   * 创建开始时间
   * @format date-time
   */
  createBeginTime?: string;
  /**
   * 创建结束时间
   * @format date-time
   */
  createEndTime?: string;
}

/** 业务用户信息视图对象 */
export interface BizUserVo {
  /** 创建者 */
  createBy: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
  /** 更新者 */
  updateBy?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /**
   * 用户ID
   * @format int64
   */
  userId: number;
  /** appid */
  appid?: string;
  /** unionid */
  unionid?: string;
  /** openid */
  openid?: string;
  /** 用户账号 */
  userName: string;
  /** 用户昵称 */
  nickName: string;
  /** 用户类型（PC=电脑端 ANDROID=安卓app端 IOS=苹果app端 WXAPP=微信小程序端 WXMP=微信公众号端 ALIPAYAPP=支付宝小程序端） */
  userType: 'PC' | 'ANDROID' | 'IOS' | 'WXAPP' | 'WXMP' | 'ALIPAYAPP';
  /** 用户邮箱 */
  email?: string;
  /** 手机号码 */
  phoneNumber?: string;
  /** 用户性别（UNKNOWN=未知 MAN=男 WOMAN=女） */
  sex: 'UNKNOWN' | 'MAN' | 'WOMAN';
  /** 用户头像 */
  avatar?: string;
  /** 密码 */
  password?: string;
  /** 帐号状态（NORMAL=正常 DISABLE=停用） */
  status: 'NORMAL' | 'DISABLE';
  /** 国家 */
  country?: string;
  /** 省份 */
  province?: string;
  /** 城市 */
  city?: string;
  /** 删除标志（EXIST=代表存在 DELETED=代表删除） */
  delFlag: 'EXIST' | 'DELETED';
  /** 最后登录IP */
  loginIp: string;
  /**
   * 最后登录时间
   * @format date-time
   */
  loginDate: string;
  /** 备注 */
  remark?: string;
}

/** 分页数据对象 */
export interface TableDataBizUserVo {
  /**
   * 总记录数
   * @format int64
   */
  total: number;
  /** 列表数据 */
  data: BizUserVo[];
}

/** 表格分页数据对象 */
export interface TableDataInfoBizUserVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 分页数据对象 */
  data: TableDataBizUserVo;
}

/** 业务用户信息业务查询对象 */
export interface BizUserQueryBo {
  /** appid */
  appid?: string;
  /** unionid */
  unionid?: string;
  /** openid */
  openid?: string;
  /** 用户账号 */
  userName?: string;
  /** 用户昵称 */
  nickName?: string;
  /** 用户类型（PC=电脑端 ANDROID=安卓app端 IOS=苹果app端 WXAPP=微信小程序端 WXMP=微信公众号端 ALIPAYAPP=支付宝小程序端） */
  userType?: 'PC' | 'ANDROID' | 'IOS' | 'WXAPP' | 'WXMP' | 'ALIPAYAPP';
  /** 用户邮箱 */
  email?: string;
  /** 手机号码 */
  phoneNumber?: string;
  /** 用户性别（UNKNOWN=未知 MAN=男 WOMAN=女） */
  sex?: 'UNKNOWN' | 'MAN' | 'WOMAN';
  /** 头像地址 */
  avatar?: string;
  /** 密码 */
  password?: string;
  /** 帐号状态（NORMAL=正常 DISABLE=停用） */
  status?: 'NORMAL' | 'DISABLE';
  /** 国家 */
  country?: string;
  /** 省份 */
  province?: string;
  /** 城市 */
  city?: string;
  /** 最后登录IP */
  loginIp?: string;
  /**
   * 最后登录时间
   * @format date-time
   */
  loginDate?: string;
  /**
   * 创建开始时间
   * @format date-time
   */
  createBeginTime?: string;
  /**
   * 创建结束时间
   * @format date-time
   */
  createEndTime?: string;
}

/** 业务用户信息业务编辑对象 */
export interface BizUserEditBo {
  /**
   * 用户ID
   * @format int64
   */
  userId: number;
  /** appid */
  appid?: string;
  /** unionid */
  unionid?: string;
  /** openid */
  openid?: string;
  /** 用户账号 */
  userName: string;
  /** 用户昵称 */
  nickName?: string;
  /** 用户类型（PC=电脑端 ANDROID=安卓app端 IOS=苹果app端 WXAPP=微信小程序端 WXMP=微信公众号端 ALIPAYAPP=支付宝小程序端） */
  userType?: 'PC' | 'ANDROID' | 'IOS' | 'WXAPP' | 'WXMP' | 'ALIPAYAPP';
  /** 用户邮箱 */
  email?: string;
  /** 手机号码 */
  phoneNumber: string;
  /** 用户性别（UNKNOWN=未知 MAN=男 WOMAN=女） */
  sex?: 'UNKNOWN' | 'MAN' | 'WOMAN';
  /** 头像地址 */
  avatar?: string;
  /** 密码 */
  password?: string;
  /** 帐号状态（NORMAL=正常 DISABLE=停用） */
  status?: 'NORMAL' | 'DISABLE';
  /** 国家 */
  country?: string;
  /** 省份 */
  province?: string;
  /** 城市 */
  city?: string;
  /** 最后登录IP */
  loginIp?: string;
  /**
   * 最后登录时间
   * @format date-time
   */
  loginDate?: string;
  /** 更新者 */
  updateBy?: string;
  /** 备注 */
  remark?: string;
}

/** 业务用户信息业务新增对象 */
export interface BizUserAddBo {
  /** appid */
  appid?: string;
  /** unionid */
  unionid?: string;
  /** openid */
  openid?: string;
  /** 用户账号 */
  userName: string;
  /** 用户昵称 */
  nickName?: string;
  /** 用户类型（PC=电脑端 ANDROID=安卓app端 IOS=苹果app端 WXAPP=微信小程序端 WXMP=微信公众号端 ALIPAYAPP=支付宝小程序端） */
  userType?: string;
  /** 用户邮箱 */
  email?: string;
  /** 手机号码 */
  phoneNumber: string;
  /** 用户性别（UNKNOWN=未知 MAN=男 WOMAN=女） */
  sex?: 'UNKNOWN' | 'MAN' | 'WOMAN';
  /** 头像地址 */
  avatar?: string;
  /** 密码 */
  password?: string;
  /** 帐号状态（NORMAL=正常 DISABLE=停用） */
  status?: 'NORMAL' | 'DISABLE';
  /** 国家 */
  country?: string;
  /** 省份 */
  province?: string;
  /** 城市 */
  city?: string;
  /** 最后登录IP */
  loginIp?: string;
  /**
   * 最后登录时间
   * @format date-time
   */
  loginDate?: string;
  /** 备注 */
  remark?: string;
}

/** 个人信息视图对象 */
export interface ProfileVo {
  /** 后台用户信息视图对象 */
  user: SysUserVo;
  /** 用户所属角色组 */
  roleGroup: string;
  /** 用户所属岗位组 */
  postGroup: string;
}

/** 响应信息主体 */
export interface RProfileVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 个人信息视图对象 */
  data: ProfileVo;
}

/** 响应信息主体 */
export interface RUserDetailVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 用户详情返回对象 */
  data: UserDetailVo;
}

/** 用户详情返回对象 */
export interface UserDetailVo {
  /** 角色列表 */
  roles: SysRoleVo[];
  /** 岗位列表 */
  posts: SysPostVo[];
  /** 后台用户信息视图对象 */
  user?: SysUserVo;
  /** 岗位ID列表 */
  postIds?: number[];
  /** 角色ID列表 */
  roleIds?: number[];
}

/** 响应信息主体 */
export interface RUserAuthRoleVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 用户授权角色返回对象 */
  data: UserAuthRoleVo;
}

/** 后台用户实体对象 */
export interface SysUser {
  /** 创建者 */
  createBy?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 更新者 */
  updateBy?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /**
   * 用户ID
   * @format int64
   */
  userId?: number;
  /**
   * 部门ID
   * @format int64
   */
  deptId?: number;
  /**
   * 用户账号
   * @minLength 0
   * @maxLength 30
   */
  userName: string;
  /**
   * 用户昵称
   * @minLength 0
   * @maxLength 30
   */
  nickName: string;
  /** 用户类型（PC=电脑端 ANDROID=安卓app端 IOS=苹果app端 WXAPP=微信小程序端 WXMP=微信公众号端 ALIPAYAPP=支付宝小程序端） */
  userType?: 'PC' | 'ANDROID' | 'IOS' | 'WXAPP' | 'WXMP' | 'ALIPAYAPP';
  /**
   * 用户邮箱
   * @minLength 0
   * @maxLength 50
   */
  email?: string;
  /** 手机号码 */
  phoneNumber?: string;
  /** 用户性别（UNKNOWN=未知 MAN=男 WOMAN=女） */
  sex?: 'UNKNOWN' | 'MAN' | 'WOMAN';
  /** 用户头像 */
  avatar?: string;
  /** 密码 */
  password: string;
  /** 帐号状态（NORMAL=正常 DISABLE=停用） */
  status?: 'NORMAL' | 'DISABLE';
  /** 删除标志（EXIST=代表存在 DELETED=代表删除） */
  delFlag?: 'EXIST' | 'DELETED';
  /** 最后登录IP */
  loginIp?: string;
  /**
   * 最后登录时间
   * @format date-time
   */
  loginDate?: string;
  /** 备注 */
  remark?: string;
  /** 部门业务对象 */
  dept?: SysDept;
  /** 角色对象 */
  roles?: SysRole[];
  /** 角色组 */
  roleIds: number[];
  /** 岗位组 */
  postIds: number[];
  /**
   * 角色ID
   * @format int64
   */
  roleId?: number;
  /** 是否管理员 */
  admin?: boolean;
}

/** 用户授权角色返回对象 */
export interface UserAuthRoleVo {
  /** 后台用户实体对象 */
  user?: SysUser;
  /** 授权角色列表 */
  roles?: SysRole[];
}

/** 响应信息主体 */
export interface RListSysRoleVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 数据对象 */
  data: SysRoleVo[];
}

/** 响应信息主体 */
export interface RSysRoleVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 角色视图对象 */
  data: SysRoleVo;
}

/** 响应信息主体 */
export interface RMapStringObject {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 数据对象 */
  data: Record<string, object>;
}

/** 响应信息主体 */
export interface RListSysPostVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 数据对象 */
  data: SysPostVo[];
}

/** 响应信息主体 */
export interface RSysPostVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 岗位信息视图对象 */
  data: SysPostVo;
}

/** 响应信息主体 */
export interface RListSysOssVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 数据对象 */
  data: SysOssVo[];
}

/** 响应信息主体 */
export interface RSysOssConfigVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 对象存储配置视图对象 */
  data: SysOssConfigVo;
}

/** 响应信息主体 */
export interface RSysNoticeVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 通知公告视图对象 */
  data: SysNoticeVo;
}

/** 响应信息主体 */
export interface RRoleMenuTreeSelectVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 角色菜单列表树返回对象 */
  data: RoleMenuTreeSelectVo;
}

/** 角色菜单列表树返回对象 */
export interface RoleMenuTreeSelectVo {
  /** 菜单树信息keys */
  checkedKeys: number[];
  /** 前端所需要下拉树结构 */
  menus: TreeLong[];
}

/** 响应信息主体 */
export interface RSysMenuVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 菜单权限视图对象 */
  data: SysMenuVo;
}

/** 响应信息主体 */
export interface RBizLogininforVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 业务用户登录记录视图对象 */
  data: BizLogininforVo;
}

/** 响应信息主体 */
export interface RListSysDictTypeVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 数据对象 */
  data: SysDictTypeVo[];
}

/** 响应信息主体 */
export interface RSysDictTypeVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 字典类型视图对象 */
  data: SysDictTypeVo;
}

/** 响应信息主体 */
export interface RListSysDictDataVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 数据对象 */
  data: SysDictDataVo[];
}

/** 响应信息主体 */
export interface RSysDictDataVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 字典数据视图对象 */
  data: SysDictDataVo;
}

/** 响应信息主体 */
export interface RSysDeptVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 部门视图对象 */
  data: SysDeptVo;
}

/** 响应信息主体 */
export interface RSysConfigVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 参数配置视图对象 */
  data: SysConfigVo;
}

/** 路由显示信息视图对象 */
export interface MetaVo {
  /** 设置该路由在侧边栏和面包屑中展示的名字 */
  title: string;
  /** 设置该路由的图标，对应路径src/assets/icons/svg */
  icon?: string;
  /** 设置为true，则不会被 <keep-alive>缓存 */
  noCache?: boolean;
  /** 内链地址（http(s)://开头） */
  link?: string;
}

/** 响应信息主体 */
export interface RListRouterVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 数据对象 */
  data: RouterVo[];
}

/** 路由配置信息 */
export interface RouterVo {
  /** 路由名字 */
  name: string;
  /** 路由地址 */
  path: string;
  /** 是否隐藏路由，当设置 true 的时候该路由不会再侧边栏出现 */
  hidden: boolean;
  /** 重定向地址，当设置 noRedirect 的时候该路由在面包屑导航中不可被点击 */
  redirect?: string;
  /** 组件地址 */
  component?: string;
  /** 路由参数：如 {"id": 1, "name": "ry"} */
  query?: string;
  /** 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面 */
  alwaysShow: boolean;
  /** 路由显示信息视图对象 */
  meta?: MetaVo;
  /** 子路由 */
  children?: RouterVo[];
}

/** 当前在线会话视图对象 */
export interface SysUserOnlineVo {
  /** 会话编号 */
  tokenId: string;
  /** 部门名称 */
  deptName?: string;
  /** 用户名称 */
  userName: string;
  /** 登录IP地址 */
  ipaddr: string;
  /** 登录地址 */
  loginLocation?: string;
  /** 浏览器类型 */
  browser: string;
  /** 操作系统 */
  os: string;
  /**
   * 登录时间
   * @format int64
   */
  loginTime: number;
}

/** 表格分页数据对象 */
export interface TableDataInfoSysUserOnlineVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 分页数据对象 */
  data: TableDataSysUserOnlineVo;
}

/** 分页数据对象 */
export interface TableDataSysUserOnlineVo {
  /**
   * 总记录数
   * @format int64
   */
  total: number;
  /** 列表数据 */
  data: SysUserOnlineVo[];
}

/** 缓存监控详细信息返回对象 */
export interface CacheInfoVo {
  /** 缓存服务器原始配置信息 */
  info?: Record<string, string>;
  /** 数据库大小 */
  dbSize?: string;
  /** redis命令统计 */
  commandStats?: Record<string, string>[];
}

/** 响应信息主体 */
export interface RCacheInfoVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 缓存监控详细信息返回对象 */
  data: CacheInfoVo;
}

/** 响应信息主体 */
export interface RSysCache {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 缓存信息 */
  data: SysCache;
}

/** 缓存信息 */
export interface SysCache {
  /** 缓存名称 */
  cacheName?: string;
  /** 缓存键名 */
  cacheKey?: string;
  /** 缓存内容 */
  cacheValue?: string;
  /** 备注 */
  remark?: string;
}

/** 响应信息主体 */
export interface RListSysCache {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 数据对象 */
  data: SysCache[];
}

/** 响应信息主体 */
export interface RCollectionString {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 数据对象 */
  data: string[];
}

/** 响应信息主体 */
export interface RUserInfoVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 用户信息返回对象 */
  data: UserInfoVo;
}

/** 用户信息返回对象 */
export interface UserInfoVo {
  /** 后台用户信息视图对象 */
  user: SysUserVo;
  /**
   * 角色集合
   * @uniqueItems true
   */
  roles: string[];
  /**
   * 权限集合
   * @uniqueItems true
   */
  permissions: string[];
}

/** 图片验证码返回对象 */
export interface CaptchaImageVo {
  /** 验证码开关 */
  captchaEnabled: boolean;
  /** 验证码唯一标识符 */
  uuid: string;
  /** 图片base64 */
  img: string;
}

/** 响应信息主体 */
export interface RCaptchaImageVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 图片验证码返回对象 */
  data: CaptchaImageVo;
}

/** 响应信息主体 */
export interface RBizUserVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 业务用户信息视图对象 */
  data: BizUserVo;
}
