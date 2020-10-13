/*if ('serviceWorker' in navigator) {
    console.log('Podemos usarlo');
}*/

// Confirmar si podemos usar SW
if (navigator.serviceWorker) {
    //console.log('Podemos usar SW');
    navigator.serviceWorker.register ('/sw.js');
}