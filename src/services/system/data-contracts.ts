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

/**
 * AuthRoleAllBo
 * 授权用户角色表单对象
 */
export interface AuthRoleAllBo {
  /** 角色ID串 */
  roleIds: number[];
  /**
   * 用户Id
   * @format int64
   */
  userId: number;
}

/**
 * AuthUserAllBo
 * 批量授权用户表单对象
 */
export interface AuthUserAllBo {
  /**
   * 角色ID
   * @format int64
   */
  roleId: number;
  /** 用户ID串 */
  userIds: number[];
}

/**
 * AvatarUploadVo
 * 用户头像上传返回对象
 */
export interface AvatarUploadVo {
  /** 头像地址 */
  imgUrl?: string;
}

/**
 * BizLogininforAddBo
 * 业务用户登录记录业务新增对象
 */
export interface BizLogininforAddBo {
  /** 浏览器类型 */
  browser?: string;
  /** 登录IP地址 */
  ipaddr: string;
  /** 登录地点 */
  loginLocation?: string;
  /**
   * 访问时间
   * @format date-time
   */
  loginTime: string;
  /** 提示消息 */
  msg?: string;
  /** 操作系统 */
  os?: string;
  /** 登录状态（0成功 1失败） */
  status: string;
  /** 用户名(也可能是手机号等) */
  userName: string;
}

/**
 * BizLogininforEditBo
 * 业务用户登录记录业务编辑对象
 */
export interface BizLogininforEditBo {
  /** 浏览器类型 */
  browser?: string;
  /**
   * 访问ID
   * @format int64
   */
  infoId: number;
  /** 登录IP地址 */
  ipaddr: string;
  /** 登录地点 */
  loginLocation?: string;
  /**
   * 访问时间
   * @format date-time
   */
  loginTime: string;
  /** 提示消息 */
  msg?: string;
  /** 操作系统 */
  os?: string;
  /** 登录状态（0成功 1失败） */
  status: string;
  /** 用户名(也可能是手机号等) */
  userName: string;
}

/**
 * BizLogininforPageQueryBo
 * 业务用户登录记录业务分页查询对象
 */
export interface BizLogininforPageQueryBo {
  /** 浏览器类型 */
  browser?: string;
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
  /** 登录IP地址 */
  ipaddr?: string;
  /**
   * 排序的方向
   * @example "asc,desc"
   */
  isAsc?: string;
  /** 登录地点 */
  loginLocation?: string;
  /**
   * 访问时间
   * @format date-time
   */
  loginTime?: string;
  /** 提示消息 */
  msg?: string;
  /** 排序列 */
  orderByColumn?: string;
  /** 操作系统 */
  os?: string;
  /**
   * 当前页数
   * @format int32
   */
  pageNum?: number;
  /**
   * 分页大小
   * @format int32
   */
  pageSize?: number;
  /** 登录状态（0成功 1失败） */
  status?: string;
  /** 用户名(也可能是手机号等) */
  userName?: string;
}

/**
 * BizLogininforQueryBo
 * 业务用户登录记录业务查询对象
 */
export interface BizLogininforQueryBo {
  /** 浏览器类型 */
  browser?: string;
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
  /** 登录IP地址 */
  ipaddr?: string;
  /** 登录地点 */
  loginLocation?: string;
  /**
   * 访问时间
   * @format date-time
   */
  loginTime?: string;
  /** 提示消息 */
  msg?: string;
  /** 操作系统 */
  os?: string;
  /** 登录状态（0成功 1失败） */
  status?: string;
  /** 用户名(也可能是手机号等) */
  userName?: string;
}

/**
 * BizLogininforVo
 * 业务用户登录记录视图对象
 */
export interface BizLogininforVo {
  /** 浏览器类型 */
  browser?: string;
  /** 创建者 */
  createBy: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
  /**
   * 访问ID
   * @format int64
   */
  infoId: number;
  /** 登录IP地址 */
  ipaddr: string;
  /** 登录地点 */
  loginLocation?: string;
  /**
   * 访问时间
   * @format date-time
   */
  loginTime: string;
  /** 提示消息 */
  msg?: string;
  /** 操作系统 */
  os?: string;
  /** 登录状态（0成功 1失败） */
  status: string;
  /** 更新者 */
  updateBy?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** 用户名(也可能是手机号等) */
  userName: string;
}

/**
 * BizUserAddBo
 * 业务用户信息业务新增对象
 */
export interface BizUserAddBo {
  /** appid */
  appid?: string;
  /** 头像地址 */
  avatar?: string;
  /** 城市 */
  city?: string;
  /** 国家 */
  country?: string;
  /** 删除标志（0代表存在 2代表删除） */
  delFlag?: string;
  /** 用户邮箱 */
  email?: string;
  /**
   * 最后登录时间
   * @format date-time
   */
  loginDate?: string;
  /** 最后登录IP */
  loginIp?: string;
  /** 用户昵称 */
  nickName?: string;
  /** openid */
  openid?: string;
  /** 密码 */
  password?: string;
  /** 手机号码 */
  phoneNumber: string;
  /** 省份 */
  province?: string;
  /** 备注 */
  remark?: string;
  /** 用户性别（1男 2女 0未知） */
  sex?: string;
  /** 帐号状态（0正常 1停用） */
  status?: string;
  /** unionid */
  unionid?: string;
  /** 用户账号 */
  userName: string;
  /** 用户类型（app_userAPP用户，wxapp_user微信小程序） */
  userType?: string;
}

/**
 * BizUserEditBo
 * 业务用户信息业务编辑对象
 */
export interface BizUserEditBo {
  /** appid */
  appid?: string;
  /** 头像地址 */
  avatar?: string;
  /** 城市 */
  city?: string;
  /** 国家 */
  country?: string;
  /** 删除标志（0代表存在 2代表删除） */
  delFlag?: string;
  /** 用户邮箱 */
  email?: string;
  /**
   * 最后登录时间
   * @format date-time
   */
  loginDate?: string;
  /** 最后登录IP */
  loginIp?: string;
  /** 用户昵称 */
  nickName?: string;
  /** openid */
  openid?: string;
  /** 密码 */
  password?: string;
  /** 手机号码 */
  phoneNumber: string;
  /** 省份 */
  province?: string;
  /** 备注 */
  remark?: string;
  /** 用户性别（1男 2女 0未知） */
  sex?: string;
  /** 帐号状态（0正常 1停用） */
  status?: string;
  /** unionid */
  unionid?: string;
  /** 更新者 */
  updateBy?: string;
  /**
   * 用户ID
   * @format int64
   */
  userId: number;
  /** 用户账号 */
  userName: string;
  /** 用户类型（app_userAPP用户，wxapp_user微信小程序） */
  userType?: string;
}

/**
 * BizUserPageQueryBo
 * 业务用户信息业务分页查询对象
 */
export interface BizUserPageQueryBo {
  /** appid */
  appid?: string;
  /** 头像地址 */
  avatar?: string;
  /** 城市 */
  city?: string;
  /** 国家 */
  country?: string;
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
  /** 用户邮箱 */
  email?: string;
  /**
   * 排序的方向
   * @example "asc,desc"
   */
  isAsc?: string;
  /**
   * 最后登录时间
   * @format date-time
   */
  loginDate?: string;
  /** 最后登录IP */
  loginIp?: string;
  /** 用户昵称 */
  nickName?: string;
  /** openid */
  openid?: string;
  /** 排序列 */
  orderByColumn?: string;
  /**
   * 当前页数
   * @format int32
   */
  pageNum?: number;
  /**
   * 分页大小
   * @format int32
   */
  pageSize?: number;
  /** 密码 */
  password?: string;
  /** 手机号码 */
  phoneNumber?: string;
  /** 省份 */
  province?: string;
  /** 用户性别（1男 2女 0未知） */
  sex?: string;
  /** 帐号状态（0正常 1停用） */
  status?: string;
  /** unionid */
  unionid?: string;
  /** 用户账号 */
  userName?: string;
  /** 用户类型（app_userAPP用户，wxapp_user微信小程序） */
  userType?: string;
}

/**
 * BizUserQueryBo
 * 业务用户信息业务查询对象
 */
export interface BizUserQueryBo {
  /** appid */
  appid?: string;
  /** 头像地址 */
  avatar?: string;
  /** 城市 */
  city?: string;
  /** 国家 */
  country?: string;
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
  /** 用户邮箱 */
  email?: string;
  /**
   * 最后登录时间
   * @format date-time
   */
  loginDate?: string;
  /** 最后登录IP */
  loginIp?: string;
  /** 用户昵称 */
  nickName?: string;
  /** openid */
  openid?: string;
  /** 密码 */
  password?: string;
  /** 手机号码 */
  phoneNumber?: string;
  /** 省份 */
  province?: string;
  /** 用户性别（1男 2女 0未知） */
  sex?: string;
  /** 帐号状态（0正常 1停用） */
  status?: string;
  /** unionid */
  unionid?: string;
  /** 用户账号 */
  userName?: string;
  /** 用户类型（app_userAPP用户，wxapp_user微信小程序） */
  userType?: string;
}

/**
 * BizUserVo
 * 业务用户信息视图对象
 */
