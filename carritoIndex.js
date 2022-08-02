import { productos } from "./productos.js";

//let carrito;
//let productoStorage = JSON.parse(localStorage.getItem("productos"));


//  if (productoStorage) {
//   carrito = productoStorage;
// } else {
//   carrito = [];
// }; 

const DateTime = luxon.DateTime
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


const renderCarrito = () => {
 
  let productoStorage = JSON.parse(localStorage.getItem("productos"))
  const contenedorCarrito = document.getElementById("carritoContenedor");
  const contador = document.getElementById("contador")
  const contador2 = document.getElementById("contador2")
  const now = DateTime.now()
  const later = now.plus({days: 10})
  const envio = later.toLocaleString(DateTime.DATE_SHORT)
  contenedorCarrito.innerHTML = "";
  
  
  for (const item of productoStorage) {
    
    let div = document.createElement("div");
    div.classList.add("productoEnCarrito");
    div.innerHTML = `<p>${item.nombre}</p>
                        <p>Precio: ${item.precio}</p> 
                        <p id="cantidad${item.id}">Cantidad: ${item.cantidad}</p>
                        <button id="eliminar${item.id}" class="botonEliminar" ><i class="fa-solid fa-trash-can"></i></button>
            `;
    contenedorCarrito.appendChild(div);
  
    const botonEliminar = document.getElementById(`eliminar${item.id}`)
    botonEliminar.addEventListener("click", () => {
    borrarItemCarrito(item.id);});
 

    let precioTotal = document.getElementById("suma");
    let total = carrito.reduce(
      (acumulador, elemento) =>acumulador + (elemento.precio * elemento.cantidad),0);
      precioTotal.innerHTML = `<p>Total: $${total}</p>
                               <p>La fecha estimada de envio es ${envio}</p>`;

    let cantidad = carrito.reduce((acumulador,elemento) => acumulador + elemento.cantidad,0)
    contador.innerText = (cantidad)
    contador2.innerText=(cantidad)  
  }
  
};

export const carritoIndex = (productoId) => {
  let producto = productos.find((producto) => producto.id == productoId);
  if (carrito.some((element) => element.id === productoId)) {
    carrito.find((item) => item.id === productoId).cantidad++;
  } else {
    carrito.push(producto);
    carrito.find((item) => item.id === productoId).cantidad++;
    //localStorage.setItem("productos", JSON.stringify(carrito));
  }
  localStorage.setItem("productos", JSON.stringify(carrito));
  renderCarrito();
};

 export const borrarItemCarrito =(productoId) => {
  let borrado = productos.find((item) => item.id == productoId);
  if (carrito.some((element) => element.id === productoId) && carrito.some((element) => element.cantidad > 0 )) {
    carrito.find((item) => item.id === productoId).cantidad--;
  } else { //(carrito.some((element) => element.id === productoId) && carrito.some((element) => element.cantidad === 0))  {
    //carrito.find((item) => item.id === productoId).cantidad--;
    carrito.find((item) => item.id === productoId).cantidad--;
    carrito.splice(borrado)}
  
   // carrito.filter(productoId) 
  // volvemos a renderizar
  localStorage.setItem("productos", JSON.stringify(carrito));
  renderCarrito();
};
 