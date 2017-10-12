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
    "revision": "36f62b2756b6ca0f0e2c02899a9e4f68"
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
    "revision": "9e174129c68d2f4d81dc234d204ff1c8"
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
    "revision": "054b118dc6edd6a85512c30f47244bab"
  },
  {
    "url": "index.html",
    "revision": "0ed1532da7a19c10be77954c1265b6ae"
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
    "revision": "bd6b1785790c377b8eada94ada83c489"
  },
  {
    "url": "news/2014/02/19/nearly-nine-on-mash-stories-won.html",
    "revision": "90b5db29d32105a2bc8f2079ab4495d6"
  },
  {
    "url": "news/2014/03/20/mash-stories-interviews-miles.html",
    "revision": "25fc1052e8ff0bb7e949b082e3dbca8c"
  },
  {
    "url": "news/2014/04/07/nearly-nine-on-the-mash-stories-podcast.html",
    "revision": "1dde661e2dbed17f9b12a5fe44d9d8a4"
  },
  {
    "url": "news/2014/04/15/buy-wisdom-for-dad.html",
    "revision": "54b1cea2b5fcc237b8d1226d9b1a11ac"
  },
  {
    "url": "news/2014/09/15/the-wax-and-wane-of-writing.html",
    "revision": "30405693b04b2a704e98034997aad82d"
  },
  {
    "url": "news/2015/05/27/welcome-to-miles.ink.html",
    "revision": "45daa5278d281fe84f5172b21936d26a"
  },
  {
    "url": "news/2015/09/06/nearly-nine-skullmore-vol-2.html",
    "revision": "e17379b682a44f72ae02110644aba857"
  },
  {
    "url": "news/2017/07/06/speculative66-issue-10.html",
    "revision": "7be48a6022447e60995fb9b898326d01"
  },
  {
    "url": "news/2017/10/11/miles-ink-is-secure.html",
    "revision": "e06606a886a77ef1635270c2a77a7ba7"
  },
  {
    "url": "news/feed.xml",
    "revision": "6b38851a63fa63c60e7a8dd167b66ff3"
  },
  {
    "url": "news/index.html",
    "revision": "4d1d1c6cacae8f8e15984cdc9a8f4f46"
  },
  {
    "url": "read/index.html",
    "revision": "185b529649c5c76ea37835338dd773e4"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "bc6a6fca8da1e801b9e2014f2bdb860e"
  },
  {
    "url": "scripts/app.js",
    "revision": "8cdf584aad487c4a39c51e3f5f1e0dcb"
  },
  {
    "url": "styles/main.css",
    "revision": "fecfa3cf1573a441056a00a4263338b4"
  },
  {
    "url": "support/index.html",
    "revision": "37571865f67175eba69b42a2843d367f"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
