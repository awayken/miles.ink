(function () {
    'use strict';

    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('/sw.js').then(function() {
                console.log('🛠 Time to get to work!');
            }).catch(function(err) {
                console.error('Unable to register service worker:', err);
            });
        });
    }

}());
