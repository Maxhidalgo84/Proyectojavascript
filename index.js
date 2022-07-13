// Pedido de usuario y luego sigue eleccion de bicicleta (sin vincularlo con el DOM)

//LOGIN
/* 
 let usuario = prompt("ingrese su usuario")
    
    
        while(usuario == "") {
            alert("usuario incorrecto")
        usuario = prompt("Por favor ingrese un usuario");}
        
        let mensaje2 = (`Hola ${usuario} `)
        alert(mensaje2)

        let contraseña = prompt("ingrese contraseña")

            while (contraseña != "coder") {
            alert ("Contraseña incorrecta");

            contraseña = prompt("ingrese coder") 

            }
        alert(`${usuario} se logueo exitosamente`); 
     */

//Eleccion de la bici


class Producto {
    constructor(id,img,nombre,descripcion,precio){
    this.id = id;
    this.img = img;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;;
}
}

class Carrito {
    constructor(nombre, precio){
    this.nombre = nombre;
    this.precio = precio
}
}

let productos = [];

productos.push(new Producto(1,"../img/mountain1.jpg","Mountain Rodado 29 GT","la mejor bici", 100000 ));
productos.push(new Producto(2,"../img/mountain2.jpg","Mountain Rodado 29","Versatil, donde quiera que vayas", 80000 ));
productos.push(new Producto(3,"../img/mountain3.jpg","Mountain 27.5","Con doble suspension y horquilla max", 50000 ));
productos.push(new Producto(4,"../img/mountain4.jpg","Mountain eco","La mejor relacion precio", 40000 ));
       

     
let padre2 = document.getElementById("cards");


for (const producto of productos) {

let contenedor = document.createElement("div")
contenedor.classList.add("col-lg-4")

contenedor.innerHTML = ` <div class="card">
                        <img src=${producto.img} class="card-img-top" alt="...">
                           <div class"card-body>
                            <h5 class="card-title">${producto.nombre} </h5>
                            <p class="card-text"> ${producto.descripcion} </p>
                            <h5 class="card-title"> $${producto.precio}</h5>
                            <a href="#" id="${producto.id}" onclick="seleccion(this.id)"  class="btn btn-primary">Comprar</a>
                            </div>
                        </div>`
padre2.appendChild(contenedor)
}

let valor;

let carrito=[];

const seleccion = (obj) => {
valor = obj
let borrar = document.getElementById('total')
while( borrar.hasChildNodes()) {
    borrar.removeChild(borrar.firstChild)
} 

for (const producto of productos) {
    if (producto.id == (valor)){   
        carrito.push(new Carrito(producto.nombre,producto.precio))
       verPrecio = producto.precio
    }
} 

/* for (const items of carrito) {
    if (carrito.id == (valor)) {
        carrito.splice
    
    }

} */

alert(`Usted eligio el modelo de bicicleta Mountain Bike ${valor} y el valor es de $${verPrecio}`);


let detalle = carrito.reduce((acumulaNombre,elemento) => acumulaNombre + "\n " + elemento.nombre + ": $" + elemento.precio,"")
let total = carrito.reduce((acumulador,elemento) => acumulador + elemento.precio,0)

const Compras = detalle.concat("\n TOTAL: $"+total)

alert(Compras)
console.log(Compras); 

let padre3 = document.getElementById("total")

let totales = document.createElement("div")

totales.innerHTML = `${Compras}`;
totales.id = "clear";
padre3.appendChild(totales)


}



/* for (const item of carrito) {
    let li = document.createElement("li")
    li.innerHTML = `<p>Producto: ${item.nombre}  <b>$${item.precio}</b></p>`;
    padre3.append(li);
}

let totales = document.createElement("div")
totales.innerHTML=`<b>Total: $${total}</b>`
padre3.appendChild(totales); 

}
  */