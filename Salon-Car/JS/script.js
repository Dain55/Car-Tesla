let img = document.querySelector('.salon-car')
let btns = document.querySelectorAll('[data-color]')

let img_salon = {
    Black: './IMG/image 10.svg',
    White: './IMG/image 9.svg',
    Almound: './IMG/image 8.svg'
}
btns.forEach(btn => {
    btn.onclick = () => { 
     let key = btn.getAttribute('data-color')
     img.src = img_salon[key]
     }
 })