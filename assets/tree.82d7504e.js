import{M as u}from"./useMutation.esm.5a0c3d96.js";import{cZ as a}from"./index.0f9d2a67.js";const g=(s,{id:n,pId:r,rootPId:t})=>{const e={},i=[];return s.map(c=>{const o={...c},d=o[n];return e[d]=o,o.key=o.key||d,o}).forEach(c=>{const o=c[r],d=e[o];d&&(d.children=d.children||[],d.children.push(c)),(o===t||!d&&t===null)&&i.push(c)}),i},l=s=>s.sort((n,r)=>n.orderNum===r.orderNum?new Date(n.createTime).getTime()-new Date(r.createTime).getTime():n.orderNum-r.orderNum),h=s=>{const n=s.map(e=>(e.children&&(e.children=h(e.children)),e)),r=l(n.filter(e=>e.menuType!==u.F)),t=l(n.filter(e=>e.menuType===u.F));return[...r,...t]},p=s=>{const n=s.reduce((r,t)=>(t.parentId&&r.push(t.parentId),t.children?[...r,...p(t.children)]:r),[]);return Array.from(new Set(n))},f=s=>{const n=s.reduce((r,t)=>(r.push(t.id),t.children?[...r,...f(t.children)]:r),[]);return Array.from(new Set(n))},T=(s,n)=>{const r=[];return a(s).forEach(e=>{e.children&&(e.children=T(e.children,n)),(n.includes(e.id)||(e==null?void 0:e.children)&&e.children.length>0)&&r.push(e)}),r};export{f as a,T as f,p as g,g as p,h as s};