export interface BizUserVo {
  /** appid */
  appid?: string;
  /** 用户头像 */
  avatar?: string;
  /** 城市 */
  city?: string;
  /** 国家 */
  country?: string;
  /** 创建者 */
  createBy: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
  /** 删除标志（0代表存在 2代表删除） */
  delFlag: string;
  /** 用户邮箱 */
  email?: string;
  /**
   * 最后登录时间
   * @format date-time
   */
  loginDate: string;
  /** 最后登录IP */
  loginIp: string;
  /** 用户昵称 */
  nickName: string;
  /** openid */
  openid?: string;
  /** 密码 */
  password?: string;
  /** 手机号码 */
  phoneNumber?: string;
  /** 省份 */
  province?: string;
  /** 备注 */
  remark?: string;
  /** 用户性别 */
  sex: string;
  /** 帐号状态（0正常 1停用） */
  status: string;
  /** unionid */
  unionid?: string;
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
  /** 用户账号 */
  userName: string;
  /** 用户类型（app_userAPP用户，wxapp_user微信小程序） */
  userType: string;
}

/**
 * CacheInfoVo
 * 缓存监控详细信息返回对象
 */
export interface CacheInfoVo {
  /** redis命令统计 */
  commandStats?: Record<string, string>[];
  /** 数据库大小 */
  dbSize?: string;
  /** 缓存服务器原始配置信息 */
  info?: Record<string, object>;
}

/**
 * CaptchaImageVo
 * 图片验证码返回对象
 */
export interface CaptchaImageVo {
  /**
   * 验证码开关
   * @example false
   */
  captchaOnOff: boolean;
  /** 图片base64 */
  img: string;
  /** 验证码唯一标识符 */
  uuid: string;
}

/** CharSequence */
export type CharSequence = object;

/** Comparable«object» */
export type ComparableObject = object;

/**
 * LoginUserUpdateBo
 * 已登录用户信息更新业务对象
 */
export interface LoginUserUpdateBo {
  /** 用户头像 */
  avatar?: string;
  /**
   * 用户邮箱
   * @minLength 0
   * @maxLength 50
   */
  email?: string;
  /**
   * 用户昵称
   * @minLength 0
   * @maxLength 30
   */
  nickName?: string;
  /** 手机号码 */
  phoneNumber?: string;
  /** 用户性别 */
  sex?: string;
}

/**
 * LoginVo
 * 用户登录返回对象
 */
export interface LoginVo {
  /** 身份令牌 */
  token: string;
}

/**
 * MetaVo
 * 路由显示信息视图对象
 */
export interface MetaVo {
  /** 设置该路由的图标，对应路径src/assets/icons/svg */
  icon?: string;
  /** 内链地址（http(s)://开头） */
  link?: string;
  /**
   * 设置为true，则不会被 <keep-alive>缓存
   * @example false
   */
  noCache?: boolean;
  /** 设置该路由在侧边栏和面包屑中展示的名字 */
  title: string;
}

/**
 * OssUploadVo
 * OSS上传结果返回对象
 */
export interface OssUploadVo {
  /** 原名 */
  fileName?: string;
  /** 对象存储主键 */
  ossId?: string;
  /** URL地址 */
  url?: string;
}

/**
 * ProfileVo
 * 个人信息视图对象
 */
export interface ProfileVo {
  /** 用户所属岗位组 */
  postGroup: string;
  /** 用户所属角色组 */
  roleGroup: string;
  /** 用户对象信息 */
  user: SysUserVo;
}

/**
 * Response«AvatarUploadVo»
 * 请求响应对象
 */
export interface ResponseAvatarUploadVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 数据对象 */
  data: AvatarUploadVo;
  /** 消息内容 */
  msg: string;
}

/**
 * Response«BizLogininforVo»
 * 请求响应对象
 */
export interface ResponseBizLogininforVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 数据对象 */
  data: BizLogininforVo;
  /** 消息内容 */
  msg: string;
}

/**
 * Response«BizUserVo»
 * 请求响应对象
 */
export interface ResponseBizUserVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 数据对象 */
  data: BizUserVo;
  /** 消息内容 */
  msg: string;
}

/**
 * Response«CacheInfoVo»
 * 请求响应对象
 */
export interface ResponseCacheInfoVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 数据对象 */
  data: CacheInfoVo;
  /** 消息内容 */
  msg: string;
}

/**
 * Response«CaptchaImageVo»
 * 请求响应对象
 */
export interface ResponseCaptchaImageVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 数据对象 */
  data: CaptchaImageVo;
  /** 消息内容 */
  msg: string;
}

/**
 * Response«List«RouterVo»»
 * 请求响应对象
 */
export interface ResponseListRouterVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 数据对象 */
  data: RouterVo[];
  /** 消息内容 */
  msg: string;
}

/**
 * Response«List«SysDeptVo»»
 * 请求响应对象
 */
export interface ResponseListSysDeptVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 数据对象 */
  data: SysDeptVo[];
  /** 消息内容 */
  msg: string;
}

/**
 * Response«List«SysDictDataVo»»
 * 请求响应对象
 */
export interface ResponseListSysDictDataVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 数据对象 */
  data: SysDictDataVo[];
  /** 消息内容 */
  msg: string;
}

/**
 * Response«List«SysDictTypeVo»»
 * 请求响应对象
 */
export interface ResponseListSysDictTypeVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 数据对象 */
  data: SysDictTypeVo[];
  /** 消息内容 */
  msg: string;
}

/**
 * Response«List«SysMenuVo»»
 * 请求响应对象
 */
export interface ResponseListSysMenuVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 数据对象 */
  data: SysMenuVo[];
  /** 消息内容 */
  msg: string;
}

/**
 * Response«List«SysOssVo»»
 * 请求响应对象
 */
export interface ResponseListSysOssVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 数据对象 */
  data: SysOssVo[];
  /** 消息内容 */
  msg: string;
}

/**
 * Response«List«SysPostVo»»
 * 请求响应对象
 */
export interface ResponseListSysPostVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 数据对象 */
  data: SysPostVo[];
  /** 消息内容 */
  msg: string;
}

/**
 * Response«List«SysRoleVo»»
 * 请求响应对象
 */
export interface ResponseListSysRoleVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 数据对象 */
  data: SysRoleVo[];
  /** 消息内容 */
  msg: string;
}

/**
 * Response«List«Tree«long»»»
 * 请求响应对象
 */
export interface ResponseListTreeLong {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 数据对象 */
  data: Record<string, object>[];
  /** 消息内容 */
  msg: string;
}

/**
 * Response«LoginVo»
 * 请求响应对象
 */
export interface ResponseLoginVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 数据对象 */
  data: LoginVo;
  /** 消息内容 */
  msg: string;
}

/**
 * Response«OssUploadVo»
 * 请求响应对象
 */
export interface ResponseOssUploadVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 数据对象 */
  data: OssUploadVo;
  /** 消息内容 */
  msg: string;
}

/**
 * Response«ProfileVo»
 * 请求响应对象
 */
export interface ResponseProfileVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 数据对象 */
  data: ProfileVo;
  /** 消息内容 */
  msg: string;
}

/**
 * Response«RoleDeptTreeSelectVo»
 * 请求响应对象
 */
export interface ResponseRoleDeptTreeSelectVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 数据对象 */
  data: RoleDeptTreeSelectVo;
  /** 消息内容 */
  msg: string;
}

/**
 * Response«RoleMenuTreeSelectVo»
 * 请求响应对象
 */
export interface ResponseRoleMenuTreeSelectVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 数据对象 */
  data: RoleMenuTreeSelectVo;
  /** 消息内容 */
  msg: string;
}

/**
 * Response«SysConfigVo»
 * 请求响应对象
 */
export interface ResponseSysConfigVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 数据对象 */
  data: SysConfigVo;
  /** 消息内容 */
  msg: string;
}

/**
 * Response«SysDeptVo»
 * 请求响应对象
 */
export interface ResponseSysDeptVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 数据对象 */
  data: SysDeptVo;
  /** 消息内容 */
  msg: string;
}

/**
 * Response«SysDictDataVo»
 * 请求响应对象
 */
export interface ResponseSysDictDataVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 数据对象 */
  data: SysDictDataVo;
  /** 消息内容 */
  msg: string;
}

/**
 * Response«SysDictTypeVo»
 * 请求响应对象
 */
export interface ResponseSysDictTypeVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 数据对象 */
  data: SysDictTypeVo;
  /** 消息内容 */
  msg: string;
}

/**
 * Response«SysMenuVo»
 * 请求响应对象
 */
export interface ResponseSysMenuVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 数据对象 */
  data: SysMenuVo;
  /** 消息内容 */
  msg: string;
}

/**
 * Response«SysNoticeVo»
 * 请求响应对象
 */
export interface ResponseSysNoticeVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 数据对象 */
  data: SysNoticeVo;
  /** 消息内容 */
  msg: string;
}

/**
 * Response«SysOssConfigVo»
 * 请求响应对象
 */
export interface ResponseSysOssConfigVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 数据对象 */
  data: SysOssConfigVo;
  /** 消息内容 */
  msg: string;
}

/**
 * Response«SysPostVo»
 * 请求响应对象
 */
export interface ResponseSysPostVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 数据对象 */
  data: SysPostVo;
  /** 消息内容 */
  msg: string;
}

/**
 * Response«SysRoleVo»
 * 请求响应对象
 */
export interface ResponseSysRoleVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 数据对象 */
  data: SysRoleVo;
  /** 消息内容 */
  msg: string;
}

/**
 * Response«UserAuthRoleVo»
 * 请求响应对象
 */
export interface ResponseUserAuthRoleVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 数据对象 */
  data: UserAuthRoleVo;
  /** 消息内容 */
  msg: string;
}

