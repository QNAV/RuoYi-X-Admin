import{r as B,j as a,af as h,g,ay as x,Y as d,$ as F,az as j,aK as T,aL as D,ag as r,aC as S,a as k,aW as M,aD as I,aj as P,aE as w,ai as A,ah as v,F as C,aF as R,ak as O,al as N,I as q}from"./index.55c98aee.js";import{a as l}from"./index.a5de79f1.js";import{u as E,a as L,b as V,S as W,c as K,d as z,e as G,f as H,g as Y,h as $,i as J,j as Q}from"./SysDictTypeService.45dfe79e.js";import{P as U}from"./index.42e2545c.js";import{u as b}from"./useMutation.esm.d3760a47.js";import"./useQuery.esm.c15be1e4.js";import"./utils.esm.b2247ccb.js";import"./SysLoginService.a719c65b.js";import"./index.c47676f8.js";import"./utils.ddd569b9.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const X=()=>{const e=B.exports.useRef(),{canAddSysDict:t,canEditSysDict:i}=l(),s=E(),{open:c,actionType:n,record:u}=L(),p=V();return B.exports.useEffect(()=>{var o;c&&n==="edit"&&((o=e.current)==null||o.setFieldsValue(u))},[c]),a(h,{accessible:t||i,children:g(x,{formRef:e,width:500,title:n==="add"?"\u65B0\u589E\u5B57\u5178\u7C7B\u578B":"\u7F16\u8F91\u5B57\u5178\u7C7B\u578B",open:c,modalProps:{onCancel:p,okText:"\u63D0\u4EA4"},onFinish:async o=>{var y;n==="add"?(await W(o),d.success("\u65B0\u589E\u6210\u529F")):(await K({...o,dictId:u.dictId}),d.success("\u7F16\u8F91\u6210\u529F")),s==null||s.reload(),p(),(y=e.current)==null||y.resetFields()},children:[a(F,{name:"dictName",label:"\u5B57\u5178\u540D\u79F0",required:!0,rules:[{required:!0}]}),a(F,{name:"dictType",label:"\u5B57\u5178\u7C7B\u578B",required:!0,rules:[{required:!0}]}),a(j.Group,{name:"status",label:"\u72B6\u6001",valueEnum:T,initialValue:D.ENABLE}),a(U,{name:"remark",label:"\u5907\u6CE8"})]})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Z=()=>{const{canAddSysDict:e}=l(),t=z();return a(h,{accessible:e,children:a(r,{icon:a(S,{}),type:"primary",onClick:t,children:"\u65B0\u589E"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const _=({dictType:e})=>{const t=k();return a(r,{type:"link",icon:a(M,{}),onClick:()=>t(e),children:"\u67E5\u770B"})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ee=({record:e})=>{const t=G();return a(r,{type:"link",icon:a(I,{}),onClick:()=>t(e),children:"\u7F16\u8F91"})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const te=({searchParams:e})=>{const t=l(),{isLoading:i,mutate:s}=b(()=>H(e),{onSuccess:()=>{d.success("\u5BFC\u51FA\u6210\u529F")}});return a(h,{accessible:t.canExportSysPost,children:a(r,{ghost:!0,type:"primary",icon:a(P,{}),loading:i,onClick:()=>s(),children:"\u5BFC\u51FA\u5F53\u524D\u5217\u8868"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ae=()=>{const{canRemoveSysDict:e}=l();return a(h,{accessible:e,children:a(r,{danger:!0,icon:a(w,{}),onClick:()=>{A.confirm({title:"\u786E\u5B9A\u8981\u5237\u65B0\u7F13\u5B58\u5417\uFF1F",content:"\u5237\u65B0\u7F13\u5B58\u540E\uFF0C\u6240\u6709\u5B57\u5178\u6570\u636E\u5C06\u91CD\u65B0\u52A0\u8F7D",onOk:async()=>{await Y(),d.success("\u5237\u65B0\u6210\u529F")}})},children:"\u5237\u65B0\u7F13\u5B58"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const f=({dictId:e,dictName:t,disabled:i,isBatch:s})=>{const c=s?"\u6279\u91CF\u5220\u9664":"\u5220\u9664",{canRemoveSysDict:n}=l(),u=E(),{mutateAsync:p,isLoading:o}=b(async m=>{await $({dictIds:m})},{onSuccess:()=>{var m;u==null||u.reload(),(m=u==null?void 0:u.clearSelected)==null||m.call(u),d.success("\u5220\u9664\u6210\u529F")}});return a(h,{accessible:n,children:a(r,{type:"link",danger:!0,disabled:i,icon:a(v,{}),onClick:()=>{A.confirm({title:"\u5220\u9664\u5B57\u5178",content:g(C,{children:["\u786E\u5B9A\u5220\u9664\u5B57\u5178",a(R.Text,{code:!0,children:t}),"\u5417\uFF1F"]}),onOk:async()=>p(e),okButtonProps:{loading:o}})},children:c})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ce="dictId",ue=({selectedRows:e})=>a(f,{disabled:e.length===0,isBatch:!0,dictId:e.map(t=>t.dictId).join(","),dictName:e.map(t=>t.dictName).join(",")}),se=()=>{const e=J(),[t,i]=B.exports.useState({});return a(O,{rowKey:ce,actionRef:e,columns:[{title:"\u5B57\u5178\u7F16\u53F7",dataIndex:"dictId",key:"dictId",valueType:"text",hideInSearch:!0},{title:"\u5B57\u5178\u540D\u79F0",dataIndex:"dictName",key:"dictName",valueType:"text"},{title:"\u5B57\u5178\u7C7B\u578B",dataIndex:"dictType",key:"dictType",valueType:"text"},{title:"\u72B6\u6001",dataIndex:"status",key:"status",valueType:"select",valueEnum:T},{title:"\u5907\u6CE8",dataIndex:"remark",key:"remark",valueType:"textarea",hideInSearch:!0},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",key:"createTime",valueType:"dateTime",editable:!1,hideInSearch:!0,sorter:!0},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTimeRange",key:"createTimeRange",valueType:"dateTimeRange",hideInTable:!0},{title:"\u64CD\u4F5C",valueType:"option",render:(s,c)=>g(C,{children:[a(_,{dictType:c.dictType}),a(ee,{record:c}),a(f,{dictId:c.dictId,dictName:c.dictName})]})}],tableAlertOptionRender:ue,request:async(...s)=>{const c=N(...s);return i(c),await Q(c)},toolbar:{actions:[a(ae,{},"ButtonRefresh"),a(te,{searchParams:t},"ButtonExport"),a(Z,{},"ButtonAdd")]}})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ye=()=>g(q,{children:[a(se,{}),a(X,{})]});export{ye as default};
