import{aW as b,a1 as d,am as D,ax as i,aA as m,A as w,b as R,p as x,j as f,aD as L,bo as l,az as p,bp as M,bq as j,br as C}from"./index-fe009615.js";import{u as O}from"./useMutation-59a0dfa2.js";import{a as h,u as A}from"./utils-932eedde.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,s){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,s),s)}};const y="systemMenu",r=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/menu/model/index.tsx/atomSelectedMenuData",h({hasSelected:!1,selectedMenuId:0,selectedMenuName:"根目录"}));r.debugLabel="atomSelectedMenuData";const T=()=>A(r),X=()=>b(r),Y=()=>d(r),c=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/menu/model/index.tsx/atomModalAdd",h(!1));c.debugLabel="atomModalAdd";const v=()=>A(c),N=()=>{const e=D(c);return()=>e(!0)},V=()=>d(c),g=[y,"list"],B=(e={},s)=>i(g,async()=>{const t=await l(e),a=p(t,{id:"menuId",pId:"parentId",rootPId:null});return{treeData:M(a),map:t.reduce((o,n)=>o.set(n.menuId,n),new Map),parentIds:Array.from(t.reduce((o,n)=>o.add(n.parentId),new Set))}},{onSuccess:t=>{s(t.parentIds)}}),P=()=>{const e=m();return()=>e.invalidateQueries(g)},S=[y,"options"],K=()=>i(S,async()=>{const e=await l({}),s=p(e,{id:"menuId",pId:"parentId",rootPId:null});return{options:j(M(s)),map:e.reduce((t,a)=>t.set(a.menuId,a),new Map)}}),Q=()=>{const e=m();return()=>e.invalidateQueries(S)},W=()=>{const e=P(),s=Q(),t=T(),{message:a,modal:o}=w.useApp(),{mutateAsync:n,isLoading:I}=O(async u=>{await C({menuId:u})},{onSuccess:async()=>{t(),await Promise.all([e(),s()]),a.success("删除成功")}});return u=>{o.confirm({title:"操作确认",content:R(x,{children:["确定删除菜单",f(L.Text,{code:!0,children:u.menuName}),"吗？"]}),onOk:()=>n(u.menuId),okButtonProps:{loading:I}})}};export{X as useAtomStateSelectedMenuData,V as useAtomValueModalAdd,Y as useAtomValueSelectedMenuData,W as useDeleteMenu,v as useHideModalAdd,B as useQueryMenuList,K as useQueryMenuOptions,P as useReFetchMenuList,Q as useReFetchMenuOptions,T as useResetSelectedMenuData,N as useShowModalAdd};
