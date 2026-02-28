// Criar as variaveis que vão receber os valores dos "inputs".
let input_gmail = document.getElementById("input_gmail");
let input_senha = document.getElementById("input_senha");

// Dar um nome para a função para chamar ela
function verificar_login() {

    // Value para pegar somente o valor
    if(input_gmail.value === "admin" && input_senha.value === "1234") { // Usar sempre === por questão de segurança.
        alert("Entrando");
        // Quando o usuario acertar o login ele ira para a pagina principal do cite.
        window.location.href = "../../index.html"

    } else {
        
        alert("Login e senha Invalidos")

        // Quando a estrutura do else for executada
        // Ele irá pegar o elemento do classe
        document.getElementById("texto_erro").style.display = "block";
    }
}