/**
 * Response«UserDetailVo»
 * 请求响应对象
 */
export interface ResponseUserDetailVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 数据对象 */
  data: UserDetailVo;
  /** 消息内容 */
  msg: string;
}

/**
 * Response«UserInfoVo»
 * 请求响应对象
 */
export interface ResponseUserInfoVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 数据对象 */
  data: UserInfoVo;
  /** 消息内容 */
  msg: string;
}

/**
 * Response«Void»
 * 请求响应对象
 */
export interface ResponseVoid {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
}

/**
 * RoleDeptTreeSelectVo
 * 角色部门列表树视图对象
 */
export interface RoleDeptTreeSelectVo {
  /** 选中部门ID列表 */
  checkedKeys?: number[];
  /** 下拉树结构列表 */
  depts?: Record<string, object>[];
}

/**
 * RoleMenuTreeSelectVo
 * 角色菜单列表树返回对象
 */
export interface RoleMenuTreeSelectVo {
  /** 菜单树信息keys */
  checkedKeys: number[];
  /** 前端所需要下拉树结构 */
  menus: Record<string, object>[];
}

/**
 * RouterVo
 * 路由配置信息
 */
export interface RouterVo {
  /**
   * 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
   * @example false
   */
  alwaysShow: boolean;
  /** 子路由 */
  children?: RouterVo[];
  /** 组件地址 */
  component?: string;
  /**
   * 是否隐藏路由，当设置 true 的时候该路由不会再侧边栏出现
   * @example false
   */
  hidden: boolean;
  /** 其他元素 */
  meta?: MetaVo;
  /** 路由名字 */
  name: string;
  /** 路由地址 */
  path: string;
  /** 路由参数：如 {"id": 1, "name": "ry"} */
  query?: string;
  /** 重定向地址，当设置 noRedirect 的时候该路由在面包屑导航中不可被点击 */
  redirect?: string;
}

/**
 * SmsLoginBo
 * 短信登录对象
 */
export interface SmsLoginBo {
  /** 用户手机号 */
  phoneNumber?: string;
  /** 短信验证码 */
  smsCode?: string;
}

/**
 * SysConfigAddBo
 * 参数配置新增业务对象
 */
export interface SysConfigAddBo {
  /**
   * 参数键名
   * @minLength 1
   * @maxLength 100
   */
  configKey: string;
  /**
   * 参数名称
   * @minLength 1
   * @maxLength 100
   */
  configName: string;
  /** 系统内置（Y是 N否） */
  configType?: string;
  /**
   * 参数键值
   * @minLength 1
   * @maxLength 500
   */
  configValue: string;
  /** 备注 */
  remark?: string;
}

/**
 * SysConfigEditBo
 * 参数配置修改业务对象
 */
export interface SysConfigEditBo {
  /**
   * 参数主键
   * @format int64
   */
  configId: number;
  /**
   * 参数键名
   * @minLength 1
   * @maxLength 100
   */
  configKey?: string;
  /**
   * 参数名称
   * @minLength 1
   * @maxLength 100
   */
  configName?: string;
  /** 系统内置（Y是 N否） */
  configType?: string;
  /**
   * 参数键值
   * @minLength 1
   * @maxLength 500
   */
  configValue?: string;
  /** 备注 */
  remark?: string;
}

/**
 * SysConfigPageQueryBo
 * 参数配置分页查询对象
 */
export interface SysConfigPageQueryBo {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /** 参数键名 */
  configKey?: string;
  /** 参数名称 */
  configName?: string;
  /** 系统内置（Y是 N否） */
  configType?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 排序的方向
   * @example "asc,desc"
   */
  isAsc?: string;
  /** 排序列 */
  orderByColumn?: string;
  /**
   * 当前页数
   * @format int32
   */
  pageNum?: number;
  /**
   * 分页大小
   * @format int32
   */
  pageSize?: number;
}

/**
 * SysConfigQueryBo
 * 参数配置查询对象
 */
export interface SysConfigQueryBo {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /** 参数键名 */
  configKey?: string;
  /** 参数名称 */
  configName?: string;
  /** 系统内置（Y是 N否） */
  configType?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
}

/**
 * SysConfigVo
 * 参数配置视图对象
 */
export interface SysConfigVo {
  /**
   * 参数主键
   * @format int64
   */
  configId: number;
  /** 参数键名 */
  configKey: string;
  /** 参数名称 */
  configName: string;
  /** 系统内置（Y是 N否） */
  configType: string;
  /** 参数键值 */
  configValue: string;
  /** 创建者 */
  createBy: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
  /** 备注 */
  remark?: string;
  /** 更新者 */
  updateBy?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
}

/**
 * SysDept
 * 部门业务对象
 */
export interface SysDept {
  /** 祖级列表 */
  ancestors?: string;
  /** 子部门 */
  children?: SysDept[];
  /** 创建者 */
  createBy?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 删除标志（0代表存在 2代表删除） */
  delFlag?: string;
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
   * 邮箱
   * @minLength 0
   * @maxLength 50
   */
  email?: string;
  /** 负责人 */
  leader?: string;
  /**
   * 显示顺序
   * @format int32
   */
  orderNum: number;
  /**
   * 父菜单ID
   * @format int64
   */
  parentId?: number;
  /** 父菜单名称 */
  parentName?: string;
  /**
   * 联系电话
   * @minLength 0
   * @maxLength 11
   */
  phone?: string;
  /** 部门状态:0正常,1停用 */
  status?: string;
  /** 更新者 */
  updateBy?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
}

/**
 * SysDeptAddBo
 * 部门新增业务对象
 */
export interface SysDeptAddBo {
  /** 祖级列表 */
  ancestors?: string;
  /** 子部门 */
  children?: SysDept[];
  /** 删除标志（0代表存在 2代表删除） */
  delFlag?: string;
  /**
   * 部门名称
   * @minLength 0
   * @maxLength 30
   */
  deptName: string;
  /**
   * 邮箱
   * @minLength 0
   * @maxLength 50
   */
  email?: string;
  /** 负责人 */
  leader?: string;
  /**
   * 显示顺序
   * @format int32
   */
  orderNum: number;
  /**
   * 父菜单ID
   * @format int64
   */
  parentId?: number;
  /** 父菜单名称 */
  parentName?: string;
  /**
   * 联系电话
   * @minLength 0
   * @maxLength 11
   */
  phone?: string;
  /** 部门状态:0正常,1停用 */
  status?: string;
}

/**
 * SysDeptEditBo
 * 部门编辑业务对象
 */
export interface SysDeptEditBo {
  /** 祖级列表 */
  ancestors?: string;
  /** 子部门 */
  children?: SysDept[];
  /** 删除标志（0代表存在 2代表删除） */
  delFlag?: string;
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
   * 邮箱
   * @minLength 0
   * @maxLength 50
   */
  email?: string;
  /** 负责人 */
  leader?: string;
  /**
   * 显示顺序
   * @format int32
   */
  orderNum?: number;
  /**
   * 父菜单ID, 无父级则传0
   * @format int64
   */
  parentId: number;
  /** 父菜单名称 */
  parentName?: string;
  /**
   * 联系电话
   * @minLength 0
   * @maxLength 11
   */
  phone?: string;
  /** 部门状态:0正常,1停用 */
  status?: string;
}

/**
 * SysDeptQueryBo
 * 部门查询对象
 */
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
  /** 部门状态:0正常,1停用 */
  status?: string;
}

/**
 * SysDeptVo
 * 部门视图对象
 */
export interface SysDeptVo {
  /** 祖级列表 */
  ancestors?: string;
  /** 子部门 */
  children?: SysDeptVo[];
  /** 创建者 */
  createBy: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
  /** 删除标志（0代表存在 2代表删除） */
  delFlag: string;
  /**
   * 部门id
   * @format int64
   */
  deptId: number;
  /** 部门名称 */
  deptName: string;
  /** 邮箱 */
  email?: string;
  /** 负责人 */
  leader?: string;
  /**
   * 显示顺序
   * @format int32
   */
  orderNum: number;
  /**
   * 父菜单ID
   * @format int64
   */
  parentId?: number;
  /** 父菜单名称 */
  parentName?: string;
  /** 联系电话 */
  phone?: string;
  /** 部门状态:0正常,1停用 */
  status: string;
  /** 更新者 */
  updateBy?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
}

/**
 * SysDictDataAddBo
 * 字典数据新增业务对象
 */
export interface SysDictDataAddBo {
  /**
   * 样式属性（其他样式扩展）
   * @minLength 0
   * @maxLength 100
   */
  cssClass?: string;
  /**
   * 字典标签
   * @minLength 0
   * @maxLength 100
   */
  dictLabel: string;
  /**
   * 字典排序
   * @format int32
   */
  dictSort?: number;
  /**
   * 字典类型
   * @minLength 0
   * @maxLength 100
   */
  dictType: string;
  /**
   * 字典键值
   * @minLength 0
   * @maxLength 100
   */
  dictValue: string;
  /** 是否默认（Y是 N否） */
  isDefault?: string;
  /** 表格字典样式 */
  listClass?: string;
  /** 备注 */
  remark?: string;
  /** 状态（0正常 1停用） */
  status?: string;
}

/**
 * SysDictDataEditBo
 * 字典数据编辑业务对象
 */
