import{o as se,j as u,d,F as W,r as T,e as j,l as ce,a as M,d1 as ve,cY as me,_ as fe,d2 as L,k as ye,i as q,f as S,d3 as he,b as P,q as $,d4 as ge,bW as be,b5 as Te,d5 as xe,d6 as Ce,g as Ie,h as Q,d7 as ke,d8 as we,D as Ee,bi as Ne,c8 as Re,bD as Fe,ak as Pe,d9 as _e,da as Se,aY as Ve,B as pe,O as De,p as Ae}from"./index-25c53959.js";import{P as G}from"./index-b9357cdc.js";import{g as Be,a as $e}from"./Tool-a4996249.js";import{u as je}from"./useRequest-4d550859.js";import{u as Oe}from"./useMutation-8db3a36b.js";var Ke=["onTableChange","maxLength","formItemProps","recordCreatorProps","rowKey","controlled","defaultValue","onChange","editableFormRef"],Me=["record","position","creatorButtonText","newRecordType","parentKey","style"],H=j.createContext(void 0);function z(e){var n=e.children,h=e.record,x=e.position,r=e.newRecordType,g=e.parentKey,m=T.useContext(H);return j.cloneElement(n,d(d({},n.props),{},{onClick:function(){var f=Ie(Q().mark(function k(R){var I,N,y,_;return Q().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(I=(N=n.props).onClick)===null||I===void 0?void 0:I.call(N,R);case 2:if(_=a.sent,_!==!1){a.next=5;break}return a.abrupt("return");case 5:m==null||(y=m.current)===null||y===void 0||y.addEditRecord(h,{position:x,newRecordType:r,parentKey:g});case 6:case"end":return a.stop()}},k)}));function b(k){return f.apply(this,arguments)}return b}()}))}function J(e){var n,h,x=ce(),r=e.onTableChange,g=e.maxLength;e.formItemProps;var m=e.recordCreatorProps,f=e.rowKey;e.controlled;var b=e.defaultValue;e.onChange;var k=e.editableFormRef,R=M(e,Ke),I=ve(e.value),N=T.useRef(),y=T.useRef();T.useImperativeHandle(R.actionRef,function(){return N.current});var _=me(function(){return e.value||b||[]},{value:e.value,onChange:e.onChange}),V=fe(_,2),a=V[0],U=V[1],w=j.useMemo(function(){return typeof f=="function"?f:function(c,t){return c[f]||t}},[f]),O=function(t){if(typeof t=="number"&&!e.name){if(t>=a.length)return t;var l=a&&a[t];return w==null?void 0:w(l,t)}if((typeof t=="string"||t>=a.length)&&e.name){var i=a.findIndex(function(o,s){var v;return(w==null||(v=w(o,s))===null||v===void 0?void 0:v.toString())===(t==null?void 0:t.toString())});return i}return t};T.useImperativeHandle(k,function(){var c=function(i){var o,s;if(i==null)throw new Error("rowIndex is required");var v=O(i),C=[e.name,(o=v==null?void 0:v.toString())!==null&&o!==void 0?o:""].flat(1).filter(Boolean);return(s=y.current)===null||s===void 0?void 0:s.getFieldValue(C)},t=function(){var i,o=[e.name].flat(1).filter(Boolean);if(Array.isArray(o)&&o.length===0){var s,v=(s=y.current)===null||s===void 0?void 0:s.getFieldsValue();return Array.isArray(v)?v:Object.keys(v).map(function(C){return v[C]})}return(i=y.current)===null||i===void 0?void 0:i.getFieldValue(o)};return d(d({},y.current),{},{getRowData:c,getRowsData:t,setRowData:function(i,o){var s,v,C,A;if(i==null)throw new Error("rowIndex is required");var B=O(i),oe=[e.name,(s=B==null?void 0:B.toString())!==null&&s!==void 0?s:""].flat(1).filter(Boolean),ue=((v=y.current)===null||v===void 0||(C=v.getFieldsValue)===null||C===void 0?void 0:C.call(v))||{},de=L(ue,oe,d(d({},c(i)),o||{}));return(A=y.current)===null||A===void 0||A.setFieldsValue(de),!0}})}),T.useEffect(function(){e.controlled&&a.forEach(function(c,t){var l;(l=y.current)===null||l===void 0||l.setFieldsValue(ye({},w(c,t),c))},{})},[a,e.controlled]),T.useEffect(function(){if(e.name){var c;y.current=e==null||(c=e.editable)===null||c===void 0?void 0:c.form}},[(n=e.editable)===null||n===void 0?void 0:n.form,e.name]);var E=m||{},X=E.record,p=E.position,ee=E.creatorButtonText,te=E.newRecordType,ae=E.parentKey,ne=E.style,le=M(E,Me),K=p==="top",F=T.useMemo(function(){return g&&g<=(a==null?void 0:a.length)?!1:m!==!1&&u(z,{record:q(X,a==null?void 0:a.length,a)||{},position:p,parentKey:q(ae,a==null?void 0:a.length,a),newRecordType:te,children:u(S,d(d({type:"dashed",style:d({display:"block",margin:"10px 0",width:"100%"},ne),icon:u(he,{})},le),{},{children:ee||x.getMessage("editableTable.action.add","添加一行数据")}))})},[m,g,a==null?void 0:a.length]),ie=T.useMemo(function(){return F?K?{components:{header:{wrapper:function(t){var l,i=t.className,o=t.children;return P("thead",{className:i,children:[o,P("tr",{style:{position:"relative"},children:[u("td",{colSpan:0,style:{visibility:"hidden"},children:F}),u("td",{style:{position:"absolute",left:0,width:"100%"},colSpan:(l=R.columns)===null||l===void 0?void 0:l.length,children:F})]})]})}}}}:{tableViewRender:function(t,l){var i,o;return P($,{children:[(i=(o=e.tableViewRender)===null||o===void 0?void 0:o.call(e,t,l))!==null&&i!==void 0?i:l,F]})}}:{}},[K,F]),D=d({},e.editable),re=ge(function(c,t){var l,i,o;if((l=e.editable)===null||l===void 0||(i=l.onValuesChange)===null||i===void 0||i.call(l,c,t),(o=e.onValuesChange)===null||o===void 0||o.call(e,t,c),e.controlled){var s;e==null||(s=e.onChange)===null||s===void 0||s.call(e,t)}});return(e!=null&&e.onValuesChange||(h=e.editable)!==null&&h!==void 0&&h.onValuesChange||e.controlled&&e!==null&&e!==void 0&&e.onChange)&&(D.onValuesChange=re),P($,{children:[u(H.Provider,{value:N,children:u(be,d(d(d({search:!1,options:!1,pagination:!1,rowKey:f,revalidateOnFocus:!1},R),ie),{},{tableLayout:"fixed",actionRef:N,onChange:r,editable:d(d({},D),{},{formProps:d({formRef:y},D.formProps)}),dataSource:a,onDataSourceChange:function(t){if(U(t),e.name&&p==="top"){var l,i=L({},[e.name].flat(1).filter(Boolean),t);(l=y.current)===null||l===void 0||l.setFieldsValue(i)}}}))}),e.name?u(Te,{name:[e.name],children:function(t){var l,i,o=xe(t,[e.name].flat(1)),s=o==null?void 0:o.find(function(v,C){return!Ce(v,I==null?void 0:I[C])});return s&&I&&(e==null||(l=e.editable)===null||l===void 0||(i=l.onValuesChange)===null||i===void 0||i.call(l,s,o)),null}}):null]})}function Z(e){var n=se.useFormInstance();return e.name?u(W.Item,d(d({style:{maxWidth:"100%"}},e==null?void 0:e.formItemProps),{},{name:e.name,children:u(J,d(d({},e),{},{editable:d(d({},e.editable),{},{form:n})}))})):u(J,d({},e))}Z.RecordCreator=z;globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,n){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,n),n)}};const Le=({dataSource:e,handleEdit:n})=>{const{valueEnumSysGenType:h}=ke(),{valueEnumSysTplCategory:x}=we(),r={onSave:async(g,m)=>{const f=g;await n({[f]:m[f]})}};return P($,{children:[u(G,{dataSource:e,columns:[{title:"表名称",dataIndex:"tableName",key:"tableName",valueType:"text"},{title:"表描述",dataIndex:"tableComment",key:"tableComment",valueType:"text"},{title:"实体名称",dataIndex:"className",key:"className",valueType:"text",hideInSearch:!0},{title:"作者",dataIndex:"functionAuthor",key:"functionAuthor",valueType:"text"},{title:"备注",dataIndex:"remark",key:"remark",valueType:"textarea",hideInSearch:!0}],editable:r}),u(Ee,{}),u(G,{columns:[{title:"生成模版",dataIndex:"tplCategory",key:"tplCategory",valueType:"select",valueEnum:x},{title:"生成包路径",dataIndex:"packageName",key:"packageName",valueType:"text"},{title:"生成模块名",dataIndex:"moduleName",key:"moduleName",valueType:"text"},{title:"生成业务名",dataIndex:"businessName",key:"businessName",valueType:"text"},{title:"生成功能名",dataIndex:"functionName",key:"functionName",valueType:"text"},{title:"生成代码方式",dataIndex:"genType",key:"genType",valueType:"select",valueEnum:h},...(e==null?void 0:e.genType)==="ZIP"?[]:[{title:"自定义路径",dataIndex:"genPath",key:"genPath",valueType:"text"}]],dataSource:e,editable:r})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,n){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,n),n)}};const qe=()=>{const{valueEnumSysYesNo:e}=Pe(),{valueEnumSysQueryType:n}=_e(),{valueEnumSysJavaType:h}=Se();return[{title:"序号",dataIndex:"sort",valueType:"indexBorder",editable:!1},{title:"字段名称",dataIndex:"columnName",key:"columnName",valueType:"text",editable:!1,ellipsis:!0},{title:"字段描述",dataIndex:"columnComment",key:"columnComment",valueType:"text"},{title:"物理类型",dataIndex:"columnType",key:"columnType",valueType:"text",editable:!1,ellipsis:!0},{title:"JAVA类型",dataIndex:"javaType",key:"javaType",valueType:"select",valueEnum:h},{title:"JAVA属性",dataIndex:"javaField",key:"javaField",valueType:"text"},{title:"插入",dataIndex:"isInsert",key:"isInsert",valueType:"radioButton",valueEnum:e},{title:"编辑",dataIndex:"isEdit",key:"isEdit",valueType:"radioButton",valueEnum:e},{title:"列表",dataIndex:"isList",key:"isList",valueType:"radioButton",valueEnum:e},{title:"查询",dataIndex:"isQuery",key:"isQuery",valueType:"radioButton",valueEnum:e},{title:"必填",dataIndex:"isRequired",key:"isRequired",valueType:"radioButton",valueEnum:e},{title:"查询方式",dataIndex:"queryType",key:"queryType",valueType:"select",valueEnum:n}]},Qe=({dataSource:e,handleEdit:n,loading:h=!1})=>{const[x]=W.useForm(),[r,g]=T.useState([]),m=(r==null?void 0:r.length)>0,f=qe();return u(Z,{toolbar:{actions:m?[u(S,{onClick:()=>g([]),icon:u(Ne,{}),children:"取消编辑"},"cancelEdit"),u(S,{type:"primary",loading:h,icon:u(Re,{}),onClick:async()=>{const b=await x.validateFields();await n({columns:Object.keys(b).map(k=>({...b[k],columnId:Number(k)}))}),g([])},children:"保存"},"edit")]:[u(S,{icon:u(Fe,{}),type:"primary",onClick:()=>{g(e.map(b=>b.columnId.toString()))},children:"编辑"},"edit")]},rowKey:"columnId",ghost:!0,size:"small",scroll:{x:"max-content"},columns:f,value:e,recordCreatorProps:!1,editable:{form:x,editableKeys:r}})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,n){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,n),n)}};const Y={BASE_INFO:"基本信息",FIELD_INFO:"字段信息"},ze=()=>{const e=Ve(),n=Number((e==null?void 0:e.tableId)??"0"),[h,x]=T.useState("BASE_INFO"),{data:r,refresh:g}=je(()=>Be({tableId:n}),{ready:n>0,refreshDeps:[n]}),{mutateAsync:m,isLoading:f}=Oe(async b=>{await $e({tableId:n,businessName:r.info.businessName,functionName:r.info.functionName,className:r.info.className,functionAuthor:r.info.functionAuthor,moduleName:r.info.moduleName,packageName:r.info.packageName,tableComment:r.info.tableComment,tableName:r.info.tableName,columns:r.rows,...b})},{onSuccess:()=>{g(),Ae.success("保存成功")}});return u(pe,{children:u(De,{tabs:{items:[{label:Y.BASE_INFO,key:"BASE_INFO",children:u(Le,{dataSource:r==null?void 0:r.info,handleEdit:m})},{label:Y.FIELD_INFO,key:"FIELD_INFO",children:u(Qe,{dataSource:r==null?void 0:r.rows,handleEdit:m,loading:f})}],activeKey:h,onChange:b=>{x(b)}}})})};export{ze as default};
