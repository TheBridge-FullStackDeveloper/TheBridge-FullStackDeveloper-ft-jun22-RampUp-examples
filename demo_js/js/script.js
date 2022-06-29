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

/*******String con Array********* */
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

/*******Objetos**********/

const person = {
    firstName: "Alberto",
    lastName: "Malaga",
    "my-age": 25,
    eyeColor: "blue",
    walk: function () {
        console.log("Malaga se va a dar un paseo");
    },
    eat: function (food) {
        console.log("Malaga se va a comer " + food);
    },
    getInfo() {
        return this.firstName + " " + this.lastName + " " + this["my-age"];
    }
};
console.log(person["my-age"]);
// console.log(person.my-age); // Error
person.walk();
person.eat("tortilla");
person.getInfo();

/*******Leyendo objetos reales de un array**********/

let products = [
    {
        "id": 1,
        "title": "Mens Casual Slim Fit",
        "price": 15.99,
        "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "rating": {
            "rate": 2.1,
            "count": 430
        }
    },
    {
        "id": 2,
        "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
        "price": 64,
        "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        "rating": {
            "rate": 3.3,
            "count": 203
        }
    },
    {
        "id": 3,
        "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        "price": 109,
        "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        "rating": {
            "rate": 2.9,
            "count": 470
        }
    },
    {
        "id": 4,
        "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        "price": 109,
        "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
        "rating": {
            "rate": 4.8,
            "count": 319
        }
    }
]
// Acceder al objeto
console.log(products[3]["price"]);
console.log(products[3].price);
console.log(products[3].rating.rate);



/*******Sección de ejecución******/
//changeTrafficLight();
//changeTrafficLight2();
getOlympicYears();
getOlympicYears2(2010);
//getOlympicYears3(2005);

let res = add(2, 3);// guardas el resultado en una variable
console.log("El resultado es:" + 2 * res); // 2*(2+3)
console.log("El resultado es:" + 2 * add(2, 3)); // 2*(2+3)
console.log("El resultado es:" + add2(2, 3)); // (2+3)

let res2 = calculateHypotenuse(3, 4);
console.log("La hipotenusa es:" + res2);

console.log(tasteFruits());



/******Manipulación del DOM ******/
// Selectores

// Leer: Acceso a un elemento por ID
let txt = document.getElementById("hello").innerHTML;
console.log("mensaje: " + txt);

// Escribir: Cambiar el contenido de un párrafo
document.getElementById("bye").innerHTML = "adios";

// Selector por clase
let superElements = document.getElementsByClassName("super-class");

console.log(superElements[0].innerHTML);
console.log(superElements[1].innerHTML);

console.log("****Clases: Con bucle******");
for (let i = 0; i < superElements.length; i++) {
    superElements[i].innerHTML += " clase!!"; // Escribe
    console.log(superElements[i].innerHTML); //Lee
}
console.log("****Etiquetas******");
// Selector por etiqueta
let pElements = document.getElementsByTagName("p");
console.log(pElements);
console.log("****Etiquetas: Con bucle******");
for (let i = 0; i < pElements.length; i++) {
    pElements[i].innerHTML += " jeje"; // Escribe
    console.log(pElements[i].innerHTML); //Lee
}

// Eventos
// Con función externa y variables
let paragraph = document.getElementById("my-paragraph");
let btn = document.getElementById("my-btn");

function changeText() {
    paragraph.innerHTML = "ey";
    paragraph.style.backgroundColor = "orange";
}

btn.addEventListener("click", changeText);

// Con función de callback y sin guardar nada en variables
document.getElementById("bye").addEventListener("mouseover", function (event) {
    document.getElementById("hello").style.backgroundColor = "green";
})

//1- Hacer un boton que esconda/enseñe el texto de un parrafo cada vez que se pulsa el mismo boton. Por defecto, el párrafo debe estar visible

let paragraph2 = document.getElementById("my-paragraph2");
let btn2 = document.getElementById("my-btn2");

function showHideText() {
    // Show/Hide code
    if (paragraph2.style.visibility === 'visible') {
        paragraph2.style.visibility = 'hidden';
    } else { // hidden
        paragraph2.style.visibility = 'visible';
    }
}

btn2.addEventListener("click", showHideText);

// Otra forma

let paragraph3 = document.getElementById("my-paragraph3");
let btn3 = document.getElementById("my-btn3");

function showHideText2() {
    paragraph3.classList.toggle("hide"); // añade quita clase
}

btn3.addEventListener("click", showHideText2);

// Crear Nodos HTML desde JS
let examples = document.getElementById("examples");

let p = document.createElement("p");
let text = document.createTextNode("Texto desde JS");
p.appendChild(text); // p --> txt
console.log(p);

examples.appendChild(p); // div --> p


// Query Selector

let lista2 = document.querySelectorAll(".clase2 > a");

// pruebas con selectores
console.log(document.getElementById('miId1').innerText) // uno
console.log(document.querySelector('#miDiv .miClase').innerText) // cinco
console.log(document.querySelector('#miDiv #miId1.miClase').innerText) // uno
console.log(document.querySelectorAll("#miDiv .miClase"));

let dataDiv = document.querySelectorAll("#miDiv .miClase");
for (let i = 0; i < dataDiv.length; i++) {
    console.log(dataDiv[i].innerHTML);
}

// Ejercicio listas
const button = document.createElement('button');
button.type = 'button';
button.innerText = 'Haz Click';
button.id = "button_list";
document.body.appendChild(button);

function displayList() {

    let shopping_list = ["aguacate", "naranjas", "patatas", "lechuga", "guisantes", "lentejas", "cereales"];

    let list = document.createElement('ul'); // Genera el UL

    for (let i = 0; i < shopping_list.length; i++) {

        let element = document.createElement('li'); // Genera el LI[i]
        let elementText = document.createTextNode(shopping_list[i]);
        // Crea nodo texto
        //"aguacate","naranjas",...
        element.appendChild(elementText); // li[i] --> txt[i]
        list.appendChild(element); // ul --> li[i]
    }

    document.body.appendChild(list); // body --> ul


}
document.querySelector('#button_list').addEventListener("click", displayList);


/**** Template String****/
let food = "paella";
let drink = "tinto";
let description = "La paella de marisco es típica de Valencia";
let url = "https://imag.bonviveur.com/paella-mixta.jpg";

let message = `Hola, 
hoy voy a comer ${food} y beber ${drink}`;

console.log(message);
/*
<div>
<h3>Paella</h3>
<p>La paella es típica de Valencia</p>
<img src="paella.png" alt="paella">
</div>
*/

let card = `<div>
                <h3>${food}</h3>
                <p>${description}</p>
                <img src=${url} alt=${food}>
            </div>`;

console.log(card);

//document.querySelector("#mi_contenedor").innerHTML += card;
document.body.innerHTML += card;









