import{J as n,Y as u,Q as s,T as o,d as l}from"./useMutation.c7c2171b.js";import{d0 as a}from"./index.ab629474.js";const y={title:"\u8868\u540D\u79F0",dataIndex:"tableName",key:"tableName",valueType:"text"},m={title:"\u8868\u63CF\u8FF0",dataIndex:"tableComment",key:"tableComment",valueType:"text"},p={title:"\u5B9E\u4F53\u540D\u79F0",dataIndex:"className",key:"className",valueType:"text",hideInSearch:!0},r={title:"\u4F5C\u8005",dataIndex:"functionAuthor",key:"functionAuthor",valueType:"text"},c={title:"\u5B57\u6BB5\u540D\u79F0",dataIndex:"columnName",key:"columnName",valueType:"text",editable:!1,ellipsis:!0,width:100},T={title:"\u5B57\u6BB5\u63CF\u8FF0",dataIndex:"columnComment",key:"columnComment",valueType:"text",width:250},C={title:"\u7269\u7406\u7C7B\u578B",dataIndex:"columnType",key:"columnType",valueType:"text",editable:!1,ellipsis:!0,width:100},v={title:"JAVA\u7C7B\u578B",dataIndex:"javaType",key:"javaType",valueType:"select",valueEnum:n,width:90},x={title:"JAVA\u5C5E\u6027",dataIndex:"javaField",key:"javaField",valueType:"text",width:140},h={title:"\u63D2\u5165",dataIndex:"isInsert",key:"isInsert",valueType:"radioButton",width:115,valueEnum:u},F={title:"\u7F16\u8F91",dataIndex:"isEdit",key:"isEdit",valueType:"radioButton",width:115,valueEnum:u},I={title:"\u5217\u8868",dataIndex:"isList",key:"isList",valueType:"radioButton",width:115,valueEnum:u},E={title:"\u67E5\u8BE2",dataIndex:"isQuery",key:"isQuery",valueType:"radioButton",width:115,valueEnum:u},k={title:"\u5FC5\u586B",dataIndex:"isRequired",key:"isRequired",valueType:"radioButton",width:115,valueEnum:u},B={title:"\u67E5\u8BE2\u65B9\u5F0F",dataIndex:"queryType",key:"queryType",valueType:"select",valueEnum:s,width:70},G={title:"\u751F\u6210\u6A21\u7248",dataIndex:"tplCategory",key:"tplCategory",valueType:"select",valueEnum:o},N={title:"\u751F\u6210\u5305\u8DEF\u5F84",dataIndex:"packageName",key:"packageName",valueType:"text"},f={title:"\u751F\u6210\u6A21\u5757\u540D",dataIndex:"moduleName",key:"moduleName",valueType:"text"},g={title:"\u751F\u6210\u4E1A\u52A1\u540D",dataIndex:"businessName",key:"businessName",valueType:"text"},b={title:"\u751F\u6210\u529F\u80FD\u540D",dataIndex:"functionName",key:"functionName",valueType:"text"},w={title:"\u751F\u6210\u4EE3\u7801\u65B9\u5F0F",dataIndex:"genType",key:"genType",valueType:"select",valueEnum:l},P={title:"\u81EA\u5B9A\u4E49\u8DEF\u5F84",dataIndex:"genPath",key:"genPath",valueType:"text"},A={title:"\u5E8F\u53F7",dataIndex:"sort",valueType:"indexBorder",editable:!1,width:80};async function D(e,t){return a("/tool/gen/batchGenCode",{method:"GET",params:{...e},...t||{}})}async function S(e,t){return a("/tool/gen/db/list",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...t||{}})}async function j(e,t){return a("/tool/gen/edit",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...t||{}})}async function q(e,t){return a("/tool/gen/importTable",{method:"POST",params:{...e},...t||{}})}async function J(e,t){return a("/tool/gen/info",{method:"GET",params:{...e},...t||{}})}async function M(e,t){return a("/tool/gen/list",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...t||{}})}async function Q(e,t){return a("/tool/gen/preview",{method:"GET",params:{...e},...t||{}})}async function L(e,t){return a("/tool/gen/remove",{method:"POST",params:{...e},...t||{}})}async function O(e,t){return a("/tool/gen/synchDb",{method:"GET",params:{...e},...t||{}})}export{q as A,O as B,y as C,Q as D,M as E,J as G,m as a,p as b,r as c,G as d,N as e,f,g,b as h,w as i,P as j,A as k,c as l,T as m,C as n,v as o,x as p,h as q,F as r,I as s,E as t,k as u,B as v,j as w,L as x,D as y,S as z};
