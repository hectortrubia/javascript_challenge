

/* Creamos el array de objetos con la información del input*/

const pass = [
   {// 5 - 7 z: gzzzzzzjz
        min: 5,
        max: 7,
        char: "z",
        passwOne: "gzzzzzzjz"
    },
    {// 1 - 4 s: sqss
        min: 1,
        max: 4,
        char: "s",
        passwOne: "sqss"
    },
    {// 1 - 2 s: ssst
        min: 1,
        max: 2,
        char: "s",
        passwOne: "ssst"
    },
    {// 1 - 2 f: kfhf
        min: 1,
        max: 2,
        char: "f",
        passwOne: "kfhf"
    },
    {// 4 - 6 b: bbtrbbbb
        min: 4,
        max: 6,
        char: "b",
        passwOne: "bbtrbbbb"
    },
    {// 3 - 4 r: grrrr
        min: 3,
        max: 4,
        char: "g",
        passwOne: "grrrr"
    },
    {// 1 - 7 r: lrpcfdfksxrh
        min: 1,
        max: 7,
        char: "r",
        passwOne: "lrpcfdfksxrh"
    },
    {// 9 - 10 v: vvvvvvvvhw
        min: 9,
        max: 10,
        char: "v",
        passwOne: "vvvvvvvvhw"
    },
    {// 7 - 9 k: kkkkckkkck
        min: 7,
        max: 9,
        char: "k",
        passwOne: "kkkkckkkck"
    },
    {// 9 - 12 h: hhhhhhwhthhhh
        min: 9,
        max: 12,
        char: "h",
        passwOne: "hhhhhhwhthhhh"
    },
    {// 3 - 4 b: bdvbdwrgcbpwblj
        min: 3,
        max: 4,
        char: "b",
        passwOne: "bdvbdwrgcbpwblj"
    },
    {// 6 - 8 v: vwqcvvvvvvsvvxjv
        min: 6,
        max: 8,
        char: "v",
        passwOne: "vwqcvvvvvvsvvxjv"
    },
    {// 1 - 3 s: ssss
        min: 1,
        max: 3,
        char: "s",
        passwOne: "ssss"
    },
    {// 13 - 15 x: xnxxxxkxpxxxtxwx
        min: 13,
        max: 15,
        char: "x",
        passwOne: "xnxxxxkxpxxxtxwx"
    },
    {// 1 - 3 j: jqjj
        min: 1,
        max: 3,
        char: "j",
        passwOne: "jqjj"
    },
    {// 3 - 6 l: vlljlbllrbztnl
        min: 3,
        max: 6,
        char: "l",
        passwOne: "vlljlbllrbztnl"
    },
    {// 4 - 7 n: nnnsnnnnnnnnnnrnn
        min: 4,
        max: 7,
        char: "n",
        passwOne: "nnnsnnnnnnnnnnrnn"
    },
    {// 1 - 5 z: zzzvzzz
        min: 1,
        max: 5,
        char: "z",
        passwOne: "zzzvzzz"
    },
    {// 3 - 4 m: qmmjmm
        min: 10,
        max: 11,
        char: "m",
        passwOne: "qmmjmm"
    },
    {// 7 - 9 m: gmmrtzmmrmmcmm
        min: 7,
        max: 9,
        char: "m",
        passwOne: "gmmrtzmmrmmcmm"
    },
    {// 5 - 16 x: xzxpxxxxjxqxxqms
        min: 5,
        max: 16,
        char: "x",
        passwOne: "xzxpxxxxjxqxxqms"
    },
    {// 10 - 11 m: mmzrmmmmmmmmm
        min: 10,
        max: 11,
        char: "m",
        passwOne: "mmzrmmmmmmmmm"
    },
    {// 3 - 5 p: cpprxp
        min: 3,
        max: 5,
        char: "p",
        passwOne: "cpprxp"
    },
    {// 3 - 4 h: hhhjq
        min: 3,
        max: 4,
        char: "h",
        passwOne: "hhhjq"
    },
    {// 6 - 7 x: xxxlqwlxxvnnvvc
        min: 6,
        max: 7,
        char: "x",
        passwOne: "xxxlqwlxxvnnvvc"
    },
    {// 15 - 17 s: sssbsssscsssfssspsg
        min: 15,
        max: 17,
        char: "s",
        passwOne: "sssbsssscsssfssspsg"
    },
    {// 11 - 13 s: ssssssssgsssss
        min: 11,
        max: 13,
        char: "s",
        passwOne: "ssssssssgsssss"
    },
    {// 3 - 7 f: frfshbfn
        min: 3,
        max: 7,
        char: "f",
        passwOne: "frfshbfn"
    },
    {// 4 - 6 n: tnnnpnn
        min: 4,
        max: 6,
        char: "n",
        passwOne: "tnnnpnn"
    },
    {// 7 - 10 g: ggggggfggg
        min: 7,
        max: 10,
        char: "g",
        passwOne: "ggggggfggg"
    },
    {// 6 - 7 j: jjzjthj
        min: 6,
        max: 7,
        char: "j",
        passwOne: "jjzjthj"
    },
    {// 11 - 14 m: mmmmmmmmmmmmmmmkmmm
        min: 11,
        max: 14,
        char: "m",
        passwOne: "mmmmmmmmmmmmmmmkmmm"
    },
    {// 12 - 18 c: ccccccccftccccccccc
        min: 12,
        max: 18,
        char: "c",
        passwOne: "ccccccccftccccccccc"
    },
    {// 2 - 10 w: wvwwwwwwwwf
        min: 2,
        max: 10,
        char: "w",
        passwOne: "wvwwwwwwwwf"
    },
    {// 1 - 6 q: zvqqqmzqqt
        min: 1,
        max: 6,
        char: "q",
        passwOne: "zvqqqmzqqt"
    },
    {// 13 - 19 f: ffffffffffffgfffffnf
        min: 13,
        max: 19,
        char: "f",
        passwOne: "zvqqffffffffffffgfffffnfqmzqqt"
    },
    {// 5 - 11 x: lfxzxxcxxxxlbwnrx
        min: 5,
        max: 11,
        char: "x",
        passwOne: "lfxzxxcxxxxlbwnrx"
    },
    {// 2 - 3 s: vxgv
        min: 2,
        max: 3,
        char: "s",
        passwOne: "vxgv"
    },
    {// 1 - 5 p: zpppxbmj
        min: 1,
        max: 5,
        char: "p",
        passwOne: "zpppxbmj"
    },
    {// 6 - 14 c: cpcccgcddfzcgcccc
        min: 6,
        max: 14,
        char: "c",
        passwOne: "cpcccgcddfzcgcccc"
    },
    {// 3 - 5 q: qqqqvpqq
        min: 3,
        max: 5,
        char: "q",
        passwOne: "qqqqvpqq"
    },
    {// 8 - 9 f: fffffffff
        min: 8,
        max: 9,
        char: "f",
        passwOne: "fffffffff"
    },
    {// 7 - 10 m: xmxmmwtmmmnvcrmkrmmm
        min: 7,
        max: 10,
        char: "m",
        passwOne: "xmxmmwtmmmnvcrmkrmmm"
    },
    {// 2 - 4 v: vvjnrxnvtdmm
        min: 2,
        max: 4,
        char: "v",
        passwOne: "vvjnrxnvtdmm"
    },
    {// 5 - 8 k: kkqkkkkkk
        min: 5,
        max: 8,
        char: "k",
        passwOne: "kkqkkkkkk"
    },
    {// 7 - 17 n: mqhnbwxnnnmcdlkfq
        min: 7,
        max: 17,
        char: "n",
        passwOne: "mqhnbwxnnnmcdlkfq"
    },
    {// 18 - 19 m: mmmmmmmmmmmmmmmmmmm
        min: 18,
        max: 19,
        char: "m",
        passwOne: "mmmmmmmmmmmmmmmmmmm"
    },
    {// 5 - 6 r: rrcrvmr
        min: 5,
        max: 6,
        char: "r",
        passwOne: "rrcrvmr"
    },
    {// 2 - 7 b: fdbvbdb
        min: 2,
        max: 7,
        char: "b",
        passwOne: "fdbvbdc"
    },
];


