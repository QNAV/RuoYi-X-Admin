import{r as l,a4 as f,j as a,Y as n,b as m,al as x,aL as E,p as d,aM as P,ao as j,ap as k,aN as v,a0 as R,E as I,aO as w,aP as S,f as D,as as F,$ as A,aQ as N,a1 as O,a2 as K,a3 as q,aR as L,q as V,B as Q}from"./index-25c53959.js";import{u as b,a as $,b as G,D as u,d as H,c as W,e as Y,f as z}from"./index-46e8e5b4.js";import{P as T}from"./index-17b7e420.js";import{P as J}from"./index-b383028a.js";import{P as U}from"./index-fe768a44.js";import{u as y}from"./useMutation-8db3a36b.js";import"./utils-5f568976.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const X=()=>{const e=l.useRef(),t=b(),{open:c,actionType:s,record:r}=$(),i=G(),p=()=>{var o;s===u.Edit&&((o=e.current)==null||o.resetFields()),i()},h=async o=>{var g;s===u.Add?(await E(o),d.success("新增成功")):(await P({...o,dictId:r.dictId}),d.success("编辑成功")),t==null||t.reload(),i(),(g=e.current)==null||g.resetFields()},{defaultValueSysNormalDisable:B,valueEnumSysNormalDisable:M}=f();return l.useEffect(()=>{c&&s===u.Edit&&l.startTransition(()=>{var o;(o=e.current)==null||o.setFieldsValue(r)})},[c]),a(n,{accessKey:["system:dict:add","system:dict:edit"],children:m(x,{formRef:e,width:500,title:`${H[s]}字典类型`,open:c,modalProps:{onCancel:p,okText:"提交"},onFinish:h,children:[a(T,{name:"dictName",label:"字典名称",rules:[{required:!0}]}),a(T,{name:"dictType",label:"字典类型",rules:[{required:!0}]}),a(J.Group,{name:"status",label:"状态",valueEnum:M,initialValue:B}),a(U,{name:"remark",label:"备注"})]})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Z=()=>{const e=W();return a(n,{accessKey:"system:dict:add",children:a(j,{onClick:e})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const _=({record:e})=>{const t=Y();return a(n,{accessKey:"system:dict:edit",children:a(k,{onClick:()=>t(e)})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ee=({searchParams:e})=>{const{isLoading:t,mutate:c}=y(v,{onSuccess:()=>{d.success("导出成功")}});return a(n,{accessKey:"system:dict:export",children:a(R,{loading:t,onClick:()=>c(e)})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const te=({dictType:e})=>{const t=I();return a(n,{accessKey:"system:dict:query",children:a(w,{onClick:()=>t(e)})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ae=()=>{const{mutateAsync:e,isLoading:t}=y(S,{onSuccess:()=>d.success("刷新成功")});return a(D,{danger:!0,icon:a(F,{}),onClick:()=>{A.confirm({title:"操作确认",content:"刷新缓存后，所有字典数据将重新加载",onOk:()=>e({}),okButtonProps:{loading:t}})},children:"刷新缓存"})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const C=({dictId:e,disabled:t,batch:c})=>{const s=b(),{mutateAsync:r,isLoading:i}=y(N,{onSuccess:()=>{var h;s==null||s.reload(),(h=s==null?void 0:s.clearSelected)==null||h.call(s),d.success("删除成功")}});return a(n,{accessKey:"system:dict:remove",children:a(O,{batch:c,disabled:t,onClick:()=>{A.confirm({title:"操作确认",content:`确定删除字典编号为 ${e} 的字典吗？`,onOk:()=>r({dictIds:e}),okButtonProps:{loading:i}})}})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const se=()=>{const{valueEnumSysNormalDisable:e}=f();return[{title:"字典编号",dataIndex:"dictId",key:"dictId",valueType:"text",hideInSearch:!0},{title:"字典名称",dataIndex:"dictName",key:"dictName",valueType:"text"},{title:"字典类型",dataIndex:"dictType",key:"dictType",valueType:"text"},{title:"状态",dataIndex:"status",key:"status",valueType:"select",valueEnum:e},{title:"备注",dataIndex:"remark",key:"remark",valueType:"textarea",hideInSearch:!0},{title:"创建时间",dataIndex:"createTime",key:"createTime",valueType:"dateTime",editable:!1,hideInSearch:!0,sorter:!0},{title:"创建时间",dataIndex:"createTimeRange",key:"createTimeRange",valueType:"dateTimeRange",hideInTable:!0},{title:"操作",valueType:"option",render:(t,c)=>m(V,{children:[a(te,{dictType:c.dictType}),a(_,{record:c}),a(C,{dictId:[c.dictId]})]})}]},ce=({selectedRowKeys:e})=>a(C,{disabled:e.length===0,batch:!0,dictId:e}),oe=()=>{const e=z(),t=se(),[c,s]=l.useState({});return a(K,{rowKey:"dictId",actionRef:e,columns:t,tableAlertOptionRender:ce,request:async(...r)=>{const i=q(...r);return s(i),await L(i)},toolbar:{actions:[a(ae,{},"ButtonRefresh"),a(ee,{searchParams:c},"ButtonExport"),a(Z,{},"ButtonAdd")]}})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const me=()=>m(Q,{children:[a(oe,{}),a(X,{})]});export{me as default};
