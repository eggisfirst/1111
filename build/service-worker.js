"use strict";var precacheConfig=[["./index.html","f5cfbc369e5e30db13ec033d80f764dc"],["./static/css/main.d50565a4.css","b0fd40c8af72d4a168573ff6f1b7375e"],["./static/js/0.4de094fe.chunk.js","3b6047e998fb03fade051d49caa79c9b"],["./static/js/1.48273a4e.chunk.js","aeb57a6cc31b519391ba622d4ad64d4e"],["./static/js/2.88d7f3fe.chunk.js","e3cff44659d1bc3dc0cd12daff18d5aa"],["./static/js/main.e1c0e80a.js","41a68c3bb7595489a29dd8750a3782e6"],["./static/media/1-block.5ec1d2f7.png","5ec1d2f7fc29e67a2e3ce6b0d910e50a"],["./static/media/begin.c7217fff.png","c7217fff8de68a3f6159b18455dc7247"],["./static/media/close.cbf37b88.pic","cbf37b8842a799f7aae8a54a2891fc02"],["./static/media/drawBg.19f5dce9.png","19f5dce9a9a754ed074c49ce4096d70a"],["./static/media/drawBox.2b4e6390.png","2b4e63902efab8f11945890ac7f86b68"],["./static/media/m1.0e3c0aa9.png","0e3c0aa90ae08b0e1ced69bca38ae36a"],["./static/media/m3.9e8fb7fc.png","9e8fb7fc28a8d04b7cac2a7f7c2bca10"],["./static/media/m6.cb0ca5fa.png","cb0ca5fac41eef6d112634b53ea138e7"],["./static/media/stop.64c13e7f.png","64c13e7fe401256fb2b4c38e3d1d3ea2"],["./static/media/top.e654c34a.jpg","e654c34a174ac47438b56bd846411246"],["./static/media/topBg.57b13a81.jpg","57b13a818bd863da3e084bff70f1c599"],["./static/media/travel.1e321f7d.png","1e321f7d2e40aee7ec4bc72a2ca60050"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="./index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});