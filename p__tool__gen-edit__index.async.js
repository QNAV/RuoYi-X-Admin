"use strict";(self.webpackChunkruoyi_x_umi=self.webpackChunkruoyi_x_umi||[]).push([[224],{23515:function(Ee,ae,n){n.d(ae,{ew:function(){return X},Jx:function(){return V},iT:function(){return i},Zi:function(){return se},Bw:function(){return ye},eJ:function(){return oe},fk:function(){return m},sE:function(){return de},WW:function(){return Q},sy:function(){return q},E$:function(){return Y},_M:function(){return fe},tC:function(){return h},wX:function(){return ge},oh:function(){return r},Uc:function(){return H},x:function(){return ve},Mw:function(){return z},p_:function(){return ce},$V:function(){return _},Qo:function(){return le},$9:function(){return ue},Jy:function(){return me},VP:function(){return Z},g4:function(){return t},Fu:function(){return u},Rj:function(){return ee},tE:function(){return o},iO:function(){return ie},q2:function(){return J},jR:function(){return W},BP:function(){return re},au:function(){return E}});var w=n(13255),h={title:"\u5E8F\u53F7",dataIndex:"index",key:"index",valueType:"indexBorder",width:60},oe={title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",key:"createTime",valueType:"dateTime",hideInSearch:!0,sorter:!0},E={title:"\u66F4\u65B0\u65F6\u95F4",dataIndex:"updateTime",key:"updateTime",valueType:"dateTime",hideInSearch:!0,sorter:!0},de={title:"\u72B6\u6001",dataIndex:"status",key:"status",valueType:"radio",valueEnum:w.IZ},m={title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTimeRange",key:"createTimeRange",valueType:"dateTimeRange",hideInTable:!0,search:{transform:function(a){return{beginCreateTime:a[0],endCreateTime:a[1]}}}},Z={title:"\u5907\u6CE8",dataIndex:"remark",key:"remark",valueType:"textarea",hideInSearch:!0},W={title:"\u8868\u540D\u79F0",dataIndex:"tableName",key:"tableName",valueType:"text"},J={title:"\u8868\u63CF\u8FF0",dataIndex:"tableComment",key:"tableComment",valueType:"text"},V={title:"\u5B9E\u4F53\u540D\u79F0",dataIndex:"className",key:"className",valueType:"text",hideInSearch:!0},Q={title:"\u4F5C\u8005",dataIndex:"functionAuthor",key:"functionAuthor",valueType:"text"},se={title:"\u5B57\u6BB5\u540D\u79F0",dataIndex:"columnName",key:"columnName",valueType:"text",editable:!1,ellipsis:!0,width:100},i={title:"\u5B57\u6BB5\u63CF\u8FF0",dataIndex:"columnComment",key:"columnComment",valueType:"text",width:250},ye={title:"\u7269\u7406\u7C7B\u578B",dataIndex:"columnType",key:"columnType",valueType:"text",editable:!1,ellipsis:!0,width:100},_={title:"JAVA\u7C7B\u578B",dataIndex:"javaType",key:"javaType",valueType:"select",valueEnum:w.Xp,width:90},ce={title:"JAVA\u5C5E\u6027",dataIndex:"javaField",key:"javaField",valueType:"text",width:140},r={title:"\u63D2\u5165",dataIndex:"isInsert",key:"isInsert",valueType:"radioButton",width:115,valueEnum:w.sv},ge={title:"\u7F16\u8F91",dataIndex:"isEdit",key:"isEdit",valueType:"radioButton",width:115,valueEnum:w.sv},H={title:"\u5217\u8868",dataIndex:"isList",key:"isList",valueType:"radioButton",width:115,valueEnum:w.sv},ve={title:"\u67E5\u8BE2",dataIndex:"isQuery",key:"isQuery",valueType:"radioButton",width:115,valueEnum:w.sv},z={title:"\u5FC5\u586B",dataIndex:"isRequired",key:"isRequired",valueType:"radioButton",width:115,valueEnum:w.sv},me={title:"\u67E5\u8BE2\u65B9\u5F0F",dataIndex:"queryType",key:"queryType",valueType:"select",valueEnum:w.g7,width:70},re={title:"\u751F\u6210\u6A21\u7248",dataIndex:"tplCategory",key:"tplCategory",valueType:"select",valueEnum:w.m$},ue={title:"\u751F\u6210\u5305\u8DEF\u5F84",dataIndex:"packageName",key:"packageName",valueType:"text"},le={title:"\u751F\u6210\u6A21\u5757\u540D",dataIndex:"moduleName",key:"moduleName",valueType:"text"},X={title:"\u751F\u6210\u4E1A\u52A1\u540D",dataIndex:"businessName",key:"businessName",valueType:"text"},q={title:"\u751F\u6210\u529F\u80FD\u540D",dataIndex:"functionName",key:"functionName",valueType:"text"},fe={title:"\u751F\u6210\u4EE3\u7801\u65B9\u5F0F",dataIndex:"genType",key:"genType",valueType:"select",valueEnum:w.WZ},Y={title:"\u81EA\u5B9A\u4E49\u8DEF\u5F84",dataIndex:"genPath",key:"genPath",valueType:"text"},ie={title:"\u5E8F\u53F7",dataIndex:"sort",valueType:"indexBorder",editable:!1,width:80},ee={title:"\u89D2\u8272\u540D\u79F0",dataIndex:"roleName",key:"roleName",valueType:"text"},t={title:"\u89D2\u8272ID",dataIndex:"roleId",key:"roleId",valueType:"text",hideInSearch:!0,editable:!1},u={title:"\u6743\u9650\u5B57\u7B26",dataIndex:"roleKey",key:"roleKey",valueType:"text"},o={title:"\u663E\u793A\u6392\u5E8F",dataIndex:"roleSort",key:"roleSort",valueType:"text",hideInSearch:!0}},10194:function(Ee,ae,n){n.r(ae),n.d(ae,{default:function(){return He}});var w=n(55980),h=n.n(w),oe=n(18172),E=n.n(oe),de=n(3849),m=n.n(de),Z=n(46338),W=n.n(Z),J=n(29960),V=n.n(J),Q=n(68967),se=n.n(Q),i=n(23515),ye=n(13255),_=n(69628),ce=n(58229),r=n(11527),ge=function(x){var f=x.dataSource,N=x.handleEdit,F={onSave:function(){var B=E()(V().mark(function O(S,y){var A;return V().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return A=S,P.next=3,N(W()({},A,y[A]));case 3:case"end":return P.stop()}},O)}));function K(O,S){return B.apply(this,arguments)}return K}()};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(_.vY,{dataSource:f,columns:[i.jR,i.q2,i.Jx,i.WW,i.VP],editable:F}),(0,r.jsx)(ce.Z,{}),(0,r.jsx)(_.vY,{columns:[i.BP,i.$9,i.Qo,i.ew,i.sy,i._M].concat(se()((f==null?void 0:f.genType)===ye.hh.ZIP?[]:[i.E$])),dataSource:f,editable:F})]})},H=ge,ve=n(24530),z=n(58454),me=n(17073),re=n(12431),ue=n(43133),le=n(48733),X=n(44631),q=n(43293),fe=n(61431),Y=n(62957),ie=n(88081),ee=n(21519),t=n(82175),u=n(20436),o=n(5828),R=n(43443),a=n(65173),$=n(35667),De=n(44191),$e=n(51543),Be=n(58343),Oe=n(28850),Ae=n(85621),Re=n(13617),G=n(50959),Ve=n(21915),Le=["onTableChange","maxLength","formItemProps","recordCreatorProps","rowKey","controlled","defaultValue","onChange","editableFormRef"],Ke=["record","position","creatorButtonText","newRecordType","parentKey","style"],Se=G.createContext(void 0);function Pe(e){var x=e.children,f=e.record,N=e.position,F=e.newRecordType,B=e.parentKey,K=(0,G.useContext)(Se);return G.cloneElement(x,(0,t.Z)((0,t.Z)({},x.props),{},{onClick:function(){var O=(0,ee.Z)((0,ie.Z)().mark(function y(A){var D,P,L,j;return(0,ie.Z)().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,(D=(P=x.props).onClick)===null||D===void 0?void 0:D.call(P,A);case 2:if(j=c.sent,j!==!1){c.next=5;break}return c.abrupt("return");case 5:K==null||(L=K.current)===null||L===void 0||L.addEditRecord(f,{position:N,newRecordType:F,parentKey:B});case 6:case"end":return c.stop()}},y)}));function S(y){return O.apply(this,arguments)}return S}()}))}function je(e){var x,f,N=(0,R.YB)(),F=e.onTableChange,B=e.maxLength,K=e.formItemProps,O=e.recordCreatorProps,S=e.rowKey,y=e.controlled,A=e.defaultValue,D=e.onChange,P=e.editableFormRef,L=(0,Y.Z)(e,Le),j=(0,a.Z)(e.value),p=(0,G.useRef)(),c=(0,G.useRef)();(0,G.useImperativeHandle)(L.actionRef,function(){return p.current});var T=(0,Oe.Z)(function(){return e.value||A||[]},{value:e.value,onChange:e.onChange}),M=(0,fe.Z)(T,2),g=M[0],ze=M[1],ne=G.useMemo(function(){return typeof S=="function"?S:function(b,l){return b[S]||l}},[S]),Ne=function(l){if(typeof l=="number"&&!e.name){if(l>=g.length)return l;var d=g&&g[l];return ne==null?void 0:ne(d,l)}if((typeof l=="string"||l>=g.length)&&e.name){var s=g.findIndex(function(v,C){var I;return(ne==null||(I=ne(v,C))===null||I===void 0?void 0:I.toString())===(l==null?void 0:l.toString())});return s}return l};(0,G.useImperativeHandle)(P,function(){var b=function(s){var v,C;if(s==null)throw new Error("rowIndex is required");var I=Ne(s),U=[e.name,(v=I==null?void 0:I.toString())!==null&&v!==void 0?v:""].flat(1).filter(Boolean);return(C=c.current)===null||C===void 0?void 0:C.getFieldValue(U)},l=function(){var s,v=[e.name].flat(1).filter(Boolean);if(Array.isArray(v)&&v.length===0){var C,I=(C=c.current)===null||C===void 0?void 0:C.getFieldsValue();return Array.isArray(I)?I:Object.keys(I).map(function(U){return I[U]})}return(s=c.current)===null||s===void 0?void 0:s.getFieldValue(v)};return(0,t.Z)((0,t.Z)({},c.current),{},{getRowData:b,getRowsData:l,setRowData:function(s,v){var C,I,U,be;if(s==null)throw new Error("rowIndex is required");var Ie=Ne(s),on=[e.name,(C=Ie==null?void 0:Ie.toString())!==null&&C!==void 0?C:""].flat(1).filter(Boolean),dn=((I=c.current)===null||I===void 0||(U=I.getFieldsValue)===null||U===void 0?void 0:U.call(I))||{},sn=(0,Re.Z)(dn,on,(0,t.Z)((0,t.Z)({},b(s)),v||{}));return(be=c.current)===null||be===void 0?void 0:be.setFieldsValue(sn)}})}),(0,G.useEffect)(function(){!e.controlled||g.forEach(function(b,l){var d;(d=c.current)===null||d===void 0||d.setFieldsValue((0,q.Z)({},ne(b,l),b))},{})},[g,e.controlled]),(0,G.useEffect)(function(){if(e.name){var b;c.current=e==null||(b=e.editable)===null||b===void 0?void 0:b.form}},[(x=e.editable)===null||x===void 0?void 0:x.form,e.name]);var te=O||{},qe=te.record,Ce=te.position,en=te.creatorButtonText,nn=te.newRecordType,tn=te.parentKey,an=te.style,rn=(0,Y.Z)(te,Ke),Fe=Ce==="top",he=(0,G.useMemo)(function(){return B&&B<=(g==null?void 0:g.length)?!1:O!==!1&&(0,r.jsx)(Pe,{record:(0,$.h)(qe,g==null?void 0:g.length,g)||{},position:Ce,parentKey:(0,$.h)(tn,g==null?void 0:g.length,g),newRecordType:nn,children:(0,r.jsx)(X.Z,(0,t.Z)((0,t.Z)({type:"dashed",style:(0,t.Z)({display:"block",margin:"10px 0",width:"100%"},an),icon:(0,r.jsx)(u.Z,{})},rn),{},{children:en||N.getMessage("editableTable.action.add","\u6DFB\u52A0\u4E00\u884C\u6570\u636E")}))})},[O,B,g==null?void 0:g.length]),un=(0,G.useMemo)(function(){return he?Fe?{components:{header:{wrapper:function(l){var d,s=l.className,v=l.children;return(0,r.jsxs)("thead",{className:s,children:[v,(0,r.jsxs)("tr",{style:{position:"relative"},children:[(0,r.jsx)("td",{colSpan:0,style:{visibility:"hidden"},children:he}),(0,r.jsx)("td",{style:{position:"absolute",left:0,width:"100%"},colSpan:(d=L.columns)===null||d===void 0?void 0:d.length,children:he})]})]})}}}}:{tableViewRender:function(l,d){var s,v;return(0,r.jsxs)(r.Fragment,{children:[(s=(v=e.tableViewRender)===null||v===void 0?void 0:v.call(e,l,d))!==null&&s!==void 0?s:d,he]})}}:{}},[Fe,he]),xe=(0,t.Z)({},e.editable),ln=(0,De.J)(function(b,l){var d,s,v;if((d=e.editable)===null||d===void 0||(s=d.onValuesChange)===null||s===void 0||s.call(d,b,l),(v=e.onValuesChange)===null||v===void 0||v.call(e,l,b),e.controlled){var C;e==null||(C=e.onChange)===null||C===void 0||C.call(e,l)}});return((e==null?void 0:e.onValuesChange)||((f=e.editable)===null||f===void 0?void 0:f.onValuesChange)||e.controlled&&(e==null?void 0:e.onChange))&&(xe.onValuesChange=ln),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Se.Provider,{value:p,children:(0,r.jsx)(Ve.Z,(0,t.Z)((0,t.Z)((0,t.Z)({search:!1,options:!1,pagination:!1,rowKey:S,revalidateOnFocus:!1},L),un),{},{tableLayout:"fixed",actionRef:p,onChange:F,editable:(0,t.Z)((0,t.Z)({},xe),{},{formProps:(0,t.Z)({formRef:c},xe.formProps)}),dataSource:g,onDataSourceChange:function(l){if(ze(l),e.name&&Ce==="top"){var d,s=(0,Re.Z)({},[e.name].flat(1).filter(Boolean),l);(d=c.current)===null||d===void 0||d.setFieldsValue(s)}}}))}),e.name?(0,r.jsx)(o.Z,{name:[e.name],children:function(l){var d,s,v=(0,Ae.Z)(l,[e.name].flat(1)),C=v==null?void 0:v.find(function(I,U){return!(0,$e.Z)(I,j==null?void 0:j[U])});return C&&(e==null||(d=e.editable)===null||d===void 0||(s=d.onValuesChange)===null||s===void 0||s.call(d,C,v)),null}}):null]})}function we(e){return e.name?(0,r.jsx)(ue.Z.Item,(0,t.Z)((0,t.Z)({style:{maxWidth:"100%"}},e==null?void 0:e.formItemProps),{},{name:e.name,children:(0,r.jsx)(Be.gN,{shouldUpdate:!0,name:e.name,isList:!0,children:function(f,N,F){return(0,r.jsx)(je,(0,t.Z)((0,t.Z)({},e),{},{editable:(0,t.Z)((0,t.Z)({},e.editable),{},{form:F}),value:f.value||[],onChange:f.onChange}))}})})):(0,r.jsx)(je,(0,t.Z)({},e))}we.RecordCreator=Pe;var Me=we,ke=function(x){var f=x.dataSource,N=x.handleEdit,F=x.loading,B=F===void 0?!1:F,K=ue.Z.useForm(),O=m()(K,1),S=O[0],y=(0,G.useState)([]),A=m()(y,2),D=A[0],P=A[1],L=(D==null?void 0:D.length)>0;return(0,r.jsx)(Me,{toolbar:{actions:L?[(0,r.jsx)(X.Z,{onClick:function(){return P([])},icon:(0,r.jsx)(ve.Z,{}),children:"\u53D6\u6D88\u7F16\u8F91"},"cancelEdit"),(0,r.jsx)(X.Z,{type:"primary",loading:B,icon:(0,r.jsx)(z.Z,{}),onClick:E()(V().mark(function j(){var p;return V().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,S.validateFields();case 2:return p=T.sent,T.next=5,N({columns:Object.keys(p).map(function(M){return h()(h()({},p[M]),{},{columnId:Number(M)})})});case 5:P([]);case 6:case"end":return T.stop()}},j)})),children:"\u4FDD\u5B58"},"edit")]:[(0,r.jsx)(X.Z,{icon:(0,r.jsx)(me.Z,{}),type:"primary",onClick:function(){f&&P(f==null?void 0:f.map(function(p){var c,T;return(c=p==null||(T=p.columnId)===null||T===void 0?void 0:T.toString())!==null&&c!==void 0?c:""}))},children:"\u7F16\u8F91"},"edit")]},rowKey:"columnId",ghost:!0,size:"small",scroll:{x:"max-content"},columns:[i.iO,i.Zi,i.iT,i.Bw,i.$V,i.p_,i.oh,i.wX,i.Uc,i.x,i.Mw,i.Jy],value:f,recordCreatorProps:!1,editable:{form:S,editableKeys:D}})},Ue=ke,Ge=n(68919),_e=n(40076),Te=n(13107),Xe=n(18437),Ye=n(34179),We=n(90964),Je=n(2891),pe,k;(function(e){e.BASE_INFO="BASE_INFO",e.FIELD_INFO="FIELD_INFO"})(k||(k={}));var Ze=(pe={},W()(pe,k.BASE_INFO,"\u57FA\u672C\u4FE1\u606F"),W()(pe,k.FIELD_INFO,"\u5B57\u6BB5\u4FE1\u606F"),pe),Qe=function(){var x,f=(0,_e.useParams)(),N=Number((x=f==null?void 0:f.tableId)!==null&&x!==void 0?x:"0"),F=(0,G.useState)(k.BASE_INFO),B=m()(F,2),K=B[0],O=B[1],S=(0,Ye.Z)(E()(V().mark(function j(){var p;return V().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,(0,Ge.cj)({tableId:N});case 2:return p=T.sent,T.abrupt("return",p);case 4:case"end":return T.stop()}},j)})),{ready:N>0,refreshDeps:[N]}),y=S.data,A=S.refresh,D=(0,Je.Db)(function(){var j=E()(V().mark(function p(c){return V().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,(0,Ge.DI)(h()({tableId:N,businessName:y.info.businessName,functionName:y.info.functionName,className:y.info.className,functionAuthor:y.info.functionAuthor,moduleName:y.info.moduleName,packageName:y.info.packageName,tableComment:y.info.tableComment,tableName:y.info.tableName,columns:y.rows},c));case 2:case"end":return M.stop()}},p)}));return function(p){return j.apply(this,arguments)}}(),{onSuccess:function(){A(),We.ZP.success("\u4FDD\u5B58\u6210\u529F")}}),P=D.mutateAsync,L=D.isLoading;return(0,r.jsx)(Xe._z,{children:(0,r.jsxs)(Te.Z,{tabs:{activeKey:K,onChange:function(p){O(p)}},children:[(0,r.jsx)(Te.Z.TabPane,{tab:Ze[k.BASE_INFO],children:(0,r.jsx)(H,{dataSource:y==null?void 0:y.info,handleEdit:P})},k.BASE_INFO),(0,r.jsx)(Te.Z.TabPane,{tab:Ze[k.FIELD_INFO],children:(0,r.jsx)(Ue,{dataSource:y==null?void 0:y.rows,handleEdit:P,loading:L})},k.FIELD_INFO)]})})},He=Qe},68919:function(Ee,ae,n){n.d(ae,{DI:function(){return ce},DT:function(){return ue},He:function(){return ie},LV:function(){return fe},XS:function(){return W},Zd:function(){return X},cj:function(){return me},qm:function(){return ve},we:function(){return se}});var w=n(55980),h=n.n(w),oe=n(18172),E=n.n(oe),de=n(29960),m=n.n(de),Z=n(72515);function W(t,u){return J.apply(this,arguments)}function J(){return J=E()(m().mark(function t(u,o){return m().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,Z.h3)("/tool/gen/batchGenCode",h()({method:"GET",params:h()({},u)},o||{})));case 1:case"end":return a.stop()}},t)})),J.apply(this,arguments)}function V(t,u){return Q.apply(this,arguments)}function Q(){return Q=_asyncToGenerator(_regeneratorRuntime.mark(function t(u,o){return _regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",request("/tool/gen/column/list",_objectSpread({method:"GET",params:_objectSpread({},u)},o||{})));case 1:case"end":return a.stop()}},t)})),Q.apply(this,arguments)}function se(t,u,o){return i.apply(this,arguments)}function i(){return i=E()(m().mark(function t(u,o,R){return m().wrap(function($){for(;;)switch($.prev=$.next){case 0:return $.abrupt("return",(0,Z.h3)("/tool/gen/db/list",h()({method:"POST",headers:{"Content-Type":"application/json"},params:h()({},u),data:o},R||{})));case 1:case"end":return $.stop()}},t)})),i.apply(this,arguments)}function ye(t,u){return _.apply(this,arguments)}function _(){return _=_asyncToGenerator(_regeneratorRuntime.mark(function t(u,o){return _regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",request("/tool/gen/download",_objectSpread({method:"GET",params:_objectSpread({},u)},o||{})));case 1:case"end":return a.stop()}},t)})),_.apply(this,arguments)}function ce(t,u){return r.apply(this,arguments)}function r(){return r=E()(m().mark(function t(u,o){return m().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,Z.h3)("/tool/gen/edit",h()({method:"POST",headers:{"Content-Type":"application/json"},data:u},o||{})));case 1:case"end":return a.stop()}},t)})),r.apply(this,arguments)}function ge(t,u){return H.apply(this,arguments)}function H(){return H=_asyncToGenerator(_regeneratorRuntime.mark(function t(u,o){return _regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",request("/tool/gen/genCode",_objectSpread({method:"GET",params:_objectSpread({},u)},o||{})));case 1:case"end":return a.stop()}},t)})),H.apply(this,arguments)}function ve(t,u){return z.apply(this,arguments)}function z(){return z=E()(m().mark(function t(u,o){return m().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,Z.h3)("/tool/gen/importTable",h()({method:"POST",params:h()({},u)},o||{})));case 1:case"end":return a.stop()}},t)})),z.apply(this,arguments)}function me(t,u){return re.apply(this,arguments)}function re(){return re=E()(m().mark(function t(u,o){return m().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,Z.h3)("/tool/gen/info",h()({method:"GET",params:h()({},u)},o||{})));case 1:case"end":return a.stop()}},t)})),re.apply(this,arguments)}function ue(t,u,o){return le.apply(this,arguments)}function le(){return le=E()(m().mark(function t(u,o,R){return m().wrap(function($){for(;;)switch($.prev=$.next){case 0:return $.abrupt("return",(0,Z.h3)("/tool/gen/list",h()({method:"POST",headers:{"Content-Type":"application/json"},params:h()({},u),data:o},R||{})));case 1:case"end":return $.stop()}},t)})),le.apply(this,arguments)}function X(t,u){return q.apply(this,arguments)}function q(){return q=E()(m().mark(function t(u,o){return m().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,Z.h3)("/tool/gen/preview",h()({method:"GET",params:h()({},u)},o||{})));case 1:case"end":return a.stop()}},t)})),q.apply(this,arguments)}function fe(t,u){return Y.apply(this,arguments)}function Y(){return Y=E()(m().mark(function t(u,o){return m().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,Z.h3)("/tool/gen/remove",h()({method:"POST",params:h()({},u)},o||{})));case 1:case"end":return a.stop()}},t)})),Y.apply(this,arguments)}function ie(t,u){return ee.apply(this,arguments)}function ee(){return ee=E()(m().mark(function t(u,o){return m().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,Z.h3)("/tool/gen/synchDb",h()({method:"GET",params:h()({},u)},o||{})));case 1:case"end":return a.stop()}},t)})),ee.apply(this,arguments)}}}]);