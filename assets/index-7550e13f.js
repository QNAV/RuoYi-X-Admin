import{a as o}from"./jsx-runtime-f6344dff.js";import{a9 as l,bf as u,bg as d,aw as h,aC as m,bj as p}from"./index-015dcaaa.js";import{A as g}from"./index-7992010b.js";import{b as y}from"./index-e0a0428b.js";import{b as x,c as I}from"./react-661e4416.js";import{e as T,f as b}from"./Monitor-e5d3d1b7.js";import{j as f,i as k}from"./index-c0f81502.js";import"./index-6ed05db7.js";import"./utils.esm-0d150205.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const n=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/monitor/online/model/index.ts/atomMainTableActions",x(void 0));n.debugLabel="atomMainTableActions";const A=()=>I(n),j=()=>y(n);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const s=({userName:e,tokenId:t,batch:i=!1,disabled:c})=>{const a=A();return o(g,{accessKey:r=>r.has(f)?!0:i?r.has("monitor:online:batchLogout"):r.has("monitor:online:forceLogout"),children:o(l,{icon:o(u,{}),disabled:c,danger:!0,size:"small",type:"link",onClick:()=>{d.confirm({title:"操作确认",content:`确定强退用户 ${e} 吗？`,onOk:async()=>{var r;await T({tokenId:t}),(r=a==null?void 0:a.clearSelected)==null||r.call(a),a==null||a.reload(),h.success("强退成功")}})},children:i?"批量强退":"强退"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const v=()=>[{title:"序号",dataIndex:"index",key:"index",valueType:"indexBorder"},{title:"会话编号",dataIndex:"tokenId",key:"tokenId",valueType:"text",hideInSearch:!0,ellipsis:!0,copyable:!0},{title:"用户名称",dataIndex:"userName",key:"userName",valueType:"text"},{title:"部门名称",dataIndex:"deptName",key:"deptName",valueType:"text",hideInSearch:!0},{title:"主机地址",dataIndex:"ipaddr",key:"ipaddr",valueType:"text"},{title:"登录地点",dataIndex:"loginLocation",key:"loginLocation",valueType:"text",hideInSearch:!0},{title:"浏览器",dataIndex:"browser",key:"browser",valueType:"text",hideInSearch:!0},{title:"操作系统",dataIndex:"os",key:"os",valueType:"text",hideInSearch:!0},{title:"登录时间",dataIndex:"loginTime",key:"loginTime",valueType:"dateTime",hideInSearch:!0,sorter:!0},{title:"操作",valueType:"option",fixed:"right",render:(e,t)=>o(s,{tokenId:t.tokenId,userName:t.userName})}],C=({selectedRows:e})=>o(s,{batch:!0,disabled:e.length===0,userName:e.map(t=>t.userName).join(","),tokenId:e.map(t=>t.tokenId).join(",")}),K=()=>{const e=j(),t=v();return o(m,{children:o(p,{rowKey:"tokenId",scroll:{x:"105%"},actionRef:e,columns:t,request:(...i)=>b(k(...i)),tableAlertOptionRender:C})})};export{K as default};
