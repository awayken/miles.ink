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
    "revision": "907748dfe031c2d7f589c1079b464208"
  },
  {
    "url": "contact/index.html",
    "revision": "aa040772e9b9088e095812d8d138da93"
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
    "revision": "737aa8c692e1f698ac785abbb8e8822b"
  },
  {
    "url": "index.html",
    "revision": "d249d3a7ecf5da98c88e26c6b68a9176"
  },
  {
    "url": "news/2014/01/27/nearly-nine-on-mash-stories.html",
    "revision": "7c5ab964fb28cb6bac323b6d5f3839f2"
  },
  {
    "url": "news/2014/02/19/nearly-nine-on-mash-stories-won.html",
    "revision": "2f6d5057250c2a7916bf2099dd8816fb"
  },
  {
    "url": "news/2014/03/20/mash-stories-interviews-miles.html",
    "revision": "99cdbcb8962f5da07e0c60b48a1bf55e"
  },
  {
    "url": "news/2014/04/07/nearly-nine-on-the-mash-stories-podcast.html",
    "revision": "abe52c7c1e67a88499d0e5421534e26a"
  },
  {
    "url": "news/2014/04/15/buy-wisdom-for-dad.html",
    "revision": "d538333b6df28c7f42d29c8955669d24"
  },
  {
    "url": "news/2014/09/15/the-wax-and-wane-of-writing.html",
    "revision": "e081bce404f0049095c07c018b30eeb1"
  },
  {
    "url": "news/2015/05/27/welcome-to-miles.ink.html",
    "revision": "a4d37d7d359e25970b1901bfb7e6743a"
  },
  {
    "url": "news/2015/09/06/nearly-nine-skullmore-vol-2.html",
    "revision": "fc907dfeb98a7272dd005b3982cf1543"
  },
  {
    "url": "news/feed.xml",
    "revision": "3c42d1521301d7b8f50169002f876acd"
  },
  {
    "url": "news/index.html",
    "revision": "71c77fb8ab18a08459fee1a81c597c51"
  },
  {
    "url": "read/index.html",
    "revision": "91f6e714c90639ad6905573a1ac31948"
  },
  {
    "url": "scripts/app.js",
    "revision": "8cdf584aad487c4a39c51e3f5f1e0dcb"
  },
  {
    "url": "styles/main.css",
    "revision": "6124aa62c7c4801996381312e224c50f"
  },
  {
    "url": "support/index.html",
    "revision": "d0a4a1cea13366c73e3181b64d2ac03b"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
