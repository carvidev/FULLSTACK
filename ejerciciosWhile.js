let solu = document.querySelector("#solucion")

/* 1. Escriba un programa que pregunte una y otra vez si desea terminar el programa, salvo si se contesta S o s (en mayúsculas o en minúsculas). */

function ejercicio1 () {
    let terminar;
    
    do {
        terminar = prompt("¿Desea terminar?")

    } while (terminar != "S" && terminar != "s") 
        solu.textContent = "He terminado porque has escrito " +terminar
}

/* 2. Escriba un programa que solicite una contraseña dos veces. Las volverá a solicitar hasta que las dos contraseñas coincidan. Con un límite de 3 veces. */

function ejercicio2 () {
    let contra1 = prompt("Introduzca su contraseña")
    let contra2 = prompt("Vuelva a introducir su contraseña")

    let i = 1

    while (contra1 != contra2 && i < 3) {
        contra1 = prompt("Las contraseñas no coninciden. uelva a introducir su contraseña")
        contra2 = prompt("Vuelva a introducir su contraseña")
        i++
    }

    if (i < 3) {
        solu.textContent = "Las contraseñas coninciden"
    } else {
        solu.textContent = "Las contraseñas NO coninciden"
    }
    
}