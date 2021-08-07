// const CACHE_NAME = "version-1";
// const urlsToCache = ["index.html", "offline.html"];

// const self = this;

// // install sw
// self.addEventListener("install", (event) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//       console.log("Cache opened");
//       return cache.addAll(urlsToCache);
//     })
//   );
// });

// // listen for requests
// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches
//       .match(event.request)
//       .then(() =>
//         fetch(event.request).catch(() => caches.match("offline.html"))
//       )
//   );
// });

// // activate sw
// self.addEventListener("activate", (event) => {
//   const cacheWhitelist = [];
//   cacheWhitelist.push(CACHE_NAME);

//   event.waitUntil(
//     caches.keys().then((cacheNames) =>
//       Promise.all(
//         cacheNames.map((cacheName) => {
//           if (!cacheWhitelist.includes(cacheName)) {
//             return caches.delete(cacheName);
//           }
//           console.log(
//             `${cacheName} is not in the cache whitelist. No need to delete it`
//           );
//         })
//       )
//     )
//   );
// });

// self.addEventListener("message", (event) => {
//   event.waitUntil(
//     this.registration.showNotification("Notification", {
//       body: event.data.value,
//     })
//   );
// });
