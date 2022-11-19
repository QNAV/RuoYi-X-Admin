import{ad as E,af as M,ag as k,r as A,d as a,b3 as u,j as T,bZ as S,aR as h,aK as g,b_ as v,bS as O,b6 as B,b$ as F,b5 as R,b4 as V,b7 as q,b8 as D,k as K,aF as L}from"./index-5129c4ee.js";import{b as m,d as j}from"./index-4d2627ca.js";import{a as _}from"./index-d91dac62.js";import{a as X,u as Y}from"./utils-2e2b94e3.js";import{c as N,d as $,e as G,f as H,g as Q,h as U}from"./System-e98d1e38.js";import{P as W}from"./index-66210ff3.js";import{P as Z}from"./index-5d729dc5.js";import{P as b}from"./index-d05c32d6.js";import{u as I}from"./useMutation.esm-a8c6dcb5.js";import"./utils.esm-88b6f67f.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const C=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/config/model/index.ts/atomMainTableActions",E(void 0));C.debugLabel="atomMainTableActions";const w=()=>M(C),z=()=>_(C),f=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/config/model/index.ts/atomAddOrEditModal",X({open:!1,actionType:"add"}));f.debugLabel="atomAddOrEditModal";const J=()=>M(f),ee=()=>{const e=k(f);return()=>{e({open:!0,actionType:"add"})}},te=()=>{const e=k(f);return t=>{e({open:!0,actionType:"edit",record:t})}},ae=()=>Y(f);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const oe=()=>{var x;const e=A.exports.useRef(),{canAddSysConfig:t,canEditSysConfig:i}=m(),s=w(),{data:c}=j("sys_yes_no"),{open:o,actionType:r,record:p}=J(),y=ae(),l=()=>{var n;r==="edit"&&((n=e.current)==null||n.resetFields()),y()};return A.exports.useEffect(()=>{if(o&&r==="edit"){const n=setTimeout(()=>{var d;(d=e.current)==null||d.setFieldsValue(p),clearTimeout(n)},0)}},[o]),a(u,{accessible:t||i,children:T(S,{formRef:e,width:500,title:r==="add"?"新增字典类型":"编辑字典类型",open:o,modalProps:{onCancel:l,okText:"提交"},onFinish:async n=>{var d;r==="add"?(await N(n),h.success("新增成功")):(await $({...n,configId:p.configId}),h.success("编辑成功")),s==null||s.reload(),y(),(d=e.current)==null||d.resetFields()},children:[a(b,{name:"configName",label:"参数名称",required:!0,rules:[{required:!0}]}),a(b,{name:"configKey",label:"参数键名",required:!0,rules:[{required:!0}]}),a(b,{name:"configValue",label:"参数键值",required:!0,rules:[{required:!0}]}),a(W.Group,{name:"configType",label:"系统内置",valueEnum:(x=c==null?void 0:c.mapData)!=null?x:{},initialValue:c==null?void 0:c.defaultValue}),a(Z,{name:"remark",label:"备注"})]})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const se=()=>{const{canAddSysConfig:e}=m(),t=ee();return a(u,{accessible:e,children:a(g,{icon:a(v,{}),type:"primary",onClick:t,children:"新增"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ce=({record:e})=>{const t=te();return a(g,{type:"link",icon:a(O,{}),onClick:()=>t(e),children:"编辑"})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ie=({searchParams:e})=>{const{canExportSysConfig:t}=m(),{isLoading:i,mutate:s}=I(()=>G(e),{onSuccess:()=>{h.success("导出成功")}});return a(u,{accessible:t,children:a(g,{ghost:!0,type:"primary",icon:a(B,{}),loading:i,onClick:()=>s(),children:"导出当前列表"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ne=()=>{const{canRemoveSysConfig:e}=m();return a(u,{accessible:e,children:a(g,{danger:!0,icon:a(F,{}),onClick:()=>{R.confirm({title:"刷新缓存？",content:"确定刷新缓存吗？",onOk:async()=>{await H(),h.success("刷新成功")}})},children:"刷新缓存"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const P=({configId:e,disabled:t,isBatch:i})=>{const s=i?"批量删除":"删除",{canRemoveSysDict:c}=m(),o=w(),{mutateAsync:r,isLoading:p}=I(async l=>{await Q({configIds:l})},{onSuccess:()=>{var l;o==null||o.reload(),(l=o==null?void 0:o.clearSelected)==null||l.call(o),h.success("删除成功")}});return a(u,{accessible:c,children:a(g,{type:"link",danger:!0,disabled:t,icon:a(V,{}),onClick:()=>{R.confirm({title:"删除参数",content:`确定删除参数编号为 ${e} 的参数吗？`,onOk:async()=>r(e),okButtonProps:{loading:p}})},children:s})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const re=()=>{var t;const{data:e}=j("sys_yes_no");return[{title:"参数主键",dataIndex:"configId",key:"configId",valueType:"text",hideInSearch:!0},{title:"参数名称",dataIndex:"configName",key:"configName",valueType:"text"},{title:"参数键名",dataIndex:"configKey",key:"configKey",valueType:"text"},{title:"参数键值",dataIndex:"configValue",key:"configValue",valueType:"text",hideInSearch:!0},{title:"系统内置",dataIndex:"configType",key:"configType",valueType:"select",valueEnum:(t=e==null?void 0:e.mapData)!=null?t:{}},{title:"备注",dataIndex:"remark",key:"remark",valueType:"textarea",hideInSearch:!0},{title:"创建时间",dataIndex:"createTime",key:"createTime",valueType:"dateTime",editable:!1,hideInSearch:!0,sorter:!0},{title:"创建时间",dataIndex:"createTimeRange",key:"createTimeRange",valueType:"dateTimeRange",hideInTable:!0},{title:"操作",valueType:"option",fixed:"right",render:(i,s)=>T(K,{children:[a(ce,{record:s}),a(P,{configId:s.configId})]})}]},le=({selectedRows:e})=>a(P,{disabled:e.length===0,isBatch:!0,configId:e.map(t=>t.configId).join(",")}),de=()=>{const e=z(),t=re(),[i,s]=A.exports.useState({});return a(q,{rowKey:"configId",actionRef:e,columns:t,tableAlertOptionRender:le,request:async(...c)=>{const o=D(...c);return s(o),await U(o)},toolbar:{actions:[a(ne,{},"ButtonRefresh"),a(ie,{searchParams:i},"ButtonExport"),a(se,{},"ButtonAdd")]}})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Ce=()=>T(L,{children:[a(de,{}),a(oe,{})]});export{Ce as default};
