if(!self.define){let n,o={};const r=(r,e)=>(r=new URL(r+".js",e).href,o[r]||new Promise((o=>{if("document"in self){const n=document.createElement("script");n.src=r,n.onload=o,document.head.appendChild(n)}else n=r,importScripts(r),o()})).then((()=>{let n=o[r];if(!n)throw new Error(`Module ${r} didn’t register its module`);return n})));self.define=(e,a)=>{const i=n||("document"in self?document.currentScript.src:"")||location.href;if(o[i])return;let s={};const l=n=>r(n,i),d={module:{uri:i},exports:s,require:l};o[i]=Promise.all(e.map((n=>d[n]||l(n)))).then((n=>(a(...n),s)))}}define(["./workbox-6567b62a"],(function(n){"use strict";n.setCacheNameDetails({prefix:"nahodator"}),self.addEventListener("message",(n=>{n.data&&"SKIP_WAITING"===n.data.type&&self.skipWaiting()})),n.precacheAndRoute([{url:"/nahodator/css/455.8c1f02a2.css",revision:null},{url:"/nahodator/css/975.f0f55ff1.css",revision:null},{url:"/nahodator/css/app.136c92b6.css",revision:null},{url:"/nahodator/img/arrow-green.png",revision:"ca6976f2970c90a560531b9d9ecc5147"},{url:"/nahodator/img/arrow.png",revision:"9925ba09c0353634ee1b8d42240bee66"},{url:"/nahodator/img/ball.78fe8dd5.png",revision:null},{url:"/nahodator/img/coin-back.78585998.png",revision:null},{url:"/nahodator/img/coin-front.057a0b75.png",revision:null},{url:"/nahodator/img/match-burned.7b63bacd.png",revision:null},{url:"/nahodator/img/match-burned.png",revision:"9d2f7994c9d7b4c3bda693d73f24e7dc"},{url:"/nahodator/img/match-no-burned.040181ca.png",revision:null},{url:"/nahodator/img/match-no-burned.png",revision:"db0ada04aede292e77bef418ad94f089"},{url:"/nahodator/index.html",revision:"62eca674f0c7e82c0c92fac5b146217a"},{url:"/nahodator/js/345.d06a433c.js",revision:null},{url:"/nahodator/js/455.cb05fccf.js",revision:null},{url:"/nahodator/js/92.02eb438d.js",revision:null},{url:"/nahodator/js/962.c8436dd3.js",revision:null},{url:"/nahodator/js/975.8760ecc3.js",revision:null},{url:"/nahodator/js/app.f805251d.js",revision:null},{url:"/nahodator/js/chunk-vendors.a83e84e1.js",revision:null},{url:"/nahodator/manifest.json",revision:"fa48ce49bddd7e7546d0a0c316ab39b3"},{url:"/nahodator/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
