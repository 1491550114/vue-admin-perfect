function i(){for(var r="#",t=["1","2","3","4","4","5","6","7","8","9","a","b","c","d","e","f"],n=0;n<6;n++){var e=parseInt(Math.random()*16);r+=t[e]}return r}const c=function(r){let t=new WeakMap;function n(e){if(e==null)return e;if(e instanceof Date)return new Date(e);if(e instanceof RegExp)return new RegExp(e);if(typeof e!="object")return e;if(t.get(e))return t.get(e);let u=new e.constructor;t.set(e,u);for(let a in e)if(Object.prototype.hasOwnProperty.call(e,a)){let f=e[a];u[a]=n(f)}return u}return n(r)};function l(){let t=new Date().getHours();if(t>=6&&t<=10)return"\u65E9\u4E0A\u597D";if(t>=10&&t<=14)return"\u4E2D\u5348\u597D";if(t>=14&&t<=18)return"\u4E0B\u5348\u597D";if(t>=18&&t<=24)return"\u665A\u4E0A\u597D";if(t>=0&&t<=6)return"\u51CC\u6668\u597D"}export{i as a,c as d,l as g};
