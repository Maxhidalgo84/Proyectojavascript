

// Pedido de usuario y luego sigue eleccion de bicicleta (sin vincularlo con el DOM)

/* 
       let padre = document.getElementById("demo3") 
        let error1 = document.getElementById("error1")      
        let usuario = document.getElementById("name")    
        let formulario = document.getElementById("formulario")
        let boton01 = document.getElementById("envia")

  
           if(formulario){ formulario.addEventListener("submit", (e)=> {
            e.preventDefault()
            if (e.target.correo.value.includes("@") && e.target.correo.value.includes(".")){
                let mensaje = document.createElement("div")
                mensaje.className= "demo2";
                mensaje.innerText = `Bienvenido ${usuario.value}`
                padre.append(mensaje)
            }else {
                alert("correo invalido")
                let mensaje = document.createElement("div")
                mensaje.innerHTML = "no es un correo"
                error1.appendChild(mensaje)
                e.correo.value = "";
            }
        
        })}    */ 



//Mostrar las bicis

/* let mountain = document.getElementById("MB");
let carrera = document.getElementById("carrera")
let infantil = document.getElementById("infantil")

for (const producto of productos) {
    let contenedor = document.createElement("div")
    contenedor.classList.add("col-lg-4")

    contenedor.innerHTML = ` <div class="card">
                            <img src=${producto.img} class="card-img-top" alt="...">
                                <div class"card-body>
                                <h5 class="card-title">${producto.nombre} </h5>
                                <p class="card-text"> ${producto.descripcion} </p>
                                <h5 class="card-title"> $${producto.precio}</h5>
                                <a href="#" id="${producto.id}"  class="btn btn-primary">Comprar</a>
                                </div>
                            </div>`
 
  if (producto.categoria === "mountain") {
      mountain.appendChild(contenedor);
   } else if (producto.categoria === "carrera") {
     carrera.appendChild(contenedor);
   } else {infantil.appendChild(contenedor)} 

const bicicleta =  document.getElementById(`${producto.id}`)
bicicleta.onclick = () => {eleccion(producto.id)}
//bicicleta.addEventListener("click", ()=> {eleccion(producto.id)})
}

 */

/* let valor;

let carrito=[];

    const eleccion =(x) => {
        valor = x
        let verPrecio
        let borrar = document.getElementById('total')
        while (borrar.hasChildNodes()) {
            borrar.removeChild(borrar.firstChild)
        }

        for (const producto of productos) {
            if (producto.id == (valor)) {
                carrito.push(producto.nombre, producto.precio)
                verPrecio = producto.precio
            }
        }

        alert(`Usted eligio el modelo de bicicleta Mountain Bike ${valor} y el valor es de $${verPrecio}`)


        let detalle = carrito.reduce((acumulaNombre, elemento) => acumulaNombre + "\n " + elemento.nombre + ": $" + elemento.precio, "")
        let total = carrito.reduce((acumulador, elemento) => acumulador + elemento.precio * elemento.cantidad, 0)

        const Compras = detalle.concat("\n TOTAL: $" + total)

        alert(Compras)
        console.log(Compras)

        let padre3 = document.getElementById("total")

        let totales = document.createElement("div")

        totales.innerHTML = `${Compras}`
        totales.id = "clear"
        padre3.appendChild(totales)

    }
 */

/*

for (const item of carrito) {
    let li = document.createElement("li")
    li.innerHTML = `<p>Producto: ${item.nombre}  <b>$${item.precio}</b></p>`;
    padre3.append(li);
}

let totales = document.createElement("div")
totales.innerHTML=`<b>Total: $${total}</b>`
padre3.appendChild(totales); 

}*/
  
