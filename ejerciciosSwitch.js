let solu = document.querySelector("#solucion")

/* 1. En un restaurante los clientes pueden pedir menú de carne, pescado o verdura. Si pide carne se le ofrecerá como bebida vino tinto, si pide pescado se le ofrecerá vino blanco y si pide verdura se le ofrecerá agua
Si no elije el menú de la lista aparecerá la frase elija carne, pescado o verdura. */

function ejercicio1 () {
    let menu = prompt("¿Qué quiere comer? carne, pescado o verdura")

    switch (menu) {
        case "carne": 
            solu.textContent = "Le recomiendo un vino tinto para acompañarlo"
            break;

        case "pescado":
            solu.textContent = "Le recomiendo un vino blanco para acompañarlo"
            break;

        case "verdura": "Le reomiendo tomar agua con la verdura"
            solu.textContent = "Le reomiendo tomar agua con la verdura"
            break;

        default: "Tenemos carne, pescado y verdura"
            solu.textContent = "¿Qué quiere comer? carne, pescado o verdura"
    }
}

/* 2. A partir de un número de mes tecleado por un usuario el programa debe indicar la estación del año.
Las estaciones serán 12,1,2: Invierno. 3,4,5 primavera, 6,7,8 verano y 9,10,11 otoño. */

function ejercicio2 () {
    let mes = parseInt(prompt("Indica el número del mes"))

    switch (mes) {
        case 1: case 2: case 12:
            solu.textContent = "Estamos es invierno"
            break;

        case 3: case 4: case 5:
            solu.textContent = "Estamos en primavera"
            break;

        case 6: case 7: case 8:
            solu.textContent = "Estamos en verano"
            break;
            
        case 9: case 10: case 11:
            solu.textContent = "Estamos en otoño"
            break;
            
        default:
            solu.textContent = "Debes indicar un valor válido (1-12)"    
    }
}

/* 3. En una tienda coches se quiere redirigir a un cliente a una sección de acuerdo al tipo de coche que elija. Si elige tipo gasolina o 1 se le enviará a la oficina número 100. Si elije el tipo diesel o 2 irá a la oficia 200 y si elige eléctrico o 3 se le enviará a la oficina 300 */


function ejercicio3 () {
    let tipoCoche = prompt("¿Qúe coche eliges?")

    switch (tipoCoche) {
        case "1": case "gasolina":
            solu.textContent = "Diríjase a la oficina 100"
            break;

        case "2": case "diesel":
            solu.textContent = "Diríjase a la oficina 200"
            break;

        case "3": case "electrico":
            solu.textContent = "Diríjase a la oficina 300"
            break;

        default:
            solu.textContent = "El tipo de coche seleccionado no es válido "
    }
}

/* 4. Un comerciante hace descuentos a sus clientes de la siguiente forma:
    a. Si ha comprado menos de 100 euros no hay descuento
    b. Si la compra está entre 100 y 300 euros le descuenta un 5%
    c. Si la compra está por encima de 300 hasta 400 euros le descuenta
    un 10%
    d. Si la compra supera los 400 euros le descuenta un 15%.
El programa comenzará preguntando el valor total de la compra y después terminará imprimiendo la cantidad a pagar */

function ejercicio4 () {
    let compra = parseInt(prompt("Introduzca el importe de su compra"))
    let descuento = 0
    solu.textContent = ""
    switch (true) {
        case compra < 100:
            descuento = 0
            solu.textContent = "No le corresponde ningún descuento"
            break;

        case compra >= 100 && compra < 300:
            descuento = 0.05;
            solu.textContent = "Se le aplicará un descuento del 5%"
            break;

        case compra >= 300 && compra < 400:
            descuento = 0.10;
            solu.textContent = "Se le aplicará un descuento del 10%"
            break;

        case compra > 400:
            descuento = 0.15;
            solu.textContent = "Se le aplicará un descuento del 15%"
            break;

        default:
            solu.textContent = "Introduzca un importe válido"
    }

    let total = compra - (compra * descuento)

    solu.textContent += ". Cantidad a pagar "+total+" euros"
}

/* 5. Debemos convertir las notas numéricas en palabras: 0 - 4 suspenso, 5-6 aprobado, 7-8 notable, 9-10 sobresaliente. El programa comenzará pidiendo la nota y acabará mostrando la nota en palabras */

function ejercicio5 () {
    let nota = parseInt(prompt("Introduce tu nota"))

    switch (nota) {
        case 0: case 1: case 2: case 3: case 4:
            solu.textContent = "Suspenso"
            break;

        case 5: case 6:
            solu.textContent = "Aprobado"
            break;

        case 7: case 8:
            solu.textContent = "Notable"
            break;

        case 9: case 10:
            solu.textContent = "Sobresaliente"
            break;

        default:
            solu.textContent = "Introduce una nota válida"
    }
}