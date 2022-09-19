import{C as v,c as w,b as I}from"./common.f54ca4d9.js";import{R as x,H as D,J as T,cG as g,j as o,aE as j,cp as V,aV as i,aT as h,cy as _,c2 as q,r as l,g as p,F as B}from"./index.4a7583d0.js";import{B as L}from"./index.62272242.js";import{A as m,P as N}from"./index.c092874e.js";import{c as F}from"./keepAlive.9d779ec7.js";import{u as $,c as G}from"./useInitActionType.ddd6f516.js";import{B as y}from"./index.4fe5dc19.js";import{u as A,E as H,a as J}from"./useMutation.esm.38207e49.js";import{M as b}from"./Tree.4351fdb6.js";import{a as z}from"./index.1dd6cd73.js";import{P as S}from"./index.cb224c53.js";import{P as K}from"./index.89414dd9.js";import{P as Q}from"./index.a5b75982.js";import{P as U}from"./Table.12e3c515.js";/* empty css              */import"./RouteContext.2736af70.js";import"./utils.esm.85bc56f4.js";import"./index.dc1867e7.js";import"./PortalWrapper.7f9fd477.js";import"./index.d5be6b4e.js";import"./index.dbef3ab0.js";import"./unstated-next.3c14dab8.js";import"./index.07882f96.js";const W={dataIndex:"postId",key:"postId",title:"\u5C97\u4F4D\u7F16\u53F7",valueType:"text",hideInSearch:!0},X={dataIndex:"postCode",key:"postCode",title:"\u5C97\u4F4D\u7F16\u7801",valueType:"text"},Y={dataIndex:"postName",key:"postName",title:"\u5C97\u4F4D\u540D\u79F0",valueType:"text"},Z={dataIndex:"postSort",key:"postSort",title:"\u663E\u793A\u987A\u5E8F",valueType:"text",hideInSearch:!0},k="systemPost",M=x({key:`${k}AtomMainTableActions`,default:void 0}),tt=()=>$(M),R=()=>D(M),P=x({key:`${k}AtomAddOrEditModal`,default:{open:!1,actionType:"add"}}),et=()=>{const t=T(P);return()=>t({open:!0,actionType:"add"})},ot=()=>{const t=T(P);return e=>t({open:!0,actionType:"edit",record:e})},st=()=>g(P),at=()=>D(P),nt=()=>{const t=F(),e=et();return o(m,{accessible:t.canAddSysPost,children:o(y,{type:"primary",icon:o(j,{}),onClick:e,children:"\u65B0\u5EFA"})})},ut=({record:t})=>{const e=F(),a=ot();return o(m,{accessible:e.canEditSysPost,children:o(y,{type:"link",icon:o(V,{}),onClick:()=>a(t),children:"\u7F16\u8F91"})})};async function rt(t,e){return i("/system/post/add",{method:"POST",headers:{"Content-Type":"application/json"},data:t,...e||{}})}async function ct(t,e){return i("/system/post/edit",{method:"POST",headers:{"Content-Type":"application/json"},data:t,...e||{}})}async function it(t,e){return i("/system/post/export",{method:"POST",headers:{"Content-Type":"application/json"},data:t,...e||{}})}async function dt(t,e){return i("/system/post/list",{method:"POST",headers:{"Content-Type":"application/json"},data:t,...e||{}})}async function lt(t,e){return i("/system/post/remove",{method:"POST",params:{...t},...e||{}})}const pt=({searchParams:t})=>{const e=F(),{isLoading:a,mutate:n}=A(()=>it(t),{onSuccess:()=>{h.success("\u5BFC\u51FA\u6210\u529F")}});return o(m,{accessible:e.canExportSysPost,children:o(y,{type:"link",icon:o(_,{}),loading:a,onClick:()=>n(),children:"\u5BFC\u51FA\u5F53\u524D\u5217\u8868"})})},O=({postId:t,isBatch:e,disabled:a})=>{const n=e?"\u6279\u91CF\u5220\u9664":"\u5220\u9664",d=F(),s=R(),{mutateAsync:u,isLoading:C}=A(async c=>{await lt({postIds:c})},{onSuccess:()=>{var c;s==null||s.reload(),(c=s==null?void 0:s.clearSelected)==null||c.call(s),h.success("\u5220\u9664\u6210\u529F")}}),f=()=>{b.confirm({title:"\u5220\u9664\u5C97\u4F4D",content:`\u786E\u5B9A\u5220\u9664 \u5C97\u4F4D\u7F16\u53F7 \u4E3A ${t} \u7684\u5C97\u4F4D\u5417\uFF1F`,onOk:async()=>u(t),okButtonProps:{loading:C}})};return o(m,{accessible:d.canRemoveSysPost,children:o(y,{type:"link",danger:!0,disabled:a,icon:o(q,{}),onClick:f,children:n})})},mt=()=>{var c;const t=l.exports.useRef(),{open:e,actionType:a,record:n}=at(),d=st(),s=R(),u=()=>{var r;d(),(r=t.current)==null||r.resetFields()},{mutate:C,isLoading:f}=A(async()=>{var E;const r=await((E=t.current)==null?void 0:E.validateFields());if(!!r){if(a==="add"){await rt(r);return}await ct({...r,postId:n.postId})}},{onSuccess:()=>{s==null||s.reload(),u(),h.success(a==="add"?"\u65B0\u5EFA\u6210\u529F":"\u4FDD\u5B58\u6210\u529F")}});return l.exports.useEffect(()=>{var r;a==="edit"&&n&&((r=t.current)==null?void 0:r.setFieldsValue)&&t.current.setFieldsValue(n)},[a,(c=t.current)==null?void 0:c.setFieldsValue]),o(b,{open:e,onCancel:u,okText:"\u63D0\u4EA4",okButtonProps:{loading:f},onOk:()=>C(),title:a==="add"?"\u65B0\u5EFA\u5C97\u4F4D":"\u7F16\u8F91\u5C97\u4F4D\u4FE1\u606F",children:p(z,{submitter:!1,formRef:t,children:[o(S,{name:"postName",label:"\u5C97\u4F4D\u540D\u79F0",rules:[{required:!0}]}),o(S,{name:"postCode",label:"\u5C97\u4F4D\u7F16\u7801",rules:[{required:!0}]}),o(K,{name:"postSort",label:"\u663E\u793A\u987A\u5E8F",rules:[{required:!0}],initialValue:0}),o(N.Group,{name:"status",label:"\u72B6\u6001",valueEnum:H,initialValue:J.ENABLE}),o(Q,{name:"remark",label:"\u5907\u6CE8"})]})})},Ft=[W,X,Y,Z,v,w,I,{title:"\u64CD\u4F5C",valueType:"option",render:(t,e)=>p(B,{children:[o(ut,{record:e}),o(O,{postId:e.postId})]})}],_t=()=>{const[t,e]=l.exports.useState({}),a=l.exports.useRef(),n=tt();return p(L,{children:[o(U,{formRef:a,actionRef:n,rowKey:"postId",request:async(...s)=>{const u=G(...s);return e(u),await dt(u)},columns:Ft,toolbar:{actions:[o(nt,{},"ButtonAdd")]},rowSelection:{alwaysShowAlert:!0},tableAlertOptionRender:({selectedRowKeys:s})=>{const u=s.length===0;return p(B,{children:[o(O,{disabled:u,isBatch:!0,postId:s.join(",")}),o(pt,{searchParams:t})]})}}),o(mt,{})]})};export{_t as default};
