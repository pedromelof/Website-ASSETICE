// Scroll suave
$("#nav a, #voltartopo").on("click", function (event) {
    if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $("html, body").animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            1500
        );
    }
});

// Mensagem ao clicar no botão "Entrar"

const botao = document.getElementById("btn-entrar")

botao.addEventListener('click', msg)

function msg() {
    alert("Necessita de um banco de dados.")
    return
}

// Mostrar e ocultar senha

const password = document.getElementById("senha")
const showPassword = document.getElementById("mostrar-senha")
const hidePassword = document.getElementById("ocultar-senha")

function Show() {
    hidePassword.style.opacity = "0%"
    hidePassword.style.zIndex = "0"
    showPassword.style.zIndex = "1"
    showPassword.style.opacity = "100%"
    password.setAttribute('type', 'text')
}

function Hide() {
    hidePassword.style.opacity = "100%"
    hidePassword.style.zIndex = "1"
    showPassword.style.zIndex = "0"
    showPassword.style.opacity = "0%"
    password.setAttribute('type', 'password')
}