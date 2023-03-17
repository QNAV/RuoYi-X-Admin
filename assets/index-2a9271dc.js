import{j as a,b,l as S,e as x,n as v,o as I,r as R,F as O}from"./antdProComponents-adac7b3f.js";import{e as B,f as F,h as C,F as w,V as P,aL as D,aM as N,a8 as p,aN as V,k as L,aO as q,d as X,m as Y,aP as H,B as $}from"./index-3a0ef4a4.js";import{a as G,u as K}from"./utils-a67a12c8.js";import{r as m,bm as y,aC as Q,B as g,ay as W,aK as _,bc as z,ax as J}from"./antd-aee96f72.js";import{u as T}from"./useMutation-8cb3539a.js";import"./iconPark-395d73b8.js";import"./wangEditor-93aafe29.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const f=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/post/model/index.ts/atomMainTableActions",B(void 0));f.debugLabel="atomMainTableActions";const U=()=>F(f),k=()=>C(f),h=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/post/model/index.ts/atomAddOrEditModal",G({open:!1,actionType:"add"}));h.debugLabel="atomAddOrEditModal";const Z=()=>{const e=w(h);return()=>e({open:!0,actionType:"add"})},ee=()=>{const e=w(h);return t=>e({open:!0,actionType:"edit",record:t})},te=()=>K(h),ae=()=>C(h);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const se=()=>{const e=m.useRef(),{message:t}=y.useApp(),{open:o,actionType:r,record:s}=ae(),l=te(),i=()=>{var c;r==="edit"&&((c=e.current)==null||c.resetFields()),l()},d=k(),{valueEnumSysNormalDisable:A,defaultValueSysNormalDisable:M}=P(),{mutate:n,isLoading:j}=T(async()=>{var u;const c=await((u=e.current)==null?void 0:u.validateFields());if(c){if(r==="add"){await D(c);return}await N({...c,postId:s.postId})}},{onSuccess:()=>{d==null||d.reload(),i(),t.success(r==="add"?"新增成功":"保存成功")}});return m.useEffect(()=>{if(o&&r==="edit"){const c=setTimeout(()=>{var u;(u=e.current)==null||u.setFieldsValue(s),clearTimeout(c)},0)}},[o]),a(Q,{open:o,onCancel:i,okText:"提交",okButtonProps:{loading:j},onOk:()=>n(),title:r==="add"?"新增岗位":"编辑岗位信息",children:b(S,{submitter:!1,formRef:e,children:[a(x,{name:"postName",label:"岗位名称",rules:[{required:!0}]}),a(x,{name:"postCode",label:"岗位编码",rules:[{required:!0}]}),a(v,{name:"postSort",label:"显示顺序",rules:[{required:!0}],initialValue:0}),a(I.Group,{name:"status",label:"状态",valueEnum:A,initialValue:M}),a(R,{name:"remark",label:"备注"})]})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const oe=()=>{const e=Z();return a(p,{accessible:!0,children:a(g,{type:"primary",icon:a(W,{}),onClick:e,children:"新增"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const re=({record:e})=>{const t=ee();return a(p,{accessible:!0,children:a(g,{type:"link",icon:a(_,{}),onClick:()=>t(e),children:"编辑"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ce=async e=>{const{data:t}=await V(e,{format:"blob"});await L(t,`post_${new Date().getTime()}.xlsx`)},ie=({searchParams:e})=>{const{message:t}=y.useApp(),{isLoading:o,mutate:r}=T(ce,{onSuccess:()=>{t.success("导出成功")}});return a(p,{accessible:!0,children:a(g,{type:"primary",ghost:!0,icon:a(z,{}),loading:o,onClick:()=>r(e),children:"导出当前列表"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const E=({postId:e,isBatch:t,disabled:o})=>{const r=t?"批量删除":"删除",s=k(),{message:l,modal:i}=y.useApp(),{mutateAsync:d,isLoading:A}=T(async n=>{await q({postIds:n})},{onSuccess:()=>{var n;s==null||s.reload(),(n=s==null?void 0:s.clearSelected)==null||n.call(s),l.success("删除成功")}});return a(p,{accessible:!0,children:a(g,{type:"link",danger:!0,disabled:o,icon:a(J,{}),onClick:()=>{i.confirm({title:"删除岗位",content:`确定删除岗位编号为 ${e} 的岗位吗？`,onOk:async()=>d(e),okButtonProps:{loading:A}})},children:r})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ne=()=>{const{valueEnumSysNormalDisable:e}=P();return[{dataIndex:"postId",key:"postId",title:"岗位编号",valueType:"text",hideInSearch:!0},{dataIndex:"postCode",key:"postCode",title:"岗位编码",valueType:"text"},{dataIndex:"postName",key:"postName",title:"岗位名称",valueType:"text"},{dataIndex:"postSort",key:"postSort",title:"显示顺序",valueType:"text",hideInSearch:!0},{title:"状态",dataIndex:"status",key:"status",valueType:"select",valueEnum:e},{title:"备注",dataIndex:"remark",key:"remark",valueType:"textarea",hideInSearch:!0},{title:"创建时间",dataIndex:"createTime",key:"createTime",valueType:"dateTime",editable:!1,hideInSearch:!0,sorter:!0},{title:"操作",valueType:"option",render:(t,o)=>b(O,{children:[a(re,{record:o}),a(E,{postId:[o.postId]})]})}]},le=({selectedRowKeys:e})=>a(E,{disabled:e.length===0,isBatch:!0,postId:e}),de=()=>{const[e,t]=m.useState({}),o=m.useRef(),r=U(),s=ne();return a(X,{formRef:o,actionRef:r,rowKey:"postId",request:async(...l)=>{const i=Y(...l);return t(i),await H(i)},columns:s,toolbar:{actions:[a(ie,{searchParams:e},"ButtonExport"),a(oe,{},"ButtonAdd")]},tableAlertOptionRender:le})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ye=()=>b($,{children:[a(de,{}),a(se,{})]});export{ye as default};
