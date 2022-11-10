import{aD as K,O as $,j as t,aE as J,_ as X,af as w,ag as N,aA as U,ah as Z,aJ as _,g as c,aK as H,au as v,b5 as L,X as O,r as E,b6 as m,b7 as R,Y as j,ai as ee,W as ue,az as f,b8 as te,F as x,a5 as I,$ as M,b9 as ae,ba as se,aQ as re,bb as ne,aL as oe,aM as le,aN as ce,aO as ie,bc as de,bd as he,aP as Fe,I as pe,ax as k}from"./index.82fca14a.js";import{b as P,j as D}from"./index.325812ac.js";import{useShowCreateModal as G,useAtomValueSelectedMenuData as q,useDeleteMenu as W,useReFetchMenuList as Q,useReFetchMenuOptions as me,useHideCreateModal as Ee,useAtomValueCreateModal as Ce,useQueryMenuOptions as ge,useAtomStateSelectedMenuData as Ae,useResetSelectedMenuData as Be,useQueryMenuList as be}from"./index.731b07a2.js";import{S as ye,a as Me,b as De}from"./SysMenuService.364d852c.js";import{u as fe}from"./useRequest.5976c31c.js";import{u as z}from"./useMutation.esm.d46f3ad9.js";import{P as Te}from"./index.e38a80bb.js";import{P as xe}from"./index.2ac4bb54.js";import{l as Pe}from"./index.9cd906b4.js";import{T as C}from"./index.70a5c138.js";import"./useQuery.esm.a64abd47.js";import"./utils.esm.41c15342.js";import"./utils.a0eb1f2f.js";var ve=["fieldProps","request","params","proFieldProps"],Ie=function(u,s){var n=u.fieldProps,r=u.request,a=u.params,i=u.proFieldProps,d=$(u,ve);return t(J,X({valueType:"cascader",fieldProps:n,ref:s,request:r,params:a,filedConfig:{customLightMode:!0},proFieldProps:i},d))};const ke=K.forwardRef(Ie);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,u){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,u),u)}};const Se=()=>{const{canAddSysMenu:e}=P(),u=G();return t(w,{accessible:e,children:t(N,{type:"primary",onClick:u,icon:t(U,{}),children:"\u65B0\u5EFA"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,u){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,u),u)}};const we=()=>{const{canRemoveSysMenu:e}=P(),{hasSelected:u,selectedMenuId:s,selectedMenuName:n}=q(),r=W();return t(w,{accessible:u&&e,children:t(N,{icon:t(Z,{}),danger:!0,onClick:()=>r({menuId:s,menuName:n}),children:"\u5220\u9664"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,u){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,u),u)}};const S={xs:1,sm:1,md:1,lg:1,xl:2},Ne=e=>{const{data:u}=D("sys_normal_disable"),{data:s}=D("sys_show_hide");return E.exports.useMemo(()=>{var r,a;const n=[];return e?(e!==m.F&&n.push({title:"\u72B6\u6001",dataIndex:"status",key:"status",valueType:"select",valueEnum:(r=u==null?void 0:u.mapData)!=null?r:{}},{title:"\u662F\u5426\u663E\u793A",dataIndex:"visible",key:"visible",valueType:"radio",valueEnum:(a=s==null?void 0:s.mapData)!=null?a:{},tooltip:"\u9009\u62E9\u5426\u5219\u8DEF\u7531\u5C06\u4E0D\u4F1A\u51FA\u73B0\u5728\u4FA7\u8FB9\u680F\uFF0C\u4F46\u4ECD\u7136\u53EF\u4EE5\u8BBF\u95EE"},{title:"\u662F\u5426\u5916\u94FE",dataIndex:"isFrame",key:"isFrame",valueType:"radio",valueEnum:R,tooltip:"\u9009\u62E9\u662F\u5916\u94FE\u5219\u8DEF\u7531\u5730\u5740\u9700\u8981\u4EE5`http(s)://`\u5F00\u5934"},{title:"\u56FE\u6807",dataIndex:"icon",key:"icon",valueType:"text",tooltip:"https://ant.design/components/icon-cn/"},{title:"\u8DEF\u7531\u5730\u5740",dataIndex:"path",key:"path",valueType:"text",tooltip:"\u8BBF\u95EE\u7684\u8DEF\u7531\u5730\u5740\uFF0C\u5982\uFF1A`user`\uFF0C\u5982\u5916\u7F51\u5730\u5740\u9700\u5185\u94FE\u8BBF\u95EE\u5219\u4EE5`http(s)://`\u5F00\u5934"}),e===m.C&&n.push({title:"\u8DEF\u7531\u53C2\u6570",dataIndex:"queryParam",key:"queryParam",valueType:"code",tooltip:'\u8BBF\u95EE\u8DEF\u7531\u7684\u9ED8\u8BA4\u4F20\u9012\u53C2\u6570\uFF0C\u5982\uFF1A{"id": 1, "name": "ry"}'}),e!==m.M&&n.push({title:"\u6743\u9650\u6807\u8BC6",dataIndex:"perms",key:"perms",valueType:"text",copyable:!0}),n):[]},[e])},je=()=>{const e=P(),u=Q(),s=me(),{hasSelected:n,selectedMenuId:r}=q(),{data:a,loading:i,refresh:d}=fe(async()=>await ye({menuId:r}),{ready:n,refreshDeps:[r]}),{mutateAsync:A}=z(Me,{onSuccess:()=>{d(),u(),s(),j.success("\u4FDD\u5B58\u6210\u529F")}}),B=Ne(a==null?void 0:a.menuType),F=e.canEditSysMenu?{onSave:async(l,g)=>{const{menuType:b,orderNum:o,menuName:h,menuId:p}=g;await A({menuId:p,menuType:b,orderNum:o,menuName:h,[l]:g[l]})}}:void 0;return r===0?t(_,{description:"\u70B9\u51FB\u9009\u62E9\u5DE6\u4FA7\u83DC\u5355\u9879\u67E5\u770B\u8BE6\u60C5"}):c(H,{spinning:i,children:[t(v,{columns:[{title:"\u7C7B\u578B",dataIndex:"menuType",key:"menuType",valueType:"select",valueEnum:L},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",key:"createTime",valueType:"dateTime"}],dataSource:a,column:S}),t(O,{}),t(v,{columns:[{title:"\u540D\u79F0",dataIndex:"menuName",key:"menuName",valueType:"text"},{title:"\u6392\u5E8F",dataIndex:"orderNum",key:"orderNum",valueType:"digit"},{title:"\u5907\u6CE8",dataIndex:"remark",key:"remark",valueType:"textarea"}],dataSource:a,editable:F,column:S}),t(O,{}),t(v,{columns:B,dataSource:a,editable:F,column:S})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,u){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,u),u)}};const qe=(e,u)=>{const s=[0];if(u===0)return s;const n=r=>{const a=e.get(r);!a||((a==null?void 0:a.parentId)!==void 0&&n(a.parentId),a.menuType!==m.F&&s.push(r))};return n(u),s},Ve=()=>{var g,b;const{canAddSysMenu:e}=P(),u=E.exports.useRef(),s=Ee(),n=Ce(),{selectedMenuId:r}=q(),{data:a}=D("sys_normal_disable"),{data:i}=D("sys_show_hide"),{data:d,refetch:A}=ge(),B=Q(),{isLoading:F,mutate:l}=z(async()=>{var h,p;const o=await((p=(h=u.current)==null?void 0:h.validateFieldsReturnFormatValue)==null?void 0:p.call(h));!o||await De(o)},{onSuccess:async()=>{var o;await Promise.all([A(),B()]),s(),(o=u==null?void 0:u.current)==null||o.resetFields(),j.success("\u65B0\u5EFA\u6210\u529F")}});return E.exports.useEffect(()=>{var o;n&&(d==null?void 0:d.map)&&((o=u==null?void 0:u.current)==null?void 0:o.setFieldsValue)&&u.current.setFieldsValue({parentId:qe(d.map,r)})},[n,(g=u==null?void 0:u.current)==null?void 0:g.setFieldsValue]),t(w,{accessible:e,children:t(ee,{open:n,onCancel:s,title:"\u65B0\u5EFA\u83DC\u5355",width:515,okText:"\u63D0\u4EA4",onOk:()=>l(),okButtonProps:{loading:F},children:c(ue,{submitter:!1,formRef:u,children:[t(ke,{name:"parentId",label:"\u7236\u7EA7\u83DC\u5355",fieldProps:{options:(b=d==null?void 0:d.options)!=null?b:[],fieldNames:{label:"menuName",value:"menuId",children:"children"},changeOnSelect:!0},rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u7236\u7EA7\u83DC\u5355"}],transform:o=>({parentId:o[o.length-1]})}),t(f.Group,{name:"menuType",label:"\u83DC\u5355\u7C7B\u578B",valueEnum:L,rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u83DC\u5355\u7C7B\u578B"}]}),t(te,{name:["menuType"],children:({menuType:o})=>{var h,p;return o?c(x,{children:[c(I,{children:[t(M,{name:"menuName",label:"\u83DC\u5355\u540D\u79F0",width:"sm",rules:[{required:!0}]}),t(Te,{name:"orderNum",label:"\u663E\u793A\u6392\u5E8F",tooltip:"\u9ED8\u8BA4\u6570\u503C\u4E3A0\uFF0C\u6570\u503C\u8D8A\u5927\u6392\u5E8F\u8D8A\u9760\u540E\uFF0C\u6570\u503C\u76F8\u7B49\u6309\u7167\u521B\u5EFA\u65F6\u95F4\u5148\u540E\u6392\u5E8F",rules:[{required:!0}],width:"sm",initialValue:0})]}),o!==m.F&&c(x,{children:[c(I,{children:[t(f.Group,{tooltip:"\u9009\u62E9\u505C\u7528\u5219\u8DEF\u7531\u5C06\u4E0D\u4F1A\u51FA\u73B0\u5728\u4FA7\u8FB9\u680F\uFF0C\u4E5F\u4E0D\u80FD\u88AB\u8BBF\u95EE",name:"status",label:"\u83DC\u5355\u72B6\u6001",required:!0,valueEnum:(h=a==null?void 0:a.mapData)!=null?h:{},initialValue:a==null?void 0:a.defaultValue}),t(f.Group,{name:"visible",label:"\u83DC\u5355\u662F\u5426\u663E\u793A",valueEnum:(p=i==null?void 0:i.mapData)!=null?p:{},required:!0,initialValue:i==null?void 0:i.defaultValue,tooltip:"\u9009\u62E9\u5426\u5219\u8DEF\u7531\u5C06\u4E0D\u4F1A\u51FA\u73B0\u5728\u4FA7\u8FB9\u680F\uFF0C\u4F46\u4ECD\u7136\u53EF\u4EE5\u8BBF\u95EE"}),t(f.Group,{name:"isFrame",label:"\u662F\u5426\u5916\u94FE",valueEnum:R,required:!0,initialValue:ae.NO,tooltip:"\u9009\u62E9\u662F\u5916\u94FE\u5219\u8DEF\u7531\u5730\u5740\u9700\u8981\u4EE5`http(s)://`\u5F00\u5934"})]}),c(I,{children:[t(M,{name:"icon",label:"\u83DC\u5355\u56FE\u6807",width:"sm",tooltip:"https://ant.design/components/icon-cn/"}),t(M,{width:"sm",name:"path",label:"\u8DEF\u7531\u5730\u5740",tooltip:"\u8BBF\u95EE\u7684\u8DEF\u7531\u5730\u5740\uFF0C\u5982\uFF1A`user`\uFF0C\u5982\u5916\u7F51\u5730\u5740\u9700\u5185\u94FE\u8BBF\u95EE\u5219\u4EE5`http(s)://`\u5F00\u5934",rules:[{required:!0}]})]})]}),o===m.C&&t(M,{name:"queryParam",label:"\u8DEF\u7531\u53C2\u6570",tooltip:'\u8BBF\u95EE\u8DEF\u7531\u7684\u9ED8\u8BA4\u4F20\u9012\u53C2\u6570\uFF0C\u5982\uFF1A{"id": 1, "name": "ry"}'}),o!==m.M&&t(M,{name:"perms",label:"\u6743\u9650\u6807\u8BC6"})]}):null}}),t(xe,{name:"remark",label:"\u5907\u6CE8"})]})})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,u){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,u),u)}};const Oe=e=>c(x,{children:[t(C,{color:"rgb(148 163 184)",children:e.orderNum}),(e==null?void 0:e.icon)&&t(se,{name:e.icon,className:"mr-1"}),t(C,{color:T[e.menuType],style:{margin:"0 0 2px 0"},children:e.menuName}),(e==null?void 0:e.perms)&&t(C,{style:{margin:"0 0 2px 2px"},children:c(re,{size:"small",children:[e.perms,t("div",{onClick:u=>{u.stopPropagation()},children:t(Pe.CopyToClipboard,{text:e.perms,onCopy:(u,s)=>{s&&j.success("\u590D\u5236\u6210\u529F")},children:t(ne,{style:{color:"#1890ff"}})})})]})})]});globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,u){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,u),u)}};const _e=()=>c("div",{className:"mb-2",children:["\u6807\u7B7E\u542B\u4E49\uFF1A",t(C,{color:"rgb(148 163 184)",children:"\u663E\u793A\u987A\u5E8F"}),t(C,{color:T[m.M],children:"\u76EE\u5F55"}),t(C,{color:T[m.C],children:"\u83DC\u5355"}),t(C,{color:T[m.F],children:"\u6309\u94AE"}),t(C,{children:"\u6743\u9650\u6807\u8BC6"})]});globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,u){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,u),u)}};const T={M:"blue",C:"green",F:"red"},Le=()=>{var p,V;const[e,u]=E.exports.useState({}),[s,n]=E.exports.useState(0),[r,a]=E.exports.useState([]),[i,d]=Ae(),A=Be(),B=G(),{data:F}=D("sys_normal_disable"),{data:l,refetch:g}=be(e,y=>{a(y)}),b=W(),o=(y,{node:{key:Y}})=>{n(Y)},h=(r==null?void 0:r.length)!==0&&(r==null?void 0:r.length)===((p=l==null?void 0:l.parentIds)==null?void 0:p.length);return E.exports.useEffect(()=>{g()},[e]),E.exports.useEffect(()=>{s>0?d({hasSelected:!0,selectedMenuId:s,selectedMenuName:l.map.get(s).menuName}):A()},[s]),c(x,{children:[t(_e,{}),c("div",{className:"flex justify-between items-center",children:[t(N,{size:"small",className:"my-2",icon:h?t(oe,{}):t(le,{}),onClick:()=>a(h?[]:l==null?void 0:l.parentIds),children:h?"\u5168\u90E8\u6298\u53E0":"\u5168\u90E8\u5C55\u5F00"}),c(ce,{onFinish:async y=>{n(0),a([]),u(y)},children:[t(M,{name:"menuName",label:"\u83DC\u5355\u540D\u79F0"}),t(ie,{name:"status",label:"\u72B6\u6001",valueEnum:(V=F==null?void 0:F.mapData)!=null?V:{},initialValue:F==null?void 0:F.defaultValue})]})]}),t(de,{overlay:t(he,{items:[{label:"\u65B0\u5EFA",key:"create",onClick:()=>B()},{label:"\u5728\u6839\u76EE\u5F55\u4E0B\u65B0\u5EFA",key:"createBase",onClick:()=>{A(),B()}},{label:"\u5220\u9664",key:"delete",danger:!0,disabled:!i.hasSelected,onClick:()=>b({menuId:i.selectedMenuId,menuName:i.selectedMenuName})}]}),trigger:["contextMenu"],children:t("div",{className:"h-[calc(100vh-310px)] overflow-auto",children:l!=null&&l.treeData.length?t(Fe,{blockNode:!0,selectedKeys:[s],onSelect:o,expandedKeys:r,titleRender:Oe,onExpand:a,showLine:{showLeafIcon:!1},fieldNames:{title:"menuName",key:"menuId",children:"children"},treeData:l==null?void 0:l.treeData,onRightClick:({node:{key:y}})=>n(y)}):t(_,{})})})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,u){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,u),u)}};const eu=()=>c(pe,{children:[c(k,{ghost:!0,gutter:16,children:[t(k,{title:"\u83DC\u5355\u5217\u8868",colSpan:"550px",extra:t(Se,{}),children:t(Le,{})}),t(k,{title:"\u83DC\u5355\u8BE6\u60C5",extra:t(we,{}),className:"h-full",children:t(je,{})})]}),t(Ve,{})]});export{eu as default};
