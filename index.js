const cardRegistro = document.querySelector('.registro')
const cardLogin = document.querySelector('.card')
const email = document.querySelector('#email-login')
const senha = document.querySelector('#senha-login')
const emailreg = document.querySelector('#email-reg')
const senhareg = document.querySelector('#senha-reg')
const nomereg = document.querySelector('#nome-reg')
const idadereg = document.querySelector('#idade-reg')
const modalError = document.querySelector('.modal-error')
const background = document.querySelector('.background-modal')
const loginVal = document.querySelector('.login-validated')
const checkbox = document.querySelector('#checkbox')

// Animação

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

// Validação login

document.querySelector('.btn-login').addEventListener('click', () => {
    if(email.value === 'silvio@gmail.com' && senha.value === 'silvio'){
        email.classList.toggle('validated')
        senha.classList.toggle('validated')
        loginVal.classList.toggle('login-on')
        background.classList.toggle('on-background')
        setTimeout(() => {
            background.classList.remove('on-background')
            loginVal.classList.remove('login-on')
        }, 2000);
    } else {
        email.classList.toggle('error')
        senha.classList.toggle('error')
        background.classList.toggle('on-background')
        modalError.classList.toggle('on-error')
        setTimeout(() => {
            background.classList.remove('on-background')
            modalError.classList.remove('on-error')
        }, 2000);
    }
})

// Validação registro

document.querySelector('.btn-cadastro').addEventListener('click', () => {
    if(senhareg.value.length == '' || idadereg.value <= 16 ){
        background.classList.toggle('on-background')
        modalError.classList.toggle('on-error')
        setTimeout(() => {
            background.classList.remove('on-background')
            modalError.classList.remove('on-error')
        }, 2000);
    } else {
        loginVal.classList.toggle('login-on')
        background.classList.toggle('on-background')
        setTimeout(() => {
            background.classList.remove('on-background')
            loginVal.classList.remove('login-on')
        }, 2000);
    }
})