import{r as a,aJ as S}from"./index.7e2e4aff.js";import{c as h}from"./cloneDeep.5079a371.js";const d=(p,r="checkbox",w=!0)=>{const[s,n]=a.exports.useState([]),[o,i]=a.exports.useState([]);return{selectedRows:o,selectedRowKeys:s,rowSelection:{alwaysShowAlert:w,type:r,selectedRowKeys:s,onChange:(e,t)=>{i(t),n(e)}},onClick:e=>{const t=e[p];let l=[e],c=[t];if(r==="checkbox")if(c=[...s],l=h(o),c.includes(t)){const u=s.indexOf(t);c.splice(u,1),l.splice(u,1)}else l.push(e),c.push(t);i(l),n(c)},clearSelection:()=>{i([]),n([])},setSelectedRowKeys:n,checkRowSelection:async(e="\u672A\u9009\u62E9\u9700\u8981\u64CD\u4F5C\u7684\u5BF9\u8C61")=>(o==null?void 0:o.length)===0?(S.warning(e),Promise.reject(e)):Promise.resolve(o)}};export{d as u};
