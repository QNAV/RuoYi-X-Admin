import{r as o,C as r}from"./index-be1f0aa3.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const a=(e,t={})=>o({path:"/tool/gen/batchGenCode",method:"GET",query:e,secure:!0,skipErrorHandler:!1,...t}),n=(e,t={})=>o({path:"/tool/gen/db/list",method:"POST",body:e,secure:!0,type:r.Json,skipErrorHandler:!1,...t}),h=(e,t={})=>o({path:"/tool/gen/edit",method:"POST",body:e,secure:!0,type:r.Json,skipErrorHandler:!1,...t}),l=(e,t={})=>o({path:"/tool/gen/importTable",method:"POST",query:e,secure:!0,skipErrorHandler:!1,...t}),c=(e,t={})=>o({path:"/tool/gen/info",method:"GET",query:e,secure:!0,skipErrorHandler:!1,...t}),i=(e,t={})=>o({path:"/tool/gen/list",method:"POST",body:e,secure:!0,type:r.Json,skipErrorHandler:!1,...t}),p=(e,t={})=>o({path:"/tool/gen/preview",method:"GET",query:e,secure:!0,skipErrorHandler:!1,...t}),d=(e,t={})=>o({path:"/tool/gen/remove",method:"POST",query:e,secure:!0,skipErrorHandler:!1,...t}),g=(e,t={})=>o({path:"/tool/gen/synchDb",method:"GET",query:e,secure:!0,skipErrorHandler:!1,...t});export{h as a,d as b,a as c,n as d,l as e,g as f,c as g,p as h,i};
