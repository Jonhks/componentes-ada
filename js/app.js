// const boton = document.getElementById('boton');
// const content = document.getElementById('content');

// boton.addEventListener('click', ()=> {
//   boton.classList.toggle('acordeon-boton--active');
//   if(boton.classList.contains('acordeon-boton--active')){
//     content.style.maxHeight = '150px'
//   } else {
//     content.style.maxHeight = '0'
//   }
// })


/* ----------------------------- Toggle ----------------------------- */

// const checkbox = document.getElementById('checkbox');

// checkbox.addEventListener('change', () => {
//   document.body.classList.toggle('dark')
// })


/* ----------------------------- Modal ----------------------------- */

// const cerrar = document.getElementById('close');
// const abrir = document.getElementById('cta');
// const modal = document.getElementById('modal');
// const modalContainer = document.getElementById('modal-container');

// abrir.addEventListener('click', (e) => {
//   e.preventDefault();
//   modalContainer.style.opacity = '1';
//   modalContainer.style.visibility = 'visible';
//   modal.classList.toggle('modal-close');
// })

// cerrar.addEventListener('click', () =>{
//   modal.classList.toggle('modal-close');
//   setTimeout(()=>{
//     modalContainer.style.opacity = '0';
//     modalContainer.style.visibility = 'hidden';
//   },600)
// })

// window.addEventListener('click', e => {
//   // console.log(e.target.id)
//   if(e.target === modalContainer){
//     modal.classList.toggle('modal-close');
//     setTimeout(()=>{
//       modalContainer.style.opacity = '0';
//       modalContainer.style.visibility = 'hidden';
//     },600)
//   }
// })


/* ----------------------------- Ejercicio Scroll ----------------------------- */
// scroll
// Crear un documento html con un body de 2000px de alto. Cuando se scrollea el body, cambiar el color de fondo cada 500px, por ejemplo:

// Scroll	Color de fondo
// 0px - 500px	red
// 501px - 1000px	green
// 1001px - 1500px	blue
// 1501px - 2000px	orange

window.addEventListener('scroll', ()=>{
  const tamañoPantalla = document.body.scrollHeight;
  const tamanoScroll = 369;
  const positionY = window.scrollY;
  const coordenada = positionY + tamanoScroll;
  console.log(tamañoPantalla)
  if(coordenada <= 500){
    document.body.style.backgroundColor = 'red'
  } else if(coordenada >= 501 && coordenada <= 1000){
    document.body.style.backgroundColor = 'green'
  } else if(coordenada >= 1001 && coordenada <= 1500){
    document.body.style.backgroundColor = 'blue'
  } else if(coordenada >= 1501){
    document.body.style.backgroundColor = 'orange'
  }
})