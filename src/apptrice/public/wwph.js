!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t,r){"use strict";function n(e){return e[3]}function o(e){return e[4]}Object.defineProperty(t,"__esModule",{value:!0}),t.default={getLast:function(e){return e[e.length-1]},getTime:function(e){return e[0]},getOpen:function(e){return e[1]},getClose:function(e){return e[2]},getHigh:n,getLow:o,getVolume:function(e){return e[5]},getMiddle:function(e){return(n(e)+o(e))/2},getAmplitude:function(e){return(n(e)-o(e))/o(e)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={getBase:function(e){return e.split("/")[0]},getQuoted:function(e){return e.split("/")[1]}}},function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var o=r(3),u=r(9);console.log("#BOT"),self.onmessage=function(e){var t=e.data,r=t.action,i=t.input;if("init"===r){var a={};initializeState(i,a),self.postMessage(a||{})}else{var s=new o.default(i.portfolio,i.orders,i.candles);a=n({},i.state);onData({candles:i.candles,config:i.config,trader:s,state:a,utils:u.default}),self.postMessage({ordersToCancel:s.ordersToCancel,ordersToPlace:s.ordersToPlace,state:a})}},t.default=function(){}},function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),u=r(1),i=r(4).default,a=function(){function e(e,t,r){var n,u;this.portfolio=e,this.orders=t,this.ordersToPlace=[],this.ordersToCancel=[],this.prices=(n=r,u={},Object.keys(n).forEach((function(e){u[e]=o.default.getClose(o.default.getLast(n[e]))})),u)}return e.prototype.getPortfolio=function(){return this.portfolio},e.prototype.getBalance=function(e){var t=this.portfolio[e];return t?n({},t):{asset:e,total:0,free:0}},e.prototype.getOrder=function(e){return this.orders[e]},e.prototype.placeOrder=function(e){var t=n(n({price:null},e),{id:i(),status:"pending",foreignId:null,errorReason:null,executedPrice:null,createdAt:Date.now(),placedAt:null,closedAt:null});return this.ordersToPlace.push(t),n({},t)},e.prototype.cancelOrder=function(e){this.ordersToCancel.push(e)},e.prototype.getPortfolioValue=function(){var e=this,t=0,r=u.default.getQuoted(Object.keys(this.prices)[0]);return Object.keys(this.prices).forEach((function(n){var o=u.default.getBase(n),i=e.getBalance(o);t+=o===r?i.total:i.total*e.prices[n]})),t},e.prototype.getPrice=function(e){return this.prices[e]},e}();t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r(5)),o=u(r(6));function u(e){return e&&e.__esModule?e:{default:e}}var i=function(e,t,r){const u=(e=e||{}).random||(e.rng||n.default)();if(u[6]=15&u[6]|64,u[8]=63&u[8]|128,t){r=r||0;for(let e=0;e<16;++e)t[r+e]=u[e];return t}return(0,o.default)(u)};t.default=i},function(e,t,r){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){if(!n&&(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),!n))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(o)};const o=new Uint8Array(16)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=(n=r(7))&&n.__esModule?n:{default:n};const u=[];for(let e=0;e<256;++e)u.push((e+256).toString(16).substr(1));var i=function(e,t=0){const r=(u[e[t+0]]+u[e[t+1]]+u[e[t+2]]+u[e[t+3]]+"-"+u[e[t+4]]+u[e[t+5]]+"-"+u[e[t+6]]+u[e[t+7]]+"-"+u[e[t+8]]+u[e[t+9]]+"-"+u[e[t+10]]+u[e[t+11]]+u[e[t+12]]+u[e[t+13]]+u[e[t+14]]+u[e[t+15]]).toLowerCase();if(!(0,o.default)(r))throw TypeError("Stringified UUID is invalid");return r};t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=(n=r(8))&&n.__esModule?n:{default:n};var u=function(e){return"string"==typeof e&&o.default.test(e)};t.default=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(1);t.default={candles:n.default,symbols:o.default}}]);