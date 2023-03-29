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

let continuar = confirm (nameUser + " ¿Quieres conocer los artículos de nuestro catálogo?");


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

} while (continuar != false);

