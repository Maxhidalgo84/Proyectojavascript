const modalContenedor = document.querySelector('.modal');

const abrirCarrito = document.getElementById('open')

const abrirCarrito2 = document.getElementById('open2')

const cerrarCarrito = document.getElementById('cerrar')

const modalCarrito = document.querySelector('.modalCarrito')




abrirCarrito.addEventListener('click', ()=>{
    modal.classList.toggle('modalActive')
})

abrirCarrito2.addEventListener('click', ()=>{
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