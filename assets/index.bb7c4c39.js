import{aO as Fe,z as ie,_ as Q,r as B,a as f,aF as Me,n as _,p as A,g as p,d as K,h as z,j as n,F as se,a1 as O,$ as Ce,cO as be,v as we,cP as pe,ab as Te,ad as Ae,ax as Pe,bE as Ke,T as qe,a5 as He,S as P,aQ as Ge,az as H,l as ce,b as le,C as Ve,bX as We,b1 as Ee,a4 as oe,c2 as Qe,b2 as De,bV as _e,aZ as ee,a3 as Ue,aU as Xe}from"./index.d320e779.js";import{r as te,d as Ze,a as Je,g as ae,I as Ye}from"./index.59e5cccc.js";import{u as de,E as et}from"./index.8510759f.js";/* empty css              */import"./index.88892d95.js";function tt(a){var e=a.data,t=a.row;return f(f({},e),t)}function at(a){var e=a.type||"single",t=Fe(),r=ie([],{value:a.editableKeys,onChange:a.onChange?function(u){var y;a==null||(y=a.onChange)===null||y===void 0||y.call(a,u,a.dataSource)}:void 0}),i=Q(r,2),l=i[0],s=i[1],d=B.exports.useMemo(function(){var u=e==="single"?l==null?void 0:l.slice(0,1):l;return new Set(u)},[(l||[]).join(","),e]),o=B.exports.useCallback(function(u){return!!(l!=null&&l.includes(te(u)))},[(l||[]).join(",")]),h=function(y){return d.size>0&&e==="single"?(Me.warn(a.onlyOneLineEditorAlertMessage||t.getMessage("editableTable.onlyOneLineEditor","\u53EA\u80FD\u540C\u65F6\u7F16\u8F91\u4E00\u884C")),!1):(d.add(te(y)),s(Array.from(d)),!0)},v=function(y){return d.delete(te(y)),s(Array.from(d)),!0},k=function(){var u=_(A().mark(function y(E,m,I,x){var $,N;return A().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,a==null||($=a.onCancel)===null||$===void 0?void 0:$.call(a,E,m,I,x);case 2:if(N=c.sent,N!==!1){c.next=5;break}return c.abrupt("return",!1);case 5:return c.abrupt("return",!0);case 6:case"end":return c.stop()}},y)}));return function(E,m,I,x){return u.apply(this,arguments)}}(),w=function(){var u=_(A().mark(function y(E,m,I){var x,$,N;return A().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,a==null||(x=a.onSave)===null||x===void 0?void 0:x.call(a,E,m,I);case 2:if($=c.sent,$!==!1){c.next=5;break}return c.abrupt("return",!1);case 5:return v(E),N={data:a.dataSource,row:m,key:E,childrenColumnName:a.childrenColumnName||"children"},a.setDataSource(tt(N)),c.abrupt("return",!0);case 9:case"end":return c.stop()}},y)}));return function(E,m,I){return u.apply(this,arguments)}}(),T=t.getMessage("editableTable.action.save","\u4FDD\u5B58"),g=t.getMessage("editableTable.action.delete","\u5220\u9664"),S=t.getMessage("editableTable.action.cancel","\u53D6\u6D88"),b=B.exports.useCallback(function(u,y){var E=f({recordKey:u,cancelEditable:v,onCancel:k,onSave:w,editableKeys:l,setEditableRowKeys:s,saveText:T,cancelText:S,deleteText:g,deletePopconfirmMessage:"".concat(t.getMessage("deleteThisLine","\u5220\u9664\u6B64\u884C"),"?"),editorType:"Map"},y),m=Ze(a.dataSource,E);return a.actionRender?a.actionRender(a.dataSource,E,{save:m[0],delete:m[1],cancel:m[2]}):m},[l&&l.join(","),a.dataSource]);return{editableKeys:l,setEditableRowKeys:s,isEditable:o,actionRender:b,startEditable:h,cancelEditable:v}}var rt=function(e){var t=e.children;return t};const nt=rt;function W(a){return a!=null}var it=function(e){var t=e.itemPrefixCls,r=e.component,i=e.span,l=e.className,s=e.style,d=e.labelStyle,o=e.contentStyle,h=e.bordered,v=e.label,k=e.content,w=e.colon,T=r;if(h){var g;return p(T,{className:K((g={},z(g,"".concat(t,"-item-label"),W(v)),z(g,"".concat(t,"-item-content"),W(k)),g),l),style:s,colSpan:i,children:[W(v)&&n("span",{style:d,children:v}),W(k)&&n("span",{style:o,children:k})]})}return n(T,{className:K("".concat(t,"-item"),l),style:s,colSpan:i,children:p("div",{className:"".concat(t,"-item-container"),children:[(v||v===0)&&n("span",{className:K("".concat(t,"-item-label"),z({},"".concat(t,"-item-no-colon"),!w)),style:d,children:v}),(k||k===0)&&n("span",{className:K("".concat(t,"-item-content")),style:o,children:k})]})})};const re=it;function ne(a,e,t){var r=e.colon,i=e.prefixCls,l=e.bordered,s=t.component,d=t.type,o=t.showLabel,h=t.showContent,v=t.labelStyle,k=t.contentStyle;return a.map(function(w,T){var g=w.props,S=g.label,b=g.children,u=g.prefixCls,y=u===void 0?i:u,E=g.className,m=g.style,I=g.labelStyle,x=g.contentStyle,$=g.span,N=$===void 0?1:$,R=w.key;return typeof s=="string"?n(re,{className:E,style:m,labelStyle:O(O({},v),I),contentStyle:O(O({},k),x),span:N,colon:r,component:s,itemPrefixCls:y,bordered:l,label:o?S:null,content:h?b:null},"".concat(d,"-").concat(R||T)):[n(re,{className:E,style:O(O(O({},v),m),I),span:1,colon:r,component:s[0],itemPrefixCls:y,bordered:l,label:S},"label-".concat(R||T)),n(re,{className:E,style:O(O(O({},k),m),x),span:N*2-1,component:s[1],itemPrefixCls:y,bordered:l,content:b},"content-".concat(R||T))]})}var lt=function(e){var t=B.exports.useContext(ke),r=e.prefixCls,i=e.vertical,l=e.row,s=e.index,d=e.bordered;return i?p(se,{children:[n("tr",{className:"".concat(r,"-row"),children:ne(l,e,O({component:"th",type:"label",showLabel:!0},t))},"label-".concat(s)),n("tr",{className:"".concat(r,"-row"),children:ne(l,e,O({component:"td",type:"content",showContent:!0},t))},"content-".concat(s))]}):n("tr",{className:"".concat(r,"-row"),children:ne(l,e,O({component:d?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},t))},s)};const ot=lt;var ke=B.exports.createContext({}),Ie={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function st(a,e){if(typeof a=="number")return a;if(we(a)==="object")for(var t=0;t<pe.length;t++){var r=pe[t];if(e[r]&&a[r]!==void 0)return a[r]||Ie[r]}return 3}function xe(a,e,t){var r=a;return(e===void 0||e>t)&&(r=Ae(a,{span:t})),r}function ct(a,e){var t=Te(a).filter(function(s){return s}),r=[],i=[],l=e;return t.forEach(function(s,d){var o,h=(o=s.props)===null||o===void 0?void 0:o.span,v=h||1;if(d===t.length-1){i.push(xe(s,h,l)),r.push(i);return}v<l?(l-=v,i.push(s)):(i.push(xe(s,v,l)),r.push(i),l=e,i=[])}),r}function U(a){var e,t=a.prefixCls,r=a.title,i=a.extra,l=a.column,s=l===void 0?Ie:l,d=a.colon,o=d===void 0?!0:d,h=a.bordered,v=a.layout,k=a.children,w=a.className,T=a.style,g=a.size,S=a.labelStyle,b=a.contentStyle,u=B.exports.useContext(Ce),y=u.getPrefixCls,E=u.direction,m=y("descriptions",t),I=B.exports.useState({}),x=Q(I,2),$=x[0],N=x[1],R=st(s,$);B.exports.useEffect(function(){var C=be.subscribe(function(D){we(s)==="object"&&N(D)});return function(){be.unsubscribe(C)}},[]);var c=ct(k,R),j=B.exports.useMemo(function(){return{labelStyle:S,contentStyle:b}},[S,b]);return n(ke.Provider,{value:j,children:p("div",{className:K(m,(e={},z(e,"".concat(m,"-").concat(g),g&&g!=="default"),z(e,"".concat(m,"-bordered"),!!h),z(e,"".concat(m,"-rtl"),E==="rtl"),e),w),style:T,children:[(r||i)&&p("div",{className:"".concat(m,"-header"),children:[r&&n("div",{className:"".concat(m,"-title"),children:r}),i&&n("div",{className:"".concat(m,"-extra"),children:i})]}),n("div",{className:"".concat(m,"-view"),children:n("table",{children:n("tbody",{children:c.map(function(C,D){return n(ot,{index:D,colon:o,prefixCls:m,vertical:v==="vertical",bordered:h,row:C},D)})})})})]})})}U.Item=nt;var dt=globalThis&&globalThis.__rest||function(a,e){var t={};for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&e.indexOf(r)<0&&(t[r]=a[r]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(a);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(a,r[i])&&(t[r[i]]=a[r[i]]);return t},ut=function(e){var t=e.prefixCls,r=e.className,i=e.hoverable,l=i===void 0?!0:i,s=dt(e,["prefixCls","className","hoverable"]);return n(Pe,{children:function(d){var o=d.getPrefixCls,h=o("card",t),v=K("".concat(h,"-grid"),r,z({},"".concat(h,"-grid-hoverable"),l));return n("div",{...s,className:v})}})};const $e=ut;var vt=globalThis&&globalThis.__rest||function(a,e){var t={};for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&e.indexOf(r)<0&&(t[r]=a[r]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(a);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(a,r[i])&&(t[r[i]]=a[r[i]]);return t};function ft(a){var e=a.map(function(t,r){return n("li",{style:{width:"".concat(100/a.length,"%")},children:n("span",{children:t})},"action-".concat(r))});return e}var ht=B.exports.forwardRef(function(a,e){var t,r,i=B.exports.useContext(Ce),l=i.getPrefixCls,s=i.direction,d=B.exports.useContext(Ke),o=function(M){var q;(q=a.onTabChange)===null||q===void 0||q.call(a,M)},h=function(){var M;return B.exports.Children.forEach(a.children,function(q){q&&q.type&&q.type===$e&&(M=!0)}),M},v=a.prefixCls,k=a.className,w=a.extra,T=a.headStyle,g=T===void 0?{}:T,S=a.bodyStyle,b=S===void 0?{}:S,u=a.title,y=a.loading,E=a.bordered,m=E===void 0?!0:E,I=a.size,x=a.type,$=a.cover,N=a.actions,R=a.tabList,c=a.children,j=a.activeTabKey,C=a.defaultActiveTabKey,D=a.tabBarExtraContent,X=a.hoverable,V=a.tabProps,Z=V===void 0?{}:V,J=vt(a,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),L=l("card",v),Y=n(P,{loading:!0,active:!0,paragraph:{rows:4},title:!1,children:c}),he=j!==void 0,Re=O(O({},Z),(t={},z(t,he?"activeKey":"defaultActiveKey",he?j:C),z(t,"tabBarExtraContent",D),t)),me,ye=R&&R.length?n(qe,{size:"large",...Re,className:"".concat(L,"-head-tabs"),onChange:o,items:R.map(function(G){var M;return{label:G.tab,key:G.key,disabled:(M=G.disabled)!==null&&M!==void 0?M:!1}})}):null;(u||w||ye)&&(me=p("div",{className:"".concat(L,"-head"),style:g,children:[p("div",{className:"".concat(L,"-head-wrapper"),children:[u&&n("div",{className:"".concat(L,"-head-title"),children:u}),w&&n("div",{className:"".concat(L,"-extra"),children:w})]}),ye]}));var Le=$?n("div",{className:"".concat(L,"-cover"),children:$}):null,ze=n("div",{className:"".concat(L,"-body"),style:b,children:y?Y:c}),Be=N&&N.length?n("ul",{className:"".concat(L,"-actions"),children:ft(N)}):null,Oe=He(J,["onTabChange"]),ge=I||d,je=K(L,(r={},z(r,"".concat(L,"-loading"),y),z(r,"".concat(L,"-bordered"),m),z(r,"".concat(L,"-hoverable"),X),z(r,"".concat(L,"-contain-grid"),h()),z(r,"".concat(L,"-contain-tabs"),R&&R.length),z(r,"".concat(L,"-").concat(ge),ge),z(r,"".concat(L,"-type-").concat(x),!!x),z(r,"".concat(L,"-rtl"),s==="rtl"),r),k);return p("div",{ref:e,...Oe,className:je,children:[me,Le,ze,Be]})});const mt=ht;var yt=globalThis&&globalThis.__rest||function(a,e){var t={};for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&e.indexOf(r)<0&&(t[r]=a[r]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(a);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(a,r[i])&&(t[r[i]]=a[r[i]]);return t},gt=function(e){return n(Pe,{children:function(t){var r=t.getPrefixCls,i=e.prefixCls,l=e.className,s=e.avatar,d=e.title,o=e.description,h=yt(e,["prefixCls","className","avatar","title","description"]),v=r("card",i),k=K("".concat(v,"-meta"),l),w=s?n("div",{className:"".concat(v,"-meta-avatar"),children:s}):null,T=d?n("div",{className:"".concat(v,"-meta-title"),children:d}):null,g=o?n("div",{className:"".concat(v,"-meta-description"),children:o}):null,S=T||g?p("div",{className:"".concat(v,"-meta-detail"),children:[T,g]}):null;return p("div",{...h,className:k,children:[w,S]})}})};const bt=gt;var ue=mt;ue.Grid=$e;ue.Meta=bt;const F=ue;var ve=function(e){var t=e.padding;return n("div",{style:{padding:t||"0 24px"},children:n(Ge,{style:{margin:0}})})},pt={xs:2,sm:2,md:4,lg:4,xl:6,xxl:6},xt=function(e){var t=e.size,r=e.active,i=de(),l=t===void 0?pt[i]||6:t,s=function(o){return o===0?0:l>2?42:16};return n(F,{bordered:!1,style:{marginBottom:16},children:n("div",{style:{width:"100%",justifyContent:"space-between",display:"flex"},children:new Array(l).fill(null).map(function(d,o){return p("div",{style:{borderLeft:l>2&&o===1?"1px solid rgba(0,0,0,0.06)":void 0,paddingLeft:s(o),flex:1,marginRight:o===0?16:0},children:[n(P,{active:r,paragraph:!1,title:{width:100,style:{marginTop:0}}}),n(P.Button,{active:r,style:{height:48}})]},o)})})})},St=function(e){var t=e.active;return p(se,{children:[n(F,{bordered:!1,style:{borderRadius:0},bodyStyle:{padding:24},children:p("div",{style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[n("div",{style:{maxWidth:"100%",flex:1},children:n(P,{active:t,title:{width:100,style:{marginTop:0}},paragraph:{rows:1,style:{margin:0}}})}),n(P.Button,{active:t,size:"small",style:{width:165,marginTop:12}})]})}),n(ve,{})]})},Ct=function(e){var t=e.size,r=e.active,i=r===void 0?!0:r,l=e.actionButton;return p(F,{bordered:!1,bodyStyle:{padding:0},children:[new Array(t).fill(null).map(function(s,d){return n(St,{active:!!i},d)}),l!==!1&&n(F,{bordered:!1,style:{borderTopRightRadius:0,borderTopLeftRadius:0},bodyStyle:{display:"flex",alignItems:"center",justifyContent:"center"},children:n(P.Button,{style:{width:102},active:i,size:"small"})})]})},fe=function(e){var t=e.active;return p("div",{style:{marginBottom:16},children:[n(P,{paragraph:!1,title:{width:185}}),n(P.Button,{active:t,size:"small"})]})},wt=function(e){var t=e.active;return n(F,{bordered:!1,style:{borderBottomRightRadius:0,borderBottomLeftRadius:0},bodyStyle:{paddingBottom:8},children:p(H,{style:{width:"100%",justifyContent:"space-between"},children:[n(P.Button,{active:t,style:{width:200},size:"small"}),p(H,{children:[n(P.Button,{active:t,size:"small",style:{width:120}}),n(P.Button,{active:t,size:"small",style:{width:80}})]})]})})},Tt=function(e){var t=e.active,r=t===void 0?!0:t,i=e.statistic,l=e.actionButton,s=e.toolbar,d=e.pageHeader,o=e.list,h=o===void 0?5:o;return p("div",{style:{width:"100%"},children:[d!==!1&&n(fe,{active:r}),i!==!1&&n(xt,{size:i,active:r}),(s!==!1||h!==!1)&&p(F,{bordered:!1,bodyStyle:{padding:0},children:[s!==!1&&n(wt,{active:r}),h!==!1&&n(Ct,{size:h,active:r,actionButton:l})]})]})};const Pt=Tt;var Ne={xs:1,sm:2,md:3,lg:3,xl:3,xxl:4},Et=function(e){var t=e.active;return p("div",{style:{marginTop:32},children:[n(P.Button,{active:t,size:"small",style:{width:100,marginBottom:16}}),p("div",{style:{width:"100%",justifyContent:"space-between",display:"flex"},children:[p("div",{style:{flex:1,marginRight:24,maxWidth:300},children:[n(P,{active:t,paragraph:!1,title:{style:{marginTop:0}}}),n(P,{active:t,paragraph:!1,title:{style:{marginTop:8}}}),n(P,{active:t,paragraph:!1,title:{style:{marginTop:8}}})]}),n("div",{style:{flex:1,alignItems:"center",justifyContent:"center"},children:p("div",{style:{maxWidth:300,margin:"auto"},children:[n(P,{active:t,paragraph:!1,title:{style:{marginTop:0}}}),n(P,{active:t,paragraph:!1,title:{style:{marginTop:8}}})]})})]})]})},Dt=function(e){var t=e.size,r=e.active,i=de(),l=t===void 0?Ne[i]||3:t;return n("div",{style:{width:"100%",justifyContent:"space-between",display:"flex"},children:new Array(l).fill(null).map(function(s,d){return p("div",{style:{flex:1,paddingLeft:d===0?0:24,paddingRight:d===l-1?0:24},children:[n(P,{active:r,paragraph:!1,title:{style:{marginTop:0}}}),n(P,{active:r,paragraph:!1,title:{style:{marginTop:8}}}),n(P,{active:r,paragraph:!1,title:{style:{marginTop:8}}})]},d)})})},Se=function(e){var t=e.active,r=e.header,i=r===void 0?!1:r,l=de(),s=Ne[l]||3;return p(se,{children:[p("div",{style:{display:"flex",background:i?"rgba(0,0,0,0.02)":"none",padding:"24px 8px"},children:[new Array(s).fill(null).map(function(d,o){return n("div",{style:{flex:1,paddingLeft:i&&o===0?0:20,paddingRight:32},children:n(P,{active:t,paragraph:!1,title:{style:{margin:0,height:24,width:i?"75px":"100%"}}})},o)}),n("div",{style:{flex:3,paddingLeft:32},children:n(P,{active:t,paragraph:!1,title:{style:{margin:0,height:24,width:i?"75px":"100%"}}})})]}),n(ve,{padding:"0px 0px"})]})},kt=function(e){var t=e.active,r=e.size,i=r===void 0?4:r;return p(F,{bordered:!1,children:[n(P.Button,{active:t,size:"small",style:{width:100,marginBottom:16}}),n(Se,{header:!0,active:t}),new Array(i).fill(null).map(function(l,s){return n(Se,{active:t},s)}),n("div",{style:{display:"flex",justifyContent:"flex-end",paddingTop:16},children:n(P,{active:t,paragraph:!1,title:{style:{margin:0,height:32,float:"right",maxWidth:"630px"}}})})]})},It=function(e){var t=e.active;return p(F,{bordered:!1,style:{borderTopRightRadius:0,borderTopLeftRadius:0},children:[n(P.Button,{active:t,size:"small",style:{width:100,marginBottom:16}}),n(Dt,{active:t}),n(Et,{active:t})]})},$t=function(e){var t=e.active,r=t===void 0?!0:t,i=e.pageHeader,l=e.list;return p("div",{style:{width:"100%"},children:[i!==!1&&n(fe,{active:r}),n(It,{active:r}),l!==!1&&n(ve,{}),l!==!1&&n(kt,{active:r,size:l})]})};const Nt=$t;var Rt=function(e){var t=e.active,r=t===void 0?!0:t,i=e.pageHeader;return p("div",{style:{width:"100%"},children:[i!==!1&&n(fe,{active:r}),n(F,{children:p("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",padding:128},children:[n(P.Avatar,{size:64,style:{marginBottom:32}}),n(P.Button,{active:r,style:{width:214,marginBottom:8}}),n(P.Button,{active:r,style:{width:328},size:"small"}),p(H,{style:{marginTop:24},children:[n(P.Button,{active:r,style:{width:116}}),n(P.Button,{active:r,style:{width:116}})]})]})})]})};const Lt=Rt;var zt=["type"],Bt=function(e){var t=e.type,r=t===void 0?"list":t,i=ce(e,zt);return r==="result"?n(Lt,f({},i)):r==="descriptions"?n(Nt,f({},i)):n(Pt,f({},i))};const Ot=Bt;var jt=function(e,t){var r=t||{},i=r.onRequestError,l=r.effects,s=r.manual,d=r.dataSource,o=r.defaultDataSource,h=r.onDataSourceChange,v=ie(o,{value:d,onChange:h}),k=Q(v,2),w=k[0],T=k[1],g=ie(t==null?void 0:t.loading,{value:t==null?void 0:t.loading,onChange:t==null?void 0:t.onLoadingChange}),S=Q(g,2),b=S[0],u=S[1],y=function(I){T(I),u(!1)},E=function(){var m=_(A().mark(function I(){var x,$,N;return A().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(!b){c.next=2;break}return c.abrupt("return");case 2:return u(!0),c.prev=3,c.next=6,e();case 6:if(c.t0=c.sent,c.t0){c.next=9;break}c.t0={};case 9:x=c.t0,$=x.data,N=x.success,N!==!1&&y($),c.next=23;break;case 15:if(c.prev=15,c.t1=c.catch(3),i!==void 0){c.next=21;break}throw new Error(c.t1);case 21:i(c.t1);case 22:u(!1);case 23:case"end":return c.stop()}},I,null,[[3,15]])}));return function(){return m.apply(this,arguments)}}();return B.exports.useEffect(function(){s||E()},[].concat(le(l||[]),[s])),{dataSource:w,setDataSource:T,loading:b,reload:function(){return E()}}};const Ft=jt;var Mt=["valueEnum","render","renderText","mode","plain","dataIndex","request","params","editable"],At=["request","columns","params","dataSource","onDataSourceChange","formProps","editable","loading","onLoadingChange","actionRef","onRequestError"],Kt=function(e,t){var r=e.dataIndex;if(r){var i=Array.isArray(r)?_e(t,r):t[r];if(i!==void 0||i!==null)return i}return e.children},qt=function(e){var t=e.valueEnum,r=e.action,i=e.index,l=e.text,s=e.entity,d=e.mode,o=e.render,h=e.editableUtils,v=e.valueType,k=e.plain,w=e.dataIndex,T=e.request,g=e.renderFormItem,S=e.params,b=De.useFormInstance(),u={text:l,valueEnum:t,mode:d||"read",proFieldProps:{render:o?function(){return o==null?void 0:o(l,s,i,r,f(f({},e),{},{type:"descriptions"}))}:void 0},ignoreFormItem:!0,valueType:v,request:T,params:S,plain:k};if(d==="read"||!d||v==="option"){var y=ae(e.fieldProps,void 0,f(f({},e),{},{rowKey:w,isEditable:!1}));return n(ee,f(f({name:w},u),{},{fieldProps:y}))}var E=function(){var I,x=ae(e.formItemProps,b,f(f({},e),{},{rowKey:w,isEditable:!0})),$=ae(e.fieldProps,b,f(f({},e),{},{rowKey:w,isEditable:!0})),N=g?g==null?void 0:g(f(f({},e),{},{type:"descriptions"}),{isEditable:!0,recordKey:w,record:b.getFieldValue([w].flat(1)),defaultRender:function(){return n(ee,f(f({},u),{},{fieldProps:$}))},type:"descriptions"},b):void 0;return p(H,{children:[n(Ye,f(f({name:w},x),{},{style:f({margin:0},(x==null?void 0:x.style)||{}),initialValue:l||(x==null?void 0:x.initialValue),children:N||n(ee,f(f({},u),{},{proFieldProps:f({},u.proFieldProps),fieldProps:$}))})),h==null||(I=h.actionRender)===null||I===void 0?void 0:I.call(h,w||i,{cancelText:n(Ue,{}),saveText:n(Xe,{}),deleteText:!1})]})};return n("div",{style:{marginTop:-5,marginBottom:-5,marginLeft:0,marginRight:0},children:E()})},Ht=function(e,t,r,i){var l,s=[],d=e==null||(l=e.map)===null||l===void 0?void 0:l.call(e,function(o,h){var v,k;if(oe.isValidElement(o))return o;o.valueEnum,o.render;var w=o.renderText,T=o.mode;o.plain;var g=o.dataIndex;o.request,o.params;var S=o.editable,b=ce(o,Mt),u=(v=Kt(o,t))!==null&&v!==void 0?v:b.children,y=w?w(u,t,h,r):u,E=typeof b.title=="function"?b.title(o,"descriptions",null):b.title,m=typeof b.valueType=="function"?b.valueType(t||{},"descriptions"):b.valueType,I=i==null?void 0:i.isEditable(g||h),x=T||I?"edit":"read",$=i&&x==="read"&&S!==!1&&(S==null?void 0:S(y,t,h))!==!1,N=$?H:oe.Fragment,R=x==="edit"?y:Je(y,o,y),c=B.exports.createElement(U.Item,f(f({},b),{},{key:b.key||((k=b.label)===null||k===void 0?void 0:k.toString())||h,label:(E||b.label||b.tooltip||b.tip)&&n(Ee,{label:E||b.label,tooltip:b.tooltip||b.tip,ellipsis:o.ellipsis})}),p(N,{children:[n(qt,f(f({},o),{},{dataIndex:o.dataIndex||h,mode:x,text:R,valueType:m,entity:t,index:h,action:r,editableUtils:i})),$&&m!=="option"&&n(Qe,{onClick:function(){i==null||i.startEditable(g||h)}})]}));return m==="option"?(s.push(c),null):c}).filter(function(o){return o});return{options:s!=null&&s.length?s:null,children:d}},Gt=function(e){return n(U.Item,f(f({},e),{},{children:e.children}))},Vt=function(e){return e.children},Wt=function(e){var t,r=e.request,i=e.columns,l=e.params,s=l===void 0?{}:l,d=e.dataSource,o=e.onDataSourceChange,h=e.formProps,v=e.editable,k=e.loading,w=e.onLoadingChange,T=e.actionRef,g=e.onRequestError,S=ce(e,At),b=B.exports.useContext(Ve.ConfigContext),u=Ft(_(A().mark(function c(){var j;return A().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:if(!r){D.next=6;break}return D.next=3,r(s);case 3:D.t0=D.sent,D.next=7;break;case 6:D.t0={data:{}};case 7:return j=D.t0,D.abrupt("return",j);case 9:case"end":return D.stop()}},c)})),{onRequestError:g,effects:[We(s)],manual:!r,dataSource:d,loading:k,onLoadingChange:w,onDataSourceChange:o}),y=at(f(f({},e.editable),{},{childrenColumnName:void 0,dataSource:u.dataSource,setDataSource:u.setDataSource}));if(B.exports.useEffect(function(){T&&(T.current=f({reload:u.reload},y))},[u,T,y]),u.loading||u.loading===void 0&&r)return n(Ot,{type:"descriptions",list:!1,pageHeader:!1});var E=function(){var j=Te(e.children).filter(Boolean).map(function(C){if(!oe.isValidElement(C))return C;var D=C==null?void 0:C.props,X=D.valueEnum,V=D.valueType,Z=D.dataIndex,J=D.ellipsis,L=D.copyable,Y=D.request;return!V&&!X&&!Z&&!Y&&!J&&!L?C:f(f({},C==null?void 0:C.props),{},{entity:d})});return[].concat(le(i||[]),le(j)).filter(function(C){return!C||(C==null?void 0:C.valueType)&&["index","indexBorder"].includes(C==null?void 0:C.valueType)?!1:!(C!=null&&C.hideInDescriptions)}).sort(function(C,D){return D.order||C.order?(D.order||0)-(C.order||0):(D.index||0)-(C.index||0)})},m=Ht(E(),u.dataSource||{},(T==null?void 0:T.current)||u,v?y:void 0),I=m.options,x=m.children,$=v?De:Vt,N=null;(S.title||S.tooltip||S.tip)&&(N=n(Ee,{label:S.title,tooltip:S.tooltip||S.tip}));var R=b.getPrefixCls("pro-descriptions");return n(et,{children:n($,f(f({form:(t=e.editable)===null||t===void 0?void 0:t.form,component:!1,submitter:!1},h),{},{onFinish:void 0,children:n(U,f(f({className:R},S),{},{extra:S.extra?p(H,{children:[I,S.extra]}):I,title:N,children:x}))}),"form")})};Wt.Item=Gt;export{Wt as P};
