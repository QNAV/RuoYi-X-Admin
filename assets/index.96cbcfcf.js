import{aH as $,O as H,j as t,aI as _,_ as K,r as p,g as i,af as L,ag as I,aE as U,ai as X,W as J,aB as A,a_ as V,a$ as Z,F as f,a5 as x,$ as D,b0 as h,aL as N,aM as ee,b1 as S,b2 as q,Y as k,ah as ue,aO as R,aP as te,aw as T,X as O,aV as m,b3 as ae,an as se,b4 as re,aQ as ne,aR as oe,aS as le,aT as ce,b5 as ie,b6 as de,aU as he,I as Fe,az as P}from"./index.726d196b.js";import{a as w}from"./index.cd05ef25.js";import{useShowCreateModal as G,useHideCreateModal as pe,useValueCreateModal as me,useValueSelectedMenuData as j,useQueryMenuOptions as Ee,useReFetchMenuList as W,useDeleteMenu as Y,useReFetchMenuOptions as Ce,useStateSelectedMenuData as ge,useResetSelectedMenuData as ye,useQueryMenuList as be}from"./index.2829c271.js";import{S as Be,a as De,b as Ae}from"./SysMenuService.d83b5836.js";import{P as Me}from"./index.c06fdc33.js";import{P as fe}from"./index.a23f702e.js";import{u as z}from"./useMutation.esm.dadb136c.js";import{u as Se}from"./useRequest.4e48023b.js";import{l as xe}from"./index.e85e910d.js";import"./useQuery.esm.225ad0d9.js";import"./utils.esm.a7971faa.js";import"./SysLoginService.16c711d9.js";import"./utils.01c0b1b8.js";var Te=["fieldProps","request","params","proFieldProps"],Pe=function(u,n){var l=u.fieldProps,s=u.request,a=u.params,c=u.proFieldProps,E=H(u,Te);return t(_,K({valueType:"cascader",fieldProps:l,ref:n,request:s,params:a,filedConfig:{customLightMode:!0},proFieldProps:c},E))};const ve=$.forwardRef(Pe);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,u){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,u),u)}};const Ie=(e,u)=>{const n=[0];if(u===0)return n;const l=s=>{const a=e.get(s);!a||((a==null?void 0:a.parentId)!==void 0&&l(a.parentId),a.menuType!==h.F&&n.push(s))};return l(u),n},Ne=()=>{var C,g;const e=w(),u=p.exports.useRef(),n=G(),l=pe(),s=me(),{selectedMenuId:a}=j(),{data:c,refetch:E}=Ee(),b=W(),{isLoading:B,mutate:o}=z(async()=>{var d,y;const r=await((y=(d=u.current)==null?void 0:d.validateFieldsReturnFormatValue)==null?void 0:y.call(d));!r||await Be(r)},{onSuccess:async()=>{var r;await Promise.all([E(),b()]),l(),(r=u==null?void 0:u.current)==null||r.resetFields(),k.success("\u65B0\u5EFA\u6210\u529F")}});return p.exports.useEffect(()=>{var r;s&&(c==null?void 0:c.map)&&((r=u==null?void 0:u.current)==null?void 0:r.setFieldsValue)&&u.current.setFieldsValue({parentId:Ie(c.map,a)})},[s,(C=u==null?void 0:u.current)==null?void 0:C.setFieldsValue]),i(L,{accessible:e.canAddSysMenu,children:[t(I,{type:"primary",onClick:n,icon:t(U,{}),children:"\u65B0\u5EFA"}),t(X,{open:s,onCancel:l,title:"\u65B0\u5EFA\u83DC\u5355",width:515,okText:"\u63D0\u4EA4",onOk:()=>o(),okButtonProps:{loading:B},children:i(J,{submitter:!1,formRef:u,children:[t(ve,{name:"parentId",label:"\u7236\u7EA7\u83DC\u5355",fieldProps:{options:(g=c==null?void 0:c.options)!=null?g:[],fieldNames:{label:"menuName",value:"menuId",children:"children"},changeOnSelect:!0},rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u7236\u7EA7\u83DC\u5355"}],transform:r=>({parentId:r[r.length-1]})}),t(A.Group,{name:"menuType",label:"\u83DC\u5355\u7C7B\u578B",valueEnum:V,rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u83DC\u5355\u7C7B\u578B"}]}),t(Z,{name:["menuType"],children:({menuType:r})=>r?i(f,{children:[i(x,{children:[t(D,{name:"menuName",label:"\u83DC\u5355\u540D\u79F0",width:"sm",rules:[{required:!0}]}),t(Me,{name:"orderNum",label:"\u663E\u793A\u6392\u5E8F",tooltip:"\u9ED8\u8BA4\u6570\u503C\u4E3A0\uFF0C\u6570\u503C\u8D8A\u5927\u6392\u5E8F\u8D8A\u9760\u540E\uFF0C\u6570\u503C\u76F8\u7B49\u6309\u7167\u521B\u5EFA\u65F6\u95F4\u5148\u540E\u6392\u5E8F",rules:[{required:!0}],width:"sm",initialValue:0})]}),r!==h.F&&i(f,{children:[i(x,{children:[t(A.Group,{tooltip:"\u9009\u62E9\u505C\u7528\u5219\u8DEF\u7531\u5C06\u4E0D\u4F1A\u51FA\u73B0\u5728\u4FA7\u8FB9\u680F\uFF0C\u4E5F\u4E0D\u80FD\u88AB\u8BBF\u95EE",name:"status",label:"\u83DC\u5355\u72B6\u6001",valueEnum:N,required:!0,initialValue:ee.ENABLE}),t(A.Group,{name:"visible",label:"\u83DC\u5355\u662F\u5426\u663E\u793A",valueEnum:S,required:!0,initialValue:q.YES,tooltip:"\u9009\u62E9\u5426\u5219\u8DEF\u7531\u5C06\u4E0D\u4F1A\u51FA\u73B0\u5728\u4FA7\u8FB9\u680F\uFF0C\u4F46\u4ECD\u7136\u53EF\u4EE5\u8BBF\u95EE"}),t(A.Group,{name:"isFrame",label:"\u662F\u5426\u5916\u94FE",valueEnum:S,required:!0,initialValue:q.NO,tooltip:"\u9009\u62E9\u662F\u5916\u94FE\u5219\u8DEF\u7531\u5730\u5740\u9700\u8981\u4EE5`http(s)://`\u5F00\u5934"})]}),i(x,{children:[t(D,{name:"icon",label:"\u83DC\u5355\u56FE\u6807",width:"sm",tooltip:"https://ant.design/components/icon-cn/"}),t(D,{width:"sm",name:"path",label:"\u8DEF\u7531\u5730\u5740",tooltip:"\u8BBF\u95EE\u7684\u8DEF\u7531\u5730\u5740\uFF0C\u5982\uFF1A`user`\uFF0C\u5982\u5916\u7F51\u5730\u5740\u9700\u5185\u94FE\u8BBF\u95EE\u5219\u4EE5`http(s)://`\u5F00\u5934",rules:[{required:!0}]})]})]}),r===h.C&&t(D,{name:"queryParam",label:"\u8DEF\u7531\u53C2\u6570",tooltip:'\u8BBF\u95EE\u8DEF\u7531\u7684\u9ED8\u8BA4\u4F20\u9012\u53C2\u6570\uFF0C\u5982\uFF1A{"id": 1, "name": "ry"}'}),r!==h.M&&t(D,{name:"perms",label:"\u6743\u9650\u6807\u8BC6"})]}):null}),t(fe,{name:"remark",label:"\u5907\u6CE8"})]})})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,u){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,u),u)}};const ke=()=>{const e=w(),{hasSelected:u,selectedMenuId:n,selectedMenuName:l}=j(),{mutate:s,isLoading:a}=Y();return t(L,{accessible:u&&e.canRemoveSysMenu,children:t(I,{icon:t(ue,{}),loading:a,danger:!0,onClick:()=>s({menuId:n,menuName:l}),children:"\u5220\u9664"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,u){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,u),u)}};const v={xs:1,sm:1,md:1,lg:1,xl:2},we=e=>p.exports.useMemo(()=>{const u=[];return e?(e!==h.F&&u.push({title:"\u72B6\u6001",dataIndex:"status",key:"status",valueType:"select",valueEnum:N},{title:"\u662F\u5426\u663E\u793A",dataIndex:"visible",key:"visible",valueType:"radio",valueEnum:S,tooltip:"\u9009\u62E9\u5426\u5219\u8DEF\u7531\u5C06\u4E0D\u4F1A\u51FA\u73B0\u5728\u4FA7\u8FB9\u680F\uFF0C\u4F46\u4ECD\u7136\u53EF\u4EE5\u8BBF\u95EE"},{title:"\u662F\u5426\u5916\u94FE",dataIndex:"isFrame",key:"isFrame",valueType:"radio",valueEnum:S,tooltip:"\u9009\u62E9\u662F\u5916\u94FE\u5219\u8DEF\u7531\u5730\u5740\u9700\u8981\u4EE5`http(s)://`\u5F00\u5934"},{title:"\u56FE\u6807",dataIndex:"icon",key:"icon",valueType:"text",tooltip:"https://ant.design/components/icon-cn/"},{title:"\u8DEF\u7531\u5730\u5740",dataIndex:"path",key:"path",valueType:"text",tooltip:"\u8BBF\u95EE\u7684\u8DEF\u7531\u5730\u5740\uFF0C\u5982\uFF1A`user`\uFF0C\u5982\u5916\u7F51\u5730\u5740\u9700\u5185\u94FE\u8BBF\u95EE\u5219\u4EE5`http(s)://`\u5F00\u5934"}),e===h.C&&u.push({title:"\u8DEF\u7531\u53C2\u6570",dataIndex:"queryParam",key:"queryParam",valueType:"code",tooltip:'\u8BBF\u95EE\u8DEF\u7531\u7684\u9ED8\u8BA4\u4F20\u9012\u53C2\u6570\uFF0C\u5982\uFF1A{"id": 1, "name": "ry"}'}),e!==h.M&&u.push({title:"\u6743\u9650\u6807\u8BC6",dataIndex:"perms",key:"perms",valueType:"text",copyable:!0}),u):[]},[e]),je=()=>{const e=w(),u=W(),n=Ce(),{hasSelected:l,selectedMenuId:s}=j(),{data:a,loading:c,refresh:E}=Se(async()=>await De({menuId:s}),{ready:l,refreshDeps:[s]}),{mutateAsync:b}=z(Ae,{onSuccess:()=>{E(),u(),n(),k.success("\u4FDD\u5B58\u6210\u529F")}}),B=we(a==null?void 0:a.menuType),o=e.canEditSysMenu?{onSave:async(C,g)=>{const{menuType:r,orderNum:d,menuName:y,menuId:F}=g;await b({menuId:F,menuType:r,orderNum:d,menuName:y,[C]:g[C]})}}:void 0;return s===0?t(R,{description:"\u70B9\u51FB\u9009\u62E9\u5DE6\u4FA7\u83DC\u5355\u9879\u67E5\u770B\u8BE6\u60C5"}):i(te,{spinning:c,children:[t(T,{columns:[{title:"\u7C7B\u578B",dataIndex:"menuType",key:"menuType",valueType:"select",valueEnum:V,editable:!1},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",key:"createTime",valueType:"dateTime",editable:!1,hideInSearch:!0}],dataSource:a,column:v}),t(O,{}),t(T,{columns:[{title:"\u540D\u79F0",dataIndex:"menuName",key:"menuName",valueType:"text"},{title:"\u6392\u5E8F",dataIndex:"orderNum",key:"orderNum",valueType:"digit"},{title:"\u5907\u6CE8",dataIndex:"remark",key:"remark",valueType:"textarea",hideInSearch:!0}],dataSource:a,editable:o,column:v}),t(O,{}),t(T,{columns:B,dataSource:a,editable:o,column:v})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,u){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,u),u)}};const qe=e=>i(f,{children:[t(m,{color:"rgb(148 163 184)",children:e.orderNum}),(e==null?void 0:e.icon)&&t(ae,{name:e.icon,className:"mr-1"}),t(m,{color:M[e.menuType],style:{margin:"0 0 2px 0"},children:e.menuName}),(e==null?void 0:e.perms)&&t(m,{style:{margin:"0 0 2px 2px"},children:i(se,{size:"small",children:[e.perms,t("div",{onClick:u=>{u.stopPropagation()},children:t(xe.CopyToClipboard,{text:e.perms,onCopy:(u,n)=>{n&&k.success("\u590D\u5236\u6210\u529F")},children:t(re,{style:{color:"#1890ff"}})})})]})})]});globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,u){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,u),u)}};const Oe=()=>i("div",{className:"mb-2",children:["\u6807\u7B7E\u542B\u4E49\uFF1A",t(m,{color:"rgb(148 163 184)",children:"\u663E\u793A\u987A\u5E8F"}),t(m,{color:M[h.M],children:"\u76EE\u5F55"}),t(m,{color:M[h.C],children:"\u83DC\u5355"}),t(m,{color:M[h.F],children:"\u6309\u94AE"}),t(m,{children:"\u6743\u9650\u6807\u8BC6"})]});globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,u){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,u),u)}};const M={M:"blue",C:"green",F:"red"},Le=()=>{var y;const[e,u]=p.exports.useState({}),[n,l]=p.exports.useState(0),[s,a]=p.exports.useState([]),[c,E]=ge(),b=ye(),B=G(),{data:o,refetch:C}=be(e,F=>{a(F)}),{mutate:g}=Y(),r=(F,{node:{key:Q}})=>{l(Q)},d=(s==null?void 0:s.length)!==0&&(s==null?void 0:s.length)===((y=o==null?void 0:o.parentIds)==null?void 0:y.length);return p.exports.useEffect(()=>{C()},[e]),p.exports.useEffect(()=>{n>0?E({hasSelected:!0,selectedMenuId:n,selectedMenuName:o.map.get(n).menuName}):b()},[n]),i(f,{children:[t(Oe,{}),i("div",{className:"flex justify-between items-center",children:[t(I,{size:"small",className:"my-2",icon:d?t(ne,{}):t(oe,{}),onClick:()=>a(d?[]:o==null?void 0:o.parentIds),children:d?"\u5168\u90E8\u6298\u53E0":"\u5168\u90E8\u5C55\u5F00"}),i(le,{onFinish:async F=>{l(0),a([]),u(F)},children:[t(D,{name:"menuName",label:"\u83DC\u5355\u540D\u79F0"}),t(ce,{name:"status",label:"\u72B6\u6001",valueEnum:N})]})]}),t(ie,{overlay:t(de,{items:[{label:"\u65B0\u5EFA",key:"create",onClick:()=>B()},{label:"\u5728\u6839\u76EE\u5F55\u4E0B\u65B0\u5EFA",key:"create",onClick:()=>{b(),B()}},{label:"\u5220\u9664",key:"delete",danger:!0,disabled:!c.hasSelected,onClick:()=>g({menuId:c.selectedMenuId,menuName:c.selectedMenuName})}]}),trigger:["contextMenu"],children:t("div",{className:"h-[calc(100vh-310px)] overflow-auto",children:o!=null&&o.treeData.length?t(he,{blockNode:!0,selectedKeys:[n],onSelect:r,expandedKeys:s,titleRender:qe,onExpand:a,showLine:{showLeafIcon:!1},fieldNames:{title:"menuName",key:"menuId",children:"children"},treeData:o==null?void 0:o.treeData,onRightClick:({node:{key:F}})=>l(F)}):t(R,{})})})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,u){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,u),u)}};const Je=()=>t(Fe,{children:i(P,{ghost:!0,gutter:24,children:[t(P,{title:"\u83DC\u5355\u5217\u8868",colSpan:"550px",extra:t(Ne,{}),children:t(Le,{})}),t(P,{title:"\u83DC\u5355\u8BE6\u60C5",extra:t(ke,{}),children:t(je,{})})]})});export{Je as default};