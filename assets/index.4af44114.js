import{e as d,F as p,j as t,aC as C,a0 as f,bP as N,a_ as g,r as F,bQ as I,aj as m,bR as y,bS as T,aM as E,b9 as A,O as P,aG as h,q as B}from"./index.0c070da5.js";import{P as D,Q as w,R as O,S as j,C as G,U as _,V as k,W as v,X as x,Y as M,Z as R,_ as L,$ as Q,a0 as q,a1 as S,a2 as J,a3 as K,a4 as Z,a5 as z,a6 as U,a7 as V,a8 as W,a9 as X,aa as Y}from"./index.577f21b4.js";import{G as $,a as H}from"./GenService.fa6c0446.js";import{u as aa}from"./useRequest.8c9d06b9.js";import{u as ea}from"./useMutation.esm.ce300cfa.js";import"./index.5b8ef490.js";import"./useQuery.esm.23178496.js";import"./isBrowser.11d008c4.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(a,s){return this.cache.has(a)?this.cache.get(a):(this.cache.set(a,s),s)}};const sa=({dataSource:a,handleEdit:s})=>{const r={onSave:async(l,e)=>{const o=l;await s({[o]:e[o]})}};return d(p,{children:[t(C,{dataSource:a,columns:[D,w,O,j,G],editable:r}),t(f,{}),t(C,{columns:[_,k,v,x,M,R,...(a==null?void 0:a.genType)===N.ZIP?[]:[L]],dataSource:a,editable:r})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(a,s){return this.cache.has(a)?this.cache.get(a):(this.cache.set(a,s),s)}};const ta=({dataSource:a,handleEdit:s,loading:r=!1})=>{const[l]=g.useForm(),[e,o]=F.exports.useState([]),u=(e==null?void 0:e.length)>0;return t(I,{toolbar:{actions:u?[t(m,{onClick:()=>o([]),icon:t(y,{}),children:"\u53D6\u6D88\u7F16\u8F91"},"cancelEdit"),t(m,{type:"primary",loading:r,icon:t(T,{}),onClick:async()=>{const n=await l.validateFields();await s({columns:Object.keys(n).map(i=>({...n[i],columnId:Number(i)}))}),o([])},children:"\u4FDD\u5B58"},"edit")]:[t(m,{icon:t(E,{}),type:"primary",onClick:()=>{a&&o(a==null?void 0:a.map(n=>{var i,c;return(c=(i=n==null?void 0:n.columnId)==null?void 0:i.toString())!=null?c:""}))},children:"\u7F16\u8F91"},"edit")]},rowKey:"columnId",ghost:!0,size:"small",scroll:{x:"max-content"},columns:[Q,q,S,J,K,Z,z,U,V,W,X,Y],value:a,recordCreatorProps:!1,editable:{form:l,editableKeys:e}})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(a,s){return this.cache.has(a)?this.cache.get(a):(this.cache.set(a,s),s)}};const b={BASE_INFO:"\u57FA\u672C\u4FE1\u606F",FIELD_INFO:"\u5B57\u6BB5\u4FE1\u606F"},ha=()=>{var i;const a=A(),s=Number((i=a==null?void 0:a.tableId)!=null?i:"0"),[r,l]=F.exports.useState("BASE_INFO"),{data:e,refresh:o}=aa(async()=>await $({tableId:s}),{ready:s>0,refreshDeps:[s]}),{mutateAsync:u,isLoading:n}=ea(async c=>{await H({tableId:s,businessName:e.info.businessName,functionName:e.info.functionName,className:e.info.className,functionAuthor:e.info.functionAuthor,moduleName:e.info.moduleName,packageName:e.info.packageName,tableComment:e.info.tableComment,tableName:e.info.tableName,columns:e.rows,...c})},{onSuccess:()=>{o(),B.success("\u4FDD\u5B58\u6210\u529F")}});return t(P,{children:d(h,{tabs:{activeKey:r,onChange:c=>{l(c)}},children:[t(h.TabPane,{tab:b.BASE_INFO,children:t(sa,{dataSource:e==null?void 0:e.info,handleEdit:u})},"BASE_INFO"),t(h.TabPane,{tab:b.FIELD_INFO,children:t(ta,{dataSource:e==null?void 0:e.rows,handleEdit:u,loading:n})},"FIELD_INFO")]})})};export{ha as default};
