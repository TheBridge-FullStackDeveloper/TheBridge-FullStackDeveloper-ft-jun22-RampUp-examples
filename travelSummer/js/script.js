/*****Validaciones del formulario *****/
document.querySelector("#contactForm").addEventListener("submit", function (event) {
    alert("Enviando");
    event.preventDefault();// Paraliza el envío del formulario

    let formValidated = true; // para saber si el form es válido o no

    // Selectores de los input de texto
    let fname = event.target.fname.value;
    let lname = event.target.lname.value;
    let email = event.target.email.value;

    /**** Validar nombres ****/
    if (fname.length > 3 && fname.length <= 30) {
        console.log("nombre OK: " + fname);
    }
    else {
        alert("Nombre tiene que que estar entre 3 y 30");
        formValidated = false;
        // Cambios en el DOM para que se vea el error
        //...
        //...
    }

    /**** Validar apellidos ****/
    if (lname.length > 3 && lname.length <= 30) {
        console.log("apellidos OK:" + lname);
    }
    else {
        alert("Apellidos tiene que que estar entre 3 y 30");
        formValidated = false;
        // Cambios en el DOM para que se vea el error
        //...
        //...
    }

    /**** Validar email ****/
    /*
    //Con RegExp
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.match(mailformat))
    */

    if (email.endsWith(".com")) {
        console.log("apellidos OK:" + lname);
    } else {
        alert("Sólo dominio .com en mi empresa");
        formValidated = false;
        // Cambios en el DOM para que se vea el error
        //...
        //...
    }

    /**** Condiciones de uso ****/
    console.log("***¿aceptas?***");
    console.log(event.target.elements.accept.checked);
    let accept = event.target.accept.checked;

    if (accept == true) {
        console.log("Ha aceptado las condiciones");
    } else {
        alert("Tienes que aceptar las condiciones");
        formValidated = false;
    }

    // Para hacer el envío final del formulario
    if (formValidated == true) {
        alert("Formulario validado con éxito");
        // Reanuda el envío del formulario
        event.target.submit();
    }
    else {
        alert("Fomulario no validado");
    }
})

/*
// PARA HACER EN EL EJERCICIO

if (nombre NO cumple la condición) {
    // Cambios en el DOM para que se vea el error
    //...
    //...

} else if (apellidos NO cumple la condición) {
    // Cambios en el DOM para que se vea el error
    //...
    //...

} else if (email NO cumple la condición) {
    // Cambios en el DOM para que se vea el error
    //...
    //...
}else if (condiciones NO cumple la condición) {
    // Cambios en el DOM para que se vea el error
    //...
    //...
}else {
    //enviar el formulario
    event.target.submit();
}

*/