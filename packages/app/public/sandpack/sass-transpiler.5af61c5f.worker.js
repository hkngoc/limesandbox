!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s="../../node_modules/thread-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js?!./src/sandbox/eval/transpilers/sass/worker/index.js")}({"../../node_modules/@babel/runtime/helpers/arrayLikeToArray.js":function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},"../../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":function(e,t,r){var n=r("../../node_modules/@babel/runtime/helpers/arrayLikeToArray.js");e.exports=function(e){if(Array.isArray(e))return n(e)}},"../../node_modules/@babel/runtime/helpers/asyncToGenerator.js":function(e,t){function r(e,t,r,n,o,a,i){try{var s=e[a](i),u=s.value}catch(c){return void r(c)}s.done?t(u):Promise.resolve(u).then(n,o)}e.exports=function(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var i=e.apply(t,n);function s(e){r(i,o,a,s,u,"next",e)}function u(e){r(i,o,a,s,u,"throw",e)}s(void 0)}))}}},"../../node_modules/@babel/runtime/helpers/classCallCheck.js":function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},"../../node_modules/@babel/runtime/helpers/createClass.js":function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},"../../node_modules/@babel/runtime/helpers/defineProperty.js":function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},"../../node_modules/@babel/runtime/helpers/iterableToArray.js":function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},"../../node_modules/@babel/runtime/helpers/nonIterableSpread.js":function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},"../../node_modules/@babel/runtime/helpers/toConsumableArray.js":function(e,t,r){var n=r("../../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js"),o=r("../../node_modules/@babel/runtime/helpers/iterableToArray.js"),a=r("../../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js"),i=r("../../node_modules/@babel/runtime/helpers/nonIterableSpread.js");e.exports=function(e){return n(e)||o(e)||a(e)||i()}},"../../node_modules/@babel/runtime/helpers/typeof.js":function(e,t){function r(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r},"../../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":function(e,t,r){var n=r("../../node_modules/@babel/runtime/helpers/arrayLikeToArray.js");e.exports=function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},"../../node_modules/@babel/runtime/regenerator/index.js":function(e,t,r){e.exports=r("../../node_modules/regenerator-runtime/runtime.js")},"../../node_modules/regenerator-runtime/runtime.js":function(e,t,r){var n=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function s(e,t,r,n){var o=t&&t.prototype instanceof l?t:l,a=Object.create(o.prototype),i=new j(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return _()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=x(i,r);if(s){if(s===c)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===c)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),a}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}e.wrap=s;var c={};function l(){}function f(){}function p(){}var d={};d[o]=function(){return this};var h=Object.getPrototypeOf,m=h&&h(h(k([])));m&&m!==t&&r.call(m,o)&&(d=m);var b=p.prototype=l.prototype=Object.create(d);function y(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function v(e,t){var n;this._invoke=function(o,a){function i(){return new t((function(n,i){!function n(o,a,i,s){var c=u(e[o],e,a);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"===typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,i,s)}),(function(e){n("throw",e,i,s)})):t.resolve(f).then((function(e){l.value=e,i(l)}),(function(e){return n("throw",e,i,s)}))}s(c.arg)}(o,a,n,i)}))}return n=n?n.then(i,i):i()}}function x(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method))return c;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return c}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,c;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,c):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,c)}function g(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(g,this),this.reset(!0)}function k(e){if(e){var t=e[o];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:_}}function _(){return{value:void 0,done:!0}}return f.prototype=b.constructor=p,p.constructor=f,p[i]=f.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,i in e||(e[i]="GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},y(v.prototype),v.prototype[a]=function(){return this},e.AsyncIterator=v,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new v(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},y(b),b[i]="Generator",b[o]=function(){return this},b.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=k,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,c):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),c},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),w(r),c}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;w(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:k(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),c}},e}(e.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},"../../node_modules/thread-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js?!./src/sandbox/eval/transpilers/sass/worker/index.js":function(e,t,r){self.importScripts("".concat("","static/browserfs12/browserfs.min.js")),self.process=self.BrowserFS.BFSRequire("process"),self.Buffer=self.BrowserFS.BFSRequire("buffer").Buffer,r("./src/sandbox/eval/transpilers/sass/worker/sass-worker.js")},"../common/lib/utils/delay.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e=1e3){return new Promise(t=>setTimeout(t,e))}},"../common/lib/utils/path.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.extname=t.absolute=t.basename=t.dirname=t.join=t.normalize=t.isAbsolute=void 0;const n=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^/]+?|)(\.[^./]*|))(?:[/]*)$/;function o(e){return"/"===e.charAt(0)}function a(e){const t=o(e),r=e&&"/"===e[e.length-1];let n=e;return n=function(e,t){const r=[];for(let n=0;n<e.length;n+=1){const o=e[n];o&&"."!==o&&(".."===o?r.length&&".."!==r[r.length-1]?r.pop():t&&r.push(".."):r.push(o))}return r}(n.split("/"),!t).join("/"),n||t||(n="."),n&&r&&(n+="/"),(t?"/":"")+n}t.isAbsolute=o,t.normalize=a,t.join=function(...e){let t="";for(let r=0;r<e.length;r+=1){const n=e[r];if("string"!==typeof n)throw new TypeError("Arguments to path.join must be strings");n&&(t+=t?"/"+n:n)}return a(t)},t.dirname=function(e){const t=(r=e,n.exec(r).slice(1));var r;const o=t[0];let a=t[1];return o||a?(a&&(a=a.substr(0,a.length-1)),o+a):"."},t.basename=function(e,t=""){if(""===e)return e;const r=a(e).split("/"),n=r[r.length-1];if(""===n&&r.length>1)return r[r.length-2];if(t.length>0){if(n.substr(n.length-t.length)===t)return n.substr(0,n.length-t.length)}return n},t.absolute=function(e){return e.startsWith("/")?e:e.startsWith("./")?e.replace("./","/"):"/"+e},t.extname=function(e){!function(e){if("string"!==typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}(e);let t=-1,r=0,n=-1,o=!0,a=0;for(let i=e.length-1;i>=0;--i){const s=e.charCodeAt(i);if(47!==s)-1===n&&(o=!1,n=i+1),46===s?-1===t?t=i:1!==a&&(a=1):-1!==t&&(a=-1);else if(!o){r=i+1;break}}return-1===t||-1===n||0===a||1===a&&t===n-1&&t===r+1?"":e.slice(t,n)}},"./src/sandbox/eval/transpilers/sass/worker/sass-worker.js":function(e,t,r){"use strict";r.r(t);var n=r("../../node_modules/@babel/runtime/regenerator/index.js"),o=r.n(n),a=r("../../node_modules/@babel/runtime/helpers/asyncToGenerator.js"),i=r.n(a),s=r("../common/lib/utils/delay.js"),u=r.n(s),c=r("../../node_modules/@babel/runtime/helpers/toConsumableArray.js"),l=r.n(c),f=r("../common/lib/utils/path.js"),p=r("../../node_modules/@babel/runtime/helpers/typeof.js"),d=r.n(p),h=r("../../node_modules/@babel/runtime/helpers/classCallCheck.js"),m=r.n(h),b=r("../../node_modules/@babel/runtime/helpers/createClass.js"),y=r.n(b),v=r("../../node_modules/@babel/runtime/helpers/defineProperty.js"),x=r.n(v);class g extends Error{}var w=function(){function e(t){var r=this;m()(this,e),x()(this,"name",void 0),x()(this,"functions",new Map),x()(this,"pendingCalls",new Map),x()(this,"callId",0),x()(this,"isReady",!1),x()(this,"initializeFS",void 0),x()(this,"queuedMessages",[]),this.name=t,self.addEventListener("message",(function(e){r.handleMessage(e.data).catch(console.error)}))}return y()(e,[{key:"registerFunction",value:function(e,t){this.functions.set(e,t)}},{key:"registerFSInitializer",value:function(e){this.initializeFS=e}},{key:"handleMessage",value:function(){var e=i()(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("object"===d()(t)&&t.codesandbox){e.next=3;break}return t.browserfsMessage||console.warn("Invalid message from main thread to ".concat(this.name),t),e.abrupt("return");case 3:if(this.isReady){e.next=6;break}return this.queuedMessages.push(t),e.abrupt("return");case 6:e.t0=t.type,e.next="ping"===e.t0?9:"request"===e.t0?13:"response"===e.t0?16:"initialize-fs"===e.t0?19:24;break;case 9:if(!this.isReady){e.next=12;break}return e.next=12,this.emitReady();case 12:return e.abrupt("break",24);case 13:return e.next=15,this.handleCallRequest(t);case 15:return e.abrupt("break",24);case 16:return e.next=18,this.handleCallResponse(t);case 18:return e.abrupt("break",24);case 19:if(this.initializeFS){e.next=21;break}throw new Error("initializeFS is undefined for ".concat(this.name));case 21:return e.next=23,this.initializeFS();case 23:return e.abrupt("break",24);case 24:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleCallResponse",value:function(e){var t=this.pendingCalls.get(e.idx);t&&(e.isError?t.reject(function(e){const t=new g(e.message);return t.name=e.name,t.columnNumber=e.columnNumber,t.fileName=e.fileName,t.lineNumber=e.lineNumber,t}(e.data)):t.resolve(e.data))}},{key:"handleCallRequest",value:function(){var e=i()(o.a.mark((function e(t){var r,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r=this.functions.get(t.method)){e.next=4;break}throw new Error("Could not find registered child function for call ".concat(this.name,"#").concat(t.method));case 4:return e.next=6,r(t.data);case 6:n=e.sent,self.postMessage({type:"response",codesandbox:!0,idx:t.idx,data:n}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0),self.postMessage({type:"response",codesandbox:!0,idx:t.idx,isError:!0,data:(o=e.t0,{name:o.name,message:o.message,fileName:o.fileName,lineNumber:o.lineNumber,columnNumber:o.columnNumber})});case 14:case"end":return e.stop()}var o}),e,this,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},{key:"callFn",value:function(e){var t=this,r=e.method,n=e.data,o=this.callId++,a={type:"request",codesandbox:!0,idx:o,method:r,data:n};return new Promise((function(e,i){t.pendingCalls.set(o,{method:r,data:n,resolve:e,reject:i}),self.postMessage(a)}))}},{key:"emitReady",value:function(){var e=this;this.isReady=!0,this.queuedMessages.forEach((function(t){console.warn("Run queued message",t),e.handleMessage(t).catch(console.error)})),self.postMessage({type:"ready",codesandbox:!0})}}]),e}();function j(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"===typeof e)return k(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return k(e,t)}(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o,a=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){i=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(i)throw o}}}}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var _=[".scss",".sass",".css"];function S(e){var t,r=!!f.extname(e),n=r?[""]:_,o=[],a=j(n);try{for(a.s();!(t=a.n()).done;){var i=t.value;o.push(f.join(e+i)),o.push(f.join("_"+e+i))}}catch(l){a.e(l)}finally{a.f()}if(!r){var s,u=j(n);try{for(u.s();!(s=u.n()).done;){var c=s.value;o.push(f.join(e,"index"+c)),o.push(f.join(e,"_index"+c))}}catch(l){u.e(l)}finally{u.f()}}return o}function E(e,t){return"~"===t[0]?(e=["/node_modules"],t=t.substr(1)):"."!==t[0]&&"/"!==t[0]&&e.push("/node_modules"),e.map((function(e){return f.join(e,t)}))}function C(e){return P.apply(this,arguments)}function P(){return(P=i()(o.a.mark((function e(t){var r,n,a,i,s,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.path,n=t.options,a=void 0===n?{}:n,i=t.loaderContextId,s=t.childHandler,e.next=3,s.callFn({method:"resolve-async-transpiled-module",data:{path:r,options:a,loaderContextId:i}});case 3:if((u=e.sent).found){e.next=6;break}throw new Error("Module ".concat(r," not found."));case 6:return e.abrupt("return",u);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e){var t=e.fs,r=e.filepath,n=e.loaderContextId,a=e.childHandler;return new Promise((function(e){t.stat(r,function(){var t=i()(o.a.mark((function t(i,s){var u,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!i&&!s.isDirectory()){t.next=20;break}if(!s||!s.isDirectory()){t.next=4;break}return e(!1),t.abrupt("return");case 4:return t.prev=4,t.next=7,C({path:r,options:{ignoredExtensions:_},loaderContextId:n,childHandler:a});case 7:if(u=t.sent,c=f.extname(u.path),-1!==_.indexOf(c)){t.next=12;break}return e(!1),t.abrupt("return");case 12:e(u.path),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(4),e(!1);case 18:t.next=21;break;case 20:e(r);case 21:case"end":return t.stop()}}),t,null,[[4,15]])})));return function(e,r){return t.apply(this,arguments)}}())}))}function L(e){var t=e.map((function(e){return new Promise((function(t,r){return e.then((function(e){return e&&t(e)}),r)}))}));return t.push(Promise.all(e).then((function(){return!1}))),Promise.race(t)}function F(e){return O.apply(this,arguments)}function O(){return(O=i()(o.a.mark((function e(t){var r,n,a,i,s,u,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.fs,n=t.potentialPath,a=t.loaderContextId,i=t.childHandler,e.prev=1,s=f.dirname(n),u=S(f.basename(n)).map((function(e){return f.join(s,e)})),e.next=6,L(u.map((function(e){return A({fs:r,filepath:e,loaderContextId:a,childHandler:i})})));case 6:return c=e.sent,e.abrupt("return",c);case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function I(e){return T.apply(this,arguments)}function T(){return(T=i()(o.a.mark((function e(t){var r,n,a,i,s,u,c,p,d,h,m,b,y,v,x,g,w;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.importUrl,n=t.previousFilePath,a=t.includePaths,i=void 0===a?[]:a,s=t.env,u=void 0===s?{}:s,c=t.fs,p=t.resolutionCache,d=t.loaderContextId,h=t.childHandler,null!=d){e.next=3;break}throw new Error("Loader context id is required");case 3:m=r.replace(/^file:\/\//,""),b=[f.dirname(n.replace(/^file:\/\//,""))],i&&b.push.apply(b,l()(i)),u.SASS_PATH&&b.push.apply(b,l()(u.SASS_PATH.split(":"))),y=E(b,m),v=j(y),e.prev=9,v.s();case 11:if((x=v.n()).done){e.next=23;break}if(g=x.value,!p[g]){e.next=15;break}return e.abrupt("return",p[g]);case 15:return e.next=17,F({fs:c,potentialPath:g,loaderContextId:d,childHandler:h});case 17:if(!(w=e.sent)){e.next=21;break}return p[g]=w,e.abrupt("return",w);case 21:e.next=11;break;case 23:e.next=28;break;case 25:e.prev=25,e.t0=e.catch(9),v.e(e.t0);case 28:return e.prev=28,v.f(),e.finish(28);case 31:return e.abrupt("return",null);case 32:case"end":return e.stop()}}),e,null,[[9,25,28,31]])})))).apply(this,arguments)}self.importScripts("https://cdn.jsdelivr.net/npm/sass.js@0.11.0/dist/sass.sync.js");var M=!1,N=new w("sass-worker");function R(){return(R=i()(o.a.mark((function e(t){var r,n,a,s,c,l,f,p,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.code,n=t.path,a=t.indentedSyntax,s=t.loaderContextId,M){e.next=7;break}case 2:if(M){e.next=7;break}return e.next=5,u()(50);case 5:e.next=2;break;case 7:return Sass._path="/",c={},l={},f=[],p=function(){var e=i()(o.a.mark((function e(t){var r,a,i,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=BrowserFS.BFSRequire("fs"),a=t.current,e.prev=2,i="stdin"===t.previous?n:t.previous,e.next=6,I({previousFilePath:i,importUrl:a,fs:r,resolutionCache:l,loaderContextId:s,childHandler:N});case 6:if(u=e.sent){e.next=9;break}throw new Error("Could not resolve ".concat(a));case 9:if(f.push({path:u,options:{isAbsolute:!0}}),c[u]){e.next=13;break}return e.next=13,new Promise((function(e,t){r.readFile(u,{},(function(r,n){if(r)t(r);else{var o=n.toString();Sass.writeFile(u,o,(function(){c[u]=!0,e(null)}))}}))}));case 13:return e.abrupt("return",{path:u});case 16:throw e.prev=16,e.t0=e.catch(2),e.t0.message="Could not resolve ".concat(a,": ").concat(e.t0.message),e.t0;case 20:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(t){return e.apply(this,arguments)}}(),Sass.importer((function(e,t){p(e).then(t).catch((function(e){return t({error:e.message||"Could not resolve import"})}))})),e.next=15,new Promise((function(e,t){Sass.compile(r,{sourceMapEmbed:!0,indentedSyntax:a},(function(r){0===r.status?e(r.text):t(new Error(r.formatted))}))}));case 15:return d=e.sent,e.abrupt("return",{transpiledCode:d,transpilationDependencies:f});case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(){return(q=i()(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){BrowserFS.configure({fs:"WorkerFS",options:{worker:self}},(function(){e()}))}));case 2:M=!0;case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}N.registerFunction("compile",(function(e){return R.apply(this,arguments)})),N.registerFSInitializer((function(){return q.apply(this,arguments)})),N.emitReady()}});
//# sourceMappingURL=sass-transpiler.5af61c5f.worker.js.map