!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="/",t(t.s="../../node_modules/thread-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js?!./src/sandbox/eval/transpilers/coffee/coffee-worker.js")}({"../../node_modules/thread-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js?!./src/sandbox/eval/transpilers/coffee/coffee-worker.js":function(e,r,t){"use strict";t.r(r),self.importScripts("".concat("","static/js/coffeescript.2.3.2.js")),self.postMessage("ready"),self.addEventListener("message",(function(e){var r,t=e.data,n=t.code,o=t.path;try{var s=self.CoffeeScript.compile(n,{filename:o,sourceFiles:[o],bare:!0,literate:!1,inlineMap:!0,sourceMap:!1});return self.postMessage({type:"result",transpiledCode:s})}catch(a){return self.postMessage({type:"error",error:(r=a,{name:r.name,message:r.message,fileName:r.fileName,lineNumber:r.lineNumber,columnNumber:r.columnNumber})})}}))}});
//# sourceMappingURL=coffee-transpiler.a7e88b2d.worker.js.map