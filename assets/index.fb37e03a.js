import{r as x,a5 as D,j as c,a0 as ie,l as Y,C as W,g as k,F as q,a as g,d as O,o as Me,aw as se,b as ve,ax as ze,v as he,a3 as I,q as De,s as je,f as Ie,e as Le,h as E,a9 as We,R as X,D as Ue,ay as Ke,af as Ge,ah as Xe,az as Ye,_ as me,aA as qe,G as Ve,E as Je,aB as Qe,aC as Ze,aD as et,a8 as tt,T as le}from"./index.0667799c.js";import{R as U,M as rt,P as at}from"./RouteContext.02ce734a.js";var nt=globalThis&&globalThis.__rest||function(n,e){var r={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(r[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(n);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(n,t[a])&&(r[t[a]]=n[t[a]]);return r},ot={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},it=x.exports.forwardRef(function(n,e){var r=function(u){var f=u.keyCode;f===ie.ENTER&&u.preventDefault()},t=function(u){var f=u.keyCode,l=n.onClick;f===ie.ENTER&&l&&l()},a=n.style,o=n.noStyle,i=n.disabled,s=nt(n,["style","noStyle","disabled"]),d={};return o||(d=D({},ot)),i&&(d.pointerEvents="none"),d=D(D({},d),a),c("div",{role:"button",tabIndex:0,ref:e,...s,onKeyDown:r,onKeyUp:t,style:d})});const st=it;var lt=["children","className","extra","style","renderContent"],ct=function(e){var r=e.children,t=e.className,a=e.extra,o=e.style,i=e.renderContent,s=Y(e,lt),d=x.exports.useContext(W.ConfigContext),v=d.getPrefixCls,u=e.prefixCls||v("pro"),f="".concat(u,"-footer-bar"),l=x.exports.useContext(U),b=x.exports.useMemo(function(){var m=l.hasSiderMenu,C=l.isMobile,y=l.siderWidth;if(!!m)return y?C?"100%":"calc(100% - ".concat(y,"px)"):"100%"},[l.collapsed,l.hasSiderMenu,l.isMobile,l.siderWidth]),h=k(q,{children:[c("div",{className:"".concat(f,"-left"),children:a}),c("div",{className:"".concat(f,"-right"),children:r})]});return x.exports.useEffect(function(){return!l||!(l!=null&&l.setHasFooterToolbar)?function(){}:(l==null||l.setHasFooterToolbar(!0),function(){var m;l==null||(m=l.setHasFooterToolbar)===null||m===void 0||m.call(l,!1)})},[]),c("div",g(g({className:O(t,"".concat(f)),style:g({width:b},o)},Me(s,["prefixCls"])),{},{children:i?i(g(g(g({},e),l),{},{leftWidth:b}),h):h}))};const dt=ct;var ft=function(e){var r=x.exports.useContext(U),t=e.children,a=e.contentWidth,o=e.className,i=e.style,s=x.exports.useContext(W.ConfigContext),d=s.getPrefixCls,v=e.prefixCls||d("pro"),u=a||r.contentWidth,f="".concat(v,"-grid-content");return c("div",{className:O(f,o,{wide:u==="Fixed"}),style:i,children:c("div",{className:"".concat(v,"-grid-content-children"),children:t})})};const ut=ft;function vt(n){var e,r=function(o){return function(){e=null,n.apply(void 0,ve(o))}},t=function(){if(e==null){for(var o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];e=se(r(i))}};return t.cancel=function(){se.cancel(e),e=null},t}function ge(){return function(e,r,t){var a=t.value,o=!1;return{configurable:!0,get:function(){if(o||this===e.prototype||this.hasOwnProperty(r))return a;var s=vt(a.bind(this));return o=!0,Object.defineProperty(this,r,{value:s,configurable:!0,writable:!0}),o=!1,s}}}}function L(n){return n!==window?n.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function ce(n,e,r){if(r!==void 0&&e.top>n.top-r)return r+e.top}function de(n,e,r){if(r!==void 0&&e.bottom<n.bottom+r){var t=window.innerHeight-e.bottom;return r+t}}var be=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],j=[];function fe(n,e){if(!!n){var r=j.find(function(t){return t.target===n});r?r.affixList.push(e):(r={target:n,affixList:[e],eventHandlers:{}},j.push(r),be.forEach(function(t){r.eventHandlers[t]=ze(n,t,function(){r.affixList.forEach(function(a){a.lazyUpdatePosition()})})}))}}function ue(n){var e=j.find(function(r){var t=r.affixList.some(function(a){return a===n});return t&&(r.affixList=r.affixList.filter(function(a){return a!==n})),t});e&&e.affixList.length===0&&(j=j.filter(function(r){return r!==e}),be.forEach(function(r){var t=e.eventHandlers[r];t&&t.remove&&t.remove()}))}var xe=globalThis&&globalThis.__decorate||function(n,e,r,t){var a=arguments.length,o=a<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,r):t,i;if((typeof Reflect>"u"?"undefined":he(Reflect))==="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,r,t);else for(var s=n.length-1;s>=0;s--)(i=n[s])&&(o=(a<3?i(o):a>3?i(e,r,o):i(e,r))||o);return a>3&&o&&Object.defineProperty(e,r,o),o};function ht(){return typeof window<"u"?window:null}var A;(function(n){n[n.None=0]="None",n[n.Prepare=1]="Prepare"})(A||(A={}));var K=function(n){De(r,n);var e=je(r);function r(){var t;return Ie(this,r),t=e.apply(this,arguments),t.state={status:A.None,lastAffix:!1,prevTarget:null},t.getOffsetTop=function(){var a=t.props,o=a.offsetBottom,i=a.offsetTop;return o===void 0&&i===void 0?0:i},t.getOffsetBottom=function(){return t.props.offsetBottom},t.savePlaceholderNode=function(a){t.placeholderNode=a},t.saveFixedNode=function(a){t.fixedNode=a},t.measure=function(){var a=t.state,o=a.status,i=a.lastAffix,s=t.props.onChange,d=t.getTargetFunc();if(!(o!==A.Prepare||!t.fixedNode||!t.placeholderNode||!d)){var v=t.getOffsetTop(),u=t.getOffsetBottom(),f=d();if(!!f){var l={status:A.None},b=L(f),h=L(t.placeholderNode),m=ce(h,b,v),C=de(h,b,u);m!==void 0?(l.affixStyle={position:"fixed",top:m,width:h.width,height:h.height},l.placeholderStyle={width:h.width,height:h.height}):C!==void 0&&(l.affixStyle={position:"fixed",bottom:C,width:h.width,height:h.height},l.placeholderStyle={width:h.width,height:h.height}),l.lastAffix=!!l.affixStyle,s&&i!==l.lastAffix&&s(l.lastAffix),t.setState(l)}}},t.prepareMeasure=function(){t.setState({status:A.Prepare,affixStyle:void 0,placeholderStyle:void 0})},t}return Le(r,[{key:"getTargetFunc",value:function(){var a=this.context.getTargetContainer,o=this.props.target;return o!==void 0?o:a||ht}},{key:"componentDidMount",value:function(){var a=this,o=this.getTargetFunc();o&&(this.timeout=setTimeout(function(){fe(o(),a),a.updatePosition()}))}},{key:"componentDidUpdate",value:function(a){var o=this.state.prevTarget,i=this.getTargetFunc(),s=(i==null?void 0:i())||null;o!==s&&(ue(this),s&&(fe(s,this),this.updatePosition()),this.setState({prevTarget:s})),(a.offsetTop!==this.props.offsetTop||a.offsetBottom!==this.props.offsetBottom)&&this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),ue(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var a=this.getTargetFunc(),o=this.state.affixStyle;if(a&&o){var i=this.getOffsetTop(),s=this.getOffsetBottom(),d=a();if(d&&this.placeholderNode){var v=L(d),u=L(this.placeholderNode),f=ce(u,v,i),l=de(u,v,s);if(f!==void 0&&o.top===f||l!==void 0&&o.bottom===l)return}}this.prepareMeasure()}},{key:"render",value:function(){var a=this,o=this.state,i=o.affixStyle,s=o.placeholderStyle,d=this.props,v=d.affixPrefixCls,u=d.children,f=O(E({},v,!!i)),l=We(this.props,["prefixCls","offsetTop","offsetBottom","target","onChange","affixPrefixCls"]);return c(X,{onResize:function(){a.updatePosition()},children:k("div",{...l,ref:this.savePlaceholderNode,children:[i&&c("div",{style:s,"aria-hidden":"true"}),c("div",{className:f,ref:this.saveFixedNode,style:i,children:c(X,{onResize:function(){a.updatePosition()},children:u})})]})})}}]),r}(x.exports.Component);K.contextType=I;xe([ge()],K.prototype,"updatePosition",null);xe([ge()],K.prototype,"lazyUpdatePosition",null);var mt=x.exports.forwardRef(function(n,e){var r=n.prefixCls,t=x.exports.useContext(I),a=t.getPrefixCls,o=a("affix",r),i=D(D({},n),{affixPrefixCls:o});return c(K,{...i,ref:e})});const gt=mt;var bt=globalThis&&globalThis.__rest||function(n,e){var r={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(r[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(n);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(n,t[a])&&(r[t[a]]=n[t[a]]);return r},pe=function(e){var r=e.prefixCls,t=e.separator,a=t===void 0?"/":t,o=e.children,i=e.overlay,s=e.dropdownProps,d=bt(e,["prefixCls","separator","children","overlay","dropdownProps"]),v=x.exports.useContext(I),u=v.getPrefixCls,f=u("breadcrumb",r),l=function(m){return i?c(Ue,{overlay:i,placement:"bottom",...s,children:k("span",{className:"".concat(f,"-overlay-link"),children:[m,c(Ke,{})]})}):m},b;return"href"in d?b=c("a",{className:"".concat(f,"-link"),...d,children:o}):b=c("span",{className:"".concat(f,"-link"),...d,children:o}),b=l(b),o?k("li",{children:[b,a&&c("span",{className:"".concat(f,"-separator"),children:a})]}):null};pe.__ANT_BREADCRUMB_ITEM=!0;const Ce=pe;var ye=function(e){var r=e.children,t=x.exports.useContext(I),a=t.getPrefixCls,o=a("breadcrumb");return c("span",{className:"".concat(o,"-separator"),children:r||"/"})};ye.__ANT_BREADCRUMB_SEPARATOR=!0;const xt=ye;var pt=globalThis&&globalThis.__rest||function(n,e){var r={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(r[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(n);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(n,t[a])&&(r[t[a]]=n[t[a]]);return r};function Ct(n,e){if(!n.breadcrumbName)return null;var r=Object.keys(e).join("|"),t=n.breadcrumbName.replace(new RegExp(":(".concat(r,")"),"g"),function(a,o){return e[o]||a});return t}function yt(n,e,r,t){var a=r.indexOf(n)===r.length-1,o=Ct(n,e);return a?c("span",{children:o}):c("a",{href:"#/".concat(t.join("/")),children:o})}var Pe=function(e,r){return e=(e||"").replace(/^\//,""),Object.keys(r).forEach(function(t){e=e.replace(":".concat(t),r[t])}),e},Pt=function(e,r,t){var a=ve(e),o=Pe(r||"",t);return o&&a.push(o),a},V=function(e){var r=e.prefixCls,t=e.separator,a=t===void 0?"/":t,o=e.style,i=e.className,s=e.routes,d=e.children,v=e.itemRender,u=v===void 0?yt:v,f=e.params,l=f===void 0?{}:f,b=pt(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),h=x.exports.useContext(I),m=h.getPrefixCls,C=h.direction,y,P=m("breadcrumb",r);if(s&&s.length>0){var T=[];y=s.map(function(p){var R=Pe(p.path,l);R&&T.push(R);var S;return p.children&&p.children.length&&(S=c(rt,{items:p.children.map(function(_){return{key:_.path||_.breadcrumbName,label:u(_,l,s,Pt(T,_.path,l))}})})),c(Ce,{overlay:S,separator:a,children:u(p,l,s,T)},R||p.breadcrumbName)})}else d&&(y=Ge(d).map(function(p,R){return p&&Xe(p,{separator:a,key:R})}));var N=O(P,E({},"".concat(P,"-rtl"),C==="rtl"),i);return c("nav",{className:N,style:o,...b,children:c("ol",{children:y})})};V.Item=Ce;V.Separator=xt;const Nt=V;var wt=function(e,r,t){return!r||!t?null:c(et,{componentName:"PageHeader",children:function(a){var o=a.back;return c("div",{className:"".concat(e,"-back"),children:c(st,{onClick:function(s){t==null||t(s)},className:"".concat(e,"-back-button"),"aria-label":o,children:r})})}})},Tt=function(e){return c(Nt,{...e})},Rt=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"ltr";return e.backIcon!==void 0?e.backIcon:r==="rtl"?c(Qe,{}):c(Ze,{})},St=function(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"ltr",a=r.title,o=r.avatar,i=r.subTitle,s=r.tags,d=r.extra,v=r.onBack,u="".concat(e,"-heading"),f=a||i||s||d;if(!f)return null;var l=Rt(r,t),b=wt(e,l,v),h=b||o||f;return k("div",{className:u,children:[h&&k("div",{className:"".concat(u,"-left"),children:[b,o&&c(Ve,{...o}),a&&c("span",{className:"".concat(u,"-title"),title:typeof a=="string"?a:void 0,children:a}),i&&c("span",{className:"".concat(u,"-sub-title"),title:typeof i=="string"?i:void 0,children:i}),s&&c("span",{className:"".concat(u,"-tags"),children:s})]}),d&&c("span",{className:"".concat(u,"-extra"),children:c(Je,{children:d})})]})},_t=function(e,r){return r?c("div",{className:"".concat(e,"-footer"),children:r}):null},kt=function(e,r){return c("div",{className:"".concat(e,"-content"),children:r})},Bt=function(e){var r=Ye(!1),t=me(r,2),a=t[0],o=t[1],i=function(d){var v=d.width;o(v<768,!0)};return c(qe,{children:function(s){var d,v=s.getPrefixCls,u=s.pageHeader,f=s.direction,l,b=e.prefixCls,h=e.style,m=e.footer,C=e.children,y=e.breadcrumb,P=e.breadcrumbRender,T=e.className,N=!0;"ghost"in e?N=e.ghost:u&&"ghost"in u&&(N=u.ghost);var p=v("page-header",b),R=function(){return y!=null&&y.routes?Tt(y):null},S=R(),_=y&&"props"in y,$=(l=P==null?void 0:P(e,S))!==null&&l!==void 0?l:S,w=_?y:$,H=O(p,T,(d={"has-breadcrumb":!!w,"has-footer":!!m},E(d,"".concat(p,"-ghost"),N),E(d,"".concat(p,"-rtl"),f==="rtl"),E(d,"".concat(p,"-compact"),a),d));return c(X,{onResize:i,children:k("div",{className:H,style:h,children:[w,St(p,e,f),C&&kt(p,C),_t(p,m)]})})}})};const Ot=Bt;var $t=function(e){if(!e)return 1;var r=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/r},Ft=function(e){var r=e.children,t=e.style,a=e.className,o=e.markStyle,i=e.markClassName,s=e.zIndex,d=s===void 0?9:s,v=e.gapX,u=v===void 0?212:v,f=e.gapY,l=f===void 0?222:f,b=e.width,h=b===void 0?120:b,m=e.height,C=m===void 0?64:m,y=e.rotate,P=y===void 0?-22:y,T=e.image,N=e.content,p=e.offsetLeft,R=e.offsetTop,S=e.fontStyle,_=S===void 0?"normal":S,$=e.fontWeight,w=$===void 0?"normal":$,H=e.fontColor,G=H===void 0?"rgba(0,0,0,.15)":H,J=e.fontSize,Q=J===void 0?16:J,Z=e.fontFamily,ee=Z===void 0?"sans-serif":Z,Ne=e.prefixCls,we=x.exports.useContext(W.ConfigContext),Te=we.getPrefixCls,te=Te("pro-layout-watermark",Ne),Re=O("".concat(te,"-wrapper"),a),Se=O(te,i),_e=x.exports.useState(""),re=me(_e,2),ae=re[0],ne=re[1];return x.exports.useEffect(function(){var M=document.createElement("canvas"),B=M.getContext("2d"),F=$t(B),ke="".concat((u+h)*F,"px"),Be="".concat((l+C)*F,"px"),Oe=p||u/2,$e=R||l/2;if(M.setAttribute("width",ke),M.setAttribute("height",Be),B){B.translate(Oe*F,$e*F),B.rotate(Math.PI/180*Number(P));var Fe=h*F,oe=C*F;if(T){var z=new Image;z.crossOrigin="anonymous",z.referrerPolicy="no-referrer",z.src=T,z.onload=function(){B.drawImage(z,0,0,Fe,oe),ne(M.toDataURL())}}else if(N){var Ee=Number(Q)*F;B.font="".concat(_," normal ").concat(w," ").concat(Ee,"px/").concat(oe,"px ").concat(ee),B.fillStyle=G,Array.isArray(N)?N==null||N.forEach(function(He,Ae){return B.fillText(He,0,Ae*50)}):B.fillText(N,0,0),ne(M.toDataURL())}}else console.error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301Canvas")},[u,l,p,R,P,_,w,h,C,ee,G,T,N,Q]),k("div",{style:g({position:"relative"},t),className:Re,children:[r,c("div",{className:Se,style:g(g({zIndex:d,position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundSize:"".concat(u+h,"px"),pointerEvents:"none",backgroundRepeat:"repeat"},ae?{backgroundImage:"url('".concat(ae,"')")}:null),o)})]})};const Et=Ft;var Ht=["title","content","pageHeaderRender","header","prefixedClassName","extraContent","style","prefixCls","breadcrumbRender"],At=["children","loading","className","style","footer","affixProps","ghost","fixedHeader","breadcrumbRender"];function Mt(n){return he(n)==="object"?n:{spinning:n}}var zt=function(e){var r=e.tabList,t=e.tabActiveKey,a=e.onTabChange,o=e.tabBarExtraContent,i=e.tabProps,s=e.prefixedClassName;return Array.isArray(r)||o?c(le,g(g({className:"".concat(s,"-tabs"),activeKey:t,onChange:function(v){a&&a(v)},tabBarExtraContent:o},i),{},{children:r==null?void 0:r.map(function(d,v){return x.exports.createElement(le.TabPane,g(g({},d),{},{tab:d.tab,key:d.key||v}))})})):null},Dt=function(e,r,t){return!e&&!r?null:c("div",{className:"".concat(t,"-detail"),children:c("div",{className:"".concat(t,"-main"),children:k("div",{className:"".concat(t,"-row"),children:[e&&c("div",{className:"".concat(t,"-content"),children:e}),r&&c("div",{className:"".concat(t,"-extraContent"),children:r})]})})})},jt=function(e){var r,t=x.exports.useContext(U),a=e.title,o=e.content,i=e.pageHeaderRender,s=e.header,d=e.prefixedClassName,v=e.extraContent;e.style;var u=e.prefixCls,f=e.breadcrumbRender,l=Y(e,Ht),b=x.exports.useMemo(function(){if(!!f)return f},[f]);if(i===!1)return null;if(i)return k(q,{children:[" ",i(g(g({},e),t))]});var h=a;!a&&a!==!1&&(h=t.title);var m=g(g(g({},t),{},{title:h},l),{},{footer:zt(g(g({},l),{},{breadcrumbRender:f,prefixedClassName:d}))},s),C=m.breadcrumb,y=(!C||!(C!=null&&C.itemRender)&&!(!(C==null||(r=C.routes)===null||r===void 0)&&r.length))&&!f;return["title","subTitle","extra","tags","footer","avatar","backIcon"].every(function(P){return!m[P]})&&y&&!o&&!v?null:c("div",{className:"".concat(d,"-warp"),children:c(Ot,g(g({},m),{},{breadcrumb:f===!1?void 0:g(g({},m.breadcrumb),t.breadcrumbProps),breadcrumbRender:b,prefixCls:u,children:(s==null?void 0:s.children)||Dt(o,v,d)}))})},It=function(e){var r,t,a=e.children,o=e.loading,i=o===void 0?!1:o,s=e.className,d=e.style,v=e.footer,u=e.affixProps,f=e.ghost,l=e.fixedHeader,b=e.breadcrumbRender,h=Y(e,At),m=x.exports.useContext(U),C=x.exports.useContext(W.ConfigContext),y=C.getPrefixCls,P=e.prefixCls||y("pro"),T="".concat(P,"-page-container"),N=O(T,s,(r={},E(r,"".concat(P,"-page-container-ghost"),f),E(r,"".concat(P,"-page-container-with-footer"),v),r)),p=x.exports.useMemo(function(){return a?k(q,{children:[c("div",{className:"".concat(T,"-children-content"),children:a}),m.hasFooterToolbar&&c("div",{style:{height:48,marginTop:24}})]}):null},[a,T,m.hasFooterToolbar]),R=x.exports.useMemo(function(){var w;return b==!1?!1:b||(h==null||(w=h.header)===null||w===void 0?void 0:w.breadcrumbRender)},[b,h==null||(t=h.header)===null||t===void 0?void 0:t.breadcrumbRender]),S=c(jt,g(g({},h),{},{breadcrumbRender:R,ghost:f,prefixCls:void 0,prefixedClassName:T})),_=x.exports.useMemo(function(){if(tt.isValidElement(i))return i;if(typeof i=="boolean"&&!i)return null;var w=Mt(i);return w.spinning?c(at,g({},w)):null},[i]),$=x.exports.useMemo(function(){var w=_||p;if(e.waterMarkProps||m.waterMarkProps){var H=g(g({},m.waterMarkProps),e.waterMarkProps);return c(Et,g(g({},H),{},{children:w}))}return w},[e.waterMarkProps,m.waterMarkProps,_,p]);return k("div",{style:d,className:N,children:[l&&S?c(gt,g(g({offsetTop:m.hasHeader&&m.fixedHeader?m.headerHeight:0},u),{},{children:S})):S,$&&c(ut,{children:$}),v&&c(dt,{prefixCls:P,children:v})]})};const Lt=It,Kt=n=>x.exports.cloneElement(c(Lt,{header:{title:"",breadcrumb:{}}}),n);export{Kt as B,st as T};