function passwordTest(arr) {

    /*pintamos la estrucutra HTML del problema por pantalla*/

    document.write(`<div class= "main-container-two-one">

    <div class= "title-two-one">Problema 2 - Primera parte</div>

        <div class= "text-two-one">
        
        <p>Haz un script que solucione la siguiente situación:</p>
        
        <p>Imagina que estás en la cola para alquilar un coche, pero no avanza. La persona de la empresa está desesperada. Nadie puede hacer log in en la aplicación y preguntan si hay algun developer en la sala. Miras alrededor y eres la única persona que tiene los conocimientos. Te acercas y te comentan el problema:
        La base de datos de contraseñas parece que está corrupta, algunas de las contraseñas que aparecen listadas no deberían de estar, ya que incumplen la política de empresa respecto contraseñas. Para debugar el problema, han creado una lista de contraseñas guardadas en el sistema corrupto y la política que deben de cumplir esas contraseñas.</p>
        
        <p>Por ejemplo:</p>
        
        <p>1-3 a: abcde</p>
        <p>1-3 b: cdefg</p>
        <p>2-9 c: ccccccccc</p>
        
        <p>Cada línea representa la política y la contraseña que debe cumplirla. La política de contraseñas indica el número mínimo y el número máximo de veces que se debe repetir la letra que hay a continuación. Así pues, “1-3 a” significa que la contraseña debe de contener la letra “a” un mínimo de 1 y un máximo de 3 veces. Siguiendo esta norma, en el ejemplo anterior hay un total de 2 contraseñas válidas.</p>

        <p>¿Cuántas contraseñas válidas hay en el input?</p>
        
        </div>
        
    <div class= "container-list-two-one">`)

    let totalValid = 0;
    let totalNovalid = 0;

    /*hacemos un bucle para recorrer el array de objetos*/

    for (let i = 0; i < arr.length; i++) {

        let count = 0;
        let onlyMin = arr[i].min;
        let onlyMax = arr[i].max;
        let onlychar = arr[i].char;
        let onlyPasswOne = arr[i].passwOne;


        /*hacemos un blucle y un condicional para comprobar si la letra establecida está en cada posición de la contraseña de cada objeto. Actualizamos el contador en caso de que esté. */

        for (let j = 0; j < onlyPasswOne.length; j++) {
            onlychar === onlyPasswOne[j] ? count = count + 1 : count = count + 0;
        }

         /*hacemos una condición para validar si el contador está en entre el número mínimo y el máximo de veces establecido para que la contraseña sea válida o no válida.Pintamos por pantalla el resultado y actualizamos el contador correspondiente.*/

        if (count >= onlyMin && count <= onlyMax) {

            document.write(`<div class="valid-two-one">La contraseña: "${onlyPasswOne}" es válida</div>`);
            totalValid += 1;;
        }
        else {

            document.write(`<div class="no-valid-two-one"> La contraseña: "${onlyPasswOne}" es NO válida"</div>`);
            totalNovalid += 1;
        }

    }


    /* Pintamos por pantalla el resultado total de contraseñas válidas y no válidas*/

    document.write(`</div>

            <div class= "total-list-two-one">

            <div class= "total-valid-two-one">Hay un total de ${totalValid} contraseñas válidas</div>

            <div class= "total-novalid-two-one">Hay un total de ${totalNovalid} contraseñas NO válidas</div>

            </div>`);

};

passwordTest(pass);


document.write(
    `</div>
</div>`
);