"use strict";(self.webpackChunkruoyi_x_umi=self.webpackChunkruoyi_x_umi||[]).push([[24],{75303:function(k,x,e){var c=e(84045),a=e(40107),_=e(11527),l=e(50959),h=e(77661),y=["fieldProps","min","proFieldProps","max"],v=function(f,M){var E=f.fieldProps,P=f.min,T=f.proFieldProps,I=f.max,i=(0,a.Z)(f,y);return(0,_.jsx)(h.Z,(0,c.Z)({valueType:"digit",fieldProps:(0,c.Z)({min:P,max:I},E),ref:M,filedConfig:{defaultProps:{width:"100%"}},proFieldProps:T},i))};x.Z=l.forwardRef(v)},58653:function(k,x,e){var c=e(22053),a=e(85979),_=e(84045),l=e(40107),h=e(11527),y=e(26901),v=e(50959),g=e(43555),f=e(77661),M=["fieldProps","options","radioType","layout","proFieldProps","valueEnum"],E=v.forwardRef(function(i,D){var O=i.fieldProps,B=i.options,F=i.radioType,w=i.layout,Z=i.proFieldProps,p=i.valueEnum,m=(0,l.Z)(i,M);return(0,h.jsx)(f.Z,(0,_.Z)((0,_.Z)({valueType:F==="button"?"radioButton":"radio",ref:D,valueEnum:(0,y.h)(p,void 0)},m),{},{fieldProps:(0,_.Z)({options:B,layout:w},O),proFieldProps:Z,filedConfig:{customLightMode:!0}}))}),P=v.forwardRef(function(i,D){var O=i.fieldProps,B=i.children;return(0,h.jsx)(a.ZP,(0,_.Z)((0,_.Z)({},O),{},{ref:D,children:B}))}),T=(0,g.G)(P,{valuePropName:"checked",ignoreWidth:!0}),I=T;I.Group=E,I.Button=a.ZP.Button,I.displayName="ProFormComponent",x.Z=I},44574:function(k,x,e){var c=e(84045),a=e(40107),_=e(11527),l=e(77661),h=["fieldProps","proFieldProps"],y=["fieldProps","proFieldProps"],v="text",g=function(P){var T=P.fieldProps,I=P.proFieldProps,i=(0,a.Z)(P,h);return(0,_.jsx)(l.Z,(0,c.Z)({valueType:v,fieldProps:T,filedConfig:{valueType:v},proFieldProps:I},i))},f=function(P){var T=P.fieldProps,I=P.proFieldProps,i=(0,a.Z)(P,y);return(0,_.jsx)(l.Z,(0,c.Z)({valueType:"password",fieldProps:T,proFieldProps:I,filedConfig:{valueType:v}},i))},M=g;M.Password=f,M.displayName="ProFormComponent",x.Z=M},73318:function(k,x,e){var c=e(84045),a=e(40107),_=e(11527),l=e(50959),h=e(77661),y=["fieldProps","proFieldProps"],v=function(f,M){var E=f.fieldProps,P=f.proFieldProps,T=(0,a.Z)(f,y);return(0,_.jsx)(h.Z,(0,c.Z)({ref:M,valueType:"textarea",fieldProps:E,proFieldProps:P},T))};x.Z=l.forwardRef(v)},33955:function(k,x,e){e.d(x,{ew:function(){return s},Jx:function(){return M},iT:function(){return T},Zi:function(){return P},Bw:function(){return I},eJ:function(){return _},fk:function(){return y},sE:function(){return h},WW:function(){return E},sy:function(){return Y},E$:function(){return G},_M:function(){return X},tC:function(){return a},wX:function(){return B},oh:function(){return O},Uc:function(){return F},x:function(){return w},Mw:function(){return Z},p_:function(){return D},$V:function(){return i},Qo:function(){return A},$9:function(){return R},Jy:function(){return p},VP:function(){return v},g4:function(){return Q},Fu:function(){return V},Rj:function(){return J},tE:function(){return z},iO:function(){return d},q2:function(){return f},jR:function(){return g},BP:function(){return m},au:function(){return l}});var c=e(12005),a={title:"\u5E8F\u53F7",dataIndex:"index",key:"index",valueType:"indexBorder",width:60},_={title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",key:"createTime",valueType:"dateTime",hideInSearch:!0,sorter:!0},l={title:"\u66F4\u65B0\u65F6\u95F4",dataIndex:"updateTime",key:"updateTime",valueType:"dateTime",hideInSearch:!0,sorter:!0},h={title:"\u72B6\u6001",dataIndex:"status",key:"status",valueType:"radio",valueEnum:c.al},y={title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTimeRange",key:"createTimeRange",valueType:"dateTimeRange",hideInTable:!0,search:{transform:function(H){return{beginCreateTime:H[0],endCreateTime:H[1]}}}},v={title:"\u5907\u6CE8",dataIndex:"remark",key:"remark",valueType:"textarea",hideInSearch:!0},g={title:"\u8868\u540D\u79F0",dataIndex:"tableName",key:"tableName",valueType:"text"},f={title:"\u8868\u63CF\u8FF0",dataIndex:"tableComment",key:"tableComment",valueType:"text"},M={title:"\u5B9E\u4F53\u540D\u79F0",dataIndex:"className",key:"className",valueType:"text",hideInSearch:!0},E={title:"\u4F5C\u8005",dataIndex:"functionAuthor",key:"functionAuthor",valueType:"text"},P={title:"\u5B57\u6BB5\u540D\u79F0",dataIndex:"columnName",key:"columnName",valueType:"text",editable:!1,ellipsis:!0,width:100},T={title:"\u5B57\u6BB5\u63CF\u8FF0",dataIndex:"columnComment",key:"columnComment",valueType:"text",width:250},I={title:"\u7269\u7406\u7C7B\u578B",dataIndex:"columnType",key:"columnType",valueType:"text",editable:!1,ellipsis:!0,width:100},i={title:"JAVA\u7C7B\u578B",dataIndex:"javaType",key:"javaType",valueType:"select",valueEnum:c.gh,width:90},D={title:"JAVA\u5C5E\u6027",dataIndex:"javaField",key:"javaField",valueType:"text",width:140},O={title:"\u63D2\u5165",dataIndex:"isInsert",key:"isInsert",valueType:"radioButton",width:115,valueEnum:c.gc},B={title:"\u7F16\u8F91",dataIndex:"isEdit",key:"isEdit",valueType:"radioButton",width:115,valueEnum:c.gc},F={title:"\u5217\u8868",dataIndex:"isList",key:"isList",valueType:"radioButton",width:115,valueEnum:c.gc},w={title:"\u67E5\u8BE2",dataIndex:"isQuery",key:"isQuery",valueType:"radioButton",width:115,valueEnum:c.gc},Z={title:"\u5FC5\u586B",dataIndex:"isRequired",key:"isRequired",valueType:"radioButton",width:115,valueEnum:c.gc},p={title:"\u67E5\u8BE2\u65B9\u5F0F",dataIndex:"queryType",key:"queryType",valueType:"select",valueEnum:c.CX,width:70},m={title:"\u751F\u6210\u6A21\u7248",dataIndex:"tplCategory",key:"tplCategory",valueType:"select",valueEnum:c.V},R={title:"\u751F\u6210\u5305\u8DEF\u5F84",dataIndex:"packageName",key:"packageName",valueType:"text"},A={title:"\u751F\u6210\u6A21\u5757\u540D",dataIndex:"moduleName",key:"moduleName",valueType:"text"},s={title:"\u751F\u6210\u4E1A\u52A1\u540D",dataIndex:"businessName",key:"businessName",valueType:"text"},Y={title:"\u751F\u6210\u529F\u80FD\u540D",dataIndex:"functionName",key:"functionName",valueType:"text"},X={title:"\u751F\u6210\u4EE3\u7801\u65B9\u5F0F",dataIndex:"genType",key:"genType",valueType:"select",valueEnum:c.LZ},G={title:"\u81EA\u5B9A\u4E49\u8DEF\u5F84",dataIndex:"genPath",key:"genPath",valueType:"text"},d={title:"\u5E8F\u53F7",dataIndex:"sort",valueType:"indexBorder",editable:!1,width:80},J={title:"\u89D2\u8272\u540D\u79F0",dataIndex:"roleName",key:"roleName",valueType:"text"},Q={title:"\u89D2\u8272ID",dataIndex:"roleId",key:"roleId",valueType:"text",hideInSearch:!0,editable:!1},V={title:"\u6743\u9650\u5B57\u7B26",dataIndex:"roleKey",key:"roleKey",valueType:"text"},z={title:"\u663E\u793A\u6392\u5E8F",dataIndex:"roleSort",key:"roleSort",valueType:"text",hideInSearch:!0}},70410:function(k,x,e){e.d(x,{Z:function(){return _}});var c=e(50959),a=e(98205),_=function(h){var y=(0,c.useRef)(),v=(0,a.Zl)(h);return(0,c.useEffect)(function(){y!=null&&y.current&&v(y.current)},[]),y}},77487:function(k,x,e){e.r(x),e.d(x,{default:function(){return ke}});var c=e(35290),a=e.n(c),_=e(411),l=e.n(_),h=e(33955),y=e(70410),v=e(30279),g=e.n(v),f=e(44463),M=e.n(f),E=e(12005),P=e(46686),T=e.n(P),I=e(78469),i=e(28872),D=e(40168),O=e(98205),B="systemRole",F=[B,"menuTree"],w=(0,O.cn)({key:"".concat(B,"TableActions"),default:void 0}),Z=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return(0,D.useQuery)(F,l()(a()().mark(function u(){var o;return a()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,(0,I.Q_)(r);case 2:return o=S.sent,S.abrupt("return",{treeData:o,parentIds:(0,i.Vy)(o)});case 4:case"end":return S.stop()}},u)})))},p=e(8790),m=e(98408),R=e(25864),A=e(40190),s=e(76742),Y=e(47581),X=e(56398),G=e(50959),d=e(11527),J={title:"label",key:"id",children:"children"},Q=function(r){var u,o,t=r.value,S=r.onChange,K=Z(),C=K.data,$=(0,G.useState)([]),W=T()($,2),b=W[0],j=W[1],pe=(0,G.useState)([]),me=T()(pe,2),L=me[0],_e=me[1],Ke=(0,G.useState)(!1),Pe=T()(Ke,2),Te=Pe[0],$e=Pe[1],Ce=function(U){S==null||S(g()(g()({menuIds:b,menuCheckStrictly:Te},t),U))},Ge=function(U){var Se=Array.isArray(U)?U:U==null?void 0:U.checked;j(Se),Ce({menuIds:Se})},Ne=function(U){$e(!U.target.checked),Ce({menuCheckStrictly:!U.target.checked})},ge=(u=C==null?void 0:C.parentIds)!==null&&u!==void 0?u:[],ye=L&&L.length>0&&L.length===ge.length;return(0,d.jsxs)(R.Z,{bordered:!0,children:[(0,d.jsxs)(A.Z,{className:"mb-2",children:[(0,d.jsx)(s.Z,{size:"small",icon:ye?(0,d.jsx)(p.Z,{}):(0,d.jsx)(m.Z,{}),onClick:function(){return _e(ye?[]:ge)},children:ye?"\u5168\u90E8\u6298\u53E0":"\u5168\u90E8\u5C55\u5F00"}),(0,d.jsx)(Y.Z,{defaultChecked:!0,onChange:Ne,children:"\u7236\u5B50\u8054\u52A8"})]}),(0,d.jsx)(X.Z,{checkable:!0,treeData:(o=C==null?void 0:C.treeData)!==null&&o!==void 0?o:[],fieldNames:J,checkedKeys:b,onCheck:Ge,expandedKeys:L,onExpand:_e,checkStrictly:Te})]})},V=Q;function z(n,r){return N.apply(this,arguments)}function N(){return N=l()(a()().mark(function n(r,u){return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,i.WY)("/system/role/add",g()({method:"POST",headers:{"Content-Type":"application/json"},data:r},u||{})));case 1:case"end":return t.stop()}},n)})),N.apply(this,arguments)}function H(n,r){return q.apply(this,arguments)}function q(){return q=_asyncToGenerator(_regeneratorRuntime().mark(function n(r,u){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/system/role/authUser/allocatedList",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:r},u||{})));case 1:case"end":return t.stop()}},n)})),q.apply(this,arguments)}function Ye(n,r){return ee.apply(this,arguments)}function ee(){return ee=_asyncToGenerator(_regeneratorRuntime().mark(function n(r,u){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/system/role/authUser/cancel",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:r},u||{})));case 1:case"end":return t.stop()}},n)})),ee.apply(this,arguments)}function Xe(n,r){return te.apply(this,arguments)}function te(){return te=_asyncToGenerator(_regeneratorRuntime().mark(function n(r,u){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/system/role/authUser/cancelAll",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:r},u||{})));case 1:case"end":return t.stop()}},n)})),te.apply(this,arguments)}function Je(n,r){return re.apply(this,arguments)}function re(){return re=_asyncToGenerator(_regeneratorRuntime().mark(function n(r,u){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/system/role/authUser/selectAll",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:r},u||{})));case 1:case"end":return t.stop()}},n)})),re.apply(this,arguments)}function Qe(n,r){return ne.apply(this,arguments)}function ne(){return ne=_asyncToGenerator(_regeneratorRuntime().mark(function n(r,u){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/system/role/authUser/unallocatedList",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:r},u||{})));case 1:case"end":return t.stop()}},n)})),ne.apply(this,arguments)}function Ve(n,r){return ae.apply(this,arguments)}function ae(){return ae=_asyncToGenerator(_regeneratorRuntime().mark(function n(r,u){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/system/role/changeStatus",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:r},u||{})));case 1:case"end":return t.stop()}},n)})),ae.apply(this,arguments)}function ze(n,r){return ue.apply(this,arguments)}function ue(){return ue=_asyncToGenerator(_regeneratorRuntime().mark(function n(r,u){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/system/role/dataScope",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:r},u||{})));case 1:case"end":return t.stop()}},n)})),ue.apply(this,arguments)}function He(n,r){return se.apply(this,arguments)}function se(){return se=_asyncToGenerator(_regeneratorRuntime().mark(function n(r,u){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/system/role/edit",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:r},u||{})));case 1:case"end":return t.stop()}},n)})),se.apply(this,arguments)}function qe(n,r){return oe.apply(this,arguments)}function oe(){return oe=_asyncToGenerator(_regeneratorRuntime().mark(function n(r,u){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/system/role/export",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:r},u||{})));case 1:case"end":return t.stop()}},n)})),oe.apply(this,arguments)}function et(n,r){return le.apply(this,arguments)}function le(){return le=_asyncToGenerator(_regeneratorRuntime().mark(function n(r,u){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/system/role/info",_objectSpread({method:"GET",params:_objectSpread({},r)},u||{})));case 1:case"end":return t.stop()}},n)})),le.apply(this,arguments)}function Ee(n,r){return ie.apply(this,arguments)}function ie(){return ie=l()(a()().mark(function n(r,u){return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,i.WY)("/system/role/list",g()({method:"POST",headers:{"Content-Type":"application/json"},data:r},u||{})));case 1:case"end":return t.stop()}},n)})),ie.apply(this,arguments)}function tt(n){return de.apply(this,arguments)}function de(){return de=_asyncToGenerator(_regeneratorRuntime().mark(function n(r){return _regeneratorRuntime().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",request("/system/role/optionSelect",_objectSpread({method:"GET"},r||{})));case 1:case"end":return o.stop()}},n)})),de.apply(this,arguments)}function Re(n,r){return ce.apply(this,arguments)}function ce(){return ce=l()(a()().mark(function n(r,u){return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,i.WY)("/system/role/remove",g()({method:"POST",params:g()({},r)},u||{})));case 1:case"end":return t.stop()}},n)})),ce.apply(this,arguments)}var xe=e(20436),Ie=e(61391),he=e(44574),Me=e(75303),je=e(58653),Oe=e(73318),De=e(8926),fe=e(27375),Ae=["menuInfo"],be=function(){var r=(0,O.sJ)(w),u=(0,D.useMutation)(z,{onSuccess:function(){r==null||r.reload(),fe.ZP.success("\u65B0\u5EFA\u6210\u529F")}}),o=u.mutateAsync;return(0,d.jsxs)(Ie.Y,{title:"\u65B0\u5EFA\u89D2\u8272",trigger:(0,d.jsx)(s.Z,{type:"primary",icon:(0,d.jsx)(xe.Z,{}),children:"\u65B0\u5EFA"}),onFinish:function(){var t=l()(a()().mark(function S(K){var C,$,W;return a()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return C=K.menuInfo,$=C===void 0?{menuIds:[],menuCheckStrictly:!0}:C,W=M()(K,Ae),j.next=3,o(g()(g()({},W),$));case 3:return j.abrupt("return",!0);case 4:case"end":return j.stop()}},S)}));return function(S){return t.apply(this,arguments)}}(),width:500,modalProps:{bodyStyle:E.qt},children:[(0,d.jsx)(he.Z,{name:"roleName",label:"\u89D2\u8272\u540D\u79F0",rules:[{required:!0}]}),(0,d.jsx)(he.Z,{name:"roleKey",label:"\u6743\u9650\u5B57\u7B26",rules:[{required:!0}],tooltip:"\u63A7\u5236\u5668\u4E2D\u5B9A\u4E49\u7684\u6743\u9650\u5B57\u7B26\uFF0C\u5982\uFF1A@PreAuthorize(`@ss.hasRole('admin')`)"}),(0,d.jsx)(Me.Z,{name:"roleSort",label:"\u663E\u793A\u6392\u5E8F",rules:[{required:!0}],initialValue:0}),(0,d.jsx)(je.Z.Group,{name:"status",label:"\u72B6\u6001",valueEnum:E.al,initialValue:E.vu.ENABLE}),(0,d.jsx)(Oe.Z,{name:"remark",label:"\u5907\u6CE8"}),(0,d.jsx)(De.Z,{name:"menuInfo",label:"\u83DC\u5355\u6743\u9650",children:(0,d.jsx)(V,{})})]})},Ue=be,Be=e(71224),Fe=e(29373),we=function(r){var u=r.roleIds,o=u.join(","),t=(0,O.sJ)(w),S=(0,D.useMutation)(l()(a()().mark(function W(){return a()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,Re({roleIds:o});case 2:case"end":return j.stop()}},W)})),{onSuccess:function(){var b;t==null||(b=t.clearSelected)===null||b===void 0||b.call(t),t==null||t.reload(),fe.ZP.success("\u5220\u9664\u6210\u529F")}}),K=S.isLoading,C=S.mutateAsync,$=function(){return Fe.Z.confirm({title:"\u5220\u9664\u786E\u8BA4",content:"\u786E\u5B9A\u5220\u9664 \u89D2\u8272ID \u4E3A ".concat(o," \u7684\u89D2\u8272\u5417\uFF1F"),onOk:function(){var b=l()(a()().mark(function pe(){return a()().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return L.next=2,C();case 2:case"end":return L.stop()}},pe)}));function j(){return b.apply(this,arguments)}return j}()})};return(0,d.jsx)(s.Z,{type:"link",icon:(0,d.jsx)(Be.Z,{}),loading:K,onClick:$,children:"\u5220\u9664"})},Ze=we,We=e(76344),Le=e(42431);function ke(){var n=(0,y.Z)(w);return(0,d.jsx)(Le.ZP,{children:(0,d.jsx)(We.Z,{rowKey:"roleId",actionRef:n,columns:[h.g4,h.sE,h.Rj,h.Fu,h.tE,h.eJ,h.fk,{title:"\u64CD\u4F5C",dataIndex:"option",valueType:"option",render:function(u,o){return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(Ze,{roleIds:[o.roleId]})})}}],request:l()(a()().mark(function r(){var u,o,t,S=arguments;return a()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Ee(i.h$.apply(void 0,S));case 2:return u=C.sent,o=u.rows,t=u.total,C.abrupt("return",{data:o,total:t,success:!0});case 6:case"end":return C.stop()}},r)})),toolbar:{actions:[(0,d.jsx)(Ue,{},"ButtonCreate")]}})})}},78469:function(k,x,e){e.d(x,{CP:function(){return I},FV:function(){return g},Q_:function(){return w},WJ:function(){return P},Yh:function(){return M},tg:function(){return D}});var c=e(35290),a=e.n(c),_=e(30279),l=e.n(_),h=e(411),y=e.n(h),v=e(28872);function g(p,m){return f.apply(this,arguments)}function f(){return f=y()(a()().mark(function p(m,R){return a()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,v.WY)("/system/menu/add",l()({method:"POST",headers:{"Content-Type":"application/json"},data:m},R||{})));case 1:case"end":return s.stop()}},p)})),f.apply(this,arguments)}function M(p,m){return E.apply(this,arguments)}function E(){return E=y()(a()().mark(function p(m,R){return a()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,v.WY)("/system/menu/edit",l()({method:"POST",headers:{"Content-Type":"application/json"},data:m},R||{})));case 1:case"end":return s.stop()}},p)})),E.apply(this,arguments)}function P(p,m){return T.apply(this,arguments)}function T(){return T=y()(a()().mark(function p(m,R){return a()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,v.WY)("/system/menu/info",l()({method:"GET",params:l()({},m)},R||{})));case 1:case"end":return s.stop()}},p)})),T.apply(this,arguments)}function I(p,m){return i.apply(this,arguments)}function i(){return i=y()(a()().mark(function p(m,R){return a()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,v.WY)("/system/menu/list",l()({method:"POST",headers:{"Content-Type":"application/json"},data:m},R||{})));case 1:case"end":return s.stop()}},p)})),i.apply(this,arguments)}function D(p,m){return O.apply(this,arguments)}function O(){return O=y()(a()().mark(function p(m,R){return a()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,v.WY)("/system/menu/remove",l()({method:"POST",params:l()({},m)},R||{})));case 1:case"end":return s.stop()}},p)})),O.apply(this,arguments)}function B(p,m){return F.apply(this,arguments)}function F(){return F=_asyncToGenerator(_regeneratorRuntime().mark(function p(m,R){return _regeneratorRuntime().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",request("/system/menu/roleMenuTreeSelect",_objectSpread({method:"GET",params:_objectSpread({},m)},R||{})));case 1:case"end":return s.stop()}},p)})),F.apply(this,arguments)}function w(p,m){return Z.apply(this,arguments)}function Z(){return Z=y()(a()().mark(function p(m,R){return a()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,v.WY)("/system/menu/treeSelect",l()({method:"POST",headers:{"Content-Type":"application/json"},data:m},R||{})));case 1:case"end":return s.stop()}},p)})),Z.apply(this,arguments)}}}]);
