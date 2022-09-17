import{B as lt}from"./index.3ddad618.js";import{u as Ae,A as De,P as ct}from"./useAccess.d97c5d09.js";import{r as m,$ as _e,d as Q,g as _,j as n,h as I,ad as dt,aP as ut,v as mt,_ as pe,a1 as Te,b as Pe,aT as ft,cP as Be,aR as vt,a9 as We,bF as ht,C as Ke,l as Fe,F as Me,ay as pt,a as A,S as Le,a7 as xt,a4 as Se,cZ as gt,aF as Ne,H as Ye,Q as Je,cQ as yt,U as Ct,aD as Re,aE as we,cS as St,cz as je,cr as wt,cT as Ze,az as He,bD as Rt,cU as bt,bs as Et,aS as Pt,aQ as Ve,cV as qe}from"./index.ab629474.js";import{E as It,a as Xe,u as et}from"./useMutation.c7c2171b.js";import"./keepAlive.a9eee1c9.js";import{u as Nt,c as kt}from"./useInitActionType.16ccc30d.js";import{a as Tt,u as At,b as Dt,P as _t,M as Kt}from"./Table.d7db5ded.js";import{P as Ft}from"./index.2f3f0cee.js";import{P as Mt}from"./index.c151fbc0.js";import{M as Ot,T as $t}from"./Tree.40cb0bbc.js";import{P as Ee,u as zt,T as Ge}from"./index.e9aee0a8.js";import{b as Bt,C as Lt,c as jt}from"./common.c7a1e3a5.js";import{E as tt}from"./index.006fd930.js";import{e as Ht}from"./SysMenuService.7c1e4cd1.js";import{f as Vt,a as qt}from"./tree.f20394cb.js";import{P as Qe}from"./index.f3aee840.js";/* empty css              */import"./RouteContext.0286c75a.js";import"./index.d635a720.js";import"./index.13816bc9.js";import"./unstated-next.a5c3820a.js";var at=globalThis&&globalThis.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]]);return r},Gt=function(t){var r=t.prefixCls,a=t.className,o=t.avatar,i=t.title,l=t.description,v=at(t,["prefixCls","className","avatar","title","description"]),y=m.exports.useContext(_e),R=y.getPrefixCls,f=R("list",r),u=Q("".concat(f,"-item-meta"),a),c=_("div",{className:"".concat(f,"-item-meta-content"),children:[i&&n("h4",{className:"".concat(f,"-item-meta-title"),children:i}),l&&n("div",{className:"".concat(f,"-item-meta-description"),children:l})]});return _("div",{...v,className:u,children:[o&&n("div",{className:"".concat(f,"-item-meta-avatar"),children:o}),(i||l)&&c]})},Qt=function(t,r){var a=t.prefixCls,o=t.children,i=t.actions,l=t.extra,v=t.className,y=t.colStyle,R=at(t,["prefixCls","children","actions","extra","className","colStyle"]),f=m.exports.useContext(Oe),u=f.grid,c=f.itemLayout,d=m.exports.useContext(_e),s=d.getPrefixCls,N=function(){var h;return m.exports.Children.forEach(o,function(D){typeof D=="string"&&(h=!0)}),h&&m.exports.Children.count(o)>1},K=function(){return c==="vertical"?!!l:!N()},b=s("list",a),T=i&&i.length>0&&n("ul",{className:"".concat(b,"-item-action"),children:i.map(function(p,h){return _("li",{children:[p,h!==i.length-1&&n("em",{className:"".concat(b,"-item-action-split")})]},"".concat(b,"-item-action-").concat(h))})},"actions"),H=u?"div":"li",B=n(H,{...R,...u?{}:{ref:r},className:Q("".concat(b,"-item"),I({},"".concat(b,"-item-no-flex"),!K()),v),children:c==="vertical"&&l?[_("div",{className:"".concat(b,"-item-main"),children:[o,T]},"content"),n("div",{className:"".concat(b,"-item-extra"),children:l},"extra")]:[o,T,dt(l,{key:"extra"})]});return u?n(ut,{ref:r,flex:1,style:y,children:B}):B},nt=m.exports.forwardRef(Qt);nt.Meta=Gt;const Ut=nt;var Wt=globalThis&&globalThis.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]]);return r},Oe=m.exports.createContext({});Oe.Consumer;function Ie(e){var t,r=e.pagination,a=r===void 0?!1:r,o=e.prefixCls,i=e.bordered,l=i===void 0?!1:i,v=e.split,y=v===void 0?!0:v,R=e.className,f=e.children,u=e.itemLayout,c=e.loadMore,d=e.grid,s=e.dataSource,N=s===void 0?[]:s,K=e.size,b=e.header,T=e.footer,H=e.loading,B=H===void 0?!1:H,p=e.rowKey,h=e.renderItem,D=e.locale,le=Wt(e,["pagination","prefixCls","bordered","split","className","children","itemLayout","loadMore","grid","dataSource","size","header","footer","loading","rowKey","renderItem","locale"]),ce=a&&mt(a)==="object"?a:{},ae=m.exports.useState(ce.defaultCurrent||1),V=pe(ae,2),ne=V[0],Y=V[1],de=m.exports.useState(ce.defaultPageSize||10),re=pe(de,2),ue=re[0],q=re[1],E=m.exports.useContext(_e),L=E.getPrefixCls,C=E.renderEmpty,F=E.direction,M={current:1,total:0},U={},J=function(w){return function($,z){Y($),q(z),a&&a[w]&&a[w]($,z)}},G=J("onChange"),oe=J("onShowSizeChange"),xe=function(w,$){if(!h)return null;var z;return typeof p=="function"?z=p(w):p?z=w[p]:z=w.key,z||(z="list-item-".concat($)),U[$]=z,h(w,$)},ge=function(){return!!(c||a||T)},ye=function(w,$){return n("div",{className:"".concat(w,"-empty-text"),children:D&&D.emptyText||$("List")})},P=L("list",o),W=B;typeof W=="boolean"&&(W={spinning:W});var ie=W&&W.spinning,O="";switch(K){case"large":O="lg";break;case"small":O="sm";break}var g=Q(P,(t={},I(t,"".concat(P,"-vertical"),u==="vertical"),I(t,"".concat(P,"-").concat(O),O),I(t,"".concat(P,"-split"),y),I(t,"".concat(P,"-bordered"),l),I(t,"".concat(P,"-loading"),ie),I(t,"".concat(P,"-grid"),!!d),I(t,"".concat(P,"-something-after-last-item"),ge()),I(t,"".concat(P,"-rtl"),F==="rtl"),t),R),x=Te(Te(Te({},M),{total:N.length,current:ne,pageSize:ue}),a||{}),S=Math.ceil(x.total/x.pageSize);x.current>S&&(x.current=S);var Z=a?n("div",{className:"".concat(P,"-pagination"),children:n(Tt,{...x,onChange:G,onShowSizeChange:oe})}):null,X=Pe(N);a&&N.length>(x.current-1)*x.pageSize&&(X=Pe(N).splice((x.current-1)*x.pageSize,x.pageSize));var me=Object.keys(d||{}).some(function(k){return["xs","sm","md","lg","xl","xxl"].includes(k)}),ee=ft(me),se=m.exports.useMemo(function(){for(var k=0;k<Be.length;k+=1){var w=Be[k];if(ee[w])return w}},[ee]),ve=m.exports.useMemo(function(){if(!!d){var k=se&&d[se]?d[se]:d.column;if(k)return{width:"".concat(100/k,"%"),maxWidth:"".concat(100/k,"%")}}},[d==null?void 0:d.column,se]),te=ie&&n("div",{style:{minHeight:53}});if(X.length>0){var he=X.map(function(k,w){return xe(k,w)}),Ce=m.exports.Children.map(he,function(k,w){return n("div",{style:ve,children:k},U[w])});te=d?n(vt,{gutter:d.gutter,children:Ce}):n("ul",{className:"".concat(P,"-items"),children:he})}else!f&&!ie&&(te=ye(P,C||ht));var j=x.position||"bottom",fe=m.exports.useMemo(function(){return{grid:d,itemLayout:u}},[JSON.stringify(d),u]);return n(Oe.Provider,{value:fe,children:_("div",{className:g,...le,children:[(j==="top"||j==="both")&&Z,b&&n("div",{className:"".concat(P,"-header"),children:b}),_(We,{...W,children:[te,f]}),T&&n("div",{className:"".concat(P,"-footer"),children:T}),c||(j==="bottom"||j==="both")&&Z]})})}Ie.Item=Ut;function Yt(e,t){for(var r=e,a=0;a<t.length;a+=1){if(r==null)return;r=r[t[a]]}return r}var Jt=["title","subTitle","avatar","description","extra","content","actions","type"],Zt=Jt.reduce(function(e,t){return e.set(t,!0),e},new Map);function Xt(e,t){return na(e)||aa(e,t)||ta(e,t)||ea()}function ea(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ta(e,t){if(!!e){if(typeof e=="string")return Ue(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Ue(e,t)}}function Ue(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function aa(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var r=[],a=!0,o=!1,i=void 0;try{for(var l=e[Symbol.iterator](),v;!(a=(v=l.next()).done)&&(r.push(v.value),!(t&&r.length===t));a=!0);}catch(y){o=!0,i=y}finally{try{!a&&l.return!=null&&l.return()}finally{if(o)throw i}}return r}}function na(e){if(Array.isArray(e))return e}function ra(e,t){var r=t||{},a=r.defaultValue,o=r.value,i=r.onChange,l=r.postState,v=m.exports.useState(function(){return o!==void 0?o:a!==void 0?typeof a=="function"?a():a:typeof e=="function"?e():e}),y=Xt(v,2),R=y[0],f=y[1],u=o!==void 0?o:R;l&&(u=l(u));function c(s){f(s),u!==s&&i&&i(s,u)}var d=m.exports.useRef(!0);return m.exports.useEffect(function(){if(d.current){d.current=!1;return}o===void 0&&f(o)},[o]),[u,c]}var oa=["title","subTitle","content","itemTitleRender","prefixCls","actions","item","recordKey","avatar","cardProps","description","isEditable","checkbox","index","selected","loading","expand","onExpand","expandable","rowSupportExpand","showActions","showExtra","type","style","className","record","onRow","onItem","itemHeaderRender","cardActionProps","extra"];function ia(e){var t,r=e.prefixCls,a=e.expandIcon,o=a===void 0?n(xt,{}):a,i=e.onExpand,l=e.expanded,v=e.record,y=o,R="".concat(r,"-row-expand-icon"),f=function(c){i(!l),c.stopPropagation()};return typeof o=="function"&&(y=o({expanded:l,onExpand:i,record:v})),n("span",{className:Q(R,(t={},I(t,"".concat(r,"-row-expanded"),l),I(t,"".concat(r,"-row-collapsed"),!l),t)),onClick:f,children:y})}function sa(e){var t,r,a,o,i,l=e.prefixCls,v=m.exports.useContext(Ke.ConfigContext),y=v.getPrefixCls,R=y("pro-list",l),f="".concat(R,"-row"),u=e.title,c=e.subTitle,d=e.content,s=e.itemTitleRender;e.prefixCls;var N=e.actions;e.item,e.recordKey;var K=e.avatar,b=e.cardProps,T=e.description,H=e.isEditable,B=e.checkbox,p=e.index,h=e.selected,D=e.loading,le=e.expand,ce=e.onExpand,ae=e.expandable,V=e.rowSupportExpand,ne=e.showActions,Y=e.showExtra,de=e.type,re=e.style,ue=e.className,q=ue===void 0?f:ue,E=e.record,L=e.onRow,C=e.onItem,F=e.itemHeaderRender,M=e.cardActionProps,U=e.extra,J=Fe(e,oa),G=ae||{},oe=G.expandedRowRender,xe=G.expandIcon,ge=G.expandRowByClick,ye=G.indentSize,P=ye===void 0?8:ye,W=G.expandedRowClassName,ie=ra(!!le,{value:le,onChange:ce}),O=pe(ie,2),g=O[0],x=O[1],S=Q((t={},I(t,"".concat(f,"-selected"),!b&&h),I(t,"".concat(f,"-show-action-hover"),ne==="hover"),I(t,"".concat(f,"-type-").concat(de),!!de),I(t,"".concat(f,"-editable"),H),I(t,"".concat(f,"-show-extra-hover"),Y==="hover"),t),f),Z=Q(I({},"".concat(q,"-extra"),Y==="hover")),X=g||Object.values(ae||{}).length===0,me=oe&&oe(E,p,P,g),ee=m.exports.useMemo(function(){if(!(!N||M==="actions"))return[n("div",{onClick:function(w){return w.stopPropagation()},children:N},"action")]},[N,M]),se=m.exports.useMemo(function(){if(!(!N||!M||M==="extra"))return[n("div",{onClick:function(w){return w.stopPropagation()},children:N},"action")]},[N,M]),ve=u||c?_("div",{className:"".concat(S,"-header-title"),children:[u&&n("div",{className:"".concat(S,"-title"),children:u}),c&&n("div",{className:"".concat(S,"-subTitle"),children:c})]}):null,te=(r=s&&(s==null?void 0:s(E,p,ve)))!==null&&r!==void 0?r:ve,he=te||K||c||T?n(Ie.Item.Meta,{avatar:K,title:te,description:T&&X&&n("div",{className:"".concat(S,"-description"),children:T})}):null,Ce=Q((a={},I(a,"".concat(S,"-item-has-checkbox"),B),I(a,"".concat(S,"-item-has-avatar"),K),I(a,S,S),a)),j=m.exports.useMemo(function(){return K||u?_(Me,{children:[K&&n(pt,{size:22,src:K,className:y("list-item-meta-avatar")}),n("span",{className:y("list-item-meta-title"),children:u})]}):null},[K,y,u]),fe=b?n(Ee,A(A(A({bordered:!0,loading:D,hoverable:!0},b),{},{title:j,subTitle:c,extra:ee,actions:se,bodyStyle:A({padding:24},b.bodyStyle)},C==null?void 0:C(E,p)),{},{children:n(Le,{avatar:!0,title:!1,loading:D,active:!0,children:_("div",{className:"".concat(S,"-header"),children:[s&&(s==null?void 0:s(E,p,ve)),d]})})})):n(Ie.Item,A(A(A(A({className:Q(Ce,I({},q,q!==f))},J),{},{actions:ee,extra:!!U&&n("div",{className:Z,children:U})},L==null?void 0:L(E,p)),C==null?void 0:C(E,p)),{},{onClick:function(w){var $,z,be,ke;L==null||($=L(E,p))===null||$===void 0||(z=$.onClick)===null||z===void 0||z.call($,w),C==null||(be=C(E,p))===null||be===void 0||(ke=be.onClick)===null||ke===void 0||ke.call(be,w),ge&&x(!g)},children:_(Le,{avatar:!0,title:!1,loading:D,active:!0,children:[_("div",{className:"".concat(S,"-header"),children:[_("div",{className:"".concat(S,"-header-option"),children:[!!B&&n("div",{className:"".concat(S,"-checkbox"),children:B}),Object.values(ae||{}).length>0&&V&&ia({prefixCls:R,expandIcon:xe,onExpand:x,expanded:g,record:E})]}),(o=F&&(F==null?void 0:F(E,p,he)))!==null&&o!==void 0?o:he]}),X&&(d||me)&&_("div",{className:"".concat(S,"-content"),children:[d,oe&&V&&n("div",{className:W&&W(E,p,P),children:me})]})]})}));return b?n("div",{className:Q((i={},I(i,"".concat(S,"-card"),b),I(i,q,q!==f),i)),style:re,children:fe}):fe}var la=["dataSource","columns","rowKey","showActions","showExtra","prefixCls","actionRef","itemTitleRender","renderItem","itemCardProps","itemHeaderRender","expandable","rowSelection","pagination","onRow","onItem","rowClassName"];function ca(e){var t=e.dataSource,r=e.columns,a=e.rowKey,o=e.showActions,i=e.showExtra,l=e.prefixCls,v=e.actionRef,y=e.itemTitleRender,R=e.renderItem,f=e.itemCardProps,u=e.itemHeaderRender,c=e.expandable,d=e.rowSelection,s=e.pagination,N=e.onRow,K=e.onItem,b=e.rowClassName,T=Fe(e,la),H=m.exports.useContext(Ke.ConfigContext),B=H.getPrefixCls,p=Se.useMemo(function(){return typeof a=="function"?a:function(O,g){return O[a]||g}},[a]),h=zt(t,"children",p),D=pe(h,1),le=D[0],ce=At(t.length,A({responsive:!0},s),function(){}),ae=pe(ce,1),V=ae[0],ne=Se.useMemo(function(){if(s===!1||!V.pageSize||t.length<V.total)return t;var O=V.current,g=O===void 0?1:O,x=V.pageSize,S=x===void 0?10:x,Z=t.slice((g-1)*S,g*S);return Z},[t,V,s]),Y=B("pro-list",l),de=Dt(d,{getRowKey:p,getRecordByKey:le,prefixCls:Y,data:t,pageData:ne,expandType:"row",childrenColumnName:"children",locale:{}}),re=pe(de,2),ue=re[0],q=re[1],E=c||{},L=E.expandedRowKeys,C=E.defaultExpandedRowKeys,F=E.defaultExpandAllRows,M=F===void 0?!0:F,U=E.onExpand,J=E.onExpandedRowsChange,G=E.rowExpandable,oe=Se.useState(function(){return C||(M!==!1?t.map(p):[])}),xe=pe(oe,2),ge=xe[0],ye=xe[1],P=Se.useMemo(function(){return new Set(L||ge||[])},[L,ge]),W=Se.useCallback(function(O){var g=p(O,t.indexOf(O)),x,S=P.has(g);S?(P.delete(g),x=Pe(P)):x=[].concat(Pe(P),[g]),ye(x),U&&U(!S,O),J&&J(x)},[p,P,t,U,J]),ie=ue([])[0];return n(Ie,A(A({},T),{},{className:Q(B("pro-list-container",l),T.className),dataSource:ne,pagination:s&&V,renderItem:function(g,x){var S,Z,X,me={className:typeof b=="function"?b(g,x):b};r==null||r.forEach(function(j){var fe=j.listKey,k=j.cardActionProps;if(!!Zt.has(fe)){var w=j.dataIndex||fe||j.key,$=Array.isArray(w)?Yt(g,w):g[w];k==="actions"&&fe==="actions"&&(me.cardActionProps=k);var z=j.render?j.render($,g,x):$;z!=="-"&&(me[j.listKey]=z)}});var ee;ie&&ie.render&&(ee=ie.render(g,g,x)||void 0);var se=((S=v.current)===null||S===void 0?void 0:S.isEditable(A(A({},g),{},{index:x})))||{},ve=se.isEditable,te=se.recordKey,he=q.has(te||x),Ce=n(sa,A(A({cardProps:T.grid?A(A(A({},f),T.grid),{},{checked:he,onChecked:Se.isValidElement(ee)?(Z=ee)===null||Z===void 0||(X=Z.props)===null||X===void 0?void 0:X.onChange:void 0}):void 0},me),{},{recordKey:te,isEditable:ve||!1,expandable:c,expand:P.has(p(g,x)),onExpand:function(){W(g)},index:x,record:g,item:g,showActions:o,showExtra:i,itemTitleRender:y,itemHeaderRender:u,rowSupportExpand:!G||G&&G(g),selected:q.has(p(g,x)),checkbox:ee,onRow:N,onItem:K}),te);return R?R(g,x,Ce):Ce}}))}var da=["metas","split","footer","rowKey","tooltip","className","options","search","expandable","showActions","showExtra","rowSelection","pagination","itemLayout","renderItem","grid","itemCardProps","onRow","onItem","rowClassName","locale","itemHeaderRender","itemTitleRender"];function ua(e){var t=e.metas,r=e.split,a=e.footer,o=e.rowKey,i=e.tooltip,l=e.className,v=e.options,y=v===void 0?!1:v,R=e.search,f=R===void 0?!1:R,u=e.expandable,c=e.showActions,d=e.showExtra,s=e.rowSelection,N=s===void 0?!1:s,K=e.pagination,b=K===void 0?!1:K,T=e.itemLayout,H=e.renderItem,B=e.grid,p=e.itemCardProps,h=e.onRow,D=e.onItem,le=e.rowClassName,ce=e.locale,ae=e.itemHeaderRender,V=e.itemTitleRender,ne=Fe(e,da),Y=m.exports.useRef();m.exports.useImperativeHandle(ne.actionRef,function(){return Y.current});var de=m.exports.useContext(Ke.ConfigContext),re=de.getPrefixCls,ue=m.exports.useMemo(function(){var L=[];return Object.keys(t||{}).forEach(function(C){var F=t[C]||{},M=F.valueType;M||(C==="avatar"&&(M="avatar"),C==="actions"&&(M="option"),C==="description"&&(M="textarea")),L.push(A(A({listKey:C,dataIndex:(F==null?void 0:F.dataIndex)||C},F),{},{valueType:M}))}),L},[t]),q=re("pro-list",e.prefixCls),E=Q(q,I({},"".concat(q,"-no-split"),!r));return n(_t,A(A({tooltip:i},ne),{},{actionRef:Y,pagination:b,type:"list",rowSelection:N,search:f,options:y,className:Q(q,l,E),columns:ue,rowKey:o,tableViewRender:function(C){var F=C.columns,M=C.size,U=C.pagination,J=C.rowSelection,G=C.dataSource,oe=C.loading;return n(ca,{grid:B,itemCardProps:p,itemTitleRender:V,prefixCls:e.prefixCls,columns:F,renderItem:H,actionRef:Y,dataSource:G||[],size:M,footer:a,split:r,rowKey:o,expandable:u,rowSelection:N===!1?void 0:J,showActions:c,showExtra:d,pagination:U,itemLayout:T,loading:oe,itemHeaderRender:ae,onRow:h,onItem:D,rowClassName:le,locale:ce})}}))}const ma={title:"\u89D2\u8272\u540D\u79F0",dataIndex:"roleName",key:"roleName",valueType:"text"},fa={title:"\u89D2\u8272\u7F16\u53F7",dataIndex:"roleId",key:"roleId",valueType:"text",hideInSearch:!0,editable:!1},va={title:"\u6743\u9650\u5B57\u7B26",dataIndex:"roleKey",key:"roleKey",valueType:"text"},ha={title:"\u663E\u793A\u6392\u5E8F",dataIndex:"roleSort",key:"roleSort",valueType:"text",hideInSearch:!0},pa=(e,t="checkbox",r=!1)=>{const[a,o]=m.exports.useState([]),[i,l]=m.exports.useState([]);return{selectedRows:i,selectedRowKeys:a,rowSelection:{alwaysShowAlert:r,type:t,selectedRowKeys:a,onChange:(u,c)=>{l(c),o(u)}},onClick:u=>{const c=u[e];let d=[u],s=[c];if(t==="checkbox")if(s=[...a],d=gt(i),s.includes(c)){const N=a.indexOf(c);s.splice(N,1),d.splice(N,1)}else d.push(u),s.push(c);l(d),o(s)},clearSelection:()=>{l([]),o([])},setSelectedRowKeys:o,checkRowSelection:async(u="\u672A\u9009\u62E9\u9700\u8981\u64CD\u4F5C\u7684\u5BF9\u8C61")=>(i==null?void 0:i.length)===0?(Ne.warning(u),Promise.reject(u)):Promise.resolve(i)}},rt="systemRole",ot=Ye({key:`${rt}AtomRoleListActions`,default:void 0}),$e=()=>Je(ot),xa=()=>Nt(ot),ze=Ye({key:`${rt}AtomRoleDetails`,default:{visible:!1,roleId:0,roleName:""}}),ga=()=>yt(ze),ya=()=>Ct(ze),it=()=>Je(ze);async function Ca(e,t){return Re("/system/role/add",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...t||{}})}async function Sa(e,t){return Re("/system/role/edit",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...t||{}})}async function wa(e,t){return Re("/system/role/info",{method:"GET",params:{...e},...t||{}})}async function Ra(e,t){return Re("/system/role/list",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...t||{}})}async function ba(e,t){return Re("/system/role/remove",{method:"POST",params:{...e},...t||{}})}const Ea=()=>{const e=Ae(),t=m.exports.useRef(),r=$e();return n(De,{accessible:e.canAddSysRole,children:_(Kt,{title:"\u65B0\u5EFA\u89D2\u8272",trigger:n(we,{type:"primary",icon:n(St,{}),children:"\u65B0\u5EFA"}),formRef:t,onFinish:async a=>{var o;return await Ca({...a,menuIds:[],menuCheckStrictly:!0}),r==null||r.reload(),(o=t.current)==null||o.resetFields(),Ne.success("\u65B0\u5EFA\u6210\u529F"),!0},width:500,children:[n(je,{name:"roleName",label:"\u89D2\u8272\u540D\u79F0",rules:[{required:!0}]}),n(je,{name:"roleKey",label:"\u6743\u9650\u5B57\u7B26",rules:[{required:!0}],tooltip:"\u63A7\u5236\u5668\u4E2D\u5B9A\u4E49\u7684\u6743\u9650\u5B57\u7B26\uFF0C\u5982\uFF1A@PreAuthorize(`@ss.hasRole('admin')`)"}),n(Ft,{name:"roleSort",label:"\u663E\u793A\u6392\u5E8F",rules:[{required:!0}],initialValue:0}),n(ct.Group,{name:"status",label:"\u72B6\u6001",valueEnum:It,initialValue:Xe.ENABLE}),n(Mt,{name:"remark",label:"\u5907\u6CE8"})]})})},Pa=()=>{const e=Ae(),t=$e(),r=ga(),{roleId:a,roleName:o}=it(),i=()=>Ot.confirm({title:"\u5220\u9664\u786E\u8BA4",content:_(Me,{children:["\u786E\u5B9A\u5BF9\u89D2\u8272",n(Ge.Text,{code:!0,children:o}),"\u8FDB\u884C",n(Ge.Text,{code:!0,children:"\u5220\u9664"}),"\u64CD\u4F5C\u5417\uFF1F"]}),onOk:async()=>{var l;await ba({roleIds:a}),t==null||t.reload(),(l=t==null?void 0:t.clearSelected)==null||l.call(t),r(),Ne.success("\u5220\u9664\u6210\u529F")}});return n(De,{accessible:e.canRemoveSysRole,children:n(we,{danger:!0,ghost:!0,icon:n(wt,{}),onClick:i,children:"\u5220\u9664"})})},Ia={title:"label",key:"id",children:"children"},st=e=>{const t=[];return e.forEach(({id:r,children:a})=>{t.push(r),a&&t.push(...st(a))}),t},Na=({roleId:e,handleEdit:t})=>{var p;const[r,a]=m.exports.useState([]),[o,i]=m.exports.useState(!1),[l,v]=m.exports.useState([]),[y,R]=m.exports.useState([]),[f,u]=m.exports.useState(!1),[c,d]=m.exports.useState(!0),{data:s,refresh:N}=Ze(async()=>{const{menus:h,checkedKeys:D}=await Ht({roleId:e});return{treeData:h,selectedMenuIds:D,selectedTreeData:Vt(h,D),allMenuIds:qt(h)}},{ready:e>0,refreshDeps:[e],onSuccess:h=>{i(!1),R(h.selectedTreeData)}}),{isLoading:K,mutate:b}=et(async()=>{await t({menuIds:r}),N()}),T=st((p=s==null?void 0:s.treeData)!=null?p:[]),H=(l==null?void 0:l.length)!==0&&(l==null?void 0:l.length)===(T==null?void 0:T.length),B=h=>{var D;if(h||c){a((D=s==null?void 0:s.allMenuIds)!=null?D:[]);return}a([])};return m.exports.useEffect(()=>{if((s==null?void 0:s.allMenuIds.length)===r.length){u(!0),d(!1);return}if(r.length===0){u(!1),d(!1);return}d(!0)},[s==null?void 0:s.allMenuIds,r]),_(Me,{children:[_("header",{className:"flex justify-between mb-2",children:[_(He,{children:[y.length>0&&n(we,{size:"small",icon:H?n(Rt,{}):n(bt,{}),onClick:()=>v(H?[]:T),children:H?"\u5168\u90E8\u6298\u53E0":"\u5168\u90E8\u5C55\u5F00"}),o&&n(Et,{indeterminate:c,onChange:h=>B(h.target.checked),checked:f,children:"\u5168\u9009/\u5168\u4E0D\u9009"})]}),n(De,{accessible:!0,children:o?_(He,{children:[n(we,{loading:K,onClick:()=>{var h;i(!1),R((h=s==null?void 0:s.selectedTreeData)!=null?h:[])},children:"\u53D6\u6D88\u7F16\u8F91"}),n(we,{type:"primary",ghost:!0,loading:K,onClick:()=>b(),children:"\u4FDD\u5B58"})]}):n(we,{type:"primary",ghost:!0,onClick:()=>{var h,D;i(!0),a((h=s==null?void 0:s.selectedMenuIds)!=null?h:[]),R((D=s==null?void 0:s.treeData)!=null?D:[])},children:"\u7F16\u8F91\u6743\u9650"})})]}),n("div",{className:"h-[390px] overflow-y-auto",children:y.length>0?n($t,{blockNode:!0,showLine:{showLeafIcon:!1},checkable:o,checkStrictly:!0,fieldNames:Ia,checkedKeys:r,treeData:y,expandedKeys:l,onExpand:h=>v(h),onCheck:h=>{a(h.checked)}}):n(tt,{description:"\u6682\u672A\u5206\u914D\u6743\u9650"})})]})},ka=()=>{const[e,t]=m.exports.useState([]),[r]=Pt.useForm(),a=Ae(),o=$e(),{roleId:i,visible:l}=it(),{data:v,loading:y,refresh:R}=Ze(()=>wa({roleId:i}),{ready:l&&i>0,refreshDeps:[i],onSuccess:()=>{t([])}}),{mutateAsync:f}=et(async c=>{var d;await Sa({roleId:i,menuIds:(d=v==null?void 0:v.menuIds)!=null?d:[],roleKey:v.roleKey,roleName:v.roleName,roleSort:v.roleSort,status:v.status,...c})},{onSuccess:()=>{R(),o==null||o.reload(),Ne.success("\u4FDD\u5B58\u6210\u529F")}}),u=a.canEditSysRole&&v?{form:r,editableKeys:e,onChange:(c,d)=>{t(c),c.length===1&&!Array.isArray(d)&&r.setFieldsValue({[c[0]]:d[c[0]]})},onSave:async(c,d)=>{await f({[c]:d[c]})}}:void 0;return l?_(We,{spinning:y,children:[n(Qe,{column:2,columns:[fa,Bt],dataSource:v}),n(Ve,{}),n(Qe,{column:2,columns:[Lt,ha,ma,jt,va],dataSource:v,editable:u}),n(Ve,{}),n(Na,{roleId:i,handleEdit:c=>f(c)})]}):n(tt,{description:"\u70B9\u51FB\u9009\u62E9\u5DE6\u4FA7\u89D2\u8272\u67E5\u770B\u8BE6\u60C5"})},Ta=()=>{const e=xa(),t=ya(),{onClick:r,rowSelection:a,selectedRows:o}=pa("roleId","radio");return m.exports.useEffect(()=>{o.length===1&&t({roleId:o[0].roleId,roleName:o[0].roleName,visible:!0})},[o]),n(ua,{ghost:!0,rowKey:"roleId",actionRef:e,metas:{title:{dataIndex:"roleName"},subTitle:{dataIndex:"status",render:i=>i===Xe.ENABLE?n(qe,{color:"success",children:"\u542F\u7528\u4E2D"}):n(qe,{color:"error",children:"\u5DF2\u7981\u7528"})}},tableAlertRender:!1,onRow:i=>({onClick:()=>r(i)}),rowSelection:a,pagination:{pageSize:10},request:(...i)=>Ra(kt(...i))})},Za=()=>n(lt,{children:_(Ee,{ghost:!0,gutter:24,children:[n(Ee,{title:"\u89D2\u8272\u5217\u8868",colSpan:"400px",extra:n(Ea,{}),children:n(Ta,{})}),n(Ee,{title:"\u89D2\u8272\u8BE6\u60C5",extra:n(Pa,{}),children:n(ka,{})})]})});export{Za as default};
