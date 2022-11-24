import{R as W,k as Y,r as g,co as J,d as t,aB as U,_ as V,cI as B,cJ as $,cK as X,cL as Z,cg as D,j as u,ch as H,cM as R,aG as _,b9 as T,cN as p,cO as L,aH as j,cP as ee,a_ as te,aF as ae,cQ as se,h as I,aN as k,cR as re,cS as oe,cT as ne,v as le,cU as ce,aA as ie,cj as ue,ck as de,cl as he,cV as me,cm as pe,av as ge,bi as A}from"./index-d8be1220.js";import{useShowCreateModal as O,useAtomValueSelectedMenuData as S,useDeleteMenu as G,useReFetchMenuList as K,useReFetchMenuOptions as fe,useHideCreateModal as ye,useAtomValueCreateModal as Me,useQueryMenuOptions as xe,useAtomStateSelectedMenuData as Ce,useResetSelectedMenuData as be,useQueryMenuList as Pe}from"./index-9bf5923a.js";import{u as Te}from"./useRequest-62faba72.js";import{u as Q}from"./useMutation.esm-b457f5d1.js";import{P as w}from"./index-1a1526f4.js";import{P as v}from"./index-311550e6.js";import{P}from"./index-327dd444.js";import{P as ve}from"./index-b945fb5e.js";import{P as Fe}from"./index-1698efcf.js";import{l as Ie}from"./index-6990944f.js";import{T as y}from"./index-310b9c3d.js";import{P as ke}from"./index-8685bac0.js";import"./utils-db931927.js";import"./Skeleton-323b7d88.js";var Ae=["fieldProps","request","params","proFieldProps"],we=function(a,r){var n=a.fieldProps,s=a.request,o=a.params,i=a.proFieldProps,M=Y(a,Ae),f=g.exports.useContext(J);return t(U,V({valueType:"cascader",fieldProps:V({getPopupContainer:f.getPopupContainer},n),ref:r,request:s,params:o,filedConfig:{customLightMode:!0},proFieldProps:i},M))};const Ne=W.forwardRef(we);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const je=()=>{const e=O();return t(B,{accessKey:"system:menu:add",children:t($,{onClick:e})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const Se=()=>{const{hasSelected:e,selectedMenuId:a,selectedMenuName:r}=S(),n=G();return t(B,{accessKey:"system:menu:remove",children:t(X,{disabled:!e,onClick:()=>n({menuId:a,menuName:r})})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const N={xs:1,sm:1,md:1,lg:1,xl:2},Ee=e=>{const{data:a}=T("sys_normal_disable"),{data:r}=T("sys_show_hide");return g.exports.useMemo(()=>{var s,o;const n=[];return e?(e!==p.F&&n.push({title:"状态",dataIndex:"status",key:"status",valueType:"select",valueEnum:(s=a==null?void 0:a.mapData)!=null?s:{}},{title:"是否显示",dataIndex:"visible",key:"visible",valueType:"radio",valueEnum:(o=r==null?void 0:r.mapData)!=null?o:{},tooltip:"选择否则路由将不会出现在侧边栏，但仍然可以访问"},{title:"是否外链",dataIndex:"isFrame",key:"isFrame",valueType:"radio",valueEnum:L,tooltip:"选择是外链则路由地址需要以`http(s)://`开头"},{title:"图标",dataIndex:"icon",key:"icon",valueType:"text",tooltip:"https://ant.design/components/icon-cn/"},{title:"路由地址",dataIndex:"path",key:"path",valueType:"text",tooltip:"访问的路由地址，如：`user`，如外网地址需内链访问则以`http(s)://`开头"}),e===p.C&&n.push({title:"路由参数",dataIndex:"queryParam",key:"queryParam",valueType:"code",tooltip:'访问路由的默认传递参数，如：{"id": 1, "name": "ry"}'}),e!==p.M&&n.push({title:"权限标识",dataIndex:"perms",key:"perms",valueType:"text",copyable:!0}),n):[]},[e])},qe=()=>{const e=K(),a=fe(),{hasSelected:r,selectedMenuId:n}=S(),{data:s,loading:o,refresh:i}=Te(async()=>await Z({menuId:n}),{ready:r,refreshDeps:[n]}),{mutateAsync:M}=Q(ee,{onSuccess:()=>{i(),e(),a(),j.success("保存成功")}}),f=Ee(s==null?void 0:s.menuType),x={onSave:async(d,c)=>{const{menuType:C,orderNum:l,menuName:h,menuId:m}=c;await M({menuId:m,menuType:C,orderNum:l,menuName:h,[d]:c[d]})}};return n===0?t(D,{description:"点击选择左侧菜单项查看详情"}):u(H,{spinning:o,children:[t(w,{columns:[{title:"类型",dataIndex:"menuType",key:"menuType",valueType:"select",valueEnum:R},{title:"创建时间",dataIndex:"createTime",key:"createTime",valueType:"dateTime"}],dataSource:s,column:N}),t(_,{}),t(w,{columns:[{title:"名称",dataIndex:"menuName",key:"menuName",valueType:"text"},{title:"排序",dataIndex:"orderNum",key:"orderNum",valueType:"digit"},{title:"备注",dataIndex:"remark",key:"remark",valueType:"textarea"}],dataSource:s,editable:x,column:N}),t(_,{}),t(w,{columns:f,dataSource:s,editable:x,column:N})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const Ve=(e,a)=>{const r=[0];if(a===0)return r;const n=s=>{const o=e.get(s);!o||((o==null?void 0:o.parentId)!==void 0&&n(o.parentId),o.menuType!==p.F&&r.push(s))};return n(a),r},_e=()=>{var c,C;const e=g.exports.useRef(),a=ye(),r=Me(),{selectedMenuId:n}=S(),{data:s}=T("sys_normal_disable"),{data:o}=T("sys_show_hide"),{data:i,refetch:M}=xe(),f=K(),{isLoading:x,mutate:d}=Q(async()=>{var h,m;const l=await((m=(h=e.current)==null?void 0:h.validateFieldsReturnFormatValue)==null?void 0:m.call(h));!l||await oe(l)},{onSuccess:async()=>{var l;await Promise.all([M(),f()]),a(),(l=e==null?void 0:e.current)==null||l.resetFields(),j.success("新建成功")}});return g.exports.useEffect(()=>{var l;r&&(i==null?void 0:i.map)&&((l=e==null?void 0:e.current)==null?void 0:l.setFieldsValue)&&e.current.setFieldsValue({parentId:Ve(i.map,n)})},[r,(c=e==null?void 0:e.current)==null?void 0:c.setFieldsValue]),t(te,{open:r,onCancel:a,title:"新建菜单",width:515,onOk:()=>d(),okButtonProps:{loading:x},children:u(ae,{submitter:!1,formRef:e,children:[t(Ne,{name:"parentId",label:"父级菜单",fieldProps:{options:(C=i==null?void 0:i.options)!=null?C:[],fieldNames:{label:"menuName",value:"menuId",children:"children"},changeOnSelect:!0},rules:[{required:!0,message:"请选择父级菜单"}],transform:l=>({parentId:l[l.length-1]})}),t(v.Group,{name:"menuType",label:"菜单类型",valueEnum:R,rules:[{required:!0,message:"请选择菜单类型"}]}),t(se,{name:["menuType"],children:({menuType:l})=>{var h,m;return l?u(I,{children:[u(k,{children:[t(P,{name:"menuName",label:"菜单名称",width:"sm",rules:[{required:!0}]}),t(ve,{name:"orderNum",label:"显示排序",tooltip:"默认数值为0，数值越大排序越靠后，数值相等按照创建时间先后排序",rules:[{required:!0}],width:"sm",initialValue:0})]}),l!==p.F&&u(I,{children:[u(k,{children:[t(v.Group,{tooltip:"选择停用则路由将不会出现在侧边栏，也不能被访问",name:"status",label:"菜单状态",required:!0,valueEnum:(h=s==null?void 0:s.mapData)!=null?h:{},initialValue:s==null?void 0:s.defaultValue}),t(v.Group,{name:"visible",label:"菜单是否显示",valueEnum:(m=o==null?void 0:o.mapData)!=null?m:{},required:!0,initialValue:o==null?void 0:o.defaultValue,tooltip:"选择否则路由将不会出现在侧边栏，但仍然可以访问"}),t(v.Group,{name:"isFrame",label:"是否外链",valueEnum:L,required:!0,initialValue:re.NO,tooltip:"选择是外链则路由地址需要以`http(s)://`开头"})]}),u(k,{children:[t(P,{name:"icon",label:"菜单图标",width:"sm",tooltip:"https://ant.design/components/icon-cn/"}),t(P,{width:"sm",name:"path",label:"路由地址",tooltip:"访问的路由地址，如：`user`，如外网地址需内链访问则以`http(s)://`开头",rules:[{required:!0}]})]})]}),l===p.C&&t(P,{name:"queryParam",label:"路由参数",tooltip:'访问路由的默认传递参数，如：{"id": 1, "name": "ry"}'}),l!==p.M&&t(P,{name:"perms",label:"权限标识"})]}):null}}),t(Fe,{name:"remark",label:"备注"})]})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const Be=e=>u(I,{children:[t(y,{color:"rgb(148 163 184)",children:e.orderNum}),(e==null?void 0:e.icon)&&t(ne,{name:e.icon,className:"mr-1"}),t(y,{color:F[e.menuType],style:{margin:"0 0 2px 0"},children:e.menuName}),(e==null?void 0:e.perms)&&t(y,{style:{margin:"0 0 2px 2px"},children:u(le,{size:"small",children:[e.perms,t("div",{onClick:a=>{a.stopPropagation()},children:t(Ie.CopyToClipboard,{text:e.perms,onCopy:(a,r)=>{r&&j.success("复制成功")},children:t(ce,{style:{color:"#1890ff"}})})})]})})]});globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const De=()=>u("div",{className:"mb-2",children:["标签含义：",t(y,{color:"rgb(148 163 184)",children:"显示顺序"}),t(y,{color:F[p.M],children:"目录"}),t(y,{color:F[p.C],children:"菜单"}),t(y,{color:F[p.F],children:"按钮"}),t(y,{children:"权限标识"})]});globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const F={M:"blue",C:"green",F:"red"},Re=()=>{var E,q;const[e,a]=g.exports.useState({}),[r,n]=g.exports.useState(0),[s,o]=g.exports.useState([]),[i,M]=Ce(),f=be(),x=O(),{data:d}=T("sys_normal_disable"),{data:c,refetch:C}=Pe(e,b=>{o(b)}),l=G(),h=(b,{node:{key:z}})=>{n(z)},m=(s==null?void 0:s.length)!==0&&(s==null?void 0:s.length)===((E=c==null?void 0:c.parentIds)==null?void 0:E.length);return g.exports.useEffect(()=>{C()},[e]),g.exports.useEffect(()=>{r>0?M({hasSelected:!0,selectedMenuId:r,selectedMenuName:c.map.get(r).menuName}):f()},[r]),u(I,{children:[t(De,{}),u("div",{className:"flex justify-between items-center",children:[t(ie,{size:"small",className:"my-2",icon:m?t(ue,{}):t(de,{}),onClick:()=>o(m?[]:c==null?void 0:c.parentIds),children:m?"全部折叠":"全部展开"}),u(he,{onFinish:async b=>{n(0),o([]),a(b)},children:[t(P,{name:"menuName",label:"菜单名称"}),t(ke,{name:"status",label:"状态",valueEnum:(q=d==null?void 0:d.mapData)!=null?q:{},initialValue:d==null?void 0:d.defaultValue})]})]}),t(me,{menu:{items:[{label:"新建",key:"create",onClick:()=>x()},{label:"在根目录下新建",key:"createBase",onClick:()=>{f(),x()}},{label:"删除",key:"delete",danger:!0,disabled:!i.hasSelected,onClick:()=>l({menuId:i.selectedMenuId,menuName:i.selectedMenuName})}]},trigger:["contextMenu"],children:c!=null&&c.treeData.length?t(pe,{blockNode:!0,selectedKeys:[r],onSelect:h,expandedKeys:s,titleRender:Be,onExpand:o,showLine:{showLeafIcon:!1},fieldNames:{title:"menuName",key:"menuId",children:"children"},height:700,treeData:c==null?void 0:c.treeData,onRightClick:({node:{key:b}})=>n(b)}):t(D,{})})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,a){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,a),a)}};const et=()=>u(ge,{children:[u(A,{ghost:!0,gutter:[16,16],wrap:!0,children:[t(A,{title:"菜单列表",colSpan:{xxl:8,xl:12,lg:14,md:24,sm:24,xs:24},extra:t(je,{}),children:t(Re,{})}),t(A,{title:"菜单详情",extra:t(Se,{}),colSpan:{xxl:16,xl:12,lg:10,md:24,sm:24,xs:24},className:"h-full",children:t(qe,{})})]}),t(_e,{})]});export{et as default};
