import{r as a,n as r,u,m as n,q as l,a as g,t as f}from"./index.d51b9652.js";import{S as A}from"./index.77c851fd.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};const T=t=>{const e=a.exports.useRef(),s=r(t);return a.exports.useEffect(()=>{e!=null&&e.current&&s(e.current)},[]),e};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};const b=(t,e,s=!1)=>{const[c,o]=a.exports.useState(s),{pathname:h}=u();a.exports.useEffect(()=>{const i=n(t,h);!i&&c&&o(!1),!(!i||c)&&(o(!0),e())},[c,h])};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};const m=()=>{const t=l(),e=g();return async()=>{await A(),f(),t.clear(),e("/login")}};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};export{T as a,b,m as u};
