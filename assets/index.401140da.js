import{u as b,k as C,m as L,r as h,j as k,F as x,a as n,T as E,L as O,b as g,S as R,c as j,d as y,e as M,f as T,g as f,N as A,P as B,h as F}from"./index.7e2e4aff.js";import{u as K}from"./keepAlive.a2f6a073.js";import{u as I}from"./useLogout.4faf1c83.js";import{u as N}from"./initialState.c69a0cd7.js";import"./useQuery.esm.3039810b.js";import"./utils.esm.6214005e.js";const w=e=>e.startsWith("http://")||e.startsWith("https://"),H=5,U=e=>{const[c,d]=K(),t=b(),p=C.find(i=>L(i,e)),l=p!==void 0;return h.exports.useEffect(()=>{l&&d(i=>{const s={...i,[p]:{children:t,pathname:e}},r=Object.keys(s);return r.length>H&&delete s[r[0]],s})},[e]),k(x,{children:[Object.entries(c).map(([i,s])=>n("div",{hidden:e!==s.pathname,children:s.children},i)),n("div",{hidden:l,children:!l&&t})]})},W=()=>{const e=I();return n(E,{title:"\u9000\u51FA\u767B\u5F55",children:n(O,{onClick:e})})},X=()=>{const e=g();return n(E,{title:"\u4E2A\u4EBA\u4E2D\u5FC3",children:n(R,{onClick:()=>e("/settings")})})},_=(e,c)=>e!=null&&e.path?w(e.path)?n("a",{href:e.path,target:"_blank",rel:"noopener noreferrer",children:c}):n(j,{to:e.path,children:c}):c,z=()=>{const[e,c]=h.exports.useState(""),{pathname:d}=y(),t=g(),[p,l]=K(),i=r=>{l(a=>{const o={...a};return delete o[r],o})},s=h.exports.useMemo(()=>Object.entries(p).map(([r,a])=>{var o,u;return{label:(u=(o=M)==null?void 0:o[r])!=null?u:r,key:a.pathname}}),[p]);return h.exports.useEffect(()=>{c(d)},[d]),n(T,{hideAdd:!0,type:"editable-card",items:s,activeKey:e,onChange:t,onEdit:r=>{if(r===d){const a=s.map(u=>u.key),o=a.findIndex(u=>u===e);o===0&&a.length===1?t("/"):t(a[o>0?o-1:o+1])}i(r)}})},Q=()=>{var a,o,u,v,m;const{pathname:e}=y(),c=g(),d=U(e),{data:t,isSuccess:p,isLoading:l,isError:i}=N(),s=t==null?void 0:t.accessObject,r=(a=f)!=null&&a[e]?!!(s!=null&&s[f[e]]):!0;return i?n(A,{to:"/500",replace:!0}):p&&!r?n(A,{to:"/403",replace:!0}):k(B,{title:"RuoYi X Admin",location:{pathname:e},onMenuHeaderClick:()=>c("/"),menu:{loading:l},loading:l,menuDataRender:()=>F(t==null?void 0:t.userRoutes),menuItemRender:_,token:{pageContainer:{marginBlockPageContainerContent:0,marginInlinePageContainerContent:0}},avatarProps:{size:"small",src:(u=(o=t==null?void 0:t.userInfo)==null?void 0:o.user)==null?void 0:u.avatar,title:(m=(v=t==null?void 0:t.userInfo)==null?void 0:v.user)==null?void 0:m.nickName},actionsRender:()=>[n(X,{},"IconSetting"),n(W,{},"IconLogout")],children:[n(z,{}),d]})};export{Q as default};
