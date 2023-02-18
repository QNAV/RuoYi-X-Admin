import{a,j as f,F as A,r as I}from"./jsx-runtime-06f68cbc.js";import{bV as y,ag as x,a6 as w,Y as p,cg as q,bb as M,bJ as B,c1 as E,D as V,be as C,ay as D}from"./index-37fcb888.js";import{c as S}from"./index-e664d339.js";import{b as L}from"./index-0b89c729.js";import{x as K,z as O,as as v,at as U,au as Y,av as F}from"./react-27f57fd0.js";import{u as k}from"./useMutation-a5a4d775.js";import{n as N,j}from"./index-6f927546.js";import{u as X}from"./index-66e83bf7.js";import"./mutation-9ec6c65f.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const g=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/roleAuth/model/index.ts/atomMainTable",K(void 0));g.debugLabel="atomMainTable";const P=()=>O(g),z=()=>L(g);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const R=({userId:e,userName:t,isBatch:i,disabled:l})=>{const o=i?"批量取消授权":"取消授权",u=y(),c=Number(u.roleId),s=P(),{mutateAsync:h,isLoading:d}=k(async()=>{Array.isArray(e)?await v({roleId:c,userIds:e}):await U({roleId:c,userId:e})},{onSuccess:()=>{var n;s==null||s.reload(),(n=s==null?void 0:s.clearSelected)==null||n.call(s),x.success("取消授权成功")}});return a(w,{accessible:!0,children:a(p,{type:"link",danger:!0,disabled:l,icon:a(q,{}),onClick:()=>{M.confirm({title:"取消授权",content:f(A,{children:["确定取消授权用户",a(B.Text,{code:!0,children:t}),"吗？"]}),onOk:()=>h(),okButtonProps:{loading:d}})},children:o})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const J=()=>{const e=y(),t=Number(e.roleId),[i,{toggle:l}]=X(),o=I.useRef(),[u,c]=I.useState([]),s=P(),{isLoading:h,mutate:d}=k(()=>v({roleId:t,userIds:u}),{onSuccess:()=>{var r,m,T;(r=o.current)==null||r.reload(),(T=(m=o.current)==null?void 0:m.clearSelected)==null||T.call(m),s==null||s.reload(),l(),x.success("授权成功")}}),{valueEnumSysCommonStatus:b,defaultValueSysCommonStatus:n}=S();return f(A,{children:[a(p,{type:"primary",icon:a(E,{}),onClick:()=>{var r;(r=o.current)==null||r.reload(),l()},children:"授权用户"}),a(V,{open:i,title:"授权用户",placement:"left",onClose:l,width:850,footer:a(p,{type:"primary",disabled:u.length===0,loading:h,onClick:()=>d(),children:"提交"}),footerStyle:{textAlign:"right"},children:a(C,{ghost:!0,rowKey:"userId",actionRef:o,columns:[{dataIndex:"userName",key:"userName",title:"用户名称",valueType:"text"},{dataIndex:"nickName",key:"nickName",title:"用户昵称",valueType:"text",hideInSearch:!0},{dataIndex:"email",title:"邮箱",valueType:"text",hideInSearch:!0,formItemProps:{rules:[{required:!0,message:"请输入邮箱"},{pattern:N,message:"邮箱格式错误"}]}},{dataIndex:"phoneNumber",key:"phoneNumber",title:"手机号码",valueType:"text",copyable:!0},{title:"状态",dataIndex:"status",key:"status",valueType:"select",valueEnum:b,formItemProps:{initialValue:n,required:!0,rules:[{required:!0,message:"请选择状态"}]}},{title:"创建时间",dataIndex:"createTime",key:"createTime",valueType:"dateTime",editable:!1,hideInSearch:!0,sorter:!0}],tableAlertRender:!1,rowSelection:{onChange:r=>{c(r)}},request:(...r)=>Y(j(...r))})})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Q=({selectedRows:e})=>a(R,{userId:e.map(t=>t.userId),userName:e.map(t=>t.userName).join(","),isBatch:!0,disabled:e.length===0}),_=()=>{const e=y(),t=Number(e.roleId),i=z(),{valueEnumSysCommonStatus:l,defaultValueSysCommonStatus:o}=S();return a(C,{rowKey:"userId",actionRef:i,params:{roleId:t},columns:[{dataIndex:"userName",key:"userName",title:"用户名称",valueType:"text"},{dataIndex:"nickName",key:"nickName",title:"用户昵称",valueType:"text",hideInSearch:!0},{dataIndex:"email",title:"邮箱",valueType:"text",hideInSearch:!0,formItemProps:{rules:[{required:!0,message:"请输入邮箱"},{pattern:N,message:"邮箱格式错误"}]}},{dataIndex:"phoneNumber",key:"phoneNumber",title:"手机号码",valueType:"text",copyable:!0},{title:"状态",dataIndex:"status",key:"status",valueType:"select",valueEnum:l,formItemProps:{initialValue:o,required:!0,rules:[{required:!0,message:"请选择状态"}]}},{title:"创建时间",dataIndex:"createTime",key:"createTime",valueType:"dateTime",editable:!1,hideInSearch:!0,sorter:!0},{title:"操作",dataIndex:"option",valueType:"option",render:(u,c)=>a(R,{userId:c.userId,userName:c.userName})}],request:(...u)=>F(j(...u)),tableAlertRender:Q,toolbar:{actions:[a(J,{},"DrawerTableAuth")]}})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const re=()=>a(D,{children:a(_,{})});export{re as default};
