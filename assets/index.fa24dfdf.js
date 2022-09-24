import{av as M,a6 as O,a as e,b3 as j,a5 as I,r as F,R as S,g as k,h as N,b4 as L,b6 as y,j as c,az as x,aF as d,aD as P,aB as w,as as l,b5 as _,b7 as q,bo as W,bp as V,bE as $,bF as z,b8 as G,F as H,b9 as K,bG as J,aV as Q,bb as X,bH as Y,bg as Z,b0 as f}from"./index.243e07d2.js";import{B as ee}from"./index.8d824c9b.js";import{u as te,c as se}from"./useInitActionType.0ef0ce17.js";import{c as p}from"./keepAlive.1a2240b5.js";import{C as oe,b as re,d as ae}from"./common.14dc1b40.js";import{u as ne}from"./useRowClick.bd753f17.js";import{A as m}from"./index.1297db3c.js";import{u as v}from"./index.b2387fcb.js";import{u as g}from"./useMutation.esm.1d6de8b7.js";import{E as ue}from"./index.98be4248.js";import{e as ce}from"./SysDeptService.f8710076.js";import{u as de}from"./useRequest.786e244b.js";import"./utils.esm.f3291089.js";var le=["fieldProps","unCheckedChildren","checkedChildren","proFieldProps"],ie=M.forwardRef(function(t,s){var o=t.fieldProps,r=t.unCheckedChildren,u=t.checkedChildren,a=t.proFieldProps,n=O(t,le);return e(j,I({valueType:"switch",fieldProps:I({unCheckedChildren:r,checkedChildren:u},o),ref:s,valuePropName:"checked",proFieldProps:a,filedConfig:{valuePropName:"checked",ignoreWidth:!0}},n))});const pe=t=>F.exports.cloneElement(e("div",{onClick:s=>{s.stopPropagation()},children:t.children}),t),me={dataIndex:"userId",key:"userId",title:"\u7528\u6237\u7F16\u53F7",valueType:"text",editable:!1,hideInSearch:!0},he={dataIndex:"userName",key:"userName",title:"\u7528\u6237\u540D\u79F0",valueType:"text"},Ce={dataIndex:"nickName",key:"nickName",title:"\u7528\u6237\u6635\u79F0",valueType:"text",hideInSearch:!0},Fe={dataIndex:["dept","deptName"],key:"deptDeptName",title:"\u90E8\u95E8\u540D\u79F0",valueType:"text",hideInSearch:!0},ye={dataIndex:"phoneNumber",key:"phoneNumber",title:"\u624B\u673A\u53F7\u7801",valueType:"text"},B="systemUser",T=S({key:`${B}AtomMainTableActions`,default:void 0}),E=()=>k(T),Pe=()=>te(T),A=S({key:`${B}AtomSelectedDeptId`,default:0}),be=()=>k(A),fe=()=>N(A),R=S({key:`${B}AtomResetPasswordModal`,default:{open:!1,userId:0,userName:""}}),Se=()=>{const t=N(R);return(s,o)=>{t({open:!0,userId:s,userName:o})}},ke=()=>L(R),xe=()=>k(R),ge=()=>{const t=ke(),{open:s,userId:o,userName:r}=xe();return e(y,{title:"\u91CD\u7F6E\u5BC6\u7801",open:s,onCancel:t,children:c(x,{children:[e(d,{}),e(d.Password,{})]})})};async function Be(t,s){return P("/system/user/add",{method:"POST",headers:{"Content-Type":"application/json"},data:t,...s||{}})}async function Re(t){return P("/system/user/importTemplate",{method:"POST",...t||{}})}async function Ie(t,s){return P("/system/user/list",{method:"POST",headers:{"Content-Type":"application/json"},data:t,...s||{}})}async function De(t,s){return P("/system/user/remove",{method:"POST",params:{...t},...s||{}})}const Ne=()=>{const t=p(),[s,{toggle:o}]=v(),r=F.exports.useRef(),u=E(),{isLoading:a,mutate:n}=g(async()=>{var i,h;const b=await((h=(i=r.current)==null?void 0:i.validateFieldsReturnFormatValue)==null?void 0:h.call(i));await Be(b)},{onSuccess:()=>{u==null||u.reload(),w.success("\u6DFB\u52A0\u6210\u529F")}});return c(m,{accessible:t.canAddSysUser,children:[e(l,{type:"primary",icon:e(_,{}),onClick:o,children:"\u65B0\u589E"}),e(y,{title:"\u6DFB\u52A0\u7528\u6237",open:s,onCancel:o,confirmLoading:a,okText:"\u63D0\u4EA4",onOk:()=>n(),children:c(x,{submitter:!1,formRef:r,grid:!0,colProps:{span:12},children:[e(d,{name:"nickName",label:"\u7528\u6237\u6635\u79F0",rules:[{required:!0}]}),e(d,{name:"phoneNumber",label:"\u624B\u673A\u53F7\u7801"}),e(d,{name:"email",label:"\u90AE\u7BB1"}),e(d,{name:"userName",label:"\u7528\u6237\u540D\u79F0",rules:[{required:!0}]}),e(d.Password,{name:"password",label:"\u7528\u6237\u5BC6\u7801",rules:[{required:!0}]}),e(q.Group,{name:"status",label:"\u72B6\u6001"})]})})]})},we=()=>{const t=p();return e(m,{accessible:t.canEditSysUser,children:e(l,{type:"link",icon:e(W,{}),children:"\u7F16\u8F91"})})},ve=()=>{const t=p();return e(m,{accessible:t.canExportSysUser,children:e(l,{icon:e(V,{}),children:"\u5BFC\u51FA"})})},Te=()=>{const t=p(),s=F.exports.useRef(),[o,{toggle:r}]=v(),{mutate:u,isLoading:a}=g(Re);return c(m,{accessible:t.canImportSysUser,children:[e(l,{icon:e($,{}),onClick:r,children:"\u5BFC\u5165"}),c(y,{title:"\u5BFC\u5165\u7528\u6237",open:o,onCancel:r,children:[e("div",{className:"text-right",children:e(l,{type:"link",onClick:u,loading:a,children:"\u4E0B\u8F7D\u6A21\u677F"})}),c(x,{layout:"horizontal",submitter:!1,formRef:s,children:[e(ie,{name:"isCover",label:"\u662F\u5426\u66F4\u65B0\u5DF2\u7ECF\u5B58\u5728\u7684\u7528\u6237\u6570\u636E"}),e(z,{name:"list"})]})]})]})},U=({userId:t,userName:s,isBatch:o,disabled:r})=>{const u=o?"\u6279\u91CF\u5220\u9664":"\u5220\u9664",a=p(),n=E(),{mutateAsync:b,isLoading:i}=g(async C=>{await De({userIds:C})},{onSuccess:()=>{var C;n==null||n.reload(),(C=n==null?void 0:n.clearSelected)==null||C.call(n),w.success("\u5220\u9664\u6210\u529F")}}),h=()=>{y.confirm({title:"\u5220\u9664\u7528\u6237",content:c(H,{children:["\u786E\u5B9A\u5220\u9664\u7528\u6237",e(K.Text,{code:!0,children:s}),"\u5417\uFF1F"]}),onOk:async()=>b(t),okButtonProps:{loading:i}})};return e(m,{accessible:a.canRemoveSysUser,children:e(l,{type:"link",danger:!0,disabled:r,icon:e(G,{}),onClick:h,children:u})})},Ee=({userId:t,userName:s})=>{const o=p(),r=Se();return e(m,{accessible:o.canResetSysUserPwd,children:e(l,{type:"link",danger:!0,icon:e(J,{}),onClick:()=>r(t,s),children:"\u91CD\u7F6E\u5BC6\u7801"})})},Ae=[me,he,Ce,Fe,ye,oe,re,ae,{title:"\u64CD\u4F5C",valueType:"option",width:290,render:(t,s)=>c(pe,{children:[e(we,{}),e(U,{userId:s.userId,userName:s.userName}),e(Ee,{userId:s.userId,userName:s.userName})]})}],D="userId",Ue=({selectedRows:t})=>{const s=t.length===0;return e(U,{disabled:s,isBatch:!0,userId:t.map(o=>o.userId).join(","),userName:t.map(o=>o.userName).join(",")})},Me=()=>{const t=Pe(),s=be(),o=s>0?{deptId:s}:{},{rowSelection:r,onClick:u}=ne(D);return e(Q,{rowKey:D,actionRef:t,columns:Ae,params:o,search:{span:{xs:24,sm:24,md:12,lg:12,xl:12,xxl:6}},onRow:a=>({onClick:()=>u(a)}),rowSelection:r,tableAlertOptionRender:Ue,request:(...a)=>Ie(se(...a)),toolbar:{actions:[e(ve,{},"ButtonExport"),e(Te,{},"ButtonImport"),e(Ne,{},"ButtonAdd")]}})},Oe=()=>{const[t,s]=F.exports.useState(""),o=fe(),{data:r,loading:u}=de(()=>ce({deptName:t}),{refreshDeps:[t]});return r?c(X,{spinning:u,children:[e(Y.Search,{allowClear:!0,placeholder:"\u8BF7\u8F93\u5165\u90E8\u95E8\u540D\u79F0",className:"mb-3",onSearch:a=>{s(a)}}),e(Z,{treeData:r,defaultExpandAll:!0,fieldNames:{title:"label",key:"id"},onSelect:(a,{node:{key:n}})=>{o(n)}})]}):e(ue,{})},Xe=()=>c(ee,{children:[c(f,{ghost:!0,gutter:24,children:[e(f,{colSpan:"300px",className:"h-full",children:e(Oe,{})}),e(f,{ghost:!0,className:"h-full",children:e(Me,{})})]}),e(ge,{})]});export{Xe as default};