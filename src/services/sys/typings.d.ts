declare namespace API {
  interface AuthRoleAllBo {
    /** 角色ID串 */
    roleIds: number[];
    /** 用户Id */
    userId: number;
  }

  interface AuthUserAllBo {
    /** 角色ID */
    roleId: number;
    /** 用户ID串 */
    userIds: number[];
  }

  interface AvatarUploadVo {
    /** 头像地址 */
    imgUrl?: string;
  }

  interface CacheInfoVo {
    /** redis命令统计 */
    commandStats?: Record<string, any>[];
    /** 数据库大小 */
    dbSize?: string;
    /** 缓存服务器原始配置信息 */
    info?: Record<string, any>;
  }

  interface CaptchaGetSmsCaptchaParams {
    /** 用户手机号 */
    phoneNumber: string;
  }

  interface CaptchaImageVo {
    /** 验证码开关 */
    captchaOnOff: boolean;
    /** 图片base64 */
    img: string;
    /** 验证码唯一标识符 */
    uuid: string;
  }

  type CharSequence = true;

  type Comparableobject = true;

  interface LoginUserUpdateBo {
    /** 用户头像 */
    avatar?: string;
    /** 用户邮箱 */
    email?: string;
    /** 用户昵称 */
    nickName?: string;
    /** 手机号码 */
    phoneNumber?: string;
    /** 用户性别 */
    sex?: string;
  }

  interface LoginVo {
    /** 身份令牌 */
    token: string;
  }

  interface MetaVo {
    /** 设置该路由的图标，对应路径src/assets/icons/svg */
    icon?: string;
    /** 内链地址（http(s)://开头） */
    link?: string;
    /** 设置为true，则不会被 <keep-alive>缓存 */
    noCache?: boolean;
    /** 设置该路由在侧边栏和面包屑中展示的名字 */
    title: string;
  }

  interface OssUploadVo {
    /** 原名 */
    fileName?: string;
    /** 对象存储主键 */
    ossId?: string;
    /** URL地址 */
    url?: string;
  }

  interface ProfileVo {
    /** 用户所属岗位组 */
    postGroup: string;
    /** 用户所属角色组 */
    roleGroup: string;
    /** 用户对象信息 */
    user: SysUserVo;
  }

  interface ResponseAvatarUploadVo {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: AvatarUploadVo;
    /** 消息内容 */
    msg: string;
  }

  interface ResponseCacheInfoVo {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: CacheInfoVo;
    /** 消息内容 */
    msg: string;
  }

  interface ResponseCaptchaImageVo {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: CaptchaImageVo;
    /** 消息内容 */
    msg: string;
  }

  interface ResponseListRouterVo {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: RouterVo[];
    /** 消息内容 */
    msg: string;
  }

  interface ResponseListSysDeptVo {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: SysDeptVo[];
    /** 消息内容 */
    msg: string;
  }

  interface ResponseListSysDictDataVo {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: SysDictDataVo[];
    /** 消息内容 */
    msg: string;
  }

  interface ResponseListSysDictTypeVo {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: SysDictTypeVo[];
    /** 消息内容 */
    msg: string;
  }

  interface ResponseListSysMenu {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: SysMenu0[];
    /** 消息内容 */
    msg: string;
  }

  interface ResponseListSysOssVo {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: SysOssVo[];
    /** 消息内容 */
    msg: string;
  }

  interface ResponseListSysPostVo {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: SysPostVo[];
    /** 消息内容 */
    msg: string;
  }

  interface ResponseListSysRoleVo {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: SysRoleVo[];
    /** 消息内容 */
    msg: string;
  }

  interface ResponseListTreelong {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: Record<string, any>[];
    /** 消息内容 */
    msg: string;
  }

  interface ResponseLoginVo {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: LoginVo;
    /** 消息内容 */
    msg: string;
  }

  interface ResponseOssUploadVo {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: OssUploadVo;
    /** 消息内容 */
    msg: string;
  }

  interface ResponseProfileVo {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: ProfileVo;
    /** 消息内容 */
    msg: string;
  }

  interface ResponseRoleDeptTreeSelectVo {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: RoleDeptTreeSelectVo;
    /** 消息内容 */
    msg: string;
  }

  interface ResponseRoleMenuTreeSelectVo {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: RoleMenuTreeSelectVo;
    /** 消息内容 */
    msg: string;
  }

  interface ResponseSysConfigVo {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: SysConfigVo;
    /** 消息内容 */
    msg: string;
  }

  interface ResponseSysDeptVo {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: SysDeptVo;
    /** 消息内容 */
    msg: string;
  }

  interface ResponseSysDictDataVo {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: SysDictDataVo;
    /** 消息内容 */
    msg: string;
  }

  interface ResponseSysDictTypeVo {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: SysDictTypeVo;
    /** 消息内容 */
    msg: string;
  }

  interface ResponseSysMenu {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: SysMenu0;
    /** 消息内容 */
    msg: string;
  }

  interface ResponseSysNoticeVo {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: SysNoticeVo;
    /** 消息内容 */
    msg: string;
  }

  interface ResponseSysOssConfigVo {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: SysOssConfigVo;
    /** 消息内容 */
    msg: string;
  }

  interface ResponseSysPostVo {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: SysPostVo;
    /** 消息内容 */
    msg: string;
  }

  interface ResponseSysRoleVo {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: SysRoleVo;
    /** 消息内容 */
    msg: string;
  }

  interface ResponseUserAuthRoleVo {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: UserAuthRoleVo;
    /** 消息内容 */
    msg: string;
  }

  interface ResponseUserDetailVo {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: UserDetailVo;
    /** 消息内容 */
    msg: string;
  }

  interface ResponseUserInfoVo {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: UserInfoVo;
    /** 消息内容 */
    msg: string;
  }

  interface ResponseVoid {
    /** 消息状态码 */
    code: number;
    /** 消息内容 */
    msg: string;
  }

  interface RoleDeptTreeSelectVo {
    /** 选中部门ID列表 */
    checkedKeys?: number[];
    /** 下拉树结构列表 */
    depts?: Record<string, any>[];
  }

  interface RoleMenuTreeSelectVo {
    /** 菜单树信息keys */
    checkedKeys: number[];
    /** 前端所需要下拉树结构 */
    menus: Record<string, any>[];
  }

  interface RouterVo {
    /** 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面 */
    alwaysShow: boolean;
    /** 子路由 */
    children?: RouterVo[];
    /** 组件地址 */
    component?: string;
    /** 是否隐藏路由，当设置 true 的时候该路由不会再侧边栏出现 */
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

  interface SmsLoginBo {
    /** 用户手机号 */
    phoneNumber?: string;
    /** 短信验证码 */
    smsCode?: string;
  }

  interface SysConfigAddBo {
    /** 参数键名 */
    configKey: string;
    /** 参数名称 */
    configName: string;
    /** 系统内置（Y是 N否） */
    configType?: string;
    /** 参数键值 */
    configValue: string;
    /** 备注 */
    remark?: string;
  }

  interface SysConfigEditBo {
    /** 参数主键 */
    configId: number;
    /** 参数键名 */
    configKey?: string;
    /** 参数名称 */
    configName?: string;
    /** 系统内置（Y是 N否） */
    configType?: string;
    /** 参数键值 */
    configValue?: string;
    /** 备注 */
    remark?: string;
  }

  interface SysConfigGetConfigKeyParams {
    /** 参数Key */
    configKey: string;
  }

  interface SysConfigGetInfoParams {
    /** 参数ID */
    configId: number;
  }

  interface SysConfigPageQueryBo {
    /** 开始时间 */
    beginTime?: string;
    /** 参数键名 */
    configKey?: string;
    /** 参数名称 */
    configName?: string;
    /** 系统内置（Y是 N否） */
    configType?: string;
    /** 结束时间 */
    endTime?: string;
    /** 排序的方向 */
    isAsc?: string;
    /** 排序列 */
    orderByColumn?: string;
    /** 当前页数 */
    pageNum?: number;
    /** 分页大小 */
    pageSize?: number;
  }

  interface SysConfigPostRemoveParams {
    /** 参数ID串 */
    configIds: number;
  }

  interface SysConfigQueryBo {
    /** 开始时间 */
    beginTime?: string;
    /** 参数键名 */
    configKey?: string;
    /** 参数名称 */
    configName?: string;
    /** 系统内置（Y是 N否） */
    configType?: string;
    /** 结束时间 */
    endTime?: string;
  }

  interface SysConfigVo {
    /** 参数主键 */
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
    /** 创建时间 */
    createTime: string;
    /** 备注 */
    remark?: string;
    /** 更新者 */
    updateBy?: string;
    /** 更新时间 */
    updateTime?: string;
  }

  interface SysDept {
    /** 祖级列表 */
    ancestors?: string;
    /** 子部门 */
    children?: SysDept[];
    /** 创建者 */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
    /** 删除标志（0代表存在 2代表删除） */
    delFlag?: string;
    /** 部门id */
    deptId?: number;
    /** 部门名称 */
    deptName: string;
    /** 邮箱 */
    email?: string;
    /** 负责人 */
    leader?: string;
    /** 显示顺序 */
    orderNum: number;
    /** 父菜单ID */
    parentId?: number;
    /** 父菜单名称 */
    parentName?: string;
    /** 联系电话 */
    phone?: string;
    /** 部门状态:0正常,1停用 */
    status?: string;
    /** 更新者 */
    updateBy?: string;
    /** 更新时间 */
    updateTime?: string;
  }

  interface SysDeptAddBo {
    /** 祖级列表 */
    ancestors?: string;
    /** 子部门 */
    children?: SysDept[];
    /** 删除标志（0代表存在 2代表删除） */
    delFlag?: string;
    /** 部门名称 */
    deptName: string;
    /** 邮箱 */
    email?: string;
    /** 负责人 */
    leader?: string;
    /** 显示顺序 */
    orderNum: number;
    /** 父菜单ID */
    parentId?: number;
    /** 父菜单名称 */
    parentName?: string;
    /** 联系电话 */
    phone?: string;
    /** 部门状态:0正常,1停用 */
    status?: string;
  }

  interface SysDeptEditBo {
    /** 祖级列表 */
    ancestors?: string;
    /** 子部门 */
    children?: SysDept[];
    /** 删除标志（0代表存在 2代表删除） */
    delFlag?: string;
    /** 部门id */
    deptId: number;
    /** 部门名称 */
    deptName: string;
    /** 邮箱 */
    email?: string;
    /** 负责人 */
    leader?: string;
    /** 显示顺序 */
    orderNum?: number;
    /** 父菜单ID, 无父级则传0 */
    parentId: number;
    /** 父菜单名称 */
    parentName?: string;
    /** 联系电话 */
    phone?: string;
    /** 部门状态:0正常,1停用 */
    status?: string;
  }

  interface SysDeptGetExcludeChildParams {
    /** 部门ID */
    deptId: number;
  }

  interface SysDeptGetInfoParams {
    /** 部门ID */
    deptId: number;
  }

  interface SysDeptGetRoleDeptTreeSelectParams {
    /** 角色ID */
    roleId: number;
  }

  interface SysDeptPostRemoveParams {
    /** 部门ID串 */
    deptId: number;
  }

  interface SysDeptQueryBo {
    /** 部门id */
    deptId?: number;
    /** 部门名称 */
    deptName?: string;
    /** 父菜单ID */
    parentId?: number;
    /** 部门状态:0正常,1停用 */
    status?: string;
  }

  interface SysDeptReq {
    /** 祖级列表 */
    ancestors?: string;
    /** 子部门 */
    children?: SysDeptReq[];
    /** 创建者 */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
    /** 删除标志（0代表存在 2代表删除） */
    delFlag?: string;
    /** 部门id */
    deptId?: number;
    /** 部门名称 */
    deptName: string;
    /** 邮箱 */
    email?: string;
    /** 负责人 */
    leader?: string;
    /** 显示顺序 */
    orderNum: number;
    /** 父菜单ID */
    parentId?: number;
    /** 父菜单名称 */
    parentName?: string;
    /** 联系电话 */
    phone?: string;
    /** 部门状态:0正常,1停用 */
    status?: string;
    /** 更新者 */
    updateBy?: string;
    /** 更新时间 */
    updateTime?: string;
  }

  interface SysDeptRes {
    /** 祖级列表 */
    ancestors?: string;
    /** 删除标志（0代表存在 2代表删除） */
    delFlag?: string;
    /** 部门id */
    deptId?: number;
    /** 部门名称 */
    deptName: string;
    /** 邮箱 */
    email?: string;
    /** 负责人 */
    leader?: string;
    /** 显示顺序 */
    orderNum: number;
    /** 联系电话 */
    phone?: string;
    /** 部门状态:0正常,1停用 */
    status?: string;
  }

  interface SysDeptVo {
    /** 祖级列表 */
    ancestors?: string;
    /** 删除标志（0代表存在 2代表删除） */
    delFlag: string;
    /** 部门id */
    deptId: number;
    /** 部门名称 */
    deptName: string;
    /** 邮箱 */
    email?: string;
    /** 负责人 */
    leader?: string;
    /** 显示顺序 */
    orderNum: number;
    /** 联系电话 */
    phone?: string;
    /** 部门状态:0正常,1停用 */
    status: string;
  }

  interface SysDictDataAddBo {
    /** 样式属性（其他样式扩展） */
    cssClass?: string;
    /** 字典标签 */
    dictLabel: string;
    /** 字典排序 */
    dictSort?: number;
    /** 字典类型 */
    dictType: string;
    /** 字典键值 */
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

  interface SysDictDataEditBo {
    /** 样式属性（其他样式扩展） */
    cssClass?: string;
    /** 字典编码 */
    dictCode: number;
    /** 字典标签 */
    dictLabel?: string;
    /** 字典排序 */
    dictSort?: number;
    /** 字典类型 */
    dictType?: string;
    /** 字典键值 */
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

  interface SysDictDataGetInfoParams {
    /** 字典code */
    dictCode: number;
  }

  interface SysDictDataGetTypeParams {
    /** 字典类型 */
    dictType: string;
  }

  interface SysDictDataPageQueryBo {
    /** 字典标签 */
    dictLabel?: string;
    /** 字典类型 */
    dictType?: string;
    /** 排序的方向 */
    isAsc?: string;
    /** 排序列 */
    orderByColumn?: string;
    /** 当前页数 */
    pageNum?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 状态（0正常 1停用） */
    status?: string;
  }

  interface SysDictDataPostRemoveParams {
    /** 字典code串 */
    dictCodes: number;
  }

  interface SysDictDataQueryBo {
    /** 字典标签 */
    dictLabel?: string;
    /** 字典类型 */
    dictType?: string;
    /** 状态（0正常 1停用） */
    status?: string;
  }

  interface SysDictDataVo {
    /** 创建者 */
    createBy: string;
    /** 创建时间 */
    createTime: string;
    /** 样式属性（其他样式扩展） */
    cssClass?: string;
    /** 字典编码 */
    dictCode: number;
    /** 字典标签 */
    dictLabel: string;
    /** 字典排序 */
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
    /** 更新时间 */
    updateTime?: string;
  }

  interface SysDictTypeAddBo {
    /** 字典名称 */
    dictName: string;
    /** 字典类型 */
    dictType: string;
    /** 备注 */
    remark?: string;
    /** 状态（0正常 1停用） */
    status?: string;
  }

  interface SysDictTypeEditBo {
    /** 字典主键 */
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

  interface SysDictTypeGetInfoParams {
    /** 字典ID */
    dictId: number;
  }

  interface SysDictTypePageQueryBo {
    /** 开始时间 */
    beginTime?: string;
    /** 字典名称 */
    dictName?: string;
    /** 字典类型 */
    dictType?: string;
    /** 结束时间 */
    endTime?: string;
    /** 排序的方向 */
    isAsc?: string;
    /** 排序列 */
    orderByColumn?: string;
    /** 当前页数 */
    pageNum?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 状态（0正常 1停用） */
    status?: string;
  }

  interface SysDictTypePostRemoveParams {
    /** 字典ID串 */
    dictIds: number;
  }

  interface SysDictTypeQueryBo {
    /** 开始时间 */
    beginTime?: string;
    /** 字典名称 */
    dictName?: string;
    /** 字典类型 */
    dictType?: string;
    /** 结束时间 */
    endTime?: string;
    /** 状态（0正常 1停用） */
    status?: string;
  }

  interface SysDictTypeVo {
    /** 创建者 */
    createBy: string;
    /** 创建时间 */
    createTime: string;
    /** 字典主键 */
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
    /** 更新时间 */
    updateTime?: string;
  }

  interface SysLoginGetXcxLoginParams {
    /** 小程序code */
    xcxCode: string;
  }

  interface SysLogininforPageQueryBo {
    /** 开始时间 */
    beginTime?: string;
    /** 结束时间 */
    endTime?: string;
    /** 登录IP地址 */
    ipaddr?: string;
    /** 排序的方向 */
    isAsc?: string;
    /** 排序列 */
    orderByColumn?: string;
    /** 当前页数 */
    pageNum?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 登录状态 0成功 1失败 */
    status?: string;
    /** 用户账号 */
    userName?: string;
  }

  interface SysLogininforPostRemoveParams {
    /** 登录日志ID组 */
    infoIds: number;
  }

  interface SysLogininforQueryBo {
    /** 开始时间 */
    beginTime?: string;
    /** 结束时间 */
    endTime?: string;
    /** 登录IP地址 */
    ipaddr?: string;
    /** 登录状态 0成功 1失败 */
    status?: string;
    /** 用户账号 */
    userName?: string;
  }

  interface SysLogininforVo {
    /** 浏览器类型 */
    browser: string;
    /** 访问ID */
    infoId: number;
    /** 登录IP地址 */
    ipaddr: string;
    /** 登录地点 */
    loginLocation: string;
    /** 访问时间 */
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

  interface SysMenu {
    /** 子部门 */
    children?: SysMenu[];
    /** 组件路径 */
    component?: string;
    /** 创建者 */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
    /** 菜单图标 */
    icon?: string;
    /** 是否缓存（0缓存 1不缓存） */
    isCache?: string;
    /** 是否为外链（0是 1否） */
    isFrame?: string;
    /** 菜单ID */
    menuId?: number;
    /** 菜单名称 */
    menuName: string;
    /** 类型（M目录 C菜单 F按钮） */
    menuType: string;
    /** 显示顺序 */
    orderNum: number;
    /** 父菜单ID */
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
    status?: string;
    /** 更新者 */
    updateBy?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 显示状态（0显示 1隐藏） */
    visible?: string;
  }

  interface SysMenu0 {
    /** 组件路径 */
    component?: string;
    /** 菜单图标 */
    icon?: string;
    /** 是否缓存（0缓存 1不缓存） */
    isCache: string;
    /** 是否为外链（0是 1否） */
    isFrame: string;
    /** 菜单ID */
    menuId: number;
    /** 菜单名称 */
    menuName: string;
    /** 类型（M目录 C菜单 F按钮） */
    menuType: string;
    /** 显示顺序 */
    orderNum: number;
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
    /** 显示状态（0显示 1隐藏） */
    visible: string;
  }

  interface SysMenuAddBo {
    /** 子菜单 */
    children?: SysMenu[];
    /** 组件路径 */
    component?: string;
    /** 菜单图标 */
    icon?: string;
    /** 是否缓存（0缓存 1不缓存） */
    isCache?: string;
    /** 是否为外链（0是 1否） */
    isFrame?: string;
    /** 菜单名称 */
    menuName: string;
    /** 类型（M目录 C菜单 F按钮） */
    menuType: string;
    /** 显示顺序 */
    orderNum: number;
    /** 父菜单ID */
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
    status?: string;
    /** 显示状态（0显示 1隐藏） */
    visible?: string;
  }

  interface SysMenuEditBo {
    /** 子菜单 */
    children?: SysMenu[];
    /** 组件路径 */
    component?: string;
    /** 菜单图标 */
    icon?: string;
    /** 是否缓存（0缓存 1不缓存） */
    isCache?: string;
    /** 是否为外链（0是 1否） */
    isFrame?: string;
    /** 菜单ID */
    menuId: number;
    /** 菜单名称 */
    menuName?: string;
    /** 类型（M目录 C菜单 F按钮） */
    menuType?: string;
    /** 显示顺序 */
    orderNum?: number;
    /** 父菜单ID */
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
    status?: string;
    /** 显示状态（0显示 1隐藏） */
    visible?: string;
  }

  interface SysMenuGetInfoParams {
    /** 菜单ID */
    menuId: number;
  }

  interface SysMenuGetRoleMenuTreeSelectParams {
    /** 角色ID */
    roleId: number;
  }

  interface SysMenuPostRemoveParams {
    /** 菜单ID */
    menuId: number;
  }

  interface SysMenuQueryBo {
    /** 排序的方向 */
    isAsc?: string;
    /** 菜单名称 */
    menuName?: string;
    /** 排序列 */
    orderByColumn?: string;
    /** 当前页数 */
    pageNum?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 菜单状态（0显示 1隐藏） */
    status?: string;
    /** 显示状态（0显示 1隐藏） */
    visible?: string;
  }

  interface SysNoticeAddBo {
    /** 公告内容 */
    noticeContent: string;
    /** 公告标题 */
    noticeTitle: string;
    /** 公告类型（1通知 2公告） */
    noticeType: string;
    /** 备注 */
    remark?: string;
    /** 公告状态（0正常 1关闭） */
    status: string;
  }

  interface SysNoticeEditBo {
    /** 公告内容 */
    noticeContent?: string;
    /** 公告ID */
    noticeId: number;
    /** 公告标题 */
    noticeTitle?: string;
    /** 公告类型（1通知 2公告） */
    noticeType?: string;
    /** 备注 */
    remark?: string;
    /** 公告状态（0正常 1关闭） */
    status?: string;
  }

  interface SysNoticeGetInfoParams {
    /** 公告ID */
    noticeId: number;
  }

  interface SysNoticePageQueryBo {
    /** 创建者 */
    createBy?: string;
    /** 排序的方向 */
    isAsc?: string;
    /** 公告标题 */
    noticeTitle?: string;
    /** 公告类型（1通知 2公告） */
    noticeType?: string;
    /** 排序列 */
    orderByColumn?: string;
    /** 当前页数 */
    pageNum?: number;
    /** 分页大小 */
    pageSize?: number;
  }

  interface SysNoticePostRemoveParams {
    /** 公告ID串 */
    noticeIds: number;
  }

  interface SysNoticeVo {
    /** 创建者 */
    createBy: string;
    /** 创建时间 */
    createTime: string;
    /** 公告内容 */
    noticeContent: string;
    /** 公告ID */
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
    /** 更新时间 */
    updateTime?: string;
  }

  interface SysOperLogPageQueryBo {
    /** 开始时间 */
    beginTime?: string;
    /** 业务类型（0其它 1新增 2修改 3删除） */
    businessType?: number;
    /** 业务类型数组 */
    businessTypes?: number[];
    /** 结束时间 */
    endTime?: string;
    /** 排序的方向 */
    isAsc?: string;
    /** 操作人员 */
    operName?: string;
    /** 排序列 */
    orderByColumn?: string;
    /** 当前页数 */
    pageNum?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 操作状态（0正常 1异常） */
    status?: number;
    /** 操作模块 */
    title?: string;
  }

  interface SysOperLogPostRemoveParams {
    /** 操作日志ID组 */
    operIds: number;
  }

  interface SysOperLogQueryBo {
    /** 开始时间 */
    beginTime?: string;
    /** 业务类型（0其它 1新增 2修改 3删除） */
    businessType?: number;
    /** 业务类型数组 */
    businessTypes?: number[];
    /** 结束时间 */
    endTime?: string;
    /** 操作人员 */
    operName?: string;
    /** 操作状态（0正常 1异常） */
    status?: number;
    /** 操作模块 */
    title?: string;
  }

  interface SysOperLogVo {
    /** 业务类型（0其它 1新增 2修改 3删除） */
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
    /** 日志主键 */
    operId: number;
    /** 操作地址 */
    operIp: string;
    /** 操作地点 */
    operLocation?: string;
    /** 操作人员 */
    operName: string;
    /** 请求参数 */
    operParam: string;
    /** 操作时间 */
    operTime: string;
    /** 请求url */
    operUrl: string;
    /** 操作类别（0其它 1后台用户 2手机端用户） */
    operatorType: number;
    /** 请求方式 */
    requestMethod: string;
    /** 操作状态（0正常 1异常） */
    status: number;
    /** 操作模块 */
    title: string;
  }

  interface SysOssConfigAddBo {
    /** accessKey */
    accessKey: string;
    /** 桶名称 */
    bucketName: string;
    /** 配置key */
    configKey: string;
    /** 自定义域名 */
    domain?: string;
    /** 访问站点 */
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
    /** secretKey */
    secretKey: string;
    /** 状态（0=正常,1=停用） */
    status?: string;
  }

  interface SysOssConfigEditBo {
    /** accessKey */
    accessKey?: string;
    /** 桶名称 */
    bucketName?: string;
    /** 配置key */
    configKey?: string;
    /** 自定义域名 */
    domain?: string;
    /** 访问站点 */
    endpoint?: string;
    /** 扩展字段 */
    ext1?: string;
    /** 是否https（Y=是,N=否） */
    isHttps?: string;
    /** 主建 */
    ossConfigId: number;
    /** 前缀 */
    prefix?: string;
    /** 域 */
    region?: string;
    /** 备注 */
    remark?: string;
    /** secretKey */
    secretKey?: string;
    /** 状态（0=正常,1=停用） */
    status?: string;
  }

  interface SysOssConfigGetInfoParams {
    /** OSS配置ID */
    ossConfigId: number;
  }

  interface SysOssConfigPageQueryBo {
    /** 桶名称 */
    bucketName?: string;
    /** 配置key */
    configKey?: string;
    /** 排序的方向 */
    isAsc?: string;
    /** 排序列 */
    orderByColumn?: string;
    /** 当前页数 */
    pageNum?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 状态（0=正常,1=停用） */
    status?: string;
  }

  interface SysOssConfigPostRemoveParams {
    /** OSS配置ID组 */
    ossConfigIds: number;
  }

  interface SysOssConfigVo {
    /** accessKey */
    accessKey: string;
    /** 桶名称 */
    bucketName: string;
    /** 配置key */
    configKey: string;
    /** 创建者 */
    createBy: string;
    /** 创建时间 */
    createTime: string;
    /** 自定义域名 */
    domain?: string;
    /** 访问站点 */
    endpoint?: string;
    /** 扩展字段 */
    ext1?: string;
    /** 是否https（Y=是,N=否） */
    isHttps: string;
    /** 主建 */
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
    /** 更新时间 */
    updateTime?: string;
  }

  interface SysOssGetDownloadParams {
    /** OSS对象ID */
    ossId: number;
  }

  interface SysOssGetListByIdsParams {
    /** OSS对象ID串 */
    ossIds: number;
  }

  interface SysOssPageQueryBo {
    /** 开始创建时间 */
    beginCreateTime?: string;
    /** 创建者 */
    createBy?: string;
    /** 结束创建时间 */
    endCreateTime?: string;
    /** 文件名 */
    fileName?: string;
    /** 文件后缀名 */
    fileSuffix?: string;
    /** 排序的方向 */
    isAsc?: string;
    /** 排序列 */
    orderByColumn?: string;
    /** 原名 */
    originalName?: string;
    /** 当前页数 */
    pageNum?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 服务商 */
    service?: string;
    /** URL地址 */
    url?: string;
  }

  interface SysOssPostRemoveParams {
    /** OSS对象ID组 */
    ossIds: number;
  }

  interface SysOssPostUploadParams {
    /** 文件 */
    file: string;
  }

  interface SysOssVo {
    /** 上传人 */
    createBy?: string;
    /** 创建时间 */
    createTime: string;
    /** 文件名 */
    fileName: string;
    /** 文件后缀名 */
    fileSuffix: string;
    /** 原名 */
    originalName: string;
    /** 对象存储主键 */
    ossId: number;
    /** 服务商 */
    service: string;
    /** 更新者 */
    updateBy?: string;
    /** 更新时间 */
    updateTime?: string;
    /** URL地址 */
    url: string;
  }

  interface SysPostAddBo {
    /** 岗位编码 */
    postCode: string;
    /** 岗位名称 */
    postName: string;
    /** 岗位排序 */
    postSort: number;
    /** 备注 */
    remark?: string;
    /** 状态（0正常 1停用） */
    status: string;
  }

  interface SysPostEditBo {
    /** 岗位编码 */
    postCode: string;
    /** 岗位序号 */
    postId: number;
    /** 岗位名称 */
    postName: string;
    /** 岗位排序 */
    postSort: number;
    /** 备注 */
    remark?: string;
    /** 状态（0正常 1停用） */
    status: string;
  }

  interface SysPostGetInfoParams {
    /** 岗位ID */
    postId: number;
  }

  interface SysPostPageQueryBo {
    /** 排序的方向 */
    isAsc?: string;
    /** 排序列 */
    orderByColumn?: string;
    /** 当前页数 */
    pageNum?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 岗位编码 */
    postCode?: string;
    /** 岗位名称 */
    postName?: string;
    /** 状态（0正常 1停用） */
    status?: string;
  }

  interface SysPostPostRemoveParams {
    /** 岗位ID串 */
    postIds: number;
  }

  interface SysPostQueryBo {
    /** 岗位编码 */
    postCode?: string;
    /** 岗位名称 */
    postName?: string;
    /** 状态（0正常 1停用） */
    status?: string;
  }

  interface SysPostVo {
    /** 创建者 */
    createBy: string;
    /** 创建时间 */
    createTime: string;
    /** 用户是否存在此岗位标识 默认不存在 */
    flag: boolean;
    /** 岗位编码 */
    postCode: string;
    /** 岗位序号 */
    postId: number;
    /** 岗位名称 */
    postName: string;
    /** 岗位排序 */
    postSort: number;
    /** 备注 */
    remark?: string;
    /** 状态（0正常 1停用） */
    status: string;
    /** 更新者 */
    updateBy?: string;
    /** 更新时间 */
    updateTime?: string;
  }

  interface SysProfilePostAvatarParams {
    /** 用户头像 */
    avatarfile: string;
  }

  interface SysRole {
    /** 创建者 */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
    /** 数据范围（1：所有数据权限；2：自定义数据权限；3：本部门数据权限；4：本部门及以下数据权限；5：仅本人数据权限） */
    dataScope?: string;
    /** 删除标志（0代表存在 2代表删除） */
    delFlag?: string;
    /** 部门树选择项是否关联显示（0：父子不互相关联显示 1：父子互相关联显示 ） */
    deptCheckStrictly?: boolean;
    /** 部门组（数据权限） */
    deptIds?: number[];
    /** 用户是否存在此角色标识 默认不存在 */
    flag?: boolean;
    /** 菜单树选择项是否关联显示（ 0：父子不互相关联显示 1：父子互相关联显示） */
    menuCheckStrictly?: boolean;
    /** 菜单组 */
    menuIds: number[];
    /** 备注 */
    remark?: string;
    /** 角色ID */
    roleId?: number;
    /** 角色权限 */
    roleKey: string;
    /** 角色名称 */
    roleName: string;
    /** 角色排序 */
    roleSort: number;
    /** 角色状态（0正常 1停用） */
    status: string;
    /** 更新者 */
    updateBy?: string;
    /** 更新时间 */
    updateTime?: string;
  }

  interface SysRoleGetInfoParams {
    /** 角色ID */
    roleId: number;
  }

  interface SysRolePostRemoveParams {
    /** 角色ID串 */
    roleIds: number;
  }

  interface SysRoleQueryBo {
    /** 开始创建时间 */
    beginCreateTime?: string;
    /** 结束创建时间 */
    endCreateTime?: string;
    /** 排序的方向 */
    isAsc?: string;
    /** 排序列 */
    orderByColumn?: string;
    /** 当前页数 */
    pageNum?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 角色ID */
    roleId?: number;
    /** 角色权限 */
    roleKey?: string;
    /** 角色名称 */
    roleName?: string;
    /** 角色状态（0正常 1停用） */
    status?: string;
  }

  interface SysRoleReq {
    /** 创建者 */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
    /** 数据范围（1：所有数据权限；2：自定义数据权限；3：本部门数据权限；4：本部门及以下数据权限；5：仅本人数据权限） */
    dataScope?: string;
    /** 删除标志（0代表存在 2代表删除） */
    delFlag?: string;
    /** 部门树选择项是否关联显示（0：父子不互相关联显示 1：父子互相关联显示 ） */
    deptCheckStrictly?: boolean;
    /** 部门组（数据权限） */
    deptIds?: number[];
    /** 用户是否存在此角色标识 默认不存在 */
    flag?: boolean;
    /** 菜单树选择项是否关联显示（ 0：父子不互相关联显示 1：父子互相关联显示） */
    menuCheckStrictly?: boolean;
    /** 菜单组 */
    menuIds: number[];
    /** 备注 */
    remark?: string;
    /** 角色ID */
    roleId?: number;
    /** 角色权限 */
    roleKey: string;
    /** 角色名称 */
    roleName: string;
    /** 角色排序 */
    roleSort: number;
    /** 角色状态（0正常 1停用） */
    status: string;
    /** 更新者 */
    updateBy?: string;
    /** 更新时间 */
    updateTime?: string;
  }

  interface SysRoleRes {
    /** 是否管理员 */
    admin?: boolean;
    /** 创建者 */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
    /** 数据范围（1：所有数据权限；2：自定义数据权限；3：本部门数据权限；4：本部门及以下数据权限；5：仅本人数据权限） */
    dataScope?: string;
    /** 删除标志（0代表存在 2代表删除） */
    delFlag?: string;
    /** 部门树选择项是否关联显示（0：父子不互相关联显示 1：父子互相关联显示 ） */
    deptCheckStrictly?: boolean;
    /** 部门组（数据权限） */
    deptIds?: number[];
    /** 用户是否存在此角色标识 默认不存在 */
    flag?: boolean;
    /** 菜单树选择项是否关联显示（ 0：父子不互相关联显示 1：父子互相关联显示） */
    menuCheckStrictly?: boolean;
    /** 菜单组 */
    menuIds: number[];
    /** 备注 */
    remark?: string;
    /** 角色ID */
    roleId?: number;
    /** 角色权限 */
    roleKey: string;
    /** 角色名称 */
    roleName: string;
    /** 角色排序 */
    roleSort: number;
    /** 角色状态（0正常 1停用） */
    status: string;
    /** 更新者 */
    updateBy?: string;
    /** 更新时间 */
    updateTime?: string;
  }

  interface SysRoleVo {
    /** 是否管理员 */
    admin: boolean;
    /** 创建者 */
    createBy: string;
    /** 创建时间 */
    createTime: string;
    /** 数据范围（1：所有数据权限；2：自定义数据权限；3：本部门数据权限；4：本部门及以下数据权限；5：仅本人数据权限） */
    dataScope: string;
    /** 删除标志（0代表存在 2代表删除） */
    delFlag: string;
    /** 部门树选择项是否关联显示（0：父子不互相关联显示 1：父子互相关联显示 ） */
    deptCheckStrictly: boolean;
    /** 部门组（数据权限） */
    deptIds: number[];
    /** 用户是否存在此角色标识 默认不存在 */
    flag: boolean;
    /** 菜单树选择项是否关联显示（ 0：父子不互相关联显示 1：父子互相关联显示） */
    menuCheckStrictly: boolean;
    /** 菜单组 */
    menuIds: number[];
    /** 备注 */
    remark?: string;
    /** 角色ID */
    roleId: number;
    /** 角色权限 */
    roleKey: string;
    /** 角色名称 */
    roleName: string;
    /** 角色排序 */
    roleSort: number;
    /** 角色状态（0正常 1停用） */
    status: string;
    /** 更新者 */
    updateBy?: string;
    /** 更新时间 */
    updateTime?: string;
  }

  interface SysUserAddBo {
    /** 用户头像 */
    avatar?: string;
    /** 部门ID */
    deptId?: number;
    /** 用户邮箱 */
    email?: string;
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
    /** 角色组 */
    roleIds: number[];
    /** 用户性别 */
    sex?: string;
    /** 帐号状态（0正常 1停用） */
    status?: string;
    /** 用户账号 */
    userName: string;
    /** 用户类型 */
    userType?: string;
  }

  interface SysUserEditBo {
    /** 用户头像 */
    avatar?: string;
    /** 部门ID */
    deptId?: number;
    /** 用户邮箱 */
    email?: string;
    /** 用户昵称 */
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
    /** 用户ID */
    userId: number;
    /** 用户账号 */
    userName?: string;
    /** 用户类型 */
    userType?: string;
  }

  interface SysUserGetAuthRoleParams {
    /** 用户ID */
    userId: number;
  }

  interface SysUserGetInfoParams {
    /** 用户ID */
    userId: number;
  }

  interface SysUserOnlineGetListParams {
    /** ip地址 */
    ipaddr?: string;
    /** 用户名 */
    userName?: string;
  }

  interface SysUserOnlinePostForceLogoutParams {
    /** tokenId */
    tokenId: string;
  }

  interface SysUserOnlineVo {
    /** 浏览器类型 */
    browser: string;
    /** 部门名称 */
    deptName?: string;
    /** 登录IP地址 */
    ipaddr: string;
    /** 登录地址 */
    loginLocation?: string;
    /** 登录时间 */
    loginTime: number;
    /** 操作系统 */
    os: string;
    /** 会话编号 */
    tokenId: string;
    /** 用户名称 */
    userName: string;
  }

  interface SysUserPageQueryBo {
    /** 开始创建时间 */
    beginCreateTime?: string;
    /** 部门ID */
    deptId?: number;
    /** 结束创建时间 */
    endCreateTime?: string;
    /** 排序的方向 */
    isAsc?: string;
    /** 排序列 */
    orderByColumn?: string;
    /** 当前页数 */
    pageNum?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 手机号码 */
    phoneNumber?: string;
    /** 角色ID */
    roleId?: number;
    /** 帐号状态（0正常 1停用） */
    status?: string;
    /** 用户ID */
    userId?: number;
    /** 用户账号 */
    userName?: string;
  }

  interface SysUserPostImportDataParams {
    /** 导入文件 */
    file: string;
    /** updateSupport */
    updateSupport?: boolean;
  }

  interface SysUserPostRemoveParams {
    /** 角色ID串 */
    userIds: number;
  }

  interface SysUserQueryBo {
    /** 开始创建时间 */
    beginCreateTime?: string;
    /** 部门ID */
    deptId?: number;
    /** 结束创建时间 */
    endCreateTime?: string;
    /** 手机号码 */
    phoneNumber?: string;
    /** 角色ID */
    roleId?: number;
    /** 帐号状态（0正常 1停用） */
    status?: string;
    /** 用户ID */
    userId?: number;
    /** 用户账号 */
    userName?: string;
  }

  interface SysUserReq {
    /** 用户头像 */
    avatar?: string;
    /** 创建者 */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
    /** 删除标志（0代表存在 2代表删除） */
    delFlag?: string;
    /** 部门对象 */
    dept?: SysDeptReq;
    /** 部门ID */
    deptId?: number;
    /** 用户邮箱 */
    email?: string;
    /** 最后登录时间 */
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
    /** 角色ID */
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
    /** 更新时间 */
    updateTime?: string;
    /** 用户ID */
    userId?: number;
    /** 用户账号 */
    userName: string;
    /** 用户类型 */
    userType?: string;
  }

  interface SysUserRes {
    /** 是否管理员 */
    admin?: boolean;
    /** 用户头像 */
    avatar?: string;
    /** 创建者 */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
    /** 删除标志（0代表存在 2代表删除） */
    delFlag?: string;
    /** 部门对象 */
    dept?: SysDeptRes;
    /** 部门ID */
    deptId?: number;
    /** 用户邮箱 */
    email?: string;
    /** 最后登录时间 */
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
    /** 角色ID */
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
    /** 更新时间 */
    updateTime?: string;
    /** 用户ID */
    userId?: number;
    /** 用户账号 */
    userName: string;
    /** 用户类型 */
    userType?: string;
  }

  interface SysUserRole {
    /** 角色ID */
    roleId?: number;
    /** 用户ID */
    userId?: number;
  }

  interface SysUserVo {
    /** 是否管理员 */
    admin: boolean;
    /** 用户头像 */
    avatar?: string;
    /** 创建者 */
    createBy: string;
    /** 创建时间 */
    createTime: string;
    /** 删除标志（0代表存在 2代表删除） */
    delFlag: string;
    /** 部门对象 */
    dept: SysDeptVo;
    /** 部门ID */
    deptId: number;
    /** 用户邮箱 */
    email?: string;
    /** 最后登录时间 */
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
    /** 角色ID */
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
    /** 更新时间 */
    updateTime?: string;
    /** 用户ID */
    userId: number;
    /** 用户账号 */
    userName: string;
    /** 用户类型 */
    userType: string;
  }

  interface TableDataInfoSysConfigVo {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: TableDataSysConfigVo;
    /** 消息内容 */
    msg: string;
  }

  interface TableDataInfoSysDictDataVo {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: TableDataSysDictDataVo;
    /** 消息内容 */
    msg: string;
  }

  interface TableDataInfoSysDictTypeVo {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: TableDataSysDictTypeVo;
    /** 消息内容 */
    msg: string;
  }

  interface TableDataInfoSysLogininforVo {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: TableDataSysLogininforVo;
    /** 消息内容 */
    msg: string;
  }

  interface TableDataInfoSysNoticeVo {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: TableDataSysNoticeVo;
    /** 消息内容 */
    msg: string;
  }

  interface TableDataInfoSysOperLogVo {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: TableDataSysOperLogVo;
    /** 消息内容 */
    msg: string;
  }

  interface TableDataInfoSysOssConfigVo {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: TableDataSysOssConfigVo;
    /** 消息内容 */
    msg: string;
  }

  interface TableDataInfoSysOssVo {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: TableDataSysOssVo;
    /** 消息内容 */
    msg: string;
  }

  interface TableDataInfoSysPostVo {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: TableDataSysPostVo;
    /** 消息内容 */
    msg: string;
  }

  interface TableDataInfoSysRoleVo {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: TableDataSysRoleVo;
    /** 消息内容 */
    msg: string;
  }

  interface TableDataInfoSysUserOnlineVo {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: TableDataSysUserOnlineVo;
    /** 消息内容 */
    msg: string;
  }

  interface TableDataInfoSysUserVo {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: TableDataSysUserVo;
    /** 消息内容 */
    msg: string;
  }

  interface TableDataSysConfigVo {
    /** 列表数据 */
    data: SysConfigVo[];
    /** 总记录数 */
    total: number;
  }

  interface TableDataSysDictDataVo {
    /** 列表数据 */
    data: SysDictDataVo[];
    /** 总记录数 */
    total: number;
  }

  interface TableDataSysDictTypeVo {
    /** 列表数据 */
    data: SysDictTypeVo[];
    /** 总记录数 */
    total: number;
  }

  interface TableDataSysLogininforVo {
    /** 列表数据 */
    data: SysLogininforVo[];
    /** 总记录数 */
    total: number;
  }

  interface TableDataSysNoticeVo {
    /** 列表数据 */
    data: SysNoticeVo[];
    /** 总记录数 */
    total: number;
  }

  interface TableDataSysOperLogVo {
    /** 列表数据 */
    data: SysOperLogVo[];
    /** 总记录数 */
    total: number;
  }

  interface TableDataSysOssConfigVo {
    /** 列表数据 */
    data: SysOssConfigVo[];
    /** 总记录数 */
    total: number;
  }

  interface TableDataSysOssVo {
    /** 列表数据 */
    data: SysOssVo[];
    /** 总记录数 */
    total: number;
  }

  interface TableDataSysPostVo {
    /** 列表数据 */
    data: SysPostVo[];
    /** 总记录数 */
    total: number;
  }

  interface TableDataSysRoleVo {
    /** 列表数据 */
    data: SysRoleVo[];
    /** 总记录数 */
    total: number;
  }

  interface TableDataSysUserOnlineVo {
    /** 列表数据 */
    data: SysUserOnlineVo[];
    /** 总记录数 */
    total: number;
  }

  interface TableDataSysUserVo {
    /** 列表数据 */
    data: SysUserVo[];
    /** 总记录数 */
    total: number;
  }

  interface TreeNodeConfig {
    childrenKey?: string;
    deep?: number;
    idKey?: string;
    nameKey?: string;
    parentIdKey?: string;
    weightKey?: string;
  }

  interface UpdatePwdBo {
    /** 新密码 */
    newPassword: string;
    /** 原密码 */
    oldPassword: string;
  }

  interface UserAuthRoleVo {
    /** 授权角色列表 */
    roles?: SysRoleRes[];
    /** 用户信息业务对象 */
    user?: SysUserRes;
  }

  interface UserDetailVo {
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

  interface UserInfoVo {
    /** 权限集合 */
    permissions: string[];
    /** 角色集合 */
    roles: string[];
    /** 用户信息业务对象 */
    user: SysUserVo;
  }

  interface UserNameLoginBo {
    /** 验证码 */
    code: string;
    /** 用户密码 */
    password: string;
    /** 用户名 */
    username: string;
    /** 唯一标识 */
    uuid: string;
  }

  interface UserNameRegisterBo {
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
}
