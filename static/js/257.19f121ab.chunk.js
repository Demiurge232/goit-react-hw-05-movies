"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[257],{257:function(n,e,t){t.r(e),t.d(e,{default:function(){return b}});var c,r,i,a,o=t(433),s=t(439),l=t(791),d=t(689),u=t(87),h=t(134),p=t(160),x=t(168),v=t(934),f=v.Z.img(c||(c=(0,x.Z)(["\n  width: 200px;\n  height: 300px;\n"]))),g=v.Z.div(r||(r=(0,x.Z)(["\n  display: flex;\n  gap: 14px;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),\n    0px 2px 1px rgba(0, 0, 0, 0.2);\n"]))),j=v.Z.ul(i||(i=(0,x.Z)(["\n  display: flex;\n  list-style: none;\n  gap: 10px;\n  padding: 0;'\n"]))),m=v.Z.div(a||(a=(0,x.Z)(["\n  margin: 20px 0 0;\n"]))),Z=t(184),b=function(){var n,e,t,c=(0,d.UO)().movieId,r=(0,l.useState)({}),i=(0,s.Z)(r,2),a=i[0],x=i[1],v=(0,l.useState)(null),b=(0,s.Z)(v,2),w=b[0],k=b[1],y=(0,d.TH)(),_=(0,l.useRef)(null!==(n=null===(e=y.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");return(0,l.useEffect)((function(){(0,p.Pg)(Number(c)).then((function(n){x(n.data),k((0,o.Z)(n.data.genres))})).catch((function(n){return console.log(n)}))}),[c]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("div",{children:(0,Z.jsx)(u.rU,{to:_.current,children:(0,Z.jsxs)("button",{type:"button",children:[(0,Z.jsx)(h.kyg,{})," Go back"]})})}),(0,Z.jsxs)(g,{children:[(0,Z.jsx)(f,{src:a.poster_path?"".concat("http://image.tmdb.org/t/p/w500/").concat(a.poster_path):"",alt:a.title}),(0,Z.jsxs)("div",{children:[(0,Z.jsx)("h1",{children:a.title}),(0,Z.jsxs)("p",{children:["User Score: ",a.vote_average,"%"]}),(0,Z.jsx)("h2",{children:"Overview"}),(0,Z.jsx)("p",{children:a.overview}),(0,Z.jsx)("h3",{children:"Genres"}),(0,Z.jsx)(j,{children:null!==(t=null===w||void 0===w?void 0:w.map((function(n){return(0,Z.jsx)("li",{children:n.name},n.id)})))&&void 0!==t?t:(0,Z.jsx)("li",{children:(0,Z.jsx)("span",{children:"We don't have any genres for this movie"})})})]})]}),(0,Z.jsxs)(m,{children:[(0,Z.jsx)("span",{children:"Additional Information"}),(0,Z.jsxs)("ul",{children:[(0,Z.jsx)("li",{children:(0,Z.jsx)(u.rU,{to:"Cast",children:"Cast"})}),(0,Z.jsx)("li",{children:(0,Z.jsx)(u.rU,{to:"Reviews",children:"Reviews"})})]}),(0,Z.jsx)("section",{children:(0,Z.jsx)(l.Suspense,{fallback:(0,Z.jsx)("div",{children:"Loading..."}),children:(0,Z.jsx)(d.j3,{})})})]})]})}},160:function(n,e,t){t.d(e,{Hg:function(){return d},OP:function(){return h},Pg:function(){return u},ZP:function(){return p}});var c=t(861),r=t(687),i=t.n(r),a=t(243),o="?api_key=df88ba4f44a5ed712dd0a71f1b3d877c",s="https://api.themoviedb.org/3",l="&language=en-US",d=function(){return a.Z.get("".concat(s).concat("/trending/movie/day").concat(o))},u=function(n){var e="/movie/".concat(n);return a.Z.get("".concat(s).concat(e).concat(o).concat(l))},h=function(n,e){var t="/movie/".concat(n,"/").concat(e);return a.Z.get("".concat(s).concat(t).concat(o).concat(l))};function p(n){return x.apply(this,arguments)}function x(){return(x=(0,c.Z)(i().mark((function n(e){var t,c;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="&query=".concat(e),n.prev=1,n.next=4,a.Z.get("".concat(s,"/search/movie").concat(o).concat(l).concat(t));case 4:return c=n.sent,n.abrupt("return",c);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=257.19f121ab.chunk.js.map