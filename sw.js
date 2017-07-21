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
    "revision": "176954f45aea0da0d89fd5a59db3b656"
  },
  {
    "url": "contact/index.html",
    "revision": "eb55b9f716ecfff5ce6a643c3b504c97"
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
    "revision": "78625a546a34cae044689eafe472bf0c"
  },
  {
    "url": "index.html",
    "revision": "a565816078b3872f9d94970a8ab151d7"
  },
  {
    "url": "news/2014/01/27/nearly-nine-on-mash-stories.html",
    "revision": "85891838d96af93d2ca71b8c45c406cd"
  },
  {
    "url": "news/2014/02/19/nearly-nine-on-mash-stories-won.html",
    "revision": "d499c7a85dd35ae457a749ae30e1adee"
  },
  {
    "url": "news/2014/03/20/mash-stories-interviews-miles.html",
    "revision": "933269c80fe252677ce3f9dff0646b69"
  },
  {
    "url": "news/2014/04/07/nearly-nine-on-the-mash-stories-podcast.html",
    "revision": "ad9cb4f23bffb480de46330d63a5107e"
  },
  {
    "url": "news/2014/04/15/buy-wisdom-for-dad.html",
    "revision": "c4b9675d9be22609941cf118bb705e8c"
  },
  {
    "url": "news/2014/09/15/the-wax-and-wane-of-writing.html",
    "revision": "b9269209c42bfea3c4aaff6cca6634fe"
  },
  {
    "url": "news/2015/05/27/welcome-to-miles.ink.html",
    "revision": "e016329577eef3a6606bd1924ae4bcec"
  },
  {
    "url": "news/2015/09/06/nearly-nine-skullmore-vol-2.html",
    "revision": "2064ab4cf8b369c0090344957ac20d66"
  },
  {
    "url": "news/feed.xml",
    "revision": "facbc36a2e988df16a432533224d2cf3"
  },
  {
    "url": "news/index.html",
    "revision": "5fdc92910eee2ad7640fe2d304180c21"
  },
  {
    "url": "read/index.html",
    "revision": "e043d3e6f94de993cc51f2c7df32b695"
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
    "revision": "79b1cde206d7b2148e37ba4c003d0e35"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
