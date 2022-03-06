// files to cache in array
const FILES_TO_CACHE = [
  "./index.html",
  "./css/styles.css",
  "./js/index.js",
  "./assets/idb.js",
  "./icons/icon-192x192.png",
  //   "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
];

// cache name
const APP_PREFIX = "TransactionsTracker-";
const VERSION = "version_01";
const CACHE_NAME = APP_PREFIX + VERSION;

// eventlistner before window loads
self.addEventListener("install", function (e) {
  console.log("Service worker installed");

  e.waitUntil(
    caches.open("static").then(function (cache) {
      console.log("[Service Worker] Precaching App Shell");
      cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keyList) {
      let cacheKeeplist = keyList.filter(function (key) {
        return key.indexOf(APP_PREFIX);
      });
      cacheKeeplist.push(CACHE_NAME);
      return Promise.all(
        keyList.map(function (key, i) {
          if (cacheKeeplist.indexOf(key) === -1) {
            console.log("deleting cache : " + keyList[i]);
            return caches.delete(keyList[i]);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", function (e) {
  console.log("fetch request : " + e.request.url);
  e.respondWith(
    caches.match(e.request).then(function (request) {
      if (request) {
        // if cache is available, respond with cache
        console.log("responding with cache : " + e.request.url);
        return request;
      } else {
        // if there are no cache, try fetching request
        console.log("file is not cached, fetching : " + e.request.url);
        return fetch(e.request);
      }

      // You can omit if/else for console.log & put one line below like this too.
      // return request || fetch(e.request)
    })
  );
});
