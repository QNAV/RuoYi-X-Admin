"use strict";(self.webpackChunkruoyi_x_umi=self.webpackChunkruoyi_x_umi||[]).push([[641],{11941:function(B,x,e){var y=e(82175),i=e(62957),E=e(11527),l=e(50959),f=e(90726),m=["fieldProps","min","proFieldProps","max"],v=function(h,S){var R=h.fieldProps,T=h.min,C=h.proFieldProps,g=h.max,_=(0,i.Z)(h,m);return(0,E.jsx)(f.Z,(0,y.Z)({mode:"edit",valueType:"digit",fieldProps:(0,y.Z)({min:T,max:g},R),ref:S,filedConfig:{defaultProps:{width:"100%"}},proFieldProps:C},_))};x.Z=l.forwardRef(v)},19706:function(B,x,e){var y=e(60660),i=e(65352),E=e(82175),l=e(62957),f=e(11527),m=e(58839),v=e(50959),I=e(39817),h=e(90726),S=["fieldProps","options","radioType","layout","proFieldProps","valueEnum"],R=v.forwardRef(function(_,O){var M=_.fieldProps,D=_.options,b=_.radioType,A=_.layout,j=_.proFieldProps,d=_.valueEnum,p=(0,l.Z)(_,S);return(0,f.jsx)(h.Z,(0,E.Z)((0,E.Z)({mode:"edit",valueType:b==="button"?"radioButton":"radio",ref:O,valueEnum:(0,m.h)(d,void 0)},p),{},{fieldProps:(0,E.Z)({options:D,layout:A},M),proFieldProps:j,filedConfig:{customLightMode:!0}}))}),T=v.forwardRef(function(_,O){var M=_.fieldProps,D=_.children;return(0,f.jsx)(i.ZP,(0,E.Z)((0,E.Z)({},M),{},{ref:O,children:D}))}),C=(0,I.G)(T,{valuePropName:"checked",ignoreWidth:!0}),g=C;g.Group=R,g.Button=i.ZP.Button,g.displayName="ProFormComponent",x.Z=g},60074:function(B,x,e){var y=e(82175),i=e(62957),E=e(11527),l=e(90726),f=["fieldProps","proFieldProps"],m=["fieldProps","proFieldProps"],v="text",I=function(T){var C=T.fieldProps,g=T.proFieldProps,_=(0,i.Z)(T,f);return(0,E.jsx)(l.Z,(0,y.Z)({mode:"edit",valueType:v,fieldProps:C,filedConfig:{valueType:v},proFieldProps:g},_))},h=function(T){var C=T.fieldProps,g=T.proFieldProps,_=(0,i.Z)(T,m);return(0,E.jsx)(l.Z,(0,y.Z)({mode:"edit",valueType:"password",fieldProps:C,proFieldProps:g,filedConfig:{valueType:v}},_))},S=I;S.Password=h,S.displayName="ProFormComponent",x.Z=S},66512:function(B,x,e){var y=e(82175),i=e(62957),E=e(11527),l=e(50959),f=e(90726),m=["fieldProps","proFieldProps"],v=function(h,S){var R=h.fieldProps,T=h.proFieldProps,C=(0,i.Z)(h,m);return(0,E.jsx)(f.Z,(0,y.Z)({ref:S,mode:"edit",valueType:"textarea",fieldProps:R,proFieldProps:T},C))};x.Z=l.forwardRef(v)},33921:function(B,x,e){e.d(x,{ew:function(){return u},Jx:function(){return S},iT:function(){return C},Zi:function(){return T},Bw:function(){return g},eJ:function(){return E},fk:function(){return m},sE:function(){return f},WW:function(){return R},sy:function(){return G},E$:function(){return $},_M:function(){return N},tC:function(){return i},wX:function(){return D},oh:function(){return M},Uc:function(){return b},x:function(){return A},Mw:function(){return j},p_:function(){return O},$V:function(){return _},Qo:function(){return o},$9:function(){return P},Jy:function(){return d},VP:function(){return v},g4:function(){return Z},Fu:function(){return se},Rj:function(){return Y},tE:function(){return L},iO:function(){return W},q2:function(){return h},jR:function(){return I},BP:function(){return p},au:function(){return l}});var y=e(75786),i={title:"\u5E8F\u53F7",dataIndex:"index",key:"index",valueType:"indexBorder",width:60},E={title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",key:"createTime",valueType:"dateTime",hideInSearch:!0,sorter:!0},l={title:"\u66F4\u65B0\u65F6\u95F4",dataIndex:"updateTime",key:"updateTime",valueType:"dateTime",hideInSearch:!0,sorter:!0},f={title:"\u72B6\u6001",dataIndex:"status",key:"status",valueType:"radio",valueEnum:y.IZ},m={title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTimeRange",key:"createTimeRange",valueType:"dateTimeRange",hideInTable:!0,search:{transform:function(w){return{beginCreateTime:w[0],endCreateTime:w[1]}}}},v={title:"\u5907\u6CE8",dataIndex:"remark",key:"remark",valueType:"textarea",hideInSearch:!0},I={title:"\u8868\u540D\u79F0",dataIndex:"tableName",key:"tableName",valueType:"text"},h={title:"\u8868\u63CF\u8FF0",dataIndex:"tableComment",key:"tableComment",valueType:"text"},S={title:"\u5B9E\u4F53\u540D\u79F0",dataIndex:"className",key:"className",valueType:"text",hideInSearch:!0},R={title:"\u4F5C\u8005",dataIndex:"functionAuthor",key:"functionAuthor",valueType:"text"},T={title:"\u5B57\u6BB5\u540D\u79F0",dataIndex:"columnName",key:"columnName",valueType:"text",editable:!1,ellipsis:!0,width:100},C={title:"\u5B57\u6BB5\u63CF\u8FF0",dataIndex:"columnComment",key:"columnComment",valueType:"text",width:250},g={title:"\u7269\u7406\u7C7B\u578B",dataIndex:"columnType",key:"columnType",valueType:"text",editable:!1,ellipsis:!0,width:100},_={title:"JAVA\u7C7B\u578B",dataIndex:"javaType",key:"javaType",valueType:"select",valueEnum:y.Xp,width:90},O={title:"JAVA\u5C5E\u6027",dataIndex:"javaField",key:"javaField",valueType:"text",width:140},M={title:"\u63D2\u5165",dataIndex:"isInsert",key:"isInsert",valueType:"radioButton",width:115,valueEnum:y.sv},D={title:"\u7F16\u8F91",dataIndex:"isEdit",key:"isEdit",valueType:"radioButton",width:115,valueEnum:y.sv},b={title:"\u5217\u8868",dataIndex:"isList",key:"isList",valueType:"radioButton",width:115,valueEnum:y.sv},A={title:"\u67E5\u8BE2",dataIndex:"isQuery",key:"isQuery",valueType:"radioButton",width:115,valueEnum:y.sv},j={title:"\u5FC5\u586B",dataIndex:"isRequired",key:"isRequired",valueType:"radioButton",width:115,valueEnum:y.sv},d={title:"\u67E5\u8BE2\u65B9\u5F0F",dataIndex:"queryType",key:"queryType",valueType:"select",valueEnum:y.g7,width:70},p={title:"\u751F\u6210\u6A21\u7248",dataIndex:"tplCategory",key:"tplCategory",valueType:"select",valueEnum:y.m$},P={title:"\u751F\u6210\u5305\u8DEF\u5F84",dataIndex:"packageName",key:"packageName",valueType:"text"},o={title:"\u751F\u6210\u6A21\u5757\u540D",dataIndex:"moduleName",key:"moduleName",valueType:"text"},u={title:"\u751F\u6210\u4E1A\u52A1\u540D",dataIndex:"businessName",key:"businessName",valueType:"text"},G={title:"\u751F\u6210\u529F\u80FD\u540D",dataIndex:"functionName",key:"functionName",valueType:"text"},N={title:"\u751F\u6210\u4EE3\u7801\u65B9\u5F0F",dataIndex:"genType",key:"genType",valueType:"select",valueEnum:y.WZ},$={title:"\u81EA\u5B9A\u4E49\u8DEF\u5F84",dataIndex:"genPath",key:"genPath",valueType:"text"},W={title:"\u5E8F\u53F7",dataIndex:"sort",valueType:"indexBorder",editable:!1,width:80},Y={title:"\u89D2\u8272\u540D\u79F0",dataIndex:"roleName",key:"roleName",valueType:"text"},Z={title:"\u89D2\u8272ID",dataIndex:"roleId",key:"roleId",valueType:"text",hideInSearch:!0,editable:!1},se={title:"\u6743\u9650\u5B57\u7B26",dataIndex:"roleKey",key:"roleKey",valueType:"text"},L={title:"\u89D2\u8272\u6392\u5E8F",dataIndex:"roleSort",key:"roleSort",valueType:"text",hideInSearch:!0}},86922:function(B,x,e){e.r(x),e.d(x,{default:function(){return Ie}});var y=e(18172),i=e.n(y),E=e(29960),l=e.n(E),f=e(33921),m=e(75786),v=e(3849),I=e.n(v),h=e(61010),S=e(41595),R=e(2891),T=e(87130),C="systemRole",g=[C,"menuTree"],_=(0,T.cn)({key:"".concat(C,"TableActions")}),O=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return(0,R.aM)(g,i()(l().mark(function a(){var s;return l().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,(0,h.Q_)(r);case 2:return s=c.sent,console.log(s),c.abrupt("return",{treeData:s,parentIds:(0,S.Vy)(s)});case 5:case"end":return c.stop()}},a)})))},M=e(8790),D=e(98408),b=e(63978),A=e(14578),j=e(44631),d=e(82379),p=e(41315),P=e(50959),o=e(11527),u={title:"label",key:"id",children:"children"},G=function(){var r,a,s=O(),t=s.data,c=(0,P.useState)(),K=I()(c,2),ae=K[0],le=K[1],F=(0,P.useState)([]),ie=I()(F,2),k=ie[0],de=ie[1],Me=(0,P.useState)(),pe=I()(Me,2),je=pe[0],Oe=pe[1];console.log(t);var ce=(r=t==null?void 0:t.parentIds)!==null&&r!==void 0?r:[],ue=k&&k.length>0&&k.length===ce.length;return(0,o.jsxs)(b.Z,{bordered:!0,ghost:!0,children:[(0,o.jsxs)(A.Z,{children:[(0,o.jsx)(j.Z,{size:"small",icon:ue?(0,o.jsx)(M.Z,{}):(0,o.jsx)(D.Z,{}),onClick:function(){return de(ue?[]:ce)},children:ue?"\u5168\u90E8\u6298\u53E0":"\u5168\u90E8\u5C55\u5F00"}),(0,o.jsx)(d.Z,{defaultChecked:!0,onChange:function(U){return Oe(!U.target.checked)},children:"\u7236\u5B50\u8054\u52A8"})]}),(0,o.jsx)(p.Z,{checkable:!0,treeData:(a=t==null?void 0:t.treeData)!==null&&a!==void 0?a:[],fieldNames:u,checkedKeys:ae,onCheck:function(U){return le(Array.isArray(U)?U:U==null?void 0:U.checked)},expandedKeys:k,onExpand:de,checkStrictly:je})]})},N=G,$=e(55980),W=e.n($);function Y(n,r){return Z.apply(this,arguments)}function Z(){return Z=i()(l().mark(function n(r,a){return l().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,S.WY)("/system/role/add",W()({method:"POST",headers:{"Content-Type":"application/json"},data:r},a||{})));case 1:case"end":return t.stop()}},n)})),Z.apply(this,arguments)}function se(n,r,a){return L.apply(this,arguments)}function L(){return L=_asyncToGenerator(_regeneratorRuntime.mark(function n(r,a,s){return _regeneratorRuntime.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",request("/system/role/authUser/allocatedList",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},params:_objectSpread({},r),data:a},s||{})));case 1:case"end":return c.stop()}},n)})),L.apply(this,arguments)}function ye(n,r){return w.apply(this,arguments)}function w(){return w=_asyncToGenerator(_regeneratorRuntime.mark(function n(r,a){return _regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/system/role/authUser/cancel",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:r},a||{})));case 1:case"end":return t.stop()}},n)})),w.apply(this,arguments)}function be(n,r){return X.apply(this,arguments)}function X(){return X=_asyncToGenerator(_regeneratorRuntime.mark(function n(r,a){return _regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/system/role/authUser/cancelAll",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:r},a||{})));case 1:case"end":return t.stop()}},n)})),X.apply(this,arguments)}function De(n,r){return Q.apply(this,arguments)}function Q(){return Q=_asyncToGenerator(_regeneratorRuntime.mark(function n(r,a){return _regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/system/role/authUser/selectAll",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:r},a||{})));case 1:case"end":return t.stop()}},n)})),Q.apply(this,arguments)}function Ae(n,r,a){return J.apply(this,arguments)}function J(){return J=_asyncToGenerator(_regeneratorRuntime.mark(function n(r,a,s){return _regeneratorRuntime.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",request("/system/role/authUser/unallocatedList",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},params:_objectSpread({},r),data:a},s||{})));case 1:case"end":return c.stop()}},n)})),J.apply(this,arguments)}function Ue(n,r){return V.apply(this,arguments)}function V(){return V=_asyncToGenerator(_regeneratorRuntime.mark(function n(r,a){return _regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/system/role/changeStatus",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:r},a||{})));case 1:case"end":return t.stop()}},n)})),V.apply(this,arguments)}function Be(n,r){return z.apply(this,arguments)}function z(){return z=_asyncToGenerator(_regeneratorRuntime.mark(function n(r,a){return _regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/system/role/dataScope",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:r},a||{})));case 1:case"end":return t.stop()}},n)})),z.apply(this,arguments)}function we(n,r){return H.apply(this,arguments)}function H(){return H=_asyncToGenerator(_regeneratorRuntime.mark(function n(r,a){return _regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/system/role/edit",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:r},a||{})));case 1:case"end":return t.stop()}},n)})),H.apply(this,arguments)}function Fe(n,r){return q.apply(this,arguments)}function q(){return q=_asyncToGenerator(_regeneratorRuntime.mark(function n(r,a){return _regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/system/role/export",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:r},a||{})));case 1:case"end":return t.stop()}},n)})),q.apply(this,arguments)}function We(n,r){return ee.apply(this,arguments)}function ee(){return ee=_asyncToGenerator(_regeneratorRuntime.mark(function n(r,a){return _regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/system/role/info",_objectSpread({method:"GET",params:_objectSpread({},r)},a||{})));case 1:case"end":return t.stop()}},n)})),ee.apply(this,arguments)}function _e(n,r,a){return te.apply(this,arguments)}function te(){return te=i()(l().mark(function n(r,a,s){return l().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",(0,S.WY)("/system/role/list",W()({method:"POST",headers:{"Content-Type":"application/json"},params:W()({},r),data:a},s||{})));case 1:case"end":return c.stop()}},n)})),te.apply(this,arguments)}function Ze(n){return re.apply(this,arguments)}function re(){return re=_asyncToGenerator(_regeneratorRuntime.mark(function n(r){return _regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",request("/system/role/optionSelect",_objectSpread({method:"GET"},r||{})));case 1:case"end":return s.stop()}},n)})),re.apply(this,arguments)}function Le(n,r){return ne.apply(this,arguments)}function ne(){return ne=_asyncToGenerator(_regeneratorRuntime.mark(function n(r,a){return _regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/system/role/remove",_objectSpread({method:"POST",params:_objectSpread({},r)},a||{})));case 1:case"end":return t.stop()}},n)})),ne.apply(this,arguments)}var ve=e(20436),he=e(14866),oe=e(60074),fe=e(11941),Pe=e(19706),Te=e(25449),Ee=e(66512),Ce=e(90964),Se=function(r){var a=r.reloadTable,s=(0,R.Db)(Y,{onSuccess:function(){a(),Ce.ZP.success("\u65B0\u5EFA\u6210\u529F")}}),t=s.mutateAsync;return(0,o.jsxs)(he.Y,{title:"\u65B0\u5EFA\u89D2\u8272",trigger:(0,o.jsx)(j.Z,{type:"primary",icon:(0,o.jsx)(ve.Z,{}),children:"\u65B0\u5EFA"}),onFinish:function(){var c=i()(l().mark(function K(ae){return l().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,t(ae);case 2:case"end":return F.stop()}},K)}));return function(K){return c.apply(this,arguments)}}(),width:500,children:[(0,o.jsx)(oe.Z,{name:"roleName",label:"\u89D2\u8272\u540D\u79F0",rules:[{required:!0}]}),(0,o.jsx)(oe.Z,{name:"roleKey",label:"\u6743\u9650\u5B57\u7B26",rules:[{required:!0}],tooltip:"\u63A7\u5236\u5668\u4E2D\u5B9A\u4E49\u7684\u6743\u9650\u5B57\u7B26\uFF0C\u5982\uFF1A@PreAuthorize(`@ss.hasRole('admin')`)"}),(0,o.jsx)(fe.Z,{name:"roleSort",label:"\u89D2\u8272\u6392\u5E8F",rules:[{required:!0}],initialValue:0}),(0,o.jsx)(Pe.Z.Group,{name:"status",label:"\u72B6\u6001",valueEnum:m.IZ,initialValue:m.vu.ENABLE}),(0,o.jsx)(Te.Z,{label:"\u83DC\u5355\u6743\u9650",children:(0,o.jsx)(N,{})}),(0,o.jsx)(Ee.Z,{name:"remark",label:"\u5907\u6CE8"})]})},Re=Se,ge=e(84893),xe=e(2321);function Ie(){var n=(0,P.useRef)();return(0,o.jsx)(xe._z,{children:(0,o.jsx)(ge.Z,{actionRef:n,columns:[f.g4,f.sE,f.Rj,f.Fu,f.tE,f.eJ,f.fk],request:i()(l().mark(function r(){return l().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,_e({},{});case 2:return s.abrupt("return",s.sent);case 3:case"end":return s.stop()}},r)})),toolbar:{actions:[(0,o.jsx)(Re,{reloadTable:function(){var a;return n==null||(a=n.current)===null||a===void 0?void 0:a.reload()}},"ButtonCreate")]}})})}},61010:function(B,x,e){e.d(x,{CP:function(){return g},FV:function(){return I},Q_:function(){return A},WJ:function(){return T},Yh:function(){return S},tg:function(){return O}});var y=e(55980),i=e.n(y),E=e(18172),l=e.n(E),f=e(29960),m=e.n(f),v=e(41595);function I(d,p){return h.apply(this,arguments)}function h(){return h=l()(m().mark(function d(p,P){return m().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,v.WY)("/system/menu/add",i()({method:"POST",headers:{"Content-Type":"application/json"},data:p},P||{})));case 1:case"end":return u.stop()}},d)})),h.apply(this,arguments)}function S(d,p){return R.apply(this,arguments)}function R(){return R=l()(m().mark(function d(p,P){return m().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,v.WY)("/system/menu/edit",i()({method:"POST",headers:{"Content-Type":"application/json"},data:p},P||{})));case 1:case"end":return u.stop()}},d)})),R.apply(this,arguments)}function T(d,p){return C.apply(this,arguments)}function C(){return C=l()(m().mark(function d(p,P){return m().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,v.WY)("/system/menu/info",i()({method:"GET",params:i()({},p)},P||{})));case 1:case"end":return u.stop()}},d)})),C.apply(this,arguments)}function g(d,p){return _.apply(this,arguments)}function _(){return _=l()(m().mark(function d(p,P){return m().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,v.WY)("/system/menu/list",i()({method:"POST",headers:{"Content-Type":"application/json"},data:p},P||{})));case 1:case"end":return u.stop()}},d)})),_.apply(this,arguments)}function O(d,p){return M.apply(this,arguments)}function M(){return M=l()(m().mark(function d(p,P){return m().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,v.WY)("/system/menu/remove",i()({method:"POST",params:i()({},p)},P||{})));case 1:case"end":return u.stop()}},d)})),M.apply(this,arguments)}function D(d,p){return b.apply(this,arguments)}function b(){return b=_asyncToGenerator(_regeneratorRuntime.mark(function d(p,P){return _regeneratorRuntime.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",request("/system/menu/roleMenuTreeSelect",_objectSpread({method:"GET",params:_objectSpread({},p)},P||{})));case 1:case"end":return u.stop()}},d)})),b.apply(this,arguments)}function A(d,p){return j.apply(this,arguments)}function j(){return j=l()(m().mark(function d(p,P){return m().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,v.WY)("/system/menu/treeSelect",i()({method:"POST",headers:{"Content-Type":"application/json"},data:p},P||{})));case 1:case"end":return u.stop()}},d)})),j.apply(this,arguments)}}}]);
