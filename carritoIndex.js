import {productos } from "./productos.js";


let carrito;
let productoStorage = JSON.parse(localStorage.getItem("productos"))

if (productoStorage){
    carrito = productoStorage;
}else{
    carrito = []
}

const renderCarrito = () => {
        const contenedorCarrito = document.getElementById("carritoContenedor")
        let productoStorage = JSON.parse(localStorage.getItem("productos"))
        contenedorCarrito.innerHTML ="";

        for(const item of productoStorage){
       
        let div = document.createElement("div")
        div.classList.add("productoEnCarrito")
        div.innerHTML = `<p>${item.nombre}</p>
                        <p>Precio: ${item.precio}</p> 
                        <p id="cantidad${item.id}">Cantidad: ${item.cantidad}</p>
                        <button id="eliminar${item.id}" class="botonEliminar" ><i class="fa-solid fa-trash-can"></i></button>
            `
        contenedorCarrito.appendChild(div)

        let precioTotal = document.getElementById("suma")
        let total = carrito.reduce((acumulador, elemento) => acumulador + elemento.precio * elemento.cantidad, 0) 

        precioTotal.innerHTML = `Total: $${total}`
        
    }
}

export const carritoIndex = (productoId) => {
    
    let producto = productos.find( producto => producto.id == productoId)
    if(carrito.some((element) => element.id === productoId)){
       carrito.find(item => item.id === productoId).cantidad++
    }else{
        carrito.push(producto)
        carrito.find(item => item.id === productoId).cantidad++}
    
    localStorage.setItem("productos",JSON.stringify(carrito))    
    renderCarrito();
}

