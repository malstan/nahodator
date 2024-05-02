(function(){"use strict";var e={8631:function(e,n,t){var o=t(5130),r=t(6768),i=t(4232),a=t(144),c=t(7383),u=t(153),s=t(8805),l=t(508);const f=(0,r.Lk)("span",{class:"w-8 h-1 block bg-stone-800 dark:bg-stone-300"},null,-1),d={class:"flex flex-col items-start mt-20 text-2xl gap-5 text-stone-800 dark:text-stone-300"};var p={__name:"BurgerMenu",setup(e){const n=(0,a.KR)(!1),t=(0,c.C6J)(),o=(0,u.eY)(t);function p(){n.value=!n.value}return(e,c)=>{const u=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("nav",null,[(0,r.Lk)("div",{class:"flex flex-col gap-1 absolute top-6 right-6 z-30 cursor-pointer",onClick:p},[(0,r.Lk)("span",{class:(0,i.C4)([n.value?"invisible ":"visible","w-8 h-1 block bg-stone-800 dark:bg-stone-300"])},null,2),f,(0,r.Lk)("span",{class:(0,i.C4)([n.value?"invisible ":"visible","w-8 h-1 block bg-stone-800 dark:bg-stone-300"])},null,2)]),(0,r.Lk)("div",{class:(0,i.C4)([n.value?"right-0 ":"-right-80","fixed top-0 bottom-0 p-6 w-72 max-w-full bg-primary dark:bg-primaryDarker ease-in duration-300 z-20"])},[(0,r.Lk)("div",{class:"absolute cursor-pointer",onClick:c[0]||(c[0]=e=>(0,a.R1)(o)())},[(0,a.R1)(t)?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.Wv)((0,a.R1)(s.A),{key:0,class:"size-8 text-stone-800 dark:text-stone-300"})),(0,a.R1)(t)?((0,r.uX)(),(0,r.Wv)((0,a.R1)(l.A),{key:1,class:"size-8 text-stone-800 dark:text-stone-300"})):(0,r.Q3)("",!0)]),(0,r.Lk)("ul",d,[(0,r.Lk)("li",{onClick:p},[(0,r.bF)(u,{to:"/"},{default:(0,r.k6)((()=>[(0,r.eW)("Domov")])),_:1})]),(0,r.Lk)("li",{onClick:p},[(0,r.bF)(u,{to:"/coin"},{default:(0,r.k6)((()=>[(0,r.eW)("Hod mincou")])),_:1})]),(0,r.Lk)("li",{onClick:p},[(0,r.bF)(u,{to:"/random"},{default:(0,r.k6)((()=>[(0,r.eW)("Náhodné číslo")])),_:1})]),(0,r.Lk)("li",{onClick:p},[(0,r.bF)(u,{to:"/magicball"},{default:(0,r.k6)((()=>[(0,r.eW)("Magic 8 ball")])),_:1})]),(0,r.Lk)("li",{onClick:p},[(0,r.bF)(u,{to:"/matches"},{default:(0,r.k6)((()=>[(0,r.eW)("Zápalky")])),_:1})]),(0,r.Lk)("li",{onClick:p},[(0,r.bF)(u,{to:"/crossroads"},{default:(0,r.k6)((()=>[(0,r.eW)("Križovatky")])),_:1})])])],2)])}}};const v=p;var h=v;const m={class:"h-screen w-full flex items-center dark:bg-stone-800 text-stone-900 dark:text-stone-300"};var b={__name:"App",setup(e){return(e,n)=>{const t=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(h),(0,r.Lk)("div",m,[(0,r.bF)(t)])],64)}}};const g=b;var k=g,y=t(4458);(0,y.k)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var C=t(1387);const w={class:"container mx-auto"};function x(e,n){return(0,r.uX)(),(0,r.CE)("div",w," home ")}var L=t(1241);const E={},A=(0,L.A)(E,[["render",x]]);var _=A;const F=[{path:"/",name:"home",component:_},{path:"/coin",name:"Coin",component:()=>t.e(455).then(t.bind(t,4455))},{path:"/random",name:"RandomNumber",component:()=>t.e(962).then(t.bind(t,7962))},{path:"/magicball",name:"MagicBall",component:()=>t.e(975).then(t.bind(t,4975))},{path:"/matches",name:"Matches",component:()=>t.e(345).then(t.bind(t,9395))},{path:"/crossroads",name:"Crossroads",component:()=>t.e(92).then(t.bind(t,9092))}],O=(0,C.aE)({history:(0,C.LA)("/"),routes:F});var N=O;(0,o.Ef)(k).use(N).mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return e[o].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,i){if(!o){var a=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],i=e[l][2];for(var c=!0,u=0;u<o.length;u++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[u])}))?o.splice(u--,1):(c=!1,i<a&&(a=i));if(c){e.splice(l--,1);var s=r();void 0!==s&&(n=s)}}return n}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[o,r,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{92:"e4271f15",345:"fddfa6be",455:"cb05fccf",962:"c8436dd3",975:"8760ecc3"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{455:"8c1f02a2",975:"f0f55ff1"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="nahodator:";t.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var c,u;if(void 0!==i)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==n+i){c=f;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,t.nc&&c.setAttribute("nonce",t.nc),c.setAttribute("data-webpack",n+i),c.src=o),e[o]=[r];var d=function(n,t){c.onerror=c.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,o,r,i){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",t.nc&&(a.nonce=t.nc);var c=function(t){if(a.onerror=a.onload=null,"load"===t.type)r();else{var o=t&&t.type,c=t&&t.target&&t.target.href||n,u=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+c+")");u.name="ChunkLoadError",u.code="CSS_CHUNK_LOAD_FAILED",u.type=o,u.request=c,a.parentNode&&a.parentNode.removeChild(a),i(u)}};return a.onerror=a.onload=c,a.href=n,o?o.parentNode.insertBefore(a,o.nextSibling):document.head.appendChild(a),a},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var r=t[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===n))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===e||i===n)return r}},o=function(o){return new Promise((function(r,i){var a=t.miniCssF(o),c=t.p+a;if(n(a,c))return r();e(o,c,null,r,i)}))},r={524:0};t.f.miniCss=function(e,n){var t={455:1,975:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=o(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}}(),function(){var e={524:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=i);var a=t.p+t.u(n),c=new Error,u=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;c.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,r[1](c)}};t.l(a,u,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,a=o[0],c=o[1],u=o[2],s=0;if(a.some((function(n){return 0!==e[n]}))){for(r in c)t.o(c,r)&&(t.m[r]=c[r]);if(u)var l=u(t)}for(n&&n(o);s<a.length;s++)i=a[s],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(l)},o=self["webpackChunknahodator"]=self["webpackChunknahodator"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[504],(function(){return t(8631)}));o=t.O(o)})();
//# sourceMappingURL=app.a5efdd4e.js.map