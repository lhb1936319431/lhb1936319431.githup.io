import{d,z as a,A as w,o as s,e as l,i as t,B as C,C as b,n as k,D as _,l as g,j as V,q as A,f as D,E as T,G as E}from"./app-V5tJFAYy.js";import{r as m}from"./ValaxyMain.vue_vue_type_style_index_0_lang-CD8rJE3V.js";import{u as B}from"./decrypt-wAoFlhVk.js";const I={key:0,"w-full":"","pt-14":"","pb-10":""},N={class:"decrypt-password-container w-full sm:w-1/2","flex-center":"","m-auto":"",relative:""},P={key:0,class:"-bottom-6",absolute:"","text-xs":"",op:"50"},W={key:1},K=d({__name:"ValaxyDecrypt",props:{encryptedContent:{}},setup(v){const f=v,n=a(""),r=a(""),i=a(!1),{decrypt:y}=B();async function u(){const o=f.encryptedContent;if(o)try{const e=await y(n.value,o);r.value=e||"",setTimeout(()=>{m()},16)}catch{i.value=!0}}function h(){r.value="",n.value="",setTimeout(()=>{m()},16)}const x=d({name:"ValaxyDeprecatedContent",props:{html:String},render(){const o=`<div>${this.html}</div>`;return T({setup:()=>({frontmatter:E()}),template:o})}}),p=a(!1);return w(()=>{location.protocol!=="https:"&&(p.value=!0)}),(o,e)=>(s(),l("div",null,[r.value?(s(),l("div",W,[A(D(x),{html:r.value},null,8,["html"]),t("div",{"w-full":"","text-center":"","mt-8":""},[t("button",{"m-auto":"",class:"btn","font-bold":"",onClick:h}," Encrypt Again ")])])):(s(),l("div",I,[t("div",N,[C(t("input",{"onUpdate:modelValue":e[0]||(e[0]=c=>n.value=c),"w-full":"",border:"~ solid dark:dark-100","pl-5":"","pr-11":"","py-3":"","rounded-full":"","hover:shadow":"",transition:"",type:"password",placeholder:"Enter password",class:k(i.value&&"border-red"),onInput:e[1]||(e[1]=c=>i.value=!1),onKeyup:_(u,["enter"])},null,34),[[b,n.value]]),t("div",{"cursor-pointer":"",absolute:"","text-2xl":"","i-ri-arrow-right-circle-line":"","right-3":"","text-gray":"","hover:text-black":"",onClick:u}),p.value?(s(),l("div",P,e[2]||(e[2]=[t("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API",target:"_blank"},[t("span",null,"Web Crypto API")],-1),g(" Only works in HTTPS ")]))):V("v-if",!0)])]))]))}});export{K as _};
