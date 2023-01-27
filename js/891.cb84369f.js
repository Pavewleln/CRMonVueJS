"use strict";(self["webpackChunksrm"]=self["webpackChunksrm"]||[]).push([[891],{1891:function(e,t,l){l.r(t),l.d(t,{default:function(){return Q}});var i=l(3396);const r={class:"app-page"},a=(0,i._)("div",{class:"page-title"},[(0,i._)("h3",null,"Категории")],-1),n={key:1},s={class:"row"};function o(e,t,l,o,u,c){const d=(0,i.up)("AppLoader"),p=(0,i.up)("CategoriesCreate"),g=(0,i.up)("CategoriesUpdate");return(0,i.wg)(),(0,i.iD)("div",r,[(0,i._)("div",null,[a,o.loading?((0,i.wg)(),(0,i.j4)(d,{key:0})):((0,i.wg)(),(0,i.iD)("section",n,[(0,i._)("div",s,[(0,i.Wm)(p),o.categories.length>0?((0,i.wg)(),(0,i.j4)(g,{key:0,categories:o.categories},null,8,["categories"])):(0,i.kq)("",!0)])]))])])}var u=l(9242),c=l(7139);const d={class:"col s12 m6"},p=(0,i._)("div",{class:"page-subtitle"},[(0,i._)("h4",null,"Создать")],-1),g={class:"input-field"},m=(0,i._)("label",{for:"name"},"Название",-1),v={key:0,class:"helper-text invalid"},y={class:"input-field"},w=(0,i._)("label",{for:"limit"},"Лимит",-1),b={key:0,class:"helper-text invalid"},_=["disabled"],h=(0,i._)("i",{class:"material-icons right"},"send",-1);function f(e,t,l,r,a,n){return(0,i.wg)(),(0,i.iD)("div",d,[(0,i._)("div",null,[p,(0,i._)("form",{onSubmit:t[4]||(t[4]=(0,u.iM)(((...t)=>e.onSubmitCreate&&e.onSubmitCreate(...t)),["prevent"]))},[(0,i._)("div",g,[(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[0]||(t[0]=t=>e.title=t),id:"name",type:"text",onBlur:t[1]||(t[1]=(...t)=>e.tBlur&&e.tBlur(...t))},null,544),[[u.nr,e.title,void 0,{trim:!0}]]),m,e.tError?((0,i.wg)(),(0,i.iD)("span",v,(0,c.zw)(e.tError),1)):(0,i.kq)("",!0)]),(0,i._)("div",y,[(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[2]||(t[2]=t=>e.limit=t),id:"limit",type:"number",onBlur:t[3]||(t[3]=(...t)=>e.lBlur&&e.lBlur(...t))},null,544),[[u.nr,e.limit,void 0,{number:!0}]]),w,e.lError?((0,i.wg)(),(0,i.iD)("span",b,(0,c.zw)(e.lError),1)):(0,i.kq)("",!0)]),(0,i._)("button",{class:"btn waves-effect waves-light",type:"submit",disabled:e.isSubmitting},[(0,i.Uk)(" Создать "),h],8,_)],32)])])}var k=l(5708),B=l(3634),U=l(65);const C=()=>{const e=(0,U.oR)(),{handleSubmit:t,isSubmitting:l}=(0,k.cI)({}),{value:i,errorMessage:r,handleBlur:a}=(0,k.U$)("title",B.Z_().trim().required("Обязательно для заполнения").min(3,"Название должно быть больше 3 символов")),{value:n,errorMessage:s,handleBlur:o}=(0,k.U$)("limit",B.Rx().min(1,"Число должно быть больше 1").required("Обязательно для заполнения")),{value:u,errorMessage:c}=(0,k.U$)("category",B.Z_().required("Обязательно для заполнения")),d=t((async t=>{try{await e.dispatch("category/createCategory",{title:t.title,limit:t.limit}),i.value=null,n.value=null}catch(l){console.log(l)}})),p=t((async t=>{const l={id:t.category,title:t.title,limit:t.limit};try{await e.dispatch("category/updateCategory",l),i.value=null,n.value=null,u.value=null}catch(r){console.log(r)}}));return{isSubmitting:l,title:i,limit:n,tError:r,lError:s,tBlur:a,lBlur:o,onSubmitCreate:d,onSubmitUpdate:p,category:u,cError:c}};var E={setup(){return{...C()}}},S=l(89);const D=(0,S.Z)(E,[["render",f]]);var q=D;const x={class:"col s12 m6"},M=(0,i._)("div",{class:"page-subtitle"},[(0,i._)("h4",null,"Редактировать")],-1),z={class:"input-field"},Z=["value"],V=(0,i._)("label",null,"Выберите категорию",-1),A={key:0,class:"helper-text invalid"},H={class:"input-field"},R=(0,i._)("label",{for:"name"},"Название",-1),$={key:0,class:"helper-text invalid"},j={class:"input-field"},F=(0,i._)("label",{for:"limit"},"Лимит",-1),L={key:0,class:"helper-text invalid"},I=(0,i._)("button",{class:"btn waves-effect waves-light",type:"submit"},[(0,i.Uk)(" Обновить "),(0,i._)("i",{class:"material-icons right"},"send")],-1);function K(e,t,l,r,a,n){return(0,i.wg)(),(0,i.iD)("div",x,[(0,i._)("div",null,[M,(0,i._)("form",{onSubmit:t[5]||(t[5]=(0,u.iM)(((...t)=>e.onSubmitUpdate&&e.onSubmitUpdate(...t)),["prevent"]))},[(0,i._)("div",z,[(0,i.wy)((0,i._)("select",{ref:"select","onUpdate:modelValue":t[0]||(t[0]=t=>e.category=t)},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.categories,(e=>((0,i.wg)(),(0,i.iD)("option",{key:e.id,value:e.id},(0,c.zw)(e.title),9,Z)))),128))],512),[[u.bM,e.category]]),V,e.cError?((0,i.wg)(),(0,i.iD)("p",A,(0,c.zw)(e.cError),1)):(0,i.kq)("",!0)]),(0,i._)("div",H,[(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[1]||(t[1]=t=>e.title=t),id:"name",type:"text",onBlur:t[2]||(t[2]=(...t)=>e.tBlur&&e.tBlur(...t))},null,544),[[u.nr,e.title]]),R,e.tError?((0,i.wg)(),(0,i.iD)("span",$,(0,c.zw)(e.tError),1)):(0,i.kq)("",!0)]),(0,i._)("div",j,[(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[3]||(t[3]=t=>e.limit=t),id:"limit",type:"number",onBlur:t[4]||(t[4]=(...t)=>e.lBlur&&e.lBlur(...t))},null,544),[[u.nr,e.limit]]),F,e.lError?((0,i.wg)(),(0,i.iD)("span",L,(0,c.zw)(e.lError),1)):(0,i.kq)("",!0)]),I],32)])])}var W=l(4870),Y={props:["categories"],setup(){const e=(0,W.iH)(null);return(0,i.bv)((()=>{e.value=window.M.FormSelect.init(e.value)})),(0,i.Ah)((()=>{e.value&&e.value.destroy&&e.value.destroy()})),{...C(),select:e}}};const G=(0,S.Z)(Y,[["render",K]]);var J=G,N=l(9877),O={components:{AppLoader:N.Z,CategoriesUpdate:J,CategoriesCreate:q},setup(){const e=(0,W.iH)(!0),t=(0,U.oR)();(0,i.bv)((async()=>{e.value=!0,await t.dispatch("category/getAllCategory"),e.value=!1}));const l=(0,i.Fl)((()=>t.getters["category/category"]));return{categories:l,loading:e}}};const P=(0,S.Z)(O,[["render",o]]);var Q=P}}]);
//# sourceMappingURL=891.cb84369f.js.map