import{aD as s}from"./index.ab629474.js";async function a(t,e){return s("/system/dept/add",{method:"POST",headers:{"Content-Type":"application/json"},data:t,...e||{}})}async function o(t,e){return s("/system/dept/edit",{method:"POST",headers:{"Content-Type":"application/json"},data:t,...e||{}})}async function p(t,e){return s("/system/dept/info",{method:"GET",params:{...t},...e||{}})}async function d(t,e){return s("/system/dept/list",{method:"POST",headers:{"Content-Type":"application/json"},data:t,...e||{}})}async function r(t,e){return s("/system/dept/remove",{method:"POST",params:{...t},...e||{}})}async function y(t,e){return s("/system/dept/treeSelect",{method:"POST",headers:{"Content-Type":"application/json"},data:t,...e||{}})}export{d as S,y as a,a as b,r as c,p as d,o as e};
