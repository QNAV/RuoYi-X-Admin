import{j as a,ai as y,b2 as L,w as g,q as A,az as E,aF as V,aB as v,e as f,F as N,aG as q,b3 as Y,s as w,v as F,x as X,g as R,r as T,aY as W,a1 as C,aN as x,b4 as G,aC as $,aD as z,aE as H,aA as I,aZ as K,b5 as U,a$ as Z,b0 as B,aM as J,M as Q}from"./index.d8db007b.js";import{d as D}from"./index.f7e582d8.js";import{c as _,b as tt,d as et}from"./index.2d5d3df2.js";import{a as at,u as st}from"./utils.063c4bb0.js";import{m as ot,n as ct,o as it,p as rt,C as ut,k as nt,b as dt,l as lt}from"./index.1a05c264.js";import{u as ht,o as mt}from"./index.99187057.js";import{u as O}from"./useMutation.esm.583d3904.js";import{P as pt}from"./index.ebe26516.js";import{P as Ct}from"./index.bbf06bc1.js";import{u as gt}from"./useRequest.dc949c23.js";import"./useQuery.esm.856a18bb.js";import"./utils.esm.1bb47a4e.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};const bt=({record:t})=>{const e=Rt();return a(y,{type:"link",icon:a(L,{}),onClick:()=>e(t),children:"\u7F16\u8F91"})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};async function At(t,e){return g("/system/dict/data/add",{method:"POST",headers:{"Content-Type":"application/json"},data:t,...e||{}})}async function Tt(t,e){return g("/system/dict/data/edit",{method:"POST",headers:{"Content-Type":"application/json"},data:t,...e||{}})}async function yt(t,e){return g("/system/dict/data/export",{method:"POST",headers:{"Content-Type":"application/json"},data:t,...e||{}})}async function Et(t,e){return g("/system/dict/data/list",{method:"POST",headers:{"Content-Type":"application/json"},data:t,...e||{}})}async function ft(t,e){return g("/system/dict/data/remove",{method:"POST",params:{...t},...e||{}})}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};const k=({dictCode:t,dictLabel:e,disabled:u,isBatch:i})=>{const d=i?"\u6279\u91CF\u5220\u9664":"\u5220\u9664",{canRemoveSysDict:n}=D(),s=ht(),{mutateAsync:m,isLoading:h}=O(async c=>{await ft({dictCodes:c})},{onSuccess:()=>{var c;s==null||s.reload(),(c=s==null?void 0:s.clearSelected)==null||c.call(s),A.success("\u5220\u9664\u6210\u529F")}});return a(E,{accessible:n,children:a(y,{type:"link",danger:!0,disabled:u,icon:a(V,{}),onClick:()=>{v.confirm({title:"\u5220\u9664\u5B57\u5178\u6570\u636E",content:f(N,{children:["\u786E\u5B9A\u5220\u9664\u5B57\u5178\u6570\u636E",a(q.Text,{code:!0,children:e}),"\u5417\uFF1F"]}),onOk:async()=>m(t),okButtonProps:{loading:h}})},children:d})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};const Dt=[ot,ct,it,rt,ut,nt,dt,lt,{title:"\u64CD\u4F5C",valueType:"option",render:(t,e)=>f(Y,{children:[a(bt,{record:e}),a(k,{dictCode:e.dictCode,dictLabel:e.dictLabel})]})}];globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};const M=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/dictDetails/model/index.ts/atomMainTableActions",w(void 0));M.debugLabel="atomMainTableActions";const Ft=()=>F(M),Mt=()=>_(M),j=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/dictDetails/model/index.ts/atomCurDictType",w({dictType:"",dictName:""}));j.debugLabel="atomCurDictType";const jt=()=>F(j),St=()=>X(j),b=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/dictDetails/model/index.ts/atomAddOrEditModal",at({actionType:"add",open:!1}));b.debugLabel="atomAddOrEditModal";const Bt=()=>F(b),Pt=()=>st(b),wt=()=>{const t=R(b);return()=>{t({actionType:"add",open:!0})}},Rt=()=>{const t=R(b);return e=>{t({actionType:"edit",open:!0,record:e})}};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};const xt=()=>{const t=T.exports.useRef(),{canEditSysDict:e}=D(),u=Ft(),{open:i,actionType:d,record:n}=Bt(),s=Pt(),{dictType:m,dictName:h}=jt();return T.exports.useEffect(()=>{var r,c,o;i&&d==="add"&&((r=t.current)==null||r.setFieldsValue({dictType:m,dictName:h})),i&&d==="edit"&&((c=t.current)==null||c.setFieldsValue({...n,dictName:h})),i||(o=t.current)==null||o.resetFields()},[i]),a(E,{accessible:e,children:f(W,{formRef:t,width:500,title:"\u65B0\u589E\u5B57\u5178\u6570\u636E",open:i,modalProps:{onCancel:s,okText:"\u63D0\u4EA4"},onFinish:async r=>{var c;d==="add"?(await At(r),A.success("\u65B0\u589E\u6210\u529F")):(await Tt({...r,dictCode:n.dictCode}),A.success("\u7F16\u8F91\u6210\u529F")),u==null||u.reload(),s(),(c=t.current)==null||c.resetFields()},children:[a(C,{name:"dictName",label:"\u5B57\u5178\u540D\u79F0",readonly:!0}),a(C,{name:"dictType",label:"\u5B57\u5178\u7C7B\u578B",hidden:!0}),a(C,{name:"dictLabel",label:"\u6570\u636E\u6807\u7B7E",rules:[{required:!0}]}),a(C,{name:"dictValue",label:"\u6570\u636E\u952E\u503C",rules:[{required:!0}]}),a(C,{name:"cssClass",label:"\u6837\u5F0F\u5C5E\u6027"}),a(pt,{name:"dictSort",label:"\u663E\u793A\u6392\u5E8F",initialValue:0}),a(x,{name:"listClass",label:"\u56DE\u663E\u6837\u5F0F",fieldProps:{options:G},initialValue:"default"}),a($.Group,{name:"status",label:"\u72B6\u6001",valueEnum:z,initialValue:H.ENABLE}),a(Ct,{name:"remark",label:"\u5907\u6CE8"})]})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};const Ot=()=>{const{canEditSysDict:t}=D(),e=wt();return a(E,{accessible:t,children:a(y,{icon:a(I,{}),type:"primary",onClick:e,children:"\u65B0\u589E"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};const kt=({searchParams:t})=>{const e=D(),{isLoading:u,mutate:i}=O(()=>yt(t),{onSuccess:()=>{A.success("\u5BFC\u51FA\u6210\u529F")}});return a(E,{accessible:e.canExportSysPost,children:a(y,{ghost:!0,type:"primary",icon:a(K,{}),loading:u,onClick:()=>i(),children:"\u5BFC\u51FA\u5F53\u524D\u5217\u8868"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};const P="dictCode",Lt=({selectedRows:t})=>a(k,{disabled:t.length===0,isBatch:!0,dictCode:t.map(e=>e.dictCode).join(","),dictLabel:t.map(e=>e.dictLabel).join(",")}),Vt=()=>{const{rowSelection:t,onClick:e}=tt(P),u=U(),[i,d]=T.exports.useState({}),n=Mt(),s=T.exports.useRef(),[m,h]=St(),{data:r,run:c}=gt(async()=>(await mt()).reduce((l,p)=>(l[p.dictType]=p.dictName,l),{}),{manual:!0,onSuccess:o=>{var p,S;const l=u.dictType;h({dictType:l,dictName:o[l]}),(p=s.current)==null||p.setFieldsValue({dictType:l}),(S=n==null?void 0:n.current)==null||S.reload()}});return et("/system/dict/:dictType",()=>{c()}),a(Z,{rowKey:P,actionRef:n,columns:Dt,params:m,request:async(...o)=>{const l=B(...o);return d(l),await Et(B(...o))},tableAlertOptionRender:Lt,rowSelection:t,onRow:o=>({onClick:()=>{e(o)}}),manualRequest:!0,toolbar:{actions:[a(kt,{searchParams:i},"ButtonExport"),a(Ot,{},"ButtonAdd")]},headerTitle:a(J,{formRef:s,children:a(x,{name:"dictType",valueEnum:r!=null?r:{},allowClear:!1,showSearch:!0,fieldProps:{onChange:o=>{h({dictType:o,dictName:r[o]})}}})})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};const Ut=()=>f(Q,{children:[a(Vt,{}),a(xt,{})]});export{Ut as default};
