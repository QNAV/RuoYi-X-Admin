import{r as l,a as o,j as p,F as v}from"./jsx-runtime-06f68cbc.js";import{bH as P,ag as m,bI as w,bJ as S,bd as K,Y as O,bK as F,bc as x,be as V,bf as Y,ay as N}from"./index-6fe704bc.js";import{A as d}from"./index-2a88ac4e.js";import{f as M}from"./index-512b82d5.js";import{b as L}from"./index-431aa2ed.js";import{D as C}from"./index-17f30848.js";import{b as q,c as E,u as j,f as X,g as D,h as $,i as H,j as W,k as G}from"./react-8fc26eed.js";import{a as J,u as Q}from"./utils-75bcec49.js";import{P as U}from"./index-90b56d94.js";import{P as z}from"./index-be9792c9.js";import{P as f}from"./index-1e5188af.js";import{u as y}from"./useMutation-72610ef8.js";import{j as Z}from"./index-58ea63b0.js";import"./utils-1fed7460.js";import"./mutation-2d78eeb5.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const A=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/config/model/index.ts/atomMainTableActions",q(void 0));A.debugLabel="atomMainTableActions";const k=()=>E(A),_=()=>L(A);var u=(e=>(e[e.Add=0]="Add",e[e.Edit=1]="Edit",e))(u||{});const ee={[C.Add]:"新增",[C.Edit]:"编辑"},h=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/config/model/index.ts/atomAddOrEditModal",J({open:!1,actionType:0}));h.debugLabel="atomAddOrEditModal";const te=()=>E(h),oe=()=>{const e=j(h);return()=>{e({open:!0,actionType:0})}},ae=()=>{const e=j(h);return t=>{e({open:!0,actionType:1,record:t})}},se=()=>Q(h);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ce=()=>{const e=l.useRef(),t=k(),{defaultValueSysYesNo:s,valueEnumSysYesNo:a}=M(),{open:r,actionType:c,record:g}=te(),n=se(),R=()=>{var i;c===u.Edit&&((i=e.current)==null||i.resetFields()),n()},T=ee[c],B=async i=>{var b;c===u.Add?await X(i):await D({...i,configId:g.configId}),n(),(b=e.current)==null||b.resetFields(),t==null||t.reload(),m.success(`${T}成功`)};return l.useEffect(()=>{r&&c===u.Edit&&l.startTransition(()=>{var i;(i=e.current)==null||i.setFieldsValue(g)})},[r]),o(d,{accessKey:["system:config:add","system:config:edit"],children:p(P,{formRef:e,width:500,title:`${T}参数设置`,open:r,modalProps:{onCancel:R,okText:"提交"},onFinish:B,children:[o(f,{name:"configName",label:"参数名称",rules:[{required:!0}]}),o(f,{name:"configKey",label:"参数键名",rules:[{required:!0}]}),o(f,{name:"configValue",label:"参数键值",rules:[{required:!0}]}),o(U.Group,{name:"configType",label:"系统内置",valueEnum:a,initialValue:s}),o(z,{name:"remark",label:"备注"})]})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ie=()=>{const e=oe();return o(d,{accessKey:"system:config:add",children:o(w,{onClick:e})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const re=({record:e})=>{const t=ae();return o(d,{accessKey:"system:config:edit",children:o(S,{onClick:()=>t(e)})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ne=({searchParams:e})=>{const{isLoading:t,mutate:s}=y(()=>$(e),{onSuccess:()=>{m.success("导出成功")}});return o(d,{accessKey:"system:config:export",children:o(K,{loading:t,onClick:()=>s()})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const de=()=>{const{isLoading:e,mutateAsync:t}=y(H,{onSuccess:()=>{m.success("刷新成功")}});return o(O,{danger:!0,icon:o(F,{}),onClick:()=>{x.confirm({title:"操作确认",content:"确定刷新缓存吗？",onOk:()=>t({}),okButtonProps:{loading:e}})},children:"刷新缓存"})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const I=({configId:e,disabled:t,batch:s})=>{const a=k(),{mutateAsync:r,isLoading:c}=y(W,{onSuccess:()=>{var n;a==null||a.reload(),(n=a==null?void 0:a.clearSelected)==null||n.call(a),m.success("删除成功")}});return o(d,{accessKey:"system:config:remove",children:o(V,{batch:s,disabled:t,onClick:()=>{x.confirm({title:"操作确认",content:`确定删除参数编号为 ${e} 的参数吗？`,onOk:()=>r({configIds:e}),okButtonProps:{loading:c}})}})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const he=()=>{const{valueEnumSysYesNo:e}=M();return[{title:"参数主键",dataIndex:"configId",key:"configId",valueType:"text",hideInSearch:!0},{title:"参数名称",dataIndex:"configName",key:"configName",valueType:"text"},{title:"参数键名",dataIndex:"configKey",key:"configKey",valueType:"text"},{title:"参数键值",dataIndex:"configValue",key:"configValue",valueType:"text",hideInSearch:!0},{title:"系统内置",dataIndex:"configType",key:"configType",valueType:"select",valueEnum:e},{title:"备注",dataIndex:"remark",key:"remark",valueType:"textarea",hideInSearch:!0},{title:"创建时间",dataIndex:"createTime",key:"createTime",valueType:"dateTime",editable:!1,hideInSearch:!0,sorter:!0},{title:"创建时间",dataIndex:"createTimeRange",key:"createTimeRange",valueType:"dateTimeRange",hideInTable:!0},{title:"操作",valueType:"option",fixed:"right",render:(t,s)=>p(v,{children:[o(re,{record:s}),o(I,{configId:[s.configId]})]})}]},le=({selectedRows:e})=>o(I,{disabled:e.length===0,batch:!0,configId:e.map(t=>t.configId)}),ue=()=>{const e=_(),t=he(),[s,a]=l.useState({});return o(Y,{rowKey:"configId",actionRef:e,columns:t,tableAlertOptionRender:le,request:async(...r)=>{const c=Z(...r);return a(c),await G(c)},toolbar:{actions:[o(de,{},"ButtonRefresh"),o(ne,{searchParams:s},"ButtonExport"),o(ie,{},"ButtonAdd")]}})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Re=()=>p(N,{children:[o(ue,{}),o(ce,{})]});export{Re as default};
