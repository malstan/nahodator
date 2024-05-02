"use strict";(self["webpackChunknahodator"]=self["webpackChunknahodator"]||[]).push([[345],{9395:function(e,n,a){a.r(n),a.d(n,{default:function(){return z}});a(4114);var t=a(6768),l=a(4232),u=a(144),o=a(5130),r=a.p+"img/match-no-burned.040181ca.png",s=a.p+"img/match-burned.7b63bacd.png",i=a(2431),c=a(8705),m=a(3233);const d={class:"container text-center mx-auto h-full flex flex-col justify-between pb-12 pt-24"},v={class:"mb-6 relative"},x=["src","onClick"],k=(0,t.Lk)("div",{class:"absolute top-0 bottom-0 left-[-27%] w-[27%] bg-white dark:bg-stone-800"},null,-1),p={class:"flex justify-center items-center gap-24 max-xs:gap-6"},h={class:""},b=(0,t.Lk)("img",{class:"mx-auto max-w-[15.3125rem] max-xs:max-w-[12.5rem]",src:r,alt:"no burned match"},null,-1),f={class:"flex justify-center align-center gap-3 mb-8 mt-4"},w=(0,t.Lk)("img",{class:"mx-auto max-w-[15.3125rem] max-xs:max-w-[12.5rem]",src:s,alt:"burned match"},null,-1),g={class:"flex justify-center gap-3 mt-4"},L={class:"text-lg text-red-600 my-6"};var C={__name:"MatchesView",setup(e){const n=(0,u.KR)(1),a=(0,u.KR)(1),r=(0,u.KR)([]),s={min:1,max:9},C=(0,u.KR)("");function y(){return!(n.value+a.value>9)||(C.value="Príliš veľa zápaliek",setTimeout((()=>{C.value=""}),1e3),!1)}function z(){r.value=[];const e=a.value+n.value,t={notBurned:"img/match-no-burned.png",burned:"img/match-burned.png"};let l,u=[];for(let n=0;n<a.value;n++){do{l=Math.floor(Math.random()*e)}while(u.includes(l));u.push(l)}for(let n=0;n<e;n++){let e={image:u.includes(n)?t.burned:t.notBurned,hidden:!0};r.value.push(e)}}function R(e){r.value[e].hidden=!1}return(e,A)=>((0,t.uX)(),(0,t.CE)("div",d,[(0,t.Lk)("div",v,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(r.value,((e,n)=>((0,t.uX)(),(0,t.CE)("img",{key:n,src:e.image,alt:"zápalka",class:(0,l.C4)(["ease-out duration-700 my-2 cursor-pointer",e.hidden&&"-translate-x-1/3"]),onClick:e=>R(n)},null,10,x)))),128)),k]),(0,t.Lk)("div",null,[(0,t.Lk)("div",p,[(0,t.Lk)("div",h,[b,(0,t.Lk)("div",f,[(0,t.Lk)("button",null,[(0,t.bF)((0,u.R1)(i.A),{onClick:A[0]||(A[0]=e=>n.value>s.min&&n.value--),class:"size-12 max-xs:size-8"})]),(0,t.bo)((0,t.Lk)("input",{type:"number",name:"noBurned",readonly:"","onUpdate:modelValue":A[1]||(A[1]=e=>n.value=e),class:"input-primary max-w-24 max-xs:max-w-18"},null,512),[[o.Jo,n.value]]),(0,t.Lk)("button",null,[(0,t.bF)((0,u.R1)(c.A),{onClick:A[2]||(A[2]=e=>y()&&n.value<s.max&&n.value++),class:"size-12 max-xs:size-8"})])]),w,(0,t.Lk)("div",g,[(0,t.Lk)("button",null,[(0,t.bF)((0,u.R1)(i.A),{onClick:A[3]||(A[3]=e=>a.value>s.min&&a.value--),class:"size-12 max-xs:size-8"})]),(0,t.bo)((0,t.Lk)("input",{type:"number",name:"burned",readonly:"","onUpdate:modelValue":A[4]||(A[4]=e=>a.value=e),class:"input-primary max-w-24 max-xs:max-w-18"},null,512),[[o.Jo,a.value]]),(0,t.Lk)("button",null,[(0,t.bF)((0,u.R1)(c.A),{onClick:A[5]||(A[5]=e=>y()&&a.value<s.max&&a.value++),class:"size-12 max-xs:size-8"})])])]),(0,t.Lk)("button",{onClick:z},[(0,t.bF)((0,u.R1)(m.A),{class:"size-32 max-xs:size-20"})])]),(0,t.Lk)("div",L,(0,l.v_)(C.value),1)])]))}};const y=C;var z=y},3233:function(e,n,a){a.d(n,{A:function(){return l}});var t=a(6768);function l(e,n){return(0,t.uX)(),(0,t.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[(0,t.Lk)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"})])}},2431:function(e,n,a){a.d(n,{A:function(){return l}});var t=a(6768);function l(e,n){return(0,t.uX)(),(0,t.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[(0,t.Lk)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"})])}},8705:function(e,n,a){a.d(n,{A:function(){return l}});var t=a(6768);function l(e,n){return(0,t.uX)(),(0,t.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[(0,t.Lk)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"})])}}}]);
//# sourceMappingURL=345.fddfa6be.js.map