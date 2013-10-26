/* Handlebars Helper v0.0.2
   Generated on 2013-10-26 at 00:28:02 */

!function(a){"object"==typeof exports?module.exports=a():"function"==typeof define&&define.amd?define(a):"undefined"!=typeof window?window.handlebarshelper=a():"undefined"!=typeof global?global.handlebarshelper=a():"undefined"!=typeof self&&(self.handlebarshelper=a())}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);throw new Error("Cannot find module '"+g+"'")}var j=c[g]={exports:{}};b[g][0].call(j.exports,function(a){var c=b[g][1][a];return e(c?c:a)},j,j.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b){b.exports=a("./lib")},{"./lib":18}],2:[function(a,b){var c=31536e3,d=2592e3,e=86400,f=3600;b.exports=function(a){a=new Date(a);var b=Math.floor((new Date-a)/1e3),g=Math.floor(b/c);return g>1?g+" years ago":(g=Math.floor(b/d),g>1?g+" months ago":(g=Math.floor(b/e),g>1?g+" days ago":(g=Math.floor(b/f),g>1?g+" hours ago":(g=Math.floor(b/60),g>1?g+" minutes ago":Math.floor(b)<=1?"Just now":Math.floor(b)+" seconds ago"))))}},{}],3:[function(a,b){b.exports=function(a,b,c,d){if(d=d||c,"number"==typeof b){c="number"!=typeof c?void 0:c>0?c+1:c,a=a.slice(b,c);for(var e="",f=0;f<a.length;f++)e+=d.fn(a[f]);return e}}},{}],4:[function(a,b){b.exports=function(a,b,c){if("string"==typeof a)return a.search(b)>=0?c.fn():c.inverse();for(var d in a)if(a.hasOwnProperty(d)&&a[d]==b)return c.fn();return c.inverse()}},{}],5:[function(a,b){b.exports=function(a){return encodeURIComponent(a)}},{}],6:[function(a,b){b.exports=function(a,b,c,d){d=d||c,c="boolean"==typeof c?c:!1;var e=c?a===b:a==b;return e?d.fn():d.inverse()}},{}],7:[function(a,b){b.exports=function(a,b,c){c=c||b,b="number"==typeof b?b:1;for(var d="",e=0;e<a.length;e++)if(d+=c.fn(a[e]),e+1==b)return d}},{}],8:[function(a,b){var c=a("strftime");b.exports=function(a,b){var d=new Date(a);return c(b,d)}},{strftime:19}],9:[function(a,b){b.exports=function(a,b,c){c=c||b,b="number"==typeof b?b:1;for(var d="",e=0;e<a.length;e++)if(d+=c.fn(a[a.length-b+e]),e+1==b)return d}},{}],10:[function(a,b){b.exports=function(a){if(a.length)return a.length;var b=0;for(var c in a)a.hasOwnProperty(c)&&b++;return b}},{}],11:[function(a,b){b.exports=function(a){return(a||"").toLowerCase()}},{}],12:[function(a,b){b.exports=function(a,b,c,d){if(d=d||c,"number"==typeof b){var e="number"!=typeof c?void 0:b+c;a=a.slice(b,e);for(var f="",g=0;g<a.length;g++)f+=d.fn(a[g]);return f}}},{}],13:[function(a,b){b.exports=function(a,b,c){return(a||"").replace(b,c)}},{}],14:[function(a,b){b.exports=function(a,b){for(var c="",d=a.length-1;d>=0;d--)c+=b.fn(a[d]);return c}},{}],15:[function(a,b){var c=function(a){for(var b,c,d=a.length;d;)b=Math.floor(Math.random()*d--),c=a[d],a[d]=a[b],a[b]=c;return a};b.exports=function(a,b){for(var d=c(a),e="",f=0;f<d.length;f++)e+=b.fn(d[f]);return e}},{}],16:[function(a,b){b.exports=function(a){return(a||"").toUpperCase()}},{}],17:[function(a,b){b.exports=function(a,b,c,d,e){e=e||d,"number"!=typeof d&&(d=1/0);for(var f=0,g="",h=0;h<a.length;h++)if(a[h][b]===c&&(g+=e.fn(a[h]),f++,f===d))return g;return g}},{}],18:[function(a,b){var c={lowercase:a("./helpers/lowercase.js"),uppercase:a("./helpers/uppercase.js"),replace:a("./helpers/replace.js"),encode:a("./helpers/encode.js"),length:a("./helpers/length.js"),contains:a("./helpers/contains.js"),first:a("./helpers/first.js"),last:a("./helpers/last.js"),between:a("./helpers/between.js"),range:a("./helpers/range.js"),where:a("./helpers/where.js"),shuffle:a("./helpers/shuffle.js"),reverse:a("./helpers/reverse.js"),ago:a("./helpers/ago.js"),formatDate:a("./helpers/formatDate.js"),equal:a("./helpers/equal.js")};b.exports.help=function(a){for(var b in c)a.registerHelper(b,c[b])}},{"./helpers/ago.js":2,"./helpers/between.js":3,"./helpers/contains.js":4,"./helpers/encode.js":5,"./helpers/equal.js":6,"./helpers/first.js":7,"./helpers/formatDate.js":8,"./helpers/last.js":9,"./helpers/length.js":10,"./helpers/lowercase.js":11,"./helpers/range.js":12,"./helpers/replace.js":13,"./helpers/reverse.js":14,"./helpers/shuffle.js":15,"./helpers/uppercase.js":16,"./helpers/where.js":17}],19:[function(a,b){!function(){function a(a){return(a||"").split(" ")}function c(a,b,c){return f(a,b,c,!1)}function d(a,b,c){return f(a,b,c,!0)}function e(a){return function(b,d){return c(b,d,a)}}function f(a,b,c,d){b&&!g(b)&&(c=b,b=void 0),b=b||new Date,c=c||m,c.formats=c.formats||{};var e=0;return d&&(e=6e4*(b.getTimezoneOffset()||0),b=new Date(b.getTime()+e)),a.replace(/%([-_0]?.)/g,function(a,g){var l,m;if(2==g.length){if(l=g[0],"-"==l)m="";else if("_"==l)m=" ";else{if("0"!=l)return a;m="0"}g=g[1]}switch(g){case"A":return c.days[b.getDay()];case"a":return c.shortDays[b.getDay()];case"B":return c.months[b.getMonth()];case"b":return c.shortMonths[b.getMonth()];case"C":return h(Math.floor(b.getFullYear()/100),m);case"D":return f(c.formats.D||"%m/%d/%y",b,c);case"d":return h(b.getDate(),m);case"e":return b.getDate();case"F":return f(c.formats.F||"%Y-%m-%d",b,c);case"H":return h(b.getHours(),m);case"h":return c.shortMonths[b.getMonth()];case"I":return h(i(b),m);case"j":var n=new Date(b.getFullYear(),0,1),o=Math.ceil((b.getTime()-n.getTime())/864e5);return h(o,3);case"k":return h(b.getHours(),null==m?" ":m);case"L":return h(Math.floor(b.getTime()%1e3),3);case"l":return h(i(b),null==m?" ":m);case"M":return h(b.getMinutes(),m);case"m":return h(b.getMonth()+1,m);case"n":return"\n";case"o":return String(b.getDate())+j(b.getDate());case"P":return b.getHours()<12?c.am:c.pm;case"p":return b.getHours()<12?c.AM:c.PM;case"R":return f(c.formats.R||"%H:%M",b,c);case"r":return f(c.formats.r||"%I:%M:%S %p",b,c);case"S":return h(b.getSeconds(),m);case"s":return Math.floor((b.getTime()-e)/1e3);case"T":return f(c.formats.T||"%H:%M:%S",b,c);case"t":return"	";case"U":return h(k(b,"sunday"),m);case"u":var o=b.getDay();return 0==o?7:o;case"v":return f(c.formats.v||"%e-%b-%Y",b,c);case"W":return h(k(b,"monday"),m);case"w":return b.getDay();case"Y":return b.getFullYear();case"y":var n=String(b.getFullYear());return n.slice(n.length-2);case"Z":if(d)return"GMT";var p=b.toString().match(/\((\w+)\)/);return p&&p[1]||"";case"z":if(d)return"+0000";var q=b.getTimezoneOffset();return(0>q?"+":"-")+h(Math.abs(q/60))+h(q%60);default:return g}})}function g(a){var b=0,c=n.length;for(b=0;c>b;++b)if("function"!=typeof a[n[b]])return!1;return!0}function h(a,b,c){"number"==typeof b&&(c=b,b="0"),null==b&&(b="0"),c=c||2;var d=String(a);if(b)for(;d.length<c;)d=b+d;return d}function i(a){var b=a.getHours();return 0==b?b=12:b>12&&(b-=12),b}function j(a){var b=a%10,c=a%100;if(c>=11&&13>=c||0===b||b>=4)return"th";switch(b){case 1:return"st";case 2:return"nd";case 3:return"rd"}}function k(a,b){b=b||"sunday";var c=a.getDay();"monday"==b&&(0==c?c=6:c--);var d=new Date(a.getFullYear(),0,1),e=(a-d)/864e5,f=(e+7-c)/7;return Math.floor(f)}var l;l="undefined"!=typeof b?b.exports=c:function(){return this||(1,eval)("this")}(),l.strftime=c,l.strftimeUTC=c.strftimeUTC=d,l.localizedStrftime=c.localizedStrftime=e;var m={days:a("Sunday Monday Tuesday Wednesday Thursday Friday Saturday"),shortDays:a("Sun Mon Tue Wed Thu Fri Sat"),months:a("January February March April May June July August September October November December"),shortMonths:a("Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec"),AM:"AM",PM:"PM",am:"am",pm:"pm"},n=["getTime","getTimezoneOffset","getDay","getDate","getMonth","getFullYear","getYear","getHours","getMinutes","getSeconds"]}()},{}]},{},[1])(1)});