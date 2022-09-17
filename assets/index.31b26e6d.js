import{a7 as te,l as re,j as ae,b0 as ie,a as ue,J as V,V as X,W as Y,cT as oe,cU as O,r as h,D as e,aH as B,cV as se,b5 as le,cC as E,aI as C,cO as $,cu as ne,U as I,aV as me,cW as de,ac as M,aT as q,bG as ce,cX as pe,cY as _,aC as Ne}from"./index.f9a5094b.js";import{B as fe}from"./index.7924a83b.js";import{u as T,A as Q,P as be}from"./useAccess.0039be70.js";import{u as ve,E as W,a as g}from"./useMutation.ae2fef40.js";import{S as De,a as Ee,b as he,c as Pe,d as ye,e as Fe}from"./SysDeptService.eed67fbe.js";import{p as Se}from"./tree.62bf3094.js";import{u as Ae}from"./index.27e003e5.js";import{M as G,L as xe,T as ge}from"./Tree.dfaed417.js";import{P as Be}from"./index.ac0cfaa2.js";import{T as j,P as S}from"./index.c55dc27c.js";import{C as Ce,a as Ie,b as Te}from"./common.d817b246.js";import{E as H}from"./index.e5ad81df.js";import{P as A}from"./index.f3b33f1d.js";import{P as Le}from"./index.c7a44f0b.js";import"./RouteContext.77463640.js";import"./index.51409bcf.js";import"./index.bafb6fac.js";/* empty css              */var Re=["fieldProps","request","params","proFieldProps"],we=function(a,i){var t=a.fieldProps,n=a.request,s=a.params,d=a.proFieldProps,c=re(a,Re);return ae(ie,ue({valueType:"treeSelect",fieldProps:t,ref:i,request:n,params:s,filedConfig:{customLightMode:!0},proFieldProps:d},c))},ke=te.forwardRef(we);const qe=ke,y="systemDept",L=V({key:`${y}AtomDeptDetails`,default:{visible:!1,deptId:0,deptName:""}}),K=()=>X(L),_e=()=>Y(L),U=()=>oe(L),z=V({key:`${y}AtomSearchDeptListParams`,default:{}}),J=()=>X(z),je=()=>Y(z),R=[y,"list"],Z=()=>{const r=J();return O(R,async()=>{const a=await De(r),i=Se(a,{id:"deptId",pId:"parentId",rootPId:null});return{data:a,treeData:i,allParentIds:a.map(t=>t.parentId)}})},Ve=[y,"treeData"],ee=()=>O(Ve,async()=>await Ee({})),Xe=()=>{const r=je(),a=J(),i=Z();return h.exports.useEffect(()=>{i.refetch()},[a]),t=>{r(t)}};var l="/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/dept/components/ButtonCreate.tsx";const Ye=()=>{const r=T(),a=h.exports.useRef(),[i,{toggle:t}]=Ae(),{data:n,refetch:s}=ee(),{mutate:d,isLoading:c}=ve(async()=>{var m;const p=await((m=a.current)==null?void 0:m.validateFields());await he(p)},{onSuccess:()=>{var p;C.success("\u65B0\u5EFA\u6210\u529F"),s(),t(),(p=a.current)==null||p.resetFields()}});return e(Q,{accessible:r.canAddSysDept,children:[e(B,{type:"primary",icon:e(se,{},void 0,!1,{fileName:l,lineNumber:42,columnNumber:36},void 0),onClick:t,children:"\u65B0\u5EFA"},void 0,!1,{fileName:l,lineNumber:42,columnNumber:7},void 0),e(G,{title:"\u65B0\u5EFA\u90E8\u95E8",okText:"\u63D0\u4EA4",open:i,onCancel:t,onOk:()=>d(),okButtonProps:{loading:c},children:e(le,{submitter:!1,formRef:a,grid:!0,rowProps:{gutter:[16,0]},children:[e(qe,{name:"parentId",label:"\u4E0A\u7EA7\u90E8\u95E8",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4E0A\u7EA7\u90E8\u95E8"}],fieldProps:{treeData:n!=null?n:[],fieldNames:{value:"id"}}},void 0,!1,{fileName:l,lineNumber:62,columnNumber:11},void 0),e(E,{name:"deptName",label:"\u90E8\u95E8\u540D\u79F0",rules:[{required:!0}],colProps:{span:12}},void 0,!1,{fileName:l,lineNumber:74,columnNumber:11},void 0),e(Be,{name:"orderNum",label:"\u663E\u793A\u6392\u5E8F",initialValue:0,rules:[{required:!0}],colProps:{span:12}},void 0,!1,{fileName:l,lineNumber:87,columnNumber:11},void 0),e(E,{name:"leader",label:"\u8D1F\u8D23\u4EBA",colProps:{span:12}},void 0,!1,{fileName:l,lineNumber:101,columnNumber:11},void 0),e(E,{name:"phone",label:"\u8054\u7CFB\u7535\u8BDD",colProps:{span:12}},void 0,!1,{fileName:l,lineNumber:109,columnNumber:11},void 0),e(E,{name:"email",label:"\u90AE\u7BB1",colProps:{span:12}},void 0,!1,{fileName:l,lineNumber:117,columnNumber:11},void 0),e(be.Group,{name:"status",label:"\u72B6\u6001",valueEnum:W,initialValue:g.ENABLE,colProps:{span:12}},void 0,!1,{fileName:l,lineNumber:125,columnNumber:11},void 0)]},void 0,!0,{fileName:l,lineNumber:54,columnNumber:9},void 0)},void 0,!1,{fileName:l,lineNumber:46,columnNumber:7},void 0)]},void 0,!0,{fileName:l,lineNumber:41,columnNumber:5},void 0)};var D="/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/dept/components/ButtonDelete.tsx";const Oe=()=>{const r=T(),a=$(),{deptId:i,deptName:t,visible:n}=K(),s=U(),d=()=>{G.confirm({title:"\u5220\u9664\u786E\u8BA4",content:e(I,{children:["\u786E\u5B9A\u5BF9",e(j.Text,{code:!0,children:t},void 0,!1,{fileName:D,lineNumber:24,columnNumber:14},void 0),"\u8FDB\u884C",e(j.Text,{code:!0,children:"\u5220\u9664"},void 0,!1,{fileName:D,lineNumber:25,columnNumber:11},void 0),"\u64CD\u4F5C\u5417\uFF1F"]},void 0,!0),onOk:async()=>{await Pe({deptId:i}),C.success("\u5220\u9664\u6210\u529F"),s(),a.invalidateQueries(R)}})};return e(Q,{accessible:r.canRemoveSysDept,children:e(B,{danger:!0,ghost:!0,icon:e(ne,{},void 0,!1,{fileName:D,lineNumber:39,columnNumber:34},void 0),disabled:!n,onClick:d,children:"\u5220\u9664"},void 0,!1,{fileName:D,lineNumber:39,columnNumber:7},void 0)},void 0,!1,{fileName:D,lineNumber:38,columnNumber:5},void 0)},$e={title:"\u90E8\u95E8\u540D\u79F0",dataIndex:"deptName",key:"deptName",valueType:"text"},Me={title:"\u8D1F\u8D23\u4EBA",dataIndex:"leader",key:"leader",valueType:"text"},Qe={title:"\u8054\u7CFB\u7535\u8BDD",dataIndex:"phone",key:"phone",valueType:"text"},We={title:"\u90AE\u7BB1",dataIndex:"email",key:"email",valueType:"text"},Ge=(r=[])=>({title:"\u4E0A\u7EA7\u90E8\u95E8",dataIndex:"parentId",key:"parentId",valueType:"treeSelect",fieldProps:{treeData:r,dropdownMatchSelectWidth:250,fieldNames:{value:"id"}}});var f="/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/dept/components/DescDetails.tsx";const x={xs:1,sm:1,md:1,lg:1,xl:2},He=()=>{const[r,a]=h.exports.useState([]),i=T(),[t]=me.useForm(),n=$(),{deptId:s,visible:d}=K(),{data:c}=ee(),p=Ge(c),{data:m,loading:P,refreshAsync:F}=de(async()=>{var k;const{ancestors:u,...v}=await ye({deptId:s}),w=(k=u==null?void 0:u.split(","))!=null?k:[];return{...v,ancestors:Number(w[w.length-1])}},{ready:d&&s>0,refreshDeps:[s],onSuccess:()=>{a([])}}),b=i!=null&&i.canEditSysDept?{form:t,editableKeys:r,onChange:(u,v)=>{a(u),u.length===1&&!Array.isArray(v)&&t.setFieldsValue({[u[0]]:v[u[0]]})},onSave:async(u,v)=>{await Fe({deptId:s,deptName:m.deptName,orderNum:m.orderNum,parentId:0,[u]:v[u]}),await Promise.all([n.invalidateQueries(R),F()]),C.success("\u4FDD\u5B58\u6210\u529F")}}:void 0;return d?e(M,{spinning:P,children:[e(A,{column:x,editable:b,dataSource:m,columns:[Ce,Ie,Te]},void 0,!1,{fileName:f,lineNumber:98,columnNumber:7},void 0),e(q,{},void 0,!1,{fileName:f,lineNumber:105,columnNumber:7},void 0),e(A,{column:x,editable:b,dataSource:m,columns:[$e,p]},void 0,!1,{fileName:f,lineNumber:107,columnNumber:7},void 0),e(q,{},void 0,!1,{fileName:f,lineNumber:109,columnNumber:7},void 0),e(A,{column:x,editable:b,dataSource:m,columns:[Me,Qe,We]},void 0,!1,{fileName:f,lineNumber:111,columnNumber:7},void 0)]},void 0,!0,{fileName:f,lineNumber:97,columnNumber:5},void 0):e(H,{description:"\u70B9\u51FB\u9009\u62E9\u5DE6\u4FA7\u90E8\u95E8\u9879\u67E5\u770B\u8BE6\u60C5"},void 0,!1,{fileName:f,lineNumber:93,columnNumber:12},void 0)};var o="/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/dept/components/TreeDept.tsx";const Ke=r=>e(I,{children:[e(_,{color:"rgb(148 163 184)",children:r.orderNum},void 0,!1,{fileName:o,lineNumber:19,columnNumber:7},void 0),e(Ne,{children:[r.deptName,e(_,{color:r.status===g.ENABLE?"success":"error",children:r.status===g.ENABLE?"\u542F\u7528\u4E2D":"\u5DF2\u7981\u7528"},void 0,!1,{fileName:o,lineNumber:24,columnNumber:9},void 0)]},void 0,!0,{fileName:o,lineNumber:21,columnNumber:7},void 0)]},void 0,!0),Ue=()=>{var p,m;const[r,a]=h.exports.useState([]),i=Xe(),{data:t,isFetching:n}=Z(),s=_e(),d=U(),c=(r==null?void 0:r.length)!==0&&(r==null?void 0:r.length)===((p=t==null?void 0:t.allParentIds)==null?void 0:p.length);return h.exports.useEffect(()=>{t!=null&&t.allParentIds&&a(t.allParentIds)},[t==null?void 0:t.allParentIds]),e(I,{children:[e("div",{className:"flex justify-between items-center",children:[e(B,{size:"small",className:"my-2",icon:c?e(ce,{},void 0,!1,{fileName:o,lineNumber:56,columnNumber:33},void 0):e(pe,{},void 0,!1,{fileName:o,lineNumber:56,columnNumber:57},void 0),onClick:()=>a(c?[]:t==null?void 0:t.allParentIds),children:c?"\u5168\u90E8\u6298\u53E0":"\u5168\u90E8\u5C55\u5F00"},void 0,!1,{fileName:o,lineNumber:53,columnNumber:9},void 0),e(xe,{onFinish:async P=>{i(P)},children:[e(E,{name:"deptName",label:"\u90E8\u95E8\u540D\u79F0"},void 0,!1,{fileName:o,lineNumber:67,columnNumber:11},void 0),e(Le,{name:"status",label:"\u72B6\u6001",valueEnum:W},void 0,!1,{fileName:o,lineNumber:69,columnNumber:11},void 0)]},void 0,!0,{fileName:o,lineNumber:62,columnNumber:9},void 0)]},void 0,!0,{fileName:o,lineNumber:52,columnNumber:7},void 0),t!=null&&t.treeData?e(M,{spinning:n,children:e(ge,{blockNode:!0,showLine:{showLeafIcon:!1},titleRender:Ke,treeData:(m=t==null?void 0:t.treeData)!=null?m:[],expandedKeys:r,onExpand:a,fieldNames:{title:"deptName",key:"deptId",children:"children"},onSelect:(P,{selected:F,node:{key:b}})=>{if(F){s({visible:!0,deptId:b,deptName:t.data.find(u=>u.deptId===b).deptName});return}d()}},void 0,!1,{fileName:o,lineNumber:75,columnNumber:11},void 0)},void 0,!1,{fileName:o,lineNumber:74,columnNumber:9},void 0):e(H,{},void 0,!1,{fileName:o,lineNumber:102,columnNumber:9},void 0)]},void 0,!0)};var N="/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/dept/index.tsx";const ft=()=>e(fe,{children:e(S,{ghost:!0,gutter:24,children:[e(S,{title:"\u90E8\u95E8\u5217\u8868",colSpan:"500px",extra:e(Ye,{},void 0,!1,{fileName:N,lineNumber:13,columnNumber:54},void 0),children:e(Ue,{},void 0,!1,{fileName:N,lineNumber:14,columnNumber:11},void 0)},void 0,!1,{fileName:N,lineNumber:13,columnNumber:9},void 0),e(S,{title:"\u90E8\u95E8\u8BE6\u60C5",extra:e(Oe,{},void 0,!1,{fileName:N,lineNumber:17,columnNumber:38},void 0),children:e(He,{},void 0,!1,{fileName:N,lineNumber:18,columnNumber:11},void 0)},void 0,!1,{fileName:N,lineNumber:17,columnNumber:9},void 0)]},void 0,!0,{fileName:N,lineNumber:12,columnNumber:7},void 0)},void 0,!1,{fileName:N,lineNumber:11,columnNumber:5},void 0);export{ft as default};
