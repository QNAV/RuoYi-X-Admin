import{a as i,C as h}from"./index-6f927546.js";import{r as T,e as He}from"./jsx-runtime-06f68cbc.js";import{aj as Ce}from"./index-37fcb888.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Et=(e,t={})=>i({path:"/system/user/resetPwd",method:"POST",body:e,secure:!0,type:h.Json,skipErrorHandler:!1,...t}),mt=(e,t={})=>i({path:"/system/user/remove",method:"POST",query:e,secure:!0,skipErrorHandler:!1,...t}),vt=(e,t={})=>i({path:"/system/user/profile",method:"POST",body:e,secure:!0,type:h.Json,skipErrorHandler:!1,...t}),St=(e,t={})=>i({path:"/system/user/profile/updatePwd",method:"POST",body:e,secure:!0,type:h.Json,skipErrorHandler:!1,...t}),Ot=(e,t={})=>i({path:"/system/user/list",method:"POST",body:e,secure:!0,type:h.Json,skipErrorHandler:!1,...t}),Rt=(e={})=>i({path:"/system/user/importTemplate",method:"POST",secure:!0,skipErrorHandler:!0,...e}),Pt=(e,t,s={})=>i({path:"/system/user/importData",method:"POST",query:e,body:t,secure:!0,type:h.FormData,skipErrorHandler:!0,...s}),Tt=(e,t={})=>i({path:"/system/user/export",method:"POST",body:e,secure:!0,type:h.Json,skipErrorHandler:!0,...t}),bt=(e,t={})=>i({path:"/system/user/edit",method:"POST",body:e,secure:!0,type:h.Json,skipErrorHandler:!1,...t}),gt=(e,t={})=>i({path:"/system/user/add",method:"POST",body:e,secure:!0,type:h.Json,skipErrorHandler:!1,...t}),_t=(e,t={})=>i({path:"/system/role/remove",method:"POST",query:e,secure:!0,skipErrorHandler:!1,...t}),wt=(e,t={})=>i({path:"/system/role/list",method:"POST",body:e,secure:!0,type:h.Json,skipErrorHandler:!1,...t}),kt=(e,t={})=>i({path:"/system/role/edit",method:"POST",body:e,secure:!0,type:h.Json,skipErrorHandler:!1,...t}),At=(e,t={})=>i({path:"/system/role/dataScope",method:"POST",body:e,secure:!0,type:h.Json,skipErrorHandler:!1,...t}),Dt=(e,t={})=>i({path:"/system/role/authUser/unallocatedList",method:"POST",body:e,secure:!0,type:h.Json,skipErrorHandler:!1,...t}),It=(e,t={})=>i({path:"/system/role/authUser/selectAll",method:"POST",body:e,secure:!0,type:h.Json,skipErrorHandler:!1,...t}),Ht=(e,t={})=>i({path:"/system/role/authUser/cancel",method:"POST",body:e,secure:!0,type:h.Json,skipErrorHandler:!1,...t}),Ct=(e,t={})=>i({path:"/system/role/authUser/allocatedList",method:"POST",body:e,secure:!0,type:h.Json,skipErrorHandler:!1,...t}),Ut=(e,t={})=>i({path:"/system/role/add",method:"POST",body:e,secure:!0,type:h.Json,skipErrorHandler:!1,...t}),Mt=(e,t={})=>i({path:"/system/post/remove",method:"POST",query:e,secure:!0,skipErrorHandler:!1,...t}),Qt=(e,t={})=>i({path:"/system/post/list",method:"POST",body:e,secure:!0,type:h.Json,skipErrorHandler:!1,...t}),xt=(e,t={})=>i({path:"/system/post/export",method:"POST",body:e,secure:!0,type:h.Json,skipErrorHandler:!1,...t}),Kt=(e,t={})=>i({path:"/system/post/edit",method:"POST",body:e,secure:!0,type:h.Json,skipErrorHandler:!1,...t}),Lt=(e,t={})=>i({path:"/system/post/add",method:"POST",body:e,secure:!0,type:h.Json,skipErrorHandler:!1,...t}),Ft=(e,t={})=>i({path:"/system/oss/list",method:"POST",body:e,secure:!0,type:h.Json,skipErrorHandler:!1,...t}),Vt=(e,t={})=>i({path:"/system/notice/remove",method:"POST",query:e,secure:!0,skipErrorHandler:!1,...t}),Jt=(e,t={})=>i({path:"/system/notice/list",method:"POST",body:e,secure:!0,type:h.Json,skipErrorHandler:!1,...t}),Nt=(e,t={})=>i({path:"/system/notice/edit",method:"POST",body:e,secure:!0,type:h.Json,skipErrorHandler:!1,...t}),Yt=(e,t={})=>i({path:"/system/notice/add",method:"POST",body:e,secure:!0,type:h.Json,skipErrorHandler:!1,...t}),Gt=(e,t={})=>i({path:"/system/menu/remove",method:"POST",query:e,secure:!0,skipErrorHandler:!1,...t}),jt=(e,t={})=>i({path:"/system/menu/list",method:"POST",body:e,secure:!0,type:h.Json,skipErrorHandler:!1,...t}),Bt=(e,t={})=>i({path:"/system/menu/edit",method:"POST",body:e,secure:!0,type:h.Json,skipErrorHandler:!1,...t}),qt=(e,t={})=>i({path:"/system/menu/add",method:"POST",body:e,secure:!0,type:h.Json,skipErrorHandler:!1,...t}),Xt=(e,t={})=>i({path:"/system/dict/type/remove",method:"POST",query:e,secure:!0,skipErrorHandler:!1,...t}),zt=(e={})=>i({path:"/system/dict/type/refreshCache",method:"POST",secure:!0,skipErrorHandler:!1,...e}),Wt=(e,t={})=>i({path:"/system/dict/type/list",method:"POST",body:e,secure:!0,type:h.Json,skipErrorHandler:!1,...t}),Zt=(e,t={})=>i({path:"/system/dict/type/export",method:"POST",body:e,secure:!0,type:h.Json,skipErrorHandler:!1,...t}),$t=(e,t={})=>i({path:"/system/dict/type/edit",method:"POST",body:e,secure:!0,type:h.Json,skipErrorHandler:!1,...t}),es=(e,t={})=>i({path:"/system/dict/type/add",method:"POST",body:e,secure:!0,type:h.Json,skipErrorHandler:!1,...t}),ts=(e,t={})=>i({path:"/system/dict/data/remove",method:"POST",query:e,secure:!0,skipErrorHandler:!1,...t}),ss=(e,t={})=>i({path:"/system/dict/data/list",method:"POST",body:e,secure:!0,type:h.Json,skipErrorHandler:!1,...t}),rs=(e,t={})=>i({path:"/system/dict/data/export",method:"POST",body:e,secure:!0,type:h.Json,skipErrorHandler:!1,...t}),ns=(e,t={})=>i({path:"/system/dict/data/edit",method:"POST",body:e,secure:!0,type:h.Json,skipErrorHandler:!1,...t}),os=(e,t={})=>i({path:"/system/dict/data/add",method:"POST",body:e,secure:!0,type:h.Json,skipErrorHandler:!1,...t}),is=(e,t={})=>i({path:"/system/dept/remove",method:"POST",query:e,secure:!0,skipErrorHandler:!1,...t}),us=(e,t={})=>i({path:"/system/dept/list",method:"POST",body:e,secure:!0,type:h.Json,skipErrorHandler:!1,...t}),as=(e,t={})=>i({path:"/system/dept/edit",method:"POST",body:e,secure:!0,type:h.Json,skipErrorHandler:!1,...t}),cs=(e,t={})=>i({path:"/system/dept/add",method:"POST",body:e,secure:!0,type:h.Json,skipErrorHandler:!1,...t}),ls=(e,t={})=>i({path:"/system/config/updateByKey",method:"POST",body:e,secure:!0,type:h.Json,skipErrorHandler:!1,...t}),ds=(e,t={})=>i({path:"/system/config/remove",method:"POST",query:e,secure:!0,skipErrorHandler:!1,...t}),fs=(e={})=>i({path:"/system/config/refreshCache",method:"POST",secure:!0,skipErrorHandler:!1,...e}),hs=(e,t={})=>i({path:"/system/config/list",method:"POST",body:e,secure:!0,type:h.Json,skipErrorHandler:!1,...t}),ys=(e,t={})=>i({path:"/system/config/export",method:"POST",body:e,secure:!0,type:h.Json,skipErrorHandler:!1,...t}),ps=(e,t={})=>i({path:"/system/config/add",method:"POST",body:e,secure:!0,type:h.Json,skipErrorHandler:!1,...t}),Es=(e,t={})=>i({path:"/system/user/info",method:"GET",query:e,secure:!0,skipErrorHandler:!1,...t}),ms=(e,t={})=>i({path:"/system/user/",method:"GET",query:e,secure:!0,skipErrorHandler:!1,...t}),vs=(e,t={})=>i({path:"/system/user/deptTree",method:"GET",query:e,secure:!0,skipErrorHandler:!1,...t}),Ss=(e,t={})=>i({path:"/system/role/info",method:"GET",query:e,secure:!0,skipErrorHandler:!1,...t}),Os=(e,t={})=>i({path:`/system/role/deptTree/${e}`,method:"GET",secure:!0,skipErrorHandler:!1,...t}),Rs=(e,t={})=>i({path:"/system/menu/roleMenuTreeSelect",method:"GET",query:e,secure:!0,skipErrorHandler:!1,...t}),Ps=(e,t={})=>i({path:"/system/menu/info",method:"GET",query:e,secure:!0,skipErrorHandler:!1,...t}),Ts=(e={})=>i({path:"/system/dict/type/optionSelect",method:"GET",secure:!0,skipErrorHandler:!1,...e}),bs=(e,t={})=>i({path:"/system/dict/data/type",method:"GET",query:e,secure:!0,skipErrorHandler:!1,...t}),gs=(e,t={})=>i({path:"/system/dept/info",method:"GET",query:e,secure:!0,skipErrorHandler:!1,...t}),_s=(e,t={})=>i({path:"/system/config/configKey",method:"GET",query:e,secure:!0,skipErrorHandler:!0,...t});class se{constructor(){this.listeners=[],this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.push(t),this.onSubscribe(),()=>{this.listeners=this.listeners.filter(s=>s!==t),this.onUnsubscribe()}}hasListeners(){return this.listeners.length>0}onSubscribe(){}onUnsubscribe(){}}const j=typeof window>"u"||"Deno"in window;function Ue(){}function ws(e,t){return typeof e=="function"?e(t):e}function ne(e){return typeof e=="number"&&e>=0&&e!==1/0}function Me(e,t){return Math.max(e+(t||0)-Date.now(),0)}function Qe(e,t,s){return N(e)?typeof t=="function"?{...s,queryKey:e,queryFn:t}:{...t,queryKey:e}:e}function ks(e,t,s){return N(e)?typeof t=="function"?{...s,mutationKey:e,mutationFn:t}:{...t,mutationKey:e}:typeof e=="function"?{...t,mutationFn:e}:{...e}}function As(e,t,s){return N(e)?[{...t,queryKey:e},s]:[e||{},t]}function Ds(e,t){const{type:s="all",exact:r,fetchStatus:a,predicate:o,queryKey:l,stale:f}=e;if(N(l)){if(r){if(t.queryHash!==xe(l,t.options))return!1}else if(!me(t.queryKey,l))return!1}if(s!=="all"){const S=t.isActive();if(s==="active"&&!S||s==="inactive"&&S)return!1}return!(typeof f=="boolean"&&t.isStale()!==f||typeof a<"u"&&a!==t.state.fetchStatus||o&&!o(t))}function Is(e,t){const{exact:s,fetching:r,predicate:a,mutationKey:o}=e;if(N(o)){if(!t.options.mutationKey)return!1;if(s){if($(t.options.mutationKey)!==$(o))return!1}else if(!me(t.options.mutationKey,o))return!1}return!(typeof r=="boolean"&&t.state.status==="loading"!==r||a&&!a(t))}function xe(e,t){return((t==null?void 0:t.queryKeyHashFn)||$)(e)}function $(e){return JSON.stringify(e,(t,s)=>ee(s)?Object.keys(s).sort().reduce((r,a)=>(r[a]=s[a],r),{}):s)}function me(e,t){return ve(e,t)}function ve(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(s=>!ve(e[s],t[s])):!1}function Se(e,t){if(e===t)return e;const s=ie(e)&&ie(t);if(s||ee(e)&&ee(t)){const r=s?e.length:Object.keys(e).length,a=s?t:Object.keys(t),o=a.length,l=s?[]:{};let f=0;for(let S=0;S<o;S++){const v=s?S:a[S];l[v]=Se(e[v],t[v]),l[v]===e[v]&&f++}return r===o&&f===r?e:l}return t}function oe(e,t){if(e&&!t||t&&!e)return!1;for(const s in e)if(e[s]!==t[s])return!1;return!0}function ie(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function ee(e){if(!ue(e))return!1;const t=e.constructor;if(typeof t>"u")return!0;const s=t.prototype;return!(!ue(s)||!s.hasOwnProperty("isPrototypeOf"))}function ue(e){return Object.prototype.toString.call(e)==="[object Object]"}function N(e){return Array.isArray(e)}function Oe(e){return new Promise(t=>{setTimeout(t,e)})}function ae(e){Oe(0).then(e)}function Hs(){if(typeof AbortController=="function")return new AbortController}function ce(e,t,s){return s.isDataEqual!=null&&s.isDataEqual(e,t)?e:typeof s.structuralSharing=="function"?s.structuralSharing(e,t):s.structuralSharing!==!1?Se(e,t):t}class Ke extends se{constructor(){super(),this.setup=t=>{if(!j&&window.addEventListener){const s=()=>t();return window.addEventListener("visibilitychange",s,!1),window.addEventListener("focus",s,!1),()=>{window.removeEventListener("visibilitychange",s),window.removeEventListener("focus",s)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var t;(t=this.cleanup)==null||t.call(this),this.cleanup=void 0}}setEventListener(t){var s;this.setup=t,(s=this.cleanup)==null||s.call(this),this.cleanup=t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()})}setFocused(t){this.focused=t,t&&this.onFocus()}onFocus(){this.listeners.forEach(t=>{t()})}isFocused(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)}}const Re=new Ke;class Le extends se{constructor(){super(),this.setup=t=>{if(!j&&window.addEventListener){const s=()=>t();return window.addEventListener("online",s,!1),window.addEventListener("offline",s,!1),()=>{window.removeEventListener("online",s),window.removeEventListener("offline",s)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var t;(t=this.cleanup)==null||t.call(this),this.cleanup=void 0}}setEventListener(t){var s;this.setup=t,(s=this.cleanup)==null||s.call(this),this.cleanup=t(r=>{typeof r=="boolean"?this.setOnline(r):this.onOnline()})}setOnline(t){this.online=t,t&&this.onOnline()}onOnline(){this.listeners.forEach(t=>{t()})}isOnline(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine}}const Pe=new Le;function Fe(e){return Math.min(1e3*2**e,3e4)}function Te(e){return(e??"online")==="online"?Pe.isOnline():!0}class be{constructor(t){this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}}function Ve(e){return e instanceof be}function Cs(e){let t=!1,s=0,r=!1,a,o,l;const f=new Promise((m,g)=>{o=m,l=g}),S=m=>{r||(M(new be(m)),e.abort==null||e.abort())},v=()=>{t=!0},y=()=>{t=!1},O=()=>!Re.isFocused()||e.networkMode!=="always"&&!Pe.isOnline(),D=m=>{r||(r=!0,e.onSuccess==null||e.onSuccess(m),a==null||a(),o(m))},M=m=>{r||(r=!0,e.onError==null||e.onError(m),a==null||a(),l(m))},x=()=>new Promise(m=>{a=g=>{const C=r||!O();return C&&m(g),C},e.onPause==null||e.onPause()}).then(()=>{a=void 0,r||e.onContinue==null||e.onContinue()}),I=()=>{if(r)return;let m;try{m=e.fn()}catch(g){m=Promise.reject(g)}Promise.resolve(m).then(D).catch(g=>{var C,b;if(r)return;const H=(C=e.retry)!=null?C:3,U=(b=e.retryDelay)!=null?b:Fe,K=typeof U=="function"?U(s,g):U,L=H===!0||typeof H=="number"&&s<H||typeof H=="function"&&H(s,g);if(t||!L){M(g);return}s++,e.onFail==null||e.onFail(s,g),Oe(K).then(()=>{if(O())return x()}).then(()=>{t?M(g):I()})})};return Te(e.networkMode)?I():x().then(I),{promise:f,cancel:S,continue:()=>(a==null?void 0:a())?f:Promise.resolve(),cancelRetry:v,continueRetry:y}}function Je(){let e=[],t=0,s=y=>{y()},r=y=>{y()};const a=y=>{let O;t++;try{O=y()}finally{t--,t||f()}return O},o=y=>{t?e.push(y):ae(()=>{s(y)})},l=y=>(...O)=>{o(()=>{y(...O)})},f=()=>{const y=e;e=[],y.length&&ae(()=>{r(()=>{y.forEach(O=>{s(O)})})})};return{batch:a,batchCalls:l,schedule:o,setNotifyFunction:y=>{s=y},setBatchNotifyFunction:y=>{r=y}}}const J=Je();class Ne extends se{constructor(t,s){super(),this.client=t,this.options=s,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(s)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.length===1&&(this.currentQuery.addObserver(this),le(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.listeners.length||this.destroy()}shouldFetchOnReconnect(){return te(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return te(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=[],this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(t,s){const r=this.options,a=this.currentQuery;if(this.options=this.client.defaultQueryOptions(t),oe(r,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();const o=this.hasListeners();o&&de(this.currentQuery,a,this.options,r)&&this.executeFetch(),this.updateResult(s),o&&(this.currentQuery!==a||this.options.enabled!==r.enabled||this.options.staleTime!==r.staleTime)&&this.updateStaleTimeout();const l=this.computeRefetchInterval();o&&(this.currentQuery!==a||this.options.enabled!==r.enabled||l!==this.currentRefetchInterval)&&this.updateRefetchInterval(l)}getOptimisticResult(t){const s=this.client.getQueryCache().build(this.client,t);return this.createResult(s,t)}getCurrentResult(){return this.currentResult}trackResult(t){const s={};return Object.keys(t).forEach(r=>{Object.defineProperty(s,r,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(r),t[r])})}),s}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:t,...s}={}){return this.fetch({...s,meta:{refetchPage:t}})}fetchOptimistic(t){const s=this.client.defaultQueryOptions(t),r=this.client.getQueryCache().build(this.client,s);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,s))}fetch(t){var s;return this.executeFetch({...t,cancelRefetch:(s=t.cancelRefetch)!=null?s:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(t){this.updateQuery();let s=this.currentQuery.fetch(this.options,t);return t!=null&&t.throwOnError||(s=s.catch(Ue)),s}updateStaleTimeout(){if(this.clearStaleTimeout(),j||this.currentResult.isStale||!ne(this.options.staleTime))return;const s=Me(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},s)}computeRefetchInterval(){var t;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(t=this.options.refetchInterval)!=null?t:!1}updateRefetchInterval(t){this.clearRefetchInterval(),this.currentRefetchInterval=t,!(j||this.options.enabled===!1||!ne(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||Re.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(t,s){const r=this.currentQuery,a=this.options,o=this.currentResult,l=this.currentResultState,f=this.currentResultOptions,S=t!==r,v=S?t.state:this.currentQueryInitialState,y=S?this.currentResult:this.previousQueryResult,{state:O}=t;let{dataUpdatedAt:D,error:M,errorUpdatedAt:x,fetchStatus:I,status:m}=O,g=!1,C=!1,b;if(s._optimisticResults){const w=this.hasListeners(),n=!w&&le(t,s),u=w&&de(t,r,s,a);(n||u)&&(I=Te(t.options.networkMode)?"fetching":"paused",D||(m="loading")),s._optimisticResults==="isRestoring"&&(I="idle")}if(s.keepPreviousData&&!O.dataUpdatedAt&&y!=null&&y.isSuccess&&m!=="error")b=y.data,D=y.dataUpdatedAt,m=y.status,g=!0;else if(s.select&&typeof O.data<"u")if(o&&O.data===(l==null?void 0:l.data)&&s.select===this.selectFn)b=this.selectResult;else try{this.selectFn=s.select,b=s.select(O.data),b=ce(o==null?void 0:o.data,b,s),this.selectResult=b,this.selectError=null}catch(w){this.selectError=w}else b=O.data;if(typeof s.placeholderData<"u"&&typeof b>"u"&&m==="loading"){let w;if(o!=null&&o.isPlaceholderData&&s.placeholderData===(f==null?void 0:f.placeholderData))w=o.data;else if(w=typeof s.placeholderData=="function"?s.placeholderData():s.placeholderData,s.select&&typeof w<"u")try{w=s.select(w),this.selectError=null}catch(n){this.selectError=n}typeof w<"u"&&(m="success",b=ce(o==null?void 0:o.data,w,s),C=!0)}this.selectError&&(M=this.selectError,b=this.selectResult,x=Date.now(),m="error");const H=I==="fetching",U=m==="loading",K=m==="error";return{status:m,fetchStatus:I,isLoading:U,isSuccess:m==="success",isError:K,isInitialLoading:U&&H,data:b,dataUpdatedAt:D,error:M,errorUpdatedAt:x,failureCount:O.fetchFailureCount,failureReason:O.fetchFailureReason,errorUpdateCount:O.errorUpdateCount,isFetched:O.dataUpdateCount>0||O.errorUpdateCount>0,isFetchedAfterMount:O.dataUpdateCount>v.dataUpdateCount||O.errorUpdateCount>v.errorUpdateCount,isFetching:H,isRefetching:H&&!U,isLoadingError:K&&O.dataUpdatedAt===0,isPaused:I==="paused",isPlaceholderData:C,isPreviousData:g,isRefetchError:K&&O.dataUpdatedAt!==0,isStale:re(t,s),refetch:this.refetch,remove:this.remove}}updateResult(t){const s=this.currentResult,r=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,oe(r,s))return;this.currentResult=r;const a={cache:!0},o=()=>{if(!s)return!0;const{notifyOnChangeProps:l}=this.options;if(l==="all"||!l&&!this.trackedProps.size)return!0;const f=new Set(l??this.trackedProps);return this.options.useErrorBoundary&&f.add("error"),Object.keys(this.currentResult).some(S=>{const v=S;return this.currentResult[v]!==s[v]&&f.has(v)})};(t==null?void 0:t.listeners)!==!1&&o()&&(a.listeners=!0),this.notify({...a,...t})}updateQuery(){const t=this.client.getQueryCache().build(this.client,this.options);if(t===this.currentQuery)return;const s=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(s==null||s.removeObserver(this),t.addObserver(this))}onQueryUpdate(t){const s={};t.type==="success"?s.onSuccess=!t.manual:t.type==="error"&&!Ve(t.error)&&(s.onError=!0),this.updateResult(s),this.hasListeners()&&this.updateTimers()}notify(t){J.batch(()=>{if(t.onSuccess){var s,r,a,o;(s=(r=this.options).onSuccess)==null||s.call(r,this.currentResult.data),(a=(o=this.options).onSettled)==null||a.call(o,this.currentResult.data,null)}else if(t.onError){var l,f,S,v;(l=(f=this.options).onError)==null||l.call(f,this.currentResult.error),(S=(v=this.options).onSettled)==null||S.call(v,void 0,this.currentResult.error)}t.listeners&&this.listeners.forEach(y=>{y(this.currentResult)}),t.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function Ye(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function le(e,t){return Ye(e,t)||e.state.dataUpdatedAt>0&&te(e,t,t.refetchOnMount)}function te(e,t,s){if(t.enabled!==!1){const r=typeof s=="function"?s(e):s;return r==="always"||r!==!1&&re(e,t)}return!1}function de(e,t,s,r){return s.enabled!==!1&&(e!==t||r.enabled===!1)&&(!s.suspense||e.state.status!=="error")&&re(e,s)}function re(e,t){return e.isStaleByTime(t.staleTime)}const Ge=Ce.useSyncExternalStore,fe=T.createContext(void 0),ge=T.createContext(!1);function _e(e,t){return e||(t&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=fe),window.ReactQueryClientContext):fe)}const je=({context:e}={})=>{const t=T.useContext(_e(e,T.useContext(ge)));if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},Us=({client:e,children:t,context:s,contextSharing:r=!1})=>{T.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]);const a=_e(s,r);return T.createElement(ge.Provider,{value:!s&&r},T.createElement(a.Provider,{value:e},t))},we=T.createContext(!1),Be=()=>T.useContext(we);we.Provider;function qe(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}const Xe=T.createContext(qe()),ze=()=>T.useContext(Xe);function We(e,t){return typeof e=="function"?e(...t):!!e}const Ze=(e,t)=>{(e.suspense||e.useErrorBoundary)&&(t.isReset()||(e.retryOnMount=!1))},$e=e=>{T.useEffect(()=>{e.clearReset()},[e])},et=({result:e,errorResetBoundary:t,useErrorBoundary:s,query:r})=>e.isError&&!t.isReset()&&!e.isFetching&&We(s,[e.error,r]),tt=e=>{e.suspense&&typeof e.staleTime!="number"&&(e.staleTime=1e3)},st=(e,t)=>e.isLoading&&e.isFetching&&!t,rt=(e,t,s)=>(e==null?void 0:e.suspense)&&st(t,s),nt=(e,t,s)=>t.fetchOptimistic(e).then(({data:r})=>{e.onSuccess==null||e.onSuccess(r),e.onSettled==null||e.onSettled(r,null)}).catch(r=>{s.clearReset(),e.onError==null||e.onError(r),e.onSettled==null||e.onSettled(void 0,r)});function ot(e,t){const s=je({context:e.context}),r=Be(),a=ze(),o=s.defaultQueryOptions(e);o._optimisticResults=r?"isRestoring":"optimistic",o.onError&&(o.onError=J.batchCalls(o.onError)),o.onSuccess&&(o.onSuccess=J.batchCalls(o.onSuccess)),o.onSettled&&(o.onSettled=J.batchCalls(o.onSettled)),tt(o),Ze(o,a),$e(a);const[l]=T.useState(()=>new t(s,o)),f=l.getOptimisticResult(o);if(Ge(T.useCallback(S=>r?()=>{}:l.subscribe(J.batchCalls(S)),[l,r]),()=>l.getCurrentResult(),()=>l.getCurrentResult()),T.useEffect(()=>{l.setOptions(o,{listeners:!1})},[o,l]),rt(o,f,r))throw nt(o,l,a);if(et({result:f,errorResetBoundary:a,useErrorBoundary:o.useErrorBoundary,query:l.getCurrentQuery()}))throw f.error;return o.notifyOnChangeProps?f:l.trackResult(f)}function Ms(e,t,s){const r=Qe(e,t,s);return ot(r,Ne)}let it=0;function Qs(e,t){const s=`atom${++it}`,r={toString:()=>s};return typeof e=="function"?r.read=e:(r.init=e,r.read=a=>a(r),r.write=(a,o,l)=>o(r,typeof l=="function"?l(a(r)):l)),t&&(r.write=t),r}const X=e=>"init"in e,z=e=>!!e.write,B=new WeakMap,ut=(e,t)=>{B.set(e,t),e.catch(()=>{}).finally(()=>B.delete(e))},he=(e,t)=>{const s=B.get(e);s&&(B.delete(e),s(t))},ye=(e,t)=>{e.status="fulfilled",e.value=t},pe=(e,t)=>{e.status="rejected",e.reason=t},Y=(e,t)=>"v"in e&&"v"in t&&Object.is(e.v,t.v),Ee=(e,t)=>"e"in e&&"e"in t&&Object.is(e.e,t.e),W=e=>"v"in e&&e.v instanceof Promise,G=e=>{if("e"in e)throw e.e;return e.v},ke=()=>{var e,t;const s=new WeakMap,r=new WeakMap,a=new Map;let o,l;((e={VITE_API_HOST:"https://test-ryx-admin-api.p.quicknav.cn",VITE_TOKEN_KEY:"RUOYI_TOKEN_GH",BASE_URL:"/RuoYi-X-Admin/",MODE:"gh",DEV:!1,PROD:!0,SSR:!1})==null?void 0:e.MODE)!=="production"&&(o=new Set,l=new Set);const f=n=>s.get(n),S=(n,u)=>{var d;((d={VITE_API_HOST:"https://test-ryx-admin-api.p.quicknav.cn",VITE_TOKEN_KEY:"RUOYI_TOKEN_GH",BASE_URL:"/RuoYi-X-Admin/",MODE:"gh",DEV:!1,PROD:!0,SSR:!1})==null?void 0:d.MODE)!=="production"&&Object.freeze(u);const c=s.get(n);if(s.set(n,u),a.has(n)||a.set(n,c),c&&W(c)){const E="v"in u?u.v instanceof Promise?u.v:Promise.resolve(u.v):Promise.reject(u.e);he(c.v,E)}},v=(n,u,d)=>{const c=new Map;let E=!1;d.forEach(p=>{var R;const k=p===n?u:f(p);k?(c.set(p,k),u.d.get(p)!==k&&(E=!0)):((R={VITE_API_HOST:"https://test-ryx-admin-api.p.quicknav.cn",VITE_TOKEN_KEY:"RUOYI_TOKEN_GH",BASE_URL:"/RuoYi-X-Admin/",MODE:"gh",DEV:!1,PROD:!0,SSR:!1})==null?void 0:R.MODE)!=="production"&&console.warn("[Bug] atom state not found")}),(E||u.d.size!==c.size)&&(u.d=c)},y=(n,u,d)=>{const c=f(n),E={d:(c==null?void 0:c.d)||new Map,v:u};return d&&v(n,E,d),c&&Y(c,E)&&c.d===E.d?c:(S(n,E),E)},O=(n,u,d)=>{const c=f(n),E={d:(c==null?void 0:c.d)||new Map,e:u};return d&&v(n,E,d),c&&Ee(c,E)&&c.d===E.d?c:(S(n,E),E)},D=n=>{const u=f(n);if(u&&(u.d.forEach((P,A)=>{A!==n&&!r.has(A)&&D(A)}),Array.from(u.d).every(([P,A])=>P===n||f(P)===A)))return u;const d=new Set;let c=!0;const E=P=>{if(d.add(P),P===n){const _=f(P);if(_)return G(_);if(X(P))return P.init;throw new Error("no atom init")}const A=D(P);return G(A)};let p,R;const k={get signal(){return p||(p=new AbortController),p.signal},get setSelf(){var P;return((P={VITE_API_HOST:"https://test-ryx-admin-api.p.quicknav.cn",VITE_TOKEN_KEY:"RUOYI_TOKEN_GH",BASE_URL:"/RuoYi-X-Admin/",MODE:"gh",DEV:!1,PROD:!0,SSR:!1})==null?void 0:P.MODE)!=="production"&&!z(n)&&console.warn("setSelf function cannot be used with read-only atom"),!R&&z(n)&&(R=(...A)=>{var _;if(((_={VITE_API_HOST:"https://test-ryx-admin-api.p.quicknav.cn",VITE_TOKEN_KEY:"RUOYI_TOKEN_GH",BASE_URL:"/RuoYi-X-Admin/",MODE:"gh",DEV:!1,PROD:!0,SSR:!1})==null?void 0:_.MODE)!=="production"&&c&&console.warn("setSelf function cannot be called in sync"),!c)return b(n,...A)}),R}};try{const P=n.read(E,k);if(P instanceof Promise){let A;const _=new Promise((V,Ie)=>{let F=!1;P.then(Q=>{F||(F=!0,y(n,_,d),ye(_,Q),V(Q))},Q=>{F||(F=!0,y(n,_,d),pe(_,Q),Ie(Q))}),A=Q=>{F||(F=!0,Q.then(q=>ye(_,q),q=>pe(_,q)),V(Q))}});return _.status="pending",ut(_,V=>{V&&A(V),p==null||p.abort()}),y(n,_,d)}return y(n,P,d)}catch(P){return O(n,P,d)}finally{c=!1}},M=n=>G(D(n)),x=n=>{let u=r.get(n);return u||(u=H(n)),u},I=(n,u)=>!u.l.size&&(!u.t.size||u.t.size===1&&u.t.has(n)),m=n=>{const u=r.get(n);u&&I(n,u)&&U(n)},g=n=>{const u=r.get(n);u==null||u.t.forEach(d=>{if(d!==n){const c=f(d),E=D(d);(!c||!Y(c,E))&&g(d)}})},C=(n,...u)=>{let d=!0;const c=R=>G(D(R)),E=(R,...k)=>{let P;if(R===n){if(!X(R))throw new Error("atom not writable");const A=f(R),_=y(R,k[0]);(!A||!Y(A,_))&&g(R)}else P=C(R,...k);return d||L(),P},p=n.write(c,E,...u);return d=!1,p},b=(n,...u)=>{const d=C(n,...u);return L(),d},H=(n,u)=>{var d;const c={t:new Set(u&&[u]),l:new Set};if(r.set(n,c),((d={VITE_API_HOST:"https://test-ryx-admin-api.p.quicknav.cn",VITE_TOKEN_KEY:"RUOYI_TOKEN_GH",BASE_URL:"/RuoYi-X-Admin/",MODE:"gh",DEV:!1,PROD:!0,SSR:!1})==null?void 0:d.MODE)!=="production"&&l.add(n),D(n).d.forEach((E,p)=>{const R=r.get(p);R?R.t.add(n):p!==n&&H(p,n)}),D(n),z(n)&&n.onMount){const E=n.onMount((...p)=>b(n,...p));E&&(c.u=E)}return c},U=n=>{var u,d,c;const E=(u=r.get(n))==null?void 0:u.u;E&&E(),r.delete(n),((d={VITE_API_HOST:"https://test-ryx-admin-api.p.quicknav.cn",VITE_TOKEN_KEY:"RUOYI_TOKEN_GH",BASE_URL:"/RuoYi-X-Admin/",MODE:"gh",DEV:!1,PROD:!0,SSR:!1})==null?void 0:d.MODE)!=="production"&&l.delete(n);const p=f(n);p?(W(p)&&he(p.v),p.d.forEach((R,k)=>{if(k!==n){const P=r.get(k);P&&(P.t.delete(n),I(k,P)&&U(k))}})):((c={VITE_API_HOST:"https://test-ryx-admin-api.p.quicknav.cn",VITE_TOKEN_KEY:"RUOYI_TOKEN_GH",BASE_URL:"/RuoYi-X-Admin/",MODE:"gh",DEV:!1,PROD:!0,SSR:!1})==null?void 0:c.MODE)!=="production"&&console.warn("[Bug] could not find atom state to unmount",n)},K=(n,u,d)=>{const c=new Set(u.d.keys());d==null||d.forEach((E,p)=>{if(c.has(p)){c.delete(p);return}const R=r.get(p);R&&(R.t.delete(n),I(p,R)&&U(p))}),c.forEach(E=>{const p=r.get(E);p?p.t.add(n):r.has(n)&&H(E,n)})},L=()=>{for(var n;a.size;){const u=Array.from(a);a.clear(),u.forEach(([d,c])=>{var E;const p=f(d);if(p){p.d!==(c==null?void 0:c.d)&&K(d,p,c==null?void 0:c.d);const R=r.get(d);R&&!(c&&!W(c)&&(Y(c,p)||Ee(c,p)))&&R.l.forEach(k=>k())}else((E={VITE_API_HOST:"https://test-ryx-admin-api.p.quicknav.cn",VITE_TOKEN_KEY:"RUOYI_TOKEN_GH",BASE_URL:"/RuoYi-X-Admin/",MODE:"gh",DEV:!1,PROD:!0,SSR:!1})==null?void 0:E.MODE)!=="production"&&console.warn("[Bug] no atom state to flush")})}((n={VITE_API_HOST:"https://test-ryx-admin-api.p.quicknav.cn",VITE_TOKEN_KEY:"RUOYI_TOKEN_GH",BASE_URL:"/RuoYi-X-Admin/",MODE:"gh",DEV:!1,PROD:!0,SSR:!1})==null?void 0:n.MODE)!=="production"&&o.forEach(u=>u())},w=(n,u)=>{const d=x(n);L();const c=d.l;return c.add(u),()=>{c.delete(u),m(n)}};return((t={VITE_API_HOST:"https://test-ryx-admin-api.p.quicknav.cn",VITE_TOKEN_KEY:"RUOYI_TOKEN_GH",BASE_URL:"/RuoYi-X-Admin/",MODE:"gh",DEV:!1,PROD:!0,SSR:!1})==null?void 0:t.MODE)!=="production"?{get:M,set:b,sub:w,dev_subscribe_state:n=>(o.add(n),()=>{o.delete(n)}),dev_get_mounted_atoms:()=>l.values(),dev_get_atom_state:n=>s.get(n),dev_get_mounted:n=>r.get(n),dev_restore_atoms:n=>{for(const[u,d]of n)X(u)&&(y(u,d),g(u));L()}}:{get:M,set:b,sub:w}};let Z;const at=()=>(Z||(Z=ke()),Z),Ae=T.createContext(void 0),De=e=>{const t=T.useContext(Ae);return(e==null?void 0:e.store)||t||at()},xs=({children:e,store:t})=>{const s=T.useRef();return!t&&!s.current&&(s.current=ke()),T.createElement(Ae.Provider,{value:t||s.current},e)},ct=e=>e instanceof Promise,lt=He.use||(e=>{if(e.status==="pending")throw e;if(e.status==="fulfilled")return e.value;throw e.status==="rejected"?e.reason:(e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e)});function dt(e,t){const s=De(t),[[r,a,o],l]=T.useReducer(v=>{const y=s.get(e);return Object.is(v[0],y)&&v[1]===s&&v[2]===e?v:[y,s,e]},void 0,()=>[s.get(e),s,e]);let f=r;(a!==s||o!==e)&&(l(),f=s.get(e));const S=t==null?void 0:t.delay;return T.useEffect(()=>{const v=s.sub(e,()=>{if(typeof S=="number"){setTimeout(l,S);return}l()});return l(),v},[s,e,S]),T.useDebugValue(f),ct(f)?lt(f):f}function ft(e,t){const s=De(t);return T.useCallback((...a)=>{var o;if(((o={VITE_API_HOST:"https://test-ryx-admin-api.p.quicknav.cn",VITE_TOKEN_KEY:"RUOYI_TOKEN_GH",BASE_URL:"/RuoYi-X-Admin/",MODE:"gh",DEV:!1,PROD:!0,SSR:!1})==null?void 0:o.MODE)!=="production"&&!("write"in e))throw new Error("not writable atom");return s.set(e,...a)},[s,e])}function Ks(e,t){return[dt(e,t),ft(e,t)]}export{os as $,oe as A,ks as B,Ge as C,We as D,vt as E,St as F,ps as G,ls as H,ys as I,fs as J,ds as K,hs as L,us as M,cs as N,is as O,xs as P,Us as Q,gs as R,se as S,as as T,es as U,$t as V,Zt as W,zt as X,Xt as Y,Wt as Z,Ks as _,J as a,ns as a0,rs as a1,ts as a2,Ts as a3,ss as a4,Ps as a5,Bt as a6,qt as a7,jt as a8,Gt as a9,gt as aA,bt as aB,Et as aC,Tt as aD,Pt as aE,Rt as aF,mt as aG,Ot as aH,Yt as aa,Nt as ab,Vt as ac,Jt as ad,Ft as ae,Lt as af,Kt as ag,xt as ah,Mt as ai,Qt as aj,Ss as ak,Rs as al,kt as am,Ut as an,_t as ao,wt as ap,Os as aq,At as ar,It as as,Ht as at,Dt as au,Ct as av,Es as aw,_s as ax,vs as ay,ms as az,Te as b,Cs as c,Is as d,Qe as e,Re as f,Hs as g,xe as h,Ve as i,ws as j,$ as k,me as l,Ds as m,Ue as n,Pe as o,As as p,ne as q,ce as r,j as s,Me as t,ft as u,Ms as v,bs as w,Qs as x,je as y,dt as z};
