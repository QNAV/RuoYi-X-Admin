import{r as f,j as i,a as t,F as x}from"./jsx-runtime-f6344dff.js";import{bM as z,bg as R,aM as H,aw as A,bi as U,bQ as J,aG as Z,bR as j,aX as k,aN as C,a9 as _,bS as $,bT as ee,bU as te,bV as ae,N as se,aC as oe,aY as I}from"./index-ebe28143.js";import{A as E}from"./index-43333ece.js";import{g as v}from"./index-d215da22.js";import{c as re,u as ne,a as M,l as L,m as ce,n as ie,o as le,p as de}from"./react-de33de79.js";import{p as B}from"./index-b820ab61.js";import{w as O}from"./utils-3a113903.js";import{a as ue,u as me}from"./utils-a84de89f.js";import{u as pe}from"./index-d3065d17.js";import{u as q}from"./useMutation-4c031409.js";import{P as he}from"./index-137a3938.js";import{P as ge}from"./index-c4455e81.js";import{P as y}from"./index-dc2256b0.js";import{P as ye}from"./index-55c353dc.js";import{a as fe}from"./index-0f92c6d4.js";import{u as De}from"./useRequest-ddb5d81b.js";import{P as T}from"./index-f584b755.js";import{P as be}from"./index-5c86d0ec.js";import{T as F}from"./index-cdd7ceff.js";import"./mutation-5ed66b35.js";import"./index-f75ab0a0.js";import"./Skeleton-7c20f8b5.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const Q="systemDept",P=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/dept/model/index.ts/atomDeptDetails",ue({open:!1,deptId:0,deptName:""}));P.debugLabel="atomDeptDetails";const V=()=>re(P),Pe=()=>{const e=ne(P);return(a,o)=>{e({open:!0,deptId:a,deptName:o})}},Se=()=>me(P),K=[Q,"list"],Ie=(e,a)=>{const o=M(K,async()=>{const n=await L(e);return{treeData:B(n,{id:"deptId",pId:"parentId",rootPId:null}),map:n.reduce((s,r)=>s.set(r.deptId,r),new Map),allParentIds:Array.from(n.reduce((s,r)=>s.add(r.parentId),new Set))}},{onSuccess:n=>{a.onSuccess(n.allParentIds)}});return f.useEffect(()=>{o.refetch()},[e]),o},G=()=>{const e=O();return()=>e.invalidateQueries(K)},W=[Q,"options"],X=()=>M(W,async()=>{const e=await L({});return B(e,{id:"deptId",pId:"parentId",rootPId:null})}),Y=()=>{const e=O();return()=>e.invalidateQueries(W)};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const Te=()=>{const e=f.useRef(),[a,{toggle:o}]=pe(),{data:n,refetch:u}=X(),{defaultValueSysNormalDisable:s,valueEnumSysNormalDisable:r}=v(),{mutate:p,isLoading:m}=q(async()=>{var d;const l=await((d=e.current)==null?void 0:d.validateFields());await ce(l)},{onSuccess:async()=>{var l;o(),(l=e.current)==null||l.resetFields(),u(),A.success("新增成功")}});return i(E,{accessKey:"system:dept:add",children:[t(z,{onClick:o}),t(R,{title:"新增部门",okText:"提交",open:a,onCancel:o,onOk:()=>p(),okButtonProps:{loading:m},children:i(H,{submitter:!1,formRef:e,grid:!0,rowProps:{gutter:[16,0]},children:[t(he,{name:"parentId",label:"上级部门",rules:[{required:!0,message:"请选择上级部门"}],fieldProps:{treeData:n??[],fieldNames:{label:"deptName",value:"deptId"}}}),t(y,{name:"deptName",label:"部门名称",rules:[{required:!0}],colProps:{span:12}}),t(ge,{name:"orderNum",label:"显示排序",initialValue:0,rules:[{required:!0}],colProps:{span:12}}),t(y,{name:"leader",label:"负责人",colProps:{span:12}}),t(y,{name:"phone",label:"联系电话",colProps:{span:12}}),t(y,{name:"email",label:"邮箱",colProps:{span:12}}),t(ye.Group,{name:"status",label:"状态",valueEnum:r,initialValue:s,colProps:{span:12}})]})})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const Ne=()=>{const{deptId:e,deptName:a,open:o}=V(),n=Se(),u=G(),s=Y();return t(E,{accessKey:"system:dept:remove",children:t(U,{disabled:!o,type:"primary",size:"middle",onClick:()=>{R.confirm({title:"删除确认",content:i(x,{children:["确定删除部门",t(J.Text,{code:!0,children:a}),"吗？"]}),onOk:async()=>{await ie({deptId:e}),await Promise.all([n(),u(),s()]),A.success("删除成功")}})}})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const N={xs:1,sm:1,md:1,lg:1,xl:2},xe=()=>{const e=G(),a=Y(),{deptId:o,open:n}=V(),{data:u}=X(),{valueEnumSysNormalDisable:s}=v(),{data:r,loading:p,refresh:m}=De(async()=>{const{ancestors:c,...h}=await le({deptId:o}),g=(c==null?void 0:c.split(","))??[];return{...h,ancestors:Number(g[g.length-1])}},{ready:n&&o>0,refreshDeps:[o],onSuccess:()=>{w([])}}),{mutateAsync:l}=q(de,{onSuccess:async()=>{m(),await Promise.all([e(),a()]),A.success("保存成功")}}),d=fe(),[D]=Z.useForm(),[b,w]=f.useState([]),S=d("system:dept:edit")?{form:D,editableKeys:b,onChange:(c,h)=>{if(w(c),c.length>0){const[g]=c;D.setFieldsValue({[g]:h[g]})}},onSave:async(c,h)=>{await l({deptId:o,deptName:r.deptName,orderNum:r.orderNum,parentId:r.parentId,[c]:h[c]})}}:void 0;return n?i(k,{spinning:p,children:[t(T,{column:N,editable:S,dataSource:r,columns:[{title:"状态",dataIndex:"status",key:"status",valueType:"select",valueEnum:s},{title:"排序",dataIndex:"orderNum",key:"orderNum",valueType:"digit"},{title:"创建时间",dataIndex:"createTime",key:"createTime",valueType:"dateTime",editable:!1}]}),t(C,{}),t(T,{column:N,editable:S,dataSource:r,columns:[{title:"部门名称",dataIndex:"deptName",key:"deptName",valueType:"text"},{title:"上级部门",dataIndex:"parentId",key:"parentId",valueType:"treeSelect",fieldProps:{treeData:u,dropdownMatchSelectWidth:250,fieldNames:{label:"deptName",value:"deptId"}}}]}),t(C,{}),t(T,{column:N,editable:S,dataSource:r,columns:[{title:"负责人",dataIndex:"leader",key:"leader",valueType:"text"},{title:"联系电话",dataIndex:"phone",key:"phone",valueType:"text"},{title:"邮箱",dataIndex:"email",key:"email",valueType:"text"}]})]}):t(j,{description:"点击选择左侧部门项查看详情"})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const Ae=e=>i(x,{children:[t(F,{color:"rgb(148 163 184)",children:e.orderNum}),i(se,{children:[e.deptName,t(F,{color:e.status==="0"?"success":"error",children:e.status==="0"?"启用中":"已禁用"})]})]}),ve=()=>{var l;const[e,a]=f.useState([]),[o,n]=f.useState({}),{valueEnumSysNormalDisable:u}=v(),{data:s,isFetching:r}=Ie(o,{onSuccess:d=>{a(d)}}),p=Pe(),m=(e==null?void 0:e.length)!==0&&(e==null?void 0:e.length)===((l=s==null?void 0:s.allParentIds)==null?void 0:l.length);return i(x,{children:[i("div",{className:"flex justify-between items-center",children:[t(_,{size:"small",className:"my-2",icon:m?t($,{}):t(ee,{}),onClick:()=>a(m?[]:s==null?void 0:s.allParentIds),children:m?"全部折叠":"全部展开"}),i(te,{onFinish:async d=>n(d),children:[t(y,{name:"deptName",label:"部门名称"}),t(be,{name:"status",label:"状态",valueEnum:u})]})]}),t(k,{spinning:r,children:s!=null&&s.treeData.length?t(ae,{blockNode:!0,showLine:{showLeafIcon:!1},titleRender:Ae,treeData:s.treeData,expandedKeys:e,onExpand:a,height:700,fieldNames:{title:"deptName",key:"deptId"},onSelect:(d,{selected:D,node:{key:b}})=>{D&&p(b,s.map.get(b).deptName)}}):t(j,{})})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const Je=()=>t(oe,{children:i(I,{ghost:!0,gutter:[16,16],wrap:!0,children:[t(I,{title:"部门列表",colSpan:{xxl:8,xl:12,lg:14,md:24,sm:24,xs:24},extra:t(Te,{}),children:t(ve,{})}),t(I,{title:"部门详情",colSpan:{xxl:16,xl:12,lg:10,md:24,sm:24,xs:24},className:"h-full",extra:t(Ne,{}),children:t(xe,{})})]})});export{Je as default};
