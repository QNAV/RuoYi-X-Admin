import{u as x,a as y,b as I}from"./index.beb75433.js";import{u as C,a as M,r as b,s as T,m,j as c,T as S,b as k,L,S as R,i as B,c as E,N as v,d as j,P as O,e as K,f as w,g as F,F as H}from"./index.0ecd5525.js";import{u as N}from"./index.7af8565e.js";import"./useQuery.esm.526a19c1.js";import"./utils.esm.7c73c81c.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const $=({keepAliveElements:e})=>{const{pathname:t,search:r}=C(),s=M(),l=x(),[n,h]=b.exports.useState(""),[i,u]=b.exports.useState([{key:"/",label:"\u9996\u9875",pathname:"/",search:r,closable:!1}]),d=a=>{const o=i.findIndex(({key:p})=>p===a),{pathname:f,search:g}=i[o<i.length-1?o+1:o-1];s(`${f}${g}`),u(p=>p.filter(({key:A})=>A!==a)),e[a]!==void 0&&delete e[a]};return b.exports.useEffect(()=>{l(d);const a=Object.keys(T).find(o=>m(o,t));if(a===void 0){h("");return}u((o=[])=>{const{name:f,hideInTab:g,closableTab:p}=T[a];return o.find(A=>A.key===a)||g?o:[...o,{key:a,label:f,pathname:t,search:r,closable:p}]}),h(a)},[t]),c(S,{hideAdd:!0,type:"editable-card",items:i,activeKey:n,onChange:a=>{const{pathname:o,search:f}=i.find(g=>g.key===a);s(`${o}${f}`)},onEdit:a=>{d(a)}})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const G=()=>{const e=N();return c(k,{title:"\u9000\u51FA\u767B\u5F55",children:c(L,{onClick:e})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const U=()=>{const e=M();return c(k,{title:"\u4E2A\u4EBA\u4E2D\u5FC3",children:c(R,{onClick:()=>e("/settings")})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const z=(e,t)=>e!=null&&e.path?B(e.path)?c("a",{href:e.path,target:"_blank",rel:"noopener noreferrer",children:t}):c(E,{to:e.path,children:t}):t;globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const D=()=>{const{pathname:e}=C(),t=w(),r=b.exports.useRef({}),s=Object.keys(T).find(n=>m(n,e)),l=s?T[s].isKeepAlive:!1;return l&&(r.current[s]=t),F(H,{children:[c($,{keepAliveElements:r.current}),Object.entries(r.current).map(([n,h])=>c("div",{hidden:!m(n,e),children:h},n)),!l&&t]})},q=()=>{var u,d,a,o;const{pathname:e}=C(),t=M(),r=D(),{data:s,isSuccess:l,isLoading:n,isError:h}=y(),i=I();return h?c(v,{to:"/500",replace:!0}):l&&(j[e]===void 0?!1:!i[j[e]])?c(v,{to:"/403",replace:!0}):c(O,{title:"RuoYi X Admin",location:{pathname:e},onMenuHeaderClick:()=>t("/"),menu:{loading:n},loading:n,menuDataRender:()=>K(s==null?void 0:s.userRoutes),menuItemRender:z,token:{pageContainer:{paddingBlockPageContainerContent:0,paddingInlinePageContainerContent:0},header:{colorBgHeader:"#292f33",colorHeaderTitle:"#fff",colorTextMenu:"#dfdfdf",colorTextMenuSecondary:"#dfdfdf",colorTextMenuSelected:"#fff",colorBgMenuItemSelected:"#22272b",colorTextRightActionsItem:"#dfdfdf"},sider:{colorMenuBackground:"#fff",colorMenuItemDivider:"#dfdfdf",colorTextMenu:"#595959",colorTextMenuSelected:"#1677ff",colorBgMenuItemSelected:"rgba(230,243,254,1)"}},avatarProps:{size:"small",src:(d=(u=s==null?void 0:s.userInfo)==null?void 0:u.user)==null?void 0:d.avatar,title:(o=(a=s==null?void 0:s.userInfo)==null?void 0:a.user)==null?void 0:o.nickName},actionsRender:()=>[c(U,{},"IconSetting"),c(G,{},"IconLogout")],children:r})};export{q as default};