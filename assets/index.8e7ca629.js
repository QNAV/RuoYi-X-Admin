import{l as J,n as $,aG as R,r as A,q as L,g as l,af as O,j as t,ag as P,aA as U,ai as M,W as Z,$ as g,az as ee,Y as B,ah as te,F as T,aH as ae,aI as se,aJ as q,aK as V,au as f,X as v,aL as ue,aM as re,aN as oe,aO as ne,aP as ce,aQ as ie,aR as j,I as le,ax as I}from"./index.82fca14a.js";import{b as x,j as C}from"./index.325812ac.js";import{S as Q,a as de,b as pe,c as he,d as me}from"./SysDeptService.ae6b4ce5.js";import{a as De,u as Ee}from"./utils.a0eb1f2f.js";import{u as W}from"./useQuery.esm.a64abd47.js";import{P as ge}from"./index.e38a80bb.js";import{W as Ae}from"./index.6aae9c3e.js";import{u as ye}from"./index.5536a60c.js";import{u as Fe}from"./useMutation.esm.d46f3ad9.js";import{u as fe}from"./useRequest.5976c31c.js";import{T as k}from"./index.70a5c138.js";import"./utils.esm.41c15342.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const _="systemDept",y=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/dept/model/index.ts/atomDeptDetails",De({open:!1,deptId:0,deptName:""}));y.debugLabel="atomDeptDetails";const K=()=>J(y),Ie=()=>{const e=$(y);return(a,n)=>{e({open:!0,deptId:a,deptName:n})}},be=()=>Ee(y),G=[_,"list"],Pe=(e,a)=>{const n=W(G,async()=>{const r=await Q(e),o=R(r,{id:"deptId",pId:"parentId",rootPId:null});return{map:r.reduce((s,u)=>s.set(u.deptId,u),new Map),treeData:o,allParentIds:Array.from(r.reduce((s,u)=>s.add(u.parentId),new Set))}},{onSuccess:r=>{a.onSuccess(r.allParentIds)}});return A.exports.useEffect(()=>{n.refetch()},[e]),n},X=()=>{const e=L();return()=>e.invalidateQueries(G)},Y=[_,"options"],z=()=>W(Y,async()=>{const e=await Q({});return R(e,{id:"deptId",pId:"parentId",rootPId:null})}),H=()=>{const e=L();return()=>e.invalidateQueries(Y)};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const Be=()=>{var d;const{canAddSysDept:e}=x(),a=A.exports.useRef(),[n,{toggle:r}]=ye(),{data:o,refetch:s}=z(),{data:u}=C("sys_normal_disable"),{mutate:h,isLoading:m}=Fe(async()=>{var p;const c=await((p=a.current)==null?void 0:p.validateFields());await de(c)},{onSuccess:()=>{var c;B.success("\u65B0\u5EFA\u6210\u529F"),s(),r(),(c=a.current)==null||c.resetFields()}});return l(O,{accessible:e,children:[t(P,{type:"primary",icon:t(U,{}),onClick:r,children:"\u65B0\u5EFA"}),t(M,{title:"\u65B0\u5EFA\u90E8\u95E8",okText:"\u63D0\u4EA4",open:n,onCancel:r,onOk:()=>h(),okButtonProps:{loading:m},children:l(Z,{submitter:!1,formRef:a,grid:!0,rowProps:{gutter:[16,0]},children:[t(Ae,{name:"parentId",label:"\u4E0A\u7EA7\u90E8\u95E8",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4E0A\u7EA7\u90E8\u95E8"}],fieldProps:{treeData:o!=null?o:[],fieldNames:{label:"deptName",value:"deptId"}}}),t(g,{name:"deptName",label:"\u90E8\u95E8\u540D\u79F0",rules:[{required:!0}],colProps:{span:12}}),t(ge,{name:"orderNum",label:"\u663E\u793A\u6392\u5E8F",initialValue:0,rules:[{required:!0}],colProps:{span:12}}),t(g,{name:"leader",label:"\u8D1F\u8D23\u4EBA",colProps:{span:12}}),t(g,{name:"phone",label:"\u8054\u7CFB\u7535\u8BDD",colProps:{span:12}}),t(g,{name:"email",label:"\u90AE\u7BB1",colProps:{span:12}}),t(ee.Group,{name:"status",label:"\u72B6\u6001",valueEnum:(d=u==null?void 0:u.mapData)!=null?d:{},initialValue:u==null?void 0:u.defaultValue,colProps:{span:12}})]})})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const Te=()=>{const{canRemoveSysDept:e}=x(),{deptId:a,deptName:n,open:r}=K(),o=be(),s=X(),u=H();return t(O,{accessible:r&&e,children:t(P,{danger:!0,ghost:!0,icon:t(te,{}),onClick:()=>{M.confirm({title:"\u5220\u9664\u786E\u8BA4",content:l(T,{children:["\u786E\u5B9A\u5220\u9664\u90E8\u95E8",t(ae.Text,{code:!0,children:n}),"\u5417\uFF1F"]}),onOk:async()=>{await pe({deptId:a}),B.success("\u5220\u9664\u6210\u529F"),o(),s(),u()}})},children:"\u5220\u9664"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const b={xs:1,sm:1,md:1,lg:1,xl:2},xe=()=>{var S;const[e,a]=A.exports.useState([]),n=x(),[r]=se.useForm(),o=X(),s=H(),{deptId:u,open:h}=K(),{data:m}=z(),{data:d}=C("sys_normal_disable"),{data:c,loading:p,refresh:F}=fe(async()=>{var N;const{ancestors:i,...E}=await he({deptId:u}),w=(N=i==null?void 0:i.split(","))!=null?N:[];return{...E,ancestors:Number(w[w.length-1])}},{ready:h&&u>0,refreshDeps:[u],onSuccess:()=>{a([])}}),D=n!=null&&n.canEditSysDept?{form:r,editableKeys:e,onChange:(i,E)=>{a(i),i.length===1&&!Array.isArray(E)&&r.setFieldsValue({[i[0]]:E[i[0]]})},onSave:async(i,E)=>{await me({deptId:u,deptName:c.deptName,orderNum:c.orderNum,parentId:0,[i]:E[i]}),B.success("\u4FDD\u5B58\u6210\u529F"),F(),o(),s()}}:void 0;return h?l(V,{spinning:p,children:[t(f,{column:b,editable:D,dataSource:c,columns:[{title:"\u72B6\u6001",dataIndex:"status",key:"status",valueType:"select",valueEnum:(S=d==null?void 0:d.mapData)!=null?S:{}},{title:"\u6392\u5E8F",dataIndex:"orderNum",key:"orderNum",valueType:"digit"},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",key:"createTime",valueType:"dateTime"}]}),t(v,{}),t(f,{column:b,editable:D,dataSource:c,columns:[{title:"\u90E8\u95E8\u540D\u79F0",dataIndex:"deptName",key:"deptName",valueType:"text"},{title:"\u4E0A\u7EA7\u90E8\u95E8",dataIndex:"parentId",key:"parentId",valueType:"treeSelect",fieldProps:{treeData:m,dropdownMatchSelectWidth:250,fieldNames:{label:"deptName",value:"deptId"}}}]}),t(v,{}),t(f,{column:b,editable:D,dataSource:c,columns:[{title:"\u8D1F\u8D23\u4EBA",dataIndex:"leader",key:"leader",valueType:"text"},{title:"\u8054\u7CFB\u7535\u8BDD",dataIndex:"phone",key:"phone",valueType:"text"},{title:"\u90AE\u7BB1",dataIndex:"email",key:"email",valueType:"text"}]})]}):t(q,{description:"\u70B9\u51FB\u9009\u62E9\u5DE6\u4FA7\u90E8\u95E8\u9879\u67E5\u770B\u8BE6\u60C5"})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const Ce=e=>l(T,{children:[t(k,{color:"rgb(148 163 184)",children:e.orderNum}),l(ie,{children:[e.deptName,t(k,{color:e.status===j.ENABLE?"success":"error",children:e.status===j.ENABLE?"\u542F\u7528\u4E2D":"\u5DF2\u7981\u7528"})]})]}),Se=()=>{var d,c;const[e,a]=A.exports.useState([]),[n,r]=A.exports.useState({}),{data:o}=C("sys_normal_disable"),{data:s,isFetching:u}=Pe(n,{onSuccess:p=>{a(p)}}),h=Ie(),m=(e==null?void 0:e.length)!==0&&(e==null?void 0:e.length)===((d=s==null?void 0:s.allParentIds)==null?void 0:d.length);return l(T,{children:[l("div",{className:"flex justify-between items-center",children:[t(P,{size:"small",className:"my-2",icon:m?t(ue,{}):t(re,{}),onClick:()=>a(m?[]:s==null?void 0:s.allParentIds),children:m?"\u5168\u90E8\u6298\u53E0":"\u5168\u90E8\u5C55\u5F00"}),l(oe,{onFinish:async p=>r(p),children:[t(g,{name:"deptName",label:"\u90E8\u95E8\u540D\u79F0"}),t(ne,{name:"status",label:"\u72B6\u6001",valueEnum:(c=o==null?void 0:o.mapData)!=null?c:{},initialValue:o==null?void 0:o.defaultValue})]})]}),s!=null&&s.treeData?t(V,{spinning:u,children:t("div",{className:"h-[calc(100vh-270px)]",children:t(ce,{blockNode:!0,showLine:{showLeafIcon:!1},titleRender:Ce,treeData:s.treeData,expandedKeys:e,onExpand:a,fieldNames:{title:"deptName",key:"deptId"},onSelect:(p,{selected:F,node:{key:D}})=>{!F||h(D,s.map.get(D).deptName)}})})}):t(q,{})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const We=()=>t(le,{children:l(I,{ghost:!0,gutter:16,children:[t(I,{title:"\u90E8\u95E8\u5217\u8868",colSpan:"500px",extra:t(Be,{}),children:t(Se,{})}),t(I,{title:"\u90E8\u95E8\u8BE6\u60C5",extra:t(Te,{}),children:t(xe,{})})]})});export{We as default};
