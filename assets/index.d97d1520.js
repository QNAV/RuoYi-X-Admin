import{o as r,j as a,I as n,ak as i,al as s,af as l,ag as c,ah as d,ai as h,Y as m}from"./index.d36c19ac.js";import{b as p}from"./index.60627546.js";import"./useQuery.esm.f80d232b.js";import"./utils.esm.49cce3bb.js";import"./SysLoginService.d20d1c82.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};async function y(e,t){return r("/monitor/online/forceLogout",{method:"POST",params:{...e},...t||{}})}async function F(e,t){return r("/monitor/online/list",{method:"GET",params:{...e},...t||{}})}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const x=()=>{const{canForceLogoutMonitorOnline:e}=p();return[{title:"\u5E8F\u53F7",dataIndex:"index",key:"index",valueType:"indexBorder"},{title:"\u4F1A\u8BDD\u7F16\u53F7",dataIndex:"tokenId",key:"tokenId",valueType:"text",hideInSearch:!0,ellipsis:!0,copyable:!0},{title:"\u7528\u6237\u540D\u79F0",dataIndex:"userName",key:"userName",valueType:"text"},{title:"\u90E8\u95E8\u540D\u79F0",dataIndex:"deptName",key:"deptName",valueType:"text",hideInSearch:!0},{title:"\u4E3B\u673A",dataIndex:"ipaddr",key:"ipaddr",valueType:"text"},{title:"\u767B\u5F55\u5730\u70B9",dataIndex:"loginLocation",key:"loginLocation",valueType:"text",hideInSearch:!0},{title:"\u6D4F\u89C8\u5668",dataIndex:"browser",key:"browser",valueType:"text",hideInSearch:!0},{title:"\u64CD\u4F5C\u7CFB\u7EDF",dataIndex:"os",key:"os",valueType:"text",hideInSearch:!0},{title:"\u767B\u5F55\u65F6\u95F4",dataIndex:"loginTime",key:"loginTime",valueType:"dateTime",hideInSearch:!0,sorter:!0},{title:"\u64CD\u4F5C",valueType:"option",fixed:"right",render:(t,o,g,u)=>a(l,{accessible:e,children:a(c,{icon:a(d,{}),danger:!0,type:"link",onClick:async()=>{h.confirm({title:"\u5F3A\u9000\u7528\u6237",content:`\u786E\u5B9A\u5F3A\u9000\u7528\u6237 ${o.userName} \u5417\uFF1F`,onOk:async()=>{await y({tokenId:o.tokenId}),u==null||u.reload(),m.success("\u5F3A\u5236\u9000\u51FA\u6210\u529F")}})},children:"\u5F3A\u9000"})})}]},f=()=>{const e=x();return a(n,{children:a(i,{rowKey:"tokenId",scroll:{x:"105%"},columns:e,request:async(...t)=>F(s(...t)),rowSelection:!1})})};export{f as default};