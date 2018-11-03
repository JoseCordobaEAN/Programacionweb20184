function intervalo(){
    elemento = document.getElementById('texto');
    elemento.textContent = 'El intervalo es ' + Math.random();
}

setInterval(intervalo, 2000);