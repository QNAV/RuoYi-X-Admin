"use strict";(self.webpackChunkruoyi_x_umi=self.webpackChunkruoyi_x_umi||[]).push([[945],{78798:function(re,J,t){t.d(J,{ew:function(){return B},Jx:function(){return z},iT:function(){return x},Zi:function(){return U},Bw:function(){return te},eJ:function(){return V},fk:function(){return T},WW:function(){return P},sy:function(){return Z},E$:function(){return F},_M:function(){return ee},tC:function(){return o},wX:function(){return g},oh:function(){return j},Uc:function(){return n},x:function(){return _},Mw:function(){return A},p_:function(){return D},$V:function(){return E},Qo:function(){return N},$9:function(){return q},Jy:function(){return M},VP:function(){return i},iO:function(){return Y},q2:function(){return I},jR:function(){return H},BP:function(){return k},au:function(){return s}});var y=t(85880),o={title:"\u5E8F\u53F7",dataIndex:"index",key:"index",valueType:"indexBorder",width:60},V={title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",key:"createTime",valueType:"dateTime",hideInSearch:!0,sorter:!0},s={title:"\u66F4\u65B0\u65F6\u95F4",dataIndex:"updateTime",key:"updateTime",valueType:"dateTime",hideInSearch:!0,sorter:!0},Q={title:"\u72B6\u6001",dataIndex:"status",key:"status",valueType:"radio",valueEnum:y.al},T={title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTimeRange",key:"createTimeRange",valueType:"dateTimeRange",hideInTable:!0,search:{transform:function(e){return{beginCreateTime:e[0],endCreateTime:e[1]}}}},i={title:"\u5907\u6CE8",dataIndex:"remark",key:"remark",valueType:"textarea",hideInSearch:!0},H={title:"\u8868\u540D\u79F0",dataIndex:"tableName",key:"tableName",valueType:"text"},I={title:"\u8868\u63CF\u8FF0",dataIndex:"tableComment",key:"tableComment",valueType:"text"},z={title:"\u5B9E\u4F53\u540D\u79F0",dataIndex:"className",key:"className",valueType:"text",hideInSearch:!0},P={title:"\u4F5C\u8005",dataIndex:"functionAuthor",key:"functionAuthor",valueType:"text"},U={title:"\u5B57\u6BB5\u540D\u79F0",dataIndex:"columnName",key:"columnName",valueType:"text",editable:!1,ellipsis:!0,width:100},x={title:"\u5B57\u6BB5\u63CF\u8FF0",dataIndex:"columnComment",key:"columnComment",valueType:"text",width:250},te={title:"\u7269\u7406\u7C7B\u578B",dataIndex:"columnType",key:"columnType",valueType:"text",editable:!1,ellipsis:!0,width:100},E={title:"JAVA\u7C7B\u578B",dataIndex:"javaType",key:"javaType",valueType:"select",valueEnum:y.gh,width:90},D={title:"JAVA\u5C5E\u6027",dataIndex:"javaField",key:"javaField",valueType:"text",width:140},j={title:"\u63D2\u5165",dataIndex:"isInsert",key:"isInsert",valueType:"radioButton",width:115,valueEnum:y.gc},g={title:"\u7F16\u8F91",dataIndex:"isEdit",key:"isEdit",valueType:"radioButton",width:115,valueEnum:y.gc},n={title:"\u5217\u8868",dataIndex:"isList",key:"isList",valueType:"radioButton",width:115,valueEnum:y.gc},_={title:"\u67E5\u8BE2",dataIndex:"isQuery",key:"isQuery",valueType:"radioButton",width:115,valueEnum:y.gc},A={title:"\u5FC5\u586B",dataIndex:"isRequired",key:"isRequired",valueType:"radioButton",width:115,valueEnum:y.gc},M={title:"\u67E5\u8BE2\u65B9\u5F0F",dataIndex:"queryType",key:"queryType",valueType:"select",valueEnum:y.CX,width:70},k={title:"\u751F\u6210\u6A21\u7248",dataIndex:"tplCategory",key:"tplCategory",valueType:"select",valueEnum:y.V},q={title:"\u751F\u6210\u5305\u8DEF\u5F84",dataIndex:"packageName",key:"packageName",valueType:"text"},N={title:"\u751F\u6210\u6A21\u5757\u540D",dataIndex:"moduleName",key:"moduleName",valueType:"text"},B={title:"\u751F\u6210\u4E1A\u52A1\u540D",dataIndex:"businessName",key:"businessName",valueType:"text"},Z={title:"\u751F\u6210\u529F\u80FD\u540D",dataIndex:"functionName",key:"functionName",valueType:"text"},ee={title:"\u751F\u6210\u4EE3\u7801\u65B9\u5F0F",dataIndex:"genType",key:"genType",valueType:"select",valueEnum:y.LZ},F={title:"\u81EA\u5B9A\u4E49\u8DEF\u5F84",dataIndex:"genPath",key:"genPath",valueType:"text"},Y={title:"\u5E8F\u53F7",dataIndex:"sort",valueType:"indexBorder",editable:!1,width:80},W={title:"\u89D2\u8272\u540D\u79F0",dataIndex:"roleName",key:"roleName",valueType:"text"},r={title:"\u89D2\u8272ID",dataIndex:"roleId",key:"roleId",valueType:"text",hideInSearch:!0,editable:!1},a={title:"\u6743\u9650\u5B57\u7B26",dataIndex:"roleKey",key:"roleKey",valueType:"text"},u={title:"\u663E\u793A\u6392\u5E8F",dataIndex:"roleSort",key:"roleSort",valueType:"text",hideInSearch:!0}},84660:function(re,J,t){t.d(J,{Z:function(){return V},n:function(){return E}});var y=t(50959),o=t(98205),V=function(j){var g=(0,y.useRef)(),n=(0,o.Zl)(j);return(0,y.useEffect)(function(){g!=null&&g.current&&n(g.current)},[]),g},s=t(35290),Q=t.n(s),T=t(411),i=t.n(T),H=t(94434),I=t.n(H),z=t(46686),P=t.n(z),U=t(25081),x=t(32222),te=t.n(x),E=function(j){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"checkbox",n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,_=(0,y.useState)([]),A=P()(_,2),M=A[0],k=A[1],q=(0,y.useState)([]),N=P()(q,2),B=N[0],Z=N[1],ee={alwaysShowAlert:n,type:g,selectedRowKeys:M,onChange:function(a,u){Z(u),k(a)}},F=function(a){var u=a[j],d=[a],e=[u];if(g==="checkbox")if(e=I()(M),d=te()(B),e.includes(u)){var O=M.indexOf(u);e.splice(O,1),d.splice(O,1)}else d.push(a),e.push(u);Z(d),k(e)},Y=function(){Z([]),k([])},W=function(){var r=i()(Q()().mark(function a(){var u,d=arguments;return Q()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:if(u=d.length>0&&d[0]!==void 0?d[0]:"\u672A\u9009\u62E9\u9700\u8981\u64CD\u4F5C\u7684\u5BF9\u8C61",(B==null?void 0:B.length)!==0){O.next=4;break}return U.ZP.warning(u),O.abrupt("return",Promise.reject(u));case 4:return O.abrupt("return",Promise.resolve(B));case 5:case"end":return O.stop()}},a)}));return function(){return r.apply(this,arguments)}}();return{selectedRows:B,selectedRowKeys:M,rowSelection:ee,onClick:F,clearSelection:Y,setSelectedRowKeys:k,checkRowSelection:W}}},72990:function(re,J,t){t.r(J),t.d(J,{default:function(){return Re}});var y=t(35290),o=t.n(y),V=t(411),s=t.n(V),Q=t(46686),T=t.n(Q),i=t(78798),H=t(84660),I=t(98205),z="toolGen",P=(0,I.cn)({key:"".concat(z,"TableActions"),default:void 0}),U=(0,I.cn)({key:"".concat(z,"PreviewIdAtom"),default:0}),x=t(59373),te=t(71224),E=t(3650),D=t(25081),j=t(74444),g=t(61857),n=t(11527),_=function(m){var l=m.tableIds,f=m.isBatch,w=f===void 0?!1:f,G=w?"\u6279\u91CF\u5220\u9664":"\u5220\u9664",R=l.length===0&&w,v=(0,I.sJ)(P),p=(0,E.useMutation)(x.LV,{onSuccess:function(){var b;v==null||v.reload(),v==null||(b=v.clearSelected)===null||b===void 0||b.call(v),D.ZP.success("\u5220\u9664\u6210\u529F")}}),L=p.mutateAsync,C=p.isLoading,c=function(){j.Z.confirm({title:"\u5220\u9664\u751F\u6210\u4EE3\u7801",content:"\u786E\u5B9A\u5220\u9664 \u8868ID \u4E3A ".concat(l.join(",")," \u751F\u6210\u7684\u4EE3\u7801\u5417\uFF1F"),onOk:function(){var b=s()(o()().mark(function $(){return o()().wrap(function(ne){for(;;)switch(ne.prev=ne.next){case 0:return ne.next=2,L({tableIds:l});case 2:case"end":return ne.stop()}},$)}));function h(){return b.apply(this,arguments)}return h}()})};return(0,n.jsx)(g.Z,{loading:C,icon:(0,n.jsx)(te.Z,{}),type:"link",onClick:c,disabled:R,children:G})},A=_,M=t(85078),k=t(11227),q=function(m){var l=m.rows,f=l===void 0?[]:l,w=m.isBatch,G=w===void 0?!1:w,R=G?"\u6279\u91CF\u4E0B\u8F7D":"\u4E0B\u8F7D",v=f.length===0&&G,p=(0,E.useMutation)(s()(o()().mark(function c(){var S;return o()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,(0,x.XS)({tables:f.map(function($){return $.tableName}).join(",")},{skipErrorHandler:!0,responseType:"blob"});case 2:S=h.sent,(0,k.saveAs)(new Blob([S.data],{type:"application/zip"}),"ruoyi");case 4:case"end":return h.stop()}},c)})),{onSuccess:function(){D.ZP.success("\u4E0B\u8F7D\u6210\u529F")}}),L=p.isLoading,C=p.mutate;return(0,n.jsx)(g.Z,{loading:L,onClick:function(){return C()},type:"link",icon:(0,n.jsx)(M.Z,{}),disabled:v,children:R})},N=q,B=t(17073),Z=t(62325),ee=function(m){var l=m.tableId,f=(0,Z.useNavigate)();return(0,n.jsx)(g.Z,{type:"link",icon:(0,n.jsx)(B.Z,{}),onClick:function(){return f("/tool/gen-edit/".concat(l))},children:"\u7F16\u8F91"})},F=ee,Y=t(12824),W=t(42267),r=t(98429),a=t(86794),u=t(50959),d=[i.tC,i.jR,i.q2,i.eJ,i.au,i.fk],e=function(){var m=(0,u.useRef)(),l=(0,I.sJ)(P),f=(0,a.Z)(),w=T()(f,2),G=w[0],R=w[1].toggle,v=(0,u.useState)([]),p=T()(v,2),L=p[0],C=p[1],c=(0,E.useMutation)(x.qm,{onSuccess:function(){var h,$;l==null||l.reload(),R(),D.ZP.success("\u5BFC\u5165\u6210\u529F"),m==null||(h=m.current)===null||h===void 0||($=h.clearSelected)===null||$===void 0||$.call(h)}}),S=c.mutate;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(g.Z,{type:"primary",onClick:R,icon:(0,n.jsx)(W.Z,{}),children:"\u5BFC\u5165"}),(0,n.jsx)(j.Z,{visible:G,onCancel:R,title:"\u5BFC\u5165\u8868\u7ED3\u6784",onOk:function(){return S({tables:L.join(",")})},width:900,okText:"\u63D0\u4EA4",children:(0,n.jsx)(r.Z,{ghost:!0,size:"small",actionRef:m,pagination:{pageSize:10,current:1},columns:d,rowKey:"tableName",search:{filterType:"light"},rowSelection:{onChange:function(h){C(h)}},options:!1,request:s()(o()().mark(function b(){var h,$,K,ne=arguments;return o()().wrap(function(ae){for(;;)switch(ae.prev=ae.next){case 0:return ae.next=2,(0,x.we)(Y.h$.apply(void 0,ne));case 2:return h=ae.sent,$=h.rows,K=h.total,ae.abrupt("return",{data:$,total:K,success:!0});case 6:case"end":return ae.stop()}},b)}))})})]})},O=e,oe=t(8667),le=function(m){var l=m.tableId,f=(0,I.Zl)(U);return(0,n.jsx)(g.Z,{onClick:function(){return f(l)},type:"link",icon:(0,n.jsx)(oe.Z,{}),children:"\u9884\u89C8"})},ie=le,se=t(59138),ce=function(m){var l=m.tableName,f=(0,E.useMutation)(s()(o()().mark(function R(){return o()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,(0,x.He)({tableName:l});case 2:case"end":return p.stop()}},R)})),{onSuccess:function(){D.ZP.success("\u540C\u6B65\u6210\u529F")}}),w=f.isLoading,G=f.mutate;return(0,n.jsx)(g.Z,{loading:w,type:"link",icon:(0,n.jsx)(se.Z,{}),onClick:function(){return G()},children:"\u540C\u6B65"})},de=ce,me=t(42020),ve=t(10979),ue=t(26494),pe=t(96022),he=t(86322),fe=t.n(he),ye=t(56802),Se=t(31982),ge=ue.Z.TabPane,Te=function(m){fe()(m),D.ZP.success("\u590D\u5236\u6210\u529F")},Ce=function(){var m=(0,I.rb)(U),l=(0,I.sJ)(U),f=l>0,w=(0,ve.Z)(s()(o()().mark(function v(){var p;return o()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,(0,x.Zd)({tableId:l});case 2:return p=C.sent,C.abrupt("return",Object.keys(p).map(function(c){return{tab:c,key:c,content:p[c],highlightContent:ye.Z.highlightAuto(p[c]).value}}));case 4:case"end":return C.stop()}},v)})),{ready:f,refreshDeps:[l]}),G=w.data,R=w.loading;return(0,n.jsx)(j.Z,{visible:f,onCancel:m,width:"80%",footer:!1,title:"\u9884\u89C8\u4EE3\u7801",bodyStyle:{height:"700px"},children:(0,n.jsx)(pe.Z,{spinning:R,children:(0,n.jsx)(ue.Z,{tabPosition:"left",children:G&&G.map(function(v){var p=v.key,L=v.tab,C=v.content,c=v.highlightContent;return(0,n.jsxs)(ge,{tab:L,className:"relative",children:[(0,n.jsx)(g.Z,{icon:(0,n.jsx)(me.Z,{}),type:"link",className:"absolute top-0 right-1",onClick:function(){return Te(C)},children:"\u590D\u5236\u4EE3\u7801"}),(0,n.jsx)("pre",{children:(0,n.jsx)("code",{children:(0,n.jsx)("div",{className:"h-[650px] overflow-auto",dangerouslySetInnerHTML:{__html:c}})})})]},p)})})})})},we=Ce,be=t(47652),Ie=[i.tC,i.jR,i.q2,i.Jx,i.eJ,i.au,i.fk,{title:"\u64CD\u4F5C",valueType:"option",render:function(m,l){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ie,{tableId:l.tableId}),(0,n.jsx)(F,{tableId:l.tableId}),(0,n.jsx)(A,{tableIds:[l.tableId]}),(0,n.jsx)(de,{tableName:l.tableName}),(0,n.jsx)(N,{rows:[{tableName:l.tableName,genType:l.genType,genPath:l.genPath}]})]})}}],xe=function(){var m=(0,H.Z)(P),l=(0,u.useState)([]),f=T()(l,2),w=f[0],G=f[1],R=(0,u.useState)([]),v=T()(R,2),p=v[0],L=v[1];return(0,n.jsxs)(be.ZP,{children:[(0,n.jsx)(r.Z,{actionRef:m,rowKey:"tableId",rowSelection:{alwaysShowAlert:!0,onChange:function(c,S){G(c),L(S)}},tableAlertOptionRender:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(A,{tableIds:w,isBatch:!0}),(0,n.jsx)(N,{rows:p.map(function(c){var S=c.tableName,b=c.genType,h=c.genPath;return{tableName:S,genType:b,genPath:h}}),isBatch:!0})]})},columns:Ie,toolbar:{actions:[(0,n.jsx)(O,{},"ButtonCreate")]},request:s()(o()().mark(function C(){var c,S,b,h=arguments;return o()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,(0,x.DT)(Y.h$.apply(void 0,h));case 2:return c=K.sent,S=c.total,b=c.rows,K.abrupt("return",{data:b,success:!0,total:S});case 6:case"end":return K.stop()}},C)}))}),(0,n.jsx)(we,{})]})},Re=xe},59373:function(re,J,t){t.d(J,{DI:function(){return D},DT:function(){return q},He:function(){return Y},LV:function(){return ee},XS:function(){return H},Zd:function(){return B},cj:function(){return M},qm:function(){return _},we:function(){return U}});var y=t(35290),o=t.n(y),V=t(30279),s=t.n(V),Q=t(411),T=t.n(Q),i=t(12824);function H(r,a){return I.apply(this,arguments)}function I(){return I=T()(o()().mark(function r(a,u){return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.h3)("/tool/gen/batchGenCode",s()({method:"GET",params:s()({},a)},u||{})));case 1:case"end":return e.stop()}},r)})),I.apply(this,arguments)}function z(r,a){return P.apply(this,arguments)}function P(){return P=_asyncToGenerator(_regeneratorRuntime().mark(function r(a,u){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("/tool/gen/column/list",_objectSpread({method:"GET",params:_objectSpread({},a)},u||{})));case 1:case"end":return e.stop()}},r)})),P.apply(this,arguments)}function U(r,a){return x.apply(this,arguments)}function x(){return x=T()(o()().mark(function r(a,u){return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.h3)("/tool/gen/db/list",s()({method:"POST",headers:{"Content-Type":"application/json"},data:a},u||{})));case 1:case"end":return e.stop()}},r)})),x.apply(this,arguments)}function te(r,a){return E.apply(this,arguments)}function E(){return E=_asyncToGenerator(_regeneratorRuntime().mark(function r(a,u){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("/tool/gen/download",_objectSpread({method:"GET",params:_objectSpread({},a)},u||{})));case 1:case"end":return e.stop()}},r)})),E.apply(this,arguments)}function D(r,a){return j.apply(this,arguments)}function j(){return j=T()(o()().mark(function r(a,u){return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.h3)("/tool/gen/edit",s()({method:"POST",headers:{"Content-Type":"application/json"},data:a},u||{})));case 1:case"end":return e.stop()}},r)})),j.apply(this,arguments)}function g(r,a){return n.apply(this,arguments)}function n(){return n=_asyncToGenerator(_regeneratorRuntime().mark(function r(a,u){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("/tool/gen/genCode",_objectSpread({method:"GET",params:_objectSpread({},a)},u||{})));case 1:case"end":return e.stop()}},r)})),n.apply(this,arguments)}function _(r,a){return A.apply(this,arguments)}function A(){return A=T()(o()().mark(function r(a,u){return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.h3)("/tool/gen/importTable",s()({method:"POST",params:s()({},a)},u||{})));case 1:case"end":return e.stop()}},r)})),A.apply(this,arguments)}function M(r,a){return k.apply(this,arguments)}function k(){return k=T()(o()().mark(function r(a,u){return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.h3)("/tool/gen/info",s()({method:"GET",params:s()({},a)},u||{})));case 1:case"end":return e.stop()}},r)})),k.apply(this,arguments)}function q(r,a){return N.apply(this,arguments)}function N(){return N=T()(o()().mark(function r(a,u){return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.h3)("/tool/gen/list",s()({method:"POST",headers:{"Content-Type":"application/json"},data:a},u||{})));case 1:case"end":return e.stop()}},r)})),N.apply(this,arguments)}function B(r,a){return Z.apply(this,arguments)}function Z(){return Z=T()(o()().mark(function r(a,u){return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.h3)("/tool/gen/preview",s()({method:"GET",params:s()({},a)},u||{})));case 1:case"end":return e.stop()}},r)})),Z.apply(this,arguments)}function ee(r,a){return F.apply(this,arguments)}function F(){return F=T()(o()().mark(function r(a,u){return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.h3)("/tool/gen/remove",s()({method:"POST",params:s()({},a)},u||{})));case 1:case"end":return e.stop()}},r)})),F.apply(this,arguments)}function Y(r,a){return W.apply(this,arguments)}function W(){return W=T()(o()().mark(function r(a,u){return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.h3)("/tool/gen/synchDb",s()({method:"GET",params:s()({},a)},u||{})));case 1:case"end":return e.stop()}},r)})),W.apply(this,arguments)}}}]);
