import{c as q,e as R,F as K,r as C,_ as M,a as z,b as c,d as r,j as a,I as V,f as Q,g as G,h as B,P as O,i as $,C as X,u as Y,k as T,l as Z,m as ee,n as te,o as ae,D as re,p as j,W as ie,q as W,M as ne,s as oe,L as H,U as se,t as ce,v as le,w as ue,x as de,y as D,z as _,A as he,E as ge,G as me,T as pe,H as fe,J as U}from"./index-25c53959.js";import{P as A}from"./index-17b7e420.js";import{u as ve}from"./useRequest-4d550859.js";var be=["rules","name","phoneName","fieldProps","captchaTextRender","captchaProps"],xe=R.forwardRef(function(e,t){var i=K.useFormInstance(),p=C.useState(e.countDown||60),g=M(p,2),n=g[0],f=g[1],x=C.useState(!1),w=M(x,2),y=w[0],P=w[1],o=C.useState(),d=M(o,2),v=d[0],F=d[1];e.rules,e.name;var E=e.phoneName,S=e.fieldProps,N=e.captchaTextRender,L=N===void 0?function(h,s){return h?"".concat(s," 秒后重新获取"):"获取验证码"}:N,I=e.captchaProps,l=z(e,be),k=function(){var h=G(B().mark(function s(m){return B().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.prev=0,F(!0),b.next=4,l.onGetCaptcha(m);case 4:F(!1),P(!0),b.next=13;break;case 8:b.prev=8,b.t0=b.catch(0),P(!1),F(!1),console.log(b.t0);case 13:case"end":return b.stop()}},s,null,[[0,8]])}));return function(m){return h.apply(this,arguments)}}();return C.useImperativeHandle(t,function(){return{startTiming:function(){return P(!0)},endTiming:function(){return P(!1)}}}),C.useEffect(function(){var h=0,s=e.countDown;return y&&(h=window.setInterval(function(){f(function(m){return m<=1?(P(!1),clearInterval(h),s||60):m-1})},1e3)),function(){return clearInterval(h)}},[y]),c("div",{style:r(r({},S==null?void 0:S.style),{},{display:"flex",alignItems:"center"}),ref:t,children:[a(V,r(r({},S),{},{style:{flex:1,transition:"width .3s",marginRight:8}})),a(Q,r(r({style:{display:"block"},disabled:y,loading:v},I),{},{onClick:G(B().mark(function h(){var s;return B().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(u.prev=0,!E){u.next=9;break}return u.next=4,i.validateFields([E].flat(1));case 4:return s=i.getFieldValue([E].flat(1)),u.next=7,k(s);case 7:u.next=11;break;case 9:return u.next=11,k("");case 11:u.next=16;break;case 13:u.prev=13,u.t0=u.catch(0),console.log(u.t0);case 16:case"end":return u.stop()}},h,null,[[0,13]])})),children:L(y,n)}))]})}),ye=q(xe);const Pe=ye;var Ce=["options","fieldProps","proFieldProps","valueEnum"],Se=R.forwardRef(function(e,t){var i=e.options,p=e.fieldProps,g=e.proFieldProps,n=e.valueEnum,f=z(e,Ce);return a(O,r({ref:t,valueType:"checkbox",valueEnum:$(n,void 0),fieldProps:r({options:i},p),lightProps:r({labelFormatter:function(){return a(O,r({ref:t,valueType:"checkbox",mode:"read",valueEnum:$(n,void 0),filedConfig:{customLightMode:!0},fieldProps:r({options:i},p),proFieldProps:g},f))}},f.lightProps),proFieldProps:g},f))}),we=R.forwardRef(function(e,t){var i=e.fieldProps,p=e.children;return a(X,r(r({ref:t},i),{},{children:p}))}),Te=q(we,{valuePropName:"checked"}),J=Te;J.Group=Se;const ke=J;var Fe=function(t){var i;return i={},T(i,t.componentCls,{display:"flex",width:"100%",height:"100%",backgroundSize:"contain","&-notice":{display:"flex",flex:"1",alignItems:"flex-end","&-activity":{marginBlock:24,marginInline:24,paddingInline:24,paddingBlock:24,"&-title":{fontWeight:"500",fontSize:"28px"},"&-subTitle":{marginBlockStart:8,fontSize:"16px"},"&-action":{marginBlockStart:"24px"}}},"&-container":{display:"flex",flex:"1",flexDirection:"column",maxWidth:"550px",height:"100%",paddingInline:0,paddingBlock:32,overflow:"auto",background:t.colorBgContainer},"&-top":{textAlign:"center"},"&-header":{display:"flex",alignItems:"center",justifyContent:"center",height:"44px",lineHeight:"44px",a:{textDecoration:"none"}},"&-title":{position:"relative",tinsetBlockStartop:"2px",color:"@heading-color",fontWeight:"600",fontSize:"33px"},"&-logo":{width:"44px",height:"44px",marginInlineEnd:"16px",verticalAlign:"top",img:{width:"100%"}},"&-desc":{marginBlockStart:"12px",marginBlockEnd:"40px",color:t.colorTextSecondary,fontSize:t.fontSize},"&-main":{width:"328px",margin:"0 auto","&-other":{marginBlockStart:"24px",lineHeight:"22px",textAlign:"start"}}}),T(i,"@media (max-width: ".concat(t.screenMDMin,"px)"),T({},t.componentCls,{flexDirection:"column-reverse",background:"none !important","&-notice":{display:"flex",flex:"none",alignItems:"flex-start",width:"100%","> div":{width:"100%"}}})),T(i,"@media (min-width: ".concat(t.screenMDMin,"px)"),T({},t.componentCls,{"&-container":{paddingInline:0,paddingBlockStart:128,paddingBlockEnd:24,backgroundRepeat:"no-repeat",backgroundPosition:"center 110px",backgroundSize:"100%"}})),T(i,"@media (max-width: ".concat(t.screenSM,"px)"),T({},t.componentCls,{"&-main":{width:"95%",maxWidth:"328px"}})),i};function Ee(e){return Y("LoginFormPage",function(t){var i=r(r({},t),{},{componentCls:".".concat(e)});return[Fe(i)]})}var Ne=["logo","message","style","activityConfig","backgroundImageUrl","title","subTitle","actions","children"];function Ie(e){var t=e.logo,i=e.message,p=e.style,g=e.activityConfig,n=g===void 0?{}:g,f=e.backgroundImageUrl,x=e.title,w=e.subTitle,y=e.actions,P=e.children,o=z(e,Ne),d=Z(),v=function(){var s,m;return o.submitter===!1||((s=o.submitter)===null||s===void 0?void 0:s.submitButtonProps)===!1?!1:r({size:"large",style:{width:"100%"}},(m=o.submitter)===null||m===void 0?void 0:m.submitButtonProps)},F=r(r({searchConfig:{submitText:d.getMessage("loginForm.submitText","登录")},render:function(s,m){return m.pop()}},o.submitter),{},{submitButtonProps:v()}),E=C.useContext(ee.ConfigContext),S=E.getPrefixCls("pro-form-login-page"),N=Ee(S),L=N.wrapSSR,I=N.hashId,l=function(s){return"".concat(S,"-").concat(s," ").concat(I)},k=C.useMemo(function(){return t?typeof t=="string"?a("img",{src:t}):t:null},[t]);return L(c("div",{className:te(S,I),style:r(r({},p),{},{backgroundImage:'url("'.concat(f,'")')}),children:[a("div",{className:l("notice"),children:n&&c("div",{className:l("notice-activity"),style:n.style,children:[n.title&&c("div",{className:l("notice-activity-title"),children:[" ",n.title," "]}),n.subTitle&&c("div",{className:l("notice-activity-subTitle"),children:[" ",n.subTitle," "]}),n.action&&c("div",{className:l("notice-activity-action"),children:[" ",n.action," "]})]})}),c("div",{className:l("container"),children:[c("div",{className:l("top"),children:[x||k?c("div",{className:l("header"),children:[k?a("span",{className:l("logo"),children:k}):null,x?a("span",{className:l("title"),children:x}):null]}):null,w?a("div",{className:l("desc"),children:w}):null]}),c("div",{className:l("main"),children:[c(ae,r(r({isKeyPressSubmit:!0},o),{},{submitter:F,children:[i,P]})),y?a("div",{className:l("other"),children:y}):null]})]})]}))}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Be=()=>c("div",{className:"flex flex-col justify-center items-center",children:[a(re,{plain:!0,children:a("span",{className:"text-sm font-normal text-neutral-400",children:"其他登录方式"})}),a("div",{onClick:()=>{j.info("敬请期待")},className:"flex justify-center items-center cursor-pointer rounded-full h-[40px] w-[40px] border-solid border border-gray-300",children:a(ie,{style:{fontSize:"20px",color:"#00ac84"}})})]});globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Ae=()=>c(W,{children:[a(A,{fieldProps:{maxLength:11,size:"large",prefix:a(ne,{})},name:"phoneNumber",placeholder:"请输入手机号",rules:[{required:!0,message:"请输入手机号"},{pattern:oe,message:"手机号格式错误"}]}),a(Pe,{fieldProps:{size:"large",prefix:a(H,{})},captchaProps:{size:"large"},placeholder:"请输入验证码",captchaTextRender:(e,t)=>e?`${t} 获取验证码`:"获取验证码",name:"smsCode",rules:[{required:!0,message:"请输入验证码"}],onGetCaptcha:async()=>(j.info("敬请期待"),Promise.reject(new Error("敬请期待")))})]});globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const je=({captchaImageSrc:e,onCaptchaImageClick:t})=>c(W,{children:[a(A,{name:"username",fieldProps:{size:"large",prefix:a(se,{})},placeholder:"admin",initialValue:"admin",rules:[{required:!0,message:"请输入用户名"}]}),a(A.Password,{name:"password",fieldProps:{size:"large",prefix:a(H,{})},placeholder:"admin123",initialValue:"admin123",rules:[{required:!0,message:"请输入密码"}]}),c(ce,{children:[a(A,{width:160,name:"code",placeholder:"请输入验证码",fieldProps:{size:"large",prefix:a(le,{})},rules:[{required:!0,message:"请输入验证码"}]}),a("div",{className:"h-[40px] w-[135px] rounded-md cursor-pointer border border-solid border-gray-300",children:e?a(ue,{src:`data:image/png;base64,${e}`,preview:!1,height:40,width:135,alt:"图片验证码",onClick:t,className:"rounded-md"}):a(de.Button,{active:!0,block:!0,size:"large"})})]})]});globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Le=(e={})=>D({path:"/captchaImage",method:"GET",secure:!0,skipErrorHandler:!1,...e});globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Me=(e,t={})=>D({path:"/login",method:"POST",body:e,secure:!0,type:_.Json,skipErrorHandler:!1,...t});globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Re=(e,t={})=>D({path:"/smsLogin",method:"POST",body:e,secure:!0,type:_.Json,skipErrorHandler:!1,...t});globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Oe=()=>{const[e,t]=C.useState("USERNAME"),i=he(),p=ge(),[g]=me(),{data:n,run:f}=ve(()=>Le({secure:!1})),x=async(o,d)=>{fe(o?U.LOCAL_STORAGE:U.SESSION_STORAGE,`Bearer ${d}`),await i(),p(g.get("redirect")??"/")},w=async(o,d)=>{const{token:v}=await Re(d);await x(o,v)},y=async(o,d)=>{if(!n){j.error("请先获取图片验证码");return}const{token:v}=await Me({...d,uuid:n.uuid},{secure:!1});await x(o,v)},P=async o=>{try{const{autoLogin:d,...v}=o;if(e==="MOBILE"){await w(d,v);return}if(e==="USERNAME"){await y(d,v);return}}catch{e==="USERNAME"&&f()}};return C.useEffect(()=>{g.get("msg")&&j.error(g.get("msg"))},[]),a("div",{className:"h-[100vh]",children:c(Ie,{backgroundImageUrl:"https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png",logo:"https://github.githubassets.com/images/modules/logos_page/Octocat.png",title:"RuoYi X Admin",subTitle:"若依后台管理系统",actions:a(Be,{}),onFinish:P,children:[a(pe,{centered:!0,activeKey:e,onChange:o=>t(o),items:[{label:"账号密码登录",key:"USERNAME"},{label:"手机号登录",key:"MOBILE"}]}),e==="USERNAME"&&a(je,{captchaImageSrc:n==null?void 0:n.img,onCaptchaImageClick:f}),e==="MOBILE"&&a(Ae,{}),a(ke,{name:"autoLogin",children:"自动登录"})]})})};export{Oe as default};
