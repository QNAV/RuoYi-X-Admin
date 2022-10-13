import{c as A}from"./index.2d5d3df2.js";import{u as C,j as a,ai as n,b1 as b,b2 as f,w as o,q as j,az as S,aF as M,aB as E,e as d,F as O,aG as R,b3 as D,s as w,v as u,g as h}from"./index.d8db007b.js";import{a as P,u as k}from"./utils.063c4bb0.js";import{h as v,i as B,j as F,C as x,k as I,b as L,l as N}from"./index.1a05c264.js";import{d as V}from"./index.f7e582d8.js";import{u as X}from"./useMutation.esm.583d3904.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};const Y=({dictType:t})=>{const e=C();return a(n,{type:"link",icon:a(b,{}),onClick:()=>e(t),children:"\u67E5\u770B"})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};const G=({record:t})=>{const e=H();return a(n,{type:"link",icon:a(f,{}),onClick:()=>e(t),children:"\u7F16\u8F91"})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};async function tt(t,e){return o("/system/dict/type/add",{method:"POST",headers:{"Content-Type":"application/json"},data:t,...e||{}})}async function et(t,e){return o("/system/dict/type/edit",{method:"POST",headers:{"Content-Type":"application/json"},data:t,...e||{}})}async function at(t,e){return o("/system/dict/type/export",{method:"POST",headers:{"Content-Type":"application/json"},data:t,...e||{}})}async function st(t,e){return o("/system/dict/type/list",{method:"POST",headers:{"Content-Type":"application/json"},data:t,...e||{}})}async function ot(t){return o("/system/dict/type/optionSelect",{method:"GET",...t||{}})}async function ct(t){return o("/system/dict/type/refreshCache",{method:"POST",...t||{}})}async function q(t,e){return o("/system/dict/type/remove",{method:"POST",params:{...t},...e||{}})}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};const W=({dictId:t,dictName:e,disabled:l,isBatch:m})=>{const p=m?"\u6279\u91CF\u5220\u9664":"\u5220\u9664",{canRemoveSysDict:y}=V(),s=z(),{mutateAsync:T,isLoading:g}=X(async i=>{await q({dictIds:i})},{onSuccess:()=>{var i;s==null||s.reload(),(i=s==null?void 0:s.clearSelected)==null||i.call(s),j.success("\u5220\u9664\u6210\u529F")}});return a(S,{accessible:y,children:a(n,{type:"link",danger:!0,disabled:l,icon:a(M,{}),onClick:()=>{E.confirm({title:"\u5220\u9664\u5B57\u5178",content:d(O,{children:["\u786E\u5B9A\u5220\u9664\u5B57\u5178",a(R.Text,{code:!0,children:e}),"\u5417\uFF1F"]}),onOk:async()=>T(t),okButtonProps:{loading:g}})},children:p})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};const it=[v,B,F,x,I,L,N,{title:"\u64CD\u4F5C",valueType:"option",render:(t,e)=>d(D,{children:[a(Y,{dictType:e.dictType}),a(G,{record:e}),a(W,{dictId:e.dictId,dictName:e.dictName})]})}];globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};const r=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/dict/model/index.ts/atomMainTableActions",w(void 0));r.debugLabel="atomMainTableActions";const z=()=>u(r),nt=()=>A(r),c=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/dict/model/index.ts/atomAddOrEditModal",P({actionType:"add",open:!1}));c.debugLabel="atomAddOrEditModal";const rt=()=>u(c),dt=()=>k(c),ut=()=>{const t=h(c);return()=>{t({actionType:"add",open:!0})}},H=()=>{const t=h(c);return e=>{t({actionType:"edit",open:!0,record:e})}};export{W as B,tt as S,rt as a,dt as b,et as c,ut as d,at as e,ct as f,nt as g,st as h,ot as o,it as t,z as u};