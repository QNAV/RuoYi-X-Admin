import{e as F,F as T,j as u,az as h,Z as x,bM as E,bN as I,bO as v,aR as N,r as b,bP as f,ai as m,bQ as B,bE as g,aJ as k,bR as C,b4 as c,bS as A,b0 as w,K as D,aD as y,$ as j}from"./index.623678ca.js";import{G as P,a as O}from"./GenService.9a192d87.js";import{u as M}from"./useRequest.516b8fab.js";import{u as G}from"./useMutation.esm.1ca781b5.js";import"./utils.esm.46a75e3a.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const _=({dataSource:e,handleEdit:a})=>{const o={onSave:async(d,t)=>{const i=d;await a({[i]:t[i]})}};return F(T,{children:[u(h,{dataSource:e,columns:[{title:"\u8868\u540D\u79F0",dataIndex:"tableName",key:"tableName",valueType:"text"},{title:"\u8868\u63CF\u8FF0",dataIndex:"tableComment",key:"tableComment",valueType:"text"},{title:"\u5B9E\u4F53\u540D\u79F0",dataIndex:"className",key:"className",valueType:"text",hideInSearch:!0},{title:"\u4F5C\u8005",dataIndex:"functionAuthor",key:"functionAuthor",valueType:"text"},{title:"\u5907\u6CE8",dataIndex:"remark",key:"remark",valueType:"textarea",hideInSearch:!0}],editable:o}),u(x,{}),u(h,{columns:[{title:"\u751F\u6210\u6A21\u7248",dataIndex:"tplCategory",key:"tplCategory",valueType:"select",valueEnum:E},{title:"\u751F\u6210\u5305\u8DEF\u5F84",dataIndex:"packageName",key:"packageName",valueType:"text"},{title:"\u751F\u6210\u6A21\u5757\u540D",dataIndex:"moduleName",key:"moduleName",valueType:"text"},{title:"\u751F\u6210\u4E1A\u52A1\u540D",dataIndex:"businessName",key:"businessName",valueType:"text"},{title:"\u751F\u6210\u529F\u80FD\u540D",dataIndex:"functionName",key:"functionName",valueType:"text"},{title:"\u751F\u6210\u4EE3\u7801\u65B9\u5F0F",dataIndex:"genType",key:"genType",valueType:"select",valueEnum:I},...(e==null?void 0:e.genType)===v.ZIP?[]:[{title:"\u81EA\u5B9A\u4E49\u8DEF\u5F84",dataIndex:"genPath",key:"genPath",valueType:"text"}]],dataSource:e,editable:o})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const L=({dataSource:e,handleEdit:a,loading:o=!1})=>{const[d]=N.useForm(),[t,i]=b.exports.useState([]),r=(t==null?void 0:t.length)>0;return u(f,{toolbar:{actions:r?[u(m,{onClick:()=>i([]),icon:u(B,{}),children:"\u53D6\u6D88\u7F16\u8F91"},"cancelEdit"),u(m,{type:"primary",loading:o,icon:u(g,{}),onClick:async()=>{const n=await d.validateFields();await a({columns:Object.keys(n).map(s=>({...n[s],columnId:Number(s)}))}),i([])},children:"\u4FDD\u5B58"},"edit")]:[u(m,{icon:u(k,{}),type:"primary",onClick:()=>{e&&i(e==null?void 0:e.map(n=>{var s,l;return(l=(s=n==null?void 0:n.columnId)==null?void 0:s.toString())!=null?l:""}))},children:"\u7F16\u8F91"},"edit")]},rowKey:"columnId",ghost:!0,size:"small",scroll:{x:"max-content"},columns:[{title:"\u5E8F\u53F7",dataIndex:"sort",valueType:"indexBorder",editable:!1,width:80},{title:"\u5B57\u6BB5\u540D\u79F0",dataIndex:"columnName",key:"columnName",valueType:"text",editable:!1,ellipsis:!0,width:100},{title:"\u5B57\u6BB5\u63CF\u8FF0",dataIndex:"columnComment",key:"columnComment",valueType:"text",width:250},{title:"\u7269\u7406\u7C7B\u578B",dataIndex:"columnType",key:"columnType",valueType:"text",editable:!1,ellipsis:!0,width:100},{title:"JAVA\u7C7B\u578B",dataIndex:"javaType",key:"javaType",valueType:"select",valueEnum:C,width:90},{title:"JAVA\u5C5E\u6027",dataIndex:"javaField",key:"javaField",valueType:"text",width:140},{title:"\u63D2\u5165",dataIndex:"isInsert",key:"isInsert",valueType:"radioButton",width:115,valueEnum:c},{title:"\u7F16\u8F91",dataIndex:"isEdit",key:"isEdit",valueType:"radioButton",width:115,valueEnum:c},{title:"\u5217\u8868",dataIndex:"isList",key:"isList",valueType:"radioButton",width:115,valueEnum:c},{title:"\u67E5\u8BE2",dataIndex:"isQuery",key:"isQuery",valueType:"radioButton",width:115,valueEnum:c},{title:"\u5FC5\u586B",dataIndex:"isRequired",key:"isRequired",valueType:"radioButton",width:115,valueEnum:c},{title:"\u67E5\u8BE2\u65B9\u5F0F",dataIndex:"queryType",key:"queryType",valueType:"select",valueEnum:A,width:70}],value:e,recordCreatorProps:!1,editable:{form:d,editableKeys:t}})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const p={BASE_INFO:"\u57FA\u672C\u4FE1\u606F",FIELD_INFO:"\u5B57\u6BB5\u4FE1\u606F"},K=()=>{var s;const e=w(),a=Number((s=e==null?void 0:e.tableId)!=null?s:"0"),[o,d]=b.exports.useState("BASE_INFO"),{data:t,refresh:i}=M(async()=>await P({tableId:a}),{ready:a>0,refreshDeps:[a]}),{mutateAsync:r,isLoading:n}=G(async l=>{await O({tableId:a,businessName:t.info.businessName,functionName:t.info.functionName,className:t.info.className,functionAuthor:t.info.functionAuthor,moduleName:t.info.moduleName,packageName:t.info.packageName,tableComment:t.info.tableComment,tableName:t.info.tableName,columns:t.rows,...l})},{onSuccess:()=>{i(),j.success("\u4FDD\u5B58\u6210\u529F")}});return u(D,{children:F(y,{tabs:{activeKey:o,onChange:l=>{d(l)}},children:[u(y.TabPane,{tab:p.BASE_INFO,children:u(_,{dataSource:t==null?void 0:t.info,handleEdit:r})},"BASE_INFO"),u(y.TabPane,{tab:p.FIELD_INFO,children:u(L,{dataSource:t==null?void 0:t.rows,handleEdit:r,loading:n})},"FIELD_INFO")]})})};export{K as default};
