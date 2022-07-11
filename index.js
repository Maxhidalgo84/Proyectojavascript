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
    constructor(id,nombre,precio){
    this.id = id;
    this.nombre = nombre;
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

productos.push(new Producto(1,"MB 1", 100000 ));
productos.push(new Producto(2,"MB 2", 80000 ));
productos.push(new Producto(3,"MB 3", 50000 ));
productos.push(new Producto(4,"MB 4", 40000 ));
       

let fin;   
let carrito = []
do {
let valor = parseInt(prompt("ingrese cual bici desea comprar (1, 2, 3 o 4)"))
    
while (valor!=1 && valor!=2 && valor!=3 && valor!=4){
           alert("ingreso invalido");
           valor = parseInt(prompt("ingrese cual bici desea comprar (1, 2, 3 o 4)"));} 
       



for (const producto of productos) {
    if (producto.id == (valor)){   
        carrito.push(new Carrito(producto.nombre,producto.precio))
        verPrecio = producto.precio
    }
} 
alert(`Usted eligio el modelo de bicicleta Mountain Bike ${valor} y el valor es de $${verPrecio}`);
fin =prompt("desea agregar otra bici?").toLowerCase();
}
while(fin!="n")
      

let detalle = carrito.reduce((acumulaNombre,elemento) => acumulaNombre + " " + elemento.nombre + ": $" + elemento.precio,"")
let total = carrito.reduce((acumulador,elemento) => acumulador + elemento.precio,0)

const Compras = detalle.concat(" "+ "TOTAL: $"+total)

alert(Compras); 

    
    