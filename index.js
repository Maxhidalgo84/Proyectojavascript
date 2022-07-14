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
constructor(id,img,nombre,descripcion,precio,categoria){
this.id = id;
this.img = img;
this.nombre = nombre;
this.descripcion = descripcion;
this.precio = precio;
this.categoria = categoria;
}
}

class Carrito {
constructor(nombre, precio){
this.nombre = nombre;
this.precio = precio
}
}

let productos = [];

productos.push(new Producto(1,"../img/mountain1.jpg","Mountain Rodado 29 GT","la mejor bici", 100000,"mountain" ));
productos.push(new Producto(2,"../img/mountain2.jpg","Mountain Rodado 29","Versatil, donde quiera que vayas", 80000,"mountain" ));
productos.push(new Producto(3,"../img/mountain3.jpg","Mountain 27.5","Con doble suspension y horquilla max", 50000,"mountain" ));
productos.push(new Producto(5,"../img/mountain4.jpg","Mountain eco","La mejor relacion precio", 40000,"mountain" ));
productos.push(new Producto(6, "../img/bicicarrera1.jpg", "Carrera 1", "La mejor bici de carrera", 100000,"carrera"));
productos.push(new Producto(7, "../img/bicicarrera2.jpg", "Carrera 2", "Ideal trayectos largos", 90000, "carrera"));
productos.push(new Producto(8, "../img/bicicarrera13.jpg", "Carrera 3", "Mejor en su precio", 70000, "carrera"));
productos.push(new Producto(9, "../img/biciniño1.jpg", "infantil 1", "Bici niño 1", 30000, "infantil"));
productos.push(new Producto(10, "../img/biciniño2.jpg", "infantil 2", "Bici niño 2", 20000, "infantil"));
productos.push(new Producto(11, "../img/biciniño2.jpg", "infantil 3", "Bici niño 3", 15000, "infantil"));

/* let padre2 = document.getElegit mentById("cards");


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
*/

let mountain = document.getElementById("MB");
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
                    <a href="#" id="${producto.id}" onclick="agregarItem()"  class="btn btn-primary">Comprar</a>
                    </div>
                </div>`

if (producto.categoria === "mountain") {
mountain.appendChild(contenedor);
} else if (producto.categoria === "carrera") {
carrera.appendChild(contenedor);
} else {
infantil.appendChild(contenedor)
} 
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
nombreBici = producto.nombre
verPrecio = producto.precio
}
} 
alert(`${usuario} eligio el modelo de bicicleta ${nombreBici} y el valor es de $${verPrecio}`);

}
while(confirm("Desea agregar otra Bici 🚲?"))


let detalle = carrito.reduce((acumulaNombre,elemento) => acumulaNombre + "\n " + elemento.nombre + ": $" + elemento.precio,"")
let total = carrito.reduce((acumulador,elemento) => acumulador + elemento.precio,0)

const Compras = (" Listado de Productos:")+detalle.concat("\n TOTAL: $"+total)

alert(Compras)
console.log(detalle);

let padre3 = document.getElementById("total")

for (const item of carrito) {
let li = document.createElement("li")
li.innerHTML = `<p>Producto: ${item.nombre}  <b>$${item.precio}</b></p>`;
padre3.append(li);
}

let totales = document.createElement("div")
totales.innerHTML=`<b>Total: $${total}</b>`
padre3.appendChild(totales); 

