importScripts('workbox-sw.prod.v2.1.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "about/index.html",
    "revision": "fef97bcc9d6de9e3b3b8a3e5a802d59c"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "c3accd6738b006f431b303960ec4f997"
  },
  {
    "url": "android-chrome-512x512.png",
    "revision": "8ff2ad81af8747b7bd4a50ffe085f177"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "9879191bf5d31e982520c03fa8fe4f12"
  },
  {
    "url": "browserconfig.xml",
    "revision": "1989bf420f6edfab6e700f1f4ef810b3"
  },
  {
    "url": "contact/index.html",
    "revision": "64b15f118e8632f8264e8f8f9def3001"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "590f59df0d1fe481fc6d5b03544e2e90"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "8b4dc3b35001edf5c096da57d8f156aa"
  },
  {
    "url": "files/bookshelf.jpg",
    "revision": "ecbb8c16e2936e2c3fa0d5ed1db2bdab"
  },
  {
    "url": "files/helping_hand.pdf",
    "revision": "873e796740b896f7bafc075bbd04b5cd"
  },
  {
    "url": "files/logo.jpg",
    "revision": "b2c81423db955802615428679720276e"
  },
  {
    "url": "files/nearly_nine.pdf",
    "revision": "6ac6a55c50e055feb57e2d94daf87188"
  },
  {
    "url": "hire/index.html",
    "revision": "ae943c5cae2c2a57aecf4ceb82102e2a"
  },
  {
    "url": "index.html",
    "revision": "e778c9c011e62510f8d05adf5763c8f5"
  },
  {
    "url": "manifest.json",
    "revision": "1e1d3dd1bb1b5e31f2218c9865f3e8ee"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "e515bea68cfde0bdb1001685cf278ea3"
  },
  {
    "url": "news/2014/01/27/nearly-nine-on-mash-stories.html",
    "revision": "21c9c030eebd90e5d33dc9242abd465b"
  },
  {
    "url": "news/2014/02/19/nearly-nine-on-mash-stories-won.html",
    "revision": "9c1b4556fde698d6b117263d029c83e8"
  },
  {
    "url": "news/2014/03/20/mash-stories-interviews-miles.html",
    "revision": "c83126d8090af570569da907b2d2eba4"
  },
  {
    "url": "news/2014/04/07/nearly-nine-on-the-mash-stories-podcast.html",
    "revision": "12f38afc8f95f44d60b87f63f4ee6e8e"
  },
  {
    "url": "news/2014/04/15/buy-wisdom-for-dad.html",
    "revision": "6c496d12aacac0006be0e5898209ed14"
  },
  {
    "url": "news/2014/09/15/the-wax-and-wane-of-writing.html",
    "revision": "bac12e76638013922d69ad14fb9a3feb"
  },
  {
    "url": "news/2015/05/27/welcome-to-miles.ink.html",
    "revision": "dd8eb3378a282912d5e37dd1af7bfd39"
  },
  {
    "url": "news/2015/09/06/nearly-nine-skullmore-vol-2.html",
    "revision": "40504061b9d7538f907cb075f2df4837"
  },
  {
    "url": "news/2017/07/06/speculative66-issue-10.html",
    "revision": "6f92f212a62b302b4f41fe43ebd11976"
  },
  {
    "url": "news/2017/10/11/miles-ink-is-secure.html",
    "revision": "13f5421da8cafa4b06d316103cfe3d06"
  },
  {
    "url": "news/feed.xml",
    "revision": "053d7c448112c6fca6f9477fb134852a"
  },
  {
    "url": "news/index.html",
    "revision": "d39d9011fd77cd07a31439b25f750a42"
  },
  {
    "url": "read/index.html",
    "revision": "7b3d19291128fd1fc53b5924a9a53fbc"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "bc6a6fca8da1e801b9e2014f2bdb860e"
  },
  {
    "url": "scripts/app.js",
    "revision": "7a0d679461eea277a2fb0993d686ba33"
  },
  {
    "url": "styles/main.css",
    "revision": "fecfa3cf1573a441056a00a4263338b4"
  },
  {
    "url": "support/index.html",
    "revision": "76da711aafe0fe5fa5585d612b1581d4"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
