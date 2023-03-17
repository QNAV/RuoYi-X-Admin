import{j as s,B as Ce,b as p,i as X,v as Se,F as E,l as be,q as Ie,k as S}from"./antdProComponents-adac7b3f.js";import{e as Re,h as ee,f as Te,F as Ae,Q as te,aQ as xe,aR as ke,aS as se,aT as ae,aU as oe,U as De,aV as we,g as I,V as ve,A as D,L as Ke,aW as Me,b as Ee,aX as je,l as Pe,aY as Fe,Z as Ne,aZ as Be,a_ as Le,a$ as ze,_ as z,b0 as Oe,b1 as qe,b2 as Ve,B as Qe}from"./index-3a0ef4a4.js";import{r as c,bm as j,B as k,bi as Ue,F as Ge,aa as O,aG as Xe,a9 as L,bg as Ye,aK as We,be as $e,bf as Ze,ad as ne,a$ as le}from"./antd-aee96f72.js";import{u as q}from"./useMutation-8cb3539a.js";import{a as _e,u as He}from"./utils-a67a12c8.js";import{i as Y,u as Je}from"./useRequest-7829beda.js";import"./iconPark-395d73b8.js";import"./wangEditor-93aafe29.js";const M=new Set;let b,W={xs:0,sm:576,md:768,lg:992,xl:1200};function B(){const e=b;if(ce(),e!==b)for(const t of M)t()}let K=!1;function ce(){const e=window.innerWidth,t={};let a=!1;for(const o of Object.keys(W))t[o]=e>=W[o],t[o]!==b[o]&&(a=!0);a&&(b=t)}function et(){Y&&!K&&(b={},ce(),window.addEventListener("resize",B),K=!0);const[e,t]=c.useState(b);return c.useEffect(()=>{if(!Y)return;K||window.addEventListener("resize",B);const a=()=>{t(b)};return M.add(a),()=>{M.delete(a),M.size===0&&(window.removeEventListener("resize",B),K=!1)}},[]),e}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const V=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/role/model/index.ts/atomRoleListActions",Re(void 0));V.debugLabel="atomRoleListActions";const Q=()=>ee(V),tt=()=>Te(V),P=globalThis.jotaiAtomCache.get("/home/runner/work/RuoYi-X-Admin/RuoYi-X-Admin/src/pages/system/role/model/index.ts/atomRoleDetails",_e({open:!1}));P.debugLabel="atomRoleDetails";const st=()=>He(P),at=()=>{const e=Ae(P);return t=>{e({open:!0,roleId:t})}},T=()=>ee(P),re="sysRole",ie=[re,"details"],ue=e=>{const{roleId:t}=T(),a=te(ie,()=>xe({roleId:t}),{onSuccess:e,enabled:!1});return c.useEffect(()=>{t&&a.refetch()},[t]),a},he=[re,"tree"],ot=e=>{const{roleId:t}=T(),a=te(he,async()=>{const{menus:o,checkedKeys:r}=await ke({roleId:t});return{treeData:o,selectedMenuIds:r,selectedTreeData:se(o,r),allMenuIds:ae(o),allExpandedKeys:oe(o)}},{onSuccess:o=>{e(o.selectedTreeData)},enabled:!1});return c.useEffect(()=>{t&&a.refetch()},[t]),a},de=e=>{const t=De(),{message:a}=j.useApp();return q(async o=>{const r=t.getQueryData(ie),u=t.getQueryData(he);await we({roleId:r.roleId,roleKey:r.roleKey,roleName:r.roleName,roleSort:r.roleSort,status:r.status,menuIds:u.selectedMenuIds,menuCheckStrictly:"NO",deptCheckStrictly:"NO",...o})},{onSuccess:async()=>{e(),a.success("保存成功")}})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const $=[{required:!0,message:"请输入角色名称"}],[,nt,lt,ct]=I({title:"角色名称",dataIndex:"roleName",descriptions:{valueType:"text",formItemProps:{rules:$}},form:{valueType:"text",formItemProps:{rules:$}},meta:{valueType:"text"}}),[,rt]=I({title:"角色编号",dataIndex:"roleId",descriptions:{valueType:"text"}}),Z="控制器中定义的权限字符，如：@PreAuthorize(`@ss.hasRole('admin')`)",_=[{required:!0,message:"请输入权限字符"}],[,it,ut,ht]=I({title:"权限字符",dataIndex:"roleKey",descriptions:{valueType:"text",tooltip:Z,formItemProps:{rules:_}},form:{valueType:"text",tooltip:Z,formItemProps:{rules:_}},meta:{valueType:"text"}}),dt="NORMAL",U=()=>{const{valueEnumSysNormalDisable:e}=ve();return I({title:"状态",dataIndex:"status",valueEnum:e,table:{valueType:"select"},form:{initialValue:dt,valueType:"radio",colProps:{span:12}},meta:{valueType:"select"}})},H=[{required:!0,message:"请输入显示排序"}],[,mt,pt]=I({title:"显示排序",dataIndex:"roleSort",descriptions:{valueType:"digit",formItemProps:{initialValue:0,rules:H}},form:{valueType:"digit",formItemProps:{initialValue:0,rules:H},colProps:{span:12}}}),[,gt,ft]=I({title:"备注",dataIndex:"remark",descriptions:{valueType:"textarea"},form:{valueType:"textarea"}}),[,yt]=I({title:"创建时间",dataIndex:"createTime",descriptions:{valueType:"dateTime"}}),Ct=()=>{const[,,,e]=U();return{title:ct,subTitle:e,description:ht}},St=()=>{const[,,e]=U();return[lt,ut,e,pt,ft]},bt=[rt,yt],It=()=>{const[,e]=U();return[e,mt,nt,it,gt]};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Rt=()=>{const e=c.useRef(),t=Q(),a=St(),{message:o}=j.useApp();return s(D,{accessKey:"system:role:add",children:s(Ce,{title:"新增角色",trigger:s(Ke,{}),formRef:e,onFinish:async u=>{var d;return await Me({...u,menuIds:[],menuCheckStrictly:"NO",deptCheckStrictly:"NO"}),t==null||t.reload(),(d=e.current)==null||d.resetFields(),o.success("新增成功"),!0},width:500,modalProps:{okText:"提交"},grid:!0,colProps:{span:24},layoutType:"ModalForm",columns:a})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Tt=()=>{const e=Ee(),{roleId:t,open:a}=T();return s(D,{accessKey:"system:user:edit",children:s(k,{type:"primary",onClick:()=>e(je("/system/role-auth/:roleId",{roleId:t.toString()})),icon:s(Ue,{}),disabled:!a,children:"分配用户"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const At=()=>{const e=Q(),t=st(),{roleId:a,open:o}=T(),{message:r,modal:u}=j.useApp(),{isLoading:d,mutateAsync:g}=q(Fe,{onSuccess:()=>{var f;e==null||e.reload(),(f=e==null?void 0:e.clearSelected)==null||f.call(e),t(),r.success("删除成功")}});return s(D,{accessKey:"system:role:remove",children:s(Pe,{type:"primary",size:"middle",disabled:!o,onClick:()=>u.confirm({title:"操作确认",content:`确定删除角色编号为 ${a} 的角色吗？`,onOk:()=>g({roleIds:[a]}),okButtonProps:{loading:d}})})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const xt=()=>{const[e,t]=c.useState([]),[a]=Ge.useForm(),o=It(),r=Q(),{data:u,isFetching:d,refetch:g}=ue(()=>{t([]),a.resetFields()}),{mutateAsync:R}=de(()=>{g(),r==null||r.reload()}),y=Ne()("system:role:edit")?{form:a,editableKeys:e,onChange:(h,C)=>{if(t(h),h.length>0){const n=h[0];a.setFieldsValue({[n]:C[n]})}},onSave:async(h,C)=>{await R({[h]:C[h]})}}:void 0;return p(O,{spinning:d,children:[s(X,{column:2,columns:bt,dataSource:u}),s(Xe,{}),s(X,{column:2,columns:o,dataSource:u,editable:y})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const kt=()=>{const e=tt(),t=at(),a=Ct();return s(Se,{ghost:!0,rowKey:"roleId",actionRef:e,metas:a,tableAlertRender:!1,rowSelection:{type:"radio",onSelect:({roleId:o})=>t(o)},search:{filterType:"light"},pagination:{defaultPageSize:10,defaultCurrent:1,showSizeChanger:!0},request:o=>Be(o)})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Dt=()=>{const[e,t]=c.useState([]),[a,o]=c.useState(!1),[r,u]=c.useState([]),[d,g]=c.useState([]),[R,f]=c.useState(!1),[y,h]=c.useState(!0),{message:C}=j.useApp(),[n,w]=c.useState(),v=c.useRef(),{open:F,roleId:A}=T(),{valueEnumSysDataScope:m}=Le(),{refetch:me}=ue(({dataScope:i})=>{var x;w(i),(x=v.current)==null||x.setFieldsValue({dataScope:i})}),{loading:pe,refresh:ge,data:l}=Je(async()=>{const{depts:i,checkedKeys:x}=await ze(A);return{treeData:i,selectedMenuIds:x,selectedTreeData:se(i,x),allMenuIds:ae(i),allExpandedKeys:oe(i)}},{ready:F,refreshDeps:[A],onSuccess:i=>{o(!1),g(i.selectedTreeData)}}),{isLoading:G,mutate:fe}=q(async()=>{await Oe({roleId:A,dataScope:n,deptIds:e})},{onSuccess:()=>{ge(),me(),C.success("保存成功")}}),N=r.length===(l==null?void 0:l.allExpandedKeys.length),ye=i=>{if(i||y){t((l==null?void 0:l.allMenuIds)??[]);return}t([])};return c.useEffect(()=>{if((l==null?void 0:l.allMenuIds.length)===e.length){f(!0),h(!1);return}if(e.length===0){f(!1),h(!1);return}h(!0)},[l==null?void 0:l.allMenuIds,e]),p(E,{children:[p("header",{className:"flex justify-between items-start flex-wrap",children:[s(be,{formRef:v,submitter:!1,layout:"horizontal",children:s(Ie,{name:"dataScope",label:"数据权限范围",valueEnum:m,fieldProps:{onChange:i=>{w(i)}},readonly:!a})}),s(D,{accessKey:"system:role:edit",children:a?p(L,{children:[s(k,{loading:G,onClick:()=>{o(!1),g((l==null?void 0:l.selectedTreeData)??[])},children:"取消编辑"}),s(k,{type:"primary",ghost:!0,icon:s(Ye,{}),loading:G,onClick:()=>fe(),children:"保存"})]}):s(k,{type:"primary",ghost:!0,icon:s(We,{}),onClick:()=>{o(!0),t((l==null?void 0:l.selectedMenuIds)??[]),g((l==null?void 0:l.treeData)??[])},children:"编辑数据权限"})})]}),n==="CUSTOM"&&p(E,{children:[p(L,{wrap:!0,className:"my-2",children:[d.length>0&&s(k,{size:"small",icon:N?s($e,{}):s(Ze,{}),onClick:()=>u(N?[]:l.allExpandedKeys),children:N?"全部折叠":"全部展开"}),a&&s(ne,{indeterminate:y,onChange:i=>ye(i.target.checked),checked:R,children:"全选/全不选"})]}),s(O,{spinning:pe,children:d.length>0?s(le,{blockNode:!0,showLine:{showLeafIcon:!1},checkable:a,checkStrictly:!0,fieldNames:{title:"label",key:"id"},checkedKeys:e,treeData:d,expandedKeys:r,onExpand:i=>u(i),onCheck:i=>{t(i.checked)}}):s(z,{description:"暂未分配数据权限"})})]})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const wt=()=>{const[e,t]=c.useState([]),[a,o]=c.useState(!1),[r,u]=c.useState([]),[d,g]=c.useState([]),[R,f]=c.useState(!1),[y,h]=c.useState(!0),{isFetching:C,data:n,refetch:w}=ot(m=>{o(!1),g(m)}),{isLoading:v,mutate:F}=de(()=>{w()}),A=m=>{if(m||y){t((n==null?void 0:n.allMenuIds)??[]);return}t([])};return c.useEffect(()=>{if((n==null?void 0:n.allMenuIds.length)===e.length){f(!0),h(!1);return}if(e.length===0){f(!1),h(!1);return}h(!0)},[n==null?void 0:n.allMenuIds,e]),p(E,{children:[p("header",{className:"flex justify-between items-end mb-2",children:[s(qe,{expanded:r.length===(n==null?void 0:n.allExpandedKeys.length),onChange:m=>{u(m?(n==null?void 0:n.allExpandedKeys)??[]:[])}}),s(D,{accessKey:"system:role:edit",children:s(Ve,{editable:a,loading:v,onCancel:()=>{o(!1),g((n==null?void 0:n.selectedTreeData)??[])},onSave:()=>F({menuIds:e}),onStartEdit:()=>{o(!0),t((n==null?void 0:n.selectedMenuIds)??[]),g((n==null?void 0:n.treeData)??[])}})})]}),p(O,{spinning:C,children:[s("div",{className:"pl-1 mb-1",children:a&&s(ne,{indeterminate:y,onChange:m=>A(m.target.checked),checked:R,children:"全选/全不选"})}),d.length>0?s(le,{blockNode:!0,showLine:{showLeafIcon:!1},checkable:a,checkStrictly:!0,fieldNames:{title:"label",key:"id"},checkedKeys:e,treeData:d,expandedKeys:r,onExpand:m=>u(m),onCheck:m=>{t(m.checked)},height:500}):s(z,{description:"暂未分配菜单权限"})]})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const J={list:{xxl:7,xl:10,lg:13,md:24,sm:24,xs:24},details:{xxl:17,xl:14,lg:11,md:24,sm:24,xs:24}},Bt=()=>{const{xl:e}=et(),{open:t}=T();return s(Qe,{children:p(S,{ghost:!0,gutter:[16,16],wrap:!0,children:[s(S,{title:"角色列表",colSpan:J.list,extra:s(Rt,{}),children:s(kt,{})}),s(S,{split:"horizontal",title:"角色详情",colSpan:J.details,extra:p(L,{children:[s(At,{}),s(Tt,{})]}),className:"h-full",children:t?p(E,{children:[s(S,{children:s(xt,{})}),p(S,{split:e?"vertical":"horizontal",children:[s(S,{children:s(wt,{})}),s(S,{children:s(Dt,{})})]})]}):s(z,{description:"点击选择左侧角色查看详情"})})]})})};export{Bt as default};
