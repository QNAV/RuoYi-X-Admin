declare namespace API {
  type AuthRoleAllBody = {
    /** 角色ID串 */
    roleIds: number[];
    /** 用户Id */
    userId: number;
  };

  type AuthUserAllBody = {
    /** 角色ID */
    roleId: number;
    /** 用户ID串 */
    userIds: number[];
  };

  type AvatarUploadDTO = {
    /** 头像地址 */
    imgUrl?: string;
  };

  type CacheInfoDTO = {
    /** redis命令统计 */
    commandStats?: Record<string, any>[];
    /** 数据库大小 */
    dbSize?: string;
    /** 缓存服务器原始配置信息 */
    info?: Record<string, any>;
  };

  type CaptchaGetSmsCaptchaParams = {
    /** 用户手机号 */
    phoneNumber: string;
  };

  type CaptchaImageDto = {
    /** 验证码开关 */
    captchaOnOff?: boolean;
    /** 图片base64 */
    img?: string;
    /** 验证码唯一标识符 */
    uuid?: string;
  };

  type CharSequence = true;

  type Comparableobject = true;

  type LoginDTO = {
    /** 身份令牌 */
    token?: string;
  };

  type MetaVo = {
    /** 设置该路由的图标，对应路径src/assets/icons/svg */
    icon?: string;
    /** 内链地址（http(s)://开头） */
    link?: string;
    /** 设置为true，则不会被 <keep-alive>缓存 */
    noCache?: boolean;
    /** 设置该路由在侧边栏和面包屑中展示的名字 */
    title?: string;
  };

  type OssUploadDTO = {
    /** 原名 */
    fileName?: string;
    /** 对象存储主键 */
    ossId?: string;
    /** URL地址 */
    url?: string;
  };

  type ProfileDTO = {
    /** 用户所属岗位组 */
    postGroup?: string;
    /** 用户所属角色组 */
    roleGroup?: string;
    /** 用户对象信息 */
    user?: SysUserRes;
  };

  type RegisterBodyUserName = {
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
  };

  type ResponseAvatarUploadDTO = {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: AvatarUploadDTO;
    /** 消息内容 */
    msg: string;
  };

  type ResponseCacheInfoDTO = {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: CacheInfoDTO;
    /** 消息内容 */
    msg: string;
  };

  type ResponseCaptchaImageDto = {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: CaptchaImageDto;
    /** 消息内容 */
    msg: string;
  };

  type ResponseListRouterVo = {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: RouterVo[];
    /** 消息内容 */
    msg: string;
  };

  type ResponseListSysDept = {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: SysDept[];
    /** 消息内容 */
    msg: string;
  };

  type ResponseListSysDictData = {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: SysDictDataRes[];
    /** 消息内容 */
    msg: string;
  };

  type ResponseListSysDictType = {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: SysDictType[];
    /** 消息内容 */
    msg: string;
  };

  type ResponseListSysMenu = {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: SysMenu[];
    /** 消息内容 */
    msg: string;
  };

  type ResponseListSysOssVo = {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: SysOssVo[];
    /** 消息内容 */
    msg: string;
  };

  type ResponseListSysPost = {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: SysPost[];
    /** 消息内容 */
    msg: string;
  };

  type ResponseListSysRole = {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: SysRoleRes[];
    /** 消息内容 */
    msg: string;
  };

  type ResponseListTreelong = {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: Record<string, any>[];
    /** 消息内容 */
    msg: string;
  };

  type ResponseLoginDTO = {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: LoginDTO;
    /** 消息内容 */
    msg: string;
  };

  type ResponseOssUploadDTO = {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: OssUploadDTO;
    /** 消息内容 */
    msg: string;
  };

  type ResponseProfileDTO = {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: ProfileDTO;
    /** 消息内容 */
    msg: string;
  };

  type ResponseRoleDeptTreeSelectDTO = {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: RoleDeptTreeSelectDTO;
    /** 消息内容 */
    msg: string;
  };

  type ResponseRoleMenuTreeSelectDTO = {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: RoleMenuTreeSelectDTO;
    /** 消息内容 */
    msg: string;
  };

  type ResponseSysConfig = {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: SysConfig;
    /** 消息内容 */
    msg: string;
  };

  type ResponseSysDept = {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: SysDept;
    /** 消息内容 */
    msg: string;
  };

  type ResponseSysDictData = {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: SysDictDataRes;
    /** 消息内容 */
    msg: string;
  };

  type ResponseSysDictType = {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: SysDictType;
    /** 消息内容 */
    msg: string;
  };

  type ResponseSysMenu = {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: SysMenu;
    /** 消息内容 */
    msg: string;
  };

  type ResponseSysNotice = {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: SysNotice;
    /** 消息内容 */
    msg: string;
  };

  type ResponseSysOssConfigVo = {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: SysOssConfigVo;
    /** 消息内容 */
    msg: string;
  };

  type ResponseSysPost = {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: SysPost;
    /** 消息内容 */
    msg: string;
  };

  type ResponseSysRole = {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: SysRoleRes;
    /** 消息内容 */
    msg: string;
  };

  type ResponseUserAuthRoleDTO = {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: UserAuthRoleDTO;
    /** 消息内容 */
    msg: string;
  };

  type ResponseUserDetailDTO = {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: UserDetailDTO;
    /** 消息内容 */
    msg: string;
  };

  type ResponseUserInfoDTO = {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: UserInfoDTO;
    /** 消息内容 */
    msg: string;
  };

  type ResponseVoid = {
    /** 消息状态码 */
    code: number;
    /** 消息内容 */
    msg: string;
  };

  type RoleDeptTreeSelectDTO = {
    /** 选中部门ID列表 */
    checkedKeys?: number[];
    /** 下拉树结构列表 */
    depts?: Record<string, any>[];
  };

  type RoleMenuTreeSelectDTO = {
    /** 菜单树信息keys */
    checkedKeys?: number[];
    /** 前端所需要下拉树结构 */
    menus?: Record<string, any>[];
  };

  type RouterVo = {
    /** 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面 */
    alwaysShow?: boolean;
    /** 子路由 */
    children?: RouterVo[];
    /** 组件地址 */
    component?: string;
    /** 是否隐藏路由，当设置 true 的时候该路由不会再侧边栏出现 */
    hidden?: boolean;
    /** 其他元素 */
    meta?: MetaVo;
    /** 路由名字 */
    name?: string;
    /** 路由地址 */
    path?: string;
    /** 路由参数：如 {"id": 1, "name": "ry"} */
    query?: string;
    /** 重定向地址，当设置 noRedirect 的时候该路由在面包屑导航中不可被点击 */
    redirect?: string;
  };

  type SmsLoginBody = {
    /** 用户手机号 */
    phoneNumber?: string;
    /** 短信验证码 */
    smsCode?: string;
  };

  type SysConfig = {
    /** 参数主键 */
    configId?: number;
    /** 参数键名 */
    configKey: string;
    /** 参数名称 */
    configName: string;
    /** 系统内置（Y是 N否） */
    configType?: string;
    /** 参数键值 */
    configValue: string;
    /** 创建者 */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
    /** 备注 */
    remark?: string;
    /** 更新者 */
    updateBy?: string;
    /** 更新时间 */
    updateTime?: string;
  };

  type SysConfigGetConfigKeyParams = {
    /** 参数Key */
    configKey: string;
  };

  type SysConfigGetInfoParams = {
    /** 参数ID */
    configId: number;
  };

  type SysConfigPostListParams = {
    /** 当前页数 */
    pageNum?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序列 */
    orderByColumn?: string;
    /** 排序的方向 */
    isAsc?: string;
  };

  type SysConfigPostRemoveParams = {
    /** 参数ID串 */
    configIds: number;
  };

  type SysConfigQuery = {
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
  };

  type SysDept = {
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
  };

  type SysDeptGetExcludeChildParams = {
    /** 部门ID */
    deptId: number;
  };

  type SysDeptGetInfoParams = {
    /** 部门ID */
    deptId: number;
  };

  type SysDeptGetRoleDeptTreeSelectParams = {
    /** 角色ID */
    roleId: number;
  };

  type SysDeptPostRemoveParams = {
    /** 部门ID串 */
    deptId: number;
  };

  type SysDeptQuery = {
    /** 部门id */
    deptId?: number;
    /** 部门名称 */
    deptName?: string;
    /** 父菜单ID */
    parentId?: number;
    /** 部门状态:0正常,1停用 */
    status?: string;
  };

  type SysDictDataGetInfoParams = {
    /** 字典code */
    dictCode: number;
  };

  type SysDictDataGetTypeParams = {
    /** 字典类型 */
    dictType: string;
  };

  type SysDictDataPostListParams = {
    /** 当前页数 */
    pageNum?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序列 */
    orderByColumn?: string;
    /** 排序的方向 */
    isAsc?: string;
  };

  type SysDictDataPostRemoveParams = {
    /** 字典code串 */
    dictCodes: number;
  };

  type SysDictDataQuery = {
    /** 字典标签 */
    dictLabel?: string;
    /** 字典类型 */
    dictType?: string;
    /** 状态（0正常 1停用） */
    status?: string;
  };

  type SysDictDataReq = {
    /** 创建者 */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
    /** 样式属性（其他样式扩展） */
    cssClass?: string;
    /** 字典编码 */
    dictCode?: number;
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
    /** 更新者 */
    updateBy?: string;
    /** 更新时间 */
    updateTime?: string;
  };

  type SysDictDataRes = {
    /** 创建者 */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
    /** 样式属性（其他样式扩展） */
    cssClass?: string;
    default?: boolean;
    /** 字典编码 */
    dictCode?: number;
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
    /** 更新者 */
    updateBy?: string;
    /** 更新时间 */
    updateTime?: string;
  };

  type SysDictType = {
    /** 创建者 */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
    /** 字典主键 */
    dictId?: number;
    /** 字典名称 */
    dictName: string;
    /** 字典类型 */
    dictType: string;
    /** 备注 */
    remark?: string;
    /** 状态（0正常 1停用） */
    status?: string;
    /** 更新者 */
    updateBy?: string;
    /** 更新时间 */
    updateTime?: string;
  };

  type SysDictTypeGetInfoParams = {
    /** 字典ID */
    dictId: number;
  };

  type SysDictTypePostListParams = {
    /** 当前页数 */
    pageNum?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序列 */
    orderByColumn?: string;
    /** 排序的方向 */
    isAsc?: string;
  };

  type SysDictTypePostRemoveParams = {
    /** 字典ID串 */
    dictIds: number;
  };

  type SysDictTypeQuery = {
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
  };

  type SysLoginGetXcxLoginParams = {
    /** 小程序code */
    xcxCode: string;
  };

  type SysLogininfor = {
    /** 浏览器类型 */
    browser?: string;
    /** 访问ID */
    infoId?: number;
    /** 登录IP地址 */
    ipaddr?: string;
    /** 登录地点 */
    loginLocation?: string;
    /** 访问时间 */
    loginTime?: string;
    /** 提示消息 */
    msg?: string;
    /** 操作系统 */
    os?: string;
    /** 登录状态 0成功 1失败 */
    status?: string;
    /** 用户账号 */
    userName?: string;
  };

  type SysLogininforPostListParams = {
    /** 当前页数 */
    pageNum?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序列 */
    orderByColumn?: string;
    /** 排序的方向 */
    isAsc?: string;
  };

  type SysLogininforPostRemoveParams = {
    /** 登录日志ID组 */
    infoIds: number;
  };

  type SysLogininforQuery = {
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
  };

  type SysMenu = {
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
  };

  type SysMenuGetInfoParams = {
    /** 菜单ID */
    menuId: number;
  };

  type SysMenuGetRoleMenuTreeSelectParams = {
    /** 角色ID */
    roleId: number;
  };

  type SysMenuPostRemoveParams = {
    /** 菜单ID */
    menuId: number;
  };

  type SysMenuQuery = {
    /** 菜单名称 */
    menuName?: string;
    /** 菜单状态（0显示 1隐藏） */
    status?: string;
    /** 显示状态（0显示 1隐藏） */
    visible?: string;
  };

  type SysNotice = {
    /** 创建者 */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
    /** 公告内容 */
    noticeContent: string;
    /** 公告ID */
    noticeId?: number;
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
  };

  type SysNoticeGetInfoParams = {
    /** 公告ID */
    noticeId: number;
  };

  type SysNoticePostListParams = {
    /** 当前页数 */
    pageNum?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序列 */
    orderByColumn?: string;
    /** 排序的方向 */
    isAsc?: string;
  };

  type SysNoticePostRemoveParams = {
    /** 公告ID串 */
    noticeIds: number;
  };

  type SysNoticeQuery = {
    /** 创建者 */
    createBy?: string;
    /** 公告标题 */
    noticeTitle?: string;
    /** 公告类型（1通知 2公告） */
    noticeType?: string;
  };

  type SysOperLog = {
    /** 业务类型（0其它 1新增 2修改 3删除） */
    businessType?: number;
    /** 业务类型数组 */
    businessTypes?: number[];
    /** 部门名称 */
    deptName?: string;
    /** 错误消息 */
    errorMsg?: string;
    /** 返回参数 */
    jsonResult?: string;
    /** 请求方法 */
    method?: string;
    /** 日志主键 */
    operId?: number;
    /** 操作地址 */
    operIp?: string;
    /** 操作地点 */
    operLocation?: string;
    /** 操作人员 */
    operName?: string;
    /** 请求参数 */
    operParam?: string;
    /** 操作时间 */
    operTime?: string;
    /** 请求url */
    operUrl?: string;
    /** 操作类别（0其它 1后台用户 2手机端用户） */
    operatorType?: number;
    /** 请求方式 */
    requestMethod?: string;
    /** 操作状态（0正常 1异常） */
    status?: number;
    /** 操作模块 */
    title?: string;
  };

  type SysOperLogPostListParams = {
    /** 当前页数 */
    pageNum?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序列 */
    orderByColumn?: string;
    /** 排序的方向 */
    isAsc?: string;
  };

  type SysOperLogPostRemoveParams = {
    /** 操作日志ID组 */
    operIds: number;
  };

  type SysOperLogQuery = {
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
  };

  type SysOssConfigBo = {
    /** accessKey */
    accessKey: string;
    /** 桶名称 */
    bucketName: string;
    /** 配置key */
    configKey: string;
    /** 创建者 */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
    /** 自定义域名 */
    domain?: string;
    /** 访问站点 */
    endpoint: string;
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
    secretKey: string;
    /** 状态（0=正常,1=停用） */
    status?: string;
    /** 更新者 */
    updateBy?: string;
    /** 更新时间 */
    updateTime?: string;
  };

  type SysOssConfigGetInfoParams = {
    /** OSS配置ID */
    ossConfigId: number;
  };

  type SysOssConfigPostListParams = {
    /** 当前页数 */
    pageNum?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序列 */
    orderByColumn?: string;
    /** 排序的方向 */
    isAsc?: string;
  };

  type SysOssConfigPostRemoveParams = {
    /** OSS配置ID组 */
    ossConfigIds: number;
  };

  type SysOssConfigQuery = {
    /** 桶名称 */
    bucketName?: string;
    /** 配置key */
    configKey?: string;
    /** 状态（0=正常,1=停用） */
    status?: string;
  };

  type SysOssConfigVo = {
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
    ossConfigId?: number;
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
  };

  type SysOssGetDownloadParams = {
    /** OSS对象ID */
    ossId: number;
  };

  type SysOssGetListByIdsParams = {
    /** OSS对象ID串 */
    ossIds: number;
  };

  type SysOssPostListParams = {
    /** 当前页数 */
    pageNum?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序列 */
    orderByColumn?: string;
    /** 排序的方向 */
    isAsc?: string;
  };

  type SysOssPostRemoveParams = {
    /** OSS对象ID组 */
    ossIds: number;
  };

  type SysOssPostUploadParams = {
    /** 文件 */
    file: string;
  };

  type SysOssQuery = {
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
    /** 原名 */
    originalName?: string;
    /** 服务商 */
    service?: string;
    /** URL地址 */
    url?: string;
  };

  type SysOssVo = {
    /** 上传人 */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
    /** 文件名 */
    fileName?: string;
    /** 文件后缀名 */
    fileSuffix?: string;
    /** 原名 */
    originalName?: string;
    /** 对象存储主键 */
    ossId?: number;
    /** 服务商 */
    service?: string;
    /** URL地址 */
    url?: string;
  };

  type SysPost = {
    /** 创建者 */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
    /** 用户是否存在此岗位标识 默认不存在 */
    flag?: boolean;
    /** 岗位编码 */
    postCode: string;
    /** 岗位序号 */
    postId?: number;
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
  };

  type SysPostGetInfoParams = {
    /** 岗位ID */
    postId: number;
  };

  type SysPostPostListParams = {
    /** 当前页数 */
    pageNum?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序列 */
    orderByColumn?: string;
    /** 排序的方向 */
    isAsc?: string;
  };

  type SysPostPostRemoveParams = {
    /** 岗位ID串 */
    postIds: number;
  };

  type SysPostQuery = {
    /** 岗位编码 */
    postCode?: string;
    /** 岗位名称 */
    postName?: string;
    /** 状态（0正常 1停用） */
    status?: string;
  };

  type SysProfilePostAvatarParams = {
    /** 用户头像 */
    avatarfile: string;
  };

  type SysRole = {
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
  };

  type SysRoleGetInfoParams = {
    /** 角色ID */
    roleId: number;
  };

  type SysRolePostAllocatedListParams = {
    /** 当前页数 */
    pageNum?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序列 */
    orderByColumn?: string;
    /** 排序的方向 */
    isAsc?: string;
  };

  type SysRolePostListParams = {
    /** 当前页数 */
    pageNum?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序列 */
    orderByColumn?: string;
    /** 排序的方向 */
    isAsc?: string;
  };

  type SysRolePostRemoveParams = {
    /** 角色ID串 */
    roleIds: number;
  };

  type SysRolePostUnallocatedListParams = {
    /** 当前页数 */
    pageNum?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序列 */
    orderByColumn?: string;
    /** 排序的方向 */
    isAsc?: string;
  };

  type SysRoleQuery = {
    /** 开始创建时间 */
    beginCreateTime?: string;
    /** 结束创建时间 */
    endCreateTime?: string;
    /** 角色ID */
    roleId?: number;
    /** 角色权限 */
    roleKey?: string;
    /** 角色名称 */
    roleName?: string;
    /** 角色状态（0正常 1停用） */
    status?: string;
  };

  type SysRoleReq = {
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
  };

  type SysRoleRes = {
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
  };

  type SysUser = {
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
    dept?: SysDept;
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
  };

  type SysUserGetAuthRoleParams = {
    /** 用户ID */
    userId: number;
  };

  type SysUserGetInfoParams = {
    /** 用户ID */
    userId: number;
  };

  type SysUserOnline = {
    /** 浏览器类型 */
    browser?: string;
    /** 部门名称 */
    deptName?: string;
    /** 登录IP地址 */
    ipaddr?: string;
    /** 登录地址 */
    loginLocation?: string;
    /** 登录时间 */
    loginTime?: number;
    /** 操作系统 */
    os?: string;
    /** 会话编号 */
    tokenId?: string;
    /** 用户名称 */
    userName?: string;
  };

  type SysUserOnlineGetListParams = {
    /** ip地址 */
    ipaddr?: string;
    /** 用户名 */
    userName?: string;
  };

  type SysUserOnlinePostForceLogoutParams = {
    /** tokenId */
    tokenId: string;
  };

  type SysUserPostImportDataParams = {
    /** 导入文件 */
    file: string;
    /** updateSupport */
    updateSupport?: boolean;
  };

  type SysUserPostListParams = {
    /** 当前页数 */
    pageNum?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序列 */
    orderByColumn?: string;
    /** 排序的方向 */
    isAsc?: string;
  };

  type SysUserPostRemoveParams = {
    /** 角色ID串 */
    userIds: number;
  };

  type SysUserQuery = {
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
  };

  type SysUserReq = {
    /** 用户头像 */
    avatar?: string;
    /** 创建者 */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
    /** 删除标志（0代表存在 2代表删除） */
    delFlag?: string;
    /** 部门对象 */
    dept?: SysDept;
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
  };

  type SysUserRes = {
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
    dept?: SysDept;
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
  };

  type SysUserRole = {
    /** 角色ID */
    roleId?: number;
    /** 用户ID */
    userId?: number;
  };

  type TableDataInfoSysConfig = {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: TableDataSysConfig;
    /** 消息内容 */
    msg: string;
  };

  type TableDataInfoSysDictData = {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: TableDataSysDictData;
    /** 消息内容 */
    msg: string;
  };

  type TableDataInfoSysDictType = {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: TableDataSysDictType;
    /** 消息内容 */
    msg: string;
  };

  type TableDataInfoSysLogininfor = {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: TableDataSysLogininfor;
    /** 消息内容 */
    msg: string;
  };

  type TableDataInfoSysNotice = {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: TableDataSysNotice;
    /** 消息内容 */
    msg: string;
  };

  type TableDataInfoSysOperLog = {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: TableDataSysOperLog;
    /** 消息内容 */
    msg: string;
  };

  type TableDataInfoSysOssConfigVo = {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: TableDataSysOssConfigVo;
    /** 消息内容 */
    msg: string;
  };

  type TableDataInfoSysOssVo = {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: TableDataSysOssVo;
    /** 消息内容 */
    msg: string;
  };

  type TableDataInfoSysPost = {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: TableDataSysPost;
    /** 消息内容 */
    msg: string;
  };

  type TableDataInfoSysRole = {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: TableDataSysRole;
    /** 消息内容 */
    msg: string;
  };

  type TableDataInfoSysUser = {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: TableDataSysUser;
    /** 消息内容 */
    msg: string;
  };

  type TableDataInfoSysUserOnline = {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: TableDataSysUserOnline;
    /** 消息内容 */
    msg: string;
  };

  type TableDataSysConfig = {
    /** 列表数据 */
    rows?: SysConfig[];
    /** 总记录数 */
    total?: number;
  };

  type TableDataSysDictData = {
    /** 列表数据 */
    rows?: SysDictDataRes[];
    /** 总记录数 */
    total?: number;
  };

  type TableDataSysDictType = {
    /** 列表数据 */
    rows?: SysDictType[];
    /** 总记录数 */
    total?: number;
  };

  type TableDataSysLogininfor = {
    /** 列表数据 */
    rows?: SysLogininfor[];
    /** 总记录数 */
    total?: number;
  };

  type TableDataSysNotice = {
    /** 列表数据 */
    rows?: SysNotice[];
    /** 总记录数 */
    total?: number;
  };

  type TableDataSysOperLog = {
    /** 列表数据 */
    rows?: SysOperLog[];
    /** 总记录数 */
    total?: number;
  };

  type TableDataSysOssConfigVo = {
    /** 列表数据 */
    rows?: SysOssConfigVo[];
    /** 总记录数 */
    total?: number;
  };

  type TableDataSysOssVo = {
    /** 列表数据 */
    rows?: SysOssVo[];
    /** 总记录数 */
    total?: number;
  };

  type TableDataSysPost = {
    /** 列表数据 */
    rows?: SysPost[];
    /** 总记录数 */
    total?: number;
  };

  type TableDataSysRole = {
    /** 列表数据 */
    rows?: SysRoleRes[];
    /** 总记录数 */
    total?: number;
  };

  type TableDataSysUser = {
    /** 列表数据 */
    rows?: SysUserRes[];
    /** 总记录数 */
    total?: number;
  };

  type TableDataSysUserOnline = {
    /** 列表数据 */
    rows?: SysUserOnline[];
    /** 总记录数 */
    total?: number;
  };

  type TreeNodeConfig = {
    childrenKey?: string;
    deep?: number;
    idKey?: string;
    nameKey?: string;
    parentIdKey?: string;
    weightKey?: string;
  };

  type UpdatePwdBody = {
    /** 新密码 */
    newPassword: string;
    /** 原密码 */
    oldPassword: string;
  };

  type UserAuthRoleDTO = {
    /** 授权角色列表 */
    roles?: SysRoleRes[];
    /** 用户信息业务对象 */
    user?: SysUserRes;
  };

  type UserDetailDTO = {
    /** 岗位ID列表 */
    postIds?: number[];
    /** 岗位列表 */
    posts?: SysPost[];
    /** 角色ID列表 */
    roleIds?: number[];
    /** 角色列表 */
    roles?: SysRoleRes[];
    /** 用户信息业务对象 */
    user?: SysUserRes;
  };

  type UserInfoDTO = {
    /** 权限集合 */
    permissions?: string[];
    /** 角色集合 */
    roles?: string[];
    /** 用户信息业务对象 */
    user?: SysUser;
  };

  type UserNameLoginBody = {
    /** 验证码 */
    code: string;
    /** 用户密码 */
    password: string;
    /** 用户名 */
    username: string;
    /** 唯一标识 */
    uuid: string;
  };
}