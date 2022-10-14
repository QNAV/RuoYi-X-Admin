import{aO as $,W as z,j as t,aP as H,_ as K,r as p,e as i,ak as O,aj as w,aK as Z,am as _,$ as J,aH as f,aW as U,ba as X,F as S,a8 as P,a2 as D,bb as h,aQ as V,aZ as ee,aS as j,bc as k,q as x,al as ue,a$ as L,b0 as te,aB as y,a0 as q,b6 as F,bd as ae,as as se,be as re,bf as oe,b1 as ne,b2 as ce,b3 as le,b4 as ie,bg as de,bh as he,b5 as me,O as pe,aF as N}from"./index.43a5fefc.js";import{d as I}from"./index.4cad56ec.js";import{useShowCreateModal as R,useHideCreateModal as Fe,useValueCreateModal as Ce,useValueSelectedMenuData as v,useQueryMenuOptions as Ee,useReFetchMenuList as G,useDeleteMenu as W,useReFetchMenuOptions as be,useStateSelectedMenuData as ge,useResetSelectedMenuData as Me,useQueryMenuList as Ae}from"./index.39007e29.js";import{S as De,a as fe,b as Be}from"./SysMenuService.0f4bb10b.js";import{P as Se}from"./index.ff73ac32.js";import{P as Pe}from"./index.29d9572c.js";import{u as Q}from"./useMutation.esm.3b5771e3.js";import{q as ye,a as Ne,r as Te,d as we,C as xe,c as Ie,s as ve,t as je,u as ke,v as qe,w as Oe,x as Ve}from"./index.408b5ebe.js";import{u as Le}from"./useRequest.9b1e50c6.js";import"./useQuery.esm.ffab827d.js";import"./utils.esm.79e318f9.js";import"./utils.a6bcce70.js";var Re=["fieldProps","request","params","proFieldProps"],Ge=function(u,n){var c=u.fieldProps,s=u.request,a=u.params,l=u.proFieldProps,C=z(u,Re);return t(H,K({valueType:"cascader",fieldProps:c,ref:n,request:s,params:a,filedConfig:{customLightMode:!0},proFieldProps:l},C))};const We=$.forwardRef(Ge);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,u){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,u),u)}};const Qe=(e,u)=>{const n=[0];if(u===0)return n;const c=s=>{const a=e.get(s);!a||((a==null?void 0:a.parentId)!==void 0&&c(a.parentId),a.menuType!==h.F&&n.push(s))};return c(u),n},Ye=()=>{var E,b;const e=I(),u=p.exports.useRef(),n=R(),c=Fe(),s=Ce(),{selectedMenuId:a}=v(),{data:l,refetch:C}=Ee(),M=G(),{isLoading:A,mutate:o}=Q(async()=>{var d,g;const r=await((g=(d=u.current)==null?void 0:d.validateFieldsReturnFormatValue)==null?void 0:g.call(d));!r||await De(r)},{onSuccess:async()=>{var r;await Promise.all([C(),M()]),c(),(r=u==null?void 0:u.current)==null||r.resetFields(),x.success("\u65B0\u5EFA\u6210\u529F")}});return p.exports.useEffect(()=>{var r;s&&(l==null?void 0:l.map)&&((r=u==null?void 0:u.current)==null?void 0:r.setFieldsValue)&&u.current.setFieldsValue({parentId:Qe(l.map,a)})},[s,(E=u==null?void 0:u.current)==null?void 0:E.setFieldsValue]),i(O,{accessible:e.canAddSysMenu,children:[t(w,{type:"primary",onClick:n,icon:t(Z,{}),children:"\u65B0\u5EFA"}),t(_,{open:s,onCancel:c,title:"\u65B0\u5EFA\u83DC\u5355",width:515,okText:"\u63D0\u4EA4",onOk:()=>o(),okButtonProps:{loading:A},children:i(J,{submitter:!1,formRef:u,children:[t(We,{name:"parentId",label:"\u7236\u7EA7\u83DC\u5355",fieldProps:{options:(b=l==null?void 0:l.options)!=null?b:[],fieldNames:{label:"menuName",value:"menuId",children:"children"},changeOnSelect:!0},rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u7236\u7EA7\u83DC\u5355"}],transform:r=>({parentId:r[r.length-1]})}),t(f.Group,{name:"menuType",label:"\u83DC\u5355\u7C7B\u578B",valueEnum:U,rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u83DC\u5355\u7C7B\u578B"}]}),t(X,{name:["menuType"],children:({menuType:r})=>r?i(S,{children:[i(P,{children:[t(D,{name:"menuName",label:"\u83DC\u5355\u540D\u79F0",width:"sm",rules:[{required:!0}]}),t(Se,{name:"orderNum",label:"\u663E\u793A\u6392\u5E8F",tooltip:"\u9ED8\u8BA4\u6570\u503C\u4E3A0\uFF0C\u6570\u503C\u8D8A\u5927\u6392\u5E8F\u8D8A\u9760\u540E\uFF0C\u6570\u503C\u76F8\u7B49\u6309\u7167\u521B\u5EFA\u65F6\u95F4\u5148\u540E\u6392\u5E8F",rules:[{required:!0}],width:"sm",initialValue:0})]}),r!==h.F&&i(S,{children:[i(P,{children:[t(f.Group,{tooltip:"\u9009\u62E9\u505C\u7528\u5219\u8DEF\u7531\u5C06\u4E0D\u4F1A\u51FA\u73B0\u5728\u4FA7\u8FB9\u680F\uFF0C\u4E5F\u4E0D\u80FD\u88AB\u8BBF\u95EE",name:"status",label:"\u83DC\u5355\u72B6\u6001",valueEnum:V,required:!0,initialValue:ee.ENABLE}),t(f.Group,{name:"visible",label:"\u83DC\u5355\u662F\u5426\u663E\u793A",valueEnum:j,required:!0,initialValue:k.YES,tooltip:"\u9009\u62E9\u5426\u5219\u8DEF\u7531\u5C06\u4E0D\u4F1A\u51FA\u73B0\u5728\u4FA7\u8FB9\u680F\uFF0C\u4F46\u4ECD\u7136\u53EF\u4EE5\u8BBF\u95EE"}),t(f.Group,{name:"isFrame",label:"\u662F\u5426\u5916\u94FE",valueEnum:j,required:!0,initialValue:k.NO,tooltip:"\u9009\u62E9\u662F\u5916\u94FE\u5219\u8DEF\u7531\u5730\u5740\u9700\u8981\u4EE5`http(s)://`\u5F00\u5934"})]}),i(P,{children:[t(D,{name:"icon",label:"\u83DC\u5355\u56FE\u6807",width:"sm",tooltip:"https://ant.design/components/icon-cn/"}),t(D,{width:"sm",name:"path",label:"\u8DEF\u7531\u5730\u5740",tooltip:"\u8BBF\u95EE\u7684\u8DEF\u7531\u5730\u5740\uFF0C\u5982\uFF1A`user`\uFF0C\u5982\u5916\u7F51\u5730\u5740\u9700\u5185\u94FE\u8BBF\u95EE\u5219\u4EE5`http(s)://`\u5F00\u5934",rules:[{required:!0}]})]})]}),r===h.C&&t(D,{name:"queryParam",label:"\u8DEF\u7531\u53C2\u6570",tooltip:'\u8BBF\u95EE\u8DEF\u7531\u7684\u9ED8\u8BA4\u4F20\u9012\u53C2\u6570\uFF0C\u5982\uFF1A{"id": 1, "name": "ry"}'}),r!==h.M&&t(D,{name:"perms",label:"\u6743\u9650\u6807\u8BC6"})]}):null}),t(Pe,{name:"remark",label:"\u5907\u6CE8"})]})})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,u){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,u),u)}};const $e=()=>{const e=I(),{hasSelected:u,selectedMenuId:n,selectedMenuName:c}=v(),{mutate:s,isLoading:a}=W();return t(O,{accessible:u&&e.canRemoveSysMenu,children:t(w,{icon:t(ue,{}),loading:a,danger:!0,onClick:()=>s({menuId:n,menuName:c}),children:"\u5220\u9664"})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,u){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,u),u)}};const T={xs:1,sm:1,md:1,lg:1,xl:2},ze=e=>p.exports.useMemo(()=>{const u=[];return e?(e!==h.F&&u.push(Ie,ve,je,ke,qe),e===h.C&&u.push(Oe),e!==h.M&&u.push(Ve),u):[]},[e]),He=()=>{const e=I(),u=G(),n=be(),{hasSelected:c,selectedMenuId:s}=v(),{data:a,loading:l,refresh:C}=Le(async()=>await fe({menuId:s}),{ready:c,refreshDeps:[s]}),{mutateAsync:M}=Q(Be,{onSuccess:()=>{C(),u(),n(),x.success("\u4FDD\u5B58\u6210\u529F")}}),A=ze(a==null?void 0:a.menuType),o=e.canEditSysMenu?{onSave:async(E,b)=>{const{menuType:r,orderNum:d,menuName:g,menuId:m}=b;await M({menuId:m,menuType:r,orderNum:d,menuName:g,[E]:b[E]})}}:void 0;return s===0?t(L,{description:"\u70B9\u51FB\u9009\u62E9\u5DE6\u4FA7\u83DC\u5355\u9879\u67E5\u770B\u8BE6\u60C5"}):i(te,{spinning:l,children:[t(y,{columns:[ye,Ne],dataSource:a,column:T}),t(q,{}),t(y,{columns:[Te,we,xe],dataSource:a,editable:o,column:T}),t(q,{}),t(y,{columns:A,dataSource:a,editable:o,column:T})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,u){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,u),u)}};const Ke=e=>i(S,{children:[t(F,{color:"rgb(148 163 184)",children:e.orderNum}),(e==null?void 0:e.icon)&&t(ae,{name:e.icon,className:"mr-1"}),t(F,{color:B[e.menuType],style:{margin:"0 0 2px 0"},children:e.menuName}),(e==null?void 0:e.perms)&&t(F,{style:{margin:"0 0 2px 2px"},children:i(se,{size:"small",children:[e.perms,t(re,{style:{color:"#1890ff"},onClick:u=>{oe(e.perms),x.success("\u590D\u5236\u6210\u529F"),u.stopPropagation()}})]})})]});globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,u){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,u),u)}};const Ze=()=>i("div",{className:"mb-2",children:["\u6807\u7B7E\u542B\u4E49\uFF1A",t(F,{color:"rgb(148 163 184)",children:"\u663E\u793A\u987A\u5E8F"}),t(F,{color:B[h.M],children:"\u76EE\u5F55"}),t(F,{color:B[h.C],children:"\u83DC\u5355"}),t(F,{color:B[h.F],children:"\u6309\u94AE"}),t(F,{children:"\u6743\u9650\u6807\u8BC6"})]});globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,u){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,u),u)}};const B={M:"blue",C:"green",F:"red"},_e=()=>{var g;const[e,u]=p.exports.useState({}),[n,c]=p.exports.useState(0),[s,a]=p.exports.useState([]),[l,C]=ge(),M=Me(),A=R(),{data:o,refetch:E}=Ae(e,m=>{a(m)}),{mutate:b}=W(),r=(m,{node:{key:Y}})=>{c(Y)},d=(s==null?void 0:s.length)!==0&&(s==null?void 0:s.length)===((g=o==null?void 0:o.parentIds)==null?void 0:g.length);return p.exports.useEffect(()=>{E()},[e]),p.exports.useEffect(()=>{n>0?C({hasSelected:!0,selectedMenuId:n,selectedMenuName:o.map.get(n).menuName}):M()},[n]),i(S,{children:[t(Ze,{}),i("div",{className:"flex justify-between items-center",children:[t(w,{size:"small",className:"my-2",icon:d?t(ne,{}):t(ce,{}),onClick:()=>a(d?[]:o==null?void 0:o.parentIds),children:d?"\u5168\u90E8\u6298\u53E0":"\u5168\u90E8\u5C55\u5F00"}),i(le,{onFinish:async m=>{c(0),a([]),u(m)},children:[t(D,{name:"menuName",label:"\u83DC\u5355\u540D\u79F0"}),t(ie,{name:"status",label:"\u72B6\u6001",valueEnum:V})]})]}),t(de,{overlay:t(he,{items:[{label:"\u65B0\u5EFA",key:"create",onClick:()=>A()},{label:"\u5728\u6839\u76EE\u5F55\u4E0B\u65B0\u5EFA",key:"create",onClick:()=>{M(),A()}},{label:"\u5220\u9664",key:"delete",danger:!0,disabled:!l.hasSelected,onClick:()=>b({menuId:l.selectedMenuId,menuName:l.selectedMenuName})}]}),trigger:["contextMenu"],children:t("div",{className:"h-[calc(100vh-310px)] overflow-auto",children:o!=null&&o.treeData.length?t(me,{blockNode:!0,selectedKeys:[n],onSelect:r,expandedKeys:s,titleRender:Ke,onExpand:a,showLine:{showLeafIcon:!1},fieldNames:{title:"menuName",key:"menuId",children:"children"},treeData:o==null?void 0:o.treeData,onRightClick:({node:{key:m}})=>c(m)}):t(L,{})})})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,u){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,u),u)}};const lu=()=>t(pe,{children:i(N,{ghost:!0,gutter:24,children:[t(N,{title:"\u83DC\u5355\u5217\u8868",colSpan:"550px",extra:t(Ye,{}),children:t(_e,{})}),t(N,{title:"\u83DC\u5355\u8BE6\u60C5",extra:t($e,{}),children:t(He,{})})]})});export{lu as default};
