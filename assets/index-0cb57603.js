import{r as u,bJ as Pe,c as j,a as o,ao as x,ap as Be,aq as Ie,bA as Z,bD as Te,bz as se,ar as ze,bK as Ve,g as X,a4 as Qe,as as Je,bL as Se,N as Le,bM as xe,bN as Ue,bt as Ye,aE as Ze,p as le,bO as te,_ as y,bP as ke,aH as Ce,y as Y,z as G,j as R,d,aG as et,W as ce,v as V,h as De,k as ue,q as oe,b as tt,bQ as at,bR as Me,O as rt,R as de,bS as nt,bT as it,bU as lt,aF as Re,bV as ot,bW as ae,aB as re,bX as dt,bY as st,bZ as ct}from"./index-20700433.js";import{S as I}from"./Skeleton-f0c399ec.js";var ut=globalThis&&globalThis.__rest||function(r,e){var t={};for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&e.indexOf(a)<0&&(t[a]=r[a]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(r);n<a.length;n++)e.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(r,a[n])&&(t[a[n]]=r[a[n]]);return t},vt=function(e){var t=e.prefixCls,a=e.className,n=e.hoverable,i=n===void 0?!0:n,l=ut(e,["prefixCls","className","hoverable"]);return u.exports.createElement(Pe,null,function(c){var s=c.getPrefixCls,p=s("card",t),g=j(p+"-grid",a,o({},p+"-grid-hoverable",i));return u.exports.createElement("div",x({},l,{className:g}))})};const He=vt;var pt=function(e){var t=e.antCls,a=e.componentCls,n=e.cardHeadHeight,i=e.cardHeadPadding,l=e.cardPaddingBase,c=e.cardHeadTabsMarginBottom;return x(x({minHeight:n,marginBottom:-1,padding:"0 "+l+"px",color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,background:"transparent",borderBottom:e.lineWidth+"px "+e.lineType+" "+e.colorBorderSecondary,borderRadius:e.borderRadiusLG+"px "+e.borderRadiusLG+"px 0 0"},Z()),o({"&-wrapper":{display:"flex",alignItems:"center"},"&-title":x(x({display:"inline-block",flex:1,padding:i+"px 0"},se),o({},`
          > `+a+`-typography,
          > `+a+`-typography-edit-content
        `,{insetInlineStart:0,marginTop:0,marginBottom:0}))},t+"-tabs-top",{clear:"both",marginBottom:c,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,"&-bar":{borderBottom:e.lineWidth+"px "+e.lineType+" "+e.colorBorderSecondary}}))},gt=function(e){var t=e.cardPaddingBase,a=e.colorBorderSecondary,n=e.cardShadow,i=e.lineWidth;return{width:"33.33%",padding:t,border:0,borderRadius:0,boxShadow:`
      `+i+"px 0 0 0 "+a+`,
      0 `+i+"px 0 0 "+a+`,
      `+i+"px "+i+"px 0 0 "+a+`,
      `+i+"px 0 0 0 "+a+` inset,
      0 `+i+"px 0 0 "+a+` inset;
    `,transition:"all "+e.motionDurationMid,"&-hoverable:hover":{position:"relative",zIndex:1,boxShadow:n}}},ft=function(e){var t,a=e.componentCls,n=e.iconCls,i=e.cardActionsLiMargin,l=e.cardActionsIconSize,c=e.colorBorderSecondary;return x(x({margin:0,padding:0,listStyle:"none",background:e.colorBgContainer,borderTop:e.lineWidth+"px "+e.lineType+" "+c,display:"flex"},Z()),{"& > li":{margin:i,color:e.colorTextDescription,textAlign:"center","> span":(t={position:"relative",display:"block",minWidth:e.cardActionsIconSize*2,fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer","&:hover":{color:e.colorPrimary,transition:"color "+e.motionDurationMid}},o(t,"a:not("+a+"-btn), > "+n,{display:"inline-block",width:"100%",color:e.colorTextDescription,lineHeight:e.fontSize*e.lineHeight+"px",transition:"color "+e.motionDurationMid,"&:hover":{color:e.colorPrimary}}),o(t,"> "+n,{fontSize:l,lineHeight:l*e.lineHeight+"px"}),t),"&:not(:last-child)":{borderInlineEnd:e.lineWidth+"px "+e.lineType+" "+c}}})},mt=function(e){return x(x({margin:"-"+e.marginXXS+"px 0",display:"flex"},Z()),{"&-avatar":{paddingInlineEnd:e.padding},"&-detail":{overflow:"hidden","> div:not(:last-child)":{marginBottom:e.marginXS}},"&-title":x({color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG},se),"&-description":{color:e.colorTextDescription}})},yt=function(e){var t,a=e.componentCls,n=e.cardPaddingBase,i=e.colorFillAlter,l=e.cardInnerHeadPadding;return t={},o(t,a+"-head",{padding:"0 "+n+"px",background:i,"&-title":{padding:l+"px 0",fontSize:e.fontSize}}),o(t,a+"-body",{padding:e.padding+"px "+n+"px"}),o(t,a+"-extra",{padding:l+1.5+"px 0"}),t},ht=function(e){var t=e.componentCls;return o({overflow:"hidden"},t+"-body",{userSelect:"none"})},bt=function(e){var t,a,n,i,l=e.componentCls,c=e.cardShadow,s=e.cardHeadHeight,p=e.cardHeadPadding,g=e.colorBorderSecondary,P=e.boxShadow,w=e.cardPaddingBase;return i={},o(i,l,x(x({},Te(e)),(t={position:"relative",background:e.colorBgContainer,borderRadius:e.borderRadiusLG},o(t,"&:not("+l+"-bordered)",{boxShadow:P}),o(t,l+"-head",pt(e)),o(t,l+"-extra",{marginInlineStart:"auto",padding:"",color:"",fontWeight:"normal",fontSize:e.fontSize}),o(t,l+"-body",x({padding:w,borderRadius:" 0 0 "+e.borderRadiusLG+"px "+e.borderRadiusLG+"px"},Z())),o(t,l+"-grid",gt(e)),o(t,l+"-cover",{"> *":{display:"block",width:"100%"},img:{borderRadius:e.borderRadiusLG+"px "+e.borderRadiusLG+"px 0 0"}}),o(t,l+"-actions",ft(e)),o(t,l+"-meta",mt(e)),t))),o(i,l+"-bordered",o({border:e.lineWidth+"px "+e.lineType+" "+g},l+"-cover",{marginTop:-1,marginInlineStart:-1,marginInlineEnd:-1})),o(i,l+"-hoverable",{cursor:"pointer",transition:"box-shadow "+e.motionDurationMid+", border-color "+e.motionDurationMid,"&:hover":{borderColor:"transparent",boxShadow:c}}),o(i,l+"-contain-grid",(a={},o(a,l+"-body",{display:"flex",flexWrap:"wrap"}),o(a,"&:not("+l+"-loading) "+l+"-body",{marginBlockStart:-e.lineWidth,marginInlineStart:-e.lineWidth,padding:0}),a)),o(i,l+"-contain-tabs",o({},"> "+l+"-head",(n={},o(n,l+"-head-title",{minHeight:s-p,paddingBottom:0}),o(n,l+"-extra",{paddingBottom:0}),n))),o(i,l+"-type-inner",yt(e)),o(i,l+"-loading",ht(e)),o(i,l+"-rtl",{direction:"rtl"}),i},St=function(e){var t,a,n=e.componentCls,i=e.cardPaddingSM,l=e.fontSize,c=e.lineHeight,s=e.cardHeaderHeightSM,p=(s-l*c)/2;return o({},n+"-small",(a={},o(a,"> "+n+"-head",o({minHeight:s,padding:"0 "+i+"px",fontSize:e.fontSize},"> "+n+"-head-wrapper",(t={},o(t,"> "+n+"-head-title",{padding:p+"px 0"}),o(t,"> "+n+"-extra",{padding:p+"px 0",fontSize:e.fontSize}),t))),o(a,"> "+n+"-body",{padding:i}),a))};const xt=Be("Card",function(r){var e=Ie(r,{cardShadow:r.boxShadowCard,cardHeaderHeight:r.fontSizeLG*r.lineHeightLG+r.padding*2,cardHeaderHeightSM:r.fontSize*r.lineHeight+r.paddingXS*2,cardHeadPadding:r.padding,cardPaddingBase:r.paddingLG,cardHeadTabsMarginBottom:-r.padding-r.lineWidth,cardInnerHeadPadding:r.paddingSM,cardActionsLiMargin:r.paddingSM+"px 0",cardActionsIconSize:r.fontSize,cardPaddingSM:12});return[bt(e),St(e)]});var Ct=globalThis&&globalThis.__rest||function(r,e){var t={};for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&e.indexOf(a)<0&&(t[a]=r[a]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(r);n<a.length;n++)e.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(r,a[n])&&(t[a[n]]=r[a[n]]);return t};function wt(r){var e=r.map(function(t,a){return u.exports.createElement("li",{style:{width:100/r.length+"%"},key:"action-"+a},u.exports.createElement("span",null,t))});return e}var Et=u.exports.forwardRef(function(r,e){var t,a,n=u.exports.useContext(ze),i=n.getPrefixCls,l=n.direction,c=u.exports.useContext(Ve),s=function(W){var _;(_=r.onTabChange)===null||_===void 0||_.call(r,W)},p=function(){var W;return u.exports.Children.forEach(r.children,function(_){_&&_.type&&_.type===He&&(W=!0)}),W},g=r.prefixCls,P=r.className,w=r.extra,B=r.headStyle,b=B===void 0?{}:B,E=r.bodyStyle,S=E===void 0?{}:E,f=r.title,h=r.loading,T=r.bordered,m=T===void 0?!0:T,L=r.size,C=r.type,M=r.cover,H=r.actions,N=r.tabList,v=r.children,A=r.activeTabKey,z=r.defaultActiveTabKey,D=r.tabBarExtraContent,Q=r.hoverable,q=r.tabProps,K=q===void 0?{}:q,F=Ct(r,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),$=i("card",g),ee=xt($),fe=X(ee,2),Oe=fe[0],Fe=fe[1],We=u.exports.createElement(I,{loading:!0,active:!0,paragraph:{rows:4},title:!1},v),me=A!==void 0,je=x(x({},K),(t={},o(t,me?"activeKey":"defaultActiveKey",me?A:z),o(t,"tabBarExtraContent",D),t)),ye,he=N&&N.length?u.exports.createElement(Qe,x({size:"large"},je,{className:$+"-head-tabs",onChange:s,items:N.map(function(J){var W;return{label:J.tab,key:J.key,disabled:(W=J.disabled)!==null&&W!==void 0?W:!1}})})):null;(f||w||he)&&(ye=u.exports.createElement("div",{className:$+"-head",style:b},u.exports.createElement("div",{className:$+"-head-wrapper"},f&&u.exports.createElement("div",{className:$+"-head-title"},f),w&&u.exports.createElement("div",{className:$+"-extra"},w)),he));var Ge=M?u.exports.createElement("div",{className:$+"-cover"},M):null,Ke=u.exports.createElement("div",{className:$+"-body",style:S},h?We:v),_e=H&&H.length?u.exports.createElement("ul",{className:$+"-actions"},wt(H)):null,qe=Je(F,["onTabChange"]),be=L||c,Xe=j($,(a={},o(a,$+"-loading",h),o(a,$+"-bordered",m),o(a,$+"-hoverable",Q),o(a,$+"-contain-grid",p()),o(a,$+"-contain-tabs",N&&N.length),o(a,$+"-"+be,be),o(a,$+"-type-"+C,!!C),o(a,$+"-rtl",l==="rtl"),a),P,Fe);return Oe(u.exports.createElement("div",x({ref:e},qe,{className:Xe}),ye,Ge,Ke,_e))});const Pt=Et;var Bt=globalThis&&globalThis.__rest||function(r,e){var t={};for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&e.indexOf(a)<0&&(t[a]=r[a]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(r);n<a.length;n++)e.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(r,a[n])&&(t[a[n]]=r[a[n]]);return t},It=function(e){return u.exports.createElement(Pe,null,function(t){var a=t.getPrefixCls,n=e.prefixCls,i=e.className,l=e.avatar,c=e.title,s=e.description,p=Bt(e,["prefixCls","className","avatar","title","description"]),g=a("card",n),P=j(g+"-meta",i),w=l?u.exports.createElement("div",{className:g+"-meta-avatar"},l):null,B=c?u.exports.createElement("div",{className:g+"-meta-title"},c):null,b=s?u.exports.createElement("div",{className:g+"-meta-description"},s):null,E=B||b?u.exports.createElement("div",{className:g+"-meta-detail"},B,b):null;return u.exports.createElement("div",x({},p,{className:P}),w,E)})};const Tt=It;var ve=Pt;ve.Grid=He;ve.Meta=Tt;const O=ve;var zt=function(e){var t=e.children;return t};const Lt=zt;function U(r){return r!=null}var Dt=function(e){var t=e.itemPrefixCls,a=e.component,n=e.span,i=e.className,l=e.style,c=e.labelStyle,s=e.contentStyle,p=e.bordered,g=e.label,P=e.content,w=e.colon,B=a;if(p){var b;return u.exports.createElement(B,{className:j((b={},o(b,t+"-item-label",U(g)),o(b,t+"-item-content",U(P)),b),i),style:l,colSpan:n},U(g)&&u.exports.createElement("span",{style:c},g),U(P)&&u.exports.createElement("span",{style:s},P))}return u.exports.createElement(B,{className:j(t+"-item",i),style:l,colSpan:n},u.exports.createElement("div",{className:t+"-item-container"},(g||g===0)&&u.exports.createElement("span",{className:j(t+"-item-label",o({},t+"-item-no-colon",!w)),style:c},g),(P||P===0)&&u.exports.createElement("span",{className:j(t+"-item-content"),style:s},P)))};const ne=Dt;function ie(r,e,t){var a=e.colon,n=e.prefixCls,i=e.bordered,l=t.component,c=t.type,s=t.showLabel,p=t.showContent,g=t.labelStyle,P=t.contentStyle;return r.map(function(w,B){var b=w.props,E=b.label,S=b.children,f=b.prefixCls,h=f===void 0?n:f,T=b.className,m=b.style,L=b.labelStyle,C=b.contentStyle,M=b.span,H=M===void 0?1:M,N=w.key;return typeof l=="string"?u.exports.createElement(ne,{key:c+"-"+(N||B),className:T,style:m,labelStyle:x(x({},g),L),contentStyle:x(x({},P),C),span:H,colon:a,component:l,itemPrefixCls:h,bordered:i,label:s?E:null,content:p?S:null}):[u.exports.createElement(ne,{key:"label-"+(N||B),className:T,style:x(x(x({},g),m),L),span:1,colon:a,component:l[0],itemPrefixCls:h,bordered:i,label:E}),u.exports.createElement(ne,{key:"content-"+(N||B),className:T,style:x(x(x({},P),m),C),span:H*2-1,component:l[1],itemPrefixCls:h,bordered:i,content:S})]})}var Mt=function(e){var t=u.exports.useContext($e),a=e.prefixCls,n=e.vertical,i=e.row,l=e.index,c=e.bordered;return n?u.exports.createElement(u.exports.Fragment,null,u.exports.createElement("tr",{key:"label-"+l,className:a+"-row"},ie(i,e,x({component:"th",type:"label",showLabel:!0},t))),u.exports.createElement("tr",{key:"content-"+l,className:a+"-row"},ie(i,e,x({component:"td",type:"content",showContent:!0},t)))):u.exports.createElement("tr",{key:l,className:a+"-row"},ie(i,e,x({component:c?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},t)))};const Rt=Mt;var Ht=function(e){var t,a=e.componentCls,n=e.descriptionsSmallPadding,i=e.descriptionsDefaultPadding,l=e.descriptionsMiddlePadding,c=e.descriptionsBg;return o({},"&"+a+"-bordered",(t={},o(t,a+"-view",{border:e.lineWidth+"px "+e.lineType+" "+e.colorSplit,"> table":{tableLayout:"auto",borderCollapse:"collapse"}}),o(t,a+"-item-label, "+a+"-item-content",{padding:i,borderInlineEnd:e.lineWidth+"px "+e.lineType+" "+e.colorSplit,"&:last-child":{borderInlineEnd:"none"}}),o(t,a+"-item-label",{backgroundColor:c,"&::after":{display:"none"}}),o(t,a+"-row",{borderBottom:e.lineWidth+"px "+e.lineType+" "+e.colorSplit,"&:last-child":{borderBottom:"none"}}),o(t,"&"+a+"-middle",o({},a+"-item-label, "+a+"-item-content",{padding:l})),o(t,"&"+a+"-small",o({},a+"-item-label, "+a+"-item-content",{padding:n})),t))},$t=function(e){var t,a,n=e.componentCls,i=e.descriptionsExtraColor,l=e.descriptionItemPaddingBottom,c=e.descriptionsItemLabelColonMarginRight,s=e.descriptionsItemLabelColonMarginLeft,p=e.descriptionsTitleMarginBottom;return o({},n,x(x(x({},Te(e)),Ht(e)),(a={},o(a,"&-rtl",{direction:"rtl"}),o(a,n+"-header",{display:"flex",alignItems:"center",marginBottom:p}),o(a,n+"-title",x(x({},se),{flex:"auto",color:e.colorText,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG})),o(a,n+"-extra",{marginInlineStart:"auto",color:i,fontSize:e.fontSize}),o(a,n+"-view",{width:"100%",borderRadius:e.borderRadiusLG,table:{width:"100%",tableLayout:"fixed"}}),o(a,n+"-row",{"> th, > td":{paddingBottom:l},"&:last-child":{borderBottom:"none"}}),o(a,n+"-item-label",o({color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:s+"px "+c+"px"}},"&"+n+"-item-no-colon::after",{content:'""'})),o(a,n+"-item-no-label",{"&::after":{margin:0,content:'""'}}),o(a,n+"-item-content",{display:"table-cell",flex:1,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"}),o(a,n+"-item",{paddingBottom:0,verticalAlign:"top","&-container":(t={display:"flex"},o(t,n+"-item-label",{display:"inline-flex",alignItems:"baseline"}),o(t,n+"-item-content",{display:"inline-flex",alignItems:"baseline"}),t)}),o(a,"&-middle",o({},n+"-row",{"> th, > td":{paddingBottom:e.paddingSM}})),o(a,"&-small",o({},n+"-row",{"> th, > td":{paddingBottom:e.paddingXS}})),a)))};const Nt=Be("Descriptions",function(r){var e=r.colorFillAlter,t=r.fontSizeSM*r.lineHeightSM,a=r.colorText,n=r.paddingXS+"px "+r.padding+"px",i=r.padding+"px "+r.paddingLG+"px",l=r.paddingSM+"px "+r.paddingLG+"px",c=r.padding,s=r.marginXS,p=r.marginXXS/2,g=Ie(r,{descriptionsBg:e,descriptionsTitleMarginBottom:t,descriptionsExtraColor:a,descriptionItemPaddingBottom:c,descriptionsSmallPadding:n,descriptionsDefaultPadding:i,descriptionsMiddlePadding:l,descriptionsItemLabelColonMarginRight:s,descriptionsItemLabelColonMarginLeft:p});return[$t(g)]});var $e=u.exports.createContext({}),Ne={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function At(r,e){if(typeof r=="number")return r;if(Le(r)==="object")for(var t=0;t<xe.length;t++){var a=xe[t];if(e[a]&&r[a]!==void 0)return r[a]||Ne[a]}return 3}function we(r,e,t){var a=r;return(e===void 0||e>t)&&(a=Ye(r,{span:t})),a}function Ot(r,e){var t=Ue(r).filter(function(l){return l}),a=[],n=[],i=e;return t.forEach(function(l,c){var s,p=(s=l.props)===null||s===void 0?void 0:s.span,g=p||1;if(c===t.length-1){n.push(we(l,p,i)),a.push(n);return}g<i?(i-=g,n.push(l)):(n.push(we(l,g,i)),a.push(n),i=e,n=[])}),a}function k(r){var e,t=r.prefixCls,a=r.title,n=r.extra,i=r.column,l=i===void 0?Ne:i,c=r.colon,s=c===void 0?!0:c,p=r.bordered,g=r.layout,P=r.children,w=r.className,B=r.style,b=r.size,E=r.labelStyle,S=r.contentStyle,f=u.exports.useContext(ze),h=f.getPrefixCls,T=f.direction,m=h("descriptions",t),L=u.exports.useState({}),C=X(L,2),M=C[0],H=C[1],N=At(l,M),v=Nt(m),A=X(v,2),z=A[0],D=A[1];u.exports.useEffect(function(){var K=Se.subscribe(function(F){Le(l)==="object"&&H(F)});return function(){Se.unsubscribe(K)}},[]);var Q=Ot(P,N),q=u.exports.useMemo(function(){return{labelStyle:E,contentStyle:S}},[E,S]);return z(u.exports.createElement($e.Provider,{value:q},u.exports.createElement("div",{className:j(m,(e={},o(e,m+"-"+b,b&&b!=="default"),o(e,m+"-bordered",!!p),o(e,m+"-rtl",T==="rtl"),e),w,D),style:B},(a||n)&&u.exports.createElement("div",{className:m+"-header"},a&&u.exports.createElement("div",{className:m+"-title"},a),n&&u.exports.createElement("div",{className:m+"-extra"},n)),u.exports.createElement("div",{className:m+"-view"},u.exports.createElement("table",null,u.exports.createElement("tbody",null,Q.map(function(K,F){return u.exports.createElement(Rt,{key:F,index:F,colon:s,prefixCls:m,vertical:g==="vertical",bordered:p,row:K})})))))))}k.Item=Lt;var Ft=function(e){return(Ce.warn||Ce.warning)(e)};function Wt(r){var e=r.data,t=r.row;return y(y({},e),t)}function jt(r){var e=r.type||"single",t=Ze(),a=le([],{value:r.editableKeys,onChange:r.onChange?function(f){var h;r==null||(h=r.onChange)===null||h===void 0||h.call(r,f,r.dataSource)}:void 0}),n=X(a,2),i=n[0],l=n[1],c=u.exports.useMemo(function(){var f=e==="single"?i==null?void 0:i.slice(0,1):i;return new Set(f)},[(i||[]).join(","),e]),s=u.exports.useCallback(function(f){return!!(i!=null&&i.includes(te(f)))},[(i||[]).join(",")]),p=function(h){return c.size>0&&e==="single"?(Ft(r.onlyOneLineEditorAlertMessage||t.getMessage("editableTable.onlyOneLineEditor","只能同时编辑一行")),!1):(c.add(te(h)),l(Array.from(c)),!0)},g=function(h){return c.delete(te(h)),l(Array.from(c)),!0},P=function(){var f=Y(G().mark(function h(T,m,L,C){var M,H;return G().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,r==null||(M=r.onCancel)===null||M===void 0?void 0:M.call(r,T,m,L,C);case 2:if(H=v.sent,H!==!1){v.next=5;break}return v.abrupt("return",!1);case 5:return v.abrupt("return",!0);case 6:case"end":return v.stop()}},h)}));return function(T,m,L,C){return f.apply(this,arguments)}}(),w=function(){var f=Y(G().mark(function h(T,m,L){var C,M,H;return G().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,r==null||(C=r.onSave)===null||C===void 0?void 0:C.call(r,T,m,L);case 2:if(M=v.sent,M!==!1){v.next=5;break}return v.abrupt("return",!1);case 5:return g(T),H={data:r.dataSource,row:m,key:T,childrenColumnName:r.childrenColumnName||"children"},r.setDataSource(Wt(H)),v.abrupt("return",!0);case 9:case"end":return v.stop()}},h)}));return function(T,m,L){return f.apply(this,arguments)}}(),B=t.getMessage("editableTable.action.save","保存"),b=t.getMessage("editableTable.action.delete","删除"),E=t.getMessage("editableTable.action.cancel","取消"),S=u.exports.useCallback(function(f,h){var T=y({recordKey:f,cancelEditable:g,onCancel:P,onSave:w,editableKeys:i,setEditableRowKeys:l,saveText:B,cancelText:E,deleteText:b,deletePopconfirmMessage:"".concat(t.getMessage("deleteThisLine","删除此行"),"?"),editorType:"Map"},h),m=ke(r.dataSource,T);return r.actionRender?r.actionRender(r.dataSource,T,{save:m.save,delete:m.delete,cancel:m.cancel}):[m.save,m.delete,m.cancel]},[i&&i.join(","),r.dataSource]);return{editableKeys:i,setEditableRowKeys:l,isEditable:s,actionRender:S,startEditable:p,cancelEditable:g}}var pe=function(e){var t=e.padding;return d("div",{style:{padding:t||"0 24px"},children:d(et,{style:{margin:0}})})},Gt={xs:2,sm:2,md:4,lg:4,xl:6,xxl:6},Kt=function(e){var t=e.size,a=e.active,n=ce(),i=t===void 0?Gt[n]||6:t,l=function(s){return s===0?0:i>2?42:16};return d(O,{bordered:!1,style:{marginBlockEnd:16},children:d("div",{style:{width:"100%",justifyContent:"space-between",display:"flex"},children:new Array(i).fill(null).map(function(c,s){return R("div",{style:{borderInlineStart:i>2&&s===1?"1px solid rgba(0,0,0,0.06)":void 0,paddingInlineStart:l(s),flex:1,marginInlineEnd:s===0?16:0},children:[d(I,{active:a,paragraph:!1,title:{width:100,style:{marginBlockStart:0}}}),d(I.Button,{active:a,style:{height:48}})]},s)})})})},_t=function(e){var t=e.active;return R(De,{children:[d(O,{bordered:!1,style:{borderRadius:0},bodyStyle:{padding:24},children:R("div",{style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[d("div",{style:{maxWidth:"100%",flex:1},children:d(I,{active:t,title:{width:100,style:{marginBlockStart:0}},paragraph:{rows:1,style:{margin:0}}})}),d(I.Button,{active:t,size:"small",style:{width:165,marginBlockStart:12}})]})}),d(pe,{})]})},qt=function(e){var t=e.size,a=e.active,n=a===void 0?!0:a,i=e.actionButton;return R(O,{bordered:!1,bodyStyle:{padding:0},children:[new Array(t).fill(null).map(function(l,c){return d(_t,{active:!!n},c)}),i!==!1&&d(O,{bordered:!1,style:{borderStartEndRadius:0,borderTopLeftRadius:0},bodyStyle:{display:"flex",alignItems:"center",justifyContent:"center"},children:d(I.Button,{style:{width:102},active:n,size:"small"})})]})},ge=function(e){var t=e.active;return R("div",{style:{marginBlockEnd:16},children:[d(I,{paragraph:!1,title:{width:185}}),d(I.Button,{active:t,size:"small"})]})},Xt=function(e){var t=e.active;return d(O,{bordered:!1,style:{borderBottomRightRadius:0,borderBottomLeftRadius:0},bodyStyle:{paddingBlockEnd:8},children:R(V,{style:{width:"100%",justifyContent:"space-between"},children:[d(I.Button,{active:t,style:{width:200},size:"small"}),R(V,{children:[d(I.Button,{active:t,size:"small",style:{width:120}}),d(I.Button,{active:t,size:"small",style:{width:80}})]})]})})},Vt=function(e){var t=e.active,a=t===void 0?!0:t,n=e.statistic,i=e.actionButton,l=e.toolbar,c=e.pageHeader,s=e.list,p=s===void 0?5:s;return R("div",{style:{width:"100%"},children:[c!==!1&&d(ge,{active:a}),n!==!1&&d(Kt,{size:n,active:a}),(l!==!1||p!==!1)&&R(O,{bordered:!1,bodyStyle:{padding:0},children:[l!==!1&&d(Xt,{active:a}),p!==!1&&d(qt,{size:p,active:a,actionButton:i})]})]})};const Qt=Vt;var Ae={xs:1,sm:2,md:3,lg:3,xl:3,xxl:4},Jt=function(e){var t=e.active;return R("div",{style:{marginBlockStart:32},children:[d(I.Button,{active:t,size:"small",style:{width:100,marginBlockEnd:16}}),R("div",{style:{width:"100%",justifyContent:"space-between",display:"flex"},children:[R("div",{style:{flex:1,marginInlineEnd:24,maxWidth:300},children:[d(I,{active:t,paragraph:!1,title:{style:{marginBlockStart:0}}}),d(I,{active:t,paragraph:!1,title:{style:{marginBlockStart:8}}}),d(I,{active:t,paragraph:!1,title:{style:{marginBlockStart:8}}})]}),d("div",{style:{flex:1,alignItems:"center",justifyContent:"center"},children:R("div",{style:{maxWidth:300,margin:"auto"},children:[d(I,{active:t,paragraph:!1,title:{style:{marginBlockStart:0}}}),d(I,{active:t,paragraph:!1,title:{style:{marginBlockStart:8}}})]})})]})]})},Ut=function(e){var t=e.size,a=e.active,n=ce(),i=t===void 0?Ae[n]||3:t;return d("div",{style:{width:"100%",justifyContent:"space-between",display:"flex"},children:new Array(i).fill(null).map(function(l,c){return R("div",{style:{flex:1,paddingInlineStart:c===0?0:24,paddingInlineEnd:c===i-1?0:24},children:[d(I,{active:a,paragraph:!1,title:{style:{marginBlockStart:0}}}),d(I,{active:a,paragraph:!1,title:{style:{marginBlockStart:8}}}),d(I,{active:a,paragraph:!1,title:{style:{marginBlockStart:8}}})]},c)})})},Ee=function(e){var t=e.active,a=e.header,n=a===void 0?!1:a,i=ce(),l=Ae[i]||3;return R(De,{children:[R("div",{style:{display:"flex",background:n?"rgba(0,0,0,0.02)":"none",padding:"24px 8px"},children:[new Array(l).fill(null).map(function(c,s){return d("div",{style:{flex:1,paddingInlineStart:n&&s===0?0:20,paddingInlineEnd:32},children:d(I,{active:t,paragraph:!1,title:{style:{margin:0,height:24,width:n?"75px":"100%"}}})},s)}),d("div",{style:{flex:3,paddingInlineStart:32},children:d(I,{active:t,paragraph:!1,title:{style:{margin:0,height:24,width:n?"75px":"100%"}}})})]}),d(pe,{padding:"0px 0px"})]})},Yt=function(e){var t=e.active,a=e.size,n=a===void 0?4:a;return R(O,{bordered:!1,children:[d(I.Button,{active:t,size:"small",style:{width:100,marginBlockEnd:16}}),d(Ee,{header:!0,active:t}),new Array(n).fill(null).map(function(i,l){return d(Ee,{active:t},l)}),d("div",{style:{display:"flex",justifyContent:"flex-end",paddingBlockStart:16},children:d(I,{active:t,paragraph:!1,title:{style:{margin:0,height:32,float:"right",maxWidth:"630px"}}})})]})},Zt=function(e){var t=e.active;return R(O,{bordered:!1,style:{borderStartEndRadius:0,borderTopLeftRadius:0},children:[d(I.Button,{active:t,size:"small",style:{width:100,marginBlockEnd:16}}),d(Ut,{active:t}),d(Jt,{active:t})]})},kt=function(e){var t=e.active,a=t===void 0?!0:t,n=e.pageHeader,i=e.list;return R("div",{style:{width:"100%"},children:[n!==!1&&d(ge,{active:a}),d(Zt,{active:a}),i!==!1&&d(pe,{}),i!==!1&&d(Yt,{active:a,size:i})]})};const ea=kt;var ta=function(e){var t=e.active,a=t===void 0?!0:t,n=e.pageHeader;return R("div",{style:{width:"100%"},children:[n!==!1&&d(ge,{active:a}),d(O,{children:R("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",padding:128},children:[d(I.Avatar,{size:64,style:{marginBlockEnd:32}}),d(I.Button,{active:a,style:{width:214,marginBlockEnd:8}}),d(I.Button,{active:a,style:{width:328},size:"small"}),R(V,{style:{marginBlockStart:24},children:[d(I.Button,{active:a,style:{width:116}}),d(I.Button,{active:a,style:{width:116}})]})]})})]})};const aa=ta;var ra=["type"],na=function(e){var t=e.type,a=t===void 0?"list":t,n=ue(e,ra);return a==="result"?d(aa,y({},n)):a==="descriptions"?d(ea,y({},n)):d(Qt,y({},n))};const ia=na;var la=function(e,t){var a=t||{},n=a.onRequestError,i=a.effects,l=a.manual,c=a.dataSource,s=a.defaultDataSource,p=a.onDataSourceChange,g=le(s,{value:c,onChange:p}),P=X(g,2),w=P[0],B=P[1],b=le(t==null?void 0:t.loading,{value:t==null?void 0:t.loading,onChange:t==null?void 0:t.onLoadingChange}),E=X(b,2),S=E[0],f=E[1],h=function(L){B(L),f(!1)},T=function(){var m=Y(G().mark(function L(){var C,M,H;return G().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:if(!S){v.next=2;break}return v.abrupt("return");case 2:return f(!0),v.prev=3,v.next=6,e();case 6:if(v.t0=v.sent,v.t0){v.next=9;break}v.t0={};case 9:C=v.t0,M=C.data,H=C.success,H!==!1&&h(M),v.next=23;break;case 15:if(v.prev=15,v.t1=v.catch(3),n!==void 0){v.next=21;break}throw new Error(v.t1);case 21:n(v.t1);case 22:f(!1);case 23:case"end":return v.stop()}},L,null,[[3,15]])}));return function(){return m.apply(this,arguments)}}();return u.exports.useEffect(function(){l||T()},[].concat(oe(i||[]),[l])),{dataSource:w,setDataSource:B,loading:S,reload:function(){return T()}}};const oa=la;var da=["valueEnum","render","renderText","mode","plain","dataIndex","request","params","editable"],sa=["request","columns","params","dataSource","onDataSourceChange","formProps","editable","loading","onLoadingChange","actionRef","onRequestError"],ca=function(e,t){var a=e.dataIndex;if(a){var n=Array.isArray(a)?ot(t,a):t[a];if(n!==void 0||n!==null)return n}return e.children},ua=function(e){var t=e.valueEnum,a=e.action,n=e.index,i=e.text,l=e.entity,c=e.mode,s=e.render,p=e.editableUtils,g=e.valueType,P=e.plain,w=e.dataIndex,B=e.request,b=e.renderFormItem,E=e.params,S=Re.useFormInstance(),f={text:i,valueEnum:t,mode:c||"read",proFieldProps:{render:s?function(){return s==null?void 0:s(i,l,n,a,y(y({},e),{},{type:"descriptions"}))}:void 0},ignoreFormItem:!0,valueType:g,request:B,params:E,plain:P};if(c==="read"||!c||g==="option"){var h=ae(e.fieldProps,void 0,y(y({},e),{},{rowKey:w,isEditable:!1}));return d(re,y(y({name:w},f),{},{fieldProps:h}))}var T=function(){var L,C=ae(e.formItemProps,S,y(y({},e),{},{rowKey:w,isEditable:!0})),M=ae(e.fieldProps,S,y(y({},e),{},{rowKey:w,isEditable:!0})),H=b?b==null?void 0:b(y(y({},e),{},{type:"descriptions"}),{isEditable:!0,recordKey:w,record:S.getFieldValue([w].flat(1)),defaultRender:function(){return d(re,y(y({},f),{},{fieldProps:M}))},type:"descriptions"},S):void 0;return R(V,{children:[d(dt,y(y({name:w},C),{},{style:y({margin:0},(C==null?void 0:C.style)||{}),initialValue:i||(C==null?void 0:C.initialValue),children:H||d(re,y(y({},f),{},{proFieldProps:y({},f.proFieldProps),fieldProps:M}))})),p==null||(L=p.actionRender)===null||L===void 0?void 0:L.call(p,w||n,{cancelText:d(st,{}),saveText:d(ct,{}),deleteText:!1})]})};return d("div",{style:{marginTop:-5,marginBottom:-5,marginLeft:0,marginRight:0},children:T()})},va=function(e,t,a,n){var i,l=[],c=e==null||(i=e.map)===null||i===void 0?void 0:i.call(e,function(s,p){var g,P;if(de.isValidElement(s))return s;s.valueEnum,s.render;var w=s.renderText,B=s.mode;s.plain;var b=s.dataIndex;s.request,s.params;var E=s.editable,S=ue(s,da),f=(g=ca(s,t))!==null&&g!==void 0?g:S.children,h=w?w(f,t,p,a):f,T=typeof S.title=="function"?S.title(s,"descriptions",null):S.title,m=typeof S.valueType=="function"?S.valueType(t||{},"descriptions"):S.valueType,L=n==null?void 0:n.isEditable(b||p),C=B||L?"edit":"read",M=n&&C==="read"&&E!==!1&&(E==null?void 0:E(h,t,p))!==!1,H=M?V:de.Fragment,N=C==="edit"?h:nt(h,s,h),v=u.exports.createElement(k.Item,y(y({},S),{},{key:S.key||((P=S.label)===null||P===void 0?void 0:P.toString())||p,label:(T||S.label||S.tooltip||S.tip)&&d(Me,{label:T||S.label,tooltip:S.tooltip||S.tip,ellipsis:s.ellipsis})}),R(H,{children:[d(ua,y(y({},s),{},{dataIndex:s.dataIndex||p,mode:C,text:N,valueType:m,entity:t,index:p,action:a,editableUtils:n})),M&&m!=="option"&&d(it,{onClick:function(){n==null||n.startEditable(b||p)}})]}));return m==="option"?(l.push(v),null):v}).filter(function(s){return s});return{options:l!=null&&l.length?l:null,children:c}},pa=function(e){return d(k.Item,y(y({},e),{},{children:e.children}))},ga=function(e){return e.children},fa=function(e){var t,a=e.request,n=e.columns,i=e.params,l=i===void 0?{}:i,c=e.dataSource,s=e.onDataSourceChange,p=e.formProps,g=e.editable,P=e.loading,w=e.onLoadingChange,B=e.actionRef,b=e.onRequestError,E=ue(e,sa),S=u.exports.useContext(tt.ConfigContext),f=oa(Y(G().mark(function v(){var A;return G().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:if(!a){D.next=6;break}return D.next=3,a(l);case 3:D.t0=D.sent,D.next=7;break;case 6:D.t0={data:{}};case 7:return A=D.t0,D.abrupt("return",A);case 9:case"end":return D.stop()}},v)})),{onRequestError:b,effects:[at(l)],manual:!a,dataSource:c,loading:P,onLoadingChange:w,onDataSourceChange:s}),h=jt(y(y({},e.editable),{},{childrenColumnName:void 0,dataSource:f.dataSource,setDataSource:f.setDataSource}));if(u.exports.useEffect(function(){B&&(B.current=y({reload:f.reload},h))},[f,B,h]),f.loading||f.loading===void 0&&a)return d(ia,{type:"descriptions",list:!1,pageHeader:!1});var T=function(){var A=lt(e.children).filter(Boolean).map(function(z){if(!de.isValidElement(z))return z;var D=z==null?void 0:z.props,Q=D.valueEnum,q=D.valueType,K=D.dataIndex,F=D.ellipsis,$=D.copyable,ee=D.request;return!q&&!Q&&!K&&!ee&&!F&&!$?z:y(y({},z==null?void 0:z.props),{},{entity:c})});return[].concat(oe(n||[]),oe(A)).filter(function(z){return!z||(z==null?void 0:z.valueType)&&["index","indexBorder"].includes(z==null?void 0:z.valueType)?!1:!(z!=null&&z.hideInDescriptions)}).sort(function(z,D){return D.order||z.order?(D.order||0)-(z.order||0):(D.index||0)-(z.index||0)})},m=va(T(),f.dataSource||{},(B==null?void 0:B.current)||f,g?h:void 0),L=m.options,C=m.children,M=g?Re:ga,H=null;(E.title||E.tooltip||E.tip)&&(H=d(Me,{label:E.title,tooltip:E.tooltip||E.tip}));var N=S.getPrefixCls("pro-descriptions");return d(rt,{children:d(M,y(y({form:(t=e.editable)===null||t===void 0?void 0:t.form,component:!1,submitter:!1},p),{},{onFinish:void 0,children:d(k,y(y({className:N},E),{},{extra:E.extra?R(V,{children:[L,E.extra]}):L,title:H,children:C}))}),"form")})};fa.Item=pa;export{fa as P};
