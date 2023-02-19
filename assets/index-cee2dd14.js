import{e as W,a as J,r as m,b3 as $,j as t,P as X,d as R,Y as q,ar as Z,a1 as _,b4 as B,b5 as ee,A as L,aF as te,F as ae,aG as U,b as c,N as Y,D as O,a4 as D,an as G,b6 as se,b7 as re,aA as oe,o as ne,b8 as le,p as A,s as I,b9 as ce,ba as ie,aM as ue,bb as de,bc as he,f as me,aI as pe,aJ as ye,aK as ge,bd as be,aL as fe,B as Te,O as E}from"./index-e9bba9a2.js";import{useShowModalAdd as K,useAtomValueSelectedMenuData as j,useDeleteMenu as V,useReFetchMenuList as Q,useReFetchMenuOptions as Me,useHideModalAdd as Ce,useAtomValueModalAdd as Pe,useQueryMenuOptions as xe,useAtomStateSelectedMenuData as Se,useResetSelectedMenuData as ve,useQueryMenuList as Ne}from"./index-0d197536.js";import{u as Ae}from"./useRequest-9bd746df.js";import{u as z}from"./useMutation-656aed2c.js";import{P as k}from"./index-2405b0c1.js";import{P as v}from"./index-4d93b82b.js";import{P as x}from"./index-ef21e1dc.js";import{P as Fe}from"./index-6426f042.js";import{P as Ie}from"./index-ee81e738.js";import{T as b}from"./index-32260a17.js";import{l as Ee}from"./index-6ce32cbf.js";import{P as ke}from"./index-101d0a57.js";import"./utils-aa38ad6e.js";var we=["fieldProps","request","params","proFieldProps"],De=function(a,s){var r=a.fieldProps,i=a.request,l=a.params,h=a.proFieldProps,f=J(a,we),u=m.useContext($);return t(X,R({valueType:"cascader",fieldProps:R({getPopupContainer:u.getPopupContainer},r),ref:s,request:i,params:l,filedConfig:{customLightMode:!0},proFieldProps:h},f))};const je=W.forwardRef(De);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const Re=()=>{const e=K();return t(q,{accessKey:"system:menu:add",children:t(Z,{onClick:e})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const Oe=()=>{const{hasSelected:e,selectedMenuId:a,selectedMenuName:s}=j(),r=V();return t(q,{accessKey:"system:menu:remove",children:t(_,{disabled:!e,type:"primary",size:"middle",onClick:()=>r({menuId:a,menuName:s})})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const w={xs:1,sm:1,md:1,lg:1,xl:2},qe=e=>{const{valueEnumSysNormalDisable:a}=D(),{valueEnumSysYesNo:s}=G();return m.useMemo(()=>{const r=[];return e?(e!=="BUTTON"&&r.push({title:"状态",dataIndex:"status",key:"status",valueType:"radio",valueEnum:a},{title:"是否显示",dataIndex:"visible",key:"visible",valueType:"radio",valueEnum:s,tooltip:"选择否则路由将不会出现在侧边栏，但仍然可以访问"},{title:"是否外链",dataIndex:"isFrame",key:"isFrame",valueType:"radio",valueEnum:s,tooltip:"选择是外链则路由地址需要以`http(s)://`开头"},{title:"图标",dataIndex:"icon",key:"icon",valueType:"text",tooltip:"https://ant.design/components/icon-cn/"},{title:"路由地址",dataIndex:"path",key:"path",valueType:"text",tooltip:"访问的路由地址，如：`user`，如外网地址需内链访问则以`http(s)://`开头"}),e==="MENU"&&r.push({title:"路由参数",dataIndex:"queryParam",key:"queryParam",valueType:"code",tooltip:'访问路由的默认传递参数，如：{"id": 1, "name": "ry"}'}),e!=="DIRECTORY"&&r.push({title:"权限标识",dataIndex:"perms",key:"perms",valueType:"text",copyable:!0}),r):[]},[e])},Be=()=>{const e=Q(),a=Me(),{valueEnumSysMenuType:s}=B(),{hasSelected:r,selectedMenuId:i}=j(),{data:l,loading:h,refresh:f}=Ae(async()=>await ee({menuId:i}),{ready:r,refreshDeps:[i]}),{message:u}=L.useApp(),{mutateAsync:C}=z(se,{onSuccess:async()=>{await Promise.all([f(),e(),a()]),u.success("保存成功")}}),S=qe(l==null?void 0:l.menuType),n=te(),[P]=ae.useForm(),[o,d]=m.useState([]),T=n("system:menu:edit")?{form:P,editableKeys:o,onChange:(p,y)=>{if(d(p),p.length>0){const[M]=p;P.setFieldsValue({[M]:y[M]})}},onSave:async(p,y)=>{const{menuType:M,orderNum:g,menuName:F,menuId:H}=y;await C({menuId:H,menuType:M,orderNum:g,menuName:F,[p]:y[p]})}}:void 0;return r?c(Y,{spinning:h,children:[t(k,{columns:[{title:"类型",dataIndex:"menuType",key:"menuType",valueType:"select",valueEnum:s},{title:"创建时间",dataIndex:"createTime",key:"createTime",valueType:"dateTime"}],dataSource:l,column:w}),t(O,{}),t(k,{columns:[{title:"名称",dataIndex:"menuName",key:"menuName",valueType:"text"},{title:"排序",dataIndex:"orderNum",key:"orderNum",valueType:"digit"},{title:"备注",dataIndex:"remark",key:"remark",valueType:"textarea"}],dataSource:l,editable:T,column:w}),t(O,{}),t(k,{columns:S,dataSource:l,editable:T,column:w})]}):t(U,{description:"点击选择左侧菜单项查看详情"})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const Le=()=>{const{message:e}=L.useApp(),a=m.useRef(),s=Ce(),r=Pe(),{selectedMenuId:i}=j(),{valueEnumSysNormalDisable:l}=D(),{valueEnumSysYesNo:h}=G(),{valueEnumSysMenuType:f}=B(),{data:u,refetch:C}=xe(),S=Q(),{isLoading:n,mutate:P}=z(async()=>{var d,T;const o=await((T=(d=a.current)==null?void 0:d.validateFieldsReturnFormatValue)==null?void 0:T.call(d));o&&await ce(o)},{onSuccess:async()=>{var o;await Promise.all([C(),S()]),s(),(o=a.current)==null||o.resetFields(),e.success("新增成功")}});return m.useEffect(()=>{r&&m.startTransition(()=>{var o;(o=a.current)==null||o.setFieldsValue({parentId:re((u==null?void 0:u.map)??new Map,i)})})},[r]),t(oe,{open:r,onCancel:s,title:"新增菜单",width:515,onOk:()=>P(),okButtonProps:{loading:n},children:c(ne,{submitter:!1,formRef:a,children:[t(je,{name:"parentId",label:"父级菜单",fieldProps:{options:(u==null?void 0:u.options)??[],fieldNames:{label:"menuName",value:"menuId",children:"children"},changeOnSelect:!0},rules:[{required:!0}],transform:o=>o&&{parentId:o[o.length-1]}}),t(v.Group,{name:"menuType",label:"菜单类型",valueEnum:f,rules:[{required:!0}]}),t(le,{name:["menuType"],children:o=>{const{menuType:d}=o;return d?c(A,{children:[c(I,{children:[t(x,{name:"menuName",label:"菜单名称",width:"sm",rules:[{required:!0}]}),t(Fe,{name:"orderNum",label:"显示排序",tooltip:"默认数值为0，数值越大排序越靠后，数值相等按照创建时间先后排序",rules:[{required:!0}],width:"sm",initialValue:0})]}),d!=="BUTTON"&&c(A,{children:[c(I,{children:[t(v.Group,{tooltip:"选择停用则路由将不会出现在侧边栏，也不能被访问",name:"status",label:"菜单状态",required:!0,valueEnum:l}),t(v.Group,{name:"visible",label:"菜单是否显示",valueEnum:h,required:!0,tooltip:"选择否则路由将不会出现在侧边栏，但仍然可以访问"}),t(v.Group,{name:"isFrame",label:"是否外链",valueEnum:h,required:!0,tooltip:"选择是外链则路由地址需要以`http(s)://`开头"})]}),c(I,{children:[t(x,{name:"icon",label:"菜单图标",width:"sm",tooltip:"https://ant.design/components/icon-cn/"}),t(x,{width:"sm",name:"path",label:"路由地址",tooltip:"访问的路由地址，如：`user`，如外网地址需内链访问则以`http(s)://`开头",rules:[{required:!0}]})]})]}),d==="MENU"&&t(x,{name:"queryParam",label:"路由参数",tooltip:'访问路由的默认传递参数，如：{"id": 1, "name": "ry"}'}),d!=="DIRECTORY"&&t(x,{name:"perms",label:"权限标识"})]}):null}}),t(Ie,{name:"remark",label:"备注"})]})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const Ue=()=>c("div",{className:"mb-2",children:["标签含义：",t(b,{color:"rgb(148 163 184)",children:"显示顺序"}),t(b,{color:N.DIRECTORY,children:"目录"}),t(b,{color:N.MENU,children:"菜单"}),t(b,{color:N.BUTTON,children:"按钮"}),t(b,{children:"权限标识"})]});globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const Ye=e=>c(A,{children:[t(b,{color:"rgb(148 163 184)",children:e.orderNum}),(e==null?void 0:e.icon)&&t(ie,{name:e.icon,className:"mr-1"}),t(b,{color:N[e.menuType],style:{margin:"0 0 2px 0"},children:e.menuName}),(e==null?void 0:e.perms)&&t(b,{style:{margin:"0 0 2px 2px"},children:c(ue,{size:"small",children:[e.perms,t("div",{onClick:a=>{a.stopPropagation()},children:t(Ee.CopyToClipboard,{text:e.perms,onCopy:async(a,s)=>{s&&de.success("复制成功")},children:t(he,{style:{color:"#1890ff"}})})})]})})]});globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const N={DIRECTORY:"blue",MENU:"green",BUTTON:"red"},Ge={title:"menuName",key:"menuId"},Ke=()=>{var M;const[e,a]=m.useState({}),[s,r]=m.useState(0),[i,l]=m.useState([]),[h,f]=Se(),u=ve(),C=K(),{valueEnumSysNormalDisable:S}=D(),{data:n,refetch:P,isFetching:o}=Ne(e,g=>{l(g)}),d=V(),T=(g,{node:{key:F}})=>{r(F)},p=({node:g})=>{r(g.key)},y=(i==null?void 0:i.length)&&(i==null?void 0:i.length)===((M=n==null?void 0:n.parentIds)==null?void 0:M.length);return m.useEffect(()=>{P()},[e]),m.useEffect(()=>{s>0?f({hasSelected:!0,selectedMenuId:s,selectedMenuName:n.map.get(s).menuName}):u()},[s]),c(A,{children:[t(Ue,{}),c("div",{className:"flex justify-between items-center",children:[t(me,{size:"small",className:"my-2",icon:y?t(pe,{}):t(ye,{}),onClick:()=>l(y?[]:n==null?void 0:n.parentIds),children:y?"全部折叠":"全部展开"}),c(ge,{onFinish:async g=>{r(0),l([]),a(g)},children:[t(x,{name:"menuName",label:"菜单名称"}),t(ke,{name:"status",label:"状态",valueEnum:S})]})]}),t(Y,{spinning:o,children:t(be,{menu:{items:[{label:"新增",key:"create",disabled:!h.hasSelected,onClick:()=>C()},{label:"在根目录下新增",key:"createBase",onClick:()=>{u(),C()}},{label:"删除",key:"delete",danger:!0,disabled:!h.hasSelected,onClick:()=>d({menuId:h.selectedMenuId,menuName:h.selectedMenuName})}]},trigger:["contextMenu"],children:n!=null&&n.treeData.length?t(fe,{blockNode:!0,selectedKeys:[s],onSelect:T,expandedKeys:i,titleRender:Ye,onExpand:l,showLine:{showLeafIcon:!1},fieldNames:Ge,height:700,treeData:n==null?void 0:n.treeData,onRightClick:p}):t(U,{})})})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const st=()=>c(Te,{children:[c(E,{ghost:!0,gutter:[16,16],wrap:!0,children:[t(E,{title:"菜单列表",colSpan:{xxl:8,xl:12,lg:14,md:24,sm:24,xs:24},extra:t(Re,{}),children:t(Ke,{})}),t(E,{title:"菜单详情",extra:t(Oe,{}),colSpan:{xxl:16,xl:12,lg:10,md:24,sm:24,xs:24},className:"h-full",children:t(Be,{})})]}),t(Le,{})]});export{st as default};
