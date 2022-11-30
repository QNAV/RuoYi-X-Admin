import{aX as P,aY as M,aj as E,r as m,d4 as w,d5 as R,d as a,b$ as h,j as y,c0 as B,d6 as S,d7 as k,d8 as F,d9 as O,aH as v,c3 as V,c4 as N,da as K,ca as X,aZ as Y,a_ as _,b0 as D,db as L,b1 as $,b9 as f,h as q,av as Q}from"./index-9ee3b490.js";import{a as W}from"./index-ff1f025a.js";import{a as H,u as G}from"./utils-12f1ec3e.js";import{P as Z}from"./index-4863e599.js";import{P as z}from"./index-38e6eed2.js";import{P as J}from"./index-8ce6e771.js";import{u as U}from"./useMutation.esm-bb7a6502.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const p=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/notice/model/index.ts/atomMainTableActions",P(void 0));p.debugLabel="atomMainTableActions";const C=()=>M(p),ee=()=>W(p);var u=(e=>(e[e.Add=0]="Add",e[e.Edit=1]="Edit",e))(u||{});const te={[0]:"新增",[1]:"编辑"},r=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/notice/model/index.ts/atomAddOrEditModal",H({open:!1,actionType:0}));r.debugLabel="atomAddOrEditModal";const ae=()=>M(r),oe=()=>{const e=E(r);return()=>{e({open:!0,actionType:0})}},se=()=>{const e=E(r);return t=>{e({open:!0,actionType:1,record:t})}},ce=()=>G(r);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ie=()=>{const e=m.exports.useRef(),{defaultValueSysNoticeType:t,valueEnumSysNoticeType:s}=w(),{defaultValueSysNoticeStatus:o,valueEnumSysNoticeStatus:d}=R(),c=C(),{open:l,actionType:n,record:g}=ae(),A=ce(),x=()=>{var i;n===u.Edit&&((i=e.current)==null||i.resetFields()),A()},T=te[n],I=async i=>{var b;n===u.Add?await F(i):await O({...i,noticeId:g.noticeId}),A(),(b=e.current)==null||b.resetFields(),c==null||c.reload(),v.success(`${T}成功`)};return m.exports.useEffect(()=>{l&&u.Edit&&m.exports.startTransition(()=>{var i;(i=e.current)==null||i.setFieldsValue(g)})},[l]),a(h,{accessKey:["system:notice:add","system:notice:edit"],children:y(B,{formRef:e,width:800,title:`${T}公告通知`,open:l,modalProps:{onCancel:x,okText:"提交"},grid:!0,onFinish:I,children:[a(Z,{name:"noticeTitle",label:"公告标题",rules:[{required:!0}],colProps:{span:12}}),a(z,{name:"noticeType",label:"公告类型",rules:[{required:!0}],valueEnum:s,initialValue:t,colProps:{span:12}}),a(J.Group,{name:"status",label:"状态",valueEnum:d,initialValue:o}),a(S,{name:"noticeContent",label:"内容",children:a(k,{})})]})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ne=()=>{const e=oe();return a(h,{accessKey:"system:notice:add",children:a(V,{onClick:e})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const re=({record:e})=>{const t=se();return a(h,{accessKey:"system:notice:edit",children:a(N,{onClick:()=>t(e)})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const j=({noticeId:e,disabled:t,batch:s})=>{const o=C(),{mutateAsync:d,isLoading:c}=U(K,{onSuccess:async()=>{var n;o==null||o.reload(),(n=o==null?void 0:o.clearSelected)==null||n.call(o),v.success("删除成功")}});return a(h,{accessKey:"system:notice:remove",children:a(X,{batch:s,disabled:t,icon:a(Y,{}),onClick:()=>{_.confirm({title:"操作确认",content:`确定删除公告编号为 ${e} 的公告通知吗？`,onOk:async()=>d({noticeIds:e}),okButtonProps:{loading:c}})}})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const de=()=>{var s,o;const{data:e}=f("sys_notice_type"),{data:t}=f("sys_notice_status");return[{title:"公告编号",dataIndex:"noticeId",key:"noticeId",valueType:"text",hideInSearch:!0},{title:"公告标题",dataIndex:"noticeTitle",key:"noticeTitle",valueType:"text"},{title:"公告类型",dataIndex:"noticeType",key:"noticeType",valueType:"select",valueEnum:(s=e==null?void 0:e.valueEnum)!=null?s:{}},{title:"创建者",dataIndex:"createBy",key:"createBy",valueType:"text"},{title:"状态",dataIndex:"status",key:"status",valueType:"select",valueEnum:(o=t==null?void 0:t.valueEnum)!=null?o:{}},{title:"创建时间",dataIndex:"createTime",key:"createTime",valueType:"dateTime",editable:!1,hideInSearch:!0,sorter:!0},{title:"操作",valueType:"option",render:(d,c)=>y(q,{children:[a(re,{record:c}),a(j,{noticeId:c.noticeId})]})}]},le=({selectedRows:e})=>a(j,{batch:!0,disabled:e.length===0,noticeId:e.map(t=>t.noticeId).join(",")}),ue=()=>{const e=ee(),t=de();return a(D,{rowKey:"noticeId",actionRef:e,columns:t,request:(...s)=>L($(...s)),tableAlertOptionRender:le,toolbar:{actions:[a(ne,{},"ButtonAdd")]}})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const be=()=>y(Q,{children:[a(ue,{}),a(ie,{})]});export{be as default};
