import{r as v,aT as X,aU as Y}from"./index.243e07d2.js";var Z=function(e){return function(r,t){var o=v.exports.useRef(!1);e(function(){return function(){o.current=!1}},[]),e(function(){if(!o.current)o.current=!0;else return r()},t)}},A=function(e){return typeof e=="function"},k=!1;const H=k;function P(n){H&&(A(n)||console.error("useMemoizedFn expected parameter is a function, got "+typeof n));var e=v.exports.useRef(n);e.current=v.exports.useMemo(function(){return n},[n]);var r=v.exports.useRef();return r.current||(r.current=function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];return e.current.apply(this,t)}),r.current}const W=Z(v.exports.useEffect);var I=globalThis&&globalThis.__read||function(n,e){var r=typeof Symbol=="function"&&n[Symbol.iterator];if(!r)return n;var t=r.call(n),o,a=[],u;try{for(;(e===void 0||e-- >0)&&!(o=t.next()).done;)a.push(o.value)}catch(s){u={error:s}}finally{try{o&&!o.done&&(r=t.return)&&r.call(t)}finally{if(u)throw u.error}}return a},G=globalThis&&globalThis.__spread||function(){for(var n=[],e=0;e<arguments.length;e++)n=n.concat(I(arguments[e]));return n},J=function(e,r){var t=r.manual,o=r.ready,a=o===void 0?!0:o,u=r.defaultParams,s=u===void 0?[]:u,f=r.refreshDeps,i=f===void 0?[]:f,l=r.refreshDepsAction,c=v.exports.useRef(!1);return c.current=!1,W(function(){!t&&a&&(c.current=!0,e.run.apply(e,G(s)))},[a]),W(function(){c.current||t||(c.current=!0,l?l():e.refresh())},G(i)),{onBefore:function(){if(!a)return{stopNow:!0}}}};J.onInit=function(n){var e=n.ready,r=e===void 0?!0:e,t=n.manual;return{loading:!t&&r}};const ee=J;function re(n,e){if(n===e)return!0;for(var r=0;r<n.length;r++)if(!Object.is(n[r],e[r]))return!1;return!0}function K(n,e){var r=v.exports.useRef({deps:e,obj:void 0,initialized:!1}).current;return(r.initialized===!1||!re(r.deps,e))&&(r.deps=e,r.obj=n(),r.initialized=!0),r.obj}function Q(n){var e=v.exports.useRef(n);return e.current=n,e}var ne=function(e){H&&(A(e)||console.error("useUnmount expected parameter is a function, got "+typeof e));var r=Q(e);v.exports.useEffect(function(){return function(){r.current()}},[])};const U=ne;var F=globalThis&&globalThis.__assign||function(){return F=Object.assign||function(n){for(var e,r=1,t=arguments.length;r<t;r++){e=arguments[r];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},F.apply(this,arguments)},E=new Map,te=function(e,r,t){var o=E.get(e);o!=null&&o.timer&&clearTimeout(o.timer);var a=void 0;r>-1&&(a=setTimeout(function(){E.delete(e)},r)),E.set(e,F(F({},t),{timer:a}))},oe=function(e){return E.get(e)},j=new Map,ae=function(e){return j.get(e)},ie=function(e,r){j.set(e,r),r.then(function(t){return j.delete(e),t}).catch(function(){j.delete(e)})},T={},ue=function(e,r){T[e]&&T[e].forEach(function(t){return t(r)})},B=function(e,r){return T[e]||(T[e]=[]),T[e].push(r),function(){var o=T[e].indexOf(r);T[e].splice(o,1)}},le=globalThis&&globalThis.__read||function(n,e){var r=typeof Symbol=="function"&&n[Symbol.iterator];if(!r)return n;var t=r.call(n),o,a=[],u;try{for(;(e===void 0||e-- >0)&&!(o=t.next()).done;)a.push(o.value)}catch(s){u={error:s}}finally{try{o&&!o.done&&(r=t.return)&&r.call(t)}finally{if(u)throw u.error}}return a},se=globalThis&&globalThis.__spread||function(){for(var n=[],e=0;e<arguments.length;e++)n=n.concat(le(arguments[e]));return n},ce=function(e,r){var t=r.cacheKey,o=r.cacheTime,a=o===void 0?5*60*1e3:o,u=r.staleTime,s=u===void 0?0:u,f=r.setCache,i=r.getCache,l=v.exports.useRef(),c=v.exports.useRef(),g=function(m,d){f?f(d):te(m,a,d),ue(m,d.data)},p=function(m,d){return d===void 0&&(d=[]),i?i(d):oe(m)};return K(function(){if(!!t){var h=p(t);h&&Object.hasOwnProperty.call(h,"data")&&(e.state.data=h.data,e.state.params=h.params,(s===-1||new Date().getTime()-h.time<=s)&&(e.state.loading=!1)),l.current=B(t,function(m){e.setState({data:m})})}},[]),U(function(){var h;(h=l.current)===null||h===void 0||h.call(l)}),t?{onBefore:function(m){var d=p(t,m);return!d||!Object.hasOwnProperty.call(d,"data")?{}:s===-1||new Date().getTime()-d.time<=s?{loading:!1,data:d==null?void 0:d.data,error:void 0,returnNow:!0}:{data:d==null?void 0:d.data,error:void 0}},onRequest:function(m,d){var b=ae(t);return b&&b!==c.current?{servicePromise:b}:(b=m.apply(void 0,se(d)),c.current=b,ie(t,b),{servicePromise:b})},onSuccess:function(m,d){var b;t&&((b=l.current)===null||b===void 0||b.call(l),g(t,{data:m,params:d,time:new Date().getTime()}),l.current=B(t,function(C){e.setState({data:C})}))},onMutate:function(m){var d;t&&((d=l.current)===null||d===void 0||d.call(l),g(t,{data:m,params:e.state.params,time:new Date().getTime()}),l.current=B(t,function(b){e.setState({data:b})}))}}:{}};const fe=ce;var de=globalThis&&globalThis.__read||function(n,e){var r=typeof Symbol=="function"&&n[Symbol.iterator];if(!r)return n;var t=r.call(n),o,a=[],u;try{for(;(e===void 0||e-- >0)&&!(o=t.next()).done;)a.push(o.value)}catch(s){u={error:s}}finally{try{o&&!o.done&&(r=t.return)&&r.call(t)}finally{if(u)throw u.error}}return a},ve=globalThis&&globalThis.__spread||function(){for(var n=[],e=0;e<arguments.length;e++)n=n.concat(de(arguments[e]));return n},he=function(e,r){var t=r.debounceWait,o=r.debounceLeading,a=r.debounceTrailing,u=r.debounceMaxWait,s=v.exports.useRef(),f=v.exports.useMemo(function(){var i={};return o!==void 0&&(i.leading=o),a!==void 0&&(i.trailing=a),u!==void 0&&(i.maxWait=u),i},[o,a,u]);return v.exports.useEffect(function(){if(t){var i=e.runAsync.bind(e);return s.current=X(function(l){l()},t,f),e.runAsync=function(){for(var l=[],c=0;c<arguments.length;c++)l[c]=arguments[c];return new Promise(function(g,p){var h;(h=s.current)===null||h===void 0||h.call(s,function(){i.apply(void 0,ve(l)).then(g).catch(p)})})},function(){var l;(l=s.current)===null||l===void 0||l.cancel(),e.runAsync=i}}},[t,f]),t?{onCancel:function(){var l;(l=s.current)===null||l===void 0||l.cancel()}}:{}};const ge=he;var pe=function(e,r){var t=r.loadingDelay,o=v.exports.useRef();if(!t)return{};var a=function(){o.current&&clearTimeout(o.current)};return{onBefore:function(){return a(),o.current=setTimeout(function(){e.setState({loading:!0})},t),{loading:!1}},onFinally:function(){a()},onCancel:function(){a()}}};const me=pe;var be=!!(typeof window<"u"&&window.document&&window.document.createElement);const D=be;function N(){return D?document.visibilityState!=="hidden":!0}var S=[];function ye(n){return S.push(n),function(){var r=S.indexOf(n);S.splice(r,1)}}if(D){var _e=function(){if(!!N())for(var e=0;e<S.length;e++){var r=S[e];r()}};window.addEventListener("visibilitychange",_e,!1)}var we=function(e,r){var t=r.pollingInterval,o=r.pollingWhenHidden,a=o===void 0?!0:o,u=r.pollingErrorRetryCount,s=u===void 0?-1:u,f=v.exports.useRef(),i=v.exports.useRef(),l=v.exports.useRef(0),c=function(){var p;f.current&&clearTimeout(f.current),(p=i.current)===null||p===void 0||p.call(i)};return W(function(){t||c()},[t]),t?{onBefore:function(){c()},onError:function(){l.current+=1},onSuccess:function(){l.current=0},onFinally:function(){s===-1||s!==-1&&l.current<=s?f.current=setTimeout(function(){!a&&!N()?i.current=ye(function(){e.refresh()}):e.refresh()},t):l.current=0},onCancel:function(){c()}}:{}};const Te=we;var Pe=globalThis&&globalThis.__read||function(n,e){var r=typeof Symbol=="function"&&n[Symbol.iterator];if(!r)return n;var t=r.call(n),o,a=[],u;try{for(;(e===void 0||e-- >0)&&!(o=t.next()).done;)a.push(o.value)}catch(s){u={error:s}}finally{try{o&&!o.done&&(r=t.return)&&r.call(t)}finally{if(u)throw u.error}}return a},xe=globalThis&&globalThis.__spread||function(){for(var n=[],e=0;e<arguments.length;e++)n=n.concat(Pe(arguments[e]));return n};function Re(n,e){var r=!1;return function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];r||(r=!0,n.apply(void 0,xe(t)),setTimeout(function(){r=!1},e))}}function Se(){return D&&typeof navigator.onLine<"u"?navigator.onLine:!0}var O=[];function Oe(n){return O.push(n),function(){var r=O.indexOf(n);O.splice(r,1)}}if(D){var q=function(){if(!(!N()||!Se()))for(var e=0;e<O.length;e++){var r=O[e];r()}};window.addEventListener("visibilitychange",q,!1),window.addEventListener("focus",q,!1)}var Ce=function(e,r){var t=r.refreshOnWindowFocus,o=r.focusTimespan,a=o===void 0?5e3:o,u=v.exports.useRef(),s=function(){var i;(i=u.current)===null||i===void 0||i.call(u)};return v.exports.useEffect(function(){if(t){var f=Re(e.refresh.bind(e),a);u.current=Oe(function(){f()})}return function(){s()}},[t,a]),U(function(){s()}),{}};const $e=Ce;var Ee=function(e,r){var t=r.retryInterval,o=r.retryCount,a=v.exports.useRef(),u=v.exports.useRef(0),s=v.exports.useRef(!1);return o?{onBefore:function(){s.current||(u.current=0),s.current=!1,a.current&&clearTimeout(a.current)},onSuccess:function(){u.current=0},onError:function(){if(u.current+=1,o===-1||u.current<=o){var i=t!=null?t:Math.min(1e3*Math.pow(2,u.current),3e4);a.current=setTimeout(function(){s.current=!0,e.refresh()},i)}else u.current=0},onCancel:function(){u.current=0,a.current&&clearTimeout(a.current)}}:{}};const je=Ee;var Fe=globalThis&&globalThis.__read||function(n,e){var r=typeof Symbol=="function"&&n[Symbol.iterator];if(!r)return n;var t=r.call(n),o,a=[],u;try{for(;(e===void 0||e-- >0)&&!(o=t.next()).done;)a.push(o.value)}catch(s){u={error:s}}finally{try{o&&!o.done&&(r=t.return)&&r.call(t)}finally{if(u)throw u.error}}return a},Ae=globalThis&&globalThis.__spread||function(){for(var n=[],e=0;e<arguments.length;e++)n=n.concat(Fe(arguments[e]));return n},De=function(e,r){var t=r.throttleWait,o=r.throttleLeading,a=r.throttleTrailing,u=v.exports.useRef(),s={};return o!==void 0&&(s.leading=o),a!==void 0&&(s.trailing=a),v.exports.useEffect(function(){if(t){var f=e.runAsync.bind(e);return u.current=Y(function(i){i()},t,s),e.runAsync=function(){for(var i=[],l=0;l<arguments.length;l++)i[l]=arguments[l];return new Promise(function(c,g){var p;(p=u.current)===null||p===void 0||p.call(u,function(){f.apply(void 0,Ae(i)).then(c).catch(g)})})},function(){var i;e.runAsync=f,(i=u.current)===null||i===void 0||i.cancel()}}},[t,o,a]),t?{onCancel:function(){var i;(i=u.current)===null||i===void 0||i.cancel()}}:{}};const Me=De;var Be=function(e){H&&(A(e)||console.error('useMount: parameter `fn` expected to be a function, but got "'+typeof e+'".')),v.exports.useEffect(function(){e==null||e()},[])};const We=Be;var Le=globalThis&&globalThis.__read||function(n,e){var r=typeof Symbol=="function"&&n[Symbol.iterator];if(!r)return n;var t=r.call(n),o,a=[],u;try{for(;(e===void 0||e-- >0)&&!(o=t.next()).done;)a.push(o.value)}catch(s){u={error:s}}finally{try{o&&!o.done&&(r=t.return)&&r.call(t)}finally{if(u)throw u.error}}return a},He=function(){var e=Le(v.exports.useState({}),2),r=e[1];return v.exports.useCallback(function(){return r({})},[])};const Ue=He;var y=globalThis&&globalThis.__assign||function(){return y=Object.assign||function(n){for(var e,r=1,t=arguments.length;r<t;r++){e=arguments[r];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},y.apply(this,arguments)},Ne=globalThis&&globalThis.__awaiter||function(n,e,r,t){function o(a){return a instanceof r?a:new r(function(u){u(a)})}return new(r||(r=Promise))(function(a,u){function s(l){try{i(t.next(l))}catch(c){u(c)}}function f(l){try{i(t.throw(l))}catch(c){u(c)}}function i(l){l.done?a(l.value):o(l.value).then(s,f)}i((t=t.apply(n,e||[])).next())})},ze=globalThis&&globalThis.__generator||function(n,e){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},t,o,a,u;return u={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function s(i){return function(l){return f([i,l])}}function f(i){if(t)throw new TypeError("Generator is already executing.");for(;r;)try{if(t=1,o&&(a=i[0]&2?o.return:i[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,i[1])).done)return a;switch(o=0,a&&(i=[i[0]&2,a.value]),i[0]){case 0:case 1:a=i;break;case 4:return r.label++,{value:i[1],done:!1};case 5:r.label++,o=i[1],i=[0];continue;case 7:i=r.ops.pop(),r.trys.pop();continue;default:if(a=r.trys,!(a=a.length>0&&a[a.length-1])&&(i[0]===6||i[0]===2)){r=0;continue}if(i[0]===3&&(!a||i[1]>a[0]&&i[1]<a[3])){r.label=i[1];break}if(i[0]===6&&r.label<a[1]){r.label=a[1],a=i;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(i);break}a[2]&&r.ops.pop(),r.trys.pop();continue}i=e.call(n,r)}catch(l){i=[6,l],o=0}finally{t=a=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},Ge=globalThis&&globalThis.__rest||function(n,e){var r={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(r[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(n);o<t.length;o++)e.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(n,t[o])&&(r[t[o]]=n[t[o]]);return r},qe=globalThis&&globalThis.__read||function(n,e){var r=typeof Symbol=="function"&&n[Symbol.iterator];if(!r)return n;var t=r.call(n),o,a=[],u;try{for(;(e===void 0||e-- >0)&&!(o=t.next()).done;)a.push(o.value)}catch(s){u={error:s}}finally{try{o&&!o.done&&(r=t.return)&&r.call(t)}finally{if(u)throw u.error}}return a},x=globalThis&&globalThis.__spread||function(){for(var n=[],e=0;e<arguments.length;e++)n=n.concat(qe(arguments[e]));return n},Ve=function(){function n(e,r,t,o){o===void 0&&(o={}),this.serviceRef=e,this.options=r,this.subscribe=t,this.initState=o,this.count=0,this.state={loading:!1,params:void 0,data:void 0,error:void 0},this.state=y(y(y({},this.state),{loading:!r.manual}),o)}return n.prototype.setState=function(e){e===void 0&&(e={}),this.state=y(y({},this.state),e),this.subscribe()},n.prototype.runPluginHandler=function(e){for(var r=[],t=1;t<arguments.length;t++)r[t-1]=arguments[t];var o=this.pluginImpls.map(function(a){var u;return(u=a[e])===null||u===void 0?void 0:u.call.apply(u,x([a],r))}).filter(Boolean);return Object.assign.apply(Object,x([{}],o))},n.prototype.runAsync=function(){for(var e,r,t,o,a,u,s,f,i,l,c=[],g=0;g<arguments.length;g++)c[g]=arguments[g];return Ne(this,void 0,void 0,function(){var p,h,m,d,b,C,M,$,_,w,z;return ze(this,function(R){switch(R.label){case 0:if(this.count+=1,p=this.count,h=this.runPluginHandler("onBefore",c),m=h.stopNow,d=m===void 0?!1:m,b=h.returnNow,C=b===void 0?!1:b,M=Ge(h,["stopNow","returnNow"]),d)return[2,new Promise(function(){})];if(this.setState(y({loading:!0,params:c},M)),C)return[2,Promise.resolve(M.data)];(r=(e=this.options).onBefore)===null||r===void 0||r.call(e,c),R.label=1;case 1:return R.trys.push([1,3,,4]),$=this.runPluginHandler("onRequest",this.serviceRef.current,c).servicePromise,$||($=(z=this.serviceRef).current.apply(z,x(c))),[4,$];case 2:return _=R.sent(),p!==this.count?[2,new Promise(function(){})]:(this.setState({data:_,error:void 0,loading:!1}),(o=(t=this.options).onSuccess)===null||o===void 0||o.call(t,_,c),this.runPluginHandler("onSuccess",_,c),(u=(a=this.options).onFinally)===null||u===void 0||u.call(a,c,_,void 0),p===this.count&&this.runPluginHandler("onFinally",c,_,void 0),[2,_]);case 3:if(w=R.sent(),p!==this.count)return[2,new Promise(function(){})];throw this.setState({error:w,loading:!1}),(f=(s=this.options).onError)===null||f===void 0||f.call(s,w,c),this.runPluginHandler("onError",w,c),(l=(i=this.options).onFinally)===null||l===void 0||l.call(i,c,void 0,w),p===this.count&&this.runPluginHandler("onFinally",c,void 0,w),w;case 4:return[2]}})})},n.prototype.run=function(){for(var e=this,r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];this.runAsync.apply(this,x(r)).catch(function(o){e.options.onError||console.error(o)})},n.prototype.cancel=function(){this.count+=1,this.setState({loading:!1}),this.runPluginHandler("onCancel")},n.prototype.refresh=function(){this.run.apply(this,x(this.state.params||[]))},n.prototype.refreshAsync=function(){return this.runAsync.apply(this,x(this.state.params||[]))},n.prototype.mutate=function(e){var r=A(e)?e(this.state.data):e;this.runPluginHandler("onMutate",r),this.setState({data:r})},n}();const Je=Ve;var L=globalThis&&globalThis.__assign||function(){return L=Object.assign||function(n){for(var e,r=1,t=arguments.length;r<t;r++){e=arguments[r];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},L.apply(this,arguments)},Ke=globalThis&&globalThis.__rest||function(n,e){var r={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(r[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(n);o<t.length;o++)e.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(n,t[o])&&(r[t[o]]=n[t[o]]);return r},Qe=globalThis&&globalThis.__read||function(n,e){var r=typeof Symbol=="function"&&n[Symbol.iterator];if(!r)return n;var t=r.call(n),o,a=[],u;try{for(;(e===void 0||e-- >0)&&!(o=t.next()).done;)a.push(o.value)}catch(s){u={error:s}}finally{try{o&&!o.done&&(r=t.return)&&r.call(t)}finally{if(u)throw u.error}}return a},V=globalThis&&globalThis.__spread||function(){for(var n=[],e=0;e<arguments.length;e++)n=n.concat(Qe(arguments[e]));return n};function Xe(n,e,r){e===void 0&&(e={}),r===void 0&&(r=[]);var t=e.manual,o=t===void 0?!1:t,a=Ke(e,["manual"]),u=L({manual:o},a),s=Q(n),f=Ue(),i=K(function(){var l=r.map(function(c){var g;return(g=c==null?void 0:c.onInit)===null||g===void 0?void 0:g.call(c,u)}).filter(Boolean);return new Je(s,u,f,Object.assign.apply(Object,V([{}],l)))},[]);return i.options=u,i.pluginImpls=r.map(function(l){return l(i,u)}),We(function(){if(!o){var l=i.state.params||e.defaultParams||[];i.run.apply(i,V(l))}}),U(function(){i.cancel()}),{loading:i.state.loading,data:i.state.data,error:i.state.error,params:i.state.params||[],cancel:P(i.cancel.bind(i)),refresh:P(i.refresh.bind(i)),refreshAsync:P(i.refreshAsync.bind(i)),run:P(i.run.bind(i)),runAsync:P(i.runAsync.bind(i)),mutate:P(i.mutate.bind(i))}}var Ye=globalThis&&globalThis.__read||function(n,e){var r=typeof Symbol=="function"&&n[Symbol.iterator];if(!r)return n;var t=r.call(n),o,a=[],u;try{for(;(e===void 0||e-- >0)&&!(o=t.next()).done;)a.push(o.value)}catch(s){u={error:s}}finally{try{o&&!o.done&&(r=t.return)&&r.call(t)}finally{if(u)throw u.error}}return a},Ze=globalThis&&globalThis.__spread||function(){for(var n=[],e=0;e<arguments.length;e++)n=n.concat(Ye(arguments[e]));return n};function Ie(n,e,r){return Xe(n,e,Ze(r||[],[ge,me,Te,$e,Me,ee,fe,je]))}export{Ie as u};