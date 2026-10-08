let solu = document.querySelector("#solucion")

/* 1. Escriba un programa que pida dos números enteros y escriba qué números son pares y cuáles impares desde el primero hasta el segundo. */

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

/* 2. Escriba un programa que pida un número entero mayor que cero y que escriba sus divisores */

function ejercicio2 () {
    let num = parseInt(prompt("Introduce un número mayor que 0"))

    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            solu.innerHTML += +i+" Es divisor de "+num+"<br>"
        } else {
            solu.innerHTML += +i+" NO es divisor de "+num+"<br>"
        }
    }
}

/* 3. Escriba un programa que pregunte cuántos números se van a introducir, pida esos números, y muestre un mensaje cada vez que un número no sea mayor que el primero. */

function ejercicio3 () {
    let cantidad = parseInt(prompt("¿Cuantos números vas a introducir?"))
    let primero = parseInt(prompt("Introduce el primer número"))

    for (let i = 2; i <= cantidad; i++) {
        let numero = parseInt(prompt("Introduce el número" +i))

        if (numero <= primero) {
            solu.innerHTML += "El número "+numero+" no es mayor que el primero<br>"
        }
    }
}

/* 4. Escriba un programa que pregunte cuántos números se van a introducir, pida esos números,
y muestre un mensaje cada vez que un número no sea mayor que el anterior. */

function ejercicio4 () {
    let cantidad = parseInt(prompt("¿Cuantos números vas a introducir?"))
    let anterior = parseInt(prompt("Introduce el primer número"))

    for (let i = 2; i <= cantidad; i++) {
        let numero = parseInt(prompt("Introduce el número" +i))

        if (numero <= anterior ) {
            solu.innerHTML += "El número "+numero+" no es mayor que el anterior<br>"
        }
        anterior = numero
    }
}

