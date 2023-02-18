import{r as l,bv as M,d as n,bw as F,c as w,e as N,m as O,bx as R,b as k,j as t,aT as U,al as B,f as S,by as $,Q as E,V as D,a2 as L,bz as V,a3 as q,B as X}from"./index-25c53959.js";import{U as Y}from"./index-931e86e2.js";var v=function(a,o){return l.createElement(M,n(n({},a),{},{ref:o,icon:F}))};v.displayName="InboxOutlined";const z=l.forwardRef(v);var K=N.forwardRef(function(e,a){var o=e.fieldProps,d=e.title,b=d===void 0?"单击或拖动文件到此区域进行上传":d,h=e.icon,f=h===void 0?t(z,{}):h,u=e.description,T=u===void 0?"支持单次或批量上传":u,y=e.action,C=e.accept,r=e.onChange,s=e.value,g=e.children,m=e.max,i=e.proFieldProps,I=l.useContext(O.ConfigContext),A=l.useContext(R),P=(i==null?void 0:i.mode)||A.mode||"edit",c=I.getPrefixCls("upload"),j=(m===void 0||!s||(s==null?void 0:s.length)<m)&&P!=="read"&&(i==null?void 0:i.readonly)!==!0;return k(Y.Dragger,n(n({ref:a,name:"files",action:y,accept:C,fileList:s},o),{},{onChange:function(p){r==null||r(p),o!=null&&o.onChange&&(o==null||o.onChange(p))},style:n(n({},o==null?void 0:o.style),{},{display:j?void 0:"none"}),children:[t("p",{className:"".concat(c,"-drag-icon"),children:f}),t("p",{className:"".concat(c,"-text"),children:b}),t("p",{className:"".concat(c,"-hint"),children:T}),g?t("div",{className:"".concat(c,"-extra"),style:{padding:16},children:g}):null]}))}),Q=w(K,{getValueFromEvent:function(a){return a.fileList}});const G=Q;globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const H="https://test-ryx-admin-api.p.quicknav.cn/system/oss/upload",J=()=>t(U,{accessible:!0,children:t(B,{title:"上传文件",trigger:t(S,{type:"primary",icon:t($,{}),children:"上传文件"}),children:t(G,{action:H})})});globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const x=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/oss/model/index.ts/atomMainTableActions",E(void 0));x.debugLabel="atomMainTableActions";const W=()=>D(x);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const Z=[{title:"对象存储主键",dataIndex:"ossId",key:"ossId",valueType:"text",hideInSearch:!0},{title:"文件名",dataIndex:"fileName",key:"fileName",valueType:"text"},{title:"原名",dataIndex:"originalName",key:"originalName",valueType:"text"},{title:"文件后缀名",dataIndex:"fileSuffix",key:"fileSuffix",valueType:"text"},{title:"服务商",dataIndex:"service",key:"service",valueType:"text"},{title:"创建时间",dataIndex:"createTime",key:"createTime",valueType:"dateTime",hideInSearch:!0},{title:"创建时间",dataIndex:"createTimeRange",key:"createTimeRange",valueType:"dateTimeRange",hideInTable:!0}],_=()=>{const e=W();return t(L,{rowKey:"ossId",actionRef:e,columns:Z,request:(...a)=>V(q(...a)),toolbar:{actions:[t(J,{},"ModalFormUpdate")]}})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const oe=()=>t(X,{children:t(_,{})});export{oe as default};
