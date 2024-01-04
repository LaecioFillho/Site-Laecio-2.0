const btnMenu =  document.querySelector('.img-icone-menu')
const menuG = document.querySelector('.menu')

btnMenu.addEventListener('click', function(){

    if (menuG.style.display === 'none') {
        menuG.style.display = 'block'
    } else {
        menuG.style.display = 'none'
    }
})