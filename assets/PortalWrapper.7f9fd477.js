import{r as f,j as E,aG as D,a7 as j,m as $,n as w,_ as A,e as I,f as W,b as L,o as H,p as z,aq as R,aa as B,q}from"./index.4a7583d0.js";import{a as G,u as V,P as X}from"./index.4fe5dc19.js";var re=f.exports.createContext({labelAlign:"right",vertical:!1,itemRef:function(){}}),oe=f.exports.createContext(null),ie=function(o){var n=G(o,["prefixCls"]);return E(D,{...n})},ae=f.exports.createContext({prefixCls:""}),T=f.exports.createContext({}),ce=function(o){var n=o.children,t=o.status,e=o.override,r=f.exports.useContext(T),i=f.exports.useMemo(function(){var l=j({},r);return e&&delete l.isFormItemInput,t&&(delete l.status,delete l.hasFeedback,delete l.feedbackIcon),l},[t,e,r]);return E(T.Provider,{value:i,children:n})},Y=function(o){var n=f.exports.useRef(null);return n.current=o,f.exports.useCallback(function(){for(var t,e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return(t=n.current)===null||t===void 0?void 0:t.call.apply(t,[n].concat(r))},[])};function se(a,o){var n=Y(a),t=f.exports.useRef(),e=f.exports.useCallback(function(){t.current&&(clearTimeout(t.current),t.current=null)},[]),r=f.exports.useCallback($(w().mark(function i(){var l,c,s,u=arguments;return w().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:for(l=u.length,c=new Array(l),s=0;s<l;s++)c[s]=u[s];if(!(o===0||o===void 0)){m.next=3;break}return m.abrupt("return",n.apply(void 0,c));case 3:return e(),m.abrupt("return",new Promise(function(M){t.current=setTimeout($(w().mark(function U(){return w().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.t0=M,v.next=3,n.apply(void 0,c);case 3:v.t1=v.sent,(0,v.t0)(v.t1);case 5:case"end":return v.stop()}},U)})),o)}));case 5:case"end":return m.stop()}},i)})),[n,e,o]);return f.exports.useEffect(function(){return e},[e]),{run:r,cancel:e}}var K=function(o){var n={};if(Object.keys(o||{}).forEach(function(t){o[t]!==void 0&&(n[t]=o[t])}),!(Object.keys(n).length<1))return n};const le=K;function ue(a,o){var n=V(a,o),t=A(n,2),e=t[0],r=t[1];return[e,r]}var k;function _(a){if(typeof document>"u")return 0;if(a||k===void 0){var o=document.createElement("div");o.style.width="100%",o.style.height="200px";var n=document.createElement("div"),t=n.style;t.position="absolute",t.top="0",t.left="0",t.pointerEvents="none",t.visibility="hidden",t.width="200px",t.height="150px",t.overflow="hidden",n.appendChild(o),document.body.appendChild(n);var e=o.offsetWidth;n.style.overflow="scroll";var r=o.offsetWidth;e===r&&(r=n.clientWidth),document.body.removeChild(n),k=e-r}return k}function P(a){var o=a.match(/^(.*)px$/),n=Number(o==null?void 0:o[1]);return Number.isNaN(n)?_():n}function fe(a){if(typeof document>"u"||!a||!(a instanceof Element))return{width:0,height:0};var o=getComputedStyle(a,"::-webkit-scrollbar"),n=o.width,t=o.height;return{width:P(n),height:P(t)}}function g(a){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!a)return{};var n=o.element,t=n===void 0?document.body:n,e={},r=Object.keys(a);return r.forEach(function(i){e[i]=t.style[i]}),r.forEach(function(i){t.style[i]=a[i]}),e}function J(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth}var N={};const F=function(a){if(!(!J()&&!a)){var o="ant-scrolling-effect",n=new RegExp("".concat(o),"g"),t=document.body.className;if(a){if(!n.test(t))return;g(N),N={},document.body.className=t.replace(n,"").trim();return}var e=_();if(e&&(N=g({position:"relative",width:"calc(100% - ".concat(e,"px)")}),!n.test(t))){var r="".concat(t," ").concat(o);document.body.className=r.trim()}}};var Q=0,d=[],O="ant-scrolling-effect",x=new RegExp("".concat(O),"g"),S=new Map,Z=I(function a(o){var n=this;W(this,a),this.lockTarget=void 0,this.options=void 0,this.getContainer=function(){var t;return(t=n.options)===null||t===void 0?void 0:t.container},this.reLock=function(t){var e=d.find(function(r){var i=r.target;return i===n.lockTarget});e&&n.unLock(),n.options=t,e&&(e.options=t,n.lock())},this.lock=function(){var t;if(!d.some(function(c){var s=c.target;return s===n.lockTarget})){if(d.some(function(c){var s,u=c.options;return(u==null?void 0:u.container)===((s=n.options)===null||s===void 0?void 0:s.container)})){d=[].concat(L(d),[{target:n.lockTarget,options:n.options}]);return}var e=0,r=((t=n.options)===null||t===void 0?void 0:t.container)||document.body;(r===document.body&&window.innerWidth-document.documentElement.clientWidth>0||r.scrollHeight>r.clientHeight)&&(e=_());var i=r.className;if(d.filter(function(c){var s,u=c.options;return(u==null?void 0:u.container)===((s=n.options)===null||s===void 0?void 0:s.container)}).length===0&&S.set(r,g({width:e!==0?"calc(100% - ".concat(e,"px)"):void 0,overflow:"hidden",overflowX:"hidden",overflowY:"hidden"},{element:r})),!x.test(i)){var l="".concat(i," ").concat(O);r.className=l.trim()}d=[].concat(L(d),[{target:n.lockTarget,options:n.options}])}},this.unLock=function(){var t,e=d.find(function(l){var c=l.target;return c===n.lockTarget});if(d=d.filter(function(l){var c=l.target;return c!==n.lockTarget}),!(!e||d.some(function(l){var c,s=l.options;return(s==null?void 0:s.container)===((c=e.options)===null||c===void 0?void 0:c.container)}))){var r=((t=n.options)===null||t===void 0?void 0:t.container)||document.body,i=r.className;!x.test(i)||(g(S.get(r),{element:r}),S.delete(r),r.className=r.className.replace(x,"").trim())}},this.lockTarget=Q++,this.options=o}),p=0,b=B(),y={},h=function(o){if(!b)return null;if(o){if(typeof o=="string")return document.querySelectorAll(o)[0];if(typeof o=="function")return o();if(q(o)==="object"&&o instanceof window.HTMLElement)return o}return document.body},de=function(a){H(n,a);var o=z(n);function n(t){var e;return W(this,n),e=o.call(this,t),e.container=void 0,e.componentRef=f.exports.createRef(),e.rafId=void 0,e.scrollLocker=void 0,e.renderComponent=void 0,e.updateScrollLocker=function(r){var i=r||{},l=i.visible,c=e.props,s=c.getContainer,u=c.visible;u&&u!==l&&b&&h(s)!==e.scrollLocker.getContainer()&&e.scrollLocker.reLock({container:h(s)})},e.updateOpenCount=function(r){var i=r||{},l=i.visible,c=i.getContainer,s=e.props,u=s.visible,C=s.getContainer;u!==l&&b&&h(C)===document.body&&(u&&!l?p+=1:r&&(p-=1));var m=typeof C=="function"&&typeof c=="function";(m?C.toString()!==c.toString():C!==c)&&e.removeCurrentContainer()},e.attachToParent=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(r||e.container&&!e.container.parentNode){var i=h(e.props.getContainer);return i?(i.appendChild(e.container),!0):!1}return!0},e.getContainer=function(){return b?(e.container||(e.container=document.createElement("div"),e.attachToParent(!0)),e.setWrapperClassName(),e.container):null},e.setWrapperClassName=function(){var r=e.props.wrapperClassName;e.container&&r&&r!==e.container.className&&(e.container.className=r)},e.removeCurrentContainer=function(){var r,i;(r=e.container)===null||r===void 0||(i=r.parentNode)===null||i===void 0||i.removeChild(e.container)},e.switchScrollingEffect=function(){p===1&&!Object.keys(y).length?(F(),y=g({overflow:"hidden",overflowX:"hidden",overflowY:"hidden"})):p||(g(y),y={},F(!0))},e.scrollLocker=new Z({container:h(t.getContainer)}),e}return I(n,[{key:"componentDidMount",value:function(){var e=this;this.updateOpenCount(),this.attachToParent()||(this.rafId=R(function(){e.forceUpdate()}))}},{key:"componentDidUpdate",value:function(e){this.updateOpenCount(e),this.updateScrollLocker(e),this.setWrapperClassName(),this.attachToParent()}},{key:"componentWillUnmount",value:function(){var e=this.props,r=e.visible,i=e.getContainer;b&&h(i)===document.body&&(p=r&&p?p-1:p),this.removeCurrentContainer(),R.cancel(this.rafId)}},{key:"render",value:function(){var e=this.props,r=e.children,i=e.forceRender,l=e.visible,c=null,s={getOpenCount:function(){return p},getContainer:this.getContainer,switchScrollingEffect:this.switchScrollingEffect,scrollLocker:this.scrollLocker};return(i||l||this.componentRef.current)&&(c=E(X,{getContainer:this.getContainer,ref:this.componentRef,children:r(s)})),c}}]),n}(f.exports.Component);export{ae as F,ce as N,de as P,se as a,re as b,T as c,oe as d,ie as e,Y as f,_ as g,fe as h,le as o,ue as u};
