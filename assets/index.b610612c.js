import{x as R,y as x,z as B,A as D,b as v,C as I,T as V}from"./index.a6f7e440.js";import{s as L,v as j,g as w,j as s,ai as g,aj as C,aL as N,aM as q,w as p,q as y,ap as W,ak as X,al as O,e as h,F as b,am as Y,r as A,$ as z,a2 as E,aI as G,ao as H,aZ as K,O as Z,av as $,ar as J}from"./index.740bf5e8.js";import{b as Q,c as U}from"./index.02109581.js";import{e as F}from"./index.32668247.js";import{a as _,u as tt}from"./utils.67944b05.js";import{u as P}from"./useMutation.esm.c89cb261.js";import{P as et}from"./index.e616e527.js";import{P as st}from"./index.62d88104.js";import"./useQuery.esm.625c59fc.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};const T=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/post/model/index.ts/AtomMainTableActions",L(void 0));T.debugLabel="AtomMainTableActions";const ot=()=>Q(T),k=()=>j(T),m=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/post/model/index.ts/AtomAddOrEditModal",_({open:!1,actionType:"add"}));m.debugLabel="AtomAddOrEditModal";const at=()=>{const t=w(m);return()=>t({open:!0,actionType:"add"})},ct=()=>{const t=w(m);return e=>t({open:!0,actionType:"edit",record:e})},rt=()=>tt(m),it=()=>j(m);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};const nt=()=>{const t=F(),e=at();return s(g,{accessible:t.canAddSysPost,children:s(C,{type:"primary",icon:s(N,{}),onClick:e,children:"\u65B0\u5EFA"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};const ut=({record:t})=>{const e=F(),a=ct();return s(g,{accessible:e.canEditSysPost,children:s(C,{type:"link",icon:s(q,{}),onClick:()=>a(t),children:"\u7F16\u8F91"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};async function dt(t,e){return p("/system/post/add",{method:"POST",headers:{"Content-Type":"application/json"},data:t,...e||{}})}async function lt(t,e){return p("/system/post/edit",{method:"POST",headers:{"Content-Type":"application/json"},data:t,...e||{}})}async function ht(t,e){return p("/system/post/export",{method:"POST",headers:{"Content-Type":"application/json"},data:t,...e||{}})}async function pt(t,e){return p("/system/post/list",{method:"POST",headers:{"Content-Type":"application/json"},data:t,...e||{}})}async function mt(t,e){return p("/system/post/remove",{method:"POST",params:{...t},...e||{}})}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};const At=({searchParams:t})=>{const e=F(),{isLoading:a,mutate:n}=P(()=>ht(t),{onSuccess:()=>{y.success("\u5BFC\u51FA\u6210\u529F")}});return s(g,{accessible:e.canExportSysPost,children:s(C,{type:"link",icon:s(W,{}),loading:a,onClick:()=>n(),children:"\u5BFC\u51FA\u5F53\u524D\u5217\u8868"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};const M=({postId:t,postName:e,isBatch:a,disabled:n})=>{const l=a?"\u6279\u91CF\u5220\u9664":"\u5220\u9664",d=F(),c=k(),{mutateAsync:r,isLoading:i}=P(async o=>{await mt({postIds:o})},{onSuccess:()=>{var o;c==null||c.reload(),(o=c==null?void 0:c.clearSelected)==null||o.call(c),y.success("\u5220\u9664\u6210\u529F")}}),u=()=>{O.confirm({title:"\u5220\u9664\u5C97\u4F4D",content:h(b,{children:["\u786E\u5B9A\u5220\u9664\u5C97\u4F4D",s(Y.Text,{code:!0,children:e}),"\u5417\uFF1F"]}),onOk:async()=>r(t),okButtonProps:{loading:i}})};return s(g,{accessible:d.canRemoveSysPost,children:s(C,{type:"link",danger:!0,disabled:n,icon:s(X,{}),onClick:u,children:l})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};const gt=()=>{var u;const t=A.exports.useRef(),{open:e,actionType:a,record:n}=it(),l=rt(),d=k(),c=()=>{var o;l(),(o=t.current)==null||o.resetFields()},{mutate:r,isLoading:i}=P(async()=>{var f;const o=await((f=t.current)==null?void 0:f.validateFields());if(!!o){if(a==="add"){await dt(o);return}await lt({...o,postId:n.postId})}},{onSuccess:()=>{d==null||d.reload(),c(),y.success(a==="add"?"\u65B0\u5EFA\u6210\u529F":"\u4FDD\u5B58\u6210\u529F")}});return A.exports.useEffect(()=>{var o;a==="edit"&&n&&((o=t.current)==null?void 0:o.setFieldsValue)&&t.current.setFieldsValue(n)},[a,(u=t.current)==null?void 0:u.setFieldsValue]),s(O,{open:e,onCancel:c,okText:"\u63D0\u4EA4",okButtonProps:{loading:i},onOk:()=>r(),title:a==="add"?"\u65B0\u5EFA\u5C97\u4F4D":"\u7F16\u8F91\u5C97\u4F4D\u4FE1\u606F",children:h(z,{submitter:!1,formRef:t,children:[s(E,{name:"postName",label:"\u5C97\u4F4D\u540D\u79F0",rules:[{required:!0}]}),s(E,{name:"postCode",label:"\u5C97\u4F4D\u7F16\u7801",rules:[{required:!0}]}),s(et,{name:"postSort",label:"\u663E\u793A\u987A\u5E8F",rules:[{required:!0}],initialValue:0}),s(G.Group,{name:"status",label:"\u72B6\u6001",valueEnum:H,initialValue:K.ENABLE}),s(st,{name:"remark",label:"\u5907\u6CE8"})]})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};const S="postId",St=()=>{const[t,e]=A.exports.useState({}),a=A.exports.useRef(),n=ot(),{rowSelection:l,onClick:d}=U(S);return h(Z,{children:[s($,{formRef:a,actionRef:n,rowKey:S,request:async(...r)=>{const i=J(...r);return e(i),await pt(i)},columns:[R,x,B,D,v,I,V,{title:"\u64CD\u4F5C",valueType:"option",render:(r,i)=>h(b,{children:[s(ut,{record:i}),s(M,{postId:i.postId,postName:i.postName})]})}],toolbar:{actions:[s(nt,{},"ButtonAdd")]},rowSelection:l,onRow:r=>({onClick:()=>d(r)}),tableAlertOptionRender:({selectedRows:r})=>{const i=r.length===0;return h(b,{children:[s(M,{disabled:i,isBatch:!0,postId:r.map(u=>u.postId).join(","),postName:r.map(u=>u.postName).join(",")}),s(At,{searchParams:t})]})}}),s(gt,{})]})};export{St as default};
