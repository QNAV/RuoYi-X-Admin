import{d as X,c as H,g as he,m as ye,r as Se,aY as V,aZ as oe,a_ as Le,ap as Oe,av as je,a$ as Re,b0 as ve,b1 as Me,b2 as Ne,aJ as He,$ as ne,U as re,b3 as Z,_ as m,b4 as Ae,w as me,a8 as q,a9 as A,aL as Fe,a4 as F,X as se,a0 as ie,l as We,b5 as Ge,b6 as $e,ag as Ke,b7 as _e,b8 as qe,b9 as Xe,aK as xe,ba as Ve,bb as k,aG as ee,bc as Qe,C as Je,bd as Ue}from"./index-4f978b96.js";import{r as d,a as P,j as l,F as Ce,R as le}from"./jsx-runtime-0e3d513e.js";import{u as de}from"./index-cc0f583e.js";import{S as x}from"./Skeleton-78e75ca3.js";var Ye=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};const Ze=e=>{var{prefixCls:t,className:a,hoverable:n=!0}=e,r=Ye(e,["prefixCls","className","hoverable"]);const{getPrefixCls:i}=d.useContext(X),s=i("card",t),g=H(`${s}-grid`,a,{[`${s}-grid-hoverable`]:n});return d.createElement("div",Object.assign({},r,{className:g}))},we=Ze,ke=e=>{const{antCls:t,componentCls:a,cardHeadHeight:n,cardPaddingBase:r,cardHeadTabsMarginBottom:i}=e;return Object.assign(Object.assign({display:"flex",justifyContent:"center",flexDirection:"column",minHeight:n,marginBottom:-1,padding:`0 ${r}px`,color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,background:"transparent",borderBottom:`${e.lineWidth}px ${e.lineType} ${e.colorBorderSecondary}`,borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`},V()),{"&-wrapper":{width:"100%",display:"flex",alignItems:"center"},"&-title":Object.assign(Object.assign({display:"inline-block",flex:1},oe),{[`
          > ${a}-typography,
          > ${a}-typography-edit-content
        `]:{insetInlineStart:0,marginTop:0,marginBottom:0}}),[`${t}-tabs-top`]:{clear:"both",marginBottom:i,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,"&-bar":{borderBottom:`${e.lineWidth}px ${e.lineType} ${e.colorBorderSecondary}`}}})},et=e=>{const{cardPaddingBase:t,colorBorderSecondary:a,cardShadow:n,lineWidth:r}=e;return{width:"33.33%",padding:t,border:0,borderRadius:0,boxShadow:`
      ${r}px 0 0 0 ${a},
      0 ${r}px 0 0 ${a},
      ${r}px ${r}px 0 0 ${a},
      ${r}px 0 0 0 ${a} inset,
      0 ${r}px 0 0 ${a} inset;
    `,transition:`all ${e.motionDurationMid}`,"&-hoverable:hover":{position:"relative",zIndex:1,boxShadow:n}}},tt=e=>{const{componentCls:t,iconCls:a,cardActionsLiMargin:n,cardActionsIconSize:r,colorBorderSecondary:i}=e;return Object.assign(Object.assign({margin:0,padding:0,listStyle:"none",background:e.colorBgContainer,borderTop:`${e.lineWidth}px ${e.lineType} ${i}`,display:"flex",borderRadius:`0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px `},V()),{"& > li":{margin:n,color:e.colorTextDescription,textAlign:"center","> span":{position:"relative",display:"block",minWidth:e.cardActionsIconSize*2,fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer","&:hover":{color:e.colorPrimary,transition:`color ${e.motionDurationMid}`},[`a:not(${t}-btn), > ${a}`]:{display:"inline-block",width:"100%",color:e.colorTextDescription,lineHeight:`${e.fontSize*e.lineHeight}px`,transition:`color ${e.motionDurationMid}`,"&:hover":{color:e.colorPrimary}},[`> ${a}`]:{fontSize:r,lineHeight:`${r*e.lineHeight}px`}},"&:not(:last-child)":{borderInlineEnd:`${e.lineWidth}px ${e.lineType} ${i}`}}})},at=e=>Object.assign(Object.assign({margin:`-${e.marginXXS}px 0`,display:"flex"},V()),{"&-avatar":{paddingInlineEnd:e.padding},"&-detail":{overflow:"hidden",flex:1,"> div:not(:last-child)":{marginBottom:e.marginXS}},"&-title":Object.assign({color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG},oe),"&-description":{color:e.colorTextDescription}}),nt=e=>{const{componentCls:t,cardPaddingBase:a,colorFillAlter:n}=e;return{[`${t}-head`]:{padding:`0 ${a}px`,background:n,"&-title":{fontSize:e.fontSize}},[`${t}-body`]:{padding:`${e.padding}px ${a}px`}}},rt=e=>{const{componentCls:t}=e;return{overflow:"hidden",[`${t}-body`]:{userSelect:"none"}}},it=e=>{const{componentCls:t,cardShadow:a,cardHeadPadding:n,colorBorderSecondary:r,boxShadow:i,cardPaddingBase:s}=e;return{[t]:Object.assign(Object.assign({},Se(e)),{position:"relative",background:e.colorBgContainer,borderRadius:e.borderRadiusLG,[`&:not(${t}-bordered)`]:{boxShadow:i},[`${t}-head`]:ke(e),[`${t}-extra`]:{marginInlineStart:"auto",color:"",fontWeight:"normal",fontSize:e.fontSize},[`${t}-body`]:Object.assign({padding:s,borderRadius:` 0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`},V()),[`${t}-grid`]:et(e),[`${t}-cover`]:{"> *":{display:"block",width:"100%"},img:{borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`}},[`${t}-actions`]:tt(e),[`${t}-meta`]:at(e)}),[`${t}-bordered`]:{border:`${e.lineWidth}px ${e.lineType} ${r}`,[`${t}-cover`]:{marginTop:-1,marginInlineStart:-1,marginInlineEnd:-1}},[`${t}-hoverable`]:{cursor:"pointer",transition:`box-shadow ${e.motionDurationMid}, border-color ${e.motionDurationMid}`,"&:hover":{borderColor:"transparent",boxShadow:a}},[`${t}-contain-grid`]:{[`${t}-body`]:{display:"flex",flexWrap:"wrap"},[`&:not(${t}-loading) ${t}-body`]:{marginBlockStart:-e.lineWidth,marginInlineStart:-e.lineWidth,padding:0}},[`${t}-contain-tabs`]:{[`> ${t}-head`]:{[`${t}-head-title, ${t}-extra`]:{paddingTop:n}}},[`${t}-type-inner`]:nt(e),[`${t}-loading`]:rt(e),[`${t}-rtl`]:{direction:"rtl"}}},lt=e=>{const{componentCls:t,cardPaddingSM:a,cardHeadHeightSM:n}=e;return{[`${t}-small`]:{[`> ${t}-head`]:{minHeight:n,padding:`0 ${a}px`,fontSize:e.fontSize,[`> ${t}-head-wrapper`]:{[`> ${t}-extra`]:{fontSize:e.fontSize}}},[`> ${t}-body`]:{padding:a}},[`${t}-small${t}-contain-tabs`]:{[`> ${t}-head`]:{[`${t}-head-title, ${t}-extra`]:{minHeight:n,paddingTop:0,display:"flex",alignItems:"center"}}}}},ot=he("Card",e=>{const t=ye(e,{cardShadow:e.boxShadowCard,cardHeadHeight:e.fontSizeLG*e.lineHeightLG+e.padding*2,cardHeadHeightSM:e.fontSize*e.lineHeight+e.paddingXS*2,cardHeadPadding:e.padding,cardPaddingBase:e.paddingLG,cardHeadTabsMarginBottom:-e.padding-e.lineWidth,cardActionsLiMargin:`${e.paddingSM}px 0`,cardActionsIconSize:e.fontSize,cardPaddingSM:12});return[it(t),lt(t)]});var st=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};function dt(e){return e.map((a,n)=>d.createElement("li",{style:{width:`${100/e.length}%`},key:`action-${n}`},d.createElement("span",null,a)))}const ct=d.forwardRef((e,t)=>{const{getPrefixCls:a,direction:n}=d.useContext(X),r=d.useContext(Le),i=N=>{var R;(R=e.onTabChange)===null||R===void 0||R.call(e,N)},s=()=>{let N;return d.Children.forEach(e.children,R=>{R&&R.type&&R.type===we&&(N=!0)}),N},{prefixCls:g,className:o,extra:f,headStyle:b={},bodyStyle:I={},title:S,loading:w,bordered:L=!0,size:C,type:u,cover:v,actions:p,tabList:$,children:h,activeTabKey:E,defaultActiveTabKey:y,tabBarExtraContent:D,hoverable:O,tabProps:j={}}=e,c=st(e,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),B=a("card",g),[T,z]=ot(B),J=d.createElement(x,{loading:!0,active:!0,paragraph:{rows:4},title:!1},h),W=E!==void 0,U=Object.assign(Object.assign({},j),{[W?"activeKey":"defaultActiveKey"]:W?E:y,tabBarExtraContent:D});let G;const K=$&&$.length?d.createElement(Oe,Object.assign({size:"large"},U,{className:`${B}-head-tabs`,onChange:i,items:$.map(N=>{var R;return{label:N.tab,key:N.key,disabled:(R=N.disabled)!==null&&R!==void 0?R:!1}})})):null;(S||f||K)&&(G=d.createElement("div",{className:`${B}-head`,style:b},d.createElement("div",{className:`${B}-head-wrapper`},S&&d.createElement("div",{className:`${B}-head-title`},S),f&&d.createElement("div",{className:`${B}-extra`},f)),K));const Y=v?d.createElement("div",{className:`${B}-cover`},v):null,Pe=d.createElement("div",{className:`${B}-body`,style:I},w?J:h),Be=p&&p.length?d.createElement("ul",{className:`${B}-actions`},dt(p)):null,ze=je(c,["onTabChange"]),fe=C||r,De=H(B,{[`${B}-loading`]:w,[`${B}-bordered`]:L,[`${B}-hoverable`]:O,[`${B}-contain-grid`]:s(),[`${B}-contain-tabs`]:$&&$.length,[`${B}-${fe}`]:fe,[`${B}-type-${u}`]:!!u,[`${B}-rtl`]:n==="rtl"},o,z);return T(d.createElement("div",Object.assign({ref:t},ze,{className:De}),G,Y,Pe,Be))}),ut=ct;var gt=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};const ft=e=>{const{prefixCls:t,className:a,avatar:n,title:r,description:i}=e,s=gt(e,["prefixCls","className","avatar","title","description"]),{getPrefixCls:g}=d.useContext(X),o=g("card",t),f=H(`${o}-meta`,a),b=n?d.createElement("div",{className:`${o}-meta-avatar`},n):null,I=r?d.createElement("div",{className:`${o}-meta-title`},r):null,S=i?d.createElement("div",{className:`${o}-meta-description`},i):null,w=I||S?d.createElement("div",{className:`${o}-meta-detail`},I,S):null;return d.createElement("div",Object.assign({},s,{className:f}),b,w)},vt=ft,ce=ut;ce.Grid=we;ce.Meta=vt;const M=ce,mt=e=>{let{children:t}=e;return t},pt=mt;function _(e){return e!=null}const bt=e=>{let{itemPrefixCls:t,component:a,span:n,className:r,style:i,labelStyle:s,contentStyle:g,bordered:o,label:f,content:b,colon:I}=e;const S=a;return o?d.createElement(S,{className:H({[`${t}-item-label`]:_(f),[`${t}-item-content`]:_(b)},r),style:i,colSpan:n},_(f)&&d.createElement("span",{style:s},f),_(b)&&d.createElement("span",{style:g},b)):d.createElement(S,{className:H(`${t}-item`,r),style:i,colSpan:n},d.createElement("div",{className:`${t}-item-container`},(f||f===0)&&d.createElement("span",{className:H(`${t}-item-label`,{[`${t}-item-no-colon`]:!I}),style:s},f),(b||b===0)&&d.createElement("span",{className:H(`${t}-item-content`),style:g},b)))},te=bt;function ae(e,t,a){let{colon:n,prefixCls:r,bordered:i}=t,{component:s,type:g,showLabel:o,showContent:f,labelStyle:b,contentStyle:I}=a;return e.map((S,w)=>{let{props:{label:L,children:C,prefixCls:u=r,className:v,style:p,labelStyle:$,contentStyle:h,span:E=1},key:y}=S;return typeof s=="string"?d.createElement(te,{key:`${g}-${y||w}`,className:v,style:p,labelStyle:Object.assign(Object.assign({},b),$),contentStyle:Object.assign(Object.assign({},I),h),span:E,colon:n,component:s,itemPrefixCls:u,bordered:i,label:o?L:null,content:f?C:null}):[d.createElement(te,{key:`label-${y||w}`,className:v,style:Object.assign(Object.assign(Object.assign({},b),p),$),span:1,colon:n,component:s[0],itemPrefixCls:u,bordered:i,label:L}),d.createElement(te,{key:`content-${y||w}`,className:v,style:Object.assign(Object.assign(Object.assign({},I),p),h),span:E*2-1,component:s[1],itemPrefixCls:u,bordered:i,content:C})]})}const ht=e=>{const t=d.useContext(Ee),{prefixCls:a,vertical:n,row:r,index:i,bordered:s}=e;return n?d.createElement(d.Fragment,null,d.createElement("tr",{key:`label-${i}`,className:`${a}-row`},ae(r,e,Object.assign({component:"th",type:"label",showLabel:!0},t))),d.createElement("tr",{key:`content-${i}`,className:`${a}-row`},ae(r,e,Object.assign({component:"td",type:"content",showContent:!0},t)))):d.createElement("tr",{key:i,className:`${a}-row`},ae(r,e,Object.assign({component:s?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},t)))},yt=ht,St=e=>{const{componentCls:t,descriptionsSmallPadding:a,descriptionsDefaultPadding:n,descriptionsMiddlePadding:r,descriptionsBg:i}=e;return{[`&${t}-bordered`]:{[`${t}-view`]:{border:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,"> table":{tableLayout:"auto",borderCollapse:"collapse"}},[`${t}-item-label, ${t}-item-content`]:{padding:n,borderInlineEnd:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderInlineEnd:"none"}},[`${t}-item-label`]:{backgroundColor:i,"&::after":{display:"none"}},[`${t}-row`]:{borderBottom:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderBottom:"none"}},[`&${t}-middle`]:{[`${t}-item-label, ${t}-item-content`]:{padding:r}},[`&${t}-small`]:{[`${t}-item-label, ${t}-item-content`]:{padding:a}}}}},$t=e=>{const{componentCls:t,descriptionsExtraColor:a,descriptionItemPaddingBottom:n,descriptionsItemLabelColonMarginRight:r,descriptionsItemLabelColonMarginLeft:i,descriptionsTitleMarginBottom:s}=e;return{[t]:Object.assign(Object.assign(Object.assign({},Se(e)),St(e)),{["&-rtl"]:{direction:"rtl"},[`${t}-header`]:{display:"flex",alignItems:"center",marginBottom:s},[`${t}-title`]:Object.assign(Object.assign({},oe),{flex:"auto",color:e.colorText,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG}),[`${t}-extra`]:{marginInlineStart:"auto",color:a,fontSize:e.fontSize},[`${t}-view`]:{width:"100%",borderRadius:e.borderRadiusLG,table:{width:"100%",tableLayout:"fixed"}},[`${t}-row`]:{"> th, > td":{paddingBottom:n},"&:last-child":{borderBottom:"none"}},[`${t}-item-label`]:{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:`${i}px ${r}px`},[`&${t}-item-no-colon::after`]:{content:'""'}},[`${t}-item-no-label`]:{"&::after":{margin:0,content:'""'}},[`${t}-item-content`]:{display:"table-cell",flex:1,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"},[`${t}-item`]:{paddingBottom:0,verticalAlign:"top","&-container":{display:"flex",[`${t}-item-label`]:{display:"inline-flex",alignItems:"baseline"},[`${t}-item-content`]:{display:"inline-flex",alignItems:"baseline"}}},"&-middle":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingSM}}},"&-small":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingXS}}}})}},xt=he("Descriptions",e=>{const t=e.colorFillAlter,a=e.fontSizeSM*e.lineHeightSM,n=e.colorText,r=`${e.paddingXS}px ${e.padding}px`,i=`${e.padding}px ${e.paddingLG}px`,s=`${e.paddingSM}px ${e.paddingLG}px`,g=e.padding,o=e.marginXS,f=e.marginXXS/2,b=ye(e,{descriptionsBg:t,descriptionsTitleMarginBottom:a,descriptionsExtraColor:n,descriptionItemPaddingBottom:g,descriptionsSmallPadding:r,descriptionsDefaultPadding:i,descriptionsMiddlePadding:s,descriptionsItemLabelColonMarginRight:o,descriptionsItemLabelColonMarginLeft:f});return[$t(b)]}),Ee=d.createContext({}),Te={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function Ct(e,t){if(typeof e=="number")return e;if(typeof e=="object")for(let a=0;a<ve.length;a++){const n=ve[a];if(t[n]&&e[n]!==void 0)return e[n]||Te[n]}return 3}function pe(e,t,a){let n=e;return(t===void 0||t>a)&&(n=Ne(e,{span:a})),n}function wt(e,t){const a=Me(e).filter(s=>s),n=[];let r=[],i=t;return a.forEach((s,g)=>{var o;const f=(o=s.props)===null||o===void 0?void 0:o.span,b=f||1;if(g===a.length-1){r.push(pe(s,f,i)),n.push(r);return}b<i?(i-=b,r.push(s)):(r.push(pe(s,b,i)),n.push(r),i=t,r=[])}),n}function Q(e){let{prefixCls:t,title:a,extra:n,column:r=Te,colon:i=!0,bordered:s,layout:g,children:o,className:f,style:b,size:I,labelStyle:S,contentStyle:w}=e;const{getPrefixCls:L,direction:C}=d.useContext(X),u=L("descriptions",t),[v,p]=d.useState({}),$=Ct(r,v),[h,E]=xt(u),y=Re();d.useEffect(()=>{const j=y.subscribe(c=>{typeof r=="object"&&p(c)});return()=>{y.unsubscribe(j)}},[]);const D=wt(o,$),O=d.useMemo(()=>({labelStyle:S,contentStyle:w}),[S,w]);return h(d.createElement(Ee.Provider,{value:O},d.createElement("div",{className:H(u,{[`${u}-${I}`]:I&&I!=="default",[`${u}-bordered`]:!!s,[`${u}-rtl`]:C==="rtl"},f,E),style:b},(a||n)&&d.createElement("div",{className:`${u}-header`},a&&d.createElement("div",{className:`${u}-title`},a),n&&d.createElement("div",{className:`${u}-extra`},n)),d.createElement("div",{className:`${u}-view`},d.createElement("table",null,d.createElement("tbody",null,D.map((j,c)=>d.createElement(yt,{key:c,index:c,colon:i,prefixCls:u,vertical:g==="vertical",bordered:s,row:j}))))))))}Q.Item=pt;var Et=function(t){return(me.warn||me.warning)(t)};function Tt(e){var t=e.data,a=e.row;return m(m({},t),a)}function It(e){var t=e.type||"single",a=He(),n=ne([],{value:e.editableKeys,onChange:e.onChange?function(v){var p;e==null||(p=e.onChange)===null||p===void 0||p.call(e,v,e.dataSource)}:void 0}),r=re(n,2),i=r[0],s=r[1],g=d.useMemo(function(){var v=t==="single"?i==null?void 0:i.slice(0,1):i;return new Set(v)},[(i||[]).join(","),t]),o=d.useCallback(function(v){return!!(i!=null&&i.includes(Z(v)))},[(i||[]).join(",")]),f=function(p){return g.size>0&&t==="single"?(Et(e.onlyOneLineEditorAlertMessage||a.getMessage("editableTable.onlyOneLineEditor","只能同时编辑一行")),!1):(g.add(Z(p)),s(Array.from(g)),!0)},b=function(p){return g.delete(Z(p)),s(Array.from(g)),!0},I=function(){var v=q(A().mark(function p($,h,E,y){var D,O;return A().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e==null||(D=e.onCancel)===null||D===void 0?void 0:D.call(e,$,h,E,y);case 2:if(O=c.sent,O!==!1){c.next=5;break}return c.abrupt("return",!1);case 5:return c.abrupt("return",!0);case 6:case"end":return c.stop()}},p)}));return function($,h,E,y){return v.apply(this,arguments)}}(),S=function(){var v=q(A().mark(function p($,h,E){var y,D,O;return A().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e==null||(y=e.onSave)===null||y===void 0?void 0:y.call(e,$,h,E);case 2:if(D=c.sent,D!==!1){c.next=5;break}return c.abrupt("return",!1);case 5:return b($),O={data:e.dataSource,row:h,key:$,childrenColumnName:e.childrenColumnName||"children"},e.setDataSource(Tt(O)),c.abrupt("return",!0);case 9:case"end":return c.stop()}},p)}));return function($,h,E){return v.apply(this,arguments)}}(),w=a.getMessage("editableTable.action.save","保存"),L=a.getMessage("editableTable.action.delete","删除"),C=a.getMessage("editableTable.action.cancel","取消"),u=d.useCallback(function(v,p){var $=m({recordKey:v,cancelEditable:b,onCancel:I,onSave:S,editableKeys:i,setEditableRowKeys:s,saveText:w,cancelText:C,deleteText:L,deletePopconfirmMessage:"".concat(a.getMessage("deleteThisLine","删除此行"),"?"),editorType:"Map"},p),h=Ae(e.dataSource,$);return e.actionRender?e.actionRender(e.dataSource,$,{save:h.save,delete:h.delete,cancel:h.cancel}):[h.save,h.delete,h.cancel]},[i&&i.join(","),e.dataSource]);return{editableKeys:i,setEditableRowKeys:s,isEditable:o,actionRender:u,startEditable:f,cancelEditable:b}}var ue=function(t){var a=t.padding;return l("div",{style:{padding:a||"0 24px"},children:l(Fe,{style:{margin:0}})})},Pt={xs:2,sm:2,md:4,lg:4,xl:6,xxl:6},Bt=function(t){var a=t.size,n=t.active,r=de(),i=a===void 0?Pt[r]||6:a,s=function(o){return o===0?0:i>2?42:16};return l(M,{bordered:!1,style:{marginBlockEnd:16},children:l("div",{style:{width:"100%",justifyContent:"space-between",display:"flex"},children:new Array(i).fill(null).map(function(g,o){return P("div",{style:{borderInlineStart:i>2&&o===1?"1px solid rgba(0,0,0,0.06)":void 0,paddingInlineStart:s(o),flex:1,marginInlineEnd:o===0?16:0},children:[l(x,{active:n,paragraph:!1,title:{width:100,style:{marginBlockStart:0}}}),l(x.Button,{active:n,style:{height:48}})]},o)})})})},zt=function(t){var a=t.active;return P(Ce,{children:[l(M,{bordered:!1,style:{borderRadius:0},bodyStyle:{padding:24},children:P("div",{style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l("div",{style:{maxWidth:"100%",flex:1},children:l(x,{active:a,title:{width:100,style:{marginBlockStart:0}},paragraph:{rows:1,style:{margin:0}}})}),l(x.Button,{active:a,size:"small",style:{width:165,marginBlockStart:12}})]})}),l(ue,{})]})},Dt=function(t){var a=t.size,n=t.active,r=n===void 0?!0:n,i=t.actionButton;return P(M,{bordered:!1,bodyStyle:{padding:0},children:[new Array(a).fill(null).map(function(s,g){return l(zt,{active:!!r},g)}),i!==!1&&l(M,{bordered:!1,style:{borderStartEndRadius:0,borderTopLeftRadius:0},bodyStyle:{display:"flex",alignItems:"center",justifyContent:"center"},children:l(x.Button,{style:{width:102},active:r,size:"small"})})]})},ge=function(t){var a=t.active;return P("div",{style:{marginBlockEnd:16},children:[l(x,{paragraph:!1,title:{width:185}}),l(x.Button,{active:a,size:"small"})]})},Lt=function(t){var a=t.active;return l(M,{bordered:!1,style:{borderBottomRightRadius:0,borderBottomLeftRadius:0},bodyStyle:{paddingBlockEnd:8},children:P(F,{style:{width:"100%",justifyContent:"space-between"},children:[l(x.Button,{active:a,style:{width:200},size:"small"}),P(F,{children:[l(x.Button,{active:a,size:"small",style:{width:120}}),l(x.Button,{active:a,size:"small",style:{width:80}})]})]})})},Ot=function(t){var a=t.active,n=a===void 0?!0:a,r=t.statistic,i=t.actionButton,s=t.toolbar,g=t.pageHeader,o=t.list,f=o===void 0?5:o;return P("div",{style:{width:"100%"},children:[g!==!1&&l(ge,{active:n}),r!==!1&&l(Bt,{size:r,active:n}),(s!==!1||f!==!1)&&P(M,{bordered:!1,bodyStyle:{padding:0},children:[s!==!1&&l(Lt,{active:n}),f!==!1&&l(Dt,{size:f,active:n,actionButton:i})]})]})};const jt=Ot;var Ie={xs:1,sm:2,md:3,lg:3,xl:3,xxl:4},Rt=function(t){var a=t.active;return P("div",{style:{marginBlockStart:32},children:[l(x.Button,{active:a,size:"small",style:{width:100,marginBlockEnd:16}}),P("div",{style:{width:"100%",justifyContent:"space-between",display:"flex"},children:[P("div",{style:{flex:1,marginInlineEnd:24,maxWidth:300},children:[l(x,{active:a,paragraph:!1,title:{style:{marginBlockStart:0}}}),l(x,{active:a,paragraph:!1,title:{style:{marginBlockStart:8}}}),l(x,{active:a,paragraph:!1,title:{style:{marginBlockStart:8}}})]}),l("div",{style:{flex:1,alignItems:"center",justifyContent:"center"},children:P("div",{style:{maxWidth:300,margin:"auto"},children:[l(x,{active:a,paragraph:!1,title:{style:{marginBlockStart:0}}}),l(x,{active:a,paragraph:!1,title:{style:{marginBlockStart:8}}})]})})]})]})},Mt=function(t){var a=t.size,n=t.active,r=de(),i=a===void 0?Ie[r]||3:a;return l("div",{style:{width:"100%",justifyContent:"space-between",display:"flex"},children:new Array(i).fill(null).map(function(s,g){return P("div",{style:{flex:1,paddingInlineStart:g===0?0:24,paddingInlineEnd:g===i-1?0:24},children:[l(x,{active:n,paragraph:!1,title:{style:{marginBlockStart:0}}}),l(x,{active:n,paragraph:!1,title:{style:{marginBlockStart:8}}}),l(x,{active:n,paragraph:!1,title:{style:{marginBlockStart:8}}})]},g)})})},be=function(t){var a=t.active,n=t.header,r=n===void 0?!1:n,i=de(),s=Ie[i]||3;return P(Ce,{children:[P("div",{style:{display:"flex",background:r?"rgba(0,0,0,0.02)":"none",padding:"24px 8px"},children:[new Array(s).fill(null).map(function(g,o){return l("div",{style:{flex:1,paddingInlineStart:r&&o===0?0:20,paddingInlineEnd:32},children:l(x,{active:a,paragraph:!1,title:{style:{margin:0,height:24,width:r?"75px":"100%"}}})},o)}),l("div",{style:{flex:3,paddingInlineStart:32},children:l(x,{active:a,paragraph:!1,title:{style:{margin:0,height:24,width:r?"75px":"100%"}}})})]}),l(ue,{padding:"0px 0px"})]})},Nt=function(t){var a=t.active,n=t.size,r=n===void 0?4:n;return P(M,{bordered:!1,children:[l(x.Button,{active:a,size:"small",style:{width:100,marginBlockEnd:16}}),l(be,{header:!0,active:a}),new Array(r).fill(null).map(function(i,s){return l(be,{active:a},s)}),l("div",{style:{display:"flex",justifyContent:"flex-end",paddingBlockStart:16},children:l(x,{active:a,paragraph:!1,title:{style:{margin:0,height:32,float:"right",maxWidth:"630px"}}})})]})},Ht=function(t){var a=t.active;return P(M,{bordered:!1,style:{borderStartEndRadius:0,borderTopLeftRadius:0},children:[l(x.Button,{active:a,size:"small",style:{width:100,marginBlockEnd:16}}),l(Mt,{active:a}),l(Rt,{active:a})]})},At=function(t){var a=t.active,n=a===void 0?!0:a,r=t.pageHeader,i=t.list;return P("div",{style:{width:"100%"},children:[r!==!1&&l(ge,{active:n}),l(Ht,{active:n}),i!==!1&&l(ue,{}),i!==!1&&l(Nt,{active:n,size:i})]})};const Ft=At;var Wt=function(t){var a=t.active,n=a===void 0?!0:a,r=t.pageHeader;return P("div",{style:{width:"100%"},children:[r!==!1&&l(ge,{active:n}),l(M,{children:P("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",padding:128},children:[l(x.Avatar,{size:64,style:{marginBlockEnd:32}}),l(x.Button,{active:n,style:{width:214,marginBlockEnd:8}}),l(x.Button,{active:n,style:{width:328},size:"small"}),P(F,{style:{marginBlockStart:24},children:[l(x.Button,{active:n,style:{width:116}}),l(x.Button,{active:n,style:{width:116}})]})]})})]})};const Gt=Wt;var Kt=["type"],_t=function(t){var a=t.type,n=a===void 0?"list":a,r=se(t,Kt);return n==="result"?l(Gt,m({},r)):n==="descriptions"?l(Ft,m({},r)):l(jt,m({},r))};const qt=_t;var Xt=function(t,a){var n=a||{},r=n.onRequestError,i=n.effects,s=n.manual,g=n.dataSource,o=n.defaultDataSource,f=n.onDataSourceChange,b=ne(o,{value:g,onChange:f}),I=re(b,2),S=I[0],w=I[1],L=ne(a==null?void 0:a.loading,{value:a==null?void 0:a.loading,onChange:a==null?void 0:a.onLoadingChange}),C=re(L,2),u=C[0],v=C[1],p=function(E){w(E),v(!1)},$=function(){var h=q(A().mark(function E(){var y,D,O;return A().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(!u){c.next=2;break}return c.abrupt("return");case 2:return v(!0),c.prev=3,c.next=6,t();case 6:if(c.t0=c.sent,c.t0){c.next=9;break}c.t0={};case 9:y=c.t0,D=y.data,O=y.success,O!==!1&&p(D),c.next=23;break;case 15:if(c.prev=15,c.t1=c.catch(3),r!==void 0){c.next=21;break}throw new Error(c.t1);case 21:r(c.t1);case 22:v(!1);case 23:case"end":return c.stop()}},E,null,[[3,15]])}));return function(){return h.apply(this,arguments)}}();return d.useEffect(function(){s||$()},[].concat(ie(i||[]),[s])),{dataSource:S,setDataSource:w,loading:u,reload:function(){return $()}}};const Vt=Xt;var Qt=["valueEnum","render","renderText","mode","plain","dataIndex","request","params","editable"],Jt=["request","columns","params","dataSource","onDataSourceChange","formProps","editable","loading","onLoadingChange","actionRef","onRequestError"],Ut=function(t,a){var n=t.dataIndex;if(n){var r=Array.isArray(n)?Ve(a,n):a[n];if(r!==void 0||r!==null)return r}return t.children},Yt=function(t){var a=t.valueEnum,n=t.action,r=t.index,i=t.text,s=t.entity,g=t.mode,o=t.render,f=t.editableUtils,b=t.valueType,I=t.plain,S=t.dataIndex,w=t.request,L=t.renderFormItem,C=t.params,u=xe.useFormInstance(),v={text:i,valueEnum:a,mode:g||"read",proFieldProps:{render:o?function(){return o==null?void 0:o(i,s,r,n,m(m({},t),{},{type:"descriptions"}))}:void 0},ignoreFormItem:!0,valueType:b,request:w,params:C,plain:I};if(g==="read"||!g||b==="option"){var p=k(t.fieldProps,void 0,m(m({},t),{},{rowKey:S,isEditable:!1}));return l(ee,m(m({name:S},v),{},{fieldProps:p}))}var $=function(){var E,y=k(t.formItemProps,u,m(m({},t),{},{rowKey:S,isEditable:!0})),D=k(t.fieldProps,u,m(m({},t),{},{rowKey:S,isEditable:!0})),O=L?L==null?void 0:L(m(m({},t),{},{type:"descriptions"}),{isEditable:!0,recordKey:S,record:u.getFieldValue([S].flat(1)),defaultRender:function(){return l(ee,m(m({},v),{},{fieldProps:D}))},type:"descriptions"},u):void 0;return P(F,{style:{alignItems:"baseline"},children:[l(Qe,m(m({name:S},y),{},{style:m({margin:0},(y==null?void 0:y.style)||{}),initialValue:i||(y==null?void 0:y.initialValue),children:O||l(ee,m(m({},v),{},{proFieldProps:m({},v.proFieldProps),fieldProps:D}))})),f==null||(E=f.actionRender)===null||E===void 0?void 0:E.call(f,S||r,{cancelText:l(Je,{}),saveText:l(Ue,{}),deleteText:!1})]})};return l("div",{style:{marginTop:-5,marginBottom:-5,marginLeft:0,marginRight:0},children:$()})},Zt=function(t,a,n,r){var i,s=[],g=t==null||(i=t.map)===null||i===void 0?void 0:i.call(t,function(o,f){var b,I;if(le.isValidElement(o))return o;o.valueEnum,o.render;var S=o.renderText,w=o.mode;o.plain;var L=o.dataIndex;o.request,o.params;var C=o.editable,u=se(o,Qt),v=(b=Ut(o,a))!==null&&b!==void 0?b:u.children,p=S?S(v,a,f,n):v,$=typeof u.title=="function"?u.title(o,"descriptions",null):u.title,h=typeof u.valueType=="function"?u.valueType(a||{},"descriptions"):u.valueType,E=r==null?void 0:r.isEditable(L||f),y=w||E?"edit":"read",D=r&&y==="read"&&C!==!1&&(C==null?void 0:C(p,a,f))!==!1,O=D?F:le.Fragment,j=y==="edit"?p:_e(p,o,p),c=d.createElement(Q.Item,m(m({},u),{},{key:u.key||((I=u.label)===null||I===void 0?void 0:I.toString())||f,label:($||u.label||u.tooltip||u.tip)&&l($e,{label:$||u.label,tooltip:u.tooltip||u.tip,ellipsis:o.ellipsis})}),P(O,{children:[l(Yt,m(m({},o),{},{dataIndex:o.dataIndex||f,mode:y,text:j,valueType:h,entity:a,index:f,action:n,editableUtils:r})),D&&h!=="option"&&l(qe,{onClick:function(){r==null||r.startEditable(L||f)}})]}));return h==="option"?(s.push(c),null):c}).filter(function(o){return o});return{options:s!=null&&s.length?s:null,children:g}},kt=function(t){return l(Q.Item,m(m({},t),{},{children:t.children}))},ea=function(t){return t.children},ta=function(t){var a,n=t.request,r=t.columns,i=t.params,s=i===void 0?{}:i,g=t.dataSource,o=t.onDataSourceChange,f=t.formProps,b=t.editable,I=t.loading,S=t.onLoadingChange,w=t.actionRef,L=t.onRequestError,C=se(t,Jt),u=d.useContext(We.ConfigContext),v=Vt(q(A().mark(function c(){var B;return A().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:if(!n){z.next=6;break}return z.next=3,n(s);case 3:z.t0=z.sent,z.next=7;break;case 6:z.t0={data:{}};case 7:return B=z.t0,z.abrupt("return",B);case 9:case"end":return z.stop()}},c)})),{onRequestError:L,effects:[Ge(s)],manual:!n,dataSource:g,loading:I,onLoadingChange:S,onDataSourceChange:o}),p=It(m(m({},t.editable),{},{childrenColumnName:void 0,dataSource:v.dataSource,setDataSource:v.setDataSource}));if(d.useEffect(function(){w&&(w.current=m({reload:v.reload},p))},[v,w,p]),v.loading||v.loading===void 0&&n)return l(qt,{type:"descriptions",list:!1,pageHeader:!1});var $=function(){var B=Xe(t.children).filter(Boolean).map(function(T){if(!le.isValidElement(T))return T;var z=T==null?void 0:T.props,J=z.valueEnum,W=z.valueType,U=z.dataIndex,G=z.ellipsis,K=z.copyable,Y=z.request;return!W&&!J&&!U&&!Y&&!G&&!K?T:m(m({},T==null?void 0:T.props),{},{entity:g})});return[].concat(ie(r||[]),ie(B)).filter(function(T){return!T||T!=null&&T.valueType&&["index","indexBorder"].includes(T==null?void 0:T.valueType)?!1:!(T!=null&&T.hideInDescriptions)}).sort(function(T,z){return z.order||T.order?(z.order||0)-(T.order||0):(z.index||0)-(T.index||0)})},h=Zt($(),v.dataSource||{},(w==null?void 0:w.current)||v,b?p:void 0),E=h.options,y=h.children,D=b?xe:ea,O=null;(C.title||C.tooltip||C.tip)&&(O=l($e,{label:C.title,tooltip:C.tooltip||C.tip}));var j=u.getPrefixCls("pro-descriptions");return l(Ke,{children:l(D,m(m({form:(a=t.editable)===null||a===void 0?void 0:a.form,component:!1,submitter:!1},f),{},{onFinish:void 0,children:l(Q,m(m({className:j},C),{},{extra:C.extra?P(F,{children:[E,C.extra]}):E,title:O,children:y}))}),"form")})};ta.Item=kt;export{ta as P};
