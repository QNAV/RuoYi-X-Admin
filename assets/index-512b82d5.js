import{a as i,s as S,b as c,u as l,c as p}from"./react-8fc26eed.js";import{e as f,a as r,g,f as A}from"./index-58ea63b0.js";import{w as v}from"./utils-1fed7460.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,s){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,s),s)}};const o=e=>i(["global","dict",e],async()=>{const s=await S({dictType:e});return f(s)},{cacheTime:1/0,staleTime:1/0}),_=()=>{const{data:e}=o("sys_normal_disable"),s=(e==null?void 0:e.defaultValue)??null,t=(e==null?void 0:e.valueEnum)??new Map;return{defaultValueSysNormalDisable:s,valueEnumSysNormalDisable:t}},D=()=>{const{data:e}=o("sys_show_hide"),s=(e==null?void 0:e.defaultValue)??null,t=(e==null?void 0:e.valueEnum)??new Map;return{defaultValueSysShowHide:s,valueEnumSysShowHide:t}},R=()=>{const{data:e}=o("sys_yes_no"),s=(e==null?void 0:e.defaultValue)??null,t=(e==null?void 0:e.valueEnum)??new Map;return{defaultValueSysYesNo:s,valueEnumSysYesNo:t}},j=()=>{const{data:e}=o("sys_notice_type"),s=(e==null?void 0:e.defaultValue)??null,t=(e==null?void 0:e.valueEnum)??new Map;return{defaultValueSysNoticeType:s,valueEnumSysNoticeType:t}},Q=()=>{const{data:e}=o("sys_notice_status"),s=(e==null?void 0:e.defaultValue)??null,t=(e==null?void 0:e.valueEnum)??new Map;return{defaultValueSysNoticeStatus:s,valueEnumSysNoticeStatus:t}},d=()=>{const{data:e}=o("sys_oper_type"),s=(e==null?void 0:e.defaultValue)??null,t=(e==null?void 0:e.valueEnum)??new Map;return{defaultValueSysOperType:s,valueEnumSysOperType:t}},N=()=>{const{data:e}=o("sys_common_status"),s=(e==null?void 0:e.defaultValue)??null,t=(e==null?void 0:e.valueEnum)??new Map;return{defaultValueSysCommonStatus:s,valueEnumSysCommonStatus:t}},I=()=>{const{data:e}=o("sys_user_sex"),s=(e==null?void 0:e.defaultValue)??null,t=(e==null?void 0:e.valueEnum)??new Map;return{defaultValueSysUserSex:s,valueEnumSysUserSex:t}};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,s){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,s),s)}};const b=(e={})=>r({path:"/info",method:"GET",secure:!0,skipErrorHandler:!1,...e});globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,s){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,s),s)}};const T=(e={})=>r({path:"/routers",method:"GET",secure:!0,skipErrorHandler:!1,...e});globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,s){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,s),s)}};const h=["global","initialState"],m=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/models/initialState.ts/atomPermissions",c(new Set([])));m.debugLabel="atomPermissions";const w=()=>l(m),a=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/models/initialState.ts/atomKeepAliveRoutes",c([]));a.debugLabel="atomKeepAliveRoutes";const E=()=>l(a),K=()=>p(a),Y=()=>{const e=w(),s=E();return i(h,async()=>{const[t,n]=await Promise.all([b(),T()]);e(new Set(t.permissions));const u=g(n);return s(Object.keys(u).filter(y=>u[y].isKeepAlive)),{userInfo:t,routeSettingMap:u,menus:A(n)}},{cacheTime:1/0,staleTime:1/0})},k=()=>{const e=v();return()=>e.invalidateQueries(h)};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,s){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,s),s)}};export{K as a,k as b,N as c,d,o as e,R as f,_ as g,D as h,j as i,Q as j,I as k,Y as u};
