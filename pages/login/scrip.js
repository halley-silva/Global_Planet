const inputgmail = document.getElementById("input_gmail");
const inputsenha = document.getElementById("input_senha");

function login(eventrec) {
     
    event.preventDefault(eventrec) // form não reniciar a tela
    // Criar as variaveis que vão receber os valores
    const valorgmail = inputgmail.value;
    const valorsenha = inputsenha.value;

    // Criar as varivaies para armezar o valor original (BOA PRATICA)
    const GMAIL_VALIDO = "admin@admin.com";
    const SENHA_VALIDA = "0153";

    if(valorgmail === GMAIL_VALIDO && valorsenha == SENHA_VALIDA) {
        window.location.href = "../../index.html"
        

    } else {
        
        alert("invalido")

    };
   
}

