import{o as s}from"./index.726d196b.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};async function o(e,t){return s("/system/role/add",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...t||{}})}async function n(e,t){return s("/system/role/authUser/allocatedList",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...t||{}})}async function r(e,t){return s("/system/role/authUser/cancel",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...t||{}})}async function c(e,t){return s("/system/role/authUser/cancelAll",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...t||{}})}async function l(e,t){return s("/system/role/authUser/selectAll",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...t||{}})}async function i(e,t){return s("/system/role/authUser/unallocatedList",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...t||{}})}async function y(e,t){return s("/system/role/dataScope",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...t||{}})}async function d(e,t){return s("/system/role/edit",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...t||{}})}async function h(e,t){return s("/system/role/export",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...t||{}})}async function p(e,t){return s("/system/role/info",{method:"GET",params:{...e},...t||{}})}async function u(e,t){return s("/system/role/list",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...t||{}})}async function m(e,t){return s("/system/role/remove",{method:"POST",params:{...e},...t||{}})}export{p as S,d as a,o as b,m as c,h as d,u as e,y as f,c as g,r as h,l as i,i as j,n as k};