self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('static-cache').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/manifest.json',
                '/icons8-home.svg',
                '/icons8-links-50 (1).png',
                '/icons8-microphone-32.png',
                '/icons8-settings.svg',
                '/icons8-world-48.png',
                '/index2.html',
                '/index2.js',
                '/Kategorien.css',
                '/Kategorien.html',
                '/Ladebalken.png',
                '/Logo-gpt.png',
                '/Logo-gpt_painted.jpg',
                '/Logo-neu.png',
                '/main.js',
                '/mehrspieler.css',
                '/mehrspieler.html',
                '/mehrspieler.js',
                '/pfeil links (2).png',
                '/pfeil links.png',
                '/profil.css',
                '/profil.html',
                '/Profilbildfake.png',
                '/questions.js',
                '/ranking-mehrspieler.css',
                '/ranking-mehrspieler.html',
                '/ranking-mehrspieler.js',
                '/Schwierigkeiten.css',
                '/Schwierigkeiten.html',
                '/settings icon.png',
                '/Startbutton.png',
                '/startseite.css',
                '/startseite.html',
                '/streak.png',
                '/style.css',
                '/style2.css',
                '/Tutanchamun.png',
                '/wallpaper.png',
                '/Zahnrad.png',
                '/Kategorien/1.png',
                '/Kategorien/2.png',
                '/Kategorien/3.png',
                '/Kategorien/4.png',
                '/Kategorien/5.png',
                '/Kategorien/6.png',
                '/Kategorien/ALLES.png',
                '/Kategorien/Thumbs.db',
                '/belohnung-mehrspieler.html',
                '/belohnung-mehrspieler.js',
                '/belohnung.css',
                '/belohnung.html',
                '/Caesar-PB.jpg',
                '/coin.png',
                '/Donald Trump.png',
                '/Donald Trump2.svg',
                '/DreieckStartButton.png',
                '/endranking-mehrspieler.css',
                '/endranking-mehrspieler.html',
                '/endranking-mehrspieler.js',
                '/Fortschritt.png',
                '/fragen-mehrspieler.css',
                '/fragen-mehrspieler.html',
                '/fragen-mehrspieler.js',
                '/fuse.js',
                '/Albert Einstein.png',
                '/OIP.jfif'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});