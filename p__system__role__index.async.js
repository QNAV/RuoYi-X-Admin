"use strict";(self.webpackChunkruoyi_x_umi=self.webpackChunkruoyi_x_umi||[]).push([[24],{78798:function(me,F,e){e.d(F,{ew:function(){return u},Jx:function(){return k},iT:function(){return K},Zi:function(){return A},Bw:function(){return N},eJ:function(){return V},fk:function(){return M},sE:function(){return G},WW:function(){return v},sy:function(){return J},E$:function(){return ue},_M:function(){return Q},tC:function(){return o},wX:function(){return I},oh:function(){return E},Uc:function(){return g},x:function(){return Y},Mw:function(){return B},p_:function(){return S},$V:function(){return Z},Qo:function(){return x},$9:function(){return c},Jy:function(){return i},VP:function(){return w},g4:function(){return C},Fu:function(){return h},Rj:function(){return W},tE:function(){return m},iO:function(){return P},q2:function(){return O},jR:function(){return _},BP:function(){return l},au:function(){return p}});var y=e(85880),o={title:"\u5E8F\u53F7",dataIndex:"index",key:"index",valueType:"indexBorder",editable:!1,width:60},V={title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",key:"createTime",valueType:"dateTime",editable:!1,hideInSearch:!0,sorter:!0},p={title:"\u66F4\u65B0\u65F6\u95F4",dataIndex:"updateTime",key:"updateTime",valueType:"dateTime",editable:!1,hideInSearch:!0,sorter:!0},G={title:"\u72B6\u6001",dataIndex:"status",key:"status",valueType:"radio",valueEnum:y.al},M={title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTimeRange",key:"createTimeRange",valueType:"dateTimeRange",hideInTable:!0,search:{transform:function(f){return{beginCreateTime:f[0],endCreateTime:f[1]}}}},w={title:"\u5907\u6CE8",dataIndex:"remark",key:"remark",valueType:"textarea",hideInSearch:!0},_={title:"\u8868\u540D\u79F0",dataIndex:"tableName",key:"tableName",valueType:"text"},O={title:"\u8868\u63CF\u8FF0",dataIndex:"tableComment",key:"tableComment",valueType:"text"},k={title:"\u5B9E\u4F53\u540D\u79F0",dataIndex:"className",key:"className",valueType:"text",hideInSearch:!0},v={title:"\u4F5C\u8005",dataIndex:"functionAuthor",key:"functionAuthor",valueType:"text"},A={title:"\u5B57\u6BB5\u540D\u79F0",dataIndex:"columnName",key:"columnName",valueType:"text",editable:!1,ellipsis:!0,width:100},K={title:"\u5B57\u6BB5\u63CF\u8FF0",dataIndex:"columnComment",key:"columnComment",valueType:"text",width:250},N={title:"\u7269\u7406\u7C7B\u578B",dataIndex:"columnType",key:"columnType",valueType:"text",editable:!1,ellipsis:!0,width:100},Z={title:"JAVA\u7C7B\u578B",dataIndex:"javaType",key:"javaType",valueType:"select",valueEnum:y.gh,width:90},S={title:"JAVA\u5C5E\u6027",dataIndex:"javaField",key:"javaField",valueType:"text",width:140},E={title:"\u63D2\u5165",dataIndex:"isInsert",key:"isInsert",valueType:"radioButton",width:115,valueEnum:y.gc},I={title:"\u7F16\u8F91",dataIndex:"isEdit",key:"isEdit",valueType:"radioButton",width:115,valueEnum:y.gc},g={title:"\u5217\u8868",dataIndex:"isList",key:"isList",valueType:"radioButton",width:115,valueEnum:y.gc},Y={title:"\u67E5\u8BE2",dataIndex:"isQuery",key:"isQuery",valueType:"radioButton",width:115,valueEnum:y.gc},B={title:"\u5FC5\u586B",dataIndex:"isRequired",key:"isRequired",valueType:"radioButton",width:115,valueEnum:y.gc},i={title:"\u67E5\u8BE2\u65B9\u5F0F",dataIndex:"queryType",key:"queryType",valueType:"select",valueEnum:y.CX,width:70},l={title:"\u751F\u6210\u6A21\u7248",dataIndex:"tplCategory",key:"tplCategory",valueType:"select",valueEnum:y.V},c={title:"\u751F\u6210\u5305\u8DEF\u5F84",dataIndex:"packageName",key:"packageName",valueType:"text"},x={title:"\u751F\u6210\u6A21\u5757\u540D",dataIndex:"moduleName",key:"moduleName",valueType:"text"},u={title:"\u751F\u6210\u4E1A\u52A1\u540D",dataIndex:"businessName",key:"businessName",valueType:"text"},J={title:"\u751F\u6210\u529F\u80FD\u540D",dataIndex:"functionName",key:"functionName",valueType:"text"},Q={title:"\u751F\u6210\u4EE3\u7801\u65B9\u5F0F",dataIndex:"genType",key:"genType",valueType:"select",valueEnum:y.LZ},ue={title:"\u81EA\u5B9A\u4E49\u8DEF\u5F84",dataIndex:"genPath",key:"genPath",valueType:"text"},P={title:"\u5E8F\u53F7",dataIndex:"sort",valueType:"indexBorder",editable:!1,width:80},W={title:"\u89D2\u8272\u540D\u79F0",dataIndex:"roleName",key:"roleName",valueType:"text"},C={title:"\u89D2\u8272\u7F16\u53F7",dataIndex:"roleId",key:"roleId",valueType:"text",hideInSearch:!0,editable:!1},h={title:"\u6743\u9650\u5B57\u7B26",dataIndex:"roleKey",key:"roleKey",valueType:"text"},m={title:"\u663E\u793A\u6392\u5E8F",dataIndex:"roleSort",key:"roleSort",valueType:"text",hideInSearch:!0}},84660:function(me,F,e){e.d(F,{Z:function(){return V},n:function(){return Z}});var y=e(50959),o=e(98205),V=function(E){var I=(0,y.useRef)(),g=(0,o.Zl)(E);return(0,y.useEffect)(function(){I!=null&&I.current&&g(I.current)},[]),I},p=e(35290),G=e.n(p),M=e(411),w=e.n(M),_=e(94434),O=e.n(_),k=e(46686),v=e.n(k),A=e(25081),K=e(32222),N=e.n(K),Z=function(E){var I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"checkbox",g=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,Y=(0,y.useState)([]),B=v()(Y,2),i=B[0],l=B[1],c=(0,y.useState)([]),x=v()(c,2),u=x[0],J=x[1],Q={alwaysShowAlert:g,type:I,selectedRowKeys:i,onChange:function(h,m){J(m),l(h)}},ue=function(h){var m=h[E],R=[h],f=[m];if(I==="checkbox")if(f=O()(i),R=N()(u),f.includes(m)){var T=i.indexOf(m);f.splice(T,1),R.splice(T,1)}else R.push(h),f.push(m);J(R),l(f)},P=function(){J([]),l([])},W=function(){var C=w()(G()().mark(function h(){var m,R=arguments;return G()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:if(m=R.length>0&&R[0]!==void 0?R[0]:"\u672A\u9009\u62E9\u9700\u8981\u64CD\u4F5C\u7684\u5BF9\u8C61",(u==null?void 0:u.length)!==0){T.next=4;break}return A.ZP.warning(m),T.abrupt("return",Promise.reject(m));case 4:return T.abrupt("return",Promise.resolve(u));case 5:case"end":return T.stop()}},h)}));return function(){return C.apply(this,arguments)}}();return{selectedRows:u,selectedRowKeys:i,rowSelection:Q,onClick:ue,clearSelection:P,setSelectedRowKeys:l,checkRowSelection:W}}},58075:function(me,F,e){e.d(F,{BD:function(){return Y},Wd:function(){return u},XL:function(){return ue},YG:function(){return i},bW:function(){return B},ms:function(){return x},ns:function(){return Q},xK:function(){return c}});var y=e(35290),o=e.n(y),V=e(93275),p=e.n(V),G=e(30279),M=e.n(G),w=e(411),_=e.n(w),O=e(85880),k=e(17218),v=e(12824),A=e(3650),K=e.n(A),N=e(74444),Z=e(25081),S=e(98205),E="systemMenu",I=function(W){var C=function h(m){return m.filter(function(R){return R.menuType!==O.og.F}).map(function(R){var f=R.menuId,T=R.menuName,$=R.children;return{menuId:f,menuName:T,children:$?h($):[]}})};return[{menuId:0,menuName:"\u6839\u76EE\u5F55",children:W?C(W):[]}]},g=(0,S.cn)({key:"".concat(E,"SelectedMenuId"),default:0}),Y=function(){return(0,S.rb)(g)},B=function(){return(0,S.FV)(g)},i=function(){return(0,S.sJ)(g)},l=(0,S.cn)({key:"".concat(E,"VisibleCreateModal"),default:!1}),c=function(){return(0,S.rb)(l)},x=function(){return(0,S.Zl)(l)},u=function(){return(0,S.sJ)(l)},J=[E,"list"],Q=function(){var W=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return(0,A.useQuery)(J,_()(o()().mark(function C(){var h,m;return o()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,(0,k.CP)(W);case 2:return h=f.sent,m=(0,v.tw)(h,{id:"menuId",pId:"parentId",rootPId:null}),f.abrupt("return",{options:I((0,v.dH)(m)),treeData:(0,v.dH)(m),map:h.reduce(function(T,$){return M()(M()({},T),{},p()({},$.menuId,$))},{}),parentIds:(0,v.Vy)(h)});case 5:case"end":return f.stop()}},C)})))},ue=function(){var W=(0,A.useQueryClient)(),C=Y();return(0,A.useMutation)(function(){var h=_()(o()().mark(function m(R){return o()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:N.Z.confirm({title:"\u5220\u9664\u83DC\u5355",content:"\u786E\u5B9A\u5220\u9664\u8BE5\u83DC\u5355\u5417\uFF1F",onOk:function(){var $=_()(o()().mark(function se(){return o()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.next=2,(0,k.tg)({menuId:R});case 2:return H.next=4,W.invalidateQueries(J);case 4:C(),Z.ZP.success("\u5220\u9664\u6210\u529F");case 6:case"end":return H.stop()}},se)}));function Pe(){return $.apply(this,arguments)}return Pe}()});case 1:case"end":return T.stop()}},m)}));return function(m){return h.apply(this,arguments)}}())}},20146:function(me,F,e){e.r(F),e.d(F,{default:function(){return ht}});var y=e(35290),o=e.n(y),V=e(30279),p=e.n(V),G=e(44463),M=e.n(G),w=e(411),_=e.n(w),O=e(85880),k=e(84660),v=e(98205),A="systemRole",K=(0,v.cn)({key:"".concat(A,"AtomRoleListActions"),default:void 0}),N=function(){return(0,v.sJ)(K)},Z=function(){return(0,k.Z)(K)},S=(0,v.cn)({key:"".concat(A,"AtomRoleDetails"),default:{visible:!1,roleId:0,roleName:""}}),E=function(){return(0,v.rb)(S)},I=function(){return(0,v.Zl)(S)},g=function(){return(0,v.sJ)(S)},Y=(0,v.cn)({key:"".concat(A,"AtomRolePermission"),default:!1}),B=function(){var r=(0,v.Zl)(Y);return function(){return r(!0)}},i=function(){return(0,v.rb)(Y)},l=function(){return(0,v.sJ)(Y)},c=e(12824);function x(n,r){return u.apply(this,arguments)}function u(){return u=_()(o()().mark(function n(r,a){return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.WY)("/system/role/add",p()({method:"POST",headers:{"Content-Type":"application/json"},data:r},a||{})));case 1:case"end":return t.stop()}},n)})),u.apply(this,arguments)}function J(n,r){return Q.apply(this,arguments)}function Q(){return Q=_asyncToGenerator(_regeneratorRuntime().mark(function n(r,a){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/system/role/authUser/allocatedList",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:r},a||{})));case 1:case"end":return t.stop()}},n)})),Q.apply(this,arguments)}function ue(n,r){return P.apply(this,arguments)}function P(){return P=_asyncToGenerator(_regeneratorRuntime().mark(function n(r,a){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/system/role/authUser/cancel",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:r},a||{})));case 1:case"end":return t.stop()}},n)})),P.apply(this,arguments)}function W(n,r){return C.apply(this,arguments)}function C(){return C=_asyncToGenerator(_regeneratorRuntime().mark(function n(r,a){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/system/role/authUser/cancelAll",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:r},a||{})));case 1:case"end":return t.stop()}},n)})),C.apply(this,arguments)}function h(n,r){return m.apply(this,arguments)}function m(){return m=_asyncToGenerator(_regeneratorRuntime().mark(function n(r,a){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/system/role/authUser/selectAll",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:r},a||{})));case 1:case"end":return t.stop()}},n)})),m.apply(this,arguments)}function R(n,r){return f.apply(this,arguments)}function f(){return f=_asyncToGenerator(_regeneratorRuntime().mark(function n(r,a){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/system/role/authUser/unallocatedList",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:r},a||{})));case 1:case"end":return t.stop()}},n)})),f.apply(this,arguments)}function T(n,r){return $.apply(this,arguments)}function $(){return $=_asyncToGenerator(_regeneratorRuntime().mark(function n(r,a){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/system/role/changeStatus",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:r},a||{})));case 1:case"end":return t.stop()}},n)})),$.apply(this,arguments)}function Pe(n,r){return se.apply(this,arguments)}function se(){return se=_asyncToGenerator(_regeneratorRuntime().mark(function n(r,a){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/system/role/dataScope",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:r},a||{})));case 1:case"end":return t.stop()}},n)})),se.apply(this,arguments)}function Ce(n,r){return H.apply(this,arguments)}function H(){return H=_()(o()().mark(function n(r,a){return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.WY)("/system/role/edit",p()({method:"POST",headers:{"Content-Type":"application/json"},data:r},a||{})));case 1:case"end":return t.stop()}},n)})),H.apply(this,arguments)}function Pt(n,r){return fe.apply(this,arguments)}function fe(){return fe=_asyncToGenerator(_regeneratorRuntime().mark(function n(r,a){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/system/role/export",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:r},a||{})));case 1:case"end":return t.stop()}},n)})),fe.apply(this,arguments)}function Be(n,r){return ye.apply(this,arguments)}function ye(){return ye=_()(o()().mark(function n(r,a){return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.WY)("/system/role/info",p()({method:"GET",params:p()({},r)},a||{})));case 1:case"end":return t.stop()}},n)})),ye.apply(this,arguments)}function Le(n,r){return he.apply(this,arguments)}function he(){return he=_()(o()().mark(function n(r,a){return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.WY)("/system/role/list",p()({method:"POST",headers:{"Content-Type":"application/json"},data:r},a||{})));case 1:case"end":return t.stop()}},n)})),he.apply(this,arguments)}function Ct(n){return _e.apply(this,arguments)}function _e(){return _e=_asyncToGenerator(_regeneratorRuntime().mark(function n(r){return _regeneratorRuntime().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",request("/system/role/optionSelect",_objectSpread({method:"GET"},r||{})));case 1:case"end":return d.stop()}},n)})),_e.apply(this,arguments)}function ke(n,r){return Re.apply(this,arguments)}function Re(){return Re=_()(o()().mark(function n(r,a){return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.WY)("/system/role/remove",p()({method:"POST",params:p()({},r)},a||{})));case 1:case"end":return t.stop()}},n)})),Re.apply(this,arguments)}var Ke=e(62325),oe=e(38562),Ne=e(20436),Ze=e(79900),Ee=e(55099),Ye=e(18723),We=e(37349),$e=e(1206),Ie=e(3650),Se=e(25081),le=e(61857),s=e(11527),Fe=["menuInfo"],Ge=function(){var r=(0,oe.md)(),a=N(),d=(0,Ie.useMutation)(x,{onSuccess:function(){a==null||a.reload(),Se.ZP.success("\u65B0\u5EFA\u6210\u529F")}}),t=d.mutateAsync;return(0,s.jsx)(Ke.Access,{accessible:r.canAddSysRole,children:(0,s.jsxs)(Ze.Y,{title:"\u65B0\u5EFA\u89D2\u8272",trigger:(0,s.jsx)(le.Z,{type:"primary",icon:(0,s.jsx)(Ne.Z,{}),children:"\u65B0\u5EFA"}),onFinish:function(){var L=_()(o()().mark(function j(U){var b,q,ne;return o()().wrap(function(X){for(;;)switch(X.prev=X.next){case 0:return b=U.menuInfo,q=b===void 0?{menuIds:[],menuCheckStrictly:!0}:b,ne=M()(U,Fe),X.next=3,t(p()(p()({},ne),q));case 3:return X.abrupt("return",!0);case 4:case"end":return X.stop()}},j)}));return function(j){return L.apply(this,arguments)}}(),width:500,children:[(0,s.jsx)(Ee.Z,{name:"roleName",label:"\u89D2\u8272\u540D\u79F0",rules:[{required:!0}]}),(0,s.jsx)(Ee.Z,{name:"roleKey",label:"\u6743\u9650\u5B57\u7B26",rules:[{required:!0}],tooltip:"\u63A7\u5236\u5668\u4E2D\u5B9A\u4E49\u7684\u6743\u9650\u5B57\u7B26\uFF0C\u5982\uFF1A@PreAuthorize(`@ss.hasRole('admin')`)"}),(0,s.jsx)(Ye.Z,{name:"roleSort",label:"\u663E\u793A\u6392\u5E8F",rules:[{required:!0}],initialValue:0}),(0,s.jsx)(We.Z.Group,{name:"status",label:"\u72B6\u6001",valueEnum:O.al,initialValue:O.vu.ENABLE}),(0,s.jsx)($e.Z,{name:"remark",label:"\u5907\u6CE8"})]})})},Xe=Ge,Ve=e(71224),Je=e(74444),xe=e(62200),Qe=function(){var r=(0,oe.md)(),a=N(),d=E(),t=g(),L=t.visible,j=t.roleId,U=t.roleName,b=function(){return Je.Z.confirm({title:"\u5220\u9664\u786E\u8BA4",content:(0,s.jsxs)(s.Fragment,{children:["\u786E\u5B9A\u5BF9\u89D2\u8272",(0,s.jsx)(xe.Z.Text,{code:!0,children:U}),"\u8FDB\u884C",(0,s.jsx)(xe.Z.Text,{code:!0,children:"\u5220\u9664"}),"\u64CD\u4F5C\u5417\uFF1F"]}),onOk:function(){var ne=_()(o()().mark(function X(){var ie;return o()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,ke({roleIds:j});case 2:d(),a==null||(ie=a.clearSelected)===null||ie===void 0||ie.call(a),a==null||a.reload(),Se.ZP.success("\u5220\u9664\u6210\u529F");case 6:case"end":return D.stop()}},X)}));function ee(){return ne.apply(this,arguments)}return ee}()})};return(0,s.jsx)(oe.Nv,{accessible:r.canRemoveSysRole,children:(0,s.jsx)(le.Z,{danger:!0,ghost:!0,icon:(0,s.jsx)(Ve.Z,{}),disabled:!L,onClick:b,children:"\u5220\u9664"})})},He=Qe,ze=e(93275),je=e.n(ze),qe=e(46686),De=e.n(qe),te=e(78798),et=e(14267),Me=e(814),tt=function(){var r=(0,oe.md)(),a=B(),d=i(),t=l();return r.canEditSysRole?t?(0,s.jsxs)(Me.Z,{children:[(0,s.jsx)(le.Z,{onClick:d,children:"\u53D6\u6D88\u7F16\u8F91"}),(0,s.jsx)(le.Z,{type:"primary",children:"\u4FDD\u5B58"})]}):(0,s.jsx)(le.Z,{type:"primary",onClick:a,children:"\u7F16\u8F91\u6743\u9650"}):null},nt=tt,rt=e(58075),at=e(577),Ae=e(8346),ut=function(){var r=(0,rt.ns)(),a=r.data;return(0,s.jsx)(at.Z,{titles:["\u5168\u90E8\u6743\u9650","\u5DF2\u9009\u6743\u9650"],showSelectAll:!1,children:function(t){var L,j,U=t.direction,b=t.selectedKeys;return(0,s.jsxs)("div",{className:"h-[300px] overflow-y-auto",children:[U==="left"&&(0,s.jsx)(Ae.Z,{blockNode:!0,checkable:!0,checkStrictly:!0,checkedKeys:b,treeData:(L=a==null?void 0:a.treeData)!==null&&L!==void 0?L:[],fieldNames:{title:"menuName",key:"menuId",children:"children"}}),U==="right"&&(0,s.jsx)(Ae.Z,{defaultExpandAll:!0,checkedKeys:b,treeData:(j=a==null?void 0:a.treeData)!==null&&j!==void 0?j:[],fieldNames:{title:"menuName",key:"menuId",children:"children"}})]})}})},st=ut,be=e(91549),pe=e(67809),ot=e(10979),lt=e(99390),it=e(96022),we=e(95331),Te=e(50959),dt=function(){var r=(0,Te.useState)([]),a=De()(r,2),d=a[0],t=a[1],L=lt.Z.useForm(),j=De()(L,1),U=j[0],b=(0,oe.md)(),q=N(),ne=g(),ee=ne.roleId,X=ne.visible,ie=i(),ve=(0,ot.Z)(function(){return Be({roleId:ee})},{ready:X,refreshDeps:[ee]}),D=ve.data,_t=ve.loading,Rt=ve.refresh,St=(0,Ie.useMutation)(function(){var de=_()(o()().mark(function z(re){var ae;return o()().wrap(function(ce){for(;;)switch(ce.prev=ce.next){case 0:return ce.next=2,Ce(p()({roleId:ee,menuIds:(ae=D==null?void 0:D.menuIds)!==null&&ae!==void 0?ae:[],roleKey:D.roleKey,roleName:D.roleName,roleSort:D.roleSort,status:D.status},re));case 2:case"end":return ce.stop()}},z)}));return function(z){return de.apply(this,arguments)}}(),{onSuccess:function(){Rt(),q==null||q.reload(),Se.ZP.success("\u4FDD\u5B58\u6210\u529F")}}),Tt=St.mutate,gt=b.canEditSysRole&&D?{form:U,editableKeys:d,onChange:function(z,re){t(z),z.length===1&&!Array.isArray(re)&&U.setFieldsValue(je()({},z[0],re[z[0]]))},onSave:function(){var de=_()(o()().mark(function re(ae,Ue){return o()().wrap(function(ge){for(;;)switch(ge.prev=ge.next){case 0:Tt(je()({},ae,Ue[ae]));case 1:case"end":return ge.stop()}},re)}));function z(re,ae){return de.apply(this,arguments)}return z}()}:void 0;return(0,Te.useEffect)(function(){ee>0&&(t([]),ie())},[ee]),X?(0,s.jsxs)(it.Z,{spinning:_t,children:[(0,s.jsx)(be.vY,{column:2,columns:[te.g4,te.eJ],dataSource:D}),(0,s.jsx)(we.Z,{}),(0,s.jsx)(be.vY,{column:2,columns:[te.sE,te.tE,te.Rj,te.VP,te.Fu],dataSource:D,editable:gt}),(0,s.jsx)(we.Z,{}),(0,s.jsx)(pe.Z,{ghost:!0,extra:(0,s.jsx)(nt,{}),children:(0,s.jsx)(st,{})})]}):(0,s.jsx)(et._E,{description:"\u70B9\u51FB\u9009\u62E9\u5DE6\u4FA7\u89D2\u8272\u67E5\u770B\u8BE6\u60C5"})},ct=dt,mt=e(90157),Oe=e(17324),pt=function(){var r=Z(),a=I(),d=(0,k.n)("roleId","radio"),t=d.onClick,L=d.rowSelection,j=d.selectedRows;return(0,Te.useEffect)(function(){j.length===1&&a({roleId:j[0].roleId,roleName:j[0].roleName,visible:!0})},[j]),(0,s.jsx)(mt.Rs,{ghost:!0,rowKey:"roleId",actionRef:r,metas:{title:{dataIndex:"roleName"},subTitle:{dataIndex:"status",render:function(b){return b===O.vu.ENABLE?(0,s.jsx)(Oe.Z,{color:"success",children:"\u542F\u7528\u4E2D"}):(0,s.jsx)(Oe.Z,{color:"error",children:"\u5DF2\u7981\u7528"})}}},tableAlertRender:!1,onRow:function(b){return{onClick:function(){return t(b)}}},rowSelection:L,pagination:{pageSize:10},request:function(){return Le(c.h$.apply(void 0,arguments))},children:"1"})},vt=pt,ft=e(93913),yt=function(){return(0,s.jsx)(ft.ZP,{children:(0,s.jsxs)(pe.Z,{ghost:!0,gutter:24,children:[(0,s.jsx)(pe.Z,{title:"\u89D2\u8272\u5217\u8868",colSpan:"400px",extra:(0,s.jsxs)(Me.Z,{children:[(0,s.jsx)(Xe,{}),(0,s.jsx)(He,{})]}),children:(0,s.jsx)(vt,{})}),(0,s.jsx)(pe.Z,{title:"\u89D2\u8272\u8BE6\u60C5",children:(0,s.jsx)(ct,{})})]})})},ht=yt},17218:function(me,F,e){e.d(F,{CP:function(){return N},FV:function(){return _},WJ:function(){return A},Yh:function(){return k},tg:function(){return S}});var y=e(35290),o=e.n(y),V=e(30279),p=e.n(V),G=e(411),M=e.n(G),w=e(12824);function _(i,l){return O.apply(this,arguments)}function O(){return O=M()(o()().mark(function i(l,c){return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,w.WY)("/system/menu/add",p()({method:"POST",headers:{"Content-Type":"application/json"},data:l},c||{})));case 1:case"end":return u.stop()}},i)})),O.apply(this,arguments)}function k(i,l){return v.apply(this,arguments)}function v(){return v=M()(o()().mark(function i(l,c){return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,w.WY)("/system/menu/edit",p()({method:"POST",headers:{"Content-Type":"application/json"},data:l},c||{})));case 1:case"end":return u.stop()}},i)})),v.apply(this,arguments)}function A(i,l){return K.apply(this,arguments)}function K(){return K=M()(o()().mark(function i(l,c){return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,w.WY)("/system/menu/info",p()({method:"GET",params:p()({},l)},c||{})));case 1:case"end":return u.stop()}},i)})),K.apply(this,arguments)}function N(i,l){return Z.apply(this,arguments)}function Z(){return Z=M()(o()().mark(function i(l,c){return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,w.WY)("/system/menu/list",p()({method:"POST",headers:{"Content-Type":"application/json"},data:l},c||{})));case 1:case"end":return u.stop()}},i)})),Z.apply(this,arguments)}function S(i,l){return E.apply(this,arguments)}function E(){return E=M()(o()().mark(function i(l,c){return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,w.WY)("/system/menu/remove",p()({method:"POST",params:p()({},l)},c||{})));case 1:case"end":return u.stop()}},i)})),E.apply(this,arguments)}function I(i,l){return g.apply(this,arguments)}function g(){return g=_asyncToGenerator(_regeneratorRuntime().mark(function i(l,c){return _regeneratorRuntime().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",request("/system/menu/roleMenuTreeSelect",_objectSpread({method:"GET",params:_objectSpread({},l)},c||{})));case 1:case"end":return u.stop()}},i)})),g.apply(this,arguments)}function Y(i,l){return B.apply(this,arguments)}function B(){return B=_asyncToGenerator(_regeneratorRuntime().mark(function i(l,c){return _regeneratorRuntime().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",request("/system/menu/treeSelect",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:l},c||{})));case 1:case"end":return u.stop()}},i)})),B.apply(this,arguments)}}}]);
