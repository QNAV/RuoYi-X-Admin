import{u as b,a as A,r as d,s as p,m as f,j as n,T as k,b as v,L as y,S as L,i as M,c as x,N as C,d as m,P as R,e as E,f as I,g as O,F as K}from"./index.726d196b.js";import{u as w}from"./index.303a5e1f.js";import{u as F,a as S}from"./index.cd05ef25.js";import"./SysLoginService.16c711d9.js";import"./useQuery.esm.225ad0d9.js";import"./utils.esm.a7971faa.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const N=({keepAliveElements:e})=>{const{pathname:t,search:u}=b(),a=A(),[l,r]=d.exports.useState(""),[h,g]=d.exports.useState([]);return d.exports.useEffect(()=>{const s=Object.keys(p).find(c=>f(c,t));if(s===void 0){r("");return}g((c=[])=>{const{name:o,hideInTab:i,closableTab:T}=p[s];return c.find(j=>j.key===s)||i?c:[...c,{key:s,label:o,pathname:t,search:u,closable:T}]}),r(s)},[t]),n(k,{hideAdd:!0,type:"editable-card",items:h,activeKey:l,onChange:s=>{const{pathname:c,search:o}=h.find(i=>i.key===s);a(`${c}${o}`)},onEdit:s=>{const c=h.findIndex(({key:o})=>o===s);if(c===0&&h.length===1)a("/");else{const{pathname:o,search:i}=h[c>0?c-1:c+1];a(`${o}${i}`)}g(o=>o.filter(({key:i})=>i!==s)),e[s]!==void 0&&delete e[s]}})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const $=()=>{const e=w();return n(v,{title:"\u9000\u51FA\u767B\u5F55",children:n(y,{onClick:e})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const B=()=>{const e=A();return n(v,{title:"\u4E2A\u4EBA\u4E2D\u5FC3",children:n(L,{onClick:()=>e("/settings")})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const H=(e,t)=>e!=null&&e.path?M(e.path)?n("a",{href:e.path,target:"_blank",rel:"noopener noreferrer",children:t}):n(x,{to:e.path,children:t}):t;globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const U=()=>{const{pathname:e}=b(),t=I(),u=d.exports.useRef({}),a=Object.keys(p).find(r=>f(r,e)),l=a?p[a].isKeepAlive:!1;return l&&(u.current[a]=t),O(K,{children:[n(N,{keepAliveElements:u.current}),Object.entries(u.current).map(([r,h])=>n("div",{hidden:!f(r,e),children:h},r)),!l&&t]})},q=()=>{var s,c,o,i;const{pathname:e}=b(),t=A(),u=U(),{data:a,isSuccess:l,isLoading:r,isError:h}=F(),g=S();return h?n(C,{to:"/500",replace:!0}):l&&(m[e]===void 0?!1:!g[m[e]])?n(C,{to:"/403",replace:!0}):n(R,{title:"RuoYi X Admin",location:{pathname:e},onMenuHeaderClick:()=>t("/"),menu:{loading:r},loading:r,menuDataRender:()=>E(a==null?void 0:a.userRoutes),menuItemRender:H,token:{pageContainer:{paddingBlockPageContainerContent:0,paddingInlinePageContainerContent:0}},avatarProps:{size:"small",src:(c=(s=a==null?void 0:a.userInfo)==null?void 0:s.user)==null?void 0:c.avatar,title:(i=(o=a==null?void 0:a.userInfo)==null?void 0:o.user)==null?void 0:i.nickName},actionsRender:()=>[n(B,{},"IconSetting"),n($,{},"IconLogout")],children:u})};export{q as default};