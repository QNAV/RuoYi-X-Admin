"use strict";(self.webpackChunkruoyi_x_umi=self.webpackChunkruoyi_x_umi||[]).push([[24],{84660:function(ae,W,e){e.d(W,{Z:function(){return H},n:function(){return A}});var w=e(50959),l=e(98205),H=function(P){var M=(0,w.useRef)(),C=(0,l.Zl)(P);return(0,w.useEffect)(function(){M!=null&&M.current&&C(M.current)},[]),M},_=e(35290),G=e.n(_),j=e(411),b=e.n(j),T=e(94434),D=e.n(T),Z=e(46686),R=e.n(Z),L=e(25081),$=e(32222),Q=e.n($),A=function(P){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"checkbox",C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,x=(0,w.useState)([]),u=R()(x,2),i=u[0],o=u[1],h=(0,w.useState)([]),E=R()(h,2),a=E[0],B=E[1],J={alwaysShowAlert:C,type:M,selectedRowKeys:i,onChange:function(f,m){B(m),o(f)}},q=function(f){var m=f[P],d=[f],v=[m];if(M==="checkbox")if(v=D()(i),d=Q()(a),v.includes(m)){var p=i.indexOf(m);v.splice(p,1),d.splice(p,1)}else d.push(f),v.push(m);B(d),o(v)},I=function(){B([]),o([])},O=function(){var U=b()(G()().mark(function f(){var m,d=arguments;return G()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:if(m=d.length>0&&d[0]!==void 0?d[0]:"\u672A\u9009\u62E9\u9700\u8981\u64CD\u4F5C\u7684\u5BF9\u8C61",(a==null?void 0:a.length)!==0){p.next=4;break}return L.ZP.warning(m),p.abrupt("return",Promise.reject(m));case 4:return p.abrupt("return",Promise.resolve(a));case 5:case"end":return p.stop()}},f)}));return function(){return U.apply(this,arguments)}}();return{selectedRows:a,selectedRowKeys:i,rowSelection:J,onClick:q,clearSelection:I,setSelectedRowKeys:o,checkRowSelection:O}}},58075:function(ae,W,e){e.d(W,{BD:function(){return x},Wd:function(){return a},XL:function(){return q},YG:function(){return i},bW:function(){return u},ms:function(){return E},ns:function(){return J},xK:function(){return h}});var w=e(35290),l=e.n(w),H=e(93275),_=e.n(H),G=e(30279),j=e.n(G),b=e(411),T=e.n(b),D=e(85880),Z=e(17218),R=e(12824),L=e(3650),$=e.n(L),Q=e(74444),A=e(25081),g=e(98205),P="systemMenu",M=function(O){var U=function f(m){return m.filter(function(d){return d.menuType!==D.og.F}).map(function(d){var v=d.menuId,p=d.menuName,X=d.children;return{menuId:v,menuName:p,children:X?f(X):[]}})};return[{menuId:0,menuName:"\u6839\u76EE\u5F55",children:O?U(O):[]}]},C=(0,g.cn)({key:"".concat(P,"SelectedMenuId"),default:0}),x=function(){return(0,g.rb)(C)},u=function(){return(0,g.FV)(C)},i=function(){return(0,g.sJ)(C)},o=(0,g.cn)({key:"".concat(P,"VisibleCreateModal"),default:!1}),h=function(){return(0,g.rb)(o)},E=function(){return(0,g.Zl)(o)},a=function(){return(0,g.sJ)(o)},B=[P,"list"],J=function(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return(0,L.useQuery)(B,T()(l()().mark(function U(){var f,m;return l()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,(0,Z.CP)(O);case 2:return f=v.sent,m=(0,R.tw)(f,{id:"menuId",pId:"parentId",rootPId:null}),v.abrupt("return",{options:M((0,R.dH)(m)),treeData:(0,R.dH)(m),map:f.reduce(function(p,X){return j()(j()({},p),{},_()({},X.menuId,X))},{}),parentIds:(0,R.Vy)(f)});case 5:case"end":return v.stop()}},U)})))},q=function(){var O=(0,L.useQueryClient)(),U=x();return(0,L.useMutation)(function(){var f=T()(l()().mark(function m(d){return l()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:Q.Z.confirm({title:"\u5220\u9664\u83DC\u5355",content:"\u786E\u5B9A\u5220\u9664\u8BE5\u83DC\u5355\u5417\uFF1F",onOk:function(){var X=T()(l()().mark(function ye(){return l()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.next=2,(0,Z.tg)({menuId:d});case 2:return z.next=4,O.invalidateQueries(B);case 4:U(),A.ZP.success("\u5220\u9664\u6210\u529F");case 6:case"end":return z.stop()}},ye)}));function ee(){return X.apply(this,arguments)}return ee}()});case 1:case"end":return p.stop()}},m)}));return function(m){return f.apply(this,arguments)}}())}},81250:function(ae,W,e){e.r(W),e.d(W,{default:function(){return qe}});var w=e(35290),l=e.n(w),H=e(30279),_=e.n(H),G=e(44463),j=e.n(G),b=e(411),T=e.n(b),D=e(85880),Z=e(46686),R=e.n(Z),L=e(58075),$=e(8790),Q=e(98408),A=e(24466),g=e(814),P=e(61857),M=e(5606),C=e(8346),x=e(50959),u=e(11527),i={title:"label",key:"id",children:"children"},o=function(t){var s,c,n=t.value,S=t.onChange,K=(0,L.ns)(),y=K.data,V=(0,x.useState)([]),k=R()(V,2),ne=k[0],F=k[1],N=(0,x.useState)([]),ge=R()(N,2),re=ge[0],Pe=ge[1],en=(0,x.useState)(!1),Te=R()(en,2),Me=Te[0],nn=Te[1],Ce=function(Y){S==null||S(_()(_()({menuIds:ne,menuCheckStrictly:Me},n),Y))},tn=function(Y){var je=Array.isArray(Y)?Y:Y==null?void 0:Y.checked;F(je),Ce({menuIds:je})},rn=function(Y){nn(!Y.target.checked),Ce({menuCheckStrictly:!Y.target.checked})},Ee=(s=y==null?void 0:y.parentIds)!==null&&s!==void 0?s:[],fe=re&&re.length>0&&re.length===Ee.length;return(0,u.jsxs)(A.Z,{bordered:!0,children:[(0,u.jsxs)(g.Z,{className:"mb-2",children:[(0,u.jsx)(P.Z,{size:"small",icon:fe?(0,u.jsx)($.Z,{}):(0,u.jsx)(Q.Z,{}),onClick:function(){return Pe(fe?[]:Ee)},children:fe?"\u5168\u90E8\u6298\u53E0":"\u5168\u90E8\u5C55\u5F00"}),(0,u.jsx)(M.Z,{defaultChecked:!0,onChange:rn,children:"\u7236\u5B50\u8054\u52A8"})]}),(0,u.jsx)(C.Z,{checkable:!0,treeData:(c=y==null?void 0:y.treeData)!==null&&c!==void 0?c:[],fieldNames:i,checkedKeys:ne,onCheck:tn,expandedKeys:re,onExpand:Pe,checkStrictly:Me})]})},h=o,E=e(84660),a=e(98205),B="systemRole",J=(0,a.cn)({key:"".concat(B,"AtomMainTableActions"),default:void 0}),q=function(){return(0,a.sJ)(J)},I=function(){return useInitActionType(J)},O=(0,a.cn)({key:"".concat(B,"AtomRoleDetails"),default:{visible:!1,roleId:0}}),U=function(){return useResetRecoilState(O)},f=function(){return(0,a.Zl)(O)},m=function(){return(0,a.sJ)(O)},d=e(12824);function v(r,t){return p.apply(this,arguments)}function p(){return p=T()(l()().mark(function r(t,s){return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,d.WY)("/system/role/add",_()({method:"POST",headers:{"Content-Type":"application/json"},data:t},s||{})));case 1:case"end":return n.stop()}},r)})),p.apply(this,arguments)}function X(r,t){return ee.apply(this,arguments)}function ee(){return ee=_asyncToGenerator(_regeneratorRuntime().mark(function r(t,s){return _regeneratorRuntime().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",request("/system/role/authUser/allocatedList",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:t},s||{})));case 1:case"end":return n.stop()}},r)})),ee.apply(this,arguments)}function ye(r,t){return te.apply(this,arguments)}function te(){return te=_asyncToGenerator(_regeneratorRuntime().mark(function r(t,s){return _regeneratorRuntime().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",request("/system/role/authUser/cancel",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:t},s||{})));case 1:case"end":return n.stop()}},r)})),te.apply(this,arguments)}function z(r,t){return ue.apply(this,arguments)}function ue(){return ue=_asyncToGenerator(_regeneratorRuntime().mark(function r(t,s){return _regeneratorRuntime().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",request("/system/role/authUser/cancelAll",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:t},s||{})));case 1:case"end":return n.stop()}},r)})),ue.apply(this,arguments)}function an(r,t){return se.apply(this,arguments)}function se(){return se=_asyncToGenerator(_regeneratorRuntime().mark(function r(t,s){return _regeneratorRuntime().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",request("/system/role/authUser/selectAll",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:t},s||{})));case 1:case"end":return n.stop()}},r)})),se.apply(this,arguments)}function un(r,t){return oe.apply(this,arguments)}function oe(){return oe=_asyncToGenerator(_regeneratorRuntime().mark(function r(t,s){return _regeneratorRuntime().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",request("/system/role/authUser/unallocatedList",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:t},s||{})));case 1:case"end":return n.stop()}},r)})),oe.apply(this,arguments)}function sn(r,t){return le.apply(this,arguments)}function le(){return le=_asyncToGenerator(_regeneratorRuntime().mark(function r(t,s){return _regeneratorRuntime().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",request("/system/role/changeStatus",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:t},s||{})));case 1:case"end":return n.stop()}},r)})),le.apply(this,arguments)}function on(r,t){return ie.apply(this,arguments)}function ie(){return ie=_asyncToGenerator(_regeneratorRuntime().mark(function r(t,s){return _regeneratorRuntime().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",request("/system/role/dataScope",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:t},s||{})));case 1:case"end":return n.stop()}},r)})),ie.apply(this,arguments)}function ln(r,t){return ce.apply(this,arguments)}function ce(){return ce=_asyncToGenerator(_regeneratorRuntime().mark(function r(t,s){return _regeneratorRuntime().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",request("/system/role/edit",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:t},s||{})));case 1:case"end":return n.stop()}},r)})),ce.apply(this,arguments)}function cn(r,t){return de.apply(this,arguments)}function de(){return de=_asyncToGenerator(_regeneratorRuntime().mark(function r(t,s){return _regeneratorRuntime().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",request("/system/role/export",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:t},s||{})));case 1:case"end":return n.stop()}},r)})),de.apply(this,arguments)}function De(r,t){return me.apply(this,arguments)}function me(){return me=T()(l()().mark(function r(t,s){return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,d.WY)("/system/role/info",_()({method:"GET",params:_()({},t)},s||{})));case 1:case"end":return n.stop()}},r)})),me.apply(this,arguments)}function Ae(r,t){return pe.apply(this,arguments)}function pe(){return pe=T()(l()().mark(function r(t,s){return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,d.WY)("/system/role/list",_()({method:"POST",headers:{"Content-Type":"application/json"},data:t},s||{})));case 1:case"end":return n.stop()}},r)})),pe.apply(this,arguments)}function dn(r){return _e.apply(this,arguments)}function _e(){return _e=_asyncToGenerator(_regeneratorRuntime().mark(function r(t){return _regeneratorRuntime().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",request("/system/role/optionSelect",_objectSpread({method:"GET"},t||{})));case 1:case"end":return c.stop()}},r)})),_e.apply(this,arguments)}function mn(r,t){return he.apply(this,arguments)}function he(){return he=_asyncToGenerator(_regeneratorRuntime().mark(function r(t,s){return _regeneratorRuntime().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",request("/system/role/remove",_objectSpread({method:"POST",params:_objectSpread({},t)},s||{})));case 1:case"end":return n.stop()}},r)})),he.apply(this,arguments)}var Oe=e(62325),be=e(20436),Ie=e(21007),Re=e(64539),Ue=e(30041),we=e(2090),Le=e(30942),xe=e(15350),Ke=e(3650),Ye=e(25081),Be=["menuInfo"],We=function(){var t=q(),s=(0,Ke.useMutation)(v,{onSuccess:function(){t==null||t.reload(),Ye.ZP.success("\u65B0\u5EFA\u6210\u529F")}}),c=s.mutateAsync;return(0,u.jsx)(Oe.Access,{accessible:!0,children:(0,u.jsxs)(Ie.Y,{title:"\u65B0\u5EFA\u89D2\u8272",trigger:(0,u.jsx)(P.Z,{type:"primary",icon:(0,u.jsx)(be.Z,{}),children:"\u65B0\u5EFA"}),onFinish:function(){var n=T()(l()().mark(function S(K){var y,V,k;return l()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return y=K.menuInfo,V=y===void 0?{menuIds:[],menuCheckStrictly:!0}:y,k=j()(K,Be),F.next=3,c(_()(_()({},k),V));case 3:return F.abrupt("return",!0);case 4:case"end":return F.stop()}},S)}));return function(S){return n.apply(this,arguments)}}(),width:500,modalProps:{bodyStyle:D.qt},children:[(0,u.jsx)(Re.Z,{name:"roleName",label:"\u89D2\u8272\u540D\u79F0",rules:[{required:!0}]}),(0,u.jsx)(Re.Z,{name:"roleKey",label:"\u6743\u9650\u5B57\u7B26",rules:[{required:!0}],tooltip:"\u63A7\u5236\u5668\u4E2D\u5B9A\u4E49\u7684\u6743\u9650\u5B57\u7B26\uFF0C\u5982\uFF1A@PreAuthorize(`@ss.hasRole('admin')`)"}),(0,u.jsx)(Ue.Z,{name:"roleSort",label:"\u663E\u793A\u6392\u5E8F",rules:[{required:!0}],initialValue:0}),(0,u.jsx)(we.Z.Group,{name:"status",label:"\u72B6\u6001",valueEnum:D.al,initialValue:D.vu.ENABLE}),(0,u.jsx)(Le.Z,{name:"remark",label:"\u5907\u6CE8"}),(0,u.jsx)(xe.Z,{name:"menuInfo",label:"\u83DC\u5355\u6743\u9650",children:(0,u.jsx)(h,{})})]})})},Ge=We,Ze=e(72137),$e=e(10979),Xe=e(96022),Ve=e(95331),ke=function(){var t=m(),s=t.roleId,c=t.visible,n=(0,$e.Z)(function(){return De({roleId:s})},{ready:c,refreshDeps:[s]}),S=n.data,K=n.loading;return(0,u.jsxs)(Xe.Z,{spinning:K,children:[S==null?void 0:S.roleId,(0,u.jsx)(Ze.vY,{column:2,columns:[],dataSource:S}),(0,u.jsx)(Ve.Z,{})]})},Fe=ke,Ne=e(32386),Se=e(17324),He=function(){var t=f(),s=(0,E.n)("roleId","radio"),c=s.onClick,n=s.rowSelection,S=s.selectedRowKeys;return(0,x.useEffect)(function(){S.length>0&&t({roleId:S[0],visible:!0})},[S]),(0,u.jsx)(Ne.Rs,{rowKey:"roleId",metas:{title:{dataIndex:"roleName"},subTitle:{dataIndex:"status",render:function(y){return y===D.vu.ENABLE?(0,u.jsx)(Se.Z,{color:"success",children:"\u542F\u7528\u4E2D"}):(0,u.jsx)(Se.Z,{color:"error",children:"\u5DF2\u7981\u7528"})}}},tableAlertRender:!1,onRow:function(y){return{onClick:function(){return c(y)}}},rowSelection:n,request:T()(l()().mark(function K(){var y,V,k,ne=arguments;return l()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.next=2,Ae(d.h$.apply(void 0,ne));case 2:return y=N.sent,V=y.rows,k=y.total,N.abrupt("return",{data:V,total:k,success:!0});case 6:case"end":return N.stop()}},K)})),children:"1"})},Qe=He,Je=e(47652),ze=function(){return(0,u.jsx)(Je.ZP,{children:(0,u.jsxs)(A.Z,{ghost:!0,gutter:24,children:[(0,u.jsx)(A.Z,{title:"\u89D2\u8272\u5217\u8868",colSpan:"400px",extra:(0,u.jsx)(Ge,{}),children:(0,u.jsx)(Qe,{})}),(0,u.jsx)(A.Z,{title:"\u89D2\u8272\u8BE6\u60C5",children:(0,u.jsx)(Fe,{})})]})})},qe=ze},17218:function(ae,W,e){e.d(W,{CP:function(){return Q},FV:function(){return T},WJ:function(){return L},Yh:function(){return Z},tg:function(){return g}});var w=e(35290),l=e.n(w),H=e(30279),_=e.n(H),G=e(411),j=e.n(G),b=e(12824);function T(i,o){return D.apply(this,arguments)}function D(){return D=j()(l()().mark(function i(o,h){return l()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,b.WY)("/system/menu/add",_()({method:"POST",headers:{"Content-Type":"application/json"},data:o},h||{})));case 1:case"end":return a.stop()}},i)})),D.apply(this,arguments)}function Z(i,o){return R.apply(this,arguments)}function R(){return R=j()(l()().mark(function i(o,h){return l()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,b.WY)("/system/menu/edit",_()({method:"POST",headers:{"Content-Type":"application/json"},data:o},h||{})));case 1:case"end":return a.stop()}},i)})),R.apply(this,arguments)}function L(i,o){return $.apply(this,arguments)}function $(){return $=j()(l()().mark(function i(o,h){return l()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,b.WY)("/system/menu/info",_()({method:"GET",params:_()({},o)},h||{})));case 1:case"end":return a.stop()}},i)})),$.apply(this,arguments)}function Q(i,o){return A.apply(this,arguments)}function A(){return A=j()(l()().mark(function i(o,h){return l()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,b.WY)("/system/menu/list",_()({method:"POST",headers:{"Content-Type":"application/json"},data:o},h||{})));case 1:case"end":return a.stop()}},i)})),A.apply(this,arguments)}function g(i,o){return P.apply(this,arguments)}function P(){return P=j()(l()().mark(function i(o,h){return l()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,b.WY)("/system/menu/remove",_()({method:"POST",params:_()({},o)},h||{})));case 1:case"end":return a.stop()}},i)})),P.apply(this,arguments)}function M(i,o){return C.apply(this,arguments)}function C(){return C=_asyncToGenerator(_regeneratorRuntime().mark(function i(o,h){return _regeneratorRuntime().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",request("/system/menu/roleMenuTreeSelect",_objectSpread({method:"GET",params:_objectSpread({},o)},h||{})));case 1:case"end":return a.stop()}},i)})),C.apply(this,arguments)}function x(i,o){return u.apply(this,arguments)}function u(){return u=_asyncToGenerator(_regeneratorRuntime().mark(function i(o,h){return _regeneratorRuntime().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",request("/system/menu/treeSelect",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:o},h||{})));case 1:case"end":return a.stop()}},i)})),u.apply(this,arguments)}}}]);
