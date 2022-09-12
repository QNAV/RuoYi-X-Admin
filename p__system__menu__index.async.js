"use strict";(self.webpackChunkruoyi_x_umi=self.webpackChunkruoyi_x_umi||[]).push([[650],{31524:function(Ee,H,n){n.r(H),n.d(H,{default:function(){return we}});var ue=n(35290),s=n.n(ue),te=n(411),g=n.n(te),o=n(89294),b=n(93275),P=n.n(b),re=n(30279),k=n.n(re),Z=n(58627),B=n(59499),ae=n(78175),Q=n(6647),G=n(28622),L=n(88171),Y=n(55024),D=n(98205),K="systemMenu",X=function(u){var m=function r(v){return v.filter(function(p){return p.menuType!==o.og.F}).map(function(p){var i=p.menuId,h=p.menuName,y=p.children;return{menuId:i,menuName:h,children:y?r(y):[]}})};return[{menuId:0,menuName:"\u6839\u76EE\u5F55",children:u?m(u):[]}]},q=(0,D.cn)({key:"".concat(K,"SelectedMenuId"),default:0}),U=function(){return(0,D.rb)(q)},c=function(){return(0,D.FV)(q)},d=function(){return(0,D.sJ)(q)},x=(0,D.cn)({key:"".concat(K,"VisibleCreateModal"),default:!1}),R=function(){return(0,D.rb)(x)},t=function(){return(0,D.Zl)(x)},ge=function(){return(0,D.sJ)(x)},me=[K,"list"],se=function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return(0,ae.a)(me,g()(s()().mark(function m(){var r,v;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,Z.CP)(u);case 2:return r=i.sent,v=(0,B.tw)(r,{id:"menuId",pId:"parentId",rootPId:null}),i.abrupt("return",{options:X((0,B.dH)(v)),treeData:(0,B.dH)(v),map:r.reduce(function(h,y){return k()(k()({},h),{},P()({},y.menuId,y))},{}),parentIds:(0,B.Vy)(r)});case 5:case"end":return i.stop()}},m)})))},ve=function(){var u=(0,Q.NL)(),m=U();return(0,G.D)(function(){var r=g()(s()().mark(function v(p){return s()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:L.Z.confirm({title:"\u5220\u9664\u83DC\u5355",content:"\u786E\u5B9A\u5220\u9664\u8BE5\u83DC\u5355\u5417\uFF1F",onOk:function(){var y=g()(s()().mark(function V(){return s()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,(0,Z.tg)({menuId:p});case 2:return E.next=4,u.invalidateQueries(me);case 4:m(),Y.ZP.success("\u5220\u9664\u6210\u529F");case 6:case"end":return E.stop()}},V)}));function f(){return y.apply(this,arguments)}return f}()});case 1:case"end":return h.stop()}},v)}));return function(v){return r.apply(this,arguments)}}())},z=n(67126),xe=n(54064),l=n(79366),le=n(4733),A=n(50959),e=n(11527),pe=function(u,m){var r=[0];if(m===0)return r;var v=function p(i){var h;!(u!=null&&u[i])||(u!=null&&(h=u[i])!==null&&h!==void 0&&h.parentId&&p(u[i].parentId.toString()),u[i].menuType!==o.og.F&&r.push(Number(i)))};return v(m.toString()),r},Me=function(){var u,m=(0,z.md)(),r=(0,A.useRef)(),v=t(),p=R(),i=ge(),h=d(),y=se(),f=y.data,V=y.refetch,N=(0,G.D)(g()(s()().mark(function j(){var a,F,I;return s()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,(a=r.current)===null||a===void 0||(F=a.validateFieldsReturnFormatValue)===null||F===void 0?void 0:F.call(a);case 2:if(I=S.sent,I){S.next=5;break}return S.abrupt("return");case 5:return S.next=7,(0,Z.FV)(I);case 7:case"end":return S.stop()}},j)})),{onSuccess:function(){var a;V(),p(),r==null||(a=r.current)===null||a===void 0||a.resetFields(),Y.ZP.success("\u65B0\u5EFA\u6210\u529F")}}),E=N.isLoading,T=N.mutate;return(0,A.useEffect)(function(){var j;if(r!=null&&(j=r.current)!==null&&j!==void 0&&j.setFieldsValue&&f!==null&&f!==void 0&&f.map){var a;r==null||(a=r.current)===null||a===void 0||a.setFieldsValue({parentId:pe(f.map,h)})}},[h,f==null?void 0:f.map,r==null?void 0:r.current]),(0,e.jsxs)(z.Nv,{accessible:m.canAddSysMenu,children:[(0,e.jsx)(le.Z,{type:"primary",onClick:function(){return v(!0)},icon:(0,e.jsx)(xe.Z,{}),children:"\u65B0\u5EFA"}),(0,e.jsx)(L.Z,{visible:i,onCancel:p,title:"\u65B0\u5EFA\u83DC\u5355",width:515,okText:"\u63D0\u4EA4",onOk:function(){return T()},okButtonProps:{loading:E},children:(0,e.jsxs)(l.A96,{submitter:!1,formRef:r,children:[(0,e.jsx)(l.Ves,{name:"parentId",label:"\u7236\u7EA7\u83DC\u5355",initialValue:pe((u=f==null?void 0:f.map)!==null&&u!==void 0?u:{},h),fieldProps:{options:f==null?void 0:f.options,fieldNames:{label:"menuName",value:"menuId",children:"children"},changeOnSelect:!0},rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u7236\u7EA7\u83DC\u5355"}],transform:function(a){return{parentId:a[a.length-1]}}}),(0,e.jsx)(l.$Oj.Group,{name:"menuType",label:"\u83DC\u5355\u7C7B\u578B",valueEnum:o.QZ,rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u83DC\u5355\u7C7B\u578B"}]}),(0,e.jsx)(l.ien,{name:["menuType"],children:function(a){var F=a.menuType;return F?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(l.UWz,{children:[(0,e.jsx)(l.VaQ,{name:"menuName",label:"\u83DC\u5355\u540D\u79F0",width:"sm",rules:[{required:!0}]}),(0,e.jsx)(l.k_F,{name:"orderNum",label:"\u663E\u793A\u6392\u5E8F",tooltip:"\u9ED8\u8BA4\u6570\u503C\u4E3A0\uFF0C\u6570\u503C\u8D8A\u5927\u6392\u5E8F\u8D8A\u9760\u540E\uFF0C\u6570\u503C\u76F8\u7B49\u6309\u7167\u521B\u5EFA\u65F6\u95F4\u5148\u540E\u6392\u5E8F",rules:[{required:!0}],width:"sm",initialValue:0})]}),F!==o.og.F&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(l.UWz,{children:[(0,e.jsx)(l.$Oj.Group,{tooltip:"\u9009\u62E9\u505C\u7528\u5219\u8DEF\u7531\u5C06\u4E0D\u4F1A\u51FA\u73B0\u5728\u4FA7\u8FB9\u680F\uFF0C\u4E5F\u4E0D\u80FD\u88AB\u8BBF\u95EE",name:"status",label:"\u83DC\u5355\u72B6\u6001",valueEnum:o.al,required:!0,initialValue:o.vu.ENABLE}),(0,e.jsx)(l.$Oj.Group,{name:"visible",label:"\u83DC\u5355\u662F\u5426\u663E\u793A",valueEnum:o.gc,required:!0,initialValue:o.Ve.YES,tooltip:"\u9009\u62E9\u5426\u5219\u8DEF\u7531\u5C06\u4E0D\u4F1A\u51FA\u73B0\u5728\u4FA7\u8FB9\u680F\uFF0C\u4F46\u4ECD\u7136\u53EF\u4EE5\u8BBF\u95EE"}),(0,e.jsx)(l.$Oj.Group,{name:"isFrame",label:"\u662F\u5426\u5916\u94FE",valueEnum:o.gc,required:!0,initialValue:o.Ve.NO,tooltip:"\u9009\u62E9\u662F\u5916\u94FE\u5219\u8DEF\u7531\u5730\u5740\u9700\u8981\u4EE5`http(s)://`\u5F00\u5934"})]}),(0,e.jsxs)(l.UWz,{children:[(0,e.jsx)(l.VaQ,{name:"icon",label:"\u83DC\u5355\u56FE\u6807",width:"sm",tooltip:"https://ant.design/components/icon-cn/"}),(0,e.jsx)(l.VaQ,{width:"sm",name:"path",label:"\u8DEF\u7531\u5730\u5740",tooltip:"\u8BBF\u95EE\u7684\u8DEF\u7531\u5730\u5740\uFF0C\u5982\uFF1A`user`\uFF0C\u5982\u5916\u7F51\u5730\u5740\u9700\u5185\u94FE\u8BBF\u95EE\u5219\u4EE5`http(s)://`\u5F00\u5934",rules:[{required:!0}]})]})]}),F===o.og.C&&(0,e.jsx)(l.VaQ,{name:"queryParam",label:"\u8DEF\u7531\u53C2\u6570",tooltip:'\u8BBF\u95EE\u8DEF\u7531\u7684\u9ED8\u8BA4\u4F20\u9012\u53C2\u6570\uFF0C\u5982\uFF1A{"id": 1, "name": "ry"}'}),F!==o.og.M&&(0,e.jsx)(l.VaQ,{name:"perms",label:"\u6743\u9650\u6807\u8BC6"})]}):null}}),(0,e.jsx)(l.$JJ,{name:"remark",label:"\u5907\u6CE8"})]})})]})},je=Me,Ce=n(39449),Fe=function(){var u=(0,z.md)(),m=d(),r=ve(),v=r.mutate,p=r.isLoading;return(0,e.jsx)(z.Nv,{accessible:u.canRemoveSysMenu,children:(0,e.jsx)(le.Z,{icon:(0,e.jsx)(Ce.Z,{}),loading:p,disabled:m===0,danger:!0,onClick:function(){return v(m)},children:"\u5220\u9664"})})},Se=Fe,ie=n(11560),De=n(41202),Ie=n(68707),fe=n(37117),oe={xs:1,sm:1,md:1,lg:1,xl:2},Te=function(u){return(0,A.useMemo)(function(){var m=[];return u?(u!==o.og.F&&m.push({title:"\u72B6\u6001",dataIndex:"status",key:"status",valueType:"radio",valueEnum:o.al},{title:"\u662F\u5426\u663E\u793A",dataIndex:"visible",key:"visible",valueType:"radio",valueEnum:o.gc,tooltip:"\u9009\u62E9\u5426\u5219\u8DEF\u7531\u5C06\u4E0D\u4F1A\u51FA\u73B0\u5728\u4FA7\u8FB9\u680F\uFF0C\u4F46\u4ECD\u7136\u53EF\u4EE5\u8BBF\u95EE"},{title:"\u662F\u5426\u5916\u94FE",dataIndex:"isFrame",key:"isFrame",valueType:"radio",valueEnum:o.gc,tooltip:"\u9009\u62E9\u662F\u5916\u94FE\u5219\u8DEF\u7531\u5730\u5740\u9700\u8981\u4EE5`http(s)://`\u5F00\u5934"},{title:"\u56FE\u6807",dataIndex:"icon",key:"icon",valueType:"text",tooltip:"https://ant.design/components/icon-cn/"},{title:"\u8DEF\u7531\u5730\u5740",dataIndex:"path",key:"path",valueType:"text",tooltip:"\u8BBF\u95EE\u7684\u8DEF\u7531\u5730\u5740\uFF0C\u5982\uFF1A`user`\uFF0C\u5982\u5916\u7F51\u5730\u5740\u9700\u5185\u94FE\u8BBF\u95EE\u5219\u4EE5`http(s)://`\u5F00\u5934"},{title:"\u8DEF\u7531\u53C2\u6570",dataIndex:"queryParam",key:"queryParam",valueType:"code",tooltip:'\u8BBF\u95EE\u8DEF\u7531\u7684\u9ED8\u8BA4\u4F20\u9012\u53C2\u6570\uFF0C\u5982\uFF1A{"id": 1, "name": "ry"}'}),u!==o.og.M&&m.push({title:"\u6743\u9650\u6807\u8BC6",dataIndex:"perms",key:"perms",valueType:"text",copyable:!0}),m):[]},[u])},Pe=function(){var u=(0,z.md)(),m=se(),r=m.refetch,v=d(),p=(0,De.Z)(g()(s()().mark(function T(){return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,Z.WJ)({menuId:v});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},T)})),{ready:v>0,refreshDeps:[v]}),i=p.data,h=p.loading,y=p.refresh,f=(0,G.D)(Z.Yh,{onSuccess:function(){y(),r(),Y.ZP.success("\u4FDD\u5B58\u6210\u529F")}}),V=f.mutateAsync,N=Te(i==null?void 0:i.menuType),E=u.canEditSysMenu?{onSave:function(){var T=g()(s()().mark(function a(F,I){var W,S,J,C;return s()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return W=I.menuType,S=I.orderNum,J=I.menuName,C=I.menuId,_.next=3,V(P()({menuId:C,menuType:W,orderNum:S,menuName:J},F,I[F]));case 3:case"end":return _.stop()}},a)}));function j(a,F){return T.apply(this,arguments)}return j}()}:void 0;return v===0?(0,e.jsx)(ie._E,{description:"\u70B9\u51FB\u9009\u62E9\u5DE6\u4FA7\u83DC\u5355\u9879\u67E5\u770B\u8BE6\u60C5"}):(0,e.jsxs)(Ie.Z,{spinning:h,children:[(0,e.jsx)(l.vYc,{columns:[{title:"\u7C7B\u578B",dataIndex:"menuType",key:"menuType",valueType:"select",valueEnum:o.QZ,editable:!1},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",key:"createTime",valueType:"dateTime",editable:!1}],dataSource:i,column:oe}),(0,e.jsx)(fe.Z,{}),(0,e.jsx)(l.vYc,{columns:[{title:"\u540D\u79F0",dataIndex:"menuName",key:"menuName",valueType:"text"},{title:"\u663E\u793A\u987A\u5E8F",dataIndex:"orderNum",key:"orderNum",valueType:"digit",tooltip:"\u9ED8\u8BA4\u6570\u503C\u4E3A0\uFF0C\u6570\u503C\u8D8A\u5927\u6392\u5E8F\u8D8A\u9760\u540E\uFF0C\u6570\u503C\u76F8\u7B49\u6309\u7167\u521B\u5EFA\u65F6\u95F4\u5148\u540E\u6392\u5E8F"},{title:"\u5907\u6CE8",dataIndex:"remark",key:"remark",valueType:"textarea",hideInSearch:!0}],dataSource:i,editable:E,column:oe}),(0,e.jsx)(fe.Z,{}),(0,e.jsx)(l.vYc,{columns:N,dataSource:i,editable:E,column:oe})]})},be=Pe,Be=n(46686),ee=n.n(Be),Re=n(62991),Ae=n(71600),Oe=n(29993),O=n(21107),he=n(35082),Ne=n(27094),Ze=n(83057),Ve=n(84495),$e=n(86322),ke=n.n($e),ne={M:"blue",C:"green",F:"red"},Le=function(u){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(O.Z,{color:"rgb(148 163 184)",children:u.orderNum}),(u==null?void 0:u.icon)&&(0,e.jsx)(ie.z_,{name:u.icon,className:"mr-1"}),(0,e.jsx)(O.Z,{color:ne[u.menuType],style:{margin:"0 0 2px 0"},children:u.menuName}),(u==null?void 0:u.perms)&&(0,e.jsx)(O.Z,{style:{margin:"0 0 2px 2px"},children:(0,e.jsxs)(he.Z,{size:"small",children:[u.perms,(0,e.jsx)(Re.Z,{style:{color:"#1890ff"},onClick:function(r){ke()(u.perms),Y.ZP.success("\u590D\u5236\u6210\u529F"),r.stopPropagation()}})]})})]})},Ye=function(){return(0,e.jsxs)("div",{className:"mb-2",children:["\u6807\u7B7E\u542B\u4E49\uFF1A",(0,e.jsx)(O.Z,{color:"rgb(148 163 184)",children:"\u663E\u793A\u987A\u5E8F"}),(0,e.jsx)(O.Z,{color:ne[o.og.M],children:"\u76EE\u5F55"}),(0,e.jsx)(O.Z,{color:ne[o.og.C],children:"\u83DC\u5355"}),(0,e.jsx)(O.Z,{color:ne[o.og.F],children:"\u6309\u94AE"}),(0,e.jsx)(O.Z,{children:"\u6743\u9650\u6807\u8BC6"})]})},Ue=function(){var u,m=(0,A.useState)({}),r=ee()(m,2),v=r[0],p=r[1],i=(0,A.useState)([]),h=ee()(i,2),y=h[0],f=h[1],V=(0,A.useState)([]),N=ee()(V,2),E=N[0],T=N[1],j=c(),a=ee()(j,2),F=a[0],I=a[1],W=U(),S=t(),J=se(v),C=J.data,ye=J.refetch,_=ve(),Qe=_.mutate,Ge=function(w){f(w)},de=(E==null?void 0:E.length)!==0&&(E==null?void 0:E.length)===(C==null||(u=C.parentIds)===null||u===void 0?void 0:u.length);return(0,A.useEffect)(function(){ye()},[v]),(0,A.useEffect)(function(){y!=null&&y[0]?I(y[0]):W()},[y]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Ye,{}),(0,e.jsxs)("div",{className:"flex justify-between items-center",children:[(0,e.jsx)(le.Z,{size:"small",className:"my-2",icon:de?(0,e.jsx)(Ae.Z,{}):(0,e.jsx)(Oe.Z,{}),onClick:function(){return T(de?[]:C==null?void 0:C.parentIds)},children:de?"\u5168\u90E8\u6298\u53E0":"\u5168\u90E8\u5C55\u5F00"}),(0,e.jsxs)(l.MmX,{onFinish:function(){var $=g()(s()().mark(function w(Ke){return s()().wrap(function(ce){for(;;)switch(ce.prev=ce.next){case 0:f([]),T([]),p(Ke);case 3:case"end":return ce.stop()}},w)}));return function(w){return $.apply(this,arguments)}}(),children:[(0,e.jsx)(l.VaQ,{name:"menuName",label:"\u83DC\u5355\u540D\u79F0"}),(0,e.jsx)(l._IT,{name:"status",label:"\u72B6\u6001",valueEnum:o.al})]})]}),(0,e.jsx)(Ne.Z,{overlay:(0,e.jsx)(Ze.Z,{items:[{label:"\u65B0\u5EFA",key:"create",onClick:function(){return S(!0)}},{label:"\u5728\u6839\u76EE\u5F55\u4E0B\u65B0\u5EFA",key:"create",onClick:function(){W(),S(!0)}},{label:"\u5220\u9664",key:"delete",danger:!0,disabled:y.length===0,onClick:function(){return Qe(F)}}]}),trigger:["contextMenu"],children:(0,e.jsx)("div",{className:"max-h-[60vh] overflow-auto",children:C!=null&&C.treeData.length?(0,e.jsx)(Ve.Z,{blockNode:!0,selectedKeys:y,onSelect:Ge,expandedKeys:E,titleRender:Le,onExpand:T,showLine:{showLeafIcon:!1},fieldNames:{title:"menuName",key:"menuId",children:"children"},treeData:C==null?void 0:C.treeData,onRightClick:function(w){return f([w.node.key])}}):(0,e.jsx)(ie._E,{})})})]})},We=Ue,_e=function(){return(0,e.jsx)(l._zJ,{children:(0,e.jsxs)(l.QWM,{ghost:!0,gutter:24,children:[(0,e.jsx)(l.QWM,{title:"\u83DC\u5355\u5217\u8868",colSpan:"550px",extra:(0,e.jsxs)(he.Z,{children:[(0,e.jsx)(je,{}),(0,e.jsx)(Se,{})]}),children:(0,e.jsx)(We,{})}),(0,e.jsx)(l.QWM,{title:"\u83DC\u5355\u8BE6\u60C5",children:(0,e.jsx)(be,{})})]})})},we=_e},58627:function(Ee,H,n){n.d(H,{CP:function(){return G},FV:function(){return re},WJ:function(){return ae},Yh:function(){return Z},bi:function(){return K},tg:function(){return Y}});var ue=n(35290),s=n.n(ue),te=n(30279),g=n.n(te),o=n(411),b=n.n(o),P=n(59499);function re(c,d){return k.apply(this,arguments)}function k(){return k=b()(s()().mark(function c(d,x){return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,P.WY)("/system/menu/add",g()({method:"POST",headers:{"Content-Type":"application/json"},data:d},x||{})));case 1:case"end":return t.stop()}},c)})),k.apply(this,arguments)}function Z(c,d){return B.apply(this,arguments)}function B(){return B=b()(s()().mark(function c(d,x){return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,P.WY)("/system/menu/edit",g()({method:"POST",headers:{"Content-Type":"application/json"},data:d},x||{})));case 1:case"end":return t.stop()}},c)})),B.apply(this,arguments)}function ae(c,d){return Q.apply(this,arguments)}function Q(){return Q=b()(s()().mark(function c(d,x){return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,P.WY)("/system/menu/info",g()({method:"GET",params:g()({},d)},x||{})));case 1:case"end":return t.stop()}},c)})),Q.apply(this,arguments)}function G(c,d){return L.apply(this,arguments)}function L(){return L=b()(s()().mark(function c(d,x){return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,P.WY)("/system/menu/list",g()({method:"POST",headers:{"Content-Type":"application/json"},data:d},x||{})));case 1:case"end":return t.stop()}},c)})),L.apply(this,arguments)}function Y(c,d){return D.apply(this,arguments)}function D(){return D=b()(s()().mark(function c(d,x){return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,P.WY)("/system/menu/remove",g()({method:"POST",params:g()({},d)},x||{})));case 1:case"end":return t.stop()}},c)})),D.apply(this,arguments)}function K(c,d){return X.apply(this,arguments)}function X(){return X=b()(s()().mark(function c(d,x){return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,P.WY)("/system/menu/roleMenuTreeSelect",g()({method:"GET",params:g()({},d)},x||{})));case 1:case"end":return t.stop()}},c)})),X.apply(this,arguments)}function q(c,d){return U.apply(this,arguments)}function U(){return U=_asyncToGenerator(_regeneratorRuntime().mark(function c(d,x){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/system/menu/treeSelect",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:d},x||{})));case 1:case"end":return t.stop()}},c)})),U.apply(this,arguments)}}}]);
