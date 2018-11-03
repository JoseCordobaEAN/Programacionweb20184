var miFuncion = function(){
           alert('Hola mundo');
    contenido = document.getElementById('contenido');
    console.log(contenido);
    contenido.innerHTML = 'cambio despues de 2 segundos'

           };
setTimeout(miFuncion, 2000);
