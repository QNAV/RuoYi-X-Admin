import{j as a,r as g}from"./jsx-runtime-5957e344.js";import{bl as y,bm as b,bn as n,a_ as T,bo as x,b5 as i,bp as p,bq as I,br as v,aU as C,bs as f,bt as A,bz as k,bA as S}from"./index-64501b2e.js";import{a as j}from"./index-79721dd3.js";import{f as B,g as M,h as P,i as L}from"./Monitor-b1414fd4.js";import{u}from"./useMutation.esm-6ef6e6de.js";import"./routes-68691bc2.js";import"./mutation.esm-d605227f.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const l=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/monitor/operlog/model/index.ts/atomMainTableActions",y(void 0));l.debugLabel="atomMainTableActions";const d=()=>b(l),O=()=>j(l);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const R=()=>{const e=d(),{isLoading:t,mutate:s}=u(B,{onSuccess:()=>{i.success("清空成功"),e==null||e.reload()}}),o=()=>{p.confirm({title:"操作确认",content:"确认清空操作日志吗？",okButtonProps:{loading:t},onOk:()=>s({})})};return a(n,{accessKey:"monitor:operlog:remove",children:a(T,{danger:!0,icon:a(x,{}),onClick:()=>o(),children:"清空"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const E=({searchParams:e})=>{const{isLoading:t,mutate:s}=u(M,{onSuccess:()=>{i.success("导出成功")}});return a(n,{accessKey:"monitor:operlog:export",children:a(I,{loading:t,onClick:()=>s(e)})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const m=({operId:e,disabled:t=!1,batch:s=!1})=>{const o=d(),{mutateAsync:c,isLoading:r}=u(P,{onSuccess:()=>{var h;o==null||o.reload(),(h=o==null?void 0:o.clearSelected)==null||h.call(o),i.success("删除成功")}});return a(n,{accessKey:"monitor:operlog:remove",children:a(v,{disabled:t,batch:s,onClick:()=>{p.confirm({title:"操作确认",content:`确定删除日志编号为 ${e} 的操作日志吗?`,onOk:async()=>c({operIds:e}),okButtonProps:{loading:r}})}})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const w=()=>{const{valueEnumSysCommonStatus:e}=k(),{valueEnumSysOperType:t}=S();return[{title:"日志编号",dataIndex:"operId",key:"operId",valueType:"text",hideInSearch:!0},{title:"系统模块",dataIndex:"title",key:"title",valueType:"text"},{title:"操作类型",dataIndex:"businessType",key:"businessType",valueType:"select",valueEnum:t},{title:"请求方式",dataIndex:"requestMethod",key:"requestMethod",valueType:"text",hideInSearch:!0},{title:"操作人员",dataIndex:"operName",key:"operName",valueType:"text"},{title:"操作地址",dataIndex:"operIp",key:"operIp",valueType:"text",hideInSearch:!0},{title:"操作地点",dataIndex:"operLocation",key:"operLocation",valueType:"text",hideInSearch:!0},{title:"操作状态",dataIndex:"status",key:"status",valueType:"select",valueEnum:e},{title:"操作日期",dataIndex:"operTime",key:"operTime",valueType:"dateTime",hideInSearch:!0},{title:"操作",dataIndex:"option",key:"option",valueType:"option",fixed:"right",render:(s,o)=>a(m,{operId:o.operId})}]},q=({selectedRows:e})=>a(m,{batch:!0,disabled:e.length===0,operId:e.map(t=>t.operId).join(",")}),z=()=>{const e=O(),t=w(),[s,o]=g.exports.useState({});return a(C,{children:a(f,{rowKey:"operId",actionRef:e,columns:t,request:async(...c)=>{const r=A(...c);return o(r),await L(r)},toolbar:{actions:[a(R,{},"ButtonCleanUp"),a(E,{searchParams:s},"ButtonExport")]},tableAlertOptionRender:q})})};export{z as default};
