import{r as v,ad as I,ae as ee}from"./index.f21f9b1f.js";var re=function(e){return function(r,n){var t=v.exports.useRef(!1);e(function(){return function(){t.current=!1}},[]),e(function(){if(!t.current)t.current=!0;else return r()},n)}},D=function(e){return typeof e=="function"},ne=!1;const U=ne;function P(i){U&&(D(i)||console.error("useMemoizedFn expected parameter is a function, got ".concat(typeof i)));var e=v.exports.useRef(i);e.current=v.exports.useMemo(function(){return i},[i]);var r=v.exports.useRef();return r.current||(r.current=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return e.current.apply(this,n)}),r.current}const L=re(v.exports.useEffect);var q=globalThis&&globalThis.__read||function(i,e){var r=typeof Symbol=="function"&&i[Symbol.iterator];if(!r)return i;var n=r.call(i),t,a=[],u;try{for(;(e===void 0||e-- >0)&&!(t=n.next()).done;)a.push(t.value)}catch(s){u={error:s}}finally{try{t&&!t.done&&(r=n.return)&&r.call(n)}finally{if(u)throw u.error}}return a},V=globalThis&&globalThis.__spreadArray||function(i,e,r){if(r||arguments.length===2)for(var n=0,t=e.length,a;n<t;n++)(a||!(n in e))&&(a||(a=Array.prototype.slice.call(e,0,n)),a[n]=e[n]);return i.concat(a||Array.prototype.slice.call(e))},Y=function(e,r){var n=r.manual,t=r.ready,a=t===void 0?!0:t,u=r.defaultParams,s=u===void 0?[]:u,f=r.refreshDeps,o=f===void 0?[]:f,l=r.refreshDepsAction,c=v.exports.useRef(!1);return c.current=!1,L(function(){!n&&a&&(c.current=!0,e.run.apply(e,V([],q(s),!1)))},[a]),L(function(){c.current||n||(c.current=!0,l?l():e.refresh())},V([],q(o),!1)),{onBefore:function(){if(!a)return{stopNow:!0}}}};Y.onInit=function(i){var e=i.ready,r=e===void 0?!0:e,n=i.manual;return{loading:!n&&r}};const te=Y;function ae(i,e){if(i===e)return!0;for(var r=0;r<i.length;r++)if(!Object.is(i[r],e[r]))return!1;return!0}function Z(i,e){var r=v.exports.useRef({deps:e,obj:void 0,initialized:!1}).current;return(r.initialized===!1||!ae(r.deps,e))&&(r.deps=e,r.obj=i(),r.initialized=!0),r.obj}function k(i){var e=v.exports.useRef(i);return e.current=i,e}var ie=function(e){U&&(D(e)||console.error("useUnmount expected parameter is a function, got ".concat(typeof e)));var r=k(e);v.exports.useEffect(function(){return function(){r.current()}},[])};const N=ie;var F=globalThis&&globalThis.__assign||function(){return F=Object.assign||function(i){for(var e,r=1,n=arguments.length;r<n;r++){e=arguments[r];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(i[t]=e[t])}return i},F.apply(this,arguments)},E=new Map,oe=function(e,r,n){var t=E.get(e);t!=null&&t.timer&&clearTimeout(t.timer);var a=void 0;r>-1&&(a=setTimeout(function(){E.delete(e)},r)),E.set(e,F(F({},n),{timer:a}))},ue=function(e){return E.get(e)},j=new Map,le=function(e){return j.get(e)},se=function(e,r){j.set(e,r),r.then(function(n){return j.delete(e),n}).catch(function(){j.delete(e)})},T={},ce=function(e,r){T[e]&&T[e].forEach(function(n){return n(r)})},W=function(e,r){return T[e]||(T[e]=[]),T[e].push(r),function(){var t=T[e].indexOf(r);T[e].splice(t,1)}},fe=globalThis&&globalThis.__read||function(i,e){var r=typeof Symbol=="function"&&i[Symbol.iterator];if(!r)return i;var n=r.call(i),t,a=[],u;try{for(;(e===void 0||e-- >0)&&!(t=n.next()).done;)a.push(t.value)}catch(s){u={error:s}}finally{try{t&&!t.done&&(r=n.return)&&r.call(n)}finally{if(u)throw u.error}}return a},de=globalThis&&globalThis.__spreadArray||function(i,e,r){if(r||arguments.length===2)for(var n=0,t=e.length,a;n<t;n++)(a||!(n in e))&&(a||(a=Array.prototype.slice.call(e,0,n)),a[n]=e[n]);return i.concat(a||Array.prototype.slice.call(e))},ve=function(e,r){var n=r.cacheKey,t=r.cacheTime,a=t===void 0?5*60*1e3:t,u=r.staleTime,s=u===void 0?0:u,f=r.setCache,o=r.getCache,l=v.exports.useRef(),c=v.exports.useRef(),g=function(y,d){f?f(d):oe(y,a,d),ce(y,d.data)},p=function(y,d){return d===void 0&&(d=[]),o?o(d):ue(y)};return Z(function(){if(!!n){var h=p(n);h&&Object.hasOwnProperty.call(h,"data")&&(e.state.data=h.data,e.state.params=h.params,(s===-1||new Date().getTime()-h.time<=s)&&(e.state.loading=!1)),l.current=W(n,function(y){e.setState({data:y})})}},[]),N(function(){var h;(h=l.current)===null||h===void 0||h.call(l)}),n?{onBefore:function(y){var d=p(n,y);return!d||!Object.hasOwnProperty.call(d,"data")?{}:s===-1||new Date().getTime()-d.time<=s?{loading:!1,data:d==null?void 0:d.data,error:void 0,returnNow:!0}:{data:d==null?void 0:d.data,error:void 0}},onRequest:function(y,d){var b=le(n);return b&&b!==c.current?{servicePromise:b}:(b=y.apply(void 0,de([],fe(d),!1)),c.current=b,se(n,b),{servicePromise:b})},onSuccess:function(y,d){var b;n&&((b=l.current)===null||b===void 0||b.call(l),g(n,{data:y,params:d,time:new Date().getTime()}),l.current=W(n,function(C){e.setState({data:C})}))},onMutate:function(y){var d;n&&((d=l.current)===null||d===void 0||d.call(l),g(n,{data:y,params:e.state.params,time:new Date().getTime()}),l.current=W(n,function(b){e.setState({data:b})}))}}:{}};const he=ve;var ge=globalThis&&globalThis.__read||function(i,e){var r=typeof Symbol=="function"&&i[Symbol.iterator];if(!r)return i;var n=r.call(i),t,a=[],u;try{for(;(e===void 0||e-- >0)&&!(t=n.next()).done;)a.push(t.value)}catch(s){u={error:s}}finally{try{t&&!t.done&&(r=n.return)&&r.call(n)}finally{if(u)throw u.error}}return a},pe=globalThis&&globalThis.__spreadArray||function(i,e,r){if(r||arguments.length===2)for(var n=0,t=e.length,a;n<t;n++)(a||!(n in e))&&(a||(a=Array.prototype.slice.call(e,0,n)),a[n]=e[n]);return i.concat(a||Array.prototype.slice.call(e))},ye=function(e,r){var n=r.debounceWait,t=r.debounceLeading,a=r.debounceTrailing,u=r.debounceMaxWait,s=v.exports.useRef(),f=v.exports.useMemo(function(){var o={};return t!==void 0&&(o.leading=t),a!==void 0&&(o.trailing=a),u!==void 0&&(o.maxWait=u),o},[t,a,u]);return v.exports.useEffect(function(){if(n){var o=e.runAsync.bind(e);return s.current=I(function(l){l()},n,f),e.runAsync=function(){for(var l=[],c=0;c<arguments.length;c++)l[c]=arguments[c];return new Promise(function(g,p){var h;(h=s.current)===null||h===void 0||h.call(s,function(){o.apply(void 0,pe([],ge(l),!1)).then(g).catch(p)})})},function(){var l;(l=s.current)===null||l===void 0||l.cancel(),e.runAsync=o}}},[n,f]),n?{onCancel:function(){var l;(l=s.current)===null||l===void 0||l.cancel()}}:{}};const be=ye;var me=function(e,r){var n=r.loadingDelay,t=v.exports.useRef();if(!n)return{};var a=function(){t.current&&clearTimeout(t.current)};return{onBefore:function(){return a(),t.current=setTimeout(function(){e.setState({loading:!0})},n),{loading:!1}},onFinally:function(){a()},onCancel:function(){a()}}};const _e=me;var we=!!(typeof window<"u"&&window.document&&window.document.createElement);const M=we;function z(){return M?document.visibilityState!=="hidden":!0}var S=[];function Te(i){return S.push(i),function(){var r=S.indexOf(i);S.splice(r,1)}}if(M){var Pe=function(){if(!!z())for(var e=0;e<S.length;e++){var r=S[e];r()}};window.addEventListener("visibilitychange",Pe,!1)}var xe=function(e,r){var n=r.pollingInterval,t=r.pollingWhenHidden,a=t===void 0?!0:t,u=r.pollingErrorRetryCount,s=u===void 0?-1:u,f=v.exports.useRef(),o=v.exports.useRef(),l=v.exports.useRef(0),c=function(){var p;f.current&&clearTimeout(f.current),(p=o.current)===null||p===void 0||p.call(o)};return L(function(){n||c()},[n]),n?{onBefore:function(){c()},onError:function(){l.current+=1},onSuccess:function(){l.current=0},onFinally:function(){s===-1||s!==-1&&l.current<=s?f.current=setTimeout(function(){!a&&!z()?o.current=Te(function(){e.refresh()}):e.refresh()},n):l.current=0},onCancel:function(){c()}}:{}};const Ae=xe;var Re=globalThis&&globalThis.__read||function(i,e){var r=typeof Symbol=="function"&&i[Symbol.iterator];if(!r)return i;var n=r.call(i),t,a=[],u;try{for(;(e===void 0||e-- >0)&&!(t=n.next()).done;)a.push(t.value)}catch(s){u={error:s}}finally{try{t&&!t.done&&(r=n.return)&&r.call(n)}finally{if(u)throw u.error}}return a},Se=globalThis&&globalThis.__spreadArray||function(i,e,r){if(r||arguments.length===2)for(var n=0,t=e.length,a;n<t;n++)(a||!(n in e))&&(a||(a=Array.prototype.slice.call(e,0,n)),a[n]=e[n]);return i.concat(a||Array.prototype.slice.call(e))};function Oe(i,e){var r=!1;return function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];r||(r=!0,i.apply(void 0,Se([],Re(n),!1)),setTimeout(function(){r=!1},e))}}function Ce(){return M&&typeof navigator.onLine<"u"?navigator.onLine:!0}var O=[];function $e(i){return O.push(i),function(){var r=O.indexOf(i);r>-1&&O.splice(r,1)}}if(M){var J=function(){if(!(!z()||!Ce()))for(var e=0;e<O.length;e++){var r=O[e];r()}};window.addEventListener("visibilitychange",J,!1),window.addEventListener("focus",J,!1)}var Ee=function(e,r){var n=r.refreshOnWindowFocus,t=r.focusTimespan,a=t===void 0?5e3:t,u=v.exports.useRef(),s=function(){var o;(o=u.current)===null||o===void 0||o.call(u)};return v.exports.useEffect(function(){if(n){var f=Oe(e.refresh.bind(e),a);u.current=$e(function(){f()})}return function(){s()}},[n,a]),N(function(){s()}),{}};const je=Ee;var Fe=function(e,r){var n=r.retryInterval,t=r.retryCount,a=v.exports.useRef(),u=v.exports.useRef(0),s=v.exports.useRef(!1);return t?{onBefore:function(){s.current||(u.current=0),s.current=!1,a.current&&clearTimeout(a.current)},onSuccess:function(){u.current=0},onError:function(){if(u.current+=1,t===-1||u.current<=t){var o=n!=null?n:Math.min(1e3*Math.pow(2,u.current),3e4);a.current=setTimeout(function(){s.current=!0,e.refresh()},o)}else u.current=0},onCancel:function(){u.current=0,a.current&&clearTimeout(a.current)}}:{}};const De=Fe;var Me=globalThis&&globalThis.__read||function(i,e){var r=typeof Symbol=="function"&&i[Symbol.iterator];if(!r)return i;var n=r.call(i),t,a=[],u;try{for(;(e===void 0||e-- >0)&&!(t=n.next()).done;)a.push(t.value)}catch(s){u={error:s}}finally{try{t&&!t.done&&(r=n.return)&&r.call(n)}finally{if(u)throw u.error}}return a},Be=globalThis&&globalThis.__spreadArray||function(i,e,r){if(r||arguments.length===2)for(var n=0,t=e.length,a;n<t;n++)(a||!(n in e))&&(a||(a=Array.prototype.slice.call(e,0,n)),a[n]=e[n]);return i.concat(a||Array.prototype.slice.call(e))},We=function(e,r){var n=r.throttleWait,t=r.throttleLeading,a=r.throttleTrailing,u=v.exports.useRef(),s={};return t!==void 0&&(s.leading=t),a!==void 0&&(s.trailing=a),v.exports.useEffect(function(){if(n){var f=e.runAsync.bind(e);return u.current=ee(function(o){o()},n,s),e.runAsync=function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new Promise(function(c,g){var p;(p=u.current)===null||p===void 0||p.call(u,function(){f.apply(void 0,Be([],Me(o),!1)).then(c).catch(g)})})},function(){var o;e.runAsync=f,(o=u.current)===null||o===void 0||o.cancel()}}},[n,t,a]),n?{onCancel:function(){var o;(o=u.current)===null||o===void 0||o.cancel()}}:{}};const Le=We;var He=function(e){U&&(D(e)||console.error('useMount: parameter `fn` expected to be a function, but got "'.concat(typeof e,'".'))),v.exports.useEffect(function(){e==null||e()},[])};const Ue=He;var Ne=globalThis&&globalThis.__read||function(i,e){var r=typeof Symbol=="function"&&i[Symbol.iterator];if(!r)return i;var n=r.call(i),t,a=[],u;try{for(;(e===void 0||e-- >0)&&!(t=n.next()).done;)a.push(t.value)}catch(s){u={error:s}}finally{try{t&&!t.done&&(r=n.return)&&r.call(n)}finally{if(u)throw u.error}}return a},ze=function(){var e=Ne(v.exports.useState({}),2),r=e[1];return v.exports.useCallback(function(){return r({})},[])};const Ge=ze;var m=globalThis&&globalThis.__assign||function(){return m=Object.assign||function(i){for(var e,r=1,n=arguments.length;r<n;r++){e=arguments[r];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(i[t]=e[t])}return i},m.apply(this,arguments)},qe=globalThis&&globalThis.__awaiter||function(i,e,r,n){function t(a){return a instanceof r?a:new r(function(u){u(a)})}return new(r||(r=Promise))(function(a,u){function s(l){try{o(n.next(l))}catch(c){u(c)}}function f(l){try{o(n.throw(l))}catch(c){u(c)}}function o(l){l.done?a(l.value):t(l.value).then(s,f)}o((n=n.apply(i,e||[])).next())})},Ve=globalThis&&globalThis.__generator||function(i,e){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,t,a,u;return u={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function s(o){return function(l){return f([o,l])}}function f(o){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,t&&(a=o[0]&2?t.return:o[0]?t.throw||((a=t.return)&&a.call(t),0):t.next)&&!(a=a.call(t,o[1])).done)return a;switch(t=0,a&&(o=[o[0]&2,a.value]),o[0]){case 0:case 1:a=o;break;case 4:return r.label++,{value:o[1],done:!1};case 5:r.label++,t=o[1],o=[0];continue;case 7:o=r.ops.pop(),r.trys.pop();continue;default:if(a=r.trys,!(a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){r.label=o[1];break}if(o[0]===6&&r.label<a[1]){r.label=a[1],a=o;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(o);break}a[2]&&r.ops.pop(),r.trys.pop();continue}o=e.call(i,r)}catch(l){o=[6,l],t=0}finally{n=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}},Je=globalThis&&globalThis.__rest||function(i,e){var r={};for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&e.indexOf(n)<0&&(r[n]=i[n]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(i);t<n.length;t++)e.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(i,n[t])&&(r[n[t]]=i[n[t]]);return r},x=globalThis&&globalThis.__read||function(i,e){var r=typeof Symbol=="function"&&i[Symbol.iterator];if(!r)return i;var n=r.call(i),t,a=[],u;try{for(;(e===void 0||e-- >0)&&!(t=n.next()).done;)a.push(t.value)}catch(s){u={error:s}}finally{try{t&&!t.done&&(r=n.return)&&r.call(n)}finally{if(u)throw u.error}}return a},A=globalThis&&globalThis.__spreadArray||function(i,e,r){if(r||arguments.length===2)for(var n=0,t=e.length,a;n<t;n++)(a||!(n in e))&&(a||(a=Array.prototype.slice.call(e,0,n)),a[n]=e[n]);return i.concat(a||Array.prototype.slice.call(e))},Ke=function(){function i(e,r,n,t){t===void 0&&(t={}),this.serviceRef=e,this.options=r,this.subscribe=n,this.initState=t,this.count=0,this.state={loading:!1,params:void 0,data:void 0,error:void 0},this.state=m(m(m({},this.state),{loading:!r.manual}),t)}return i.prototype.setState=function(e){e===void 0&&(e={}),this.state=m(m({},this.state),e),this.subscribe()},i.prototype.runPluginHandler=function(e){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];var t=this.pluginImpls.map(function(a){var u;return(u=a[e])===null||u===void 0?void 0:u.call.apply(u,A([a],x(r),!1))}).filter(Boolean);return Object.assign.apply(Object,A([{}],x(t),!1))},i.prototype.runAsync=function(){for(var e,r,n,t,a,u,s,f,o,l,c=[],g=0;g<arguments.length;g++)c[g]=arguments[g];return qe(this,void 0,void 0,function(){var p,h,y,d,b,C,B,$,_,w,G;return Ve(this,function(R){switch(R.label){case 0:if(this.count+=1,p=this.count,h=this.runPluginHandler("onBefore",c),y=h.stopNow,d=y===void 0?!1:y,b=h.returnNow,C=b===void 0?!1:b,B=Je(h,["stopNow","returnNow"]),d)return[2,new Promise(function(){})];if(this.setState(m({loading:!0,params:c},B)),C)return[2,Promise.resolve(B.data)];(r=(e=this.options).onBefore)===null||r===void 0||r.call(e,c),R.label=1;case 1:return R.trys.push([1,3,,4]),$=this.runPluginHandler("onRequest",this.serviceRef.current,c).servicePromise,$||($=(G=this.serviceRef).current.apply(G,A([],x(c),!1))),[4,$];case 2:return _=R.sent(),p!==this.count?[2,new Promise(function(){})]:(this.setState({data:_,error:void 0,loading:!1}),(t=(n=this.options).onSuccess)===null||t===void 0||t.call(n,_,c),this.runPluginHandler("onSuccess",_,c),(u=(a=this.options).onFinally)===null||u===void 0||u.call(a,c,_,void 0),p===this.count&&this.runPluginHandler("onFinally",c,_,void 0),[2,_]);case 3:if(w=R.sent(),p!==this.count)return[2,new Promise(function(){})];throw this.setState({error:w,loading:!1}),(f=(s=this.options).onError)===null||f===void 0||f.call(s,w,c),this.runPluginHandler("onError",w,c),(l=(o=this.options).onFinally)===null||l===void 0||l.call(o,c,void 0,w),p===this.count&&this.runPluginHandler("onFinally",c,void 0,w),w;case 4:return[2]}})})},i.prototype.run=function(){for(var e=this,r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];this.runAsync.apply(this,A([],x(r),!1)).catch(function(t){e.options.onError||console.error(t)})},i.prototype.cancel=function(){this.count+=1,this.setState({loading:!1}),this.runPluginHandler("onCancel")},i.prototype.refresh=function(){this.run.apply(this,A([],x(this.state.params||[]),!1))},i.prototype.refreshAsync=function(){return this.runAsync.apply(this,A([],x(this.state.params||[]),!1))},i.prototype.mutate=function(e){var r=D(e)?e(this.state.data):e;this.runPluginHandler("onMutate",r),this.setState({data:r})},i}();const Qe=Ke;var H=globalThis&&globalThis.__assign||function(){return H=Object.assign||function(i){for(var e,r=1,n=arguments.length;r<n;r++){e=arguments[r];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(i[t]=e[t])}return i},H.apply(this,arguments)},Xe=globalThis&&globalThis.__rest||function(i,e){var r={};for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&e.indexOf(n)<0&&(r[n]=i[n]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(i);t<n.length;t++)e.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(i,n[t])&&(r[n[t]]=i[n[t]]);return r},K=globalThis&&globalThis.__read||function(i,e){var r=typeof Symbol=="function"&&i[Symbol.iterator];if(!r)return i;var n=r.call(i),t,a=[],u;try{for(;(e===void 0||e-- >0)&&!(t=n.next()).done;)a.push(t.value)}catch(s){u={error:s}}finally{try{t&&!t.done&&(r=n.return)&&r.call(n)}finally{if(u)throw u.error}}return a},Q=globalThis&&globalThis.__spreadArray||function(i,e,r){if(r||arguments.length===2)for(var n=0,t=e.length,a;n<t;n++)(a||!(n in e))&&(a||(a=Array.prototype.slice.call(e,0,n)),a[n]=e[n]);return i.concat(a||Array.prototype.slice.call(e))};function Ye(i,e,r){e===void 0&&(e={}),r===void 0&&(r=[]);var n=e.manual,t=n===void 0?!1:n,a=Xe(e,["manual"]),u=H({manual:t},a),s=k(i),f=Ge(),o=Z(function(){var l=r.map(function(c){var g;return(g=c==null?void 0:c.onInit)===null||g===void 0?void 0:g.call(c,u)}).filter(Boolean);return new Qe(s,u,f,Object.assign.apply(Object,Q([{}],K(l),!1)))},[]);return o.options=u,o.pluginImpls=r.map(function(l){return l(o,u)}),Ue(function(){if(!t){var l=o.state.params||e.defaultParams||[];o.run.apply(o,Q([],K(l),!1))}}),N(function(){o.cancel()}),{loading:o.state.loading,data:o.state.data,error:o.state.error,params:o.state.params||[],cancel:P(o.cancel.bind(o)),refresh:P(o.refresh.bind(o)),refreshAsync:P(o.refreshAsync.bind(o)),run:P(o.run.bind(o)),runAsync:P(o.runAsync.bind(o)),mutate:P(o.mutate.bind(o))}}var Ze=globalThis&&globalThis.__read||function(i,e){var r=typeof Symbol=="function"&&i[Symbol.iterator];if(!r)return i;var n=r.call(i),t,a=[],u;try{for(;(e===void 0||e-- >0)&&!(t=n.next()).done;)a.push(t.value)}catch(s){u={error:s}}finally{try{t&&!t.done&&(r=n.return)&&r.call(n)}finally{if(u)throw u.error}}return a},X=globalThis&&globalThis.__spreadArray||function(i,e,r){if(r||arguments.length===2)for(var n=0,t=e.length,a;n<t;n++)(a||!(n in e))&&(a||(a=Array.prototype.slice.call(e,0,n)),a[n]=e[n]);return i.concat(a||Array.prototype.slice.call(e))};function Ie(i,e,r){return Ye(i,e,X(X([],Ze(r||[]),!1),[be,_e,Ae,je,Le,te,he,De],!1))}export{M as i,Ie as u};