import{r as g}from"./jsx-runtime-0e3d513e.js";function a(s=!1,e){const[o,t]=g.useState(s),n=g.useMemo(()=>{const r=e===void 0?!s:e;return{toggle:()=>t(c=>c===s?r:s),set:c=>t(c),setLeft:()=>t(s),setRight:()=>t(r)}},[]);return[o,n]}function T(s=!1){const[e,{toggle:o,set:t}]=a(s),n=g.useMemo(()=>({toggle:o,set:i=>t(!!i),setTrue:()=>t(!0),setFalse:()=>t(!1)}),[]);return[e,n]}export{T as u};