export interface SysDictDataEditBo {
  /**
   * 样式属性（其他样式扩展）
   * @minLength 0
   * @maxLength 100
   */
  cssClass?: string;
  /**
   * 字典编码
   * @format int64
   */
  dictCode: number;
  /**
   * 字典标签
   * @minLength 0
   * @maxLength 100
   */
  dictLabel?: string;
  /**
   * 字典排序
   * @format int32
   */
  dictSort?: number;
  /**
   * 字典类型
   * @minLength 0
   * @maxLength 100
   */
  dictType?: string;
  /**
   * 字典键值
   * @minLength 0
   * @maxLength 100
   */
  dictValue?: string;
  /** 是否默认（Y是 N否） */
  isDefault?: string;
  /** 表格字典样式 */
  listClass?: string;
  /** 备注 */
  remark?: string;
  /** 状态（0正常 1停用） */
  status?: string;
}

/**
 * SysDictDataPageQueryBo
 * 字典数据分页查询对象
 */
export interface SysDictDataPageQueryBo {
  /** 字典标签 */
  dictLabel?: string;
  /** 字典类型 */
  dictType?: string;
  /**
   * 排序的方向
   * @example "asc,desc"
   */
  isAsc?: string;
  /** 排序列 */
  orderByColumn?: string;
  /**
   * 当前页数
   * @format int32
   */
  pageNum?: number;
  /**
   * 分页大小
   * @format int32
   */
  pageSize?: number;
  /** 状态（0正常 1停用） */
  status?: string;
}

/**
 * SysDictDataQueryBo
 * 字典数据查询对象
 */
export interface SysDictDataQueryBo {
  /** 字典标签 */
  dictLabel?: string;
  /** 字典类型 */
  dictType?: string;
  /** 状态（0正常 1停用） */
  status?: string;
}

/**
 * SysDictDataVo
 * 字典数据视图对象
 */
export interface SysDictDataVo {
  /** 创建者 */
  createBy: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
  /** 样式属性（其他样式扩展） */
  cssClass?: string;
  /**
   * 字典编码
   * @format int64
   */
  dictCode: number;
  /** 字典标签 */
  dictLabel: string;
  /**
   * 字典排序
   * @format int32
   */
  dictSort: number;
  /** 字典类型 */
  dictType: string;
  /** 字典键值 */
  dictValue: string;
  /** 是否默认（Y是 N否） */
  isDefault: string;
  /** 表格字典样式 */
  listClass?: string;
  /** 备注 */
  remark?: string;
  /** 状态（0正常 1停用） */
  status: string;
  /** 更新者 */
  updateBy?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
}

/**
 * SysDictTypeAddBo
 * 字典类型新增业务对象
 */
export interface SysDictTypeAddBo {
  /** 字典名称 */
  dictName: string;
  /** 字典类型 */
  dictType: string;
  /** 备注 */
  remark?: string;
  /** 状态（0正常 1停用） */
  status?: string;
}

/**
 * SysDictTypeEditBo
 * 字典类型编辑业务对象
 */
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
  /** 备注 */
  remark?: string;
  /** 状态（0正常 1停用） */
  status?: string;
}

/**
 * SysDictTypePageQueryBo
 * 字典类型分页查询对象
 */
export interface SysDictTypePageQueryBo {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /** 字典名称 */
  dictName?: string;
  /** 字典类型 */
  dictType?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 排序的方向
   * @example "asc,desc"
   */
  isAsc?: string;
  /** 排序列 */
  orderByColumn?: string;
  /**
   * 当前页数
   * @format int32
   */
  pageNum?: number;
  /**
   * 分页大小
   * @format int32
   */
  pageSize?: number;
  /** 状态（0正常 1停用） */
  status?: string;
}

/**
 * SysDictTypeQueryBo
 * 字典类型查询对象
 */
export interface SysDictTypeQueryBo {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /** 字典名称 */
  dictName?: string;
  /** 字典类型 */
  dictType?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /** 状态（0正常 1停用） */
  status?: string;
}

/**
 * SysDictTypeVo
 * 字典类型视图对象
 */
export interface SysDictTypeVo {
  /** 创建者 */
  createBy: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
  /**
   * 字典主键
   * @format int64
   */
  dictId: number;
  /** 字典名称 */
  dictName: string;
  /** 字典类型 */
  dictType: string;
  /** 备注 */
  remark?: string;
  /** 状态（0正常 1停用） */
  status: string;
  /** 更新者 */
  updateBy?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
}

/**
 * SysLogininforPageQueryBo
 * 系统访问记录分页查询对象
 */
export interface SysLogininforPageQueryBo {
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
  /** 登录IP地址 */
  ipaddr?: string;
  /**
   * 排序的方向
   * @example "asc,desc"
   */
  isAsc?: string;
  /** 排序列 */
  orderByColumn?: string;
  /**
   * 当前页数
   * @format int32
   */
  pageNum?: number;
  /**
   * 分页大小
   * @format int32
   */
  pageSize?: number;
  /** 登录状态 0成功 1失败 */
  status?: string;
  /** 用户账号 */
  userName?: string;
}

/**
 * SysLogininforQueryBo
 * 系统访问记录查询对象
 */
export interface SysLogininforQueryBo {
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
  /** 登录IP地址 */
  ipaddr?: string;
  /** 登录状态 0成功 1失败 */
  status?: string;
  /** 用户账号 */
  userName?: string;
}

/**
 * SysLogininforVo
 * 系统访问记录视图返回对象
 */
export interface SysLogininforVo {
  /** 浏览器类型 */
  browser: string;
  /**
   * 访问ID
   * @format int64
   */
  infoId: number;
  /** 登录IP地址 */
  ipaddr: string;
  /** 登录地点 */
  loginLocation: string;
  /**
   * 访问时间
   * @format date-time
   */
  loginTime: string;
  /** 提示消息 */
  msg: string;
  /** 操作系统 */
  os: string;
  /** 登录状态 0成功 1失败 */
  status: string;
  /** 用户账号 */
  userName: string;
}

/**
 * SysMenu
 * 菜单权限业务对象
 */
export interface SysMenu {
  /** 子部门 */
  children?: SysMenu[];
  /**
   * 组件路径
   * @minLength 0
   * @maxLength 200
   */
  component?: string;
  /** 创建者 */
  createBy?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 菜单图标 */
  icon?: string;
  /** 是否缓存（0缓存 1不缓存） */
  isCache?: string;
  /** 是否为外链（0是 1否） */
  isFrame?: string;
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
  /** 类型（M目录 C菜单 F按钮） */
  menuType: string;
  /**
   * 显示顺序
   * @format int32
   */
  orderNum: number;
  /**
   * 父菜单ID
   * @format int64
   */
  parentId?: number;
  /** 父菜单名称 */
  parentName?: string;
  /**
   * 路由地址
   * @minLength 0
   * @maxLength 200
   */
  path?: string;
  /**
   * 权限字符串
   * @minLength 0
   * @maxLength 100
   */
  perms?: string;
  /** 路由参数 */
  queryParam?: string;
  /** 备注 */
  remark?: string;
  /** 菜单状态（0显示 1隐藏） */
  status?: string;
  /** 更新者 */
  updateBy?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** 显示状态（0显示 1隐藏） */
  visible?: string;
}

/**
 * SysMenuAddBo
 * 菜单权限新增业务对象
 */
export interface SysMenuAddBo {
  /** 子菜单 */
  children?: SysMenu[];
  /**
   * 组件路径
   * @minLength 0
   * @maxLength 200
   */
  component?: string;
  /** 菜单图标 */
  icon?: string;
  /** 是否缓存（0缓存 1不缓存） */
  isCache?: string;
  /** 是否为外链（0是 1否） */
  isFrame?: string;
  /**
   * 菜单名称
   * @minLength 0
   * @maxLength 50
   */
  menuName: string;
  /** 类型（M目录 C菜单 F按钮） */
  menuType: string;
  /**
   * 显示顺序
   * @format int32
   */
  orderNum: number;
  /**
   * 父菜单ID
   * @format int64
   */
  parentId?: number;
  /** 父菜单名称 */
  parentName?: string;
  /**
   * 路由地址
   * @minLength 0
   * @maxLength 200
   */
  path?: string;
  /**
   * 权限字符串
   * @minLength 0
   * @maxLength 100
   */
  perms?: string;
  /** 路由参数 */
  queryParam?: string;
  /** 备注 */
  remark?: string;
  /** 菜单状态（0显示 1隐藏） */
  status?: string;
  /** 显示状态（0显示 1隐藏） */
  visible?: string;
}

/**
 * SysMenuEditBo
 * 菜单权限编辑业务对象
 */
export interface SysMenuEditBo {
  /** 子菜单 */
  children?: SysMenu[];
  /**
   * 组件路径
   * @minLength 0
   * @maxLength 200
   */
  component?: string;
  /** 菜单图标 */
  icon?: string;
  /** 是否缓存（0缓存 1不缓存） */
  isCache?: string;
  /** 是否为外链（0是 1否） */
  isFrame?: string;
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
  /** 类型（M目录 C菜单 F按钮） */
  menuType?: string;
  /**
   * 显示顺序
   * @format int32
   */
  orderNum?: number;
  /**
   * 父菜单ID
   * @format int64
   */
  parentId?: number;
  /** 父菜单名称 */
  parentName?: string;
  /**
   * 路由地址
   * @minLength 0
   * @maxLength 200
   */
  path?: string;
  /**
   * 权限字符串
   * @minLength 1
   * @maxLength 100
   */
  perms?: string;
  /** 路由参数 */
  queryParam?: string;
  /** 备注 */
  remark?: string;
  /** 菜单状态（0显示 1隐藏） */
  status?: string;
  /** 显示状态（0显示 1隐藏） */
  visible?: string;
}

