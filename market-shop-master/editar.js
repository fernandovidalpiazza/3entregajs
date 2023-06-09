const productos = JSON.parse(localStorage.getItem("productos")) ?? []


const crearProducto = () =>{
    const formularioCrear = document.querySelector("#crearProducto")
    formularioCrear.addEventListener("submit",(e)=>{
        e.preventDefault()
        const datos = e.target.children
        const producto = new Producto(datos["nombre"].value,datos["descrip"].value,datos["precio"].value)
        productos.push(producto)
        localStorage.setItem("productos",JSON.stringify(productos))
        formularioCrear.reset()
    })
}

const verProductos = () =>{
    const ContenedorProductos = document.querySelector("#productos")
    productos.forEach(producto => {
        const tarjetaProducto = document.createElement("div")
        tarjetaProducto.className = "producto"
        tarjetaProducto.innerHTML = `
            <img src="./pictures/pocima 2.jfif" alt="">
            <form class="editar">
                <input type="text" name="nombre" value="${producto.nombre}">
                <input type="text" name="descrip" value="${producto.descrip}">
                <input type="number" name="precio" value="${producto.precio}">
                <button class="btn" type="submit">Editar</button>
            </form>
            <button class="btn">Borrar</button>`
    ContenedorProductos.append(tarjetaProducto)
    })
    
}
crearProducto()
verProductos()