import{j as i}from"./antdProComponents-4ea99293.js";import{a7 as b,h as m,F as h,Q as M,U as A,ao as y,T as S,ap as g,aq as x,ar as f}from"./index-bb49039a.js";import{bd as j,A as L}from"./antd-32711b0a.js";import{u as T}from"./useMutation-2f9169af.js";import{a as l,u as p}from"./utils-672e9857.js";import"./iconPark-b0719f80.js";import"./wangEditor-e5fa0fef.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const I="systemMenu",u=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/menu/model/index.tsx/atomSelectedMenuData",l({hasSelected:!1,selectedMenuId:0,selectedMenuName:"根目录"}));u.debugLabel="atomSelectedMenuData";const C=()=>p(u),V=()=>b(u),N=()=>m(u),c=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/menu/model/index.tsx/atomModalAdd",l(!1));c.debugLabel="atomModalAdd";const B=()=>p(c),H=()=>{const e=h(c);return()=>e(!0)},K=()=>m(c),d=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/menu/model/index.tsx/atomDrawerSelectIcon",l({open:!1,onSelected:void 0}));d.debugLabel="atomDrawerSelectIcon";const E=()=>p(d),U=()=>{const e=h(d);return t=>e({open:!0,onSelected:t})},W=()=>m(d),w=[I,"list"],z=(e={},t)=>M(w,async()=>{const s=await y(e),o=S(s,{id:"menuId",pId:"parentId",rootPId:null});return{treeData:g(o),map:s.reduce((n,a)=>n.set(a.menuId,a),new Map),parentIds:Array.from(s.reduce((n,a)=>n.add(a.parentId),new Set))}},{onSuccess:s=>{t(s.parentIds)}}),O=()=>{const e=A();return()=>e.invalidateQueries(w)},D=[I,"options"],G=()=>M(D,async()=>{const e=await y({}),t=S(e,{id:"menuId",pId:"parentId",rootPId:null});return{options:x(g(t)),map:e.reduce((s,o)=>s.set(o.menuId,o),new Map)}}),Q=()=>{const e=A();return()=>e.invalidateQueries(D)},J=()=>{const e=O(),t=Q(),s=C(),{message:o,modal:n}=j.useApp(),{mutateAsync:a,isLoading:R}=T(async r=>{await f({menuId:r})},{onSuccess:async()=>{s(),await Promise.all([e(),t()]),o.success("删除成功")}});return r=>{n.confirm({title:"操作确认",content:i.jsxs(i.Fragment,{children:["确定删除菜单",i.jsx(L.Text,{code:!0,children:r.menuName}),"吗？"]}),onOk:()=>a(r.menuId),okButtonProps:{loading:R}})}};export{V as useAtomStateSelectedMenuData,W as useAtomValueDrawerSelectIcon,K as useAtomValueModalAdd,N as useAtomValueSelectedMenuData,J as useDeleteMenu,E as useHideDrawerSelectIcon,B as useHideModalAdd,z as useQueryMenuList,G as useQueryMenuOptions,O as useReFetchMenuList,Q as useReFetchMenuOptions,C as useResetSelectedMenuData,U as useShowDrawerSelectIcon,H as useShowModalAdd};
