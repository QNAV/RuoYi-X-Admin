import{a8 as se,l as re,j as e,a_ as ae,a as ne,O as $,cQ as z,Q as oe,X as H,Y as le,cR as ie,cL as ce,aG as g,r as m,g as c,aF as k,cS as de,b3 as Fe,aZ as me,F as M,b0 as I,cA as B,cs as pe,cT as Ee,ad as Ce,aR as G,bE as he,cU as ye,D as Be,cV as p,cY as De,E as U,c4 as Ae}from"./index.75c82e1c.js";import{B as fe}from"./index.385c9777.js";import{u as T,A as W,P as f}from"./useAccess.5b897a94.js";import{u as N,M as F,b as X,E as w,a as be,Y as S,c as j}from"./useMutation.4df11303.js";import{S as Me,a as Se,b as ge,c as Ie,d as Pe}from"./SysMenuService.18929f82.js";import{p as xe,s as Q,g as ve}from"./tree.93c11a63.js";import{M as Z,L as ke,T as Te}from"./Tree.ebea3802.js";import{P as Ne}from"./index.5f642faf.js";import{P as we}from"./index.4d3f619a.js";import{E as J}from"./index.c7adeb32.js";import{P}from"./index.bceded5a.js";import{c as qe,P as x}from"./index.f08e26da.js";import{M as Le}from"./RouteContext.ac65816b.js";import{P as Oe}from"./index.fe0a19cc.js";import"./index.798573fb.js";import"./index.8a7390e1.js";/* empty css              */var Ve=["fieldProps","request","params","proFieldProps"],Re=function(u,s){var r=u.fieldProps,a=u.request,i=u.params,o=u.proFieldProps,E=re(u,Ve);return e(ae,ne({valueType:"cascader",fieldProps:r,ref:s,request:a,params:i,filedConfig:{customLightMode:!0},proFieldProps:o},E))};const _e=se.forwardRef(Re),q="systemMenu",Ge=t=>{const u=s=>s.filter(r=>r.menuType!==F.F).map(({menuId:r,menuName:a,children:i})=>({menuId:r,menuName:a,children:i?u(i):[]}));return[{menuId:0,menuName:"\u6839\u76EE\u5F55",children:t?u(t):[]}]},L=$({key:`${q}SelectedMenuId`,default:0}),K=()=>z(L),je=()=>oe(L),O=()=>H(L),V=$({key:`${q}VisibleCreateModal`,default:!1}),Qe=()=>z(V),ee=()=>le(V),Ye=()=>H(V),ue=[q,"list"],R=(t={})=>ie(ue,async()=>{const u=await Me(t),s=xe(u,{id:"menuId",pId:"parentId",rootPId:null});return{options:Ge(Q(s)),treeData:Q(s),map:u.reduce((r,a)=>({...r,[a.menuId]:a}),{}),parentIds:ve(u)}}),te=()=>{const t=ce(),u=K();return N(async s=>{Z.confirm({title:"\u5220\u9664\u83DC\u5355",content:"\u786E\u5B9A\u5220\u9664\u8BE5\u83DC\u5355\u5417\uFF1F",onOk:async()=>{await Se({menuId:s}),await t.invalidateQueries(ue),u(),g.success("\u5220\u9664\u6210\u529F")}})})},Y=(t,u)=>{const s=[0];if(u===0)return s;const r=a=>{var i;!(t!=null&&t[a])||((i=t==null?void 0:t[a])!=null&&i.parentId&&r(t[a].parentId.toString()),t[a].menuType!==F.F&&s.push(Number(a)))};return r(u.toString()),s},$e=()=>{var l;const t=T(),u=m.exports.useRef(),s=ee(),r=Qe(),a=Ye(),i=O(),{data:o,refetch:E}=R(),{isLoading:C,mutate:h}=N(async()=>{var d,y;const n=await((y=(d=u.current)==null?void 0:d.validateFieldsReturnFormatValue)==null?void 0:y.call(d));!n||await ge(n)},{onSuccess:()=>{var n;E(),r(),(n=u==null?void 0:u.current)==null||n.resetFields(),g.success("\u65B0\u5EFA\u6210\u529F")}});return m.exports.useEffect(()=>{var n,d;((n=u==null?void 0:u.current)==null?void 0:n.setFieldsValue)&&(o==null?void 0:o.map)&&((d=u==null?void 0:u.current)==null||d.setFieldsValue({parentId:Y(o.map,i)}))},[i,o==null?void 0:o.map,u==null?void 0:u.current]),c(W,{accessible:t.canAddSysMenu,children:[e(k,{type:"primary",onClick:()=>s(!0),icon:e(de,{}),children:"\u65B0\u5EFA"}),e(Z,{open:a,onCancel:r,title:"\u65B0\u5EFA\u83DC\u5355",width:515,okText:"\u63D0\u4EA4",onOk:()=>h(),okButtonProps:{loading:C},children:c(Fe,{submitter:!1,formRef:u,children:[e(_e,{name:"parentId",label:"\u7236\u7EA7\u83DC\u5355",initialValue:Y((l=o==null?void 0:o.map)!=null?l:{},i),fieldProps:{options:o==null?void 0:o.options,fieldNames:{label:"menuName",value:"menuId",children:"children"},changeOnSelect:!0},rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u7236\u7EA7\u83DC\u5355"}],transform:n=>({parentId:n[n.length-1]})}),e(f.Group,{name:"menuType",label:"\u83DC\u5355\u7C7B\u578B",valueEnum:X,rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u83DC\u5355\u7C7B\u578B"}]}),e(me,{name:["menuType"],children:({menuType:n})=>n?c(M,{children:[c(I,{children:[e(B,{name:"menuName",label:"\u83DC\u5355\u540D\u79F0",width:"sm",rules:[{required:!0}]}),e(we,{name:"orderNum",label:"\u663E\u793A\u6392\u5E8F",tooltip:"\u9ED8\u8BA4\u6570\u503C\u4E3A0\uFF0C\u6570\u503C\u8D8A\u5927\u6392\u5E8F\u8D8A\u9760\u540E\uFF0C\u6570\u503C\u76F8\u7B49\u6309\u7167\u521B\u5EFA\u65F6\u95F4\u5148\u540E\u6392\u5E8F",rules:[{required:!0}],width:"sm",initialValue:0})]}),n!==F.F&&c(M,{children:[c(I,{children:[e(f.Group,{tooltip:"\u9009\u62E9\u505C\u7528\u5219\u8DEF\u7531\u5C06\u4E0D\u4F1A\u51FA\u73B0\u5728\u4FA7\u8FB9\u680F\uFF0C\u4E5F\u4E0D\u80FD\u88AB\u8BBF\u95EE",name:"status",label:"\u83DC\u5355\u72B6\u6001",valueEnum:w,required:!0,initialValue:be.ENABLE}),e(f.Group,{name:"visible",label:"\u83DC\u5355\u662F\u5426\u663E\u793A",valueEnum:S,required:!0,initialValue:j.YES,tooltip:"\u9009\u62E9\u5426\u5219\u8DEF\u7531\u5C06\u4E0D\u4F1A\u51FA\u73B0\u5728\u4FA7\u8FB9\u680F\uFF0C\u4F46\u4ECD\u7136\u53EF\u4EE5\u8BBF\u95EE"}),e(f.Group,{name:"isFrame",label:"\u662F\u5426\u5916\u94FE",valueEnum:S,required:!0,initialValue:j.NO,tooltip:"\u9009\u62E9\u662F\u5916\u94FE\u5219\u8DEF\u7531\u5730\u5740\u9700\u8981\u4EE5`http(s)://`\u5F00\u5934"})]}),c(I,{children:[e(B,{name:"icon",label:"\u83DC\u5355\u56FE\u6807",width:"sm",tooltip:"https://ant.design/components/icon-cn/"}),e(B,{width:"sm",name:"path",label:"\u8DEF\u7531\u5730\u5740",tooltip:"\u8BBF\u95EE\u7684\u8DEF\u7531\u5730\u5740\uFF0C\u5982\uFF1A`user`\uFF0C\u5982\u5916\u7F51\u5730\u5740\u9700\u5185\u94FE\u8BBF\u95EE\u5219\u4EE5`http(s)://`\u5F00\u5934",rules:[{required:!0}]})]})]}),n===F.C&&e(B,{name:"queryParam",label:"\u8DEF\u7531\u53C2\u6570",tooltip:'\u8BBF\u95EE\u8DEF\u7531\u7684\u9ED8\u8BA4\u4F20\u9012\u53C2\u6570\uFF0C\u5982\uFF1A{"id": 1, "name": "ry"}'}),n!==F.M&&e(B,{name:"perms",label:"\u6743\u9650\u6807\u8BC6"})]}):null}),e(Ne,{name:"remark",label:"\u5907\u6CE8"})]})})]})},ze=()=>{const t=T(),u=O(),{mutate:s,isLoading:r}=te();return e(W,{accessible:t.canRemoveSysMenu,children:e(k,{icon:e(pe,{}),loading:r,disabled:u===0,danger:!0,onClick:()=>s(u),children:"\u5220\u9664"})})},v={xs:1,sm:1,md:1,lg:1,xl:2},He=t=>m.exports.useMemo(()=>{const u=[];return t?(t!==F.F&&u.push({title:"\u72B6\u6001",dataIndex:"status",key:"status",valueType:"radio",valueEnum:w},{title:"\u662F\u5426\u663E\u793A",dataIndex:"visible",key:"visible",valueType:"radio",valueEnum:S,tooltip:"\u9009\u62E9\u5426\u5219\u8DEF\u7531\u5C06\u4E0D\u4F1A\u51FA\u73B0\u5728\u4FA7\u8FB9\u680F\uFF0C\u4F46\u4ECD\u7136\u53EF\u4EE5\u8BBF\u95EE"},{title:"\u662F\u5426\u5916\u94FE",dataIndex:"isFrame",key:"isFrame",valueType:"radio",valueEnum:S,tooltip:"\u9009\u62E9\u662F\u5916\u94FE\u5219\u8DEF\u7531\u5730\u5740\u9700\u8981\u4EE5`http(s)://`\u5F00\u5934"},{title:"\u56FE\u6807",dataIndex:"icon",key:"icon",valueType:"text",tooltip:"https://ant.design/components/icon-cn/"},{title:"\u8DEF\u7531\u5730\u5740",dataIndex:"path",key:"path",valueType:"text",tooltip:"\u8BBF\u95EE\u7684\u8DEF\u7531\u5730\u5740\uFF0C\u5982\uFF1A`user`\uFF0C\u5982\u5916\u7F51\u5730\u5740\u9700\u5185\u94FE\u8BBF\u95EE\u5219\u4EE5`http(s)://`\u5F00\u5934"},{title:"\u8DEF\u7531\u53C2\u6570",dataIndex:"queryParam",key:"queryParam",valueType:"code",tooltip:'\u8BBF\u95EE\u8DEF\u7531\u7684\u9ED8\u8BA4\u4F20\u9012\u53C2\u6570\uFF0C\u5982\uFF1A{"id": 1, "name": "ry"}'}),t!==F.M&&u.push({title:"\u6743\u9650\u6807\u8BC6",dataIndex:"perms",key:"perms",valueType:"text",copyable:!0}),u):[]},[t]),Ue=()=>{const t=T(),{refetch:u}=R(),s=O(),{data:r,loading:a,refresh:i}=Ee(async()=>await Ie({menuId:s}),{ready:s>0,refreshDeps:[s]}),{mutateAsync:o}=N(Pe,{onSuccess:()=>{i(),u(),g.success("\u4FDD\u5B58\u6210\u529F")}}),E=He(r==null?void 0:r.menuType),C=t.canEditSysMenu?{onSave:async(h,l)=>{const{menuType:n,orderNum:d,menuName:y,menuId:D}=l;await o({menuId:D,menuType:n,orderNum:d,menuName:y,[h]:l[h]})}}:void 0;return s===0?e(J,{description:"\u70B9\u51FB\u9009\u62E9\u5DE6\u4FA7\u83DC\u5355\u9879\u67E5\u770B\u8BE6\u60C5"}):c(Ce,{spinning:a,children:[e(P,{columns:[{title:"\u7C7B\u578B",dataIndex:"menuType",key:"menuType",valueType:"select",valueEnum:X,editable:!1},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",key:"createTime",valueType:"dateTime",editable:!1}],dataSource:r,column:v}),e(G,{}),e(P,{columns:[{title:"\u540D\u79F0",dataIndex:"menuName",key:"menuName",valueType:"text"},{title:"\u663E\u793A\u987A\u5E8F",dataIndex:"orderNum",key:"orderNum",valueType:"digit",tooltip:"\u9ED8\u8BA4\u6570\u503C\u4E3A0\uFF0C\u6570\u503C\u8D8A\u5927\u6392\u5E8F\u8D8A\u9760\u540E\uFF0C\u6570\u503C\u76F8\u7B49\u6309\u7167\u521B\u5EFA\u65F6\u95F4\u5148\u540E\u6392\u5E8F"},{title:"\u5907\u6CE8",dataIndex:"remark",key:"remark",valueType:"textarea",hideInSearch:!0}],dataSource:r,editable:C,column:v}),e(G,{}),e(P,{columns:E,dataSource:r,editable:C,column:v})]})},b={M:"blue",C:"green",F:"red"},We=t=>c(M,{children:[e(p,{color:"rgb(148 163 184)",children:t.orderNum}),(t==null?void 0:t.icon)&&e(De,{name:t.icon,className:"mr-1"}),e(p,{color:b[t.menuType],style:{margin:"0 0 2px 0"},children:t.menuName}),(t==null?void 0:t.perms)&&e(p,{style:{margin:"0 0 2px 2px"},children:c(U,{size:"small",children:[t.perms,e(Ae,{style:{color:"#1890ff"},onClick:u=>{qe(t.perms),g.success("\u590D\u5236\u6210\u529F"),u.stopPropagation()}})]})})]}),Xe=()=>c("div",{className:"mb-2",children:["\u6807\u7B7E\u542B\u4E49\uFF1A",e(p,{color:"rgb(148 163 184)",children:"\u663E\u793A\u987A\u5E8F"}),e(p,{color:b[F.M],children:"\u76EE\u5F55"}),e(p,{color:b[F.C],children:"\u83DC\u5355"}),e(p,{color:b[F.F],children:"\u6309\u94AE"}),e(p,{children:"\u6743\u9650\u6807\u8BC6"})]}),Ze=()=>{var _;const[t,u]=m.exports.useState({}),[s,r]=m.exports.useState([]),[a,i]=m.exports.useState([]),[o,E]=je(),C=K(),h=ee(),{data:l,refetch:n}=R(t),{mutate:d}=te(),y=A=>{r(A)},D=(a==null?void 0:a.length)!==0&&(a==null?void 0:a.length)===((_=l==null?void 0:l.parentIds)==null?void 0:_.length);return m.exports.useEffect(()=>{n()},[t]),m.exports.useEffect(()=>{s!=null&&s[0]?E(s[0]):C()},[s]),c(M,{children:[e(Xe,{}),c("div",{className:"flex justify-between items-center",children:[e(k,{size:"small",className:"my-2",icon:D?e(he,{}):e(ye,{}),onClick:()=>i(D?[]:l==null?void 0:l.parentIds),children:D?"\u5168\u90E8\u6298\u53E0":"\u5168\u90E8\u5C55\u5F00"}),c(ke,{onFinish:async A=>{r([]),i([]),u(A)},children:[e(B,{name:"menuName",label:"\u83DC\u5355\u540D\u79F0"}),e(Oe,{name:"status",label:"\u72B6\u6001",valueEnum:w})]})]}),e(Be,{overlay:e(Le,{items:[{label:"\u65B0\u5EFA",key:"create",onClick:()=>h(!0)},{label:"\u5728\u6839\u76EE\u5F55\u4E0B\u65B0\u5EFA",key:"create",onClick:()=>{C(),h(!0)}},{label:"\u5220\u9664",key:"delete",danger:!0,disabled:s.length===0,onClick:()=>d(o)}]}),trigger:["contextMenu"],children:e("div",{className:"max-h-[60vh] overflow-auto",children:l!=null&&l.treeData.length?e(Te,{blockNode:!0,selectedKeys:s,onSelect:y,expandedKeys:a,titleRender:We,onExpand:i,showLine:{showLeafIcon:!1},fieldNames:{title:"menuName",key:"menuId",children:"children"},treeData:l==null?void 0:l.treeData,onRightClick:A=>r([A.node.key])}):e(J,{})})})]})},Eu=()=>e(fe,{children:c(x,{ghost:!0,gutter:24,children:[e(x,{title:"\u83DC\u5355\u5217\u8868",colSpan:"550px",extra:c(U,{children:[e($e,{}),e(ze,{})]}),children:e(Ze,{})}),e(x,{title:"\u83DC\u5355\u8BE6\u60C5",children:e(Ue,{})})]})});export{Eu as default};
