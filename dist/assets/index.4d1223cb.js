import{T as D,g as T,r as j,o as x,j as L,w as g,a as A,b as m,d as C,s as I,q as P}from"./index.817ea2fb.js";var B={exports:{}};(function(w,v){(function(r,t){w.exports=t()})(window,function(){return function(E){var r={};function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return E[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=E,t.c=r,t.d=function(n,i,s){t.o(n,i)||Object.defineProperty(n,i,{enumerable:!0,get:s})},t.r=function(n){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,i){if(i&1&&(n=t(n)),i&8||i&4&&typeof n=="object"&&n&&n.__esModule)return n;var s=Object.create(null);if(t.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:n}),i&2&&typeof n!="string")for(var f in n)t.d(s,f,function(l){return n[l]}.bind(null,f));return s},t.n=function(n){var i=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(i,"a",i),i},t.o=function(n,i){return Object.prototype.hasOwnProperty.call(n,i)},t.p="",t(t.s=0)}({"./src/index.js":function(E,r,t){t.r(r),t("./src/sass/index.scss");var n=t("./src/js/init.js"),i=n.default.init;typeof window<"u"&&(window.printJS=i),r.default=i},"./src/js/browser.js":function(E,r,t){t.r(r);var n={isFirefox:function(){return typeof InstallTrigger<"u"},isIE:function(){return navigator.userAgent.indexOf("MSIE")!==-1||!!document.documentMode},isEdge:function(){return!n.isIE()&&!!window.StyleMedia},isChrome:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window;return!!s.chrome},isSafari:function(){return Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0||navigator.userAgent.toLowerCase().indexOf("safari")!==-1},isIOSChrome:function(){return navigator.userAgent.toLowerCase().indexOf("crios")!==-1}};r.default=n},"./src/js/functions.js":function(E,r,t){t.r(r),t.d(r,"addWrapper",function(){return f}),t.d(r,"capitalizePrint",function(){return l}),t.d(r,"collectStyles",function(){return d}),t.d(r,"addHeader",function(){return o}),t.d(r,"cleanUp",function(){return p}),t.d(r,"isRawHTML",function(){return y});var n=t("./src/js/modal.js"),i=t("./src/js/browser.js");function s(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?s=function(c){return typeof c}:s=function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},s(e)}function f(e,a){var c="font-family:"+a.font+" !important; font-size: "+a.font_size+" !important; width:100%;";return'<div style="'+c+'">'+e+"</div>"}function l(e){return e.charAt(0).toUpperCase()+e.slice(1)}function d(e,a){for(var c=document.defaultView||window,h="",b=c.getComputedStyle(e,""),F=0;F<b.length;F++)(a.targetStyles.indexOf("*")!==-1||a.targetStyle.indexOf(b[F])!==-1||u(a.targetStyles,b[F]))&&b.getPropertyValue(b[F])&&(h+=b[F]+":"+b.getPropertyValue(b[F])+";");return h+="max-width: "+a.maxWidth+"px !important; font-size: "+a.font_size+" !important;",h}function u(e,a){for(var c=0;c<e.length;c++)if(s(a)==="object"&&a.indexOf(e[c])!==-1)return!0;return!1}function o(e,a){var c=document.createElement("div");if(y(a.header))c.innerHTML=a.header;else{var h=document.createElement("h1"),b=document.createTextNode(a.header);h.appendChild(b),h.setAttribute("style",a.headerStyle),c.appendChild(h)}e.insertBefore(c,e.childNodes[0])}function p(e){e.showModal&&n.default.close(),e.onLoadingEnd&&e.onLoadingEnd(),(e.showModal||e.onLoadingStart)&&window.URL.revokeObjectURL(e.printable);var a="mouseover";(i.default.isChrome()||i.default.isFirefox())&&(a="focus");var c=function h(){window.removeEventListener(a,h),e.onPrintDialogClose();var b=document.getElementById(e.frameId);b&&b.remove()};window.addEventListener(a,c)}function y(e){var a=new RegExp("<([A-Za-z][A-Za-z0-9]*)\\b[^>]*>(.*?)</\\1>");return a.test(e)}},"./src/js/html.js":function(E,r,t){t.r(r);var n=t("./src/js/functions.js"),i=t("./src/js/print.js");function s(d){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?s=function(o){return typeof o}:s=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},s(d)}r.default={print:function(u,o){var p=l(u.printable)?u.printable:document.getElementById(u.printable);if(!p){window.console.error("Invalid HTML element id: "+u.printable);return}u.printableElement=f(p,u),u.header&&Object(n.addHeader)(u.printableElement,u),i.default.send(u,o)}};function f(d,u){for(var o=d.cloneNode(),p=Array.prototype.slice.call(d.childNodes),y=0;y<p.length;y++)if(u.ignoreElements.indexOf(p[y].id)===-1){var e=f(p[y],u);o.appendChild(e)}switch(u.scanStyles&&d.nodeType===1&&o.setAttribute("style",Object(n.collectStyles)(d,u)),d.tagName){case"SELECT":o.value=d.value;break;case"CANVAS":o.getContext("2d").drawImage(d,0,0);break}return o}function l(d){return s(d)==="object"&&d&&(d instanceof HTMLElement||d.nodeType===1)}},"./src/js/image.js":function(E,r,t){t.r(r);var n=t("./src/js/functions.js"),i=t("./src/js/print.js"),s=t("./src/js/browser.js");r.default={print:function(l,d){l.printable.constructor!==Array&&(l.printable=[l.printable]),l.printableElement=document.createElement("div"),l.printable.forEach(function(u){var o=document.createElement("img");if(o.setAttribute("style",l.imageStyle),o.src=u,s.default.isFirefox()){var p=o.src;o.src=p}var y=document.createElement("div");y.appendChild(o),l.printableElement.appendChild(y)}),l.header&&Object(n.addHeader)(l.printableElement,l),i.default.send(l,d)}}},"./src/js/init.js":function(E,r,t){t.r(r);var n=t("./src/js/browser.js"),i=t("./src/js/modal.js"),s=t("./src/js/pdf.js"),f=t("./src/js/html.js"),l=t("./src/js/raw-html.js"),d=t("./src/js/image.js"),u=t("./src/js/json.js");function o(y){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?o=function(a){return typeof a}:o=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},o(y)}var p=["pdf","html","image","json","raw-html"];r.default={init:function(){var e={printable:null,fallbackPrintable:null,type:"pdf",header:null,headerStyle:"font-weight: 300;",maxWidth:800,properties:null,gridHeaderStyle:"font-weight: bold; padding: 5px; border: 1px solid #dddddd;",gridStyle:"border: 1px solid lightgray; margin-bottom: -1px;",showModal:!1,onError:function(O){throw O},onLoadingStart:null,onLoadingEnd:null,onPrintDialogClose:function(){},onIncompatibleBrowser:function(){},modalMessage:"Retrieving Document...",frameId:"printJS",printableElement:null,documentTitle:"Document",targetStyle:["clear","display","width","min-width","height","min-height","max-height"],targetStyles:["border","box","break","text-decoration"],ignoreElements:[],repeatTableHeader:!0,css:null,style:null,scanStyles:!0,base64:!1,onPdfOpen:null,font:"TimesNewRoman",font_size:"12pt",honorMarginPadding:!0,honorColor:!1,imageStyle:"max-width: 100%;"},a=arguments[0];if(a===void 0)throw new Error("printJS expects at least 1 attribute.");switch(o(a)){case"string":e.printable=encodeURI(a),e.fallbackPrintable=e.printable,e.type=arguments[1]||e.type;break;case"object":e.printable=a.printable,e.fallbackPrintable=typeof a.fallbackPrintable<"u"?a.fallbackPrintable:e.printable,e.fallbackPrintable=e.base64?"data:application/pdf;base64,".concat(e.fallbackPrintable):e.fallbackPrintable;for(var c in e)c==="printable"||c==="fallbackPrintable"||(e[c]=typeof a[c]<"u"?a[c]:e[c]);break;default:throw new Error('Unexpected argument type! Expected "string" or "object", got '+o(a))}if(!e.printable)throw new Error("Missing printable information.");if(!e.type||typeof e.type!="string"||p.indexOf(e.type.toLowerCase())===-1)throw new Error("Invalid print type. Available types are: pdf, html, image and json.");e.showModal&&i.default.show(e),e.onLoadingStart&&e.onLoadingStart();var h=document.getElementById(e.frameId);h&&h.parentNode.removeChild(h);var b=document.createElement("iframe");switch(n.default.isFirefox()?b.setAttribute("style","width: 1px; height: 100px; position: fixed; left: 0; top: 0; opacity: 0; border-width: 0; margin: 0; padding: 0"):b.setAttribute("style","visibility: hidden; height: 0; width: 0; position: absolute; border: 0"),b.setAttribute("id",e.frameId),e.type!=="pdf"&&(b.srcdoc="<html><head><title>"+e.documentTitle+"</title>",e.css&&(Array.isArray(e.css)||(e.css=[e.css]),e.css.forEach(function(S){b.srcdoc+='<link rel="stylesheet" href="'+S+'">'})),b.srcdoc+="</head><body></body></html>"),e.type){case"pdf":if(n.default.isIE())try{console.info("Print.js doesn't support PDF printing in Internet Explorer.");var F=window.open(e.fallbackPrintable,"_blank");F.focus(),e.onIncompatibleBrowser()}catch(S){e.onError(S)}finally{e.showModal&&i.default.close(),e.onLoadingEnd&&e.onLoadingEnd()}else s.default.print(e,b);break;case"image":d.default.print(e,b);break;case"html":f.default.print(e,b);break;case"raw-html":l.default.print(e,b);break;case"json":u.default.print(e,b);break}}}},"./src/js/json.js":function(E,r,t){t.r(r);var n=t("./src/js/functions.js"),i=t("./src/js/print.js");function s(l){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?s=function(u){return typeof u}:s=function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},s(l)}r.default={print:function(d,u){if(s(d.printable)!=="object")throw new Error("Invalid javascript data object (JSON).");if(typeof d.repeatTableHeader!="boolean")throw new Error("Invalid value for repeatTableHeader attribute (JSON).");if(!d.properties||!Array.isArray(d.properties))throw new Error("Invalid properties array for your JSON data.");d.properties=d.properties.map(function(o){return{field:s(o)==="object"?o.field:o,displayName:s(o)==="object"?o.displayName:o,columnSize:s(o)==="object"&&o.columnSize?o.columnSize+";":100/d.properties.length+"%;"}}),d.printableElement=document.createElement("div"),d.header&&Object(n.addHeader)(d.printableElement,d),d.printableElement.innerHTML+=f(d),i.default.send(d,u)}};function f(l){var d=l.printable,u=l.properties,o='<table style="border-collapse: collapse; width: 100%;">';l.repeatTableHeader&&(o+="<thead>"),o+="<tr>";for(var p=0;p<u.length;p++)o+='<th style="width:'+u[p].columnSize+";"+l.gridHeaderStyle+'">'+Object(n.capitalizePrint)(u[p].displayName)+"</th>";o+="</tr>",l.repeatTableHeader&&(o+="</thead>"),o+="<tbody>";for(var y=0;y<d.length;y++){o+="<tr>";for(var e=0;e<u.length;e++){var a=d[y],c=u[e].field.split(".");if(c.length>1)for(var h=0;h<c.length;h++)a=a[c[h]];else a=a[u[e].field];o+='<td style="width:'+u[e].columnSize+l.gridStyle+'">'+a+"</td>"}o+="</tr>"}return o+="</tbody></table>",o}},"./src/js/modal.js":function(E,r,t){t.r(r);var n={show:function(s){var f="font-family:sans-serif; display:table; text-align:center; font-weight:300; font-size:30px; left:0; top:0;position:fixed; z-index: 9990;color: #0460B5; width: 100%; height: 100%; background-color:rgba(255,255,255,.9);transition: opacity .3s ease;",l=document.createElement("div");l.setAttribute("style",f),l.setAttribute("id","printJS-Modal");var d=document.createElement("div");d.setAttribute("style","display:table-cell; vertical-align:middle; padding-bottom:100px;");var u=document.createElement("div");u.setAttribute("class","printClose"),u.setAttribute("id","printClose"),d.appendChild(u);var o=document.createElement("span");o.setAttribute("class","printSpinner"),d.appendChild(o);var p=document.createTextNode(s.modalMessage);d.appendChild(p),l.appendChild(d),document.getElementsByTagName("body")[0].appendChild(l),document.getElementById("printClose").addEventListener("click",function(){n.close()})},close:function(){var s=document.getElementById("printJS-Modal");s&&s.parentNode.removeChild(s)}};r.default=n},"./src/js/pdf.js":function(E,r,t){t.r(r);var n=t("./src/js/print.js"),i=t("./src/js/functions.js");r.default={print:function(l,d){if(l.base64){var u=Uint8Array.from(atob(l.printable),function(p){return p.charCodeAt(0)});s(l,d,u);return}l.printable=/^(blob|http|\/\/)/i.test(l.printable)?l.printable:window.location.origin+(l.printable.charAt(0)!=="/"?"/"+l.printable:l.printable);var o=new window.XMLHttpRequest;o.responseType="arraybuffer",o.addEventListener("error",function(){Object(i.cleanUp)(l),l.onError(o.statusText,o)}),o.addEventListener("load",function(){if([200,201].indexOf(o.status)===-1){Object(i.cleanUp)(l),l.onError(o.statusText,o);return}s(l,d,o.response)}),o.open("GET",l.printable,!0),o.send()}};function s(f,l,d){var u=new window.Blob([d],{type:"application/pdf"});u=window.URL.createObjectURL(u),l.setAttribute("src",u),n.default.send(f,l)}},"./src/js/print.js":function(E,r,t){t.r(r);var n=t("./src/js/browser.js"),i=t("./src/js/functions.js"),s={send:function(o,p){document.getElementsByTagName("body")[0].appendChild(p);var y=document.getElementById(o.frameId);y.onload=function(){if(o.type==="pdf"){n.default.isFirefox()?setTimeout(function(){return f(y,o)},1e3):f(y,o);return}var e=y.contentWindow||y.contentDocument;if(e.document&&(e=e.document),e.body.appendChild(o.printableElement),o.type!=="pdf"&&o.style){var a=document.createElement("style");a.innerHTML=o.style,e.head.appendChild(a)}var c=e.getElementsByTagName("img");c.length>0?l(Array.from(c)).then(function(){return f(y,o)}):f(y,o)}}};function f(u,o){try{if(u.focus(),n.default.isEdge()||n.default.isIE())try{u.contentWindow.document.execCommand("print",!1,null)}catch{u.contentWindow.print()}else u.contentWindow.print()}catch(p){o.onError(p)}finally{n.default.isFirefox()&&(u.style.visibility="hidden",u.style.left="-1px"),Object(i.cleanUp)(o)}}function l(u){var o=u.map(function(p){if(p.src&&p.src!==window.location.href)return d(p)});return Promise.all(o)}function d(u){return new Promise(function(o){var p=function y(){!u||typeof u.naturalWidth>"u"||u.naturalWidth===0||!u.complete?setTimeout(y,500):o()};p()})}r.default=s},"./src/js/raw-html.js":function(E,r,t){t.r(r);var n=t("./src/js/print.js");r.default={print:function(s,f){s.printableElement=document.createElement("div"),s.printableElement.setAttribute("style","width:100%"),s.printableElement.innerHTML=s.printable,n.default.send(s,f)}}},"./src/sass/index.scss":function(E,r,t){},0:function(E,r,t){E.exports=t("./src/index.js")}}).default})})(B);const M=D(B.exports);(function(w,v){var E=function(r,t){if(!(this instanceof E))return new E(r,t);this.options=this.extend({noPrint:".no-print",onStart:function(){},onEnd:function(){}},t),typeof r=="string"?this.dom=v.querySelector(r):this.dom=r,this.init()};E.prototype={init:function(){var r=this.getStyle()+this.getHtml();this.writeIframe(r)},extend:function(r,t){for(var n in t)r[n]=t[n];return r},getStyle:function(){for(var r="",t=v.querySelectorAll("style,link"),n=0;n<t.length;n++)r+=t[n].outerHTML;return r+="<style>"+(this.options.noPrint?this.options.noPrint:".no-print")+"{display:none;}</style>",r},getHtml:function(){var r=v.querySelectorAll("input"),t=v.querySelectorAll("textarea"),n=v.querySelectorAll("select");for(var i in r)r[i].type=="checkbox"||r[i].type=="radio"?r[i].checked==!0?r[i].setAttribute("checked","checked"):r[i].removeAttribute("checked"):r[i].type=="text"&&r[i].setAttribute("value",r[i].value);for(var s in t)t[s].type=="textarea"&&(t[s].innerHTML=t[s].value);for(var f in n)if(n[f].type=="select-one"){var l=n[f].children;for(var d in l)l[d].tagName=="OPTION"&&(l[d].selected==!0?l[d].setAttribute("selected","selected"):l[d].removeAttribute("selected"))}return this.dom.outerHTML},writeIframe:function(r){var t,n,i=v.createElement("iframe"),s=v.body.appendChild(i);i.id="myIframe",i.style="position:absolute;width:0;height:0;top:-10px;left:-10px;",t=s.contentWindow||s.contentDocument,n=s.contentDocument||s.contentWindow.document,n.open(),n.write(r),n.close(),this.toPrint(t,function(){v.body.removeChild(i)})},toPrint:function(r,t){var n=this;r.onload=function(){try{setTimeout(function(){r.focus(),typeof n.options.onStart=="function"&&n.options.onStart(),r.document.execCommand("print",!1,null)||r.print(),typeof n.options.onEnd=="function"&&n.options.onEnd(),r.close(),t&&t()})}catch(i){console.log("err",i)}}}},w.Print=E})(window,document);const U={id:"wrap",style:{"margin-bottom":"20px"}},_={style:{"margin-top":"20px"}},R=["src"],N={id:"tableBox"},W=A("a",{href:"https://github.com/crabbly/Print.js",target:"_blank"},"https://github.com/crabbly/Print.js",-1),K=T({__name:"index",setup(w){const v=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}],E=r=>{switch(r){case 1:M({type:"image",printable:[P],documentTitle:"\u6253\u5370\u56FE\u7247"});break;case 2:M({type:"json",documentTitle:"\u6253\u5370\u8868\u683C",printable:v,gridStyle:"text-align: center;border: 1px solid lightgray;font-size: 12px;",properties:[{field:"date",displayName:"\u65E5\u671F"},{field:"name",displayName:"\u540D\u5B57"},{field:"address",displayName:"\u5730\u5740"}]});break;case 3:Print("#wrap",{onStart:function(){console.log("onStart",new Date)},onEnd:function(){console.log("onEnd",new Date)}});break}};return(r,t)=>{const n=j("el-button"),i=j("el-table-column"),s=j("el-table"),f=j("el-descriptions-item"),l=j("el-descriptions"),d=j("u-container-layout");return x(),L(d,null,{default:g(()=>[A("div",U,[A("div",null,[m(n,{type:"primary",onClick:t[0]||(t[0]=u=>E(1))},{default:g(()=>[C("\u6253\u5370\u56FE\u7247")]),_:1}),m(n,{type:"primary",onClick:t[1]||(t[1]=u=>E(2))},{default:g(()=>[C("\u6253\u5370Json\u6570\u636E")]),_:1}),m(n,{type:"primary",onClick:t[2]||(t[2]=u=>E(3))},{default:g(()=>[C("\u6253\u5370HTML")]),_:1})]),A("div",_,[A("img",{src:I(P),style:{width:"200px"}},null,8,R)]),A("div",N,[m(s,{data:v,style:{width:"100%"}},{default:g(()=>[m(i,{prop:"date",label:"\u65E5\u671F",width:"180"}),m(i,{prop:"name",label:"\u540D\u5B57",width:"180"}),m(i,{prop:"address",label:"\u5730\u5740"})]),_:1})])]),m(l,{title:"\u914D\u7F6E\u9879 ",column:1,border:"",class:"descriptions"},{default:g(()=>[m(f,{label:"\u5B98\u65B9\u6587\u6863"},{default:g(()=>[W]),_:1}),m(f,{label:"printable"},{default:g(()=>[C(" \u6587\u6863\u6765\u6E90\uFF1Apdf\u6216\u56FE\u50CF\u7684url\uFF0Chtml\u5143\u7D20\u7684id\u6216json\u6570\u636E\u7684\u5BF9\u8C61 ")]),_:1}),m(f,{label:"type"},{default:g(()=>[C(" \u53EF\u6253\u5370\u7C7B\u578B\u3002\u53EF\u7528\u7684\u6253\u5370\u9009\u9879\u5305\u62EC\uFF1Apdf\uFF0Chtml\uFF0Cimage\uFF0Cjson\u548Craw-html\u3002 ")]),_:1}),m(f,{label:"documentTitle"},{default:g(()=>[C(" \u6253\u5370html\uFF0Cimage\u6216json\u65F6\uFF0C\u5B83\u5C06\u663E\u793A\u4E3A\u6587\u6863\u6807\u9898\u3002\u5982\u679C\u7528\u6237\u5C1D\u8BD5\u5C06\u6253\u5370\u4F5C\u4E1A\u4FDD\u5B58\u4E3Apdf\u6587\u4EF6\uFF0C\u5B83\u4E5F\u5C06\u662F\u6587\u6863\u7684\u540D\u79F0\u3002 ")]),_:1}),m(f,{label:"scanStyles"},{default:g(()=>[C("\u8BBE\u7F6E\u4E3Afalse\u65F6\uFF0C\u5E93\u4E0D\u4F1A\u5904\u7406\u5E94\u7528\u4E8E\u6B63\u5728\u6253\u5370\u7684html\u7684\u6837\u5F0F\u3002\u4F7F\u7528css\u53C2\u6570\u65F6\u5F88\u6709\u7528 ")]),_:1}),m(f,{label:"targetStyle"},{default:g(()=>[C(" \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5728\u6253\u5370HTML\u5143\u7D20\u65F6\uFF0C\u5E93\u4EC5\u5904\u7406\u67D0\u4E9B\u6837\u5F0F\u3002\u6B64\u9009\u9879\u5141\u8BB8\u60A8\u4F20\u9012\u8981\u5904\u7406\u7684\u6837\u5F0F\u6570\u7EC4\u3002\u4F8B\u5982\uFF1A['padding-top'\uFF0C'border-bottom'] ")]),_:1}),m(f,{label:"gridHeaderStyle"},{default:g(()=>[C(" \u6253\u5370JSON\u6570\u636E\u65F6\u7F51\u683C\u6807\u9898\u7684\u53EF\u9009\u6837\u5F0F\u3002 ")]),_:1}),m(f,{label:"properties"},{default:g(()=>[C(" \u5728\u6253\u5370JSON\u65F6\u4F7F\u7528\u3002\u8FD9\u4E9B\u662F\u5BF9\u8C61\u5C5E\u6027\u540D\u79F0\u3002 ")]),_:1}),m(f,{label:"honorColor"},{default:g(()=>[C(" \u8981\u4EE5\u5F69\u8272\u6253\u5370\u6587\u672C\uFF0C\u8BF7\u5C06\u6B64\u5C5E\u6027\u8BBE\u7F6E\u4E3Atrue\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6240\u6709\u6587\u672C\u90FD\u5C06\u4EE5\u9ED1\u8272\u6253\u5370\u3002 ")]),_:1}),m(f,{label:"css"},{default:g(()=>[C(" \u8FD9\u5141\u8BB8\u6211\u4EEC\u4F20\u9012\u4E00\u4E2A\u6216\u591A\u4E2A\u5E94\u8BE5\u5E94\u7528\u4E8E\u6B63\u5728\u6253\u5370\u7684html\u7684css\u6587\u4EF6URL\u3002\u503C\u53EF\u4EE5\u662F\u5305\u542B\u5355\u4E2AURL\u7684\u5B57\u7B26\u4E32\uFF0C\u4E5F\u53EF\u4EE5\u662F\u5305\u542B\u591A\u4E2AURL\u7684\u6570\u7EC4\u3002 ")]),_:1})]),_:1})]),_:1})}}});export{K as default};
