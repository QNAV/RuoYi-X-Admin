import{j as S,F as I,a as D}from"./jsx-runtime-06f68cbc.js";import{_ as b,z as c,u as f,v as d,y as i,a8 as m,a9 as w}from"./react-27f57fd0.js";import{p as l,t as p,u as R}from"./index-6f927546.js";import{u as x}from"./useMutation-a5a4d775.js";import{bb as L,bJ as j,ag as C}from"./index-37fcb888.js";import{a as M,u as h}from"./utils-409125c9.js";import"./mutation-9ec6c65f.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const y="systemMenu",u=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/menu/model/index.tsx/atomSelectedMenuData",M({hasSelected:!1,selectedMenuId:0,selectedMenuName:"根目录"}));u.debugLabel="atomSelectedMenuData";const O=()=>h(u),N=()=>b(u),V=()=>c(u),r=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/menu/model/index.tsx/atomModalAdd",M(!1));r.debugLabel="atomModalAdd";const B=()=>h(r),K=()=>{const e=f(r);return()=>e(!0)},z=()=>c(r),A=[y,"list"],H=(e={},a)=>d(A,async()=>{const t=await m(e),n=l(t,{id:"menuId",pId:"parentId",rootPId:null});return{treeData:p(n),map:t.reduce((o,s)=>o.set(s.menuId,s),new Map),parentIds:Array.from(t.reduce((o,s)=>o.add(s.parentId),new Set))}},{onSuccess:t=>{a(t.parentIds)}}),T=()=>{const e=i();return()=>e.invalidateQueries(A)},g=[y,"options"],J=()=>d(g,async()=>{const e=await m({}),a=l(e,{id:"menuId",pId:"parentId",rootPId:null});return{options:R(p(a)),map:e.reduce((t,n)=>t.set(n.menuId,n),new Map)}}),F=()=>{const e=i();return()=>e.invalidateQueries(g)},W=()=>{const e=T(),a=F(),t=O(),{mutateAsync:n,isLoading:o}=x(async s=>{await w({menuId:s})},{onSuccess:async()=>{t(),await Promise.all([e(),a()]),C.success("删除成功")}});return s=>{L.confirm({title:"操作确认",content:S(I,{children:["确定删除菜单",D(j.Text,{code:!0,children:s.menuName}),"吗？"]}),onOk:()=>n(s.menuId),okButtonProps:{loading:o}})}};export{N as useAtomStateSelectedMenuData,z as useAtomValueModalAdd,V as useAtomValueSelectedMenuData,W as useDeleteMenu,B as useHideModalAdd,H as useQueryMenuList,J as useQueryMenuOptions,T as useReFetchMenuList,F as useReFetchMenuOptions,O as useResetSelectedMenuData,K as useShowModalAdd};
