const nameUser = prompt ("Bienvenido a Marita Design, por favor genera un nombre de usuario");
const passwordUser = prompt ("Por favor genera una contraseña");
const userAge = parseInt (prompt ("Ingresa tu edad"));
let item1 = "Print";
let item2 = "Taza sublimada";
let item3 = "Playera de Marita";
let item4 = "Llavero con ilustraciòn";

if ( userAge >= 18) {
    alert ("Bienvenido " + nameUser +  " puedes realizar compras en el sitio");
} else {
    alert ("Lo sentimos " + nameUser +  " debes de tener mayoría de edad para realizar compras. Pídele a tus papás que realicen la compra por ti");
}

let continuar = confirm ("¿Quieres adquirir un producto de nuestro catálogo?");

/*while ( continuar = true ) {
    const usuarioSesion = prompt ("Por favor ingresa tu nombre de usuario");
    const passwordSesion = prompt ("Por favor ingresa tu contraseña");

    if (usuarioSesion == nameUser && passwordSesion == passwordUser) {
        alert ("Bienvenido " + nameUser + " por el momento tenemos a la venta los siguientes productos: " + item1 + ", " + item2 + ", "+ item3 + ", "+ item4 + ".");
    } else if (usuarioSesion != nameUser && passwordSesion == passwordUser) {
        alert ("Por favor, ingresa un nombre de usuario correcto");
    } else if (usuarioSesion == nameUser && passwordSesion != passwordUser){
        alert("Por favor, ingresa tu contraseña correcta");
    } else if (usuarioSesion != nameUser && passwordSesion != passwordUser) {
        alert("Por favor ingresa correctamente tus datos")
    } else {
        "Vuelve pronto.";
    }

    continuar = confirm ("Quieres volver a revisar nuestro catálogo?");
} */

do {
     const usuarioSesion = prompt ("Por favor ingresa tu nombre de usuario");
    const passwordSesion = prompt ("Por favor ingresa tu contraseña");

    if (usuarioSesion == nameUser && passwordSesion == passwordUser) {
        alert ("Bienvenido " + nameUser + " por el momento tenemos a la venta los siguientes productos: " + item1 + ", " + item2 + ", "+ item3 + ", "+ item4 + ".");
    } else if (usuarioSesion != nameUser && passwordSesion == passwordUser) {
        alert ("Por favor, ingresa un nombre de usuario correcto");
    } else if (usuarioSesion == nameUser && passwordSesion != passwordUser){
        alert("Por favor, ingresa tu contraseña correcta");
    } else if (usuarioSesion != nameUser && passwordSesion != passwordUser) {
        alert("Por favor ingresa correctamente tus datos")
    } else {
        "Vuelve pronto.";
    }

    let continuar = confirm ("Quieres volver a revisar nuestro catálogo?");
} while (continuar != true);

/* do {
    alert ("Nuestro primer producto es una ilustración hecha por MaritaDesign, cuesta $1000, su código es "001"");
    alert ("Nuestro segundo producto es una taza sublimada, cuesta $500, su código es "002"");
    alert ("Nuestro tercer producto es una playera, cuesta $700, su código es "003"");


} while {
    continuar = true;
}

*/