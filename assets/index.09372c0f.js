import{C as v,c as g,b as w}from"./common.9e5813c9.js";import{R as k,g as D,h as T,b4 as j,a as o,as as y,b5 as N,bo as V,aD as m,aB as A,bp as _,b8 as q,b6 as B,j as p,F as E,b9 as L,r as F,az as W,aF as x,b7 as $,aV as z}from"./index.dae0fca4.js";import{B as G}from"./index.75387fbc.js";import{c as h}from"./keepAlive.049504ee.js";import{u as H,c as K}from"./useInitActionType.7b95c077.js";import{u as J}from"./useRowClick.cf65841a.js";import{A as C}from"./index.c0a5a0c4.js";import{u as f,E as Q,a as U}from"./useMutation.esm.0af60a75.js";import{P as X}from"./index.4928697d.js";import{P as Y}from"./index.8fb2bc9d.js";import"./utils.esm.bb4550a7.js";const Z={dataIndex:"postId",key:"postId",title:"\u5C97\u4F4D\u7F16\u53F7",valueType:"text",hideInSearch:!0},tt={dataIndex:"postCode",key:"postCode",title:"\u5C97\u4F4D\u7F16\u7801",valueType:"text"},et={dataIndex:"postName",key:"postName",title:"\u5C97\u4F4D\u540D\u79F0",valueType:"text"},ot={dataIndex:"postSort",key:"postSort",title:"\u663E\u793A\u987A\u5E8F",valueType:"text",hideInSearch:!0},M="systemPost",O=k({key:`${M}AtomMainTableActions`,default:void 0}),st=()=>H(O),R=()=>D(O),P=k({key:`${M}AtomAddOrEditModal`,default:{open:!1,actionType:"add"}}),at=()=>{const t=T(P);return()=>t({open:!0,actionType:"add"})},nt=()=>{const t=T(P);return e=>t({open:!0,actionType:"edit",record:e})},ut=()=>j(P),rt=()=>D(P),dt=()=>{const t=h(),e=at();return o(C,{accessible:t.canAddSysPost,children:o(y,{type:"primary",icon:o(N,{}),onClick:e,children:"\u65B0\u5EFA"})})},ct=({record:t})=>{const e=h(),a=nt();return o(C,{accessible:e.canEditSysPost,children:o(y,{type:"link",icon:o(V,{}),onClick:()=>a(t),children:"\u7F16\u8F91"})})};async function it(t,e){return m("/system/post/add",{method:"POST",headers:{"Content-Type":"application/json"},data:t,...e||{}})}async function lt(t,e){return m("/system/post/edit",{method:"POST",headers:{"Content-Type":"application/json"},data:t,...e||{}})}async function pt(t,e){return m("/system/post/export",{method:"POST",headers:{"Content-Type":"application/json"},data:t,...e||{}})}async function mt(t,e){return m("/system/post/list",{method:"POST",headers:{"Content-Type":"application/json"},data:t,...e||{}})}async function Ft(t,e){return m("/system/post/remove",{method:"POST",params:{...t},...e||{}})}const yt=({searchParams:t})=>{const e=h(),{isLoading:a,mutate:r}=f(()=>pt(t),{onSuccess:()=>{A.success("\u5BFC\u51FA\u6210\u529F")}});return o(C,{accessible:e.canExportSysPost,children:o(y,{type:"link",icon:o(_,{}),loading:a,onClick:()=>r(),children:"\u5BFC\u51FA\u5F53\u524D\u5217\u8868"})})},I=({postId:t,postName:e,isBatch:a,disabled:r})=>{const l=a?"\u6279\u91CF\u5220\u9664":"\u5220\u9664",i=h(),n=R(),{mutateAsync:u,isLoading:d}=f(async s=>{await Ft({postIds:s})},{onSuccess:()=>{var s;n==null||n.reload(),(s=n==null?void 0:n.clearSelected)==null||s.call(n),A.success("\u5220\u9664\u6210\u529F")}}),c=()=>{B.confirm({title:"\u5220\u9664\u5C97\u4F4D",content:p(E,{children:["\u786E\u5B9A\u5220\u9664\u5C97\u4F4D",o(L.Text,{code:!0,children:e}),"\u5417\uFF1F"]}),onOk:async()=>u(t),okButtonProps:{loading:d}})};return o(C,{accessible:i.canRemoveSysPost,children:o(y,{type:"link",danger:!0,disabled:r,icon:o(q,{}),onClick:c,children:l})})},ht=()=>{var c;const t=F.exports.useRef(),{open:e,actionType:a,record:r}=rt(),l=ut(),i=R(),n=()=>{var s;l(),(s=t.current)==null||s.resetFields()},{mutate:u,isLoading:d}=f(async()=>{var S;const s=await((S=t.current)==null?void 0:S.validateFields());if(!!s){if(a==="add"){await it(s);return}await lt({...s,postId:r.postId})}},{onSuccess:()=>{i==null||i.reload(),n(),A.success(a==="add"?"\u65B0\u5EFA\u6210\u529F":"\u4FDD\u5B58\u6210\u529F")}});return F.exports.useEffect(()=>{var s;a==="edit"&&r&&((s=t.current)==null?void 0:s.setFieldsValue)&&t.current.setFieldsValue(r)},[a,(c=t.current)==null?void 0:c.setFieldsValue]),o(B,{open:e,onCancel:n,okText:"\u63D0\u4EA4",okButtonProps:{loading:d},onOk:()=>u(),title:a==="add"?"\u65B0\u5EFA\u5C97\u4F4D":"\u7F16\u8F91\u5C97\u4F4D\u4FE1\u606F",children:p(W,{submitter:!1,formRef:t,children:[o(x,{name:"postName",label:"\u5C97\u4F4D\u540D\u79F0",rules:[{required:!0}]}),o(x,{name:"postCode",label:"\u5C97\u4F4D\u7F16\u7801",rules:[{required:!0}]}),o(X,{name:"postSort",label:"\u663E\u793A\u987A\u5E8F",rules:[{required:!0}],initialValue:0}),o($.Group,{name:"status",label:"\u72B6\u6001",valueEnum:Q,initialValue:U.ENABLE}),o(Y,{name:"remark",label:"\u5907\u6CE8"})]})})},Ct=[Z,tt,et,ot,v,g,w,{title:"\u64CD\u4F5C",valueType:"option",render:(t,e)=>p(E,{children:[o(ct,{record:e}),o(I,{postId:e.postId,postName:e.postName})]})}],b="postId",Mt=()=>{const[t,e]=F.exports.useState({}),a=F.exports.useRef(),r=st(),{rowSelection:l,onClick:i}=J(b);return p(G,{children:[o(z,{formRef:a,actionRef:r,rowKey:b,request:async(...u)=>{const d=K(...u);return e(d),await mt(d)},columns:Ct,toolbar:{actions:[o(dt,{},"ButtonAdd")]},rowSelection:l,onRow:u=>({onClick:()=>i(u)}),tableAlertOptionRender:({selectedRows:u})=>{const d=u.length===0;return p(E,{children:[o(I,{disabled:d,isBatch:!0,postId:u.map(c=>c.postId).join(","),postName:u.map(c=>c.postName).join(",")}),o(yt,{searchParams:t})]})}}),o(ht,{})]})};export{Mt as default};
