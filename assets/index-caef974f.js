import{j as a}from"./antdProComponents-4ea99293.js";import{g as o}from"./index-bb49039a.js";import{B as r,at as n}from"./antd-32711b0a.js";import"./iconPark-b0719f80.js";import"./wangEditor-e5fa0fef.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const[s,c]=o({title:"缓存名称",dataIndex:"cacheName",table:{valueType:"text",ellipsis:!0},descriptions:{valueType:"text",copyable:!0}}),[u,p]=o({title:"缓存键名",dataIndex:"cacheKey",table:{valueType:"text",ellipsis:!0},descriptions:{valueType:"text",copyable:!0}}),[,m]=o({title:"缓存内容",dataIndex:"cacheValue",descriptions:{valueType:"text",copyable:!0}}),[d,h]=o({title:"备注",dataIndex:"remark",table:{valueType:"text"},descriptions:{valueType:"text"}}),I=e=>[{title:"序号",valueType:"indexBorder",width:50},s,d,{title:"操作",valueType:"option",width:50,render:(t,i)=>a.jsx(r,{type:"text",danger:!0,icon:a.jsx(n,{}),onClick:l=>{l.stopPropagation(),e(i.cacheName)}})}],v=e=>[{title:"序号",valueType:"indexBorder",width:50},u,{title:"操作",valueType:"option",width:50,render:(t,i)=>a.jsx(r,{type:"text",danger:!0,icon:a.jsx(n,{}),onClick:l=>{l.stopPropagation(),e(i.cacheKey)}})}],g=[c,p,m,h];export{g as descriptionsColumns,v as useCacheKeyTableColumns,I as useCacheNameTableColumns};
