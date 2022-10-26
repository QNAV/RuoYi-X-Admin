import{h as v,l as j,n as B,o as p,r as M,j as a,af as y,g as T,ay as w,Y as g,$ as k,aO as O,az as R,b6 as S,b7 as D,ag as C,aA as _,aB as V,ah as q,ai as W,ak as Y,al as L,F as X,I as N}from"./index.d51b9652.js";import{j as m,b}from"./index.77c851fd.js";import{a as $}from"./index.9e044ea7.js";import{a as z,u as G}from"./utils.fcf91b58.js";import{u as H}from"./useMutation.esm.28657e88.js";import"./useQuery.esm.75b8d800.js";import"./utils.esm.b0a4fc95.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const f=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/notice/model/index.ts/atomMainTableActions",v(void 0));f.debugLabel="atomMainTableActions";const P=()=>j(f),K=()=>$(f),l=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/notice/model/index.ts/atomAddOrEditModal",z({open:!1,actionType:"add"}));l.debugLabel="atomAddOrEditModal";const Q=()=>j(l),J=()=>{const e=B(l);return()=>{e({open:!0,actionType:"add"})}},U=()=>{const e=B(l);return t=>{e({open:!0,actionType:"edit",record:t})}},Z=()=>G(l);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};async function ee(e,t){return p("/system/notice/add",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...t||{}})}async function te(e,t){return p("/system/notice/edit",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...t||{}})}async function ae(e,t){return p("/system/notice/list",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...t||{}})}async function oe(e,t){return p("/system/notice/remove",{method:"POST",params:{...e},...t||{}})}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const se=()=>{var F,E;const e=M.exports.useRef(),{data:t}=m("sys_notice_type"),{data:s}=m("sys_notice_status"),{canAddSysNotice:i,canEditSysNotice:h}=b(),o=P(),{open:r,actionType:n,record:A}=Q(),c=Z(),x=()=>{var u;n==="edit"&&((u=e.current)==null||u.resetFields()),c()};return M.exports.useEffect(()=>{if(r&&n==="edit"){const u=setTimeout(()=>{var d;(d=e.current)==null||d.setFieldsValue(A),clearTimeout(u)},0)}},[r]),a(y,{accessible:i||h,children:T(w,{formRef:e,width:800,title:n==="add"?"\u65B0\u589E\u516C\u544A":"\u7F16\u8F91\u516C\u544A",open:r,modalProps:{onCancel:x,okText:"\u63D0\u4EA4"},grid:!0,onFinish:async u=>{var d;return n==="add"?(await ee(u),g.success("\u65B0\u589E\u6210\u529F")):(await te({...u,noticeId:A.noticeId}),g.success("\u7F16\u8F91\u6210\u529F")),o==null||o.reload(),c(),(d=e.current)==null||d.resetFields(),!0},children:[a(k,{name:"noticeTitle",label:"\u516C\u544A\u6807\u9898",required:!0,rules:[{required:!0}],colProps:{span:12}}),a(O,{name:"noticeType",label:"\u516C\u544A\u7C7B\u578B",required:!0,rules:[{required:!0}],valueEnum:(F=t==null?void 0:t.mapData)!=null?F:{},colProps:{span:12}}),a(R.Group,{name:"status",label:"\u72B6\u6001",valueEnum:(E=s==null?void 0:s.mapData)!=null?E:{},initialValue:s==null?void 0:s.defaultValue}),a(S,{name:"noticeContent",label:"\u5185\u5BB9",children:a(D,{})})]})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ce=()=>{const{canAddSysNotice:e}=b(),t=J();return a(y,{accessible:e,children:a(C,{icon:a(_,{}),type:"primary",onClick:t,children:"\u65B0\u589E"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ue=({record:e})=>{const t=U();return a(C,{type:"link",icon:a(V,{}),onClick:()=>t(e),children:"\u7F16\u8F91"})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const I=({noticeId:e,disabled:t,isBatch:s})=>{const i=s?"\u6279\u91CF\u5220\u9664":"\u5220\u9664",{canRemoveSysDict:h}=b(),o=P(),{mutateAsync:r,isLoading:n}=H(async c=>{await oe({noticeIds:c})},{onSuccess:()=>{var c;o==null||o.reload(),(c=o==null?void 0:o.clearSelected)==null||c.call(o),g.success("\u5220\u9664\u6210\u529F")}});return a(y,{accessible:h,children:a(C,{type:"link",danger:!0,disabled:t,icon:a(q,{}),onClick:()=>{W.confirm({title:"\u5220\u9664\u516C\u544A\u901A\u77E5",content:`\u786E\u5B9A\u5220\u9664\u516C\u544A\u7F16\u53F7\u4E3A ${e} \u7684\u516C\u544A\u901A\u77E5\u5417\uFF1F`,onOk:async()=>r(e),okButtonProps:{loading:n}})},children:i})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ie=()=>{var s,i;const{data:e}=m("sys_notice_type"),{data:t}=m("sys_notice_status");return[{title:"\u516C\u544A\u7F16\u53F7",dataIndex:"noticeId",key:"noticeId",valueType:"text",hideInSearch:!0},{title:"\u516C\u544A\u6807\u9898",dataIndex:"noticeTitle",key:"noticeTitle",valueType:"text"},{title:"\u516C\u544A\u7C7B\u578B",dataIndex:"noticeType",key:"noticeType",valueType:"select",valueEnum:(s=e==null?void 0:e.mapData)!=null?s:{}},{title:"\u521B\u5EFA\u8005",dataIndex:"createBy",key:"createBy",valueType:"text"},{title:"\u72B6\u6001",dataIndex:"status",key:"status",valueType:"select",valueEnum:(i=t==null?void 0:t.mapData)!=null?i:{}},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",key:"createTime",valueType:"dateTime",editable:!1,hideInSearch:!0,sorter:!0},{title:"\u64CD\u4F5C",valueType:"option",render:(h,o)=>T(X,{children:[a(ue,{record:o}),a(I,{noticeId:o.noticeId})]})}]},ne=({selectedRows:e})=>a(I,{isBatch:!0,disabled:e.length===0,noticeId:e.map(t=>t.noticeId).join(",")}),re=()=>{const e=K(),t=ie();return a(Y,{rowKey:"noticeId",actionRef:e,columns:t,request:(...s)=>ae(L(...s)),tableAlertOptionRender:ne,toolbar:{actions:[a(ce,{},"ButtonAdd")]}})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ye=()=>T(N,{children:[a(re,{}),a(se,{})]});export{ye as default};
