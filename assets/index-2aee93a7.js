import{r as s,R as B,j as l,a as M,F as $e}from"./jsx-runtime-0e3d513e.js";import{d as We,c as F,b2 as It,bj as $t,g as Et,m as Rt,r as Pt,c7 as Tt,c8 as At,a0 as De,c9 as Nt,b0 as Je,bi as kt,ca as _t,aW as Me,l as Ve,Z as ot,X as qe,U as we,O as i,_ as A,aX as le,cb as Dt,cc as Kt,cd as Mt,ce as Bt,N as zt,P as Ot,cf as Lt,w as Be,cg as jt,bJ as Ht,v as Wt,aq as Ie,ch as Vt,aP as qt,bg as Ft,M as Gt,aE as Xt,aL as Qt,aK as Yt,a4 as He,ci as Ut,b8 as Jt,bP as Zt,bQ as ea,aI as it,bS as lt,bO as Fe,cj as ta,ck as aa,aA as na}from"./index-4f978b96.js";import{A as Ee}from"./index-2a138459.js";import{g as Ge}from"./index-79096473.js";import{d as ra,u as oa}from"./index-dedf4da2.js";import{b as ia,c as st,u as la,a as ct,W as sa,X as ca,Y as da,Z as ua,_ as ma,$ as ha,a0 as pa,a1 as fa}from"./index-7a6a4985.js";import{z as dt,A as ut,B as mt,m as ga,O as ya}from"./index-1465a0a3.js";import{a as xa,u as va}from"./utils-e7585853.js";import{u as Ca}from"./utils.esm-4224fae3.js";import{u as Xe}from"./useMutation.esm-d4808903.js";import{P as Ze}from"./index-48f787ee.js";import{S as et}from"./Skeleton-78e75ca3.js";import{i as tt,u as ba}from"./useRequest-09156f3b.js";import{P as Sa}from"./index-ba9e2c3b.js";import"./mutation.esm-7405b11f.js";import"./index-cc0f583e.js";var ht=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};const wa=e=>{var{prefixCls:t,className:a,avatar:n,title:r,description:c}=e,o=ht(e,["prefixCls","className","avatar","title","description"]);const{getPrefixCls:u}=s.useContext(We),g=u("list",t),p=F(`${g}-item-meta`,a),m=B.createElement("div",{className:`${g}-item-meta-content`},r&&B.createElement("h4",{className:`${g}-item-meta-title`},r),c&&B.createElement("div",{className:`${g}-item-meta-description`},c));return B.createElement("div",Object.assign({},o,{className:p}),n&&B.createElement("div",{className:`${g}-item-meta-avatar`},n),(r||c)&&m)},Ia=(e,t)=>{var{prefixCls:a,children:n,actions:r,extra:c,className:o,colStyle:u}=e,g=ht(e,["prefixCls","children","actions","extra","className","colStyle"]);const{grid:p,itemLayout:m}=s.useContext(Qe),{getPrefixCls:y}=s.useContext(We),v=()=>{let x;return s.Children.forEach(n,K=>{typeof K=="string"&&(x=!0)}),x&&s.Children.count(n)>1},d=()=>m==="vertical"?!!c:!v(),f=y("list",a),N=r&&r.length>0&&B.createElement("ul",{className:`${f}-item-action`,key:"actions"},r.map((x,K)=>B.createElement("li",{key:`${f}-item-action-${K}`},x,K!==r.length-1&&B.createElement("em",{className:`${f}-item-action-split`})))),E=p?"div":"li",k=B.createElement(E,Object.assign({},g,p?{}:{ref:t},{className:F(`${f}-item`,{[`${f}-item-no-flex`]:!d()},o)}),m==="vertical"&&c?[B.createElement("div",{className:`${f}-item-main`,key:"content"},n,N),B.createElement("div",{className:`${f}-item-extra`,key:"extra"},c)]:[n,N,It(c,{key:"extra"})]);return p?B.createElement($t,{ref:t,flex:1,style:u},k):k},pt=s.forwardRef(Ia);pt.Meta=wa;const $a=pt,Ea=e=>{const{listBorderedCls:t,componentCls:a,paddingLG:n,margin:r,padding:c,listItemPaddingSM:o,marginLG:u,borderRadiusLG:g}=e;return{[`${t}`]:{border:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,borderRadius:g,[`${a}-header,${a}-footer,${a}-item`]:{paddingInline:n},[`${a}-pagination`]:{margin:`${r}px ${u}px`}},[`${t}${a}-sm`]:{[`${a}-item,${a}-header,${a}-footer`]:{padding:o}},[`${t}${a}-lg`]:{[`${a}-item,${a}-header,${a}-footer`]:{padding:`${c}px ${n}px`}}}},Ra=e=>{const{componentCls:t,screenSM:a,screenMD:n,marginLG:r,marginSM:c,margin:o}=e;return{[`@media screen and (max-width:${n})`]:{[`${t}`]:{[`${t}-item`]:{[`${t}-item-action`]:{marginInlineStart:r}}},[`${t}-vertical`]:{[`${t}-item`]:{[`${t}-item-extra`]:{marginInlineStart:r}}}},[`@media screen and (max-width: ${a})`]:{[`${t}`]:{[`${t}-item`]:{flexWrap:"wrap",[`${t}-action`]:{marginInlineStart:c}}},[`${t}-vertical`]:{[`${t}-item`]:{flexWrap:"wrap-reverse",[`${t}-item-main`]:{minWidth:e.contentWidth},[`${t}-item-extra`]:{margin:`auto auto ${o}px`}}}}}},Pa=e=>{const{componentCls:t,antCls:a,controlHeight:n,minHeight:r,paddingSM:c,marginLG:o,padding:u,listItemPadding:g,colorPrimary:p,listItemPaddingSM:m,listItemPaddingLG:y,paddingXS:v,margin:d,colorText:f,colorTextDescription:N,motionDurationSlow:E,lineWidth:k}=e;return{[`${t}`]:Object.assign(Object.assign({},Pt(e)),{position:"relative","*":{outline:"none"},[`${t}-header, ${t}-footer`]:{background:"transparent",paddingBlock:c},[`${t}-pagination`]:{marginBlockStart:o,textAlign:"end",[`${a}-pagination-options`]:{textAlign:"start"}},[`${t}-spin`]:{minHeight:r,textAlign:"center"},[`${t}-items`]:{margin:0,padding:0,listStyle:"none"},[`${t}-item`]:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:g,color:f,[`${t}-item-meta`]:{display:"flex",flex:1,alignItems:"flex-start",maxWidth:"100%",[`${t}-item-meta-avatar`]:{marginInlineEnd:u},[`${t}-item-meta-content`]:{flex:"1 0",width:0,color:f},[`${t}-item-meta-title`]:{marginBottom:e.marginXXS,color:f,fontSize:e.fontSize,lineHeight:e.lineHeight,"> a":{color:f,transition:`all ${E}`,["&:hover"]:{color:p}}},[`${t}-item-meta-description`]:{color:N,fontSize:e.fontSize,lineHeight:e.lineHeight}},[`${t}-item-action`]:{flex:"0 0 auto",marginInlineStart:e.marginXXL,padding:0,fontSize:0,listStyle:"none",["& > li"]:{position:"relative",display:"inline-block",padding:`0 ${v}px`,color:N,fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"center",["&:first-child"]:{paddingInlineStart:0}},[`${t}-item-action-split`]:{position:"absolute",insetBlockStart:"50%",insetInlineEnd:0,width:k,height:Math.ceil(e.fontSize*e.lineHeight)-e.marginXXS*2,transform:"translateY(-50%)",backgroundColor:e.colorSplit}}},[`${t}-empty`]:{padding:`${u}px 0`,color:N,fontSize:e.fontSizeSM,textAlign:"center"},[`${t}-empty-text`]:{padding:u,color:e.colorTextDisabled,fontSize:e.fontSize,textAlign:"center"},[`${t}-item-no-flex`]:{display:"block"}}),[`${t}-grid ${a}-col > ${t}-item`]:{display:"block",maxWidth:"100%",marginBlockEnd:d,paddingBlock:0,borderBlockEnd:"none"},[`${t}-vertical ${t}-item`]:{alignItems:"initial",[`${t}-item-main`]:{display:"block",flex:1},[`${t}-item-extra`]:{marginInlineStart:o},[`${t}-item-meta`]:{marginBlockEnd:u,[`${t}-item-meta-title`]:{marginBlockEnd:c,color:f,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG}},[`${t}-item-action`]:{marginBlockStart:u,marginInlineStart:"auto","> li":{padding:`0 ${u}px`,["&:first-child"]:{paddingInlineStart:0}}}},[`${t}-split ${t}-item`]:{borderBlockEnd:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,["&:last-child"]:{borderBlockEnd:"none"}},[`${t}-split ${t}-header`]:{borderBlockEnd:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`},[`${t}-split${t}-empty ${t}-footer`]:{borderTop:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`},[`${t}-loading ${t}-spin-nested-loading`]:{minHeight:n},[`${t}-split${t}-something-after-last-item ${a}-spin-container > ${t}-items > ${t}-item:last-child`]:{borderBlockEnd:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`},[`${t}-lg ${t}-item`]:{padding:y},[`${t}-sm ${t}-item`]:{padding:m},[`${t}:not(${t}-vertical)`]:{[`${t}-item-no-flex`]:{[`${t}-item-action`]:{float:"right"}}}}},Ta=Et("List",e=>{const t=Rt(e,{listBorderedCls:`${e.componentCls}-bordered`,minHeight:e.controlHeightLG,listItemPadding:`${e.paddingContentVertical}px ${e.paddingContentHorizontalLG}px`,listItemPaddingSM:`${e.paddingContentVerticalSM}px ${e.paddingContentHorizontal}px`,listItemPaddingLG:`${e.paddingContentVerticalLG}px ${e.paddingContentHorizontalLG}px`});return[Pa(t),Ea(t),Ra(t)]},{contentWidth:220});var Aa=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};const Qe=s.createContext({});Qe.Consumer;function Ke(e){var{pagination:t=!1,prefixCls:a,bordered:n=!1,split:r=!0,className:c,children:o,itemLayout:u,loadMore:g,grid:p,dataSource:m=[],size:y,header:v,footer:d,loading:f=!1,rowKey:N,renderItem:E,locale:k}=e,x=Aa(e,["pagination","prefixCls","bordered","split","className","children","itemLayout","loadMore","grid","dataSource","size","header","footer","loading","rowKey","renderItem","locale"]);const K=t&&typeof t=="object"?t:{},[b,X]=s.useState(K.defaultCurrent||1),[V,R]=s.useState(K.defaultPageSize||10),{getPrefixCls:J,renderEmpty:w,direction:H}=s.useContext(We),se={current:1,total:0},G=C=>(h,S)=>{X(h),R(S),t&&t[C]&&t[C](h,S)},O=G("onChange"),re=G("onShowSizeChange"),oe=(C,h)=>{if(!E)return null;let S;return typeof N=="function"?S=N(C):N?S=C[N]:S=C.key,S||(S=`list-item-${h}`),s.createElement(s.Fragment,{key:S},E(C,h))},ie=()=>!!(g||t||d),T=J("list",a),[Z,q]=Ta(T);let I=f;typeof I=="boolean"&&(I={spinning:I});const L=I&&I.spinning;let D="";switch(y){case"large":D="lg";break;case"small":D="sm";break}const _=F(T,{[`${T}-vertical`]:u==="vertical",[`${T}-${D}`]:D,[`${T}-split`]:r,[`${T}-bordered`]:n,[`${T}-loading`]:L,[`${T}-grid`]:!!p,[`${T}-something-after-last-item`]:ie(),[`${T}-rtl`]:H==="rtl"},c,q),$=Tt(se,{total:m.length,current:b,pageSize:V},t||{}),z=Math.ceil($.total/$.pageSize);$.current>z&&($.current=z);const Q=t?s.createElement("div",{className:`${T}-pagination`},s.createElement(At,Object.assign({},$,{onChange:O,onShowSizeChange:re}))):null;let j=De(m);t&&m.length>($.current-1)*$.pageSize&&(j=De(m).splice(($.current-1)*$.pageSize,$.pageSize));const ee=Object.keys(p||{}).some(C=>["xs","sm","md","lg","xl","xxl"].includes(C)),te=Nt(ee),ae=s.useMemo(()=>{for(let C=0;C<Je.length;C+=1){const h=Je[C];if(te[h])return h}},[te]),pe=s.useMemo(()=>{if(!p)return;const C=ae&&p[ae]?p[ae]:p.column;if(C)return{width:`${100/C}%`,maxWidth:`${100/C}%`}},[p==null?void 0:p.column,ae]);let W=L&&s.createElement("div",{style:{minHeight:53}});if(j.length>0){const C=j.map((h,S)=>oe(h,S));W=p?s.createElement(kt,{gutter:p.gutter},s.Children.map(C,h=>s.createElement("div",{key:h==null?void 0:h.key,style:pe},h))):s.createElement("ul",{className:`${T}-items`},C)}else!o&&!L&&(W=s.createElement("div",{className:`${T}-empty-text`},k&&k.emptyText||(w==null?void 0:w("List"))||s.createElement(_t,{componentName:"List"})));const ne=$.position||"bottom",ce=s.useMemo(()=>({grid:p,itemLayout:u}),[JSON.stringify(p),u]);return Z(s.createElement(Qe.Provider,{value:ce},s.createElement("div",Object.assign({className:_},x),(ne==="top"||ne==="both")&&Q,v&&s.createElement("div",{className:`${T}-header`},v),s.createElement(Me,Object.assign({},I),W,o),d&&s.createElement("div",{className:`${T}-footer`},d),g||(ne==="bottom"||ne==="both")&&Q)))}Ke.Item=$a;var ft={};Object.defineProperty(ft,"__esModule",{value:!0});var Na=ft.default=ka;function ka(e,t){for(var a=e,n=0;n<t.length;n+=1){if(a==null)return;a=a[t[n]]}return a}var _a=["title","subTitle","avatar","description","extra","content","actions","type"],Da=_a.reduce(function(e,t){return e.set(t,!0),e},new Map),gt={};function ke(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ke=function(a){return typeof a}:ke=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},ke(e)}Object.defineProperty(gt,"__esModule",{value:!0});var Ka=gt.default=Ha,Le=Ma(s);function yt(){if(typeof WeakMap!="function")return null;var e=new WeakMap;return yt=function(){return e},e}function Ma(e){if(e&&e.__esModule)return e;if(e===null||ke(e)!=="object"&&typeof e!="function")return{default:e};var t=yt();if(t&&t.has(e))return t.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var c=n?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(a,r,c):a[r]=e[r]}return a.default=e,t&&t.set(e,a),a}function Ba(e,t){return ja(e)||La(e,t)||Oa(e,t)||za()}function za(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Oa(e,t){if(e){if(typeof e=="string")return at(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return at(e,t)}}function at(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function La(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var a=[],n=!0,r=!1,c=void 0;try{for(var o=e[Symbol.iterator](),u;!(n=(u=o.next()).done)&&(a.push(u.value),!(t&&a.length===t));n=!0);}catch(g){r=!0,c=g}finally{try{!n&&o.return!=null&&o.return()}finally{if(r)throw c}}return a}}function ja(e){if(Array.isArray(e))return e}function Ha(e,t){var a=t||{},n=a.defaultValue,r=a.value,c=a.onChange,o=a.postState,u=Le.useState(function(){return r!==void 0?r:n!==void 0?typeof n=="function"?n():n:typeof e=="function"?e():e}),g=Ba(u,2),p=g[0],m=g[1],y=r!==void 0?r:p;o&&(y=o(y));function v(f){m(f),y!==f&&c&&c(f,y)}var d=Le.useRef(!0);return Le.useEffect(function(){if(d.current){d.current=!1;return}r===void 0&&m(r)},[r]),[y,v]}var Wa=["title","subTitle","content","itemTitleRender","prefixCls","actions","item","recordKey","avatar","cardProps","description","isEditable","checkbox","index","selected","loading","expand","onExpand","expandable","rowSupportExpand","showActions","showExtra","type","style","className","record","onRow","onItem","itemHeaderRender","cardActionProps","extra"];function Va(e){var t,a=e.prefixCls,n=e.expandIcon,r=n===void 0?l(Dt,{}):n,c=e.onExpand,o=e.expanded,u=e.record,g=e.hashId,p=r,m="".concat(a,"-row-expand-icon"),y=function(d){c(!o),d.stopPropagation()};return typeof r=="function"&&(p=r({expanded:o,onExpand:c,record:u})),l("span",{className:F(m,g,(t={},i(t,"".concat(a,"-row-expanded"),o),i(t,"".concat(a,"-row-collapsed"),!o),t)),onClick:y,children:p})}function qa(e){var t,a,n,r,c,o=e.prefixCls,u=s.useContext(Ve.ConfigContext),g=u.getPrefixCls,p=s.useContext(ot),m=p.hashId,y=g("pro-list",o),v="".concat(y,"-row"),d=e.title,f=e.subTitle,N=e.content,E=e.itemTitleRender;e.prefixCls;var k=e.actions;e.item,e.recordKey;var x=e.avatar,K=e.cardProps,b=e.description,X=e.isEditable,V=e.checkbox,R=e.index,J=e.selected,w=e.loading,H=e.expand,se=e.onExpand,G=e.expandable,O=e.rowSupportExpand,re=e.showActions,oe=e.showExtra,ie=e.type,T=e.style,Z=e.className,q=Z===void 0?v:Z,I=e.record,L=e.onRow,D=e.onItem,_=e.itemHeaderRender,$=e.cardActionProps,z=e.extra,Q=qe(e,Wa),j=G||{},ee=j.expandedRowRender,te=j.expandIcon,ae=j.expandRowByClick,pe=j.indentSize,W=pe===void 0?8:pe,ne=j.expandedRowClassName,ce=Ka(!!H,{value:H,onChange:se}),C=we(ce,2),h=C[0],S=C[1],P=F((t={},i(t,"".concat(v,"-selected"),!K&&J),i(t,"".concat(v,"-show-action-hover"),re==="hover"),i(t,"".concat(v,"-type-").concat(ie),!!ie),i(t,"".concat(v,"-editable"),X),i(t,"".concat(v,"-show-extra-hover"),oe==="hover"),t),m,v),de=F(m,i({},"".concat(q,"-extra"),oe==="hover")),fe=h||Object.values(G||{}).length===0,ge=ee&&ee(I,R,W,h),ue=s.useMemo(function(){if(!(!k||$==="actions"))return[l("div",{onClick:function(U){return U.stopPropagation()},children:k},"action")]},[k,$]),Re=s.useMemo(function(){if(!(!k||!$||$==="extra"))return[l("div",{className:"".concat(P,"-actions ").concat(m),onClick:function(U){return U.stopPropagation()},children:k},"action")]},[k,$,P,m]),be=d||f?M("div",{className:"".concat(P,"-header-title ").concat(m),children:[d&&l("div",{className:"".concat(P,"-title ").concat(m),children:d}),f&&l("div",{className:"".concat(P,"-subTitle ").concat(m),children:f})]}):null,ye=(a=E&&(E==null?void 0:E(I,R,be)))!==null&&a!==void 0?a:be,Pe=ye||x||f||b?l(Ke.Item.Meta,{avatar:x,title:ye,description:b&&fe&&l("div",{className:"".concat(P,"-description ").concat(m),children:b})}):null,Te=F(m,(n={},i(n,"".concat(P,"-item-has-checkbox"),V),i(n,"".concat(P,"-item-has-avatar"),x),i(n,P,P),n)),Y=s.useMemo(function(){return x||d?M($e,{children:[x,l("span",{className:"".concat(g("list-item-meta-title")," ").concat(m),children:d})]}):null},[x,g,m,d]),xe=K?l(le,A(A(A({bordered:!0,loading:w,hoverable:!0},K),{},{title:Y,subTitle:f,extra:ue,actions:Re,bodyStyle:A({padding:24},K.bodyStyle)},D==null?void 0:D(I,R)),{},{children:l(et,{avatar:!0,title:!1,loading:w,active:!0,children:M("div",{className:"".concat(P,"-header ").concat(m),children:[E&&(E==null?void 0:E(I,R,be)),N]})})})):l(Ke.Item,A(A(A(A({className:F(Te,m,i({},q,q!==v))},Q),{},{actions:ue,extra:!!z&&l("div",{className:de,children:z})},L==null?void 0:L(I,R)),D==null?void 0:D(I,R)),{},{onClick:function(U){var me,ve,Ae,Oe;L==null||(me=L(I,R))===null||me===void 0||(ve=me.onClick)===null||ve===void 0||ve.call(me,U),D==null||(Ae=D(I,R))===null||Ae===void 0||(Oe=Ae.onClick)===null||Oe===void 0||Oe.call(Ae,U),ae&&S(!h)},children:M(et,{avatar:!0,title:!1,loading:w,active:!0,children:[M("div",{className:"".concat(P,"-header ").concat(m),children:[M("div",{className:"".concat(P,"-header-option ").concat(m),children:[!!V&&l("div",{className:"".concat(P,"-checkbox ").concat(m),children:V}),Object.values(G||{}).length>0&&O&&Va({prefixCls:y,hashId:m,expandIcon:te,onExpand:S,expanded:h,record:I})]}),(r=_&&(_==null?void 0:_(I,R,Pe)))!==null&&r!==void 0?r:Pe]}),fe&&(N||ge)&&M("div",{className:"".concat(P,"-content ").concat(m),children:[N,ee&&O&&l("div",{className:ne&&ne(I,R,W),children:ge})]})]})}));return K?l("div",{className:F(m,(c={},i(c,"".concat(P,"-card"),K),i(c,q,q!==v),c)),style:T,children:xe}):xe}var Fa=["dataSource","columns","rowKey","showActions","showExtra","prefixCls","actionRef","itemTitleRender","renderItem","itemCardProps","itemHeaderRender","expandable","rowSelection","pagination","onRow","onItem","rowClassName"];function Ga(e){var t=e.dataSource,a=e.columns,n=e.rowKey,r=e.showActions,c=e.showExtra,o=e.prefixCls,u=e.actionRef,g=e.itemTitleRender,p=e.renderItem,m=e.itemCardProps,y=e.itemHeaderRender,v=e.expandable,d=e.rowSelection,f=e.pagination,N=e.onRow,E=e.onItem,k=e.rowClassName,x=qe(e,Fa),K=s.useContext(ot),b=K.hashId,X=s.useContext(Ve.ConfigContext),V=X.getPrefixCls,R=B.useMemo(function(){return typeof n=="function"?n:function(C,h){return C[n]||h}},[n]),J=Kt(t,"children",R),w=we(J,1),H=w[0],se=Mt(t.length,A({responsive:!0},f),function(){}),G=we(se,1),O=G[0],re=B.useMemo(function(){if(f===!1||!O.pageSize||t.length<O.total)return t;var C=O.current,h=C===void 0?1:C,S=O.pageSize,P=S===void 0?10:S,de=t.slice((h-1)*P,h*P);return de},[t,O,f]),oe=V("pro-list",o),ie=Bt(d,{getRowKey:R,getRecordByKey:H,prefixCls:oe,data:t,pageData:re,expandType:"row",childrenColumnName:"children",locale:{}}),T=we(ie,2),Z=T[0],q=T[1],I=v||{},L=I.expandedRowKeys,D=I.defaultExpandedRowKeys,_=I.defaultExpandAllRows,$=_===void 0?!0:_,z=I.onExpand,Q=I.onExpandedRowsChange,j=I.rowExpandable,ee=B.useState(function(){return D||($!==!1?t.map(R):[])}),te=we(ee,2),ae=te[0],pe=te[1],W=B.useMemo(function(){return new Set(L||ae||[])},[L,ae]),ne=B.useCallback(function(C){var h=R(C,t.indexOf(C)),S,P=W.has(h);P?(W.delete(h),S=De(W)):S=[].concat(De(W),[h]),pe(S),z&&z(!P,C),Q&&Q(S)},[R,W,t,z,Q]),ce=Z([])[0];return l(Ke,A(A({},x),{},{className:F(V("pro-list-container",o),b,x.className),dataSource:re,pagination:f&&O,renderItem:function(h,S){var P,de,fe,ge={className:typeof k=="function"?k(h,S):k};a==null||a.forEach(function(Y){var xe=Y.listKey,Se=Y.cardActionProps;if(Da.has(xe)){var U=Y.dataIndex||xe||Y.key,me=Array.isArray(U)?Na(h,U):h[U];Se==="actions"&&xe==="actions"&&(ge.cardActionProps=Se);var ve=Y.render?Y.render(me,h,S):me;ve!=="-"&&(ge[Y.listKey]=ve)}});var ue;ce&&ce.render&&(ue=ce.render(h,h,S)||void 0);var Re=((P=u.current)===null||P===void 0?void 0:P.isEditable(A(A({},h),{},{index:S})))||{},be=Re.isEditable,ye=Re.recordKey,Pe=q.has(ye||S),Te=l(qa,A(A({cardProps:x.grid?A(A(A({},m),x.grid),{},{checked:Pe,onChecked:B.isValidElement(ue)?(de=ue)===null||de===void 0||(fe=de.props)===null||fe===void 0?void 0:fe.onChange:void 0}):void 0},ge),{},{recordKey:ye,isEditable:be||!1,expandable:v,expand:W.has(R(h,S)),onExpand:function(){ne(h)},index:S,record:h,item:h,showActions:r,showExtra:c,itemTitleRender:g,itemHeaderRender:y,rowSupportExpand:!j||j&&j(h),selected:q.has(R(h,S)),checkbox:ue,onRow:N,onItem:E}),ye);return p?p(h,S,Te):Te}}))}var Xa=function(t){var a,n,r,c,o,u;return i({},t.componentCls,(u={backgroundColor:"transparent"},i(u,"".concat(t.proComponentsCls,"-table-alert"),{marginBlockEnd:"16px"}),i(u,"&-row",(o={borderBlockEnd:"1px solid ".concat(t.colorSplit)},i(o,"".concat(t.antCls,"-list-item-meta-title"),{borderBlockEnd:"none",margin:0}),i(o,"&:last-child",i({borderBlockEnd:"none"},"".concat(t.antCls,"-list-item"),{borderBlockEnd:"none"})),i(o,"&:hover",(a={backgroundColor:"rgba(0, 0, 0, 0.02)",transition:"background-color 0.3s"},i(a,"".concat(t.antCls,"-list-item-action"),{display:"block"}),i(a,"".concat(t.antCls,"-list-item-extra"),{display:"flex"}),i(a,"".concat(t.componentCls,"-row-extra"),{display:"block"}),i(a,"".concat(t.componentCls,"-row-subheader-actions"),{display:"block"}),a)),i(o,"&-card",i({marginBlock:8,marginInline:0,paddingBlock:0,paddingInline:8,"&:hover":{backgroundColor:"transparent"}},"".concat(t.antCls,"-list-item-meta-title"),{flexShrink:9,marginBlock:0,marginInline:0,lineHeight:"22px"})),i(o,"&".concat(t.componentCls,"-row-editable"),i({},"".concat(t.componentCls,"-list-item"),{"&-meta":{"&-avatar,&-description,&-title":{paddingBlock:6,paddingInline:0}},"&-action":{display:"block"}})),i(o,"&".concat(t.componentCls,"-row-selected"),{backgroundColor:t.colorPrimaryBgHover,"&:hover":{backgroundColor:t.colorPrimaryBgHover}}),i(o,"&".concat(t.componentCls,"-row-type-new"),{animationName:"techUiListActive",animationDuration:"3s"}),i(o,"&".concat(t.componentCls,"-row-type-inline"),i({},"".concat(t.componentCls,"-row-title"),{fontWeight:"normal"})),i(o,"&".concat(t.componentCls,"-row-type-top"),{backgroundImage:"url('https://gw.alipayobjects.com/zos/antfincdn/DehQfMbOJb/icon.svg')",backgroundRepeat:"no-repeat",backgroundPosition:"left top",backgroundSize:"12px 12px"}),i(o,"&-show-action-hover",i({},"".concat(t.antCls,`-list-item-action,
            `).concat(t.proComponentsCls,`-card-extra,
            `).concat(t.proComponentsCls,"-card-actions"),{display:"flex"})),i(o,"&-show-extra-hover",i({},"".concat(t.antCls,"-list-item-extra"),{display:"none"})),i(o,"&-extra",{display:"none"}),i(o,"&-subheader",{display:"flex",alignItems:"center",justifyContent:"space-between",height:"44px",paddingInline:24,paddingBlock:0,color:t.colorTextSecondary,lineHeight:"44px",background:"rgba(0, 0, 0, 0.02)","&-actions":{display:"none"},"&-actions *":{marginInlineEnd:8,"&:last-child":{marginInlineEnd:0}}}),i(o,"&-expand-icon",{marginInlineEnd:8,display:"flex",fontSize:12,cursor:"pointer",height:"24px",marginRight:4,color:t.colorTextSecondary,"> .anticon > svg":{transition:"0.3s"}}),i(o,"&-expanded",{" > .anticon > svg":{transform:"rotate(90deg)"}}),i(o,"&-title",{marginInlineEnd:"16px",wordBreak:"break-all",cursor:"pointer","&:hover":{color:t.colorPrimary}}),i(o,"&-content",{position:"relative",display:"flex",flex:"1",flexDirection:"column",marginBlock:0,marginInline:32}),i(o,"&-subTitle",{color:"rgba(0, 0, 0, 0.45)"}),i(o,"&-description",{marginBlockStart:"4px",wordBreak:"break-all"}),i(o,"&-avatar",{display:"flex"}),i(o,"&-header",{display:"flex",flex:"1",justifyContent:"flex-start",h4:{margin:0,padding:0}}),i(o,"&-header-title",{display:"flex",alignItems:"center",justifyContent:"flex-start"}),i(o,"&-header-option",{display:"flex"}),i(o,"&-checkbox",{width:"16px",marginInlineEnd:"12px"}),i(o,"&-no-split",(n={},i(n,"".concat(t.componentCls,"-row"),{borderBlockEnd:"none"}),i(n,"".concat(t.antCls,"-list ").concat(t.antCls,"-list-item"),{borderBlockEnd:"none"}),n)),i(o,"&-bordered",i({},"".concat(t.componentCls,"-toolbar"),{borderBlockEnd:"1px solid ".concat(t.colorSplit)})),i(o,"".concat(t.antCls,"-list-vertical"),(r={},i(r,"".concat(t.componentCls,"-row"),{borderBlockEnd:"12px 18px 12px 24px"}),i(r,"&-header-title",{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center"}),i(r,"&-content",{marginBlock:0,marginInline:0}),i(r,"&-subTitle",{marginBlockStart:8}),i(r,"".concat(t.antCls,"-list-item-extra"),i({display:"flex",alignItems:"center",marginInlineStart:"32px"},"".concat(t.componentCls,"-row-description"),{marginBlockStart:16})),i(r,"".concat(t.antCls,"-list-bordered ").concat(t.antCls,"-list-item"),{paddingInline:0}),i(r,"".concat(t.componentCls,"-row-show-extra-hover"),i({},"".concat(t.antCls,"-list-item-extra "),{display:"none"})),r)),i(o,"".concat(t.antCls,"-list-pagination"),{marginBlockStart:t.margin,marginBlockEnd:t.margin}),i(o,"".concat(t.antCls,"-list-list"),{"&-item":{cursor:"pointer",paddingBlock:12,paddingInline:12}}),i(o,"".concat(t.antCls,"-list-vertical ").concat(t.proComponentsCls,"-list-row"),i({"&-header":{paddingBlock:0,paddingInline:0,borderBlockEnd:"none"}},"".concat(t.antCls,"-list-item"),(c={width:"100%",paddingBlock:12,paddingInlineStart:24,paddingInlineEnd:18},i(c,"".concat(t.antCls,"-list-item-meta-avatar"),{display:"flex",alignItems:"center",marginInlineEnd:8}),i(c,"".concat(t.antCls,"-list-item-action-split"),{display:"none"}),i(c,"".concat(t.antCls,"-list-item-meta-title"),{marginBlock:0,marginInline:0}),c))),i(o,"@keyframes techUiListActive",{"0%":{backgroundColor:"unset"},"30%":{background:"#fefbe6"},"100%":{backgroundColor:"unset"}}),o)),u))};function Qa(e){return zt("ProList",function(t){var a=A(A({},t),{},{componentCls:".".concat(e)});return[Xa(a)]})}var Ya=["metas","split","footer","rowKey","tooltip","className","options","search","expandable","showActions","showExtra","rowSelection","pagination","itemLayout","renderItem","grid","itemCardProps","onRow","onItem","rowClassName","locale","itemHeaderRender","itemTitleRender"];function Ua(e){var t=e.metas,a=e.split,n=e.footer,r=e.rowKey,c=e.tooltip,o=e.className,u=e.options,g=u===void 0?!1:u,p=e.search,m=p===void 0?!1:p,y=e.expandable,v=e.showActions,d=e.showExtra,f=e.rowSelection,N=f===void 0?!1:f,E=e.pagination,k=E===void 0?!1:E,x=e.itemLayout,K=e.renderItem,b=e.grid,X=e.itemCardProps,V=e.onRow,R=e.onItem,J=e.rowClassName,w=e.locale,H=e.itemHeaderRender,se=e.itemTitleRender,G=qe(e,Ya),O=s.useRef();s.useImperativeHandle(G.actionRef,function(){return O.current});var re=s.useContext(Ve.ConfigContext),oe=re.getPrefixCls,ie=s.useMemo(function(){var D=[];return Object.keys(t||{}).forEach(function(_){var $=t[_]||{},z=$.valueType;z||(_==="avatar"&&(z="avatar"),_==="actions"&&(z="option"),_==="description"&&(z="textarea")),D.push(A(A({listKey:_,dataIndex:($==null?void 0:$.dataIndex)||_},$),{},{valueType:z}))}),D},[t]),T=oe("pro-list",e.prefixCls),Z=Qa(T),q=Z.wrapSSR,I=Z.hashId,L=F(T,I,i({},"".concat(T,"-no-split"),!a));return q(l(Lt,A(A({tooltip:c},G),{},{actionRef:O,pagination:k,type:"list",rowSelection:N,search:m,options:g,className:F(T,o,L),columns:ie,rowKey:r,tableViewRender:function(_){var $=_.columns,z=_.size,Q=_.pagination,j=_.rowSelection,ee=_.dataSource,te=_.loading;return l(Ga,{grid:b,itemCardProps:X,itemTitleRender:se,prefixCls:e.prefixCls,columns:$,renderItem:K,actionRef:O,dataSource:ee||[],size:z,footer:n,split:a,rowKey:r,expandable:y,rowSelection:N===!1?void 0:j,showActions:v,showExtra:d,pagination:Q,itemLayout:x,loading:te,itemHeaderRender:H,onRow:V,onItem:R,rowClassName:J,locale:w})}})))}function Ja(e){return l(Ot,{needDeps:!0,children:l(Ua,A({},e))})}const _e=new Set;let he,nt={xs:0,sm:576,md:768,lg:992,xl:1200};function je(){const e=he;if(xt(),e!==he)for(const t of _e)t()}let Ne=!1;function xt(){const e=window.innerWidth,t={};let a=!1;for(const n of Object.keys(nt))t[n]=e>=nt[n],t[n]!==he[n]&&(a=!0);a&&(he=t)}function Za(){tt&&!Ne&&(he={},xt(),window.addEventListener("resize",je),Ne=!0);const[e,t]=s.useState(he);return s.useEffect(()=>{if(!tt)return;Ne||window.addEventListener("resize",je);const a=()=>{t(he)};return _e.add(a),()=>{_e.delete(a),_e.size===0&&(window.removeEventListener("resize",je),Ne=!1)}},[]),e}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Ye=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/role/model/index.ts/atomRoleListActions",ia(void 0));Ye.debugLabel="atomRoleListActions";const Ue=()=>st(Ye),en=()=>ra(Ye),ze=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/role/model/index.ts/atomRoleDetails",xa({open:!1,roleId:0}));ze.debugLabel="atomRoleDetails";const tn=()=>va(ze),an=()=>{const e=la(ze);return t=>{e({open:!0,roleId:t})}},Ce=()=>st(ze),vt="sysRole",Ct=[vt,"details"],bt=e=>{const{roleId:t}=Ce(),a=ct(Ct,()=>sa({roleId:t}),{onSuccess:e,enabled:!1});return s.useEffect(()=>{t>0&&a.refetch()},[t]),a},St=[vt,"tree"],nn=e=>{const{roleId:t}=Ce(),a=ct(St,async()=>{const{menus:n,checkedKeys:r}=await ca({roleId:t});return{treeData:n,selectedMenuIds:r,selectedTreeData:dt(n,r),allMenuIds:ut(n),allExpandedKeys:mt(n)}},{onSuccess:n=>{e(n.selectedTreeData)},enabled:!1});return s.useEffect(()=>{t>0&&a.refetch()},[t]),a},wt=e=>{const t=Ca();return Xe(async a=>{const n=t.getQueryData(Ct),r=t.getQueryData(St);await da({roleId:n.roleId,roleKey:n.roleKey,roleName:n.roleName,roleSort:n.roleSort,status:n.status,menuIds:r.selectedMenuIds,menuCheckStrictly:!1,deptCheckStrictly:!1,...a})},{onSuccess:async()=>{e(),Be.success("保存成功")}})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const rn=()=>{const{defaultValueSysNormalDisable:e,valueEnumSysNormalDisable:t}=Ge();return[{title:"角色名称",dataIndex:"roleName",key:"roleName",valueType:"text",formItemProps:{rules:[{required:!0,message:"请输入角色名称"}]}},{title:"权限字符",dataIndex:"roleKey",key:"roleKey",valueType:"text",tooltip:"控制器中定义的权限字符，如：@PreAuthorize(`@ss.hasRole('admin')`)",formItemProps:{rules:[{required:!0,message:"请输入权限字符"}]}},{valueType:"group",columns:[{title:"状态",dataIndex:"status",key:"status",valueEnum:t,valueType:"radio",formItemProps:{initialValue:e,rules:[{required:!0,message:"请选择状态"}]}},{title:"显示排序",dataIndex:"roleSort",key:"roleSort",valueType:"digit",formItemProps:{initialValue:0,rules:[{required:!0,message:"请输入显示排序"}]}}]},{title:"备注",dataIndex:"remark",key:"remark",valueType:"textarea"}]},on=()=>{const e=s.useRef(),t=Ue(),a=rn();return l(Ee,{accessKey:"system:role:add",children:l(jt,{title:"新增角色",trigger:l(Ht,{}),formRef:e,onFinish:async r=>{var c;return await ua({...r,menuIds:[],menuCheckStrictly:!1,deptCheckStrictly:!1}),t==null||t.reload(),Be.success("新增成功"),(c=e.current)==null||c.resetFields(),!0},width:500,modalProps:{okText:"提交"},layoutType:"ModalForm",columns:a})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ln=()=>{const e=Wt(),{roleId:t,open:a}=Ce();return l(Ee,{accessKey:"system:user:edit",children:l(Ie,{type:"primary",ghost:!0,onClick:()=>e(Vt("/system/role-auth/:roleId",{roleId:t.toString()})),icon:l(qt,{}),disabled:!a,children:"分配用户"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const sn=()=>{const e=Ue(),t=tn(),{roleId:a,open:n}=Ce(),{isLoading:r,mutateAsync:c}=Xe(ma,{onSuccess:()=>{var u;e==null||e.reload(),(u=e==null?void 0:e.clearSelected)==null||u.call(e),t(),Be.success("删除成功")}});return l(Ee,{accessKey:"system:role:remove",children:l(Ft,{type:"primary",size:"middle",disabled:!n,onClick:()=>Gt.confirm({title:"操作确认",content:`确定删除角色编号为 ${a} 的角色吗？`,onOk:()=>c({roleIds:a}),okButtonProps:{loading:r}})})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const cn=[{title:"角色编号",dataIndex:"roleId",key:"roleId",valueType:"text"},{title:"创建时间",dataIndex:"createTime",key:"createTime",valueType:"dateTime"}],dn=()=>{const{valueEnumSysNormalDisable:e}=Ge();return[{title:"状态",dataIndex:"status",key:"status",valueEnum:e,valueType:"radio"},{title:"显示排序",dataIndex:"roleSort",key:"roleSort",valueType:"digit"},{title:"角色名称",dataIndex:"roleName",key:"roleName",valueType:"text",formItemProps:{required:!0,rules:[{required:!0,message:"请输入角色名称"}]}},{title:"备注",dataIndex:"remark",key:"remark",valueType:"textarea"},{title:"权限字符",dataIndex:"roleKey",key:"roleKey",valueType:"text",tooltip:"控制器中定义的权限字符，如：@PreAuthorize(`@ss.hasRole('admin')`)",formItemProps:{required:!0,rules:[{required:!0,message:"请输入权限字符"}]}}]},un=()=>{const[e,t]=s.useState([]),[a]=Xt.useForm(),n=dn(),r=Ue(),{data:c,isFetching:o,refetch:u}=bt(()=>{t([]),a.resetFields()}),{mutateAsync:g}=wt(()=>{u(),r==null||r.reload()}),m=oa()("system:role:edit")?{form:a,editableKeys:e,onChange:(y,v)=>{if(t(y),y.length>0){const d=y[0];a.setFieldsValue({[d]:v[d]})}},onSave:async(y,v)=>{await g({[y]:v[y]})}}:void 0;return M(Me,{spinning:o,children:[l(Ze,{column:2,columns:cn,dataSource:c}),l(Qt,{}),l(Ze,{column:2,columns:n,dataSource:c,editable:m})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const mn=()=>{const{valueEnumSysNormalDisable:e}=Ge();return{title:{title:"角色名称",dataIndex:"roleName",valueType:"text"},subTitle:{title:"状态",dataIndex:"status",valueType:"select",valueEnum:e},description:{title:"权限字符",dataIndex:"roleKey",valueType:"text"}}},hn=()=>{const e=en(),t=an(),a=mn();return l(Ja,{ghost:!0,rowKey:"roleId",actionRef:e,metas:a,tableAlertRender:!1,rowSelection:{type:"radio",onSelect:({roleId:n})=>{t(n)}},search:{filterType:"light"},pagination:{defaultPageSize:10,defaultCurrent:1,showSizeChanger:!0},request:(...n)=>ha(ga(...n))})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const pn=()=>{const[e,t]=s.useState([]),[a,n]=s.useState(!1),[r,c]=s.useState([]),[o,u]=s.useState([]),[g,p]=s.useState(!1),[m,y]=s.useState(!0),[v,d]=s.useState(),f=s.useRef(),{open:N,roleId:E}=Ce(),{refetch:k}=bt(({dataScope:w})=>{var H;d(w),(H=f.current)==null||H.setFieldsValue({dataScope:w})}),{loading:x,refresh:K,data:b}=ba(async()=>{const{depts:w,checkedKeys:H}=await pa({roleId:E});return{treeData:w,selectedMenuIds:H,selectedTreeData:dt(w,H),allMenuIds:ut(w),allExpandedKeys:mt(w)}},{ready:N,refreshDeps:[E],onSuccess:w=>{n(!1),u(w.selectedTreeData)}}),{isLoading:X,mutate:V}=Xe(async()=>{await fa({roleId:E,dataScope:v,deptIds:e})},{onSuccess:()=>{K(),k(),Be.success("保存成功")}}),R=r.length===(b==null?void 0:b.allExpandedKeys.length),J=w=>{if(w||m){t((b==null?void 0:b.allMenuIds)??[]);return}t([])};return s.useEffect(()=>{if((b==null?void 0:b.allMenuIds.length)===e.length){p(!0),y(!1);return}if(e.length===0){p(!1),y(!1);return}y(!0)},[b==null?void 0:b.allMenuIds,e]),M($e,{children:[M("header",{className:"flex justify-between items-start flex-wrap",children:[l(Yt,{formRef:f,submitter:!1,layout:"horizontal",children:l(Sa,{name:"dataScope",label:"数据权限范围",fieldProps:{options:ya,onChange:w=>{d(w)}},readonly:!a})}),l(Ee,{accessKey:"system:role:edit",children:a?M(He,{children:[l(Ie,{loading:X,onClick:()=>{n(!1),u((b==null?void 0:b.selectedTreeData)??[])},children:"取消编辑"}),l(Ie,{type:"primary",ghost:!0,icon:l(Ut,{}),loading:X,onClick:()=>V(),children:"保存"})]}):l(Ie,{type:"primary",ghost:!0,icon:l(Jt,{}),onClick:()=>{n(!0),t((b==null?void 0:b.selectedMenuIds)??[]),u((b==null?void 0:b.treeData)??[])},children:"编辑数据权限"})})]}),v==="2"&&M($e,{children:[M(He,{wrap:!0,className:"my-2",children:[o.length>0&&l(Ie,{size:"small",icon:R?l(Zt,{}):l(ea,{}),onClick:()=>c(R?[]:b.allExpandedKeys),children:R?"全部折叠":"全部展开"}),a&&l(it,{indeterminate:m,onChange:w=>J(w.target.checked),checked:g,children:"全选/全不选"})]}),l(Me,{spinning:x,children:o.length>0?l(lt,{blockNode:!0,showLine:{showLeafIcon:!1},checkable:a,checkStrictly:!0,fieldNames:{title:"label",key:"id"},checkedKeys:e,treeData:o,expandedKeys:r,onExpand:w=>c(w),onCheck:w=>{t(w.checked)}}):l(Fe,{description:"暂未分配数据权限"})})]})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const fn=()=>{const[e,t]=s.useState([]),[a,n]=s.useState(!1),[r,c]=s.useState([]),[o,u]=s.useState([]),[g,p]=s.useState(!1),[m,y]=s.useState(!0),{isFetching:v,data:d,refetch:f}=nn(x=>{n(!1),u(x)}),{isLoading:N,mutate:E}=wt(()=>{f()}),k=x=>{if(x||m){t((d==null?void 0:d.allMenuIds)??[]);return}t([])};return s.useEffect(()=>{if((d==null?void 0:d.allMenuIds.length)===e.length){p(!0),y(!1);return}if(e.length===0){p(!1),y(!1);return}y(!0)},[d==null?void 0:d.allMenuIds,e]),M($e,{children:[M("header",{className:"flex justify-between items-end mb-2",children:[l(ta,{expanded:r.length===(d==null?void 0:d.allExpandedKeys.length),onChange:x=>{c(x?(d==null?void 0:d.allExpandedKeys)??[]:[])}}),l(Ee,{accessKey:"system:role:edit",children:l(aa,{editable:a,loading:N,onCancel:()=>{n(!1),u((d==null?void 0:d.selectedTreeData)??[])},onSave:()=>E({menuIds:e}),onStartEdit:()=>{n(!0),t((d==null?void 0:d.selectedMenuIds)??[]),u((d==null?void 0:d.treeData)??[])}})})]}),M(Me,{spinning:v,children:[l("div",{className:"pl-1 mb-1",children:a&&l(it,{indeterminate:m,onChange:x=>k(x.target.checked),checked:g,children:"全选/全不选"})}),o.length>0?l(lt,{blockNode:!0,showLine:{showLeafIcon:!1},checkable:a,checkStrictly:!0,fieldNames:{title:"label",key:"id"},checkedKeys:e,treeData:o,expandedKeys:r,onExpand:x=>c(x),onCheck:x=>{t(x.checked)},height:500}):l(Fe,{description:"暂未分配菜单权限"})]})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const rt={list:{xxl:7,xl:10,lg:13,md:24,sm:24,xs:24},details:{xxl:17,xl:14,lg:11,md:24,sm:24,xs:24}},kn=()=>{const{xl:e}=Za(),{open:t}=Ce();return l(na,{children:M(le,{ghost:!0,gutter:[16,16],wrap:!0,children:[l(le,{title:"角色列表",colSpan:rt.list,extra:l(on,{}),children:l(hn,{})}),l(le,{split:"horizontal",title:"角色详情",colSpan:rt.details,extra:M(He,{children:[l(sn,{}),l(ln,{})]}),className:"h-full",children:t?M($e,{children:[l(le,{children:l(un,{})}),M(le,{split:e?"vertical":"horizontal",children:[l(le,{children:l(fn,{})}),l(le,{children:l(pn,{})})]})]}):l(Fe,{description:"点击选择左侧角色查看详情"})})]})})};export{kn as default};
