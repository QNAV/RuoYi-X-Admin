import{s as a,t as s,g as m,v as y,w as t,x as d}from"./index.b8b57d0a.js";import{u as l}from"./useQuery.esm.0c9039e0.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(o,e){return this.cache.has(o)?this.cache.get(o):(this.cache.set(o,e),e)}};const c=(o=[])=>{const e=new Set(o);return{canReadSysUser:s("system:user:list",e),canQuerySysUser:s("system:user:query",e),canAddSysUser:s("system:user:add",e),canEditSysUser:s("system:user:edit",e),canRemoveSysUser:s("system:user:remove",e),canExportSysUser:s("system:user:export",e),canImportSysUser:s("system:user:import",e),canResetSysUserPwd:s("system:user:resetPwd",e),canReadSysRole:s("system:role:list",e),canQuerySysRole:s("system:role:query",e),canAddSysRole:s("system:role:add",e),canEditSysRole:s("system:role:edit",e),canRemoveSysRole:s("system:role:remove",e),canExportSysRole:s("system:role:export",e),canReadSysMenu:s("system:menu:list",e),canQuerySysMenu:s("system:menu:query",e),canAddSysMenu:s("system:menu:add",e),canEditSysMenu:s("system:menu:edit",e),canRemoveSysMenu:s("system:menu:remove",e),canReadSysDept:s("system:dept:list",e),canQuerySysDept:s("system:dept:query",e),canAddSysDept:s("system:dept:add",e),canEditSysDept:s("system:dept:edit",e),canRemoveSysDept:s("system:dept:remove",e),canReadSysPost:s("system:post:list",e),canQuerySysPost:s("system:post:query",e),canAddSysPost:s("system:post:add",e),canEditSysPost:s("system:post:edit",e),canRemoveSysPost:s("system:post:remove",e),canExportSysPost:s("system:post:export",e),canReadSysDict:s("system:dict:list",e),canQuerySysDict:s("system:dict:query",e),canAddSysDict:s("system:dict:add",e),canEditSysDict:s("system:dict:edit",e),canRemoveSysDict:s("system:dict:remove",e),canExportSysDict:s("system:dict:export",e),canReadSysConfig:s("system:config:list",e),canQuerySysConfig:s("system:config:query",e),canAddSysConfig:s("system:config:add",e),canEditSysConfig:s("system:config:edit",e),canRemoveSysConfig:s("system:config:remove",e),canExportSysConfig:s("system:config:export",e),canReadSysNotice:s("system:notice:list",e),canQuerySysNotice:s("system:notice:query",e),canAddSysNotice:s("system:notice:add",e),canEditSysNotice:s("system:notice:edit",e),canRemoveSysNotice:s("system:notice:remove",e),canReadSysOperLog:s("system:operlog:list",e),canQuerySysOperLog:s("system:operlog:query",e),canRemoveSysOperLog:s("system:operlog:remove",e),canExportSysOperLog:s("system:operlog:export",e),canReadSysLogininfor:s("system:logininfor:list",e),canQuerySysLogininfor:s("system:logininfor:query",e),canRemoveSysLogininfor:s("system:logininfor:remove",e),canExportSysLogininfor:s("system:logininfor:export",e),canReadSysOSS:s("system:oss:list",e),canQuerySysOSS:s("system:oss:query",e),canRemoveSysOSS:s("system:oss:remove",e),canAddSysOSS:s("system:oss:add",e),canEditSysOSS:s("system:oss:edit",e),canUploadSysOSS:s("system:oss:upload",e),canDownloadSysOSS:s("system:oss:download",e),canReadMonitorOnline:s("monitor:online:list",e),canQueryMonitorOnline:s("monitor:online:query",e),canForceLogoutMonitorOnline:s("monitor:online:forceLogout",e),canBatchLogoutMonitorOnline:s("monitor:online:batchLogout",e),canReadMonitorDruid:s("monitor:druid:list",e),canReadMonitorCache:s("monitor:cache:list",e),canReadMonitorAdmin:s("monitor:admin:list",e),canReadMonitorXxlJob:s("monitor:xxljob:list",e),canReadToolBuild:s("tool:build:list",e),canReadToolGen:s("tool:gen:list",e),canQueryToolGen:s("tool:gen:query",e),canPreviewToolGen:s("tool:gen:preview",e),canEditToolGen:s("tool:gen:edit",e),canRemoveToolGen:s("tool:gen:remove",e),canImportToolGen:s("tool:gen:import",e),canCodeToolGen:s("tool:gen:code",e),canReadToolSwagger:s("tool:swagger:list",e),canReadDemoDemo:s("demo:demo:list",e),canQueryDemoDemo:s("demo:demo:query",e),canAddDemoDemo:s("demo:demo:add",e),canEditDemoDemo:s("demo:demo:edit",e),canRemoveDemoDemo:s("demo:demo:remove",e),canExportDemoDemo:s("demo:demo:export",e),canReadDemoTree:s("demo:tree:list",e),canQueryDemoTree:s("demo:tree:query",e),canAddDemoTree:s("demo:tree:add",e),canEditDemoTree:s("demo:tree:edit",e),canRemoveDemoTree:s("demo:tree:remove",e),canExportDemoTree:s("demo:tree:export",e)}},n=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/models/access.ts/AtomAccess",a(c()));n.debugLabel="AtomAccess";const R=()=>y(n),u=()=>m(n);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(o,e){return this.cache.has(o)?this.cache.get(o):(this.cache.set(o,e),e)}};async function S(o){return t("/info",{method:"GET",...o||{}})}async function f(o,e){return t("/login",{method:"POST",headers:{"Content-Type":"application/json"},data:o,...e||{}})}async function v(o){return t("/logout",{method:"POST",...o||{}})}async function g(o){return t("/routers",{method:"GET",...o||{}})}async function T(o,e){return t("/smsLogin",{method:"POST",headers:{"Content-Type":"application/json"},data:o,...e||{}})}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(o,e){return this.cache.has(o)?this.cache.get(o):(this.cache.set(o,e),e)}};const h=["global","initialState"],D=()=>{const o=u();return l(h,async()=>{const[e,r]=await Promise.all([S(),g()]);return{userInfo:e,userRoutes:r,accessObject:c(e==null?void 0:e.permissions)}},{staleTime:1/0,cacheTime:1/0,onSuccess:({accessObject:e})=>{o(e)}})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(o,e){return this.cache.has(o)?this.cache.get(o):(this.cache.set(o,e),e)}};const i=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/models/keepAlive.ts/AtomKeepAliveElements",a({}));i.debugLabel="AtomKeepAliveElements";const E=()=>d(i);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(o,e){return this.cache.has(o)?this.cache.get(o):(this.cache.set(o,e),e)}};export{v as S,D as a,T as b,f as c,R as d,h as i,E as u};