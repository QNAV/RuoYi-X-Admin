import{a6 as X,l as Y,j as e,aY as Z,a as ee,cO as q,cP as R,cQ as O,cR as te,cS as V,r as h,cT as B,g as c,aD as A,cU as se,b1 as ae,cy as E,aE as C,cJ as Q,cq as re,F as x,aR as ue,cV as oe,ab as _,aP as L,bC as ne,cW as ie,cX as w,K as le}from"./index.0f9d2a67.js";import{B as ce}from"./index.cfdc78d0.js";import{A as j,P as de}from"./index.cb8f5af5.js";import{u as pe,E as M,a as g}from"./useMutation.esm.5a0c3d96.js";import{S as me,a as De,b as Ee,c as he,d as Pe,e as fe}from"./SysDeptService.c25af3f2.js";import{p as ye}from"./tree.82d7504e.js";import{u as Fe}from"./index.7e29b222.js";import{M as K,L as Se,T as be}from"./Tree.74b35348.js";import{P as ge}from"./index.2be1297d.js";import{T as k,P as F}from"./index.d4dbcd99.js";import{C as Be,a as Ae,b as Ce}from"./common.18ac1a92.js";import{E as W}from"./index.96925cad.js";import{P as S}from"./index.b611068e.js";import{P as xe}from"./index.06e21318.js";import"./RouteContext.2872c9fb.js";import"./index.4418eb39.js";import"./index.2d4b6773.js";/* empty css              */var Ie=["fieldProps","request","params","proFieldProps"],Ne=function(a,r){var t=a.fieldProps,n=a.request,o=a.params,l=a.proFieldProps,d=Y(a,Ie);return e(Z,ee({valueType:"treeSelect",fieldProps:t,ref:r,request:n,params:o,filedConfig:{customLightMode:!0},proFieldProps:l},d))},Te=X.forwardRef(Ne);const ve=Te,f="systemDept",I=q({key:`${f}AtomDeptDetails`,default:{visible:!1,deptId:0,deptName:""}}),$=()=>R(I),Le=()=>O(I),G=()=>te(I),H=q({key:`${f}AtomSearchDeptListParams`,default:{}}),z=()=>R(H),we=()=>O(H),N=[f,"list"],J=()=>{const s=z();return V(N,async()=>{const a=await me(s),r=ye(a,{id:"deptId",pId:"parentId",rootPId:null});return{data:a,treeData:r,allParentIds:a.map(t=>t.parentId)}})},ke=[f,"treeData"],U=()=>V(ke,async()=>await De({})),qe=()=>{const s=we(),a=z(),r=J();return h.exports.useEffect(()=>{r.refetch()},[a]),t=>{s(t)}},Re=()=>{const s=B(),a=h.exports.useRef(),[r,{toggle:t}]=Fe(),{data:n,refetch:o}=U(),{mutate:l,isLoading:d}=pe(async()=>{var i;const p=await((i=a.current)==null?void 0:i.validateFields());await Ee(p)},{onSuccess:()=>{var p;C.success("\u65B0\u5EFA\u6210\u529F"),o(),t(),(p=a.current)==null||p.resetFields()}});return c(j,{accessible:s.canAddSysDept,children:[e(A,{type:"primary",icon:e(se,{}),onClick:t,children:"\u65B0\u5EFA"}),e(K,{title:"\u65B0\u5EFA\u90E8\u95E8",okText:"\u63D0\u4EA4",open:r,onCancel:t,onOk:()=>l(),okButtonProps:{loading:d},children:c(ae,{submitter:!1,formRef:a,grid:!0,rowProps:{gutter:[16,0]},children:[e(ve,{name:"parentId",label:"\u4E0A\u7EA7\u90E8\u95E8",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4E0A\u7EA7\u90E8\u95E8"}],fieldProps:{treeData:n!=null?n:[],fieldNames:{value:"id"}}}),e(E,{name:"deptName",label:"\u90E8\u95E8\u540D\u79F0",rules:[{required:!0}],colProps:{span:12}}),e(ge,{name:"orderNum",label:"\u663E\u793A\u6392\u5E8F",initialValue:0,rules:[{required:!0}],colProps:{span:12}}),e(E,{name:"leader",label:"\u8D1F\u8D23\u4EBA",colProps:{span:12}}),e(E,{name:"phone",label:"\u8054\u7CFB\u7535\u8BDD",colProps:{span:12}}),e(E,{name:"email",label:"\u90AE\u7BB1",colProps:{span:12}}),e(de.Group,{name:"status",label:"\u72B6\u6001",valueEnum:M,initialValue:g.ENABLE,colProps:{span:12}})]})})]})},Oe=()=>{const s=B(),a=Q(),{deptId:r,deptName:t,visible:n}=$(),o=G(),l=()=>{K.confirm({title:"\u5220\u9664\u786E\u8BA4",content:c(x,{children:["\u786E\u5B9A\u5BF9",e(k.Text,{code:!0,children:t}),"\u8FDB\u884C",e(k.Text,{code:!0,children:"\u5220\u9664"}),"\u64CD\u4F5C\u5417\uFF1F"]}),onOk:async()=>{await he({deptId:r}),C.success("\u5220\u9664\u6210\u529F"),o(),a.invalidateQueries(N)}})};return e(j,{accessible:s.canRemoveSysDept,children:e(A,{danger:!0,ghost:!0,icon:e(re,{}),disabled:!n,onClick:l,children:"\u5220\u9664"})})},Ve={title:"\u90E8\u95E8\u540D\u79F0",dataIndex:"deptName",key:"deptName",valueType:"text"},Qe={title:"\u8D1F\u8D23\u4EBA",dataIndex:"leader",key:"leader",valueType:"text"},_e={title:"\u8054\u7CFB\u7535\u8BDD",dataIndex:"phone",key:"phone",valueType:"text"},je={title:"\u90AE\u7BB1",dataIndex:"email",key:"email",valueType:"text"},Me=(s=[])=>({title:"\u4E0A\u7EA7\u90E8\u95E8",dataIndex:"parentId",key:"parentId",valueType:"treeSelect",fieldProps:{treeData:s,dropdownMatchSelectWidth:250,fieldNames:{value:"id"}}}),b={xs:1,sm:1,md:1,lg:1,xl:2},Ke=()=>{const[s,a]=h.exports.useState([]),r=B(),[t]=ue.useForm(),n=Q(),{deptId:o,visible:l}=$(),{data:d}=U(),p=Me(d),{data:i,loading:P,refreshAsync:y}=oe(async()=>{var v;const{ancestors:u,...D}=await Pe({deptId:o}),T=(v=u==null?void 0:u.split(","))!=null?v:[];return{...D,ancestors:Number(T[T.length-1])}},{ready:l&&o>0,refreshDeps:[o],onSuccess:()=>{a([])}}),m=r!=null&&r.canEditSysDept?{form:t,editableKeys:s,onChange:(u,D)=>{a(u),u.length===1&&!Array.isArray(D)&&t.setFieldsValue({[u[0]]:D[u[0]]})},onSave:async(u,D)=>{await fe({deptId:o,deptName:i.deptName,orderNum:i.orderNum,parentId:0,[u]:D[u]}),await Promise.all([n.invalidateQueries(N),y()]),C.success("\u4FDD\u5B58\u6210\u529F")}}:void 0;return l?c(_,{spinning:P,children:[e(S,{column:b,editable:m,dataSource:i,columns:[Be,Ae,Ce]}),e(L,{}),e(S,{column:b,editable:m,dataSource:i,columns:[Ve,p]}),e(L,{}),e(S,{column:b,editable:m,dataSource:i,columns:[Qe,_e,je]})]}):e(W,{description:"\u70B9\u51FB\u9009\u62E9\u5DE6\u4FA7\u90E8\u95E8\u9879\u67E5\u770B\u8BE6\u60C5"})},We=s=>c(x,{children:[e(w,{color:"rgb(148 163 184)",children:s.orderNum}),c(le,{children:[s.deptName,e(w,{color:s.status===g.ENABLE?"success":"error",children:s.status===g.ENABLE?"\u542F\u7528\u4E2D":"\u5DF2\u7981\u7528"})]})]}),$e=()=>{var p,i;const[s,a]=h.exports.useState([]),r=qe(),{data:t,isFetching:n}=J(),o=Le(),l=G(),d=(s==null?void 0:s.length)!==0&&(s==null?void 0:s.length)===((p=t==null?void 0:t.allParentIds)==null?void 0:p.length);return h.exports.useEffect(()=>{t!=null&&t.allParentIds&&a(t.allParentIds)},[t==null?void 0:t.allParentIds]),c(x,{children:[c("div",{className:"flex justify-between items-center",children:[e(A,{size:"small",className:"my-2",icon:d?e(ne,{}):e(ie,{}),onClick:()=>a(d?[]:t==null?void 0:t.allParentIds),children:d?"\u5168\u90E8\u6298\u53E0":"\u5168\u90E8\u5C55\u5F00"}),c(Se,{onFinish:async P=>{r(P)},children:[e(E,{name:"deptName",label:"\u90E8\u95E8\u540D\u79F0"}),e(xe,{name:"status",label:"\u72B6\u6001",valueEnum:M})]})]}),t!=null&&t.treeData?e(_,{spinning:n,children:e(be,{blockNode:!0,showLine:{showLeafIcon:!1},titleRender:We,treeData:(i=t==null?void 0:t.treeData)!=null?i:[],expandedKeys:s,onExpand:a,fieldNames:{title:"deptName",key:"deptId",children:"children"},onSelect:(P,{selected:y,node:{key:m}})=>{if(y){o({visible:!0,deptId:m,deptName:t.data.find(u=>u.deptId===m).deptName});return}l()}})}):e(W,{})]})},ct=()=>e(ce,{children:c(F,{ghost:!0,gutter:24,children:[e(F,{title:"\u90E8\u95E8\u5217\u8868",colSpan:"500px",extra:e(Re,{}),children:e($e,{})}),e(F,{title:"\u90E8\u95E8\u8BE6\u60C5",extra:e(Oe,{}),children:e(Ke,{})})]})});export{ct as default};
