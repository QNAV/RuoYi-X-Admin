import"./keepAlive.de4e3c4f.js";import{i as D}from"./initialState.d187208b.js";import{a5 as M,a6 as c,$ as d,a7 as O,az as _,r as v,a8 as j,a as e,j as n,Z as R,aA as U,aB as G,aC as y,aD as q,aE as W,G as $,b as K,aF as Q,T as H,F as A,aG as B,aH as J,aI as k,aJ as V,aK as X,aL as Y,aM as Z,aN as ee,aO as te,aP as ie,aQ as ae,aR as re,aS as ne,aT as T}from"./index.09ee3745.js";import{r as oe}from"./regExp.b11de8ba.js";import{u as se}from"./useRequest.26bd0b4d.js";import"./useQuery.esm.2eb1aaa5.js";import"./utils.esm.f73db980.js";var ue=function(i){var u;return u={},d(u,i.componentCls,{display:"flex",width:"100%",height:"100%",backgroundSize:"contain","&-notice":{display:"flex",flex:"1",alignItems:"flex-end","&-activity":{marginBlock:24,marginInline:24,paddingInline:24,paddingBlock:24,"&-title":{fontWeight:"500",fontSize:"28px"},"&-subTitle":{marginBlockStart:8,fontSize:"16px"},"&-action":{marginBlockStart:"24px"}}},"&-container":{display:"flex",flex:"1",flexDirection:"column",maxWidth:"550px",height:"100%",paddingInline:0,paddingBlock:32,overflow:"auto",background:i.colorBgContainer},"&-top":{textAlign:"center"},"&-header":{display:"flex",alignItems:"center",justifyContent:"center",height:"44px",lineHeight:"44px",a:{textDecoration:"none"}},"&-title":{position:"relative",tinsetBlockStartop:"2px",color:"@heading-color",fontWeight:"600",fontSize:"33px"},"&-logo":{width:"44px",height:"44px",marginInlineEnd:"16px",verticalAlign:"top",img:{width:"100%"}},"&-desc":{marginBlockStart:"12px",marginBlockEnd:"40px",color:i.colorTextSecondary,fontSize:i.fontSize},"&-main":{width:"328px",margin:"0 auto","&-other":{marginBlockStart:"24px",lineHeight:"22px",textAlign:"start"}}}),d(u,"@media (max-width: ".concat(i.screenMDMin),d({},i.componentCls,{flexDirection:"column-reverse",background:"none !important","&-notice":{display:"flex",flex:"none",alignItems:"flex-start",width:"100%","> div":{width:"100%"}}})),d(u,"@media (min-width: ".concat(i.screenMDMin),d({},i.componentCls,{"&-container":{paddingInline:0,paddingBlockStart:128,paddingBlockEnd:24,backgroundRepeat:"no-repeat",backgroundPosition:"center 110px",backgroundSize:"100%"}})),d(u,"@media (max-width: ".concat(i.screenSM),d({},i.componentCls,{"&-main":{width:"95%",maxWidth:"328px"}})),u};function le(t){return M("LoginForm",function(i){var u=c(c({},i),{},{componentCls:".".concat(t)});return[ue(u)]})}var ce=["logo","message","style","activityConfig","backgroundImageUrl","title","subTitle","actions","children"];function de(t){var i=t.logo,u=t.message,b=t.style,m=t.activityConfig,a=m===void 0?{}:m,f=t.backgroundImageUrl,g=t.title,x=t.subTitle,F=t.actions,C=t.children,r=O(t,ce),o=_(),l=function(){var p,h;return r.submitter===!1||((p=r.submitter)===null||p===void 0?void 0:p.submitButtonProps)===!1?!1:c({size:"large",style:{width:"100%"}},(h=r.submitter)===null||h===void 0?void 0:h.submitButtonProps)},I=c(c({searchConfig:{submitText:o.getMessage("loginForm.submitText","\u767B\u5F55")},render:function(p,h){return h.pop()}},r.submitter),{},{submitButtonProps:l()}),L=v.exports.useContext(j.ConfigContext),S=L.getPrefixCls("pro-form-login-page"),E=le(S),z=E.wrapSSR,w=E.hashId,s=function(p){return"".concat(S,"-").concat(p," ").concat(w)},P=v.exports.useMemo(function(){return i?typeof i=="string"?e("img",{src:i}):i:null},[i]);return z(n("div",{className:R(S,w),style:c(c({},b),{},{backgroundImage:'url("'.concat(f,'")')}),children:[e("div",{className:s("notice"),children:a&&n("div",{className:s("notice-activity"),style:a.style,children:[a.title&&n("div",{className:s("notice-activity-title"),children:[" ",a.title," "]}),a.subTitle&&n("div",{className:s("notice-activity-subTitle"),children:[" ",a.subTitle," "]}),a.action&&n("div",{className:s("notice-activity-action"),children:[" ",a.action," "]})]})}),n("div",{className:s("container"),children:[n("div",{className:s("top"),children:[g||P?n("div",{className:s("header"),children:[P?e("span",{className:s("logo"),children:P}):null,g?e("span",{className:s("title"),children:g}):null]}):null,x?e("div",{className:s("desc"),children:x}):null]}),n("div",{className:s("main"),children:[n(U,c(c({isKeyPressSubmit:!0},r),{},{submitter:I,children:[u,C]})),F?e("div",{className:s("other"),children:F}):null]})]})]}))}const me=()=>n("div",{className:"flex flex-col justify-center items-center",children:[e(G,{plain:!0,children:e("span",{className:"text-sm font-normal text-neutral-400",children:"\u5176\u4ED6\u767B\u5F55\u65B9\u5F0F"})}),e("div",{onClick:()=>{y.info("\u656C\u8BF7\u671F\u5F85")},className:"flex justify-center items-center cursor-pointer rounded-full h-[40px] w-[40px] border-solid border border-gray-300",children:e(q,{style:{fontSize:"20px",color:"#00ac84"}})})]});async function ge(t){return W("/captchaImage",{method:"GET",...t||{}})}const pe=[{label:"\u8D26\u53F7\u5BC6\u7801\u767B\u5F55",key:"USERNAME"},{label:"\u624B\u673A\u53F7\u767B\u5F55",key:"MOBILE"}],be=()=>{const[t,i]=v.exports.useState("USERNAME"),u=$(),b=K(),[m]=Q(),{data:a,run:f}=se(ge),g=async(r,o)=>{var l;ne(r?T.LOCAL_STORAGE:T.SESSION_STORAGE,`Bearer ${o}`),await u.invalidateQueries(D),b((l=m.get("redirect"))!=null?l:"/")},x=async(r,o)=>{const{token:l}=await ae(o);await g(r,l)},F=async(r,o)=>{if(!a){y.error("\u8BF7\u5148\u83B7\u53D6\u56FE\u7247\u9A8C\u8BC1\u7801");return}const{token:l}=await re({...o,uuid:a.uuid});await g(r,l)},C=async r=>{try{const{autoLogin:o,...l}=r;if(t==="MOBILE"){await x(o,l);return}if(t==="USERNAME"){await F(o,l);return}}catch{t==="USERNAME"&&f()}};return v.exports.useEffect(()=>{m.get("msg")&&y.error(m.get("msg"))},[]),e("div",{className:"h-[100vh]",children:n(de,{backgroundImageUrl:"https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png",logo:"https://github.githubassets.com/images/modules/logos_page/Octocat.png",title:"RuoYi X Umi",subTitle:"\u82E5\u4F9D\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF",actions:e(me,{}),onFinish:C,children:[e(H,{centered:!0,activeKey:t,onChange:r=>i(r),items:pe}),t==="USERNAME"&&n(A,{children:[e(B,{name:"username",fieldProps:{size:"large",prefix:e(J,{})},placeholder:"admin",initialValue:"admin",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}]}),e(B.Password,{name:"password",fieldProps:{size:"large",prefix:e(k,{})},placeholder:"admin123",initialValue:"admin123",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801"}]}),n(V,{children:[e(B,{width:160,name:"code",placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",fieldProps:{size:"large",prefix:e(X,{})},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"}]}),e("div",{className:"h-[40px] w-[135px] cursor-pointer border border-solid border-gray-300",children:a!=null&&a.img?e(Y,{src:`data:image/png;base64,${a==null?void 0:a.img}`,preview:!1,height:40,width:135,alt:"\u56FE\u7247\u9A8C\u8BC1\u7801",onClick:f}):e(Z.Button,{active:!0,block:!0,size:"large"})})]})]}),t==="MOBILE"&&n(A,{children:[e(B,{fieldProps:{maxLength:11,size:"large",prefix:e(ee,{})},name:"phoneNumber",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"},{pattern:oe,message:"\u624B\u673A\u53F7\u683C\u5F0F\u9519\u8BEF"}]}),e(te,{fieldProps:{size:"large",prefix:e(k,{})},captchaProps:{size:"large"},placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",captchaTextRender:(r,o)=>r?`${o} \u83B7\u53D6\u9A8C\u8BC1\u7801`:"\u83B7\u53D6\u9A8C\u8BC1\u7801",name:"smsCode",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"}],onGetCaptcha:async()=>(y.info("\u656C\u8BF7\u671F\u5F85"),Promise.reject(new Error("\u656C\u8BF7\u671F\u5F85")))})]}),e(ie,{name:"autoLogin",children:"\u81EA\u52A8\u767B\u5F55"})]})})};export{be as default};
