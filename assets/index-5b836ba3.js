import{$ as R,a1 as I,a0 as B,am as x,j as a,a2 as g,an as P,A as p,ao as S,a5 as k,V as l,b as M,p as F,ap as O,r as d,aq as K,ar as V,as as Y,at as q,a3 as L,au as N,a4 as $,av as D,f as X,Y as H,Z as W,a6 as Q,N as U,aw as Z,B as _}from"./index-fe009615.js";import{D as y}from"./index-89d92520.js";import{a as z,u as G}from"./utils-932eedde.js";import{u as C}from"./useMutation-59a0dfa2.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const A=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/config/model/index.ts/atomMainTableActions",R(void 0));A.debugLabel="atomMainTableActions";const j=()=>I(A),J=()=>B(A);var m=(e=>(e[e.Add=0]="Add",e[e.Edit=1]="Edit",e))(m||{});const ee={[y.Add]:"新增",[y.Edit]:"编辑"},u=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/config/model/index.ts/atomAddOrEditModal",z({open:!1,actionType:0}));u.debugLabel="atomAddOrEditModal";const te=()=>I(u),ae=()=>{const e=x(u);return()=>{e({open:!0,actionType:0})}},oe=()=>{const e=x(u);return t=>{e({open:!0,actionType:1,record:t})}},se=()=>G(u);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ce=({record:e})=>{const t=oe();return a(g,{accessKey:"system:config:edit",children:a(P,{onClick:()=>t(e)})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const E=({configIds:e,disabled:t,batch:s})=>{const{modal:c,message:i}=p.useApp(),o=j(),{mutate:n,isLoading:f}=C(S,{onSuccess:()=>{var h;o==null||o.reload(),(h=o==null?void 0:o.clearSelected)==null||h.call(o),i.success("删除成功")}});return a(g,{accessKey:"system:config:remove",children:a(k,{batch:s,disabled:t,onClick:()=>{c.confirm({title:"操作确认",content:`确定删除参数编号为 ${e.join(",")} 的参数吗？`,onOk:()=>n({configIds:e}),okButtonProps:{loading:f}})}})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const[ne]=l({title:"参数主键",dataIndex:"configId",table:{valueType:"text",hideInSearch:!0}}),[ie,,re]=l({title:"参数名称",dataIndex:"configName",table:{valueType:"text"},form:{valueType:"text",formItemProps:{rules:[{required:!0}]}}}),[le,,ue]=l({title:"参数键名",dataIndex:"configKey",table:{valueType:"text"},form:{valueType:"text",formItemProps:{rules:[{required:!0}]}}}),[he,,de]=l({title:"参数键值",dataIndex:"configValue",table:{valueType:"text"},form:{valueType:"text",formItemProps:{rules:[{required:!0}]}}}),v=()=>{const{valueEnumSysYesNo:e}=O();return l({title:"系统内置",dataIndex:"configType",valueEnum:e,table:{valueType:"select"},form:{valueType:"radio",formItemProps:{rules:[{required:!0}]}}})},[me,,ge]=l({title:"备注",dataIndex:"remark",table:{valueType:"textarea",hideInSearch:!0},form:{valueType:"textarea"}}),[pe]=l({title:"创建时间",dataIndex:"createTime",table:{valueType:"dateTime",hideInSearch:!0,sorter:!0}}),[fe]=l({title:"创建时间",dataIndex:"createTimeRange",table:{valueType:"dateTimeRange",hideInTable:!0}}),Te=()=>{const[e]=v();return[ne,ie,le,he,e,me,pe,fe,{title:"操作",valueType:"option",fixed:"right",render:(t,s)=>M(F,{children:[a(ce,{record:s}),a(E,{configIds:[s.configId]})]})}]},Ce=()=>{const[,,e]=v();return[re,ue,de,e,ge]};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Ae=()=>{const{message:e}=p.useApp(),t=d.useRef(),s=j(),{open:c,actionType:i,record:o}=te(),n=se(),f=()=>{var r;i===m.Edit&&((r=t.current)==null||r.resetFields()),n()},T=ee[i],h=async r=>{var b;i===m.Add?await V(r):await Y({...r,configId:o.configId}),n(),(b=t.current)==null||b.resetFields(),s==null||s.reload(),e.success(`${T}成功`)},w=Ce();return d.useEffect(()=>{c&&i===m.Edit&&d.startTransition(()=>{var r;(r=t.current)==null||r.setFieldsValue(o)})},[c]),a(K,{title:`${T}参数设置`,layoutType:"ModalForm",formRef:t,width:500,open:c,modalProps:{onCancel:f,okText:"提交"},onFinish:h,columns:w})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const be=()=>{const e=ae();return a(g,{accessKey:"system:config:add",children:a(q,{onClick:e})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ye=async e=>{const{data:t}=await N(e,{format:"blob"});await $(t,`config_${new Date().getTime()}.xlsx`)},Ie=({searchParams:e})=>{const{message:t}=p.useApp(),{isLoading:s,mutate:c}=C(ye,{onSuccess:()=>{t.success("导出成功")}});return a(g,{accessKey:"system:config:export",children:a(L,{loading:s,onClick:()=>c(e)})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const xe=()=>{const{message:e,modal:t}=p.useApp(),{isLoading:s,mutate:c}=C(D,{onSuccess:()=>{e.success("刷新成功")}});return a(X,{danger:!0,icon:a(H,{}),onClick:()=>{t.confirm({title:"操作确认",content:"确定刷新缓存吗？",onOk:()=>c({}),okButtonProps:{loading:s}})},children:"刷新缓存"})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Me=({selectedRowKeys:e})=>a(E,{disabled:e.length===0,batch:!0,configIds:e}),je=()=>{const e=J(),t=Te(),[s,c]=d.useState({});return a(W,{rowKey:"configId",actionRef:e,columns:t,tableAlertOptionRender:Me,request:async(...i)=>{const{createTimeRange:o,...n}=Q(...i);return U(o)&&(n.beginTime=o[0],n.endTime=o[1]),c(n),await Z(n)},toolbar:{actions:[a(xe,{},"ButtonRefresh"),a(Ie,{searchParams:s},"ButtonExport"),a(be,{},"ButtonAdd")]}})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Be=()=>M(_,{children:[a(je,{}),a(Ae,{})]});export{Be as default};
