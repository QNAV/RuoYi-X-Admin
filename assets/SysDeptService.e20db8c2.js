import{a1 as s}from"./index.7c81fac9.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};async function n(t,e){return s("/system/dept/add",{method:"POST",headers:{"Content-Type":"application/json"},data:t,...e||{}})}async function o(t,e){return s("/system/dept/edit",{method:"POST",headers:{"Content-Type":"application/json"},data:t,...e||{}})}async function c(t,e){return s("/system/dept/info",{method:"GET",params:{...t},...e||{}})}async function p(t,e){return s("/system/dept/list",{method:"POST",headers:{"Content-Type":"application/json"},data:t,...e||{}})}async function r(t,e){return s("/system/dept/remove",{method:"POST",params:{...t},...e||{}})}async function d(t,e){return s("/system/dept/treeSelect",{method:"POST",headers:{"Content-Type":"application/json"},data:t,...e||{}})}export{p as S,n as a,r as b,c,o as d,d as e};
