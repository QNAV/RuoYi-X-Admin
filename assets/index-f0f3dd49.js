import{Q as w,V as q,X as D,aY as y,p as A,cc as f,cd as B,j as a,aT as M,f as p,ce as E,$ as V,b as x,q as N,aA as L,r as I,a4 as k,bC as K,cf as O,a2 as v,ae as C,cg as U,a3 as S,ch as X,B as Y}from"./index-25c53959.js";import{u as j}from"./useMutation-8db3a36b.js";import{u as Q}from"./index-fb4ad7ae.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const g=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/roleAuth/model/index.ts/atomMainTable",w(void 0));g.debugLabel="atomMainTable";const P=()=>D(g),F=()=>q(g);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const R=({userId:e,userName:t,isBatch:u,disabled:l})=>{const o=u?"批量取消授权":"取消授权",c=y(),i=Number(c.roleId),s=P(),{mutateAsync:d,isLoading:m}=j(async()=>{Array.isArray(e)?await f({roleId:i,userIds:e}):await B({roleId:i,userId:e})},{onSuccess:()=>{var n;s==null||s.reload(),(n=s==null?void 0:s.clearSelected)==null||n.call(s),A.success("取消授权成功")}});return a(M,{accessible:!0,children:a(p,{type:"link",danger:!0,disabled:l,icon:a(E,{}),onClick:()=>{V.confirm({title:"取消授权",content:x(N,{children:["确定取消授权用户",a(L.Text,{code:!0,children:t}),"吗？"]}),onOk:()=>d(),okButtonProps:{loading:m}})},children:o})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const _=()=>{const e=y(),t=Number(e.roleId),[u,{toggle:l}]=Q(),o=I.useRef(),[c,i]=I.useState([]),s=P(),{isLoading:d,mutate:m}=j(()=>f({roleId:t,userIds:c}),{onSuccess:()=>{var r,h,T;(r=o.current)==null||r.reload(),(T=(h=o.current)==null?void 0:h.clearSelected)==null||T.call(h),s==null||s.reload(),l(),A.success("授权成功")}}),{valueEnumSysNormalDisable:b,defaultValueSysNormalDisable:n}=k();return x(N,{children:[a(p,{type:"primary",icon:a(K,{}),onClick:()=>{var r;(r=o.current)==null||r.reload(),l()},children:"授权用户"}),a(O,{open:u,title:"授权用户",placement:"left",onClose:l,width:850,footer:a(p,{type:"primary",disabled:c.length===0,loading:d,onClick:()=>m(),children:"提交"}),footerStyle:{textAlign:"right"},children:a(v,{ghost:!0,rowKey:"userId",actionRef:o,columns:[{dataIndex:"userName",key:"userName",title:"用户名称",valueType:"text"},{dataIndex:"nickName",key:"nickName",title:"用户昵称",valueType:"text",hideInSearch:!0},{dataIndex:"email",title:"邮箱",valueType:"text",hideInSearch:!0,formItemProps:{rules:[{required:!0,message:"请输入邮箱"},{pattern:C,message:"邮箱格式错误"}]}},{dataIndex:"phoneNumber",key:"phoneNumber",title:"手机号码",valueType:"text",copyable:!0},{title:"状态",dataIndex:"status",key:"status",valueType:"select",valueEnum:b,formItemProps:{initialValue:n,required:!0,rules:[{required:!0,message:"请选择状态"}]}},{title:"创建时间",dataIndex:"createTime",key:"createTime",valueType:"dateTime",editable:!1,hideInSearch:!0,sorter:!0}],tableAlertRender:!1,rowSelection:{onChange:r=>{i(r)}},request:(...r)=>U(S(...r))})})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const $=({selectedRows:e})=>a(R,{userId:e.map(t=>t.userId),userName:e.map(t=>t.userName).join(","),isBatch:!0,disabled:e.length===0}),z=()=>{const e=y(),t=Number(e.roleId),u=F(),{valueEnumSysNormalDisable:l,defaultValueSysNormalDisable:o}=k();return a(v,{rowKey:"userId",actionRef:u,params:{roleId:t},columns:[{dataIndex:"userName",key:"userName",title:"用户名称",valueType:"text"},{dataIndex:"nickName",key:"nickName",title:"用户昵称",valueType:"text",hideInSearch:!0},{dataIndex:"email",title:"邮箱",valueType:"text",hideInSearch:!0,formItemProps:{rules:[{required:!0,message:"请输入邮箱"},{pattern:C,message:"邮箱格式错误"}]}},{dataIndex:"phoneNumber",key:"phoneNumber",title:"手机号码",valueType:"text",copyable:!0},{title:"状态",dataIndex:"status",key:"status",valueType:"select",valueEnum:l,formItemProps:{initialValue:o,required:!0,rules:[{required:!0,message:"请选择状态"}]}},{title:"创建时间",dataIndex:"createTime",key:"createTime",valueType:"dateTime",editable:!1,hideInSearch:!0,sorter:!0},{title:"操作",dataIndex:"option",valueType:"option",render:(c,i)=>a(R,{userId:i.userId,userName:i.userName})}],request:(...c)=>X(S(...c)),tableAlertRender:$,toolbar:{actions:[a(_,{},"DrawerTableAuth")]}})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const W=()=>a(Y,{children:a(z,{})});export{W as default};
