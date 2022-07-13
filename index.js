// Pedido de usuario y luego sigue eleccion de bicicleta (sin vincularlo con el DOM)

//LOGIN

 let usuario = prompt("ingrese su usuario")
    
    
        while(usuario == "") {
            alert("usuario incorrecto")
        usuario = prompt("Por favor ingrese un usuario");}
        
        let mensaje2 = (`Hola ${usuario} `)
        alert(mensaje2)

        let contraseña = prompt("ingrese coder para verificar").toLowerCase();

            while (contraseña != "coder") {
            alert ("Contraseña incorrecta");

            contraseña = prompt("ingrese coder") 

            }
        alert(`${usuario} se logueo exitosamente`); 
    

//Eleccion de la bici

class Producto {
    constructor(id,img,nombre,descripcion,precio){
    this.id = id;
    this.img = img;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
}
}

class Carrito {
    constructor(nombre, precio){
    this.nombre = nombre;
    this.precio = precio
}
}

let productos = [];

productos.push(new Producto(1,"../img/mountain1.jpg","MB 1","la mejor bici", 100000 ));
productos.push(new Producto(2,"../img/mountain2.jpg","MB 2","la mejor bici", 80000 ));
productos.push(new Producto(3,"../img/mountain3.jpg","MB 3","la mejor bici", 50000 ));
productos.push(new Producto(4,"../img/mountain4.jpg","MB 4","la mejor bici", 40000 ));
       
 
     
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
                            <a href="#" id="${producto.id}" onclick="agregarItem()"  class="btn btn-primary">Comprar</a>
                            </div>
                        </div>`
padre2.appendChild(contenedor)
}


let carrito = []
do {
let valor = parseInt(prompt("Ingrese cual Bici 🚲 desea comprar 🛒 (1, 2, 3 o 4)"))
    
while (valor!=1 && valor!=2 && valor!=3 && valor!=4){
           alert("ingreso invalido");
           valor = parseInt(prompt("ingrese cual Bici 🚲 desea comprar 🛒 (1, 2, 3 o 4)"));} 
       



for (const producto of productos) {
    if (producto.id == (valor)){   
        carrito.push(new Carrito(producto.nombre,producto.precio))
        verPrecio = producto.precio
    }
} 
alert(`${usuario} eligio el modelo de bicicleta Mountain Bike ${valor} y el valor es de $${verPrecio}`);

}
while(confirm("Desea agregar otra Bici 🚲?"))
      

let detalle = carrito.reduce((acumulaNombre,elemento) => acumulaNombre + "\n " + elemento.nombre + ": $" + elemento.precio,"")
let total = carrito.reduce((acumulador,elemento) => acumulador + elemento.precio,0)

const Compras = (" Listado de Productos:")+detalle.concat("\n TOTAL: $"+total)

alert(Compras)

let padre3 = document.getElementById("total")

let totales = document.createElement("div")
totales.classList.add("totales")

totales.innerHTML = `<h3>Detalle productos<h3>
                     <p>${detalle}</p>
                     <b>Total: $${total}`
padre3.appendChild(totales)

    