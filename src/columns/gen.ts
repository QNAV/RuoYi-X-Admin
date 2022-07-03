import { MapGenType, MapJavaType, MapQueryType, MapTemplateType, MapYesNoStatus } from '@/constants';
import type { ProItem } from '@/types';

// 表名称
export const CTableName: ProItem = {
  title: '表名称',
  dataIndex: 'tableName',
  key: 'tableName',
  valueType: 'text',
};

// 表描述
export const CTableComment: ProItem = {
  title: '表描述',
  dataIndex: 'tableComment',
  key: 'tableComment',
  valueType: 'text',
};

// 实体名称
export const CClassName: ProItem = {
  title: '实体名称',
  dataIndex: 'className',
  key: 'className',
  valueType: 'text',
};

// 作者
export const CFunctionAuthor: ProItem = {
  title: '作者',
  dataIndex: 'functionAuthor',
  key: 'functionAuthor',
  valueType: 'text',
};

// 字段名称
export const CColumnName: ProItem = {
  title: '字段名称',
  dataIndex: 'columnName',
  key: 'columnName',
  valueType: 'text',
  editable: false,
  ellipsis: true,
  width: 100,
};

// 字段描述
export const CColumnComment: ProItem = {
  title: '字段描述',
  dataIndex: 'columnComment',
  key: 'columnComment',
  valueType: 'text',
  width: 250,
};

// 物理类型
export const CColumnType: ProItem = {
  title: '物理类型',
  dataIndex: 'columnType',
  key: 'columnType',
  valueType: 'text',
  editable: false,
  ellipsis: true,

  width: 100,
};

// JAVA类型
export const CJavaType: ProItem = {
  title: 'JAVA类型',
  dataIndex: 'javaType',
  key: 'javaType',
  valueType: 'select',
  valueEnum: MapJavaType,
  width: 90,
};

// JAVA属性
export const CJavaField: ProItem = {
  title: 'JAVA属性',
  dataIndex: 'javaField',
  key: 'javaField',
  valueType: 'text',
  width: 140,
};

// 插入
export const CIsInsert: ProItem = {
  title: '插入',
  dataIndex: 'isInsert',
  key: 'isInsert',
  valueType: 'radioButton',
  width: 115,
  valueEnum: MapYesNoStatus,
};

// 编辑
export const CIsEdit: ProItem = {
  title: '编辑',
  dataIndex: 'isEdit',
  key: 'isEdit',
  valueType: 'radioButton',
  width: 115,
  valueEnum: MapYesNoStatus,
};

// 列表
export const CIsList: ProItem = {
  title: '列表',
  dataIndex: 'isList',
  key: 'isList',
  valueType: 'radioButton',
  width: 115,
  valueEnum: MapYesNoStatus,
};

// 查询
export const CIsQuery: ProItem = {
  title: '查询',
  dataIndex: 'isQuery',
  key: 'isQuery',
  valueType: 'radioButton',
  width: 115,
  valueEnum: MapYesNoStatus,
};

// 必填
export const CIsRequired: ProItem = {
  title: '必填',
  dataIndex: 'isRequired',
  key: 'isRequired',
  valueType: 'radioButton',
  width: 115,
  valueEnum: MapYesNoStatus,
};

// 查询方式
export const CQueryType: ProItem = {
  title: '查询方式',
  dataIndex: 'queryType',
  key: 'queryType',
  valueType: 'select',
  valueEnum: MapQueryType,
  width: 70,
};

// 生成模版
export const CTplCategory: ProItem = {
  title: '生成模版',
  dataIndex: 'tplCategory',
  key: 'tplCategory',
  valueType: 'select',
  valueEnum: MapTemplateType,
};

// 生成包路径
export const CPackageName: ProItem = {
  title: '生成包路径',
  dataIndex: 'packageName',
  key: 'packageName',
  valueType: 'text',
};

// 生成模块名
export const CModuleName: ProItem = {
  title: '生成模块名',
  dataIndex: 'moduleName',
  key: 'moduleName',
  valueType: 'text',
};

// 生成业务名
export const CBusinessName: ProItem = {
  title: '生成业务名',
  dataIndex: 'businessName',
  key: 'businessName',
  valueType: 'text',
};

// 生成功能名
export const CFunctionName: ProItem = {
  title: '生成功能名',
  dataIndex: 'functionName',
  key: 'functionName',
  valueType: 'text',
};

// 生成代码方式
export const CGenType: ProItem = {
  title: '生成代码方式',
  dataIndex: 'genType',
  key: 'genType',
  valueType: 'select',
  valueEnum: MapGenType,
};

// 自定义路径
export const CGenPath: ProItem = {
  title: '自定义路径',
  dataIndex: 'genPath',
  key: 'genPath',
  valueType: 'text',
};

// 序号
export const CSort: ProItem = {
  title: '序号',
  dataIndex: 'sort',
  valueType: 'indexBorder',
  editable: false,
  width: 80,
};
