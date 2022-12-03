import{aX as R,aY as w,cL as g,aH as A,dM as M,dN as q,d as a,ac as B,aA as p,dO as L,a_ as U,j as I,h as x,cj as _,r as T,dP as D,b9 as f,di as E,D as V,b0 as v,be as k,dQ as K,b1 as N,dR as O,av as S}from"./index-66f925ea.js";import{a as X}from"./index-3b92f562.js";import{u as P}from"./useMutation.esm-f06be1b0.js";import{u as Y}from"./index-13997d6d.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const y=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/roleAuth/model/index.ts/atomMainTable",R(void 0));y.debugLabel="atomMainTable";const j=()=>w(y),Q=()=>X(y);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const C=({userId:e,userName:t,isBatch:i,disabled:s})=>{const l=i?"批量取消授权":"取消授权",c=g(),n=Number(c.roleId),r=j(),{mutateAsync:d,isLoading:m}=P(async()=>{Array.isArray(e)?await M({roleId:n,userIds:e}):await q({roleId:n,userId:e})},{onSuccess:()=>{var o;r==null||r.reload(),(o=r==null?void 0:r.clearSelected)==null||o.call(r),A.success("取消授权成功")}});return a(B,{accessible:!0,children:a(p,{type:"link",danger:!0,disabled:s,icon:a(L,{}),onClick:()=>{U.confirm({title:"取消授权",content:I(x,{children:["确定取消授权用户",a(_.Text,{code:!0,children:t}),"吗？"]}),onOk:()=>d(),okButtonProps:{loading:m}})},children:l})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const F=()=>{const e=g(),t=Number(e.roleId),[i,{toggle:s}]=Y(),l=T.exports.useRef(),[c,n]=T.exports.useState([]),r=j(),{isLoading:d,mutate:m}=P(()=>D({roleId:t,userIds:c}),{onSuccess:()=>{var o,h,b;(o=l.current)==null||o.reload(),(b=(h=l.current)==null?void 0:h.clearSelected)==null||b.call(h),r==null||r.reload(),s(),A.success("授权成功")}}),{data:u}=f("sys_common_status");return I(x,{children:[a(p,{type:"primary",icon:a(E,{}),onClick:()=>{var o;(o=l.current)==null||o.reload(),s()},children:"授权用户"}),a(V,{open:i,title:"授权用户",placement:"left",onClose:s,width:850,footer:a(p,{type:"primary",disabled:c.length===0,loading:d,onClick:()=>m(),children:"提交"}),footerStyle:{textAlign:"right"},children:a(v,{ghost:!0,rowKey:"userId",actionRef:l,columns:[{dataIndex:"userName",key:"userName",title:"用户名称",valueType:"text"},{dataIndex:"nickName",key:"nickName",title:"用户昵称",valueType:"text",hideInSearch:!0},{dataIndex:"email",title:"邮箱",valueType:"text",hideInSearch:!0,formItemProps:{rules:[{required:!0,message:"请输入邮箱"},{pattern:k,message:"邮箱格式错误"}]}},{dataIndex:"phoneNumber",key:"phoneNumber",title:"手机号码",valueType:"text",copyable:!0},{title:"状态",dataIndex:"status",key:"status",valueType:"select",valueEnum:(u==null?void 0:u.valueEnum)??{},formItemProps:{initialValue:u==null?void 0:u.defaultValue,required:!0,rules:[{required:!0,message:"请选择状态"}]}},{title:"创建时间",dataIndex:"createTime",key:"createTime",valueType:"dateTime",editable:!1,hideInSearch:!0,sorter:!0}],tableAlertRender:!1,rowSelection:{onChange:o=>{n(o)}},request:(...o)=>K(N(...o))})})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const H=({selectedRows:e})=>a(C,{userId:e.map(t=>t.userId),userName:e.map(t=>t.userName).join(","),isBatch:!0,disabled:e.length===0}),z=()=>{const e=g(),t=Number(e.roleId),i=Q(),{data:s}=f("sys_common_status");return a(v,{rowKey:"userId",actionRef:i,params:{roleId:t},columns:[{dataIndex:"userName",key:"userName",title:"用户名称",valueType:"text"},{dataIndex:"nickName",key:"nickName",title:"用户昵称",valueType:"text",hideInSearch:!0},{dataIndex:"email",title:"邮箱",valueType:"text",hideInSearch:!0,formItemProps:{rules:[{required:!0,message:"请输入邮箱"},{pattern:k,message:"邮箱格式错误"}]}},{dataIndex:"phoneNumber",key:"phoneNumber",title:"手机号码",valueType:"text",copyable:!0},{title:"状态",dataIndex:"status",key:"status",valueType:"select",valueEnum:(s==null?void 0:s.valueEnum)??{},formItemProps:{initialValue:s==null?void 0:s.defaultValue,required:!0,rules:[{required:!0,message:"请选择状态"}]}},{title:"创建时间",dataIndex:"createTime",key:"createTime",valueType:"dateTime",editable:!1,hideInSearch:!0,sorter:!0},{title:"操作",dataIndex:"option",valueType:"option",render:(l,c)=>a(C,{userId:c.userId,userName:c.userName})}],request:(...l)=>O(N(...l)),tableAlertRender:H,toolbar:{actions:[a(F,{},"DrawerTableAuth")]}})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const $=()=>a(S,{children:a(z,{})});export{$ as default};
