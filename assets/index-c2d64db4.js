import{Q as v,V as S,X as C,aj as M,r as h,a4 as P,j as a,$ as x,b as g,o as I,p as b,bA as R,bB as B,aT as m,f as p,bC as O,bD as F,bE as D,bF as V,bG as N,Z as L,a2 as q,a3 as X,bH as Y,q as G,B as H}from"./index-25c53959.js";import{a as Q,u as $}from"./utils-5f568976.js";import{u as A}from"./useMutation-8db3a36b.js";import{P as f}from"./index-17b7e420.js";import{P as W}from"./index-8e2d7170.js";import{P as Z}from"./index-b383028a.js";import{P as z}from"./index-fe768a44.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const y=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/post/model/index.ts/atomMainTableActions",v(void 0));y.debugLabel="atomMainTableActions";const J=()=>S(y),k=()=>C(y),u=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/post/model/index.ts/atomAddOrEditModal",Q({open:!1,actionType:"add"}));u.debugLabel="atomAddOrEditModal";const K=()=>{const e=M(u);return()=>e({open:!0,actionType:"add"})},U=()=>{const e=M(u);return t=>e({open:!0,actionType:"edit",record:t})},_=()=>$(u),ee=()=>C(u);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const te=()=>{const e=h.useRef(),{open:t,actionType:o,record:c}=ee(),s=_(),n=()=>{var i;o==="edit"&&((i=e.current)==null||i.resetFields()),s()},r=k(),{valueEnumSysNormalDisable:T,defaultValueSysNormalDisable:l}=P(),{mutate:j,isLoading:w}=A(async()=>{var d;const i=await((d=e.current)==null?void 0:d.validateFields());if(i){if(o==="add"){await R(i);return}await B({...i,postId:c.postId})}},{onSuccess:()=>{r==null||r.reload(),n(),b.success(o==="add"?"新增成功":"保存成功")}});return h.useEffect(()=>{if(t&&o==="edit"){const i=setTimeout(()=>{var d;(d=e.current)==null||d.setFieldsValue(c),clearTimeout(i)},0)}},[t]),a(x,{open:t,onCancel:n,okText:"提交",okButtonProps:{loading:w},onOk:()=>j(),title:o==="add"?"新增岗位":"编辑岗位信息",children:g(I,{submitter:!1,formRef:e,children:[a(f,{name:"postName",label:"岗位名称",rules:[{required:!0}]}),a(f,{name:"postCode",label:"岗位编码",rules:[{required:!0}]}),a(W,{name:"postSort",label:"显示顺序",rules:[{required:!0}],initialValue:0}),a(Z.Group,{name:"status",label:"状态",valueEnum:T,initialValue:l}),a(z,{name:"remark",label:"备注"})]})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ae=()=>{const e=K();return a(m,{accessible:!0,children:a(p,{type:"primary",icon:a(O,{}),onClick:e,children:"新增"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const oe=({record:e})=>{const t=U();return a(m,{accessible:!0,children:a(p,{type:"link",icon:a(F,{}),onClick:()=>t(e),children:"编辑"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const se=({searchParams:e})=>{const{isLoading:t,mutate:o}=A(()=>D(e),{onSuccess:()=>{b.success("导出成功")}});return a(m,{accessible:!0,children:a(p,{type:"primary",ghost:!0,icon:a(V,{}),loading:t,onClick:()=>o(),children:"导出当前列表"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const E=({postId:e,isBatch:t,disabled:o})=>{const c=t?"批量删除":"删除",s=k(),{mutateAsync:n,isLoading:r}=A(async l=>{await N({postIds:l})},{onSuccess:()=>{var l;s==null||s.reload(),(l=s==null?void 0:s.clearSelected)==null||l.call(s),b.success("删除成功")}});return a(m,{accessible:!0,children:a(p,{type:"link",danger:!0,disabled:o,icon:a(L,{}),onClick:()=>{x.confirm({title:"删除岗位",content:`确定删除岗位编号为 ${e} 的岗位吗？`,onOk:async()=>n(e),okButtonProps:{loading:r}})},children:c})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const re=()=>{const{valueEnumSysNormalDisable:e}=P();return[{dataIndex:"postId",key:"postId",title:"岗位编号",valueType:"text",hideInSearch:!0},{dataIndex:"postCode",key:"postCode",title:"岗位编码",valueType:"text"},{dataIndex:"postName",key:"postName",title:"岗位名称",valueType:"text"},{dataIndex:"postSort",key:"postSort",title:"显示顺序",valueType:"text",hideInSearch:!0},{title:"状态",dataIndex:"status",key:"status",valueType:"select",valueEnum:e},{title:"备注",dataIndex:"remark",key:"remark",valueType:"textarea",hideInSearch:!0},{title:"创建时间",dataIndex:"createTime",key:"createTime",valueType:"dateTime",editable:!1,hideInSearch:!0,sorter:!0},{title:"操作",valueType:"option",render:(t,o)=>g(G,{children:[a(oe,{record:o}),a(E,{postId:[o.postId]})]})}]},ie=({selectedRowKeys:e})=>a(E,{disabled:e.length===0,isBatch:!0,postId:e}),ce=()=>{const[e,t]=h.useState({}),o=h.useRef(),c=J(),s=re();return a(q,{formRef:o,actionRef:c,rowKey:"postId",request:async(...n)=>{const r=X(...n);return t(r),await Y(r)},columns:s,toolbar:{actions:[a(se,{searchParams:e},"ButtonExport"),a(ae,{},"ButtonAdd")]},tableAlertOptionRender:ie})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ge=()=>g(H,{children:[a(ce,{}),a(te,{})]});export{ge as default};
