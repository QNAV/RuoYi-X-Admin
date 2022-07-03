/**
 * 数据对象
 *
 * GenInfoDto，代码生成业务信息对象
 */
export interface GenInfoDto {
  /**
   * 查询到的生成业务信息
   */
  info: GenTableRes;
  /**
   * 查询到的生成业务字段列表
   */
  rows: GenTableColumnRes[];
  /**
   * 所有生成业务信息列表
   */
  tables: GenTableRes[];
}

/**
 * 查询到的生成业务信息
 *
 * GenTableRes
 */
export interface GenTableRes {
  businessName: string;
  className: string;
  columns?: GenTableColumnRes[];
  /**
   * 创建者
   */
  createBy?: string;
  /**
   * 创建时间
   */
  createTime?: Date;
  crud?: boolean;
  functionAuthor: string;
  functionName: string;
  genPath?: string;
  genType?: string;
  menuIds?: number[];
  moduleName: string;
  options?: string;
  packageName: string;
  params?: { [key: string]: string };
  parentMenuId?: string;
  parentMenuName?: string;
  pkColumn?: GenTableColumnRes;
  remark?: string;
  sub?: boolean;
  subTable?: GenTableRes;
  subTableFkName?: string;
  subTableName?: string;
  tableComment: string;
  tableId?: number;
  tableName: string;
  tplCategory?: string;
  tree?: boolean;
  treeCode?: string;
  treeName?: string;
  treeParentCode?: string;
  /**
   * 更新者
   */
  updateBy?: string;
  /**
   * 更新时间
   */
  updateTime?: Date;
}

/**
 * GenTableColumnRes
 */
export interface GenTableColumnRes {
  capJavaField?: string;
  columnComment?: string;
  columnId?: number;
  columnName?: string;
  columnType?: string;
  /**
   * 创建者
   */
  createBy?: string;
  /**
   * 创建时间
   */
  createTime?: Date;
  dictType?: string;
  edit?: boolean;
  htmlType?: string;
  increment?: boolean;
  insert?: boolean;
  isEdit?: string;
  isIncrement?: string;
  isInsert?: string;
  isList?: string;
  isPk?: string;
  isQuery?: string;
  isRequired?: string;
  javaField: string;
  javaType?: string;
  list?: boolean;
  pk?: boolean;
  query?: boolean;
  queryType?: string;
  required?: boolean;
  sort?: number;
  superColumn?: boolean;
  tableId?: number;
  /**
   * 更新者
   */
  updateBy?: string;
  /**
   * 更新时间
   */
  updateTime?: Date;
  usableColumn?: boolean;
}
