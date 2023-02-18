import{r as g,j as u,a,F as W}from"./jsx-runtime-06f68cbc.js";import{bE as D,bF as $,bG as z,bc as J,ch as Z,bb as ee,ci as te,aG as ae,Y as B,bd as se,cj as oe,aT as re,aD as ce,bK as ne,bO as ie,be as le,aU as de,ay as ue}from"./index-37fcb888.js";import{g as F,e as he}from"./index-e664d339.js";import{b as me}from"./index-0b89c729.js";import{x as L,z as I,u as R,aw as pe,ax as ge,ay as U,az as be,aA as ye,aB as fe,aC as we,aD as Ae,aE as Te,aF as xe,aG as Pe,aH as Ce}from"./react-27f57fd0.js";import{a as O,u as V}from"./utils-409125c9.js";import{h as Se,n as Ie,o as Re,y as q,j as Me}from"./index-6f927546.js";import{u as A}from"./useRequest-d8c32193.js";import{A as x}from"./index-82e4db64.js";import{u as T}from"./useMutation-a5a4d775.js";import{P as p}from"./index-6de84089.js";import{P as ke}from"./index-c7a8e352.js";import{P as E}from"./index-07678be4.js";import{P as je}from"./index-79dca7fe.js";import{P as Ee}from"./index-3ea42731.js";import{A as w}from"./index-be624491.js";import{u as ve}from"./index-66e83bf7.js";import{U as Ne}from"./index-aaa53664.js";import"./mutation-9ec6c65f.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const v=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/user/model/index.ts/atomMainTableActions",L(void 0));v.debugLabel="atomMainTableActions";const K=()=>I(v),De=()=>me(v),N=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/user/model/index.ts/atomSelectedDeptId",L(0));N.debugLabel="atomSelectedDeptId";const Be=()=>I(N),Fe=()=>R(N),M=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/user/model/index.ts/atomResetPwdModal",O({open:!1}));M.debugLabel="atomResetPwdModal";const Le=()=>{const e=R(M);return t=>{e({open:!0,record:t})}},Ue=()=>V(M),Oe=()=>I(M),P=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/user/model/index.ts/atomAddOrEditModal",O({open:!1,actionType:"add"}));P.debugLabel="atomAddOrEditModal";const Ve=()=>{const e=R(P);return()=>{e({open:!0,actionType:"add"})}},qe=()=>{const e=R(P);return t=>{e({open:!0,actionType:"edit",userId:t})}},Ke=()=>V(P),Ye=()=>I(P);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Ge=()=>{const{message:e}=x.useApp(),t=g.useRef(),r=K(),{open:c,actionType:o,userId:s}=Ye(),l=Ke(),i=()=>{var n;o==="edit"&&((n=t.current)==null||n.resetFields()),l()},{valueEnumSysNormalDisable:C,defaultValueSysNormalDisable:f}=F(),{valueEnumSysUserSex:k,defaultValueSysUserSex:j}=he(),{data:b}=A(async()=>{const{posts:n,roles:d}=await pe();return{posts:n.reduce((m,y)=>m.set(y.postId,y.postName),new Map),roles:d.reduce((m,y)=>m.set(y.roleId,y.roleName),new Map)}}),{data:h}=A(async()=>{const{data:n}=await ge({configKey:"sys.user.initPassword"});return n.msg}),{data:S}=A(()=>U({deptQuery:{}})),[,G]=g.useTransition();A(async()=>{const{postIds:n,roleIds:d,user:m}=await be({userId:s});return{...m,postIds:n,roleIds:d}},{ready:c&&o==="edit"&&!!s,onSuccess:n=>{G(()=>{var d;(d=t.current)==null||d.setFieldsValue(n)})},refreshDeps:[s]});const{isLoading:X,mutateAsync:H}=T(async()=>{var d,m;const n=await((m=(d=t.current)==null?void 0:d.validateFieldsReturnFormatValue)==null?void 0:m.call(d));if(o==="add"){const{roleIds:y=[],postIds:_=[],...Q}=n;await ye({roleIds:y,postIds:_,...Q})}else await fe({userId:s,...n})},{onSuccess:()=>{var n;l(),r==null||r.reload(),(n=t.current)==null||n.resetFields(),e.success(o==="add"?"新增成功":"编辑成功")}});return u(D,{title:o==="add"?"新增用户":"编辑用户",formRef:t,grid:!0,colProps:{span:12},modalProps:{okText:"提交",onCancel:i,confirmLoading:X},width:600,open:c,onFinish:()=>H(),children:[a(p,{name:"nickName",label:"用户昵称",rules:[{required:!0}]}),a(ke,{name:"deptId",label:"归属部门",fieldProps:{treeData:S??[],fieldNames:{value:"id"}}}),a(p,{name:"phoneNumber",label:"手机号码",rules:[{pattern:Se,message:"手机号码格式错误"}],fieldProps:{maxLength:11}}),a(p,{name:"email",label:"邮箱",rules:[{pattern:Ie,message:"邮箱格式错误"}]}),o==="add"&&a(p,{name:"userName",label:"用户名称",rules:[{required:!0}]}),o==="add"&&a(p.Password,{name:"password",label:"用户密码",rules:[{required:!0}],initialValue:h}),a(E,{name:"sex",label:"用户性别",valueEnum:k,initialValue:j}),a(je.Group,{name:"status",label:"状态",valueEnum:C,initialValue:f,rules:[{required:!0}]}),a(E,{name:"postIds",label:"岗位",valueEnum:(b==null?void 0:b.posts)??{},mode:"multiple",colProps:{span:24}}),a(E,{name:"roleIds",label:"角色",valueEnum:(b==null?void 0:b.roles)??{},mode:"multiple",colProps:{span:24}}),a(Ee,{name:"remark",label:"备注",colProps:{span:24}})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Xe=()=>{const{message:e}=x.useApp(),t=g.useRef(),r=Ue(),{open:c,record:o}=Oe();return g.useEffect(()=>{var s;if(c){(s=t.current)==null||s.resetFields();const l=setTimeout(()=>{var i;(i=t.current)==null||i.setFieldsValue({userName:o.userName}),clearTimeout(l)},0)}},[c]),u(D,{title:"重置密码",open:c,formRef:t,modalProps:{onCancel:r},width:500,onFinish:async({password:s})=>{await we({...o,password:s}),e.success("重置密码成功")},children:[a(p,{name:"userName",label:"用户名称",readonly:!0}),a(p.Password,{required:!0,name:"password",label:"新密码",rules:[{required:!0,message:"请输入新密码"},{pattern:Re,message:"密码长度应在6-20之间，只能包含字母、数字和下划线"}]}),a(p.Password,{required:!0,name:"confirmPassword",label:"确认密码",rules:[{required:!0,message:"请输入确认密码"},({getFieldsValue:s})=>({validator(l,i){return!i||s().password===i?Promise.resolve():Promise.reject(new Error("两次输入的密码不一致"))}})]})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const He=()=>{const e=Ve();return a(w,{accessKey:"system:user:add",children:a($,{onClick:e})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const _e=({userId:e})=>{const t=qe();return a(w,{accessKey:"system:user:edit",children:a(z,{onClick:()=>t(e)})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Qe=({searchParams:e})=>{const{message:t}=x.useApp(),{isLoading:r,mutate:c}=T(async()=>{const o=await Ae(e,{format:"blob"});await q(o.data,`user_${new Date().getTime()}.xlsx`)},{onSuccess:()=>{t.success("导出成功")}});return a(w,{accessKey:"system:user:export",children:a(J,{loading:r,onClick:()=>c()})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const{Dragger:We}=Ne,$e=()=>{const[e,{toggle:t}]=ve(),[r,c]=g.useState(!1),[o,s]=g.useState([]),{message:l,modal:i}=x.useApp(),{mutate:C,isLoading:f}=T(async()=>{const{data:{code:h,msg:S}}=await Te({updateSupport:r},{file:o[0].originFileObj});if(h!==200){l.error(S);return}t(),i.info({title:"导入结果",content:S})}),{mutate:k,isLoading:j}=T(async()=>{const{data:h}=await xe();await q(h,`user_template_${new Date().getTime()}.xlsx`)});return u(w,{accessKey:"system:user:import",children:[a(Z,{onClick:t}),u(ee,{title:"导入用户",open:e,onCancel:t,onOk:()=>C(),okButtonProps:{loading:f},children:[u(We,{accept:".xlsx, .xls",maxCount:1,beforeUpload:()=>!1,onChange:h=>s(h.fileList),fileList:o,onRemove:()=>s([]),children:[a("p",{className:"ant-upload-drag-icon",children:a(te,{})}),a("p",{className:"ant-upload-text",children:"点击或拖拽文件到此区域上传"})]}),u("div",{className:"flex flex-col items-center pt-2",children:[a(ae,{checked:r,onChange:h=>{c(h.target.checked)},children:"是否更新已经存在的用户数据"}),u("div",{children:[a("span",{children:"仅允许导入xls、xlsx格式文件"}),a(B,{type:"link",onClick:()=>k(),loading:j,children:"下载模板"})]})]})]})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Y=({userIds:e,batch:t,disabled:r})=>{const{message:c,modal:o}=x.useApp(),s=K(),{mutate:l,isLoading:i}=T(Pe,{onSuccess:()=>{var f;s==null||s.reload(),(f=s==null?void 0:s.clearSelected)==null||f.call(s),c.success("删除成功")}});return a(w,{accessKey:"system:user:remove",children:a(se,{batch:t,disabled:r,onClick:()=>{o.confirm({title:"删除用户",content:`确定删除用户编号为 ${e.join(",")} 的数据吗？`,onOk:()=>l({userIds:e}),okButtonProps:{loading:i}})}})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ze=({record:e})=>{const t=Le();return a(w,{accessKey:"system:user:resetPwd",children:a(B,{type:"link",danger:!0,icon:a(oe,{}),onClick:()=>t(e),children:"重置密码"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Je=()=>{const[e,t]=g.useState(""),r=Fe(),{data:c,loading:o}=A(()=>U({deptQuery:{deptName:e}}),{refreshDeps:[e],debounceWait:500});return u(re,{spinning:o,children:[a(ce.Search,{allowClear:!0,placeholder:"请输入部门名称",className:"mb-3",onSearch:s=>{t(s)}}),!c||c.length===0?a(ne,{}):a(ie,{treeData:c,defaultExpandAll:!0,fieldNames:{title:"label",key:"id"},onSelect:(s,{node:{key:l}})=>{r(l)},blockNode:!0})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Ze=()=>{const{valueEnumSysNormalDisable:e}=F();return[{dataIndex:"userId",key:"userId",title:"用户编号",valueType:"text",hideInSearch:!0},{dataIndex:"userName",key:"userName",title:"用户名称",valueType:"text"},{dataIndex:"nickName",key:"nickName",title:"用户昵称",valueType:"text",hideInSearch:!0},{dataIndex:["dept","deptName"],key:"deptDeptName",title:"部门名称",valueType:"text",hideInSearch:!0},{dataIndex:"phoneNumber",key:"phoneNumber",title:"手机号码",valueType:"text",copyable:!0},{title:"状态",dataIndex:"status",key:"status",valueType:"select",valueEnum:e},{title:"创建时间",dataIndex:"createTime",key:"createTime",valueType:"dateTime",hideInSearch:!0,sorter:!0},{title:"操作",valueType:"option",render:(t,r)=>r.userId===1?null:u(W,{children:[a(_e,{userId:r.userId}),a(Y,{userIds:[r.userId]}),a(ze,{record:r})]}),fixed:"right",width:300},{title:"创建时间",dataIndex:"createTimeRange",key:"createTimeRange",valueType:"dateTimeRange",hideInTable:!0}]},et=({selectedRows:e})=>a(Y,{disabled:e.length===0,batch:!0,userIds:e.map(t=>t.userId)}),tt=(e,t)=>u("div",{className:"flex gap-4",children:[a(de,{className:"w-80",children:a(Je,{})}),a("div",{className:"overflow-auto w-full",children:t})]}),at=()=>{const e=De(),[t,r]=g.useState({}),c=Ze(),o=Be(),s=o>0?{deptId:o}:{};return a(le,{rowKey:"userId",actionRef:e,columns:c,params:s,request:async(...l)=>{const i=Me(...l);return r(i),await Ce(i)},toolbar:{actions:[a(Qe,{searchParams:t},"ButtonExport"),a($e,{},"ButtonImport"),a(He,{},"ButtonAdd")]},tableRender:tt,tableAlertOptionRender:et})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const xt=()=>u(ue,{children:[a(at,{}),a(Ge,{}),a(Xe,{})]});export{xt as default};
