"use strict";(self.webpackChunkruoyi_x_umi=self.webpackChunkruoyi_x_umi||[]).push([[650],{44391:function(ue,U,e){var b=e(84045),a=e(40107),Z=e(11527),F=e(50959),K=e(56800),x=["fieldProps","min","proFieldProps","max"],M=function(D,S){var s=D.fieldProps,y=D.min,g=D.proFieldProps,T=D.max,E=(0,a.Z)(D,x);return(0,Z.jsx)(K.Z,(0,b.Z)({valueType:"digit",fieldProps:(0,b.Z)({min:y,max:T},s),ref:S,filedConfig:{defaultProps:{width:"100%"}},proFieldProps:g},E))};U.Z=F.forwardRef(M)},62349:function(ue,U,e){var b=e(39799),a=e(76599),Z=e(84045),F=e(40107),K=e(11527),x=e(85382),M=e(50959),I=e(14679),D=e(56800),S=["fieldProps","options","radioType","layout","proFieldProps","valueEnum"],s=M.forwardRef(function(E,G){var j=E.fieldProps,X=E.options,$=E.radioType,V=E.layout,J=E.proFieldProps,f=E.valueEnum,h=(0,F.Z)(E,S);return(0,K.jsx)(D.Z,(0,Z.Z)((0,Z.Z)({valueType:$==="button"?"radioButton":"radio",ref:G,valueEnum:(0,x.h)(f,void 0)},h),{},{fieldProps:(0,Z.Z)({options:X,layout:V},j),proFieldProps:J,filedConfig:{customLightMode:!0}}))}),y=M.forwardRef(function(E,G){var j=E.fieldProps,X=E.children;return(0,K.jsx)(a.ZP,(0,Z.Z)((0,Z.Z)({},j),{},{ref:G,children:X}))}),g=(0,I.G)(y,{valuePropName:"checked",ignoreWidth:!0}),T=g;T.Group=s,T.Button=a.ZP.Button,T.displayName="ProFormComponent",U.Z=T},33:function(ue,U,e){var b=e(84045),a=e(40107),Z=e(11527),F=e(56800),K=["fieldProps","proFieldProps"],x=["fieldProps","proFieldProps"],M="text",I=function(y){var g=y.fieldProps,T=y.proFieldProps,E=(0,a.Z)(y,K);return(0,Z.jsx)(F.Z,(0,b.Z)({valueType:M,fieldProps:g,filedConfig:{valueType:M},proFieldProps:T},E))},D=function(y){var g=y.fieldProps,T=y.proFieldProps,E=(0,a.Z)(y,x);return(0,Z.jsx)(F.Z,(0,b.Z)({valueType:"password",fieldProps:g,proFieldProps:T,filedConfig:{valueType:M}},E))},S=I;S.Password=D,S.displayName="ProFormComponent",U.Z=S},7570:function(ue,U,e){var b=e(84045),a=e(40107),Z=e(11527),F=e(50959),K=e(56800),x=["fieldProps","proFieldProps"],M=function(D,S){var s=D.fieldProps,y=D.proFieldProps,g=(0,a.Z)(D,x);return(0,Z.jsx)(K.Z,(0,b.Z)({ref:S,valueType:"textarea",fieldProps:s,proFieldProps:y},g))};U.Z=F.forwardRef(M)},92060:function(ue,U,e){e.r(U),e.d(U,{default:function(){return sr}});var b=e(35290),a=e.n(b),Z=e(93275),F=e.n(Z),K=e(30279),x=e.n(K),M=e(411),I=e.n(M),D=e(46686),S=e.n(D),s=e(72132),y=e(32480),g=e(27408),T=e(69080),E=e(18975),G=e(91238),j=e(87130),X="systemMenu",$=[X,"list"],V=(0,j.cn)({key:"".concat(X,"SelectedMenuId"),default:0}),J=(0,j.cn)({key:"".concat(X,"VisibleCreateModal"),default:!1}),f=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return(0,T.useQuery)($,I()(a()().mark(function t(){var i,c;return a()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,(0,y.CP)(n);case 2:return i=d.sent,c=(0,g.tw)(i,{id:"menuId",pId:"parentId",rootPId:null}),d.abrupt("return",{treeData:(0,g.dH)(c),map:i.reduce(function(C,P){return x()(x()({},C),{},F()({},P.menuId,P))},{}),parentIds:(0,g.Vy)(i)});case 5:case"end":return d.stop()}},t)})))},h=function(){var n=(0,T.useQueryClient)(),t=(0,j.rb)(V);return(0,T.useMutation)(function(){var i=I()(a()().mark(function c(m){return a()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:E.Z.confirm({title:"\u5220\u9664\u83DC\u5355",content:"\u786E\u5B9A\u5220\u9664\u8BE5\u83DC\u5355\u5417\uFF1F",onOk:function(){var P=I()(a()().mark(function v(){return a()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,(0,y.tg)({menuId:m});case 2:return l.next=4,n.invalidateQueries($);case 4:t(),G.ZP.success("\u5220\u9664\u6210\u529F");case 6:case"end":return l.stop()}},v)}));function B(){return P.apply(this,arguments)}return B}()});case 1:case"end":return C.stop()}},c)}));return function(c){return i.apply(this,arguments)}}())},R=e(20436),z=e(12025),u=e(84045),oe=e(40107),r=e(11527),L=e(50959),le=e(56800),xe=["fieldProps","request","params","proFieldProps"],Me=function(n,t){var i=n.fieldProps,c=n.request,m=n.params,d=n.proFieldProps,C=(0,oe.Z)(n,xe);return(0,r.jsx)(le.Z,(0,u.Z)({valueType:"cascader",fieldProps:i,ref:t,request:c,params:m,filedConfig:{customLightMode:!0},proFieldProps:d},C))},De=L.forwardRef(Me),te=e(62349),ge=e(6732),ie=e(99256),ee=e(33),Te=e(44391),je=e(7570),Pe=e(10979),de=e(49914),Ee=function(n,t){var i=[0];if(t===0)return i;var c=function m(d){!(n!=null&&n[d])||(n[d].parentId&&m(n[d].parentId.toString()),n[d].menuType!==s.og.F&&i.push(Number(d)))};return c(t.toString()),i},Se=function(n){var t=function i(c){return c.filter(function(m){return m.menuType!==s.og.F}).map(function(m){var d=m.menuId,C=m.menuName,P=m.children;return{menuId:d,menuName:C,children:P?i(P):[]}})};return[{menuId:0,menuName:"\u6839\u76EE\u5F55",children:n?t(n):[]}]},Ze=function(){var n,t=(0,L.useRef)(),i=(0,j.FV)(J),c=S()(i,2),m=c[0],d=c[1],C=(0,T.useQueryClient)(),P=(0,j.sJ)(V),B=(0,Pe.Z)(I()(a()().mark(function l(){var p,_,O,w=arguments;return a()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return p=w.length>0&&w[0]!==void 0?w[0]:{},N.next=3,(0,y.CP)(p);case 3:return _=N.sent,O=(0,g.tw)(_,{id:"menuId",pId:"parentId",rootPId:null}),N.abrupt("return",{options:Se((0,g.dH)(O)),map:_.reduce(function(k,Q){return x()(x()({},k),{},F()({},Q.menuId,Q))},{})});case 6:case"end":return N.stop()}},l)}))),v=B.data,A=B.refresh;return(0,L.useEffect)(function(){var l;if(t!=null&&(l=t.current)!==null&&l!==void 0&&l.setFieldsValue&&v!==null&&v!==void 0&&v.map){var p;t==null||(p=t.current)===null||p===void 0||p.setFieldsValue({parentId:Ee(v==null?void 0:v.map,P)})}},[P,v==null?void 0:v.map,t==null?void 0:t.current]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(de.Z,{className:"mr-2",type:"primary",onClick:function(){return d(!0)},icon:(0,r.jsx)(R.Z,{}),children:"\u65B0\u5EFA"}),(0,r.jsx)(E.Z,{visible:m,onCancel:function(){return d(!1)},title:"\u65B0\u5EFA\u83DC\u5355",footer:!1,width:515,children:(0,r.jsxs)(z.A,{onFinish:function(){var l=I()(a()().mark(function p(_){var O;return a()().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:return Y.next=2,(0,y.FV)(_);case 2:return Y.next=4,C.invalidateQueries($);case 4:d(!1),A(),t==null||(O=t.current)===null||O===void 0||O.resetFields(),G.ZP.success("\u65B0\u5EFA\u6210\u529F");case 8:case"end":return Y.stop()}},p)}));return function(p){return l.apply(this,arguments)}}(),formRef:t,children:[(0,r.jsx)(De,{name:"parentId",label:"\u7236\u7EA7\u83DC\u5355",initialValue:Ee((n=v==null?void 0:v.map)!==null&&n!==void 0?n:{},P),fieldProps:{options:v==null?void 0:v.options,fieldNames:{label:"menuName",value:"menuId",children:"children"},changeOnSelect:!0},rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u7236\u7EA7\u83DC\u5355"}],transform:function(p){return{parentId:p[p.length-1]}}}),(0,r.jsx)(te.Z.Group,{name:"menuType",label:"\u83DC\u5355\u7C7B\u578B",valueEnum:s.QZ,rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u83DC\u5355\u7C7B\u578B"}]}),(0,r.jsx)(ge.Z,{name:["menuType"],children:function(p){var _=p.menuType;return _?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(ie.UW,{children:[(0,r.jsx)(ee.Z,{name:"menuName",label:"\u83DC\u5355\u540D\u79F0",width:"sm",rules:[{required:!0}]}),(0,r.jsx)(Te.Z,{name:"orderNum",label:"\u663E\u793A\u6392\u5E8F",tooltip:"\u9ED8\u8BA4\u6570\u503C\u4E3A0\uFF0C\u6570\u503C\u8D8A\u5927\u6392\u5E8F\u8D8A\u9760\u540E\uFF0C\u6570\u503C\u76F8\u7B49\u6309\u7167\u521B\u5EFA\u65F6\u95F4\u5148\u540E\u6392\u5E8F",rules:[{required:!0}],width:"sm",initialValue:0})]}),_!==s.og.F&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(ie.UW,{children:[(0,r.jsx)(te.Z.Group,{tooltip:"\u9009\u62E9\u505C\u7528\u5219\u8DEF\u7531\u5C06\u4E0D\u4F1A\u51FA\u73B0\u5728\u4FA7\u8FB9\u680F\uFF0C\u4E5F\u4E0D\u80FD\u88AB\u8BBF\u95EE",name:"status",label:"\u83DC\u5355\u72B6\u6001",valueEnum:s.al,required:!0,initialValue:s.vu.ENABLE}),(0,r.jsx)(te.Z.Group,{name:"visible",label:"\u83DC\u5355\u662F\u5426\u663E\u793A",valueEnum:s.gc,required:!0,initialValue:s.Ve.YES,tooltip:"\u9009\u62E9\u5426\u5219\u8DEF\u7531\u5C06\u4E0D\u4F1A\u51FA\u73B0\u5728\u4FA7\u8FB9\u680F\uFF0C\u4F46\u4ECD\u7136\u53EF\u4EE5\u8BBF\u95EE"}),(0,r.jsx)(te.Z.Group,{name:"isFrame",label:"\u662F\u5426\u5916\u94FE",valueEnum:s.gc,required:!0,initialValue:s.Ve.NO,tooltip:"\u9009\u62E9\u662F\u5916\u94FE\u5219\u8DEF\u7531\u5730\u5740\u9700\u8981\u4EE5`http(s)://`\u5F00\u5934"})]}),(0,r.jsxs)(ie.UW,{children:[(0,r.jsx)(ee.Z,{name:"icon",label:"\u83DC\u5355\u56FE\u6807",width:"sm",tooltip:"https://ant.design/components/icon-cn/"}),(0,r.jsx)(ee.Z,{width:"sm",name:"path",label:"\u8DEF\u7531\u5730\u5740",tooltip:"\u8BBF\u95EE\u7684\u8DEF\u7531\u5730\u5740\uFF0C\u5982\uFF1A`user`\uFF0C\u5982\u5916\u7F51\u5730\u5740\u9700\u5185\u94FE\u8BBF\u95EE\u5219\u4EE5`http(s)://`\u5F00\u5934",rules:[{required:!0}]})]})]}),_===s.og.C&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(ee.Z,{name:"queryParam",label:"\u8DEF\u7531\u53C2\u6570",tooltip:'\u8BBF\u95EE\u8DEF\u7531\u7684\u9ED8\u8BA4\u4F20\u9012\u53C2\u6570\uFF0C\u5982\uFF1A{"id": 1, "name": "ry"}'})}),_!==s.og.M&&(0,r.jsx)(ee.Z,{name:"perms",label:"\u6743\u9650\u6807\u8BC6"})]}):null}}),(0,r.jsx)(je.Z,{name:"remark",label:"\u5907\u6CE8"})]})})]})},Ie=Ze,Re=e(71224),_e=function(){var n=(0,j.sJ)(V),t=h(),i=t.mutate,c=t.isLoading;return(0,r.jsx)(de.Z,{icon:(0,r.jsx)(Re.Z,{}),loading:c,disabled:n===0,danger:!0,onClick:function(){return i(n)},children:"\u5220\u9664"})},Oe=_e,me=e(86628),ae=e(78921),ye=e(60085),pe={xs:1,sm:1,md:1,lg:1,xl:2},Be=function(n){return(0,L.useMemo)(function(){var t=[];return n?(n!==s.og.F&&t.push({title:"\u72B6\u6001",dataIndex:"status",key:"status",valueType:"radio",valueEnum:s.al},{title:"\u662F\u5426\u663E\u793A",dataIndex:"visible",key:"visible",valueType:"radio",valueEnum:s.gc,tooltip:"\u9009\u62E9\u5426\u5219\u8DEF\u7531\u5C06\u4E0D\u4F1A\u51FA\u73B0\u5728\u4FA7\u8FB9\u680F\uFF0C\u4F46\u4ECD\u7136\u53EF\u4EE5\u8BBF\u95EE"},{title:"\u662F\u5426\u5916\u94FE",dataIndex:"isFrame",key:"isFrame",valueType:"radio",valueEnum:s.gc,tooltip:"\u9009\u62E9\u662F\u5916\u94FE\u5219\u8DEF\u7531\u5730\u5740\u9700\u8981\u4EE5`http(s)://`\u5F00\u5934"},{title:"\u56FE\u6807",dataIndex:"icon",key:"icon",valueType:"text",tooltip:"https://ant.design/components/icon-cn/"},{title:"\u8DEF\u7531\u5730\u5740",dataIndex:"path",key:"path",valueType:"text",tooltip:"\u8BBF\u95EE\u7684\u8DEF\u7531\u5730\u5740\uFF0C\u5982\uFF1A`user`\uFF0C\u5982\u5916\u7F51\u5730\u5740\u9700\u5185\u94FE\u8BBF\u95EE\u5219\u4EE5`http(s)://`\u5F00\u5934"},{title:"\u8DEF\u7531\u53C2\u6570",dataIndex:"queryParam",key:"queryParam",valueType:"code",tooltip:'\u8BBF\u95EE\u8DEF\u7531\u7684\u9ED8\u8BA4\u4F20\u9012\u53C2\u6570\uFF0C\u5982\uFF1A{"id": 1, "name": "ry"}'}),n!==s.og.M&&t.push({title:"\u6743\u9650\u6807\u8BC6",dataIndex:"perms",key:"perms",valueType:"text",copyable:!0}),t):[]},[n])},Ae=function(){var n=(0,j.sJ)(V),t=f(),i=t.refetch,c=(0,Pe.Z)(I()(a()().mark(function A(){return a()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,(0,y.WJ)({menuId:n});case 2:return p.abrupt("return",p.sent);case 3:case"end":return p.stop()}},A)})),{ready:n>0,refreshDeps:[n]}),m=c.data,d=c.refresh,C=(0,T.useMutation)(y.Yh,{onSuccess:function(){d(),i(),G.ZP.success("\u4FDD\u5B58\u6210\u529F")}}),P=C.mutateAsync,B=Be(m==null?void 0:m.menuType),v={onSave:function(){var A=I()(a()().mark(function p(_,O){var w,Y,N,k,Q;return a()().wrap(function(re){for(;;)switch(re.prev=re.next){case 0:return w=O.menuType,Y=O.orderNum,N=O.menuName,k=O.menuId,Q=_,re.next=4,P(F()({menuId:k,menuType:w,orderNum:Y,menuName:N},Q,O[Q]));case 4:case"end":return re.stop()}},p)}));function l(p,_){return A.apply(this,arguments)}return l}()};return n===0?(0,r.jsx)(ae.Z,{image:ae.Z.PRESENTED_IMAGE_SIMPLE,description:"\u70B9\u51FB\u9009\u62E9\u5DE6\u4FA7\u83DC\u5355\u9879\u67E5\u770B\u8BE6\u60C5"}):(0,r.jsxs)("div",{children:[(0,r.jsx)(me.vY,{columns:[{title:"\u7C7B\u578B",dataIndex:"menuType",key:"menuType",valueType:"select",valueEnum:s.QZ,editable:!1},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",key:"createTime",valueType:"dateTime",editable:!1}],dataSource:m,column:pe}),(0,r.jsx)(ye.Z,{}),(0,r.jsx)(me.vY,{columns:[{title:"\u540D\u79F0",dataIndex:"menuName",key:"menuName",valueType:"text"},{title:"\u663E\u793A\u987A\u5E8F",dataIndex:"orderNum",key:"orderNum",valueType:"digit",tooltip:"\u9ED8\u8BA4\u6570\u503C\u4E3A0\uFF0C\u6570\u503C\u8D8A\u5927\u6392\u5E8F\u8D8A\u9760\u540E\uFF0C\u6570\u503C\u76F8\u7B49\u6309\u7167\u521B\u5EFA\u65F6\u95F4\u5148\u540E\u6392\u5E8F"},{title:"\u5907\u6CE8",dataIndex:"remark",key:"remark",valueType:"textarea",hideInSearch:!0}],dataSource:m,editable:v,column:pe}),(0,r.jsx)(ye.Z,{}),(0,r.jsx)(me.vY,{columns:B,dataSource:m,editable:v,column:pe})]})},Le=Ae,We=e(95406),Ue=e(42020),be=e(8790),Ke=e(98408),Ne=e(35675),Fe=e(85382),Ce=e(62625),Ye=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],Ge=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],Ve=L.forwardRef(function(o,n){var t=o.fieldProps,i=o.children,c=o.params,m=o.proFieldProps,d=o.mode,C=o.valueEnum,P=o.request,B=o.showSearch,v=o.options,A=(0,oe.Z)(o,Ye),l=(0,L.useContext)(Ce.Z);return(0,r.jsx)(le.Z,(0,u.Z)((0,u.Z)({valueEnum:(0,Fe.h)(C),request:P,params:c,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,u.Z)({options:v,mode:d,showSearch:B,getPopupContainer:l.getPopupContainer},t),ref:n,proFieldProps:m},A),{},{children:i}))}),$e=L.forwardRef(function(o,n){var t=o.fieldProps,i=o.children,c=o.params,m=o.proFieldProps,d=o.mode,C=o.valueEnum,P=o.request,B=o.options,v=(0,oe.Z)(o,Ge),A=(0,u.Z)({options:B,mode:d||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},t),l=(0,L.useContext)(Ce.Z);return(0,r.jsx)(le.Z,(0,u.Z)((0,u.Z)({valueEnum:(0,Fe.h)(C),request:P,params:c,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,u.Z)({getPopupContainer:l.getPopupContainer},A),ref:n,proFieldProps:m},v),{},{children:i}))}),we=Ve,Qe=$e,ce=we;ce.SearchSelect=Qe,ce.displayName="ProFormComponent";var Xe=ce,H=e(29585),Je=e(95465),ze=e(26783),He=e(95585),ke=e(50209),qe=e(86322),er=e.n(qe),se={M:"blue",C:"green",F:"red"},rr=function(n){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(H.Z,{color:"rgb(148 163 184)",children:n.orderNum}),(n==null?void 0:n.icon)&&(0,r.jsx)(We.z_,{name:n.icon,className:"mr-1"}),(0,r.jsx)(H.Z,{color:se[n.menuType],style:{margin:"0 0 2px 0"},children:n.menuName}),(n==null?void 0:n.perms)&&(0,r.jsx)(H.Z,{style:{margin:"0 0 2px 2px"},children:(0,r.jsxs)(Je.Z,{size:"small",children:[n.perms,(0,r.jsx)(Ue.Z,{style:{color:"#1890ff"},onClick:function(i){er()(n.perms),G.ZP.success("\u590D\u5236\u6210\u529F"),i.stopPropagation()}})]})})]})},nr=function(){return(0,r.jsxs)("div",{className:"mb-2",children:["\u6807\u7B7E\u542B\u4E49\uFF1A",(0,r.jsx)(H.Z,{color:"rgb(148 163 184)",children:"\u663E\u793A\u987A\u5E8F"}),(0,r.jsx)(H.Z,{color:se[s.og.M],children:"\u76EE\u5F55"}),(0,r.jsx)(H.Z,{color:se[s.og.C],children:"\u83DC\u5355"}),(0,r.jsx)(H.Z,{color:se[s.og.F],children:"\u6309\u94AE"}),(0,r.jsx)(H.Z,{children:"\u6743\u9650\u6807\u8BC6"})]})},ur=function(){var n,t=(0,L.useState)({}),i=S()(t,2),c=i[0],m=i[1],d=(0,L.useState)([]),C=S()(d,2),P=C[0],B=C[1],v=(0,L.useState)([]),A=S()(v,2),l=A[0],p=A[1],_=(0,j.FV)(V),O=S()(_,2),w=O[0],Y=O[1],N=(0,j.rb)(V),k=(0,j.Zl)(J),Q=f(c),W=Q.data,re=Q.refetch,or=h(),lr=or.mutate,ir=function(ne){B(ne)},fe=(l==null?void 0:l.length)!==0&&(l==null?void 0:l.length)===(W==null||(n=W.parentIds)===null||n===void 0?void 0:n.length);return(0,L.useEffect)(function(){re()},[c]),(0,L.useEffect)(function(){P!=null&&P[0]?Y(P[0]):N()},[P]),(0,r.jsxs)("div",{children:[(0,r.jsx)(nr,{}),(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsx)(de.Z,{size:"small",className:"my-2",icon:fe?(0,r.jsx)(be.Z,{}):(0,r.jsx)(Ke.Z,{}),onClick:function(){return p(fe?[]:W==null?void 0:W.parentIds)},children:fe?"\u5168\u90E8\u6298\u53E0":"\u5168\u90E8\u5C55\u5F00"}),(0,r.jsxs)(Ne.M,{onFinish:function(){var q=I()(a()().mark(function ne(dr){return a()().wrap(function(he){for(;;)switch(he.prev=he.next){case 0:B([]),p([]),m(dr);case 3:case"end":return he.stop()}},ne)}));return function(ne){return q.apply(this,arguments)}}(),children:[(0,r.jsx)(ee.Z,{name:"menuName",label:"\u83DC\u5355\u540D\u79F0"}),(0,r.jsx)(Xe,{name:"status",label:"\u72B6\u6001",valueEnum:s.al})]})]}),(0,r.jsx)(ze.Z,{overlay:(0,r.jsx)(He.Z,{items:[{label:"\u65B0\u5EFA",key:"create",onClick:function(){return k(!0)}},{label:"\u5728\u6839\u76EE\u5F55\u4E0B\u65B0\u5EFA",key:"create",onClick:function(){N(),k(!0)}},{label:"\u5220\u9664",key:"delete",danger:!0,disabled:P.length===0,onClick:function(){return lr(w)}}]}),trigger:["contextMenu"],children:W!=null&&W.treeData.length?(0,r.jsx)(ke.Z,{blockNode:!0,selectedKeys:P,onSelect:ir,expandedKeys:l,titleRender:rr,onExpand:p,showLine:{showLeafIcon:!1},fieldNames:{title:"menuName",key:"menuId",children:"children"},treeData:W==null?void 0:W.treeData,onRightClick:function(ne){return B([ne.node.key])}}):(0,r.jsx)(ae.Z,{image:ae.Z.PRESENTED_IMAGE_SIMPLE})})]})},tr=ur,ve=e(76426),ar=e(89383);function sr(){return(0,r.jsx)(ar._z,{children:(0,r.jsxs)(ve.Z,{ghost:!0,gutter:24,children:[(0,r.jsx)(ve.Z,{title:"\u83DC\u5355\u5217\u8868",colSpan:"550px",extra:[(0,r.jsx)(Ie,{},"ButtonCreate"),(0,r.jsx)(Oe,{},"ButtonDelete")],children:(0,r.jsx)(tr,{})}),(0,r.jsx)(ve.Z,{title:"\u83DC\u5355\u8BE6\u60C5",children:(0,r.jsx)(Le,{})})]})})}},32480:function(ue,U,e){e.d(U,{CP:function(){return T},FV:function(){return I},Q_:function(){return V},WJ:function(){return y},Yh:function(){return S},tg:function(){return G}});var b=e(35290),a=e.n(b),Z=e(30279),F=e.n(Z),K=e(411),x=e.n(K),M=e(27408);function I(f,h){return D.apply(this,arguments)}function D(){return D=x()(a()().mark(function f(h,R){return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,M.WY)("/system/menu/add",F()({method:"POST",headers:{"Content-Type":"application/json"},data:h},R||{})));case 1:case"end":return u.stop()}},f)})),D.apply(this,arguments)}function S(f,h){return s.apply(this,arguments)}function s(){return s=x()(a()().mark(function f(h,R){return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,M.WY)("/system/menu/edit",F()({method:"POST",headers:{"Content-Type":"application/json"},data:h},R||{})));case 1:case"end":return u.stop()}},f)})),s.apply(this,arguments)}function y(f,h){return g.apply(this,arguments)}function g(){return g=x()(a()().mark(function f(h,R){return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,M.WY)("/system/menu/info",F()({method:"GET",params:F()({},h)},R||{})));case 1:case"end":return u.stop()}},f)})),g.apply(this,arguments)}function T(f,h){return E.apply(this,arguments)}function E(){return E=x()(a()().mark(function f(h,R){return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,M.WY)("/system/menu/list",F()({method:"POST",headers:{"Content-Type":"application/json"},data:h},R||{})));case 1:case"end":return u.stop()}},f)})),E.apply(this,arguments)}function G(f,h){return j.apply(this,arguments)}function j(){return j=x()(a()().mark(function f(h,R){return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,M.WY)("/system/menu/remove",F()({method:"POST",params:F()({},h)},R||{})));case 1:case"end":return u.stop()}},f)})),j.apply(this,arguments)}function X(f,h){return $.apply(this,arguments)}function $(){return $=_asyncToGenerator(_regeneratorRuntime().mark(function f(h,R){return _regeneratorRuntime().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",request("/system/menu/roleMenuTreeSelect",_objectSpread({method:"GET",params:_objectSpread({},h)},R||{})));case 1:case"end":return u.stop()}},f)})),$.apply(this,arguments)}function V(f,h){return J.apply(this,arguments)}function J(){return J=x()(a()().mark(function f(h,R){return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,M.WY)("/system/menu/treeSelect",F()({method:"POST",headers:{"Content-Type":"application/json"},data:h},R||{})));case 1:case"end":return u.stop()}},f)})),J.apply(this,arguments)}}}]);
