(this["webpackJsonpmovie-site"]=this["webpackJsonpmovie-site"]||[]).push([[0],{39:function(e,t,n){},59:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(30),r=n.n(i),a=(n(39),n(8)),o=n(31),d=n.n(o),j=n(9),l=n(2),u=n(32),p=n(10),b=n(17),h="https://api.themoviedb.org/3",g=function(e){return function(t){var n=new URLSearchParams(Object(p.a)(Object(p.a)({},t),{},{api_key:"0ab346b765ddcf3489e15848e91862c8"})).toString();return b.get("".concat(h).concat(e,"?").concat(n)).then((function(e){return e.data}))}},m=g("/movie/popular"),O=g("/genre/movie/list"),x=g("/search/movie"),v=(n(59),n(34)),f=function(e,t){switch(t.type){case"ADD_MOVIE_TO_LIST":return Object(p.a)(Object(p.a)({},e),{},{movieList:[t.payload].concat(Object(v.a)(e.movieList))});case"REMOVE_MOVIE":return Object(p.a)(Object(p.a)({},e),{},{movieList:e.movieList.filter((function(e){return e.id!==t.payload}))});default:return e}},y=n(0),N={movieList:[]},_=Object(c.createContext)(N),S=function(e){var t=e.genre,n=s.a.useContext(_),c=n.removeMovie,i=n.movieList;return Object(y.jsx)("div",{className:"wrapper",children:i.map((function(e,n){return Object(y.jsxs)("div",{className:"card",children:[Object(y.jsx)("h4",{children:e.title}),Object(y.jsx)("div",{className:"genres",children:e.genre_ids.map((function(e){return Object(y.jsx)("span",{children:t[e]},e)}))}),Object(y.jsxs)("div",{className:"image",children:[e.poster_path?Object(y.jsx)("img",{src:"https://image.tmdb.org/t/p/w200"+e.poster_path,alt:"poster"}):Object(y.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS77eBijOyeLSZcsTopPrTvkMjTJVNpF44iA&usqp=CAU",alt:"poster"}),Object(y.jsx)("button",{onClick:function(){return c(e.id)},className:"removeButton",children:"Remove"})]})]},n)}))})},L=function(e){var t=e.movies,n=e.genre,c=s.a.useState([]),i=Object(a.a)(c,2),r=i[0],o=i[1],d=Object(l.f)().id,j=s.a.useContext(_),u=j.addMovieToList,p=!!j.movieList.find((function(e){return e.id===+d}));return s.a.useEffect((function(){window.scrollTo(0,0),function(e){return b.get("".concat(h,"/movie/").concat(e,"/recommendations?api_key=0ab346b765ddcf3489e15848e91862c8&language=en-US&page=1")).then((function(e){return e.data}))}(d).then((function(e){o(e.results)}))}),[d]),Object(y.jsxs)(y.Fragment,{children:[t.filter((function(e){return e.id===+d})).map((function(e,t){return Object(y.jsxs)("div",{children:[Object(y.jsx)("h1",{style:{textAlign:"center",margin:"50px 0"},children:e.title}),Object(y.jsxs)("div",{className:"infoWrapper",children:[Object(y.jsxs)("div",{className:"infoImage",children:[e.poster_path?Object(y.jsx)("img",{src:"https://image.tmdb.org/t/p/w200"+e.poster_path,alt:"poster"}):Object(y.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS77eBijOyeLSZcsTopPrTvkMjTJVNpF44iA&usqp=CAU",alt:"poster"}),Object(y.jsx)("button",{disabled:p,onClick:function(){return u(e)},children:p?"Added":"Add"})]}),Object(y.jsxs)("div",{className:"infoDetails",children:[Object(y.jsxs)("span",{className:"release",children:[Object(y.jsx)("b",{children:"Release at : "}),e.release_date]}),Object(y.jsx)("hr",{}),Object(y.jsxs)("span",{style:{display:"flex",flexWrap:"wrap"},children:[Object(y.jsx)("b",{children:"Genre : "}),e.genre_ids.map((function(e){return Object(y.jsx)("span",{style:{marginLeft:"10px"},children:n[e]},e)}))]}),Object(y.jsx)("hr",{}),Object(y.jsxs)("span",{children:[Object(y.jsx)("b",{children:"Description : "}),e.overview]}),Object(y.jsx)("hr",{}),Object(y.jsxs)("span",{children:[Object(y.jsx)("b",{children:"Rating : "}),e.vote_average]})]})]})]},t)})),Object(y.jsxs)("div",{children:[Object(y.jsx)("h2",{style:{textAlign:"center",margin:"200px 0 100px"},children:"Recommendation movies"}),Object(y.jsx)("div",{className:"wrapper",children:r.map((function(e,t){return Object(y.jsxs)("div",{className:"card",children:[Object(y.jsx)("h4",{children:e.title}),Object(y.jsx)("span",{className:"genres",children:e.genre_ids.map((function(e){return Object(y.jsx)("span",{style:{marginLeft:"10px"},children:n[e]},e)}))}),Object(y.jsx)("div",{children:e.poster_path?Object(y.jsx)("img",{style:{width:"98%",height:"310px",padding:"3px"},src:"https://image.tmdb.org/t/p/w300"+e.poster_path,alt:"poster"}):Object(y.jsx)("img",{style:{width:"98%",height:"310px",padding:"3px"},src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS77eBijOyeLSZcsTopPrTvkMjTJVNpF44iA&usqp=CAU",alt:"poster"})})]},t)}))})]})]})},T=function(){return Object(y.jsx)("div",{className:"headerBackground",children:Object(y.jsxs)("div",{className:"wrapper",children:[Object(y.jsx)("div",{className:"link",children:Object(y.jsx)(j.b,{to:"/",children:"Luco TV"})}),Object(y.jsx)("div",{className:"link",children:Object(y.jsx)(j.b,{to:"/added",children:"Added Movies"})})]})})},A=function(e){var t=e.title,n=e.id,s=e.img,i=e.genre,r=e.movies,a=e.genre_ids,o=Object(c.useContext)(_),d=o.addMovieToList,l=!!o.movieList.find((function(e){return e.id===r.id}));return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("div",{className:"card",children:[Object(y.jsx)("h4",{children:t}),Object(y.jsx)("div",{className:"genres",children:a.map((function(e){return Object(y.jsx)("span",{children:i[e]},e)}))}),Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"image",children:s?Object(y.jsx)("img",{src:"https://image.tmdb.org/t/p/w200"+s,alt:"poster"}):Object(y.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS77eBijOyeLSZcsTopPrTvkMjTJVNpF44iA&usqp=CAU",alt:"poster"})}),Object(y.jsxs)("div",{className:"cardButtons",children:[Object(y.jsx)("button",{disabled:l,onClick:function(){return d(r)},children:l?"Added":"Add"}),Object(y.jsx)(j.b,{to:"/info/".concat(n),children:"Info"})]})]})]})})},C=function(e){var t=e.query,n=e.onChange,c=e.nextPage,s=e.prevPage;return Object(y.jsxs)("div",{className:"controlPanel",children:[Object(y.jsx)("button",{onClick:s,children:"Prev Page"}),Object(y.jsx)("input",{placeholder:"  Search...",value:t,type:"text",onChange:n}),Object(y.jsx)("button",{onClick:c,children:"Next Page"})]})},P=function(e){var t=e.movies,n=e.genre,c=e.query,s=e.onChange,i=e.nextPage,r=e.prevPage;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(C,{prevPage:r,nextPage:i,query:c,onChange:s}),Object(y.jsx)("div",{className:"wrapper",children:t.map((function(e){return Object(y.jsx)(A,{id:e.id,title:e.title,img:e.poster_path,genre:n,movies:e,genre_ids:e.genre_ids},e.id)}))})]})},k={movieList:localStorage.getItem("movieList")?JSON.parse(localStorage.getItem("movieList")):[]},q=function(){var e=s.a.useState([]),t=Object(a.a)(e,2),n=t[0],c=t[1],i=s.a.useState(null),r=Object(a.a)(i,2),o=r[0],p=r[1],b=s.a.useState(1),h=Object(a.a)(b,2),g=h[0],v=h[1],N=s.a.useState(""),A=Object(a.a)(N,2),C=A[0],q=A[1],w=s.a.useState([]),M=Object(a.a)(w,2),I=M[0],E=M[1],F=s.a.useReducer(f,k),V=Object(a.a)(F,2),B=V[0],D=V[1];s.a.useEffect((function(){localStorage.setItem("movieList",JSON.stringify(B.movieList))}),[B]);s.a.useEffect((function(){m().then((function(e){c(e.results),p(e.total_pages)})),O().then((function(e){E(Object.fromEntries(e.genres.map((function(e){return[e.id,e.name]}))))}))}),[]);var J=s.a.useMemo((function(){return Object(u.debounce)((function(e,t){e.length>0?x({query:e,pageNumber:t}).then((function(e){c(e.results),p(e.total_pages)})):m({pageNumber:t}).then((function(e){c(e.results),p(e.total_pages)}))}),300)}),[]),R=function(e){console.log(e)};return Object(y.jsxs)(_.Provider,{value:{movieList:B.movieList,added:B.added,addMovieToList:function(e){D({type:"ADD_MOVIE_TO_LIST",payload:e})},removeMovie:function(e){D({type:"REMOVE_MOVIE",payload:e})}},children:[Object(y.jsx)(d.a,{clientId:"207215828927-45a8gop4ba2c0hcm0vhrbndrkvqcfs6t.apps.googleusercontent.com",buttonText:"Login",onSuccess:R,onFailure:R,cookiePolicy:"single_host_origin"}),Object(y.jsxs)(j.a,{children:[Object(y.jsx)(T,{}),Object(y.jsxs)(l.c,{children:[Object(y.jsx)(l.a,{exact:!0,path:"/",children:Object(y.jsx)(P,{movies:n,genre:I,prevPage:function(){C.length>0&&g>1?(v(g-1),x({page:g-1,query:C}).then((function(e){c(e.results),p(e.total_pages)}))):0===C.length&&g>1&&(v(g-1),m({page:g-1,query:C}).then((function(e){c(e.results),p(e.total_pages)})))},nextPage:function(){C.length>0&&g<o?(v(g+1),x({page:g+1,query:C}).then((function(e){c(e.results),p(e.total_pages)}))):0===C.length&&g<o&&(v(g+1),m({page:g+1,query:C}).then((function(e){c(e.results),p(e.total_pages)})))},query:C,onChange:function(e){e.preventDefault(),J(e.target.value,g),q(e.target.value)}})}),Object(y.jsx)(l.a,{path:"/added",children:Object(y.jsx)(S,{genre:I})}),Object(y.jsx)(l.a,{path:"/info/:id",children:Object(y.jsx)(L,{movies:n,genre:I})})]})]})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),i(e),r(e)}))};r.a.render(Object(y.jsx)(s.a.StrictMode,{children:Object(y.jsx)(q,{})}),document.getElementById("root")),w()}},[[65,1,2]]]);
//# sourceMappingURL=main.355e3337.chunk.js.map