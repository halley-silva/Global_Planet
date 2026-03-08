
const input_login_gmail = document.getElementById("input_gmail");
const input_login_senha = document.getElementById("input_senha");



// getIten pegar o localstorage
// .parse trasnformar em objeto


function login(eventrec) {
    event.preventDefault(eventrec)

    // Pegar os valores do elementos
    const input_login_gmail = document.getElementById("input_gmail").value;
    const input_login_senha = document.getElementById("input_senha").value;

    // Pego os dados do localStorage e armazeno em uma varivael
    const dados_usuarios = JSON.parse(localStorage.getItem("Cadastros"))

    // COmeçar o for para percorre a lista
    for (let x = 0; x < dados_usuarios.length; x = x + 1) {

        // FAzer a verificação após percorrer a lista toda
        if (input_login_gmail === dados_usuarios[x].gmail && input_login_senha === dados_usuarios[x].senha) {
            lembrar()
            window.location.href = "../../index.html"

        } else {
            const mensagem_erro = document.getElementById("texto_erro");
            mensagem_erro.style.display = "flex"
        }
    }


}




// Chamar o input chekbox
const input_clicar = document.querySelector("input[type=checkbox]")

function lembrar() {
   

    // Armezar os dados em um objeto
    const lembrar_dados = {
        gmail: input_login_gmail.value, // Pegar os valores
        senha: input_login_senha.value
    }

    if (input_clicar.checked) {
        const lembrar_dados_texto = JSON.stringify(lembrar_dados)
        localStorage.setItem("lembrar_dados", lembrar_dados_texto)

    }

}


const valor_salvo = JSON.parse(localStorage.getItem("lembrar_dados"))

if (valor_salvo && valor_salvo.gmail && valor_salvo.senha) {
    input_login_gmail.value = valor_salvo.gmail
    input_login_senha.value = valor_salvo.senha
}