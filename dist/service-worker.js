if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,n)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let u={};const o=s=>l(s,i),c={module:{uri:i},exports:u,require:o};e[i]=Promise.all(r.map((s=>c[s]||o(s)))).then((s=>(n(...s),u)))}}define(["./workbox-db5fc017"],(function(s){"use strict";s.setCacheNameDetails({prefix:"srm"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/css/app.0d2f60bb.css",revision:null},{url:"/css/chunk-vendors.ee8ae858.css",revision:null},{url:"/index.html",revision:"260cd0195c8c60cefcf65e668eb6fb74"},{url:"/js/148.4cf7bad5.js",revision:null},{url:"/js/179.961086f4.js",revision:null},{url:"/js/225.9292ace6.js",revision:null},{url:"/js/393.674e3008.js",revision:null},{url:"/js/472.8a15a3a9.js",revision:null},{url:"/js/525.ec1ec541.js",revision:null},{url:"/js/568.793162e1.js",revision:null},{url:"/js/693.8db5baa7.js",revision:null},{url:"/js/778.156c3b4b.js",revision:null},{url:"/js/835.ec524de7.js",revision:null},{url:"/js/891.c8e942ed.js",revision:null},{url:"/js/901.dae6553d.js",revision:null},{url:"/js/app.51aaedc4.js",revision:null},{url:"/js/chunk-vendors.835df182.js",revision:null},{url:"/manifest.json",revision:"4bf8ed368f69fb6a993867e9cb924db9"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map