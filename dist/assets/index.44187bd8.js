import{g as F,h as f,i as W,r as o,o as d,c as k,b as l,w as e,y as M,F as U,D as Y,G as O,n as B,q as j,H as q,a as y,e as h,t as z,_ as E,s as x,M as G,p as J,f as L}from"./index.e2b9ecec.js";const T={class:"advancedForm"},K={class:"search-btn"},P=F({__name:"index",props:{labelWidth:{default:"100px"},gutterWidth:{type:Number,default:24},showRow:{type:Number,default:1},columns:{type:Array,default:()=>[]},byHeight:{type:Boolean,default:!1}},emits:["submit","reset"],setup(a,{emit:i}){const b=a,m=f(),u=f(!1),n=W({});for(let s of b.columns)n[s.name]=null;const r=()=>{i("submit",n)},p=s=>{if(console.log("formEl",s),!s)return;s.resetFields(),Object.keys(n).forEach(_=>{n[_]=null}),i("reset",n)};return(s,c)=>{const _=o("el-input"),g=o("el-form-item"),A=o("el-date-picker"),S=o("el-col"),D=o("el-row"),N=o("el-form"),v=o("el-button"),R=o("arrow-down"),$=o("arrow-up"),H=o("el-icon");return d(),k("div",T,[l(N,{ref_key:"ruleFormRef",ref:m,inline:!0,"label-position":"right",model:n,class:"form-inline"},{default:e(()=>[l(D,{class:M({"not-show":a.byHeight&&!u.value}),gutter:a.gutterWidth},{default:e(()=>[(d(!0),k(U,null,Y(a.columns,(t,I)=>O((d(),B(S,{span:t.span,key:t.name},{default:e(()=>[t.type==="input"?(d(),B(g,{key:0,label:t.title,"label-width":a.labelWidth},{default:e(()=>[l(_,{clearable:"",modelValue:n[t.name],"onUpdate:modelValue":w=>n[t.name]=w,placeholder:t.placeholder},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1032,["label","label-width"])):t.type==="date"?(d(),B(g,{key:1,label:t.title,"label-width":a.labelWidth},{default:e(()=>[l(A,{"value-format":"YYYY-MM-DD",modelValue:n[t.name],"onUpdate:modelValue":w=>n[t.name]=w,type:"date",placeholder:t.placeholder},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1032,["label","label-width"])):j("",!0)]),_:2},1032,["span"])),[[q,a.byHeight?!0:I<a.showRow*3||u.value]])),128))]),_:1},8,["class","gutter"])]),_:1},8,["model"]),y("div",K,[l(v,{type:"primary",onClick:r},{default:e(()=>[h("\u67E5\u8BE2")]),_:1}),l(v,{onClick:c[0]||(c[0]=t=>p(m.value))},{default:e(()=>[h("\u91CD\u7F6E")]),_:1}),l(v,{link:"",type:"primary",onClick:c[1]||(c[1]=t=>u.value=!u.value)},{default:e(()=>[h(z(u.value?"\u5408\u5E76":"\u5C55\u5F00"),1),l(H,null,{default:e(()=>[u.value?(d(),B($,{key:1})):(d(),B(R,{key:0}))]),_:1})]),_:1})])])}}});const C=E(P,[["__scopeId","data-v-f8926d61"]]),V=a=>(J("data-v-3ab87047"),a=a(),L(),a),Q={class:"advancedForm"},X={class:"card-header"},Z=V(()=>y("span",{style:{"margin-right":"100px"}},"\u6536\u7F29\u8868\u5355 \u901A\u8FC7v-show\u6765\u63A7\u5236\u663E\u9690\u85CF",-1)),ee=V(()=>y("div",{class:"card-header"},[y("span",null,"\u6536\u7F29\u8868\u5355 \u901A\u8FC7\u9AD8\u5EA6\u6765\u63A7\u5236\u663E\u9690\u85CF")],-1)),te=F({__name:"index",setup(a){let i=[{type:"input",name:"name1",title:"\u5B57\u6BB51",placeholder:"\u5B57\u6BB51",span:8},{type:"date",name:"name2",title:"\u5B57\u6BB52",placeholder:"\u5B57\u6BB52",span:8},{type:"input",name:"name3",title:"\u5B57\u6BB53",placeholder:"\u5B57\u6BB53",span:8},{type:"input",name:"name4",title:"\u5B57\u6BB54",placeholder:"\u5B57\u6BB54",span:8},{type:"input",name:"name5",title:"\u5B57\u6BB55",placeholder:"\u5B57\u6BB55",span:8},{type:"input",name:"name6",title:"\u5B57\u6BB56",placeholder:"\u5B57\u6BB56",span:8},{type:"input",name:"name7",title:"\u5B57\u6BB57",placeholder:"\u5B57\u6BB57",span:8},{type:"input",name:"name8",title:"\u5B57\u6BB58",placeholder:"\u5B57\u6BB58",span:8},{type:"input",name:"name9",title:"\u5B57\u6BB59",placeholder:"\u5B57\u6BB59",span:8}];const b=f({}),m=f(1),u=r=>{b.value=r,G.success(JSON.stringify(r))},n=r=>{m.value=r};return(r,p)=>{const s=o("el-button"),c=o("el-card");return d(),k("div",Q,[l(c,{class:"box-card"},{header:e(()=>[y("div",X,[Z,l(s,{onClick:p[0]||(p[0]=_=>n(2)),type:"primary",link:""},{default:e(()=>[h("\u663E\u793A\u4E24\u884C")]),_:1}),l(s,{onClick:p[1]||(p[1]=_=>n(1)),type:"primary",link:""},{default:e(()=>[h("\u663E\u793A\u4E00\u884C")]),_:1})])]),default:e(()=>[l(C,{columns:x(i),onSubmit:u,showRow:m.value},null,8,["columns","showRow"])]),_:1}),l(c,{class:"box-card",style:{"margin-top":"20px"}},{header:e(()=>[ee]),default:e(()=>[l(C,{columns:x(i),onSubmit:u,byHeight:!0},null,8,["columns"])]),_:1})])}}});const ae=E(te,[["__scopeId","data-v-3ab87047"]]);export{ae as default};
