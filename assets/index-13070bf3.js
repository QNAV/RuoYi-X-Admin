import{aU as I,aV as b,d as a,ac as i,ax as l,aW as g,aX as m,aE as u,aY as v,r as k,as as f,aZ as A,a_ as C,b6 as p}from"./index-17e53f5a.js";import{a as M}from"./index-fcbd28c9.js";import{f as j,g as P,h as B,i as L}from"./Monitor-6fb75c79.js";import{u as h}from"./useMutation.esm-4b8826dd.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const d=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/monitor/operlog/model/index.ts/atomMainTableActions",I(void 0));d.debugLabel="atomMainTableActions";const y=()=>b(d),w=()=>M(d);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const O=()=>{const e=y(),{isLoading:t,mutate:s}=h(()=>j(),{onSuccess:()=>{e==null||e.reload(),u.success("清空操作日志成功")}});return a(i,{accessible:!0,children:a(l,{danger:!0,icon:a(g,{}),onClick:()=>m.confirm({title:"清空操作日志",content:"确认清空操作日志吗？",okButtonProps:{loading:t},onOk:s}),children:"清空"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const E=({searchParams:e})=>{const{isLoading:t,mutate:s}=h(()=>P(e),{onSuccess:()=>{u.success("导出成功")}});return a(i,{accessible:!0,children:a(l,{ghost:!0,type:"primary",icon:a(v,{}),loading:t,onClick:()=>s(),children:"导出当前列表"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const T=({operId:e,disabled:t=!1,isBatch:s=!1})=>{const c=s?"批量删除":"删除",o=y(),{mutateAsync:r,isLoading:x}=h(async n=>{await B({operIds:n})},{onSuccess:()=>{var n;o==null||o.reload(),(n=o==null?void 0:o.clearSelected)==null||n.call(o),u.success("删除成功")}});return a(i,{accessible:!0,children:a(l,{type:"link",danger:!0,disabled:t,icon:a(g,{}),onClick:()=>{m.confirm({title:"删除操作日志",content:`确定删除操作编号为 ${e} 的操作日志吗`,onOk:async()=>r(e),okButtonProps:{loading:x}})},children:c})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const R=()=>{const{data:e}=p("sys_common_status"),{data:t}=p("sys_oper_type");return[{title:"日志编号",dataIndex:"operId",key:"operId",valueType:"text",hideInSearch:!0},{title:"系统模块",dataIndex:"title",key:"title",valueType:"text"},{title:"操作类型",dataIndex:"businessType",key:"businessType",valueType:"select",valueEnum:(t==null?void 0:t.valueEnum)??{}},{title:"请求方式",dataIndex:"requestMethod",key:"requestMethod",valueType:"text",hideInSearch:!0},{title:"操作人员",dataIndex:"operName",key:"operName",valueType:"text"},{title:"操作地址",dataIndex:"operIp",key:"operIp",valueType:"text",hideInSearch:!0},{title:"操作地点",dataIndex:"operLocation",key:"operLocation",valueType:"text",hideInSearch:!0},{title:"操作状态",dataIndex:"status",key:"status",valueType:"select",valueEnum:(e==null?void 0:e.valueEnum)??{}},{title:"操作日期",dataIndex:"operTime",key:"operTime",valueType:"dateTime",hideInSearch:!0},{title:"操作",dataIndex:"option",key:"option",valueType:"option",fixed:"right",render:(s,c)=>a(T,{operId:c.operId})}]},S=({selectedRows:e})=>a(T,{isBatch:!0,disabled:e.length===0,operId:e.map(t=>t.operId).join(",")}),X=()=>{const e=w(),t=R(),[s,c]=k.exports.useState({});return a(f,{children:a(A,{rowKey:"operId",actionRef:e,columns:t,request:async(...o)=>{const r=C(...o);return c(r),await L(r)},toolbar:{actions:[a(O,{},"ButtonCleanUp"),a(E,{searchParams:s},"ButtonExport")]},tableAlertOptionRender:S})})};export{X as default};