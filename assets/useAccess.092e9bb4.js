import{aH as P,bw as m,a4 as p,l as R,j as c,aZ as v,a,b0 as f,r as i,E}from"./index.d320e779.js";var F=["fieldProps","options","radioType","layout","proFieldProps","valueEnum"],h=p.forwardRef(function(t,o){var r=t.fieldProps,e=t.options,n=t.radioType,d=t.layout,y=t.proFieldProps,l=t.valueEnum,S=R(t,F);return c(v,a(a({valueType:n==="button"?"radioButton":"radio",ref:o,valueEnum:f(l,void 0)},S),{},{fieldProps:a({options:e,layout:d},r),proFieldProps:y,filedConfig:{customLightMode:!0}}))}),x=p.forwardRef(function(t,o){var r=t.fieldProps,e=t.children;return c(m,a(a({},r),{},{ref:o,children:e}))}),A=P(x,{valuePropName:"checked",ignoreWidth:!0}),u=A;u.Group=h;u.Button=m.Button;u.displayName="ProFormComponent";const w=u,g=({accessible:t,children:o,fallback:r})=>t?i.exports.createElement(i.exports.Fragment,null,o):r||null,U="*:*:*",s=(t,o,r=!0)=>o.has(U)?!0:typeof t=="string"?o.has(t):r?t.every(e=>o.has(e)):t.some(e=>o.has(e)),q=()=>{var o,r;const t=E();return i.exports.useMemo(()=>{var n,d,y;const e=new Set((y=(d=(n=t==null?void 0:t.data)==null?void 0:n.userInfo)==null?void 0:d.permissions)!=null?y:[]);return{canReadSysUser:s("system:user:list",e),canQuerySysUser:s("system:user:query",e),canAddSysUser:s("system:user:add",e),canEditSysUser:s("system:user:edit",e),canRemoveSysUser:s("system:user:remove",e),canExportSysUser:s("system:user:export",e),canImportSysUser:s("system:user:import",e),canResetSysUserPwd:s("system:user:resetPwd",e),canReadSysRole:s("system:role:list",e),canQuerySysRole:s("system:role:query",e),canAddSysRole:s("system:role:add",e),canEditSysRole:s("system:role:edit",e),canRemoveSysRole:s("system:role:remove",e),canExportSysRole:s("system:role:export",e),canReadSysMenu:s("system:menu:list",e),canQuerySysMenu:s("system:menu:query",e),canAddSysMenu:s("system:menu:add",e),canEditSysMenu:s("system:menu:edit",e),canRemoveSysMenu:s("system:menu:remove",e),canReadSysDept:s("system:dept:list",e),canQuerySysDept:s("system:dept:query",e),canAddSysDept:s("system:dept:add",e),canEditSysDept:s("system:dept:edit",e),canRemoveSysDept:s("system:dept:remove",e),canReadSysPost:s("system:post:list",e),canQuerySysPost:s("system:post:query",e),canAddSysPost:s("system:post:add",e),canEditSysPost:s("system:post:edit",e),canRemoveSysPost:s("system:post:remove",e),canExportSysPost:s("system:post:export",e)}},[(r=(o=t==null?void 0:t.data)==null?void 0:o.userInfo)==null?void 0:r.permissions])};export{g as A,w as P,q as u};
