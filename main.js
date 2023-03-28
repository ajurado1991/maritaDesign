const nameUser = prompt ("Bienvenido a Marita Design, por favor genera un nombre de usuario");
const passwordUser = prompt ("Por favor ingresa una contraseña");
const userAge = parseInt (prompt ("Ingresa tu edad"));

if ( userAge >= 18) {
    alert ("Bienvenido " + nameUser +  " puedes realizar compras en el sitio");
} else {
    alert ("Lo sentimos " + nameUser +  " debes de tener mayoría de edad para realizar compras. Pídele a tus papás que realicen la compra por ti");
}

let continuar = confirm ("¿Quieres adquirir un producto de nuestro catálogo?");

/* do {
    alert ("Nuestro primer producto es una ilustración hecha por MaritaDesign, cuesta $1000, su código es "001"");
    alert ("Nuestro segundo producto es una taza sublimada, cuesta $500, su código es "002"");
    alert ("Nuestro tercer producto es una playera, cuesta $700, su código es "003"");


} while {
    continuar = true;
}

*/