let slider_element = document.querySelector('#slider')
let button_element = document.querySelector('#button')
let size_password = document.querySelector('#valor')
let password = document.querySelector('#password')
let container_password = document.querySelector('#container_password')
let charset = 'abcdefghijklmnopqrstuvxzABCDEFGHIJKLMNOPQRSTUWVYZ0123456789'
let nova_senha = ''

size_password.innerHTML = slider_element.value

slider.oninput = function () {
    size_password.innerHTML = this.value
}

function generate_password() {
    let pass = ""
    for (let i = 0, n = charset.length; i < slider_element.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n))
    }

    container_password.classList.remove('hide')
    password.innerHTML = pass
    nova_senha = pass

}

function copy_password() {

    alert('senha copiada')
    navigator.clipboard.writeText(nova_senha)
}