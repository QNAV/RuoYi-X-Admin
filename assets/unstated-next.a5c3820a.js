import{j as r,F as Ce,d as E,a as b,r as u,V as ye,_ as ie,W as se,g as H,h as X,X as oe,Y as ge,Z as be,$ as xe,a0 as we,a1 as ke,a2 as ce,a3 as Ne,a4 as de}from"./index.ab629474.js";var Se=typeof process<"u"&&process.versions!=null&&process.versions.node!=null,pe=function(){return typeof window<"u"&&typeof window.document<"u"&&typeof window.matchMedia<"u"&&!Se};const Ie=pe;var Oe=function(t){var i=t.prefixCls,a=t.className,n=t.style,l=t.children,s=t.containerRef;return r(Ce,{children:r("div",{className:E("".concat(i,"-content"),a),style:b({},n),"aria-modal":"true",role:"dialog",ref:s,children:l})})},ue=u.exports.createContext(null);function fe(e){return typeof e=="string"&&String(Number(e))===e?(ye(!1,"Invalid value type of `width` or `height` which should be number type instead."),Number(e)):e}var ve={width:0,height:0,overflow:"hidden",outline:"none",position:"absolute"};function he(e){var t,i,a,n,l=e.prefixCls,s=e.open,m=e.placement,N=e.inline,x=e.push,S=e.forceRender,w=e.autoFocus,L=e.keyboard,v=e.scrollLocker,p=e.rootClassName,O=e.rootStyle,C=e.zIndex,Y=e.className,Z=e.style,z=e.motion,P=e.width,q=e.height,T=e.children,W=e.contentWrapperStyle,j=e.mask,J=e.maskClosable,$=e.maskMotion,A=e.maskClassName,F=e.maskStyle,k=e.afterOpenChange,V=e.onClose,D=u.exports.useRef(),R=u.exports.useRef(),K=u.exports.useRef(),Q=function(f){var I=f.keyCode,M=f.shiftKey;switch(I){case oe.TAB:{if(I===oe.TAB){if(!M&&document.activeElement===K.current){var ae;(ae=R.current)===null||ae===void 0||ae.focus({preventScroll:!0})}else if(M&&document.activeElement===R.current){var re;(re=K.current)===null||re===void 0||re.focus({preventScroll:!0})}}break}case oe.ESC:{V&&L&&V(f);break}}};u.exports.useEffect(function(){if(s&&w){var o;(o=D.current)===null||o===void 0||o.focus({preventScroll:!0})}},[s,w]);var d=u.exports.useState(!1),B=ie(d,2),U=B[0],G=B[1],c=u.exports.useContext(ue),_;x===!1?_={distance:0}:x===!0?_={}:_=x||{};var y=(t=(i=(a=_)===null||a===void 0?void 0:a.distance)!==null&&i!==void 0?i:c==null?void 0:c.pushDistance)!==null&&t!==void 0?t:180,ee=u.exports.useMemo(function(){return{pushDistance:y,push:function(){G(!0)},pull:function(){G(!1)}}},[y]);u.exports.useEffect(function(){if(s){var o;c==null||(o=c.push)===null||o===void 0||o.call(c)}else{var f;c==null||(f=c.pull)===null||f===void 0||f.call(c)}},[s]),u.exports.useEffect(function(){s&&j&&(v==null||v.lock())},[s,j]),u.exports.useEffect(function(){return function(){var o;v==null||v.unLock(),c==null||(o=c.pull)===null||o===void 0||o.call(c)}},[]);var te=j&&r(se,{...$,visible:s,children:function(o,f){var I=o.className,M=o.style;return r("div",{className:E("".concat(l,"-mask"),I,A),style:b(b({},M),F),onClick:J?V:void 0,ref:f})}},"mask"),ne=typeof z=="function"?z(m):z,h={};if(U&&y)switch(m){case"top":h.transform="translateY(".concat(y,"px)");break;case"bottom":h.transform="translateY(".concat(-y,"px)");break;case"left":h.transform="translateX(".concat(y,"px)");break;default:h.transform="translateX(".concat(-y,"px)");break}m==="left"||m==="right"?h.width=fe(P):h.height=fe(q);var g=r(se,{...ne,visible:s,forceRender:S,onVisibleChanged:function(f){k==null||k(f),f||v==null||v.unLock()},removeOnLeave:!1,leavedClassName:"".concat(l,"-content-wrapper-hidden"),children:function(o,f){var I=o.className,M=o.style;return r("div",{className:E("".concat(l,"-content-wrapper"),I),style:b(b(b({},h),M),W),children:r(Oe,{containerRef:f,prefixCls:l,className:Y,style:Z,children:T})})}},"panel"),le=b({},O);return C&&(le.zIndex=C),r(ue.Provider,{value:ee,children:H("div",{className:E(l,"".concat(l,"-").concat(m),p,(n={},X(n,"".concat(l,"-open"),s),X(n,"".concat(l,"-inline"),N),n)),style:le,tabIndex:-1,ref:D,onKeyDown:Q,children:[te,r("div",{tabIndex:0,ref:R,style:ve,"aria-hidden":"true","data-sentinel":"start"}),g,r("div",{tabIndex:0,ref:K,style:ve,"aria-hidden":"true","data-sentinel":"end"})]})})}var Pe=function(){return document.body},me=function(t){var i=t.open,a=t.getContainer,n=t.forceRender,l=t.wrapperClassName,s=t.prefixCls,m=t.afterOpenChange,N=t.destroyOnClose,x=u.exports.useState(!1),S=ie(x,2),w=S[0],L=S[1],v=function(C){L(C),m==null||m(C)};if(!n&&!w&&!i&&N)return null;var p=b(b({},t),{},{prefixCls:s,afterOpenChange:v});return a===!1?r(he,{...p,inline:!0}):r(ge,{visible:i,forceRender:n,getContainer:a,wrapperClassName:l,children:function(O){var C=O.scrollLocker;return r(he,{...p,scrollLocker:C})}})};me.defaultProps={open:!1,getContainer:Pe,prefixCls:"rc-drawer",placement:"right",autoFocus:!0,keyboard:!0,width:378,mask:!0,maskClosable:!0};var De=globalThis&&globalThis.__rest||function(e,t){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(i[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(i[a[n]]=e[a[n]]);return i};be("default","large");var Re={distance:180};function Me(e){var t=e.width,i=e.height,a=e.size,n=a===void 0?"default":a,l=e.closable,s=l===void 0?!0:l,m=e.mask,N=m===void 0?!0:m,x=e.push,S=x===void 0?Re:x,w=e.closeIcon,L=w===void 0?r(Ne,{}):w,v=e.bodyStyle,p=e.drawerStyle,O=e.className,C=e.visible,Y=e.open,Z=e.children,z=e.style,P=e.title,q=e.headerStyle,T=e.onClose,W=e.footer,j=e.footerStyle,J=e.prefixCls,$=e.getContainer,A=e.extra,F=e.afterVisibleChange,k=e.afterOpenChange,V=De(e,["width","height","size","closable","mask","push","closeIcon","bodyStyle","drawerStyle","className","visible","open","children","style","title","headerStyle","onClose","footer","footerStyle","prefixCls","getContainer","extra","afterVisibleChange","afterOpenChange"]),D=u.exports.useContext(xe),R=D.getPopupContainer,K=D.getPrefixCls,Q=D.direction,d=K("drawer",J),B=$===void 0&&R?function(){return R(document.body)}:$,U=s&&r("button",{type:"button",onClick:T,"aria-label":"Close",className:"".concat(d,"-close"),children:L});[["visible","open"],["afterVisibleChange","afterOpenChange"]].forEach(function(h){var g=ie(h,2);g[0],g[1]});function G(){return!P&&!s?null:H("div",{className:E("".concat(d,"-header"),X({},"".concat(d,"-header-close-only"),s&&!P&&!A)),style:q,children:[H("div",{className:"".concat(d,"-header-title"),children:[U,P&&r("div",{className:"".concat(d,"-title"),children:P})]}),A&&r("div",{className:"".concat(d,"-extra"),children:A})]})}function c(){if(!W)return null;var h="".concat(d,"-footer");return r("div",{className:h,style:j,children:W})}var _=E(X({"no-mask":!N},"".concat(d,"-rtl"),Q==="rtl"),O),y=u.exports.useMemo(function(){return t!=null?t:n==="large"?736:378},[t,n]),ee=u.exports.useMemo(function(){return i!=null?i:n==="large"?736:378},[i,n]),te={motionName:ce(d,"mask-motion"),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500},ne=function(g){return{motionName:ce(d,"panel-motion-".concat(g)),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500}};return r(we,{status:!0,override:!0,children:r(me,{prefixCls:d,onClose:T,...V,open:Y||C,mask:N,push:S,width:y,height:ee,rootClassName:_,getContainer:B,afterOpenChange:function(g){k==null||k(g),F==null||F(g)},maskMotion:te,motion:ne,rootStyle:z,children:H("div",{className:"".concat(d,"-wrapper-body"),style:ke({},p),children:[G(),r("div",{className:"".concat(d,"-body"),style:v,children:Z}),c()]})})})}function Ee(e){var t=de.createContext(null);function i(n){var l=e(n.initialState);return r(t.Provider,{value:l,children:n.children})}function a(){var n=de.useContext(t);if(n===null)throw new Error("Component must be wrapped with <Container.Provider>");return n}return{Provider:i,useContainer:a}}export{Me as D,Ee as c,Ie as i};
