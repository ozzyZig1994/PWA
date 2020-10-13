self.addEventListener ('fetch', e => {
    /*if (e.request.url.includes ('style.css'))
        e.respondWith (null);
    else
        e.respondWith (fetch (e.request));*/

    //e.respondWith (fetch (e.request.url));

    /*if (e.request.url.includes ('style.css')) {
        console.log(e.request.url);
        //let fotoReq = fetch ('img/main.jpg');
        //let fotoReq = fetch (e.request.url);
        let fotoReq = fetch (e.request);
        
        e.respondWith (fotoReq);
    }*/

    /*if (e.request.url.includes ('style.css')) {
        let respuesta = new Response (`
            body {
                background-color: red !important;
                color: pink
            }
        `, {
            headers: {
                'Content-Type': 'text/css'
            }
        });

        e.respondWith (respuesta);
    }*/

    /*if (e.request.url.includes ('main.jpg')) {
        //e.respondWith (fetch ('img/main-patas-arriba.jpg'));
        let respuesta = fetch ('img/main-patas-arriba.jpg');
        e.respondWith (respuesta);
    }*/

    const resp = fetch (e.request).then (resp => resp.ok ? resp : fetch ('img/main.jpg'));

    e.respondWith ( resp);
});