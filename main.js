

let nameUser;
let passwordUser;
let userAge;
let busqueda;
let decision1;
let decision2;
let compra;
let seguir;
/*
let item1 = "Print";
let item2 = "Taza sublimada";
let item3 = "Playera de Marita ";
let item4 = "Llavero con ilustración ";
*/

class Producto {
    constructor(nombre, precio, stock, tamaño) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.tamaño = tamaño;
    }
}

const item1 = new Producto("Print", 390, 25, "grande");
const item2 = new Producto("Taza sublimada", 410, 18, "mediano");
const item3 = new Producto("Playera de Marita", 600, 45, "talla única");
const item4 = new Producto("Llaver con ilustración", 90, 125, "pequeño");

const carritoCompras = [];



function comienzo () {
    nameUser = prompt ("Bienvenido a Marita Design, por favor genera un nombre de usuario");
    passwordUser = prompt ("Por favor genera una contraseña");
    userAge = parseInt (prompt ("Ingresa tu edad"));
}

function principal () {
    if ( userAge >= 18) {
        alert ("Bienvenido " + nameUser +  " puedes realizar compras en el sitio");
    
        let continuar = confirm (nameUser + " ¿Quieres conocer los artículos de nuestro catálogo?");
        do {
            const usuarioSesion = prompt ("Por favor ingresa tu nombre de usuario");
           const passwordSesion = prompt ("Por favor ingresa tu contraseña");
       
           if (usuarioSesion == nameUser && passwordSesion == passwordUser) {
               alert ("Bienvenido " + nameUser + " por el momento tenemos a la venta los siguientes productos: " + item1.nombre + ", " + item2.nombre + ", "+ item3.nombre + ", "+ item4.nombre + ".");
           } else if (usuarioSesion != nameUser && passwordSesion == passwordUser) {
               alert ("Por favor, ingresa un nombre de usuario correcto");
           } else if (usuarioSesion == nameUser && passwordSesion != passwordUser){
               alert("Por favor, ingresa tu contraseña correcta");
           } else if (usuarioSesion != nameUser && passwordSesion != passwordUser) {
               alert("Por favor ingresa correctamente tus datos")
           } else {
               "Vuelve pronto.";
           }
           continuar = confirm("¿Quieres ver nuevamente el catálogo?")
       
       } while (continuar == true);
    } else {
        alert ("Lo sentimos " + nameUser +  " debes de tener mayoría de edad para realizar compras. Pídele a tus papás o a alguna persona mayor que realicen la compra por ti. Nos vemos, pilluelo.");
    }
}

function secundario () {
    busqueda = confirm (nameUser + ", ¿quieres conocer la información de alguno de los productos?")
}


function terciario () {
    if (busqueda = true) {
        decision1 = prompt("Ingresa el código del objeto para conocer su información: item1 ="+item1.nombre+ ", item2 =" + item2.nombre + ", item3 =" + item3.nombre + " , item4=" + item4.nombre);
        /*
        decision2 = prompt("¿Qué quieres saber de " + decision1.nombre+ "? (precio, stock, tamaño)");
        alert ("El "+ decision2 + " de " + decision1 + " es:" + decision1.decision2);
        */
       switch (decision1) {
        case "item1":
            alert ("El precio de " + item1.nombre + " es: " + item1.precio + " MXN. Su tamaño es " + item1.tamaño + " y hay " + item1.stock + " en stock.");
            break;
        case "item2":
            alert ("El precio de " + item2.nombre + " es: " + item2.precio + " MXN. Su tamaño es " + item2.tamaño + " y hay " + item2.stock + " en stock.");  
            break;
        case "item3":
            alert ("El precio de " + item3.nombre + " es: " + item3.precio + " MXN. Su tamaño es " + item3.tamaño + " y hay " + item3.stock + " en stock.");  
            break;   
        case "item4":
            alert ("El precio de " + item4.nombre + " es: " + item4.precio + " MXN. Su tamaño es " + item4.tamaño + " y hay " + item4.stock + " en stock.");  
            break;
        default:
            alert ("Opción incorrecta");
       }
    } else {
        alert ("Vuelve pronto.");
    }
}



function cuarto () {
    do {
        decision1 = prompt("Ingresa el código del objeto para conocer su información: item1 ="+item1.nombre+ ", item2 =" + item2.nombre + ", item3 =" + item3.nombre + " , item4=" + item4.nombre);
        /*
        decision2 = prompt("¿Qué quieres saber de " + decision1.nombre+ "? (precio, stock, tamaño)");
        alert ("El "+ decision2 + " de " + decision1 + " es:" + decision1.decision2);
        */
       switch (decision1) {
        case "item1":
            alert ("El precio de " + item1.nombre + " es: " + item1.precio + " MXN. Su tamaño es " + item1.tamaño + " y hay " + item1.stock + " en stock.");
            break;
        case "item2":
            alert ("El precio de " + item2.nombre + " es: " + item2.precio + " MXN. Su tamaño es " + item2.tamaño + " y hay " + item2.stock + " en stock.");  
            break;
        case "item3":
            alert ("El precio de " + item3.nombre + " es: " + item3.precio + " MXN. Su tamaño es " + item3.tamaño + " y hay " + item3.stock + " en stock.");  
            break;   
        case "item4":
            alert ("El precio de " + item4.nombre + " es: " + item4.precio + " MXN. Su tamaño es " + item4.tamaño + " y hay " + item4.stock + " en stock.");  
            break;
        default:
            alert ("Opción incorrecta");
       }
       busqueda = confirm("¿Quieres consultar información de algún otro producto?")

    } while (busqueda == true)
}

function quinto () {
    do {
        compra = prompt(nameUser + ", ingresa el codigo del producto que quieras añadir a tu carrito de compras");
        carritoCompras.push(compra);
        seguir = confirm("quieres añadir otro producto?")
    } while (seguir == true);
    alert ("Tu carrito de compras tiene: " + carritoCompras);
}

comienzo();
principal ();
cuarto ();
quinto ();

/*
const nameUser = prompt ("Bienvenido a Marita Design, por favor genera un nombre de usuario");
const passwordUser = prompt ("Por favor genera una contraseña");
const userAge = parseInt (prompt ("Ingresa tu edad"));
let item1 = "Print";
let item2 = "Taza sublimada";
let item3 = "Playera de Marita";
let item4 = "Llavero con ilustraciòn";

if ( userAge >= 18) {
    alert ("Bienvenido " + nameUser +  " puedes realizar compras en el sitio");

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
       continuar = confirm("¿Quieres ver nuevamente el catálogo?")
   
   } while (continuar == true);
} else {
    alert ("Lo sentimos " + nameUser +  " debes de tener mayoría de edad para realizar compras. Pídele a tus papás o a alguna persona mayor que realicen la compra por ti. Nos vemos, pilluelo.");
}

*/




