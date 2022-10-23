import{h as M,l as f,aU as v,n as j,r as b,j as a,af as g,g as B,ay as V,Y as E,$ as T,aO as k,aV as I,az as O,ag as F,aA as L,aB as N,aj as Y,ah as X,ai as q,aW as W,ak as _,al as S,aN as $,F as G,I as U}from"./index.a70ab7c0.js";import{a as A,c as w,S as z,d as H,e as K,f as Q,g as J}from"./index.e9975bb5.js";import{a as Z,b as ee}from"./index.bcdf1c7b.js";import{a as te,u as ae}from"./utils.46526998.js";import{P as se}from"./index.2d2dc359.js";import{P as oe}from"./index.8db9a937.js";import{u as P}from"./useMutation.esm.111c925d.js";import{u as ue,o as ce}from"./SysDictTypeService.7216faab.js";import{u as ie}from"./useRequest.7743b98f.js";import"./useQuery.esm.18895cda.js";import"./utils.esm.afa25c85.js";import"./SysLoginService.4a57b47e.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const D=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/dictDetails/model/index.ts/atomMainTableActions",M(void 0));D.debugLabel="atomMainTableActions";const re=()=>f(D),ne=()=>Z(D),x=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/dictDetails/model/index.ts/atomCurDictType",M({dictType:"",dictName:""}));x.debugLabel="atomCurDictType";const de=()=>f(x),le=()=>v(x),C=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/dictDetails/model/index.ts/atomAddOrEditModal",te({actionType:"add",open:!1}));C.debugLabel="atomAddOrEditModal";const he=()=>f(C),me=()=>ae(C),pe=()=>{const e=j(C);return()=>{e({actionType:"add",open:!0})}},ye=()=>{const e=j(C);return t=>{e({actionType:"edit",open:!0,record:t})}};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Te=()=>{var r;const e=b.exports.useRef(),{canEditSysDict:t}=A(),c=re(),{open:s,actionType:d,record:u}=he(),m=me(),p=()=>{var i;d==="edit"&&((i=e.current)==null||i.resetFields()),m()},{dictType:h,dictName:n}=de(),{data:o}=w("sys_normal_disable");return b.exports.useEffect(()=>{if(!s)return;const i=setTimeout(()=>{var l,y;d==="add"?(l=e.current)==null||l.setFieldsValue({dictType:h,dictName:n}):(y=e.current)==null||y.setFieldsValue({...u,dictName:n}),clearTimeout(i)},0)},[s]),a(g,{accessible:t,children:B(V,{formRef:e,width:500,title:"\u65B0\u589E\u5B57\u5178\u6570\u636E",open:s,modalProps:{onCancel:p,okText:"\u63D0\u4EA4"},onFinish:async i=>{var l;d==="add"?(await z(i),E.success("\u65B0\u589E\u6210\u529F")):(await H({...i,dictCode:u.dictCode}),E.success("\u7F16\u8F91\u6210\u529F")),c==null||c.reload(),m(),(l=e.current)==null||l.resetFields()},children:[a(T,{name:"dictName",label:"\u5B57\u5178\u540D\u79F0",readonly:!0}),a(T,{name:"dictType",label:"\u5B57\u5178\u7C7B\u578B",hidden:!0}),a(T,{name:"dictLabel",label:"\u6570\u636E\u6807\u7B7E",rules:[{required:!0}]}),a(T,{name:"dictValue",label:"\u6570\u636E\u952E\u503C",rules:[{required:!0}]}),a(T,{name:"cssClass",label:"\u6837\u5F0F\u5C5E\u6027"}),a(se,{name:"dictSort",label:"\u663E\u793A\u6392\u5E8F",initialValue:0}),a(k,{name:"listClass",label:"\u56DE\u663E\u6837\u5F0F",valueEnum:I,initialValue:"default"}),a(O.Group,{name:"status",label:"\u72B6\u6001",valueEnum:(r=o==null?void 0:o.mapData)!=null?r:{},initialValue:o==null?void 0:o.defaultValue}),a(oe,{name:"remark",label:"\u5907\u6CE8"})]})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ge=()=>{const{canEditSysDict:e}=A(),t=pe();return a(g,{accessible:e,children:a(F,{icon:a(L,{}),type:"primary",onClick:t,children:"\u65B0\u589E"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Ae=({record:e})=>{const{canEditSysDict:t}=A(),c=ye();return a(g,{accessible:t,children:a(F,{type:"link",icon:a(N,{}),onClick:()=>c(e),children:"\u7F16\u8F91"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Ce=({searchParams:e})=>{const{canExportSysPost:t}=A(),{isLoading:c,mutate:s}=P(()=>K(e),{onSuccess:()=>{E.success("\u5BFC\u51FA\u6210\u529F")}});return a(g,{accessible:t,children:a(F,{ghost:!0,type:"primary",icon:a(Y,{}),loading:c,onClick:()=>s(),children:"\u5BFC\u51FA\u5F53\u524D\u5217\u8868"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const R=({dictCode:e,disabled:t,isBatch:c})=>{const s=c?"\u6279\u91CF\u5220\u9664":"\u5220\u9664",{canRemoveSysDict:d}=A(),u=ue(),{mutateAsync:m,isLoading:p}=P(async n=>{await Q({dictCodes:n})},{onSuccess:()=>{var n;u==null||u.reload(),(n=u==null?void 0:u.clearSelected)==null||n.call(u),E.success("\u5220\u9664\u6210\u529F")}});return a(g,{accessible:d,children:a(F,{type:"link",danger:!0,disabled:t,icon:a(X,{}),onClick:()=>{q.confirm({title:"\u5220\u9664\u5B57\u5178\u6570\u636E",content:`\u786E\u5B9A\u5220\u9664\u5B57\u5178\u7F16\u7801\u4E3A ${e} \u7684\u5B57\u5178\u6570\u636E\u5417\uFF1F`,onOk:()=>m(e),okButtonProps:{loading:p}})},children:s})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const be=()=>{var t;const{data:e}=w("sys_normal_disable");return[{title:"\u5B57\u5178\u7F16\u7801",dataIndex:"dictCode",key:"dictCode",valueType:"text",hideInSearch:!0},{title:"\u5B57\u5178\u6807\u7B7E",dataIndex:"dictLabel",key:"dictLabel",valueType:"text"},{title:"\u5B57\u5178\u952E\u503C",dataIndex:"dictValue",key:"dictValue",valueType:"text",hideInSearch:!0},{title:"\u5B57\u5178\u6392\u5E8F",dataIndex:"dictSort",key:"dictSort",valueType:"text",hideInSearch:!0},{title:"\u72B6\u6001",dataIndex:"status",key:"status",valueType:"select",valueEnum:(t=e==null?void 0:e.mapData)!=null?t:{}},{title:"\u5907\u6CE8",dataIndex:"remark",key:"remark",valueType:"textarea",hideInSearch:!0},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",key:"createTime",valueType:"dateTime",hideInSearch:!0,sorter:!0},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTimeRange",key:"createTimeRange",valueType:"dateTimeRange",hideInTable:!0},{title:"\u64CD\u4F5C",valueType:"option",render:(c,s)=>B(G,{children:[a(Ae,{record:s}),a(R,{dictCode:s.dictCode})]})}]},Ee=({selectedRows:e})=>a(R,{disabled:e.length===0,isBatch:!0,dictCode:e.map(t=>t.dictCode).join(",")}),Fe=()=>{const e=W(),[t,c]=b.exports.useState({}),s=ne(),d=be(),u=b.exports.useRef(),[m,p]=le(),{data:h,run:n}=ie(async()=>(await ce()).reduce((r,i)=>(r[i.dictType]=i.dictName,r),{}),{manual:!0,onSuccess:o=>{const r=e.dictType;p({dictType:r,dictName:o[r]});const i=setTimeout(()=>{var l,y;(l=u.current)==null||l.setFieldsValue({dictType:r}),(y=s==null?void 0:s.current)==null||y.reload(),clearTimeout(i)},0)}});return ee("/system/dict/:dictType",()=>{n()}),a(_,{rowKey:"dictCode",actionRef:s,columns:d,params:m,request:async(...o)=>{const r=S(...o);return c(r),await J(S(...o))},tableAlertOptionRender:Ee,manualRequest:!0,toolbar:{actions:[a(Ce,{searchParams:t},"ButtonExport"),a(ge,{},"ButtonAdd")]},headerTitle:a($,{formRef:u,children:a(k,{name:"dictType",valueEnum:h!=null?h:{},allowClear:!1,showSearch:!0,fieldProps:{onChange:o=>{p({dictType:o,dictName:h[o]})}}})})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Ve=()=>B(U,{children:[a(Fe,{}),a(Te,{})]});export{Ve as default};
