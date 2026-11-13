let solu = document.querySelector("#solucion")

/* 1. (Apuntes) Crea un array llamado meses que almacene el nombre de los doce meses del año. Mostrar por pantalla los doce nombres recorriendo el array meses y utilizando la función alert(). */

function ejercicio1() {
    let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    let salida = ""

    for (let i = 0; i < meses.length; i++) {
        salida += meses
    }
    solu.textContent = meses
}

/* 2. (Apuntes) Modifica el array de los apuntes para que muestre también el total de euros de todas las personas del array. */

function ejercicio2() {

}