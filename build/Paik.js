Pk.l=function(a,e,g,k){this.interval=new Pk.a(a,e);this.interval.clip=this;this.A=g;this.C=k.bind(this)};Pk.l.prototype={i:function(a){tickFunction(a)},Play:function(){resources.forEach(function(){})},I:function(){resources.forEach(function(){})}};Pk.$=function(){function a(){e=window.requestAnimationFrame(a);var g=Pk.K,h=timePoll();h!=g.v&&(g.v=h,Pk.t.H(h))}var e,g=!1;return{da:function(){!0!==g&&(e=window.requestAnimationFrame(a),g=!0)},I:function(){window.cancelAnimationFrame(e);g=!1},W:function(a){Pk.d.h(a)&&(Pk.U=new Pk.Z(a))},ca:function(a){Pk.K=a}}}();Pk.q=[];Pk.D=function(a,e){this.name=a;this.u=e;this.o=new Set;this.self=this};Pk.D.prototype={j:function(a){if(a instanceof Pk.l)a.group=this,Pk.t.j(a);else throw"Not a valid clip";},i:function(a){this.u.i(a);this.o.forEach(function(e){e(a)})}};function u(a,e){a.o["delete"](e.C);e.A.forEach(function(){}.bind(a))}function v(a,e){a.o.add(e.C);e.A.forEach(function(a){this.u.j(a)}.bind(a))};Pk.p=function(a){this.type="Pk.GroupController";Pk.d.h(a)?"Add Remove Begin Tick Draw End".split(" ").forEach(function(e){Pk.d.G(a[e])?this[e]=a[e]:console.warn(e+" is not implemented in this GroupController")}.bind(this)):console.error("Not a valid GroupController")};Pk.p.prototype.j=function(){};Pk.p.prototype.i=function(){};Pk.a=function(a,e){this.id=++Pk.a.prototype.id;this.b=a;this.c=e;this.f={}};Pk.a.prototype.id=0;Pk.a.n=Pk.a.prototype;Pk.a.prototype.s=1;Pk.a.prototype.k=2;Pk.a.prototype.r=3;Pk.a.prototype.clip=null;Pk.a.prototype.w=function(a){if(a.b>this.c||a.c<this.b)return this.k};Pk.a.prototype.N=function(a){if(a.b>=this.c||a.c<=this.b)return this.k};
Pk.F=function(){function a(b){if(!(b instanceof Array))throw{name:"InvalidParameter",message:"parameter must be an array"};for(var d=0;d<b.length;d++)if("number"!==typeof b[d])throw{name:"InvalidParameter",message:"array must consist only of numbers"};}function e(b,d){if(!(b instanceof Array&&d instanceof Array))throw{name:"InvalidParameter",message:"function pushArray: parameters must be arrays"};if(b.length!==d.length)throw{name:"InvalidParameter",message:"function pushArray: arrays must have same length"};
for(var c=0;c<b.length;c++)g(b[c],d[c])}function g(b,d){if("number"!==typeof b||"number"!==typeof d)throw{name:"InvalidInterval",message:"endpoints of interval must be of type number"};if(b>d)throw{name:"InvalidInterval",message:"("+b+","+d+") a > b"};}function k(b,d){if(null!==b){var c;if(0!==b.e.length){c=b.e;for(var a=0;a<d.length;a++)for(var e=d[a],f=0;f<c.length;f++)c[f].f[e.id]=e,e.f[c[f].id]=c[f];for(a=0;a<c.length;a++)for(f=a+1;f<c.length;f++)c[a].f[c[f].id]=c[f],c[f].f[c[a].id]=c[a];c=d.concat(b.e)}else c=
d;k(b.left,c);k(b.right,c)}}function h(b,d,c){var a={};void 0===c&&(c=Pk.a.prototype.w);n(p,b,a,c);b=Object.keys(a).map(function(b){return a[b]});void 0!==d&&"function"===typeof d&&d(a);return b.length}function n(b,d,c,a){null!==b&&d.forEach(function(e){a.call(b.g,e)!==Pk.a.n.k&&(b.e.forEach(function(b){c[b.id]=b}),n(b.right,d,c,a),n(b.left,d,c,a))})}function q(b,d,c){if(null!==b)return void 0===d&&(d=-1),void 0===c&&(c=[]),d++,c[d]||(c[d]=[]),c[d].push(b),q(b.right,d,c),q(b.left,d,c),c}function l(b,
d,c){null!==b&&(void 0!==d&&d(b),l(b.right,d,c),l(b.left,d,c),void 0!==c&&c(b))}function f(b,d){var c=b.g;switch(d.b>c.c||d.c<c.b?c.k:d.b<=c.b&&d.c>=c.c?c.s:c.r){case Pk.a.n.s:b.e.push(d);break;case Pk.a.n.r:b.left&&f(b.left,d),b.right&&f(b.right,d)}}function r(b){var d;if(2===b.length)d=new t(b[0],b[1]),Infinity!==b[1]&&(d.left=new t(b[0],b[1]),d.right=new t(b[1],b[1]));else{d=new t(b[0],b[b.length-1]);var c=Math.floor(b.length/2);d.left=r(b.slice(0,c+1));d.right=r(b.slice(c))}return d}function w(b,
d){var c=[],a;b.sort(d).forEach(function(b){if(void 0!==d&&void 0!==a?0!==d(a,b):a!==b)c.push(b),a=b});return c}function x(){var b=[];b.push(-Infinity);b.push(Infinity);m.forEach(function(d){b.push(d.b);b.push(d.c)});return w(b,function(b,c){return b-c})}function t(b,d){this.right=this.left=null;this.g=new Pk.a(b,d);this.e=[]}var p=null,m=[];return{O:function(b){g(b.b,b.c);m.push(b)},ka:function(b,d,c){(void 0!==c?c:1)&&e(b,d);for(c=0;c<b.length;c++)m.push(new Pk.a(b[c],d[c]))},fa:function(){m.length=
0;Pk.a.prototype.id=0},L:function(){if(0===m.length)throw{name:"BuildTreeError",message:"interval stack is empty"};p=r(x());m.forEach(function(b){f(p,b)})},ia:function(){l(p,function(b){console.log("\nSegment: (%d,%d)",b.g.b,b.g.c);b.e.forEach(function(b,c){console.log("Interval %d: (%d,%d)",c,b.b,b.c)})})},ja:function(){q(p).forEach(function(b,a){console.log("Level %d:",a);b.forEach(function(b,a){console.log("Segment %d: (%d,%d)",a,b.g.b,b.g.c);b.e.forEach(function(b,c){console.log("  Pk.Interval %d: (%d,%d)",
c,b.b,b.c)})})})},ma:function(b,a){if("number"!==typeof b)throw{name:"InvalidParameter",message:"parameter must be a number"};return this.R([b],a)},R:function(b,d,c){(void 0!==c?c:1)&&a(b);b=b.map(function(b){return new Pk.a(b,b)});return h(b,d)},P:function(b,a,c){g(b,a);return this.Q([b],[a],c)},Q:function(b,a,c){var f=[],g=void 0!==c&&void 0!==c.B?c.B:void 0,r=void 0!==c&&!1===c.ga?Pk.a.prototype.N:Pk.a.prototype.w;(void 0!==c&&void 0!==c.T?c.T:1)&&e(b,a);for(c=0;c<b.length;c++)f.push(new Pk.a(b[c],
a[c]));return h(f,g,r)},la:function(){k(p,[]);var b=[];m.forEach(function(a){var c=new Pk.a;c.id=a.id;c.b=a.b;c.c=a.c;c.f=Object.keys(a.f);b.push(c)});return b}}};Pk={};Pk.aa=function(){};Pk.J=function(a){timePoll=a};Pk.J.prototype={v:0};Pk.t=function(){function a(a){a.forEach(function(a){u(a.group,a)})}function e(a){a.forEach(function(a){v(a.group,a)})}function g(f){var g=[];Object.keys(l).forEach(function(a){if(Pk.d.h(f[a]))delete f[a];else{var e=l[a];delete l[a];g.push(e.clip)}});a(g);e(Object.keys(f).map(function(a){return f[a].clip}));Object.keys(f).forEach(function(a){l[a]=f[a]})}var k=0,h=null,n=[],q=!1,l={};return{H:function(a,e){Pk.d.h(e)||(e=!0);e&&h.P(k,a,{B:g.bind(this)});Pk.q.forEach(function(e){e.i(a)});Pk.q.forEach(function(){});
k=a},V:function(){h=new Pk.F;n.forEach(function(a){h.O(a.interval)});h.L();q=!0},j:function(){if(!0===q)console.warn("Trying to add clips to a built timeline");else for(var a=arguments.length-1;0<=a;a--)if(arguments[a]instanceof Pk.l)n.push(arguments[a]);else throw"Trying to add a non-clip to the timeline";},ba:function(){}}}();Pk.d={};Pk.d.ea=function(a){for(var e=0;e<a;e++);};Pk.d.h=function(a){return"undefined"!==typeof a};Pk.d.Y=function(a){return!0===a||!1===a};Pk.d.G=function(a){var e={};return Pk.d.h(a)&&"[object Function]"===e.toString.call(a)};Pk.m=function(a){time=-.01;videoElement=a;videoImage=document.createElement("canvas");videoImage.width=videoElement.videoWidth;videoImage.height=videoElement.videoHeight;console.log("Video Size :"+videoImage.width+" "+videoImage.height);videoContext=videoImage.getContext("2d");videoContext.fillStyle="#000000";videoContext.fillRect(0,0,videoImage.width,videoImage.height);this.M=videoContext};
Pk.m.X=function(a){var e=document.createElement("video"),g=document.createElement("source");g.src=a;e.appendChild(g);return new Pk.m(e)};Pk.m.prototype={i:function(){videoElement.readyState===videoElement.HAVE_ENOUGH_DATA&&(this.M.drawImage(videoElement,0,0),this.S&&(this.S.ha=!0))}};