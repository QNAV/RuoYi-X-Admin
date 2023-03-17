import{j as a,b as y,M,e as b,o as k,r as E,F as j}from"./antdProComponents-adac7b3f.js";import{V as f,A as n,a0 as w,a1 as v,L as I,G as R,j as P,a2 as S,k as D,b as F,a3 as N,a4 as O,a5 as K,l as V,d as L,m as q,a6 as Q,B as $}from"./index-3a0ef4a4.js";import{u as C,a as G,b as H,D as p,d as W,c as _,e as z,f as J}from"./index-58fb6c52.js";import{r as l,bm as u,B as U,b7 as X}from"./antd-aee96f72.js";import{u as g}from"./useMutation-8cb3539a.js";import"./iconPark-395d73b8.js";import"./wangEditor-93aafe29.js";import"./utils-a67a12c8.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Y=()=>{const e=l.useRef(),{message:t}=u.useApp(),s=C(),{open:o,actionType:i,record:c}=G(),d=H(),m=()=>{var r;i===p.Edit&&((r=e.current)==null||r.resetFields()),d()},T=async r=>{var A;i===p.Add?(await w(r),t.success("新增成功")):(await v({...r,dictId:c.dictId}),t.success("编辑成功")),s==null||s.reload(),d(),(A=e.current)==null||A.resetFields()},{defaultValueSysNormalDisable:h,valueEnumSysNormalDisable:B}=f();return l.useEffect(()=>{o&&i===p.Edit&&l.startTransition(()=>{var r;(r=e.current)==null||r.setFieldsValue(c)})},[o]),a(n,{accessKey:["system:dict:add","system:dict:edit"],children:y(M,{formRef:e,width:500,title:`${W[i]}字典类型`,open:o,modalProps:{onCancel:m,okText:"提交"},onFinish:T,children:[a(b,{name:"dictName",label:"字典名称",rules:[{required:!0}]}),a(b,{name:"dictType",label:"字典类型",rules:[{required:!0}]}),a(k.Group,{name:"status",label:"状态",valueEnum:B,initialValue:h}),a(E,{name:"remark",label:"备注"})]})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Z=()=>{const e=_();return a(n,{accessKey:"system:dict:add",children:a(I,{onClick:e})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ee=({record:e})=>{const t=z();return a(n,{accessKey:"system:dict:edit",children:a(R,{onClick:()=>t(e)})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const te=async e=>{const{data:t}=await S(e,{format:"blob"});await D(t,`user_${new Date().getTime()}.xlsx`)},ae=({searchParams:e})=>{const{message:t}=u.useApp(),{isLoading:s,mutate:o}=g(te,{onSuccess:()=>{t.success("导出成功")}});return a(n,{accessKey:"system:dict:export",children:a(P,{loading:s,onClick:()=>o(e)})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const se=({dictType:e})=>{const t=F();return a(n,{accessKey:"system:dict:query",children:a(N,{onClick:()=>t(e)})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ce=()=>{const{message:e,modal:t}=u.useApp(),{mutateAsync:s,isLoading:o}=g(O,{onSuccess:()=>e.success("刷新成功")});return a(U,{danger:!0,icon:a(X,{}),onClick:()=>{t.confirm({title:"操作确认",content:"刷新缓存后，所有字典数据将重新加载",onOk:()=>s({}),okButtonProps:{loading:o}})},children:"刷新缓存"})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const x=({dictId:e,disabled:t,batch:s})=>{const{message:o,modal:i}=u.useApp(),c=C(),{mutateAsync:d,isLoading:m}=g(K,{onSuccess:()=>{var h;c==null||c.reload(),(h=c==null?void 0:c.clearSelected)==null||h.call(c),o.success("删除成功")}});return a(n,{accessKey:"system:dict:remove",children:a(V,{batch:s,disabled:t,onClick:()=>{i.confirm({title:"操作确认",content:`确定删除字典编号为 ${e} 的字典吗？`,onOk:()=>d({dictIds:e}),okButtonProps:{loading:m}})}})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const oe=()=>{const{valueEnumSysNormalDisable:e}=f();return[{title:"字典编号",dataIndex:"dictId",key:"dictId",valueType:"text",hideInSearch:!0},{title:"字典名称",dataIndex:"dictName",key:"dictName",valueType:"text"},{title:"字典类型",dataIndex:"dictType",key:"dictType",valueType:"text"},{title:"状态",dataIndex:"status",key:"status",valueType:"select",valueEnum:e},{title:"备注",dataIndex:"remark",key:"remark",valueType:"textarea",hideInSearch:!0},{title:"创建时间",dataIndex:"createTime",key:"createTime",valueType:"dateTime",editable:!1,hideInSearch:!0,sorter:!0},{title:"创建时间",dataIndex:"createTimeRange",key:"createTimeRange",valueType:"dateTimeRange",hideInTable:!0},{title:"操作",valueType:"option",render:(t,s)=>y(j,{children:[a(se,{dictType:s.dictType}),a(ee,{record:s}),a(x,{dictId:[s.dictId]})]})}]},ie=({selectedRowKeys:e})=>a(x,{disabled:e.length===0,batch:!0,dictId:e}),re=()=>{const e=J(),t=oe(),[s,o]=l.useState({});return a(L,{rowKey:"dictId",actionRef:e,columns:t,tableAlertOptionRender:ie,request:async(...i)=>{const c=q(...i);return o(c),await Q(c)},toolbar:{actions:[a(ce,{},"ButtonRefresh"),a(ae,{searchParams:s},"ButtonExport"),a(Z,{},"ButtonAdd")]}})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ge=()=>y($,{children:[a(re,{}),a(Y,{})]});export{ge as default};
