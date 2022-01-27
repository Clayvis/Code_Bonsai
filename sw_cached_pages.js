//Caches just the sites that are stated in the cacheAssets

const cacheName = "v1";

const cacheAssets = ["index.html", "./src/styles.css", "./src/index.js"];

// Call Install Event by attaching a event listener to itself

self.addEventListener("install", (e) => {
  console.log("Service Worker : Installed");

  e.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        console.log("Service Worker : Caching files");
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

// Call Activate Event

self.addEventListener("activate", (e) => {
  console.log("Service Worker : Activated");
  //Remove unwanted caches

  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            console.log("Service Worker : Clearing Old Cache");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

//Call Fetch Event

self.addEventListener("fetch", (e) => {
  console.log("Service Worker : Fetching");
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
