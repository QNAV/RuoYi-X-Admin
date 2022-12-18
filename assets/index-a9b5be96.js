import{j as a,a as A,F as I,r as T}from"./jsx-runtime-5957e344.js";import{bS as g,i as f,A as w,aw as p,cd as R,M as q,bG as M,b$ as B,$ as U,bb as x,aq as E}from"./index-c6375c14.js";import{d as k}from"./index-2d8eb446.js";import{d as L}from"./index-f0336901.js";import{b as V,c as _,a2 as D,a3 as K,a4 as S,a5 as O,a6 as F}from"./index-2b896701.js";import{u as v}from"./useMutation.esm-32f9b4ae.js";import{n as N,j}from"./index-be1f0aa3.js";import{u as X}from"./index-4a857fdb.js";import"./utils.esm-67a58dc2.js";import"./mutation.esm-ffe24956.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const y=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/roleAuth/model/index.ts/atomMainTable",V(void 0));y.debugLabel="atomMainTable";const P=()=>_(y),Y=()=>L(y);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const C=({userId:e,userName:t,isBatch:u,disabled:r})=>{const l=u?"批量取消授权":"取消授权",c=g(),n=Number(c.roleId),s=P(),{mutateAsync:d,isLoading:m}=v(async()=>{Array.isArray(e)?await D({roleId:n,userIds:e}):await K({roleId:n,userId:e})},{onSuccess:()=>{var o;s==null||s.reload(),(o=s==null?void 0:s.clearSelected)==null||o.call(s),f.success("取消授权成功")}});return a(w,{accessible:!0,children:a(p,{type:"link",danger:!0,disabled:r,icon:a(R,{}),onClick:()=>{q.confirm({title:"取消授权",content:A(I,{children:["确定取消授权用户",a(M.Text,{code:!0,children:t}),"吗？"]}),onOk:()=>d(),okButtonProps:{loading:m}})},children:l})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const $=()=>{const e=g(),t=Number(e.roleId),[u,{toggle:r}]=X(),l=T.exports.useRef(),[c,n]=T.exports.useState([]),s=P(),{isLoading:d,mutate:m}=v(()=>S({roleId:t,userIds:c}),{onSuccess:()=>{var o,h,b;(o=l.current)==null||o.reload(),(b=(h=l.current)==null?void 0:h.clearSelected)==null||b.call(h),s==null||s.reload(),r(),f.success("授权成功")}}),{data:i}=k("sys_common_status");return A(I,{children:[a(p,{type:"primary",icon:a(B,{}),onClick:()=>{var o;(o=l.current)==null||o.reload(),r()},children:"授权用户"}),a(U,{open:u,title:"授权用户",placement:"left",onClose:r,width:850,footer:a(p,{type:"primary",disabled:c.length===0,loading:d,onClick:()=>m(),children:"提交"}),footerStyle:{textAlign:"right"},children:a(x,{ghost:!0,rowKey:"userId",actionRef:l,columns:[{dataIndex:"userName",key:"userName",title:"用户名称",valueType:"text"},{dataIndex:"nickName",key:"nickName",title:"用户昵称",valueType:"text",hideInSearch:!0},{dataIndex:"email",title:"邮箱",valueType:"text",hideInSearch:!0,formItemProps:{rules:[{required:!0,message:"请输入邮箱"},{pattern:N,message:"邮箱格式错误"}]}},{dataIndex:"phoneNumber",key:"phoneNumber",title:"手机号码",valueType:"text",copyable:!0},{title:"状态",dataIndex:"status",key:"status",valueType:"select",valueEnum:(i==null?void 0:i.valueEnum)??{},formItemProps:{initialValue:i==null?void 0:i.defaultValue,required:!0,rules:[{required:!0,message:"请选择状态"}]}},{title:"创建时间",dataIndex:"createTime",key:"createTime",valueType:"dateTime",editable:!1,hideInSearch:!0,sorter:!0}],tableAlertRender:!1,rowSelection:{onChange:o=>{n(o)}},request:(...o)=>O(j(...o))})})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const G=({selectedRows:e})=>a(C,{userId:e.map(t=>t.userId),userName:e.map(t=>t.userName).join(","),isBatch:!0,disabled:e.length===0}),Q=()=>{const e=g(),t=Number(e.roleId),u=Y(),{data:r}=k("sys_common_status");return a(x,{rowKey:"userId",actionRef:u,params:{roleId:t},columns:[{dataIndex:"userName",key:"userName",title:"用户名称",valueType:"text"},{dataIndex:"nickName",key:"nickName",title:"用户昵称",valueType:"text",hideInSearch:!0},{dataIndex:"email",title:"邮箱",valueType:"text",hideInSearch:!0,formItemProps:{rules:[{required:!0,message:"请输入邮箱"},{pattern:N,message:"邮箱格式错误"}]}},{dataIndex:"phoneNumber",key:"phoneNumber",title:"手机号码",valueType:"text",copyable:!0},{title:"状态",dataIndex:"status",key:"status",valueType:"select",valueEnum:(r==null?void 0:r.valueEnum)??{},formItemProps:{initialValue:r==null?void 0:r.defaultValue,required:!0,rules:[{required:!0,message:"请选择状态"}]}},{title:"创建时间",dataIndex:"createTime",key:"createTime",valueType:"dateTime",editable:!1,hideInSearch:!0,sorter:!0},{title:"操作",dataIndex:"option",valueType:"option",render:(l,c)=>a(C,{userId:c.userId,userName:c.userName})}],request:(...l)=>F(j(...l)),tableAlertRender:G,toolbar:{actions:[a($,{},"DrawerTableAuth")]}})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const oe=()=>a(E,{children:a(Q,{})});export{oe as default};
