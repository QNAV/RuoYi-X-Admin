"use strict";(self.webpackChunkruoyi_x_umi=self.webpackChunkruoyi_x_umi||[]).push([[939],{44574:function(se,G,e){var I=e(84045),D=e(40107),w=e(11527),U=e(20673),X=["fieldProps","proFieldProps"],P=["fieldProps","proFieldProps"],K="text",N=function(b){var A=b.fieldProps,r=b.proFieldProps,V=(0,D.Z)(b,X);return(0,w.jsx)(U.Z,(0,I.Z)({valueType:K,fieldProps:A,filedConfig:{valueType:K},proFieldProps:r},V))},k=function(b){var A=b.fieldProps,r=b.proFieldProps,V=(0,D.Z)(b,P);return(0,w.jsx)(U.Z,(0,I.Z)({valueType:"password",fieldProps:A,proFieldProps:r,filedConfig:{valueType:K}},V))},W=N;W.Password=k,W.displayName="ProFormComponent",G.Z=W},84188:function(se,G,e){e.d(G,{UW:function(){return D}});var I=e(94955),D=I.A.Group},2627:function(se,G,e){e.r(G),e.d(G,{default:function(){return ze}});var I=e(44463),D=e.n(I),w=e(30279),U=e.n(w),X=e(35290),P=e.n(X),K=e(411),N=e.n(K),k=e(46686),W=e.n(k),q=e(72867),b=e(51476),A=e(27375),r=e(11527),V=function(){return(0,r.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[(0,r.jsx)(b.Z,{plain:!0,children:(0,r.jsx)("span",{className:"text-sm font-normal text-neutral-400",children:"\u5176\u4ED6\u767B\u5F55\u65B9\u5F0F"})}),(0,r.jsx)("div",{onClick:function(){A.ZP.info("\u656C\u8BF7\u671F\u5F85")},className:"flex justify-center items-center cursor-pointer rounded-full h-[40px] w-[40px] border-solid border border-gray-300",children:(0,r.jsx)(q.Z,{style:{fontSize:"20px",color:"#00ac84"}})})]})},ve=V,Y=e(53947);function fe(a){return _.apply(this,arguments)}function _(){return _=N()(P()().mark(function a(i){return P()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,Y.WY)("/captchaImage",U()({method:"GET"},i||{})));case 1:case"end":return u.stop()}},a)})),_.apply(this,arguments)}function Ke(a,i){return ee.apply(this,arguments)}function ee(){return ee=_asyncToGenerator(_regeneratorRuntime().mark(function a(i,p){return _regeneratorRuntime().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",request("/captchaSms",_objectSpread({method:"GET",params:_objectSpread({},i)},p||{})));case 1:case"end":return h.stop()}},a)})),ee.apply(this,arguments)}var ie=e(45760),pe=e(16916),ue=e(88387),he=e(642),ge=e(57174),Ve=e(70696),Pe=e(84212),o=e(84045),re=e(40107),xe=e(63467),y=e(50959),ye=e(94955),Ce=["logo","message","style","activityConfig","backgroundImageUrl","title","subTitle","actions","children"];function je(a){var i=a.logo,p=a.message,u=a.style,h=a.activityConfig,g=h===void 0?{}:h,Z=a.backgroundImageUrl,F=a.title,M=a.subTitle,B=a.actions,E=a.children,R=(0,re.Z)(a,Ce),$=(0,xe.YB)(),J=function(){var S,d;return R.submitter===!1||((S=R.submitter)===null||S===void 0?void 0:S.submitButtonProps)===!1?!1:(0,o.Z)({size:"large",style:{width:"100%"}},(d=R.submitter)===null||d===void 0?void 0:d.submitButtonProps)},L=(0,o.Z)((0,o.Z)({searchConfig:{submitText:$.getMessage("loginForm.submitText","\u767B\u5F55")},render:function(S,d){return d.pop()}},R.submitter),{},{submitButtonProps:J()}),C=(0,y.useContext)(Pe.ZP.ConfigContext),z=C.getPrefixCls("pro-form-login-page"),l=function(S){return"".concat(z,"-").concat(S)},T=(0,y.useMemo)(function(){return i?typeof i=="string"?(0,r.jsx)("img",{src:i}):i:null},[i]);return(0,r.jsxs)("div",{className:z,style:(0,o.Z)((0,o.Z)({},u),{},{backgroundImage:'url("'.concat(Z,'")')}),children:[(0,r.jsx)("div",{className:l("notice"),children:g&&(0,r.jsxs)("div",{className:l("notice-activity"),style:g.style,children:[g.title&&(0,r.jsxs)("div",{className:l("notice-activity-title"),children:[" ",g.title," "]}),g.subTitle&&(0,r.jsxs)("div",{className:l("notice-activity-subTitle"),children:[" ",g.subTitle," "]}),g.action&&(0,r.jsxs)("div",{className:l("notice-activity-action"),children:[" ",g.action," "]})]})}),(0,r.jsxs)("div",{className:l("container"),children:[(0,r.jsxs)("div",{className:l("top"),children:[F||T?(0,r.jsxs)("div",{className:l("header"),children:[T?(0,r.jsx)("span",{className:l("logo"),children:T}):null,F?(0,r.jsx)("span",{className:l("title"),children:F}):null]}):null,M?(0,r.jsx)("div",{className:l("desc"),children:M}):null]}),(0,r.jsxs)("div",{className:l("main"),children:[(0,r.jsxs)(ye.A,(0,o.Z)((0,o.Z)({isKeyPressSubmit:!0},R),{},{submitter:L,children:[p,E]})),B?(0,r.jsx)("div",{className:l("other"),children:B}):null]})]})]})}var Ye=e(93842),Ze=e(76742),Je=e(63843),Fe=e(68358),H=e(43219),oe=e(77036),ae=e(17361),we=e(15290),Ee=e(78557),le=e(43555),Te=["rules","name","phoneName","fieldProps","captchaTextRender","captchaProps"],Se=y.forwardRef(function(a,i){var p=Ee.Z.useFormInstance(),u=(0,y.useState)(a.countDown||60),h=(0,ae.Z)(u,2),g=h[0],Z=h[1],F=(0,y.useState)(!1),M=(0,ae.Z)(F,2),B=M[0],E=M[1],R=(0,y.useState)(),$=(0,ae.Z)(R,2),J=$[0],L=$[1],C=a.rules,z=a.name,l=a.phoneName,T=a.fieldProps,O=a.captchaTextRender,S=O===void 0?function(n,m){return n?"".concat(m," \u79D2\u540E\u91CD\u65B0\u83B7\u53D6"):"\u83B7\u53D6\u9A8C\u8BC1\u7801"}:O,d=a.captchaProps,f=(0,re.Z)(a,Te),s=function(){var n=(0,oe.Z)((0,H.Z)().mark(function m(v){return(0,H.Z)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,L(!0),t.next=4,f.onGetCaptcha(v);case 4:L(!1),E(!0),t.next=13;break;case 8:t.prev=8,t.t0=t.catch(0),E(!1),L(!1),console.log(t.t0);case 13:case"end":return t.stop()}},m,null,[[0,8]])}));return function(v){return n.apply(this,arguments)}}();return(0,y.useImperativeHandle)(i,function(){return{startTiming:function(){return E(!0)},endTiming:function(){return E(!1)}}}),(0,y.useEffect)(function(){var n=0,m=a.countDown;return B&&(n=window.setInterval(function(){Z(function(v){return v<=1?(E(!1),clearInterval(n),m||60):v-1})},1e3)),function(){return clearInterval(n)}},[B]),(0,r.jsxs)("div",{style:(0,o.Z)((0,o.Z)({},T==null?void 0:T.style),{},{display:"flex",alignItems:"center"}),ref:i,children:[(0,r.jsx)(Fe.Z,(0,o.Z)((0,o.Z)({},T),{},{style:{flex:1,transition:"width .3s",marginRight:8}})),(0,r.jsx)(Ze.Z,(0,o.Z)((0,o.Z)({style:{display:"block"},disabled:B,loading:J},d),{},{onClick:function(){var n=(0,oe.Z)((0,H.Z)().mark(function v(){var c;return(0,H.Z)().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:if(x.prev=0,!l){x.next=9;break}return x.next=4,p.validateFields([l].flat(1));case 4:return c=p.getFieldValue([l].flat(1)),x.next=7,s(c);case 7:x.next=11;break;case 9:return x.next=11,s("");case 11:x.next=16;break;case 13:x.prev=13,x.t0=x.catch(0),console.log(x.t0);case 16:case"end":return x.stop()}},v,null,[[0,13]])}));function m(){return n.apply(this,arguments)}return m}(),children:S(B,g)}))]})}),be=(0,le.G)(Se),Be=be,He=e(35973),Re=e(47581),ce=e(26901),de=e(20673),Ne=["options","fieldProps","proFieldProps","valueEnum"],Ae=y.forwardRef(function(a,i){var p=a.options,u=a.fieldProps,h=a.proFieldProps,g=a.valueEnum,Z=(0,re.Z)(a,Ne);return(0,r.jsx)(de.Z,(0,o.Z)({ref:i,valueType:"checkbox",valueEnum:(0,ce.h)(g,void 0),fieldProps:(0,o.Z)({options:p},u),lightProps:(0,o.Z)({labelFormatter:function(){return(0,r.jsx)(de.Z,(0,o.Z)({ref:i,valueType:"checkbox",mode:"read",valueEnum:(0,ce.h)(g,void 0),filedConfig:{customLightMode:!0},fieldProps:(0,o.Z)({options:p},u),proFieldProps:h},Z))}},Z.lightProps),proFieldProps:h},Z))}),Le=y.forwardRef(function(a,i){var p=a.fieldProps,u=a.children;return(0,r.jsx)(Re.Z,(0,o.Z)((0,o.Z)({ref:i},p),{},{children:u}))}),Me=(0,le.G)(Le,{valuePropName:"checked"}),me=Me;me.Group=Ae;var Oe=me,Q=e(44574),Ge=e(84188),te=e(29674),Ie=e(10979),ne=e(10268),De=e(32625),Ue=e(4600),We=["autoLogin"],j;(function(a){a.MOBILE="MOBILE",a.USERNAME="USERNAME"})(j||(j={}));var $e=function(){var i=(0,y.useState)(j.USERNAME),p=W()(i,2),u=p[0],h=p[1],g=(0,te.useSearchParams)(),Z=W()(g,2),F=Z[0],M=Z[1],B=F.get("msg"),E=F.get("redirect")||"/",R=(0,te.useModel)("@@initialState"),$=R.refresh,J=(0,te.useNavigate)(),L=(0,Ie.Z)(fe),C=L.data,z=L.run,l=function(){var d=N()(P()().mark(function f(s,n){return P()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return(0,Y.o4)(s?Y.Z1.LOCAL_STORAGE:Y.Z1.SESSION_STORAGE,"Bearer ".concat(n)),v.next=3,$();case 3:J(E);case 4:case"end":return v.stop()}},f)}));return function(s,n){return d.apply(this,arguments)}}(),T=function(){var d=N()(P()().mark(function f(s,n){var m,v;return P()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,ie.OK)(n);case 2:return m=t.sent,v=m.token,t.next=6,l(s,v);case 6:case"end":return t.stop()}},f)}));return function(s,n){return d.apply(this,arguments)}}(),O=function(){var d=N()(P()().mark(function f(s,n){var m,v;return P()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(C){t.next=3;break}return A.ZP.error("\u8BF7\u5148\u83B7\u53D6\u56FE\u7247\u9A8C\u8BC1\u7801"),t.abrupt("return");case 3:return t.next=5,(0,ie.Rg)(U()(U()({},n),{},{uuid:C.uuid}));case 5:return m=t.sent,v=m.token,t.next=9,l(s,v);case 9:case"end":return t.stop()}},f)}));return function(s,n){return d.apply(this,arguments)}}(),S=function(){var d=N()(P()().mark(function f(s){var n,m;return P()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(c.prev=0,n=s.autoLogin,m=D()(s,We),u!==j.MOBILE){c.next=6;break}return c.next=5,T(n,m);case 5:return c.abrupt("return");case 6:if(u!==j.USERNAME){c.next=10;break}return c.next=9,O(n,m);case 9:return c.abrupt("return");case 10:c.next=15;break;case 12:c.prev=12,c.t0=c.catch(0),u===j.USERNAME&&z();case 15:case"end":return c.stop()}},f,null,[[0,12]])}));return function(s){return d.apply(this,arguments)}}();return(0,y.useEffect)(function(){B&&(A.ZP.error(F.get("msg")),M({redirect:E},{replace:!0}))},[]),(0,r.jsx)("div",{className:"h-[100vh]",children:(0,r.jsxs)(je,{backgroundImageUrl:"https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png",logo:"https://github.githubassets.com/images/modules/logos_page/Octocat.png",title:"RuoYi X Umi",subTitle:"\u82E5\u4F9D\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF",actions:(0,r.jsx)(ve,{}),onFinish:S,children:[(0,r.jsxs)(ne.Z,{activeKey:u,onChange:function(f){return h(f)},children:[(0,r.jsx)(ne.Z.TabPane,{tab:"\u8D26\u53F7\u5BC6\u7801\u767B\u5F55"},j.USERNAME),(0,r.jsx)(ne.Z.TabPane,{tab:"\u624B\u673A\u53F7\u767B\u5F55"},j.MOBILE)]}),u===j.USERNAME&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Q.Z,{name:"username",fieldProps:{size:"large",prefix:(0,r.jsx)(pe.Z,{})},placeholder:"admin",initialValue:"admin",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}]}),(0,r.jsx)(Q.Z.Password,{name:"password",fieldProps:{size:"large",prefix:(0,r.jsx)(ue.Z,{})},placeholder:"admin123",initialValue:"admin123",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801"}]}),(0,r.jsxs)(Ge.UW,{children:[(0,r.jsx)(Q.Z,{width:160,name:"code",placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",fieldProps:{size:"large",prefix:(0,r.jsx)(he.Z,{})},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"}]}),(0,r.jsx)("div",{className:"h-[40px] w-[135px] cursor-pointer border border-solid border-gray-300",children:C!=null&&C.img?(0,r.jsx)(De.Z,{src:"data:image/png;base64,".concat(C==null?void 0:C.img),preview:!1,height:40,width:135,alt:"\u56FE\u7247\u9A8C\u8BC1\u7801",onClick:z}):(0,r.jsx)(Ue.Z.Button,{active:!0,block:!0,size:"large"})})]})]}),u===j.MOBILE&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Q.Z,{fieldProps:{maxLength:11,size:"large",prefix:(0,r.jsx)(ge.Z,{})},name:"phoneNumber",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"},{pattern:Y.RE,message:"\u624B\u673A\u53F7\u683C\u5F0F\u9519\u8BEF"}]}),(0,r.jsx)(Be,{fieldProps:{size:"large",prefix:(0,r.jsx)(ue.Z,{})},captchaProps:{size:"large"},placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",captchaTextRender:function(f,s){return f?"".concat(s," \u83B7\u53D6\u9A8C\u8BC1\u7801"):"\u83B7\u53D6\u9A8C\u8BC1\u7801"},name:"smsCode",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"}],onGetCaptcha:N()(P()().mark(function d(){return P()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return A.ZP.info("\u656C\u8BF7\u671F\u5F85"),s.abrupt("return",Promise.reject(new Error("\u656C\u8BF7\u671F\u5F85")));case 2:case"end":return s.stop()}},d)}))})]}),(0,r.jsx)(Oe,{name:"autoLogin",children:"\u81EA\u52A8\u767B\u5F55"})]})})},ze=$e}}]);
