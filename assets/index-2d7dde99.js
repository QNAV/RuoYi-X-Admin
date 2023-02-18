import{e as H,a as W,r as h,b0 as $,j as t,P as J,d as q,Y as B,ao as X,a1 as Z,b1 as L,b2 as _,aD as ee,F as te,aE as U,b as c,N as Y,D as O,a4 as D,ak as G,p as j,b3 as ae,b4 as se,$ as re,o as oe,b5 as ne,q as F,t as E,b6 as le,b7 as ce,aK as ie,b8 as ue,f as de,aG as he,aH as me,aI as pe,b9 as ye,aJ as ge,B as be,O as A}from"./index-25c53959.js";import{useShowModalAdd as K,useAtomValueSelectedMenuData as R,useDeleteMenu as V,useReFetchMenuList as Q,useReFetchMenuOptions as fe,useHideModalAdd as Te,useAtomValueModalAdd as Me,useQueryMenuOptions as Ce,useAtomStateSelectedMenuData as Pe,useResetSelectedMenuData as xe,useQueryMenuList as Se}from"./index-43577f11.js";import{u as ve}from"./useRequest-4d550859.js";import{u as z}from"./useMutation-8db3a36b.js";import{P as k}from"./index-b9357cdc.js";import{P as v}from"./index-b383028a.js";import{P}from"./index-17b7e420.js";import{P as Ne}from"./index-8e2d7170.js";import{P as Fe}from"./index-fe768a44.js";import{T as f}from"./index-658e1f9b.js";import{l as Ie}from"./index-61e5ae22.js";import{P as Ee}from"./index-c552e3f7.js";import"./utils-5f568976.js";var Ae=["fieldProps","request","params","proFieldProps"],ke=function(a,s){var n=a.fieldProps,i=a.request,l=a.params,m=a.proFieldProps,d=W(a,Ae),p=h.useContext($);return t(J,q({valueType:"cascader",fieldProps:q({getPopupContainer:p.getPopupContainer},n),ref:s,request:i,params:l,filedConfig:{customLightMode:!0},proFieldProps:m},d))};const we=H.forwardRef(ke);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const De=()=>{const e=K();return t(B,{accessKey:"system:menu:add",children:t(X,{onClick:e})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const je=()=>{const{hasSelected:e,selectedMenuId:a,selectedMenuName:s}=R(),n=V();return t(B,{accessKey:"system:menu:remove",children:t(Z,{disabled:!e,type:"primary",size:"middle",onClick:()=>n({menuId:a,menuName:s})})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const w={xs:1,sm:1,md:1,lg:1,xl:2},Re=e=>{const{valueEnumSysNormalDisable:a}=D(),{valueEnumSysYesNo:s}=G();return h.useMemo(()=>{const n=[];return e?(e!=="BUTTON"&&n.push({title:"状态",dataIndex:"status",key:"status",valueType:"radio",valueEnum:a},{title:"是否显示",dataIndex:"visible",key:"visible",valueType:"radio",valueEnum:s,tooltip:"选择否则路由将不会出现在侧边栏，但仍然可以访问"},{title:"是否外链",dataIndex:"isFrame",key:"isFrame",valueType:"radio",valueEnum:s,tooltip:"选择是外链则路由地址需要以`http(s)://`开头"},{title:"图标",dataIndex:"icon",key:"icon",valueType:"text",tooltip:"https://ant.design/components/icon-cn/"},{title:"路由地址",dataIndex:"path",key:"path",valueType:"text",tooltip:"访问的路由地址，如：`user`，如外网地址需内链访问则以`http(s)://`开头"}),e==="MENU"&&n.push({title:"路由参数",dataIndex:"queryParam",key:"queryParam",valueType:"code",tooltip:'访问路由的默认传递参数，如：{"id": 1, "name": "ry"}'}),e!=="DIRECTORY"&&n.push({title:"权限标识",dataIndex:"perms",key:"perms",valueType:"text",copyable:!0}),n):[]},[e])},qe=()=>{const e=Q(),a=fe(),{valueEnumSysMenuType:s}=L(),{hasSelected:n,selectedMenuId:i}=R(),{data:l,loading:m,refresh:d}=ve(async()=>await _({menuId:i}),{ready:n,refreshDeps:[i]}),{mutateAsync:p}=z(ae,{onSuccess:async()=>{await Promise.all([d(),e(),a()]),j.success("保存成功")}}),M=Re(l==null?void 0:l.menuType),x=ee(),[o]=te.useForm(),[r,u]=h.useState([]),T=x("system:menu:edit")?{form:o,editableKeys:r,onChange:(y,C)=>{if(u(y),y.length>0){const[g]=y;o.setFieldsValue({[g]:C[g]})}},onSave:async(y,C)=>{const{menuType:g,orderNum:S,menuName:b,menuId:I}=C;await p({menuId:I,menuType:g,orderNum:S,menuName:b,[y]:C[y]})}}:void 0;return n?c(Y,{spinning:m,children:[t(k,{columns:[{title:"类型",dataIndex:"menuType",key:"menuType",valueType:"select",valueEnum:s},{title:"创建时间",dataIndex:"createTime",key:"createTime",valueType:"dateTime"}],dataSource:l,column:w}),t(O,{}),t(k,{columns:[{title:"名称",dataIndex:"menuName",key:"menuName",valueType:"text"},{title:"排序",dataIndex:"orderNum",key:"orderNum",valueType:"digit"},{title:"备注",dataIndex:"remark",key:"remark",valueType:"textarea"}],dataSource:l,editable:T,column:w}),t(O,{}),t(k,{columns:M,dataSource:l,editable:T,column:w})]}):t(U,{description:"点击选择左侧菜单项查看详情"})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const Oe=()=>{const e=h.useRef(),a=Te(),s=Me(),{selectedMenuId:n}=R(),{valueEnumSysNormalDisable:i}=D(),{valueEnumSysYesNo:l}=G(),{valueEnumSysMenuType:m}=L(),{data:d,refetch:p}=Ce(),M=Q(),{isLoading:x,mutate:o}=z(async()=>{var u,T;const r=await((T=(u=e.current)==null?void 0:u.validateFieldsReturnFormatValue)==null?void 0:T.call(u));r&&await le(r)},{onSuccess:async()=>{var r;await Promise.all([p(),M()]),a(),(r=e.current)==null||r.resetFields(),j.success("新增成功")}});return h.useEffect(()=>{s&&h.startTransition(()=>{var r;(r=e.current)==null||r.setFieldsValue({parentId:se((d==null?void 0:d.map)??new Map,n)})})},[s]),t(re,{open:s,onCancel:a,title:"新增菜单",width:515,onOk:()=>o(),okButtonProps:{loading:x},children:c(oe,{submitter:!1,formRef:e,children:[t(we,{name:"parentId",label:"父级菜单",fieldProps:{options:(d==null?void 0:d.options)??[],fieldNames:{label:"menuName",value:"menuId",children:"children"},changeOnSelect:!0},rules:[{required:!0}],transform:r=>r&&{parentId:r[r.length-1]}}),t(v.Group,{name:"menuType",label:"菜单类型",valueEnum:m,rules:[{required:!0}]}),t(ne,{name:["menuType"],children:r=>{const{menuType:u}=r;return u?c(F,{children:[c(E,{children:[t(P,{name:"menuName",label:"菜单名称",width:"sm",rules:[{required:!0}]}),t(Ne,{name:"orderNum",label:"显示排序",tooltip:"默认数值为0，数值越大排序越靠后，数值相等按照创建时间先后排序",rules:[{required:!0}],width:"sm",initialValue:0})]}),u!=="BUTTON"&&c(F,{children:[c(E,{children:[t(v.Group,{tooltip:"选择停用则路由将不会出现在侧边栏，也不能被访问",name:"status",label:"菜单状态",required:!0,valueEnum:i}),t(v.Group,{name:"visible",label:"菜单是否隐藏",valueEnum:l,required:!0,tooltip:"选择否则路由将不会出现在侧边栏，但仍然可以访问"}),t(v.Group,{name:"isFrame",label:"是否外链",valueEnum:l,required:!0,tooltip:"选择是外链则路由地址需要以`http(s)://`开头"})]}),c(E,{children:[t(P,{name:"icon",label:"菜单图标",width:"sm",tooltip:"https://ant.design/components/icon-cn/"}),t(P,{width:"sm",name:"path",label:"路由地址",tooltip:"访问的路由地址，如：`user`，如外网地址需内链访问则以`http(s)://`开头",rules:[{required:!0}]})]})]}),u==="MENU"&&t(P,{name:"queryParam",label:"路由参数",tooltip:'访问路由的默认传递参数，如：{"id": 1, "name": "ry"}'}),u!=="DIRECTORY"&&t(P,{name:"perms",label:"权限标识"})]}):null}}),t(Fe,{name:"remark",label:"备注"})]})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const Be=()=>c("div",{className:"mb-2",children:["标签含义：",t(f,{color:"rgb(148 163 184)",children:"显示顺序"}),t(f,{color:N.DIRECTORY,children:"目录"}),t(f,{color:N.MENU,children:"菜单"}),t(f,{color:N.BUTTON,children:"按钮"}),t(f,{children:"权限标识"})]});globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const Le=e=>c(F,{children:[t(f,{color:"rgb(148 163 184)",children:e.orderNum}),(e==null?void 0:e.icon)&&t(ce,{name:e.icon,className:"mr-1"}),t(f,{color:N[e.menuType],style:{margin:"0 0 2px 0"},children:e.menuName}),(e==null?void 0:e.perms)&&t(f,{style:{margin:"0 0 2px 2px"},children:c(ie,{size:"small",children:[e.perms,t("div",{onClick:a=>{a.stopPropagation()},children:t(Ie.CopyToClipboard,{text:e.perms,onCopy:async(a,s)=>{s&&j.success("复制成功")},children:t(ue,{style:{color:"#1890ff"}})})})]})})]});globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const N={DIRECTORY:"blue",MENU:"green",BUTTON:"red"},Ue={title:"menuName",key:"menuId"},Ye=()=>{var S;const[e,a]=h.useState({}),[s,n]=h.useState(0),[i,l]=h.useState([]),[m,d]=Pe(),p=xe(),M=K(),{valueEnumSysNormalDisable:x}=D(),{data:o,refetch:r,isFetching:u}=Se(e,b=>{l(b)}),T=V(),y=(b,{node:{key:I}})=>{n(I)},C=({node:b})=>{n(b.key)},g=(i==null?void 0:i.length)&&(i==null?void 0:i.length)===((S=o==null?void 0:o.parentIds)==null?void 0:S.length);return h.useEffect(()=>{r()},[e]),h.useEffect(()=>{s>0?d({hasSelected:!0,selectedMenuId:s,selectedMenuName:o.map.get(s).menuName}):p()},[s]),c(F,{children:[t(Be,{}),c("div",{className:"flex justify-between items-center",children:[t(de,{size:"small",className:"my-2",icon:g?t(he,{}):t(me,{}),onClick:()=>l(g?[]:o==null?void 0:o.parentIds),children:g?"全部折叠":"全部展开"}),c(pe,{onFinish:async b=>{n(0),l([]),a(b)},children:[t(P,{name:"menuName",label:"菜单名称"}),t(Ee,{name:"status",label:"状态",valueEnum:x})]})]}),t(Y,{spinning:u,children:t(ye,{menu:{items:[{label:"新增",key:"create",disabled:!m.hasSelected,onClick:()=>M()},{label:"在根目录下新增",key:"createBase",onClick:()=>{p(),M()}},{label:"删除",key:"delete",danger:!0,disabled:!m.hasSelected,onClick:()=>T({menuId:m.selectedMenuId,menuName:m.selectedMenuName})}]},trigger:["contextMenu"],children:o!=null&&o.treeData.length?t(ge,{blockNode:!0,selectedKeys:[s],onSelect:y,expandedKeys:i,titleRender:Le,onExpand:l,showLine:{showLeafIcon:!1},fieldNames:Ue,height:700,treeData:o==null?void 0:o.treeData,onRightClick:C}):t(U,{})})})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const tt=()=>c(be,{children:[c(A,{ghost:!0,gutter:[16,16],wrap:!0,children:[t(A,{title:"菜单列表",colSpan:{xxl:8,xl:12,lg:14,md:24,sm:24,xs:24},extra:t(De,{}),children:t(Ye,{})}),t(A,{title:"菜单详情",extra:t(je,{}),colSpan:{xxl:16,xl:12,lg:10,md:24,sm:24,xs:24},className:"h-full",children:t(qe,{})})]}),t(Oe,{})]});export{tt as default};