/**
 * SysMenuQueryBo
 * 菜单权限查询对象
 */
export interface SysMenuQueryBo {
  /**
   * 排序的方向
   * @example "asc,desc"
   */
  isAsc?: string;
  /** 菜单名称 */
  menuName?: string;
  /** 排序列 */
  orderByColumn?: string;
  /**
   * 当前页数
   * @format int32
   */
  pageNum?: number;
  /**
   * 分页大小
   * @format int32
   */
  pageSize?: number;
  /** 菜单状态（0显示 1隐藏） */
  status?: string;
  /** 显示状态（0显示 1隐藏） */
  visible?: string;
}

/**
 * SysMenuVo
 * 菜单权限视图对象
 */
export interface SysMenuVo {
  /** 子部门 */
  children?: SysMenuVo[];
  /** 组件路径 */
  component?: string;
  /** 创建者 */
  createBy: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
  /** 菜单图标 */
  icon?: string;
  /** 是否缓存（0缓存 1不缓存） */
  isCache: string;
  /** 是否为外链（0是 1否） */
  isFrame: string;
  /**
   * 菜单ID
   * @format int64
   */
  menuId: number;
  /** 菜单名称 */
  menuName: string;
  /** 类型（M目录 C菜单 F按钮） */
  menuType: string;
  /**
   * 显示顺序
   * @format int32
   */
  orderNum: number;
  /**
   * 父菜单ID
   * @format int64
   */
  parentId?: number;
  /** 父菜单名称 */
  parentName?: string;
  /** 路由地址 */
  path?: string;
  /** 权限字符串 */
  perms?: string;
  /** 路由参数 */
  queryParam?: string;
  /** 备注 */
  remark?: string;
  /** 菜单状态（0显示 1隐藏） */
  status: string;
  /** 更新者 */
  updateBy?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** 显示状态（0显示 1隐藏） */
  visible: string;
}

/**
 * SysNoticeAddBo
 * 通知公告新增业务对象
 */
export interface SysNoticeAddBo {
  /** 公告内容 */
  noticeContent: string;
  /**
   * 公告标题
   * @minLength 0
   * @maxLength 50
   */
  noticeTitle: string;
  /** 公告类型（1通知 2公告） */
  noticeType: string;
  /** 备注 */
  remark?: string;
  /** 公告状态（0正常 1关闭） */
  status: string;
}

/**
 * SysNoticeEditBo
 * 通知公告编辑业务对象
 */
export interface SysNoticeEditBo {
  /** 公告内容 */
  noticeContent?: string;
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
  /** 公告类型（1通知 2公告） */
  noticeType?: string;
  /** 备注 */
  remark?: string;
  /** 公告状态（0正常 1关闭） */
  status?: string;
}

/**
 * SysNoticePageQueryBo
 * 通知公告分页查询对象
 */
export interface SysNoticePageQueryBo {
  /** 创建者 */
  createBy?: string;
  /**
   * 排序的方向
   * @example "asc,desc"
   */
  isAsc?: string;
  /** 公告标题 */
  noticeTitle?: string;
  /** 公告类型（1通知 2公告） */
  noticeType?: string;
  /** 排序列 */
  orderByColumn?: string;
  /**
   * 当前页数
   * @format int32
   */
  pageNum?: number;
  /**
   * 分页大小
   * @format int32
   */
  pageSize?: number;
}

/**
 * SysNoticeVo
 * 通知公告视图对象
 */
export interface SysNoticeVo {
  /** 创建者 */
  createBy: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
  /** 公告内容 */
  noticeContent: string;
  /**
   * 公告ID
   * @format int64
   */
  noticeId: number;
  /** 公告标题 */
  noticeTitle: string;
  /** 公告类型（1通知 2公告） */
  noticeType: string;
  /** 备注 */
  remark?: string;
  /** 公告状态（0正常 1关闭） */
  status: string;
  /** 更新者 */
  updateBy?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
}

/**
 * SysOperLogPageQueryBo
 * 操作日志记录分页查询对象
 */
export interface SysOperLogPageQueryBo {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 业务类型（0其它 1新增 2修改 3删除）
   * @format int32
   */
  businessType?: number;
  /** 业务类型数组 */
  businessTypes?: number[];
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 排序的方向
   * @example "asc,desc"
   */
  isAsc?: string;
  /** 操作人员 */
  operName?: string;
  /** 排序列 */
  orderByColumn?: string;
  /**
   * 当前页数
   * @format int32
   */
  pageNum?: number;
  /**
   * 分页大小
   * @format int32
   */
  pageSize?: number;
  /**
   * 操作状态（0正常 1异常）
   * @format int32
   */
  status?: number;
  /** 操作模块 */
  title?: string;
}

/**
 * SysOperLogQueryBo
 * 操作日志记录查询对象
 */
export interface SysOperLogQueryBo {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 业务类型（0其它 1新增 2修改 3删除）
   * @format int32
   */
  businessType?: number;
  /** 业务类型数组 */
  businessTypes?: number[];
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /** 操作人员 */
  operName?: string;
  /**
   * 操作状态（0正常 1异常）
   * @format int32
   */
  status?: number;
  /** 操作模块 */
  title?: string;
}

/**
 * SysOperLogVo
 * 操作日志记录视图对象
 */
export interface SysOperLogVo {
  /**
   * 业务类型（0其它 1新增 2修改 3删除）
   * @format int32
   */
  businessType: number;
  /** 业务类型数组 */
  businessTypes: number[];
  /** 部门名称 */
  deptName?: string;
  /** 错误消息 */
  errorMsg?: string;
  /** 返回参数 */
  jsonResult?: string;
  /** 请求方法 */
  method: string;
  /**
   * 日志主键
   * @format int64
   */
  operId: number;
  /** 操作地址 */
  operIp: string;
  /** 操作地点 */
  operLocation?: string;
  /** 操作人员 */
  operName: string;
  /** 请求参数 */
  operParam: string;
  /**
   * 操作时间
   * @format date-time
   */
  operTime: string;
  /** 请求url */
  operUrl: string;
  /**
   * 操作类别（0其它 1后台用户 2手机端用户）
   * @format int32
   */
  operatorType: number;
  /** 请求方式 */
  requestMethod: string;
  /**
   * 操作状态（0正常 1异常）
   * @format int32
   */
  status: number;
  /** 操作模块 */
  title: string;
}

/**
 * SysOssConfigAddBo
 * 对象存储配置新增业务对象
 */
export interface SysOssConfigAddBo {
  /**
   * accessKey
   * @minLength 2
   * @maxLength 100
   */
  accessKey: string;
  /**
   * 桶名称
   * @minLength 2
   * @maxLength 100
   */
  bucketName: string;
  /**
   * 配置key
   * @minLength 2
   * @maxLength 100
   */
  configKey: string;
  /** 自定义域名 */
  domain?: string;
  /**
   * 访问站点
   * @minLength 2
   * @maxLength 100
   */
  endpoint: string;
  /** 扩展字段 */
  ext1?: string;
  /** 是否https（Y=是,N=否） */
  isHttps?: string;
  /** 前缀 */
  prefix?: string;
  /** 域 */
  region?: string;
  /** 备注 */
  remark?: string;
  /**
   * secretKey
   * @minLength 2
   * @maxLength 100
   */
  secretKey: string;
  /** 状态（0=正常,1=停用） */
  status?: string;
}

/**
 * SysOssConfigEditBo
 * 对象存储配置修改业务对象
 */
export interface SysOssConfigEditBo {
  /**
   * accessKey
   * @minLength 2
   * @maxLength 100
   */
  accessKey?: string;
  /**
   * 桶名称
   * @minLength 2
   * @maxLength 100
   */
  bucketName?: string;
  /**
   * 配置key
   * @minLength 2
   * @maxLength 100
   */
  configKey?: string;
  /** 自定义域名 */
  domain?: string;
  /**
   * 访问站点
   * @minLength 2
   * @maxLength 100
   */
  endpoint?: string;
  /** 扩展字段 */
  ext1?: string;
  /** 是否https（Y=是,N=否） */
  isHttps?: string;
  /**
   * 主建
   * @format int64
   */
  ossConfigId: number;
  /** 前缀 */
  prefix?: string;
  /** 域 */
  region?: string;
  /** 备注 */
  remark?: string;
  /**
   * secretKey
   * @minLength 2
   * @maxLength 100
   */
  secretKey?: string;
  /** 状态（0=正常,1=停用） */
  status?: string;
}

/**
 * SysOssConfigPageQueryBo
 * 对象存储配置分页查询对象
 */
export interface SysOssConfigPageQueryBo {
  /** 桶名称 */
  bucketName?: string;
  /** 配置key */
  configKey?: string;
  /**
   * 排序的方向
   * @example "asc,desc"
   */
  isAsc?: string;
  /** 排序列 */
  orderByColumn?: string;
  /**
   * 当前页数
   * @format int32
   */
  pageNum?: number;
  /**
   * 分页大小
   * @format int32
   */
  pageSize?: number;
  /** 状态（0=正常,1=停用） */
  status?: string;
}

/**
 * SysOssConfigVo
 * 对象存储配置视图对象
 */
