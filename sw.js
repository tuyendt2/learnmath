// Offline cache. build.mjs fills in the version and the app-shell file list.
// Course data files (data/lop*.js, named by content hash) are not precached:
// each one is stored the first time its course is opened.
const CACHE = "learnmath-a2beef121cd0";
const DATA_CACHE = "learnmath-data";
const PRECACHE = ["./","./app.js","./data/index.js","./icons/icon-180.png","./icons/icon-192.png","./icons/icon-512-maskable.png","./icons/icon-512.png","./icons/icon.svg","./index.html","./katex/fonts/KaTeX_AMS-Regular.woff2","./katex/fonts/KaTeX_Caligraphic-Bold.woff2","./katex/fonts/KaTeX_Caligraphic-Regular.woff2","./katex/fonts/KaTeX_Fraktur-Bold.woff2","./katex/fonts/KaTeX_Fraktur-Regular.woff2","./katex/fonts/KaTeX_Main-Bold.woff2","./katex/fonts/KaTeX_Main-BoldItalic.woff2","./katex/fonts/KaTeX_Main-Italic.woff2","./katex/fonts/KaTeX_Main-Regular.woff2","./katex/fonts/KaTeX_Math-BoldItalic.woff2","./katex/fonts/KaTeX_Math-Italic.woff2","./katex/fonts/KaTeX_SansSerif-Bold.woff2","./katex/fonts/KaTeX_SansSerif-Italic.woff2","./katex/fonts/KaTeX_SansSerif-Regular.woff2","./katex/fonts/KaTeX_Script-Regular.woff2","./katex/fonts/KaTeX_Size1-Regular.woff2","./katex/fonts/KaTeX_Size2-Regular.woff2","./katex/fonts/KaTeX_Size3-Regular.woff2","./katex/fonts/KaTeX_Size4-Regular.woff2","./katex/fonts/KaTeX_Typewriter-Regular.woff2","./katex/katex.min.css","./katex/katex.min.js","./manifest.webmanifest","./style.css"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE && k !== DATA_CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

const isCourseData = (url) => /\/data\/lop[^/]*\.js$/.test(url.pathname);

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  if (url.origin === location.origin && isCourseData(url)) {
    // Hash-named, so a cached copy never goes stale; drop older versions of the same course.
    e.respondWith(
      caches.open(DATA_CACHE).then((c) =>
        c.match(e.request).then(
          (hit) =>
            hit ||
            fetch(e.request).then((res) => {
              if (res.ok) {
                const course = url.pathname.split("/").pop().split(".")[0];
                c.keys().then((ks) => ks.filter((k) => k.url !== e.request.url && new URL(k.url).pathname.split("/").pop().split(".")[0] === course).forEach((k) => c.delete(k)));
                c.put(e.request, res.clone());
              }
              return res;
            }),
        ),
      ),
    );
    return;
  }
  // App shell: cache first; fall back to the network, and to the shell for navigations.
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(
      (hit) =>
        hit ||
        fetch(e.request).catch(() => (e.request.mode === "navigate" ? caches.match("./") : Response.error())),
    ),
  );
});
