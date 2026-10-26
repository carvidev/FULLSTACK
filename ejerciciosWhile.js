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

/* 3. Escriba un programa que simule una hucha. El programa solicitará primero una cantidad, que será la cantidad de dinero que queremos ahorrar. A continuación, el programa solicitará una y otra vez las cantidades que se irán ahorrando, hasta que el total ahorrado iguale o supere al objetivo */

function ejercicio3 () {
    let objetivo = parseInt(prompt("¿Cuánto dinero quieres ahorrar?"))
    let ahorrado = 0

    while (ahorrado <= objetivo) {
        let ahorro = parseFloat(prompt("¿Cuánto dinero ahorras esta vez?"))
        
        ahorrado = ahorrado + ahorro
    }
    solu.textContent = "Has ahorrado "+ahorrado+" euros. Te has pasado "+(ahorrado - objetivo)+" euros."
}

/* 4. Escriba un programa que pida dos números enteros. El programa pedirá de nuevo el segundo número mientras no sea mayor que el primero. El programa terminará escribiendo los dos números */

function ejercicio4 () {
    let num1 = parseInt(prompt("Introduce un número"))
    let num2 = parseInt(prompt("Introduce otro número"))

    while (num2 <= num1) {
        num2 = parseInt(prompt("Introduce otro número"))
    }
    solu.textContent = "Has introducido los números "+num1+" y "+num2+"."
}

/* 5. Escriba un programa que pida números enteros mientras sean cada vez más grandes. */

function ejercicio5 () {
    let num1 = parseInt(prompt("Introduce un número"))
    let num2 = parseInt(prompt("Introduce otro número"))

    while (num2 > num1) {
        num1 = num2

        num2 = parseInt(prompt("Introduce otro número"))
    }
    solu.textContent = "El número "+num2+" no es mayor que "+num1+"."
}

/* 6. Escriba un programa que pida la cantidad de números que se tienen que escribir y a continuación pida números hasta que se haya escrito la cantidad de números indicada */

function ejercicio6 () {
    let objetivo = parseInt(prompt("¿Cuántos números vas a introducir?"))
    let numeros = parseInt(prompt("Introduce un número"))

    let i = 1

    while (i < objetivo) {
        numeros = parseInt(prompt("Introduce otro número"))
        i++
    }
    solu.textContent = "Se esperaban "+objetivo+" números y se han introducido "+i+" números."
}

/* 7. Escriba un programa que pida números mientras no se escriba un número negativo. El programa terminará escribiendo la suma de los números introducidos */

function ejercicio7 () {
    let numeros = parseInt(prompt("Introduce un número"))
    let total = 0

    while (numeros >= 0) {
        total = total + numeros

        numeros = parseInt(prompt("Introduce otro número"))
    }
    solu.textContent = "La suma de los números introducidos es "+total+"."
}

/* 8. Escriba un programa que pida primero dos números enteros (mínimo y máximo) y que después pida números enteros situados entre ellos. El programa terminará cuando se escriba un número que no esté comprendido entre los dos valores iniciales. El programa termina escribiendo la cantidad de números escritos */

function ejercicio8 () {
    let min = parseInt(prompt("Introduce el mínimo"))
    let max = parseInt(prompt("Introduce el máximo"))
    let numero = parseInt(prompt("Introduce un número"))

    while (numero > min && numero < max) {
        numero = parseInt(prompt("Introduce otro número"))
    }

    if (numero <= min) {
        solu.textContent = "El número introducido es igual o menor que el mínimo."
    } else if (numero >= max){
        solu.textContent = "El número introducido es igual o mayor que el máximo."
    } else {
        numero = parseInt(prompt("Introduce otro número"))
    }
}

/* 9. Escriba un programa que pida números pares mientras el usuario indique que quiere seguir introduciendo números. Para indicar que quiere seguir escribiendo números, el usuario deberá contestar S o s a la pregunta */

function ejercicio9 () {
    let terminar = prompt("¿Quieres introducir un número? (S/s)");

    while (terminar == "s" || terminar == "S") {
        let numero = parseInt(prompt("Introduzca un número PAR"));

        if (numero % 2 == 0) {
            solu.textContent = "El número es PAR";
        } else {
            solu.textContent = "El número no es PAR";
            break;
        }

        terminar = prompt("¿Quieres introducir otro número? (S/s)");
    }
}
/* 10. Escriba un programa para jugar a adivinar un número (el ordenador "piensa" el número y el usuario tiene que adivinarlo). El programa empieza pidiendo entre qué números está el número a adivinar, se "inventa" un número al azar y después el usuario va probando valores y el programa va diciendo si son demasiado grandes o pequeños */

function ejercicio10 () {
    let min = parseInt(prompt("Introduce el número mínimo entre los que adivinar"))
    let max = parseInt(prompt("Introduce el número máximo entre los que adivinar"))
    let oculto = Math.floor(Math.random() * (max - min +1)) + min
    let intento

    while (intento != oculto) {
        intento = parseInt(prompt("Introduce un número"))

        if (intento < oculto) {
            alert("Mi número es mayor que "+intento+".")
        } else if (intento > oculto){
            alert("Mi número es menor que "+intento+".")
        } else {
            solu.textContent = "¡El número "+intento+" es correcto!"
        }
    }
}