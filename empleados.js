class Producto {
    constructor (nombre, descript, precio) {
        this.nombre = nombre;
        this.descript = descript;
        this.precio = parseFloat (precio);
        this.enviogratis = false;
    }

    envioGratis (precioEnvio) {
        this.precio = this.precio + precioEnvio;
        this.envioGratis = true;
    }
};

const productos = JSON.parse(localStorage.getItem("productos")) ?? [];

const crearProductos = () => {
    const formularioCrear = document.querySelector("#productCreation");
    formularioCrear.addEventListener ("submit", (e) => {
        e.preventDefault();
        const datos = e.target.children;
        const producto = new Producto (datos["nombre"].value, datos["descript"].value, datos["precio"].value);
        productos.push(producto);
        localStorage.setItem("productos", JSON.stringify(productos));
        formularioCrear.reset();
    })
};

crearProductos();