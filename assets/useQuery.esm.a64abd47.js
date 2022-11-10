import{v as k,w as F,x as L,y as U,z as w,A as j,B as K,C as q,D as P,E as z,G as v,r as y,q as H,H as N}from"./index.82fca14a.js";import{s as V,u as W}from"./utils.esm.41c15342.js";class G extends k{constructor(e,t){super(),this.client=e,this.options=t,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(t)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.length===1&&(this.currentQuery.addObserver(this),D(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.listeners.length||this.destroy()}shouldFetchOnReconnect(){return E(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return E(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=[],this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(e,t){const r=this.options,u=this.currentQuery;if(this.options=this.client.defaultQueryOptions(e),F(r,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();const s=this.hasListeners();s&&A(this.currentQuery,u,this.options,r)&&this.executeFetch(),this.updateResult(t),s&&(this.currentQuery!==u||this.options.enabled!==r.enabled||this.options.staleTime!==r.staleTime)&&this.updateStaleTimeout();const n=this.computeRefetchInterval();s&&(this.currentQuery!==u||this.options.enabled!==r.enabled||n!==this.currentRefetchInterval)&&this.updateRefetchInterval(n)}getOptimisticResult(e){const t=this.client.getQueryCache().build(this.client,e);return this.createResult(t,e)}getCurrentResult(){return this.currentResult}trackResult(e){const t={};return Object.keys(e).forEach(r=>{Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(r),e[r])})}),t}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:e,...t}={}){return this.fetch({...t,meta:{refetchPage:e}})}fetchOptimistic(e){const t=this.client.defaultQueryOptions(e),r=this.client.getQueryCache().build(this.client,t);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,t))}fetch(e){var t;return this.executeFetch({...e,cancelRefetch:(t=e.cancelRefetch)!=null?t:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(e){this.updateQuery();let t=this.currentQuery.fetch(this.options,e);return e!=null&&e.throwOnError||(t=t.catch(L)),t}updateStaleTimeout(){if(this.clearStaleTimeout(),U||this.currentResult.isStale||!w(this.options.staleTime))return;const t=j(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},t)}computeRefetchInterval(){var e;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(e=this.options.refetchInterval)!=null?e:!1}updateRefetchInterval(e){this.clearRefetchInterval(),this.currentRefetchInterval=e,!(U||this.options.enabled===!1||!w(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||K.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(e,t){const r=this.currentQuery,u=this.options,s=this.currentResult,n=this.currentResultState,a=this.currentResultOptions,c=e!==r,f=c?e.state:this.currentQueryInitialState,p=c?this.currentResult:this.previousQueryResult,{state:l}=e;let{dataUpdatedAt:m,error:I,errorUpdatedAt:O,fetchStatus:R,status:d}=l,x=!1,T=!1,h;if(t._optimisticResults){const o=this.hasListeners(),S=!o&&D(e,t),M=o&&A(e,r,t,u);(S||M)&&(R=q(e.options.networkMode)?"fetching":"paused",m||(d="loading")),t._optimisticResults==="isRestoring"&&(R="idle")}if(t.keepPreviousData&&!l.dataUpdatedAt&&p!=null&&p.isSuccess&&d!=="error")h=p.data,m=p.dataUpdatedAt,d=p.status,x=!0;else if(t.select&&typeof l.data<"u")if(s&&l.data===(n==null?void 0:n.data)&&t.select===this.selectFn)h=this.selectResult;else try{this.selectFn=t.select,h=t.select(l.data),h=P(s==null?void 0:s.data,h,t),this.selectResult=h,this.selectError=null}catch(o){this.selectError=o}else h=l.data;if(typeof t.placeholderData<"u"&&typeof h>"u"&&d==="loading"){let o;if(s!=null&&s.isPlaceholderData&&t.placeholderData===(a==null?void 0:a.placeholderData))o=s.data;else if(o=typeof t.placeholderData=="function"?t.placeholderData():t.placeholderData,t.select&&typeof o<"u")try{o=t.select(o),this.selectError=null}catch(S){this.selectError=S}typeof o<"u"&&(d="success",h=P(s==null?void 0:s.data,o,t),T=!0)}this.selectError&&(I=this.selectError,h=this.selectResult,O=Date.now(),d="error");const b=R==="fetching",Q=d==="loading",g=d==="error";return{status:d,fetchStatus:R,isLoading:Q,isSuccess:d==="success",isError:g,isInitialLoading:Q&&b,data:h,dataUpdatedAt:m,error:I,errorUpdatedAt:O,failureCount:l.fetchFailureCount,failureReason:l.fetchFailureReason,errorUpdateCount:l.errorUpdateCount,isFetched:l.dataUpdateCount>0||l.errorUpdateCount>0,isFetchedAfterMount:l.dataUpdateCount>f.dataUpdateCount||l.errorUpdateCount>f.errorUpdateCount,isFetching:b,isRefetching:b&&!Q,isLoadingError:g&&l.dataUpdatedAt===0,isPaused:R==="paused",isPlaceholderData:T,isPreviousData:x,isRefetchError:g&&l.dataUpdatedAt!==0,isStale:C(e,t),refetch:this.refetch,remove:this.remove}}updateResult(e){const t=this.currentResult,r=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,F(r,t))return;this.currentResult=r;const u={cache:!0},s=()=>{if(!t)return!0;const{notifyOnChangeProps:n}=this.options;if(n==="all"||!n&&!this.trackedProps.size)return!0;const a=new Set(n!=null?n:this.trackedProps);return this.options.useErrorBoundary&&a.add("error"),Object.keys(this.currentResult).some(c=>{const f=c;return this.currentResult[f]!==t[f]&&a.has(f)})};(e==null?void 0:e.listeners)!==!1&&s()&&(u.listeners=!0),this.notify({...u,...e})}updateQuery(){const e=this.client.getQueryCache().build(this.client,this.options);if(e===this.currentQuery)return;const t=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(t==null||t.removeObserver(this),e.addObserver(this))}onQueryUpdate(e){const t={};e.type==="success"?t.onSuccess=!e.manual:e.type==="error"&&!z(e.error)&&(t.onError=!0),this.updateResult(t),this.hasListeners()&&this.updateTimers()}notify(e){v.batch(()=>{if(e.onSuccess){var t,r,u,s;(t=(r=this.options).onSuccess)==null||t.call(r,this.currentResult.data),(u=(s=this.options).onSettled)==null||u.call(s,this.currentResult.data,null)}else if(e.onError){var n,a,c,f;(n=(a=this.options).onError)==null||n.call(a,this.currentResult.error),(c=(f=this.options).onSettled)==null||c.call(f,void 0,this.currentResult.error)}e.listeners&&this.listeners.forEach(p=>{p(this.currentResult)}),e.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function J(i,e){return e.enabled!==!1&&!i.state.dataUpdatedAt&&!(i.state.status==="error"&&e.retryOnMount===!1)}function D(i,e){return J(i,e)||i.state.dataUpdatedAt>0&&E(i,e,e.refetchOnMount)}function E(i,e,t){if(e.enabled!==!1){const r=typeof t=="function"?t(i):t;return r==="always"||r!==!1&&C(i,e)}return!1}function A(i,e,t,r){return t.enabled!==!1&&(i!==e||r.enabled===!1)&&(!t.suspense||i.state.status!=="error")&&C(i,t)}function C(i,e){return i.isStaleByTime(e.staleTime)}const B=y.exports.createContext(!1),X=()=>y.exports.useContext(B);B.Provider;function Y(){let i=!1;return{clearReset:()=>{i=!1},reset:()=>{i=!0},isReset:()=>i}}const Z=y.exports.createContext(Y()),_=()=>y.exports.useContext(Z),$=(i,e)=>{(i.suspense||i.useErrorBoundary)&&(e.isReset()||(i.retryOnMount=!1))},ee=i=>{y.exports.useEffect(()=>{i.clearReset()},[i])},te=({result:i,errorResetBoundary:e,useErrorBoundary:t,query:r})=>i.isError&&!e.isReset()&&!i.isFetching&&V(t,[i.error,r]);function se(i,e){const t=H({context:i.context}),r=X(),u=_(),s=t.defaultQueryOptions(i);s._optimisticResults=r?"isRestoring":"optimistic",s.onError&&(s.onError=v.batchCalls(s.onError)),s.onSuccess&&(s.onSuccess=v.batchCalls(s.onSuccess)),s.onSettled&&(s.onSettled=v.batchCalls(s.onSettled)),s.suspense&&typeof s.staleTime!="number"&&(s.staleTime=1e3),$(s,u),ee(u);const[n]=y.exports.useState(()=>new e(t,s)),a=n.getOptimisticResult(s);if(W(y.exports.useCallback(c=>r?()=>{}:n.subscribe(v.batchCalls(c)),[n,r]),()=>n.getCurrentResult(),()=>n.getCurrentResult()),y.exports.useEffect(()=>{n.setOptions(s,{listeners:!1})},[s,n]),s.suspense&&a.isLoading&&a.isFetching&&!r)throw n.fetchOptimistic(s).then(({data:c})=>{s.onSuccess==null||s.onSuccess(c),s.onSettled==null||s.onSettled(c,null)}).catch(c=>{u.clearReset(),s.onError==null||s.onError(c),s.onSettled==null||s.onSettled(void 0,c)});if(te({result:a,errorResetBoundary:u,useErrorBoundary:s.useErrorBoundary,query:n.getCurrentQuery()}))throw a.error;return s.notifyOnChangeProps?a:n.trackResult(a)}function ue(i,e,t){const r=N(i,e,t);return se(r,G)}export{ue as u};
