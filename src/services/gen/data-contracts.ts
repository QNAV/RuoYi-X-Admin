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
  data: Record<string, any>;
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
  /** 使用的模板（CRUD=单表操作 TREE=树表操作 SUB=主子表操作） */
  tplCategory?: 'CRUD' | 'TREE' | 'SUB';
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
  /** 生成代码方式（ZIP=zip压缩包 CUSTOM=自定义路径） */
  genType?: 'ZIP' | 'CUSTOM';
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
  params?: Record<string, any>;
  tree?: boolean;
  sub?: boolean;
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
  /**
   * 列长度限制（仅限字符串类型）
   * @format int32
   */
  columnMaxLength?: number;
  /** JAVA类型（Long=长整型 Integer=整型 String=字符串 Date=日期 Double=浮点数 Boolean=布尔型 BigDecimal=金额） */
  javaType?: 'Long' | 'Integer' | 'String' | 'Date' | 'Double' | 'Boolean' | 'BigDecimal';
  /** JAVA字段名 */
  javaField: string;
  /** 是否主键（YES=是 NO=否） */
  isPk?: 'YES' | 'NO';
  /** 是否自增（YES=是 NO=否） */
  isIncrement?: 'YES' | 'NO';
  /** 是否必填（YES=是 NO=否） */
  isRequired?: 'YES' | 'NO';
  /** 是否为插入字段（YES=是 NO=否） */
  isInsert?: 'YES' | 'NO';
  /** 是否编辑字段（YES=是 NO=否） */
  isEdit?: 'YES' | 'NO';
  /** 是否列表字段（YES=是 NO=否） */
  isList?: 'YES' | 'NO';
  /** 是否VO必须返回（YES=是 NO=否） */
  isVoRequired?: 'YES' | 'NO';
  /** 是否查询字段（YES=是 NO=否） */
  isQuery?: 'YES' | 'NO';
  /** 查询方式（EQ=等于 NE=不等于 GT=大于 GE=大于等于 LT=小于 LE=小于等于 LIKE=模糊 BETWEEN=范围） */
  queryType?: 'EQ' | 'NE' | 'GT' | 'GE' | 'LT' | 'LE' | 'LIKE' | 'BETWEEN';
  /** 显示类型（INPUT=文本框 TEXTAREA=文本域 SELECT=下拉框 CHECKBOX=复选框 RADIO=单选框 DATETIME=日期控件 IMAGE=图片上传控件 UPLOAD=文件上传控件 EDITOR=富文本控件） */
  htmlType?: 'INPUT' | 'TEXTAREA' | 'SELECT' | 'CHECKBOX' | 'RADIO' | 'DATETIME' | 'IMAGE' | 'UPLOAD' | 'EDITOR';
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
  capJavaField?: string;
  required?: boolean;
  query?: boolean;
  increment?: boolean;
  voRequired?: boolean;
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
  data: Record<string, any>;
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
