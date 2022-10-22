import{h as N,l as j,aZ as A,Y as b,j as a,af as P,ag as g,bE as R,ai as w,g as B,F,ak as S,r as T,aE as q,bF as M,al as f,ax as x,am as k,I as U}from"./index.7d45cff2.js";import{a as V,c as C}from"./index.80ac3ade.js";import{a as L}from"./index.5925ae2e.js";import{g as _,h as K,i as O,j as Y,k as X}from"./SysRoleService.fe734420.js";import{u as D}from"./useMutation.esm.06815742.js";import{u as Q}from"./index.3066fee2.js";import"./useQuery.esm.9cf59493.js";import"./utils.esm.a4b259b3.js";import"./SysLoginService.1dbc923f.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const y=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/roleAuth/model/index.ts/atomMainTable",N(void 0));y.debugLabel="atomMainTable";const E=()=>j(y),Z=()=>L(y);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const v=({userId:e,userName:t,isBatch:n,disabled:u})=>{const o=n?"\u6279\u91CF\u53D6\u6D88\u6388\u6743":"\u53D6\u6D88\u6388\u6743",c=A(),i=Number(c.roleId),{canEditSysRole:h}=V(),s=E(),{mutateAsync:m,isLoading:l}=D(async()=>{Array.isArray(e)?await _({roleId:i,userIds:e}):await K({roleId:i,userId:e})},{onSuccess:()=>{var r;s==null||s.reload(),(r=s==null?void 0:s.clearSelected)==null||r.call(s),b.success("\u53D6\u6D88\u6388\u6743\u6210\u529F")}});return a(P,{accessible:h,children:a(g,{type:"link",danger:!0,disabled:u,icon:a(R,{}),onClick:()=>{w.confirm({title:"\u53D6\u6D88\u6388\u6743",content:B(F,{children:["\u786E\u5B9A\u53D6\u6D88\u6388\u6743\u7528\u6237",a(S.Text,{code:!0,children:t}),"\u5417\uFF1F"]}),onOk:()=>m(),okButtonProps:{loading:l}})},children:o})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const z=()=>{var p;const e=A(),t=Number(e.roleId),[n,{toggle:u}]=Q(),o=T.exports.useRef(),[c,i]=T.exports.useState([]),h=E(),{isLoading:s,mutate:m}=D(()=>O({roleId:t,userIds:c}),{onSuccess:()=>{var r,d,I;(r=o.current)==null||r.reload(),(I=(d=o.current)==null?void 0:d.clearSelected)==null||I.call(d),h==null||h.reload(),u(),b.success("\u6388\u6743\u6210\u529F")}}),{data:l}=C("sys_common_status");return B(F,{children:[a(g,{type:"primary",icon:a(q,{}),onClick:()=>{var r;(r=o.current)==null||r.reload(),u()},children:"\u6388\u6743\u7528\u6237"}),a(M,{open:n,title:"\u6388\u6743\u7528\u6237",placement:"left",onClose:u,width:850,footer:a(g,{type:"primary",disabled:c.length===0,loading:s,onClick:()=>m(),children:"\u63D0\u4EA4"}),footerStyle:{textAlign:"right"},children:a(f,{ghost:!0,rowKey:"userId",actionRef:o,columns:[{dataIndex:"userName",key:"userName",title:"\u7528\u6237\u540D\u79F0",valueType:"text"},{dataIndex:"nickName",key:"nickName",title:"\u7528\u6237\u6635\u79F0",valueType:"text",hideInSearch:!0},{dataIndex:"email",title:"\u90AE\u7BB1",valueType:"text",hideInSearch:!0,formItemProps:{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u90AE\u7BB1"},{pattern:x,message:"\u90AE\u7BB1\u683C\u5F0F\u9519\u8BEF"}]}},{dataIndex:"phoneNumber",key:"phoneNumber",title:"\u624B\u673A\u53F7\u7801",valueType:"text",copyable:!0},{title:"\u72B6\u6001",dataIndex:"status",key:"status",valueType:"select",valueEnum:(p=l==null?void 0:l.mapData)!=null?p:{},formItemProps:{initialValue:l==null?void 0:l.defaultValue,required:!0,rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u72B6\u6001"}]}},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",key:"createTime",valueType:"dateTime",editable:!1,hideInSearch:!0,sorter:!0}],tableAlertRender:!1,rowSelection:{onChange:r=>{i(r)}},request:(...r)=>Y(k(...r))})})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const G=({selectedRows:e})=>a(v,{userId:e.map(t=>t.userId),userName:e.map(t=>t.userName).join(","),isBatch:!0,disabled:e.length===0}),H=()=>{var o;const e=A(),t=Number(e.roleId),n=Z(),{data:u}=C("sys_common_status");return a(f,{rowKey:"userId",actionRef:n,params:{roleId:t},columns:[{dataIndex:"userName",key:"userName",title:"\u7528\u6237\u540D\u79F0",valueType:"text"},{dataIndex:"nickName",key:"nickName",title:"\u7528\u6237\u6635\u79F0",valueType:"text",hideInSearch:!0},{dataIndex:"email",title:"\u90AE\u7BB1",valueType:"text",hideInSearch:!0,formItemProps:{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u90AE\u7BB1"},{pattern:x,message:"\u90AE\u7BB1\u683C\u5F0F\u9519\u8BEF"}]}},{dataIndex:"phoneNumber",key:"phoneNumber",title:"\u624B\u673A\u53F7\u7801",valueType:"text",copyable:!0},{title:"\u72B6\u6001",dataIndex:"status",key:"status",valueType:"select",valueEnum:(o=u==null?void 0:u.mapData)!=null?o:{},formItemProps:{initialValue:u==null?void 0:u.defaultValue,required:!0,rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u72B6\u6001"}]}},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",key:"createTime",valueType:"dateTime",editable:!1,hideInSearch:!0,sorter:!0},{title:"\u64CD\u4F5C",dataIndex:"option",valueType:"option",render:(c,i)=>a(v,{userId:i.userId,userName:i.userName})}],request:(...c)=>X(k(...c)),tableAlertRender:G,toolbar:{actions:[a(z,{},"DrawerTableAuth")]}})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const oe=()=>a(U,{children:a(H,{})});export{oe as default};
