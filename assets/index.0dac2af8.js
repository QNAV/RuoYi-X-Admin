import{I as Ae,_ as Je,J as Ze,K as er,M as w,O as Br,Q as rr,r as _,U as te,V as de,W as ee,a as x,X as Or,Y as Hr,Z as Ar,$ as $r,a0 as E,a1 as zr,a2 as pe,j as M,a3 as Mr,a4 as Er,a5 as Dr,a6 as Fr,a7 as Lr,a8 as jr,a9 as qr,aa as xe,ab as b,ac as ye,ad as ae,ae as Se,F as we,af as kr,ag as Wr,ah as Ur,ai as Pe,aj as Xr,ak as Gr,al as Kr,am as k,an as Yr,ao as ne,ap as Vr,aq as Qr,ar as ue,as as tr,at as Jr,au as ar,av as ge,aw as he,ax as Zr,ay as et,az as rt,aA as tt,aB as $e,aC as at,aD as nt,aE as ot,aF as it,f as ze}from"./index.7e2e4aff.js";function lt(a){var e,t=function(o){return function(){e=null,a.apply(void 0,Je(o))}},r=function(){if(e==null){for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];e=Ae(t(i))}};return r.cancel=function(){Ae.cancel(e),e=null},r}function nr(){return function(e,t,r){var n=r.value,o=!1;return{configurable:!0,get:function(){if(o||this===e.prototype||this.hasOwnProperty(t))return n;var c=lt(n.bind(this));return o=!0,Object.defineProperty(this,t,{value:c,configurable:!0,writable:!0}),o=!1,c}}}}var ct=function(e){var t=e.componentCls;return w({},t,{position:"fixed",zIndex:e.zIndexPopup})};const st=Ze("Affix",function(a){var e=er(a,{zIndexPopup:a.zIndexBase+10});return[ct(e)]});function ie(a){return a!==window?a.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function Me(a,e,t){if(t!==void 0&&e.top>a.top-t)return t+e.top}function Ee(a,e,t){if(t!==void 0&&e.bottom<a.bottom+t){var r=window.innerHeight-e.bottom;return t+r}}var or=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],re=[];function De(a,e){if(!!a){var t=re.find(function(r){return r.target===a});t?t.affixList.push(e):(t={target:a,affixList:[e],eventHandlers:{}},re.push(t),or.forEach(function(r){t.eventHandlers[r]=Br(a,r,function(){t.affixList.forEach(function(n){n.lazyUpdatePosition()})})}))}}function Fe(a){var e=re.find(function(t){var r=t.affixList.some(function(n){return n===a});return r&&(t.affixList=t.affixList.filter(function(n){return n!==a})),r});e&&e.affixList.length===0&&(re=re.filter(function(t){return t!==e}),or.forEach(function(t){var r=e.eventHandlers[t];r&&r.remove&&r.remove()}))}var ir=globalThis&&globalThis.__decorate||function(a,e,t,r){var n=arguments.length,o=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,i;if((typeof Reflect>"u"?"undefined":rr(Reflect))==="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(a,e,t,r);else for(var c=a.length-1;c>=0;c--)(i=a[c])&&(o=(n<3?i(o):n>3?i(e,t,o):i(e,t))||o);return n>3&&o&&Object.defineProperty(e,t,o),o};function dt(){return typeof window<"u"?window:null}var U;(function(a){a[a.None=0]="None",a[a.Prepare=1]="Prepare"})(U||(U={}));var fe=function(a){Or(t,a);var e=Hr(t);function t(){var r;return Ar(this,t),r=e.apply(this,arguments),r.state={status:U.None,lastAffix:!1,prevTarget:null},r.getOffsetTop=function(){var n=r.props,o=n.offsetBottom,i=n.offsetTop;return o===void 0&&i===void 0?0:i},r.getOffsetBottom=function(){return r.props.offsetBottom},r.savePlaceholderNode=function(n){r.placeholderNode=n},r.saveFixedNode=function(n){r.fixedNode=n},r.measure=function(){var n=r.state,o=n.status,i=n.lastAffix,c=r.props.onChange,y=r.getTargetFunc();if(!(o!==U.Prepare||!r.fixedNode||!r.placeholderNode||!y)){var p=r.getOffsetTop(),h=r.getOffsetBottom(),s=y();if(!!s){var d={status:U.None},S=ie(s),v=ie(r.placeholderNode),u=Me(v,S,p),l=Ee(v,S,h);u!==void 0?(d.affixStyle={position:"fixed",top:u,width:v.width,height:v.height},d.placeholderStyle={width:v.width,height:v.height}):l!==void 0&&(d.affixStyle={position:"fixed",bottom:l,width:v.width,height:v.height},d.placeholderStyle={width:v.width,height:v.height}),d.lastAffix=!!d.affixStyle,c&&i!==d.lastAffix&&c(d.lastAffix),r.setState(d)}}},r.prepareMeasure=function(){r.setState({status:U.Prepare,affixStyle:void 0,placeholderStyle:void 0})},r}return $r(t,[{key:"getTargetFunc",value:function(){var n=this.context.getTargetContainer,o=this.props.target;return o!==void 0?o:n||dt}},{key:"componentDidMount",value:function(){var n=this,o=this.getTargetFunc();o&&(this.timeout=setTimeout(function(){De(o(),n),n.updatePosition()}))}},{key:"componentDidUpdate",value:function(n){var o=this.state.prevTarget,i=this.getTargetFunc(),c=(i==null?void 0:i())||null;o!==c&&(Fe(this),c&&(De(c,this),this.updatePosition()),this.setState({prevTarget:c})),(n.offsetTop!==this.props.offsetTop||n.offsetBottom!==this.props.offsetBottom)&&this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),Fe(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var n=this.getTargetFunc(),o=this.state.affixStyle;if(n&&o){var i=this.getOffsetTop(),c=this.getOffsetBottom(),y=n();if(y&&this.placeholderNode){var p=ie(y),h=ie(this.placeholderNode),s=Me(h,p,i),d=Ee(h,p,c);if(s!==void 0&&o.top===s||d!==void 0&&o.bottom===d)return}}this.prepareMeasure()}},{key:"render",value:function(){var n,o=this,i=this.state,c=i.affixStyle,y=i.placeholderStyle,p=this.props,h=p.affixPrefixCls,s=p.rootClassName,d=p.children,S=E((n={},w(n,s,!!c),w(n,h,!!c),n)),v=zr(this.props,["prefixCls","offsetTop","offsetBottom","target","onChange","affixPrefixCls","rootClassName"]);return x(pe,{onResize:function(){o.updatePosition()},children:M("div",{...v,ref:this.savePlaceholderNode,children:[c&&x("div",{style:y,"aria-hidden":"true"}),x("div",{className:S,ref:this.saveFixedNode,style:c,children:x(pe,{onResize:function(){o.updatePosition()},children:d})})]})})}}]),t}(_.exports.Component);fe.contextType=te;ir([nr()],fe.prototype,"updatePosition",null);ir([nr()],fe.prototype,"lazyUpdatePosition",null);var ut=_.exports.forwardRef(function(a,e){var t=a.prefixCls,r=_.exports.useContext(te),n=r.getPrefixCls,o=n("affix",t),i=st(o),c=de(i,2),y=c[0],p=c[1],h=ee(ee({},a),{affixPrefixCls:o,rootClassName:p});return y(x(fe,{...h,ref:e}))});const ft=ut;var vt=globalThis&&globalThis.__rest||function(a,e){var t={};for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&e.indexOf(r)<0&&(t[r]=a[r]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(a);n<r.length;n++)e.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(a,r[n])&&(t[r[n]]=a[r[n]]);return t},lr=function(e){var t=e.prefixCls,r=e.separator,n=r===void 0?"/":r,o=e.children,i=e.overlay,c=e.dropdownProps,y=vt(e,["prefixCls","separator","children","overlay","dropdownProps"]),p=_.exports.useContext(te),h=p.getPrefixCls,s=h("breadcrumb",t),d=function(u){return i?x(Mr,{overlay:i,placement:"bottom",...c,children:M("span",{className:"".concat(s,"-overlay-link"),children:[u,x(Er,{})]})}):u},S;return"href"in y?S=x("a",{className:"".concat(s,"-link"),...y,children:o}):S=x("span",{className:"".concat(s,"-link"),...y,children:o}),S=d(S),o?M("li",{children:[S,n&&x("span",{className:"".concat(s,"-separator"),children:n})]}):null};lr.__ANT_BREADCRUMB_ITEM=!0;const cr=lr;var sr=function(e){var t=e.children,r=_.exports.useContext(te),n=r.getPrefixCls,o=n("breadcrumb");return x("span",{className:"".concat(o,"-separator"),children:t||"/"})};sr.__ANT_BREADCRUMB_SEPARATOR=!0;const mt=sr;var gt=function(e){var t,r,n=e.componentCls,o=e.iconCls;return w({},n,ee(ee({},Fr(e)),(r={color:e.breadcrumbBaseColor,fontSize:e.breadcrumbFontSize},w(r,o,{fontSize:e.breadcrumbIconFontSize}),w(r,"ol",{display:"flex",flexWrap:"wrap",margin:0,padding:0,listStyle:"none"}),w(r,"a",ee({color:e.breadcrumbLinkColor,transition:"color ".concat(e.motionDurationFast),padding:"0 ".concat(e.paddingXXS,"px"),borderRadius:e.radiusSM,height:e.lineHeight*e.fontSize,display:"inline-block",marginInline:-e.marginXXS,"&:hover":{color:e.breadcrumbLinkColorHover,backgroundColor:e.colorBgTextHover}},Dr(e))),w(r,"li:last-child > ".concat(n,"-separator"),{display:"none"}),w(r,"".concat(n,"-separator"),{marginInline:e.breadcrumbSeparatorMargin,color:e.breadcrumbSeparatorColor}),w(r,"".concat(n,"-link"),w({},`
          > `.concat(o,` + span,
          > `).concat(o,` + a
        `),{marginInlineStart:e.marginXXS})),w(r,"".concat(n,"-overlay-link"),(t={borderRadius:e.radiusSM,height:e.lineHeight*e.fontSize,display:"inline-block",padding:"0 ".concat(e.paddingXXS,"px"),marginInline:-e.marginXXS},w(t,"> ".concat(o),{marginInlineStart:e.marginXXS,fontSize:e.fontSizeIcon}),w(t,"&:hover",{color:e.breadcrumbLinkColorHover,backgroundColor:e.colorBgTextHover,a:{color:e.breadcrumbLinkColorHover}}),w(t,"a",{"&:hover":{backgroundColor:"transparent"}}),t)),w(r,"&".concat(e.componentCls,"-rtl"),{direction:"rtl"}),r)))};const ht=Ze("Breadcrumb",function(a){var e=er(a,{breadcrumbBaseColor:a.colorTextDescription,breadcrumbFontSize:a.fontSizeBase,breadcrumbIconFontSize:a.fontSizeBase,breadcrumbLinkColor:a.colorTextDescription,breadcrumbLinkColorHover:a.colorText,breadcrumbLastItemColor:a.colorText,breadcrumbSeparatorMargin:a.marginXS,breadcrumbSeparatorColor:a.colorTextDescription});return[gt(e)]});var pt=globalThis&&globalThis.__rest||function(a,e){var t={};for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&e.indexOf(r)<0&&(t[r]=a[r]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(a);n<r.length;n++)e.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(a,r[n])&&(t[r[n]]=a[r[n]]);return t};function Ct(a,e){if(!a.breadcrumbName)return null;var t=Object.keys(e).join("|"),r=a.breadcrumbName.replace(new RegExp(":(".concat(t,")"),"g"),function(n,o){return e[o]||n});return r}function bt(a,e,t,r){var n=t.indexOf(a)===t.length-1,o=Ct(a,e);return n?x("span",{children:o}):x("a",{href:"#/".concat(r.join("/")),children:o})}var dr=function(e,t){return e=(e||"").replace(/^\//,""),Object.keys(t).forEach(function(r){e=e.replace(":".concat(r),t[r])}),e},xt=function(e,t,r){var n=Je(e),o=dr(t||"",r);return o&&n.push(o),n},_e=function(e){var t=e.prefixCls,r=e.separator,n=r===void 0?"/":r,o=e.style,i=e.className,c=e.routes,y=e.children,p=e.itemRender,h=p===void 0?bt:p,s=e.params,d=s===void 0?{}:s,S=pt(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),v=_.exports.useContext(te),u=v.getPrefixCls,l=v.direction,m,f=u("breadcrumb",t),g=ht(f),C=de(g,2),P=C[0],T=C[1];if(c&&c.length>0){var R=[];m=c.map(function(N){var O=dr(N.path,d);O&&R.push(O);var $;return N.children&&N.children.length&&($=x(Lr,{items:N.children.map(function(H){return{key:H.path||H.breadcrumbName,label:h(H,d,c,xt(R,H.path,d))}})})),x(cr,{overlay:$,separator:n,children:h(N,d,c,R)},O||N.breadcrumbName)})}else y&&(m=jr(y).map(function(N,O){return N&&qr(N,{separator:n,key:O})}));var B=E(f,w({},"".concat(f,"-rtl"),l==="rtl"),i,T);return P(x("nav",{className:B,style:o,...S,children:x("ol",{children:m})}))};_e.Item=cr;_e.Separator=mt;const yt=_e;var St=function(e){return w({},e.componentCls,{position:"fixed",insetInlineEnd:0,bottom:0,zIndex:99,display:"flex",alignItems:"center",width:"100%",paddingInline:24,paddingBlock:0,boxSizing:"border-box",lineHeight:"64px",backgroundColor:"rgba(255, 255, 255, 0.58)",borderBlockStart:"1px solid ".concat(e.colorSplit),"-webkit-backdrop-filter":"blur(8px)",backdropFilter:"blur(8px)",transition:"all 0.2s ease 0s","&-left":{flex:1},"&-right":{"> *":{marginInlineEnd:8,"&:last-child":{marginBlock:0,marginInline:0}}}})};function wt(a){return xe("footer-toolbar",function(e){var t=b(b({},e),{},{componentCls:".".concat(a)});return[St(t)]})}var Pt=["children","className","extra","style","renderContent"],_t=function(e){var t=e.children,r=e.className,n=e.extra,o=e.style,i=e.renderContent,c=ye(e,Pt),y=_.exports.useContext(ae.ConfigContext),p=y.getPrefixCls,h=y.getTargetContainer,s=e.prefixCls||p("pro"),d="".concat(s,"-footer-bar"),S=wt(d),v=S.wrapSSR,u=S.hashId,l=_.exports.useContext(Se),m=_.exports.useMemo(function(){var T=l.hasSiderMenu,R=l.isMobile,B=l.siderWidth;if(!!T)return B?R?"100%":"calc(100% - ".concat(B,"px)"):"100%"},[l.collapsed,l.hasSiderMenu,l.isMobile,l.siderWidth]),f=_.exports.useMemo(function(){return(h==null?void 0:h())||document.querySelector(".ant-pro")||document.body},[]),g=M(we,{children:[x("div",{className:"".concat(d,"-left ").concat(u),children:n}),x("div",{className:"".concat(d,"-right ").concat(u),children:t})]});_.exports.useEffect(function(){return!l||!(l!=null&&l.setHasFooterToolbar)?function(){}:(l==null||l.setHasFooterToolbar(!0),function(){var T;l==null||(T=l.setHasFooterToolbar)===null||T===void 0||T.call(l,!1)})},[]);var C=x("div",b(b({className:E(r,u,d),style:b({width:m},o)},kr(c,["prefixCls"])),{},{children:i?i(b(b(b({},e),l),{},{leftWidth:m}),g):g})),P=Wr()?Ur.exports.createPortal(C,f,d):C;return v(P)},Tt=function(e){return w({},e.componentCls,{width:"100%","&-wide":{maxWidth:1152,margin:"0 auto"}})};function Rt(a){return xe("pro-layout-grid-content",function(e){var t=b(b({},e),{},{componentCls:".".concat(a)});return[Tt(t)]})}var Nt=function(e){var t=_.exports.useContext(Se),r=e.children,n=e.contentWidth,o=e.className,i=e.style,c=_.exports.useContext(ae.ConfigContext),y=c.getPrefixCls,p=e.prefixCls||y("pro"),h=n||t.contentWidth,s="".concat(p,"-grid-content"),d=Rt(s),S=d.wrapSSR,v=d.hashId,u=h==="Fixed";return S(x("div",{className:E(s,v,o,w({},"".concat(s,"-wide"),u)),style:i,children:x("div",{className:"".concat(p,"-grid-content-children ").concat(v),children:r})}))},Ce={exports:{}},ve={},le={},Le;function It(){if(Le)return le;Le=1,Object.defineProperty(le,"__esModule",{value:!0});var a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"};return le.default=a,le}var V={};const Bt=Pe(Xr),ur=Pe(Gr);var Q={},je;function fr(){if(je)return Q;je=1,Object.defineProperty(Q,"__esModule",{value:!0}),Q.default=void 0;var a=_.exports,e=(0,a.createContext)({}),t=e;return Q.default=t,Q}var J={},A={};const Ot=Pe(Kr);var W={},ce={},qe;function Ht(){if(qe)return ce;qe=1,Object.defineProperty(ce,"__esModule",{value:!0}),ce.default=a;function a(e,t){if(!e)return!1;if(e.contains)return e.contains(t);for(var r=t;r;){if(r===e)return!0;r=r.parentNode}return!1}return ce}var ke;function At(){if(ke)return W;ke=1;var a=k.exports.default;Object.defineProperty(W,"__esModule",{value:!0}),W.injectCSS=h,W.removeCSS=d,W.updateCSS=v;var e=a(Yr),t=a(Ht()),r="data-rc-order",n="rc-util-key",o=new Map;function i(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=u.mark;return l?l.startsWith("data-")?l:"data-".concat(l):n}function c(u){if(u.attachTo)return u.attachTo;var l=document.querySelector("head");return l||document.body}function y(u){return u==="queue"?"prependQueue":u?"prepend":"append"}function p(u){return Array.from((o.get(u)||u).children).filter(function(l){return l.tagName==="STYLE"})}function h(u){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!(0,e.default)())return null;var m=l.csp,f=l.prepend,g=document.createElement("style");g.setAttribute(r,y(f)),m!=null&&m.nonce&&(g.nonce=m==null?void 0:m.nonce),g.innerHTML=u;var C=c(l),P=C.firstChild;if(f){if(f==="queue"){var T=p(C).filter(function(R){return["prepend","prependQueue"].includes(R.getAttribute(r))});if(T.length)return C.insertBefore(g,T[T.length-1].nextSibling),g}C.insertBefore(g,P)}else C.appendChild(g);return g}function s(u){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},m=c(l);return p(m).find(function(f){return f.getAttribute(i(l))===u})}function d(u){var l,m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},f=s(u,m);f==null||(l=f.parentNode)===null||l===void 0||l.removeChild(f)}function S(u,l){var m=o.get(u);if(!m||!(0,t.default)(document,m)){var f=h("",l),g=f.parentNode;o.set(u,g),g.removeChild(f)}}function v(u,l){var m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},f=c(m);S(f,m);var g=s(l,m);if(g){var C,P;if(((C=m.csp)===null||C===void 0?void 0:C.nonce)&&g.nonce!==((P=m.csp)===null||P===void 0?void 0:P.nonce)){var T;g.nonce=(T=m.csp)===null||T===void 0?void 0:T.nonce}return g.innerHTML!==u&&(g.innerHTML=u),g}var R=h(u,m);return R.setAttribute(i(m),l),R}return W}var We;function Te(){if(We)return A;We=1;var a=ue.exports,e=k.exports;Object.defineProperty(A,"__esModule",{value:!0}),A.warning=p,A.isIconDefinition=h,A.normalizeAttrs=s,A.generate=d,A.getSecondaryColor=S,A.normalizeTwoToneColors=v,A.useInsertStyles=A.iconStyles=A.svgBaseProps=void 0;var t=e(ne.exports),r=e(Vr.exports),n=Ot,o=a(_.exports),i=e(Qr),c=At(),y=e(fr());function p(f,g){(0,i.default)(f,"[@ant-design/icons] ".concat(g))}function h(f){return(0,r.default)(f)==="object"&&typeof f.name=="string"&&typeof f.theme=="string"&&((0,r.default)(f.icon)==="object"||typeof f.icon=="function")}function s(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(f).reduce(function(g,C){var P=f[C];switch(C){case"class":g.className=P,delete g.class;break;default:g[C]=P}return g},{})}function d(f,g,C){return C?o.default.createElement(f.tag,(0,t.default)((0,t.default)({key:g},s(f.attrs)),C),(f.children||[]).map(function(P,T){return d(P,"".concat(g,"-").concat(f.tag,"-").concat(T))})):o.default.createElement(f.tag,(0,t.default)({key:g},s(f.attrs)),(f.children||[]).map(function(P,T){return d(P,"".concat(g,"-").concat(f.tag,"-").concat(T))}))}function S(f){return(0,n.generate)(f)[0]}function v(f){return f?Array.isArray(f)?f:[f]:[]}var u={width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",focusable:"false"};A.svgBaseProps=u;var l=`
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`;A.iconStyles=l;var m=function(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:l,C=(0,o.useContext)(y.default),P=C.csp;(0,o.useEffect)(function(){(0,c.updateCSS)(g,"@ant-design-icons",{prepend:!0,csp:P})},[])};return A.useInsertStyles=m,A}var Ue;function vr(){if(Ue)return J;Ue=1;var a=k.exports;Object.defineProperty(J,"__esModule",{value:!0}),J.default=void 0;var e=a(ur),t=a(ne.exports),r=Te(),n=["icon","className","onClick","style","primaryColor","secondaryColor"],o={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function i(h){var s=h.primaryColor,d=h.secondaryColor;o.primaryColor=s,o.secondaryColor=d||(0,r.getSecondaryColor)(s),o.calculated=!!d}function c(){return(0,t.default)({},o)}var y=function(s){var d=s.icon,S=s.className,v=s.onClick,u=s.style,l=s.primaryColor,m=s.secondaryColor,f=(0,e.default)(s,n),g=o;if(l&&(g={primaryColor:l,secondaryColor:m||(0,r.getSecondaryColor)(l)}),(0,r.useInsertStyles)(),(0,r.warning)((0,r.isIconDefinition)(d),"icon should be icon definiton, but got ".concat(d)),!(0,r.isIconDefinition)(d))return null;var C=d;return C&&typeof C.icon=="function"&&(C=(0,t.default)((0,t.default)({},C),{},{icon:C.icon(g.primaryColor,g.secondaryColor)})),(0,r.generate)(C.icon,"svg-".concat(C.name),(0,t.default)({className:S,onClick:v,style:u,"data-icon":C.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},f))};y.displayName="IconReact",y.getTwoToneColors=c,y.setTwoToneColors=i;var p=y;return J.default=p,J}var Z={},Xe;function $t(){if(Xe)return Z;Xe=1;var a=k.exports;Object.defineProperty(Z,"__esModule",{value:!0}),Z.setTwoToneColor=n,Z.getTwoToneColor=o;var e=a(tr),t=a(vr()),r=Te();function n(i){var c=(0,r.normalizeTwoToneColors)(i),y=(0,e.default)(c,2),p=y[0],h=y[1];return t.default.setTwoToneColors({primaryColor:p,secondaryColor:h})}function o(){var i=t.default.getTwoToneColors();return i.calculated?[i.primaryColor,i.secondaryColor]:i.primaryColor}return Z}var Ge;function mr(){if(Ge)return V;Ge=1;var a=k.exports,e=ue.exports;Object.defineProperty(V,"__esModule",{value:!0}),V.default=void 0;var t=a(ne.exports),r=a(tr),n=a(Bt),o=a(ur),i=e(_.exports),c=a(Jr.exports),y=a(fr()),p=a(vr()),h=$t(),s=Te(),d=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];(0,h.setTwoToneColor)("#1890ff");var S=i.forwardRef(function(u,l){var m,f=u.className,g=u.icon,C=u.spin,P=u.rotate,T=u.tabIndex,R=u.onClick,B=u.twoToneColor,N=(0,o.default)(u,d),O=i.useContext(y.default),$=O.prefixCls,H=$===void 0?"anticon":$,D=(0,c.default)(H,(m={},(0,n.default)(m,"".concat(H,"-").concat(g.name),!!g.name),(0,n.default)(m,"".concat(H,"-spin"),!!C||g.name==="loading"),m),f),F=T;F===void 0&&R&&(F=-1);var I=P?{msTransform:"rotate(".concat(P,"deg)"),transform:"rotate(".concat(P,"deg)")}:void 0,z=(0,s.normalizeTwoToneColors)(B),j=(0,r.default)(z,2),X=j[0],G=j[1];return i.createElement("span",(0,t.default)((0,t.default)({role:"img","aria-label":g.name},N),{},{ref:l,tabIndex:F,onClick:R,className:D}),i.createElement(p.default,{icon:g,primaryColor:X,secondaryColor:G,style:I}))});S.displayName="AntdIcon",S.getTwoToneColor=h.getTwoToneColor,S.setTwoToneColor=h.setTwoToneColor;var v=S;return V.default=v,V}var zt=ue.exports,Re=k.exports;Object.defineProperty(ve,"__esModule",{value:!0});ve.default=void 0;var Ke=Re(ne.exports),gr=zt(_.exports),Mt=Re(It()),Et=Re(mr()),hr=function(e,t){return gr.createElement(Et.default,(0,Ke.default)((0,Ke.default)({},e),{},{ref:t,icon:Mt.default}))};hr.displayName="ArrowLeftOutlined";var Dt=gr.forwardRef(hr);ve.default=Dt;(function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=r(ve);function r(o){return o&&o.__esModule?o:{default:o}}var n=t;e.default=n,a.exports=n})(Ce,Ce.exports);const Ft=ar(Ce.exports);var be={exports:{}},me={},se={},Ye;function Lt(){if(Ye)return se;Ye=1,Object.defineProperty(se,"__esModule",{value:!0});var a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"};return se.default=a,se}var jt=ue.exports,Ne=k.exports;Object.defineProperty(me,"__esModule",{value:!0});me.default=void 0;var Ve=Ne(ne.exports),pr=jt(_.exports),qt=Ne(Lt()),kt=Ne(mr()),Cr=function(e,t){return pr.createElement(kt.default,(0,Ve.default)((0,Ve.default)({},e),{},{ref:t,icon:qt.default}))};Cr.displayName="ArrowRightOutlined";var Wt=pr.forwardRef(Cr);me.default=Wt;(function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=r(me);function r(o){return o&&o.__esModule?o:{default:o}}var n=t;e.default=n,a.exports=n})(be,be.exports);const Ut=ar(be.exports);var Qe=function(){return{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}},Xt=function(e){var t,r;return w({},e.componentCls,b(b({},he===null||he===void 0?void 0:he(e)),{},(r={position:"relative",backgroundColor:e.colorBgContainer,paddingBlock:e.pageHeaderPaddingVertical,paddingInline:e.pageHeaderPadding,"&-ghost":{backgroundColor:e.pageHeaderBgGhost},"&-has-breadcrumb":{paddingBlockStart:e.pageHeaderPaddingBreadCrumb},"&-has-footer":{paddingBlockEnd:0},"&-back":w({marginInlineEnd:e.margin,fontSize:16,lineHeight:1,"&-button":b(b({},ge===null||ge===void 0?void 0:ge(e)),{},{color:e.pageHeaderColorBack,cursor:"pointer"})},"".concat(e.componentCls,"-rlt &"),{float:"right",marginInlineEnd:0,marginInlineStart:0})},w(r,"ant".concat("-divider-vertical"),{height:14,marginBlock:0,marginInline:e.marginSM,verticalAlign:"middle"}),w(r,"&-breadcrumb + &-heading",{marginBlockStart:e.marginXS}),w(r,"&-heading",{display:"flex",justifyContent:"space-between","&-left":{display:"flex",alignItems:"center",marginBlock:e.marginXS/2,marginInlineEnd:0,marginInlineStart:0,overflow:"hidden"},"&-title":b(b({marginInlineEnd:e.marginSM,marginBlockEnd:0,color:e.colorTextHeading,fontWeight:600,fontSize:e.pageHeaderFontSizeHeaderTitle,lineHeight:e.controlHeight+"px"},Qe()),{},w({},"".concat(e.componentCls,"-rlt &"),{marginInlineEnd:0,marginInlineStart:e.marginSM})),"&-avatar":w({marginInlineEnd:e.marginSM},"".concat(e.componentCls,"-rlt &"),{float:"right",marginInlineEnd:0,marginInlineStart:e.marginSM}),"&-tags":w({},"".concat(e.componentCls,"-rlt &"),{float:"right"}),"&-sub-title":b(b({marginInlineEnd:e.marginSM,color:e.colorTextSecondary,fontSize:e.pageHeaderFontSizeHeaderSubTitle,lineHeight:e.lineHeight},Qe()),{},w({},"".concat(e.componentCls,"-rlt &"),{float:"right",marginInlineEnd:0,marginInlineStart:12})),"&-extra":(t={marginBlock:e.marginXS/2,marginInlineEnd:0,marginInlineStart:0,whiteSpace:"nowrap","> *":w({"white-space":"unset"},"".concat(e.componentCls,"-rlt &"),{marginInlineEnd:e.marginSM,marginInlineStart:0})},w(t,"".concat(e.componentCls,"-rlt &"),{float:"left"}),w(t,"*:first-child",w({},"".concat(e.componentCls,"-rlt &"),{marginInlineEnd:0})),t)}),w(r,"&-content",{paddingBlockStart:e.pageHeaderPaddingContentPadding}),w(r,"&-footer",{marginBlockStart:e.margin}),w(r,"&-compact &-heading",{flexWrap:"wrap"}),w(r,"&-rtl",{direction:"rtl"}),r)))};function Gt(a){return xe("page-header",function(e){var t=b(b({},e),{},{componentCls:".".concat(a),pageHeaderBgGhost:"transparent",pageHeaderPadding:16,pageHeaderPaddingVertical:8,pageHeaderPaddingBreadCrumb:e.paddingSM,pageHeaderColorBack:e.colorIcon,pageHeaderFontSizeHeaderTitle:e.fontSizeHeading4,pageHeaderFontSizeHeaderSubTitle:14,pageHeaderPaddingContentPadding:e.paddingSM});return[Xt(t)]})}var Kt=function(e,t,r){return!t||!r?null:x("div",{className:"".concat(e,"-back"),children:x(tt,{type:"text",onClick:function(o){r==null||r(o)},className:"".concat(e,"-back-button"),"aria-label":"back",children:t})})},Yt=function(e,t){return x(yt,b(b({},e),{},{className:E("".concat(t,"-breadcrumb"),e.className)}))},Vt=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"ltr";return e.backIcon!==void 0?e.backIcon:t==="rtl"?x(Ut,{}):x(Ft,{})},Qt=function(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"ltr",n=arguments.length>3?arguments[3]:void 0,o=t.title,i=t.avatar,c=t.subTitle,y=t.tags,p=t.extra,h=t.onBack,s="".concat(e,"-heading"),d=o||c||y||p;if(!d)return null;var S=Vt(t,r),v=Kt(e,S,h),u=v||i||d;return M("div",{className:s+" "+n,children:[u&&M("div",{className:"".concat(s,"-left ").concat(n),children:[v,i&&x(et,b({className:E("".concat(s,"-avatar"),n,i.className)},i)),o&&x("span",{className:"".concat(s,"-title ").concat(n),title:typeof o=="string"?o:void 0,children:o}),c&&x("span",{className:"".concat(s,"-sub-title ").concat(n),title:typeof c=="string"?c:void 0,children:c}),y&&x("span",{className:"".concat(s,"-tags ").concat(n),children:y})]}),p&&x("span",{className:"".concat(s,"-extra ").concat(n),children:x(rt,{children:p})})]})},Jt=function(e,t,r){return t?x("div",{className:"".concat(e,"-footer ").concat(r),children:t}):null},Zt=function(e,t,r){return x("div",{className:"".concat(e,"-content ").concat(r),children:t})},ea=function(e){var t,r,n=Zr(!1),o=de(n,2),i=o[0],c=o[1],y=function(G){var oe=G.width;c(oe<768,!0)},p=_.exports.useContext(ae.ConfigContext),h=p.getPrefixCls,s=p.pageHeader,d=p.direction,S=e.prefixCls,v=e.style,u=e.footer,l=e.children,m=e.breadcrumb,f=e.breadcrumbRender,g=e.className,C=!0;"ghost"in e?C=e.ghost:s&&"ghost"in s&&(C=s.ghost);var P=h("page-header",S),T=Gt(P),R=T.wrapSSR,B=T.hashId,N=function(){return m!=null&&m.routes?Yt(m,P):null},O=N(),$=m&&"props"in m,H=(t=f==null?void 0:f(b(b({},e),{},{prefixCls:P}),O))!==null&&t!==void 0?t:O,D=$?m:H,F=E(P,e.className,g,(r={hashId:B},w(r,"".concat(P,"-has-breadcrumb"),!!D),w(r,"".concat(P,"-has-footer"),!!u),w(r,"".concat(P,"-ghost"),C),w(r,"".concat(P,"-rtl"),d==="rtl"),w(r,"".concat(P,"-compact"),i),r)),I=Qt(P,e,d,B),z=l&&Zt(P,l,B),j=Jt(P,u,B);return!D&&!I&&!j&&!z?null:R(x(pe,{onResize:y,children:M("div",{className:F,style:v,children:[D,I,z,j]})}))},ra=function(e){if(!e)return 1;var t=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/t},ta=function(e){var t=e.children,r=e.style,n=e.className,o=e.markStyle,i=e.markClassName,c=e.zIndex,y=c===void 0?9:c,p=e.gapX,h=p===void 0?212:p,s=e.gapY,d=s===void 0?222:s,S=e.width,v=S===void 0?120:S,u=e.height,l=u===void 0?64:u,m=e.rotate,f=m===void 0?-22:m,g=e.image,C=e.content,P=e.offsetLeft,T=e.offsetTop,R=e.fontStyle,B=R===void 0?"normal":R,N=e.fontWeight,O=N===void 0?"normal":N,$=e.fontColor,H=$===void 0?"rgba(0,0,0,.15)":$,D=e.fontSize,F=D===void 0?16:D,I=e.fontFamily,z=I===void 0?"sans-serif":I,j=e.prefixCls,X=_.exports.useContext(ae.ConfigContext),G=X.getPrefixCls,oe=G("pro-layout-watermark",j),br=E("".concat(oe,"-wrapper"),n),xr=E(oe,i),yr=_.exports.useState(""),Ie=de(yr,2),Be=Ie[0],Oe=Ie[1];return _.exports.useEffect(function(){var K=document.createElement("canvas"),L=K.getContext("2d"),q=ra(L),Sr="".concat((h+v)*q,"px"),wr="".concat((d+l)*q,"px"),Pr=P||h/2,_r=T||d/2;if(K.setAttribute("width",Sr),K.setAttribute("height",wr),L){L.translate(Pr*q,_r*q),L.rotate(Math.PI/180*Number(f));var Tr=v*q,He=l*q;if(g){var Y=new Image;Y.crossOrigin="anonymous",Y.referrerPolicy="no-referrer",Y.src=g,Y.onload=function(){L.drawImage(Y,0,0,Tr,He),Oe(K.toDataURL())}}else if(C){var Rr=Number(F)*q;L.font="".concat(B," normal ").concat(O," ").concat(Rr,"px/").concat(He,"px ").concat(z),L.fillStyle=H,Array.isArray(C)?C==null||C.forEach(function(Nr,Ir){return L.fillText(Nr,0,Ir*50)}):L.fillText(C,0,0),Oe(K.toDataURL())}}else console.error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301Canvas")},[h,d,P,T,f,B,O,v,l,z,H,g,C,F]),M("div",{style:b({position:"relative"},r),className:br,children:[t,x("div",{className:xr,style:b(b({zIndex:y,position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundSize:"".concat(h+v,"px"),pointerEvents:"none",backgroundRepeat:"repeat"},Be?{backgroundImage:"url('".concat(Be,"')")}:{}),o)})]})},aa=["title","content","pageHeaderRender","header","prefixedClassName","extraContent","style","prefixCls","hashId","value","breadcrumbRender"],na=["children","loading","className","style","footer","affixProps","fixedHeader","breadcrumbRender"];function oa(a){return rr(a)==="object"?a:{spinning:a}}var ia=function(e){var t=e.tabList,r=e.tabActiveKey,n=e.onTabChange,o=e.hashId,i=e.tabBarExtraContent,c=e.tabProps,y=e.prefixedClassName;return Array.isArray(t)||i?x(ze,b(b({className:"".concat(y,"-tabs ").concat(o),activeKey:r,onChange:function(h){n&&n(h)},tabBarExtraContent:i,items:t==null?void 0:t.map(function(p,h){var s;return b(b({label:p.tab},p),{},{key:((s=p.key)===null||s===void 0?void 0:s.toString())||(h==null?void 0:h.toString())})})},c),{},{children:t==null?void 0:t.map(function(p,h){return x(ze.TabPane,b({tab:p.tab},p),p.key||h)})})):null},la=function(e,t,r,n){return!e&&!t?null:x("div",{className:"".concat(r,"-detail ").concat(n),children:x("div",{className:"".concat(r,"-main ").concat(n),children:M("div",{className:"".concat(r,"-row ").concat(n),children:[e&&x("div",{className:"".concat(r,"-content ").concat(n),children:e}),t&&x("div",{className:"".concat(r,"-extraContent ").concat(n),children:t})]})})})},ca=function(e){var t,r=e.title,n=e.content,o=e.pageHeaderRender,i=e.header,c=e.prefixedClassName,y=e.extraContent;e.style;var p=e.prefixCls,h=e.hashId,s=e.value,d=e.breadcrumbRender,S=ye(e,aa),v=function(){if(!!d)return d};if(o===!1)return null;if(o)return M(we,{children:[" ",o(b(b({},e),s))]});var u=r;!r&&r!==!1&&(u=s.title);var l=b(b(b({},s),{},{title:u},S),{},{footer:ia(b(b({},S),{},{hashId:h,breadcrumbRender:d,prefixedClassName:c}))},i),m=l.breadcrumb,f=(!m||!(m!=null&&m.itemRender)&&!(!(m==null||(t=m.routes)===null||t===void 0)&&t.length))&&!d;return["title","subTitle","extra","tags","footer","avatar","backIcon"].every(function(g){return!l[g]})&&f&&!n&&!y?null:x(ea,b(b({},l),{},{className:"".concat(c,"-warp-page-header ").concat(h),breadcrumb:d===!1?void 0:b(b({},l.breadcrumb),s.breadcrumbProps),breadcrumbRender:v(),prefixCls:p,children:(i==null?void 0:i.children)||la(n,y,c,h)}))},sa=function(e){var t,r,n=e.children,o=e.loading,i=o===void 0?!1:o,c=e.className,y=e.style,p=e.footer,h=e.affixProps,s=e.fixedHeader,d=e.breadcrumbRender,S=ye(e,na),v=_.exports.useContext(Se);_.exports.useEffect(function(){var I;return!v||!(v!=null&&v.setHasPageContainer)?function(){}:(v==null||(I=v.setHasPageContainer)===null||I===void 0||I.call(v,!0),function(){var z;v==null||(z=v.setHasPageContainer)===null||z===void 0||z.call(v,!1)})},[]);var u=_.exports.useContext($e),l=u.pageContainer,m=_.exports.useContext(ae.ConfigContext),f=m.getPrefixCls,g=e.prefixCls||f("pro"),C="".concat(g,"-page-container"),P=at(C),T=P.wrapSSR,R=P.hashId,B=_.exports.useMemo(function(){var I;return d==!1?!1:d||(S==null||(I=S.header)===null||I===void 0?void 0:I.breadcrumbRender)},[d,S==null||(t=S.header)===null||t===void 0?void 0:t.breadcrumbRender]),N=ca(b(b({},S),{},{breadcrumbRender:B,ghost:!0,hashId:R,prefixCls:void 0,prefixedClassName:C,value:v})),O=_.exports.useMemo(function(){if(nt.isValidElement(i))return i;if(typeof i=="boolean"&&!i)return null;var I=oa(i);return I.spinning?x(ot,b({},I)):null},[i]),$=_.exports.useMemo(function(){return n?M(we,{children:[x("div",{className:E("".concat(C,"-children-content ").concat(R)),children:n}),v.hasFooterToolbar&&x("div",{style:{height:64,marginBlockStart:l.marginBlockPageContainerContent}})]}):null},[n,C,R,v.hasFooterToolbar,l.marginBlockPageContainerContent]),H=_.exports.useMemo(function(){var I=O||$;if(e.waterMarkProps||v.waterMarkProps){var z=b(b({},v.waterMarkProps),e.waterMarkProps);return x(ta,b(b({},z),{},{children:I}))}return I},[e.waterMarkProps,v.waterMarkProps,O,$]),D=E(C,R,c,(r={},w(r,"".concat(C,"-ghost"),!0),w(r,"".concat(C,"-with-footer"),p),w(r,"".concat(C,"-with-affix"),s&&N),r)),F=_.exports.useContext($e);return T(M(it,{children:[M("div",{style:y,className:D,children:[s&&N?x(ft,b(b({offsetTop:v.hasHeader&&v.fixedHeader?F.header.heightLayoutHeader:0},h),{},{className:"".concat(C,"-affix ").concat(R),children:N})):N,H&&x(Nt,{children:H})]}),p&&x(_t,{prefixCls:g,children:p})]}))};const ua=a=>_.exports.cloneElement(x(sa,{header:{title:"",breadcrumb:{}},className:"px-4"}),a);export{ua as B};
