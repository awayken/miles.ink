---
layout: null
---
(function() {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('{{ site.baseurl }}/sw.js').then(function() {
            console.log('Installed the Service Worker!');
        }).catch(function(err) {
            console.error('Unable to register service worker:', err);
        });
    }
})();
