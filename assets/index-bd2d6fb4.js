import{j as u,r as b,R as O,a as F,F as j}from"./jsx-runtime-5957e344.js";import{aB as se,_ as d,au as H,aA as ve,z as L,cf as me,E as fe,w as he,cg as q,p as ye,ay as G,aw as V,b$ as ge,ch as be,c7 as Te,bT as xe,b3 as Ce,ci as Ie,V as we,W as J,aC as Re,b6 as ke,ca as pe,b1 as Ne,bS as Ee,aq as Fe,aO as _e,i as Pe}from"./index-c6375c14.js";import{T as Ve,G as Ae,A as Be,J as $e,Y as E,Q as Se}from"./index-be1f0aa3.js";import{P as Q}from"./index-1048b9c3.js";import{g as De,a as je}from"./Tool-5dfbf887.js";import{u as Oe}from"./useRequest-2f96a7bc.js";import{u as Me}from"./useMutation.esm-32f9b4ae.js";import"./Skeleton-585d9afa.js";import"./utils.esm-67a58dc2.js";import"./mutation.esm-ffe24956.js";var Ke=["onTableChange","maxLength","formItemProps","recordCreatorProps","rowKey","controlled","defaultValue","onChange","editableFormRef"],Le=["record","position","creatorButtonText","newRecordType","parentKey","style"],Y=O.createContext(void 0);function Z(e){var i=e.children,y=e.record,T=e.position,r=e.newRecordType,m=e.parentKey,g=b.exports.useContext(Y);return O.cloneElement(i,d(d({},i.props),{},{onClick:function(){var f=we(J().mark(function _(p){var I,k,h,P;return J().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(I=(k=i.props).onClick)===null||I===void 0?void 0:I.call(k,p);case 2:if(P=a.sent,P!==!1){a.next=5;break}return a.abrupt("return");case 5:g==null||(h=g.current)===null||h===void 0||h.addEditRecord(y,{position:T,newRecordType:r,parentKey:m});case 6:case"end":return a.stop()}},_)}));function x(_){return f.apply(this,arguments)}return x}()}))}function W(e){var i,y,T=ve(),r=e.onTableChange,m=e.maxLength;e.formItemProps;var g=e.recordCreatorProps,f=e.rowKey;e.controlled;var x=e.defaultValue;e.onChange;var _=e.editableFormRef,p=L(e,Ke),I=me(e.value),k=b.exports.useRef(),h=b.exports.useRef();b.exports.useImperativeHandle(p.actionRef,function(){return k.current});var P=fe(function(){return e.value||x||[]},{value:e.value,onChange:e.onChange}),A=he(P,2),a=A[0],X=A[1],w=O.useMemo(function(){return typeof f=="function"?f:function(s,t){return s[f]||t}},[f]),M=function(t){if(typeof t=="number"&&!e.name){if(t>=a.length)return t;var n=a&&a[t];return w==null?void 0:w(n,t)}if((typeof t=="string"||t>=a.length)&&e.name){var l=a.findIndex(function(o,c){var v;return(w==null||(v=w(o,c))===null||v===void 0?void 0:v.toString())===(t==null?void 0:t.toString())});return l}return t};b.exports.useImperativeHandle(_,function(){var s=function(l){var o,c;if(l==null)throw new Error("rowIndex is required");var v=M(l),C=[e.name,(o=v==null?void 0:v.toString())!==null&&o!==void 0?o:""].flat(1).filter(Boolean);return(c=h.current)===null||c===void 0?void 0:c.getFieldValue(C)},t=function(){var l,o=[e.name].flat(1).filter(Boolean);if(Array.isArray(o)&&o.length===0){var c,v=(c=h.current)===null||c===void 0?void 0:c.getFieldsValue();return Array.isArray(v)?v:Object.keys(v).map(function(C){return v[C]})}return(l=h.current)===null||l===void 0?void 0:l.getFieldValue(o)};return d(d({},h.current),{},{getRowData:s,getRowsData:t,setRowData:function(l,o){var c,v,C,S;if(l==null)throw new Error("rowIndex is required");var D=M(l),ue=[e.name,(c=D==null?void 0:D.toString())!==null&&c!==void 0?c:""].flat(1).filter(Boolean),de=((v=h.current)===null||v===void 0||(C=v.getFieldsValue)===null||C===void 0?void 0:C.call(v))||{},ce=q(de,ue,d(d({},s(l)),o||{}));return(S=h.current)===null||S===void 0||S.setFieldsValue(ce),!0}})}),b.exports.useEffect(function(){e.controlled&&a.forEach(function(s,t){var n;(n=h.current)===null||n===void 0||n.setFieldsValue(ye({},w(s,t),s))},{})},[a,e.controlled]),b.exports.useEffect(function(){if(e.name){var s;h.current=e==null||(s=e.editable)===null||s===void 0?void 0:s.form}},[(i=e.editable)===null||i===void 0?void 0:i.form,e.name]);var R=g||{},ee=R.record,B=R.position,te=R.creatorButtonText,ae=R.newRecordType,ne=R.parentKey,le=R.style,ie=L(R,Le),K=B==="top",N=b.exports.useMemo(function(){return m&&m<=(a==null?void 0:a.length)?!1:g!==!1&&u(Z,{record:G(ee,a==null?void 0:a.length,a)||{},position:B,parentKey:G(ne,a==null?void 0:a.length,a),newRecordType:ae,children:u(V,d(d({type:"dashed",style:d({display:"block",margin:"10px 0",width:"100%"},le),icon:u(ge,{})},ie),{},{children:te||T.getMessage("editableTable.action.add","添加一行数据")}))})},[g,m,a==null?void 0:a.length]),re=b.exports.useMemo(function(){return N?K?{components:{header:{wrapper:function(t){var n,l=t.className,o=t.children;return F("thead",{className:l,children:[o,F("tr",{style:{position:"relative"},children:[u("td",{colSpan:0,style:{visibility:"hidden"},children:N}),u("td",{style:{position:"absolute",left:0,width:"100%"},colSpan:(n=p.columns)===null||n===void 0?void 0:n.length,children:N})]})]})}}}}:{tableViewRender:function(t,n){var l,o;return F(j,{children:[(l=(o=e.tableViewRender)===null||o===void 0?void 0:o.call(e,t,n))!==null&&l!==void 0?l:n,N]})}}:{}},[K,N]),$=d({},e.editable),oe=be(function(s,t){var n,l,o;if((n=e.editable)===null||n===void 0||(l=n.onValuesChange)===null||l===void 0||l.call(n,s,t),(o=e.onValuesChange)===null||o===void 0||o.call(e,t,s),e.controlled){var c;e==null||(c=e.onChange)===null||c===void 0||c.call(e,t)}});return(e!=null&&e.onValuesChange||!((y=e.editable)===null||y===void 0)&&y.onValuesChange||e.controlled&&(e!=null&&e.onChange))&&($.onValuesChange=oe),F(j,{children:[u(Y.Provider,{value:k,children:u(Te,d(d(d({search:!1,options:!1,pagination:!1,rowKey:f,revalidateOnFocus:!1},p),re),{},{tableLayout:"fixed",actionRef:k,onChange:r,editable:d(d({},$),{},{formProps:d({formRef:h},$.formProps)}),dataSource:a,onDataSourceChange:function(t){if(X(t),e.name&&B==="top"){var n,l=q({},[e.name].flat(1).filter(Boolean),t);(n=h.current)===null||n===void 0||n.setFieldsValue(l)}}}))}),e.name?u(xe,{name:[e.name],children:function(t){var n,l,o=Ce(t,[e.name].flat(1)),c=o==null?void 0:o.find(function(v,C){return!Ie(v,I==null?void 0:I[C])});return c&&I&&(e==null||(n=e.editable)===null||n===void 0||(l=n.onValuesChange)===null||l===void 0||l.call(n,c,o)),null}}):null]})}function U(e){var i=se.useFormInstance();return e.name?u(H.Item,d(d({style:{maxWidth:"100%"}},e==null?void 0:e.formItemProps),{},{name:e.name,children:u(W,d(d({},e),{},{editable:d(d({},e.editable),{},{form:i})}))})):u(W,d({},e))}U.RecordCreator=Z;globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,i){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,i),i)}};const qe=({dataSource:e,handleEdit:i})=>{const y={onSave:async(T,r)=>{const m=T;await i({[m]:r[m]})}};return F(j,{children:[u(Q,{dataSource:e,columns:[{title:"表名称",dataIndex:"tableName",key:"tableName",valueType:"text"},{title:"表描述",dataIndex:"tableComment",key:"tableComment",valueType:"text"},{title:"实体名称",dataIndex:"className",key:"className",valueType:"text",hideInSearch:!0},{title:"作者",dataIndex:"functionAuthor",key:"functionAuthor",valueType:"text"},{title:"备注",dataIndex:"remark",key:"remark",valueType:"textarea",hideInSearch:!0}],editable:y}),u(Re,{}),u(Q,{columns:[{title:"生成模版",dataIndex:"tplCategory",key:"tplCategory",valueType:"select",valueEnum:Ve},{title:"生成包路径",dataIndex:"packageName",key:"packageName",valueType:"text"},{title:"生成模块名",dataIndex:"moduleName",key:"moduleName",valueType:"text"},{title:"生成业务名",dataIndex:"businessName",key:"businessName",valueType:"text"},{title:"生成功能名",dataIndex:"functionName",key:"functionName",valueType:"text"},{title:"生成代码方式",dataIndex:"genType",key:"genType",valueType:"select",valueEnum:Ae},...(e==null?void 0:e.genType)===Be.ZIP?[]:[{title:"自定义路径",dataIndex:"genPath",key:"genPath",valueType:"text"}]],dataSource:e,editable:y})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,i){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,i),i)}};const Ge=[{title:"序号",dataIndex:"sort",valueType:"indexBorder",editable:!1},{title:"字段名称",dataIndex:"columnName",key:"columnName",valueType:"text",editable:!1,ellipsis:!0},{title:"字段描述",dataIndex:"columnComment",key:"columnComment",valueType:"text"},{title:"物理类型",dataIndex:"columnType",key:"columnType",valueType:"text",editable:!1,ellipsis:!0},{title:"JAVA类型",dataIndex:"javaType",key:"javaType",valueType:"select",valueEnum:$e},{title:"JAVA属性",dataIndex:"javaField",key:"javaField",valueType:"text"},{title:"插入",dataIndex:"isInsert",key:"isInsert",valueType:"radioButton",valueEnum:E},{title:"编辑",dataIndex:"isEdit",key:"isEdit",valueType:"radioButton",valueEnum:E},{title:"列表",dataIndex:"isList",key:"isList",valueType:"radioButton",valueEnum:E},{title:"查询",dataIndex:"isQuery",key:"isQuery",valueType:"radioButton",valueEnum:E},{title:"必填",dataIndex:"isRequired",key:"isRequired",valueType:"radioButton",valueEnum:E},{title:"查询方式",dataIndex:"queryType",key:"queryType",valueType:"select",valueEnum:Se}],Je=({dataSource:e,handleEdit:i,loading:y=!1})=>{const[T]=H.useForm(),[r,m]=b.exports.useState([]),g=(r==null?void 0:r.length)>0;return u(U,{toolbar:{actions:g?[u(V,{onClick:()=>m([]),icon:u(ke,{}),children:"取消编辑"},"cancelEdit"),u(V,{type:"primary",loading:y,icon:u(pe,{}),onClick:async()=>{const f=await T.validateFields();await i({columns:Object.keys(f).map(x=>({...f[x],columnId:Number(x)}))}),m([])},children:"保存"},"edit")]:[u(V,{icon:u(Ne,{}),type:"primary",onClick:()=>{m(e.map(f=>f.columnId.toString()))},children:"编辑"},"edit")]},rowKey:"columnId",ghost:!0,size:"small",scroll:{x:"max-content"},columns:Ge,value:e,recordCreatorProps:!1,editable:{form:T,editableKeys:r}})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,i){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,i),i)}};const z={BASE_INFO:"基本信息",FIELD_INFO:"字段信息"},at=()=>{const e=Ee(),i=Number((e==null?void 0:e.tableId)??"0"),[y,T]=b.exports.useState("BASE_INFO"),{data:r,refresh:m}=Oe(()=>De({tableId:i}),{ready:i>0,refreshDeps:[i]}),{mutateAsync:g,isLoading:f}=Me(async x=>{await je({tableId:i,businessName:r.info.businessName,functionName:r.info.functionName,className:r.info.className,functionAuthor:r.info.functionAuthor,moduleName:r.info.moduleName,packageName:r.info.packageName,tableComment:r.info.tableComment,tableName:r.info.tableName,columns:r.rows,...x})},{onSuccess:()=>{m(),Pe.success("保存成功")}});return u(Fe,{children:u(_e,{tabs:{items:[{label:z.BASE_INFO,key:"BASE_INFO",children:u(qe,{dataSource:r==null?void 0:r.info,handleEdit:g})},{label:z.FIELD_INFO,key:"FIELD_INFO",children:u(Je,{dataSource:r==null?void 0:r.rows,handleEdit:g,loading:f})}],activeKey:y,onChange:x=>{T(x)}}})})};export{at as default};
