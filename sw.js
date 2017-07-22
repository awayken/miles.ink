importScripts('workbox-sw.prod.v1.1.0.js');

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
    "revision": "cd15d38113a671bc7541b53861c87dd1"
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
    "revision": "681114f4087f63fdfe5782c9ca208e26"
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
    "revision": "3407fc4ae39cbd4b76c6e8c0748aa4c5"
  },
  {
    "url": "index.html",
    "revision": "aa4a61263cd801194f6378be35c74931"
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
    "revision": "d54d93f4c32ee43ef8d64961b40de889"
  },
  {
    "url": "news/2014/02/19/nearly-nine-on-mash-stories-won.html",
    "revision": "52838f881d5086468d7450a7b4d7a86f"
  },
  {
    "url": "news/2014/03/20/mash-stories-interviews-miles.html",
    "revision": "a496404576e38bab2ddaa4137994fb5c"
  },
  {
    "url": "news/2014/04/07/nearly-nine-on-the-mash-stories-podcast.html",
    "revision": "ff99bcabc687f20d5ffd7a5f8ff5f85f"
  },
  {
    "url": "news/2014/04/15/buy-wisdom-for-dad.html",
    "revision": "048cbe7cda889c9a8eb2fcf44d362653"
  },
  {
    "url": "news/2014/09/15/the-wax-and-wane-of-writing.html",
    "revision": "360fa4bd6f59e4f5b4a90ea19120962f"
  },
  {
    "url": "news/2015/05/27/welcome-to-miles.ink.html",
    "revision": "f7def28c732a95a76188598291234981"
  },
  {
    "url": "news/2015/09/06/nearly-nine-skullmore-vol-2.html",
    "revision": "4bd7fd64a34a441a18c5a6b7747c46c4"
  },
  {
    "url": "news/2017/07/06/speculative66-issue-10.html",
    "revision": "9a75ae09b9eb096591d2034973500761"
  },
  {
    "url": "news/feed.xml",
    "revision": "25b302d0ec35b5a7e9b1102414c387f1"
  },
  {
    "url": "news/index.html",
    "revision": "f6df6259528a4c3b0a149fcafa4352bf"
  },
  {
    "url": "read/index.html",
    "revision": "3a8478ad241eca4f6269bb741889281a"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "bc6a6fca8da1e801b9e2014f2bdb860e"
  },
  {
    "url": "scripts/app.js",
    "revision": "592a6dd883b41e5e16b544d84fc17cba"
  },
  {
    "url": "styles/main.css",
    "revision": "94b3c51ddf4e7fce40473fdfa4c3ffb8"
  },
  {
    "url": "support/index.html",
    "revision": "de4b44aa466cf3a908c5cf4e509d4cde"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
