if(!self.define){let e,n={};const r=(r,i)=>(r=new URL(r+".js",i).href,n[r]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=n,document.head.appendChild(e)}else e=r,importScripts(r),n()})).then((()=>{let e=n[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,s)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(n[l])return;let o={};const u=e=>r(e,l),c={module:{uri:l},exports:o,require:u};n[l]=Promise.all(i.map((e=>c[e]||u(e)))).then((e=>(s(...e),o)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"nahodator"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/455.8c1f02a2.css",revision:null},{url:"/css/975.f0f55ff1.css",revision:null},{url:"/css/app.7ff70426.css",revision:null},{url:"/img/arrow-green.png",revision:"ca6976f2970c90a560531b9d9ecc5147"},{url:"/img/arrow.png",revision:"9925ba09c0353634ee1b8d42240bee66"},{url:"/img/ball.78fe8dd5.png",revision:null},{url:"/img/coin-back.78585998.png",revision:null},{url:"/img/coin-front.057a0b75.png",revision:null},{url:"/img/match-burned.7b63bacd.png",revision:null},{url:"/img/match-burned.png",revision:"9d2f7994c9d7b4c3bda693d73f24e7dc"},{url:"/img/match-no-burned.040181ca.png",revision:null},{url:"/img/match-no-burned.png",revision:"db0ada04aede292e77bef418ad94f089"},{url:"/index.html",revision:"3fae7faaab30465c25a6366a1187d40b"},{url:"/js/345.d06a433c.js",revision:null},{url:"/js/455.cb05fccf.js",revision:null},{url:"/js/92.02eb438d.js",revision:null},{url:"/js/962.c8436dd3.js",revision:null},{url:"/js/975.8760ecc3.js",revision:null},{url:"/js/app.8dc3d76f.js",revision:null},{url:"/js/chunk-vendors.66cb4f13.js",revision:null},{url:"/manifest.json",revision:"fa48ce49bddd7e7546d0a0c316ab39b3"},{url:"/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
