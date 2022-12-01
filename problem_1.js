
/*pintamos la estrucutra HTML del problema por pantalla*/

document.write(

`<div class= "main-container-one">

    <div class= "title-one">Problema 1</div>

    <div class= "text-one">Haz un script con el lenguaje de programación de tu preferencia que imprima por
    pantalla una lista ordenada de números del 1 al 100, sustituyendo los múltiplos de 3
    por la cadena “cyber”, los múltiplos de 5 por la cadena “click” y los que son múltiplos
    de 3 y de 5 por “cyberclick”.</div>
    
    <div class= "container-list-one">`)


/* Creamos el bucle para pintar la lista de números del 1 al 100*/
for (let i = 1; i <= 100; i++) {


    /*establecemos la condición para pintar los números que son múltiplos de 3 y de 5 si esta se cumple y sustituir el número por "cyberclick". Si la condición no se cumple pasamos a la siguiente*/
    if (i % 3 === 0 && i % 5 === 0) {
        document.write(`<div class= "cyberclick">cyberclick</div>`);
    }

    /*establecemos la condición para pintar los números que son solo múltiplos de 3 si esta se cumple y sustituir el número por "cyber". Si la condición no se cumple pasamos a la siguiente*/
    else if (i % 3 === 0) {
        document.write(`<div class= "cyber">cyber</div>`);
    }

    /* establecemos la condición para pintar los números que son solo múltiplos de 5 si esta se cumple y sustituir el número por "click". Si la condición no se cumple pasamos a la siguiente*/
    else if (i % 5 === 0) {
        document.write(`<div class= "click">click</div>`);
    }

    /* pintamos los números que no son ni multiplos ni de 3 ni de 5 si ninguna de las condiciones anteriores se cumple */
    else {
        document.write(`<div class= "number">${i}</div>`);
    }
}


document.write(
    `</div>
</div>`
);