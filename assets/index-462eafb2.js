import{g as J,l as Q,d as a,az as Z,_ as O,aV as B,aW as C,ai as I,r as w,b7 as v,dE as ee,dF as te,dG as L,dH as ae,af as m,j as d,bY as V,aI as se,bc as oe,aF as R,dI as re,dJ as ce,dK as ie,be as ne,ay as b,b$ as le,bR as de,dL as ue,aZ as he,dM as me,d1 as pe,aY as q,aD as ge,dN as be,aX as Pe,dO as fe,cf as we,ax as ye,ce as Ae,ck as Te,a_ as Ce,a$ as Ie,dP as Re,k as ke,at as Me}from"./index-3af5a8dd.js";import{a as xe}from"./index-805e6ef1.js";import{a as Y,u as U}from"./utils-667a4caf.js";import{u as y}from"./useRequest-0ccbe725.js";import{u as k}from"./useMutation.esm-483465d4.js";import{P as h}from"./index-91bf6a8e.js";import{P as ve}from"./index-9a0d778d.js";import{P as T}from"./index-d445d06a.js";import{P as Se}from"./index-9749f883.js";import{u as je}from"./index-4f9a7bbb.js";import{P as Ne}from"./index-b0a1db38.js";import"./index-c88f691b.js";var Fe=["fieldProps","unCheckedChildren","checkedChildren","proFieldProps"],Ee=J.forwardRef(function(e,t){var r=e.fieldProps,o=e.unCheckedChildren,s=e.checkedChildren,n=e.proFieldProps,c=Q(e,Fe);return a(Z,O({valueType:"switch",fieldProps:O({unCheckedChildren:o,checkedChildren:s},r),ref:t,valuePropName:"checked",proFieldProps:n,filedConfig:{valuePropName:"checked",ignoreWidth:!0}},c))});const De=Ee;globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const S=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/user/model/index.ts/atomMainTableActions",B(void 0));S.debugLabel="atomMainTableActions";const X=()=>C(S),Oe=()=>xe(S),j=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/user/model/index.ts/atomSelectedDeptId",B(0));j.debugLabel="atomSelectedDeptId";const Be=()=>C(j),Le=()=>I(j),M=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/user/model/index.ts/atomResetPwdModal",Y({open:!1}));M.debugLabel="atomResetPwdModal";const Ve=()=>{const e=I(M);return t=>{e({open:!0,record:t})}},qe=()=>U(M),Ye=()=>C(M),A=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/user/model/index.ts/atomAddOrEditModal",Y({open:!1,actionType:"add",userId:0}));A.debugLabel="atomAddOrEditModal";const Ue=()=>{const e=I(A);return()=>{e({open:!0,actionType:"add",userId:0})}},Xe=()=>{const e=I(A);return t=>{e({open:!0,actionType:"edit",userId:t})}},_e=()=>U(A),We=()=>C(A);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Ge=()=>{var N,F,E,D;const e=w.exports.useRef(),t=X(),{open:r,actionType:o,userId:s}=We(),n=_e(),c=()=>{var i;o==="edit"&&((i=e.current)==null||i.resetFields()),n()},{data:p}=v("sys_normal_disable"),{data:P}=v("sys_user_sex"),{data:f}=y(async()=>{const{posts:i,roles:l}=await ee({});return{posts:i.reduce((u,g)=>u.set(g.postId,g.postName),new Map),roles:l.reduce((u,g)=>u.set(g.roleId,g.roleName),new Map)}}),{data:W}=y(async()=>(await te({configKey:"sys.user.initPassword"})).data.msg),{data:x}=y(()=>L({}),{}),{data:G}=y(async()=>{const{postIds:i,roleIds:l,user:u}=await ae({userId:s});return{...u,postIds:i,roleIds:l}},{ready:r&&o==="edit"&&s>0,onSuccess:i=>{var l;(l=e.current)==null||l.setFieldsValue(i)},refreshDeps:[s]}),{isLoading:K,mutateAsync:$}=k(async()=>{var l,u;const i=await((u=(l=e.current)==null?void 0:l.validateFieldsReturnFormatValue)==null?void 0:u.call(l));if(o==="add"){const{roleIds:g=[],postIds:H=[],...z}=i;await re({roleIds:g,postIds:H,...z})}else await ce({...G,...i,userId:s})},{onSuccess:()=>{var i;n(),t==null||t.reload(),(i=e.current)==null||i.resetFields(),R.success(o==="add"?"新增成功":"编辑成功")}});return a(m,{accessible:!0,children:d(V,{title:o==="add"?"新增用户":"编辑用户",formRef:e,grid:!0,colProps:{span:12},modalProps:{okText:"提交",onCancel:c,confirmLoading:K},width:600,open:r,onFinish:()=>$(),children:[a(h,{name:"nickName",label:"用户昵称",rules:[{required:!0}]}),a(ve,{name:"deptId",label:"归属部门",fieldProps:{treeData:x!=null?x:[],fieldNames:{value:"id"}}}),a(h,{name:"phoneNumber",label:"手机号码",rules:[{pattern:se,message:"手机号码格式错误"}],fieldProps:{maxLength:11}}),a(h,{name:"email",label:"邮箱",rules:[{pattern:oe,message:"邮箱格式错误"}]}),o==="add"&&a(h,{name:"userName",label:"用户名称",rules:[{required:!0}]}),o==="add"&&a(h.Password,{name:"password",label:"用户密码",rules:[{required:!0}],initialValue:W}),a(T,{name:"sex",label:"用户性别",valueEnum:(N=P==null?void 0:P.mapData)!=null?N:{}}),a(T,{name:"status",label:"状态",valueEnum:(F=p==null?void 0:p.mapData)!=null?F:{},rules:[{required:!0}]}),a(T,{name:"postIds",label:"岗位",valueEnum:(E=f==null?void 0:f.posts)!=null?E:{},mode:"multiple",colProps:{span:24}}),a(T,{name:"roleIds",label:"角色",valueEnum:(D=f==null?void 0:f.roles)!=null?D:{},mode:"multiple",colProps:{span:24}}),a(Se,{name:"remark",label:"备注",colProps:{span:24}})]})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Ke=()=>{const e=w.exports.useRef(),t=qe(),{open:r,record:o}=Ye();return w.exports.useEffect(()=>{var s;if(r){(s=e.current)==null||s.resetFields();const n=setTimeout(()=>{var c;(c=e.current)==null||c.setFieldsValue({userName:o.userName}),clearTimeout(n)},0)}},[r]),a(m,{accessible:!0,children:d(V,{title:"重置密码",open:r,formRef:e,modalProps:{onCancel:t},width:500,onFinish:async({password:s})=>{await ie({...o,password:s}),R.success("重置密码成功")},children:[a(h,{name:"userName",label:"用户名称",readonly:!0}),a(h.Password,{required:!0,name:"password",label:"新密码",rules:[{required:!0,message:"请输入新密码"},{pattern:ne,message:"密码长度应在6-20之间，只能包含字母、数字和下划线"}]}),a(h.Password,{required:!0,name:"confirmPassword",label:"确认密码",rules:[{required:!0,message:"请输入确认密码"},({getFieldsValue:s})=>({validator(n,c){return!c||s().password===c?Promise.resolve():Promise.reject(new Error("两次输入的密码不一致"))}})]})]})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const $e=()=>{const e=Ue();return a(m,{accessible:!0,children:a(b,{type:"primary",icon:a(le,{}),onClick:e,children:"新增"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const He=({userId:e})=>{const t=Xe();return a(m,{accessible:!0,children:a(b,{type:"link",icon:a(de,{}),onClick:()=>t(e),children:"编辑"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ze=({searchParams:e})=>{const{isLoading:t,mutate:r}=k(()=>ue(e),{onSuccess:()=>{R.success("导出成功")}});return a(m,{accessible:!0,children:a(b,{icon:a(he,{}),loading:t,onClick:()=>r(),children:"导出"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Je=()=>{const e=w.exports.useRef(),[t,{toggle:r}]=je(),{mutate:o,isLoading:s}=k(()=>me());return d(m,{accessible:!0,children:[a(b,{icon:a(pe,{}),onClick:r,children:"导入"}),d(q,{title:"导入用户",open:t,onCancel:r,children:[a("div",{className:"text-right",children:a(b,{type:"link",onClick:()=>o(),loading:s,children:"下载模板"})}),d(ge,{layout:"horizontal",submitter:!1,formRef:e,children:[a(De,{name:"isCover",label:"是否更新已经存在的用户数据"}),a(Ne,{name:"list"})]})]})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const _=({userId:e,isBatch:t,disabled:r})=>{const o=t?"批量删除":"删除",s=X(),{mutateAsync:n,isLoading:c}=k(()=>be({userIds:e}),{onSuccess:()=>{var P;s==null||s.reload(),(P=s==null?void 0:s.clearSelected)==null||P.call(s),R.success("删除成功")}});return a(m,{accessible:!0,children:a(b,{type:"link",danger:!0,disabled:r,icon:a(Pe,{}),onClick:()=>{q.confirm({title:"删除用户",content:`确定删除用户编号为 ${e} 的数据吗？`,onOk:()=>n(),okButtonProps:{loading:c}})},children:o})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Qe=({record:e})=>{const t=Ve();return a(m,{accessible:!0,children:a(b,{type:"link",danger:!0,icon:a(fe,{}),onClick:()=>t(e),children:"重置密码"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Ze=()=>{const[e,t]=w.exports.useState(""),r=Le(),{data:o,loading:s}=y(()=>L({deptName:e}),{refreshDeps:[e],debounceWait:500});return d(we,{spinning:s,children:[a(ye.Search,{allowClear:!0,placeholder:"请输入部门名称",className:"mb-3",onSearch:n=>{t(n)}}),!o||o.length===0?a(Ae,{}):a(Te,{treeData:o,defaultExpandAll:!0,fieldNames:{title:"label",key:"id"},onSelect:(n,{node:{key:c}})=>{r(c)},blockNode:!0})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const et=()=>{var t;const{data:e}=v("sys_normal_disable");return[{dataIndex:"userId",key:"userId",title:"用户编号",valueType:"text",hideInSearch:!0},{dataIndex:"userName",key:"userName",title:"用户名称",valueType:"text"},{dataIndex:"nickName",key:"nickName",title:"用户昵称",valueType:"text",hideInSearch:!0},{dataIndex:["dept","deptName"],key:"deptDeptName",title:"部门名称",valueType:"text",hideInSearch:!0},{dataIndex:"phoneNumber",key:"phoneNumber",title:"手机号码",valueType:"text",copyable:!0},{title:"状态",dataIndex:"status",key:"status",valueType:"select",valueEnum:(t=e==null?void 0:e.mapData)!=null?t:{}},{title:"创建时间",dataIndex:"createTime",key:"createTime",valueType:"dateTime",hideInSearch:!0,sorter:!0},{title:"操作",valueType:"option",render:(r,o)=>o.userId===1?null:d(ke,{children:[a(He,{userId:o.userId}),a(_,{userId:o.userId}),a(Qe,{record:o})]}),fixed:"right",width:300},{title:"创建时间",dataIndex:"createTimeRange",key:"createTimeRange",valueType:"dateTimeRange",hideInTable:!0}]},tt=({selectedRows:e})=>a(_,{disabled:e.length===0,isBatch:!0,userId:e.map(t=>t.userId).join(",")}),at=(e,t)=>d("div",{className:"flex gap-4",children:[a("div",{className:"bg-white p-4",children:a(Ze,{})}),a("div",{className:"overflow-auto w-full",children:t})]}),st=()=>{const e=Oe(),[t,r]=w.exports.useState({}),o=et(),s=Be(),n=s>0?{deptId:s}:{};return a(Ce,{rowKey:"userId",actionRef:e,columns:o,params:n,request:async(...c)=>{const p=Ie(...c);return r(p),await Re(p)},toolbar:{actions:[a(ze,{searchParams:t},"ButtonExport"),a(Je,{},"ButtonImport"),a($e,{},"ButtonAdd")]},tableRender:at,tableAlertOptionRender:tt})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const bt=()=>d(Me,{children:[a(st,{}),a(Ge,{}),a(Ke,{})]});export{bt as default};
