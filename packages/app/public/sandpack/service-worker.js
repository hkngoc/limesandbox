"use strict";var precacheConfig=[["0.babel-transpiler.c71b3cd9.worker.js","9a1f59117e0991813475a37060d6218a"],["babel-plugin-jsx-pragmatic.babel-transpiler.c71b3cd9.worker.js","a70da0a73e518f9eaa7c973a34695f6d"],["babel-plugin-transform-vue-jsx.babel-transpiler.c71b3cd9.worker.js","c58cffd685a3af5257bf5928d9f5a1cb"],["babel-preset-env.babel-transpiler.c71b3cd9.worker.js","1704fc1336a95b52d20e4ae96f643b38"],["babel-transpiler.c71b3cd9.worker.js","6f43140ce627fcfae50874525941712a"],["coffee-transpiler.a7e88b2d.worker.js","90bfdc58f0ca46d05fc328c3da88169b"],["file-manifest.json","3b696822836ff5984fbac64f6ee1cebc"],["index.html","6c77cce20a5c1a54997e2e81855cbfa3"],["less-transpiler.227b5498.worker.js","dea5b85481e5fcf30dff0e25f229a310"],["parcel-html-transpiler.c73737f4.worker.js","331c82d3662b0796b9968a4a566f7d54"],["/public/sse-hooks/sse-hooks.e440718d6d1567dec55f8c2c06b8e93b.js","c258ac13a2a3f94a0324dde6d4493575"],["pug-transpiler.6fc2faf6.worker.js","f367eab9f59cffb037958fb2462105f2"],["sass-transpiler.2705046a.worker.js","2df98f2724a80312eb957d8ec11dc28a"],["static/js/0.58daa38b3.chunk.js","6f1242f8c66412ab8ac70fc346908853"],["static/js/1.e2b1489d1.chunk.js","ded3ecef71259bb4edef5efd70c86e33"],["static/js/2.c9d2d08ec.chunk.js","ca5a1f88914562d2827ad3c853045918"],["static/js/3.de6cffaf5.chunk.js","6ac7d9a37df5378dd48684733aaa9db6"],["static/js/4.a004dbb08.chunk.js","817a36ceecb1e51d38061f85d81dff4f"],["static/js/5.3c8b87072.chunk.js","f24dc4736a8637b6725d2517add4dc99"],["static/js/6.2604682b9.chunk.js","bf1c4626e9e17b5e6f304609f6e02f6f"],["static/js/7.8a1839f52.chunk.js","6c00038401cefa1bd166e08f34fc897f"],["static/js/css-loader.043da0932.chunk.js","bcea97fba0d4510b39be2c45470186b9"],["static/js/css-modules-loader-core.a0d5368f0.chunk.js","d84495ea2932860323cae5d7d1894510"],["static/js/default~sandbox~sandbox-startup.84a36c807.chunk.js","5cdc3968ec13a24cea33d444b679b36e"],["static/js/postcss-compiler.ea9e6e3f6.chunk.js","4e579f883ebefcfa739de42f036f59c9"],["static/js/sandbox-startup.34e7b51c0.js","3187aabee3980dded27834d6c75bbd2a"],["static/js/sandbox.c26b057b0.js","8434868d3f98ccc419bd71310e42aeb3"],["static/js/vendors~css-modules-loader-core.a0b565997.chunk.js","875db602442cd623aa5f33031e06dc30"],["static/js/vendors~postcss-compiler~vue-style-compiler.f9e51cefa.chunk.js","938972d598b2c1c1ae63666d5faf66cc"],["static/js/vendors~react-devtools-backend.d7ac7a663.chunk.js","e146ad5d0f8de5d8fbcabaa45a60c519"],["static/js/vendors~sandbox-startup.7f66be31f.chunk.js","0ff9f17a191bfbfab7c2648126c899fc"],["static/js/vendors~sandbox.55d195a7e.chunk.js","8902b1b9a493f518483990d5b31394fc"],["static/js/vendors~sandbox~sandbox-startup.c2408ad6a.chunk.js","afe6bb866d74260ba178f9c03ae80c3f"],["static/js/vendors~vue-loader~vue-selector.04112a1e3.chunk.js","9628bbb7a1c5471ab73022112ab2894d"],["static/js/vendors~vue-loader~vue-selector~vue-template-compiler.2e8763f5f.chunk.js","674df0a94c6c8f620c384d9a43fef085"],["static/js/vendors~vue-style-compiler.35a51f50a.chunk.js","ee412c61ea6563777aab4fbe71707ee5"],["static/js/vendors~vue-template-compiler.61f60db6b.chunk.js","f2b48e83a788909793eece82881a7a40"],["static/js/vue-loader.e53c027b0.chunk.js","28a044f280220859fe5bc79893d657c4"],["static/js/vue-selector.21f96bc6f.chunk.js","e2b0eb63a4a8f24775ee1c60638d6534"],["static/js/vue-style-compiler.787cc396f.chunk.js","76cea0e49901e0705f2074bc55f2856c"],["static/js/vue-template-compiler.129efd70a.chunk.js","b8e5ebaec37b10dfbdd57cfcf20c7c88"],["stylus-transpiler.d9178f5d.worker.js","98cd0fa8555f2a622c39de5c6cffe085"],["svelte-transpiler.43dd0b97.worker.js","64b01b012bd1734c43bfe1a4a27b327c"],["transform-cx-jsx.babel-transpiler.c71b3cd9.worker.js","c3d5d380e1b255064de141b167f65aff"],["typescript-transpiler.46583433.worker.js","bd5add2743e0174a0e48bbd98af404ad"]],cacheName="sw-precache-v3-code-sandbox-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),a=createCacheKey(r,hashParamName,n,/\.\w{8}\./);return[r.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var r=new Request(n,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["\\/s\\/"],e.request.url)&&(n=new URL("/app.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}}),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toolbox=e()}}(function(){return function e(t,n,r){function a(c,s){if(!n[c]){if(!t[c]){var i="function"==typeof require&&require;if(!s&&i)return i(c,!0);if(o)return o(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return a(n||e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var o="function"==typeof require&&require,c=0;c<r.length;c++)a(r[c]);return a}({1:[function(e,t,n){function r(e,t){((t=t||{}).debug||i.debug)&&console.log("[sw-toolbox] "+e)}function a(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||i.cache.name,caches.open(t)}function o(e,t,n){var a=e.url,o=n.maxAgeSeconds,c=n.maxEntries,s=n.name,i=Date.now();return r("Updating LRU order for "+a+". Max entries is "+c+", max age is "+o),u.getDb(s).then(function(e){return u.setTimestampForUrl(e,a,i)}).then(function(e){return u.expireEntries(e,c,o,i)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function c(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var s,i=e("./options"),u=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:function(e,t){var n=(t=t||{}).successResponses||i.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&a(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||i.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&function(e,t,n){var r=o.bind(null,e,t,n);s=s?s.then(r):r()}(e,n,r)})}),r.clone()})},openCache:a,renameCache:function(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})},cache:function(e,t){return a(t).then(function(t){return t.add(e)})},uncache:function(e,t){return a(t).then(function(t){return t.delete(e)})},precache:function(e){e instanceof Promise||c(e),i.preCacheItems=i.preCacheItems.concat(e)},validatePrecacheInput:c,isResponseFresh:function(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r&&new Date(r).getTime()+1e3*t<n)return!1}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){var r="sw-toolbox-",a=1,o="store",c="url",s="timestamp",i={};t.exports={getDb:function(e){return e in i||(i[e]=function(e){return new Promise(function(t,n){var i=indexedDB.open(r+e,a);i.onupgradeneeded=function(){i.result.createObjectStore(o,{keyPath:c}).createIndex(s,s,{unique:!1})},i.onsuccess=function(){t(i.result)},i.onerror=function(){n(i.error)}})}(e)),i[e]},setTimestampForUrl:function(e,t,n){return new Promise(function(r,a){var c=e.transaction(o,"readwrite");c.objectStore(o).put({url:t,timestamp:n}),c.oncomplete=function(){r(e)},c.onabort=function(){a(c.error)}})},expireEntries:function(e,t,n,r){return function(e,t,n){return t?new Promise(function(r,a){var i=1e3*t,u=[],f=e.transaction(o,"readwrite"),h=f.objectStore(o);h.index(s).openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[s]){var r=t.value[c];u.push(r),h.delete(r),t.continue()}},f.oncomplete=function(){r(u)},f.onabort=a}):Promise.resolve([])}(e,n,r).then(function(n){return function(e,t){return t?new Promise(function(n,r){var a=[],i=e.transaction(o,"readwrite"),u=i.objectStore(o),f=u.index(s),h=f.count();f.count().onsuccess=function(){var e=h.result;e>t&&(f.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var o=r.value[c];a.push(o),u.delete(o),e-a.length>t&&r.continue()}})},i.oncomplete=function(){n(a)},i.onabort=r}):Promise.resolve([])}(e,t).then(function(e){return n.concat(e)})})}}},{}],3:[function(e,t,n){function r(e){return e.reduce(function(e,t){return e.concat(t)},[])}e("serviceworker-cache-polyfill");var a=e("./helpers"),o=e("./router"),c=e("./options");t.exports={fetchListener:function(e){var t=o.match(e.request);t?e.respondWith(t(e.request)):o.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(o.default(e.request))},activateListener:function(e){a.debug("activate event fired");var t=c.cache.name+"$$$inactive$$$";e.waitUntil(a.renameCache(t,c.cache.name))},installListener:function(e){var t=c.cache.name+"$$$inactive$$$";a.debug("install event fired"),a.debug("creating cache ["+t+"]"),e.waitUntil(a.openCache({cache:{name:t}}).then(function(e){return Promise.all(c.preCacheItems).then(r).then(a.validatePrecacheInput).then(function(t){return a.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){var r=new URL("./",self.location).pathname,a=e("path-to-regexp"),o=function(e,t,n,o){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=r+t),this.keys=[],this.regexp=a(t,this.keys)),this.method=e,this.options=o,this.handler=n};o.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=o},{"path-to-regexp":15}],6:[function(e,t,n){var r=e("./route"),a=e("./helpers"),o=function(e,t){for(var n=e.entries(),r=n.next(),a=[];!r.done;){new RegExp(r.value[0]).test(t)&&a.push(r.value[1]),r=n.next()}return a},c=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){c.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),c.prototype.add=function(e,t,n,o){var c;o=o||{},t instanceof RegExp?c=RegExp:c=(c=o.origin||self.location.origin)instanceof RegExp?c.source:function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}(c),e=e.toLowerCase();var s=new r(e,t,n,o);this.routes.has(c)||this.routes.set(c,new Map);var i=this.routes.get(c);i.has(e)||i.set(e,new Map);var u=i.get(e),f=s.regexp||s.fullUrlRegExp;u.has(f.source)&&a.debug('"'+t+'" resolves to same regex as existing route.'),u.set(f.source,s)},c.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,a=n.pathname;return this._match(e,o(this.routes,r),a)||this._match(e,[this.routes.get(RegExp)],t)},c.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var a=t[r],c=a&&a.get(e.toLowerCase());if(c){var s=o(c,n);if(s.length>0)return s[0].makeHandler(n)}}return null},c.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new c},{"./helpers":1,"./route":5}],7:[function(e,t,n){var r=e("../options"),a=e("../helpers");t.exports=function(e,t,n){return n=n||{},a.debug("Strategy: cache first ["+e.url+"]",n),a.openCache(n).then(function(t){return t.match(e).then(function(t){var o=n.cache||r.cache,c=Date.now();return a.isResponseFresh(t,o.maxAgeSeconds,c)?t:a.fetchAndCache(e,n)})})}},{"../helpers":1,"../options":4}],8:[function(e,t,n){var r=e("../options"),a=e("../helpers");t.exports=function(e,t,n){return n=n||{},a.debug("Strategy: cache only ["+e.url+"]",n),a.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||r.cache,o=Date.now();if(a.isResponseFresh(e,t.maxAgeSeconds,o))return e})})}},{"../helpers":1,"../options":4}],9:[function(e,t,n){var r=e("../helpers"),a=e("./cacheOnly");t.exports=function(e,t,n){return r.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(o,c){var s=!1,i=[],u=function(e){i.push(e.toString()),s?c(new Error('Both cache and network failed: "'+i.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?o(e):u("No result returned")};r.fetchAndCache(e.clone(),n).then(f,u),a(e,t,n).then(f,u)})}},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){var r=e("../options"),a=e("../helpers");t.exports=function(e,t,n){var o=(n=n||{}).successResponses||r.successResponses,c=n.networkTimeoutSeconds||r.networkTimeoutSeconds;return a.debug("Strategy: network first ["+e.url+"]",n),a.openCache(n).then(function(t){var s,i,u=[];if(c){var f=new Promise(function(o){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||r.cache,c=Date.now(),s=t.maxAgeSeconds;a.isResponseFresh(e,s,c)&&o(e)})},1e3*c)});u.push(f)}var h=a.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),o.test(e.status))return e;throw a.debug("Response was an HTTP error: "+e.statusText,n),i=e,new Error("Bad response")}).catch(function(r){return a.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(i)return i;throw r})});return u.push(h),Promise.race(u)})}},{"../helpers":1,"../options":4}],12:[function(e,t,n){var r=e("../helpers");t.exports=function(e,t,n){return r.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}},{"../helpers":1}],13:[function(e,t,n){var r=e("./options"),a=e("./router"),o=e("./helpers"),c=e("./strategies"),s=e("./listeners");o.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:a,options:r,cache:o.cache,uncache:o.uncache,precache:o.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],a=0,o=0,c="",u=t&&t.delimiter||"/";null!=(n=p.exec(e));){var f=n[0],h=n[1],l=n.index;if(c+=e.slice(o,l),o=l+f.length,h)c+=h[1];else{var d=e[o],m=n[2],b=n[3],v=n[4],g=n[5],x=n[6],w=n[7];c&&(r.push(c),c="");var y=null!=m&&null!=d&&d!==m,j="+"===x||"*"===x,k="?"===x||"*"===x,E=n[2]||u,R=v||g;r.push({name:b||a++,prefix:m||"",delimiter:E,optional:k,repeat:j,partial:y,asterisk:!!w,pattern:R?i(R):w?".*":"[^"+s(E)+"]+?"})}}return o<e.length&&(c+=e.substr(o)),c&&r.push(c),r}function a(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function o(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var c="",s=n||{},i=(r||{}).pretty?a:encodeURIComponent,u=0;u<e.length;u++){var f=e[u];if("string"!=typeof f){var h,l=s[f.name];if(null==l){if(f.optional){f.partial&&(c+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(d(l)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var p=0;p<l.length;p++){if(h=i(l[p]),!t[u].test(h))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(h)+"`");c+=(0===p?f.prefix:f.delimiter)+h}}else{if(h=f.asterisk?o(l):i(l),!t[u].test(h))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+h+'"');c+=f.prefix+h}}else c+=f}return c}}function s(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function i(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function u(e,t){return e.keys=t,e}function f(e){return e.sensitive?"":"i"}function h(e,t,n){d(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,a=!1!==n.end,o="",c=0;c<e.length;c++){var i=e[c];if("string"==typeof i)o+=s(i);else{var h=s(i.prefix),l="(?:"+i.pattern+")";t.push(i),i.repeat&&(l+="(?:"+h+l+")*"),o+=l=i.optional?i.partial?h+"("+l+")?":"(?:"+h+"("+l+"))?":h+"("+l+")"}}var p=s(n.delimiter||"/"),m=o.slice(-p.length)===p;return r||(o=(m?o.slice(0,-p.length):o)+"(?:"+p+"(?=$))?"),o+=a?"$":r&&m?"":"(?="+p+"|$)",u(new RegExp("^"+o,f(n)),t)}function l(e,t,n){return d(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return u(e,t)}(e,t):d(e)?function(e,t,n){for(var r=[],a=0;a<e.length;a++)r.push(l(e[a],t,n).source);return u(new RegExp("(?:"+r.join("|")+")",f(n)),t)}(e,t,n):function(e,t,n){return h(r(e,n),t,n)}(e,t,n)}var d=e("isarray");t.exports=l,t.exports.parse=r,t.exports.compile=function(e,t){return c(r(e,t))},t.exports.tokensToFunction=c,t.exports.tokensToRegExp=h;var p=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)}),toolbox.router.get(/^https:\/\/unpkg\.com/,toolbox.cacheFirst,{cache:{maxEntries:300,name:"unpkg-cache"}}),toolbox.router.get(/cloudflare\.com/,toolbox.cacheFirst,{cache:{maxEntries:20,name:"cloudflare-cache"}}),toolbox.router.get(/\/vscode28/,toolbox.cacheFirst,{cache:{maximumFileSizeToCacheInBytes:104857600,name:"vscode"}}),toolbox.router.get(/vscode-extensions\//,toolbox.cacheFirst,{cache:{maximumFileSizeToCacheInBytes:104857600,name:"vscode-extensions"}});