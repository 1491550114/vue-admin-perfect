import{g as y,h as g,B as P,i as T,r as o,C as U,o as r,c as f,a as h,b as t,w as a,e as u,G as J,n as v,F as M,t as b,s as j,N as G,M as I,_ as O}from"./index.e2b9ecec.js";const R={class:"app-container"},q={class:"header"},H={class:"footer"},K={key:0,style:{display:"flex","align-items":"center"}},L={style:{width:"100%",display:"flex","justify-content":"center","padding-top":"20px"}},Q=y({name:"inline-table"}),W=y({...Q,setup(X){const C=[];for(let e=0;e<100;e++)C.push({date:"2016-05-02",name:"\u738B\u4E94"+e,price:1+e,province:"\u4E0A\u6D77",admin:"admin",sex:e%2?1:0,checked:!0,id:e+1,img:"https://img1.baidu.com/it/u=300787145,1214060415&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",age:0,city:"\u666E\u9640\u533A",address:`\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 222${e} \u5F04`,zip:200333});const d=g(1),E=e=>{console.log(`${e} items per page`)},x=e=>{console.log(`current page: ${e}`),d.value=e},p=g(C),m=g(!1),F=P(()=>JSON.parse(JSON.stringify(p.value)).splice((d.value-1)*10,10)),k=e=>{e.edit=!1},B=e=>{e.edit=!1},_=T({username:""}),z=()=>{console.log("submit!"),m.value=!0,setTimeout(()=>{m.value=!1},500)},V=e=>{G.confirm("\u4F60\u786E\u5B9A\u8981\u5220\u9664\u5F53\u524D\u9879\u5417?","\u6E29\u99A8\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning",draggable:!0}).then(()=>{p.value=p.value.filter(i=>i.id!==e.id),I.success("\u5220\u9664\u6210\u529F")}).catch(()=>{})};return(e,i)=>{const w=o("el-input"),D=o("el-form-item"),s=o("el-button"),A=o("el-form"),l=o("el-table-column"),$=o("el-table"),N=o("el-pagination"),S=U("loading");return r(),f("div",R,[h("div",q,[t(A,{inline:!0,model:_},{default:a(()=>[t(D,{label:"\u59D3\u540D"},{default:a(()=>[t(w,{modelValue:_.username,"onUpdate:modelValue":i[0]||(i[0]=n=>_.username=n),placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D"},null,8,["modelValue"])]),_:1}),t(D,null,{default:a(()=>[t(s,{type:"primary",onClick:z},{default:a(()=>[u("\u641C\u7D22")]),_:1})]),_:1})]),_:1},8,["model"])]),h("div",H,[J((r(),v($,{data:j(F),style:{width:"100%"},border:!0},{default:a(()=>[t(l,{prop:"id",width:"60",label:"id",align:"center"}),t(l,{prop:"name",label:"\u59D3\u540D","min-width":"200px",align:"center"},{default:a(n=>[n.row.edit?(r(),f("div",K,[t(w,{modelValue:n.row.name,"onUpdate:modelValue":c=>n.row.name=c,size:"small"},null,8,["modelValue","onUpdate:modelValue"]),t(s,{size:"small",icon:"Refresh",type:"warning",onClick:c=>B(n.row)},{default:a(()=>[u(" \u53D6\u6D88 ")]),_:2},1032,["onClick"])])):(r(),f(M,{key:1},[u(b(n.row.name),1)],64))]),_:1}),t(l,{prop:"age",label:"\u5E74\u9F84",align:"center"}),t(l,{prop:"sex",label:"\u6027\u522B",align:"center"},{default:a(n=>[u(b(n.row.sex?"\u7537":"\u5973"),1)]),_:1}),t(l,{prop:"price",label:"\u4EF7\u683C",align:"center"}),t(l,{prop:"admin",label:"\u8D26\u53F7",align:"center"}),t(l,{prop:"address","show-overflow-tooltip":!0,label:"\u5730\u5740",width:"180",align:"center"}),t(l,{prop:"date",label:"\u65E5\u671F",width:"180",align:"center"}),t(l,{prop:"province",label:"\u7701\u4EFD",width:"120",align:"center"}),t(l,{prop:"city",label:"\u57CE\u5E02",align:"center"}),t(l,{prop:"operator",label:"\u64CD\u4F5C",width:"180px",fixed:"right",align:"center"},{default:a(n=>[n.row.edit?(r(),v(s,{key:0,type:"success",size:"small",icon:"CircleCheckFilled",onClick:c=>k(n.row)},{default:a(()=>[u(" \u4FDD\u5B58 ")]),_:2},1032,["onClick"])):(r(),v(s,{key:1,type:"primary",size:"small",icon:"Edit",onClick:c=>n.row.edit=!n.row.edit},{default:a(()=>[u(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),t(s,{type:"danger",size:"small",icon:"Delete",onClick:c=>V(n.row)},{default:a(()=>[u(" \u5220\u9664 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[S,m.value]]),h("div",L,[t(N,{currentPage:d.value,"onUpdate:currentPage":i[1]||(i[1]=n=>d.value=n),"page-size":10,background:"",layout:"total, sizes, prev, pager, next, jumper",total:p.value.length,onSizeChange:E,onCurrentChange:x},null,8,["currentPage","total"])])])])}}});const Z=O(W,[["__scopeId","data-v-0d996483"]]);export{Z as default};
