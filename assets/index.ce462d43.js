import{e as d,F as N,j as t,ap as C,$ as p,bM as f,aX as g,r as F,bN as I,ai as m,bO as y,bP as T,aC as E,b7 as A,M as P,at as h,q as B}from"./index.b8b57d0a.js";import{N as D,O,P as w,Q as j,C as k,R as v,S as G,T as _,U as x,V as M,W as L,X as R,Y as q,Z as Q,_ as J,$ as K,a0 as S,a1 as X,a2 as Z,a3 as $,a4 as z,a5 as U,a6 as V,a7 as W}from"./index.1ae84bf1.js";import{G as Y,a as H}from"./GenService.e5faec08.js";import{u as aa}from"./useRequest.8e9a9409.js";import{u as ea}from"./useMutation.esm.6965c8ad.js";import"./utils.esm.315e4825.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(a,s){return this.cache.has(a)?this.cache.get(a):(this.cache.set(a,s),s)}};const sa=({dataSource:a,handleEdit:s})=>{const r={onSave:async(l,e)=>{const n=l;await s({[n]:e[n]})}};return d(N,{children:[t(C,{dataSource:a,columns:[D,O,w,j,k],editable:r}),t(p,{}),t(C,{columns:[v,G,_,x,M,L,...(a==null?void 0:a.genType)===f.ZIP?[]:[R]],dataSource:a,editable:r})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(a,s){return this.cache.has(a)?this.cache.get(a):(this.cache.set(a,s),s)}};const ta=({dataSource:a,handleEdit:s,loading:r=!1})=>{const[l]=g.useForm(),[e,n]=F.exports.useState([]),u=(e==null?void 0:e.length)>0;return t(I,{toolbar:{actions:u?[t(m,{onClick:()=>n([]),icon:t(y,{}),children:"\u53D6\u6D88\u7F16\u8F91"},"cancelEdit"),t(m,{type:"primary",loading:r,icon:t(T,{}),onClick:async()=>{const o=await l.validateFields();await s({columns:Object.keys(o).map(i=>({...o[i],columnId:Number(i)}))}),n([])},children:"\u4FDD\u5B58"},"edit")]:[t(m,{icon:t(E,{}),type:"primary",onClick:()=>{a&&n(a==null?void 0:a.map(o=>{var i,c;return(c=(i=o==null?void 0:o.columnId)==null?void 0:i.toString())!=null?c:""}))},children:"\u7F16\u8F91"},"edit")]},rowKey:"columnId",ghost:!0,size:"small",scroll:{x:"max-content"},columns:[q,Q,J,K,S,X,Z,$,z,U,V,W],value:a,recordCreatorProps:!1,editable:{form:l,editableKeys:e}})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(a,s){return this.cache.has(a)?this.cache.get(a):(this.cache.set(a,s),s)}};const b={BASE_INFO:"\u57FA\u672C\u4FE1\u606F",FIELD_INFO:"\u5B57\u6BB5\u4FE1\u606F"},ua=()=>{var i;const a=A(),s=Number((i=a==null?void 0:a.tableId)!=null?i:"0"),[r,l]=F.exports.useState("BASE_INFO"),{data:e,refresh:n}=aa(async()=>await Y({tableId:s}),{ready:s>0,refreshDeps:[s]}),{mutateAsync:u,isLoading:o}=ea(async c=>{await H({tableId:s,businessName:e.info.businessName,functionName:e.info.functionName,className:e.info.className,functionAuthor:e.info.functionAuthor,moduleName:e.info.moduleName,packageName:e.info.packageName,tableComment:e.info.tableComment,tableName:e.info.tableName,columns:e.rows,...c})},{onSuccess:()=>{n(),B.success("\u4FDD\u5B58\u6210\u529F")}});return t(P,{children:d(h,{tabs:{activeKey:r,onChange:c=>{l(c)}},children:[t(h.TabPane,{tab:b.BASE_INFO,children:t(sa,{dataSource:e==null?void 0:e.info,handleEdit:u})},"BASE_INFO"),t(h.TabPane,{tab:b.FIELD_INFO,children:t(ta,{dataSource:e==null?void 0:e.rows,handleEdit:u,loading:o})},"FIELD_INFO")]})})};export{ua as default};