"use strict";(self.webpackChunkruoyi_x_umi=self.webpackChunkruoyi_x_umi||[]).push([[557],{33921:function(Ee,ae,n){n.d(ae,{ew:function(){return me},Jx:function(){return O},iT:function(){return u},Zi:function(){return re},Bw:function(){return ye},eJ:function(){return de},fk:function(){return y},sE:function(){return se},WW:function(){return i},sy:function(){return X},E$:function(){return z},_M:function(){return ie},tC:function(){return p},wX:function(){return pe},oh:function(){return J},Uc:function(){return Q},x:function(){return ve},Mw:function(){return ue},p_:function(){return ce},$V:function(){return Y},Qo:function(){return H},$9:function(){return U},Jy:function(){return le},VP:function(){return $},g4:function(){return q},Fu:function(){return a},Rj:function(){return v},tE:function(){return r},q2:function(){return W},jR:function(){return L},BP:function(){return oe},au:function(){return N}});var D=n(75786),p={title:"\u5E8F\u53F7",dataIndex:"index",key:"index",valueType:"indexBorder",width:60},de={title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",key:"createTime",valueType:"dateTime",hideInSearch:!0,sorter:!0},N={title:"\u66F4\u65B0\u65F6\u95F4",dataIndex:"updateTime",key:"updateTime",valueType:"dateTime",hideInSearch:!0,sorter:!0},se={title:"\u72B6\u6001",dataIndex:"status",key:"status",valueType:"radio",valueEnum:D.IZ},y={title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTimeRange",key:"createTimeRange",valueType:"dateTimeRange",hideInTable:!0,search:{transform:function(w){return{beginCreateTime:w[0],endCreateTime:w[1]}}}},$={title:"\u5907\u6CE8",dataIndex:"remark",key:"remark",valueType:"textarea",hideInSearch:!0},L={title:"\u8868\u540D\u79F0",dataIndex:"tableName",key:"tableName",valueType:"text"},W={title:"\u8868\u63CF\u8FF0",dataIndex:"tableComment",key:"tableComment",valueType:"text"},O={title:"\u5B9E\u4F53\u540D\u79F0",dataIndex:"className",key:"className",valueType:"text"},i={title:"\u4F5C\u8005",dataIndex:"functionAuthor",key:"functionAuthor",valueType:"text"},re={title:"\u5B57\u6BB5\u540D\u79F0",dataIndex:"columnName",key:"columnName",valueType:"text",editable:!1,ellipsis:!0,width:100},u={title:"\u5B57\u6BB5\u63CF\u8FF0",dataIndex:"columnComment",key:"columnComment",valueType:"text",width:250},ye={title:"\u7269\u7406\u7C7B\u578B",dataIndex:"columnType",key:"columnType",valueType:"text",editable:!1,ellipsis:!0,width:100},Y={title:"JAVA\u7C7B\u578B",dataIndex:"javaType",key:"javaType",valueType:"select",valueEnum:D.Xp,width:90},ce={title:"JAVA\u5C5E\u6027",dataIndex:"javaField",key:"javaField",valueType:"text",width:140},J={title:"\u63D2\u5165",dataIndex:"isInsert",key:"isInsert",valueType:"radioButton",width:115,valueEnum:D.sv},pe={title:"\u7F16\u8F91",dataIndex:"isEdit",key:"isEdit",valueType:"radioButton",width:115,valueEnum:D.sv},Q={title:"\u5217\u8868",dataIndex:"isList",key:"isList",valueType:"radioButton",width:115,valueEnum:D.sv},ve={title:"\u67E5\u8BE2",dataIndex:"isQuery",key:"isQuery",valueType:"radioButton",width:115,valueEnum:D.sv},ue={title:"\u5FC5\u586B",dataIndex:"isRequired",key:"isRequired",valueType:"radioButton",width:115,valueEnum:D.sv},le={title:"\u67E5\u8BE2\u65B9\u5F0F",dataIndex:"queryType",key:"queryType",valueType:"select",valueEnum:D.g7,width:70},oe={title:"\u751F\u6210\u6A21\u7248",dataIndex:"tplCategory",key:"tplCategory",valueType:"select",valueEnum:D.m$},U={title:"\u751F\u6210\u5305\u8DEF\u5F84",dataIndex:"packageName",key:"packageName",valueType:"text"},H={title:"\u751F\u6210\u6A21\u5757\u540D",dataIndex:"moduleName",key:"moduleName",valueType:"text"},me={title:"\u751F\u6210\u4E1A\u52A1\u540D",dataIndex:"businessName",key:"businessName",valueType:"text"},X={title:"\u751F\u6210\u529F\u80FD\u540D",dataIndex:"functionName",key:"functionName",valueType:"text"},ie={title:"\u751F\u6210\u4EE3\u7801\u65B9\u5F0F",dataIndex:"genType",key:"genType",valueType:"select",valueEnum:D.WZ},z={title:"\u81EA\u5B9A\u4E49\u8DEF\u5F84",dataIndex:"genPath",key:"genPath",valueType:"text"},v={title:"\u89D2\u8272\u540D\u79F0",dataIndex:"roleName",key:"roleName",valueType:"text"},q={title:"\u89D2\u8272ID",dataIndex:"roleId",key:"roleId",valueType:"text",hideInSearch:!0,editable:!1},a={title:"\u6743\u9650\u5B57\u7B26",dataIndex:"roleKey",key:"roleKey",valueType:"text"},r={title:"\u89D2\u8272\u6392\u5E8F",dataIndex:"roleSort",key:"roleSort",valueType:"text",hideInSearch:!0}},95782:function(Ee,ae,n){n.r(ae),n.d(ae,{default:function(){return We}});var D=n(55980),p=n.n(D),de=n(18172),N=n.n(de),se=n(3849),y=n.n(se),$=n(46338),L=n.n($),W=n(29960),O=n.n(W),i=n(33921),re=n(70486),u=n(11527),ye=function(C){var f=C.dataSource,j=C.handleEdit;return(0,u.jsx)(re.vY,{dataSource:f,columns:[i.jR,i.q2,i.Jx,i.WW,i.VP],editable:{onSave:function(){var F=N()(O().mark(function G(P,A){var l;return O().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return l=P,E.next=3,j(L()({},l,A[l]));case 3:case"end":return E.stop()}},G)}));function k(G,P){return F.apply(this,arguments)}return k}()}})},Y=ye,ce=n(68967),J=n.n(ce),pe=n(75786),Q=function(C){var f=C.dataSource,j=C.handleEdit;return(0,u.jsx)(re.vY,{columns:[i.BP,i.$9,i.Qo,i.ew,i.sy,i._M].concat(J()((f==null?void 0:f.genType)===pe.hh.ZIP?[]:[i.E$])),dataSource:f,editable:{onSave:function(){var F=N()(O().mark(function G(P,A){var l;return O().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return l=P,E.next=3,j(L()({},l,A[l]));case 3:case"end":return E.stop()}},G)}));function k(G,P){return F.apply(this,arguments)}return k}()}})},ve=Q,ue=n(1794),le=n(43133),oe=n(8130),U=n(44631),H=n(43293),me=n(61431),X=n(62957),ie=n(88081),z=n(21519),v=n(82175),q=n(20436),a=n(82237),r=n(63106),d=n(58839),w=n(14429),t=n(13238),V=n(58343),Ze=n(28850),De=n(85621),Re=n(13617),_=n(50959),_e=n(84893),$e=["onTableChange","maxLength","formItemProps","recordCreatorProps","rowKey","controlled","defaultValue","onChange","editableFormRef"],Oe=["record","position","creatorButtonText","newRecordType","parentKey","style"],Se=_.createContext(void 0);function we(e){var C=e.children,f=e.record,j=e.position,F=e.newRecordType,k=e.parentKey,G=(0,_.useContext)(Se);return _.cloneElement(C,(0,v.Z)((0,v.Z)({},C.props),{},{onClick:function(){var P=(0,z.Z)((0,ie.Z)().mark(function l(K){var E,Z,T,b;return(0,ie.Z)().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,(E=(Z=C.props).onClick)===null||E===void 0?void 0:E.call(Z,K);case 2:if(b=x.sent,b!==!1){x.next=5;break}return x.abrupt("return");case 5:G==null||(T=G.current)===null||T===void 0||T.addEditRecord(f,{position:j,newRecordType:F,parentKey:k});case 6:case"end":return x.stop()}},l)}));function A(l){return P.apply(this,arguments)}return A}()}))}function Ge(e){var C,f,j=e.onTableChange,F=e.maxLength,k=e.formItemProps,G=e.recordCreatorProps,P=e.rowKey,A=e.controlled,l=e.defaultValue,K=e.onChange,E=e.editableFormRef,Z=(0,X.Z)(e,$e),T=(0,r.Z)(e.value),b=(0,_.useRef)(),h=(0,_.useRef)();(0,_.useImperativeHandle)(Z.actionRef,function(){return b.current});var x=(0,Ze.Z)(function(){return e.value||l||[]},{value:e.value,onChange:e.onChange}),ee=(0,me.Z)(x,2),g=ee[0],Ye=ee[1],ne=_.useMemo(function(){return typeof P=="function"?P:function(R,o){return R[P]||o}},[P]),je=function(o){if(typeof o=="number"&&!e.name){if(o>=g.length)return o;var s=g==null?void 0:g.at(o);return ne==null?void 0:ne(s,o)}if((typeof o=="string"||o>=g.length)&&e.name){var c=g.findIndex(function(m,I){var S;return(ne==null||(S=ne(m,I))===null||S===void 0?void 0:S.toString())===(o==null?void 0:o.toString())});return c}return o};(0,_.useImperativeHandle)(E,function(){var R=function(c){var m,I;if(c==null)throw new Error("rowIndex is required");var S=je(c),M=[e.name,(m=S==null?void 0:S.toString())!==null&&m!==void 0?m:""].flat(1).filter(Boolean);return(I=h.current)===null||I===void 0?void 0:I.getFieldValue(M)},o=function(){var c,m=[e.name].flat(1).filter(Boolean);if(Array.isArray(m)&&m.length===0){var I,S=(I=h.current)===null||I===void 0?void 0:I.getFieldsValue();return Array.isArray(S)?S:Object.keys(S).map(function(M){return S[M]})}return(c=h.current)===null||c===void 0?void 0:c.getFieldValue(m)};return(0,v.Z)((0,v.Z)({},h.current),{},{getRowData:R,getRowsData:o,setRowData:function(c,m){var I,S,M,xe;if(c==null)throw new Error("rowIndex is required");var Ie=je(c),an=[e.name,(I=Ie==null?void 0:Ie.toString())!==null&&I!==void 0?I:""].flat(1).filter(Boolean),rn=((S=h.current)===null||S===void 0||(M=S.getFieldsValue)===null||M===void 0?void 0:M.call(S))||{},un=(0,Re.Z)(rn,an,(0,v.Z)((0,v.Z)({},R(c)),m||{}));return(xe=h.current)===null||xe===void 0?void 0:xe.setFieldsValue(un)}})}),(0,_.useEffect)(function(){!e.controlled||g.forEach(function(R,o){var s;(s=h.current)===null||s===void 0||s.setFieldsValue((0,H.Z)({},ne(R,o),R))},{})},[g,e.controlled]),(0,_.useEffect)(function(){if(e.name){var R;h.current=e==null||(R=e.editable)===null||R===void 0?void 0:R.form}},[(C=e.editable)===null||C===void 0?void 0:C.form,e.name]);var te=G||{},Je=te.record,Ce=te.position,Qe=te.creatorButtonText,He=te.newRecordType,ze=te.parentKey,qe=te.style,en=(0,X.Z)(te,Oe),Fe=Ce==="top",he=(0,_.useMemo)(function(){return F&&F<=(g==null?void 0:g.length)?!1:G!==!1&&(0,u.jsx)(we,{record:(0,d.h)(Je,g==null?void 0:g.length,g)||{},position:Ce,parentKey:(0,d.h)(ze,g==null?void 0:g.length,g),newRecordType:He,children:(0,u.jsx)(U.Z,(0,v.Z)((0,v.Z)({type:"dashed",style:(0,v.Z)({display:"block",margin:"10px 0",width:"100%"},qe),icon:(0,u.jsx)(q.Z,{})},en),{},{children:Qe||"\u6DFB\u52A0\u4E00\u884C\u6570\u636E"}))})},[G,F,g==null?void 0:g.length]),nn=(0,_.useMemo)(function(){return he?Fe?{components:{header:{wrapper:function(o){var s,c=o.className,m=o.children;return(0,u.jsxs)("thead",{className:c,children:[m,(0,u.jsxs)("tr",{style:{position:"relative"},children:[(0,u.jsx)("td",{colSpan:0,style:{visibility:"hidden"},children:he}),(0,u.jsx)("td",{style:{position:"absolute",left:0,width:"100%"},colSpan:(s=Z.columns)===null||s===void 0?void 0:s.length,children:he})]})]})}}}}:{tableViewRender:function(o,s){var c,m;return(0,u.jsxs)(u.Fragment,{children:[(c=(m=e.tableViewRender)===null||m===void 0?void 0:m.call(e,o,s))!==null&&c!==void 0?c:s,he]})}}:{}},[Fe,he]),be=(0,v.Z)({},e.editable),tn=(0,w.J)(function(R,o){var s,c,m;if((s=e.editable)===null||s===void 0||(c=s.onValuesChange)===null||c===void 0||c.call(s,R,o),(m=e.onValuesChange)===null||m===void 0||m.call(e,o,R),e.controlled){var I;e==null||(I=e.onChange)===null||I===void 0||I.call(e,o)}});return((e==null?void 0:e.onValuesChange)||((f=e.editable)===null||f===void 0?void 0:f.onValuesChange)||e.controlled&&(e==null?void 0:e.onChange))&&(be.onValuesChange=tn),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(Se.Provider,{value:b,children:(0,u.jsx)(_e.Z,(0,v.Z)((0,v.Z)((0,v.Z)({search:!1,options:!1,pagination:!1,rowKey:P,revalidateOnFocus:!1},Z),nn),{},{tableLayout:"fixed",actionRef:b,onChange:j,editable:(0,v.Z)((0,v.Z)({},be),{},{formProps:(0,v.Z)({formRef:h},be.formProps)}),dataSource:g,onDataSourceChange:function(o){if(Ye(o),e.name&&Ce==="top"){var s,c=(0,Re.Z)({},[e.name].flat(1).filter(Boolean),o);(s=h.current)===null||s===void 0||s.setFieldsValue(c)}}}))}),e.name?(0,u.jsx)(a.Z,{name:[e.name],children:function(o){var s,c,m=(0,De.Z)(o,[e.name].flat(1)),I=m==null?void 0:m.find(function(S,M){return!(0,t.Z)(S,T==null?void 0:T[M])});return I&&(e==null||(s=e.editable)===null||s===void 0||(c=s.onValuesChange)===null||c===void 0||c.call(s,I,m)),null}}):null]})}function Ne(e){return e.name?(0,u.jsx)(le.Z.Item,(0,v.Z)((0,v.Z)({style:{maxWidth:"100%"}},e==null?void 0:e.formItemProps),{},{name:e.name,children:(0,u.jsx)(V.gN,{shouldUpdate:!0,name:e.name,isList:!0,children:function(f,j,F){return(0,u.jsx)(Ge,(0,v.Z)((0,v.Z)({},e),{},{editable:(0,v.Z)((0,v.Z)({},e.editable),{},{form:F}),value:f.value||[],onChange:f.onChange}))}})})):(0,u.jsx)(Ge,(0,v.Z)({},e))}Ne.RecordCreator=we;var Be=Ne,Ae=function(C){var f=C.dataSource,j=C.handleEdit,F=le.Z.useForm(),k=y()(F,1),G=k[0],P=(0,_.useState)([]),A=y()(P,2),l=A[0],K=A[1],E=(l==null?void 0:l.length)>0;return(0,u.jsx)(Be,{toolbar:{actions:E?[(0,u.jsx)(U.Z,{onClick:function(){return K([])},children:"\u53D6\u6D88\u7F16\u8F91"},"cancelEdit"),(0,u.jsx)(U.Z,{type:"primary",onClick:N()(O().mark(function Z(){var T;return O().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,G.validateFields();case 2:return T=h.sent,h.next=5,j({columns:Object.keys(T).map(function(x){return p()(p()({},T[x]),{},{columnId:Number(x)})})});case 5:K([]);case 6:case"end":return h.stop()}},Z)})),children:"\u4FDD\u5B58"},"edit")]:[(0,u.jsx)(U.Z,{type:"primary",onClick:function(){f&&K(f==null?void 0:f.map(function(T){var b,h;return(b=T==null||(h=T.columnId)===null||h===void 0?void 0:h.toString())!==null&&b!==void 0?b:""}))},children:"\u7F16\u8F91"},"edit")]},rowKey:"columnId",ghost:!0,size:"small",scroll:{x:"max-content"},columns:[{title:"\u5E8F\u53F7",dataIndex:"sort",valueType:"indexBorder",editable:!1,width:80},i.Zi,i.iT,i.Bw,i.$V,i.p_,i.oh,i.wX,i.Uc,i.x,i.Mw,i.Jy],value:f,recordCreatorProps:!1,editable:{form:G,editableKeys:l,onChange:function(T,b){console.log(b)}}})},Ve=Ae,Pe=n(90586),ke=n(77996),ge=n(63978),Ke=n(12643),Le=n(3989),Me=n(90964),Ue=n(2891),fe,B;(function(e){e.BASE_INFO="BASE_INFO",e.FIELD_INFO="FIELD_INFO",e.GEN_INFO="GEN_INFO"})(B||(B={}));var Te=(fe={},L()(fe,B.BASE_INFO,"\u57FA\u672C\u4FE1\u606F"),L()(fe,B.FIELD_INFO,"\u5B57\u6BB5\u4FE1\u606F"),L()(fe,B.GEN_INFO,"\u751F\u6210\u4FE1\u606F"),fe),Xe=function(){var C,f=(0,ke.useParams)(),j=Number((C=f==null?void 0:f.tableId)!==null&&C!==void 0?C:"0"),F=(0,_.useState)(B.BASE_INFO),k=y()(F,2),G=k[0],P=k[1],A=(0,Le.Z)(N()(O().mark(function T(){var b;return O().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,(0,Pe.cj)({tableId:j});case 2:return b=x.sent,x.abrupt("return",b);case 4:case"end":return x.stop()}},T)})),{ready:j>0,refreshDeps:[j]}),l=A.data,K=A.refresh,E=(0,Ue.Db)(function(){var T=N()(O().mark(function b(h){return O().wrap(function(ee){for(;;)switch(ee.prev=ee.next){case 0:return ee.next=2,(0,Pe.DI)(p()({tableId:j,businessName:l.info.businessName,functionName:l.info.functionName,className:l.info.className,functionAuthor:l.info.functionAuthor,moduleName:l.info.moduleName,packageName:l.info.packageName,tableComment:l.info.tableComment,tableName:l.info.tableName},h));case 2:case"end":return ee.stop()}},b)}));return function(b){return T.apply(this,arguments)}}(),{onSuccess:function(){K(),Me.ZP.success("\u4FDD\u5B58\u6210\u529F")}}),Z=E.mutateAsync;return(0,u.jsx)(Ke._z,{children:(0,u.jsxs)(ge.Z,{tabs:{activeKey:G,onChange:function(b){P(b)}},children:[(0,u.jsx)(ge.Z.TabPane,{tab:Te[B.BASE_INFO],children:(0,u.jsx)(Y,{dataSource:l==null?void 0:l.info,handleEdit:Z})},B.BASE_INFO),(0,u.jsx)(ge.Z.TabPane,{tab:Te[B.FIELD_INFO],children:(0,u.jsx)(Ve,{dataSource:l==null?void 0:l.rows,handleEdit:Z})},B.FIELD_INFO),(0,u.jsx)(ge.Z.TabPane,{tab:Te[B.GEN_INFO],children:(0,u.jsx)(ve,{dataSource:l==null?void 0:l.info,handleEdit:Z})},B.GEN_INFO)]})})},We=Xe},90586:function(Ee,ae,n){n.d(ae,{DI:function(){return ce},DT:function(){return U},He:function(){return v},LV:function(){return ie},XS:function(){return L},Zd:function(){return me},cj:function(){return le},qm:function(){return ve},we:function(){return re}});var D=n(55980),p=n.n(D),de=n(18172),N=n.n(de),se=n(29960),y=n.n(se),$=n(41595);function L(a,r){return W.apply(this,arguments)}function W(){return W=N()(y().mark(function a(r,d){return y().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,$.h3)("/tool/gen/batchGenCode",p()({method:"GET",params:p()({},r)},d||{})));case 1:case"end":return t.stop()}},a)})),W.apply(this,arguments)}function O(a,r){return i.apply(this,arguments)}function i(){return i=_asyncToGenerator(_regeneratorRuntime.mark(function a(r,d){return _regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/tool/gen/column/list",_objectSpread({method:"GET",params:_objectSpread({},r)},d||{})));case 1:case"end":return t.stop()}},a)})),i.apply(this,arguments)}function re(a,r,d){return u.apply(this,arguments)}function u(){return u=N()(y().mark(function a(r,d,w){return y().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return V.abrupt("return",(0,$.h3)("/tool/gen/db/list",p()({method:"POST",headers:{"Content-Type":"application/json"},params:p()({},r),data:d},w||{})));case 1:case"end":return V.stop()}},a)})),u.apply(this,arguments)}function ye(a,r){return Y.apply(this,arguments)}function Y(){return Y=_asyncToGenerator(_regeneratorRuntime.mark(function a(r,d){return _regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/tool/gen/download",_objectSpread({method:"GET",params:_objectSpread({},r)},d||{})));case 1:case"end":return t.stop()}},a)})),Y.apply(this,arguments)}function ce(a,r){return J.apply(this,arguments)}function J(){return J=N()(y().mark(function a(r,d){return y().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,$.h3)("/tool/gen/edit",p()({method:"POST",headers:{"Content-Type":"application/json"},data:r},d||{})));case 1:case"end":return t.stop()}},a)})),J.apply(this,arguments)}function pe(a,r){return Q.apply(this,arguments)}function Q(){return Q=_asyncToGenerator(_regeneratorRuntime.mark(function a(r,d){return _regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/tool/gen/genCode",_objectSpread({method:"GET",params:_objectSpread({},r)},d||{})));case 1:case"end":return t.stop()}},a)})),Q.apply(this,arguments)}function ve(a,r){return ue.apply(this,arguments)}function ue(){return ue=N()(y().mark(function a(r,d){return y().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,$.h3)("/tool/gen/importTable",p()({method:"POST",params:p()({},r)},d||{})));case 1:case"end":return t.stop()}},a)})),ue.apply(this,arguments)}function le(a,r){return oe.apply(this,arguments)}function oe(){return oe=N()(y().mark(function a(r,d){return y().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,$.h3)("/tool/gen/info",p()({method:"GET",params:p()({},r)},d||{})));case 1:case"end":return t.stop()}},a)})),oe.apply(this,arguments)}function U(a,r,d){return H.apply(this,arguments)}function H(){return H=N()(y().mark(function a(r,d,w){return y().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return V.abrupt("return",(0,$.h3)("/tool/gen/list",p()({method:"POST",headers:{"Content-Type":"application/json"},params:p()({},r),data:d},w||{})));case 1:case"end":return V.stop()}},a)})),H.apply(this,arguments)}function me(a,r){return X.apply(this,arguments)}function X(){return X=N()(y().mark(function a(r,d){return y().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,$.h3)("/tool/gen/preview",p()({method:"GET",params:p()({},r)},d||{})));case 1:case"end":return t.stop()}},a)})),X.apply(this,arguments)}function ie(a,r){return z.apply(this,arguments)}function z(){return z=N()(y().mark(function a(r,d){return y().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,$.h3)("/tool/gen/remove",p()({method:"POST",params:p()({},r)},d||{})));case 1:case"end":return t.stop()}},a)})),z.apply(this,arguments)}function v(a,r){return q.apply(this,arguments)}function q(){return q=N()(y().mark(function a(r,d){return y().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,$.h3)("/tool/gen/synchDb",p()({method:"GET",params:p()({},r)},d||{})));case 1:case"end":return t.stop()}},a)})),q.apply(this,arguments)}}}]);
