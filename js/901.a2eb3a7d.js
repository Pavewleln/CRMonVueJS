"use strict";(self["webpackChunksrm"]=self["webpackChunksrm"]||[]).push([[901],{3314:function(r,e,c){function t(r,e="RUB"){return new Intl.NumberFormat("ru-RU",{style:"currency",currency:e}).format(r)}c.d(e,{Z:function(){return t}})},6901:function(r,e,c){c.r(e),c.d(e,{default:function(){return h}});var t=c(3396),a=c(7139);const n={class:"app-page"},o={key:1},d={class:"breadcrumb-wrap"},s={class:"breadcrumb"},u={class:"row"},l={class:"col s12 m6"},i={class:"card-content white-text"},p={key:2,class:"center"};function y(r,e,c,y,m,w){const g=(0,t.up)("AppLoader"),v=(0,t.up)("router-link");return(0,t.wg)(),(0,t.iD)("div",n,[y.loading?((0,t.wg)(),(0,t.j4)(g,{key:0})):y.record?((0,t.wg)(),(0,t.iD)("div",o,[(0,t._)("div",null,[(0,t._)("div",d,[(0,t.Wm)(v,{to:"/history",class:"breadcrumb"},{default:(0,t.w5)((()=>[(0,t.Uk)("История")])),_:1}),(0,t._)("a",s,(0,a.zw)("income"===y.record.type?"Доход":"Расход"),1)]),(0,t._)("div",u,[(0,t._)("div",l,[(0,t._)("div",{class:(0,a.C_)(["card",{red:"outcome"===y.record.type,green:"income"===y.record.type}])},[(0,t._)("div",i,[(0,t._)("p",null,"Описание: "+(0,a.zw)(y.record.description),1),(0,t._)("p",null,"Сумма: "+(0,a.zw)(y.currencyFilter(y.record.amount)),1),(0,t._)("p",null,"Категория: "+(0,a.zw)(y.record.categoryName),1),(0,t._)("small",null,(0,a.zw)(y.record.date),1)])],2)])])])])):((0,t.wg)(),(0,t.iD)("p",p,"Такой записи нет"))])}var m=c(4870),w=c(65),g=c(2483),v=c(9877),_=c(3314),f={components:{AppLoader:v.Z},setup(){const r=(0,w.oR)(),e=(0,g.yj)(),c=(0,m.iH)(!0),a=(0,m.iH)(null);return(0,t.bv)((async()=>{const t=e.params.id,n=await r.dispatch("record/getRecordById",t),o=await r.dispatch("category/getCategoryById",n.categoryId);a.value={...n,categoryName:o.title},c.value=!1})),{record:a,loading:c,currencyFilter:_.Z}}},b=c(89);const k=(0,b.Z)(f,[["render",y]]);var h=k}}]);
//# sourceMappingURL=901.a2eb3a7d.js.map