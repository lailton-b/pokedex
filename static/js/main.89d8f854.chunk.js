(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{38:function(n,t,e){"use strict";e.r(t);var r=e(1),o=e(0),a=e.n(o),i=e(21),c=e.n(i),l=e(7),s=e(8);function d(){var n=Object(l.a)(["\n  body, #root {\n    width: 100%;\n    min-height: 100vh;\n    background-color: #161B22;\n  }\n\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n\n  ul, li {\n    list-style: none;\n  }\n\n  button, input {\n    background-color: transparent;\n  }\n"]);return d=function(){return n},n}var u=Object(s.a)(d()),p=e(9),b=e(2),g=e.p+"static/media/pokemon-logo.c7f876a6.svg",f=e(16),x=e.n(f),m=e(25),h=e(19);function j(){return(j=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function O(n,t){if(null==n)return{};var e,r,o=function(n,t){if(null==n)return{};var e,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}var v=o.createElement("line",{x1:19,y1:12,x2:5,y2:12}),k=o.createElement("polyline",{points:"12 19 5 12 12 5"});function y(n,t){var e=n.title,r=n.titleId,a=O(n,["title","titleId"]);return o.createElement("svg",j({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-arrow-left",ref:t,"aria-labelledby":r},a),e?o.createElement("title",{id:r},e):null,v,k)}var w=o.forwardRef(y);e.p;function E(){return(E=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function N(n,t){if(null==n)return{};var e,r,o=function(n,t){if(null==n)return{};var e,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}var F=o.createElement("line",{x1:5,y1:12,x2:19,y2:12}),D=o.createElement("polyline",{points:"12 5 19 12 12 19"});function P(n,t){var e=n.title,r=n.titleId,a=N(n,["title","titleId"]);return o.createElement("svg",E({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-arrow-right",ref:t,"aria-labelledby":r},a),e?o.createElement("title",{id:r},e):null,F,D)}var I=o.forwardRef(P),S=(e.p,e.p+"static/media/pokemon-loading.690eceb7.svg");function z(){var n=Object(l.a)([" \n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 2;\n\n  transform: translate(-50%, -50%);\n\n  display: flex;\n  justify-content: center;\n\n  width: 200px;\n  height: 200px;\n\n  background-color: #161b22;\n  border-radius: 10px;\n  box-shadow: 0 0 0 3px #fac706, 0 0 0 6px #161b22;\n\n  img {\n    width: 100px;\n    animation: loading 1s ease-in-out infinite;\n  }\n\n  @keyframes loading {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"]);return z=function(){return n},n}function C(){var n=Object(l.a)([" \n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n\n  font-size: 1.5rem;\n  padding: 10px 0;\n  color: #fac706;\n"]);return C=function(){return n},n}function _(){var n=Object(l.a)([" \n  position: relative;\n  width: 100%;\n  margin-top: 40px;\n\n  .pagination_link {\n    display: flex;\n    align-items: center;\n    font-size: 1.25rem;\n    font-weight: bold;\n    color: #333;\n    text-decoration: none;\n\n    padding: 10px 20px;\n    background-color: #fac706;\n  }\n\n  .prev {\n    position: absolute;\n    left: 0;\n\n    svg {\n      margin-right: 5px;\n    }\n  }\n\n  .next {\n    position: absolute;\n    right: 0;\n\n    svg {\n      margin-left: 5px;\n    }\n  }\n"]);return _=function(){return n},n}function L(){var n=Object(l.a)(['\n  position: relative;\n  padding: 30px 0;\n  height: 273.19px;\n  border-radius: 15px;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\n\n  &.fire { background-color: #FDDFDF; }\n  &.ice { background-color: #97c8eb; }\n\t&.grass { background-color: #DEFDE0; }\n\t&.electric { background-color: #FCF7DE; }\n\t&.water { background-color: #DEF3FD; }\n\t&.ground { background-color: #f4e7da; }\n\t&.rock { background-color: #d5d5d4; }\n\t&.fairy { background-color: #fceaff; }\n\t&.poison { background-color: #98d7a5; }\n\t&.bug { background-color: #f8d5a3; }\n\t&.dragon { background-color: #97b3e6; }\n\t&.psychic { background-color: #eaeda1; }\n\t&.flying { background-color: #F5F5F5; }\n\t&.fighting { background-color: #E6E0D4; }\n\t&.normal { background-color: #F5F5F5; }\n  &.ghost { background-color:#01001d; }\n  &.steel { background-color: #C7CCD0; }\n  &.dark { background-color: #070707; }\n\n  &:before {\n    content: "";\n\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n\n    display: block;\n    width: 150px;\n    height: 150px;\n    border-radius: 50%;\n\n    background-color: rgba(54, 52, 52, 0.1);\n  }\n\n  > div {\n    position: absolute;\n    bottom: 30px;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n\n  > img {\n    display: block;\n    width: 65%;\n    margin: 15px auto 0;\n\n    @media (max-width: 540px) {\n      width: 50%;\n    }\n\n    @media (max-width: 414px) {\n      width: 85%;\n    }\n  }\n\n  strong, span {\n    display: block;\n    text-align: center;\n  }\n\n  strong {\n    width: 150px;\n    margin-top: 30px;\n    text-transform: capitalize;\n    font-size: 1.5rem;\n    color: #333;\n  }\n\n  span {\n    margin-top: 1px;\n    color: #363636;\n  }\n']);return L=function(){return n},n}function B(){var n=Object(l.a)(["\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-gap: 15px;\n\n  @media (max-width: 1050px) {\n    grid-gap: 5px;\n  }\n\n  @media (max-width: 768px) {\n    grid-template-columns: repeat(3, 1fr);\n    li:nth-child(10) {\n      grid-column: 2;\n    }\n  }\n\n  @media (max-width: 540px) {\n    grid-template-columns: repeat(2, 1fr);\n\n    li:nth-child(10) {\n      grid-column: initial;\n    }\n  }\n"]);return B=function(){return n},n}function M(){var n=Object(l.a)(["\n  width: 100%;\n  margin: 80px 0 100px;\n  padding: 0 15px;\n\n  @media (max-width: 375px) {\n    padding: 0 5px;\n  }\n"]);return M=function(){return n},n}var X=s.b.div(M()),J=s.b.ul(B()),R=s.b.li(L()),T=s.b.div(_()),W=s.b.span(C()),q=s.b.div(z()),A=function(){var n=a.a.useState(null),t=Object(h.a)(n,2),e=t[0],o=t[1],i=a.a.useState(!1),c=Object(h.a)(i,2),l=c[0],s=c[1],d=Object(b.f)().slug,u=a.a.useMemo((function(){return void 0===d?2:Number(d)+1}),[d]),g=a.a.useMemo((function(){return void 0===d||"1"===d?void 0:Number(d)-1}),[d]);return a.a.useEffect((function(){(function(){var n=Object(m.a)(x.a.mark((function n(){var t,e,r,a,i;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(s(!0),t=[],e=void 0===d||"1"===d?1:10*Number(d),r=e+9,isNaN(e)||!(e<890)){n.next=19;break}case 6:if(!(e<=r)){n.next=17;break}return n.next=9,fetch("https://pokeapi.co/api/v2/pokemon/"+e);case 9:return a=n.sent,n.next=12,a.json();case 12:i=n.sent,t.push({name:i.name,type:i.types[0].type.name,picture:i.sprites.other["official-artwork"].front_default});case 14:e++,n.next=6;break;case 17:o(t),s(!1);case 19:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[d]),l?Object(r.jsx)(q,{children:Object(r.jsx)("img",{src:S,alt:"Loading"})}):null!==e?Object(r.jsxs)(X,{children:[Object(r.jsx)(J,{children:e.map((function(n){return Object(r.jsxs)(R,{className:n.type,children:[Object(r.jsx)("img",{src:n.picture,alt:n.name}),Object(r.jsxs)("div",{children:[Object(r.jsx)("strong",{children:n.name}),Object(r.jsxs)("span",{children:["Type: ",n.type]})]})]},n.name)}))}),Object(r.jsxs)(T,{children:[void 0!==g&&Object(r.jsxs)(p.b,{to:"/page/".concat(g),className:"pagination_link prev",children:[Object(r.jsx)(w,{}),"Prev"]}),Object(r.jsxs)(W,{children:[/\d+/g.test(d)&&Number(d)<10&&"0",/\d+/g.test(d)&&Number(d)<100&&"0",void 0===d&&"001",/\d+/g.test(d)&&d]}),Number(d)<88&&Object(r.jsxs)(p.b,{to:"/page/".concat(u),className:"pagination_link next",children:["Next",Object(r.jsx)(I,{})]}),void 0===d&&Object(r.jsxs)(p.b,{to:"/page/".concat(u),className:"pagination_link next",children:["Next",Object(r.jsx)(I,{})]})]})]}):Object(r.jsx)(X,{children:Object(r.jsxs)(W,{children:["There is no more pokemon here ):",Object(r.jsx)(T,{children:Object(r.jsx)(p.b,{to:"/",className:"pagination_link",children:Object(r.jsx)(w,{})})})]})})};function G(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  max-width: 1000px;\n  margin: 0 auto;\n\n  > a img {\n    margin-top: 30px;\n    width: 200px;\n  }\n"]);return G=function(){return n},n}var H=s.b.div(G()),K=function(){return Object(r.jsxs)(H,{children:[Object(r.jsx)(p.b,{to:"/",children:Object(r.jsx)("img",{src:g,alt:"Pok\xe9mon"})}),Object(r.jsx)(A,{})]})},Q=function(){return Object(r.jsx)(p.a,{children:Object(r.jsxs)(b.c,{children:[Object(r.jsx)(b.a,{path:"/",exact:!0,component:K}),Object(r.jsx)(b.a,{path:"/page/:slug",exact:!0,component:K})]})})},U=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(u,{}),Object(r.jsx)(Q,{})]})};c.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(U,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.89d8f854.chunk.js.map