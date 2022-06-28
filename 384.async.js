"use strict";(self.webpackChunkruoyi_x_umi=self.webpackChunkruoyi_x_umi||[]).push([[384],{85384:function(fn,K,R){R.d(K,{Z:function(){return on}});var d=R(50959),Q=function(e){return function(n,t){var u=(0,d.useRef)(!1);e(function(){return function(){u.current=!1}},[]),e(function(){if(!u.current)u.current=!0;else return n()},t)}},M=Q(d.useEffect),X=function(r,e){var n=typeof Symbol=="function"&&r[Symbol.iterator];if(!n)return r;var t=n.call(r),u,i=[],o;try{for(;(e===void 0||e-- >0)&&!(u=t.next()).done;)i.push(u.value)}catch(c){o={error:c}}finally{try{u&&!u.done&&(n=t.return)&&n.call(t)}finally{if(o)throw o.error}}return i},z=function(){for(var r=[],e=0;e<arguments.length;e++)r=r.concat(X(arguments[e]));return r},q=function(e,n){var t=n.manual,u=n.ready,i=u===void 0?!0:u,o=n.defaultParams,c=o===void 0?[]:o,l=n.refreshDeps,a=l===void 0?[]:l,f=n.refreshDepsAction,s=(0,d.useRef)(!1);return s.current=!1,M(function(){!t&&i&&(s.current=!0,e.run.apply(e,z(c)))},[i]),M(function(){s.current||t||(s.current=!0,f?f():e.refresh())},z(a)),{onBefore:function(){if(!i)return{stopNow:!0}}}};q.onInit=function(r){var e=r.ready,n=e===void 0?!0:e,t=r.manual;return{loading:!t&&n}};var Y=q;function $(r,e){if(r===e)return!0;for(var n=0;n<r.length;n++)if(!Object.is(r[n],e[n]))return!1;return!0}function V(r,e){var n=(0,d.useRef)({deps:e,obj:void 0,initialized:!1}).current;return(n.initialized===!1||!$(n.deps,e))&&(n.deps=e,n.obj=r(),n.initialized=!0),n.obj}function k(r){var e=(0,d.useRef)(r);return e.current=r,e}var G=k,ee=function(e){var n=G(e);(0,d.useEffect)(function(){return function(){n.current()}},[])},L=ee,E=function(){return E=Object.assign||function(r){for(var e,n=1,t=arguments.length;n<t;n++){e=arguments[n];for(var u in e)Object.prototype.hasOwnProperty.call(e,u)&&(r[u]=e[u])}return r},E.apply(this,arguments)},S=new Map,ne=function(e,n,t){var u=S.get(e);u!=null&&u.timer&&clearTimeout(u.timer);var i=void 0;n>-1&&(i=setTimeout(function(){S.delete(e)},n)),S.set(e,E(E({},t),{timer:i}))},re=function(e){return S.get(e)},cn=function(e){if(e){var n=Array.isArray(e)?e:[e];n.forEach(function(t){return S.delete(t)})}else S.clear()},F=new Map,te=function(e){return F.get(e)},ue=function(e,n){F.set(e,n),n.then(function(t){return F.delete(e),t}).catch(function(){F.delete(e)})},_={},ie=function(e,n){_[e]&&_[e].forEach(function(t){return t(n)})},W=function(e,n){return _[e]||(_[e]=[]),_[e].push(n),function(){var u=_[e].indexOf(n);_[e].splice(u,1)}},ae=function(r,e){var n=typeof Symbol=="function"&&r[Symbol.iterator];if(!n)return r;var t=n.call(r),u,i=[],o;try{for(;(e===void 0||e-- >0)&&!(u=t.next()).done;)i.push(u.value)}catch(c){o={error:c}}finally{try{u&&!u.done&&(n=t.return)&&n.call(t)}finally{if(o)throw o.error}}return i},oe=function(){for(var r=[],e=0;e<arguments.length;e++)r=r.concat(ae(arguments[e]));return r},fe=function(e,n){var t=n.cacheKey,u=n.cacheTime,i=u===void 0?5*60*1e3:u,o=n.staleTime,c=o===void 0?0:o,l=n.setCache,a=n.getCache,f=(0,d.useRef)(),s=(0,d.useRef)(),g=function(p,v){l?l(v):ne(p,i,v),ie(p,v.data)},m=function(p,v){return v===void 0&&(v=[]),a?a(v):re(p)};return V(function(){if(!!t){var h=m(t);h&&Object.hasOwnProperty.call(h,"data")&&(e.state.data=h.data,e.state.params=h.params,(c===-1||new Date().getTime()-h.time<=c)&&(e.state.loading=!1)),f.current=W(t,function(p){e.setState({data:p})})}},[]),L(function(){var h;(h=f.current)===null||h===void 0||h.call(f)}),t?{onBefore:function(p){var v=m(t,p);return!v||!Object.hasOwnProperty.call(v,"data")?{}:c===-1||new Date().getTime()-v.time<=c?{loading:!1,data:v==null?void 0:v.data,returnNow:!0}:{data:v==null?void 0:v.data}},onRequest:function(p,v){var y=te(t);return y&&y!==s.current?{servicePromise:y}:(y=p.apply(void 0,oe(v)),s.current=y,ue(t,y),{servicePromise:y})},onSuccess:function(p,v){var y;t&&((y=f.current)===null||y===void 0||y.call(f),g(t,{data:p,params:v,time:new Date().getTime()}),f.current=W(t,function(D){e.setState({data:D})}))},onMutate:function(p){var v;t&&((v=f.current)===null||v===void 0||v.call(f),g(t,{data:p,params:e.state.params,time:new Date().getTime()}),f.current=W(t,function(y){e.setState({data:y})}))}}:{}},ce=fe,se=R(66292),le=R.n(se),de=function(r,e){var n=typeof Symbol=="function"&&r[Symbol.iterator];if(!n)return r;var t=n.call(r),u,i=[],o;try{for(;(e===void 0||e-- >0)&&!(u=t.next()).done;)i.push(u.value)}catch(c){o={error:c}}finally{try{u&&!u.done&&(n=t.return)&&n.call(t)}finally{if(o)throw o.error}}return i},ve=function(){for(var r=[],e=0;e<arguments.length;e++)r=r.concat(de(arguments[e]));return r},he=function(e,n){var t=n.debounceWait,u=n.debounceLeading,i=n.debounceTrailing,o=n.debounceMaxWait,c=(0,d.useRef)(),l=(0,d.useMemo)(function(){var a={};return u!==void 0&&(a.leading=u),i!==void 0&&(a.trailing=i),o!==void 0&&(a.maxWait=o),a},[u,i,o]);return(0,d.useEffect)(function(){if(t){var a=e.runAsync.bind(e);return c.current=le()(function(f){f()},t,l),e.runAsync=function(){for(var f=[],s=0;s<arguments.length;s++)f[s]=arguments[s];return new Promise(function(g,m){var h;(h=c.current)===null||h===void 0||h.call(c,function(){a.apply(void 0,ve(f)).then(g).catch(m)})})},function(){var f;(f=c.current)===null||f===void 0||f.cancel(),e.runAsync=a}}},[t,l]),t?{onCancel:function(){var f;(f=c.current)===null||f===void 0||f.cancel()}}:{}},ge=he,me=function(e,n){var t=n.loadingDelay,u=(0,d.useRef)();if(!t)return{};var i=function(){u.current&&clearTimeout(u.current)};return{onBefore:function(){return i(),u.current=setTimeout(function(){e.setState({loading:!0})},t),{loading:!1}},onFinally:function(){i()},onCancel:function(){i()}}},pe=me;function A(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function U(){return A()?document.visibilityState!=="hidden":!0}var T=[];function ye(r){return T.push(r),function(){var n=T.indexOf(r);T.splice(n,1)}}if(A()){var be=function(){if(!!U())for(var e=0;e<T.length;e++){var n=T[e];n()}};window.addEventListener("visibilitychange",be,!1)}var _e=ye,we=function(e,n){var t=n.pollingInterval,u=n.pollingWhenHidden,i=u===void 0?!0:u,o=n.pollingErrorRetryCount,c=o===void 0?-1:o,l=(0,d.useRef)(),a=(0,d.useRef)(),f=(0,d.useRef)(0),s=function(){var m;l.current&&clearTimeout(l.current),(m=a.current)===null||m===void 0||m.call(a)};return M(function(){t||s()},[t]),t?{onBefore:function(){s()},onError:function(){f.current+=1},onSuccess:function(){f.current=0},onFinally:function(){if(c===-1||c!==-1&&f.current<=c){if(!i&&!U()){a.current=_e(function(){e.refresh()});return}l.current=setTimeout(function(){e.refresh()},t)}else f.current=0},onCancel:function(){s()}}:{}},Pe=we,Re=function(r,e){var n=typeof Symbol=="function"&&r[Symbol.iterator];if(!n)return r;var t=n.call(r),u,i=[],o;try{for(;(e===void 0||e-- >0)&&!(u=t.next()).done;)i.push(u.value)}catch(c){o={error:c}}finally{try{u&&!u.done&&(n=t.return)&&n.call(t)}finally{if(o)throw o.error}}return i},Se=function(){for(var r=[],e=0;e<arguments.length;e++)r=r.concat(Re(arguments[e]));return r};function Oe(r,e){var n=!1;return function(){for(var t=[],u=0;u<arguments.length;u++)t[u]=arguments[u];n||(n=!0,r.apply(void 0,Se(t)),setTimeout(function(){n=!1},e))}}function Ce(){return A()&&typeof navigator.onLine<"u"?navigator.onLine:!0}var x=[];function Te(r){return x.push(r),function(){var n=x.indexOf(r);x.splice(n,1)}}if(A()){var I=function(){if(!(!U()||!Ce()))for(var e=0;e<x.length;e++){var n=x[e];n()}};window.addEventListener("visibilitychange",I,!1),window.addEventListener("focus",I,!1)}var xe=Te,je=function(e,n){var t=n.refreshOnWindowFocus,u=n.focusTimespan,i=u===void 0?5e3:u,o=(0,d.useRef)(),c=function(){var a;(a=o.current)===null||a===void 0||a.call(o)};return(0,d.useEffect)(function(){if(t){var l=Oe(e.refresh.bind(e),i);o.current=xe(function(){l()})}return function(){c()}},[t,i]),L(function(){c()}),{}},Ee=je,Fe=function(e,n){var t=n.retryInterval,u=n.retryCount,i=(0,d.useRef)(),o=(0,d.useRef)(0),c=(0,d.useRef)(!1);return u?{onBefore:function(){c.current||(o.current=0),c.current=!1,i.current&&clearTimeout(i.current)},onSuccess:function(){o.current=0},onError:function(){if(o.current+=1,u===-1||o.current<=u){var a=t??Math.min(1e3*Math.pow(2,o.current),3e4);i.current=setTimeout(function(){c.current=!0,e.refresh()},a)}else o.current=0},onCancel:function(){o.current=0,i.current&&clearTimeout(i.current)}}:{}},Ae=Fe,De=R(38209),Be=R.n(De),Me=function(r,e){var n=typeof Symbol=="function"&&r[Symbol.iterator];if(!n)return r;var t=n.call(r),u,i=[],o;try{for(;(e===void 0||e-- >0)&&!(u=t.next()).done;)i.push(u.value)}catch(c){o={error:c}}finally{try{u&&!u.done&&(n=t.return)&&n.call(t)}finally{if(o)throw o.error}}return i},Le=function(){for(var r=[],e=0;e<arguments.length;e++)r=r.concat(Me(arguments[e]));return r},We=function(e,n){var t=n.throttleWait,u=n.throttleLeading,i=n.throttleTrailing,o=(0,d.useRef)(),c={};return u!==void 0&&(c.leading=u),i!==void 0&&(c.trailing=i),(0,d.useEffect)(function(){if(t){var l=e.runAsync.bind(e);return o.current=Be()(function(a){a()},t,c),e.runAsync=function(){for(var a=[],f=0;f<arguments.length;f++)a[f]=arguments[f];return new Promise(function(s,g){var m;(m=o.current)===null||m===void 0||m.call(o,function(){l.apply(void 0,Le(a)).then(s).catch(g)})})},function(){var a;e.runAsync=l,(a=o.current)===null||a===void 0||a.cancel()}}},[t,u,i]),t?{onCancel:function(){var a;(a=o.current)===null||a===void 0||a.cancel()}}:{}},Ue=We;function He(r){var e=(0,d.useRef)(r);e.current=(0,d.useMemo)(function(){return r},[r]);var n=(0,d.useRef)();return n.current||(n.current=function(){for(var t=[],u=0;u<arguments.length;u++)t[u]=arguments[u];return e.current.apply(this,t)}),n.current}var O=He,Ne=function(e){(0,d.useEffect)(function(){e==null||e()},[])},ze=Ne,qe=function(r,e){var n=typeof Symbol=="function"&&r[Symbol.iterator];if(!n)return r;var t=n.call(r),u,i=[],o;try{for(;(e===void 0||e-- >0)&&!(u=t.next()).done;)i.push(u.value)}catch(c){o={error:c}}finally{try{u&&!u.done&&(n=t.return)&&n.call(t)}finally{if(o)throw o.error}}return i},Ve=function(){var e=qe((0,d.useState)({}),2),n=e[1];return(0,d.useCallback)(function(){return n({})},[])},Ge=Ve,sn=function(e){return e!==null&&typeof e=="object"},Ie=function(e){return typeof e=="function"},ln=function(e){return typeof e=="string"},dn=function(e){return typeof e=="boolean"},vn=function(e){return typeof e=="number"},hn=function(e){return typeof e>"u"},b=function(){return b=Object.assign||function(r){for(var e,n=1,t=arguments.length;n<t;n++){e=arguments[n];for(var u in e)Object.prototype.hasOwnProperty.call(e,u)&&(r[u]=e[u])}return r},b.apply(this,arguments)},Ze=function(r,e,n,t){function u(i){return i instanceof n?i:new n(function(o){o(i)})}return new(n||(n=Promise))(function(i,o){function c(f){try{a(t.next(f))}catch(s){o(s)}}function l(f){try{a(t.throw(f))}catch(s){o(s)}}function a(f){f.done?i(f.value):u(f.value).then(c,l)}a((t=t.apply(r,e||[])).next())})},Je=function(r,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},t,u,i,o;return o={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function c(a){return function(f){return l([a,f])}}function l(a){if(t)throw new TypeError("Generator is already executing.");for(;n;)try{if(t=1,u&&(i=a[0]&2?u.return:a[0]?u.throw||((i=u.return)&&i.call(u),0):u.next)&&!(i=i.call(u,a[1])).done)return i;switch(u=0,i&&(a=[a[0]&2,i.value]),a[0]){case 0:case 1:i=a;break;case 4:return n.label++,{value:a[1],done:!1};case 5:n.label++,u=a[1],a=[0];continue;case 7:a=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){n.label=a[1];break}if(a[0]===6&&n.label<i[1]){n.label=i[1],i=a;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(a);break}i[2]&&n.ops.pop(),n.trys.pop();continue}a=e.call(r,n)}catch(f){a=[6,f],u=0}finally{t=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}},Ke=function(r,e){var n={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&e.indexOf(t)<0&&(n[t]=r[t]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,t=Object.getOwnPropertySymbols(r);u<t.length;u++)e.indexOf(t[u])<0&&Object.prototype.propertyIsEnumerable.call(r,t[u])&&(n[t[u]]=r[t[u]]);return n},Qe=function(r,e){var n=typeof Symbol=="function"&&r[Symbol.iterator];if(!n)return r;var t=n.call(r),u,i=[],o;try{for(;(e===void 0||e-- >0)&&!(u=t.next()).done;)i.push(u.value)}catch(c){o={error:c}}finally{try{u&&!u.done&&(n=t.return)&&n.call(t)}finally{if(o)throw o.error}}return i},C=function(){for(var r=[],e=0;e<arguments.length;e++)r=r.concat(Qe(arguments[e]));return r},Xe=function(){function r(e,n,t,u){u===void 0&&(u={}),this.serviceRef=e,this.options=n,this.subscribe=t,this.initState=u,this.count=0,this.state={loading:!1,params:void 0,data:void 0,error:void 0},this.state=b(b(b({},this.state),{loading:!n.manual}),u)}return r.prototype.setState=function(e){e===void 0&&(e={}),this.state=b(b({},this.state),e),this.subscribe()},r.prototype.runPluginHandler=function(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];var u=this.pluginImpls.map(function(i){var o;return(o=i[e])===null||o===void 0?void 0:o.call.apply(o,C([i],n))}).filter(Boolean);return Object.assign.apply(Object,C([{}],u))},r.prototype.runAsync=function(){for(var e,n,t,u,i,o,c,l,a,f,s=[],g=0;g<arguments.length;g++)s[g]=arguments[g];return Ze(this,void 0,void 0,function(){var m,h,p,v,y,D,N,B,w,P,J;return Je(this,function(j){switch(j.label){case 0:if(this.count+=1,m=this.count,h=this.runPluginHandler("onBefore",s),p=h.stopNow,v=p===void 0?!1:p,y=h.returnNow,D=y===void 0?!1:y,N=Ke(h,["stopNow","returnNow"]),v)return[2,new Promise(function(){})];if(this.setState(b({loading:!0,params:s},N)),D)return[2,Promise.resolve(N.data)];(n=(e=this.options).onBefore)===null||n===void 0||n.call(e,s),j.label=1;case 1:return j.trys.push([1,3,,4]),B=this.runPluginHandler("onRequest",this.serviceRef.current,s).servicePromise,B||(B=(J=this.serviceRef).current.apply(J,C(s))),[4,B];case 2:return w=j.sent(),m!==this.count?[2,new Promise(function(){})]:(this.setState({data:w,error:void 0,loading:!1}),(u=(t=this.options).onSuccess)===null||u===void 0||u.call(t,w,s),this.runPluginHandler("onSuccess",w,s),(o=(i=this.options).onFinally)===null||o===void 0||o.call(i,s,w,void 0),m===this.count&&this.runPluginHandler("onFinally",s,w,void 0),[2,w]);case 3:if(P=j.sent(),m!==this.count)return[2,new Promise(function(){})];throw this.setState({error:P,loading:!1}),(l=(c=this.options).onError)===null||l===void 0||l.call(c,P,s),this.runPluginHandler("onError",P,s),(f=(a=this.options).onFinally)===null||f===void 0||f.call(a,s,void 0,P),m===this.count&&this.runPluginHandler("onFinally",s,void 0,P),P;case 4:return[2]}})})},r.prototype.run=function(){for(var e=this,n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];this.runAsync.apply(this,C(n)).catch(function(u){e.options.onError||console.error(u)})},r.prototype.cancel=function(){this.count+=1,this.setState({loading:!1}),this.runPluginHandler("onCancel")},r.prototype.refresh=function(){this.run.apply(this,C(this.state.params||[]))},r.prototype.refreshAsync=function(){return this.runAsync.apply(this,C(this.state.params||[]))},r.prototype.mutate=function(e){var n;Ie(e)?n=e(this.state.data):n=e,this.runPluginHandler("onMutate",n),this.setState({data:n})},r}(),Ye=Xe,H=function(){return H=Object.assign||function(r){for(var e,n=1,t=arguments.length;n<t;n++){e=arguments[n];for(var u in e)Object.prototype.hasOwnProperty.call(e,u)&&(r[u]=e[u])}return r},H.apply(this,arguments)},$e=function(r,e){var n={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&e.indexOf(t)<0&&(n[t]=r[t]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,t=Object.getOwnPropertySymbols(r);u<t.length;u++)e.indexOf(t[u])<0&&Object.prototype.propertyIsEnumerable.call(r,t[u])&&(n[t[u]]=r[t[u]]);return n},ke=function(r,e){var n=typeof Symbol=="function"&&r[Symbol.iterator];if(!n)return r;var t=n.call(r),u,i=[],o;try{for(;(e===void 0||e-- >0)&&!(u=t.next()).done;)i.push(u.value)}catch(c){o={error:c}}finally{try{u&&!u.done&&(n=t.return)&&n.call(t)}finally{if(o)throw o.error}}return i},Z=function(){for(var r=[],e=0;e<arguments.length;e++)r=r.concat(ke(arguments[e]));return r};function en(r,e,n){e===void 0&&(e={}),n===void 0&&(n=[]);var t=e.manual,u=t===void 0?!1:t,i=$e(e,["manual"]),o=H({manual:u},i),c=G(r),l=Ge(),a=V(function(){var f=n.map(function(s){var g;return(g=s==null?void 0:s.onInit)===null||g===void 0?void 0:g.call(s,o)}).filter(Boolean);return new Ye(c,o,l,Object.assign.apply(Object,Z([{}],f)))},[]);return a.options=o,a.pluginImpls=n.map(function(f){return f(a,o)}),ze(function(){if(!u){var f=a.state.params||e.defaultParams||[];a.run.apply(a,Z(f))}}),L(function(){a.cancel()}),{loading:a.state.loading,data:a.state.data,error:a.state.error,params:a.state.params||[],cancel:O(a.cancel.bind(a)),refresh:O(a.refresh.bind(a)),refreshAsync:O(a.refreshAsync.bind(a)),run:O(a.run.bind(a)),runAsync:O(a.runAsync.bind(a)),mutate:O(a.mutate.bind(a))}}var nn=en,rn=function(r,e){var n=typeof Symbol=="function"&&r[Symbol.iterator];if(!n)return r;var t=n.call(r),u,i=[],o;try{for(;(e===void 0||e-- >0)&&!(u=t.next()).done;)i.push(u.value)}catch(c){o={error:c}}finally{try{u&&!u.done&&(n=t.return)&&n.call(t)}finally{if(o)throw o.error}}return i},tn=function(){for(var r=[],e=0;e<arguments.length;e++)r=r.concat(rn(arguments[e]));return r};function un(r,e,n){return nn(r,e,tn(n||[],[ge,pe,Pe,Ee,Ue,Y,ce,Ae]))}var an=un,on=an}}]);
