import{B as i}from"./index.66d53706.js";import{aG as o,D as a,aH as l,aI as s}from"./index.e7e8a15b.js";import{P as d}from"./Table.7e4fad06.js";import"./RouteContext.8ac15446.js";import"./index.ebc4e7d2.js";import"./Tree.9d22aed6.js";import"./index.d6144630.js";import"./index.53673e5f.js";import"./unstated-next.21011287.js";async function m(t,e){return o("/monitor/online/forceLogout",{method:"POST",params:{...t},...e||{}})}async function c(t,e){return o("/monitor/online/list",{method:"GET",params:{...t},...e||{}})}var r="/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/monitor/online/index.tsx";const p=[{title:"\u7528\u6237\u540D\u79F0",dataIndex:"userName",valueType:"text"},{title:"\u90E8\u95E8\u540D\u79F0",dataIndex:"deptName",valueType:"text",hideInSearch:!0},{title:"\u767B\u5F55IP\u5730\u5740",dataIndex:"ipaddr",valueType:"text"},{title:"\u767B\u5F55\u5730\u5740",dataIndex:"loginLocation",valueType:"text",hideInSearch:!0},{title:"\u64CD\u4F5C\u7CFB\u7EDF",dataIndex:"os",valueType:"text",hideInSearch:!0},{title:"\u6D4F\u89C8\u5668\u7C7B\u578B",dataIndex:"browser",valueType:"text",hideInSearch:!0},{title:"\u767B\u5F55\u65F6\u95F4",dataIndex:"loginTime",valueType:"date",hideInSearch:!0},{title:"\u64CD\u4F5C",valueType:"option",render:(t,e,n,u)=>a(l,{type:"link",onClick:async()=>{await m({tokenId:e.tokenId}),u==null||u.reload(),s.success("\u5F3A\u5236\u9000\u51FA\u6210\u529F")},children:"\u5F3A\u9000"},void 0,!1,{fileName:r,lineNumber:54,columnNumber:9},void 0)}],B=()=>a(i,{children:a(d,{rowKey:"tokenId",columns:p,request:async t=>{const{data:e,total:n}=await c(t);return{data:e,total:n,success:!0}}},void 0,!1,{fileName:r,lineNumber:72,columnNumber:7},void 0)},void 0,!1,{fileName:r,lineNumber:71,columnNumber:5},void 0);export{B as default};
