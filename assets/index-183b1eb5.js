import{aU as v,aV as C,ag as M,r as l,bX as E,d as a,bY as d,j as p,bZ as P,b_ as w,b$ as S,aE as g,c0 as O,c1 as K,c2 as V,c3 as F,c4 as Y,ax as N,c5 as L,aX as j,c6 as X,c7 as q,aZ as $,a_ as D,c8 as U,h as W,as as Z}from"./index-17e53f5a.js";import{a as _}from"./index-fcbd28c9.js";import{D as x}from"./index-b95f4814.js";import{a as G,u as H}from"./utils-579ff210.js";import{P as Q}from"./index-c47bc734.js";import{P as z}from"./index-fa8bd17a.js";import{P as f}from"./index-4109f5e0.js";import{u as y}from"./useMutation.esm-4b8826dd.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const A=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/config/model/index.ts/atomMainTableActions",v(void 0));A.debugLabel="atomMainTableActions";const k=()=>C(A),J=()=>_(A);var u=(e=>(e[e.Add=0]="Add",e[e.Edit=1]="Edit",e))(u||{});const ee={[x.Add]:"新增",[x.Edit]:"编辑"},h=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/config/model/index.ts/atomAddOrEditModal",G({open:!1,actionType:0}));h.debugLabel="atomAddOrEditModal";const te=()=>C(h),ae=()=>{const e=M(h);return()=>{e({open:!0,actionType:0})}},oe=()=>{const e=M(h);return t=>{e({open:!0,actionType:1,record:t})}},se=()=>H(h);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ce=()=>{const e=l.exports.useRef(),t=k(),{defaultValueSysYesNo:s,valueEnumSysYesNo:o}=E(),{open:r,actionType:c,record:m}=te(),n=se(),R=()=>{var i;c===u.Edit&&((i=e.current)==null||i.resetFields()),n()},T=ee[c],B=async i=>{var b;c===u.Add?await w(i):await S({...i,configId:m.configId}),n(),(b=e.current)==null||b.resetFields(),t==null||t.reload(),g.success(`${T}成功`)};return l.exports.useEffect(()=>{r&&c===u.Edit&&l.exports.startTransition(()=>{var i;(i=e.current)==null||i.setFieldsValue(m)})},[r]),a(d,{accessKey:["system:config:add","system:config:edit"],children:p(P,{formRef:e,width:500,title:`${T}参数设置`,open:r,modalProps:{onCancel:R,okText:"提交"},onFinish:B,children:[a(f,{name:"configName",label:"参数名称",rules:[{required:!0}]}),a(f,{name:"configKey",label:"参数键名",rules:[{required:!0}]}),a(f,{name:"configValue",label:"参数键值",rules:[{required:!0}]}),a(Q.Group,{name:"configType",label:"系统内置",valueEnum:o,initialValue:s}),a(z,{name:"remark",label:"备注"})]})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ie=()=>{const e=ae();return a(d,{accessKey:"system:config:add",children:a(O,{onClick:e})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const re=({record:e})=>{const t=oe();return a(d,{accessKey:"system:config:edit",children:a(K,{onClick:()=>t(e)})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ne=({searchParams:e})=>{const{isLoading:t,mutate:s}=y(()=>V(e),{onSuccess:()=>{g.success("导出成功")}});return a(d,{accessKey:"system:config:export",children:a(F,{loading:t,onClick:()=>s()})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const de=()=>{const{isLoading:e,mutateAsync:t}=y(Y,{onSuccess:()=>{g.success("刷新成功")}});return a(N,{danger:!0,icon:a(L,{}),onClick:()=>{j.confirm({title:"操作确认",content:"确定刷新缓存吗？",onOk:()=>t({}),okButtonProps:{loading:e}})},children:"刷新缓存"})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const I=({configId:e,disabled:t,batch:s})=>{const o=k(),{mutateAsync:r,isLoading:c}=y(X,{onSuccess:()=>{var n;o==null||o.reload(),(n=o==null?void 0:o.clearSelected)==null||n.call(o),g.success("删除成功")}});return a(d,{accessKey:"system:config:remove",children:a(q,{batch:s,disabled:t,onClick:()=>{j.confirm({title:"操作确认",content:`确定删除参数编号为 ${e} 的参数吗？`,onOk:()=>r({configIds:e}),okButtonProps:{loading:c}})}})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const he=()=>{const{valueEnumSysYesNo:e}=E();return[{title:"参数主键",dataIndex:"configId",key:"configId",valueType:"text",hideInSearch:!0},{title:"参数名称",dataIndex:"configName",key:"configName",valueType:"text"},{title:"参数键名",dataIndex:"configKey",key:"configKey",valueType:"text"},{title:"参数键值",dataIndex:"configValue",key:"configValue",valueType:"text",hideInSearch:!0},{title:"系统内置",dataIndex:"configType",key:"configType",valueType:"select",valueEnum:e},{title:"备注",dataIndex:"remark",key:"remark",valueType:"textarea",hideInSearch:!0},{title:"创建时间",dataIndex:"createTime",key:"createTime",valueType:"dateTime",editable:!1,hideInSearch:!0,sorter:!0},{title:"创建时间",dataIndex:"createTimeRange",key:"createTimeRange",valueType:"dateTimeRange",hideInTable:!0},{title:"操作",valueType:"option",fixed:"right",render:(t,s)=>p(W,{children:[a(re,{record:s}),a(I,{configId:s.configId})]})}]},le=({selectedRows:e})=>a(I,{disabled:e.length===0,batch:!0,configId:e.map(t=>t.configId).join(",")}),ue=()=>{const e=J(),t=he(),[s,o]=l.exports.useState({});return a($,{rowKey:"configId",actionRef:e,columns:t,tableAlertOptionRender:le,request:async(...r)=>{const c=D(...r);return o(c),await U(c)},toolbar:{actions:[a(de,{},"ButtonRefresh"),a(ne,{searchParams:s},"ButtonExport"),a(ie,{},"ButtonAdd")]}})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const xe=()=>p(Z,{children:[a(ue,{}),a(ce,{})]});export{xe as default};