import{d as C,m as T,al as w,y as V,Y as F,g as _,am as m,o as u,e as c,f as e,i as o,t as a,j as p,l as r,F as Y,n as k,an as $,r as B}from"./app-V5tJFAYy.js";function A(s,n){return Math.random()*(n-s)+s}function E(s,n){let i,l=!1;return()=>{i&&clearTimeout(i),l?i=setTimeout(s,n):(s(),l=!0,setTimeout(()=>{l=!1},n))}}const D={class:"va-footer p-4 text-$va-c-text-light",text:"center sm"},H={key:0,class:"beian",m:"y-2"},M={href:"https://beian.miit.gov.cn/",target:"_blank",rel:"noopener"},N={class:"copyright flex justify-center items-center gap-2",p:"1"},S=["href","title"],j={key:1,class:"powered",m:"2"},z=["innerHTML"],I=["href","title"],q=C({__name:"YunFooter",setup(s){const{t:n}=T(),i=w(),l=V(),t=F(),g=new Date().getFullYear(),y=_(()=>g===t.value.footer.since),b=_(()=>n("footer.powered",[`<a href="${m.repository.url}" target="_blank" rel="noopener">Valaxy</a> v${m.version}`])),d=_(()=>t.value.footer.icon||{url:m.repository.url,name:"i-ri-cloud-line",title:m.name});return(x,f)=>{var h,v;return u(),c("footer",D,[(h=e(t).footer.beian)!=null&&h.enable&&e(t).footer.beian.icp?(u(),c("div",H,[o("a",M,a(e(t).footer.beian.icp),1)])):p("v-if",!0),o("div",N,[o("span",null,[f[0]||(f[0]=r(" © ")),y.value?p("v-if",!0):(u(),c(Y,{key:0},[r(a(e(t).footer.since)+" - ",1)],64)),r(" "+a(e(g)),1)]),(v=e(t).footer.icon)!=null&&v.enable?(u(),c("a",{key:0,class:k(["inline-flex",e(t).footer.icon.animated?"animate-pulse":""]),href:d.value.url,target:"_blank",title:d.value.title},[o("div",{class:k(d.value.name)},null,2)],10,S)):p("v-if",!0),o("span",null,a(e(l).author.name),1)]),e(t).footer.powered?(u(),c("div",j,[o("span",{innerHTML:b.value},null,8,z),f[1]||(f[1]=r(" | ")),o("span",null,[r(a(e(n)("footer.theme"))+" - ",1),o("a",{href:e(t).pkg.repository.url,title:e(t).pkg.name,target:"_blank"},a($(e(i).theme)),9,I),r(" v"+a(e(t).pkg.version),1)])])):p("v-if",!0),B(x.$slots,"default")])}}});export{q as _,A as r,E as t};
