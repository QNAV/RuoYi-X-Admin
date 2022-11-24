import{aX as w,aY as f,cz as I,aj as k,r as b,b9 as R,d as a,af as g,j as x,b_ as V,cA as O,aH as A,cB as B,cC as L,aA as C,c1 as X,bT as Y,cD as N,a$ as _,cE as q,aZ as G,a_ as H,cF as $,cG as z,b0 as K,b1 as j,cH as Q,cl as U,h as W,av as Z}from"./index-c0bbb246.js";import{a as J,b as ee,c as te}from"./index-0c7706f3.js";import{a as ae,u as se}from"./utils-87ba727f.js";import{P as T}from"./index-4e68db6f.js";import{P as oe}from"./index-11f76dd0.js";import{P as v}from"./index-ba6cb37e.js";import{P as ce}from"./index-34a801cc.js";import{P as ie}from"./index-bb3cdb5c.js";import{u as E}from"./useMutation.esm-49983955.js";import{u as re}from"./useRequest-605f2fdc.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const D=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/dictDetails/model/index.ts/atomMainTableActions",w(void 0));D.debugLabel="atomMainTableActions";const S=()=>f(D),ne=()=>J(D),M=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/dictDetails/model/index.ts/atomCurDictType",w({dictType:"",dictName:""}));M.debugLabel="atomCurDictType";const le=()=>f(M),de=()=>I(M),y=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/dictDetails/model/index.ts/atomAddOrEditModal",ae({actionType:"add",open:!1}));y.debugLabel="atomAddOrEditModal";const ue=()=>f(y),he=()=>se(y),me=()=>{const e=k(y);return()=>{e({actionType:"add",open:!0})}},pe=()=>{const e=k(y);return t=>{e({actionType:"edit",open:!0,record:t})}};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Te=()=>{var r;const e=b.exports.useRef(),t=S(),{open:n,actionType:o,record:c}=ue(),u=he(),h=()=>{var s;o==="edit"&&((s=e.current)==null||s.resetFields()),u()},{dictType:m,dictName:i}=le(),{data:d}=R("sys_normal_disable");return b.exports.useEffect(()=>{if(!n)return;const s=setTimeout(()=>{var l,p;o==="add"?(l=e.current)==null||l.setFieldsValue({dictType:m,dictName:i}):(p=e.current)==null||p.setFieldsValue({...c,dictName:i}),clearTimeout(s)},0)},[n]),a(g,{accessible:!0,children:x(V,{formRef:e,width:500,title:"新增字典数据",open:n,modalProps:{onCancel:h,okText:"提交"},onFinish:async s=>{var l;o==="add"?(await O(s),A.success("新增成功")):(await B({...s,dictCode:c.dictCode}),A.success("编辑成功")),t==null||t.reload(),u(),(l=e.current)==null||l.resetFields()},children:[a(T,{name:"dictName",label:"字典名称",readonly:!0}),a(T,{name:"dictType",label:"字典类型",hidden:!0}),a(T,{name:"dictLabel",label:"数据标签",rules:[{required:!0}]}),a(T,{name:"dictValue",label:"数据键值",rules:[{required:!0}]}),a(T,{name:"cssClass",label:"样式属性"}),a(oe,{name:"dictSort",label:"显示排序",initialValue:0}),a(v,{name:"listClass",label:"回显样式",valueEnum:L,initialValue:"default"}),a(ce.Group,{name:"status",label:"状态",valueEnum:(r=d==null?void 0:d.mapData)!=null?r:{},initialValue:d==null?void 0:d.defaultValue}),a(ie,{name:"remark",label:"备注"})]})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ge=()=>{const e=me();return a(g,{accessible:!0,children:a(C,{icon:a(X,{}),type:"primary",onClick:e,children:"新增"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ye=({record:e})=>{const t=pe();return a(g,{accessible:!0,children:a(C,{type:"link",icon:a(Y,{}),onClick:()=>t(e),children:"编辑"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const be=({searchParams:e})=>{const{isLoading:t,mutate:n}=E(()=>N(e),{onSuccess:()=>{A.success("导出成功")}});return a(g,{accessible:!0,children:a(C,{ghost:!0,type:"primary",icon:a(_,{}),loading:t,onClick:()=>n(),children:"导出当前列表"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const F=({dictCode:e,disabled:t,isBatch:n})=>{const o=n?"批量删除":"删除",c=S(),{mutateAsync:u,isLoading:h}=E(async i=>{await q({dictCodes:i})},{onSuccess:()=>{var i;c==null||c.reload(),(i=c==null?void 0:c.clearSelected)==null||i.call(c),A.success("删除成功")}});return a(g,{accessible:!0,children:a(C,{type:"link",danger:!0,disabled:t,icon:a(G,{}),onClick:()=>{H.confirm({title:"删除字典数据",content:`确定删除字典编码为 ${e} 的字典数据吗？`,onOk:()=>u(e),okButtonProps:{loading:h}})},children:o})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Ae=()=>{var t;const{data:e}=R("sys_normal_disable");return[{title:"字典编码",dataIndex:"dictCode",key:"dictCode",valueType:"text",hideInSearch:!0},{title:"字典标签",dataIndex:"dictLabel",key:"dictLabel",valueType:"text"},{title:"字典键值",dataIndex:"dictValue",key:"dictValue",valueType:"text",hideInSearch:!0},{title:"字典排序",dataIndex:"dictSort",key:"dictSort",valueType:"text",hideInSearch:!0},{title:"状态",dataIndex:"status",key:"status",valueType:"select",valueEnum:(t=e==null?void 0:e.mapData)!=null?t:{}},{title:"备注",dataIndex:"remark",key:"remark",valueType:"textarea",hideInSearch:!0},{title:"创建时间",dataIndex:"createTime",key:"createTime",valueType:"dateTime",hideInSearch:!0,sorter:!0},{title:"创建时间",dataIndex:"createTimeRange",key:"createTimeRange",valueType:"dateTimeRange",hideInTable:!0},{title:"操作",valueType:"option",render:(n,o)=>x(W,{children:[a(ye,{record:o}),a(F,{dictCode:o.dictCode})]})}]},Ce=({selectedRows:e})=>a(F,{disabled:e.length===0,isBatch:!0,dictCode:e.map(t=>t.dictCode).join(",")}),fe=()=>{const e=$(),[t,n]=b.exports.useState({}),o=ne(),c=Ae(),u=b.exports.useRef(),[h,m]=de(),{data:i,run:d}=re(async()=>(await z()).reduce((s,l)=>(s[l.dictType]=l.dictName,s),{}),{manual:!0,onSuccess:r=>{const s=e.dictType;m({dictType:s,dictName:r[s]});const l=setTimeout(()=>{var p,P;(p=u.current)==null||p.setFieldsValue({dictType:s}),(P=o==null?void 0:o.current)==null||P.reload(),clearTimeout(l)},0)}});return ee(()=>{console.log("activated"),d()}),te(()=>{console.log("deactivated")}),a(K,{rowKey:"dictCode",actionRef:o,columns:c,params:h,request:async(...r)=>{const s=j(...r);return n(s),await Q(j(...r))},tableAlertOptionRender:Ce,manualRequest:!0,toolbar:{actions:[a(be,{searchParams:t},"ButtonExport"),a(ge,{},"ButtonAdd")]},headerTitle:a(U,{formRef:u,children:a(v,{name:"dictType",valueEnum:i!=null?i:{},allowClear:!1,showSearch:!0,fieldProps:{onChange:r=>{m({dictType:r,dictName:i[r]})}}})})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Se=()=>x(Z,{children:[a(fe,{}),a(Te,{})]});export{Se as default};