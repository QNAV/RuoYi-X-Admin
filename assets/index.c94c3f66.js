import{g as h,F as T,j as u,au as y,X as I,bH as b,bI as x,bJ as E,aI as v,r as F,bK as N,ag as m,bL as g,bz as B,aB as k,bM as f,aZ as c,bN as C,aW as A,I as D,ax as j,Y as w}from"./index.d36c19ac.js";import{G as O,a as M}from"./GenService.ba84ec6f.js";import{u as P}from"./useRequest.bf0f0fa7.js";import{u as S}from"./useMutation.esm.cb3d39b5.js";import"./utils.esm.49cce3bb.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const G=({dataSource:e,handleEdit:t})=>{const n={onSave:async(l,a)=>{const s=l;await t({[s]:a[s]})}};return h(T,{children:[u(y,{dataSource:e,columns:[{title:"\u8868\u540D\u79F0",dataIndex:"tableName",key:"tableName",valueType:"text"},{title:"\u8868\u63CF\u8FF0",dataIndex:"tableComment",key:"tableComment",valueType:"text"},{title:"\u5B9E\u4F53\u540D\u79F0",dataIndex:"className",key:"className",valueType:"text",hideInSearch:!0},{title:"\u4F5C\u8005",dataIndex:"functionAuthor",key:"functionAuthor",valueType:"text"},{title:"\u5907\u6CE8",dataIndex:"remark",key:"remark",valueType:"textarea",hideInSearch:!0}],editable:n}),u(I,{}),u(y,{columns:[{title:"\u751F\u6210\u6A21\u7248",dataIndex:"tplCategory",key:"tplCategory",valueType:"select",valueEnum:b},{title:"\u751F\u6210\u5305\u8DEF\u5F84",dataIndex:"packageName",key:"packageName",valueType:"text"},{title:"\u751F\u6210\u6A21\u5757\u540D",dataIndex:"moduleName",key:"moduleName",valueType:"text"},{title:"\u751F\u6210\u4E1A\u52A1\u540D",dataIndex:"businessName",key:"businessName",valueType:"text"},{title:"\u751F\u6210\u529F\u80FD\u540D",dataIndex:"functionName",key:"functionName",valueType:"text"},{title:"\u751F\u6210\u4EE3\u7801\u65B9\u5F0F",dataIndex:"genType",key:"genType",valueType:"select",valueEnum:x},...(e==null?void 0:e.genType)===E.ZIP?[]:[{title:"\u81EA\u5B9A\u4E49\u8DEF\u5F84",dataIndex:"genPath",key:"genPath",valueType:"text"}]],dataSource:e,editable:n})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const L=[{title:"\u5E8F\u53F7",dataIndex:"sort",valueType:"indexBorder",editable:!1},{title:"\u5B57\u6BB5\u540D\u79F0",dataIndex:"columnName",key:"columnName",valueType:"text",editable:!1,ellipsis:!0},{title:"\u5B57\u6BB5\u63CF\u8FF0",dataIndex:"columnComment",key:"columnComment",valueType:"text"},{title:"\u7269\u7406\u7C7B\u578B",dataIndex:"columnType",key:"columnType",valueType:"text",editable:!1,ellipsis:!0},{title:"JAVA\u7C7B\u578B",dataIndex:"javaType",key:"javaType",valueType:"select",valueEnum:f},{title:"JAVA\u5C5E\u6027",dataIndex:"javaField",key:"javaField",valueType:"text"},{title:"\u63D2\u5165",dataIndex:"isInsert",key:"isInsert",valueType:"radioButton",valueEnum:c},{title:"\u7F16\u8F91",dataIndex:"isEdit",key:"isEdit",valueType:"radioButton",valueEnum:c},{title:"\u5217\u8868",dataIndex:"isList",key:"isList",valueType:"radioButton",valueEnum:c},{title:"\u67E5\u8BE2",dataIndex:"isQuery",key:"isQuery",valueType:"radioButton",valueEnum:c},{title:"\u5FC5\u586B",dataIndex:"isRequired",key:"isRequired",valueType:"radioButton",valueEnum:c},{title:"\u67E5\u8BE2\u65B9\u5F0F",dataIndex:"queryType",key:"queryType",valueType:"select",valueEnum:C}],_=({dataSource:e,handleEdit:t,loading:n=!1})=>{const[l]=v.useForm(),[a,s]=F.exports.useState([]),r=(a==null?void 0:a.length)>0;return u(N,{toolbar:{actions:r?[u(m,{onClick:()=>s([]),icon:u(g,{}),children:"\u53D6\u6D88\u7F16\u8F91"},"cancelEdit"),u(m,{type:"primary",loading:n,icon:u(B,{}),onClick:async()=>{const i=await l.validateFields();await t({columns:Object.keys(i).map(o=>({...i[o],columnId:Number(o)}))}),s([])},children:"\u4FDD\u5B58"},"edit")]:[u(m,{icon:u(k,{}),type:"primary",onClick:()=>{s(e.map(i=>i.columnId.toString()))},children:"\u7F16\u8F91"},"edit")]},rowKey:"columnId",ghost:!0,size:"small",scroll:{x:"max-content"},columns:L,value:e,recordCreatorProps:!1,editable:{form:l,editableKeys:a}})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const p={BASE_INFO:"\u57FA\u672C\u4FE1\u606F",FIELD_INFO:"\u5B57\u6BB5\u4FE1\u606F"},z=()=>{var o;const e=A(),t=Number((o=e==null?void 0:e.tableId)!=null?o:"0"),[n,l]=F.exports.useState("BASE_INFO"),{data:a,refresh:s}=P(()=>O({tableId:t}),{ready:t>0,refreshDeps:[t]}),{mutateAsync:r,isLoading:i}=S(async d=>{await M({tableId:t,businessName:a.info.businessName,functionName:a.info.functionName,className:a.info.className,functionAuthor:a.info.functionAuthor,moduleName:a.info.moduleName,packageName:a.info.packageName,tableComment:a.info.tableComment,tableName:a.info.tableName,columns:a.rows,...d})},{onSuccess:()=>{s(),w.success("\u4FDD\u5B58\u6210\u529F")}});return u(D,{children:u(j,{tabs:{items:[{label:p.BASE_INFO,key:"BASE_INFO",children:u(G,{dataSource:a==null?void 0:a.info,handleEdit:r})},{label:p.FIELD_INFO,key:"FIELD_INFO",children:u(_,{dataSource:a==null?void 0:a.rows,handleEdit:r,loading:i})}],activeKey:n,onChange:d=>{l(d)}}})})};export{z as default};