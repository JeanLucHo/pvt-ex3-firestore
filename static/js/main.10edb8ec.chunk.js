(this["webpackJsonpex3-firestore"]=this["webpackJsonpex3-firestore"]||[]).push([[0],{53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},71:function(e,t,c){},73:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(27),r=c.n(a),i=c(20),o=(c(53),c(54),c(12));c(55);var j=c(44),l=c.n(j),u=c(89),d=(c(56),c(3));function b(e){var t=function(e){var t={nbArticles:0,totalItems:0,st:0,tps:0,tvq:0,total:0};t.nbArticles=e.length,t.totalItems=e.reduce((function(e,t){return e+t.qte}),0);var c=e.reduce((function(e,t){return e+t.prix*t.qte}),0);t.st=c.toFixed(2);var n=.05*c;t.tps=n.toFixed(2);var s=.09975*c;return t.tvq=s.toFixed(2),t.total=(c+n+s).toFixed(2),t}(e.articles);return Object(d.jsxs)("div",{className:"SommairePanier",children:[Object(d.jsxs)("span",{children:["Articles diff\xe9rents : ",t.nbArticles]}),Object(d.jsxs)("span",{children:["Total # items : ",t.totalItems]}),Object(d.jsxs)("span",{children:["Sous-total : ",t.st]}),Object(d.jsxs)("span",{children:["TPS : ",t.tps]}),Object(d.jsxs)("span",{children:["TVQ : ",t.tvq]}),Object(d.jsxs)("span",{children:["Total : ",t.total]})]})}function x(e){var t=e.etatPanier,c=Object(o.a)(t,1)[0],s=Object.values(c),a=Object(n.useState)(!1),r=Object(o.a)(a,2),j=r[0],x=r[1];return Object(d.jsxs)("header",{className:"Entete",children:[Object(d.jsx)("div",{className:"logo",children:Object(d.jsx)(i.b,{to:"/",children:"Magasin"})}),Object(d.jsxs)("ul",{className:"navPrincipale",children:[Object(d.jsx)("li",{children:Object(d.jsx)(i.c,{to:"/nos-produits",activeClassName:"navActive",children:"Produits"})}),Object(d.jsx)("li",{children:Object(d.jsx)(i.c,{to:"/a-propos-de-nous",activeClassName:"navActive",children:"\xc0 propos de nous"})}),Object(d.jsx)("li",{children:Object(d.jsx)(i.c,{to:"/contactez-nous",activeClassName:"navActive",children:"Contactez-nous"})})]}),Object(d.jsxs)("ul",{className:"navUtilisateur",children:[Object(d.jsxs)("li",{children:[Object(d.jsx)(u.a,{onClick:function(){return x(!j)},badgeContent:s.reduce((function(e,t){return e+t.qte}),0),color:"secondary",children:Object(d.jsx)(l.a,{})}),j&&Object(d.jsx)(b,{articles:s})]}),Object(d.jsx)("li",{children:"Mon compte"})]})]})}var p=c(37),O=c.n(p),h=c(45),f=(c(67),c(18)),m=c(22);c(68);function v(e){var t=e.onClick,c=e.qte,n=e.texte,s=e.classeCss;return Object(d.jsx)(u.a,{badgeContent:c,color:"primary",children:Object(d.jsx)("button",{onClick:t,className:"BtnAjoutPanier ".concat(s),children:n})})}var g=c(46),N=c.n(g);c(69);function P(e){var t=e.etatPanier,c=e.id,n=e.nom,s=e.prix,a=Object(o.a)(t,2),r=a[0],i=a[1];var j=r[c]?[r[c].qte,Object(d.jsx)(N.a,{}),"rouge"]:[0,"Ajouter au panier",""],l=Object(o.a)(j,3),u=l[0],b=l[1],x=l[2];return Object(d.jsxs)("li",{className:"Produit",children:[Object(d.jsx)("img",{src:"images-produits/"+c+".webp",alt:""}),Object(d.jsxs)("div",{className:"info",children:[Object(d.jsx)("p",{className:"nom",children:n}),Object(d.jsx)("p",{className:"prix",children:s})]}),Object(d.jsx)(v,{onClick:function(){r[c]?i(Object(m.a)(Object(m.a)({},r),{},Object(f.a)({},c,Object(m.a)(Object(m.a)({},r[c]),{},{qte:r[c].qte+1})))):i(Object(m.a)(Object(m.a)({},r),{},Object(f.a)({},c,{nom:n,prix:s,qte:1})))},qte:u,texte:b,classeCss:x})]})}var C=c(31);c(74);C.a.apps.length||C.a.initializeApp({apiKey:"AIzaSyDg41zloqDvnieRUqiCmNui_HiVCSZc0OA",authDomain:"ex3-produits-a2b6c.firebaseapp.com",projectId:"ex3-produits-a2b6c",storageBucket:"ex3-produits-a2b6c.appspot.com",messagingSenderId:"941720093189",appId:"1:941720093189:web:a8dfcdc22b5b12c713926c",measurementId:"G-4PZN5CQ69X"});var A=C.a.firestore();function q(e){var t=Object(n.useState)([]),c=Object(o.a)(t,2),s=c[0],a=c[1];return Object(n.useEffect)((function(){function e(){return(e=Object(h.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,A.collection("ex3-produits").get();case 3:e.sent.forEach((function(e){return t.push(e.data())})),a(t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(d.jsxs)("div",{className:"ListeProduits",children:[Object(d.jsx)("h2",{children:"Produits disponibles"}),Object(d.jsx)("ul",{children:s.map((function(t){return Object(d.jsx)(P,{id:t.id,nom:t.nom,prix:t.prix,etatPanier:e.etatPanier},t.id)}))})]})}function S(){return Object(d.jsxs)("div",{className:"Accueil",children:[Object(d.jsx)("h2",{children:"Magasin"}),Object(d.jsx)("p",{children:"Page d'accueil en construction"})]})}function w(){return Object(d.jsxs)("div",{className:"Apropos",children:[Object(d.jsx)("h2",{children:"\xc0 propos de nous"}),Object(d.jsx)("p",{children:"Patati et patata"})]})}function I(){return Object(d.jsxs)("div",{className:"Contact",children:[Object(d.jsx)("h2",{children:"Contactez-nous"}),Object(d.jsx)("p",{children:"Formulaire de contact \xe0 venir"})]})}c(71);var k=(new Date).getFullYear();function y(e){return Object(d.jsxs)("footer",{className:"PiedDePage",children:["\xa9",k," - TIM - Tous droits r\xe9serv\xe9s."]})}var z=c(5);function F(){var e=function(e,t){var c=Object(n.useState)((function(){return JSON.parse(window.localStorage.getItem(t))||e})),s=Object(o.a)(c,2),a=s[0],r=s[1];return Object(n.useEffect)((function(){return window.localStorage.setItem(t,JSON.stringify(a))}),[a,t]),[a,r]}({},"pvt-ex3-panier");return Object(d.jsxs)("div",{className:"Appli",children:[Object(d.jsx)(x,{etatPanier:e}),Object(d.jsx)("section",{className:"contenuPrincipal",children:Object(d.jsxs)(z.c,{children:[Object(d.jsx)(z.a,{path:"/",component:S,exact:!0}),Object(d.jsx)(z.a,{path:"/nos-produits",children:Object(d.jsx)(q,{etatPanier:e,exact:!0})}),Object(d.jsx)(z.a,{path:"/a-propos-de-nous",exact:!0,children:Object(d.jsx)(w,{})}),Object(d.jsx)(z.a,{path:"/contactez-nous",component:I,exact:!0})]})}),Object(d.jsx)(y,{})]})}var T=-1!==window.location.href.search(/github\.io/)?"/".concat("pvt-ex3-firestore"):"";r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(i.a,{basename:T,children:Object(d.jsx)(F,{})})}),document.getElementById("racine"))}},[[73,1,2]]]);
//# sourceMappingURL=main.10edb8ec.chunk.js.map