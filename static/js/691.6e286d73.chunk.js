"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[691],{541:function(t,n,e){e.d(n,{Z:function(){return u}});var c=e(689),r=e(87),a=e(184),o=function(t){var n=t.title,e=t.id,o=(0,c.TH)();return(0,a.jsx)("li",{children:(0,a.jsx)(r.rU,{to:"/movies/".concat(Number(e)),state:{from:o},children:n})})},u=function(t){var n=t.movies;return(0,a.jsx)("ul",{children:n.map((function(t){return(0,a.jsx)(o,{title:t.title,id:t.id},t.id)}))})}},691:function(t,n,e){e.r(n),e.d(n,{default:function(){return h}});var c,r,a=e(433),o=e(439),u=e(791),i=e(87),s=e(160),l=e(541),f=e(168),m=e(934),p=m.Z.form(c||(c=(0,f.Z)(["\n  margin: 20px 0 0;\n"]))),d=m.Z.input(r||(r=(0,f.Z)(["\n  width: 350px;\n  height: 25px;\n"]))),v=e(184),h=function(){var t,n=(0,i.lr)(""),e=(0,o.Z)(n,2),c=e[0],r=e[1],f=(0,u.useState)(null),m=(0,o.Z)(f,2),h=m[0],g=m[1],Z=null!==(t=c.get("query"))&&void 0!==t?t:"";(0,u.useEffect)((function(){""!==Z&&(0,s.ZP)(Z).then((function(t){return g((0,a.Z)(t.data.results))})).catch((function(t){return console.log(t)}))}),[Z]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(p,{onSubmit:function(t){t.preventDefault();var n=t.target.elements.nameFilms;""!==n.value?(r({query:n.value}),n.value=""):alert("please fill in the fields")},children:[(0,v.jsx)(d,{name:"nameFilms",type:"text",autoComplete:"off",autoFocus:!0}),(0,v.jsx)("button",{type:"submit",children:"Search"})]}),h&&(0,v.jsx)(l.Z,{movies:h})]})}},160:function(t,n,e){e.d(n,{Hg:function(){return l},OP:function(){return m},Pg:function(){return f},ZP:function(){return p}});var c=e(861),r=e(687),a=e.n(r),o=e(243),u="?api_key=df88ba4f44a5ed712dd0a71f1b3d877c",i="https://api.themoviedb.org/3",s="&language=en-US",l=function(){return o.Z.get("".concat(i).concat("/trending/movie/day").concat(u))},f=function(t){var n="/movie/".concat(t);return o.Z.get("".concat(i).concat(n).concat(u).concat(s))},m=function(t,n){var e="/movie/".concat(t,"/").concat(n);return o.Z.get("".concat(i).concat(e).concat(u).concat(s))};function p(t){return d.apply(this,arguments)}function d(){return(d=(0,c.Z)(a().mark((function t(n){var e,c;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="&query=".concat(n),t.prev=1,t.next=4,o.Z.get("".concat(i,"/search/movie").concat(u).concat(s).concat(e));case 4:return c=t.sent,t.abrupt("return",c);case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=691.6e286d73.chunk.js.map