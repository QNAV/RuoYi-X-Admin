import{a,r as m}from"./jsx-runtime-06f68cbc.js";import{Y as g,ba as p,bb as h,ag as i,bc as y,bd as f,ay as x,be as I}from"./index-37fcb888.js";import{c as T}from"./index-e664d339.js";import{A as r}from"./index-be624491.js";import{b}from"./index-0b89c729.js";import{x as C,z as v}from"./react-27f57fd0.js";import{s as k,a as S,b as A,d as j}from"./Monitor-e5ad0af8.js";import{u as B}from"./useMutation-a5a4d775.js";import{j as M}from"./index-6f927546.js";import"./mutation-9ec6c65f.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const c=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/monitor/logininfor/model/index.ts/atomMainTableActions",C(void 0));c.debugLabel="atomMainTableActions";const u=()=>v(c),R=()=>b(c);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const w=()=>{const e=u();return a(r,{accessKey:"monitor:logininfor:remove",children:a(g,{danger:!0,icon:a(p,{}),onClick:()=>{h.confirm({title:"操作确认",content:"确认清空访问记录吗？",onOk:async()=>{var o;await k(),(o=e==null?void 0:e.clearSelected)==null||o.call(e),e==null||e.reload(),i.success("清空成功")}})},children:"清空"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const L=({searchParams:e})=>{const{isLoading:t,mutate:o}=B(S,{onSuccess:()=>{i.success("导出成功")}});return a(r,{accessKey:"monitor:logininfor:export",children:a(y,{loading:t,onClick:()=>o(e)})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const d=({infoId:e,disabled:t,batch:o})=>{const s=u();return a(r,{accessKey:"monitor:logininfor:remove",children:a(f,{batch:o,disabled:t,onClick:()=>{h.confirm({title:"操作确认",content:`确定删除访问编号为 ${e} 的访问记录吗？`,onOk:async()=>{var n;await A({infoIds:e}),(n=s==null?void 0:s.clearSelected)==null||n.call(s),s==null||s.reload(),i.success("删除成功")}})}})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const P=()=>{const{valueEnumSysCommonStatus:e}=T();return[{title:"访问编号",dataIndex:"infoId",key:"infoId",valueType:"text",hideInSearch:!0},{title:"用户名称",dataIndex:"userName",key:"userName",valueType:"text"},{title:"登录地址",dataIndex:"ipaddr",key:"ipaddr",valueType:"text"},{title:"登录地点",dataIndex:"loginLocation",key:"loginLocation",valueType:"text",hideInSearch:!0},{title:"浏览器",dataIndex:"browser",key:"browser",valueType:"text",hideInSearch:!0},{title:"操作系统",dataIndex:"os",key:"os",valueType:"text",hideInSearch:!0},{title:"登录状态",dataIndex:"status",key:"status",valueType:"select",valueEnum:e},{title:"操作信息",dataIndex:"msg",key:"msg",valueType:"text",hideInSearch:!0},{title:"登录时间",dataIndex:"loginTime",key:"loginTime",valueType:"dateTime",hideInSearch:!0},{title:"登录时间",dataIndex:"dateTimeRange",key:"dateTimeRange",valueType:"dateTimeRange",hideInTable:!0},{title:"操作",dataIndex:"option",key:"option",valueType:"option",fixed:"right",render:(t,o)=>a(d,{infoId:[o.infoId]})}]},E=({selectedRows:e})=>a(d,{batch:!0,disabled:e.length===0,infoId:e.map(t=>t.infoId)}),Q=()=>{const e=R(),[t,o]=m.useState({}),s=P();return a(x,{children:a(I,{rowKey:"infoId",actionRef:e,columns:s,request:async(...l)=>{const n=M(...l);return o(n),await j(n)},toolbar:{actions:[a(w,{},"ButtonCleanUp"),a(L,{searchParams:t},"ButtonExport")]},tableAlertOptionRender:E})})};export{Q as default};
