import{s as F,v as M,b9 as A,q as y,j as a,ai as U,aj as g,bN as v,al as L,e as C,F as f,am as O,r as T,aL as q,bO as E,aq as S,ar as D,bP as K,O as V}from"./index.969ee356.js";import{B as j,P as N,Q as P,R as I,S as R,T as w}from"./index.f4f23c09.js";import{e as X}from"./index.6d3e914b.js";import{b as Y}from"./index.20aee0a7.js";import{g as Q,h as _,i as z,j as G,k as H}from"./SysRoleService.a259461f.js";import{u as x}from"./useMutation.esm.cc54b8c5.js";import{u as J}from"./index.1d0dccdc.js";import"./useQuery.esm.56fb3fb4.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const p=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/roleAuth/model/index.ts/atomMainTable",F(void 0));p.debugLabel="atomMainTable";const B=()=>M(p),W=()=>Y(p);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const k=({userId:e,userName:t,isBatch:i,disabled:c})=>{const l=i?"\u6279\u91CF\u53D6\u6D88\u6388\u6743":"\u53D6\u6D88\u6388\u6743",r=A(),n=Number(r.roleId),{canEditSysRole:h}=X(),s=B(),{mutateAsync:m,isLoading:d}=x(async()=>{Array.isArray(e)?await Q({roleId:n,userIds:e}):await _({roleId:n,userId:e})},{onSuccess:()=>{var u;s==null||s.reload(),(u=s==null?void 0:s.clearSelected)==null||u.call(s),y.success("\u53D6\u6D88\u6388\u6743\u6210\u529F")}});return a(U,{accessible:h,children:a(g,{type:"link",danger:!0,disabled:c,icon:a(v,{}),onClick:()=>{L.confirm({title:"\u53D6\u6D88\u6388\u6743",content:C(f,{children:["\u786E\u5B9A\u53D6\u6D88\u6388\u6743\u7528\u6237",a(O.Text,{code:!0,children:t}),"\u5417\uFF1F"]}),onOk:()=>m(),okButtonProps:{loading:d}})},children:l})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Z=()=>{const e=A(),t=Number(e.roleId),[i,{toggle:c}]=J(),[l]=j(),r=T.exports.useRef(),[n,h]=T.exports.useState([]),s=B(),{isLoading:m,mutate:d}=x(()=>z({roleId:t,userIds:n}),{onSuccess:()=>{var o,u,b;(o=r.current)==null||o.reload(),(b=(u=r.current)==null?void 0:u.clearSelected)==null||b.call(u),s==null||s.reload(),c(),y.success("\u6388\u6743\u6210\u529F")}});return C(f,{children:[a(g,{type:"primary",icon:a(q,{}),onClick:()=>{var o;(o=r.current)==null||o.reload(),c()},children:"\u6388\u6743\u7528\u6237"}),a(E,{open:i,title:"\u6388\u6743\u7528\u6237",placement:"left",onClose:c,width:850,footer:a(g,{type:"primary",disabled:n.length===0,loading:m,onClick:()=>d(),children:"\u63D0\u4EA4"}),footerStyle:{textAlign:"right"},children:a(S,{ghost:!0,rowKey:"userId",actionRef:r,columns:[N,P,I,R,l,w],tableAlertRender:!1,rowSelection:{onChange:o=>{h(o)}},request:(...o)=>G(D(...o))})})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const $=({selectedRows:e})=>a(K,{selectedNum:e.length,children:a(k,{userId:e.map(t=>t.userId),userName:e.map(t=>t.userName).join(","),isBatch:!0,disabled:e.length===0})}),ee=()=>{const e=A(),t=Number(e.roleId),i=W(),[c]=j();return a(S,{rowKey:"userId",actionRef:i,params:{roleId:t},columns:[N,P,I,R,c,w,{title:"\u64CD\u4F5C",dataIndex:"option",valueType:"option",render:(l,r)=>a(k,{userId:r.userId,userName:r.userName})}],request:(...l)=>H(D(...l)),tableAlertRender:$,toolbar:{actions:[a(Z,{},"DrawerTableAuth")]}})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ie=()=>a(V,{children:a(ee,{})});export{ie as default};
