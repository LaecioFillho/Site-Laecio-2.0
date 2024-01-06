const btnMenu =  document.querySelector('.img-icone-menu')
const menuG = document.querySelector('.menu')

btnMenu.addEventListener('click', function(){

    if (menuG.style.top === '-23%') {
        menuG.style.top = '12%'
    } else {
        menuG.style.top = '-23%'
    }
})