let solu = document.querySelector("#solucion")

/* 1. (Apuntes) Crea un array llamado meses que almacene el nombre de los doce meses del año. Mostrar por pantalla los doce nombres recorriendo el array meses y utilizando la función alert(). */

function ejercicio1() {
    let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    let salida = ""

    for (let i = 0; i < meses.length; i++) {
        salida += meses[i] + ", "
    }
    solu.textContent = salida
}

/* 2. (Apuntes) Modifica el array de los apuntes para que muestre también el total de euros de todas las personas del array. */

function ejercicio2() {
    let apuntes = [
        { nombre: "Ana", euros: 10 },
        { nombre: "Pedro", euros: 20 },
        { nombre: "Luis", euros: 15 },
        { nombre: "Maria", euros: 5 }
    ];

    let total = 0;

    for (let i = 0; i < apuntes.length; i++) {
        total += apuntes[i].euros;
    }

    solu.textContent = "Total de euros: " + total
}

/* 3. A partir de siguiente array: 
let palabras = new Array(‘botella’, ‘zeta’, ‘androide’, ‘minuto’);
Ordena alfabéticamente sus elementos utilizando el método apropiado. Muestra el resultado por pantalla utilizando un bucle for */

function ejercicio3() {
    let palabras = new Array("botella", "zeta", "androide", "minuto");

    palabras.sort();
    let salida = ""

    for (let i = 0; i < palabras.length; i++) {
        salida += palabras[i]
        
    }
        solu.textContent = salida
}

/* 4. Crea un script que solicite al usuario palabras y las vaya guardando en un array. El
programa dejará de pedir palabras cuando el usuario introduzca la palabra FIN. Al terminar
de introducir palabras por el usuario, el programa debe mostrar (utilizando el array):
a. La primera palabra introducida por el usuario.
b. La última palabra introducida por el usuario
c. El número de palabras del array
d. Todas las palabras ordenadas alfabéticamente. */

function ejercicio4() {
    let palabras = [];
    let palabra;

    do {
        palabra = prompt("Introduce una palabra (FIN para terminar):");

        if (palabra != "FIN") {
            palabras.push(palabra);
        }

    } while (palabra != "FIN");

    solu.innerHTML = "Primera palabra: " + palabras[0] +"<br>";

    solu.innerHTML += "Última palabra: " + palabras[palabras.length - 1] +"<br>";

    solu.innerHTML += "Número de palabras: " + palabras.length +"<br>";

    palabras.sort();

    solu.innerHTML += "Palabras ordenadas:"

    for (let i = 0; i < palabras.length; i++) {
        solu.innerHTML += palabras[i]
    }
}

/* 5. Crea un programa que parta de un array de 20 números y devuelva un array con los mismos números que el primero pero sin repetir. */

function ejercicio5() {
    let numeros = [1, 2, 3, 2, 4, 5, 1, 6, 3, 7, 8, 5, 9, 10, 4, 11, 12, 10, 13, 14];

    let sinRepetir = [];

    for (let i = 0; i < numeros.length; i++) {

        if (!sinRepetir.includes(numeros[i])) {
            sinRepetir.push(numeros[i]);
        }
    }

    solu.textContent = sinRepetir
}

/* 6. Crea un programa que parta de un array de 10 números enteros. Recórrelo e imprime la
suma de los números pares y la de los números impares. */

function ejercicio6() {
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let sumaPar = 0;
    let sumaImpar = 0;

    for (let i = 0; i < 10; i++) {
        
        if (numeros[i] % 2 == 0) {
            sumaPar += numeros[i];
        } else {
            sumaImpar += numeros[i];
        }
    }

    solu.textContent = "La suma de los números pares es "+sumaPar+" y a la suma e los números impares es "+sumaImpar
}

/* 7. Crea un programa que parta de un array de 10 números enteros. Recórrelo e imprime la
suma, la media, el mayor y el menor. */

function ejercicio7() {

}

/* 8. Crea un array que concatene dos arrays A y B (de la misma longitud) de la siguiente forma:
A0, B0, A1, B1, A2, B2, …, An, Bn. */

function ejercicio8() {
    
}