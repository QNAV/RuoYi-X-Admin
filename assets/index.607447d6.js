import{w as S,s as c,g as C,n as i,aO as d,ba as m,ak as I,e as D,F,j as f,am as w,$ as R,b3 as b}from"./index.623678ca.js";import{c as l,d as O}from"./SysMenuService.dcbb8c0a.js";import{a as p,u as M}from"./utils.1f885b4f.js";import{u as h}from"./useQuery.esm.075f48c3.js";import{u as T}from"./useMutation.esm.1ca781b5.js";import"./utils.esm.46a75e3a.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const y="systemMenu",x=e=>{const t=s=>s.filter(a=>a.menuType!==b.F).map(({menuId:a,menuName:n,children:u})=>({menuId:a,menuName:n,children:u?t(u):[]}));return[{menuId:0,menuName:"\u6839\u76EE\u5F55",children:e?t(e):[]}]},o=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/menu/model/index.tsx/AtomSelectedMenuData",p({hasSelected:!1,selectedMenuId:0,selectedMenuName:"\u6839\u76EE\u5F55"}));o.debugLabel="AtomSelectedMenuData";const j=()=>M(o),v=()=>S(o),N=()=>c(o),r=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/menu/model/index.tsx/AtomCreateModal",p(!1));r.debugLabel="AtomCreateModal";const V=()=>M(r),B=()=>{const e=C(r);return()=>e(!0)},K=()=>c(r),A=[y,"list"],L=()=>{const e=i();return()=>e.invalidateQueries(A)},H=(e={},t)=>h(A,async()=>{const s=await l(e),a=d(s,{id:"menuId",pId:"parentId",rootPId:null});return{treeData:m(a),map:s.reduce((n,u)=>n.set(u.menuId,u),new Map),parentIds:Array.from(s.reduce((n,u)=>n.add(u.parentId),new Set))}},{onSuccess:s=>{t(s.parentIds)}}),g=[y,"options"],Q=()=>{const e=i();return()=>e.invalidateQueries(g)},W=()=>h(g,async()=>{const e=await l({}),t=d(e,{id:"menuId",pId:"parentId",rootPId:null});return{options:x(m(t)),map:e.reduce((s,a)=>s.set(a.menuId,a),new Map)}}),$=()=>{const e=L(),t=Q(),s=j();return T(async({menuId:a,menuName:n})=>{I.confirm({title:"\u5220\u9664\u83DC\u5355",content:D(F,{children:["\u786E\u5B9A\u5220\u9664\u83DC\u5355",f(w.Text,{code:!0,children:n}),"\u5417\uFF1F"]}),onOk:async()=>{await O({menuId:a}),s(),await Promise.all([e(),t()]),R.success("\u5220\u9664\u6210\u529F")}})})};export{$ as useDeleteMenu,V as useHideCreateModal,H as useQueryMenuList,W as useQueryMenuOptions,L as useReFetchMenuList,Q as useReFetchMenuOptions,j as useResetSelectedMenuData,B as useShowCreateModal,v as useStateSelectedMenuData,K as useValueCreateModal,N as useValueSelectedMenuData};
