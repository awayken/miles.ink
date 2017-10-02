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
    "revision": "afcc840270d7b2f8098e30a05a361fe5"
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
    "revision": "4005e158f376303c79bc11cba001722f"
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
    "revision": "0f6bcd30416426ece06d8702d59f0db1"
  },
  {
    "url": "index.html",
    "revision": "0a84655bce3769e71b033922752cce22"
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
    "revision": "8d9777e2e654f477cb3fde5cee8e33bc"
  },
  {
    "url": "news/2014/02/19/nearly-nine-on-mash-stories-won.html",
    "revision": "ae1a55b4fabcc9055f46945c07284f24"
  },
  {
    "url": "news/2014/03/20/mash-stories-interviews-miles.html",
    "revision": "daf8db9d013e878dbd6d065c520eb8ff"
  },
  {
    "url": "news/2014/04/07/nearly-nine-on-the-mash-stories-podcast.html",
    "revision": "7c6de07063b3c676812808f368bf1e4c"
  },
  {
    "url": "news/2014/04/15/buy-wisdom-for-dad.html",
    "revision": "940fbffd1b150b417faca5448d7f92d4"
  },
  {
    "url": "news/2014/09/15/the-wax-and-wane-of-writing.html",
    "revision": "f2cbbfaae4c728fe7bcbd72e773f7cee"
  },
  {
    "url": "news/2015/05/27/welcome-to-miles.ink.html",
    "revision": "72b4c533ae9cabc5f48c3e2406087678"
  },
  {
    "url": "news/2015/09/06/nearly-nine-skullmore-vol-2.html",
    "revision": "ffdb5f30898058a3a1c411cfcb2cecb2"
  },
  {
    "url": "news/2017/07/06/speculative66-issue-10.html",
    "revision": "faab2437d860d38f8079a3b31a7f1e60"
  },
  {
    "url": "news/feed.xml",
    "revision": "3c9b7d5fc097b0ae444965aff96d89fc"
  },
  {
    "url": "news/index.html",
    "revision": "8131bdf9b4ec4665194b3c4fc0fb9a07"
  },
  {
    "url": "read/index.html",
    "revision": "b01c6867c33b4ca17e66d3832c483f8a"
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
    "revision": "94b3c51ddf4e7fce40473fdfa4c3ffb8"
  },
  {
    "url": "support/index.html",
    "revision": "07f8f3d008f811de987b63e0524d2d07"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
