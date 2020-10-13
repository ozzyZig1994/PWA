// indexedDB: Reforzamiento
let request = window.indexedDB.open ('mi-database', 2);

// se actualiza cuando se crea o se sube de version de la DB
request.onupgradeneeded = e => {
    console.log('Actualizacion de BD');
    let db = e.target.result;

    db.createObjectStore ('heroes', {
        keyPath: 'id'
    });
};

// manejo de errores
request.onerror = e => {
    console.log('DB error:', e.target.error);
};

// insertar datos
request.onsuccess = e => {
    let db = e.target.result;
    
    let heroesData = [
        { id: '111', heroe: 'Spiderman', mensaje: 'Aqui su amigo y vecino Spiderman' },
        { id: '222', heroe: 'Ironman', mensaje: 'Aqui en mi nuevo Mark 50'}
    ];

    let heroesTransaction = db.transaction ('heroes', 'readwrite');

    heroesTransaction.onerror = e => {
        console.log('Error guardando', e.target.error);
    };

    // informa sobre el exito de la transaccion
    heroesTransaction.oncomplete = e => {
        console.log('Transaccion hecha', e);
    };

    let heroesStore = heroesTransaction.objectStore ('heroes');

    for (const heroe of heroesData)
        heroesStore.add (heroe);
    
    heroesStore.onsuccess = e => {
        console.log('Nuevo item agregado a la base de datos');
    }
};