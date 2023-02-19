import{Q as S,V as v,X as x,aj as C,r as m,A,a4 as w,j as a,aA as I,b as y,o as R,bD as O,bE as B,aW as p,f as g,bF as D,bG as F,bH as V,bI as N,a0 as L,bJ as X,Z as q,a2 as Y,a3 as H,bK as G,p as Q,B as W}from"./index-e9bba9a2.js";import{a as $,u as J}from"./utils-aa38ad6e.js";import{u as T}from"./useMutation-656aed2c.js";import{P}from"./index-ef21e1dc.js";import{P as K}from"./index-6426f042.js";import{P as Z}from"./index-4d93b82b.js";import{P as _}from"./index-ee81e738.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const f=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/post/model/index.ts/atomMainTableActions",S(void 0));f.debugLabel="atomMainTableActions";const z=()=>v(f),E=()=>x(f),h=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/post/model/index.ts/atomAddOrEditModal",$({open:!1,actionType:"add"}));h.debugLabel="atomAddOrEditModal";const U=()=>{const e=C(h);return()=>e({open:!0,actionType:"add"})},ee=()=>{const e=C(h);return t=>e({open:!0,actionType:"edit",record:t})},te=()=>J(h),ae=()=>x(h);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const oe=()=>{const e=m.useRef(),{message:t}=A.useApp(),{open:s,actionType:r,record:o}=ae(),l=te(),i=()=>{var c;r==="edit"&&((c=e.current)==null||c.resetFields()),l()},d=E(),{valueEnumSysNormalDisable:b,defaultValueSysNormalDisable:M}=w(),{mutate:n,isLoading:j}=T(async()=>{var u;const c=await((u=e.current)==null?void 0:u.validateFields());if(c){if(r==="add"){await O(c);return}await B({...c,postId:o.postId})}},{onSuccess:()=>{d==null||d.reload(),i(),t.success(r==="add"?"新增成功":"保存成功")}});return m.useEffect(()=>{if(s&&r==="edit"){const c=setTimeout(()=>{var u;(u=e.current)==null||u.setFieldsValue(o),clearTimeout(c)},0)}},[s]),a(I,{open:s,onCancel:i,okText:"提交",okButtonProps:{loading:j},onOk:()=>n(),title:r==="add"?"新增岗位":"编辑岗位信息",children:y(R,{submitter:!1,formRef:e,children:[a(P,{name:"postName",label:"岗位名称",rules:[{required:!0}]}),a(P,{name:"postCode",label:"岗位编码",rules:[{required:!0}]}),a(K,{name:"postSort",label:"显示顺序",rules:[{required:!0}],initialValue:0}),a(Z.Group,{name:"status",label:"状态",valueEnum:b,initialValue:M}),a(_,{name:"remark",label:"备注"})]})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const se=()=>{const e=U();return a(p,{accessible:!0,children:a(g,{type:"primary",icon:a(D,{}),onClick:e,children:"新增"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const re=({record:e})=>{const t=ee();return a(p,{accessible:!0,children:a(g,{type:"link",icon:a(F,{}),onClick:()=>t(e),children:"编辑"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ce=async e=>{const{data:t}=await N(e,{format:"blob"});await L(t,`post_${new Date().getTime()}.xlsx`)},ie=({searchParams:e})=>{const{message:t}=A.useApp(),{isLoading:s,mutate:r}=T(ce,{onSuccess:()=>{t.success("导出成功")}});return a(p,{accessible:!0,children:a(g,{type:"primary",ghost:!0,icon:a(V,{}),loading:s,onClick:()=>r(e),children:"导出当前列表"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const k=({postId:e,isBatch:t,disabled:s})=>{const r=t?"批量删除":"删除",o=E(),{message:l,modal:i}=A.useApp(),{mutateAsync:d,isLoading:b}=T(async n=>{await X({postIds:n})},{onSuccess:()=>{var n;o==null||o.reload(),(n=o==null?void 0:o.clearSelected)==null||n.call(o),l.success("删除成功")}});return a(p,{accessible:!0,children:a(g,{type:"link",danger:!0,disabled:s,icon:a(q,{}),onClick:()=>{i.confirm({title:"删除岗位",content:`确定删除岗位编号为 ${e} 的岗位吗？`,onOk:async()=>d(e),okButtonProps:{loading:b}})},children:r})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ne=()=>{const{valueEnumSysNormalDisable:e}=w();return[{dataIndex:"postId",key:"postId",title:"岗位编号",valueType:"text",hideInSearch:!0},{dataIndex:"postCode",key:"postCode",title:"岗位编码",valueType:"text"},{dataIndex:"postName",key:"postName",title:"岗位名称",valueType:"text"},{dataIndex:"postSort",key:"postSort",title:"显示顺序",valueType:"text",hideInSearch:!0},{title:"状态",dataIndex:"status",key:"status",valueType:"select",valueEnum:e},{title:"备注",dataIndex:"remark",key:"remark",valueType:"textarea",hideInSearch:!0},{title:"创建时间",dataIndex:"createTime",key:"createTime",valueType:"dateTime",editable:!1,hideInSearch:!0,sorter:!0},{title:"操作",valueType:"option",render:(t,s)=>y(Q,{children:[a(re,{record:s}),a(k,{postId:[s.postId]})]})}]},le=({selectedRowKeys:e})=>a(k,{disabled:e.length===0,isBatch:!0,postId:e}),de=()=>{const[e,t]=m.useState({}),s=m.useRef(),r=z(),o=ne();return a(Y,{formRef:s,actionRef:r,rowKey:"postId",request:async(...l)=>{const i=H(...l);return t(i),await G(i)},columns:o,toolbar:{actions:[a(ie,{searchParams:e},"ButtonExport"),a(se,{},"ButtonAdd")]},tableAlertOptionRender:le})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ye=()=>y(W,{children:[a(de,{}),a(oe,{})]});export{ye as default};
