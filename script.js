let victorias = 0
let derrotas = 0
let racha = 0
function jugar(jugada){
    let ganaste = document.querySelector('#ganaste')
    let perdiste = document.querySelector('#perdiste')
    let empataste = document.querySelector('#empataste')
    let victoriasT = document.querySelector('.victoriasT')
    empataste.classList.remove('aparecer')
    empataste.classList.add('img')
    perdiste.classList.remove('aparecer')
    ganaste.classList.remove('aparecer')
    ganaste.classList.add('img')
    perdiste.classList.add('img')
    let jugadarival = Math.floor(Math.random() * (2 - 0 + 1) + 0);
    if (jugada==jugadarival){
        empataste.classList.remove('img')
        empataste.classList.add('aparecer')
        alert("¡Empate!")}
    if ((jugada==0) && (jugadarival==1)){
        alert("¡Perdiste! Tu rival eligió papel.")
        perdiste.classList.remove('img')
        perdiste.classList.add('aparecer')
        racha = 0
        derrotas++}
    if ((jugada==1) && (jugadarival==2)){
        alert("¡Perdiste! Tu rival eligió tijera.")
        perdiste.classList.remove('img')
        perdiste.classList.add('aparecer')
        racha = 0
        derrotas++}
    if ((jugada==0) && (jugadarival==2)){
        alert("¡Ganaste! Tu rival eligió tijera.")
        ganaste.classList.remove('img')
        ganaste.classList.add('aparecer')
        victorias++
        racha++}
    if ((jugada==1) && (jugadarival==0)){
        alert("¡Ganaste! Tu rival eligió piedra.")
        ganaste.classList.remove('img')
        ganaste.classList.add('aparecer')
        victorias++
        racha++}
    if ((jugada==2) && (jugadarival==0)){
        alert("¡Perdiste! Tu rival eligió piedra.")
        perdiste.classList.remove('img')
        perdiste.classList.add('aparecer')
        racha = 0
        derrotas++}
    if ((jugada==2) && (jugadarival==1)){
        alert("¡Ganaste! Tu rival eligió papel.")
        ganaste.classList.remove('img')
        ganaste.classList.add('aparecer')
        victorias++
        racha++}
    document.getElementsByClassName('victoriasT')[0].textContent = victorias;
    document.getElementsByClassName('derrotasT')[0].textContent = derrotas;
    document.getElementsByClassName('rachaT')[0].textContent = racha;
    return(victorias)
    }