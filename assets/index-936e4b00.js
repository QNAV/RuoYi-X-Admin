import{R as X,r as d,a as t,j as i,F as w}from"./jsx-runtime-f6344dff.js";import{k as U,bY as $,aI as J,_ as R,bO as Z,bj as ee,aG as te,bT as B,aX as O,aN as V,aw as j,bh as ae,aM as se,c3 as re,aR as A,ay as oe,N as ne,c4 as le,a9 as ie,bU as ce,bV as ue,bW as de,a8 as me,bX as he,aC as pe,aY as I}from"./index-0cc72bc5.js";import{A as L}from"./index-65db7775.js";import{useShowModalAdd as G,useAtomValueSelectedMenuData as D,useDeleteMenu as H,useReFetchMenuList as K,useReFetchMenuOptions as ye,useHideModalAdd as ge,useAtomValueModalAdd as fe,useQueryMenuOptions as be,useAtomStateSelectedMenuData as Me,useResetSelectedMenuData as Ce,useQueryMenuList as Se}from"./index-6ee202e5.js";import{M as Y,q as y,Y as Q,t as Te,u as xe}from"./index-f7881e43.js";import{a as Pe}from"./index-166a336f.js";import{f as q,g as z}from"./index-3011f4b1.js";import{D as Fe,E as ve,F as Ne}from"./vanilla-3fa884d6.js";import{u as we}from"./useRequest-f550dc85.js";import{u as W}from"./useMutation.esm-345c3001.js";import{P as k}from"./index-c200b04d.js";import{P as v}from"./index-98e3a4fa.js";import{P as T}from"./index-dc3dcd4f.js";import{P as Ae}from"./index-ec58b3ec.js";import{P as Ie}from"./index-0d15af73.js";import{T as f}from"./index-42e9ee23.js";import{l as ke}from"./index-45468286.js";import{P as Ee}from"./index-7edae443.js";import"./index-88ffc593.js";import"./utils-7c8fe9f2.js";import"./utils.esm-376a1e3d.js";import"./mutation.esm-786b6dc1.js";import"./index-f75ab0a0.js";import"./Skeleton-0c4ea456.js";var je=["fieldProps","request","params","proFieldProps"],De=function(a,r){var n=a.fieldProps,o=a.request,m=a.params,h=a.proFieldProps,b=U(a,je),c=d.useContext($);return t(J,R({valueType:"cascader",fieldProps:R({getPopupContainer:c.getPopupContainer},n),ref:r,request:o,params:m,filedConfig:{customLightMode:!0},proFieldProps:h},b))};const qe=X.forwardRef(De);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const Re=()=>{const e=G();return t(L,{accessKey:"system:menu:add",children:t(Z,{onClick:e})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const Ve=()=>{const{hasSelected:e,selectedMenuId:a,selectedMenuName:r}=D(),n=H();return t(L,{accessKey:"system:menu:remove",children:t(ee,{disabled:!e,type:"primary",size:"middle",onClick:()=>n({menuId:a,menuName:r})})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const E={xs:1,sm:1,md:1,lg:1,xl:2},Be=e=>{const{valueEnumSysNormalDisable:a}=q(),{valueEnumSysShowHide:r}=z();return d.useMemo(()=>{const n=[];return e?(e!==y.F&&n.push({title:"状态",dataIndex:"status",key:"status",valueType:"radio",valueEnum:a},{title:"是否显示",dataIndex:"visible",key:"visible",valueType:"radio",valueEnum:r,tooltip:"选择否则路由将不会出现在侧边栏，但仍然可以访问"},{title:"是否外链",dataIndex:"isFrame",key:"isFrame",valueType:"radio",valueEnum:Q,tooltip:"选择是外链则路由地址需要以`http(s)://`开头"},{title:"图标",dataIndex:"icon",key:"icon",valueType:"text",tooltip:"https://ant.design/components/icon-cn/"},{title:"路由地址",dataIndex:"path",key:"path",valueType:"text",tooltip:"访问的路由地址，如：`user`，如外网地址需内链访问则以`http(s)://`开头"}),e===y.C&&n.push({title:"路由参数",dataIndex:"queryParam",key:"queryParam",valueType:"code",tooltip:'访问路由的默认传递参数，如：{"id": 1, "name": "ry"}'}),e!==y.M&&n.push({title:"权限标识",dataIndex:"perms",key:"perms",valueType:"text",copyable:!0}),n):[]},[e])},Oe=()=>{const e=K(),a=ye(),{hasSelected:r,selectedMenuId:n}=D(),{data:o,loading:m,refresh:h}=we(async()=>await Fe({menuId:n}),{ready:r,refreshDeps:[n]}),{mutateAsync:b}=W(ve,{onSuccess:async()=>{await Promise.all([h(),e(),a()]),j.success("保存成功")}}),c=Be(o==null?void 0:o.menuType),M=Pe(),[C]=te.useForm(),[l,x]=d.useState([]),s=M("system:menu:edit")?{form:C,editableKeys:l,onChange:(u,p)=>{if(x(u),u.length>0){const[S]=u;C.setFieldsValue({[S]:p[S]})}},onSave:async(u,p)=>{const{menuType:S,orderNum:P,menuName:F,menuId:g}=p;await b({menuId:g,menuType:S,orderNum:P,menuName:F,[u]:p[u]})}}:void 0;return r?i(O,{spinning:m,children:[t(k,{columns:[{title:"类型",dataIndex:"menuType",key:"menuType",valueType:"select",valueEnum:Y},{title:"创建时间",dataIndex:"createTime",key:"createTime",valueType:"dateTime"}],dataSource:o,column:E}),t(V,{}),t(k,{columns:[{title:"名称",dataIndex:"menuName",key:"menuName",valueType:"text"},{title:"排序",dataIndex:"orderNum",key:"orderNum",valueType:"digit"},{title:"备注",dataIndex:"remark",key:"remark",valueType:"textarea"}],dataSource:o,editable:s,column:E}),t(V,{}),t(k,{columns:c,dataSource:o,editable:s,column:E})]}):t(B,{description:"点击选择左侧菜单项查看详情"})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const Le=()=>{const e=d.useRef(),a=ge(),r=fe(),{selectedMenuId:n}=D(),{valueEnumSysNormalDisable:o,defaultValueSysNormalDisable:m}=q(),{valueEnumSysShowHide:h,defaultValueSysShowHide:b}=z(),{data:c,refetch:M}=be(),C=K(),{isLoading:l,mutate:x}=W(async()=>{var u,p;const s=await((p=(u=e.current)==null?void 0:u.validateFieldsReturnFormatValue)==null?void 0:p.call(u));s&&await Ne(s)},{onSuccess:async()=>{var s;await Promise.all([M(),C()]),a(),(s=e.current)==null||s.resetFields(),j.success("新增成功")}});return d.useEffect(()=>{r&&d.startTransition(()=>{var s;(s=e.current)==null||s.setFieldsValue({parentId:Te((c==null?void 0:c.map)??new Map,n)})})},[r]),t(ae,{open:r,onCancel:a,title:"新增菜单",width:515,onOk:()=>x(),okButtonProps:{loading:l},children:i(se,{submitter:!1,formRef:e,children:[t(qe,{name:"parentId",label:"父级菜单",fieldProps:{options:(c==null?void 0:c.options)??[],fieldNames:{label:"menuName",value:"menuId",children:"children"},changeOnSelect:!0},rules:[{required:!0}],transform:s=>s&&{parentId:s[s.length-1]}}),t(v.Group,{name:"menuType",label:"菜单类型",valueEnum:Y,rules:[{required:!0}]}),t(re,{name:["menuType"],children:({menuType:s})=>s?i(w,{children:[i(A,{children:[t(T,{name:"menuName",label:"菜单名称",width:"sm",rules:[{required:!0}]}),t(Ae,{name:"orderNum",label:"显示排序",tooltip:"默认数值为0，数值越大排序越靠后，数值相等按照创建时间先后排序",rules:[{required:!0}],width:"sm",initialValue:0})]}),s!==y.F&&i(w,{children:[i(A,{children:[t(v.Group,{tooltip:"选择停用则路由将不会出现在侧边栏，也不能被访问",name:"status",label:"菜单状态",required:!0,valueEnum:o,initialValue:m}),t(v.Group,{name:"visible",label:"菜单是否显示",valueEnum:h,required:!0,initialValue:b,tooltip:"选择否则路由将不会出现在侧边栏，但仍然可以访问"}),t(v.Group,{name:"isFrame",label:"是否外链",valueEnum:Q,required:!0,initialValue:xe.NO,tooltip:"选择是外链则路由地址需要以`http(s)://`开头"})]}),i(A,{children:[t(T,{name:"icon",label:"菜单图标",width:"sm",tooltip:"https://ant.design/components/icon-cn/"}),t(T,{width:"sm",name:"path",label:"路由地址",tooltip:"访问的路由地址，如：`user`，如外网地址需内链访问则以`http(s)://`开头",rules:[{required:!0}]})]})]}),s===y.C&&t(T,{name:"queryParam",label:"路由参数",tooltip:'访问路由的默认传递参数，如：{"id": 1, "name": "ry"}'}),s!==y.M&&t(T,{name:"perms",label:"权限标识"})]}):null}),t(Ie,{name:"remark",label:"备注"})]})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const Ge=()=>i("div",{className:"mb-2",children:["标签含义：",t(f,{color:"rgb(148 163 184)",children:"显示顺序"}),t(f,{color:N[y.M],children:"目录"}),t(f,{color:N[y.C],children:"菜单"}),t(f,{color:N[y.F],children:"按钮"}),t(f,{children:"权限标识"})]});globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const He=e=>i(w,{children:[t(f,{color:"rgb(148 163 184)",children:e.orderNum}),(e==null?void 0:e.icon)&&t(oe,{name:e.icon,className:"mr-1"}),t(f,{color:N[e.menuType],style:{margin:"0 0 2px 0"},children:e.menuName}),(e==null?void 0:e.perms)&&t(f,{style:{margin:"0 0 2px 2px"},children:i(ne,{size:"small",children:[e.perms,t("div",{onClick:a=>{a.stopPropagation()},children:t(ke.CopyToClipboard,{text:e.perms,onCopy:async(a,r)=>{r&&j.success("复制成功")},children:t(le,{style:{color:"#1890ff"}})})})]})})]});globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const N={M:"blue",C:"green",F:"red"},Ke={title:"menuName",key:"menuId"},Ye=()=>{var F;const[e,a]=d.useState({}),[r,n]=d.useState(0),[o,m]=d.useState([]),[h,b]=Me(),c=Ce(),M=G(),{valueEnumSysNormalDisable:C}=q(),{data:l,refetch:x,isFetching:s}=Se(e,g=>{m(g)}),u=H(),p=(g,{node:{key:_}})=>{n(_)},S=({node:g})=>{n(g.key)},P=(o==null?void 0:o.length)&&(o==null?void 0:o.length)===((F=l==null?void 0:l.parentIds)==null?void 0:F.length);return d.useEffect(()=>{x()},[e]),d.useEffect(()=>{r>0?b({hasSelected:!0,selectedMenuId:r,selectedMenuName:l.map.get(r).menuName}):c()},[r]),i(w,{children:[t(Ge,{}),i("div",{className:"flex justify-between items-center",children:[t(ie,{size:"small",className:"my-2",icon:P?t(ce,{}):t(ue,{}),onClick:()=>m(P?[]:l==null?void 0:l.parentIds),children:P?"全部折叠":"全部展开"}),i(de,{onFinish:async g=>{n(0),m([]),a(g)},children:[t(T,{name:"menuName",label:"菜单名称"}),t(Ee,{name:"status",label:"状态",valueEnum:C})]})]}),t(O,{spinning:s,children:t(me,{menu:{items:[{label:"新增",key:"create",disabled:!h.hasSelected,onClick:()=>M()},{label:"在根目录下新增",key:"createBase",onClick:()=>{c(),M()}},{label:"删除",key:"delete",danger:!0,disabled:!h.hasSelected,onClick:()=>u({menuId:h.selectedMenuId,menuName:h.selectedMenuName})}]},trigger:["contextMenu"],children:l!=null&&l.treeData.length?t(he,{blockNode:!0,selectedKeys:[r],onSelect:p,expandedKeys:o,titleRender:He,onExpand:m,showLine:{showLeafIcon:!1},fieldNames:Ke,height:700,treeData:l==null?void 0:l.treeData,onRightClick:S}):t(B,{})})})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const yt=()=>i(pe,{children:[i(I,{ghost:!0,gutter:[16,16],wrap:!0,children:[t(I,{title:"菜单列表",colSpan:{xxl:8,xl:12,lg:14,md:24,sm:24,xs:24},extra:t(Re,{}),children:t(Ye,{})}),t(I,{title:"菜单详情",extra:t(Ve,{}),colSpan:{xxl:16,xl:12,lg:10,md:24,sm:24,xs:24},className:"h-full",children:t(Oe,{})})]}),t(Le,{})]});export{yt as default};
