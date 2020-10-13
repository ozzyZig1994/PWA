// Entrenamiento PouchDB

// 1- Crear la base de datos
// Nombre:  mensajes
var db = new PouchDB('mensajes');
var remoteCouch = false;

// Objeto a grabar en base de datos
let mensaje = {
    _id: new Date().toISOString(),
    user: 'spiderman',
    mensaje: 'Mi tía hizo unos panqueques muy buenos',
    sincronizado: false
};

/*db.put (mensaje)
.then (console.log('Successfully posted a todo!'))
.catch (console.log);*/

// 3- Leer todos los mensajes offline
db.allDocs({include_docs: true, descending: false}).then (doc => {
    doc.rows.forEach(row => {
        let doc = row.doc;
        console.log(doc);
    });
});

// 4- Cambiar el valor 'sincronizado' de todos los objetos
//  en la BD a TRUE
/*db.allDocs({include_docs: true, descending: false}).then (doc => {
    doc.rows.forEach(row => {
        let doc = row.doc;
        doc.sincronizado = true;
        if (doc.sincronizado === false)
            db.put (doc);
    });
});*/

// 5- Borrar todos los registros, uno por uno, evaluando
// cuales estan sincronizados
// deberá de comentar todo el código que actualiza
// el campo de la sincronización 
db.allDocs({include_docs: true, descending: false}).then (doc => {
    doc.rows.forEach(row => {
        let doc = row.doc;
        if (doc.sincronizado === true)
            db.remove(doc);
    });
});




