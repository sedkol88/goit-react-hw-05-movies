"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[974],{846:function(e,t,n){n.d(t,{Ai:function(){return o},Bd:function(){return i},Ku:function(){return c},fI:function(){return a},u_:function(){return s}});var r=n(340).Z.create({baseURL:"https://api.themoviedb.org/3",headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMThiYTIxZDE1MzI0YzAxNjgwMmVjNTI4NGJkOGEzYiIsInN1YiI6IjY1YmFhNGVjMzNhMzc2MDBlNjg1ZmJmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fLVvcAoMtoguxzCXZiqFiKcftDcbrmaR_5k4XEIUtk8"}}),i=function(){return r.get("/trending/all/day")},s=function(e){return r.get("/movie/".concat(e))},c=function(e){return r.get("/movie/".concat(e,"/credits"))},a=function(e){return r.get("/movie/".concat(e,"/reviews"))},o=function(e){return r.get("/search/movie",{params:{query:e}})}},974:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(861),i=n(439),s=n(757),c=n.n(s),a=n(791),o=n(689),u=n(87),l=n(846),h={singlePost:"movie-details_singlePost__ZAzR+"},d=n(184),f=function(){var e,t=(0,a.useState)(),n=(0,i.Z)(t,2),s=n[0],f=n[1],v=(0,a.useState)(!1),m=(0,i.Z)(v,2),j=m[0],x=m[1],p=(0,a.useState)(null),g=(0,i.Z)(p,2),I=g[0],w=g[1],k=(0,o.UO)().id,_=(null===(e=(0,o.TH)().state)||void 0===e?void 0:e.from)||"/",b=(0,o.s0)();(0,a.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,(0,l.u_)(k);case 4:t=e.sent,n=t.data,f(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),w(e.t0.message);case 12:return e.prev=12,x(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[k]);var J;return(0,d.jsxs)("div",{children:[j&&(0,d.jsx)("p",{children:"...Loading"}),I&&(0,d.jsxs)("p",{children:["Error: ",I]}),(0,d.jsx)("button",{onClick:function(){return b(_)},type:"button",children:"Go back"}),s&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:h.singlePost,children:[(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(s.poster_path),alt:"movie poster",width:"300"}),(0,d.jsxs)("div",{children:[(0,d.jsxs)("h2",{children:[s.title,s.name," (",(J=s.release_date,J?new Date(J).getFullYear():""),")"]}),(0,d.jsxs)("p",{children:["User score: ",Math.floor(10*s.vote_average),"%"]}),(0,d.jsx)("h3",{children:"Overview"}),(0,d.jsx)("p",{children:s.overview}),(0,d.jsx)("h4",{children:"Genres"}),(0,d.jsx)("p",{children:s.genres.map((function(e){return e.name})).join(" ")})]})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{children:"Additional Information"}),(0,d.jsxs)("ul",{className:h.list,children:[(0,d.jsx)("li",{children:(0,d.jsx)(u.rU,{to:"/movies/".concat(k,"/cast"),state:{from:_},children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(u.rU,{to:"/movies/".concat(k,"/reviews"),state:{from:_},children:"Reviews"})})]})]}),(0,d.jsx)(o.j3,{})]})]})},v=function(){return(0,d.jsx)("div",{children:(0,d.jsx)(f,{})})}}}]);
//# sourceMappingURL=974.e2102ce0.chunk.js.map