export interface SysOssConfigVo {
  /** accessKey */
  accessKey: string;
  /** 桶名称 */
  bucketName: string;
  /** 配置key */
  configKey: string;
  /** 创建者 */
  createBy: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
  /** 自定义域名 */
  domain?: string;
  /** 访问站点 */
  endpoint?: string;
  /** 扩展字段 */
  ext1?: string;
  /** 是否https（Y=是,N=否） */
  isHttps: string;
  /**
   * 主建
   * @format int64
   */
  ossConfigId: number;
  /** 前缀 */
  prefix?: string;
  /** 域 */
  region?: string;
  /** 备注 */
  remark?: string;
  /** secretKey */
  secretKey: string;
  /** 状态（0=正常,1=停用） */
  status: string;
  /** 更新者 */
  updateBy?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
}

/**
 * SysOssPageQueryBo
 * OSS对象存储分页查询对象
 */
export interface SysOssPageQueryBo {
  /**
   * 开始创建时间
   * @format date-time
   */
  beginCreateTime?: string;
  /** 创建者 */
  createBy?: string;
  /**
   * 结束创建时间
   * @format date-time
   */
  endCreateTime?: string;
  /** 文件名 */
  fileName?: string;
  /** 文件后缀名 */
  fileSuffix?: string;
  /**
   * 排序的方向
   * @example "asc,desc"
   */
  isAsc?: string;
  /** 排序列 */
  orderByColumn?: string;
  /** 原名 */
  originalName?: string;
  /**
   * 当前页数
   * @format int32
   */
  pageNum?: number;
  /**
   * 分页大小
   * @format int32
   */
  pageSize?: number;
  /** 服务商 */
  service?: string;
  /** URL地址 */
  url?: string;
}

/**
 * SysOssVo
 * OSS对象存储视图对象
 */
export interface SysOssVo {
  /** 上传人 */
  createBy?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
  /** 文件名 */
  fileName: string;
  /** 文件后缀名 */
  fileSuffix: string;
  /** 原名 */
  originalName: string;
  /**
   * 对象存储主键
   * @format int64
   */
  ossId: number;
  /** 服务商 */
  service: string;
  /** 更新者 */
  updateBy?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** URL地址 */
  url: string;
}

/**
 * SysPostAddBo
 * 岗位信息新增业务对象
 */
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
  /** 备注 */
  remark?: string;
  /** 状态（0正常 1停用） */
  status: string;
}

/**
 * SysPostEditBo
 * 岗位信息修改业务对象
 */
export interface SysPostEditBo {
  /**
   * 岗位编码
   * @minLength 0
   * @maxLength 64
   */
  postCode: string;
  /**
   * 岗位序号
   * @format int64
   */
  postId: number;
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
  /** 备注 */
  remark?: string;
  /** 状态（0正常 1停用） */
  status: string;
}

/**
 * SysPostPageQueryBo
 * 岗位信息分页查询对象
 */
export interface SysPostPageQueryBo {
  /**
   * 排序的方向
   * @example "asc,desc"
   */
  isAsc?: string;
  /** 排序列 */
  orderByColumn?: string;
  /**
   * 当前页数
   * @format int32
   */
  pageNum?: number;
  /**
   * 分页大小
   * @format int32
   */
  pageSize?: number;
  /** 岗位编码 */
  postCode?: string;
  /** 岗位名称 */
  postName?: string;
  /** 状态（0正常 1停用） */
  status?: string;
}

/**
 * SysPostQueryBo
 * 岗位信息查询对象
 */
export interface SysPostQueryBo {
  /** 岗位编码 */
  postCode?: string;
  /** 岗位名称 */
  postName?: string;
  /** 状态（0正常 1停用） */
  status?: string;
}

/**
 * SysPostVo
 * 岗位信息视图对象
 */
export interface SysPostVo {
  /** 创建者 */
  createBy: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
  /**
   * 用户是否存在此岗位标识 默认不存在
   * @example false
   */
  flag: boolean;
  /** 岗位编码 */
  postCode: string;
  /**
   * 岗位序号
   * @format int64
   */
  postId: number;
  /** 岗位名称 */
  postName: string;
  /**
   * 岗位排序
   * @format int32
   */
  postSort: number;
  /** 备注 */
  remark?: string;
  /** 状态（0正常 1停用） */
  status: string;
  /** 更新者 */
  updateBy?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
}

/**
 * SysRole
 * 角色实体对象
 */
export interface SysRole {
  /** 创建者 */
  createBy?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 数据范围（1：所有数据权限；2：自定义数据权限；3：本部门数据权限；4：本部门及以下数据权限；5：仅本人数据权限） */
  dataScope?: string;
  /** 删除标志（0代表存在 2代表删除） */
  delFlag?: string;
  /**
   * 部门树选择项是否关联显示（0：父子不互相关联显示 1：父子互相关联显示 ）
   * @example false
   */
  deptCheckStrictly?: boolean;
  /** 部门组（数据权限） */
  deptIds?: number[];
  /**
   * 用户是否存在此角色标识 默认不存在
   * @example false
   */
  flag?: boolean;
  /**
   * 菜单树选择项是否关联显示（ 0：父子不互相关联显示 1：父子互相关联显示）
   * @example false
   */
  menuCheckStrictly?: boolean;
  /** 菜单组 */
  menuIds: number[];
  /** 备注 */
  remark?: string;
  /**
   * 角色ID
   * @format int64
   */
  roleId?: number;
  /**
   * 角色权限
   * @minLength 0
   * @maxLength 100
   */
  roleKey: string;
  /**
   * 角色名称
   * @minLength 0
   * @maxLength 30
   */
  roleName: string;
  /**
   * 角色排序
   * @format int32
   */
  roleSort: number;
  /** 角色状态（0正常 1停用） */
  status: string;
  /** 更新者 */
  updateBy?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
}

/**
 * SysRoleQueryBo
 * 角色查询对象
 */
export interface SysRoleQueryBo {
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
  /**
   * 排序的方向
   * @example "asc,desc"
   */
  isAsc?: string;
  /** 排序列 */
  orderByColumn?: string;
  /**
   * 当前页数
   * @format int32
   */
  pageNum?: number;
  /**
   * 分页大小
   * @format int32
   */
  pageSize?: number;
  /**
   * 角色ID
   * @format int64
   */
  roleId?: number;
  /** 角色权限 */
  roleKey?: string;
  /** 角色名称 */
  roleName?: string;
  /** 角色状态（0正常 1停用） */
  status?: string;
}

/**
 * SysRoleReq
 * 角色实体对象
 */
export interface SysRoleReq {
  /** 创建者 */
  createBy?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 数据范围（1：所有数据权限；2：自定义数据权限；3：本部门数据权限；4：本部门及以下数据权限；5：仅本人数据权限） */
  dataScope?: string;
  /** 删除标志（0代表存在 2代表删除） */
  delFlag?: string;
  /**
   * 部门树选择项是否关联显示（0：父子不互相关联显示 1：父子互相关联显示 ）
   * @example false
   */
  deptCheckStrictly?: boolean;
  /** 部门组（数据权限） */
  deptIds?: number[];
  /**
   * 用户是否存在此角色标识 默认不存在
   * @example false
   */
  flag?: boolean;
  /**
   * 菜单树选择项是否关联显示（ 0：父子不互相关联显示 1：父子互相关联显示）
   * @example false
   */
  menuCheckStrictly?: boolean;
  /** 菜单组 */
  menuIds: number[];
  /** 备注 */
  remark?: string;
  /**
   * 角色ID
   * @format int64
   */
  roleId?: number;
  /**
   * 角色权限
   * @minLength 0
   * @maxLength 100
   */
  roleKey: string;
  /**
   * 角色名称
   * @minLength 0
   * @maxLength 30
   */
  roleName: string;
  /**
   * 角色排序
   * @format int32
   */
  roleSort: number;
  /** 角色状态（0正常 1停用） */
  status: string;
  /** 更新者 */
  updateBy?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
}

/**
 * SysRoleRes
 * 角色实体对象
 */
export interface SysRoleRes {
  /**
   * 是否管理员
   * @example false
   */
  admin?: boolean;
  /** 创建者 */
  createBy?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 数据范围（1：所有数据权限；2：自定义数据权限；3：本部门数据权限；4：本部门及以下数据权限；5：仅本人数据权限） */
  dataScope?: string;
  /** 删除标志（0代表存在 2代表删除） */
  delFlag?: string;
  /**
   * 部门树选择项是否关联显示（0：父子不互相关联显示 1：父子互相关联显示 ）
   * @example false
   */
  deptCheckStrictly?: boolean;
  /** 部门组（数据权限） */
  deptIds?: number[];
  /**
   * 用户是否存在此角色标识 默认不存在
   * @example false
   */
  flag?: boolean;
  /**
   * 菜单树选择项是否关联显示（ 0：父子不互相关联显示 1：父子互相关联显示）
   * @example false
   */
  menuCheckStrictly?: boolean;
  /** 菜单组 */
  menuIds: number[];
  /** 备注 */
  remark?: string;
  /**
   * 角色ID
   * @format int64
   */
  roleId?: number;
  /**
   * 角色权限
   * @minLength 0
   * @maxLength 100
   */
  roleKey: string;
  /**
   * 角色名称
   * @minLength 0
   * @maxLength 30
   */
  roleName: string;
  /**
   * 角色排序
   * @format int32
   */
  roleSort: number;
  /** 角色状态（0正常 1停用） */
  status: string;
  /** 更新者 */
  updateBy?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
}

/**
 * SysRoleVo
 * 角色视图对象
 */
