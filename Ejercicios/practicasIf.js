/* 1. Escriba un programa que pida dos números enteros y que calcule su división, escribiendo si
la división es exacta o no.
Mejore el programa anterior haciendo que tenga en cuenta que no se puede dividir por cero: */

let solu = document.querySelector("#solucion")

function ejercicio1() {
    let num1 = prompt("Introduce el primer número")
    let num2 = prompt("Introduce el segundo número")
    if (num2 != 0) {
        let division = num1 / num2
        let resto = num1 % num2

        if (resto == 0) {
            solu.textContent = "La división entre "+num1+" y "+num2+" da "+division+" y SÍ es exacta"
        }
        else {
            solu.textContent = "La división entre "+num1+" y "+num2+" da "+division+" y NO es exacta"
        }
    }
    else {
        solu.textContent = "No se puede dividir por 0"
    }
}

/* 2. Escriba un programa que pida dos números y que conteste cuál es el menor y cuál el mayor
o que escriba que son iguales. */

function ejercicio2() {
    let num1 = prompt("Introduce el primer número")
    let num2 = prompt("Introduce el segundo número")
    if (num1 != num2) {
        if (num1 < num2) {
            solu.textContent = "El número "+num1+" es el menor y "+num2+" es el mayor"
        }
        else {
            solu.textContent = "El número "+num2+" es el menor y "+num1+" es el mayor"
        }
    }
    else {
        solu.textContent = "Los dos números son iguales"
    }
}

/* Escriba un programa que pida el año actual y un año cualquiera y que escriba cuántos años
han pasado desde ese año o cuántos años faltan para llegar a ese año.
Mejore el programa anterior haciendo que cuando la diferencia sea exactamente un año,
escriba la frase en singular: */