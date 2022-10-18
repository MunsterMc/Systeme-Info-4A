var toggle = document.getElementById('toggle')
var close = document.getElementById('close')
var menu = document.getElementById('menu')

toggle.addEventListener('click', () => {
    menu.classList.toggle('active')
})
close.addEventListener('click', ()=>{
    menu.classList.remove('active')
})