export interface SysRoleVo {
  /**
   * 是否管理员
   * @example false
   */
  admin: boolean;
  /** 创建者 */
  createBy: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
  /** 数据范围（1：所有数据权限；2：自定义数据权限；3：本部门数据权限；4：本部门及以下数据权限；5：仅本人数据权限） */
  dataScope: string;
  /** 删除标志（0代表存在 2代表删除） */
  delFlag: string;
  /**
   * 部门树选择项是否关联显示（0：父子不互相关联显示 1：父子互相关联显示 ）
   * @example false
   */
  deptCheckStrictly: boolean;
  /** 部门组（数据权限） */
  deptIds: number[];
  /**
   * 用户是否存在此角色标识 默认不存在
   * @example false
   */
  flag: boolean;
  /**
   * 菜单树选择项是否关联显示（ 0：父子不互相关联显示 1：父子互相关联显示）
   * @example false
   */
  menuCheckStrictly: boolean;
  /** 菜单组 */
  menuIds: number[];
  /** 备注 */
  remark?: string;
  /**
   * 角色ID
   * @format int64
   */
  roleId: number;
  /** 角色权限 */
  roleKey: string;
  /** 角色名称 */
  roleName: string;
  /**
   * 角色排序
   * @format int32
   */
  roleSort: number;
  /** 角色状态（0正常 1停用） */
  status: string;
  /** 更新者 */
  updateBy?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
}

/**
 * SysUserAddBo
 * 用户信息新增业务对象
 */
export interface SysUserAddBo {
  /** 用户头像 */
  avatar?: string;
  /**
   * 部门ID
   * @format int64
   */
  deptId?: number;
  /**
   * 用户邮箱
   * @minLength 0
   * @maxLength 50
   */
  email?: string;
  /**
   * 用户昵称
   * @minLength 0
   * @maxLength 30
   */
  nickName: string;
  /** 密码 */
  password: string;
  /** 手机号码 */
  phoneNumber?: string;
  /** 岗位组 */
  postIds: number[];
  /** 备注 */
  remark?: string;
  /** 角色组 */
  roleIds: number[];
  /** 用户性别 */
  sex?: string;
  /** 帐号状态（0正常 1停用） */
  status?: string;
  /**
   * 用户账号
   * @minLength 0
   * @maxLength 30
   */
  userName: string;
  /** 用户类型 */
  userType?: string;
}

/**
 * SysUserEditBo
 * 用户信息编辑业务对象
 */
export interface SysUserEditBo {
  /** 用户头像 */
  avatar?: string;
  /**
   * 部门ID
   * @format int64
   */
  deptId?: number;
  /**
   * 用户邮箱
   * @minLength 0
   * @maxLength 50
   */
  email?: string;
  /**
   * 用户昵称
   * @minLength 0
   * @maxLength 30
   */
  nickName?: string;
  /** 密码 */
  password?: string;
  /** 手机号码 */
  phoneNumber?: string;
  /** 岗位组 */
  postIds: number[];
  /** 备注 */
  remark?: string;
  /** 角色组 */
  roleIds: number[];
  /** 用户性别 */
  sex?: string;
  /** 帐号状态（0正常 1停用） */
  status?: string;
  /**
   * 用户ID
   * @format int64
   */
  userId: number;
  /**
   * 用户账号
   * @minLength 0
   * @maxLength 30
   */
  userName?: string;
  /** 用户类型 */
  userType?: string;
}

/**
 * SysUserOnlineVo
 * 当前在线会话视图对象
 */
export interface SysUserOnlineVo {
  /** 浏览器类型 */
  browser: string;
  /** 部门名称 */
  deptName?: string;
  /** 登录IP地址 */
  ipaddr: string;
  /** 登录地址 */
  loginLocation?: string;
  /**
   * 登录时间
   * @format int64
   */
  loginTime: number;
  /** 操作系统 */
  os: string;
  /** 会话编号 */
  tokenId: string;
  /** 用户名称 */
  userName: string;
}

/**
 * SysUserPageQueryBo
 * 用户信息分页查询对象
 */
export interface SysUserPageQueryBo {
  /**
   * 开始创建时间
   * @format date-time
   */
  beginCreateTime?: string;
  /**
   * 部门ID
   * @format int64
   */
  deptId?: number;
  /**
   * 结束创建时间
   * @format date-time
   */
  endCreateTime?: string;
  /**
   * 排序的方向
   * @example "asc,desc"
   */
  isAsc?: string;
  /** 排序列 */
  orderByColumn?: string;
  /**
   * 当前页数
   * @format int32
   */
  pageNum?: number;
  /**
   * 分页大小
   * @format int32
   */
  pageSize?: number;
  /** 手机号码 */
  phoneNumber?: string;
  /**
   * 角色ID
   * @format int64
   */
  roleId?: number;
  /** 帐号状态（0正常 1停用） */
  status?: string;
  /**
   * 用户ID
   * @format int64
   */
  userId?: number;
  /** 用户账号 */
  userName?: string;
}

/**
 * SysUserQueryBo
 * 用户信息查询对象
 */
export interface SysUserQueryBo {
  /**
   * 开始创建时间
   * @format date-time
   */
  beginCreateTime?: string;
  /**
   * 部门ID
   * @format int64
   */
  deptId?: number;
  /**
   * 结束创建时间
   * @format date-time
   */
  endCreateTime?: string;
  /** 手机号码 */
  phoneNumber?: string;
  /**
   * 角色ID
   * @format int64
   */
  roleId?: number;
  /** 帐号状态（0正常 1停用） */
  status?: string;
  /**
   * 用户ID
   * @format int64
   */
  userId?: number;
  /** 用户账号 */
  userName?: string;
}

/**
 * SysUserReq
 * 后台用户实体对象
 */
export interface SysUserReq {
  /** 用户头像 */
  avatar?: string;
  /** 创建者 */
  createBy?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 删除标志（0代表存在 2代表删除） */
  delFlag?: string;
  /** 部门对象 */
  dept?: SysDept;
  /**
   * 部门ID
   * @format int64
   */
  deptId?: number;
  /**
   * 用户邮箱
   * @minLength 0
   * @maxLength 50
   */
  email?: string;
  /**
   * 最后登录时间
   * @format date-time
   */
  loginDate?: string;
  /** 最后登录IP */
  loginIp?: string;
  /**
   * 用户昵称
   * @minLength 0
   * @maxLength 30
   */
  nickName: string;
  /** 密码 */
  password: string;
  /** 手机号码 */
  phoneNumber?: string;
  /** 岗位组 */
  postIds: number[];
  /** 备注 */
  remark?: string;
  /**
   * 角色ID
   * @format int64
   */
  roleId?: number;
  /** 角色组 */
  roleIds: number[];
  /** 角色对象 */
  roles?: SysRoleReq[];
  /** 用户性别 */
  sex?: string;
  /** 帐号状态（0正常 1停用） */
  status?: string;
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
   * 用户账号
   * @minLength 0
   * @maxLength 30
   */
  userName: string;
  /** 用户类型 */
  userType?: string;
}

/**
 * SysUserRes
 * 后台用户实体对象
 */
export interface SysUserRes {
  /**
   * 是否管理员
   * @example false
   */
  admin?: boolean;
  /** 用户头像 */
  avatar?: string;
  /** 创建者 */
  createBy?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 删除标志（0代表存在 2代表删除） */
  delFlag?: string;
  /** 部门对象 */
  dept?: SysDept;
  /**
   * 部门ID
   * @format int64
   */
  deptId?: number;
  /**
   * 用户邮箱
   * @minLength 0
   * @maxLength 50
   */
  email?: string;
  /**
   * 最后登录时间
   * @format date-time
   */
  loginDate?: string;
  /** 最后登录IP */
  loginIp?: string;
  /**
   * 用户昵称
   * @minLength 0
   * @maxLength 30
   */
  nickName: string;
  /** 密码 */
  password: string;
  /** 手机号码 */
  phoneNumber?: string;
  /** 岗位组 */
  postIds: number[];
  /** 备注 */
  remark?: string;
  /**
   * 角色ID
   * @format int64
   */
  roleId?: number;
  /** 角色组 */
  roleIds: number[];
  /** 角色对象 */
  roles?: SysRoleRes[];
  /** 用户性别 */
  sex?: string;
  /** 帐号状态（0正常 1停用） */
  status?: string;
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
   * 用户账号
   * @minLength 0
   * @maxLength 30
   */
  userName: string;
  /** 用户类型 */
  userType?: string;
}

/**
 * SysUserRole
 * 用户和角色关联
 */
export interface SysUserRole {
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
}

/**
 * SysUserVo
 * 后台用户信息视图对象
 */
export interface SysUserVo {
  /**
   * 是否管理员
   * @example false
   */
  admin: boolean;
  /** 用户头像 */
  avatar?: string;
  /** 创建者 */
  createBy: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
  /** 删除标志（0代表存在 2代表删除） */
  delFlag: string;
  /** 部门对象 */
  dept: SysDeptVo;
  /**
   * 部门ID
   * @format int64
   */
  deptId: number;
  /** 用户邮箱 */
  email?: string;
  /**
   * 最后登录时间
   * @format date-time
   */
  loginDate?: string;
  /** 最后登录IP */
  loginIp?: string;
  /** 用户昵称 */
  nickName: string;
  /** 密码 */
  password: string;
  /** 手机号码 */
  phoneNumber?: string;
  /** 岗位组 */
  postIds: number[];
  /** 备注 */
  remark?: string;
  /**
   * 角色ID
   * @format int64
   */
  roleId: number;
  /** 角色组 */
  roleIds: number[];
  /** 角色对象 */
  roles: SysRoleVo[];
  /** 用户性别 */
  sex: string;
  /** 帐号状态（0正常 1停用） */
  status: string;
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
  /** 用户账号 */
  userName: string;
  /** 用户类型 */
  userType: string;
}

