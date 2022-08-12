
const modalContenedor = document.getElementById('modal');

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


const modalContenedor2 = document.getElementById('modal2');

const cerrarInfo = document.getElementById('cerrarInfo')

const modalInfo = document.querySelector('.modalInfo')



cerrarInfo.addEventListener('click', ()=>{
    modal2.classList.remove('modalActive')
})


modalInfo.addEventListener('click',() =>{
    cerrarInfo.click();
})

modalInfo.addEventListener('click', (e) =>{
    e.stopPropagation();
})

modalContenedor2.addEventListener('click',() =>{
    cerrarInfo.click();
}) 