"use strict";(self.webpackChunkruoyi_x_umi=self.webpackChunkruoyi_x_umi||[]).push([[95],{7361:function(ee,z,s){var I=s(50959),N=(0,I.createContext)({});z.Z=N},92112:function(ee,z,s){s.d(z,{ZP:function(){return Rt}});var I=s(66432),N=s(62081),M=s(82269),J=s(57642),K=s(73287),Q=s(22595),E=s(74374),U=s(31307),B=s(19803),P=s.n(B),j=s(38133),te=s(99035),i=s(50959),L=s(51283),w=s(86298),re=s(3035);function k(n){var e,r=function(o){return function(){e=null,n.apply(void 0,(0,w.Z)(o))}},t=function(){if(e==null){for(var o=arguments.length,d=new Array(o),c=0;c<o;c++)d[c]=arguments[c];e=(0,re.Z)(r(d))}};return t.cancel=function(){re.Z.cancel(e),e=null},t}function G(){return function(e,r,t){var a=t.value,o=!1;return{configurable:!0,get:function(){if(o||this===e.prototype||this.hasOwnProperty(r))return a;var c=k(a.bind(this));return o=!0,Object.defineProperty(this,r,{value:c,configurable:!0,writable:!0}),o=!1,c}}}}var ae=s(29425);function ne(n){return n!==window?n.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function ue(n,e,r){if(r!==void 0&&e.top>n.top-r)return r+e.top}function fe(n,e,r){if(r!==void 0&&e.bottom<n.bottom+r){var t=window.innerHeight-e.bottom;return r+t}}var ve=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],X=[];function Ut(){return X}function me(n,e){if(!!n){var r=X.find(function(t){return t.target===n});r?r.affixList.push(e):(r={target:n,affixList:[e],eventHandlers:{}},X.push(r),ve.forEach(function(t){r.eventHandlers[t]=(0,ae.Z)(n,t,function(){r.affixList.forEach(function(a){a.lazyUpdatePosition()})})}))}}function he(n){var e=X.find(function(r){var t=r.affixList.some(function(a){return a===n});return t&&(r.affixList=r.affixList.filter(function(a){return a!==n})),t});e&&e.affixList.length===0&&(X=X.filter(function(r){return r!==e}),ve.forEach(function(r){var t=e.eventHandlers[r];t&&t.remove&&t.remove()}))}var ge=function(n,e,r,t){var a=arguments.length,o=a<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,r):t,d;if((typeof Reflect>"u"?"undefined":(0,U.Z)(Reflect))==="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,r,t);else for(var c=n.length-1;c>=0;c--)(d=n[c])&&(o=(a<3?d(o):a>3?d(e,r,o):d(e,r))||o);return a>3&&o&&Object.defineProperty(e,r,o),o};function Me(){return typeof window<"u"?window:null}var Y;(function(n){n[n.None=0]="None",n[n.Prepare=1]="Prepare"})(Y||(Y={}));var oe=function(n){(0,Q.Z)(r,n);var e=(0,E.Z)(r);function r(){var t;return(0,J.Z)(this,r),t=e.apply(this,arguments),t.state={status:Y.None,lastAffix:!1,prevTarget:null},t.getOffsetTop=function(){var a=t.props,o=a.offsetBottom,d=a.offsetTop;return o===void 0&&d===void 0?0:d},t.getOffsetBottom=function(){return t.props.offsetBottom},t.savePlaceholderNode=function(a){t.placeholderNode=a},t.saveFixedNode=function(a){t.fixedNode=a},t.measure=function(){var a=t.state,o=a.status,d=a.lastAffix,c=t.props.onChange,u=t.getTargetFunc();if(!(o!==Y.Prepare||!t.fixedNode||!t.placeholderNode||!u)){var f=t.getOffsetTop(),h=t.getOffsetBottom(),m=u();if(!!m){var l={status:Y.None},y=ne(m),v=ne(t.placeholderNode),x=ue(v,y,f),Z=fe(v,y,h);x!==void 0?(l.affixStyle={position:"fixed",top:x,width:v.width,height:v.height},l.placeholderStyle={width:v.width,height:v.height}):Z!==void 0&&(l.affixStyle={position:"fixed",bottom:Z,width:v.width,height:v.height},l.placeholderStyle={width:v.width,height:v.height}),l.lastAffix=!!l.affixStyle,c&&d!==l.lastAffix&&c(l.lastAffix),t.setState(l)}}},t.prepareMeasure=function(){if(t.setState({status:Y.Prepare,affixStyle:void 0,placeholderStyle:void 0}),!1)var a},t}return(0,K.Z)(r,[{key:"getTargetFunc",value:function(){var a=this.context.getTargetContainer,o=this.props.target;return o!==void 0?o:a||Me}},{key:"componentDidMount",value:function(){var a=this,o=this.getTargetFunc();o&&(this.timeout=setTimeout(function(){me(o(),a),a.updatePosition()}))}},{key:"componentDidUpdate",value:function(a){var o=this.state.prevTarget,d=this.getTargetFunc(),c=(d==null?void 0:d())||null;o!==c&&(he(this),c&&(me(c,this),this.updatePosition()),this.setState({prevTarget:c})),(a.offsetTop!==this.props.offsetTop||a.offsetBottom!==this.props.offsetBottom)&&this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),he(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var a=this.getTargetFunc(),o=this.state.affixStyle;if(a&&o){var d=this.getOffsetTop(),c=this.getOffsetBottom(),u=a();if(u&&this.placeholderNode){var f=ne(u),h=ne(this.placeholderNode),m=ue(h,f,d),l=fe(h,f,c);if(m!==void 0&&o.top===m||l!==void 0&&o.bottom===l)return}}this.prepareMeasure()}},{key:"render",value:function(){var a=this,o=this.state,d=o.affixStyle,c=o.placeholderStyle,u=this.props,f=u.affixPrefixCls,h=u.children,m=P()((0,M.Z)({},f,!!d)),l=(0,te.Z)(this.props,["prefixCls","offsetTop","offsetBottom","target","onChange","affixPrefixCls"]);return i.createElement(j.Z,{onResize:function(){a.updatePosition()}},i.createElement("div",(0,N.Z)({},l,{ref:this.savePlaceholderNode}),d&&i.createElement("div",{style:c,"aria-hidden":"true"}),i.createElement("div",{className:m,ref:this.saveFixedNode,style:d},i.createElement(j.Z,{onResize:function(){a.updatePosition()}},h))))}}]),r}(i.Component);oe.contextType=L.E_,ge([G()],oe.prototype,"updatePosition",null),ge([G()],oe.prototype,"lazyUpdatePosition",null);var De=i.forwardRef(function(n,e){var r=n.prefixCls,t=i.useContext(L.E_),a=t.getPrefixCls,o=a("affix",r),d=(0,N.Z)((0,N.Z)({},n),{affixPrefixCls:o});return i.createElement(oe,(0,N.Z)({},d,{ref:e}))}),Ae=De,Wt=s(14962),ie=s(47079),$t=s(86215),Kt=s(38557),kt=s(7332),Gt=s(88422),xe=s(38619),Fe=s(59737),Ie=s(32217),we=s(56928),Le=s(55728),He=s(14191),ze=s(58666),Ue=s(67701),We=s(44394),$e=s(54106),Ke=function(n,e){var r={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(r[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(n);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(n,t[a])&&(r[t[a]]=n[t[a]]);return r},be=function(e){var r=e.prefixCls,t=e.separator,a=t===void 0?"/":t,o=e.children,d=e.overlay,c=e.dropdownProps,u=Ke(e,["prefixCls","separator","children","overlay","dropdownProps"]),f=i.useContext(L.E_),h=f.getPrefixCls,m=h("breadcrumb",r),l=function(x){return d?i.createElement($e.Z,(0,N.Z)({overlay:d,placement:"bottom"},c),i.createElement("span",{className:"".concat(m,"-overlay-link")},x,i.createElement(We.Z,null))):x},y;return"href"in u?y=i.createElement("a",(0,N.Z)({className:"".concat(m,"-link")},u),o):y=i.createElement("span",(0,N.Z)({className:"".concat(m,"-link")},u),o),y=l(y),o?i.createElement("li",null,y,a&&i.createElement("span",{className:"".concat(m,"-separator")},a)):null};be.__ANT_BREADCRUMB_ITEM=!0;var ye=be,Ce=function(e){var r=e.children,t=i.useContext(L.E_),a=t.getPrefixCls,o=a("breadcrumb");return i.createElement("span",{className:"".concat(o,"-separator")},r||"/")};Ce.__ANT_BREADCRUMB_SEPARATOR=!0;var ke=Ce,Ge=function(n,e){var r={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(r[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(n);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(n,t[a])&&(r[t[a]]=n[t[a]]);return r};function Xe(n,e){if(!n.breadcrumbName)return null;var r=Object.keys(e).join("|"),t=n.breadcrumbName.replace(new RegExp(":(".concat(r,")"),"g"),function(a,o){return e[o]||a});return t}function Ye(n,e,r,t){var a=r.indexOf(n)===r.length-1,o=Xe(n,e);return a?i.createElement("span",null,o):i.createElement("a",{href:"#/".concat(t.join("/"))},o)}var pe=function(e,r){return e=(e||"").replace(/^\//,""),Object.keys(r).forEach(function(t){e=e.replace(":".concat(t),r[t])}),e},Ve=function(e,r,t){var a=(0,w.Z)(e),o=pe(r||"",t);return o&&a.push(o),a},se=function(e){var r=e.prefixCls,t=e.separator,a=t===void 0?"/":t,o=e.style,d=e.className,c=e.routes,u=e.children,f=e.itemRender,h=f===void 0?Ye:f,m=e.params,l=m===void 0?{}:m,y=Ge(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),v=i.useContext(L.E_),x=v.getPrefixCls,Z=v.direction,C,R=x("breadcrumb",r);if(c&&c.length>0){var T=[];C=c.map(function(p){var D=pe(p.path,l);D&&T.push(D);var A;return p.children&&p.children.length&&(A=i.createElement(ze.Z,{items:p.children.map(function(F){return{key:F.path||F.breadcrumbName,label:h(F,l,c,Ve(T,F.path,l))}})})),i.createElement(ye,{overlay:A,separator:a,key:D||p.breadcrumbName},h(p,l,c,T))})}else u&&(C=(0,He.Z)(u).map(function(p,D){return p&&(0,Ue.Tm)(p,{separator:a,key:D})}));var O=P()(R,(0,M.Z)({},"".concat(R,"-rtl"),Z==="rtl"),d);return i.createElement("nav",(0,N.Z)({className:O,style:o},y),i.createElement("ol",null,C))};se.Item=ye,se.Separator=ke;var Je=se,Qe=Je,qe=s(23690),_e=s(60171),et=s(27512),tt=function(e,r,t){return!r||!t?null:i.createElement(qe.Z,{componentName:"PageHeader"},function(a){var o=a.back;return i.createElement("div",{className:"".concat(e,"-back")},i.createElement(et.Z,{onClick:function(c){t==null||t(c)},className:"".concat(e,"-back-button"),"aria-label":o},r))})},rt=function(e){return i.createElement(Qe,(0,N.Z)({},e))},at=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"ltr";return e.backIcon!==void 0?e.backIcon:r==="rtl"?i.createElement(Ie.Z,null):i.createElement(Fe.Z,null)},nt=function(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"ltr",a=r.title,o=r.avatar,d=r.subTitle,c=r.tags,u=r.extra,f=r.onBack,h="".concat(e,"-heading"),m=a||d||c||u;if(!m)return null;var l=at(r,t),y=tt(e,l,f),v=y||o||m;return i.createElement("div",{className:h},v&&i.createElement("div",{className:"".concat(h,"-left")},y,o&&i.createElement(Le.C,(0,N.Z)({},o)),a&&i.createElement("span",{className:"".concat(h,"-title"),title:typeof a=="string"?a:void 0},a),d&&i.createElement("span",{className:"".concat(h,"-sub-title"),title:typeof d=="string"?d:void 0},d),c&&i.createElement("span",{className:"".concat(h,"-tags")},c)),u&&i.createElement("span",{className:"".concat(h,"-extra")},i.createElement(_e.Z,null,u)))},ot=function(e,r){return r?i.createElement("div",{className:"".concat(e,"-footer")},r):null},it=function(e,r){return i.createElement("div",{className:"".concat(e,"-content")},r)},lt=function(e){var r=(0,we.Z)(!1),t=(0,xe.Z)(r,2),a=t[0],o=t[1],d=function(u){var f=u.width;o(f<768,!0)};return i.createElement(L.C,null,function(c){var u,f=c.getPrefixCls,h=c.pageHeader,m=c.direction,l,y=e.prefixCls,v=e.style,x=e.footer,Z=e.children,C=e.breadcrumb,R=e.breadcrumbRender,T=e.className,O=!0;"ghost"in e?O=e.ghost:h&&"ghost"in h&&(O=h.ghost);var p=f("page-header",y),D=function(){return C!=null&&C.routes?rt(C):null},A=D(),F=C&&"props"in C,W=(l=R==null?void 0:R(e,A))!==null&&l!==void 0?l:A,S=F?C:W,V=P()(p,T,(u={"has-breadcrumb":!!S,"has-footer":!!x},(0,M.Z)(u,"".concat(p,"-ghost"),O),(0,M.Z)(u,"".concat(p,"-rtl"),m==="rtl"),(0,M.Z)(u,"".concat(p,"-compact"),a),u));return i.createElement(j.Z,{onResize:d},i.createElement("div",{className:V,style:v},S,nt(p,e,m),Z&&it(p,Z),ot(p,x)))})},st=lt,de=s(18112),g=s(84045),Xt=s(19646),Pe=s(40729),b=s(11527),le=s(7361),dt=s(71770),ct=["children","className","extra","style","renderContent"],ut=function(e){var r=e.children,t=e.className,a=e.extra,o=e.style,d=e.renderContent,c=(0,de.Z)(e,ct),u=(0,i.useContext)(ie.ZP.ConfigContext),f=u.getPrefixCls,h=e.prefixCls||f("pro"),m="".concat(h,"-footer-bar"),l=(0,i.useContext)(le.Z),y=(0,i.useMemo)(function(){var x=l.hasSiderMenu,Z=l.isMobile,C=l.siderWidth;if(!!x)return C?Z?"100%":"calc(100% - ".concat(C,"px)"):"100%"},[l.collapsed,l.hasSiderMenu,l.isMobile,l.siderWidth]),v=(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{className:"".concat(m,"-left"),children:a}),(0,b.jsx)("div",{className:"".concat(m,"-right"),children:r})]});return(0,i.useEffect)(function(){return!l||!(l!=null&&l.setHasFooterToolbar)?function(){}:(l==null||l.setHasFooterToolbar(!0),function(){var x;l==null||(x=l.setHasFooterToolbar)===null||x===void 0||x.call(l,!1)})},[]),(0,b.jsx)("div",(0,g.Z)((0,g.Z)({className:P()(t,"".concat(m)),style:(0,g.Z)({width:y},o)},(0,dt.Z)(c,["prefixCls"])),{},{children:d?d((0,g.Z)((0,g.Z)((0,g.Z)({},e),l),{},{leftWidth:y}),v):v}))},ft=ut,vt=function(e){var r=(0,i.useContext)(le.Z),t=e.children,a=e.contentWidth,o=e.className,d=e.style,c=(0,i.useContext)(ie.ZP.ConfigContext),u=c.getPrefixCls,f=e.prefixCls||u("pro"),h=a||r.contentWidth,m="".concat(f,"-grid-content");return(0,b.jsx)("div",{className:P()(m,o,{wide:h==="Fixed"}),style:d,children:(0,b.jsx)("div",{className:"".concat(f,"-grid-content-children"),children:t})})},mt=vt,ht=s(25116),gt=function(e){if(!e)return 1;var r=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/r},xt=function(e){var r=e.children,t=e.style,a=e.className,o=e.markStyle,d=e.markClassName,c=e.zIndex,u=c===void 0?9:c,f=e.gapX,h=f===void 0?212:f,m=e.gapY,l=m===void 0?222:m,y=e.width,v=y===void 0?120:y,x=e.height,Z=x===void 0?64:x,C=e.rotate,R=C===void 0?-22:C,T=e.image,O=e.content,p=e.offsetLeft,D=e.offsetTop,A=e.fontStyle,F=A===void 0?"normal":A,W=e.fontWeight,S=W===void 0?"normal":W,V=e.fontColor,ce=V===void 0?"rgba(0,0,0,.15)":V,Ze=e.fontSize,Ee=Ze===void 0?16:Ze,Ne=e.fontFamily,Re=Ne===void 0?"sans-serif":Ne,Tt=e.prefixCls,Ot=(0,i.useContext)(ie.ZP.ConfigContext),St=Ot.getPrefixCls,Te=St("pro-layout-watermark",Tt),Bt=P()("".concat(Te,"-wrapper"),a),jt=P()(Te,d),Mt=(0,i.useState)(""),Oe=(0,xe.Z)(Mt,2),Se=Oe[0],Be=Oe[1];return(0,i.useEffect)(function(){var q=document.createElement("canvas"),H=q.getContext("2d"),$=gt(H),Dt="".concat((h+v)*$,"px"),At="".concat((l+Z)*$,"px"),Ft=p||h/2,It=D||l/2;if(q.setAttribute("width",Dt),q.setAttribute("height",At),H){H.translate(Ft*$,It*$),H.rotate(Math.PI/180*Number(R));var wt=v*$,je=Z*$;if(T){var _=new Image;_.crossOrigin="anonymous",_.referrerPolicy="no-referrer",_.src=T,_.onload=function(){H.drawImage(_,0,0,wt,je),Be(q.toDataURL())}}else if(O){var Lt=Number(Ee)*$;H.font="".concat(F," normal ").concat(S," ").concat(Lt,"px/").concat(je,"px ").concat(Re),H.fillStyle=ce,Array.isArray(O)?O==null||O.forEach(function(Ht,zt){return H.fillText(Ht,0,zt*50)}):H.fillText(O,0,0),Be(q.toDataURL())}}else console.error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301Canvas")},[h,l,p,D,R,F,S,v,Z,Re,ce,T,O,Ee]),(0,b.jsxs)("div",{style:(0,g.Z)({position:"relative"},t),className:Bt,children:[r,(0,b.jsx)("div",{className:jt,style:(0,g.Z)((0,g.Z)({zIndex:u,position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundSize:"".concat(h+v,"px"),pointerEvents:"none",backgroundRepeat:"repeat"},Se?{backgroundImage:"url('".concat(Se,"')")}:null),o)})]})},bt=xt,yt=["title","content","pageHeaderRender","header","prefixedClassName","extraContent","style","prefixCls","breadcrumbRender"],Ct=["children","loading","className","style","footer","affixProps","ghost","fixedHeader","breadcrumbRender"];function pt(n){return(0,U.Z)(n)==="object"?n:{spinning:n}}var Pt=function(e){var r=e.tabList,t=e.tabActiveKey,a=e.onTabChange,o=e.tabBarExtraContent,d=e.tabProps,c=e.prefixedClassName;return Array.isArray(r)||o?(0,b.jsx)(Pe.Z,(0,g.Z)((0,g.Z)({className:"".concat(c,"-tabs"),activeKey:t,onChange:function(f){a&&a(f)},tabBarExtraContent:o},d),{},{children:r==null?void 0:r.map(function(u,f){return(0,i.createElement)(Pe.Z.TabPane,(0,g.Z)((0,g.Z)({},u),{},{tab:u.tab,key:u.key||f}))})})):null},Zt=function(e,r,t){return!e&&!r?null:(0,b.jsx)("div",{className:"".concat(t,"-detail"),children:(0,b.jsx)("div",{className:"".concat(t,"-main"),children:(0,b.jsxs)("div",{className:"".concat(t,"-row"),children:[e&&(0,b.jsx)("div",{className:"".concat(t,"-content"),children:e}),r&&(0,b.jsx)("div",{className:"".concat(t,"-extraContent"),children:r})]})})})},Yt=function(e){var r=useContext(RouteContext);return _jsx("div",{style:{height:"100%",display:"flex",alignItems:"center"},children:_jsx(_Breadcrumb,_objectSpread(_objectSpread(_objectSpread({},r==null?void 0:r.breadcrumb),r==null?void 0:r.breadcrumbProps),e))})},Et=function(e){var r,t=(0,i.useContext)(le.Z),a=e.title,o=e.content,d=e.pageHeaderRender,c=e.header,u=e.prefixedClassName,f=e.extraContent,h=e.style,m=e.prefixCls,l=e.breadcrumbRender,y=(0,de.Z)(e,yt),v=(0,i.useMemo)(function(){if(!!l)return l},[l]);if(d===!1)return null;if(d)return(0,b.jsxs)(b.Fragment,{children:[" ",d((0,g.Z)((0,g.Z)({},e),t))]});var x=a;!a&&a!==!1&&(x=t.title);var Z=(0,g.Z)((0,g.Z)((0,g.Z)({},t),{},{title:x},y),{},{footer:Pt((0,g.Z)((0,g.Z)({},y),{},{breadcrumbRender:l,prefixedClassName:u}))},c),C=Z.breadcrumb,R=(!C||!(C!=null&&C.itemRender)&&!(!(C==null||(r=C.routes)===null||r===void 0)&&r.length))&&!l;return["title","subTitle","extra","tags","footer","avatar","backIcon"].every(function(T){return!Z[T]})&&R&&!o&&!f?null:(0,b.jsx)("div",{className:"".concat(u,"-warp"),children:(0,b.jsx)(st,(0,g.Z)((0,g.Z)({},Z),{},{breadcrumb:l===!1?void 0:(0,g.Z)((0,g.Z)({},Z.breadcrumb),t.breadcrumbProps),breadcrumbRender:v,prefixCls:m,children:(c==null?void 0:c.children)||Zt(o,f,u)}))})},Nt=function(e){var r,t,a=e.children,o=e.loading,d=o===void 0?!1:o,c=e.className,u=e.style,f=e.footer,h=e.affixProps,m=e.ghost,l=e.fixedHeader,y=e.breadcrumbRender,v=(0,de.Z)(e,Ct),x=(0,i.useContext)(le.Z),Z=(0,i.useContext)(ie.ZP.ConfigContext),C=Z.getPrefixCls,R=e.prefixCls||C("pro"),T="".concat(R,"-page-container"),O=P()(T,c,(r={},(0,M.Z)(r,"".concat(R,"-page-container-ghost"),m),(0,M.Z)(r,"".concat(R,"-page-container-with-footer"),f),r)),p=(0,i.useMemo)(function(){return a?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{className:"".concat(T,"-children-content"),children:a}),x.hasFooterToolbar&&(0,b.jsx)("div",{style:{height:48,marginTop:24}})]}):null},[a,T,x.hasFooterToolbar]),D=(0,i.useMemo)(function(){var S;return y==!1?!1:y||(v==null||(S=v.header)===null||S===void 0?void 0:S.breadcrumbRender)},[y,v==null||(t=v.header)===null||t===void 0?void 0:t.breadcrumbRender]),A=(0,b.jsx)(Et,(0,g.Z)((0,g.Z)({},v),{},{breadcrumbRender:D,ghost:m,prefixCls:void 0,prefixedClassName:T})),F=(0,i.useMemo)(function(){if(i.isValidElement(d))return d;if(typeof d=="boolean"&&!d)return null;var S=pt(d);return S.spinning?(0,b.jsx)(ht.Z,(0,g.Z)({},S)):null},[d]),W=(0,i.useMemo)(function(){var S=F||p;if(e.waterMarkProps||x.waterMarkProps){var V=(0,g.Z)((0,g.Z)({},x.waterMarkProps),e.waterMarkProps);return(0,b.jsx)(bt,(0,g.Z)((0,g.Z)({},V),{},{children:S}))}return S},[e.waterMarkProps,x.waterMarkProps,F,p]);return(0,b.jsxs)("div",{style:u,className:O,children:[l&&A?(0,b.jsx)(Ae,(0,g.Z)((0,g.Z)({offsetTop:x.hasHeader&&x.fixedHeader?x.headerHeight:0},h),{},{children:A})):A,W&&(0,b.jsx)(mt,{children:W}),f&&(0,b.jsx)(ft,{prefixCls:R,children:f})]})},Rt=Nt},25116:function(ee,z,s){var I=s(84045),N=s(76188),M=s(96022),J=s(18112),K=s(11527),Q=["isLoading","pastDelay","timedOut","error","retry"],E=function(B){var P=B.isLoading,j=B.pastDelay,te=B.timedOut,i=B.error,L=B.retry,w=(0,J.Z)(B,Q);return(0,K.jsx)("div",{style:{paddingTop:100,textAlign:"center"},children:(0,K.jsx)(M.Z,(0,I.Z)({size:"large"},w))})};z.Z=E},27512:function(ee,z,s){var I=s(62081),N=s(70404),M=s(50959),J=function(E,U){var B={};for(var P in E)Object.prototype.hasOwnProperty.call(E,P)&&U.indexOf(P)<0&&(B[P]=E[P]);if(E!=null&&typeof Object.getOwnPropertySymbols=="function")for(var j=0,P=Object.getOwnPropertySymbols(E);j<P.length;j++)U.indexOf(P[j])<0&&Object.prototype.propertyIsEnumerable.call(E,P[j])&&(B[P[j]]=E[P[j]]);return B},K={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},Q=M.forwardRef(function(E,U){var B=function(k){var G=k.keyCode;G===N.Z.ENTER&&k.preventDefault()},P=function(k){var G=k.keyCode,ae=E.onClick;G===N.Z.ENTER&&ae&&ae()},j=E.style,te=E.noStyle,i=E.disabled,L=J(E,["style","noStyle","disabled"]),w={};return te||(w=(0,I.Z)({},K)),i&&(w.pointerEvents="none"),w=(0,I.Z)((0,I.Z)({},w),j),M.createElement("div",(0,I.Z)({role:"button",tabIndex:0,ref:U},L,{onKeyDown:B,onKeyUp:P,style:w}))});z.Z=Q},19646:function(ee,z,s){var I=s(66432)}}]);