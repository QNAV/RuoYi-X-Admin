import{aD as r,a,aV as o,as as s,aB as d}from"./index.65c0ca1d.js";import{B as i}from"./index.02142c27.js";async function l(t,e){return r("/monitor/online/forceLogout",{method:"POST",params:{...t},...e||{}})}async function c(t,e){return r("/monitor/online/list",{method:"GET",params:{...t},...e||{}})}const p=[{title:"\u7528\u6237\u540D\u79F0",dataIndex:"userName",valueType:"text"},{title:"\u90E8\u95E8\u540D\u79F0",dataIndex:"deptName",valueType:"text",hideInSearch:!0},{title:"\u767B\u5F55IP\u5730\u5740",dataIndex:"ipaddr",valueType:"text"},{title:"\u767B\u5F55\u5730\u5740",dataIndex:"loginLocation",valueType:"text",hideInSearch:!0},{title:"\u64CD\u4F5C\u7CFB\u7EDF",dataIndex:"os",valueType:"text",hideInSearch:!0},{title:"\u6D4F\u89C8\u5668\u7C7B\u578B",dataIndex:"browser",valueType:"text",hideInSearch:!0},{title:"\u767B\u5F55\u65F6\u95F4",dataIndex:"loginTime",valueType:"date",hideInSearch:!0},{title:"\u64CD\u4F5C",valueType:"option",render:(t,e,n,u)=>a(s,{type:"link",onClick:async()=>{await l({tokenId:e.tokenId}),u==null||u.reload(),d.success("\u5F3A\u5236\u9000\u51FA\u6210\u529F")},children:"\u5F3A\u9000"})}],x=()=>a(i,{children:a(o,{rowKey:"tokenId",columns:p,request:async t=>{const{data:e,total:n}=await c(t);return{data:e,total:n,success:!0}}})});export{x as default};