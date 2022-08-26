
let animado = document.querySelectorAll("#seccion");
function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i < animado.length; i++) {
        let alturaAnimado = animado[i].offsetTop;
        if (alturaAnimado == scrollTop) {
            animado[i].style.display = "block";
        }
        
    }
}

window.addEventListener('scroll', mostrarScroll);