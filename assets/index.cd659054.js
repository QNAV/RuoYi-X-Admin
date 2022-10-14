import{w as C,e as c,av as w,j as a,aw as F,ax as g,ay as A,az as v,q as h,aA as x,aB as B,a0 as T,a4 as y,aC as b,aD as j,r as f,$ as I,a2 as d,aE as D,aj as N,O as q,aF as m,c as M}from"./index.43a5fefc.js";import{a as O}from"./index.4cad56ec.js";import{u as P}from"./useMutation.esm.3b5771e3.js";import{u as S}from"./index.570ef295.js";import"./useQuery.esm.ffab827d.js";import"./utils.esm.79e318f9.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,u){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,u),u)}};async function U(e,u){return C("/system/user/profile",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...u||{}})}async function k(e,u){return C("/system/user/profile/updatePwd",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...u||{}})}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,u){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,u),u)}};const L="https://test-ryx-admin-api.p.quicknav.cn/api/sys/profile/update-avatar",z=[{dataIndex:"userName",title:"\u7528\u6237\u540D\u79F0",valueType:"text"},{dataIndex:"deptName",title:"\u6240\u5C5E\u90E8\u95E8",valueType:"text"},{dataIndex:"roleName",title:"\u6240\u5C5E\u89D2\u8272",valueType:"text"},{dataIndex:"createTime",title:"\u521B\u5EFA\u65F6\u95F4",valueType:"text"}],R=[{dataIndex:"nickName",title:"\u7528\u6237\u6635\u79F0",valueType:"text",formItemProps:{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u6635\u79F0"}]}},{dataIndex:"phoneNumber",title:"\u624B\u673A\u53F7\u7801",valueType:"text",fieldProps:{maxLength:11},formItemProps:{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"},{pattern:y,message:"\u624B\u673A\u53F7\u683C\u5F0F\u9519\u8BEF"}]}},{dataIndex:"email",title:"\u90AE\u7BB1",valueType:"text",formItemProps:{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u90AE\u7BB1"},{pattern:b,message:"\u90AE\u7BB1\u683C\u5F0F\u9519\u8BEF"}]}},{dataIndex:"sex",title:"\u6027\u522B",valueType:"radio",valueEnum:j}],W=()=>{var o,r,p;const{data:e,refetch:u}=O(),{mutate:i,mutateAsync:n}=P(U,{onSuccess:()=>{u(),h.success("\u4FDD\u5B58\u6210\u529F")}}),t={onSave:async(s,l)=>{await n({[s]:l[s]})}};return c(w,{align:"middle",children:[a(F,{span:4,children:c("div",{className:"w-[100px] relative m-auto",children:[a(g,{src:(p=(r=(o=e==null?void 0:e.userInfo)==null?void 0:o.user)==null?void 0:r.avatar)!=null?p:"Avatar",size:100}),a(A,{maxCount:1,showUploadList:!1,name:"avatarfile",accept:"image/jpeg,image/png",action:L,headers:{Authorization:v()},onChange:s=>{if(s.file.status!=="done")return;const{code:l,msg:E}=s.file.response;if(l!==200){h.error(E);return}i({avatar:s.file.response.data})},children:a(g,{icon:a(x,{}),className:"absolute bottom-0 right-0 bg-blue-500 cursor-pointer"})})]})}),c(F,{span:20,children:[a(B,{columns:z,dataSource:{userName:e==null?void 0:e.userInfo.user.userName,createTime:e==null?void 0:e.userInfo.user.createTime,deptName:e==null?void 0:e.userInfo.user.dept.deptName,roleName:e==null?void 0:e.userInfo.user.roles.map(s=>s.roleName).join("/")}}),a(T,{}),a(B,{columns:R,dataSource:e==null?void 0:e.userInfo.user,editable:t})]})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,u){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,u),u)}};const K=()=>{const e=f.exports.useRef(),u=S(),{mutate:i,isLoading:n}=P(async()=>{var o;const t=await((o=e==null?void 0:e.current)==null?void 0:o.validateFields());t!==void 0&&await k(t)},{onSuccess:()=>{h.success("\u5BC6\u7801\u4FEE\u6539\u6210\u529F\uFF0C\u5373\u5C06\u81EA\u52A8\u9000\u51FA\u767B\u5F55\u5E76\u8DF3\u8F6C\u81F3\u767B\u5F55\u9875\u9762");const t=setTimeout(()=>{u(),clearTimeout(t)},1500)}});return c(I,{formRef:e,submitter:!1,children:[a(d.Password,{allowClear:!0,name:"oldPassword",label:"\u65E7\u5BC6\u7801",rules:[{required:!0}],width:"md"}),a(d.Password,{allowClear:!0,name:"newPassword",label:"\u65B0\u5BC6\u7801",width:"md",rules:[{required:!0},{pattern:D,message:"\u957F\u5EA6\u57286-20\u4E4B\u95F4\uFF0C\u53EA\u80FD\u5305\u542B\u5B57\u6BCD\u3001\u6570\u5B57\u548C\u4E0B\u5212\u7EBF"},({getFieldValue:t})=>({validator(o,r){return!r||r!==t("oldPassword")?Promise.resolve():Promise.reject(new Error("\u65B0\u65E7\u5BC6\u7801\u4E0D\u80FD\u76F8\u540C"))}})]}),a(d.Password,{allowClear:!0,name:"confirmPassword",label:"\u786E\u8BA4\u5BC6\u7801",width:"md",rules:[{required:!0},({getFieldValue:t})=>({validator(o,r){return!r||t("newPassword")===r?Promise.resolve():Promise.reject(new Error("\u4E24\u6B21\u5BC6\u7801\u8F93\u5165\u4E0D\u4E00\u81F4"))}})]}),a(N,{type:"primary",loading:n,onClick:()=>i(),children:"\u66F4\u65B0\u5BC6\u7801"})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,u){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,u),u)}};const V=()=>{const[e,u]=f.exports.useState("PASSWORD");return a(q,{title:"\u4E2A\u4EBA\u4E2D\u5FC3",children:c(m,{ghost:!0,direction:"column",gutter:[0,16],children:[a(m,{children:a(W,{})}),a(m,{children:a(M,{activeKey:e,onChange:i=>u(i),items:[{label:"\u5B89\u5168\u8BBE\u7F6E",key:"PASSWORD",children:a(K,{})}]})})]})})};export{V as default};
