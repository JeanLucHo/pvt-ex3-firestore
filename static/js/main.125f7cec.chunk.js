(this["webpackJsonpex3-firestore"]=this["webpackJsonpex3-firestore"]||[]).push([[0],{43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},63:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),r=c(20),a=c.n(r),i=c(15),o=(c(43),c(44),c(13));c(45);var j=c(35),l=c.n(j),u=c(78),d=(c(46),c(2));function b(e){var t=function(e){var t={nbArticles:0,totalItems:0,st:0,tps:0,tvq:0,total:0};t.nbArticles=e.length,t.totalItems=e.reduce((function(e,t){return e+t.qte}),0);var c=e.reduce((function(e,t){return e+t.prix*t.qte}),0);t.st=c.toFixed(2);var n=.05*c;t.tps=n.toFixed(2);var s=.09975*c;return t.tvq=s.toFixed(2),t.total=(c+n+s).toFixed(2),t}(e.articles);return Object(d.jsxs)("div",{className:"SommairePanier",children:[Object(d.jsxs)("span",{children:["Articles diff\xe9rents : ",t.nbArticles]}),Object(d.jsxs)("span",{children:["Total # items : ",t.totalItems]}),Object(d.jsxs)("span",{children:["Sous-total : ",t.st]}),Object(d.jsxs)("span",{children:["TPS : ",t.tps]}),Object(d.jsxs)("span",{children:["TVQ : ",t.tvq]}),Object(d.jsxs)("span",{children:["Total : ",t.total]})]})}function x(e){var t=e.etatPanier,c=Object(o.a)(t,1)[0],s=Object.values(c),r=Object(n.useState)(!1),a=Object(o.a)(r,2),j=a[0],x=a[1];return Object(d.jsxs)("header",{className:"Entete",children:[Object(d.jsx)("div",{className:"logo",children:Object(d.jsx)(i.b,{to:"/",children:"Magasin"})}),Object(d.jsxs)("ul",{className:"navPrincipale",children:[Object(d.jsx)("li",{children:Object(d.jsx)(i.c,{to:"/nos-produits",activeClassName:"navActive",children:"Produits"})}),Object(d.jsx)("li",{children:Object(d.jsx)(i.c,{to:"/a-propos-de-nous",activeClassName:"navActive",children:"\xc0 propos de nous"})}),Object(d.jsx)("li",{children:Object(d.jsx)(i.c,{to:"/contactez-nous",activeClassName:"navActive",children:"Contactez-nous"})})]}),Object(d.jsxs)("ul",{className:"navUtilisateur",children:[Object(d.jsxs)("li",{children:[Object(d.jsx)(u.a,{onClick:function(){return x(!j)},badgeContent:s.reduce((function(e,t){return e+t.qte}),0),color:"secondary",children:Object(d.jsx)(l.a,{})}),j&&Object(d.jsx)(b,{articles:s})]}),Object(d.jsx)("li",{children:"Mon compte"})]})]})}var O=c(28),h=c.n(O),p=c(36);c(58),c(12),c(16),c(59);c(37),c(60);function f(e){return Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:[];case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(d.jsxs)("div",{className:"ListeProduits",children:[Object(d.jsx)("h2",{children:"Produits disponibles"}),Object(d.jsx)("ul",{})]})}function v(){return Object(d.jsxs)("div",{className:"Accueil",children:[Object(d.jsx)("h2",{children:"Magasin"}),Object(d.jsx)("p",{children:"Page d'accueil en construction"})]})}function m(){return Object(d.jsxs)("div",{className:"Apropos",children:[Object(d.jsx)("h2",{children:"\xc0 propos de nous"}),Object(d.jsx)("p",{children:"Patati et patata"})]})}function N(){return Object(d.jsxs)("div",{className:"Contact",children:[Object(d.jsx)("h2",{children:"Contactez-nous"}),Object(d.jsx)("p",{children:"Formulaire de contact \xe0 venir"})]})}c(61);var g=(new Date).getFullYear();function P(e){return Object(d.jsxs)("footer",{className:"PiedDePage",children:["\xa9",g," - TIM - Tous droits r\xe9serv\xe9s."]})}var w=c(3);function A(){var e=function(e,t){var c=Object(n.useState)((function(){return JSON.parse(window.localStorage.getItem(t))||e})),s=Object(o.a)(c,2),r=s[0],a=s[1];return Object(n.useEffect)((function(){return window.localStorage.setItem(t,JSON.stringify(r))}),[r,t]),[r,a]}({},"pvt-ex3-panier");return Object(d.jsxs)("div",{className:"Appli",children:[Object(d.jsx)(x,{etatPanier:e}),Object(d.jsx)("section",{className:"contenuPrincipal",children:Object(d.jsxs)(w.c,{children:[Object(d.jsx)(w.a,{path:"/",component:v,exact:!0}),Object(d.jsx)(w.a,{path:"/nos-produits",children:Object(d.jsx)(f,{etatPanier:e,exact:!0})}),Object(d.jsx)(w.a,{path:"/a-propos-de-nous",exact:!0,children:Object(d.jsx)(m,{})}),Object(d.jsx)(w.a,{path:"/contactez-nous",component:N,exact:!0})]})}),Object(d.jsx)(P,{})]})}var S=-1!==window.location.href.search(/github\.io/)?"/".concat("pvt-ex3-firestore"):"";a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(i.a,{basename:S,children:Object(d.jsx)(A,{})})}),document.getElementById("racine"))}},[[63,1,2]]]);
//# sourceMappingURL=main.125f7cec.chunk.js.map