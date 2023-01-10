const cardRegistro = document.querySelector('.registro')
const cardLogin = document.querySelector('.card')

document.querySelector('#registrar').addEventListener('click', () => {
    if(cardRegistro.classList.contains('off')){
        cardRegistro.classList.remove('off')
        cardRegistro.classList.add('on')
        cardLogin.classList.add('off')
    }
})

document.querySelector('.btn-cadastro_header').addEventListener('click', () => {
    if(cardRegistro.classList.contains('on')){
        cardRegistro.classList.remove('on')
        cardRegistro.classList.add('off')
        cardLogin.classList.add('on')
    }
})