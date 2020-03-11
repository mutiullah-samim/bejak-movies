(this["webpackJsonpmovie-list"]=this["webpackJsonpmovie-list"]||[]).push([[0],{38:function(e,t,a){e.exports=a(82)},79:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(12),r=a.n(s),i=a(8),c=a(6),m=a(13),o=a(14),d=a(17),u=a(15),v=a(18),f=a(16),p=a.n(f),h=a(34),E=a(35),x=a.n(E);var N=function(e){var t=e.movie,a=t.images.find((function(e){return"POSTER"===e.type}));return l.a.createElement(i.b,{to:"/bejak-movies/movie-details/"+t.id},l.a.createElement("div",{className:"d-flex flex-column align-items-center"},l.a.createElement("img",{src:a.url,alt:t.title}),l.a.createElement("h4",{className:"text-center"},t.title)))};var g=function(e){var t=e.row;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"d-felx flex-column w-100 mt-5"},l.a.createElement("h3",{className:"px-3"},t.row_name),l.a.createElement("div",{className:"px-3 w-100"},l.a.createElement(x.a,{dots:!1,infinite:!1,speed:500,slidesToShow:4,slidesToScroll:4},t.data.map((function(e,t){return l.a.createElement(N,{key:t,movie:e})}))))))},y=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={movies:[],loadMovie:{page:1,perPage:20,region:"ID",hasMore:!0}},a.fetchMovies=function(e){p.a.get("https://cdn-discover.hooq.tv/v1.2/discover/feed",{params:e}).then((function(e){a.setState({movies:a.state.movies.concat(e.data.data.filter((function(e){return"Multi-Title-Manual-Curation"===e.type&&null!==e.data}))),loadMovie:{page:a.state.loadMovie.page+1,perPage:20,region:"ID",hasMore:e.data.pagination.totalPages>a.state.loadMovie.page}})})).catch((function(e){return console.log(e)}))},a}return Object(v.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.fetchMovies(this.state.loadMovie)}},{key:"render",value:function(){return l.a.createElement(h.a,{dataLength:this.state.movies.length,next:this.fetchMovies.bind(this,this.state.loadMovie),hasMore:this.state.loadMovie.hasMore,loader:l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("div",{className:"lds-ripple"},l.a.createElement("div",null),l.a.createElement("div",null)))},this.state.movies.map((function(e,t){return l.a.createElement(g,{key:t,row:e})})))}}]),t}(n.Component);var b=function(){return l.a.createElement("div",{className:"header d-flex flex-row alig-items-center"},l.a.createElement(i.b,{to:"/bejak-movies"},l.a.createElement("h3",null,"BJAK Movies")))},w=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={id:a.props.match.params.id,details:{},detailFetched:!1},a}return Object(v.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://cdn-discover.hooq.tv/v1.2/discover/titles/"+this.state.id).then((function(t){e.setState({details:t.data.data,detailFetched:!0})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){if(this.state.detailFetched){var e,t=this.state.details.images.find((function(e){return"SPOTLIGHT"===e.type})),a=this.state.details.images.find((function(e){return"BACKGROUND"===e.type}));e=t||a;var n=this.state.details.images.find((function(e){return"POSTER"===e.type})),s=[],r=[];this.state.details.people.filter((function(e){return"DIRECTOR"!==e.role?s.push(e.name):""})),this.state.details.people.filter((function(e){return"DIRECTOR"===e.role?r.push(e.name):""})),s=s.join(", "),r=r.join(", ");var i=[];return this.state.details.tags.map((function(e){return i.push(e.label)})),i=i.join(", "),l.a.createElement("div",{className:"d-flex flex-column w-100"},l.a.createElement("div",{className:"d-flex w-100 position-relative"},l.a.createElement("img",{className:"banner_img w-100 h-auto",src:e.url,alt:this.state.details.title}),l.a.createElement("div",{className:"video-play-button",href:"#"},l.a.createElement("span",null))),l.a.createElement("div",{className:"d-flex flex-row p-5"},l.a.createElement("div",null,l.a.createElement("img",{className:"poster_img",src:n.url,alt:this.state.details.title})),l.a.createElement("div",{className:"d-flex flex-column justify-content-center ml-4"},l.a.createElement("h4",{className:"primary-text"},this.state.details.title),l.a.createElement("div",{className:"d-flex flex-row second-text-size"},l.a.createElement("div",{className:"d-flex flex-column flex-1 mr-3"},l.a.createElement("div",{className:"d-flex flex-row"},l.a.createElement("span",{className:"secondary-text mr-2"},"Genre: "),l.a.createElement("div",{className:"primary-text"},i)),l.a.createElement("div",{className:"d-flex flex-row"},l.a.createElement("span",{className:"secondary-text mr-2"},"Actor: "),l.a.createElement("div",{className:"primary-text"},s)),l.a.createElement("div",{className:"d-flex flex-row"},l.a.createElement("span",{className:"secondary-text mr-2"},"Director: "),l.a.createElement("div",{className:"primary-text"},r)),l.a.createElement("div",{className:"d-flex flex-row"},l.a.createElement("span",{className:"secondary-text mr-2"},"Description: "),l.a.createElement("div",{className:"primary-text"},this.state.details.short_description))),l.a.createElement("div",{className:"d-flex flex-column flex-1"},l.a.createElement("div",{className:"d-flex flex-row"},l.a.createElement("span",{className:"secondary-text mr-2"},"Release: "),l.a.createElement("div",{className:"primary-text"},this.state.details.meta.releaseYear)),l.a.createElement("div",{className:"d-flex flex-row"},l.a.createElement("span",{className:"secondary-text mr-2"},"Languages: "),l.a.createElement("div",{className:"primary-text"},this.state.details.languages.join(", "))),l.a.createElement("div",{className:"d-flex flex-row"},l.a.createElement("span",{className:"secondary-text mr-2"},"Age Rating: "),l.a.createElement("div",{className:"primary-text"},this.state.details.meta.ageRating))),l.a.createElement("div",{className:"d-flex flex-column"},l.a.createElement("div",{className:"primary-btn mb-3"},"Stream in HD"),l.a.createElement("div",{className:"primary-btn"},"Download in HD"))))))}return l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("div",{className:"lds-ripple"},l.a.createElement("div",null),l.a.createElement("div",null)))}}]),t}(n.Component);a(79),a(80),a(81);var j=function(){return l.a.createElement(i.a,null,l.a.createElement(b,null),l.a.createElement(c.a,{exact:!0,path:"/bejak-movies",component:y}),l.a.createElement(c.a,{path:"/bejak-movies/movie-details/:id",component:w}))};r.a.render(l.a.createElement(j,null),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.0dd41b7f.chunk.js.map