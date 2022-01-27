//Caches the entire site when window loads and fetch is successful

const cacheName = "v2";

// Call Install Event by attaching a event listener to itself

self.addEventListener("install", (e) => {
  console.log("Service Worker : Installed");
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
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        // make clone of response
        const resClone = res.clone();
        //Open cache
        caches.open(cacheName).then((cache) => {
          // add response to cache
          cache.put(e.request, resClone);
        });
        return res;
      })
      .catch((err) => caches.match(e.request).then((res) => res))
  );
});
