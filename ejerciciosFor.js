let solu = document.querySelector("#solucion")

/* 1. Escriba un programa que pida dos números enteros y escriba qué números son pares y
cuáles impares desde el primero hasta el segundo. */

function ejercicio1 () {
    let min = parseInt(prompt("Introduce un número mínimo"))
    let max = parseInt(prompt("Introduce un número máximo"))

    for (let i = min; i <= max; i++) {
        if (i % 2 == 0) {
            solu.innerHTML += "El número "+i+" es par<br>"
        }    
        else { 
            solu.innerHTML += "El número "+i+" es impar<br>"
        }    
    }
}