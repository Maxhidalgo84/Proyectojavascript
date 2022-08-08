const modalContenedor = document.querySelector('.modal');

const modalContenedor2 = document.querySelector('.modal2');

const abrirCarrito = document.getElementById('open')

const abrirCarrito2 = document.getElementById('open2')

const abrirInfo = document.querySelector('open2')

const cerrarCarrito = document.getElementById('cerrar')

const cerrarInfo = document.getElementById('cerrarinf')

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

modalContenedor2.addEventListener('click',() =>{
    cerrarInfo.click();
})

modalCarrito.addEventListener('click', (e) =>{
    e.stopPropagation();
})