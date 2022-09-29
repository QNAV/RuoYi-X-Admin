import{r as x,M as Ae,X as Y,j as T,a as n,Y as a,a4 as dt,a_ as ut,K as mt,as as ye,O as Te,bt as pt,_ as Ne,bu as ft,bv as je,aZ as ht,be as Ue,bw as xt,a8 as Be,bx as Qe,a7 as _e,by as vt,F as Ke,at as gt,a6 as E,aO as He,b3 as Pe,bz as Ct,ay as Se,bA as yt,bB as bt,bC as wt,bD as St,bE as Et,a5 as Rt,aY as It,R as Xe,i as Ze,b7 as Pt,n as Nt,aG as Re,bF as kt,av as Ee,b8 as Dt,aE as Fe,aI as Ve,ba as Tt,bb as At,b9 as Bt,bc as Ge,au as qe,bf as _t,bg as Kt,bG as Ft,bj as Mt,bd as Ot,b2 as We,aD as Ye,bk as Je}from"./index.9ab0876b.js";import{B as zt}from"./index.20e76e68.js";import{A as Me}from"./index.036b3c89.js";import{P as $t}from"./index.1c0f5c5b.js";import{P as Lt}from"./index.da76da5a.js";import{E as jt,a as et,u as tt}from"./useMutation.esm.f654451f.js";import{a as Oe}from"./keepAlive.e84d3901.js";import{u as Ht,c as Vt}from"./useInitActionType.ce519f8e.js";import{b as Gt,C as qt,c as Wt}from"./common.061d994b.js";import{E as at}from"./index.3a578f96.js";import{e as Yt}from"./SysMenuService.6ce02f18.js";import{f as Jt,g as Ut}from"./tree.c5bc5173.js";import{u as nt}from"./useRequest.0a696058.js";import{u as Qt}from"./useRowClick.62b8e7c7.js";import"./utils.esm.0b591295.js";var ot=globalThis&&globalThis.__rest||function(e,t){var l={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(l[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(l[o[i]]=e[o[i]]);return l},Xt=function(t){var l=t.prefixCls,o=t.className,i=t.avatar,s=t.title,r=t.description,f=ot(t,["prefixCls","className","avatar","title","description"]),R=x.exports.useContext(Ae),D=R.getPrefixCls,d=D("list",l),N=Y("".concat(d,"-item-meta"),o),u=T("div",{className:"".concat(d,"-item-meta-content"),children:[s&&n("h4",{className:"".concat(d,"-item-meta-title"),children:s}),r&&n("div",{className:"".concat(d,"-item-meta-description"),children:r})]});return T("div",{...f,className:N,children:[i&&n("div",{className:"".concat(d,"-item-meta-avatar"),children:i}),(s||r)&&u]})},Zt=function(t,l){var o=t.prefixCls,i=t.children,s=t.actions,r=t.extra,f=t.className,R=t.colStyle,D=ot(t,["prefixCls","children","actions","extra","className","colStyle"]),d=x.exports.useContext(ze),N=d.grid,u=d.itemLayout,m=x.exports.useContext(Ae),c=m.getPrefixCls,O=function(){var p;return x.exports.Children.forEach(i,function(h){typeof h=="string"&&(p=!0)}),p&&x.exports.Children.count(i)>1},A=function(){return u==="vertical"?!!r:!O()},b=c("list",o),y=s&&s.length>0&&n("ul",{className:"".concat(b,"-item-action"),children:s.map(function(z,p){return T("li",{children:[z,p!==s.length-1&&n("em",{className:"".concat(b,"-item-action-split")})]},"".concat(b,"-item-action-").concat(p))})},"actions"),_=N?"div":"li",j=n(_,{...D,...N?{}:{ref:l},className:Y("".concat(b,"-item"),a({},"".concat(b,"-item-no-flex"),!A()),f),children:u==="vertical"&&r?[T("div",{className:"".concat(b,"-item-main"),children:[i,y]},"content"),n("div",{className:"".concat(b,"-item-extra"),children:r},"extra")]:[i,y,dt(r,{key:"extra"})]});return N?n(ut,{ref:l,flex:1,style:R,children:j}):j},rt=x.exports.forwardRef(Zt);rt.Meta=Xt;const ea=rt;var ta=globalThis&&globalThis.__rest||function(e,t){var l={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(l[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(l[o[i]]=e[o[i]]);return l},ze=x.exports.createContext({});ze.Consumer;function ke(e){var t,l=e.pagination,o=l===void 0?!1:l,i=e.prefixCls,s=e.bordered,r=s===void 0?!1:s,f=e.split,R=f===void 0?!0:f,D=e.className,d=e.children,N=e.itemLayout,u=e.loadMore,m=e.grid,c=e.dataSource,O=c===void 0?[]:c,A=e.size,b=e.header,y=e.footer,_=e.loading,j=_===void 0?!1:_,z=e.rowKey,p=e.renderItem,h=e.locale,ve=ta(e,["pagination","prefixCls","bordered","split","className","children","itemLayout","loadMore","grid","dataSource","size","header","footer","loading","rowKey","renderItem","locale"]),Z=o&&mt(o)==="object"?o:{},ce=x.exports.useState(Z.defaultCurrent||1),de=ye(ce,2),ee=de[0],L=de[1],ue=x.exports.useState(Z.defaultPageSize||10),te=ye(ue,2),me=te[0],J=te[1],U=x.exports.useContext(Ae),W=U.getPrefixCls,k=U.renderEmpty,V=U.direction,F={current:1,total:0},w={},M=function(P){return function(H,B){L(H),J(B),o&&o[P]&&o[P](H,B)}},$=M("onChange"),ae=M("onShowSizeChange"),G=function(P,H){if(!p)return null;var B;return typeof z=="function"?B=z(P):z?B=P[z]:B=P.key,B||(B="list-item-".concat(H)),w[H]=B,p(P,H)},ne=function(){return!!(u||o||y)},pe=function(P,H){return n("div",{className:"".concat(P,"-empty-text"),children:h&&h.emptyText||H("List")})},K=W("list",i),Q=j;typeof Q=="boolean"&&(Q={spinning:Q});var q=Q&&Q.spinning,oe="";switch(A){case"large":oe="lg";break;case"small":oe="sm";break}var ge=Y(K,(t={},a(t,"".concat(K,"-vertical"),N==="vertical"),a(t,"".concat(K,"-").concat(oe),oe),a(t,"".concat(K,"-split"),R),a(t,"".concat(K,"-bordered"),r),a(t,"".concat(K,"-loading"),q),a(t,"".concat(K,"-grid"),!!m),a(t,"".concat(K,"-something-after-last-item"),ne()),a(t,"".concat(K,"-rtl"),V==="rtl"),t),D),S=Te(Te(Te({},F),{total:O.length,current:ee,pageSize:me}),o||{}),v=Math.ceil(S.total/S.pageSize);S.current>v&&(S.current=v);var I=o?n("div",{className:"".concat(K,"-pagination"),children:n(pt,{...S,onChange:$,onShowSizeChange:ae})}):null,g=Ne(O);o&&O.length>(S.current-1)*S.pageSize&&(g=Ne(O).splice((S.current-1)*S.pageSize,S.pageSize));var re=Object.keys(m||{}).some(function(C){return["xs","sm","md","lg","xl","xxl"].includes(C)}),ie=ft(re),X=x.exports.useMemo(function(){for(var C=0;C<je.length;C+=1){var P=je[C];if(ie[P])return P}},[ie]),le=x.exports.useMemo(function(){if(!!m){var C=X&&m[X]?m[X]:m.column;if(C)return{width:"".concat(100/C,"%"),maxWidth:"".concat(100/C,"%")}}},[m==null?void 0:m.column,X]),fe=q&&n("div",{style:{minHeight:53}});if(g.length>0){var he=g.map(function(C,P){return G(C,P)}),xe=x.exports.Children.map(he,function(C,P){return n("div",{style:le,children:C},w[P])});fe=m?n(ht,{gutter:m.gutter,children:xe}):n("ul",{className:"".concat(K,"-items"),children:he})}else!d&&!q&&(fe=pe(K,k||xt));var se=S.position||"bottom",be=x.exports.useMemo(function(){return{grid:m,itemLayout:N}},[JSON.stringify(m),N]);return n(ze.Provider,{value:be,children:T("div",{className:ge,...ve,children:[(se==="top"||se==="both")&&I,b&&n("div",{className:"".concat(K,"-header"),children:b}),T(Ue,{...Q,children:[fe,d]}),y&&n("div",{className:"".concat(K,"-footer"),children:y}),u||(se==="bottom"||se==="both")&&I]})})}ke.Item=ea;var aa=["title","subTitle","content","itemTitleRender","prefixCls","actions","item","recordKey","avatar","cardProps","description","isEditable","checkbox","index","selected","loading","expand","onExpand","expandable","rowSupportExpand","showActions","showExtra","type","style","className","record","onRow","onItem","itemHeaderRender","cardActionProps","extra"];function na(e){var t,l=e.prefixCls,o=e.expandIcon,i=o===void 0?n(Ct,{}):o,s=e.onExpand,r=e.expanded,f=e.record,R=i,D="".concat(l,"-row-expand-icon"),d=function(u){s(!r),u.stopPropagation()};return typeof i=="function"&&(R=i({expanded:r,onExpand:s,record:f})),n("span",{className:Y(D,(t={},a(t,"".concat(l,"-row-expanded"),r),a(t,"".concat(l,"-row-collapsed"),!r),t)),onClick:d,children:R})}function oa(e){var t,l,o,i,s,r=e.prefixCls,f=x.exports.useContext(Be.ConfigContext),R=f.getPrefixCls,D=Qe(),d=D.hashId,N=R("pro-list",r),u="".concat(N,"-row"),m=e.title,c=e.subTitle,O=e.content,A=e.itemTitleRender;e.prefixCls;var b=e.actions;e.item,e.recordKey;var y=e.avatar,_=e.cardProps,j=e.description,z=e.isEditable,p=e.checkbox,h=e.index,ve=e.selected,Z=e.loading,ce=e.expand,de=e.onExpand,ee=e.expandable,L=e.rowSupportExpand,ue=e.showActions,te=e.showExtra,me=e.type,J=e.style,U=e.className,W=U===void 0?u:U,k=e.record,V=e.onRow,F=e.onItem,w=e.itemHeaderRender,M=e.cardActionProps,$=e.extra,ae=_e(e,aa),G=ee||{},ne=G.expandedRowRender,pe=G.expandIcon,K=G.expandRowByClick,Q=G.indentSize,q=Q===void 0?8:Q,oe=G.expandedRowClassName,ge=vt(!!ce,{value:ce,onChange:de}),S=ye(ge,2),v=S[0],I=S[1],g=Y((t={},a(t,"".concat(u,"-selected"),!_&&ve),a(t,"".concat(u,"-show-action-hover"),ue==="hover"),a(t,"".concat(u,"-type-").concat(me),!!me),a(t,"".concat(u,"-editable"),z),a(t,"".concat(u,"-show-extra-hover"),te==="hover"),t),d,u),re=Y(d,a({},"".concat(W,"-extra"),te==="hover")),ie=v||Object.values(ee||{}).length===0,X=ne&&ne(k,h,q,v),le=x.exports.useMemo(function(){if(!(!b||M==="actions"))return[n("div",{onClick:function(B){return B.stopPropagation()},children:b},"action")]},[b,M]),fe=x.exports.useMemo(function(){if(!(!b||!M||M==="extra"))return[n("div",{onClick:function(B){return B.stopPropagation()},children:b},"action")]},[b,M]),he=m||c?T("div",{className:"".concat(g,"-header-title ").concat(d),children:[m&&n("div",{className:"".concat(g,"-title ").concat(d),children:m}),c&&n("div",{className:"".concat(g,"-subTitle ").concat(d),children:c})]}):null,xe=(l=A&&(A==null?void 0:A(k,h,he)))!==null&&l!==void 0?l:he,se=xe||y||c||j?n(ke.Item.Meta,{avatar:y,title:xe,description:j&&ie&&n("div",{className:"".concat(g,"-description ").concat(d),children:j})}):null,be=Y(d,(o={},a(o,"".concat(g,"-item-has-checkbox"),p),a(o,"".concat(g,"-item-has-avatar"),y),a(o,g,g),o)),C=x.exports.useMemo(function(){return y||m?T(Ke,{children:[y&&n(gt,{size:22,src:y,className:"".concat(R("list-item-meta-avatar")," ").concat(d)}),n("span",{className:"".concat(R("list-item-meta-title")," ").concat(d),children:m})]}):null},[y,R,d,m]),P=_?n(Pe,E(E(E({bordered:!0,loading:Z,hoverable:!0},_),{},{title:C,subTitle:c,extra:le,actions:fe,bodyStyle:E({padding:24},_.bodyStyle)},F==null?void 0:F(k,h)),{},{children:n(He,{avatar:!0,title:!1,loading:Z,active:!0,children:T("div",{className:"".concat(g,"-header ").concat(d),children:[A&&(A==null?void 0:A(k,h,he)),O]})})})):n(ke.Item,E(E(E(E({className:Y(be,a({},W,W!==u))},ae),{},{actions:le,extra:!!$&&n("div",{className:re,children:$})},V==null?void 0:V(k,h)),F==null?void 0:F(k,h)),{},{onClick:function(B){var Ce,we,Ie,De;V==null||(Ce=V(k,h))===null||Ce===void 0||(we=Ce.onClick)===null||we===void 0||we.call(Ce,B),F==null||(Ie=F(k,h))===null||Ie===void 0||(De=Ie.onClick)===null||De===void 0||De.call(Ie,B),K&&I(!v)},children:T(He,{avatar:!0,title:!1,loading:Z,active:!0,children:[T("div",{className:"".concat(g,"-header ").concat(d),children:[T("div",{className:"".concat(g,"-header-option ").concat(d),children:[!!p&&n("div",{className:"".concat(g,"-checkbox ").concat(d),children:p}),Object.values(ee||{}).length>0&&L&&na({prefixCls:N,expandIcon:pe,onExpand:I,expanded:v,record:k})]}),(i=w&&(w==null?void 0:w(k,h,se)))!==null&&i!==void 0?i:se]}),ie&&(O||X)&&T("div",{className:"".concat(g,"-content ").concat(d),children:[O,ne&&L&&n("div",{className:oe&&oe(k,h,q),children:X})]})]})}));return _?n("div",{className:Y(d,(s={},a(s,"".concat(g,"-card"),_),a(s,W,W!==u),s)),style:J,children:P}):P}var ra=["dataSource","columns","rowKey","showActions","showExtra","prefixCls","actionRef","itemTitleRender","renderItem","itemCardProps","itemHeaderRender","expandable","rowSelection","pagination","onRow","onItem","rowClassName"];function ia(e){var t=e.dataSource,l=e.columns,o=e.rowKey,i=e.showActions,s=e.showExtra,r=e.prefixCls,f=e.actionRef,R=e.itemTitleRender,D=e.renderItem,d=e.itemCardProps,N=e.itemHeaderRender,u=e.expandable,m=e.rowSelection,c=e.pagination,O=e.onRow,A=e.onItem,b=e.rowClassName,y=_e(e,ra),_=Qe(),j=_.hashId,z=x.exports.useContext(Be.ConfigContext),p=z.getPrefixCls,h=Se.useMemo(function(){return typeof o=="function"?o:function(S,v){return S[o]||v}},[o]),ve=yt(t,"children",h),Z=ye(ve,1),ce=Z[0],de=bt(t.length,E({responsive:!0},c),function(){}),ee=ye(de,1),L=ee[0],ue=Se.useMemo(function(){if(c===!1||!L.pageSize||t.length<L.total)return t;var S=L.current,v=S===void 0?1:S,I=L.pageSize,g=I===void 0?10:I,re=t.slice((v-1)*g,v*g);return re},[t,L,c]),te=p("pro-list",r),me=wt(m,{getRowKey:h,getRecordByKey:ce,prefixCls:te,data:t,pageData:ue,expandType:"row",childrenColumnName:"children",locale:{}}),J=ye(me,2),U=J[0],W=J[1],k=u||{},V=k.expandedRowKeys,F=k.defaultExpandedRowKeys,w=k.defaultExpandAllRows,M=w===void 0?!0:w,$=k.onExpand,ae=k.onExpandedRowsChange,G=k.rowExpandable,ne=Se.useState(function(){return F||(M!==!1?t.map(h):[])}),pe=ye(ne,2),K=pe[0],Q=pe[1],q=Se.useMemo(function(){return new Set(V||K||[])},[V,K]),oe=Se.useCallback(function(S){var v=h(S,t.indexOf(S)),I,g=q.has(v);g?(q.delete(v),I=Ne(q)):I=[].concat(Ne(q),[v]),Q(I),$&&$(!g,S),ae&&ae(I)},[h,q,t,$,ae]),ge=U([])[0];return n(ke,E(E({},y),{},{className:Y(p("pro-list-container",r),j,y.className),dataSource:ue,pagination:c&&L,renderItem:function(v,I){var g,re,ie,X={className:typeof b=="function"?b(v,I):b};l==null||l.forEach(function(C){var P=C.listKey,H=C.cardActionProps;if(!!St.has(P)){var B=C.dataIndex||P||C.key,Ce=Array.isArray(B)?Et(v,B):v[B];H==="actions"&&P==="actions"&&(X.cardActionProps=H);var we=C.render?C.render(Ce,v,I):Ce;we!=="-"&&(X[C.listKey]=we)}});var le;ge&&ge.render&&(le=ge.render(v,v,I)||void 0);var fe=((g=f.current)===null||g===void 0?void 0:g.isEditable(E(E({},v),{},{index:I})))||{},he=fe.isEditable,xe=fe.recordKey,se=W.has(xe||I),be=n(oa,E(E({cardProps:y.grid?E(E(E({},d),y.grid),{},{checked:se,onChecked:Se.isValidElement(le)?(re=le)===null||re===void 0||(ie=re.props)===null||ie===void 0?void 0:ie.onChange:void 0}):void 0},X),{},{recordKey:xe,isEditable:he||!1,expandable:u,expand:q.has(h(v,I)),onExpand:function(){oe(v)},index:I,record:v,item:v,showActions:i,showExtra:s,itemTitleRender:R,itemHeaderRender:N,rowSupportExpand:!G||G&&G(v),selected:W.has(h(v,I)),checkbox:le,onRow:O,onItem:A}),xe);return D?D(v,I,be):be}}))}var la=function(t){var l,o,i,s,r,f;return a({},t.componentCls,(f={backgroundColor:"transparent"},a(f,"".concat(t.proComponentsCls,"-table-alert"),{marginBlockEnd:"16px"}),a(f,"&-row",(r={borderBlockEnd:"1px solid ".concat(t.colorSplit)},a(r,"".concat(t.antCls,"-list-item-meta-title"),{borderBlockEnd:"none",margin:0}),a(r,"&:last-child",a({borderBlockEnd:"none"},"".concat(t.antCls,"-list-item"),{borderBlockEnd:"none"})),a(r,"&:hover",(l={backgroundColor:"rgba(0, 0, 0, 0.02)",transition:"background-color 0.3s"},a(l,"".concat(t.antCls,"-list-item-action"),{display:"block"}),a(l,"".concat(t.antCls,"-list-item-extra"),{display:"flex"}),a(l,"".concat(t.componentCls,"-row-extra"),{display:"block"}),a(l,"".concat(t.componentCls,"-row-subheader-actions"),{display:"block"}),l)),a(r,"&-card",a({marginBlock:8,marginInline:0,paddingBlock:0,paddingInline:8,"&:hover":{backgroundColor:"transparent"}},"".concat(t.antCls,"-list-item-meta-title"),{flexShrink:9,marginBlock:0,marginInline:0,lineHeight:"22px"})),a(r,"&".concat(t.componentCls,"-row-editable"),a({},"".concat(t.componentCls,"-list-item"),{"&-meta":{"&-avatar,&-description,&-title":{paddingBlock:6,paddingInline:0}},"&-action":{display:"block"}})),a(r,"&".concat(t.componentCls,"-row-selected"),{backgroundColor:t.colorPrimaryBgHover,"&:hover":{backgroundColor:t.colorPrimaryBgHover}}),a(r,"&".concat(t.componentCls,"-row-type-new"),{animation:"techUiListActive 3s"}),a(r,"&".concat(t.componentCls,"-row-type-inline"),a({},"".concat(t.componentCls,"-row-title"),{fontWeight:"normal"})),a(r,"&".concat(t.componentCls,"-row-type-top"),{backgroundImage:"url('https://gw.alipayobjects.com/zos/antfincdn/DehQfMbOJb/icon.svg')",backgroundRepeat:"no-repeat",backgroundPosition:"left top",backgroundSize:"12px 12px"}),a(r,"&-show-action-hover",(o={},a(o,"".concat(t.antCls,`-list-item-action,
            `).concat(t.proComponentsCls,`-card-extra,
            `).concat(t.proComponentsCls,"-card-actions"),{display:"none"}),a(o,"&:hover",a({},"".concat(t.proComponentsCls,"-card-extra,").concat(t.proComponentsCls,"-card-actions"),{display:"flex"})),o)),a(r,"&-show-extra-hover",a({},"".concat(t.antCls,"-list-item-extra"),{display:"none"})),a(r,"&-extra",{display:"none"}),a(r,"&-subheader",{display:"flex",alignItems:"center",justifyContent:"space-between",height:"44px",paddingInline:24,paddingBlock:0,color:t.colorTextSecondary,lineHeight:"44px",background:"rgba(0, 0, 0, 0.02)","&-actions":{display:"none"},"&-actions *":{marginInlineEnd:8,"&:last-child":{marginInlineEnd:0}}}),a(r,"&-expand-icon",{marginInlineEnd:8,color:t.colorTextSecondary,"> .anticon > svg":{transition:"0.3s"}}),a(r,"&-expanded",{" > .anticon > svg":{transform:"rotate(90deg)"}}),a(r,"&-title",{marginInlineEnd:"16px",wordBreak:"break-all",cursor:"pointer","&:hover":{color:t.colorPrimary}}),a(r,"&-content",{position:"relative",display:"flex",flex:"1",flexDirection:"column",marginBlock:0,marginInline:32}),a(r,"&-subTitle",{color:"rgba(0, 0, 0, 0.45)"}),a(r,"&-description",{marginBlockStart:"4px",wordBreak:"break-all"}),a(r,"&-avatar",{display:"flex"}),a(r,"&-header",{display:"flex",flex:"1",justifyContent:"flex-start"}),a(r,"&-header-title",{display:"flex",alignItems:"center",justifyContent:"flex-start"}),a(r,"&-header-option",{display:"flex"}),a(r,"&-checkbox",{width:"16px",marginInlineEnd:"12px"}),a(r,"&-no-split",(i={},a(i,"".concat(t.componentCls,"-row"),{borderBlockEnd:"none"}),a(i,"".concat(t.antCls,"-list ").concat(t.antCls,"-list-item"),{borderBlockEnd:"none"}),i)),a(r,"&-bordered",a({},"".concat(t.componentCls,"-toolbar"),{borderBlockEnd:"1px solid ".concat(t.colorSplit)})),a(r,"".concat(t.antCls,"-list-vertical"),(s={},a(s,"".concat(t.componentCls,"-row"),{borderBlockEnd:"12px 18px 12px 24px"}),a(s,"&-header-title",{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center"}),a(s,"&-content",{marginBlock:0,marginInline:0}),a(s,"&-subTitle",{marginBlockStart:8}),a(s,"".concat(t.antCls,"-list-item-extra"),a({display:"flex",alignItems:"center",marginInlineStart:"32px"},"".concat(t.componentCls,"-row-description"),{marginBlockStart:16})),a(s,"".concat(t.antCls,"-list-bordered ").concat(t.antCls,"-list-item"),{paddingInline:0}),a(s,"".concat(t.componentCls,"-row-show-extra-hover"),a({},"".concat(t.antCls,"-list-item-extra "),{display:"none"})),s)),a(r,"".concat(t.antCls,"-list-pagination"),{marginBlockEnd:t.marginLG}),a(r,"".concat(t.antCls,"-list-list"),{"&-item":{cursor:"pointer",paddingBlock:12,paddingInline:12}}),a(r,"".concat(t.antCls,"-list-vertical .").concat(t.proComponentsCls,"-list-row ").concat(t.antCls,"-list"),a({"&-header":{paddingBlock:0,paddingInline:0,borderBlockEnd:"none"}},"".concat(t.antCls,"-list-item"),{width:"100%",paddingBlock:12,paddingInlineStart:24,paddingInlineEnd:18,"&-meta-avatar":{display:"flex",alignItems:"center",marginInlineEnd:8},"&-action-split":{display:"none"},"&-meta-title":{marginBlock:0,marginInline:0}})),a(r,"@keyframes techUiListActive",{"0%":{backgroundColor:"unset"},"30%":{background:"#fefbe6"},"100%":{backgroundColor:"unset"}}),r)),f))};function sa(e){return Rt("ProList",function(t){var l=E(E({},t),{},{componentCls:".".concat(e)});return[la(l)]})}var ca=["metas","split","footer","rowKey","tooltip","className","options","search","expandable","showActions","showExtra","rowSelection","pagination","itemLayout","renderItem","grid","itemCardProps","onRow","onItem","rowClassName","locale","itemHeaderRender","itemTitleRender"];function da(e){var t=e.metas,l=e.split,o=e.footer,i=e.rowKey,s=e.tooltip,r=e.className,f=e.options,R=f===void 0?!1:f,D=e.search,d=D===void 0?!1:D,N=e.expandable,u=e.showActions,m=e.showExtra,c=e.rowSelection,O=c===void 0?!1:c,A=e.pagination,b=A===void 0?!1:A,y=e.itemLayout,_=e.renderItem,j=e.grid,z=e.itemCardProps,p=e.onRow,h=e.onItem,ve=e.rowClassName,Z=e.locale,ce=e.itemHeaderRender,de=e.itemTitleRender,ee=_e(e,ca),L=x.exports.useRef();x.exports.useImperativeHandle(ee.actionRef,function(){return L.current});var ue=x.exports.useContext(Be.ConfigContext),te=ue.getPrefixCls,me=x.exports.useMemo(function(){var F=[];return Object.keys(t||{}).forEach(function(w){var M=t[w]||{},$=M.valueType;$||(w==="avatar"&&($="avatar"),w==="actions"&&($="option"),w==="description"&&($="textarea")),F.push(E(E({listKey:w,dataIndex:(M==null?void 0:M.dataIndex)||w},M),{},{valueType:$}))}),F},[t]),J=te("pro-list",e.prefixCls),U=sa(J),W=U.wrapSSR,k=U.hashId,V=Y(J,k,a({},"".concat(J,"-no-split"),!l));return W(n(It,E(E({tooltip:s},ee),{},{actionRef:L,pagination:b,type:"list",rowSelection:O,search:d,options:R,className:Y(J,r,V),columns:me,rowKey:i,tableViewRender:function(w){var M=w.columns,$=w.size,ae=w.pagination,G=w.rowSelection,ne=w.dataSource,pe=w.loading;return n(ia,{grid:j,itemCardProps:z,itemTitleRender:de,prefixCls:e.prefixCls,columns:M,renderItem:_,actionRef:L,dataSource:ne||[],size:$,footer:o,split:l,rowKey:i,expandable:N,rowSelection:O===!1?void 0:G,showActions:u,showExtra:m,pagination:ae,itemLayout:y,loading:pe,itemHeaderRender:ce,onRow:p,onItem:h,rowClassName:ve,locale:Z})}})))}const ua={title:"\u89D2\u8272\u540D\u79F0",dataIndex:"roleName",key:"roleName",valueType:"text"},ma={title:"\u89D2\u8272\u7F16\u53F7",dataIndex:"roleId",key:"roleId",valueType:"text",hideInSearch:!0,editable:!1},pa={title:"\u6743\u9650\u5B57\u7B26",dataIndex:"roleKey",key:"roleKey",valueType:"text"},fa={title:"\u663E\u793A\u6392\u5E8F",dataIndex:"roleSort",key:"roleSort",valueType:"text",hideInSearch:!0},it="systemRole",lt=Xe({key:`${it}AtomRoleListActions`,default:void 0}),$e=()=>Ze(lt),ha=()=>Ht(lt),Le=Xe({key:`${it}AtomRoleDetails`,default:{visible:!1,roleId:0,roleName:""}}),xa=()=>Pt(Le),va=()=>Nt(Le),st=()=>Ze(Le);async function ga(e,t){return Re("/system/role/add",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...t||{}})}async function Ca(e,t){return Re("/system/role/edit",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...t||{}})}async function ya(e,t){return Re("/system/role/info",{method:"GET",params:{...e},...t||{}})}async function ba(e,t){return Re("/system/role/list",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...t||{}})}async function wa(e,t){return Re("/system/role/remove",{method:"POST",params:{...e},...t||{}})}const Sa=()=>{const e=Oe(),t=x.exports.useRef(),l=$e();return n(Me,{accessible:e.canAddSysRole,children:T(kt,{title:"\u65B0\u5EFA\u89D2\u8272",trigger:n(Ee,{type:"primary",icon:n(Dt,{}),children:"\u65B0\u5EFA"}),formRef:t,onFinish:async o=>{var i;return await ga({...o,menuIds:[],menuCheckStrictly:!0}),l==null||l.reload(),(i=t.current)==null||i.resetFields(),Fe.success("\u65B0\u5EFA\u6210\u529F"),!0},width:500,children:[n(Ve,{name:"roleName",label:"\u89D2\u8272\u540D\u79F0",rules:[{required:!0}]}),n(Ve,{name:"roleKey",label:"\u6743\u9650\u5B57\u7B26",rules:[{required:!0}],tooltip:"\u63A7\u5236\u5668\u4E2D\u5B9A\u4E49\u7684\u6743\u9650\u5B57\u7B26\uFF0C\u5982\uFF1A@PreAuthorize(`@ss.hasRole('admin')`)"}),n($t,{name:"roleSort",label:"\u663E\u793A\u6392\u5E8F",rules:[{required:!0}],initialValue:0}),n(Tt.Group,{name:"status",label:"\u72B6\u6001",valueEnum:jt,initialValue:et.ENABLE}),n(Lt,{name:"remark",label:"\u5907\u6CE8"})]})})},Ea=()=>{const e=Oe(),t=$e(),l=xa(),{roleId:o,roleName:i}=st(),s=()=>Bt.confirm({title:"\u5220\u9664\u786E\u8BA4",content:T(Ke,{children:["\u786E\u5B9A\u5BF9\u89D2\u8272",n(Ge.Text,{code:!0,children:i}),"\u8FDB\u884C",n(Ge.Text,{code:!0,children:"\u5220\u9664"}),"\u64CD\u4F5C\u5417\uFF1F"]}),onOk:async()=>{var r;await wa({roleIds:o}),t==null||t.reload(),(r=t==null?void 0:t.clearSelected)==null||r.call(t),l(),Fe.success("\u5220\u9664\u6210\u529F")}});return n(Me,{accessible:e.canRemoveSysRole,children:n(Ee,{danger:!0,ghost:!0,icon:n(At,{}),onClick:s,children:"\u5220\u9664"})})},Ra={title:"label",key:"id",children:"children"},ct=e=>{const t=[];return e.forEach(({id:l,children:o})=>{t.push(l),o&&t.push(...ct(o))}),t},Ia=({roleId:e,handleEdit:t})=>{var z;const[l,o]=x.exports.useState([]),[i,s]=x.exports.useState(!1),[r,f]=x.exports.useState([]),[R,D]=x.exports.useState([]),[d,N]=x.exports.useState(!1),[u,m]=x.exports.useState(!0),{data:c,refresh:O}=nt(async()=>{const{menus:p,checkedKeys:h}=await Yt({roleId:e});return{treeData:p,selectedMenuIds:h,selectedTreeData:Jt(p,h),allMenuIds:Ut(p)}},{ready:e>0,refreshDeps:[e],onSuccess:p=>{s(!1),D(p.selectedTreeData)}}),{isLoading:A,mutate:b}=tt(async()=>{await t({menuIds:l}),O()}),y=ct((z=c==null?void 0:c.treeData)!=null?z:[]),_=(r==null?void 0:r.length)!==0&&(r==null?void 0:r.length)===(y==null?void 0:y.length),j=p=>{var h;if(p||u){o((h=c==null?void 0:c.allMenuIds)!=null?h:[]);return}o([])};return x.exports.useEffect(()=>{if((c==null?void 0:c.allMenuIds.length)===l.length){N(!0),m(!1);return}if(l.length===0){N(!1),m(!1);return}m(!0)},[c==null?void 0:c.allMenuIds,l]),T(Ke,{children:[T("header",{className:"flex justify-between mb-2",children:[T(qe,{children:[R.length>0&&n(Ee,{size:"small",icon:_?n(_t,{}):n(Kt,{}),onClick:()=>f(_?[]:y),children:_?"\u5168\u90E8\u6298\u53E0":"\u5168\u90E8\u5C55\u5F00"}),i&&n(Ft,{indeterminate:u,onChange:p=>j(p.target.checked),checked:d,children:"\u5168\u9009/\u5168\u4E0D\u9009"})]}),n(Me,{accessible:!0,children:i?T(qe,{children:[n(Ee,{loading:A,onClick:()=>{var p;s(!1),D((p=c==null?void 0:c.selectedTreeData)!=null?p:[])},children:"\u53D6\u6D88\u7F16\u8F91"}),n(Ee,{type:"primary",ghost:!0,loading:A,onClick:()=>b(),children:"\u4FDD\u5B58"})]}):n(Ee,{type:"primary",ghost:!0,onClick:()=>{var p,h;s(!0),o((p=c==null?void 0:c.selectedMenuIds)!=null?p:[]),D((h=c==null?void 0:c.treeData)!=null?h:[])},children:"\u7F16\u8F91\u6743\u9650"})})]}),n("div",{className:"h-[390px] overflow-y-auto",children:R.length>0?n(Mt,{blockNode:!0,showLine:{showLeafIcon:!1},checkable:i,checkStrictly:!0,fieldNames:Ra,checkedKeys:l,treeData:R,expandedKeys:r,onExpand:p=>f(p),onCheck:p=>{o(p.checked)}}):n(at,{description:"\u6682\u672A\u5206\u914D\u6743\u9650"})})]})},Pa=()=>{const[e,t]=x.exports.useState([]),[l]=Ot.useForm(),o=Oe(),i=$e(),{roleId:s,visible:r}=st(),{data:f,loading:R,refresh:D}=nt(()=>ya({roleId:s}),{ready:r&&s>0,refreshDeps:[s],onSuccess:()=>{t([])}}),{mutateAsync:d}=tt(async u=>{var m;await Ca({roleId:s,menuIds:(m=f==null?void 0:f.menuIds)!=null?m:[],roleKey:f.roleKey,roleName:f.roleName,roleSort:f.roleSort,status:f.status,...u})},{onSuccess:()=>{D(),i==null||i.reload(),Fe.success("\u4FDD\u5B58\u6210\u529F")}}),N=o.canEditSysRole&&f?{form:l,editableKeys:e,onChange:(u,m)=>{t(u),u.length===1&&!Array.isArray(m)&&l.setFieldsValue({[u[0]]:m[u[0]]})},onSave:async(u,m)=>{await d({[u]:m[u]})}}:void 0;return r?T(Ue,{spinning:R,children:[n(We,{column:2,columns:[ma,Gt],dataSource:f}),n(Ye,{}),n(We,{column:2,columns:[qt,fa,ua,Wt,pa],dataSource:f,editable:N}),n(Ye,{}),n(Ia,{roleId:s,handleEdit:u=>d(u)})]}):n(at,{description:"\u70B9\u51FB\u9009\u62E9\u5DE6\u4FA7\u89D2\u8272\u67E5\u770B\u8BE6\u60C5"})},Na=()=>{const e=ha(),t=va(),{onClick:l,rowSelection:o,selectedRows:i}=Qt("roleId","radio");return x.exports.useEffect(()=>{i.length===1&&t({roleId:i[0].roleId,roleName:i[0].roleName,visible:!0})},[i]),n(da,{ghost:!0,rowKey:"roleId",actionRef:e,metas:{title:{dataIndex:"roleName"},subTitle:{dataIndex:"status",render:s=>s===et.ENABLE?n(Je,{color:"success",children:"\u542F\u7528\u4E2D"}):n(Je,{color:"error",children:"\u5DF2\u7981\u7528"})}},tableAlertRender:!1,onRow:s=>({onClick:()=>l(s)}),rowSelection:o,pagination:{pageSize:10},request:(...s)=>ba(Vt(...s))})},Va=()=>n(zt,{children:T(Pe,{ghost:!0,gutter:24,children:[n(Pe,{title:"\u89D2\u8272\u5217\u8868",colSpan:"400px",extra:n(Sa,{}),children:n(Na,{})}),n(Pe,{title:"\u89D2\u8272\u8BE6\u60C5",extra:n(Ea,{}),children:n(Pa,{})})]})});export{Va as default};
