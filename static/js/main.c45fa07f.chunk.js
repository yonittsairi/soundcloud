(this.webpackJsonpsoundcloudapp=this.webpackJsonpsoundcloudapp||[]).push([[0],{42:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(12),s=n.n(a),o=(n(42),n(4)),i=n(7),u=n.n(i),l=n(5),j=n(11),f={save:function(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)},get:function(e){var t=localStorage.getItem(e);return JSON.parse(t)},clearSession:function(){sessionStorage.clear()},storeSession:function(e,t){sessionStorage[e]=JSON.stringify(t)}};var b={makeId:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6,t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<e;r++)t+=n.charAt(Math.floor(Math.random()*n.length));return t},getRandomInt:function(e,t){return Math.floor(Math.random()*(t-e)+e)}};var d=n(32),O=n.n(d).a.create({}),g=n(67),h={getSongs:function(e){return p.apply(this,arguments)},getNextSongs:x};function p(){return(p=Object(j.a)(u.a.mark((function e(t){var n,r,c,a,s,o,i,j;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=m(t),e.prev=1,e.next=4,g.get("/tracks?q=".concat(t,"&limit=",6,"&linked_partitioning=",!0));case 4:if(r=e.sent,c=r.collection,a=r.next_href,!(c.length<6)){e.next=16;break}return e.next=9,x(a);case 9:return s=e.sent,o=Object(l.a)(s,2),i=o[0],j=o[1],e.abrupt("return",[i,n,j]);case 16:return e.abrupt("return",[c,n,a]);case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(1),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[1,19]])})))).apply(this,arguments)}function x(e){return v.apply(this,arguments)}function v(){return(v=Object(j.a)(u.a.mark((function e(t){var n,r,c,a,s,o,i,j;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.get(t);case 3:if(n=e.sent,r=n.data,c=r.collection,a=r.next_href,!(c.length<6)){e.next=15;break}return e.next=8,x(a);case 8:return s=e.sent,o=Object(l.a)(s,2),i=o[0],j=o[1],e.abrupt("return",[i,j]);case 15:return e.abrupt("return",[c,a]);case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[0,18]])})))).apply(this,arguments)}function m(e){var t=f.get("search")||[];if(t.some((function(t){return t.word===e})))return t;5===t.length&&t.pop();var n=b.makeId();return t.unshift({word:e,id:n}),f.save("search",t),t}function S(e){return function(){var t=Object(j.a)(u.a.mark((function t(n){var r,c,a,s,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.getSongs(e.title);case 3:r=t.sent,c=Object(l.a)(r,3),a=c[0],s=c[1],o=c[2],n({type:"SET_SONGS",songs:a}),n({type:"SET_SEARCH_HISTORY",search:s}),n({type:"SET_NEXT_HREF",nextHref:o}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.error("problem loading songs",t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}()}g.initialize({client_id:"ggX0UomnLs0VmW7qZnCzw "});var N=n(2);function w(e){var t=e.searchWord,n=Object(o.b)("");return Object(N.jsx)("div",{className:"search-card",onClick:function(){n(S({title:t.word}))},children:t.word},t.id)}function y(){var e=Object(o.c)((function(e){return e.songModule})).searchHistory;return Object(r.useEffect)((function(){return function(){}}),[e]),e.length?Object(N.jsxs)("section",{className:"recent-search",children:[Object(N.jsx)("h2",{children:"Recent Searchs"}),Object(N.jsxs)("div",{children:[" ",e.map((function(e){return Object(N.jsx)(w,{searchWord:e},e.id)}))]})]}):Object(N.jsx)("div",{})}var k=n(3);function _(e){var t=e.songChosen,n=Object(r.useState)({play:!0,classSong:" "}),c=Object(l.a)(n,2),a=c[0],s=c[1],o="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/".concat(null===t||void 0===t?void 0:t.id,"&auto_play=",!0),i="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",u=(null===t||void 0===t?void 0:t.artwork_url)||null;Object(r.useEffect)((function(){return s(Object(k.a)(Object(k.a)({},a),{},{classSong:"not"})),setTimeout((function(){return s(Object(k.a)(Object(k.a)({},a),{},{classSong:" yes chosen"}))}),1e3),function(){}}),[t]);var j=a.classSong,f=a.play;return t?Object(N.jsxs)("div",{className:"song-container",children:[Object(N.jsx)("div",{className:"img-container",children:Object(N.jsx)("img",{className:j,onClick:function(){return s(Object(k.a)(Object(k.a)({},a),{},{play:!a.play}))},src:u||i,alt:""})}),f&&Object(N.jsx)("iframe",{title:t.title,className:"song-player",scrolling:"no",frameBorder:"no",allow:"autoplay",src:o})]}):Object(N.jsx)("section",{className:"song-container ",children:Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"img-container",children:["   ",Object(N.jsx)("img",{src:i,alt:""})]})})})}var E=n(17),H=n(86);function C(){var e=function(){var e=Object(r.useState)({}),t=Object(l.a)(e,2),n=t[0],c=t[1];return[n,function(e){var t=e.target.name,r="number"===e.target.type?+e.target.value:e.target.value;"checkbox"===e.target.type&&(r=!n[t]||!0!==n[t]),c(Object(k.a)(Object(k.a)({},n),{},Object(E.a)({},t,r)))}]}(),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(o.b)(""),s=Object(r.useRef)(""),i=function(e){e.preventDefault(),a(S(n)),s.current.reset()};return Object(N.jsxs)("div",{className:"filter flex align-center space-between",children:[Object(N.jsx)("form",{ref:s,action:"",onSubmit:i,className:"flex",children:Object(N.jsx)("input",{name:"title",placeholder:"Search",onChange:c})}),Object(N.jsx)(H.a,{fontSize:"large",onClick:i})]})}function T(e){var t=e.song,n=Object(o.c)((function(e){return e.songModule})).songChosen,r=(null===n||void 0===n?void 0:n.id)===t.id?"card slide-out":"card",c=Object(o.b)("");return Object(N.jsxs)("div",{className:r,onClick:function(e){e.preventDefault(),c(function(e){return function(){var t=Object(j.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{n({type:"SET_SONG",song:e})}catch(r){console.error("problem loading song")}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},children:[Object(N.jsx)("div",{className:"title",children:t.title}),Object(N.jsx)("img",{alt:t.title,src:t.artwork_url||"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"}),Object(N.jsx)("div",{className:"tulip",children:t.title})]})}var M=n(34),R=n.n(M),I=n(35),D=n.n(I),G=n(33),A=n.n(G);function B(e){var t=e.currSongs,n=Object(o.c)((function(e){return e.songModule})).nextHref,c=Object(o.b)(""),a=Object(r.useState)("list"),s=Object(l.a)(a,2),i=s[0],b=s[1],d=function(e){b(e),f.save("className",e)};return Object(r.useEffect)((function(){var e=f.get("className")||"list";return b(e),function(){}}),[]),t.length?Object(N.jsxs)("section",{className:"song-list",children:[Object(N.jsx)("div",{className:i,children:t.map((function(e){return Object(N.jsx)(T,{song:e},e.id)}))}),Object(N.jsxs)("div",{className:"menu flex align-center space-between",children:[n&&Object(N.jsx)(A.a,{fontSize:"large",onClick:function(){var e;c((e=n,function(){var t=Object(j.a)(u.a.mark((function t(n){var r,c,a,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.getNextSongs(e);case 3:r=t.sent,c=Object(l.a)(r,2),a=c[0],s=c[1],console.log(a),n({type:"SET_SONGS",songs:a}),n({type:"SET_NEXT_HREF",nextHref:s}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.error("problem loading songs",t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()))}}),Object(N.jsxs)("div",{className:"flex align-center",children:[Object(N.jsx)(R.a,{fontSize:"large",onClick:function(){return d("list")}}),Object(N.jsx)(D.a,{fontSize:"large",onClick:function(){return d("tile")}})]})]})]}):Object(N.jsx)("div",{})}function F(){var e=Object(o.c)((function(e){return e.songModule})),t=e.songs,n=e.songChosen;return Object(N.jsxs)("section",{className:"container",children:[Object(N.jsxs)("div",{className:"song-list",children:[Object(N.jsx)(C,{}),Object(N.jsx)(B,{currSongs:t})]}),Object(N.jsx)(_,{songChosen:n}),Object(N.jsx)(y,{})]})}var z=function(){return Object(N.jsx)("div",{className:"App main-container",children:Object(N.jsx)(F,{})})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,87)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))},J=n(36),W=n(16),q={songs:[],songChosen:null,searchHistory:f.get("search")||[],nextHref:null};var L=Object(W.b)({songModule:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SONGS":return e=Object(k.a)(Object(k.a)({},e),{},{songs:t.songs});case"SET_SONG":return e=Object(k.a)(Object(k.a)({},e),{},{songChosen:t.song});case"SET_SEARCH_HISTORY":return e=Object(k.a)(Object(k.a)({},e),{},{searchHistory:t.search});case"SET_NEXT_HREF":return e=Object(k.a)(Object(k.a)({},e),{},{nextHref:t.nextHref});default:return e}}}),V=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||W.c,Y=Object(W.d)(L,V(Object(W.a)(J.a)));s.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(o.a,{store:Y,children:Object(N.jsx)(z,{})})}),document.getElementById("root")),X()}},[[70,1,2]]]);
//# sourceMappingURL=main.c45fa07f.chunk.js.map