import{x as S,v as c,g as C,n as i,ay as d,b4 as m,aB as I,e as D,F,j as f,aG as w,q as R,aZ as b}from"./index.994dd2cc.js";import{c as l,d as x}from"./SysMenuService.cbe4dc17.js";import{a as p,u as M}from"./utils.7aae9fd9.js";import{u as h}from"./useQuery.esm.57740e02.js";import{u as T}from"./useMutation.esm.7504d6e9.js";import"./utils.esm.62724219.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const y="systemMenu",O=e=>{const t=s=>s.filter(a=>a.menuType!==b.F).map(({menuId:a,menuName:n,children:u})=>({menuId:a,menuName:n,children:u?t(u):[]}));return[{menuId:0,menuName:"\u6839\u76EE\u5F55",children:e?t(e):[]}]},o=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/menu/model/index.tsx/AtomSelectedMenuData",p({hasSelected:!1,selectedMenuId:0,selectedMenuName:"\u6839\u76EE\u5F55"}));o.debugLabel="AtomSelectedMenuData";const j=()=>M(o),k=()=>S(o),B=()=>c(o),r=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/menu/model/index.tsx/AtomCreateModal",p(!1));r.debugLabel="AtomCreateModal";const N=()=>M(r),V=()=>{const e=C(r);return()=>e(!0)},K=()=>c(r),A=[y,"list"],L=()=>{const e=i();return()=>e.invalidateQueries(A)},G=(e={},t)=>h(A,async()=>{const s=await l(e),a=d(s,{id:"menuId",pId:"parentId",rootPId:null});return{treeData:m(a),map:s.reduce((n,u)=>n.set(u.menuId,u),new Map),parentIds:Array.from(s.reduce((n,u)=>n.add(u.parentId),new Set))}},{onSuccess:s=>{t(s.parentIds)}}),g=[y,"options"],Q=()=>{const e=i();return()=>e.invalidateQueries(g)},H=()=>h(g,async()=>{const e=await l({}),t=d(e,{id:"menuId",pId:"parentId",rootPId:null});return{options:O(m(t)),map:e.reduce((s,a)=>s.set(a.menuId,a),new Map)}}),W=()=>{const e=L(),t=Q(),s=j();return T(async({menuId:a,menuName:n})=>{I.confirm({title:"\u5220\u9664\u83DC\u5355",content:D(F,{children:["\u786E\u5B9A\u5220\u9664\u83DC\u5355",f(w.Text,{code:!0,children:n}),"\u5417\uFF1F"]}),onOk:async()=>{await x({menuId:a}),s(),await Promise.all([e(),t()]),R.success("\u5220\u9664\u6210\u529F")}})})};export{W as useDeleteMenu,N as useHideCreateModal,G as useQueryMenuList,H as useQueryMenuOptions,L as useReFetchMenuList,Q as useReFetchMenuOptions,j as useResetSelectedMenuData,V as useShowCreateModal,k as useStateSelectedMenuData,K as useValueCreateModal,B as useValueSelectedMenuData};
