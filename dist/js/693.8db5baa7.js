"use strict";(self["webpackChunksrm"]=self["webpackChunksrm"]||[]).push([[693],{3314:function(e,t,r){function n(e,t="RUB"){return new Intl.NumberFormat("ru-RU",{style:"currency",currency:t}).format(e)}r.d(t,{Z:function(){return n}})},693:function(e,t,r){r.r(t),r.d(t,{default:function(){return H}});var n=r(3396);const l={class:"app-page"},u={key:0,class:"center"},a={key:2},c=(0,n._)("div",{class:"page-title"},[(0,n._)("h3",null,"История записей")],-1);function o(e,t,r,o,s,i){const d=(0,n.up)("router-link"),p=(0,n.up)("AppLoader"),y=(0,n.up)("HistoryTable");return(0,n.wg)(),(0,n.iD)("div",l,[o.records.length?o.loading?((0,n.wg)(),(0,n.j4)(p,{key:1})):((0,n.wg)(),(0,n.iD)("div",a,[c,(0,n.Wm)(y,{records:o.records},null,8,["records"])])):((0,n.wg)(),(0,n.iD)("p",u,[(0,n.Uk)("Записей пока нет. "),(0,n.Wm)(d,{to:"/record"},{default:(0,n.w5)((()=>[(0,n.Uk)("Добавить запись")])),_:1})]))])}r(7658);var s=r(7139);const i=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",null,"#"),(0,n._)("th",null,"Сумма"),(0,n._)("th",null,"Дата"),(0,n._)("th",null,"Категория"),(0,n._)("th",null,"Тип"),(0,n._)("th",null,"Открыть")])],-1),d=["onClick"],p=(0,n._)("i",{class:"material-icons"},"open_in_new",-1),y=[p];function _(e,t,r,l,u,a){return(0,n.wg)(),(0,n.iD)("table",null,[i,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.records,((t,r)=>((0,n.wg)(),(0,n.iD)("tr",{key:t.id},[(0,n._)("td",null,(0,s.zw)(r+1),1),(0,n._)("td",null,(0,s.zw)(l.currencyFilter(t.amount)),1),(0,n._)("td",null,(0,s.zw)(t.date.toLocaleString()),1),(0,n._)("td",null,(0,s.zw)(t.categoryName),1),(0,n._)("td",null,[(0,n._)("span",{class:(0,s.C_)(["white-text badge",[t.typeClass]])},(0,s.zw)(t.typeText),3)]),(0,n._)("td",null,[(0,n._)("button",{class:"btn-small btn",onClick:r=>e.$router.push("/record/"+t.id)},y,8,d)])])))),128))])])}var g=r(3314),w={props:["records"],setup(){return{currencyFilter:g.Z}}},h=r(89);const m=(0,h.Z)(w,[["render",_]]);var f=m,k=r(4870),v=r(65),b=r(9877),C={components:{AppLoader:b.Z,HistoryTable:f},setup(){const e=(0,v.oR)(),t=(0,k.iH)(!0),r=(0,k.iH)([]),l=(0,k.iH)([]);return(0,n.bv)((async()=>{const n=await e.dispatch("record/getAllRecords");l.value=await e.dispatch("category/getAllCategory"),n&&(r.value=n.map((e=>({...e,categoryName:l.value.find((t=>t.id===e.categoryId)).title,typeClass:"income"===e.type?"green":"red",typeText:"income"===e.type?"Доход":"Расход"})))),t.value=!1})),{loading:t,records:r,categories:l}}};const D=(0,h.Z)(C,[["render",o]]);var H=D}}]);
//# sourceMappingURL=693.8db5baa7.js.map