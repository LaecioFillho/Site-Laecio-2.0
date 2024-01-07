const btnMenu =  document.querySelector('.img-icone-menu')
const menuG = document.querySelector('.menu')

btnMenu.addEventListener('click', function(){

    if (menuG.style.top === '-40%') {
        menuG.style.top = '13%'
    } else {
        menuG.style.top = '-40%'
    }
})