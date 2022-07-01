"use strict";(self.webpackChunkruoyi_x_umi=self.webpackChunkruoyi_x_umi||[]).push([[33],{82810:function(se,w,e){e.r(w),e.d(w,{default:function(){return ne}});var R=e(3849),D=e.n(R),B=e(18172),v=e.n(B),O=e(29960),m=e.n(O),ue=e(28558),$=e(55980),A=e.n($),f=e(8513);function ie(l){return y.apply(this,arguments)}function y(){return y=_asyncToGenerator(_regeneratorRuntime.mark(function l(s){return _regeneratorRuntime.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",request("/system/user/profile",_objectSpread({method:"GET"},s||{})));case 1:case"end":return d.stop()}},l)})),y.apply(this,arguments)}function U(l,s){return g.apply(this,arguments)}function g(){return g=v()(m().mark(function l(s,o){return m().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,f.WY)("/system/user/profile",A()({method:"POST",headers:{"Content-Type":"application/json"},data:s},o||{})));case 1:case"end":return a.stop()}},l)})),g.apply(this,arguments)}function oe(l,s,o,d){return x.apply(this,arguments)}function x(){return x=_asyncToGenerator(_regeneratorRuntime.mark(function l(s,o,d,a){var u;return _regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return u=new FormData,d&&u.append("avatarfile",d),Object.keys(o).forEach(function(c){var r=o[c];r!=null&&u.append(c,_typeof(r)==="object"&&!(r instanceof File)?JSON.stringify(r):r)}),i.abrupt("return",request("/system/user/profile/avatar",_objectSpread({method:"POST",params:_objectSpread({},s),data:u,requestType:"form"},a||{})));case 4:case"end":return i.stop()}},l)})),x.apply(this,arguments)}function G(l,s){return S.apply(this,arguments)}function S(){return S=v()(m().mark(function l(s,o){return m().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,f.WY)("/system/user/profile/updatePwd",A()({method:"POST",headers:{"Content-Type":"application/json"},data:s},o||{})));case 1:case"end":return a.stop()}},l)})),S.apply(this,arguments)}var W=e(16638),j=e(96639),T=e(43668),L=e(16278),Z=e(50959),I=e(2891),t=e(11527),V=function(){var s=(0,Z.useRef)(),o=(0,I.Db)(v()(m().mark(function u(){var n,i;return m().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s==null||(n=s.current)===null||n===void 0?void 0:n.validateFields();case 2:if(i=r.sent,i!==void 0){r.next=5;break}return r.abrupt("return");case 5:return r.next=7,G(i);case 7:case"end":return r.stop()}},u)})),{onSuccess:function(){T.ZP.success("\u5BC6\u7801\u4FEE\u6539\u6210\u529F\uFF0C\u5373\u5C06\u81EA\u52A8\u9000\u51FA\u767B\u5F55\u5E76\u8DF3\u8F6C\u81F3\u767B\u5F55\u9875\u9762");var n=setTimeout(function(){(0,f.kS)(),clearTimeout(n)},1500)}}),d=o.mutate,a=o.isLoading;return(0,t.jsxs)(W.A,{formRef:s,submitter:!1,children:[(0,t.jsx)(j.Z.Password,{name:"oldPassword",label:"\u65E7\u5BC6\u7801",rules:[{required:!0}],width:"md"}),(0,t.jsx)(j.Z.Password,{name:"newPassword",label:"\u65B0\u5BC6\u7801",width:"md",rules:[{required:!0},{pattern:f.nw,message:"\u957F\u5EA6\u57286-20\u4E4B\u95F4\uFF0C\u53EA\u80FD\u5305\u542B\u5B57\u6BCD\u3001\u6570\u5B57\u548C\u4E0B\u5212\u7EBF"},function(u){var n=u.getFieldValue;return{validator:function(c,r){return r!==n("oldPassword")?Promise.resolve():Promise.reject(new Error("\u65B0\u65E7\u5BC6\u7801\u4E0D\u80FD\u76F8\u540C"))}}}]}),(0,t.jsx)(j.Z.Password,{name:"confirmPassword",label:"\u786E\u8BA4\u5BC6\u7801",width:"md",rules:[{required:!0},function(u){var n=u.getFieldValue;return{validator:function(c,r){return!r||n("newPassword")===r?Promise.resolve():Promise.reject(new Error("\u4E24\u6B21\u5BC6\u7801\u8F93\u5165\u4E0D\u4E00\u81F4"))}}}]}),(0,t.jsx)(L.Z,{type:"primary",loading:a,onClick:function(){return d()},children:"\u66F4\u65B0\u5BC6\u7801"})]})},K=V,Y=e(46338),b=e.n(Y),z=e(75786),M=e(30598),F=e(18184),J=e(77996),H=e(51875),N=e(46178),E=e(79841),Q=e(33492),X=e(25437),k="".concat("https://test-ryx-admin-api.p.quicknav.cn","/api/sys/profile/update-avatar"),q=[{dataIndex:"userName",title:"\u7528\u6237\u540D\u79F0",valueType:"text"},{dataIndex:"deptName",title:"\u6240\u5C5E\u90E8\u95E8",valueType:"text"},{dataIndex:"roleName",title:"\u6240\u5C5E\u89D2\u8272",valueType:"text"},{dataIndex:"createTime",title:"\u521B\u5EFA\u65F6\u95F4",valueType:"text"}],_=[{dataIndex:"nickName",title:"\u7528\u6237\u6635\u79F0",valueType:"text"},{dataIndex:"phoneNumber",title:"\u624B\u673A\u53F7\u7801",valueType:"text",fieldProps:{maxLength:11},formItemProps:{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"},{pattern:f.RE,message:"\u624B\u673A\u53F7\u683C\u5F0F\u9519\u8BEF"}]}},{dataIndex:"email",title:"\u90AE\u7BB1",valueType:"text",formItemProps:{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u90AE\u7BB1"},{pattern:f.ku,message:"\u90AE\u7BB1\u683C\u5F0F\u9519\u8BEF"}]}},{dataIndex:"sex",title:"\u6027\u522B",valueType:"radio",valueEnum:z.VJ}],ee=function(){var s=(0,J.useModel)("@@initialState"),o=(0,I.Db)(function(){var u=v()(m().mark(function n(i){return m().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,U(i);case 2:return r.next=4,s.refresh();case 4:T.ZP.success("\u4FEE\u6539\u6210\u529F");case 5:case"end":return r.stop()}},n)}));return function(n){return u.apply(this,arguments)}}()),d={onSave:function(){var u=v()(m().mark(function i(c,r){var C;return m().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return C=c,P.next=3,o.mutateAsync(b()({},C,r[C]));case 3:case"end":return P.stop()}},i)}));function n(i,c){return u.apply(this,arguments)}return n}()},a=s.initialState;return(0,t.jsxs)(H.Z,{align:"middle",children:[(0,t.jsx)(N.Z,{span:4,children:(0,t.jsxs)("div",{className:"w-[100px] relative m-auto",children:[(0,t.jsx)(E.C,{src:a.userInfo.user.avatar||"Avatar",size:100}),(0,t.jsx)(Q.Z,{maxCount:1,showUploadList:!1,name:"avatarfile",accept:"image/jpeg,image/png",action:k,headers:{Authorization:(0,f.LP)()},onChange:function(n){if(n.file.status==="done"){var i=n.file.response,c=i.code,r=i.msg;if(c!==200){T.ZP.error(r);return}o.mutate({avatar:n.file.response.data})}},children:(0,t.jsx)(E.C,{icon:(0,t.jsx)(M.Z,{}),className:"absolute bottom-0 right-0 bg-blue-500 cursor-pointer"})})]})}),(0,t.jsxs)(N.Z,{span:20,children:[(0,t.jsx)(F.vY,{columns:q,dataSource:{userName:a.userInfo.user.userName,createTime:a.userInfo.user.createTime,deptName:a.userInfo.user.dept.deptName,roleName:a.userInfo.user.roles.map(function(u){return u.roleName}).join("/")}}),(0,t.jsx)(X.Z,{}),(0,t.jsx)(F.vY,{columns:_,dataSource:a.userInfo.user,editable:d})]})]})},re=ee,p=e(75687),te=e(88337),h;(function(l){l.PASSWORD="PASSWORD"})(h||(h={}));var ae=function(){var s=(0,Z.useState)(h.PASSWORD),o=D()(s,2),d=o[0],a=o[1];return(0,t.jsx)(te._z,{title:"\u4E2A\u4EBA\u4E2D\u5FC3",children:(0,t.jsxs)(p.Z,{ghost:!0,direction:"column",gutter:[0,24],children:[(0,t.jsx)(p.Z,{children:(0,t.jsx)(re,{})}),(0,t.jsx)(p.Z,{tabs:{activeKey:d,onChange:function(n){return a(n)}},children:(0,t.jsx)(p.Z.TabPane,{tab:"\u5B89\u5168\u8BBE\u7F6E",children:(0,t.jsx)(K,{})},h.PASSWORD)})]})})},ne=ae}}]);
