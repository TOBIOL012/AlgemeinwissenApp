self.addEventListener('fetch', (event) => {
    // Leite alle Anfragen standardmäßig weiter
    event.respondWith(fetch(event.request));
});