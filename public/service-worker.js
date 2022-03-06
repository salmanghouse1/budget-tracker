// files to cache in array
const FILES_TO_CACHE = [
  "./index.html",
  "./css/styles.css",
  ".js/index.js",
  "./schedule.html",
  "./assets/idb.js",
];

// cache name
const APP_PREFIX = 'TransactionsTracker-';     
const VERSION = 'version_01';
const CACHE_NAME = APP_PREFIX + VERSION;

// eventlistner before window loads
self.addEventListener('install', function (e) {
e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('installing cache : ' + CACHE_NAME)
      return cache.addAll(FILES_TO_CACHE)
    }))
})