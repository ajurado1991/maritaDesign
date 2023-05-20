
const productos = JSON.parse(localStorage.getItem("productos")) ?? [];

const contenedorProductos = document.querySelector ("#tiendaMarita");

productos.forEach(producto => {
    const tarjetaProducto = document.createElement("div");
    tarjetaProducto.className = "product-item";
    tarjetaProducto.innerHTML = `
                <img class="product-item-img" src="resources/01.png" alt="Pokemon squirtle">
                <h3 class="product-item-title">${producto.nombre}</h3>
                <p class="product-item-descrip">${producto.descript}</p>
                <span>$ ${producto.precio}</span>
                <button class="product-item-btn">Agregar al carrito</button>`;
    contenedorProductos.append(tarjetaProducto);

    console.log(producto);


});


console.log(productos);

