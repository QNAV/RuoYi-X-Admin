import{x as p,y as b,ax as f,I as h,ay as v,J as R,r as l}from"./index.7c81fac9.js";import{u as M,s as y}from"./utils.esm.0bacd143.js";class x extends p{constructor(t,e){super(),this.client=t,this.setOptions(e),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){const e=this.options;this.options=this.client.defaultMutationOptions(t),b(e,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this})}onUnsubscribe(){if(!this.listeners.length){var t;(t=this.currentMutation)==null||t.removeObserver(this)}}onMutationUpdate(t){this.updateResult();const e={listeners:!0};t.type==="success"?e.onSuccess=!0:t.type==="error"&&(e.onError=!0),this.notify(e)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(t,e){return this.mutateOptions=e,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof t<"u"?t:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const t=this.currentMutation?this.currentMutation.state:f(),e={...t,isLoading:t.status==="loading",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=e}notify(t){h.batch(()=>{if(this.mutateOptions){if(t.onSuccess){var e,i,u,s;(e=(i=this.mutateOptions).onSuccess)==null||e.call(i,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(u=(s=this.mutateOptions).onSettled)==null||u.call(s,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(t.onError){var r,o,n,a;(r=(o=this.mutateOptions).onError)==null||r.call(o,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(n=(a=this.mutateOptions).onSettled)==null||n.call(a,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}t.listeners&&this.listeners.forEach(d=>{d(this.currentResult)})})}}function C(c,t,e){const i=v(c,t,e),u=R({context:i.context}),[s]=l.exports.useState(()=>new x(u,i));l.exports.useEffect(()=>{s.setOptions(i)},[s,i]);const r=M(l.exports.useCallback(n=>s.subscribe(h.batchCalls(n)),[s]),()=>s.getCurrentResult(),()=>s.getCurrentResult()),o=l.exports.useCallback((n,a)=>{s.mutate(n,a).catch(m)},[s]);if(r.error&&y(s.options.useErrorBoundary,[r.error]))throw r.error;return{...r,mutate:o,mutateAsync:r.mutate}}function m(){}export{C as u};
