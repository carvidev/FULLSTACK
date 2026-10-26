let solu = document.querySelector("#solucion")

/* 1. Escribe un documento HTML que te pida la edad y te diga si puedes ir a votar o no y si estás jubilado o no por pantalla */

function ejercicio1 () {
    let edad = parseInt(prompt("Indica tu edad"))

    if (edad < 18) {
        solu.textContent = "No estás jubilado y no puedes votar"
    } else if (edad > 67) {
        solu.textContent = "Estás jubilado y puedes votar"
    } else {
        solu.textContent = "No estás jubilado pero si puedes votar"
    }
}

/* 2. Escribe un documento HTML empleando JavaScript que pida un número en una ventana emergente y muestre el mensaje ¡Hola mundo! tantas veces como indique ese número: */

function ejercicio2 () {
    let cantidad = parseInt(prompt("Introduce un número"))
    solu.innerHTML = "¡Hola Mundo! <br>"

    for (i = 2; i <= cantidad; i++) {
        solu.innerHTML += "¡Hola Mundo!<br>"
    }
}

/* 3. Escribe un documento HTML empleando JavaScript que muestre en una lista ordenada (<ol>, <li>) los números del 1 al 20 */

function ejercicio3() {
    let solu = document.getElementById("solucion")

    for (let i = 1; i <= 20; i++) {
        let elemento = document.createElement("li");
        elemento.textContent = i;
        solu.appendChild(elemento);
    }
}

/* 4. Escribe un documento HTML empleando JavaScript que pida un número en una ventana emergente y muestre en una tabla, una lista ordenada (<ol><li>) con los números impares del 1 hasta ese número, y una lista no ordenada (<ul><li>) con los números pares del 1 hasta ese número */

function ejercicio4 () {
    let solu = document.getElementById("solucion")
    let num = parseInt(prompt("Introduce un número"))

    for (let i = 1; i <= num; i++) {
        let elemento = document.createComment("li");
        elemento.textContent = 1;
        solu.appendChild(elemento);
    }
}

/* 5. Crea un script que muestre los números enteros del 1 al 5, con sus secuencias anteriores. */

function ejercicio5 () {
    
}