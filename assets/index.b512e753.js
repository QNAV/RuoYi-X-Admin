import{K as M,_ as l,M as d,O as z,Q as D,r as F,U as O,j as a,g as r,V as R,W as _,X as U,Y as B,Z as W,F as N,$ as C,a0 as q,a1 as G,a2 as $,a3 as k,a4 as K,a5 as V,a6 as H,a7 as J,a8 as Q,o as X,a as Y,a9 as Z,T as ee,aa as te,ab as ae,ac as E}from"./index.82fca14a.js";import{c as ie,d as re,e as ne}from"./index.325812ac.js";import{u as oe}from"./useRequest.5976c31c.js";import"./useQuery.esm.a64abd47.js";import"./utils.esm.41c15342.js";var se=function(t){var s;return s={},d(s,t.componentCls,{display:"flex",width:"100%",height:"100%",backgroundSize:"contain","&-notice":{display:"flex",flex:"1",alignItems:"flex-end","&-activity":{marginBlock:24,marginInline:24,paddingInline:24,paddingBlock:24,"&-title":{fontWeight:"500",fontSize:"28px"},"&-subTitle":{marginBlockStart:8,fontSize:"16px"},"&-action":{marginBlockStart:"24px"}}},"&-container":{display:"flex",flex:"1",flexDirection:"column",maxWidth:"550px",height:"100%",paddingInline:0,paddingBlock:32,overflow:"auto",background:t.colorBgContainer},"&-top":{textAlign:"center"},"&-header":{display:"flex",alignItems:"center",justifyContent:"center",height:"44px",lineHeight:"44px",a:{textDecoration:"none"}},"&-title":{position:"relative",tinsetBlockStartop:"2px",color:"@heading-color",fontWeight:"600",fontSize:"33px"},"&-logo":{width:"44px",height:"44px",marginInlineEnd:"16px",verticalAlign:"top",img:{width:"100%"}},"&-desc":{marginBlockStart:"12px",marginBlockEnd:"40px",color:t.colorTextSecondary,fontSize:t.fontSize},"&-main":{width:"328px",margin:"0 auto","&-other":{marginBlockStart:"24px",lineHeight:"22px",textAlign:"start"}}}),d(s,"@media (max-width: ".concat(t.screenMDMin),d({},t.componentCls,{flexDirection:"column-reverse",background:"none !important","&-notice":{display:"flex",flex:"none",alignItems:"flex-start",width:"100%","> div":{width:"100%"}}})),d(s,"@media (min-width: ".concat(t.screenMDMin),d({},t.componentCls,{"&-container":{paddingInline:0,paddingBlockStart:128,paddingBlockEnd:24,backgroundRepeat:"no-repeat",backgroundPosition:"center 110px",backgroundSize:"100%"}})),d(s,"@media (max-width: ".concat(t.screenSM),d({},t.componentCls,{"&-main":{width:"95%",maxWidth:"328px"}})),s};function ue(e){return M("LoginFormPage",function(t){var s=l(l({},t),{},{componentCls:".".concat(e)});return[se(s)]})}var ce=["logo","message","style","activityConfig","backgroundImageUrl","title","subTitle","actions","children"];function le(e){var t=e.logo,s=e.message,v=e.style,g=e.activityConfig,n=g===void 0?{}:g,f=e.backgroundImageUrl,h=e.title,x=e.subTitle,b=e.actions,y=e.children,i=z(e,ce),u=D(),c=function(){var m,p;return i.submitter===!1||((m=i.submitter)===null||m===void 0?void 0:m.submitButtonProps)===!1?!1:l({size:"large",style:{width:"100%"}},(p=i.submitter)===null||p===void 0?void 0:p.submitButtonProps)},I=l(l({searchConfig:{submitText:u.getMessage("loginForm.submitText","\u767B\u5F55")},render:function(m,p){return p.pop()}},i.submitter),{},{submitButtonProps:c()}),j=F.exports.useContext(O.ConfigContext),S=j.getPrefixCls("pro-form-login-page"),P=ue(S),L=P.wrapSSR,w=P.hashId,o=function(m){return"".concat(S,"-").concat(m," ").concat(w)},A=F.exports.useMemo(function(){return t?typeof t=="string"?a("img",{src:t}):t:null},[t]);return L(r("div",{className:R(S,w),style:l(l({},v),{},{backgroundImage:'url("'.concat(f,'")')}),children:[a("div",{className:o("notice"),children:n&&r("div",{className:o("notice-activity"),style:n.style,children:[n.title&&r("div",{className:o("notice-activity-title"),children:[" ",n.title," "]}),n.subTitle&&r("div",{className:o("notice-activity-subTitle"),children:[" ",n.subTitle," "]}),n.action&&r("div",{className:o("notice-activity-action"),children:[" ",n.action," "]})]})}),r("div",{className:o("container"),children:[r("div",{className:o("top"),children:[h||A?r("div",{className:o("header"),children:[A?a("span",{className:o("logo"),children:A}):null,h?a("span",{className:o("title"),children:h}):null]}):null,x?a("div",{className:o("desc"),children:x}):null]}),r("div",{className:o("main"),children:[r(_,l(l({isKeyPressSubmit:!0},i),{},{submitter:I,children:[s,y]})),b?a("div",{className:o("other"),children:b}):null]})]})]}))}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const de=()=>r("div",{className:"flex flex-col justify-center items-center",children:[a(U,{plain:!0,children:a("span",{className:"text-sm font-normal text-neutral-400",children:"\u5176\u4ED6\u767B\u5F55\u65B9\u5F0F"})}),a("div",{onClick:()=>{B.info("\u656C\u8BF7\u671F\u5F85")},className:"flex justify-center items-center cursor-pointer rounded-full h-[40px] w-[40px] border-solid border border-gray-300",children:a(W,{style:{fontSize:"20px",color:"#00ac84"}})})]});globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ge=()=>r(N,{children:[a(C,{fieldProps:{maxLength:11,size:"large",prefix:a(q,{})},name:"phoneNumber",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"},{pattern:G,message:"\u624B\u673A\u53F7\u683C\u5F0F\u9519\u8BEF"}]}),a($,{fieldProps:{size:"large",prefix:a(k,{})},captchaProps:{size:"large"},placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",captchaTextRender:(e,t)=>e?`${t} \u83B7\u53D6\u9A8C\u8BC1\u7801`:"\u83B7\u53D6\u9A8C\u8BC1\u7801",name:"smsCode",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"}],onGetCaptcha:async()=>(B.info("\u656C\u8BF7\u671F\u5F85"),Promise.reject(new Error("\u656C\u8BF7\u671F\u5F85")))})]});globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const he=({captchaImageSrc:e,onCaptchaImageClick:t})=>r(N,{children:[a(C,{name:"username",fieldProps:{size:"large",prefix:a(K,{})},placeholder:"admin",initialValue:"admin",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}]}),a(C.Password,{name:"password",fieldProps:{size:"large",prefix:a(k,{})},placeholder:"admin123",initialValue:"admin123",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801"}]}),r(V,{children:[a(C,{width:160,name:"code",placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",fieldProps:{size:"large",prefix:a(H,{})},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"}]}),a("div",{className:"h-[40px] w-[135px] rounded-md cursor-pointer border border-solid border-gray-300",children:e?a(J,{src:`data:image/png;base64,${e}`,preview:!1,height:40,width:135,alt:"\u56FE\u7247\u9A8C\u8BC1\u7801",onClick:t,className:"rounded-md"}):a(Q.Button,{active:!0,block:!0,size:"large"})})]})]});globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};async function me(e){return X("/captchaImage",{method:"GET",...e||{}})}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Fe=()=>{const[e,t]=F.exports.useState("USERNAME"),s=ie(),v=Y(),[g]=Z(),{data:n,run:f}=oe(me),h=async(i,u)=>{var c;ae(i?E.LOCAL_STORAGE:E.SESSION_STORAGE,`Bearer ${u}`),await s(),v((c=g.get("redirect"))!=null?c:"/")},x=async(i,u)=>{const{token:c}=await re(u);await h(i,c)},b=async(i,u)=>{if(!n){B.error("\u8BF7\u5148\u83B7\u53D6\u56FE\u7247\u9A8C\u8BC1\u7801");return}const{token:c}=await ne({...u,uuid:n.uuid});await h(i,c)},y=async i=>{try{const{autoLogin:u,...c}=i;if(e==="MOBILE"){await x(u,c);return}if(e==="USERNAME"){await b(u,c);return}}catch{e==="USERNAME"&&f()}};return F.exports.useEffect(()=>{g.get("msg")&&B.error(g.get("msg"))},[]),a("div",{className:"h-[100vh]",children:r(le,{backgroundImageUrl:"https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png",logo:"https://github.githubassets.com/images/modules/logos_page/Octocat.png",title:"RuoYi X Admin",subTitle:"\u82E5\u4F9D\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF",actions:a(de,{}),onFinish:y,children:[a(ee,{centered:!0,activeKey:e,onChange:i=>t(i),items:[{label:"\u8D26\u53F7\u5BC6\u7801\u767B\u5F55",key:"USERNAME"},{label:"\u624B\u673A\u53F7\u767B\u5F55",key:"MOBILE"}]}),e==="USERNAME"&&a(he,{captchaImageSrc:n==null?void 0:n.img,onCaptchaImageClick:f}),e==="MOBILE"&&a(ge,{}),a(te,{name:"autoLogin",children:"\u81EA\u52A8\u767B\u5F55"})]})})};export{Fe as default};
