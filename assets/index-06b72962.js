import{a0 as k,a2 as x,a1 as q,aX as G,an as I,r as y,A as S,aq as N,a8 as B,j as a,aY as $,f as K,b as M,aP as W,aZ as H,a_ as Q,a3 as E,au as U,ao as _,a4 as Z,a$ as z,a5 as J,b0 as ee,a6 as te,b1 as ae,b2 as se,b3 as oe,X as ce,a7 as P,b4 as ie,aM as re,p as ne,B as le}from"./index-9b04425e.js";import{a as de,u as ue}from"./utils-cdbd9712.js";import{P as A}from"./index-9f931991.js";import{P as R}from"./index-8285b044.js";import{P as he}from"./index-039a11a9.js";import{P as F}from"./index-46636d24.js";import{P as me}from"./index-055bc9b3.js";import{u as O}from"./useMutation-4d311f48.js";import{u as pe}from"./useRequest-9131ff3a.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};var V=(e=>(e.NONE="none",e.DEFAULT="default",e.ERROR="error",e.SUCCESS="success",e.PROCESSING="processing",e.WARNING="warning",e))(V||{});const Y=new Map([["none",{text:"无"}],["default",{text:"默认",status:"Default"}],["processing",{text:"进行中",status:"Processing"}],["warning",{text:"警告",status:"Warning"}],["error",{text:"错误",status:"Error"}],["success",{text:"成功",status:"Success"}]]);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const D=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/dictDetails/model/index.ts/atomMainTableActions",k(void 0));D.debugLabel="atomMainTableActions";const X=()=>x(D),ye=()=>q(D),v=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/dictDetails/model/index.ts/atomCurDictType",k({dictType:"",dictName:""}));v.debugLabel="atomCurDictType";const ge=()=>x(v),Te=()=>G(v);var f=(e=>(e[e.Add=0]="Add",e[e.Edit=1]="Edit",e))(f||{});const Ae={[0]:"新增",[1]:"编辑"},b=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/dictDetails/model/index.ts/atomAddOrEditModal",de({actionType:0,open:!1}));b.debugLabel="atomAddOrEditModal";const be=()=>x(b),Ce=()=>ue(b),fe=()=>{const e=I(b);return()=>{e({actionType:0,open:!0})}},Ee=()=>{const e=I(b);return t=>{e({actionType:1,open:!0,record:t})}};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const xe=()=>{const e=y.useRef(),{message:t}=S.useApp(),l=X(),{open:r,actionType:s,record:i}=be(),m=Ce(),T=()=>{var c;s===f.Edit&&((c=e.current)==null||c.resetFields()),m()},g=Ae[s],{dictType:p,dictName:C}=ge(),{valueEnumSysYesNo:d}=N(),{defaultValueSysNormalDisable:o,valueEnumSysNormalDisable:u}=B(),n=async c=>{var h;s===f.Add?await H(c):await Q({...c,dictCode:i.dictCode}),m(),(h=e.current)==null||h.resetFields(),t.success(`${g}成功`),l==null||l.reload()};return y.useEffect(()=>{r&&y.startTransition(()=>{var c,h;s===f.Add?(c=e.current)==null||c.setFieldsValue({dictType:p,dictName:C}):(h=e.current)==null||h.setFieldsValue({...i,dictName:C})})},[r]),a($,{accessible:!0,fallback:a(K,{children:"111"}),children:M(W,{formRef:e,width:500,title:`${g}字典数据`,open:r,modalProps:{onCancel:T,okText:"提交"},onFinish:n,children:[a(A,{name:"dictName",label:"字典名称",readonly:!0}),a(A,{name:"dictType",label:"字典类型",hidden:!0}),a(A,{name:"dictLabel",label:"数据标签",rules:[{required:!0}]}),a(A,{name:"dictValue",label:"数据键值",rules:[{required:!0}]}),a(R.Group,{name:"isDefault",label:"是否默认值",valueEnum:d}),a(A,{name:"cssClass",label:"样式属性"}),a(he,{name:"dictSort",label:"显示排序",initialValue:0}),a(F,{name:"listClass",label:"回显样式",valueEnum:Y,initialValue:V.NONE}),a(R.Group,{name:"status",label:"状态",valueEnum:u,initialValue:o}),a(me,{name:"remark",label:"备注"})]})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Se=()=>{const e=fe();return a(E,{accessKey:"system:dict:edit",children:a(U,{onClick:e})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Me=({record:e})=>{const t=Ee();return a(E,{accessKey:"system:dict:edit",children:a(_,{onClick:()=>t(e)})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const De=async e=>{const{data:t}=await z(e,{format:"blob"});await J(t,`dict_${new Date().getTime()}.xlsx`)},ve=({searchParams:e})=>{const{message:t}=S.useApp(),{isLoading:l,mutate:r}=O(De,{onSuccess:()=>{t.success("导出成功")}});return a(E,{accessKey:"system:dict:export",children:a(Z,{loading:l,onClick:()=>r(e)})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const L=({dictCode:e,disabled:t,batch:l})=>{const{message:r,modal:s}=S.useApp(),i=X(),{mutateAsync:m,isLoading:T}=O(ee,{onSuccess:()=>{var p;i==null||i.reload(),(p=i==null?void 0:i.clearSelected)==null||p.call(i),r.success("删除成功")}});return a(E,{accessKey:"system:dict:edit",children:a(te,{batch:l,disabled:t,onClick:()=>{s.confirm({title:"操作确认",content:`确定删除字典编码为 ${e} 的字典数据吗？`,onOk:()=>m({dictCodes:e}),okButtonProps:{loading:T}})}})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const we=()=>{const{valueEnumSysNormalDisable:e}=B(),{valueEnumSysYesNo:t}=N();return[{title:"字典编码",dataIndex:"dictCode",key:"dictCode",valueType:"text",hideInSearch:!0},{title:"字典标签",dataIndex:"dictLabel",key:"dictLabel",valueType:"text"},{title:"字典键值",dataIndex:"dictValue",key:"dictValue",valueType:"text",hideInSearch:!0},{title:"是否默认值",dataIndex:"isDefault",key:"isDefault",valueType:"radio",valueEnum:t,hideInSearch:!0},{title:"字典排序",dataIndex:"dictSort",key:"dictSort",valueType:"text",hideInSearch:!0},{title:"回显样式",dataIndex:"listClass",key:"listClass",valueType:"select",valueEnum:Y},{title:"状态",dataIndex:"status",key:"status",valueType:"select",valueEnum:e},{title:"备注",dataIndex:"remark",key:"remark",valueType:"textarea",hideInSearch:!0},{title:"创建时间",dataIndex:"createTime",key:"createTime",valueType:"dateTime",hideInSearch:!0,sorter:!0},{title:"创建时间",dataIndex:"createTimeRange",key:"createTimeRange",valueType:"dateTimeRange",hideInTable:!0},{title:"操作",valueType:"option",render:(l,r)=>M(ne,{children:[a(Me,{record:r}),a(L,{dictCode:[r.dictCode]})]})}]},Pe=({selectedRowKeys:e})=>a(L,{disabled:e.length===0,batch:!0,dictCode:e});let j;const Re="/system/dict/:dictType",je=()=>{const e=ae(),[t,l]=y.useState({}),r=se(Re),s=ye(),i=we(),m=y.useRef(),[T,g]=Te(),{data:p,run:C}=pe(async()=>(await oe()).reduce((o,u)=>(o[u.dictType]=u.dictName,o),{}),{ready:!!e.dictType,onSuccess:d=>{const o=e.dictType;g({dictType:o,dictName:d[o]}),y.startTransition(()=>{var u,n,c,h,w;(u=m.current)==null||u.setFieldsValue({dictType:o}),(c=(n=s==null?void 0:s.current)==null?void 0:n.clearSelected)==null||c.call(n),(w=(h=s.current)==null?void 0:h.reloadAndRest)==null||w.call(h)})}});return y.useEffect(()=>{e.dictType===void 0||e.dictType===j||(j=e.dictType,C())},[r]),a(ce,{rowKey:"dictCode",actionRef:s,columns:i,params:T,request:async(...d)=>{const o=P(...d);return l(o),await ie(P(...d))},tableAlertOptionRender:Pe,manualRequest:!0,toolbar:{actions:[a(ve,{searchParams:t},"ButtonExport"),a(Se,{},"ButtonAdd")]},headerTitle:a(re,{formRef:m,children:a(F,{name:"dictType",valueEnum:p??{},allowClear:!1,showSearch:!0,fieldProps:{onChange:d=>{var o,u,n,c;(u=(o=s==null?void 0:s.current)==null?void 0:o.clearSelected)==null||u.call(o),(c=(n=s.current)==null?void 0:n.reset)==null||c.call(n),g({dictType:d,dictName:p[d]})}}})})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Le=()=>M(le,{children:[a(je,{}),a(xe,{})]});export{Le as default};
