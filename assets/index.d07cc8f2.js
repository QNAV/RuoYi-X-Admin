import{u as D,M as F}from"./useMutation.esm.6ad07f4c.js";import{c as d,d as h}from"./SysMenuService.24de2b96.js";import{R as i,b5 as l,n as C,g as p,h as R,G as m,b7 as _,j as x,F as w,a as O,ba as Q,aC as g}from"./index.4141254b.js";import{p as M,s as y}from"./tree.b5163c95.js";import{u as I}from"./useQuery.esm.181a51a8.js";import"./utils.esm.30d3ac35.js";const r="systemMenu",E=e=>{const s=t=>t.filter(n=>n.menuType!==F.F).map(({menuId:n,menuName:u,children:a})=>({menuId:n,menuName:u,children:a?s(a):[]}));return[{menuId:0,menuName:"\u6839\u76EE\u5F55",children:e?s(e):[]}]},o=i({key:`${r}SelectedMenuData`,default:{hasSelected:!1,selectedMenuId:0,selectedMenuName:"\u6839\u76EE\u5F55"}}),L=()=>l(o),N=()=>C(o),B=()=>p(o),c=i({key:`${r}CreateModal`,default:!1}),K=()=>l(c),V=()=>{const e=R(c);return()=>e(!0)},$=()=>p(c),S=[r,"list"],P=()=>{const e=m();return()=>e.invalidateQueries(S)},G=(e={},s)=>I(S,async()=>{const t=await d(e),n=M(t,{id:"menuId",pId:"parentId",rootPId:null});return{treeData:y(n),map:t.reduce((u,a)=>u.set(a.menuId,a),new Map),parentIds:Array.from(t.reduce((u,a)=>u.add(a.parentId),new Set))}},{onSuccess:t=>{s(t.parentIds)}}),f=[r,"options"],T=()=>{const e=m();return()=>e.invalidateQueries(f)},H=()=>I(f,async()=>{const e=await d({}),s=M(e,{id:"menuId",pId:"parentId",rootPId:null});return{options:E(y(s)),map:e.reduce((t,n)=>t.set(n.menuId,n),new Map)}}),z=()=>{const e=P(),s=T(),t=L();return D(async({menuId:n,menuName:u})=>{_.confirm({title:"\u5220\u9664\u83DC\u5355",content:x(w,{children:["\u786E\u5B9A\u5220\u9664\u83DC\u5355",O(Q.Text,{code:!0,children:u}),"\u5417\uFF1F"]}),onOk:async()=>{await h({menuId:n}),t(),await Promise.all([e(),s()]),g.success("\u5220\u9664\u6210\u529F")}})})};export{z as useDeleteMenu,K as useHideCreateModal,G as useQueryMenuList,H as useQueryMenuOptions,P as useReFetchMenuList,T as useReFetchMenuOptions,L as useResetSelectedMenuData,V as useShowCreateModal,N as useStateSelectedMenuData,$ as useValueCreateModal,B as useValueSelectedMenuData};
