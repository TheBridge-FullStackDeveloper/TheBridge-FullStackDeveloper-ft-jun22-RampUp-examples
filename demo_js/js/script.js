console.log("Hola desde JS");

// If - Else if
/*
var color = prompt("Introduzca color");

if (color == "rojo") {

    console.log("no puedes pasar");
}
else if (color == "verde") {
    alert("VERDE: Corre a por café");
    console.log("Puedes pasar");
}
else if (color == "ambar") {
    console.log("Pasa pero rápido");
}
else {
    console.log("Error: color desconocido!: "+color);
}

var color2 = prompt("Introduzca color");
// Semáforo con switch
console.log("*************Ejemplo Switch****************");
switch(color2) {
    case "rojo":
        console.log("no puedes pasar");
        break;
    case "verde":
        alert("VERDE: Corre a por café");
        console.log("Puedes pasar");
        break;
    case "ambar":
        console.log("Pasa pero rápido");
        break;
    default:
        console.log("Error: color desconocido!: "+color);
  }
*/

// FOR
// i de 0 a 9 --> 10 veces
for (let i = 1995; i <= 2022; i++) {
    if (i%4 == 0) { // Año olímpico
        //break;
        //continue;
        console.warn("Estamos en año olímpico: "+i);
        //break;
    }else {
        console.log("Hola. Estamos en el año: "+i);
    }
}
console.log("******WHILE********");
let i = 2050;
// Se ejecuta entre 0-N veces
while (i <= 2022) {
    // código a ejecutar
    if (i%4 == 0) { // Año olímpico
        //break;
        //continue;
        console.warn("Estamos en año olímpico: "+i);
        //break;
    }else {
        console.log("Hola. Estamos en el año: "+i);
    }

    i++; // condición de incremento
}


console.log("****** DO-WHILE********");
i = 2050;
// Se ejecuta entre 1-N veces
do {
    // código a ejecutar
    if (i%4 == 0) { // Año olímpico
        //break;
        //continue;
        console.warn("Estamos en año olímpico: "+i);
        //break;
    }else {
        console.log("Hola. Estamos en el año: "+i);
    }

    i++; // condición de incremento
}while (i <= 2022);