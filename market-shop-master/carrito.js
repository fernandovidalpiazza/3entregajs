const productos = JSON.parse(localStorage.getItem("productos")) ?? [];

const crearProducto = () => {
  const formularioCrear = document.querySelector("#crearProducto");
  formularioCrear.addEventListener("submit",(e) => {
    e.preventDefault();
    const datos = e.target.children;
    const producto = new Producto(datos["nombre"].value,datos["descrip"].value,datos["precio"].value);
    productos.push(producto);
    localStorage.setItem("productos",JSON.stringify(productos));
    formularioCrear.reset();
    verProductos();
  });
}

const agregarAlCarrito = (producto) => {
  carrito.push(producto);
  actualizarCarrito();
}

const verProductos = () => {
  const contenedorProductos = document.querySelector("#productos");
  contenedorProductos.innerHTML = "";
  productos.forEach(producto => {
    const tarjetaProducto = document.createElement("div");
    tarjetaProducto.className = "producto";
    tarjetaProducto.innerHTML = `
      <img src="./pictures/pocima 2.jfif" alt="">
      <h3>${producto.nombre}</h3>
      <p>${producto.descrip}</p>
      <p>Precio: ${producto.precio}</p>
      <button class="btn" onclick="agregarAlCarrito(${JSON.stringify(producto)})">Agregar al carrito</button>
    `;
    contenedorProductos.append(tarjetaProducto);
  });
}

const carrito = [];
