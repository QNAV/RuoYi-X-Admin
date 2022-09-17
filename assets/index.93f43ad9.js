import{B as te}from"./index.66d53706.js";import{u as B,A as V,P as re}from"./useAccess.69c5d540.js";import{a7 as ae,l as ie,j as ue,b0 as oe,a as se,J as X,V as Y,W as O,cT as le,cU as $,r as h,D as e,aH as C,cV as ne,b5 as me,cC as E,aI as I,cO as M,cu as de,U as T,aV as ce,cW as pe,ac as Q,aT as q,bG as Ne,cX as fe,cY as _,aC as be}from"./index.e7e8a15b.js";import{u as ve,E as W,a as g}from"./useMutation.1e2dbf19.js";import{S as De,a as Ee,b as he,c as Pe,d as ye,e as Fe}from"./SysDeptService.159200a4.js";import{p as Se}from"./tree.37039ea2.js";import{u as Ae}from"./index.dbba3a5c.js";import{M as G,L as xe,T as ge}from"./Tree.9d22aed6.js";import{P as Be}from"./index.ed943dc7.js";import{T as j,P as S}from"./index.ebc4e7d2.js";import{C as Ce,a as Ie,b as Te}from"./common.f0aae362.js";import{E as H}from"./index.81372627.js";import{P as A}from"./index.64153480.js";import{P as Le}from"./index.4d3e5edd.js";import"./RouteContext.8ac15446.js";import"./index.d6144630.js";import"./index.53673e5f.js";/* empty css              */var Re=["fieldProps","request","params","proFieldProps"],we=function(a,i){var t=a.fieldProps,n=a.request,s=a.params,d=a.proFieldProps,c=ie(a,Re);return ue(oe,se({valueType:"treeSelect",fieldProps:t,ref:i,request:n,params:s,filedConfig:{customLightMode:!0},proFieldProps:d},c))},ke=ae.forwardRef(we);const qe=ke,y="systemDept",L=X({key:`${y}AtomDeptDetails`,default:{visible:!1,deptId:0,deptName:""}}),K=()=>Y(L),_e=()=>O(L),U=()=>le(L),z=X({key:`${y}AtomSearchDeptListParams`,default:{}}),J=()=>Y(z),je=()=>O(z),R=[y,"list"],Z=()=>{const r=J();return $(R,async()=>{const a=await De(r),i=Se(a,{id:"deptId",pId:"parentId",rootPId:null});return{data:a,treeData:i,allParentIds:a.map(t=>t.parentId)}})},Ve=[y,"treeData"],ee=()=>$(Ve,async()=>await Ee({})),Xe=()=>{const r=je(),a=J(),i=Z();return h.exports.useEffect(()=>{i.refetch()},[a]),t=>{r(t)}};var l="/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/dept/components/ButtonCreate.tsx";const Ye=()=>{const r=B(),a=h.exports.useRef(),[i,{toggle:t}]=Ae(),{data:n,refetch:s}=ee(),{mutate:d,isLoading:c}=ve(async()=>{var m;const p=await((m=a.current)==null?void 0:m.validateFields());await he(p)},{onSuccess:()=>{var p;I.success("\u65B0\u5EFA\u6210\u529F"),s(),t(),(p=a.current)==null||p.resetFields()}});return e(V,{accessible:r.canAddSysDept,children:[e(C,{type:"primary",icon:e(ne,{},void 0,!1,{fileName:l,lineNumber:42,columnNumber:36},void 0),onClick:t,children:"\u65B0\u5EFA"},void 0,!1,{fileName:l,lineNumber:42,columnNumber:7},void 0),e(G,{title:"\u65B0\u5EFA\u90E8\u95E8",okText:"\u63D0\u4EA4",open:i,onCancel:t,onOk:()=>d(),okButtonProps:{loading:c},children:e(me,{submitter:!1,formRef:a,grid:!0,rowProps:{gutter:[16,0]},children:[e(qe,{name:"parentId",label:"\u4E0A\u7EA7\u90E8\u95E8",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4E0A\u7EA7\u90E8\u95E8"}],fieldProps:{treeData:n!=null?n:[],fieldNames:{value:"id"}}},void 0,!1,{fileName:l,lineNumber:62,columnNumber:11},void 0),e(E,{name:"deptName",label:"\u90E8\u95E8\u540D\u79F0",rules:[{required:!0}],colProps:{span:12}},void 0,!1,{fileName:l,lineNumber:74,columnNumber:11},void 0),e(Be,{name:"orderNum",label:"\u663E\u793A\u6392\u5E8F",initialValue:0,rules:[{required:!0}],colProps:{span:12}},void 0,!1,{fileName:l,lineNumber:87,columnNumber:11},void 0),e(E,{name:"leader",label:"\u8D1F\u8D23\u4EBA",colProps:{span:12}},void 0,!1,{fileName:l,lineNumber:101,columnNumber:11},void 0),e(E,{name:"phone",label:"\u8054\u7CFB\u7535\u8BDD",colProps:{span:12}},void 0,!1,{fileName:l,lineNumber:109,columnNumber:11},void 0),e(E,{name:"email",label:"\u90AE\u7BB1",colProps:{span:12}},void 0,!1,{fileName:l,lineNumber:117,columnNumber:11},void 0),e(re.Group,{name:"status",label:"\u72B6\u6001",valueEnum:W,initialValue:g.ENABLE,colProps:{span:12}},void 0,!1,{fileName:l,lineNumber:125,columnNumber:11},void 0)]},void 0,!0,{fileName:l,lineNumber:54,columnNumber:9},void 0)},void 0,!1,{fileName:l,lineNumber:46,columnNumber:7},void 0)]},void 0,!0,{fileName:l,lineNumber:41,columnNumber:5},void 0)};var D="/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/dept/components/ButtonDelete.tsx";const Oe=()=>{const r=B(),a=M(),{deptId:i,deptName:t,visible:n}=K(),s=U(),d=()=>{G.confirm({title:"\u5220\u9664\u786E\u8BA4",content:e(T,{children:["\u786E\u5B9A\u5BF9",e(j.Text,{code:!0,children:t},void 0,!1,{fileName:D,lineNumber:24,columnNumber:14},void 0),"\u8FDB\u884C",e(j.Text,{code:!0,children:"\u5220\u9664"},void 0,!1,{fileName:D,lineNumber:25,columnNumber:11},void 0),"\u64CD\u4F5C\u5417\uFF1F"]},void 0,!0),onOk:async()=>{await Pe({deptId:i}),I.success("\u5220\u9664\u6210\u529F"),s(),a.invalidateQueries(R)}})};return e(V,{accessible:r.canRemoveSysDept,children:e(C,{danger:!0,ghost:!0,icon:e(de,{},void 0,!1,{fileName:D,lineNumber:39,columnNumber:34},void 0),disabled:!n,onClick:d,children:"\u5220\u9664"},void 0,!1,{fileName:D,lineNumber:39,columnNumber:7},void 0)},void 0,!1,{fileName:D,lineNumber:38,columnNumber:5},void 0)},$e={title:"\u90E8\u95E8\u540D\u79F0",dataIndex:"deptName",key:"deptName",valueType:"text"},Me={title:"\u8D1F\u8D23\u4EBA",dataIndex:"leader",key:"leader",valueType:"text"},Qe={title:"\u8054\u7CFB\u7535\u8BDD",dataIndex:"phone",key:"phone",valueType:"text"},We={title:"\u90AE\u7BB1",dataIndex:"email",key:"email",valueType:"text"},Ge=(r=[])=>({title:"\u4E0A\u7EA7\u90E8\u95E8",dataIndex:"parentId",key:"parentId",valueType:"treeSelect",fieldProps:{treeData:r,dropdownMatchSelectWidth:250,fieldNames:{value:"id"}}});var f="/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/dept/components/DescDetails.tsx";const x={xs:1,sm:1,md:1,lg:1,xl:2},He=()=>{const[r,a]=h.exports.useState([]),i=B(),[t]=ce.useForm(),n=M(),{deptId:s,visible:d}=K(),{data:c}=ee(),p=Ge(c),{data:m,loading:P,refreshAsync:F}=pe(async()=>{var k;const{ancestors:u,...v}=await ye({deptId:s}),w=(k=u==null?void 0:u.split(","))!=null?k:[];return{...v,ancestors:Number(w[w.length-1])}},{ready:d&&s>0,refreshDeps:[s],onSuccess:()=>{a([])}}),b=i!=null&&i.canEditSysDept?{form:t,editableKeys:r,onChange:(u,v)=>{a(u),u.length===1&&!Array.isArray(v)&&t.setFieldsValue({[u[0]]:v[u[0]]})},onSave:async(u,v)=>{await Fe({deptId:s,deptName:m.deptName,orderNum:m.orderNum,parentId:0,[u]:v[u]}),await Promise.all([n.invalidateQueries(R),F()]),I.success("\u4FDD\u5B58\u6210\u529F")}}:void 0;return d?e(Q,{spinning:P,children:[e(A,{column:x,editable:b,dataSource:m,columns:[Ce,Ie,Te]},void 0,!1,{fileName:f,lineNumber:90,columnNumber:7},void 0),e(q,{},void 0,!1,{fileName:f,lineNumber:97,columnNumber:7},void 0),e(A,{column:x,editable:b,dataSource:m,columns:[$e,p]},void 0,!1,{fileName:f,lineNumber:99,columnNumber:7},void 0),e(q,{},void 0,!1,{fileName:f,lineNumber:101,columnNumber:7},void 0),e(A,{column:x,editable:b,dataSource:m,columns:[Me,Qe,We]},void 0,!1,{fileName:f,lineNumber:103,columnNumber:7},void 0)]},void 0,!0,{fileName:f,lineNumber:89,columnNumber:5},void 0):e(H,{description:"\u70B9\u51FB\u9009\u62E9\u5DE6\u4FA7\u90E8\u95E8\u9879\u67E5\u770B\u8BE6\u60C5"},void 0,!1,{fileName:f,lineNumber:85,columnNumber:12},void 0)};var o="/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/dept/components/TreeDept.tsx";const Ke=r=>e(T,{children:[e(_,{color:"rgb(148 163 184)",children:r.orderNum},void 0,!1,{fileName:o,lineNumber:19,columnNumber:7},void 0),e(be,{children:[r.deptName,e(_,{color:r.status===g.ENABLE?"success":"error",children:r.status===g.ENABLE?"\u542F\u7528\u4E2D":"\u5DF2\u7981\u7528"},void 0,!1,{fileName:o,lineNumber:24,columnNumber:9},void 0)]},void 0,!0,{fileName:o,lineNumber:21,columnNumber:7},void 0)]},void 0,!0),Ue=()=>{var p,m;const[r,a]=h.exports.useState([]),i=Xe(),{data:t,isFetching:n}=Z(),s=_e(),d=U(),c=(r==null?void 0:r.length)!==0&&(r==null?void 0:r.length)===((p=t==null?void 0:t.allParentIds)==null?void 0:p.length);return h.exports.useEffect(()=>{t!=null&&t.allParentIds&&a(t.allParentIds)},[t==null?void 0:t.allParentIds]),e(T,{children:[e("div",{className:"flex justify-between items-center",children:[e(C,{size:"small",className:"my-2",icon:c?e(Ne,{},void 0,!1,{fileName:o,lineNumber:56,columnNumber:33},void 0):e(fe,{},void 0,!1,{fileName:o,lineNumber:56,columnNumber:57},void 0),onClick:()=>a(c?[]:t==null?void 0:t.allParentIds),children:c?"\u5168\u90E8\u6298\u53E0":"\u5168\u90E8\u5C55\u5F00"},void 0,!1,{fileName:o,lineNumber:53,columnNumber:9},void 0),e(xe,{onFinish:async P=>{i(P)},children:[e(E,{name:"deptName",label:"\u90E8\u95E8\u540D\u79F0"},void 0,!1,{fileName:o,lineNumber:67,columnNumber:11},void 0),e(Le,{name:"status",label:"\u72B6\u6001",valueEnum:W},void 0,!1,{fileName:o,lineNumber:69,columnNumber:11},void 0)]},void 0,!0,{fileName:o,lineNumber:62,columnNumber:9},void 0)]},void 0,!0,{fileName:o,lineNumber:52,columnNumber:7},void 0),t!=null&&t.treeData?e(Q,{spinning:n,children:e(ge,{blockNode:!0,showLine:{showLeafIcon:!1},titleRender:Ke,treeData:(m=t==null?void 0:t.treeData)!=null?m:[],expandedKeys:r,onExpand:a,fieldNames:{title:"deptName",key:"deptId",children:"children"},onSelect:(P,{selected:F,node:{key:b}})=>{if(F){s({visible:!0,deptId:b,deptName:t.data.find(u=>u.deptId===b).deptName});return}d()}},void 0,!1,{fileName:o,lineNumber:75,columnNumber:11},void 0)},void 0,!1,{fileName:o,lineNumber:74,columnNumber:9},void 0):e(H,{},void 0,!1,{fileName:o,lineNumber:102,columnNumber:9},void 0)]},void 0,!0)};var N="/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/dept/index.tsx";const ft=()=>e(te,{children:e(S,{ghost:!0,gutter:24,children:[e(S,{title:"\u90E8\u95E8\u5217\u8868",colSpan:"500px",extra:e(Ye,{},void 0,!1,{fileName:N,lineNumber:13,columnNumber:54},void 0),children:e(Ue,{},void 0,!1,{fileName:N,lineNumber:14,columnNumber:11},void 0)},void 0,!1,{fileName:N,lineNumber:13,columnNumber:9},void 0),e(S,{title:"\u90E8\u95E8\u8BE6\u60C5",extra:e(Oe,{},void 0,!1,{fileName:N,lineNumber:17,columnNumber:38},void 0),children:e(He,{},void 0,!1,{fileName:N,lineNumber:18,columnNumber:11},void 0)},void 0,!1,{fileName:N,lineNumber:17,columnNumber:9},void 0)]},void 0,!0,{fileName:N,lineNumber:12,columnNumber:7},void 0)},void 0,!1,{fileName:N,lineNumber:11,columnNumber:5},void 0);export{ft as default};
