"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[571],{846:function(e,t,n){n.d(t,{Ai:function(){return s},Bd:function(){return i},Ku:function(){return u},fI:function(){return a},u_:function(){return c}});var r=n(340).Z.create({baseURL:"https://api.themoviedb.org/3",headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMThiYTIxZDE1MzI0YzAxNjgwMmVjNTI4NGJkOGEzYiIsInN1YiI6IjY1YmFhNGVjMzNhMzc2MDBlNjg1ZmJmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fLVvcAoMtoguxzCXZiqFiKcftDcbrmaR_5k4XEIUtk8"}}),i=function(){return r.get("/trending/all/day")},c=function(e){return r.get("/movie/".concat(e))},u=function(e){return r.get("/movie/".concat(e,"/credits"))},a=function(e){return r.get("/movie/".concat(e,"/reviews"))},s=function(e){return r.get("/search/movie",{params:{query:e}})}},571:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(861),i=n(439),c=n(757),u=n.n(c),a={},s=n(791),o=n(689),h=n(846),l=n(184),f=function(){var e=(0,s.useState)([]),t=(0,i.Z)(e,2),n=t[0],c=t[1],f=(0,s.useState)(!1),d=(0,i.Z)(f,2),m=d[0],v=d[1],p=(0,s.useState)(null),I=(0,i.Z)(p,2),g=I[0],j=I[1],x=(0,o.UO)().id;(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v(!0),e.next=4,(0,h.fI)(x);case 4:t=e.sent,n=t.data,c(null!==n&&void 0!==n&&n.results.length?n.results:[]),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),j(e.t0.message);case 12:return e.prev=12,v(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[x]);var N=n.map((function(e,t){var n=e.author,r=e.content;return(0,l.jsxs)("li",{className:a.item,children:[(0,l.jsxs)("h4",{children:["Author: ",n]}),(0,l.jsx)("p",{children:r})]},t)}));return(0,l.jsxs)(l.Fragment,{children:[g&&(0,l.jsx)("p",{className:a.error,children:g}),m&&(0,l.jsx)("p",{children:"...Loading"}),Boolean(N.length)?(0,l.jsx)("ul",{className:a.list,children:N}):(0,l.jsx)("p",{children:"We don't have any reviews for this movie"})]})}}}]);
//# sourceMappingURL=571.bb9459f9.chunk.js.map