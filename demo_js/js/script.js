console.log("Hola desde JS");

// If - Else if
function changeTrafficLight() {
    let color = prompt("Introduzca color");

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
        console.log("Error: color desconocido!: " + color);
    }
}

function changeTrafficLight2() {

    let color = prompt("Introduzca color");
    // Semáforo con switch
    console.log("*************Ejemplo Switch****************");
    switch (color) {
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
            console.log("Error: color desconocido!: " + color);
    }
}

// FOR
// i de 0 a 9 --> 10 veces

function getOlympicYears(year) {
    for (let i = year; i <= 2022; i++) {
        if (i % 4 == 0) { // Año olímpico
            //break;
            //continue;
            console.warn("Estamos en año olímpico: " + i);
            //break;
        } else {
            console.log("Hola. Estamos en el año: " + i);
        }
    }
}

function getOlympicYears2(year) {
    console.log("******WHILE********");
    // Se ejecuta entre 0-N veces
    while (year <= 2022) {
        // código a ejecutar
        if (year % 4 == 0) { // Año olímpico
            //break;
            //continue;
            console.warn("Estamos en año olímpico: " + year);
            //break;
        } else {
            console.log("Hola. Estamos en el año: " + year);
        }

        year++; // condición de incremento
    }
}

function getOlympicYears3(year) {
    console.log("****** DO-WHILE********");
    // Se ejecuta entre 1-N veces
    do {
        // código a ejecutar
        if (year % 4 == 0) { // Año olímpico
            //break;
            //continue;
            console.warn("Estamos en año olímpico: " + year);
            //break;
        } else {
            console.log("Hola. Estamos en el año: " + year);
        }

        year++; // condición de incremento
    } while (year <= 2022);
}

function add(a, b) {
    return a + b;
}

// Función flecha
const add2 = (a, b) => a + b;


function calculateHypotenuse(a, b) {
    const hyp = Math.sqrt(a ** 2 + b ** 2);
    return hyp;
}



// Array --> 0...N-1 --> 0...data.length-1
const data = ["hola", 2.2, ["que", "tal"], true];
console.log(data[0] + " " + data[2][0] + " " + data[2][1]);
data[data.length - 1]; // Última posición del array

function tasteFruits() {

    const fruits = ["Banana", "Orange", "Apple", "Grapes", "Watermelon", "Papaya"];
    fruits[2] = "Lemon";

    let message = "";
    for (let i = 0; i < fruits.length; i++) {
        if (i % 2 == 0) {
            message += fruits[i] + " is very sweet, ";
        } else {
            message += fruits[i] + " is very tasty, ";
        }
    }
    console.log(message);
    return message;
}
/*
function calculateHypotenuse(a,b){
    return Math.sqrt(a**2 +b**2);
}
*/

let mensaje = "hola que tal te va la mañana";
let words = []; // array con palabras
let word = "";
for (let i = 0; i <= mensaje.length; i++) {

    if (mensaje[i] == " " || i == mensaje.length) {
        //haz push. Mete palabra nueva en el array
        words.push(word);
        word = ""; // vaciar palabra
        console.log("Es un espacio");
    } else {
        console.log("es el caracter: " + mensaje[i]);
        word += mensaje[i];//h o l a
    }
    //console.log(mensaje[i]);
}
console.log(words);


// Con Split
let mensaje2 = "hola,que,tal,te,va,la,mañana";

console.log(mensaje2.split(","));



const person = {
    firstName: "Alberto",
    lastName: "Malaga",
    "my-age": 25,
    eyeColor: "blue",
    walk: function () {
        console.log("Malaga se va a dar un paseo");
    },
    eat: function (food) {
        console.log("Malaga se va a comer "+food);
    },
    getInfo(){
        return this.firstName + " " + this.lastName+" "+this["my-age"];
    }
};
console.log(person["my-age"]);
// console.log(person.my-age); // Error
person.walk();
person.eat("tortilla");
person.getInfo();





/*******Sección de ejecución******/
//changeTrafficLight();
//changeTrafficLight2();
//getOlympicYears();
//getOlympicYears2(2010);
//getOlympicYears3(2005);

let res = add(2, 3);// guardas el resultado en una variable
console.log("El resultado es:" + 2 * res); // 2*(2+3)
console.log("El resultado es:" + 2 * add(2, 3)); // 2*(2+3)
console.log("El resultado es:" + add2(2, 3)); // (2+3)

let res2 = calculateHypotenuse(3, 4);
console.log("La hipotenusa es:" + res2);

console.log(tasteFruits());


