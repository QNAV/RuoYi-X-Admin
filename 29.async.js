"use strict";(self.webpackChunkruoyi_x_umi=self.webpackChunkruoyi_x_umi||[]).push([[426],{12937:function(ae,L,e){e.d(L,{UW:function(){return G}});var W=e(99456),G=W.A.Group},20861:function(ae,L,e){e.r(L),e.d(L,{default:function(){return $e}});var W=e(55980),G=e.n(W),ne=e(42217),se=e.n(ne),ie=e(18172),$=e.n(ie),ue=e(3849),H=e.n(ue),le=e(29960),R=e.n(le),oe=e(72867),ce=e(25437),O=e(43668),r=e(11527),de=function(){return(0,r.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[(0,r.jsx)(ce.Z,{plain:!0,children:(0,r.jsx)("span",{className:"text-sm font-normal text-neutral-400",children:"\u5176\u4ED6\u767B\u5F55\u65B9\u5F0F"})}),(0,r.jsx)("div",{onClick:function(){O.ZP.info("\u656C\u8BF7\u671F\u5F85")},className:"flex justify-center items-center cursor-pointer rounded-full h-[40px] w-[40px] border-solid border border-gray-300",children:(0,r.jsx)(oe.Z,{style:{fontSize:"20px",color:"#00ac84"}})})]})},me=de,I=e(96143);function ve(t){return z.apply(this,arguments)}function z(){return z=$()(R().mark(function t(n){return R().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,I.WY)("/captchaImage",G()({method:"GET"},n||{})));case 1:case"end":return s.stop()}},t)})),z.apply(this,arguments)}function Ye(t,n){return K.apply(this,arguments)}function K(){return K=_asyncToGenerator(_regeneratorRuntime.mark(function t(n,o){return _regeneratorRuntime.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",request("/captchaSms",_objectSpread({method:"GET",params:_objectSpread({},n)},o||{})));case 1:case"end":return c.stop()}},t)})),K.apply(this,arguments)}var Q=e(5585),he=e(16916),X=e(88387),fe=e(642),ge=e(57174),Je=e(33407),pe=e(35123),i=e(82175),Y=e(62957),xe=e(62690),v=e(50959),Pe=e(99456),je=["logo","message","style","activityConfig","backgroundImageUrl","title","subTitle","actions","children"];function Ce(t){var n=t.logo,o=t.message,s=t.style,c=t.activityConfig,l=c===void 0?{}:c,x=t.backgroundImageUrl,g=t.title,Z=t.subTitle,P=t.actions,A=t.children,p=(0,Y.Z)(t,je),y=(0,xe.YB)(),S=function(){var h,B;return p.submitter===!1||((h=p.submitter)===null||h===void 0?void 0:h.submitButtonProps)===!1?!1:(0,i.Z)({size:"large",style:{width:"100%"}},(B=p.submitter)===null||B===void 0?void 0:B.submitButtonProps)},D=(0,i.Z)((0,i.Z)({searchConfig:{submitText:y.getMessage("loginForm.submitText","\u767B\u5F55")},render:function(h,B){return B.pop()}},p.submitter),{},{submitButtonProps:S()}),T=(0,v.useContext)(pe.ZP.ConfigContext),d=T.getPrefixCls("pro-form-login-page"),a=function(h){return"".concat(d,"-").concat(h)},F=(0,v.useMemo)(function(){return n?typeof n=="string"?(0,r.jsx)("img",{src:n}):n:null},[n]);return(0,r.jsxs)("div",{className:d,style:(0,i.Z)((0,i.Z)({},s),{},{backgroundImage:'url("'.concat(x,'")')}),children:[(0,r.jsx)("div",{className:a("notice"),children:l&&(0,r.jsxs)("div",{className:a("notice-activity"),style:l.style,children:[l.title&&(0,r.jsxs)("div",{className:a("notice-activity-title"),children:[" ",l.title," "]}),l.subTitle&&(0,r.jsxs)("div",{className:a("notice-activity-subTitle"),children:[" ",l.subTitle," "]}),l.action&&(0,r.jsxs)("div",{className:a("notice-activity-action"),children:[" ",l.action," "]})]})}),(0,r.jsxs)("div",{className:a("container"),children:[(0,r.jsxs)("div",{className:a("top"),children:[g||F?(0,r.jsxs)("div",{className:a("header"),children:[F?(0,r.jsx)("span",{className:a("logo"),children:F}):null,g?(0,r.jsx)("span",{className:a("title"),children:g}):null]}):null,Z?(0,r.jsx)("div",{className:a("desc"),children:Z}):null]}),(0,r.jsxs)("div",{className:a("main"),children:[(0,r.jsxs)(Pe.A,(0,i.Z)((0,i.Z)({isKeyPressSubmit:!0},p),{},{submitter:D,children:[o,A]})),P?(0,r.jsx)("div",{className:a("other"),children:P}):null]})]})]})}var Ve=e(43955),Ze=e(16278),He=e(58245),ye=e(79725),Qe=e(78844),Fe=e(41494),M=e(88081),k=e(21519),J=e(61431),w=e(46890),Ee=["rules","name","phoneName","fieldProps","captchaTextRender","captchaProps"],Se=v.forwardRef(function(t,n){var o=(0,v.useState)(t.countDown||60),s=(0,J.Z)(o,2),c=s[0],l=s[1],x=(0,v.useState)(!1),g=(0,J.Z)(x,2),Z=g[0],P=g[1],A=(0,v.useState)(),p=(0,J.Z)(A,2),y=p[0],S=p[1],D=t.rules,T=t.name,d=t.phoneName,a=t.fieldProps,F=t.captchaTextRender,b=F===void 0?function(j,E){return j?"".concat(E," \u79D2\u540E\u91CD\u65B0\u83B7\u53D6"):"\u83B7\u53D6\u9A8C\u8BC1\u7801"}:F,h=t.captchaProps,B=(0,Y.Z)(t,Ee),u=function(){var j=(0,k.Z)((0,M.Z)().mark(function E(N){return(0,M.Z)().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.prev=0,S(!0),f.next=4,B.onGetCaptcha(N);case 4:S(!1),P(!0),f.next=13;break;case 8:f.prev=8,f.t0=f.catch(0),P(!1),S(!1),console.log(f.t0);case 13:case"end":return f.stop()}},E,null,[[0,8]])}));return function(N){return j.apply(this,arguments)}}();return(0,v.useImperativeHandle)(n,function(){return{startTiming:function(){return P(!0)},endTiming:function(){return P(!1)}}}),(0,v.useEffect)(function(){var j=0,E=t.countDown;return Z&&(j=window.setInterval(function(){l(function(N){return N<=1?(P(!1),clearInterval(j),E||60):N-1})},1e3)),function(){return clearInterval(j)}},[Z]),(0,r.jsx)(Fe.Z.Item,{noStyle:!0,shouldUpdate:!0,children:function(E){var N=E.getFieldValue,re=E.validateFields;return(0,r.jsxs)("div",{style:(0,i.Z)((0,i.Z)({},a==null?void 0:a.style),{},{display:"flex",alignItems:"center"}),ref:n,children:[(0,r.jsx)(ye.Z,(0,i.Z)((0,i.Z)({},a),{},{style:{flex:1,transition:"width .3s",marginRight:8}})),(0,r.jsx)(Ze.Z,(0,i.Z)((0,i.Z)({style:{display:"block"},disabled:Z,loading:y},h),{},{onClick:function(){var f=(0,k.Z)((0,M.Z)().mark(function Ke(){var te;return(0,M.Z)().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:if(m.prev=0,!d){m.next=9;break}return m.next=4,re([d].flat(1));case 4:return te=N([d].flat(1)),m.next=7,u(te);case 7:m.next=11;break;case 9:return m.next=11,u("");case 11:m.next=16;break;case 13:m.prev=13,m.t0=m.catch(0),console.log(m.t0);case 16:case"end":return m.stop()}},Ke,null,[[0,13]])}));function ze(){return f.apply(this,arguments)}return ze}(),children:b(Z,c)}))]})}})}),Te=(0,w.G)(Se),be=Te,Xe=e(28931),Be=e(68590),q=e(41946),_=e(23747),Ne=["options","fieldProps","proFieldProps","valueEnum"],Re=v.forwardRef(function(t,n){var o=t.options,s=t.fieldProps,c=t.proFieldProps,l=t.valueEnum,x=(0,Y.Z)(t,Ne);return(0,r.jsx)(_.Z,(0,i.Z)({ref:n,valueType:"checkbox",mode:"edit",valueEnum:(0,q.h)(l,void 0),fieldProps:(0,i.Z)({options:o},s),lightProps:(0,i.Z)({labelFormatter:function(){return(0,r.jsx)(_.Z,(0,i.Z)({ref:n,valueType:"checkbox",mode:"read",valueEnum:(0,q.h)(l,void 0),filedConfig:{customLightMode:!0},fieldProps:(0,i.Z)({options:o},s),proFieldProps:c},x))}},x.lightProps),proFieldProps:c},x))}),Ae=v.forwardRef(function(t,n){var o=t.fieldProps,s=t.children;return(0,r.jsx)(Be.Z,(0,i.Z)((0,i.Z)({ref:n},o),{},{children:s}))}),Ge=(0,w.G)(Ae,{valuePropName:"checked"}),ee=Ge;ee.Group=Re;var Ie=ee,U=e(96639),Le=e(12937),Oe=e(80918),Me=e(3989),V=e(6250),Ue=e(29293),De=["autoLogin"],C;(function(t){t.MOBILE="MOBILE",t.USERNAME="USERNAME"})(C||(C={}));var We=function(){var n=(0,v.useState)(C.USERNAME),o=H()(n,2),s=o[0],c=o[1],l=(0,Oe.useSearchParams)(),x=H()(l,2),g=x[0],Z=x[1],P=g.get("msg"),A=g.get("redirect")||"/",p=(0,Me.Z)(ve),y=p.data,S=p.run,D=function(){var T=$()(R().mark(function d(a){var F,b,h;return R().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(u.prev=0,F=a.autoLogin,b=se()(a,De),s!==C.MOBILE){u.next=8;break}return u.next=5,(0,Q.OK)(b);case 5:h=u.sent,u.next=16;break;case 8:if(y){u.next=13;break}return O.ZP.error("\u8BF7\u5148\u83B7\u53D6\u56FE\u7247\u9A8C\u8BC1\u7801"),u.abrupt("return");case 13:return u.next=15,(0,Q.Rg)(G()(G()({},b),{},{uuid:y.uuid}));case 15:h=u.sent;case 16:(0,I.o4)(F?I.Z1.LOCAL_STORAGE:I.Z1.SESSION_STORAGE,"Bearer ".concat(h.token)),window.location.href=A,u.next=23;break;case 20:u.prev=20,u.t0=u.catch(0),s===C.USERNAME&&S();case 23:case"end":return u.stop()}},d,null,[[0,20]])}));return function(a){return T.apply(this,arguments)}}();return(0,v.useEffect)(function(){P&&(O.ZP.error(g.get("msg")),Z({redirect:A},{replace:!0}))},[]),(0,r.jsx)("div",{className:"h-[100vh]",children:(0,r.jsxs)(Ce,{backgroundImageUrl:"https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png",logo:"https://github.githubassets.com/images/modules/logos_page/Octocat.png",title:"RuoYi X Umi",subTitle:"\u82E5\u4F9D\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF",actions:(0,r.jsx)(me,{}),onFinish:D,children:[(0,r.jsxs)(V.Z,{activeKey:s,onChange:function(d){return c(d)},children:[(0,r.jsx)(V.Z.TabPane,{tab:"\u8D26\u53F7\u5BC6\u7801\u767B\u5F55"},C.USERNAME),(0,r.jsx)(V.Z.TabPane,{tab:"\u624B\u673A\u53F7\u767B\u5F55"},C.MOBILE)]}),s===C.USERNAME&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(U.Z,{name:"username",fieldProps:{size:"large",prefix:(0,r.jsx)(he.Z,{})},placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}]}),(0,r.jsx)(U.Z.Password,{name:"password",fieldProps:{size:"large",prefix:(0,r.jsx)(X.Z,{})},placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801"}]}),(0,r.jsxs)(Le.UW,{children:[(0,r.jsx)(U.Z,{width:160,name:"code",placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",fieldProps:{size:"large",prefix:(0,r.jsx)(fe.Z,{})},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"}]}),(0,r.jsx)("div",{className:"h-[40px] w-[135px] cursor-pointer border border-solid border-gray-300",children:(0,r.jsx)(Ue.Z,{src:"data:image/png;base64,".concat(y==null?void 0:y.img),preview:!1,style:{height:"40px",width:"135px"},alt:"\u56FE\u7247\u9A8C\u8BC1\u7801",onClick:S})})]})]}),s===C.MOBILE&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(U.Z,{fieldProps:{maxLength:11,size:"large",prefix:(0,r.jsx)(ge.Z,{})},name:"phonenumber",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"},{pattern:I.RE,message:"\u624B\u673A\u53F7\u683C\u5F0F\u9519\u8BEF"}]}),(0,r.jsx)(be,{fieldProps:{size:"large",prefix:(0,r.jsx)(X.Z,{})},captchaProps:{size:"large"},placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",captchaTextRender:function(d,a){return d?"".concat(a," ","\u83B7\u53D6\u9A8C\u8BC1\u7801"):"\u83B7\u53D6\u9A8C\u8BC1\u7801"},name:"smsCode",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"}],onGetCaptcha:$()(R().mark(function T(){return R().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return O.ZP.info("\u656C\u8BF7\u671F\u5F85"),a.abrupt("return",Promise.reject(new Error("\u656C\u8BF7\u671F\u5F85")));case 2:case"end":return a.stop()}},T)}))})]}),(0,r.jsx)(Ie,{name:"autoLogin",children:"\u81EA\u52A8\u767B\u5F55"})]})})},$e=We}}]);
