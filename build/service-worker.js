"use strict";var precacheConfig=[["./index.html","6681db0e6b8f455015b71c28de129e63"],["./static/css/main.d50565a4.css","b0fd40c8af72d4a168573ff6f1b7375e"],["./static/js/0.34ad0f98.chunk.js","d8b05da4587ec8f8bd5010e67a9257c3"],["./static/js/1.51ffbf34.chunk.js","3b34594f846b886d4971a837eca5cdcb"],["./static/js/2.dab4ef21.chunk.js","8001472fc5e6c3f2e92d5f7fd1b38cb8"],["./static/js/main.e36d336c.js","221b8f96eec0fe7c6d5d9b86fd460f8d"],["./static/media/1-block.5ec1d2f7.png","5ec1d2f7fc29e67a2e3ce6b0d910e50a"],["./static/media/begin.c7217fff.png","c7217fff8de68a3f6159b18455dc7247"],["./static/media/close.cbf37b88.pic","cbf37b8842a799f7aae8a54a2891fc02"],["./static/media/drawBg.19f5dce9.png","19f5dce9a9a754ed074c49ce4096d70a"],["./static/media/drawBox.2b4e6390.png","2b4e63902efab8f11945890ac7f86b68"],["./static/media/m1.270b817b.png","270b817bcd8f0367a95a6bf48a71e3c9"],["./static/media/m2.430d9dbd.png","430d9dbdba0e4fcb8831f0d98360b76f"],["./static/media/stop.64c13e7f.png","64c13e7fe401256fb2b4c38e3d1d3ea2"],["./static/media/top.fd92d874.jpg","fd92d8747e69bf368e38098eec418d69"],["./static/media/topBg.d3af24b1.png","d3af24b129b903fcc22560a1a9f55c5e"],["./static/media/travel.2e21daf6.png","2e21daf6dbfd9e2364d859f58a3fbd09"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="./index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});