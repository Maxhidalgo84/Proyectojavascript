import {productos} from "./productos.js";
import { carritoIndex } from './carritoIndex.js';

//Muestro productos en el dom
const mostrarProductos = (productos) => {

    const mountain = document.getElementById("MB");
    const carrera = document.getElementById("carrera")
    const infantil = document.getElementById("infantil")


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
if(mountain){
    if (producto.categoria === "mountain") {
        mountain.appendChild(contenedor);
    } else if (producto.categoria === "carrera") {
        carrera.appendChild(contenedor);
    } else {infantil.appendChild(contenedor)} 
  
//eleccion de bici al apretar comprar
    const bicicleta =  document.getElementById(`${producto.id}`)
    //bicicleta.onclick = () => {eleccion(producto.id)}
    bicicleta.addEventListener("click", ()=> {
        carritoIndex(producto.id)
        alert(`Se agrego ${producto.nombre}`)
    })
}
    }
}

mostrarProductos(productos);

// Pedido de usuario 



        let padre = document.getElementById("demo3") 
        let error1 = document.getElementById("error1")      
        let usuario;
        let usuarioSto = sessionStorage.getItem("usuario")
        let formulario = document.getElementById("formulario")
        let boton01 = document.getElementById("envia")

// si no esta logueado se tiene que loguear con esta funcion.        
if(formulario){
        const loguear = () =>  {
            formulario.addEventListener("submit", (e) => {
                e.preventDefault();
                if (e.target.correo.value.includes("@") && e.target.correo.value.includes("."))
                 {  usuario = document.getElementById("name");
                    sessionStorage.setItem("usuario", usuario.value);
                    let mostrarUser = document.createElement("div");
                    mostrarUser.className = "demo2";
                    mostrarUser.innerText = `Bienvenido ${usuario.value}`;
                    padre.append(mostrarUser);
                } else {
                    alert("correo invalido");
                    let mostrarUser = document.createElement("div");
                    mostrarUser.innerHTML = "no es un correo";
                    error1.appendChild(mostrarUser);
                    e.correo.value = "";}        
            }
        )}
        
//Valido si ya esta logueado
        if(usuarioSto){
            let  usuario = usuarioSto;
            let mensaje = `Bienvenido ${usuario}`
            alert(mensaje)
            let mostrarUser = document.createElement("div")
            mostrarUser.className= "demo2";
            mostrarUser.innerText = `Hola ${usuario}`
        }else{
            loguear();} 
}
