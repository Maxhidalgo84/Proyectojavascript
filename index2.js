let Bicis = [
    {id: 1, nombre: "Mountain 1", precio: 100000},
    {id: 2, nombre: "Mountain 2", precio: 80000},
    {id: 3, nombre: "Mountain 3", precio: 50000},
    {id: 4, nombre: "Mountain 4", precio: 40000}
]

console.log(Bicis);


function ingresar(x){   
    if (id=x==1){
     return 
     
    }  
        
    else if (x==2){
    return "80000"
    }

    else if (x==3){
        return "50000"
        }

    else if (x==4) {
    return "40000"
        }    
    
    else { 
        return "0"
    }  
}

let valor = parseInt(prompt("ingrese cual bici desea comprar (1, 2, 3 o 4)"));

while (valor!=1 && valor!=2 && valor!=3 && valor!=4){
alert("ingreso invalido");
valor = parseInt(prompt("ingrese cual bici desea comprar (1, 2, 3 o 4)"));}

precio = parseInt(ingresar(valor));

const suma = (a,b) => a +b;
const resta = (a,b) => a - b;
const iva = x => x *0.21;

let precioProducto = precio;
let descuento = precioProducto*0.10;
let nuevoPrecio = resta(suma(precioProducto,iva(precioProducto)),descuento); 

alert(`Usted eligio el modelo de bicicleta Mountain Bike ${valor} y el valor con descuento es de $${nuevoPrecio}`);
