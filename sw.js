/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
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
    "url": "files/casios_dream/casios_dream.epub",
    "revision": "e77029385bc80df0d8fc19f511702d70"
  },
  {
    "url": "files/casios_dream/casios_dream.mobi",
    "revision": "921ff549e8d48bfb775d0f9295487a3a"
  },
  {
    "url": "files/casios_dream/casios_dream.pdf",
    "revision": "e155c4c84512a261fb7ac68e7c06444c"
  },
  {
    "url": "files/casios_dream/casios_dream.txt",
    "revision": "7d4862a6667a695e093957079e0cf6d2"
  },
  {
    "url": "files/helping_hand/helping_hand.epub",
    "revision": "dd1f375470593fabd92b15ff46b47197"
  },
  {
    "url": "files/helping_hand/helping_hand.mobi",
    "revision": "f0a220b904c6531294af12033c69e1e5"
  },
  {
    "url": "files/helping_hand/helping_hand.pdf",
    "revision": "a769e6886f592c736bdd8c21dc315aa8"
  },
  {
    "url": "files/helping_hand/helping_hand.txt",
    "revision": "091ba178e9a1ccd5fa868a8ea569c7d3"
  },
  {
    "url": "files/logo.jpg",
    "revision": "b2c81423db955802615428679720276e"
  },
  {
    "url": "files/nearly_nine/nearly_nine.epub",
    "revision": "878bec5b61e34ae0b8b3103a30c8efab"
  },
  {
    "url": "files/nearly_nine/nearly_nine.mobi",
    "revision": "8576c09299428ff603e9e0166895d6be"
  },
  {
    "url": "files/nearly_nine/nearly_nine.pdf",
    "revision": "f6e6d9d0c8366944d82b550feda2b03e"
  },
  {
    "url": "files/nearly_nine/nearly_nine.txt",
    "revision": "f615a048617c293515884da63228d5d4"
  },
  {
    "url": "files/space_cowboy/space_cowboy.epub",
    "revision": "f00188219f03dbb0bf3d26c1421defe7"
  },
  {
    "url": "files/space_cowboy/space_cowboy.mobi",
    "revision": "6bbd48c73daa8e399e10219bfdd2b217"
  },
  {
    "url": "files/space_cowboy/space_cowboy.pdf",
    "revision": "0d181b8b769e98cac5560a0bc87265fe"
  },
  {
    "url": "files/space_cowboy/space_cowboy.txt",
    "revision": "4714472af4a9a19cb477637902ea12b7"
  },
  {
    "url": "files/stone_son/stone_son.epub",
    "revision": "a15bbd2113aa122589204f4043c7bc4f"
  },
  {
    "url": "files/stone_son/stone_son.mobi",
    "revision": "5a5de0f3359cb69b2f9476ef076bd6b5"
  },
  {
    "url": "files/stone_son/stone_son.pdf",
    "revision": "aa489c2a4585e80321f3e15e440cb5bb"
  },
  {
    "url": "files/stone_son/stone_son.txt",
    "revision": "e7734d98ce3e240fda4b395847167a11"
  },
  {
    "url": "hire/index.html",
    "revision": "054b118dc6edd6a85512c30f47244bab"
  },
  {
    "url": "index.html",
    "revision": "aa230b7ce606b266f1c289405a7b4182"
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
    "url": "news/2018/04/06/speculative66-issue-18.html",
    "revision": "f71d5200d210f41709845588de69fb25"
  },
  {
    "url": "news/2018/09/18/blazing-lantern-winner.html",
    "revision": "7ca95c70ccdb08fcfbd08e277de24478"
  },
  {
    "url": "news/feed.xml",
    "revision": "9f3cb46c37207939dcc226cee91ed97d"
  },
  {
    "url": "news/index.html",
    "revision": "c3e179635fe485693b3898627c9b7791"
  },
  {
    "url": "read/index.html",
    "revision": "03f7f997e06ec2c0833c47ed7243952f"
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
    "revision": "37571865f67175eba69b42a2843d367f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
