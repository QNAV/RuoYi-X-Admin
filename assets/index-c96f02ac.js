import{R as z,r as C,j as s,a,F as W}from"./jsx-runtime-f6344dff.js";import{b as V}from"./index-d215da22.js";import{aF as _,aG as Q,x as M,k as O,_ as r,aH as X,a9 as Y,T as D,U as B,aI as $,aJ as U,aK as Z,q as ee,o as w,aL as te,t as ae,c as re,aM as ie,aN as ne,aw as j,aO as oe,aP as se,aQ as H,aa as ce,aR as le,aS as ue,aT as de,a7 as he,aU as me,ae as ge}from"./index-ebe28143.js";import{h as pe,a as G,C as J,s as fe,S as q}from"./index-b820ab61.js";import{P as A}from"./index-dc2256b0.js";import{S as ve}from"./Skeleton-7c20f8b5.js";import{u as be}from"./useRequest-ddb5d81b.js";import"./react-de33de79.js";import"./utils-3a113903.js";var xe=["rules","name","phoneName","fieldProps","captchaTextRender","captchaProps"],ye=z.forwardRef(function(e,t){var i=Q.useFormInstance(),f=C.useState(e.countDown||60),g=M(f,2),n=g[0],v=g[1],x=C.useState(!1),T=M(x,2),y=T[0],P=T[1],o=C.useState(),u=M(o,2),b=u[0],F=u[1];e.rules,e.name;var N=e.phoneName,S=e.fieldProps,E=e.captchaTextRender,L=E===void 0?function(d,l){return d?"".concat(l," 秒后重新获取"):"获取验证码"}:E,I=e.captchaProps,c=O(e,xe),k=function(){var d=D(B().mark(function l(m){return B().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.prev=0,F(!0),p.next=4,c.onGetCaptcha(m);case 4:F(!1),P(!0),p.next=13;break;case 8:p.prev=8,p.t0=p.catch(0),P(!1),F(!1),console.log(p.t0);case 13:case"end":return p.stop()}},l,null,[[0,8]])}));return function(m){return d.apply(this,arguments)}}();return C.useImperativeHandle(t,function(){return{startTiming:function(){return P(!0)},endTiming:function(){return P(!1)}}}),C.useEffect(function(){var d=0,l=e.countDown;return y&&(d=window.setInterval(function(){v(function(m){return m<=1?(P(!1),clearInterval(d),l||60):m-1})},1e3)),function(){return clearInterval(d)}},[y]),s("div",{style:r(r({},S==null?void 0:S.style),{},{display:"flex",alignItems:"center"}),ref:t,children:[a(X,r(r({},S),{},{style:{flex:1,transition:"width .3s",marginRight:8}})),a(Y,r(r({style:{display:"block"},disabled:y,loading:b},I),{},{onClick:function(){var d=D(B().mark(function m(){var R;return B().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(h.prev=0,!N){h.next=9;break}return h.next=4,i.validateFields([N].flat(1));case 4:return R=i.getFieldValue([N].flat(1)),h.next=7,k(R);case 7:h.next=11;break;case 9:return h.next=11,k("");case 11:h.next=16;break;case 13:h.prev=13,h.t0=h.catch(0),console.log(h.t0);case 16:case"end":return h.stop()}},m,null,[[0,13]])}));function l(){return d.apply(this,arguments)}return l}(),children:L(y,n)}))]})}),Pe=_(ye);const Ce=Pe;var Se=["options","fieldProps","proFieldProps","valueEnum"],Te=z.forwardRef(function(e,t){var i=e.options,f=e.fieldProps,g=e.proFieldProps,n=e.valueEnum,v=O(e,Se);return a($,r({ref:t,valueType:"checkbox",valueEnum:U(n,void 0),fieldProps:r({options:i},f),lightProps:r({labelFormatter:function(){return a($,r({ref:t,valueType:"checkbox",mode:"read",valueEnum:U(n,void 0),filedConfig:{customLightMode:!0},fieldProps:r({options:i},f),proFieldProps:g},v))}},v.lightProps),proFieldProps:g},v))}),we=z.forwardRef(function(e,t){var i=e.fieldProps,f=e.children;return a(Z,r(r({ref:t},i),{},{children:f}))}),ke=_(we,{valuePropName:"checked"}),K=ke;K.Group=Te;const Fe=K;var Ne=function(t){var i;return i={},w(i,t.componentCls,{display:"flex",width:"100%",height:"100%",backgroundSize:"contain","&-notice":{display:"flex",flex:"1",alignItems:"flex-end","&-activity":{marginBlock:24,marginInline:24,paddingInline:24,paddingBlock:24,"&-title":{fontWeight:"500",fontSize:"28px"},"&-subTitle":{marginBlockStart:8,fontSize:"16px"},"&-action":{marginBlockStart:"24px"}}},"&-container":{display:"flex",flex:"1",flexDirection:"column",maxWidth:"550px",height:"100%",paddingInline:0,paddingBlock:32,overflow:"auto",background:t.colorBgContainer},"&-top":{textAlign:"center"},"&-header":{display:"flex",alignItems:"center",justifyContent:"center",height:"44px",lineHeight:"44px",a:{textDecoration:"none"}},"&-title":{position:"relative",tinsetBlockStartop:"2px",color:"@heading-color",fontWeight:"600",fontSize:"33px"},"&-logo":{width:"44px",height:"44px",marginInlineEnd:"16px",verticalAlign:"top",img:{width:"100%"}},"&-desc":{marginBlockStart:"12px",marginBlockEnd:"40px",color:t.colorTextSecondary,fontSize:t.fontSize},"&-main":{width:"328px",margin:"0 auto","&-other":{marginBlockStart:"24px",lineHeight:"22px",textAlign:"start"}}}),w(i,"@media (max-width: ".concat(t.screenMDMin,"px)"),w({},t.componentCls,{flexDirection:"column-reverse",background:"none !important","&-notice":{display:"flex",flex:"none",alignItems:"flex-start",width:"100%","> div":{width:"100%"}}})),w(i,"@media (min-width: ".concat(t.screenMDMin,"px)"),w({},t.componentCls,{"&-container":{paddingInline:0,paddingBlockStart:128,paddingBlockEnd:24,backgroundRepeat:"no-repeat",backgroundPosition:"center 110px",backgroundSize:"100%"}})),w(i,"@media (max-width: ".concat(t.screenSM,"px)"),w({},t.componentCls,{"&-main":{width:"95%",maxWidth:"328px"}})),i};function Ee(e){return ee("LoginFormPage",function(t){var i=r(r({},t),{},{componentCls:".".concat(e)});return[Ne(i)]})}var Ie=["logo","message","style","activityConfig","backgroundImageUrl","title","subTitle","actions","children"];function Be(e){var t=e.logo,i=e.message,f=e.style,g=e.activityConfig,n=g===void 0?{}:g,v=e.backgroundImageUrl,x=e.title,T=e.subTitle,y=e.actions,P=e.children,o=O(e,Ie),u=te(),b=function(){var l,m;return o.submitter===!1||((l=o.submitter)===null||l===void 0?void 0:l.submitButtonProps)===!1?!1:r({size:"large",style:{width:"100%"}},(m=o.submitter)===null||m===void 0?void 0:m.submitButtonProps)},F=r(r({searchConfig:{submitText:u.getMessage("loginForm.submitText","登录")},render:function(l,m){return m.pop()}},o.submitter),{},{submitButtonProps:b()}),N=C.useContext(ae.ConfigContext),S=N.getPrefixCls("pro-form-login-page"),E=Ee(S),L=E.wrapSSR,I=E.hashId,c=function(l){return"".concat(S,"-").concat(l," ").concat(I)},k=C.useMemo(function(){return t?typeof t=="string"?a("img",{src:t}):t:null},[t]);return L(s("div",{className:re(S,I),style:r(r({},f),{},{backgroundImage:'url("'.concat(v,'")')}),children:[a("div",{className:c("notice"),children:n&&s("div",{className:c("notice-activity"),style:n.style,children:[n.title&&s("div",{className:c("notice-activity-title"),children:[" ",n.title," "]}),n.subTitle&&s("div",{className:c("notice-activity-subTitle"),children:[" ",n.subTitle," "]}),n.action&&s("div",{className:c("notice-activity-action"),children:[" ",n.action," "]})]})}),s("div",{className:c("container"),children:[s("div",{className:c("top"),children:[x||k?s("div",{className:c("header"),children:[k?a("span",{className:c("logo"),children:k}):null,x?a("span",{className:c("title"),children:x}):null]}):null,T?a("div",{className:c("desc"),children:T}):null]}),s("div",{className:c("main"),children:[s(ie,r(r({isKeyPressSubmit:!0},o),{},{submitter:F,children:[i,P]})),y?a("div",{className:c("other"),children:y}):null]})]})]}))}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Ae=()=>s("div",{className:"flex flex-col justify-center items-center",children:[a(ne,{plain:!0,children:a("span",{className:"text-sm font-normal text-neutral-400",children:"其他登录方式"})}),a("div",{onClick:()=>{j.info("敬请期待")},className:"flex justify-center items-center cursor-pointer rounded-full h-[40px] w-[40px] border-solid border border-gray-300",children:a(oe,{style:{fontSize:"20px",color:"#00ac84"}})})]});globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const je=()=>s(W,{children:[a(A,{fieldProps:{maxLength:11,size:"large",prefix:a(se,{})},name:"phoneNumber",placeholder:"请输入手机号",rules:[{required:!0,message:"请输入手机号"},{pattern:pe,message:"手机号格式错误"}]}),a(Ce,{fieldProps:{size:"large",prefix:a(H,{})},captchaProps:{size:"large"},placeholder:"请输入验证码",captchaTextRender:(e,t)=>e?`${t} 获取验证码`:"获取验证码",name:"smsCode",rules:[{required:!0,message:"请输入验证码"}],onGetCaptcha:async()=>(j.info("敬请期待"),Promise.reject(new Error("敬请期待")))})]});globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Le=({captchaImageSrc:e,onCaptchaImageClick:t})=>s(W,{children:[a(A,{name:"username",fieldProps:{size:"large",prefix:a(ce,{})},placeholder:"admin",initialValue:"admin",rules:[{required:!0,message:"请输入用户名"}]}),a(A.Password,{name:"password",fieldProps:{size:"large",prefix:a(H,{})},placeholder:"admin123",initialValue:"admin123",rules:[{required:!0,message:"请输入密码"}]}),s(le,{children:[a(A,{width:160,name:"code",placeholder:"请输入验证码",fieldProps:{size:"large",prefix:a(ue,{})},rules:[{required:!0,message:"请输入验证码"}]}),a("div",{className:"h-[40px] w-[135px] rounded-md cursor-pointer border border-solid border-gray-300",children:e?a(de,{src:`data:image/png;base64,${e}`,preview:!1,height:40,width:135,alt:"图片验证码",onClick:t,className:"rounded-md"}):a(ve.Button,{active:!0,block:!0,size:"large"})})]})]});globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Re=(e={})=>G({path:"/captchaImage",method:"GET",secure:!0,skipErrorHandler:!1,...e});globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Me=(e,t={})=>G({path:"/login",method:"POST",body:e,secure:!0,type:J.Json,skipErrorHandler:!1,...t});globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ze=(e,t={})=>G({path:"/smsLogin",method:"POST",body:e,secure:!0,type:J.Json,skipErrorHandler:!1,...t});globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Je=()=>{const[e,t]=C.useState("USERNAME"),i=V(),f=he(),[g]=me(),{data:n,run:v}=be(()=>Re({secure:!1})),x=async(o,u)=>{fe(o?q.LOCAL_STORAGE:q.SESSION_STORAGE,`Bearer ${u}`),await i(),f(g.get("redirect")??"/")},T=async(o,u)=>{const{token:b}=await ze(u);await x(o,b)},y=async(o,u)=>{if(!n){j.error("请先获取图片验证码");return}const{token:b}=await Me({...u,uuid:n.uuid},{secure:!1});await x(o,b)},P=async o=>{try{const{autoLogin:u,...b}=o;if(e==="MOBILE"){await T(u,b);return}if(e==="USERNAME"){await y(u,b);return}}catch{e==="USERNAME"&&v()}};return C.useEffect(()=>{g.get("msg")&&j.error(g.get("msg"))},[]),a("div",{className:"h-[100vh]",children:s(Be,{backgroundImageUrl:"https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png",logo:"https://github.githubassets.com/images/modules/logos_page/Octocat.png",title:"RuoYi X Admin",subTitle:"若依后台管理系统",actions:a(Ae,{}),onFinish:P,children:[a(ge,{centered:!0,activeKey:e,onChange:o=>t(o),items:[{label:"账号密码登录",key:"USERNAME"},{label:"手机号登录",key:"MOBILE"}]}),e==="USERNAME"&&a(Le,{captchaImageSrc:n==null?void 0:n.img,onCaptchaImageClick:v}),e==="MOBILE"&&a(je,{}),a(Fe,{name:"autoLogin",children:"自动登录"})]})})};export{Je as default};
