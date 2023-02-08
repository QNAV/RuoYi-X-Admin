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

/** 代码生成分页查询对象 */
export interface GenTablePageQuery {
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
  /** 表名称 */
  tableName?: string;
  /** 表描述 */
  tableComment?: string;
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

/** 代码生成实体对象 */
export interface GenTable {
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
   * 编号
   * @format int64
   */
  tableId?: number;
  /** 表名称 */
  tableName: string;
  /** 表描述 */
  tableComment: string;
  /** 关联父表的表名 */
  subTableName?: string;
  /** 本表关联父表的外键名 */
  subTableFkName?: string;
  /** 表名称 */
  className: string;
  /** 使用的模板（crud单表操作 tree树表操作 sub主子表操作） */
  tplCategory?: string;
  /** 生成包路径 */
  packageName: string;
  /** 生成模块名 */
  moduleName: string;
  /** 生成业务名 */
  businessName: string;
  /** 生成功能名 */
  functionName: string;
  /** 生成作者 */
  functionAuthor: string;
  /** 生成代码方式（0zip压缩包 1自定义路径） */
  genType?: string;
  /** 生成路径（不填默认项目路径） */
  genPath?: string;
  /** 代码生成业务字段实体对象 */
  pkColumn?: GenTableColumn;
  /** 代码生成实体对象 */
  subTable?: GenTable;
  /** 表列信息 */
  columns: GenTableColumn[];
  /** 其它生成选项 */
  options?: string;
  /** 备注 */
  remark?: string;
  /** 树编码字段 */
  treeCode?: string;
  /** 树父编码字段 */
  treeParentCode?: string;
  /** 树名称字段 */
  treeName?: string;
  /** 菜单id列表 */
  menuIds?: number[];
  /** 上级菜单ID字段 */
  parentMenuId?: string;
  /** 上级菜单名称字段 */
  parentMenuName?: string;
  /** 传入参数（暂时预留） */
  params?: Record<string, string>;
  sub?: boolean;
  tree?: boolean;
  crud?: boolean;
}

/** 代码生成业务字段实体对象 */
export interface GenTableColumn {
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
   * 编号
   * @format int64
   */
  columnId?: number;
  /**
   * 归属表编号
   * @format int64
   */
  tableId?: number;
  /** 列名称 */
  columnName?: string;
  /** 列描述 */
  columnComment?: string;
  /** 列类型 */
  columnType?: string;
  /** 列默认值 */
  columnDefault?: string;
  /** JAVA类型 */
  javaType?: string;
  /** JAVA字段名 */
  javaField: string;
  /** 是否主键（1是） */
  isPk?: string;
  /** 是否自增（1是） */
  isIncrement?: string;
  /** 是否必填（1是） */
  isRequired?: string;
  /** 是否为插入字段（1是） */
  isInsert?: string;
  /** 是否编辑字段（1是） */
  isEdit?: string;
  /** 是否列表字段（1是） */
  isList?: string;
  /** 是否查询字段（1是） */
  isQuery?: string;
  /** 查询方式（EQ等于、NE不等于、GT大于、LT小于、LIKE模糊、BETWEEN范围） */
  queryType?: string;
  /** 显示类型（input文本框、textarea文本域、select下拉框、checkbox复选框、radio单选框、datetime日期控件、image图片上传控件、upload文件上传控件、editor富文本控件） */
  htmlType?: string;
  /** 字典类型 */
  dictType?: string;
  /**
   * 排序
   * @format int32
   */
  sort?: number;
  list?: boolean;
  pk?: boolean;
  insert?: boolean;
  edit?: boolean;
  usableColumn?: boolean;
  superColumn?: boolean;
  required?: boolean;
  increment?: boolean;
  query?: boolean;
  capJavaField?: string;
}

/** 分页数据对象 */
export interface TableDataGenTable {
  /**
   * 总记录数
   * @format int64
   */
  total: number;
  /** 列表数据 */
  data: GenTable[];
}

/** 表格分页数据对象 */
export interface TableDataInfoGenTable {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 分页数据对象 */
  data: TableDataGenTable;
}

/** 响应信息主体 */
export interface RMapStringString {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 数据对象 */
  data: Record<string, string>;
}

/** 代码生成业务信息对象 */
export interface GenInfoVo {
  /** 代码生成实体对象 */
  info: GenTable;
  /** 查询到的生成业务字段列表 */
  rows: GenTableColumn[];
  /** 所有生成业务信息列表 */
  tables: GenTable[];
}

/** 响应信息主体 */
export interface RGenInfoVo {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 代码生成业务信息对象 */
  data: GenInfoVo;
}

/** 分页数据对象 */
export interface TableDataGenTableColumn {
  /**
   * 总记录数
   * @format int64
   */
  total: number;
  /** 列表数据 */
  data: GenTableColumn[];
}

/** 表格分页数据对象 */
export interface TableDataInfoGenTableColumn {
  /**
   * 消息状态码
   * @format int32
   */
  code: number;
  /** 消息内容 */
  msg: string;
  /** 分页数据对象 */
  data: TableDataGenTableColumn;
}
