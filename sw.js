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
    "revision": "d26a26b79165ab0c9c983120be6db26f"
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
    "revision": "6de5947df19fec8f8b6bdc7cc3818e9a"
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
    "revision": "4633f193010ec857620a5cb4a0c2b6a6"
  },
  {
    "url": "index.html",
    "revision": "23dc670254a252326ce17d28343132a2"
  },
  {
    "url": "manifest.json",
    "revision": "0b3c485b108376358ebee073400f81f0"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "e515bea68cfde0bdb1001685cf278ea3"
  },
  {
    "url": "news/2014/01/27/nearly-nine-on-mash-stories.html",
    "revision": "478f05d26680e428f94a3c0ec9e22c6a"
  },
  {
    "url": "news/2014/02/19/nearly-nine-on-mash-stories-won.html",
    "revision": "a8caad2e47003b07634e3ab54da8751b"
  },
  {
    "url": "news/2014/03/20/mash-stories-interviews-miles.html",
    "revision": "5344aafd61c64616e605791883e54888"
  },
  {
    "url": "news/2014/04/07/nearly-nine-on-the-mash-stories-podcast.html",
    "revision": "dca072c23977ecc622cab51c70bf671d"
  },
  {
    "url": "news/2014/04/15/buy-wisdom-for-dad.html",
    "revision": "1cb8da2d2f95a0cfb1db0911c2b6037d"
  },
  {
    "url": "news/2014/09/15/the-wax-and-wane-of-writing.html",
    "revision": "72ae3e2549195174c4874926a6cb382d"
  },
  {
    "url": "news/2015/05/27/welcome-to-miles.ink.html",
    "revision": "53428dbffb669ad542a56f67bc53c314"
  },
  {
    "url": "news/2015/09/06/nearly-nine-skullmore-vol-2.html",
    "revision": "e0ac8b527e5a591d653dfbc3ef802e86"
  },
  {
    "url": "news/2017/07/06/speculative66-issue-10.html",
    "revision": "28cdd745362414ee98918d8115da523e"
  },
  {
    "url": "news/feed.xml",
    "revision": "474e66e32077136f44706d19f813fe04"
  },
  {
    "url": "news/index.html",
    "revision": "8c96da2d43395940c68e050e2acbc706"
  },
  {
    "url": "read/index.html",
    "revision": "59752c4899931e94d9963e462b893934"
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
    "revision": "52524018ab090905dce45bee366bf4fa"
  },
  {
    "url": "support/index.html",
    "revision": "01e7331c38e4c2cbe651dcab412f9e73"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
