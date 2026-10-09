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