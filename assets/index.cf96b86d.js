import{u as A,a as T,r as g,s as p,m,j as s,T as j,b as v,L as k,S as x,i as y,c as I,N as C,d as M,P as L,e as R,f as S,g as B,F as E}from"./index.843eb19a.js";import{u as O}from"./index.33c87331.js";import{u as K,a as w}from"./index.e83de61a.js";import"./SysLoginService.119121c4.js";import"./useQuery.esm.6466b65c.js";import"./utils.esm.43e4942d.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const F=({keepAliveElements:e})=>{const{pathname:t,search:i}=A(),a=T(),[u,r]=g.exports.useState(""),[n,f]=g.exports.useState([{key:"/",label:"\u9996\u9875",pathname:"/",search:i,closable:!1}]);return g.exports.useEffect(()=>{const c=Object.keys(p).find(o=>m(o,t));if(c===void 0){r("");return}f((o=[])=>{const{name:h,hideInTab:l,closableTab:d}=p[c];return o.find(b=>b.key===c)||l?o:[...o,{key:c,label:h,pathname:t,search:i,closable:d}]}),r(c)},[t]),s(j,{hideAdd:!0,type:"editable-card",items:n,activeKey:u,onChange:c=>{const{pathname:o,search:h}=n.find(l=>l.key===c);a(`${o}${h}`)},onEdit:c=>{const o=n.findIndex(({key:d})=>d===c),{pathname:h,search:l}=n[o<n.length-1?o+1:o-1];a(`${h}${l}`),f(d=>d.filter(({key:b})=>b!==c)),e[c]!==void 0&&delete e[c]}})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const H=()=>{const e=O();return s(v,{title:"\u9000\u51FA\u767B\u5F55",children:s(k,{onClick:e})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const N=()=>{const e=T();return s(v,{title:"\u4E2A\u4EBA\u4E2D\u5FC3",children:s(x,{onClick:()=>e("/settings")})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const $=(e,t)=>e!=null&&e.path?y(e.path)?s("a",{href:e.path,target:"_blank",rel:"noopener noreferrer",children:t}):s(I,{to:e.path,children:t}):t;globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const U=()=>{const{pathname:e}=A(),t=S(),i=g.exports.useRef({}),a=Object.keys(p).find(r=>m(r,e)),u=a?p[a].isKeepAlive:!1;return u&&(i.current[a]=t),B(E,{children:[s(F,{keepAliveElements:i.current}),Object.entries(i.current).map(([r,n])=>s("div",{hidden:!m(r,e),children:n},r)),!u&&t]})},_=()=>{var c,o,h,l;const{pathname:e}=A(),t=T(),i=U(),{data:a,isSuccess:u,isLoading:r,isError:n}=K(),f=w();return n?s(C,{to:"/500",replace:!0}):u&&(M[e]===void 0?!1:!f[M[e]])?s(C,{to:"/403",replace:!0}):s(L,{title:"RuoYi X Admin",location:{pathname:e},onMenuHeaderClick:()=>t("/"),menu:{loading:r},loading:r,menuDataRender:()=>R(a==null?void 0:a.userRoutes),menuItemRender:$,token:{pageContainer:{paddingBlockPageContainerContent:0,paddingInlinePageContainerContent:0},header:{colorBgHeader:"#292f33",colorHeaderTitle:"#fff",colorTextMenu:"#dfdfdf",colorTextMenuSecondary:"#dfdfdf",colorTextMenuSelected:"#fff",colorBgMenuItemSelected:"#22272b",colorTextRightActionsItem:"#dfdfdf"},sider:{colorMenuBackground:"#fff",colorMenuItemDivider:"#dfdfdf",colorTextMenu:"#595959",colorTextMenuSelected:"#1677ff",colorBgMenuItemSelected:"rgba(230,243,254,1)"}},avatarProps:{size:"small",src:(o=(c=a==null?void 0:a.userInfo)==null?void 0:c.user)==null?void 0:o.avatar,title:(l=(h=a==null?void 0:a.userInfo)==null?void 0:h.user)==null?void 0:l.nickName},actionsRender:()=>[s(N,{},"IconSetting"),s(H,{},"IconLogout")],children:i})};export{_ as default};