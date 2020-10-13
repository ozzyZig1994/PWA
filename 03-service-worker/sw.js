// Ciclo de vida del SW

self.addEventListener ('install', e => {
    // Descargar assets
    // Creamos cache
    console.log('SW: Instalando SW');

    const INSTALACION = new Promise ((resolve, reject) => {
        setTimeout (() => {
            console.log('SW: Instalaciones terminadas');
            self.skipWaiting ();
            resolve ();
        }, 1)
    });

    e.waitUntil (INSTALACION);
});

// Cuando SW toma el control de la aplicacion
self.addEventListener ('activate', e => {
    // Borrar cache viejo
    console.log('SW2: activo y listo  para controlar la aplicacion');
})

// FETCH: Manejo de peticiones HTTP
self.addEventListener ('fetch', e => {
    // Aplicar estrategias del cache
    /*console.log('SW:', e.request.url);

    if (e.request.url.includes ('https://reqres.in/')) {
        const resp = new Response (`{ ok: false, mensaje: jaja }`);

        e.respondWith (resp);
    }*/
})

// SYNC: Recuperamos conexion a internet
self.addEventListener ('sync', e => {
    console.log('Tenemos conexion!');
    console.log(e);
    console.log(e.tag);
})

// PUSH: manejar las push notifications
self.addEventListener ('push', e=> {
    console.log('Notificacion recibida');
});