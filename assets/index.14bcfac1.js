import{r as d,j as a,aw as l,e as b,ax as C,q as n,a1 as A,ay as F,aN as f,aW as y,ai as m,aB as E,aD as T,aE as M,aF as D,aI as P,aK as S,M as j}from"./index.b8b57d0a.js";import{d as h}from"./index.025b1f79.js";import{u as w,a as x,b as R,S as k,c as O,d as q,e as I,f as N,g as V,t as v,h as L,B as W}from"./index.5ed05b55.js";import{P as K}from"./index.328e7cde.js";import{c as G}from"./index.c623ed89.js";import{u as H}from"./useMutation.esm.6965c8ad.js";import"./useQuery.esm.0c9039e0.js";import"./utils.esm.315e4825.js";import"./utils.05658db7.js";import"./index.1ae84bf1.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};const z=()=>{const t=d.exports.useRef(),{canAddSysDict:e,canEditSysDict:o}=h(),s=w(),{open:u,actionType:c,record:i}=x(),p=R();return d.exports.useEffect(()=>{var r;u&&c==="edit"&&((r=t.current)==null||r.setFieldsValue(i))},[u]),a(l,{accessible:e||o,children:b(C,{formRef:t,width:500,title:c==="add"?"\u65B0\u589E\u5B57\u5178\u7C7B\u578B":"\u7F16\u8F91\u5B57\u5178\u7C7B\u578B",open:u,modalProps:{onCancel:p,okText:"\u63D0\u4EA4"},onFinish:async r=>{var B;c==="add"?(await k(r),n.success("\u65B0\u589E\u6210\u529F")):(await O({...r,dictId:i.dictId}),n.success("\u7F16\u8F91\u6210\u529F")),s==null||s.reload(),p(),(B=t.current)==null||B.resetFields()},children:[a(A,{name:"dictName",label:"\u5B57\u5178\u540D\u79F0",required:!0,rules:[{required:!0}]}),a(A,{name:"dictType",label:"\u5B57\u5178\u7C7B\u578B",required:!0,rules:[{required:!0}]}),a(F.Group,{name:"status",label:"\u72B6\u6001",valueEnum:f,initialValue:y.ENABLE}),a(K,{name:"remark",label:"\u5907\u6CE8"})]})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};const J=()=>{const{canAddSysDict:t}=h(),e=q();return a(l,{accessible:t,children:a(m,{icon:a(E,{}),type:"primary",onClick:e,children:"\u65B0\u589E"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};const Q=({searchParams:t})=>{const e=h(),{isLoading:o,mutate:s}=H(()=>I(t),{onSuccess:()=>{n.success("\u5BFC\u51FA\u6210\u529F")}});return a(l,{accessible:e.canExportSysPost,children:a(m,{ghost:!0,type:"primary",icon:a(T,{}),loading:o,onClick:()=>s(),children:"\u5BFC\u51FA\u5F53\u524D\u5217\u8868"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};const U=()=>{const{canRemoveSysDict:t}=h();return a(l,{accessible:t,children:a(m,{danger:!0,icon:a(M,{}),onClick:()=>{D.confirm({title:"\u786E\u5B9A\u8981\u5237\u65B0\u7F13\u5B58\u5417\uFF1F",content:"\u5237\u65B0\u7F13\u5B58\u540E\uFF0C\u6240\u6709\u5B57\u5178\u6570\u636E\u5C06\u91CD\u65B0\u52A0\u8F7D",onOk:async()=>{await N(),n.success("\u5237\u65B0\u6210\u529F")}})},children:"\u5237\u65B0\u7F13\u5B58"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};const g="dictId",X=({selectedRows:t})=>a(W,{disabled:t.length===0,isBatch:!0,dictId:t.map(e=>e.dictId).join(","),dictName:t.map(e=>e.dictName).join(",")}),Y=()=>{const{rowSelection:t,onClick:e}=G(g),o=V(),[s,u]=d.exports.useState({});return a(P,{rowKey:g,actionRef:o,columns:v,tableAlertOptionRender:X,rowSelection:t,onRow:c=>({onClick:()=>{e(c)}}),request:async(...c)=>{const i=S(...c);return u(i),await L(i)},toolbar:{actions:[a(U,{},"ButtonRefresh"),a(Q,{searchParams:s},"ButtonExport"),a(J,{},"ButtonAdd")]}})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};const it=()=>b(j,{children:[a(Y,{}),a(z,{})]});export{it as default};