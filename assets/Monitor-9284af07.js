import{e as r,C as s}from"./index-1465a0a3.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(o,e){return this.cache.has(o)?this.cache.get(o):(this.cache.set(o,e),e)}};const n=(o={})=>r({path:"/monitor/cache/info",method:"GET",secure:!0,skipErrorHandler:!1,...o}),a=(o={})=>r({path:"/monitor/logininfor/clean",method:"POST",secure:!0,skipErrorHandler:!1,...o}),i=(o,e={})=>r({path:"/monitor/logininfor/export",method:"POST",body:o,secure:!0,type:s.Json,skipErrorHandler:!1,...e}),l=(o,e={})=>r({path:"/monitor/logininfor/list",method:"POST",body:o,secure:!0,type:s.Json,skipErrorHandler:!1,...e}),p=(o,e={})=>r({path:"/monitor/logininfor/remove",method:"POST",query:o,secure:!0,skipErrorHandler:!1,...e}),c=(o={})=>r({path:"/monitor/operlog/clean",method:"POST",secure:!0,skipErrorHandler:!1,...o}),h=(o,e={})=>r({path:"/monitor/operlog/export",method:"POST",body:o,secure:!0,type:s.Json,skipErrorHandler:!1,...e}),m=(o,e={})=>r({path:"/monitor/operlog/list",method:"POST",body:o,secure:!0,type:s.Json,skipErrorHandler:!1,...e}),d=(o,e={})=>r({path:"/monitor/operlog/remove",method:"POST",query:o,secure:!0,skipErrorHandler:!1,...e}),u=(o,e={})=>r({path:"/monitor/online/forceLogout",method:"POST",query:o,secure:!0,skipErrorHandler:!1,...e}),f=(o,e={})=>r({path:"/monitor/online/list",method:"GET",query:o,secure:!0,skipErrorHandler:!1,...e});export{i as a,p as b,n as c,l as d,u as e,f,c as g,h,d as i,m as j,a as s};
