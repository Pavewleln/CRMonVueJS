"use strict";(self["webpackChunksrm"]=self["webpackChunksrm"]||[]).push([[568],{3314:function(e,r,t){function n(e,r="RUB"){return new Intl.NumberFormat("ru-RU",{style:"currency",currency:r}).format(e)}t.d(r,{Z:function(){return n}})},1568:function(e,r,t){t.r(r),t.d(r,{default:function(){return K}});var n=t(3396);const l={class:"app-page"},s={class:"page-title"},a=(0,n._)("h3",null,"Счет",-1),c=(0,n._)("i",{class:"material-icons"},"refresh",-1),u=[c],i={key:1,class:"row"};function o(e,r,t,c,o,d){const v=(0,n.up)("AppLoader"),p=(0,n.up)("HomeBill"),_=(0,n.up)("HomeCurrency");return(0,n.wg)(),(0,n.iD)("div",l,[(0,n._)("div",null,[(0,n._)("div",s,[a,(0,n._)("button",{class:"btn waves-effect waves-light btn-small",onClick:r[0]||(r[0]=(...e)=>c.refresh&&c.refresh(...e))},u)]),c.loading?((0,n.wg)(),(0,n.j4)(v,{key:0})):((0,n.wg)(),(0,n.iD)("div",i,[(0,n.Wm)(p,{rates:c.currency.rates},null,8,["rates"]),(0,n.Wm)(_,{rates:c.currency.rates,date:c.currency.date},null,8,["rates","date"])]))])])}var d=t(7139);const v={class:"col s12 m6 l8"},p={class:"card orange darken-3 bill-card"},_={class:"card-content white-text"},w=(0,n._)("div",{class:"card-header"},[(0,n._)("span",{class:"card-title"},"Курс валют")],-1),f=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",null,"Валюта"),(0,n._)("th",null,"Курс"),(0,n._)("th",null,"Дата")])],-1);function g(e,r,t,l,s,a){return(0,n.wg)(),(0,n.iD)("div",v,[(0,n._)("div",p,[(0,n._)("div",_,[w,(0,n._)("table",null,[f,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l.currencies,(e=>((0,n.wg)(),(0,n.iD)("tr",{key:e},[(0,n._)("td",null,(0,d.zw)(e),1),(0,n._)("td",null,(0,d.zw)(t.rates[e].toFixed(2)),1),(0,n._)("td",null,(0,d.zw)(t.date),1)])))),128))])])])])])}var h=t(4870),m={props:["date","rates"],setup(){const e=(0,h.iH)(["RUB","USD","EUR"]);return{currencies:e}}},y=t(89);const U=(0,y.Z)(m,[["render",g]]);var b=U;const R={class:"col s12 m6 l4"},D={class:"card light-blue bill-card"},H={class:"card-content white-text"},k=(0,n._)("span",{class:"card-title"},"Счет в валюте",-1);function B(e,r,t,l,s,a){return(0,n.wg)(),(0,n.iD)("div",R,[(0,n._)("div",D,[(0,n._)("div",H,[k,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l.currencies,(e=>((0,n.wg)(),(0,n.iD)("p",{key:e,class:"currency-line"},[(0,n._)("span",null,(0,d.zw)(l.currencyFilter(l.getCurrency(e),e)),1)])))),128))])])])}var C=t(65),E=t(3314),Z={props:["rates"],setup(e){const r=(0,C.oR)(),t=(0,h.iH)(["RUB","USD","EUR"]),l=(0,n.Fl)((()=>r.getters["auth/info"].bill/(e.rates["RUB"]/e.rates["EUR"]))),s=r=>Math.floor(l.value*e.rates[r]);return{currencies:t,getCurrency:s,currencyFilter:E.Z}}};const F=(0,y.Z)(Z,[["render",B]]);var z=F,S=t(9877),x={name:"HomeView",components:{AppLoader:S.Z,HomeBill:z,HomeCurrency:b},setup(){const e=(0,h.iH)(!0),r=(0,h.iH)(null),t=()=>{e.value=!0,r.value={base:"EUR",date:"2022-12-23",rates:{EUR:1,RUB:73.838176,USD:1.062575}},setTimeout((()=>{e.value=!1}),500)};return(0,n.bv)((()=>{r.value={base:"EUR",date:"2022-12-23",rates:{EUR:1,RUB:73.838176,USD:1.062575}},e.value=!1})),{loading:e,currency:r,refresh:t}}};const A=(0,y.Z)(x,[["render",o]]);var K=A}}]);
//# sourceMappingURL=568.3c01fa7c.js.map