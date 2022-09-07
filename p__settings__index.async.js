"use strict";(self.webpackChunkruoyi_x_umi=self.webpackChunkruoyi_x_umi||[]).push([[813],{70645:function(re,w,r){r.r(w),r.d(w,{default:function(){return ee}});var E=r(46686),F=r.n(E),B=r(35290),f=r.n(B),D=r(411),p=r.n(D),te=r(69946),O=r(30279),C=r.n(O),v=r(26931);function ae(l){return y.apply(this,arguments)}function y(){return y=_asyncToGenerator(_regeneratorRuntime().mark(function l(s){return _regeneratorRuntime().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",request("/system/user/profile",_objectSpread({method:"GET"},s||{})));case 1:case"end":return d.stop()}},l)})),y.apply(this,arguments)}function W(l,s){return g.apply(this,arguments)}function g(){return g=p()(f()().mark(function l(s,o){return f()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,v.WY)("/system/user/profile",C()({method:"POST",headers:{"Content-Type":"application/json"},data:s},o||{})));case 1:case"end":return a.stop()}},l)})),g.apply(this,arguments)}function ne(l,s,o,d){return x.apply(this,arguments)}function x(){return x=_asyncToGenerator(_regeneratorRuntime().mark(function l(s,o,d,a){var u;return _regeneratorRuntime().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return u=new FormData,d&&u.append("avatarfile",d),Object.keys(o).forEach(function(m){var e=o[m];e!=null&&u.append(m,_typeof(e)==="object"&&!(e instanceof File)?JSON.stringify(e):e)}),i.abrupt("return",request("/system/user/profile/avatar",_objectSpread({method:"POST",params:_objectSpread({},s),data:u,requestType:"form"},a||{})));case 4:case"end":return i.stop()}},l)})),x.apply(this,arguments)}function Z(l,s){return S.apply(this,arguments)}function S(){return S=p()(f()().mark(function l(s,o){return f()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,v.WY)("/system/user/profile/updatePwd",C()({method:"POST",headers:{"Content-Type":"application/json"},data:s},o||{})));case 1:case"end":return a.stop()}},l)})),S.apply(this,arguments)}var c=r(3967),A=r(3650),j=r(28287),$=r(93066),I=r(50959),t=r(11527),M=function(){var s=(0,I.useRef)(),o=(0,A.useMutation)(p()(f()().mark(function u(){var n,i;return f()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s==null||(n=s.current)===null||n===void 0?void 0:n.validateFields();case 2:if(i=e.sent,i!==void 0){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,Z(i);case 7:case"end":return e.stop()}},u)})),{onSuccess:function(){j.ZP.success("\u5BC6\u7801\u4FEE\u6539\u6210\u529F\uFF0C\u5373\u5C06\u81EA\u52A8\u9000\u51FA\u767B\u5F55\u5E76\u8DF3\u8F6C\u81F3\u767B\u5F55\u9875\u9762");var n=setTimeout(function(){(0,v.kS)(),clearTimeout(n)},1500)}}),d=o.mutate,a=o.isLoading;return(0,t.jsxs)(c.A96,{formRef:s,submitter:!1,children:[(0,t.jsx)(c.VaQ.Password,{name:"oldPassword",label:"\u65E7\u5BC6\u7801",rules:[{required:!0}],width:"md"}),(0,t.jsx)(c.VaQ.Password,{name:"newPassword",label:"\u65B0\u5BC6\u7801",width:"md",rules:[{required:!0},{pattern:v.nw,message:"\u957F\u5EA6\u57286-20\u4E4B\u95F4\uFF0C\u53EA\u80FD\u5305\u542B\u5B57\u6BCD\u3001\u6570\u5B57\u548C\u4E0B\u5212\u7EBF"},function(u){var n=u.getFieldValue;return{validator:function(m,e){return e!==n("oldPassword")?Promise.resolve():Promise.reject(new Error("\u65B0\u65E7\u5BC6\u7801\u4E0D\u80FD\u76F8\u540C"))}}}]}),(0,t.jsx)(c.VaQ.Password,{name:"confirmPassword",label:"\u786E\u8BA4\u5BC6\u7801",width:"md",rules:[{required:!0},function(u){var n=u.getFieldValue;return{validator:function(m,e){return!e||n("newPassword")===e?Promise.resolve():Promise.reject(new Error("\u4E24\u6B21\u5BC6\u7801\u8F93\u5165\u4E0D\u4E00\u81F4"))}}}]}),(0,t.jsx)($.Z,{type:"primary",loading:a,onClick:function(){return d()},children:"\u66F4\u65B0\u5BC6\u7801"})]})},U=M,V=r(93275),G=r.n(V),Q=r(43380),L=r(34804),b=r(60225),K=r(50908),R=r(42961),N=r(75157),Y=r(89468),z=r(42381),J="".concat("https://test-ryx-admin-api.p.quicknav.cn","/api/sys/profile/update-avatar"),H=[{dataIndex:"userName",title:"\u7528\u6237\u540D\u79F0",valueType:"text"},{dataIndex:"deptName",title:"\u6240\u5C5E\u90E8\u95E8",valueType:"text"},{dataIndex:"roleName",title:"\u6240\u5C5E\u89D2\u8272",valueType:"text"},{dataIndex:"createTime",title:"\u521B\u5EFA\u65F6\u95F4",valueType:"text"}],X=[{dataIndex:"nickName",title:"\u7528\u6237\u6635\u79F0",valueType:"text"},{dataIndex:"phoneNumber",title:"\u624B\u673A\u53F7\u7801",valueType:"text",fieldProps:{maxLength:11},formItemProps:{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"},{pattern:v.RE,message:"\u624B\u673A\u53F7\u683C\u5F0F\u9519\u8BEF"}]}},{dataIndex:"email",title:"\u90AE\u7BB1",valueType:"text",formItemProps:{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u90AE\u7BB1"},{pattern:v.ku,message:"\u90AE\u7BB1\u683C\u5F0F\u9519\u8BEF"}]}},{dataIndex:"sex",title:"\u6027\u522B",valueType:"radio",valueEnum:Q.VJ}],k=function(){var s=(0,b.useModel)("@@initialState"),o=(0,A.useMutation)(function(){var u=p()(f()().mark(function n(i){return f()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W(i);case 2:return e.next=4,s.refresh();case 4:j.ZP.success("\u4FEE\u6539\u6210\u529F");case 5:case"end":return e.stop()}},n)}));return function(n){return u.apply(this,arguments)}}()),d={onSave:function(){var u=p()(f()().mark(function i(m,e){var T;return f()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return T=m,P.next=3,o.mutateAsync(G()({},T,e[T]));case 3:case"end":return P.stop()}},i)}));function n(i,m){return u.apply(this,arguments)}return n}()},a=s.initialState;return(0,t.jsxs)(K.Z,{align:"middle",children:[(0,t.jsx)(R.Z,{span:4,children:(0,t.jsxs)("div",{className:"w-[100px] relative m-auto",children:[(0,t.jsx)(N.C,{src:a.userInfo.user.avatar||"Avatar",size:100}),(0,t.jsx)(Y.Z,{maxCount:1,showUploadList:!1,name:"avatarfile",accept:"image/jpeg,image/png",action:J,headers:{Authorization:(0,v.LP)()},onChange:function(n){if(n.file.status==="done"){var i=n.file.response,m=i.code,e=i.msg;if(m!==200){j.ZP.error(e);return}o.mutate({avatar:n.file.response.data})}},children:(0,t.jsx)(N.C,{icon:(0,t.jsx)(L.Z,{}),className:"absolute bottom-0 right-0 bg-blue-500 cursor-pointer"})})]})}),(0,t.jsxs)(R.Z,{span:20,children:[(0,t.jsx)(c.vYc,{columns:H,dataSource:{userName:a.userInfo.user.userName,createTime:a.userInfo.user.createTime,deptName:a.userInfo.user.dept.deptName,roleName:a.userInfo.user.roles.map(function(u){return u.roleName}).join("/")}}),(0,t.jsx)(z.Z,{}),(0,t.jsx)(c.vYc,{columns:X,dataSource:a.userInfo.user,editable:d})]})]})},q=k,h;(function(l){l.PASSWORD="PASSWORD"})(h||(h={}));var _=function(){var s=(0,I.useState)(h.PASSWORD),o=F()(s,2),d=o[0],a=o[1];return(0,t.jsx)(c._zJ,{title:"\u4E2A\u4EBA\u4E2D\u5FC3",children:(0,t.jsxs)(c.QWM,{ghost:!0,direction:"column",gutter:[0,24],children:[(0,t.jsx)(c.QWM,{children:(0,t.jsx)(q,{})}),(0,t.jsx)(c.QWM,{tabs:{activeKey:d,onChange:function(n){return a(n)}},children:(0,t.jsx)(c.QWM.TabPane,{tab:"\u5B89\u5168\u8BBE\u7F6E",children:(0,t.jsx)(U,{})},h.PASSWORD)})]})})},ee=_}}]);
