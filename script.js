const formulario = document.getElementById ("login-formulario");
const nombreInput = document.getElementById("nombreInput");
const usuarioInput = document.getElementById("usuarioInput");
const passwordInput = document.getElementById("passwordInput");
const botonRegistrar = document.getElementById("botonRegistrar");
const usuarios = [
    {
        nombre: "Miriam Sanchez",
        username: "miri2020"
    },
    {
        nombre: "Alain Jurado",
        username: "elgranSpo"
    },
    {
        nombre: "Din Grogu",
        username: "baby9000"
    },
];
/* const nuevoUsuario = {}; */

console.log(nombreInput);
console.log(usuarioInput);
console.log(passwordInput);

const verUsuarios = (nuevoUsuario) => {
    const fichaNuevoUsuario = document.createElement("div");
    fichaNuevoUsuario.className = "ficha";
    fichaNuevoUsuario.innerHTML = `
                                        <h3>${nuevoUsuario.nombre}</h3>
                                        <p>Username: ${nuevoUsuario.username}</p>
                                        <button>Perfil</button>
                                        <button>Dar abrazo</>
    `
    contenedorUsuario.append(fichaNuevoUsuario);
}

const mandarDatos = document.getElementById ("login-formulario");

mandarDatos.addEventListener ("submit", (e) => {
    e.preventDefault()

    
    console.log(e.target.children["nombre"].value);
    console.log(e.target.children["usuario"].value);
    console.log(e.target.children["password"].value);
    

    /*
    let userName = e.target.children ["nombre"].value;
    let userUsername = e.target.children ["usuario"].value;
    let userPassword = e.target.children ["password"].value;
    */ //no me funciono

    const informacion = e.target.children;
    const nuevoUsuario = {
        nombre:informacion["nombre"].value,
        username:informacion["usuario"].value,
        password:informacion["password"].value,
    }
    console.log(nuevoUsuario);
    usuarios.push(nuevoUsuario);

    const enJson = JSON.stringify(nuevoUsuario);
    localStorage.setItem("newUser", enJson);

    mandarDatos.reset();
    verUsuarios(nuevoUsuario);
});
console.log(usuarios);


const contenedorUsuario = document.getElementById("contenedorUsuario");
usuarios.forEach((nuevoUsuario) => {
    verUsuarios(nuevoUsuario);
})