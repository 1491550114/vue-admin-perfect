import{g as y,h as m,u as N,i as w,r as t,o as x,j as T,w as s,b as e,k as F,a as n,d as q,E,l as K,m as L,_ as b,c as P,n as R,p as A,f as D,q as G}from"./index.817ea2fb.js";const j="/assets/side-logo.74a8e9c4.png",z=y({__name:"LoginForm",setup(u){const r=m(),f=L(),h=N(),i=m("password"),c=m(!1),V=w({password:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",trigger:"blur"}],username:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:"blur"}]}),a=w({username:"vue-admin-perfect",password:"123456"}),C=()=>{i.value==="password"?i.value="":i.value="password"},_=d=>{!d||d.validate(o=>{if(o)c.value=!0,setTimeout(async()=>{await h.login(a),await f.push({path:"/"}),E({title:K(),message:"\u6B22\u8FCE\u767B\u5F55 Vue Admin Perfect",type:"success",duration:3e3}),c.value=!0},1e3);else return console.log("error submit!"),!1})};return(d,o)=>{const k=t("UserFilled"),v=t("el-icon"),g=t("el-input"),p=t("el-form-item"),S=t("GoodsFilled"),U=t("svg-icon"),I=t("el-button"),$=t("el-form");return x(),T($,{ref_key:"ruleFormRef",ref:r,model:a,rules:V,"label-width":"0"},{default:s(()=>[e(p,{label:"",prop:"username"},{default:s(()=>[e(g,{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",autoComplete:"on",style:{position:"relative"},modelValue:a.username,"onUpdate:modelValue":o[0]||(o[0]=l=>a.username=l),onKeyup:o[1]||(o[1]=F(l=>_(r.value),["enter","native"]))},{prefix:s(()=>[e(v,{class:"el-input__icon"},{default:s(()=>[e(k)]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(p,{label:"",prop:"password"},{default:s(()=>[e(g,{placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",autoComplete:"on",onKeyup:o[2]||(o[2]=F(l=>_(r.value),["enter","native"])),modelValue:a.password,"onUpdate:modelValue":o[3]||(o[3]=l=>a.password=l),type:i.value},{prefix:s(()=>[e(v,{class:"el-input__icon"},{default:s(()=>[e(S)]),_:1})]),suffix:s(()=>[n("div",{class:"show-pwd",onClick:C},[e(U,{"icon-class":i.value==="password"?"eye":"eye-open"},null,8,["icon-class"])])]),_:1},8,["modelValue","type"])]),_:1}),e(p,{style:{width:"100%"}},{default:s(()=>[e(I,{loading:c.value,class:"login-btn",type:"primary",onClick:o[4]||(o[4]=l=>_(r.value))},{default:s(()=>[q("\u767B\u5F55")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model","rules"])}}});const H=b(z,[["__scopeId","data-v-a18e5bc1"]]),B=u=>(A("data-v-0ae0f47c"),u=u(),D(),u),J={class:"login-container"},M={class:"login-box"},O=B(()=>n("div",{class:"login-left"},[n("img",{src:j})],-1)),Q={class:"login-form"},W=B(()=>n("div",{class:"login-title"},[n("img",{class:"icon",src:G,alt:"logo"}),n("h2",{class:"title"},"Vue-Admin-Perfect")],-1)),X=y({__name:"index",setup(u){return(r,f)=>(x(),P("div",J,[n("div",M,[e(R,{class:"login-dark"}),O,n("div",Q,[W,e(H)])])]))}});const Z=b(X,[["__scopeId","data-v-0ae0f47c"]]);export{Z as default};
