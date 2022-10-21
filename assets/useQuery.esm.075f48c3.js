import{x as A,y as F,z as L,A as U,B as w,C as j,D as K,E as z,G as P,H,I as v,r as y,n as N,J as V}from"./index.623678ca.js";import{s as W,u as q}from"./utils.esm.46a75e3a.js";class G extends A{constructor(e,t){super(),this.client=e,this.options=t,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(t)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.length===1&&(this.currentQuery.addObserver(this),D(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.listeners.length||this.destroy()}shouldFetchOnReconnect(){return C(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return C(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=[],this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(e,t){const r=this.options,u=this.currentQuery;if(this.options=this.client.defaultQueryOptions(e),F(r,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();const s=this.hasListeners();s&&B(this.currentQuery,u,this.options,r)&&this.executeFetch(),this.updateResult(t),s&&(this.currentQuery!==u||this.options.enabled!==r.enabled||this.options.staleTime!==r.staleTime)&&this.updateStaleTimeout();const i=this.computeRefetchInterval();s&&(this.currentQuery!==u||this.options.enabled!==r.enabled||i!==this.currentRefetchInterval)&&this.updateRefetchInterval(i)}getOptimisticResult(e){const t=this.client.getQueryCache().build(this.client,e);return this.createResult(t,e)}getCurrentResult(){return this.currentResult}trackResult(e){const t={};return Object.keys(e).forEach(r=>{Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(r),e[r])})}),t}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:e,...t}={}){return this.fetch({...t,meta:{refetchPage:e}})}fetchOptimistic(e){const t=this.client.defaultQueryOptions(e),r=this.client.getQueryCache().build(this.client,t);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,t))}fetch(e){var t;return this.executeFetch({...e,cancelRefetch:(t=e.cancelRefetch)!=null?t:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(e){this.updateQuery();let t=this.currentQuery.fetch(this.options,e);return e!=null&&e.throwOnError||(t=t.catch(L)),t}updateStaleTimeout(){if(this.clearStaleTimeout(),U||this.currentResult.isStale||!w(this.options.staleTime))return;const t=j(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},t)}computeRefetchInterval(){var e;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(e=this.options.refetchInterval)!=null?e:!1}updateRefetchInterval(e){this.clearRefetchInterval(),this.currentRefetchInterval=e,!(U||this.options.enabled===!1||!w(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||K.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(e,t){const r=this.currentQuery,u=this.options,s=this.currentResult,i=this.currentResultState,a=this.currentResultOptions,c=e!==r,f=c?e.state:this.currentQueryInitialState,p=c?this.currentResult:this.previousQueryResult,{state:l}=e;let{dataUpdatedAt:m,error:I,errorUpdatedAt:O,fetchStatus:R,status:d}=l,x=!1,T=!1,h;if(t._optimisticResults){const o=this.hasListeners(),S=!o&&D(e,t),k=o&&B(e,r,t,u);(S||k)&&(R=z(e.options.networkMode)?"fetching":"paused",m||(d="loading")),t._optimisticResults==="isRestoring"&&(R="idle")}if(t.keepPreviousData&&!l.dataUpdateCount&&p!=null&&p.isSuccess&&d!=="error")h=p.data,m=p.dataUpdatedAt,d=p.status,x=!0;else if(t.select&&typeof l.data<"u")if(s&&l.data===(i==null?void 0:i.data)&&t.select===this.selectFn)h=this.selectResult;else try{this.selectFn=t.select,h=t.select(l.data),h=P(s==null?void 0:s.data,h,t),this.selectResult=h,this.selectError=null}catch(o){this.selectError=o}else h=l.data;if(typeof t.placeholderData<"u"&&typeof h>"u"&&d==="loading"){let o;if(s!=null&&s.isPlaceholderData&&t.placeholderData===(a==null?void 0:a.placeholderData))o=s.data;else if(o=typeof t.placeholderData=="function"?t.placeholderData():t.placeholderData,t.select&&typeof o<"u")try{o=t.select(o),o=P(s==null?void 0:s.data,o,t),this.selectError=null}catch(S){this.selectError=S}typeof o<"u"&&(d="success",h=o,T=!0)}this.selectError&&(I=this.selectError,h=this.selectResult,O=Date.now(),d="error");const b=R==="fetching",Q=d==="loading",g=d==="error";return{status:d,fetchStatus:R,isLoading:Q,isSuccess:d==="success",isError:g,isInitialLoading:Q&&b,data:h,dataUpdatedAt:m,error:I,errorUpdatedAt:O,failureCount:l.fetchFailureCount,errorUpdateCount:l.errorUpdateCount,isFetched:l.dataUpdateCount>0||l.errorUpdateCount>0,isFetchedAfterMount:l.dataUpdateCount>f.dataUpdateCount||l.errorUpdateCount>f.errorUpdateCount,isFetching:b,isRefetching:b&&!Q,isLoadingError:g&&l.dataUpdatedAt===0,isPaused:R==="paused",isPlaceholderData:T,isPreviousData:x,isRefetchError:g&&l.dataUpdatedAt!==0,isStale:E(e,t),refetch:this.refetch,remove:this.remove}}updateResult(e){const t=this.currentResult,r=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,F(r,t))return;this.currentResult=r;const u={cache:!0},s=()=>{if(!t)return!0;const{notifyOnChangeProps:i}=this.options;if(i==="all"||!i&&!this.trackedProps.size)return!0;const a=new Set(i!=null?i:this.trackedProps);return this.options.useErrorBoundary&&a.add("error"),Object.keys(this.currentResult).some(c=>{const f=c;return this.currentResult[f]!==t[f]&&a.has(f)})};(e==null?void 0:e.listeners)!==!1&&s()&&(u.listeners=!0),this.notify({...u,...e})}updateQuery(){const e=this.client.getQueryCache().build(this.client,this.options);if(e===this.currentQuery)return;const t=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(t==null||t.removeObserver(this),e.addObserver(this))}onQueryUpdate(e){const t={};e.type==="success"?t.onSuccess=!e.manual:e.type==="error"&&!H(e.error)&&(t.onError=!0),this.updateResult(t),this.hasListeners()&&this.updateTimers()}notify(e){v.batch(()=>{if(e.onSuccess){var t,r,u,s;(t=(r=this.options).onSuccess)==null||t.call(r,this.currentResult.data),(u=(s=this.options).onSettled)==null||u.call(s,this.currentResult.data,null)}else if(e.onError){var i,a,c,f;(i=(a=this.options).onError)==null||i.call(a,this.currentResult.error),(c=(f=this.options).onSettled)==null||c.call(f,void 0,this.currentResult.error)}e.listeners&&this.listeners.forEach(p=>{p(this.currentResult)}),e.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function J(n,e){return e.enabled!==!1&&!n.state.dataUpdatedAt&&!(n.state.status==="error"&&e.retryOnMount===!1)}function D(n,e){return J(n,e)||n.state.dataUpdatedAt>0&&C(n,e,e.refetchOnMount)}function C(n,e,t){if(e.enabled!==!1){const r=typeof t=="function"?t(n):t;return r==="always"||r!==!1&&E(n,e)}return!1}function B(n,e,t,r){return t.enabled!==!1&&(n!==e||r.enabled===!1)&&(!t.suspense||n.state.status!=="error")&&E(n,t)}function E(n,e){return n.isStaleByTime(e.staleTime)}const M=y.exports.createContext(!1),X=()=>y.exports.useContext(M);M.Provider;function Y(){let n=!1;return{clearReset:()=>{n=!1},reset:()=>{n=!0},isReset:()=>n}}const Z=y.exports.createContext(Y()),_=()=>y.exports.useContext(Z),$=(n,e)=>{(n.suspense||n.useErrorBoundary)&&(e.isReset()||(n.retryOnMount=!1))},ee=n=>{y.exports.useEffect(()=>{n.clearReset()},[n])},te=({result:n,errorResetBoundary:e,useErrorBoundary:t,query:r})=>n.isError&&!e.isReset()&&!n.isFetching&&W(t,[n.error,r]);function se(n,e){const t=N({context:n.context}),r=X(),u=_(),s=t.defaultQueryOptions(n);s._optimisticResults=r?"isRestoring":"optimistic",s.onError&&(s.onError=v.batchCalls(s.onError)),s.onSuccess&&(s.onSuccess=v.batchCalls(s.onSuccess)),s.onSettled&&(s.onSettled=v.batchCalls(s.onSettled)),s.suspense&&typeof s.staleTime!="number"&&(s.staleTime=1e3),$(s,u),ee(u);const[i]=y.exports.useState(()=>new e(t,s)),a=i.getOptimisticResult(s);if(q(y.exports.useCallback(c=>r?()=>{}:i.subscribe(v.batchCalls(c)),[i,r]),()=>i.getCurrentResult(),()=>i.getCurrentResult()),y.exports.useEffect(()=>{i.setOptions(s,{listeners:!1})},[s,i]),s.suspense&&a.isLoading&&a.isFetching&&!r)throw i.fetchOptimistic(s).then(({data:c})=>{s.onSuccess==null||s.onSuccess(c),s.onSettled==null||s.onSettled(c,null)}).catch(c=>{u.clearReset(),s.onError==null||s.onError(c),s.onSettled==null||s.onSettled(void 0,c)});if(te({result:a,errorResetBoundary:u,useErrorBoundary:s.useErrorBoundary,query:i.getCurrentQuery()}))throw a.error;return s.notifyOnChangeProps?a:i.trackResult(a)}function ue(n,e,t){const r=V(n,e,t);return se(r,G)}export{ue as u};
