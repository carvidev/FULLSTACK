/* 1. Escriba un programa que pida dos números enteros y que calcule su división, escribiendo si la división es exacta o no.
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

/* 2. Escriba un programa que pida dos números y que conteste cuál es el menor y cuál el mayor o que escriba que son iguales. */

function ejercicio2() {
    let num1 = prompt("Introduce el primer número")
    let num2 = prompt("Introduce el segundo número")
    if (num1 != num2) {
        if (num1 > num2) {
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

/* 3. Escriba un programa que pida el año actual y un año cualquiera y que escriba cuántos años han pasado desde ese año o cuántos años faltan para llegar a ese año.
Mejore el programa anterior haciendo que cuando la diferencia sea exactamente un año, escriba la frase en singular: */

function ejercicio3() {
    let añoActual = parseInt(prompt("Introduce el año actual"))
    let añoCualquiera = parseInt(prompt("Introduce un año cualquiera"))
    if (añoActual > añoCualquiera) {
        let años = añoActual - añoCualquiera
        solu.textContent = "Han pasado "+años+" años"
    }
    else {
        let años = añoCualquiera - añoActual
        solu.textContent = "Faltan "+años+" años"
    }
}

/* 4. Escriba un programa que pida dos números enteros y que escriba si el mayor es múltiplo del menor.
Mejore el programa anterior haciendo que el programa avise cuando se escriben valores negativos o nulos. */

function ejercicio4() {
    let num1 = prompt("Introduce el primer número")
    let num2 = prompt("Introduce el segundo número")

    let mayor = Math.max(num1, num2)
    let menor = Math.min(num1, num2)

    if (num1 <- 0 || num2 <- 0) {
        solu.textContent = "No se permiten números negativos ni nulos"
    }
    else {
        if (mayor % menor == 0) {
            solu.textContent = mayor+" es múltiplo de "+menor
        }
        else {
            solu.textContent = mayor+" NO es múltiplo de "+menor
        }
    }
}

/* 5. Escriba un programa que pida tres números y que escriba si son los tres iguales, si hay dos iguales o si son los tres distintos */

function ejercicio5() {
    let num1 = prompt("Introduce el primer número")
    let num2 = prompt("Introduce el segundo número")
    let num3 = prompt("Introduce el segundo número")

    if (num1 == num2 && num3) {
        solu.textContent = "Los 3 números son iguales"
    }
    else if (num1 != num2 && num3){
        solu.textContent = "Ningún número es igual que otro"
    }
    else {
        solu.textContent = "Hay 2 números iguales"
    }
}    

/* 6. Escriba un programa que pida un año y que escriba si es bisiesto o no.
Se recuerda que los años bisiestos son múltiplos de 4, pero los múltiplos de 100 no lo son,aunque los múltiplos de 400 sí. */

function ejercicio6() {
    let agno = parseInt(prompt("Introduce un año"))

    resto4 = agno % 4
    resto100 = agno % 100
    resto400 = agno % 400

    if ((resto4 == 0 && resto100 != 0) || resto400 == 0) {
        solu.textContent = "El "+agno+" es bisiesto"
    }
    else {
        solu.textContent = "El "+agno+" no es bisiesto"
    }
}

/* 7. Escriba un programa que pida los coeficientes de una ecuación de primer grado (a x + b = 0) y escriba la solución.
Se recuerda que una ecuación de primer grado puede no tener solución, tener una solución única, o que todos los números sean solución. Se recuerda que la fórmula de las soluciones es x = -b / a */

function ejercicio7() {
    let a = parseFloat(prompt("introduce el valor de a"))
    let b = parseFloat(prompt("introduce el valor de b"))

    if (a != 0) {
        let x = -b / a
        solu.textContent = "x es igual a "+x
    } else if (b != 0) {
        solu.textContent = "La ecuación no tiene solución"
    } else {
        solu.textContent = "Todos los números son solución"
    }
}

/* 8. Escriba un programa que pida una fecha y diga si ese día existe */

function ejercicio8 () {
    let dia = parseInt(prompt("Introduce el día"))
    let mes = parseInt(prompt("Introduce el mes"))
    let agno = parseInt(prompt("Introduce el año"))

    if (mes < 1 || mes > 12) {
        solu.textContent = "La fecha no existe"
    } else if (dia < 1) {
        solu.textContent = "La fecha no existe"
    } else if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) { // Meses con 31 días
        if (dia <= 31) {
            solu.textContent = "La fecha existe"
        } else {
            solu.textContent = "La fecha no existe"
        }
    } else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
        if (dia <= 30) { // Meses con 30 días
            solu.textContent = "La fecha existe"
        } else {
            solu.textContent = "La fecha no existe"
        }
    } else { // Febrero
        if (dia <= 28) {
            solu.textContent = "La fecha existe"
        } else if (dia == 29 && (agno % 400 == 0 || (agno % 4 == 0 && agno % 100 != 0))) {
            solu.textContent = "La fecha existe"
        } else {
            solu.textContent = "La fecha no existe"
        }
    }
}

/* 9. Escriba un programa que pida tres notas de un alumno, si el promedio es mayor o igual a siete mostrar el mensaje 'Promocionado'. Tener en cuenta que para obtener el promedio debemos operar suma=nota1+nota2+nota3; y luego hacer promedio=suma/3 */

function ejercicio9 () {
    let nota1 = parseFloat(prompt("Introduce la primera nota"))
    let nota2 = parseFloat(prompt("Introduce la segunda nota"))
    let nota3 = parseFloat(prompt("Introduce la tercera nota"))

    let suma = nota1 + nota2 + nota3
    let promedio = suma / 3

    if (promedio >= 7) {
        solu.textContent = "PROMOCIONADO"
    } else {
        solu.textContent = "El alumno no promociona"
    }
}

/* 10. Solicitar que se ingrese dos veces una clave. Mostrar un mensaje si son iguales (tener en cuenta que para ver si dos variables tienen el mismo valor almacenado debemos utilizar el operador ==) */

function ejercicio10 () {
    let clave1 = prompt("Intruduce una clave")
    let clave2 = prompt("Intruduce la clave de nuevo")

    if (clave1 == clave2) {
        solu.textContent = "La clave es correcta"
    } else {
        solu.textContent = "Las claves no coinciden"
    }
}

