import{w as s}from"./index.b8b57d0a.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};async function a(e,t){return s("/system/menu/add",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...t||{}})}async function o(e,t){return s("/system/menu/edit",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...t||{}})}async function r(e,t){return s("/system/menu/info",{method:"GET",params:{...e},...t||{}})}async function u(e,t){return s("/system/menu/list",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...t||{}})}async function c(e,t){return s("/system/menu/remove",{method:"POST",params:{...e},...t||{}})}async function i(e,t){return s("/system/menu/roleMenuTreeSelect",{method:"GET",params:{...e},...t||{}})}export{a as S,r as a,o as b,u as c,c as d,i as e};