/*! For license information please see 191.2a157df2.chunk.js.LICENSE.txt */
(self.webpackChunktaeseop_personal=self.webpackChunktaeseop_personal||[]).push([[191],{2191:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return O}});var n=r(2791),i=r(1087),o=r(6842),a=r(184),s=function(t){var e=t.label,r=t.link,n=t.value,i=t.format;return(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{width:"70%",children:e}),(0,a.jsx)("td",{children:r?(0,a.jsx)("a",{href:r,children:i(n)}):i(n)})]})};s.defaultProps={format:function(t){return t},link:null,value:null};var u=s,c=function(t){var e=t.data;return(0,a.jsx)("table",{children:(0,a.jsx)("tbody",{children:e.map((function(t){return(0,a.jsx)(u,{format:t.format,label:t.label,link:t.link,value:t.value},t.label)}))})})},l=r(9439),f=function(){var t=(0,n.useState)(),e=(0,l.Z)(t,2),r=e[0],i=e[1];return(0,n.useEffect)((function(){var t=setInterval((function(){return function(){var t=new Date("1990-02-05T09:24:00");i(((Date.now()-t)/31556925190.079998).toFixed(11))}()}),25);return function(){clearInterval(t)}}),[]),(0,a.jsx)(a.Fragment,{children:r})},h=[{key:"age",label:"Current age",value:(0,a.jsx)(f,{})},{key:"countries",label:"Countries visited",value:53,link:"https://www.google.com/maps/d/embed?mid=1iBBTscqateQ93pWFVfHCUZXoDu8&z=2"},{key:"location",label:"Current city",value:"New York, NY"}],d=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h3",{children:"Some stats about me"}),(0,a.jsx)(c,{data:h})]})},p=r(1002);function v(){v=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(L){u=function(t,e,r){return t[e]=r}}function c(t,e,r,i){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),s=new M(i||[]);return n(a,"_invoke",{value:O(t,r,s)}),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(L){return{type:"throw",arg:L}}}t.wrap=c;var f={};function h(){}function d(){}function y(){}var m={};u(m,o,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(D([])));b&&b!==e&&r.call(b,o)&&(m=b);var w=y.prototype=h.prototype=Object.create(m);function $(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function i(n,o,a,s){var u=l(t[n],t,o);if("throw"!==u.type){var c=u.arg,f=c.value;return f&&"object"==(0,p.Z)(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){i("next",t,a,s)}),(function(t){i("throw",t,a,s)})):e.resolve(f).then((function(t){c.value=t,a(c)}),(function(t){return i("throw",t,a,s)}))}s(u.arg)}var o;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){i(t,r,e,n)}))}return o=o?o.then(n,n):n()}})}function O(t,e,r){var n="suspendedStart";return function(i,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw o;return _()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var s=k(a,r);if(s){if(s===f)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function k(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var i=l(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,f;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function D(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:_}}function _(){return{value:void 0,done:!0}}return d.prototype=y,n(w,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:d,configurable:!0}),d.displayName=u(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},$(x.prototype),u(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new x(c(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},$(w),u(w,s,"Generator"),u(w,o,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=D,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(s&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;S(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:D(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var y=r(1413);function m(t,e,r,n,i,o,a){try{var s=t[o](a),u=s.value}catch(c){return void r(c)}s.done?e(u):Promise.resolve(u).then(n,i)}function g(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var o=t.apply(e,r);function a(t){m(o,n,i,a,s,"next",t)}function s(t){m(o,n,i,a,s,"throw",t)}a(void 0)}))}}var b=r(7892),w=r.n(b),$=[{label:"Stars this repository has on github",key:"stargazers_count",link:"https://github.com/mldangelo/personal-site/stargazers"},{label:"Number of people watching this repository",key:"subscribers_count",link:"https://github.com/mldangelo/personal-site/stargazers"},{label:"Number of forks",key:"forks",link:"https://github.com/mldangelo/personal-site/network"},{label:"Number of spoons",value:"0"},{label:"Number of linter warnings",value:"0"},{label:"Open github issues",key:"open_issues_count",link:"https://github.com/mldangelo/personal-site/issues"},{label:"Last updated at",key:"pushed_at",link:"https://github.com/mldangelo/personal-site/commits",format:function(t){return w()(t).format("MMMM DD, YYYY")}},{label:"Lines of Javascript powering this website",value:"2150",link:"https://github.com/mldangelo/personal-site/graphs/contributors"}],x=function(){var t=(0,n.useState)($),e=(0,l.Z)(t,2),r=e[0],i=e[1],o=(0,n.useCallback)(g(v().mark((function t(){var e,r;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.github.com/repos/mldangelo/personal-site");case 2:return e=t.sent,t.next=5,e.json();case 5:r=t.sent,i($.map((function(t){return(0,y.Z)((0,y.Z)({},t),{},{value:Object.keys(r).includes(t.key)?r[t.key]:t.value})})));case 7:case"end":return t.stop()}}),t)}))),[]);return(0,n.useEffect)((function(){o()}),[o]),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{children:"Some stats about this site"}),(0,a.jsx)(c,{data:r})]})},O=function(){return(0,a.jsx)(o.Z,{title:"Stats",description:"Some statistics about Michael D'Angelo and mldangelo.com",children:(0,a.jsxs)("article",{className:"post",id:"stats",children:[(0,a.jsx)("header",{children:(0,a.jsx)("div",{className:"title",children:(0,a.jsx)("h2",{children:(0,a.jsx)(i.rU,{to:"/stats",children:"Stats"})})})}),(0,a.jsx)(d,{}),(0,a.jsx)(x,{})]})})}},7892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,r=36e5,n="millisecond",i="second",o="minute",a="hour",s="day",u="week",c="month",l="quarter",f="year",h="date",d="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],r=t%100;return"["+t+(e[(r-20)%10]||e[r]||e[0])+"]"}},m=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},g={s:m,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),i=r%60;return(e<=0?"+":"-")+m(n,2,"0")+":"+m(i,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),i=e.clone().add(n,c),o=r-i<0,a=e.clone().add(n+(o?-1:1),c);return+(-(n+(r-i)/(o?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:f,w:u,d:s,D:h,h:a,m:o,s:i,ms:n,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},b="en",w={};w[b]=y;var $=function(t){return t instanceof j},x=function t(e,r,n){var i;if(!e)return b;if("string"==typeof e){var o=e.toLowerCase();w[o]&&(i=o),r&&(w[o]=r,i=o);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var s=e.name;w[s]=e,i=s}return!n&&i&&(b=i),i||!n&&b},O=function(t,e){if($(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new j(r)},k=g;k.l=x,k.i=$,k.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var j=function(){function y(t){this.$L=x(t.locale,null,!0),this.parse(t)}var m=y.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(k.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(p);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return k},m.isValid=function(){return!(this.$d.toString()===d)},m.isSame=function(t,e){var r=O(t);return this.startOf(e)<=r&&r<=this.endOf(e)},m.isAfter=function(t,e){return O(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<O(t)},m.$g=function(t,e,r){return k.u(t)?this[e]:this.set(r,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var r=this,n=!!k.u(e)||e,l=k.p(t),d=function(t,e){var i=k.w(r.$u?Date.UTC(r.$y,e,t):new Date(r.$y,e,t),r);return n?i:i.endOf(s)},p=function(t,e){return k.w(r.toDate()[t].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),r)},v=this.$W,y=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(l){case f:return n?d(1,0):d(31,11);case c:return n?d(1,y):d(0,y+1);case u:var b=this.$locale().weekStart||0,w=(v<b?v+7:v)-b;return d(n?m-w:m+(6-w),y);case s:case h:return p(g+"Hours",0);case a:return p(g+"Minutes",1);case o:return p(g+"Seconds",2);case i:return p(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var r,u=k.p(t),l="set"+(this.$u?"UTC":""),d=(r={},r[s]=l+"Date",r[h]=l+"Date",r[c]=l+"Month",r[f]=l+"FullYear",r[a]=l+"Hours",r[o]=l+"Minutes",r[i]=l+"Seconds",r[n]=l+"Milliseconds",r)[u],p=u===s?this.$D+(e-this.$W):e;if(u===c||u===f){var v=this.clone().set(h,1);v.$d[d](p),v.init(),this.$d=v.set(h,Math.min(this.$D,v.daysInMonth())).$d}else d&&this.$d[d](p);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[k.p(t)]()},m.add=function(n,l){var h,d=this;n=Number(n);var p=k.p(l),v=function(t){var e=O(d);return k.w(e.date(e.date()+Math.round(t*n)),d)};if(p===c)return this.set(c,this.$M+n);if(p===f)return this.set(f,this.$y+n);if(p===s)return v(1);if(p===u)return v(7);var y=(h={},h[o]=e,h[a]=r,h[i]=t,h)[p]||1,m=this.$d.getTime()+n*y;return k.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||d;var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=k.z(this),o=this.$H,a=this.$m,s=this.$M,u=r.weekdays,c=r.months,l=r.meridiem,f=function(t,r,i,o){return t&&(t[r]||t(e,n))||i[r].slice(0,o)},h=function(t){return k.s(o%12||12,t,"0")},p=l||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(v,(function(t,n){return n||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return k.s(e.$y,4,"0");case"M":return s+1;case"MM":return k.s(s+1,2,"0");case"MMM":return f(r.monthsShort,s,c,3);case"MMMM":return f(c,s);case"D":return e.$D;case"DD":return k.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return f(r.weekdaysMin,e.$W,u,2);case"ddd":return f(r.weekdaysShort,e.$W,u,3);case"dddd":return u[e.$W];case"H":return String(o);case"HH":return k.s(o,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return p(o,a,!0);case"A":return p(o,a,!1);case"m":return String(a);case"mm":return k.s(a,2,"0");case"s":return String(e.$s);case"ss":return k.s(e.$s,2,"0");case"SSS":return k.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(n,h,d){var p,v=this,y=k.p(h),m=O(n),g=(m.utcOffset()-this.utcOffset())*e,b=this-m,w=function(){return k.m(v,m)};switch(y){case f:p=w()/12;break;case c:p=w();break;case l:p=w()/3;break;case u:p=(b-g)/6048e5;break;case s:p=(b-g)/864e5;break;case a:p=b/r;break;case o:p=b/e;break;case i:p=b/t;break;default:p=b}return d?p:k.a(p)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return w[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=x(t,e,!0);return n&&(r.$L=n),r},m.clone=function(){return k.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},y}(),S=j.prototype;return O.prototype=S,[["$ms",n],["$s",i],["$m",o],["$H",a],["$W",s],["$M",c],["$y",f],["$D",h]].forEach((function(t){S[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),O.extend=function(t,e){return t.$i||(t(e,j,O),t.$i=!0),O},O.locale=x,O.isDayjs=$,O.unix=function(t){return O(1e3*t)},O.en=w[b],O.Ls=w,O.p={},O}()},4942:function(t,e,r){"use strict";r.d(e,{Z:function(){return i}});var n=r(9142);function i(t,e,r){return(e=(0,n.Z)(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},1413:function(t,e,r){"use strict";r.d(e,{Z:function(){return o}});var n=r(4942);function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}}}]);
//# sourceMappingURL=191.2a157df2.chunk.js.map