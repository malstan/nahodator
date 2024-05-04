(function(){"use strict";var e={7936:function(e,t,n){var o=n(5130),r=n(6768),a=n(4232),i=n(144),l=n(7383),s=n(153),c=n(8805),u=n(508);const d=(0,r.Lk)("span",{class:"w-8 h-1 block bg-stone-800 dark:bg-stone-300"},null,-1),f={class:"flex flex-col items-start mt-20 text-2xl gap-5 text-stone-800 dark:text-stone-300"};var p={__name:"BurgerMenu",setup(e){const t=(0,i.KR)(!1),n=(0,l.C6J)(),o=(0,s.eY)(n);function p(){t.value=!t.value}return(e,l)=>{const s=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("nav",null,[(0,r.Lk)("div",{class:"flex flex-col gap-1 fixed top-6 right-6 z-30 cursor-pointer",onClick:p},[(0,r.Lk)("span",{class:(0,a.C4)([t.value?"invisible ":"visible","w-8 h-1 block bg-stone-800 dark:bg-stone-300"])},null,2),d,(0,r.Lk)("span",{class:(0,a.C4)([t.value?"invisible ":"visible","w-8 h-1 block bg-stone-800 dark:bg-stone-300"])},null,2)]),(0,r.Lk)("div",{class:(0,a.C4)([t.value?"right-0 ":"-right-80","fixed top-0 bottom-0 p-6 w-72 max-w-full bg-primary dark:bg-primaryDarker ease-in duration-300 z-20"])},[(0,r.Lk)("div",{class:"absolute cursor-pointer",onClick:l[0]||(l[0]=e=>(0,i.R1)(o)())},[(0,i.R1)(n)?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.Wv)((0,i.R1)(c.A),{key:0,class:"size-8 text-stone-800 dark:text-stone-300"})),(0,i.R1)(n)?((0,r.uX)(),(0,r.Wv)((0,i.R1)(u.A),{key:1,class:"size-8 text-stone-800 dark:text-stone-300"})):(0,r.Q3)("",!0)]),(0,r.Lk)("ul",f,[(0,r.Lk)("li",{onClick:p},[(0,r.bF)(s,{to:"/"},{default:(0,r.k6)((()=>[(0,r.eW)("Domov")])),_:1})]),(0,r.Lk)("li",{onClick:p},[(0,r.bF)(s,{to:"/coin"},{default:(0,r.k6)((()=>[(0,r.eW)("Hod mincou")])),_:1})]),(0,r.Lk)("li",{onClick:p},[(0,r.bF)(s,{to:"/random"},{default:(0,r.k6)((()=>[(0,r.eW)("Náhodné číslo")])),_:1})]),(0,r.Lk)("li",{onClick:p},[(0,r.bF)(s,{to:"/magicball"},{default:(0,r.k6)((()=>[(0,r.eW)("Magic 8 ball")])),_:1})]),(0,r.Lk)("li",{onClick:p},[(0,r.bF)(s,{to:"/matches"},{default:(0,r.k6)((()=>[(0,r.eW)("Zápalky")])),_:1})]),(0,r.Lk)("li",{onClick:p},[(0,r.bF)(s,{to:"/crossroads"},{default:(0,r.k6)((()=>[(0,r.eW)("Križovatky")])),_:1})])])],2)])}}};const m=p;var k=m;const v={class:"sm:h-screen min-h-screen w-full p-3 flex items-center dark:bg-stone-800 text-stone-900 dark:text-stone-300"};var g={__name:"App",setup(e){return(e,t)=>{const n=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(k),(0,r.Lk)("div",v,[(0,r.bF)(n)])],64)}}};const b=g;var h=b,x=n(4458);(0,x.k)("/nahodator/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var y=n(1387);const L={class:"container mx-auto sm:pt-0 pt-16"},C=(0,r.Lk)("div",{class:"text-center"},[(0,r.Lk)("h1",{class:"font-bold text-5xl text-primary dark:text-primaryDarker"},"Náhodator"),(0,r.Lk)("p",{class:"text-xl mt-8"},"Nahodator ti pomôže rozhodnúť sa v rôznych situáciách.")],-1),w={class:"grid sm:grid-cols-3 md:gap-8 gap-4 mt-20"},_=(0,r.Lk)("span",{class:"lg:text-4xl md:text-3xl sm:text-xl text-2xl text-primary dark:text-primaryDarker font-bold"},"Hod mincou",-1),F=(0,r.Lk)("span",{class:"lg:text-4xl md:text-3xl sm:text-xl text-2xl text-primary dark:text-primaryDarker font-bold"},"Náhodné číslo",-1),E=(0,r.Lk)("span",{class:"lg:text-4xl md:text-3xl sm:text-xl text-2xl text-primary dark:text-primaryDarker font-bold"},"Magic 8 ball",-1),A={class:"grid sm:grid-cols-[0.5fr_1fr_1fr_0.5fr] md:gap-8 gap-4 mb-20 md:mt-8 sm:mt-4"},N=(0,r.Lk)("div",null,null,-1),j=(0,r.Lk)("span",{class:"lg:text-4xl md:text-3xl sm:text-xl text-2xl text-primary dark:text-primaryDarker font-bold"},"Zápalky",-1),z=(0,r.Lk)("span",{class:"lg:text-4xl md:text-3xl sm:text-xl text-2xl text-primary dark:text-primaryDarker font-bold"},"Križovatky",-1),O=(0,r.Lk)("div",null,null,-1),S=(0,r.Lk)("p",{class:"text-center max-w-[44rem] mx-auto my-12"},"Používateľ nesie plnú zodpovednosť za akékoľvek škody, ktoré vzniknú v dôsledku konania na základe vygenerovanej hodnoty. Tieto škody môžu zahŕňať fyzické zranenia, materiálne škody, finančné straty, právne dôsledky, sociálne či emocionálne škody, stratu dôvery alebo reputačné poškodenie. Buďte preto opatrní pri používaní aplikácie a pri rozhodovaní na základe jej výstupov.",-1);function D(e,t){const n=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("div",L,[C,(0,r.Lk)("div",w,[(0,r.bF)(n,{to:"/coin",class:"bg-stone-200 dark:bg-stone-750 text-center lg:py-20 md:py-14 sm:py-12 py-8 rounded-2xl hover:scale-105 duration-200 ease-in-out"},{default:(0,r.k6)((()=>[_])),_:1}),(0,r.bF)(n,{to:"/random",class:"bg-stone-200 dark:bg-stone-750 text-center lg:py-20 md:py-14 sm:py-12 py-8 rounded-2xl hover:scale-105 duration-200 ease-in-out"},{default:(0,r.k6)((()=>[F])),_:1}),(0,r.bF)(n,{to:"/magicball",class:"bg-stone-200 dark:bg-stone-750 text-center lg:py-20 md:py-14 sm:py-12 py-8 rounded-2xl hover:scale-105 duration-200 ease-in-out"},{default:(0,r.k6)((()=>[E])),_:1})]),(0,r.Lk)("div",A,[N,(0,r.bF)(n,{to:"/matches",class:"bg-stone-200 dark:bg-stone-750 text-center lg:py-20 md:py-14 sm:py-12 py-8 rounded-2xl hover:scale-105 duration-200 ease-in-out"},{default:(0,r.k6)((()=>[j])),_:1}),(0,r.bF)(n,{to:"/crossroads",class:"bg-stone-200 dark:bg-stone-750 text-center lg:py-20 md:py-14 sm:py-12 py-8 rounded-2xl hover:scale-105 duration-200 ease-in-out"},{default:(0,r.k6)((()=>[z])),_:1}),O]),S])}var T=n(1241);const B={},M=(0,T.A)(B,[["render",D]]);var P=M;const W=[{path:"/",name:"home",component:P},{path:"/coin",name:"Coin",component:()=>n.e(455).then(n.bind(n,4455))},{path:"/random",name:"RandomNumber",component:()=>n.e(962).then(n.bind(n,7962))},{path:"/magicball",name:"MagicBall",component:()=>n.e(975).then(n.bind(n,4975))},{path:"/matches",name:"Matches",component:()=>n.e(345).then(n.bind(n,9395))},{path:"/crossroads",name:"Crossroads",component:()=>n.e(92).then(n.bind(n,9092))}],R=(0,y.aE)({history:(0,y.LA)("/nahodator/"),routes:W});var K=R;(0,o.Ef)(h).use(K).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],a=e[u][2];for(var l=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{92:"02eb438d",345:"d06a433c",455:"cb05fccf",962:"c8436dd3",975:"8760ecc3"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{455:"8c1f02a2",975:"f0f55ff1"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="nahodator:";n.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var l,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+a){l=d;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+a),l.src=o),e[o]=[r];var f=function(t,n){l.onerror=l.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),s&&document.head.appendChild(l)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/nahodator/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,o,r,a){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",n.nc&&(i.nonce=n.nc);var l=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var o=n&&n.type,l=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+l+")");s.name="ChunkLoadError",s.code="CSS_CHUNK_LOAD_FAILED",s.type=o,s.request=l,i.parentNode&&i.parentNode.removeChild(i),a(s)}};return i.onerror=i.onload=l,i.href=t,o?o.parentNode.insertBefore(i,o.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===t)return r}},o=function(o){return new Promise((function(r,a){var i=n.miniCssF(o),l=n.p+i;if(t(i,l))return r();e(o,l,null,r,a)}))},r={524:0};n.f.miniCss=function(e,t){var n={455:1,975:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=a);var i=n.p+n.u(t),l=new Error,s=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,r[1](l)}};n.l(i,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],l=o[1],s=o[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(s)var u=s(n)}for(t&&t(o);c<i.length;c++)a=i[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},o=self["webpackChunknahodator"]=self["webpackChunknahodator"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(7936)}));o=n.O(o)})();
//# sourceMappingURL=app.f805251d.js.map