/**
 * TableDataInfo«BizLogininforVo»
 * 分页响应对象
 */
export interface TableDataInfoBizLogininforVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 数据对象 */
  data: TableDataBizLogininforVo;
  /** 消息内容 */
  msg: string;
}

/**
 * TableDataInfo«BizUserVo»
 * 分页响应对象
 */
export interface TableDataInfoBizUserVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 数据对象 */
  data: TableDataBizUserVo;
  /** 消息内容 */
  msg: string;
}

/**
 * TableDataInfo«SysConfigVo»
 * 分页响应对象
 */
export interface TableDataInfoSysConfigVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 数据对象 */
  data: TableDataSysConfigVo;
  /** 消息内容 */
  msg: string;
}

/**
 * TableDataInfo«SysDictDataVo»
 * 分页响应对象
 */
export interface TableDataInfoSysDictDataVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 数据对象 */
  data: TableDataSysDictDataVo;
  /** 消息内容 */
  msg: string;
}

/**
 * TableDataInfo«SysDictTypeVo»
 * 分页响应对象
 */
export interface TableDataInfoSysDictTypeVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 数据对象 */
  data: TableDataSysDictTypeVo;
  /** 消息内容 */
  msg: string;
}

/**
 * TableDataInfo«SysLogininforVo»
 * 分页响应对象
 */
export interface TableDataInfoSysLogininforVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 数据对象 */
  data: TableDataSysLogininforVo;
  /** 消息内容 */
  msg: string;
}

/**
 * TableDataInfo«SysNoticeVo»
 * 分页响应对象
 */
export interface TableDataInfoSysNoticeVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 数据对象 */
  data: TableDataSysNoticeVo;
  /** 消息内容 */
  msg: string;
}

/**
 * TableDataInfo«SysOperLogVo»
 * 分页响应对象
 */
export interface TableDataInfoSysOperLogVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 数据对象 */
  data: TableDataSysOperLogVo;
  /** 消息内容 */
  msg: string;
}

/**
 * TableDataInfo«SysOssConfigVo»
 * 分页响应对象
 */
export interface TableDataInfoSysOssConfigVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 数据对象 */
  data: TableDataSysOssConfigVo;
  /** 消息内容 */
  msg: string;
}

/**
 * TableDataInfo«SysOssVo»
 * 分页响应对象
 */
export interface TableDataInfoSysOssVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 数据对象 */
  data: TableDataSysOssVo;
  /** 消息内容 */
  msg: string;
}

/**
 * TableDataInfo«SysPostVo»
 * 分页响应对象
 */
export interface TableDataInfoSysPostVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 数据对象 */
  data: TableDataSysPostVo;
  /** 消息内容 */
  msg: string;
}

/**
 * TableDataInfo«SysRoleVo»
 * 分页响应对象
 */
export interface TableDataInfoSysRoleVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 数据对象 */
  data: TableDataSysRoleVo;
  /** 消息内容 */
  msg: string;
}

/**
 * TableDataInfo«SysUserOnlineVo»
 * 分页响应对象
 */
export interface TableDataInfoSysUserOnlineVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 数据对象 */
  data: TableDataSysUserOnlineVo;
  /** 消息内容 */
  msg: string;
}

/**
 * TableDataInfo«SysUserVo»
 * 分页响应对象
 */
export interface TableDataInfoSysUserVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 数据对象 */
  data: TableDataSysUserVo;
  /** 消息内容 */
  msg: string;
}

/**
 * TableData«BizLogininforVo»
 * 分页数据对象
 */
export interface TableDataBizLogininforVo {
  /** 列表数据 */
  data: BizLogininforVo[];
  /**
   * 总记录数
   * @format int64
   */
  total: number;
}

/**
 * TableData«BizUserVo»
 * 分页数据对象
 */
export interface TableDataBizUserVo {
  /** 列表数据 */
  data: BizUserVo[];
  /**
   * 总记录数
   * @format int64
   */
  total: number;
}

/**
 * TableData«SysConfigVo»
 * 分页数据对象
 */
export interface TableDataSysConfigVo {
  /** 列表数据 */
  data: SysConfigVo[];
  /**
   * 总记录数
   * @format int64
   */
  total: number;
}

/**
 * TableData«SysDictDataVo»
 * 分页数据对象
 */
export interface TableDataSysDictDataVo {
  /** 列表数据 */
  data: SysDictDataVo[];
  /**
   * 总记录数
   * @format int64
   */
  total: number;
}

/**
 * TableData«SysDictTypeVo»
 * 分页数据对象
 */
export interface TableDataSysDictTypeVo {
  /** 列表数据 */
  data: SysDictTypeVo[];
  /**
   * 总记录数
   * @format int64
   */
  total: number;
}

/**
 * TableData«SysLogininforVo»
 * 分页数据对象
 */
export interface TableDataSysLogininforVo {
  /** 列表数据 */
  data: SysLogininforVo[];
  /**
   * 总记录数
   * @format int64
   */
  total: number;
}

/**
 * TableData«SysNoticeVo»
 * 分页数据对象
 */
export interface TableDataSysNoticeVo {
  /** 列表数据 */
  data: SysNoticeVo[];
  /**
   * 总记录数
   * @format int64
   */
  total: number;
}

/**
 * TableData«SysOperLogVo»
 * 分页数据对象
 */
export interface TableDataSysOperLogVo {
  /** 列表数据 */
  data: SysOperLogVo[];
  /**
   * 总记录数
   * @format int64
   */
  total: number;
}

/**
 * TableData«SysOssConfigVo»
 * 分页数据对象
 */
export interface TableDataSysOssConfigVo {
  /** 列表数据 */
  data: SysOssConfigVo[];
  /**
   * 总记录数
   * @format int64
   */
  total: number;
}

/**
 * TableData«SysOssVo»
 * 分页数据对象
 */
export interface TableDataSysOssVo {
  /** 列表数据 */
  data: SysOssVo[];
  /**
   * 总记录数
   * @format int64
   */
  total: number;
}

/**
 * TableData«SysPostVo»
 * 分页数据对象
 */
export interface TableDataSysPostVo {
  /** 列表数据 */
  data: SysPostVo[];
  /**
   * 总记录数
   * @format int64
   */
  total: number;
}

/**
 * TableData«SysRoleVo»
 * 分页数据对象
 */
export interface TableDataSysRoleVo {
  /** 列表数据 */
  data: SysRoleVo[];
  /**
   * 总记录数
   * @format int64
   */
  total: number;
}

/**
 * TableData«SysUserOnlineVo»
 * 分页数据对象
 */
export interface TableDataSysUserOnlineVo {
  /** 列表数据 */
  data: SysUserOnlineVo[];
  /**
   * 总记录数
   * @format int64
   */
  total: number;
}

/**
 * TableData«SysUserVo»
 * 分页数据对象
 */
export interface TableDataSysUserVo {
  /** 列表数据 */
  data: SysUserVo[];
  /**
   * 总记录数
   * @format int64
   */
  total: number;
}

/** TreeNodeConfig */
export interface TreeNodeConfig {
  childrenKey?: string;
  /** @format int32 */
  deep?: number;
  idKey?: string;
  nameKey?: string;
  parentIdKey?: string;
  weightKey?: string;
}

/**
 * UpdatePwdBo
 * 修改密码表单对象
 */
export interface UpdatePwdBo {
  /** 新密码 */
  newPassword: string;
  /** 原密码 */
  oldPassword: string;
}

/**
 * UserAuthRoleVo
 * 用户授权角色返回对象
 */
export interface UserAuthRoleVo {
  /** 授权角色列表 */
  roles?: SysRoleRes[];
  /** 用户信息业务对象 */
  user?: SysUserRes;
}

/**
 * UserDetailVo
 * 用户详情返回对象
 */
export interface UserDetailVo {
  /** 岗位ID列表 */
  postIds?: number[];
  /** 岗位列表 */
  posts: SysPostVo[];
  /** 角色ID列表 */
  roleIds?: number[];
  /** 角色列表 */
  roles: SysRoleVo[];
  /** 用户信息业务对象 */
  user?: SysUserVo;
}

/**
 * UserInfoVo
 * 用户信息返回对象
 */
export interface UserInfoVo {
  /**
   * 权限集合
   * @uniqueItems true
   */
  permissions: string[];
  /**
   * 角色集合
   * @uniqueItems true
   */
  roles: string[];
  /** 用户信息业务对象 */
  user: SysUserVo;
}

/**
 * UserNameLoginBo
 * 用户密码登录表单对象
 */
export interface UserNameLoginBo {
  /** 验证码 */
  code: string;
  /** 用户密码 */
  password: string;
  /** 用户名 */
  username: string;
  /** 唯一标识 */
  uuid: string;
}

/**
 * UserNameRegisterBo
 * 用户名账户注册对象
 */
export interface UserNameRegisterBo {
  /** 验证码 */
  code: string;
  /** 用户密码 */
  password: string;
  /** 用户类型 */
  userType?: string;
  /** 用户名 */
  username: string;
  /** 唯一标识 */
  uuid: string;
}
