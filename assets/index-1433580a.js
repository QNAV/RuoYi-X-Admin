import{r as l,ce as f,d as a,bY as n,j as m,bZ as M,cv as j,aE as d,cw as k,c0 as v,c1 as E,cx as P,c3 as I,Y as R,cy as w,cz as S,ax as D,c5 as F,aX as A,cA as N,c7 as O,aZ as K,a_ as V,cB as q,h as L,as as Q}from"./index-17e53f5a.js";import{u as b,a as Y,b as Z,D as u,d as $,c as z,e as G,f as H}from"./index-b95f4814.js";import{P as T}from"./index-4109f5e0.js";import{P as W}from"./index-c47bc734.js";import{P as X}from"./index-fa8bd17a.js";import{u as y}from"./useMutation.esm-4b8826dd.js";import"./index-fcbd28c9.js";import"./utils-579ff210.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const _=()=>{const e=l.exports.useRef(),t=b(),{open:c,actionType:s,record:r}=Y(),i=Z(),p=()=>{var o;s===u.Edit&&((o=e.current)==null||o.resetFields()),i()},h=async o=>{var g;s===u.Add?(await j(o),d.success("新增成功")):(await k({...o,dictId:r.dictId}),d.success("编辑成功")),t==null||t.reload(),i(),(g=e.current)==null||g.resetFields()},{defaultValueSysNormalDisable:C,valueEnumSysNormalDisable:B}=f();return l.exports.useEffect(()=>{c&&s===u.Edit&&l.exports.startTransition(()=>{var o;(o=e.current)==null||o.setFieldsValue(r)})},[c]),a(n,{accessKey:["system:dict:add","system:dict:edit"],children:m(M,{formRef:e,width:500,title:`${$[s]}字典类型`,open:c,modalProps:{onCancel:p,okText:"提交"},onFinish:h,children:[a(T,{name:"dictName",label:"字典名称",rules:[{required:!0}]}),a(T,{name:"dictType",label:"字典类型",rules:[{required:!0}]}),a(W.Group,{name:"status",label:"状态",valueEnum:B,initialValue:C}),a(X,{name:"remark",label:"备注"})]})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const J=()=>{const e=z();return a(n,{accessKey:"system:dict:add",children:a(v,{onClick:e})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const U=({record:e})=>{const t=G();return a(n,{accessKey:"system:dict:edit",children:a(E,{onClick:()=>t(e)})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ee=({searchParams:e})=>{const{isLoading:t,mutate:c}=y(P,{onSuccess:()=>{d.success("导出成功")}});return a(n,{accessKey:"system:dict:export",children:a(I,{loading:t,onClick:()=>c(e)})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const te=({dictType:e})=>{const t=R();return a(n,{accessKey:"system:dict:query",children:a(w,{onClick:()=>t(e)})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ae=()=>{const{mutateAsync:e,isLoading:t}=y(S,{onSuccess:()=>d.success("刷新成功")});return a(D,{danger:!0,icon:a(F,{}),onClick:()=>{A.confirm({title:"操作确认",content:"刷新缓存后，所有字典数据将重新加载",onOk:()=>e({}),okButtonProps:{loading:t}})},children:"刷新缓存"})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const x=({dictId:e,disabled:t,batch:c})=>{const s=b(),{mutateAsync:r,isLoading:i}=y(N,{onSuccess:()=>{var h;s==null||s.reload(),(h=s==null?void 0:s.clearSelected)==null||h.call(s),d.success("删除成功")}});return a(n,{accessKey:"system:dict:remove",children:a(O,{batch:c,disabled:t,onClick:()=>{A.confirm({title:"操作确认",content:`确定删除字典编号为 ${e} 的字典吗？`,onOk:()=>r({dictIds:e}),okButtonProps:{loading:i}})}})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const se=()=>{const{valueEnumSysNormalDisable:e}=f();return[{title:"字典编号",dataIndex:"dictId",key:"dictId",valueType:"text",hideInSearch:!0},{title:"字典名称",dataIndex:"dictName",key:"dictName",valueType:"text"},{title:"字典类型",dataIndex:"dictType",key:"dictType",valueType:"text"},{title:"状态",dataIndex:"status",key:"status",valueType:"select",valueEnum:e},{title:"备注",dataIndex:"remark",key:"remark",valueType:"textarea",hideInSearch:!0},{title:"创建时间",dataIndex:"createTime",key:"createTime",valueType:"dateTime",editable:!1,hideInSearch:!0,sorter:!0},{title:"创建时间",dataIndex:"createTimeRange",key:"createTimeRange",valueType:"dateTimeRange",hideInTable:!0},{title:"操作",valueType:"option",render:(t,c)=>m(L,{children:[a(te,{dictType:c.dictType}),a(U,{record:c}),a(x,{dictId:c.dictId})]})}]},ce=({selectedRows:e})=>a(x,{disabled:e.length===0,batch:!0,dictId:e.map(t=>t.dictId).join(",")}),oe=()=>{const e=H(),t=se(),[c,s]=l.exports.useState({});return a(K,{rowKey:"dictId",actionRef:e,columns:t,tableAlertOptionRender:ce,request:async(...r)=>{const i=V(...r);return s(i),await q(i)},toolbar:{actions:[a(ae,{},"ButtonRefresh"),a(ee,{searchParams:c},"ButtonExport"),a(J,{},"ButtonAdd")]}})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ye=()=>m(Q,{children:[a(oe,{}),a(_,{})]});export{ye as default};