const carrossel = document.querySelectorAll('.carrossel');
const btnprev = document.getElementById('prev-button');
const btnnext = document.getElementById('next-button');

let currentcarrossel = 0;

function hidecarrossel() {
    carrossel.forEach(item => item.classList.remove('ligado'))
}

function showcarrossel() {
    carrossel[currentcarrossel].classList.add('ligado')
}

function nextimage() {
    hidecarrossel()
    if(currentcarrossel == carrossel.length -1) {
        currentcarrossel = 0
    } else {
        currentcarrossel++
    }
    showcarrossel()
}

function previmage(){
    hidecarrossel()
    if(currentcarrossel == 0 ){
        currentcarrossel = carrossel.length -2
    } else {
        currentcarrossel--
    }
    showcarrossel()
}

btnnext.addEventListener('click', nextimage)
btnprev.addEventListener('click', previmage)

