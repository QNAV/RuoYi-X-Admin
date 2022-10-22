import{h as I,l as x,n as M,j as a,af as A,ag as g,aG as w,aH as B,o as d,Y as T,aj as O,ah as v,ai as j,g as n,F as C,ak as R,r as m,W as N,$ as P,aD as V,aN as k,aO as L,I as q,aq as W,am as Y}from"./index.0ef95268.js";import{a as y}from"./index.7fc617d2.js";import{a as X}from"./index.a89017a5.js";import{a as G,u as H}from"./utils.b3a24505.js";import{u as b}from"./useMutation.esm.6ead3839.js";import{P as K}from"./index.44eddc58.js";import{P as $}from"./index.b09fcd10.js";import"./useQuery.esm.b9eab7c7.js";import"./utils.esm.39e0d893.js";import"./SysLoginService.d952cf4a.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const f=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/post/model/index.ts/AtomMainTableActions",I(void 0));f.debugLabel="AtomMainTableActions";const z=()=>X(f),D=()=>x(f),l=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/post/model/index.ts/AtomAddOrEditModal",G({open:!1,actionType:"add"}));l.debugLabel="AtomAddOrEditModal";const J=()=>{const e=M(l);return()=>e({open:!0,actionType:"add"})},Q=()=>{const e=M(l);return t=>e({open:!0,actionType:"edit",record:t})},U=()=>H(l),Z=()=>x(l);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const _=()=>{const e=y(),t=J();return a(A,{accessible:e.canAddSysPost,children:a(g,{type:"primary",icon:a(w,{}),onClick:t,children:"\u65B0\u5EFA"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ee=({record:e})=>{const t=y(),u=Q();return a(A,{accessible:t.canEditSysPost,children:a(g,{type:"link",icon:a(B,{}),onClick:()=>u(e),children:"\u7F16\u8F91"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};async function te(e,t){return d("/system/post/add",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...t||{}})}async function ae(e,t){return d("/system/post/edit",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...t||{}})}async function se(e,t){return d("/system/post/export",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...t||{}})}async function oe(e,t){return d("/system/post/list",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...t||{}})}async function ue(e,t){return d("/system/post/remove",{method:"POST",params:{...e},...t||{}})}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const re=({searchParams:e})=>{const t=y(),{isLoading:u,mutate:c}=b(()=>se(e),{onSuccess:()=>{T.success("\u5BFC\u51FA\u6210\u529F")}});return a(A,{accessible:t.canExportSysPost,children:a(g,{type:"link",icon:a(O,{}),loading:u,onClick:()=>c(),children:"\u5BFC\u51FA\u5F53\u524D\u5217\u8868"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const S=({postId:e,postName:t,isBatch:u,disabled:c})=>{const h=u?"\u6279\u91CF\u5220\u9664":"\u5220\u9664",r=y(),s=D(),{mutateAsync:i,isLoading:F}=b(async o=>{await ue({postIds:o})},{onSuccess:()=>{var o;s==null||s.reload(),(o=s==null?void 0:s.clearSelected)==null||o.call(s),T.success("\u5220\u9664\u6210\u529F")}}),p=()=>{j.confirm({title:"\u5220\u9664\u5C97\u4F4D",content:n(C,{children:["\u786E\u5B9A\u5220\u9664\u5C97\u4F4D",a(R.Text,{code:!0,children:t}),"\u5417\uFF1F"]}),onOk:async()=>i(e),okButtonProps:{loading:F}})};return a(A,{accessible:r.canRemoveSysPost,children:a(g,{type:"link",danger:!0,disabled:c,icon:a(v,{}),onClick:p,children:h})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ce=()=>{var p;const e=m.exports.useRef(),{open:t,actionType:u,record:c}=Z(),h=U(),r=D(),s=()=>{var o;h(),(o=e.current)==null||o.resetFields()},{mutate:i,isLoading:F}=b(async()=>{var E;const o=await((E=e.current)==null?void 0:E.validateFields());if(!!o){if(u==="add"){await te(o);return}await ae({...o,postId:c.postId})}},{onSuccess:()=>{r==null||r.reload(),s(),T.success(u==="add"?"\u65B0\u5EFA\u6210\u529F":"\u4FDD\u5B58\u6210\u529F")}});return m.exports.useEffect(()=>{var o;u==="edit"&&c&&((o=e.current)==null?void 0:o.setFieldsValue)&&e.current.setFieldsValue(c)},[u,(p=e.current)==null?void 0:p.setFieldsValue]),a(j,{open:t,onCancel:s,okText:"\u63D0\u4EA4",okButtonProps:{loading:F},onOk:()=>i(),title:u==="add"?"\u65B0\u5EFA\u5C97\u4F4D":"\u7F16\u8F91\u5C97\u4F4D\u4FE1\u606F",children:n(N,{submitter:!1,formRef:e,children:[a(P,{name:"postName",label:"\u5C97\u4F4D\u540D\u79F0",rules:[{required:!0}]}),a(P,{name:"postCode",label:"\u5C97\u4F4D\u7F16\u7801",rules:[{required:!0}]}),a(K,{name:"postSort",label:"\u663E\u793A\u987A\u5E8F",rules:[{required:!0}],initialValue:0}),a(V.Group,{name:"status",label:"\u72B6\u6001",valueEnum:k,initialValue:L.ENABLE}),a($,{name:"remark",label:"\u5907\u6CE8"})]})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ie="postId",Ce=()=>{const[e,t]=m.exports.useState({}),u=m.exports.useRef(),c=z();return n(q,{children:[a(W,{formRef:u,actionRef:c,rowKey:ie,request:async(...r)=>{const s=Y(...r);return t(s),await oe(s)},columns:[{dataIndex:"postId",key:"postId",title:"\u5C97\u4F4D\u7F16\u53F7",valueType:"text",hideInSearch:!0},{dataIndex:"postCode",key:"postCode",title:"\u5C97\u4F4D\u7F16\u7801",valueType:"text"},{dataIndex:"postName",key:"postName",title:"\u5C97\u4F4D\u540D\u79F0",valueType:"text"},{dataIndex:"postSort",key:"postSort",title:"\u663E\u793A\u987A\u5E8F",valueType:"text",hideInSearch:!0},{title:"\u72B6\u6001",dataIndex:"status",key:"status",valueType:"select",valueEnum:k},{title:"\u5907\u6CE8",dataIndex:"remark",key:"remark",valueType:"textarea",hideInSearch:!0},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",key:"createTime",valueType:"dateTime",editable:!1,hideInSearch:!0,sorter:!0},{title:"\u64CD\u4F5C",valueType:"option",render:(r,s)=>n(C,{children:[a(ee,{record:s}),a(S,{postId:s.postId,postName:s.postName})]})}],toolbar:{actions:[a(_,{},"ButtonAdd")]},tableAlertOptionRender:({selectedRows:r})=>{const s=r.length===0;return n(C,{children:[a(S,{disabled:s,isBatch:!0,postId:r.map(i=>i.postId).join(","),postName:r.map(i=>i.postName).join(",")}),a(re,{searchParams:e})]})}}),a(ce,{})]})};export{Ce as default};
