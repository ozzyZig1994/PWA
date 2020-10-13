/*fetch ('https://reqres.in/api/users')
.then (resp => resp.json ())
.then (respObj => {
    console.log(respObj);
    console.log(respObj.page);
    console.log(respObj.per_page);
});*/

/*let usuario = {
    nombre: ' Josué',
    edad: 25
};

fetch ('https://reqres.in/api/users', {
    method: 'POST', //PUT
    body: JSON.stringify (usuario),
    headers: {
        'Content-Type': 'application/json'
    }
})
.then (resp => resp.json ())
.then (console.log)
.catch (console.log)*/

/*let img = document.querySelector ('img');

fetch ('superman.png')
.then (resp => resp.blob ())
.then (imagen => {
    var imgPath = URL.createObjectURL (imagen);
    img.src = imgPath;
})*/

/*fetch ('https://reqres.in/api/users/1')
.then (resp => {
    resp.clone ().json ().then (usuario => {
        console.log(usuario.data);
    });

    resp.json ().then (usuario => {
        console.log(usuario.data);
    })
})*/

/*fetch ('https://reqres.in/api/users/1000')
.then (resp => {
    
    if (!resp.ok)
        console.log('El usuario no existe');
    else
        resp.json ().then (console.log)
})
.catch (error => {
    console.log('Error en la petición');
    console.log(error);
})*/

fetch ('not-found.html')
.then (resp => resp.text ())
.then (html => {
    let body = document.querySelector ('body');
    body.innerHTML = html;
})
.catch (error => {
    console.log ('Error en la petición');
    console.log (error);
})