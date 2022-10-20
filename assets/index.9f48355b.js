import{r as p,bl as Oe,Z as te,e as R,j as i,V as a,bm as Dt,ax as Tt,bn as At,bo as Nt,bp as Me,bq as Bt,br as Mt,bs as Se,bt as Kt,bu as ze,bv as Lt,bw as Ze,aw as _t,b0 as je,bx as zt,Y as He,by as it,W as Ge,bz as Ft,F as Ke,ay as jt,_ as B,ab as et,aG as pe,bA as kt,aP as Te,bB as $t,bC as Ot,bD as Ht,bE as Gt,bF as Wt,U as Vt,av as Xt,s as ct,v as We,g as lt,bG as st,bH as dt,bI as ut,n as qt,q as Le,u as Yt,ai as Ne,aj as ae,a7 as Qt,bJ as Ut,aL as Jt,ak as Zt,al as ea,am as tt,ap as ta,a_ as aa,aC as at,a0 as na,ar as oa,$ as ra,b4 as ia,bK as ca,as as Ae,bL as mt,aM as ht,b1 as pt,b2 as gt,bM as ft,b5 as xt,a$ as Ve,O as la}from"./index.969ee356.js";import{e as Ie}from"./index.6d3e914b.js";import{b as sa}from"./index.20aee0a7.js";import{e as da}from"./SysMenuService.de38c632.js";import{S as ua,a as ma,b as ha,c as pa,d as ga,e as fa,f as xa}from"./SysRoleService.a259461f.js";import{a as va,u as ya}from"./utils.ff7d86ce.js";import{u as vt}from"./useQuery.esm.56fb3fb4.js";import{u as Xe}from"./useMutation.esm.cc54b8c5.js";import{B as qe,F as Ca,D as Sa,E as ba,G as wa,H as Ia,I as Ra,J as Ea,K as Pa,L as Da,M as Ta,N as Aa,O as Na}from"./index.f4f23c09.js";import{e as Ba}from"./SysDeptService.0b3624c9.js";import{i as nt,u as Ma}from"./useRequest.8db80ca4.js";var yt=globalThis&&globalThis.__rest||function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,n=Object.getOwnPropertySymbols(t);c<n.length;c++)e.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(t,n[c])&&(o[n[c]]=t[n[c]]);return o},Ka=function(e){var o=e.prefixCls,n=e.className,c=e.avatar,l=e.title,r=e.description,d=yt(e,["prefixCls","className","avatar","title","description"]),s=p.exports.useContext(Oe),y=s.getPrefixCls,h=y("list",o),g=te("".concat(h,"-item-meta"),n),x=R("div",{className:"".concat(h,"-item-meta-content"),children:[l&&i("h4",{className:"".concat(h,"-item-meta-title"),children:l}),r&&i("div",{className:"".concat(h,"-item-meta-description"),children:r})]});return R("div",{...d,className:g,children:[c&&i("div",{className:"".concat(h,"-item-meta-avatar"),children:c}),(l||r)&&x]})},La=function(e,o){var n=e.prefixCls,c=e.children,l=e.actions,r=e.extra,d=e.className,s=e.colStyle,y=yt(e,["prefixCls","children","actions","extra","className","colStyle"]),h=p.exports.useContext(Ye),g=h.grid,x=h.itemLayout,f=p.exports.useContext(Oe),u=f.getPrefixCls,L=function(){var A;return p.exports.Children.forEach(c,function(I){typeof I=="string"&&(A=!0)}),A&&p.exports.Children.count(c)>1},T=function(){return x==="vertical"?!!r:!L()},b=u("list",n),w=l&&l.length>0&&i("ul",{className:"".concat(b,"-item-action"),children:l.map(function(m,A){return R("li",{children:[m,A!==l.length-1&&i("em",{className:"".concat(b,"-item-action-split")})]},"".concat(b,"-item-action-").concat(A))})},"actions"),_=g?"div":"li",C=i(_,{...y,...g?{}:{ref:o},className:te("".concat(b,"-item"),a({},"".concat(b,"-item-no-flex"),!T()),d),children:x==="vertical"&&r?[R("div",{className:"".concat(b,"-item-main"),children:[c,w]},"content"),i("div",{className:"".concat(b,"-item-extra"),children:r},"extra")]:[c,w,Dt(r,{key:"extra"})]});return g?i(Tt,{ref:o,flex:1,style:s,children:C}):C},Ct=p.exports.forwardRef(La);Ct.Meta=Ka;const _a=Ct;var za=function(e){var o,n,c=e.listBorderedCls,l=e.componentCls,r=e.paddingLG,d=e.margin,s=e.padding,y=e.listItemPaddingSM,h=e.marginLG,g=e.radiusLG;return n={},a(n,"".concat(c),(o={border:"".concat(e.lineWidth,"px ").concat(e.lineType," ").concat(e.colorBorder),borderRadius:g},a(o,"".concat(l,"-header,").concat(l,"-footer,").concat(l,"-item"),{paddingInline:r}),a(o,"".concat(l,"-pagination"),{margin:"".concat(d,"px ").concat(h,"px")}),o)),a(n,"".concat(c).concat(l,"-sm"),a({},"".concat(l,"-item,").concat(l,"-header,").concat(l,"-footer"),{padding:y})),a(n,"".concat(c).concat(l,"-lg"),a({},"".concat(l,"-item,").concat(l,"-header,").concat(l,"-footer"),{padding:"".concat(s,"px ").concat(r,"px")})),n},Fa=function(e){var o,n,c,l,r=e.componentCls,d=e.screenSM,s=e.screenMD,y=e.marginLG,h=e.marginSM,g=e.margin;return l={},a(l,"@media screen and (max-width:".concat(s,")"),(o={},a(o,"".concat(r),a({},"".concat(r,"-item"),a({},"".concat(r,"-item-action"),{marginInlineStart:y}))),a(o,"".concat(r,"-vertical"),a({},"".concat(r,"-item"),a({},"".concat(r,"-item-extra"),{marginInlineStart:y}))),o)),a(l,"@media screen and (max-width: ".concat(d,")"),(c={},a(c,"".concat(r),a({},"".concat(r,"-item"),a({flexWrap:"wrap"},"".concat(r,"-action"),{marginInlineStart:h}))),a(c,"".concat(r,"-vertical"),a({},"".concat(r,"-item"),(n={flexWrap:"wrap-reverse"},a(n,"".concat(r,"-item-main"),{minWidth:e.contentWidth}),a(n,"".concat(r,"-item-extra"),{margin:"auto auto ".concat(g,"px")}),n))),c)),l},ja=function(e){var o,n,c,l,r,d,s=e.componentCls,y=e.antCls,h=e.controlHeight,g=e.minHeight,x=e.paddingSM,f=e.marginLG,u=e.padding,L=e.listItemPadding,T=e.colorPrimary,b=e.listItemPaddingSM,w=e.listItemPaddingLG,_=e.paddingXS,C=e.margin,m=e.colorText,A=e.colorTextDescription,I=e.motionDurationSlow,W=e.lineWidth;return d={},a(d,"".concat(s),Me(Me({},Bt(e)),(l={position:"relative","*":{outline:"none"}},a(l,"".concat(s,"-header, ").concat(s,"-footer"),{background:"transparent",paddingBlock:x}),a(l,"".concat(s,"-pagination"),a({marginBlockStart:f,textAlign:"end"},"".concat(y,"-pagination-options"),{textAlign:"start"})),a(l,"".concat(s,"-spin"),{minHeight:g,textAlign:"center"}),a(l,"".concat(s,"-items"),{margin:0,padding:0,listStyle:"none"}),a(l,"".concat(s,"-item"),(c={display:"flex",alignItems:"center",justifyContent:"space-between",padding:L,color:m},a(c,"".concat(s,"-item-meta"),(o={display:"flex",flex:1,alignItems:"flex-start",maxWidth:"100%"},a(o,"".concat(s,"-item-meta-avatar"),{marginInlineEnd:u}),a(o,"".concat(s,"-item-meta-content"),{flex:"1 0",width:0,color:m}),a(o,"".concat(s,"-item-meta-title"),{marginBottom:e.marginXXS,color:m,fontSize:e.fontSize,lineHeight:e.lineHeight,"> a":a({color:m,transition:"all ".concat(I)},"&:hover",{color:T})}),a(o,"".concat(s,"-item-meta-description"),{color:A,fontSize:e.fontSize,lineHeight:e.lineHeight}),o)),a(c,"".concat(s,"-item-action"),(n={flex:"0 0 auto",marginInlineStart:e.marginXXL,padding:0,fontSize:0,listStyle:"none"},a(n,"& > li",a({position:"relative",display:"inline-block",padding:"0 ".concat(_,"px"),color:A,fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"center"},"&:first-child",{paddingInlineStart:0})),a(n,"".concat(s,"-item-action-split"),{position:"absolute",insetBlockStart:"50%",insetInlineEnd:0,width:W,height:Math.ceil(e.fontSize*e.lineHeight)-e.marginXXS*2,transform:"translateY(-50%)",backgroundColor:e.colorSplit}),n)),c)),a(l,"".concat(s,"-empty"),{padding:"".concat(u,"px 0"),color:A,fontSize:e.fontSizeSM,textAlign:"center"}),a(l,"".concat(s,"-empty-text"),{padding:u,color:e.colorTextDisabled,fontSize:e.fontSize,textAlign:"center"}),a(l,"".concat(s,"-item-no-flex"),{display:"block"}),l))),a(d,"".concat(s,"-grid ").concat(y,"-col > ").concat(s,"-item"),{display:"block",maxWidth:"100%",marginBlockEnd:C,paddingBlock:0,borderBlockEnd:"none"}),a(d,"".concat(s,"-vertical ").concat(s,"-item"),(r={alignItems:"initial"},a(r,"".concat(s,"-item-main"),{display:"block",flex:1}),a(r,"".concat(s,"-item-extra"),{marginInlineStart:f}),a(r,"".concat(s,"-item-meta"),a({marginBlockEnd:u},"".concat(s,"-item-meta-title"),{marginBlockEnd:x,color:m,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG})),a(r,"".concat(s,"-item-action"),{marginBlockStart:u,marginInlineStart:"auto","> li":a({padding:"0 ".concat(u,"px")},"&:first-child",{paddingInlineStart:0})}),r)),a(d,"".concat(s,"-split ").concat(s,"-item"),a({borderBlockEnd:"".concat(e.lineWidth,"px ").concat(e.controlLineType," ").concat(e.colorSplit)},"&:last-child",{borderBlockEnd:"none"})),a(d,"".concat(s,"-split ").concat(s,"-header"),{borderBlockEnd:"".concat(e.lineWidth,"px ").concat(e.lineType," ").concat(e.colorSplit)}),a(d,"".concat(s,"-split").concat(s,"-empty ").concat(s,"-footer"),{borderTop:"".concat(e.lineWidth,"px ").concat(e.lineType," ").concat(e.colorSplit)}),a(d,"".concat(s,"-loading ").concat(s,"-spin-nested-loading"),{minHeight:h}),a(d,"".concat(s,"-split").concat(s,"-something-after-last-item ").concat(y,"-spin-container > ").concat(s,"-items > ").concat(s,"-item:last-child"),{borderBlockEnd:"".concat(e.lineWidth,"px ").concat(e.lineType," ").concat(e.colorSplit)}),a(d,"".concat(s,"-lg ").concat(s,"-item"),{padding:w}),a(d,"".concat(s,"-sm ").concat(s,"-item"),{padding:b}),a(d,"".concat(s,":not(").concat(s,"-vertical)"),a({},"".concat(s,"-item-no-flex"),a({},"".concat(s,"-item-action"),{float:"right"}))),d};const ka=At("List",function(t){var e=Nt(t,{listBorderedCls:"".concat(t.componentCls,"-bordered"),minHeight:t.controlHeightLG,listItemPadding:"".concat(t.paddingSM,"px 0"),listItemPaddingSM:"".concat(t.paddingXS,"px ").concat(t.padding,"px"),listItemPaddingLG:"".concat(t.padding,"px ").concat(t.paddingLG,"px")});return[ja(e),za(e),Fa(e)]},{contentWidth:220});var $a=globalThis&&globalThis.__rest||function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,n=Object.getOwnPropertySymbols(t);c<n.length;c++)e.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(t,n[c])&&(o[n[c]]=t[n[c]]);return o},Ye=p.exports.createContext({});Ye.Consumer;function Fe(t){var e,o=t.pagination,n=o===void 0?!1:o,c=t.prefixCls,l=t.bordered,r=l===void 0?!1:l,d=t.split,s=d===void 0?!0:d,y=t.className,h=t.children,g=t.itemLayout,x=t.loadMore,f=t.grid,u=t.dataSource,L=u===void 0?[]:u,T=t.size,b=t.header,w=t.footer,_=t.loading,C=_===void 0?!1:_,m=t.rowKey,A=t.renderItem,I=t.locale,W=$a(t,["pagination","prefixCls","bordered","split","className","children","itemLayout","loadMore","grid","dataSource","size","header","footer","loading","rowKey","renderItem","locale"]),U=n&&Mt(n)==="object"?n:{},v=p.exports.useState(U.defaultCurrent||1),z=Se(v,2),ce=z[0],G=z[1],ge=p.exports.useState(U.defaultPageSize||10),se=Se(ge,2),fe=se[0],ne=se[1],oe=p.exports.useContext(Oe),J=oe.getPrefixCls,K=oe.renderEmpty,V=oe.direction,$={current:1,total:0},N={},O=function(M){return function(Y,Q){G(Y),ne(Q),n&&n[M]&&n[M](Y,Q)}},H=O("onChange"),de=O("onShowSizeChange"),X=function(M,Y){if(!A)return null;var Q;return typeof m=="function"?Q=m(M):m?Q=M[m]:Q=M.key,Q||(Q="list-item-".concat(Y)),N[Y]=Q,A(M,Y)},ue=function(){return!!(x||n||w)},xe=function(M,Y){return i("div",{className:"".concat(M,"-empty-text"),children:I&&I.emptyText||Y("List")})},F=J("list",c),Re=ka(F),Z=Se(Re,2),Ee=Z[0],be=Z[1],j=C;typeof j=="boolean"&&(j={spinning:j});var S=j&&j.spinning,P="";switch(T){case"large":P="lg";break;case"small":P="sm";break}var E=te(F,(e={},a(e,"".concat(F,"-vertical"),g==="vertical"),a(e,"".concat(F,"-").concat(P),P),a(e,"".concat(F,"-split"),s),a(e,"".concat(F,"-bordered"),r),a(e,"".concat(F,"-loading"),S),a(e,"".concat(F,"-grid"),!!f),a(e,"".concat(F,"-something-after-last-item"),ue()),a(e,"".concat(F,"-rtl"),V==="rtl"),e),y,be),k=Me(Me(Me({},$),{total:L.length,current:ce,pageSize:fe}),n||{}),me=Math.ceil(k.total/k.pageSize);k.current>me&&(k.current=me);var he=n?i("div",{className:"".concat(F,"-pagination"),children:i(Kt,{...k,onChange:H,onShowSizeChange:de})}):null,re=ze(L);n&&L.length>(k.current-1)*k.pageSize&&(re=ze(L).splice((k.current-1)*k.pageSize,k.pageSize));var Pe=Object.keys(f||{}).some(function(D){return["xs","sm","md","lg","xl","xxl"].includes(D)}),ve=Lt(Pe),ie=p.exports.useMemo(function(){for(var D=0;D<Ze.length;D+=1){var M=Ze[D];if(ve[M])return M}},[ve]),De=p.exports.useMemo(function(){if(!!f){var D=ie&&f[ie]?f[ie]:f.column;if(D)return{width:"".concat(100/D,"%"),maxWidth:"".concat(100/D,"%")}}},[f==null?void 0:f.column,ie]),ye=S&&i("div",{style:{minHeight:53}});if(re.length>0){var q=re.map(function(D,M){return X(D,M)}),Ce=p.exports.Children.map(q,function(D,M){return i("div",{style:De,children:D},N[M])});ye=f?i(_t,{gutter:f.gutter,children:Ce}):i("ul",{className:"".concat(F,"-items"),children:q})}else!h&&!S&&(ye=xe(F,K||zt));var le=k.position||"bottom",ee=p.exports.useMemo(function(){return{grid:f,itemLayout:g}},[JSON.stringify(f),g]);return Ee(i(Ye.Provider,{value:ee,children:R("div",{className:E,...W,children:[(le==="top"||le==="both")&&he,b&&i("div",{className:"".concat(F,"-header"),children:b}),R(je,{...j,children:[ye,h]}),w&&i("div",{className:"".concat(F,"-footer"),children:w}),x||(le==="bottom"||le==="both")&&he]})}))}Fe.Item=_a;var Oa=["title","subTitle","content","itemTitleRender","prefixCls","actions","item","recordKey","avatar","cardProps","description","isEditable","checkbox","index","selected","loading","expand","onExpand","expandable","rowSupportExpand","showActions","showExtra","type","style","className","record","onRow","onItem","itemHeaderRender","cardActionProps","extra"];function Ha(t){var e,o=t.prefixCls,n=t.expandIcon,c=n===void 0?i(kt,{}):n,l=t.onExpand,r=t.expanded,d=t.record,s=c,y="".concat(o,"-row-expand-icon"),h=function(x){l(!r),x.stopPropagation()};return typeof c=="function"&&(s=c({expanded:r,onExpand:l,record:d})),i("span",{className:te(y,(e={},a(e,"".concat(o,"-row-expanded"),r),a(e,"".concat(o,"-row-collapsed"),!r),e)),onClick:h,children:s})}function Ga(t){var e,o,n,c,l,r=t.prefixCls,d=p.exports.useContext(He.ConfigContext),s=d.getPrefixCls,y=it(),h=y.hashId,g=s("pro-list",r),x="".concat(g,"-row"),f=t.title,u=t.subTitle,L=t.content,T=t.itemTitleRender;t.prefixCls;var b=t.actions;t.item,t.recordKey;var w=t.avatar,_=t.cardProps,C=t.description,m=t.isEditable,A=t.checkbox,I=t.index,W=t.selected,U=t.loading,v=t.expand,z=t.onExpand,ce=t.expandable,G=t.rowSupportExpand,ge=t.showActions,se=t.showExtra,fe=t.type,ne=t.style,oe=t.className,J=oe===void 0?x:oe,K=t.record,V=t.onRow,$=t.onItem,N=t.itemHeaderRender,O=t.cardActionProps,H=t.extra,de=Ge(t,Oa),X=ce||{},ue=X.expandedRowRender,xe=X.expandIcon,F=X.expandRowByClick,Re=X.indentSize,Z=Re===void 0?8:Re,Ee=X.expandedRowClassName,be=Ft(!!v,{value:v,onChange:z}),j=Se(be,2),S=j[0],P=j[1],E=te((e={},a(e,"".concat(x,"-selected"),!_&&W),a(e,"".concat(x,"-show-action-hover"),ge==="hover"),a(e,"".concat(x,"-type-").concat(fe),!!fe),a(e,"".concat(x,"-editable"),m),a(e,"".concat(x,"-show-extra-hover"),se==="hover"),e),h,x),k=te(h,a({},"".concat(J,"-extra"),se==="hover")),me=S||Object.values(ce||{}).length===0,he=ue&&ue(K,I,Z,S),re=p.exports.useMemo(function(){if(!(!b||O==="actions"))return[i("div",{onClick:function(ee){return ee.stopPropagation()},children:b},"action")]},[b,O]),Pe=p.exports.useMemo(function(){if(!(!b||!O||O==="extra"))return[i("div",{onClick:function(ee){return ee.stopPropagation()},children:b},"action")]},[b,O]),ve=f||u?R("div",{className:"".concat(E,"-header-title ").concat(h),children:[f&&i("div",{className:"".concat(E,"-title ").concat(h),children:f}),u&&i("div",{className:"".concat(E,"-subTitle ").concat(h),children:u})]}):null,ie=(o=T&&(T==null?void 0:T(K,I,ve)))!==null&&o!==void 0?o:ve,De=ie||w||u||C?i(Fe.Item.Meta,{avatar:w,title:ie,description:C&&me&&i("div",{className:"".concat(E,"-description ").concat(h),children:C})}):null,ye=te(h,(n={},a(n,"".concat(E,"-item-has-checkbox"),A),a(n,"".concat(E,"-item-has-avatar"),w),a(n,E,E),n)),q=p.exports.useMemo(function(){return w||f?R(Ke,{children:[w&&i(jt,{size:22,src:w,className:"".concat(s("list-item-meta-avatar")," ").concat(h)}),i("span",{className:"".concat(s("list-item-meta-title")," ").concat(h),children:f})]}):null},[w,s,h,f]),Ce=_?i(pe,B(B(B({bordered:!0,loading:U,hoverable:!0},_),{},{title:q,subTitle:u,extra:re,actions:Pe,bodyStyle:B({padding:24},_.bodyStyle)},$==null?void 0:$(K,I)),{},{children:i(et,{avatar:!0,title:!1,loading:U,active:!0,children:R("div",{className:"".concat(E,"-header ").concat(h),children:[T&&(T==null?void 0:T(K,I,ve)),L]})})})):i(Fe.Item,B(B(B(B({className:te(ye,a({},J,J!==x))},de),{},{actions:re,extra:!!H&&i("div",{className:k,children:H})},V==null?void 0:V(K,I)),$==null?void 0:$(K,I)),{},{onClick:function(ee){var D,M,Y,Q;V==null||(D=V(K,I))===null||D===void 0||(M=D.onClick)===null||M===void 0||M.call(D,ee),$==null||(Y=$(K,I))===null||Y===void 0||(Q=Y.onClick)===null||Q===void 0||Q.call(Y,ee),F&&P(!S)},children:R(et,{avatar:!0,title:!1,loading:U,active:!0,children:[R("div",{className:"".concat(E,"-header ").concat(h),children:[R("div",{className:"".concat(E,"-header-option ").concat(h),children:[!!A&&i("div",{className:"".concat(E,"-checkbox ").concat(h),children:A}),Object.values(ce||{}).length>0&&G&&Ha({prefixCls:g,expandIcon:xe,onExpand:P,expanded:S,record:K})]}),(c=N&&(N==null?void 0:N(K,I,De)))!==null&&c!==void 0?c:De]}),me&&(L||he)&&R("div",{className:"".concat(E,"-content ").concat(h),children:[L,ue&&G&&i("div",{className:Ee&&Ee(K,I,Z),children:he})]})]})}));return _?i("div",{className:te(h,(l={},a(l,"".concat(E,"-card"),_),a(l,J,J!==x),l)),style:ne,children:Ce}):Ce}var Wa=["dataSource","columns","rowKey","showActions","showExtra","prefixCls","actionRef","itemTitleRender","renderItem","itemCardProps","itemHeaderRender","expandable","rowSelection","pagination","onRow","onItem","rowClassName"];function Va(t){var e=t.dataSource,o=t.columns,n=t.rowKey,c=t.showActions,l=t.showExtra,r=t.prefixCls,d=t.actionRef,s=t.itemTitleRender,y=t.renderItem,h=t.itemCardProps,g=t.itemHeaderRender,x=t.expandable,f=t.rowSelection,u=t.pagination,L=t.onRow,T=t.onItem,b=t.rowClassName,w=Ge(t,Wa),_=it(),C=_.hashId,m=p.exports.useContext(He.ConfigContext),A=m.getPrefixCls,I=Te.useMemo(function(){return typeof n=="function"?n:function(j,S){return j[n]||S}},[n]),W=$t(e,"children",I),U=Se(W,1),v=U[0],z=Ot(e.length,B({responsive:!0},u),function(){}),ce=Se(z,1),G=ce[0],ge=Te.useMemo(function(){if(u===!1||!G.pageSize||e.length<G.total)return e;var j=G.current,S=j===void 0?1:j,P=G.pageSize,E=P===void 0?10:P,k=e.slice((S-1)*E,S*E);return k},[e,G,u]),se=A("pro-list",r),fe=Ht(f,{getRowKey:I,getRecordByKey:v,prefixCls:se,data:e,pageData:ge,expandType:"row",childrenColumnName:"children",locale:{}}),ne=Se(fe,2),oe=ne[0],J=ne[1],K=x||{},V=K.expandedRowKeys,$=K.defaultExpandedRowKeys,N=K.defaultExpandAllRows,O=N===void 0?!0:N,H=K.onExpand,de=K.onExpandedRowsChange,X=K.rowExpandable,ue=Te.useState(function(){return $||(O!==!1?e.map(I):[])}),xe=Se(ue,2),F=xe[0],Re=xe[1],Z=Te.useMemo(function(){return new Set(V||F||[])},[V,F]),Ee=Te.useCallback(function(j){var S=I(j,e.indexOf(j)),P,E=Z.has(S);E?(Z.delete(S),P=ze(Z)):P=[].concat(ze(Z),[S]),Re(P),H&&H(!E,j),de&&de(P)},[I,Z,e,H,de]),be=oe([])[0];return i(Fe,B(B({},w),{},{className:te(A("pro-list-container",r),C,w.className),dataSource:ge,pagination:u&&G,renderItem:function(S,P){var E,k,me,he={className:typeof b=="function"?b(S,P):b};o==null||o.forEach(function(q){var Ce=q.listKey,le=q.cardActionProps;if(!!Gt.has(Ce)){var ee=q.dataIndex||Ce||q.key,D=Array.isArray(ee)?Wt(S,ee):S[ee];le==="actions"&&Ce==="actions"&&(he.cardActionProps=le);var M=q.render?q.render(D,S,P):D;M!=="-"&&(he[q.listKey]=M)}});var re;be&&be.render&&(re=be.render(S,S,P)||void 0);var Pe=((E=d.current)===null||E===void 0?void 0:E.isEditable(B(B({},S),{},{index:P})))||{},ve=Pe.isEditable,ie=Pe.recordKey,De=J.has(ie||P),ye=i(Ga,B(B({cardProps:w.grid?B(B(B({},h),w.grid),{},{checked:De,onChecked:Te.isValidElement(re)?(k=re)===null||k===void 0||(me=k.props)===null||me===void 0?void 0:me.onChange:void 0}):void 0},he),{},{recordKey:ie,isEditable:ve||!1,expandable:x,expand:Z.has(I(S,P)),onExpand:function(){Ee(S)},index:P,record:S,item:S,showActions:c,showExtra:l,itemTitleRender:s,itemHeaderRender:g,rowSupportExpand:!X||X&&X(S),selected:J.has(I(S,P)),checkbox:re,onRow:L,onItem:T}),ie);return y?y(S,P,ye):ye}}))}var Xa=function(e){var o,n,c,l,r,d;return a({},e.componentCls,(d={backgroundColor:"transparent"},a(d,"".concat(e.proComponentsCls,"-table-alert"),{marginBlockEnd:"16px"}),a(d,"&-row",(r={borderBlockEnd:"1px solid ".concat(e.colorSplit)},a(r,"".concat(e.antCls,"-list-item-meta-title"),{borderBlockEnd:"none",margin:0}),a(r,"&:last-child",a({borderBlockEnd:"none"},"".concat(e.antCls,"-list-item"),{borderBlockEnd:"none"})),a(r,"&:hover",(o={backgroundColor:"rgba(0, 0, 0, 0.02)",transition:"background-color 0.3s"},a(o,"".concat(e.antCls,"-list-item-action"),{display:"block"}),a(o,"".concat(e.antCls,"-list-item-extra"),{display:"flex"}),a(o,"".concat(e.componentCls,"-row-extra"),{display:"block"}),a(o,"".concat(e.componentCls,"-row-subheader-actions"),{display:"block"}),o)),a(r,"&-card",a({marginBlock:8,marginInline:0,paddingBlock:0,paddingInline:8,"&:hover":{backgroundColor:"transparent"}},"".concat(e.antCls,"-list-item-meta-title"),{flexShrink:9,marginBlock:0,marginInline:0,lineHeight:"22px"})),a(r,"&".concat(e.componentCls,"-row-editable"),a({},"".concat(e.componentCls,"-list-item"),{"&-meta":{"&-avatar,&-description,&-title":{paddingBlock:6,paddingInline:0}},"&-action":{display:"block"}})),a(r,"&".concat(e.componentCls,"-row-selected"),{backgroundColor:e.colorPrimaryBgHover,"&:hover":{backgroundColor:e.colorPrimaryBgHover}}),a(r,"&".concat(e.componentCls,"-row-type-new"),{animation:"techUiListActive 3s"}),a(r,"&".concat(e.componentCls,"-row-type-inline"),a({},"".concat(e.componentCls,"-row-title"),{fontWeight:"normal"})),a(r,"&".concat(e.componentCls,"-row-type-top"),{backgroundImage:"url('https://gw.alipayobjects.com/zos/antfincdn/DehQfMbOJb/icon.svg')",backgroundRepeat:"no-repeat",backgroundPosition:"left top",backgroundSize:"12px 12px"}),a(r,"&-show-action-hover",(n={},a(n,"".concat(e.antCls,`-list-item-action,
            `).concat(e.proComponentsCls,`-card-extra,
            `).concat(e.proComponentsCls,"-card-actions"),{display:"none"}),a(n,"&:hover",a({},"".concat(e.proComponentsCls,"-card-extra,").concat(e.proComponentsCls,"-card-actions"),{display:"flex"})),n)),a(r,"&-show-extra-hover",a({},"".concat(e.antCls,"-list-item-extra"),{display:"none"})),a(r,"&-extra",{display:"none"}),a(r,"&-subheader",{display:"flex",alignItems:"center",justifyContent:"space-between",height:"44px",paddingInline:24,paddingBlock:0,color:e.colorTextSecondary,lineHeight:"44px",background:"rgba(0, 0, 0, 0.02)","&-actions":{display:"none"},"&-actions *":{marginInlineEnd:8,"&:last-child":{marginInlineEnd:0}}}),a(r,"&-expand-icon",{marginInlineEnd:8,color:e.colorTextSecondary,"> .anticon > svg":{transition:"0.3s"}}),a(r,"&-expanded",{" > .anticon > svg":{transform:"rotate(90deg)"}}),a(r,"&-title",{marginInlineEnd:"16px",wordBreak:"break-all",cursor:"pointer","&:hover":{color:e.colorPrimary}}),a(r,"&-content",{position:"relative",display:"flex",flex:"1",flexDirection:"column",marginBlock:0,marginInline:32}),a(r,"&-subTitle",{color:"rgba(0, 0, 0, 0.45)"}),a(r,"&-description",{marginBlockStart:"4px",wordBreak:"break-all"}),a(r,"&-avatar",{display:"flex"}),a(r,"&-header",{display:"flex",flex:"1",justifyContent:"flex-start"}),a(r,"&-header-title",{display:"flex",alignItems:"center",justifyContent:"flex-start"}),a(r,"&-header-option",{display:"flex"}),a(r,"&-checkbox",{width:"16px",marginInlineEnd:"12px"}),a(r,"&-no-split",(c={},a(c,"".concat(e.componentCls,"-row"),{borderBlockEnd:"none"}),a(c,"".concat(e.antCls,"-list ").concat(e.antCls,"-list-item"),{borderBlockEnd:"none"}),c)),a(r,"&-bordered",a({},"".concat(e.componentCls,"-toolbar"),{borderBlockEnd:"1px solid ".concat(e.colorSplit)})),a(r,"".concat(e.antCls,"-list-vertical"),(l={},a(l,"".concat(e.componentCls,"-row"),{borderBlockEnd:"12px 18px 12px 24px"}),a(l,"&-header-title",{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center"}),a(l,"&-content",{marginBlock:0,marginInline:0}),a(l,"&-subTitle",{marginBlockStart:8}),a(l,"".concat(e.antCls,"-list-item-extra"),a({display:"flex",alignItems:"center",marginInlineStart:"32px"},"".concat(e.componentCls,"-row-description"),{marginBlockStart:16})),a(l,"".concat(e.antCls,"-list-bordered ").concat(e.antCls,"-list-item"),{paddingInline:0}),a(l,"".concat(e.componentCls,"-row-show-extra-hover"),a({},"".concat(e.antCls,"-list-item-extra "),{display:"none"})),l)),a(r,"".concat(e.antCls,"-list-pagination"),{marginBlockEnd:e.marginLG}),a(r,"".concat(e.antCls,"-list-list"),{"&-item":{cursor:"pointer",paddingBlock:12,paddingInline:12}}),a(r,"".concat(e.antCls,"-list-vertical .").concat(e.proComponentsCls,"-list-row ").concat(e.antCls,"-list"),a({"&-header":{paddingBlock:0,paddingInline:0,borderBlockEnd:"none"}},"".concat(e.antCls,"-list-item"),{width:"100%",paddingBlock:12,paddingInlineStart:24,paddingInlineEnd:18,"&-meta-avatar":{display:"flex",alignItems:"center",marginInlineEnd:8},"&-action-split":{display:"none"},"&-meta-title":{marginBlock:0,marginInline:0}})),a(r,"@keyframes techUiListActive",{"0%":{backgroundColor:"unset"},"30%":{background:"#fefbe6"},"100%":{backgroundColor:"unset"}}),r)),d))};function qa(t){return Vt("ProList",function(e){var o=B(B({},e),{},{componentCls:".".concat(t)});return[Xa(o)]})}var Ya=["metas","split","footer","rowKey","tooltip","className","options","search","expandable","showActions","showExtra","rowSelection","pagination","itemLayout","renderItem","grid","itemCardProps","onRow","onItem","rowClassName","locale","itemHeaderRender","itemTitleRender"];function Qa(t){var e=t.metas,o=t.split,n=t.footer,c=t.rowKey,l=t.tooltip,r=t.className,d=t.options,s=d===void 0?!1:d,y=t.search,h=y===void 0?!1:y,g=t.expandable,x=t.showActions,f=t.showExtra,u=t.rowSelection,L=u===void 0?!1:u,T=t.pagination,b=T===void 0?!1:T,w=t.itemLayout,_=t.renderItem,C=t.grid,m=t.itemCardProps,A=t.onRow,I=t.onItem,W=t.rowClassName,U=t.locale,v=t.itemHeaderRender,z=t.itemTitleRender,ce=Ge(t,Ya),G=p.exports.useRef();p.exports.useImperativeHandle(ce.actionRef,function(){return G.current});var ge=p.exports.useContext(He.ConfigContext),se=ge.getPrefixCls,fe=p.exports.useMemo(function(){var $=[];return Object.keys(e||{}).forEach(function(N){var O=e[N]||{},H=O.valueType;H||(N==="avatar"&&(H="avatar"),N==="actions"&&(H="option"),N==="description"&&(H="textarea")),$.push(B(B({listKey:N,dataIndex:(O==null?void 0:O.dataIndex)||N},O),{},{valueType:H}))}),$},[e]),ne=se("pro-list",t.prefixCls),oe=qa(ne),J=oe.wrapSSR,K=oe.hashId,V=te(ne,K,a({},"".concat(ne,"-no-split"),!o));return J(i(Xt,B(B({tooltip:l},ce),{},{actionRef:G,pagination:b,type:"list",rowSelection:L,search:h,options:s,className:te(ne,r,V),columns:fe,rowKey:c,tableViewRender:function(N){var O=N.columns,H=N.size,de=N.pagination,X=N.rowSelection,ue=N.dataSource,xe=N.loading;return i(Va,{grid:C,itemCardProps:m,itemTitleRender:z,prefixCls:t.prefixCls,columns:O,renderItem:_,actionRef:G,dataSource:ue||[],size:H,footer:n,split:o,rowKey:c,expandable:g,rowSelection:L===!1?void 0:X,showActions:x,showExtra:f,pagination:de,itemLayout:w,loading:xe,itemHeaderRender:v,onRow:A,onItem:I,rowClassName:W,locale:U})}})))}var St=globalThis&&globalThis.__values||function(t){var e=typeof Symbol=="function"&&Symbol.iterator,o=e&&t[e],n=0;if(o)return o.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")},Ua=globalThis&&globalThis.__read||function(t,e){var o=typeof Symbol=="function"&&t[Symbol.iterator];if(!o)return t;var n=o.call(t),c,l=[],r;try{for(;(e===void 0||e-- >0)&&!(c=n.next()).done;)l.push(c.value)}catch(d){r={error:d}}finally{try{c&&!c.done&&(o=n.return)&&o.call(n)}finally{if(r)throw r.error}}return l},_e=new Set,we,ot={xs:0,sm:576,md:768,lg:992,xl:1200};function rt(){var t,e,o=we;if(bt(),o!==we)try{for(var n=St(_e),c=n.next();!c.done;c=n.next()){var l=c.value;l()}}catch(r){t={error:r}}finally{try{c&&!c.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}}var $e=!1;function bt(){var t,e,o=window.innerWidth,n={},c=!1;try{for(var l=St(Object.keys(ot)),r=l.next();!r.done;r=l.next()){var d=r.value;n[d]=o>=ot[d],n[d]!==we[d]&&(c=!0)}}catch(s){t={error:s}}finally{try{r&&!r.done&&(e=l.return)&&e.call(l)}finally{if(t)throw t.error}}c&&(we=n)}function Ja(){nt&&!$e&&(we={},bt(),window.addEventListener("resize",rt),$e=!0);var t=Ua(p.exports.useState(we),2),e=t[0],o=t[1];return p.exports.useEffect(function(){if(!!nt){var n=function(){o(we)};return _e.add(n),function(){_e.delete(n),_e.size===0&&(window.removeEventListener("resize",rt),$e=!1)}}},[]),e}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};const Qe=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/role/model/index.ts/atomRoleListActions",ct(void 0));Qe.debugLabel="atomRoleListActions";const Ue=()=>We(Qe),Za=()=>sa(Qe),ke=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/role/model/index.ts/atomRoleDetails",va({open:!1,roleId:0,roleName:""}));ke.debugLabel="atomRoleDetails";const en=()=>ya(ke),tn=()=>{const t=lt(ke);return(e,o)=>{t({open:!0,roleId:e,roleName:o})}},Be=()=>We(ke),Je=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/role/model/index.ts/atomSearchParams",ct({}));Je.debugLabel="atomSearchParams";const an=()=>We(Je),nn=()=>lt(Je),wt="sysRole",It=[wt,"details"],Rt=t=>{const{roleId:e}=Be(),o=vt(It,()=>ua({roleId:e}),{onSuccess:t,enabled:!1});return p.exports.useEffect(()=>{e>0&&o.refetch()},[e]),o},Et=[wt,"tree"],on=t=>{const{roleId:e}=Be(),o=vt(Et,async()=>{const{menus:n,checkedKeys:c}=await da({roleId:e});return{treeData:n,selectedMenuIds:c,selectedTreeData:st(n,c),allMenuIds:dt(n),allExpandedKeys:ut(n)}},{onSuccess:n=>{t(n.selectedTreeData)},enabled:!1});return p.exports.useEffect(()=>{e>0&&o.refetch()},[e]),o},Pt=t=>{const e=qt();return Xe(async o=>{const n=e.getQueryData(It),c=e.getQueryData(Et);await ma({roleId:n.roleId,roleKey:n.roleKey,roleName:n.roleName,roleSort:n.roleSort,status:n.status,menuIds:c.selectedMenuIds,menuCheckStrictly:!1,deptCheckStrictly:!1,...o})},{onSuccess:()=>{t(),Le.success("\u4FDD\u5B58\u6210\u529F")}})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};const rn=()=>{const{canEditSysRole:t}=Ie(),e=Yt(),{roleId:o}=Be();return i(Ne,{accessible:t,children:i(ae,{type:"primary",ghost:!0,onClick:()=>e(`/system/role-auth/${o}`),icon:i(Qt,{}),children:"\u5206\u914D\u7528\u6237"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};const cn=()=>{const{canAddSysRole:t}=Ie(),e=p.exports.useRef(),o=Ue(),[,n]=qe();return i(Ne,{accessible:t,children:i(Ut,{title:"\u65B0\u589E\u89D2\u8272",trigger:i(ae,{type:"primary",icon:i(Jt,{}),children:"\u65B0\u589E"}),formRef:e,onFinish:async c=>{var l;return await ha({...c,menuIds:[],menuCheckStrictly:!1,deptCheckStrictly:!1}),o==null||o.reload(),Le.success("\u65B0\u589E\u6210\u529F"),(l=e.current)==null||l.resetFields(),!0},width:500,layoutType:"ModalForm",columns:[Ca,Sa,{valueType:"group",columns:[n,ba]},wa]})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};const ln=()=>{const{canRemoveSysRole:t}=Ie(),e=Ue(),o=en(),{roleId:n,roleName:c}=Be();return i(Ne,{accessible:t,children:i(ae,{danger:!0,ghost:!0,icon:i(Zt,{}),onClick:()=>ea.confirm({title:"\u5220\u9664\u89D2\u8272",content:R(Ke,{children:["\u786E\u5B9A",i(tt.Text,{code:!0,children:"\u5220\u9664"}),"\u89D2\u8272",i(tt.Text,{code:!0,children:c}),"\u5417\uFF1F"]}),onOk:async()=>{var r;await pa({roleIds:n}),e==null||e.reload(),(r=e==null?void 0:e.clearSelected)==null||r.call(e),o(),Le.success("\u5220\u9664\u6210\u529F")}}),children:"\u5220\u9664"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};const sn=()=>{const{canExportSysRole:t}=Ie(),e=an(),{isLoading:o,mutate:n}=Xe(()=>ga(e),{onSuccess:()=>{Le.success("\u5BFC\u51FA\u6210\u529F")}});return i(Ne,{accessible:t,children:i(ae,{ghost:!0,type:"primary",icon:i(ta,{}),loading:o,onClick:()=>n(),children:"\u5BFC\u51FA\u5F53\u524D\u5217\u8868"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};const dn=()=>{const[t,e]=p.exports.useState([]),[o]=aa.useForm(),n=Ie(),[,,c]=qe(),l=Ue(),{data:r,isFetching:d,refetch:s}=Rt(()=>{e([]),o.resetFields()}),{mutateAsync:y}=Pt(()=>{s(),l==null||l.reload()}),h=n.canEditSysRole&&r?{form:o,editableKeys:t,onChange:(g,x)=>{e(g);const f=g[0];o.setFieldsValue({[f]:x[f]})},onSave:async(g,x)=>{await y({[g]:x[g]})}}:void 0;return R(je,{spinning:d,children:[i(at,{column:2,columns:[Ia,Ra],dataSource:r}),i(na,{}),i(at,{column:2,columns:[c,Ea,Pa,Da,Ta],dataSource:r,editable:h})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};const un=()=>{const t=Za(),e=tn(),o=nn(),[n]=qe();return i(Qa,{ghost:!0,rowKey:"roleId",actionRef:t,metas:{title:Aa,subTitle:n,description:Na},tableAlertRender:!1,rowSelection:{type:"radio",onSelect:({roleId:c,roleName:l})=>{e(c,l)}},search:{filterType:"light"},options:{setting:!1,fullScreen:!1,density:!1,reload:!0},pagination:{defaultPageSize:10,defaultCurrent:1,showSizeChanger:!0},request:async(...c)=>{const l=oa(...c);return o(l),await fa(l)}})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};const mn=()=>{const[t,e]=p.exports.useState([]),[o,n]=p.exports.useState(!1),[c,l]=p.exports.useState([]),[r,d]=p.exports.useState([]),[s,y]=p.exports.useState(!1),[h,g]=p.exports.useState(!0),[x,f]=p.exports.useState(),u=p.exports.useRef(),{canEditSysRole:L}=Ie(),{open:T,roleId:b}=Be(),{refetch:w}=Rt(({dataScope:v})=>{var z;f(v),(z=u.current)==null||z.setFieldsValue({dataScope:v})}),{loading:_,refresh:C,data:m}=Ma(async()=>{const{depts:v,checkedKeys:z}=await Ba({roleId:b});return{treeData:v,selectedMenuIds:z,selectedTreeData:st(v,z),allMenuIds:dt(v),allExpandedKeys:ut(v)}},{ready:T,refreshDeps:[b],onSuccess:v=>{n(!1),d(v.selectedTreeData)}}),{isLoading:A,mutate:I}=Xe(async()=>{await xa({roleId:b,dataScope:x,deptIds:t})},{onSuccess:()=>{C(),w(),Le.success("\u4FDD\u5B58\u6210\u529F")}}),W=c.length===(m==null?void 0:m.allExpandedKeys.length),U=v=>{var z;if(v||h){e((z=m==null?void 0:m.allMenuIds)!=null?z:[]);return}e([])};return p.exports.useEffect(()=>{if((m==null?void 0:m.allMenuIds.length)===t.length){y(!0),g(!1);return}if(t.length===0){y(!1),g(!1);return}g(!0)},[m==null?void 0:m.allMenuIds,t]),R(Ke,{children:[R("header",{className:"flex justify-between items-start flex-wrap",children:[i(ra,{formRef:u,submitter:!1,layout:"horizontal",children:i(ia,{name:"dataScope",label:"\u6570\u636E\u6743\u9650\u8303\u56F4",fieldProps:{options:ca,onChange:v=>{console.log(v),f(v)}},readonly:!o})}),i(Ne,{accessible:L,children:o?R(Ae,{children:[i(ae,{loading:A,onClick:()=>{var v;n(!1),d((v=m==null?void 0:m.selectedTreeData)!=null?v:[])},children:"\u53D6\u6D88\u7F16\u8F91"}),i(ae,{type:"primary",ghost:!0,icon:i(mt,{}),loading:A,onClick:()=>I(),children:"\u4FDD\u5B58"})]}):i(ae,{type:"primary",ghost:!0,icon:i(ht,{}),onClick:()=>{var v,z;n(!0),e((v=m==null?void 0:m.selectedMenuIds)!=null?v:[]),d((z=m==null?void 0:m.treeData)!=null?z:[])},children:"\u7F16\u8F91\u6570\u636E\u6743\u9650"})})]}),x==="2"&&R(Ke,{children:[R(Ae,{wrap:!0,className:"mb-2",children:[r.length>0&&i(ae,{size:"small",icon:W?i(pt,{}):i(gt,{}),onClick:()=>l(W?[]:m.allExpandedKeys),children:W?"\u5168\u90E8\u6298\u53E0":"\u5168\u90E8\u5C55\u5F00"}),o&&i(ft,{indeterminate:h,onChange:v=>U(v.target.checked),checked:s,children:"\u5168\u9009/\u5168\u4E0D\u9009"})]}),i(je,{spinning:_,children:r.length>0?i(xt,{blockNode:!0,showLine:{showLeafIcon:!1},checkable:o,checkStrictly:!0,fieldNames:{title:"label",key:"id"},checkedKeys:t,treeData:r,expandedKeys:c,onExpand:v=>l(v),onCheck:v=>{e(v.checked)}}):i(Ve,{description:"\u6682\u672A\u5206\u914D\u6570\u636E\u6743\u9650"})})]})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};const hn=()=>{const[t,e]=p.exports.useState([]),[o,n]=p.exports.useState(!1),[c,l]=p.exports.useState([]),[r,d]=p.exports.useState([]),[s,y]=p.exports.useState(!1),[h,g]=p.exports.useState(!0),{canEditSysRole:x}=Ie(),{isFetching:f,data:u,refetch:L}=on(C=>{n(!1),d(C)}),{isLoading:T,mutate:b}=Pt(()=>{L()}),w=c.length===(u==null?void 0:u.allExpandedKeys.length),_=C=>{var m;if(C||h){e((m=u==null?void 0:u.allMenuIds)!=null?m:[]);return}e([])};return p.exports.useEffect(()=>{if((u==null?void 0:u.allMenuIds.length)===t.length){y(!0),g(!1);return}if(t.length===0){y(!1),g(!1);return}g(!0)},[u==null?void 0:u.allMenuIds,t]),R(Ke,{children:[R("header",{className:"flex justify-between mb-2",children:[i(Ae,{wrap:!0,children:r.length>0&&i(ae,{size:"small",icon:w?i(pt,{}):i(gt,{}),onClick:()=>l(w?[]:u.allExpandedKeys),children:w?"\u5168\u90E8\u6298\u53E0":"\u5168\u90E8\u5C55\u5F00"})}),i(Ne,{accessible:x,children:o?R(Ae,{wrap:!0,children:[i(ae,{loading:T,onClick:()=>{var C;n(!1),d((C=u==null?void 0:u.selectedTreeData)!=null?C:[])},children:"\u53D6\u6D88\u7F16\u8F91"}),i(ae,{type:"primary",ghost:!0,icon:i(mt,{}),loading:T,onClick:()=>b({menuIds:t}),children:"\u4FDD\u5B58"})]}):i(ae,{type:"primary",ghost:!0,icon:i(ht,{}),onClick:()=>{var C,m;n(!0),e((C=u==null?void 0:u.selectedMenuIds)!=null?C:[]),d((m=u==null?void 0:u.treeData)!=null?m:[])},children:"\u7F16\u8F91\u83DC\u5355\u6743\u9650"})})]}),R(je,{spinning:f,children:[i("div",{className:"pl-1 mb-2",children:o&&i(ft,{indeterminate:h,onChange:C=>_(C.target.checked),checked:s,children:"\u5168\u9009/\u5168\u4E0D\u9009"})}),r.length>0?i(xt,{blockNode:!0,showLine:{showLeafIcon:!1},checkable:o,checkStrictly:!0,fieldNames:{title:"label",key:"id"},checkedKeys:t,treeData:r,expandedKeys:c,onExpand:C=>l(C),onCheck:C=>{e(C.checked)}}):i(Ve,{description:"\u6682\u672A\u5206\u914D\u83DC\u5355\u6743\u9650"})]})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,e){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,e),e)}};const Rn=()=>{const{md:t,xl:e}=Ja(),{open:o}=Be();return i(la,{children:R(pe,{ghost:!0,gutter:[16,16],wrap:!t,children:[i(pe,{title:"\u89D2\u8272\u5217\u8868",colSpan:"450px",extra:R(Ae,{children:[i(sn,{}),i(cn,{})]}),children:i(un,{})}),o?R(pe,{split:"horizontal",title:"\u89D2\u8272\u8BE6\u60C5",extra:R(Ae,{children:[i(ln,{}),i(rn,{})]}),children:[i(pe,{children:i(dn,{})}),R(pe,{split:e?"vertical":"horizontal",children:[i(pe,{children:i(hn,{})}),i(pe,{children:i(mn,{})})]})]}):i(pe,{title:"\u89D2\u8272\u8BE6\u60C5",className:"h-full",children:i(Ve,{description:"\u70B9\u51FB\u9009\u62E9\u5DE6\u4FA7\u89D2\u8272\u67E5\u770B\u8BE6\u60C5"})})]})})};export{Rn as default};
