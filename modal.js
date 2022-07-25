const modalContenedor = document.querySelector('.modal');

const abrirCarrito = document.getElementById('open')

const cerrarCarrito = document.getElementById('cerrar')

const modalCarrito = document.querySelector('.modalCarrito')




abrirCarrito.addEventListener('click', ()=>{
    modal.classList.toggle('modalActive')
})

cerrarCarrito.addEventListener('click', ()=>{
    modal.classList.remove('modalActive')
})

modalContenedor.addEventListener('click',() =>{
    cerrarCarrito.click();
})

modalCarrito.addEventListener('click', (e) =>{
    e.stopPropagation();
})