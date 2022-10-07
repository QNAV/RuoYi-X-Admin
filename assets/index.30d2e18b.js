import"./keepAlive.a2f6a073.js";import{a as D,b as M,i as O}from"./initialState.c69a0cd7.js";import{aa as R,ab as c,M as d,ac as _,aG as j,r as y,ad as U,a as e,j as r,a0 as q,aH as W,aI as G,aJ as b,aK as $,F as k,aL as B,aM as K,aN as Q,aO as T,aP as H,aQ as J,aR as V,aS as X,aT as Y,p as Z,q as ee,b as te,aU as ae,f as ie,aV as re,aW as ne,aX as A}from"./index.7e2e4aff.js";import{r as oe}from"./regExp.c1157f10.js";import{u as se}from"./useRequest.366cd4a8.js";import"./useQuery.esm.3039810b.js";import"./utils.esm.6214005e.js";var ue=function(a){var s;return s={},d(s,a.componentCls,{display:"flex",width:"100%",height:"100%",backgroundSize:"contain","&-notice":{display:"flex",flex:"1",alignItems:"flex-end","&-activity":{marginBlock:24,marginInline:24,paddingInline:24,paddingBlock:24,"&-title":{fontWeight:"500",fontSize:"28px"},"&-subTitle":{marginBlockStart:8,fontSize:"16px"},"&-action":{marginBlockStart:"24px"}}},"&-container":{display:"flex",flex:"1",flexDirection:"column",maxWidth:"550px",height:"100%",paddingInline:0,paddingBlock:32,overflow:"auto",background:a.colorBgContainer},"&-top":{textAlign:"center"},"&-header":{display:"flex",alignItems:"center",justifyContent:"center",height:"44px",lineHeight:"44px",a:{textDecoration:"none"}},"&-title":{position:"relative",tinsetBlockStartop:"2px",color:"@heading-color",fontWeight:"600",fontSize:"33px"},"&-logo":{width:"44px",height:"44px",marginInlineEnd:"16px",verticalAlign:"top",img:{width:"100%"}},"&-desc":{marginBlockStart:"12px",marginBlockEnd:"40px",color:a.colorTextSecondary,fontSize:a.fontSize},"&-main":{width:"328px",margin:"0 auto","&-other":{marginBlockStart:"24px",lineHeight:"22px",textAlign:"start"}}}),d(s,"@media (max-width: ".concat(a.screenMDMin),d({},a.componentCls,{flexDirection:"column-reverse",background:"none !important","&-notice":{display:"flex",flex:"none",alignItems:"flex-start",width:"100%","> div":{width:"100%"}}})),d(s,"@media (min-width: ".concat(a.screenMDMin),d({},a.componentCls,{"&-container":{paddingInline:0,paddingBlockStart:128,paddingBlockEnd:24,backgroundRepeat:"no-repeat",backgroundPosition:"center 110px",backgroundSize:"100%"}})),d(s,"@media (max-width: ".concat(a.screenSM),d({},a.componentCls,{"&-main":{width:"95%",maxWidth:"328px"}})),s};function le(t){return R("LoginForm",function(a){var s=c(c({},a),{},{componentCls:".".concat(t)});return[ue(s)]})}var ce=["logo","message","style","activityConfig","backgroundImageUrl","title","subTitle","actions","children"];function de(t){var a=t.logo,s=t.message,v=t.style,m=t.activityConfig,n=m===void 0?{}:m,f=t.backgroundImageUrl,g=t.title,x=t.subTitle,F=t.actions,C=t.children,i=_(t,ce),u=j(),l=function(){var p,h;return i.submitter===!1||((p=i.submitter)===null||p===void 0?void 0:p.submitButtonProps)===!1?!1:c({size:"large",style:{width:"100%"}},(h=i.submitter)===null||h===void 0?void 0:h.submitButtonProps)},I=c(c({searchConfig:{submitText:u.getMessage("loginForm.submitText","\u767B\u5F55")},render:function(p,h){return h.pop()}},i.submitter),{},{submitButtonProps:l()}),L=y.exports.useContext(U.ConfigContext),S=L.getPrefixCls("pro-form-login-page"),w=le(S),z=w.wrapSSR,N=w.hashId,o=function(p){return"".concat(S,"-").concat(p," ").concat(N)},P=y.exports.useMemo(function(){return a?typeof a=="string"?e("img",{src:a}):a:null},[a]);return z(r("div",{className:q(S,N),style:c(c({},v),{},{backgroundImage:'url("'.concat(f,'")')}),children:[e("div",{className:o("notice"),children:n&&r("div",{className:o("notice-activity"),style:n.style,children:[n.title&&r("div",{className:o("notice-activity-title"),children:[" ",n.title," "]}),n.subTitle&&r("div",{className:o("notice-activity-subTitle"),children:[" ",n.subTitle," "]}),n.action&&r("div",{className:o("notice-activity-action"),children:[" ",n.action," "]})]})}),r("div",{className:o("container"),children:[r("div",{className:o("top"),children:[g||P?r("div",{className:o("header"),children:[P?e("span",{className:o("logo"),children:P}):null,g?e("span",{className:o("title"),children:g}):null]}):null,x?e("div",{className:o("desc"),children:x}):null]}),r("div",{className:o("main"),children:[r(W,c(c({isKeyPressSubmit:!0},i),{},{submitter:I,children:[s,C]})),F?e("div",{className:o("other"),children:F}):null]})]})]}))}const me=()=>r("div",{className:"flex flex-col justify-center items-center",children:[e(G,{plain:!0,children:e("span",{className:"text-sm font-normal text-neutral-400",children:"\u5176\u4ED6\u767B\u5F55\u65B9\u5F0F"})}),e("div",{onClick:()=>{b.info("\u656C\u8BF7\u671F\u5F85")},className:"flex justify-center items-center cursor-pointer rounded-full h-[40px] w-[40px] border-solid border border-gray-300",children:e($,{style:{fontSize:"20px",color:"#00ac84"}})})]}),ge=()=>r(k,{children:[e(B,{fieldProps:{maxLength:11,size:"large",prefix:e(K,{})},name:"phoneNumber",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"},{pattern:oe,message:"\u624B\u673A\u53F7\u683C\u5F0F\u9519\u8BEF"}]}),e(Q,{fieldProps:{size:"large",prefix:e(T,{})},captchaProps:{size:"large"},placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",captchaTextRender:(t,a)=>t?`${a} \u83B7\u53D6\u9A8C\u8BC1\u7801`:"\u83B7\u53D6\u9A8C\u8BC1\u7801",name:"smsCode",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"}],onGetCaptcha:async()=>(b.info("\u656C\u8BF7\u671F\u5F85"),Promise.reject(new Error("\u656C\u8BF7\u671F\u5F85")))})]}),pe=({captchaImageSrc:t,onCaptchaImageClick:a})=>r(k,{children:[e(B,{name:"username",fieldProps:{size:"large",prefix:e(H,{})},placeholder:"admin",initialValue:"admin",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}]}),e(B.Password,{name:"password",fieldProps:{size:"large",prefix:e(T,{})},placeholder:"admin123",initialValue:"admin123",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801"}]}),r(J,{children:[e(B,{width:160,name:"code",placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",fieldProps:{size:"large",prefix:e(V,{})},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"}]}),e("div",{className:"h-[40px] w-[135px] rounded-md cursor-pointer border border-solid border-gray-300",children:t?e(X,{src:`data:image/png;base64,${t}`,preview:!1,height:40,width:135,alt:"\u56FE\u7247\u9A8C\u8BC1\u7801",onClick:a,className:"rounded-md"}):e(Y.Button,{active:!0,block:!0,size:"large"})})]})]});async function he(t){return Z("/captchaImage",{method:"GET",...t||{}})}const Ce=()=>{const[t,a]=y.exports.useState("USERNAME"),s=ee(),v=te(),[m]=ae(),{data:n,run:f}=se(he),g=async(i,u)=>{var l;ne(i?A.LOCAL_STORAGE:A.SESSION_STORAGE,`Bearer ${u}`),await s.invalidateQueries(O),v((l=m.get("redirect"))!=null?l:"/")},x=async(i,u)=>{const{token:l}=await D(u);await g(i,l)},F=async(i,u)=>{if(!n){b.error("\u8BF7\u5148\u83B7\u53D6\u56FE\u7247\u9A8C\u8BC1\u7801");return}const{token:l}=await M({...u,uuid:n.uuid});await g(i,l)},C=async i=>{try{const{autoLogin:u,...l}=i;if(t==="MOBILE"){await x(u,l);return}if(t==="USERNAME"){await F(u,l);return}}catch{t==="USERNAME"&&f()}};return y.exports.useEffect(()=>{m.get("msg")&&b.error(m.get("msg"))},[]),e("div",{className:"h-[100vh]",children:r(de,{backgroundImageUrl:"https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png",logo:"https://github.githubassets.com/images/modules/logos_page/Octocat.png",title:"RuoYi X Admin",subTitle:"\u82E5\u4F9D\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF",actions:e(me,{}),onFinish:C,children:[e(ie,{centered:!0,activeKey:t,onChange:i=>a(i),items:[{label:"\u8D26\u53F7\u5BC6\u7801\u767B\u5F55",key:"USERNAME",children:e(pe,{captchaImageSrc:n==null?void 0:n.img,onCaptchaImageClick:f})},{label:"\u624B\u673A\u53F7\u767B\u5F55",key:"MOBILE",children:e(ge,{})}]}),e(re,{name:"autoLogin",children:"\u81EA\u52A8\u767B\u5F55"})]})})};export{Ce as default};
