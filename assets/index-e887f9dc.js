import{g as X,l as $,r as f,cb as J,d as a,aL as U,_ as O,b3 as E,aK as q,b_ as Z,b4 as H,c4 as R,j as i,c5 as ee,cj as B,aQ as L,ck as g,cl as G,aR as V,b5 as te,aP as ae,cm as se,k,aX as w,cn as re,co as oe,w as ne,cp as ce,c6 as le,c7 as ie,c8 as ue,cq as de,c9 as he,aF as pe,bh as N}from"./index-5129c4ee.js";import{b as A,d as v}from"./index-4d2627ca.js";import{useShowCreateModal as Q,useAtomValueSelectedMenuData as D,useDeleteMenu as z,useReFetchMenuList as K,useReFetchMenuOptions as me,useHideCreateModal as ge,useAtomValueCreateModal as fe,useQueryMenuOptions as ye,useAtomStateSelectedMenuData as Me,useResetSelectedMenuData as be,useQueryMenuList as Ce}from"./index-0f082e6c.js";import{B as xe,C as Pe,D as Te}from"./System-e98d1e38.js";import{u as ve}from"./useRequest-7cae8ac0.js";import{u as Y}from"./useMutation.esm-a8c6dcb5.js";import{P as j}from"./index-404f2bdc.js";import{P as F}from"./index-66210ff3.js";import{P as T}from"./index-d05c32d6.js";import{P as Fe}from"./index-41c8cbc3.js";import{P as Ie}from"./index-5d729dc5.js";import{l as ke}from"./index-75d0494c.js";import{T as M}from"./index-e87de9a4.js";import{P as Ae}from"./index-ccd06c0c.js";import"./utils-2e2b94e3.js";import"./utils.esm-88b6f67f.js";import"./Skeleton-5de0223c.js";var we=["fieldProps","request","params","proFieldProps"],Ne=function(t,r){var n=t.fieldProps,o=t.request,s=t.params,u=t.proFieldProps,d=$(t,we),y=f.exports.useContext(J);return a(U,O({valueType:"cascader",fieldProps:O({getPopupContainer:y.getPopupContainer},n),ref:r,request:o,params:s,filedConfig:{customLightMode:!0},proFieldProps:u},d))};const je=X.forwardRef(Ne);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Se=()=>{const{canAddSysMenu:e}=A(),t=Q();return a(E,{accessible:e,children:a(q,{type:"primary",onClick:t,icon:a(Z,{}),children:"新建"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Ee=()=>{const{canRemoveSysMenu:e}=A(),{hasSelected:t,selectedMenuId:r,selectedMenuName:n}=D(),o=z();return a(E,{accessible:t&&e,children:a(q,{icon:a(H,{}),danger:!0,onClick:()=>o({menuId:r,menuName:n}),children:"删除"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const S={xs:1,sm:1,md:1,lg:1,xl:2},qe=e=>{const{data:t}=v("sys_normal_disable"),{data:r}=v("sys_show_hide");return f.exports.useMemo(()=>{var o,s;const n=[];return e?(e!==g.F&&n.push({title:"状态",dataIndex:"status",key:"status",valueType:"select",valueEnum:(o=t==null?void 0:t.mapData)!=null?o:{}},{title:"是否显示",dataIndex:"visible",key:"visible",valueType:"radio",valueEnum:(s=r==null?void 0:r.mapData)!=null?s:{},tooltip:"选择否则路由将不会出现在侧边栏，但仍然可以访问"},{title:"是否外链",dataIndex:"isFrame",key:"isFrame",valueType:"radio",valueEnum:G,tooltip:"选择是外链则路由地址需要以`http(s)://`开头"},{title:"图标",dataIndex:"icon",key:"icon",valueType:"text",tooltip:"https://ant.design/components/icon-cn/"},{title:"路由地址",dataIndex:"path",key:"path",valueType:"text",tooltip:"访问的路由地址，如：`user`，如外网地址需内链访问则以`http(s)://`开头"}),e===g.C&&n.push({title:"路由参数",dataIndex:"queryParam",key:"queryParam",valueType:"code",tooltip:'访问路由的默认传递参数，如：{"id": 1, "name": "ry"}'}),e!==g.M&&n.push({title:"权限标识",dataIndex:"perms",key:"perms",valueType:"text",copyable:!0}),n):[]},[e])},Ve=()=>{const e=A(),t=K(),r=me(),{hasSelected:n,selectedMenuId:o}=D(),{data:s,loading:u,refresh:d}=ve(async()=>await xe({menuId:o}),{ready:n,refreshDeps:[o]}),{mutateAsync:y}=Y(Pe,{onSuccess:()=>{d(),t(),r(),V.success("保存成功")}}),C=qe(s==null?void 0:s.menuType),p=e.canEditSysMenu?{onSave:async(l,b)=>{const{menuType:x,orderNum:c,menuName:h,menuId:m}=b;await y({menuId:m,menuType:x,orderNum:c,menuName:h,[l]:b[l]})}}:void 0;return o===0?a(R,{description:"点击选择左侧菜单项查看详情"}):i(ee,{spinning:u,children:[a(j,{columns:[{title:"类型",dataIndex:"menuType",key:"menuType",valueType:"select",valueEnum:B},{title:"创建时间",dataIndex:"createTime",key:"createTime",valueType:"dateTime"}],dataSource:s,column:S}),a(L,{}),a(j,{columns:[{title:"名称",dataIndex:"menuName",key:"menuName",valueType:"text"},{title:"排序",dataIndex:"orderNum",key:"orderNum",valueType:"digit"},{title:"备注",dataIndex:"remark",key:"remark",valueType:"textarea"}],dataSource:s,editable:p,column:S}),a(L,{}),a(j,{columns:C,dataSource:s,editable:p,column:S})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const De=(e,t)=>{const r=[0];if(t===0)return r;const n=o=>{const s=e.get(o);!s||((s==null?void 0:s.parentId)!==void 0&&n(s.parentId),s.menuType!==g.F&&r.push(o))};return n(t),r},_e=()=>{var b,x;const{canAddSysMenu:e}=A(),t=f.exports.useRef(),r=ge(),n=fe(),{selectedMenuId:o}=D(),{data:s}=v("sys_normal_disable"),{data:u}=v("sys_show_hide"),{data:d,refetch:y}=ye(),C=K(),{isLoading:p,mutate:l}=Y(async()=>{var h,m;const c=await((m=(h=t.current)==null?void 0:h.validateFieldsReturnFormatValue)==null?void 0:m.call(h));!c||await Te(c)},{onSuccess:async()=>{var c;await Promise.all([y(),C()]),r(),(c=t==null?void 0:t.current)==null||c.resetFields(),V.success("新建成功")}});return f.exports.useEffect(()=>{var c;n&&(d==null?void 0:d.map)&&((c=t==null?void 0:t.current)==null?void 0:c.setFieldsValue)&&t.current.setFieldsValue({parentId:De(d.map,o)})},[n,(b=t==null?void 0:t.current)==null?void 0:b.setFieldsValue]),a(E,{accessible:e,children:a(te,{open:n,onCancel:r,title:"新建菜单",width:515,okText:"提交",onOk:()=>l(),okButtonProps:{loading:p},children:i(ae,{submitter:!1,formRef:t,children:[a(je,{name:"parentId",label:"父级菜单",fieldProps:{options:(x=d==null?void 0:d.options)!=null?x:[],fieldNames:{label:"menuName",value:"menuId",children:"children"},changeOnSelect:!0},rules:[{required:!0,message:"请选择父级菜单"}],transform:c=>({parentId:c[c.length-1]})}),a(F.Group,{name:"menuType",label:"菜单类型",valueEnum:B,rules:[{required:!0,message:"请选择菜单类型"}]}),a(se,{name:["menuType"],children:({menuType:c})=>{var h,m;return c?i(k,{children:[i(w,{children:[a(T,{name:"menuName",label:"菜单名称",width:"sm",rules:[{required:!0}]}),a(Fe,{name:"orderNum",label:"显示排序",tooltip:"默认数值为0，数值越大排序越靠后，数值相等按照创建时间先后排序",rules:[{required:!0}],width:"sm",initialValue:0})]}),c!==g.F&&i(k,{children:[i(w,{children:[a(F.Group,{tooltip:"选择停用则路由将不会出现在侧边栏，也不能被访问",name:"status",label:"菜单状态",required:!0,valueEnum:(h=s==null?void 0:s.mapData)!=null?h:{},initialValue:s==null?void 0:s.defaultValue}),a(F.Group,{name:"visible",label:"菜单是否显示",valueEnum:(m=u==null?void 0:u.mapData)!=null?m:{},required:!0,initialValue:u==null?void 0:u.defaultValue,tooltip:"选择否则路由将不会出现在侧边栏，但仍然可以访问"}),a(F.Group,{name:"isFrame",label:"是否外链",valueEnum:G,required:!0,initialValue:re.NO,tooltip:"选择是外链则路由地址需要以`http(s)://`开头"})]}),i(w,{children:[a(T,{name:"icon",label:"菜单图标",width:"sm",tooltip:"https://ant.design/components/icon-cn/"}),a(T,{width:"sm",name:"path",label:"路由地址",tooltip:"访问的路由地址，如：`user`，如外网地址需内链访问则以`http(s)://`开头",rules:[{required:!0}]})]})]}),c===g.C&&a(T,{name:"queryParam",label:"路由参数",tooltip:'访问路由的默认传递参数，如：{"id": 1, "name": "ry"}'}),c!==g.M&&a(T,{name:"perms",label:"权限标识"})]}):null}}),a(Ie,{name:"remark",label:"备注"})]})})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Oe=e=>i(k,{children:[a(M,{color:"rgb(148 163 184)",children:e.orderNum}),(e==null?void 0:e.icon)&&a(oe,{name:e.icon,className:"mr-1"}),a(M,{color:I[e.menuType],style:{margin:"0 0 2px 0"},children:e.menuName}),(e==null?void 0:e.perms)&&a(M,{style:{margin:"0 0 2px 2px"},children:i(ne,{size:"small",children:[e.perms,a("div",{onClick:t=>{t.stopPropagation()},children:a(ke.CopyToClipboard,{text:e.perms,onCopy:(t,r)=>{r&&V.success("复制成功")},children:a(ce,{style:{color:"#1890ff"}})})})]})})]});globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Le=()=>i("div",{className:"mb-2",children:["标签含义：",a(M,{color:"rgb(148 163 184)",children:"显示顺序"}),a(M,{color:I[g.M],children:"目录"}),a(M,{color:I[g.C],children:"菜单"}),a(M,{color:I[g.F],children:"按钮"}),a(M,{children:"权限标识"})]});globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const I={M:"blue",C:"green",F:"red"},Re=()=>{var m,_;const[e,t]=f.exports.useState({}),[r,n]=f.exports.useState(0),[o,s]=f.exports.useState([]),[u,d]=Me(),y=be(),C=Q(),{data:p}=v("sys_normal_disable"),{data:l,refetch:b}=Ce(e,P=>{s(P)}),x=z(),c=(P,{node:{key:W}})=>{n(W)},h=(o==null?void 0:o.length)!==0&&(o==null?void 0:o.length)===((m=l==null?void 0:l.parentIds)==null?void 0:m.length);return f.exports.useEffect(()=>{b()},[e]),f.exports.useEffect(()=>{r>0?d({hasSelected:!0,selectedMenuId:r,selectedMenuName:l.map.get(r).menuName}):y()},[r]),i(k,{children:[a(Le,{}),i("div",{className:"flex justify-between items-center",children:[a(q,{size:"small",className:"my-2",icon:h?a(le,{}):a(ie,{}),onClick:()=>s(h?[]:l==null?void 0:l.parentIds),children:h?"全部折叠":"全部展开"}),i(ue,{onFinish:async P=>{n(0),s([]),t(P)},children:[a(T,{name:"menuName",label:"菜单名称"}),a(Ae,{name:"status",label:"状态",valueEnum:(_=p==null?void 0:p.mapData)!=null?_:{},initialValue:p==null?void 0:p.defaultValue})]})]}),a(de,{menu:{items:[{label:"新建",key:"create",onClick:()=>C()},{label:"在根目录下新建",key:"createBase",onClick:()=>{y(),C()}},{label:"删除",key:"delete",danger:!0,disabled:!u.hasSelected,onClick:()=>x({menuId:u.selectedMenuId,menuName:u.selectedMenuName})}]},trigger:["contextMenu"],children:a("div",{className:"h-[calc(100vh-310px)] overflow-auto",children:l!=null&&l.treeData.length?a(he,{blockNode:!0,selectedKeys:[r],onSelect:c,expandedKeys:o,titleRender:Oe,onExpand:s,showLine:{showLeafIcon:!1},fieldNames:{title:"menuName",key:"menuId",children:"children"},treeData:l==null?void 0:l.treeData,onRightClick:({node:{key:P}})=>n(P)}):a(R,{})})})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const rt=()=>i(pe,{children:[i(N,{ghost:!0,gutter:16,children:[a(N,{title:"菜单列表",colSpan:"550px",extra:a(Se,{}),children:a(Re,{})}),a(N,{title:"菜单详情",extra:a(Ee,{}),className:"h-full",children:a(Ve,{})})]}),a(_e,{})]});export{rt as default};
