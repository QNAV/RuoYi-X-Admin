import{r as a,ai as r,$ as u,a3 as l,aj as g,ak as n,a0 as f,al as A}from"./index-3af5a8dd.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};const C=t=>{const e=a.exports.useRef(),s=r(t);return a.exports.useEffect(()=>{s(e.current)},[]),e};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};const b=(t,e,s=!1)=>{const[c,h]=a.exports.useState(s),{pathname:o}=u();a.exports.useEffect(()=>{const i=l(t,o);!i&&c&&h(!1),!(!i||c)&&(h(!0),e())},[c,o])};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};const p=(t={})=>g({path:"/logout",method:"POST",secure:!0,...t});globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};const j=()=>{const t=n(),e=f();return async()=>{await p(),A(),t.clear(),e("/login")}};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};export{C as a,b,j as u};
