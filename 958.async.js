"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[958],{42445:function(Vt,Ie,s){s.d(Ie,{vY:function(){return xe}});var _=s(34451),M=s(67948),W=s(82173),Qt=s(68591),we=s(28856),Ut=s(92369),$=s(23080),V=s(23151),me=s(30251),e=s(50959),Re=s(19803),F=s.n(Re),fe=s(87939),Q=s(58380),U=s(98442),D=s(45443);function X(a){return a!=null}var Le=function(t){var n=t.itemPrefixCls,r=t.component,l=t.span,o=t.className,c=t.style,m=t.labelStyle,i=t.contentStyle,f=t.bordered,g=t.label,T=t.content,C=t.colon,x=r;if(f){var h;return e.createElement(x,{className:F()((h={},(0,$.Z)(h,"".concat(n,"-item-label"),X(g)),(0,$.Z)(h,"".concat(n,"-item-content"),X(T)),h),o),style:c,colSpan:l},X(g)&&e.createElement("span",{style:m},g),X(T)&&e.createElement("span",{style:i},T))}return e.createElement(x,{className:F()("".concat(n,"-item"),o),style:c,colSpan:l},e.createElement("div",{className:"".concat(n,"-item-container")},(g||g===0)&&e.createElement("span",{className:F()("".concat(n,"-item-label"),(0,$.Z)({},"".concat(n,"-item-no-colon"),!C)),style:m},g),(T||T===0)&&e.createElement("span",{className:F()("".concat(n,"-item-content")),style:i},T)))},ee=Le;function te(a,t,n){var r=t.colon,l=t.prefixCls,o=t.bordered,c=n.component,m=n.type,i=n.showLabel,f=n.showContent,g=n.labelStyle,T=n.contentStyle;return a.map(function(C,x){var h=C.props,P=h.label,L=h.children,y=h.prefixCls,E=y===void 0?l:y,S=h.className,u=h.style,v=h.labelStyle,N=h.contentStyle,I=h.span,w=I===void 0?1:I,z=C.key;return typeof c=="string"?e.createElement(ee,{key:"".concat(m,"-").concat(z||x),className:S,style:u,labelStyle:(0,D.Z)((0,D.Z)({},g),v),contentStyle:(0,D.Z)((0,D.Z)({},T),N),span:w,colon:r,component:c,itemPrefixCls:E,bordered:o,label:i?P:null,content:f?L:null}):[e.createElement(ee,{key:"label-".concat(z||x),className:S,style:(0,D.Z)((0,D.Z)((0,D.Z)({},g),u),v),span:1,colon:r,component:c[0],itemPrefixCls:E,bordered:o,label:P}),e.createElement(ee,{key:"content-".concat(z||x),className:S,style:(0,D.Z)((0,D.Z)((0,D.Z)({},T),u),N),span:w*2-1,component:c[1],itemPrefixCls:E,bordered:o,content:L})]})}var ze=function(t){var n=e.useContext(ye),r=t.prefixCls,l=t.vertical,o=t.row,c=t.index,m=t.bordered;return l?e.createElement(e.Fragment,null,e.createElement("tr",{key:"label-".concat(c),className:"".concat(r,"-row")},te(o,t,(0,D.Z)({component:"th",type:"label",showLabel:!0},n))),e.createElement("tr",{key:"content-".concat(c),className:"".concat(r,"-row")},te(o,t,(0,D.Z)({component:"td",type:"content",showContent:!0},n)))):e.createElement("tr",{key:c,className:"".concat(r,"-row")},te(o,t,(0,D.Z)({component:m?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},n)))},Be=ze,$e=function(t){var n=t.children;return n},Oe=$e,je=s(65786),ye=e.createContext({}),ge={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function Me(a,t){if(typeof a=="number")return a;if((0,me.Z)(a)==="object")for(var n=0;n<Q.c4.length;n++){var r=Q.c4[n];if(t[r]&&a[r]!==void 0)return a[r]||ge[r]}return 3}function Ee(a,t,n){var r=a;return(t===void 0||t>n)&&(r=(0,je.Tm)(a,{span:n})),r}function Fe(a,t){var n=(0,fe.Z)(a).filter(function(c){return c}),r=[],l=[],o=t;return n.forEach(function(c,m){var i,f=(i=c.props)===null||i===void 0?void 0:i.span,g=f||1;if(m===n.length-1){l.push(Ee(c,f,o)),r.push(l);return}g<o?(o-=g,l.push(c)):(l.push(Ee(c,g,o)),r.push(l),o=t,l=[])}),r}function he(a){var t,n=a.prefixCls,r=a.title,l=a.extra,o=a.column,c=o===void 0?ge:o,m=a.colon,i=m===void 0?!0:m,f=a.bordered,g=a.layout,T=a.children,C=a.className,x=a.style,h=a.size,P=a.labelStyle,L=a.contentStyle,y=e.useContext(U.E_),E=y.getPrefixCls,S=y.direction,u=E("descriptions",n),v=e.useState({}),N=(0,V.Z)(v,2),I=N[0],w=N[1],z=Me(c,I);e.useEffect(function(){var b=Q.ZP.subscribe(function(p){(0,me.Z)(c)==="object"&&w(p)});return function(){Q.ZP.unsubscribe(b)}},[]);var d=Fe(T,z),O=e.useMemo(function(){return{labelStyle:P,contentStyle:L}},[P,L]);return e.createElement(ye.Provider,{value:O},e.createElement("div",{className:F()(u,(t={},(0,$.Z)(t,"".concat(u,"-").concat(h),h&&h!=="default"),(0,$.Z)(t,"".concat(u,"-bordered"),!!f),(0,$.Z)(t,"".concat(u,"-rtl"),S==="rtl"),t),C),style:x},(r||l)&&e.createElement("div",{className:"".concat(u,"-header")},r&&e.createElement("div",{className:"".concat(u,"-title")},r),l&&e.createElement("div",{className:"".concat(u,"-extra")},l)),e.createElement("div",{className:"".concat(u,"-view")},e.createElement("table",null,e.createElement("tbody",null,d.map(function(b,p){return e.createElement(Be,{key:p,index:p,colon:i,prefixCls:u,vertical:g==="vertical",bordered:f,row:b})}))))))}he.Item=Oe;var ae=he,ne=s(29547),Xt=s(88843),ke=s(43114),Yt=s(30176),K=s(4091),R=s(44367),Ae=s(24530),Ke=s(88021),He=s(17073),Ge=s(33061),re=s(81416),Jt=s(58984),qt=s(3725),We=function(a,t){var n={};for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&t.indexOf(r)<0&&(n[r]=a[r]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(a);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(a,r[l])&&(n[r[l]]=a[r[l]]);return n},Ve=function(t){var n=t.prefixCls,r=t.className,l=t.hoverable,o=l===void 0?!0:l,c=We(t,["prefixCls","className","hoverable"]);return e.createElement(U.C,null,function(m){var i=m.getPrefixCls,f=i("card",n),g=F()("".concat(f,"-grid"),r,(0,$.Z)({},"".concat(f,"-grid-hoverable"),o));return e.createElement("div",(0,D.Z)({},c,{className:g}))})},be=Ve,Qe=function(a,t){var n={};for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&t.indexOf(r)<0&&(n[r]=a[r]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(a);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(a,r[l])&&(n[r[l]]=a[r[l]]);return n},Ue=function(t){return e.createElement(U.C,null,function(n){var r=n.getPrefixCls,l=t.prefixCls,o=t.className,c=t.avatar,m=t.title,i=t.description,f=Qe(t,["prefixCls","className","avatar","title","description"]),g=r("card",l),T=F()("".concat(g,"-meta"),o),C=c?e.createElement("div",{className:"".concat(g,"-meta-avatar")},c):null,x=m?e.createElement("div",{className:"".concat(g,"-meta-title")},m):null,h=i?e.createElement("div",{className:"".concat(g,"-meta-description")},i):null,P=x||h?e.createElement("div",{className:"".concat(g,"-meta-detail")},x,h):null;return e.createElement("div",(0,D.Z)({},f,{className:T}),C,P)})},Xe=Ue,Ye=s(85424),pe=s(77854),Je=s(95335),Z=s(71822),qe=function(a,t){var n={};for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&t.indexOf(r)<0&&(n[r]=a[r]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(a);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(a,r[l])&&(n[r[l]]=a[r[l]]);return n};function _e(a){var t=a.map(function(n,r){return e.createElement("li",{style:{width:"".concat(100/a.length,"%")},key:"action-".concat(r)},e.createElement("span",null,n))});return t}var et=e.forwardRef(function(a,t){var n,r,l=e.useContext(U.E_),o=l.getPrefixCls,c=l.direction,m=e.useContext(Je.Z),i=function(q){var A;(A=a.onTabChange)===null||A===void 0||A.call(a,q)},f=function(){var q;return e.Children.forEach(a.children,function(A){A&&A.type&&A.type===be&&(q=!0)}),q},g=a.prefixCls,T=a.className,C=a.extra,x=a.headStyle,h=x===void 0?{}:x,P=a.bodyStyle,L=P===void 0?{}:P,y=a.title,E=a.loading,S=a.bordered,u=S===void 0?!0:S,v=a.size,N=a.type,I=a.cover,w=a.actions,z=a.tabList,d=a.children,O=a.activeTabKey,b=a.defaultActiveTabKey,p=a.tabBarExtraContent,H=a.hoverable,k=a.tabProps,J=k===void 0?{}:k,ue=qe(a,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),B=o("card",g),ve=e.createElement(Z.Z,{loading:!0,active:!0,paragraph:{rows:4},title:!1},d),Pe=O!==void 0,kt=(0,D.Z)((0,D.Z)({},J),(n={},(0,$.Z)(n,Pe?"activeKey":"defaultActiveKey",Pe?O:b),(0,$.Z)(n,"tabBarExtraContent",p),n)),Te,De=z&&z.length?e.createElement(pe.Z,(0,D.Z)({size:"large"},kt,{className:"".concat(B,"-head-tabs"),onChange:i}),z.map(function(G){return e.createElement(pe.Z.TabPane,{tab:G.tab,disabled:G.disabled,key:G.key})})):null;(y||C||De)&&(Te=e.createElement("div",{className:"".concat(B,"-head"),style:h},e.createElement("div",{className:"".concat(B,"-head-wrapper")},y&&e.createElement("div",{className:"".concat(B,"-head-title")},y),C&&e.createElement("div",{className:"".concat(B,"-extra")},C)),De));var At=I?e.createElement("div",{className:"".concat(B,"-cover")},I):null,Kt=e.createElement("div",{className:"".concat(B,"-body"),style:L},E?ve:d),Ht=w&&w.length?e.createElement("ul",{className:"".concat(B,"-actions")},_e(w)):null,Gt=(0,Ye.Z)(ue,["onTabChange"]),Ne=v||m,Wt=F()(B,(r={},(0,$.Z)(r,"".concat(B,"-loading"),E),(0,$.Z)(r,"".concat(B,"-bordered"),u),(0,$.Z)(r,"".concat(B,"-hoverable"),H),(0,$.Z)(r,"".concat(B,"-contain-grid"),f()),(0,$.Z)(r,"".concat(B,"-contain-tabs"),z&&z.length),(0,$.Z)(r,"".concat(B,"-").concat(Ne),Ne),(0,$.Z)(r,"".concat(B,"-type-").concat(N),!!N),(0,$.Z)(r,"".concat(B,"-rtl"),c==="rtl"),r),T);return e.createElement("div",(0,D.Z)({ref:t},Gt,{className:Wt}),Te,At,Kt,Ht)}),tt=et,le=tt;le.Grid=be,le.Meta=Xe;var j=le,ie=s(59171),_t=s(33937),at=s(25384),oe=function(t){var n=t.padding;return e.createElement("div",{style:{padding:n||"0 24px"}},e.createElement(at.Z,{style:{margin:0}}))},nt={xs:2,sm:2,md:4,lg:4,xl:6,xxl:6},rt=function(t){var n=t.size,r=t.active,l=(0,ie.ZP)(),o=n===void 0?nt[l]||6:n,c=function(i){return i===0?0:o>2?42:16};return e.createElement(j,{bordered:!1,style:{marginBottom:16}},e.createElement("div",{style:{width:"100%",justifyContent:"space-between",display:"flex"}},new Array(o).fill(null).map(function(m,i){return e.createElement("div",{key:i,style:{borderLeft:o>2&&i===1?"1px solid rgba(0,0,0,0.06)":void 0,paddingLeft:c(i),flex:1,marginRight:i===0?16:0}},e.createElement(Z.Z,{active:r,paragraph:!1,title:{width:100,style:{marginTop:0}}}),e.createElement(Z.Z.Button,{active:r,style:{height:48}}))})))},lt=function(t){var n=t.active;return e.createElement(e.Fragment,null,e.createElement(j,{bordered:!1,style:{borderRadius:0},bodyStyle:{padding:24}},e.createElement("div",{style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"}},e.createElement("div",{style:{maxWidth:"100%",flex:1}},e.createElement(Z.Z,{active:n,title:{width:100,style:{marginTop:0}},paragraph:{rows:1,style:{margin:0}}})),e.createElement(Z.Z.Button,{active:n,size:"small",style:{width:165,marginTop:12}}))),e.createElement(oe,null))},it=function(t){var n=t.size,r=t.active,l=r===void 0?!0:r,o=t.actionButton;return e.createElement(j,{bordered:!1,bodyStyle:{padding:0}},new Array(n).fill(null).map(function(c,m){return e.createElement(lt,{key:m,active:!!l})}),o!==!1&&e.createElement(j,{bordered:!1,style:{borderTopRightRadius:0,borderTopLeftRadius:0},bodyStyle:{display:"flex",alignItems:"center",justifyContent:"center"}},e.createElement(Z.Z.Button,{style:{width:102},active:l,size:"small"})))},ce=function(t){var n=t.active;return e.createElement("div",{style:{marginBottom:16}},e.createElement(Z.Z,{paragraph:!1,title:{width:185}}),e.createElement(Z.Z.Button,{active:n,size:"small"}))},ot=function(t){var n=t.active;return e.createElement(j,{bordered:!1,style:{borderBottomRightRadius:0,borderBottomLeftRadius:0},bodyStyle:{paddingBottom:8}},e.createElement(K.Z,{style:{width:"100%",justifyContent:"space-between"}},e.createElement(Z.Z.Button,{active:n,style:{width:200},size:"small"}),e.createElement(K.Z,null,e.createElement(Z.Z.Button,{active:n,size:"small",style:{width:120}}),e.createElement(Z.Z.Button,{active:n,size:"small",style:{width:80}}))))},ct=function(t){var n=t.active,r=n===void 0?!0:n,l=t.statistic,o=t.actionButton,c=t.toolbar,m=t.pageHeader,i=t.list,f=i===void 0?5:i;return e.createElement("div",{style:{width:"100%"}},m!==!1&&e.createElement(ce,{active:r}),l!==!1&&e.createElement(rt,{size:l,active:r}),(c!==!1||f!==!1)&&e.createElement(j,{bordered:!1,bodyStyle:{padding:0}},c!==!1&&e.createElement(ot,{active:r}),f!==!1&&e.createElement(it,{size:f,active:r,actionButton:o})))},st=ct,Ze={xs:1,sm:2,md:3,lg:3,xl:3,xxl:4},dt=function(t){var n=t.active;return e.createElement("div",{style:{marginTop:32}},e.createElement(Z.Z.Button,{active:n,size:"small",style:{width:100,marginBottom:16}}),e.createElement("div",{style:{width:"100%",justifyContent:"space-between",display:"flex"}},e.createElement("div",{style:{flex:1,marginRight:24,maxWidth:300}},e.createElement(Z.Z,{active:n,paragraph:!1,title:{style:{marginTop:0}}}),e.createElement(Z.Z,{active:n,paragraph:!1,title:{style:{marginTop:8}}}),e.createElement(Z.Z,{active:n,paragraph:!1,title:{style:{marginTop:8}}})),e.createElement("div",{style:{flex:1,alignItems:"center",justifyContent:"center"}},e.createElement("div",{style:{maxWidth:300,margin:"auto"}},e.createElement(Z.Z,{active:n,paragraph:!1,title:{style:{marginTop:0}}}),e.createElement(Z.Z,{active:n,paragraph:!1,title:{style:{marginTop:8}}})))))},ut=function(t){var n=t.size,r=t.active,l=(0,ie.ZP)(),o=n===void 0?Ze[l]||3:n;return e.createElement("div",{style:{width:"100%",justifyContent:"space-between",display:"flex"}},new Array(o).fill(null).map(function(c,m){return e.createElement("div",{key:m,style:{flex:1,paddingLeft:m===0?0:24,paddingRight:m===o-1?0:24}},e.createElement(Z.Z,{active:r,paragraph:!1,title:{style:{marginTop:0}}}),e.createElement(Z.Z,{active:r,paragraph:!1,title:{style:{marginTop:8}}}),e.createElement(Z.Z,{active:r,paragraph:!1,title:{style:{marginTop:8}}}))}))},Ce=function(t){var n=t.active,r=t.header,l=r===void 0?!1:r,o=(0,ie.ZP)(),c=Ze[o]||3;return e.createElement(e.Fragment,null,e.createElement("div",{style:{display:"flex",background:l?"rgba(0,0,0,0.02)":"none",padding:"24px 8px"}},new Array(c).fill(null).map(function(m,i){return e.createElement("div",{key:i,style:{flex:1,paddingLeft:l&&i===0?0:20,paddingRight:32}},e.createElement(Z.Z,{active:n,paragraph:!1,title:{style:{margin:0,height:24,width:l?"75px":"100%"}}}))}),e.createElement("div",{style:{flex:3,paddingLeft:32}},e.createElement(Z.Z,{active:n,paragraph:!1,title:{style:{margin:0,height:24,width:l?"75px":"100%"}}}))),e.createElement(oe,{padding:"0px 0px"}))},vt=function(t){var n=t.active,r=t.size,l=r===void 0?4:r;return e.createElement(j,{bordered:!1},e.createElement(Z.Z.Button,{active:n,size:"small",style:{width:100,marginBottom:16}}),e.createElement(Ce,{header:!0,active:n}),new Array(l).fill(null).map(function(o,c){return e.createElement(Ce,{key:c,active:n})}),e.createElement("div",{style:{display:"flex",justifyContent:"flex-end",paddingTop:16}},e.createElement(Z.Z,{active:n,paragraph:!1,title:{style:{margin:0,height:32,float:"right",maxWidth:"630px"}}})))},mt=function(t){var n=t.active;return e.createElement(j,{bordered:!1,style:{borderTopRightRadius:0,borderTopLeftRadius:0}},e.createElement(Z.Z.Button,{active:n,size:"small",style:{width:100,marginBottom:16}}),e.createElement(ut,{active:n}),e.createElement(dt,{active:n}))},ft=function(t){var n=t.active,r=n===void 0?!0:n,l=t.pageHeader,o=t.list;return e.createElement("div",{style:{width:"100%"}},l!==!1&&e.createElement(ce,{active:r}),e.createElement(mt,{active:r}),o!==!1&&e.createElement(oe,null),o!==!1&&e.createElement(vt,{active:r,size:o}))},yt=ft,gt=function(t){var n=t.active,r=n===void 0?!0:n,l=t.pageHeader;return e.createElement("div",{style:{width:"100%"}},l!==!1&&e.createElement(ce,{active:r}),e.createElement(j,null,e.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",padding:128}},e.createElement(Z.Z.Avatar,{size:64,style:{marginBottom:32}}),e.createElement(Z.Z.Button,{active:r,style:{width:214,marginBottom:8}}),e.createElement(Z.Z.Button,{active:r,style:{width:328},size:"small"}),e.createElement(K.Z,{style:{marginTop:24}},e.createElement(Z.Z.Button,{active:r,style:{width:116}}),e.createElement(Z.Z.Button,{active:r,style:{width:116}})))))},Et=gt,ht=["type"],bt=function(t){var n=t.type,r=n===void 0?"list":n,l=(0,ne.Z)(t,ht);return r==="result"?e.createElement(Et,l):r==="descriptions"?e.createElement(yt,l):e.createElement(st,l)},pt=bt,ea=s(86233),Zt=s(96069),Ct=s(12191),se=s(5620),Y=s(62062);function St(a){var t=a.data,n=a.row;return(0,R.Z)((0,R.Z)({},t),n)}function xt(a){var t=a.type||"single",n=(0,se.Z)([],{value:a.editableKeys,onChange:a.onChange?function(y){var E;a==null||(E=a.onChange)===null||E===void 0||E.call(a,y,a.dataSource)}:void 0}),r=(0,V.Z)(n,2),l=r[0],o=r[1],c=(0,e.useMemo)(function(){var y=t==="single"?l==null?void 0:l.slice(0,1):l;return new Set(y)},[(l||[]).join(","),t]),m=(0,e.useCallback)(function(y){return!!(l!=null&&l.includes((0,Y.sN)(y)))},[(l||[]).join(",")]),i=function(E){return c.size>0&&t==="single"?(Zt.ZP.warn(a.onlyOneLineEditorAlertMessage||"\u53EA\u80FD\u540C\u65F6\u7F16\u8F91\u4E00\u884C"),!1):(c.add((0,Y.sN)(E)),o(Array.from(c)),!0)},f=function(E){return c.delete((0,Y.sN)(E)),o(Array.from(c)),!0},g=function(){var y=(0,W.Z)((0,M.Z)().mark(function E(S,u,v,N){var I,w;return(0,M.Z)().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,a==null||(I=a.onCancel)===null||I===void 0?void 0:I.call(a,S,u,v,N);case 2:if(w=d.sent,w!==!1){d.next=5;break}return d.abrupt("return",!1);case 5:return d.abrupt("return",!0);case 6:case"end":return d.stop()}},E)}));return function(S,u,v,N){return y.apply(this,arguments)}}(),T=function(){var y=(0,W.Z)((0,M.Z)().mark(function E(S,u,v){var N,I,w;return(0,M.Z)().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,a==null||(N=a.onSave)===null||N===void 0?void 0:N.call(a,S,u,v);case 2:if(I=d.sent,I!==!1){d.next=5;break}return d.abrupt("return",!1);case 5:return f(S),w={data:a.dataSource,row:u,key:S,childrenColumnName:a.childrenColumnName||"children"},a.setDataSource(St(w)),d.abrupt("return",!0);case 9:case"end":return d.stop()}},E)}));return function(S,u,v){return y.apply(this,arguments)}}(),C=(0,Ct.YB)(),x=C.getMessage("editableTable.action.save","\u4FDD\u5B58"),h=C.getMessage("editableTable.action.delete","\u5220\u9664"),P=C.getMessage("editableTable.action.cancel","\u53D6\u6D88"),L=(0,e.useCallback)(function(y,E,S){var u=(0,R.Z)({recordKey:y,cancelEditable:f,onCancel:g,onSave:T,editableKeys:l,setEditableRowKeys:o,form:E,saveText:x,cancelText:P,deleteText:h,deletePopconfirmMessage:"\u5220\u9664\u6B64\u884C\uFF1F",editorType:"Map"},S),v=(0,Y.aX)(a.dataSource,u);return a.actionRender?a.actionRender(a.dataSource,u,{save:v[0],delete:v[1],cancel:v[2]}):v},[l&&l.join(","),a.dataSource]);return{editableKeys:l,setEditableRowKeys:o,isEditable:m,actionRender:L,startEditable:i,cancelEditable:f}}var Pt=xt,de=s(62027),Tt=s(99845),Dt=s(12830),Se=s(10699),Nt=s(23508),It=s(54562),wt=s(44205),Rt=function(t,n){var r=n||{},l=r.onRequestError,o=r.effects,c=r.manual,m=r.dataSource,i=r.defaultDataSource,f=r.onDataSourceChange,g=(0,se.Z)(i,{value:m,onChange:f}),T=(0,V.Z)(g,2),C=T[0],x=T[1],h=(0,se.Z)(n==null?void 0:n.loading,{value:n==null?void 0:n.loading,onChange:n==null?void 0:n.onLoadingChange}),P=(0,V.Z)(h,2),L=P[0],y=P[1],E=function(v){x(v),y(!1)},S=function(){var u=(0,W.Z)((0,M.Z)().mark(function v(){var N,I,w;return(0,M.Z)().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(!L){d.next=2;break}return d.abrupt("return");case 2:return y(!0),d.prev=3,d.next=6,t();case 6:if(d.t0=d.sent,d.t0){d.next=9;break}d.t0={};case 9:N=d.t0,I=N.data,w=N.success,w!==!1&&E(I),d.next=23;break;case 15:if(d.prev=15,d.t1=d.catch(3),l!==void 0){d.next=21;break}throw new Error(d.t1);case 21:l(d.t1);case 22:y(!1);case 23:case"end":return d.stop()}},v,null,[[3,15]])}));return function(){return u.apply(this,arguments)}}();return(0,e.useEffect)(function(){c||S()},[].concat((0,_.Z)(o||[]),[c])),{dataSource:C,setDataSource:x,loading:L,reload:function(){return S()}}},Lt=Rt,zt=["valueEnum","render","renderText","mode","plain","dataIndex","request","params","editable"],Bt=["request","columns","params","dataSource","onDataSourceChange","formProps","editable","loading","onLoadingChange","actionRef","onRequestError"],$t=function(t,n){var r=t.dataIndex;if(r){var l=Array.isArray(r)?(0,It.Z)(n,r):n[r];if(l!==void 0||l!==null)return l}return t.children},Ot=function(t){var n=t.valueEnum,r=t.action,l=t.index,o=t.text,c=t.entity,m=t.mode,i=t.render,f=t.editableUtils,g=t.valueType,T=t.plain,C=t.dataIndex,x=t.request,h=t.renderFormItem,P=t.params,L={text:o,valueEnum:n,mode:m||"read",proFieldProps:{render:i?function(){return i==null?void 0:i(o,c,l,r,(0,R.Z)((0,R.Z)({},t),{},{type:"descriptions"}))}:void 0},ignoreFormItem:!0,valueType:g,request:x,params:P,plain:T};if(m==="read"||!m||g==="option"){var y=(0,de.Z)(t.fieldProps,void 0,(0,R.Z)((0,R.Z)({},t),{},{rowKey:C,isEditable:!1}));return e.createElement(re.Z,(0,D.Z)({name:C},L,{fieldProps:y}))}return e.createElement("div",{style:{marginTop:-5,marginBottom:-5,marginLeft:0,marginRight:0}},e.createElement(ke.Z.Item,{noStyle:!0,shouldUpdate:function(S,u){return S!==u}},function(E){var S,u=(0,de.Z)(t.formItemProps,E,(0,R.Z)((0,R.Z)({},t),{},{rowKey:C,isEditable:!0})),v=(0,de.Z)(t.fieldProps,E,(0,R.Z)((0,R.Z)({},t),{},{rowKey:C,isEditable:!0})),N=h?h==null?void 0:h((0,R.Z)((0,R.Z)({},t),{},{type:"descriptions"}),{isEditable:!0,recordKey:C,record:E.getFieldValue([C].flat(1)),defaultRender:function(){return e.createElement(re.Z,(0,D.Z)({},L,{fieldProps:v}))},type:"descriptions"},E):void 0;return e.createElement(K.Z,null,e.createElement(Tt.Z,(0,D.Z)({name:C},u,{style:(0,R.Z)({margin:0},(u==null?void 0:u.style)||{}),initialValue:o||(u==null?void 0:u.initialValue)}),N||e.createElement(re.Z,(0,D.Z)({},L,{proFieldProps:(0,R.Z)({},L.proFieldProps),fieldProps:v}))),f==null||(S=f.actionRender)===null||S===void 0?void 0:S.call(f,C||l,E,{cancelText:e.createElement(Ae.Z,null),saveText:e.createElement(Ke.Z,null),deleteText:!1}))}))},jt=function(t,n,r,l){var o,c=[],m=t==null||(o=t.map)===null||o===void 0?void 0:o.call(t,function(i,f){var g,T;if(e.isValidElement(i))return i;var C=i.valueEnum,x=i.render,h=i.renderText,P=i.mode,L=i.plain,y=i.dataIndex,E=i.request,S=i.params,u=i.editable,v=(0,ne.Z)(i,zt),N=(g=$t(i,n))!==null&&g!==void 0?g:v.children,I=h?h(N,n,f,r):N,w=typeof v.title=="function"?v.title(i,"descriptions",null):v.title,z=typeof v.valueType=="function"?v.valueType(n||{},"descriptions"):v.valueType,d=l==null?void 0:l.isEditable(y||f),O=P||d?"edit":"read",b=l&&O==="read"&&u!==!1&&(u==null?void 0:u(I,n,f))!==!1,p=b?K.Z:e.Fragment,H=O==="edit"?I:(0,Dt.X)(I,i,I),k=e.createElement(ae.Item,(0,D.Z)({},v,{key:v.key||((T=v.label)===null||T===void 0?void 0:T.toString())||f,label:(w||v.label||v.tooltip||v.tip)&&e.createElement(Se.Z,{label:w||v.label,tooltip:v.tooltip||v.tip,ellipsis:i.ellipsis})}),e.createElement(p,null,e.createElement(Ot,(0,D.Z)({},i,{dataIndex:i.dataIndex||f,mode:O,text:H,valueType:z,entity:n,index:f,action:r,editableUtils:l})),b&&z!=="option"&&e.createElement(He.Z,{onClick:function(){l==null||l.startEditable(y||f)}})));return z==="option"?(c.push(k),null):k}).filter(function(i){return i});return{options:c!=null&&c.length?c:null,children:m}},Mt=function(t){return e.createElement(ae.Item,t,t.children)},Ft=function(t){return t.children},xe=function(t){var n,r=t.request,l=t.columns,o=t.params,c=o===void 0?{}:o,m=t.dataSource,i=t.onDataSourceChange,f=t.formProps,g=t.editable,T=t.loading,C=t.onLoadingChange,x=t.actionRef,h=t.onRequestError,P=(0,ne.Z)(t,Bt),L=(0,e.useContext)(we.ZP.ConfigContext),y=Lt((0,W.Z)((0,M.Z)().mark(function d(){var O;return(0,M.Z)().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:if(!r){p.next=6;break}return p.next=3,r(c);case 3:p.t0=p.sent,p.next=7;break;case 6:p.t0={data:{}};case 7:return O=p.t0,p.abrupt("return",O);case 9:case"end":return p.stop()}},d)})),{onRequestError:h,effects:[(0,wt.P)(c)],manual:!r,dataSource:m,loading:T,onLoadingChange:C,onDataSourceChange:i}),E=Pt((0,R.Z)((0,R.Z)({},t.editable),{},{childrenColumnName:void 0,dataSource:y.dataSource,setDataSource:y.setDataSource}));if((0,e.useEffect)(function(){x&&(x.current=(0,R.Z)({reload:y.reload},E))},[y,x,E]),y.loading||y.loading===void 0&&r)return e.createElement(pt,{type:"descriptions",list:!1,pageHeader:!1});var S=function(){var O=(0,fe.Z)(t.children).filter(Boolean).map(function(b){if(!e.isValidElement(b))return b;var p=b==null?void 0:b.props,H=p.valueEnum,k=p.valueType,J=p.dataIndex,ue=p.ellipsis,B=p.copyable,ve=p.request;return!k&&!H&&!J&&!ve&&!ue&&!B?b:(0,R.Z)((0,R.Z)({},b==null?void 0:b.props),{},{entity:m})});return[].concat((0,_.Z)(l||[]),(0,_.Z)(O)).filter(function(b){return!b||(b==null?void 0:b.valueType)&&["index","indexBorder"].includes(b==null?void 0:b.valueType)?!1:!(b!=null&&b.hideInDescriptions)}).sort(function(b,p){return p.order||b.order?(p.order||0)-(b.order||0):(p.index||0)-(b.index||0)})},u=jt(S(),y.dataSource||{},(x==null?void 0:x.current)||y,g?E:void 0),v=u.options,N=u.children,I=g?Ge.ZP:Ft,w=null;(P.title||P.tooltip||P.tip)&&(w=e.createElement(Se.Z,{label:P.title,tooltip:P.tooltip||P.tip}));var z=L.getPrefixCls("pro-descriptions");return e.createElement(Nt.Z,null,e.createElement(I,(0,D.Z)({key:"form",form:(n=t.editable)===null||n===void 0?void 0:n.form,component:!1,submitter:!1},f,{onFinish:void 0}),e.createElement(ae,(0,D.Z)({className:z},P,{extra:P.extra?e.createElement(K.Z,null,v,P.extra):v,title:w}),N)))};xe.Item=Mt;var ta=null}}]);
