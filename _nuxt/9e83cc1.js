(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{197:function(t,e,r){"use strict";r.r(e);r(127),r(23);var n=r(2),o={data:function(){return{query:"",posts:[]}},watch:{query:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t){r.next=3;break}return e.posts=[],r.abrupt("return");case 3:return r.next=5,e.$content("posts").limit(6).search(t).fetch();case 5:e.posts=r.sent;case 6:case"end":return r.stop()}}),r)})))()}}},c=r(24),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"focus:outline-none",attrs:{type:"text",autocomplete:"off",placeholder:"Search.."},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),t._v(" "),t.query.length?r("ul",{staticClass:"absolute px-4 py-2 w-64 rounded shadow mt-3 right-0 overflow-hidden"},[t._l(t.posts,(function(e){return r("li",{key:e.slug},[r("NuxtLink",{staticClass:"block py-1 text-green-500 hover:underline",attrs:{to:{name:"posts-slug",params:{slug:e.slug}}}},[t._v(t._s(e.title))])],1)})),t._v(" "),t.posts.length?t._e():r("li",{staticClass:"text-gray-600"},[t._v("¯\\_( ͡❛ ͜ʖ ͡❛)_/¯")])],2):t._e()])}),[],!1,null,null,null);e.default=component.exports},201:function(t,e,r){"use strict";r.r(e);r(23);var n=r(2),o={head:function(){return{title:"Home"}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("posts",n.slug).only(["title","excerpt","image","slug","category","createdAt"]).sortBy("createdAt","desc").fetch();case 3:return o=e.sent,e.abrupt("return",{posts:o});case 5:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"short",day:"numeric"})}}},c=r(24),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex justify-center px-4"},[r("div",{staticClass:"w-full max-w-2xl py-6"},[r("div",{staticClass:"flex items-center justify-between mb-10"},[r("h1",{staticClass:"text-4xl font-bold"},[t._v("👨‍💻 Blog")]),t._v(" "),r("Search")],1),t._v(" "),t.posts?r("div",t._l(t.posts,(function(e,n){return r("div",{key:e.slug,staticClass:"space-x-2",class:[n<1?"mt-0":"mt-2"]},[r("span",[t._v(t._s(t.formatDate(e.createdAt)))]),t._v(" "),r("NuxtLink",{attrs:{to:{name:"posts-slug",params:{slug:e.slug}}}},[r("span",{staticClass:"font-medium text-green-500 underline"},[t._v(t._s(e.title))])]),t._v(" "),e.category?r("NuxtLink",{attrs:{to:"/categories/"+e.category}},[r("span",{staticClass:"font-medium text-gray-600 underline"},[t._v("#"+t._s(e.category))])]):t._e()],1)})),0):t._e()])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Search:r(197).default})}}]);