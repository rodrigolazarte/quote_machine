(this["webpackJsonpquote-machine"]=this["webpackJsonpquote-machine"]||[]).push([[0],{37:function(e,t,a){},38:function(e,t,a){},42:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a(11),r=a.n(o),i=(a(37),a(38),a(30)),s=a(15),c=(a(42),{CHANGE_QUOTE:"CHANGE_QUOTE"}),u=a(65),l={CHANGE_BACKGROUND_COLOR:"CHANGE_BACKGROUND_COLOR"},d=[{id:1,text:"No hay que ir para atr\xe1s ni para darse impulso",author:"Lao Ts\xe9"},{id:2,text:"No hay caminos para la paz; la paz es el camino",author:"Mahatma Gandhi"},{id:3,text:"Haz el amor y no la guerra",author:"John Lennon"},{id:4,text:"Para trabajar basta estar convencido de una cosa: que trabajar es menos aburrido que divertirse",author:"Charles Baudelaire"},{id:5,text:"Lo peor que hacen los malos es obligarnos a dudar de los buenos",author:"Jacinto Benavente"},{id:6,text:"Las guerras seguir\xe1n mientras el color de la piel siga siendo m\xe1s importante que el de los ojos",author:"Bob Marley"},{id:7,text:"Aprende a vivir y sabr\xe1s morir bien",author:"Confucio"},{id:8,text:"Cada d\xeda sabemos m\xe1s y entendemos menos",author:"Albert Einstein"},{id:9,text:"El mundo no est\xe1 en peligro por las malas personas sino por aquellas que permiten la maldad",author:"Albert Einstein"},{id:10,text:"La medida del amor es amar sin medida",author:"San Agust\xedn"},{id:11,text:"Dar el ejemplo no es la principal manera de influir sobre los dem\xe1s; es la \xfanica manera",author:"Albert Einstein"},{id:12,text:"Si es bueno vivir, todav\xeda es mejor so\xf1ar, y lo mejor de todo, despertar",author:"Antonio Machado"},{id:13,text:"La mayor declaraci\xf3n de amor es la que no se hace; el hombre que siente mucho, habla poco",author:"Plat\xf3n"},{id:14,text:"Ning\xfan hombre es lo bastante bueno para gobernar a otros sin su consentimiento",author:"Abraham Lincoln"},{id:15,text:"Vivir sola es como estar en una fiesta donde nadie te hace caso",author:"Marilyn Monroe"}],h=function(e){var t=e.author.replaceAll(" ","%20");return"https://twitter.com/intent/tweet?text="+e.text.replaceAll(" ","%20")+"%20-%20"+t},b=function(){return{backgroundColor:"".concat(m()),transition:"background-color 1s ease-out"}},m=function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e},p=a(28),j=a.n(p),O=a(3),f=Object(s.b)((function(e){return{listOfQuotes:e.quote,listOfColors:e.page}}),(function(e){return{changeQuote:function(t){return e(function(e){return{type:c.CHANGE_QUOTE,payload:e}}(t))},changeBackgroundColor:function(t){return e(function(e){return{type:l.CHANGE_BACKGROUND_COLOR,payload:e}}(t))}}}))((function(e){var t=e.listOfQuotes,a=e.changeQuote,o=e.changeBackgroundColor,r=t.currentQuote,s=t.quotes,c=Object(n.useState)({id:1,text:"No hay que ir para atr\xe1s ni para darse impulso",author:"Lao Ts\xe9"}),l=Object(i.a)(c,2),m=l[0],p=l[1];return Object(O.jsxs)("div",{className:"quote-box",children:[Object(O.jsx)("div",{className:"quote-text",children:s.map((function(e){return e.id===r?Object(O.jsxs)("p",{children:['"',e.text,'"']}):Object(O.jsx)("p",{})}))}),Object(O.jsx)("div",{className:"author-text",children:s.map((function(e){return e.id===r?Object(O.jsx)("p",{children:Object(O.jsx)("b",{children:e.author})}):Object(O.jsx)("p",{})}))}),Object(O.jsx)(u.a,{variant:"contained",color:"primary",className:"change-button",onClick:function(){var e=function(e){for(var t=d.length,a=Math.floor(Math.random()*t+1);a===e;)a=Math.floor(Math.random()*t+1);return a}(r);a(e);var t=s.find((function(t){return t.id===e}));p(t),o(b())},children:"Cambia!"}),Object(O.jsx)(u.a,{variant:"contained",color:"secondary",className:"share-button",href:"".concat(h(m)),target:"_blank",children:Object(O.jsx)(j.a,{})})]})})),x=Object(s.b)((function(e){return{page:e.page}}))((function(e){var t=e.page.currentColor;return Object(O.jsx)("div",{style:t,className:"container",children:Object(O.jsx)(f,{})})})),g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,66)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),o(e),r(e),i(e)}))},C=a(22),v=a(29),y=a.n(v),A=a(17),N={quotes:d,currentQuote:1},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.CHANGE_QUOTE:return Object(A.a)(Object(A.a)({},e),{},{currentQuote:t.payload});default:return e}},E={currentColor:b()},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.CHANGE_BACKGROUND_COLOR:return Object(A.a)(Object(A.a)({},e),{},{currentColor:t.payload});default:return e}},G=Object(C.b)({quote:q,page:L}),_=[y.a],B=Object(C.c)(G,C.a.apply(void 0,_));r.a.render(Object(O.jsx)(s.a,{store:B,children:Object(O.jsx)(x,{})}),document.getElementById("root")),g()}},[[49,1,2]]]);
//# sourceMappingURL=main.308a08b9.chunk.js.map