function validaCPF(cpf) {
    var Soma = 0
    var Resto

    var strCPF = String(cpf).replace(/[^\d]/g, '')

    if (strCPF.length !== 11)
        return false

    if ([
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999',
    ].indexOf(strCPF) !== -1)
        return false

    for (i = 1; i <= 9; i++)
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);

    Resto = (Soma * 10) % 11

    if ((Resto == 10) || (Resto == 11))
        Resto = 0

    if (Resto != parseInt(strCPF.substring(9, 10)))
        return false

    Soma = 0

    for (i = 1; i <= 10; i++)
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i)

    Resto = (Soma * 10) % 11

    if ((Resto == 10) || (Resto == 11))
        Resto = 0

    if (Resto != parseInt(strCPF.substring(10, 11)))
        return false

    return true
};




// Função para verificar campos.

function verificarcampos(eventrec) {
    event.preventDefault(eventrec)

    const inputnome = document.getElementById("input_nome").value;

    const inputcpf = document.getElementById("input_CPF").value;

    const inputgmail = document.getElementById("input_gmail").value;

    const inputendereco = document.getElementById("input_endereco").value;

    const inputnumero = document.getElementById("input_telefone").value;

    const inputsenha = document.getElementById("input_senha").value;

    const inputconfirmar = document.getElementById("input_confirmarSenha").value;


    /// Nome /////////////////////////////////////////////
    const erronome = document.getElementById("erro_name"); // Pegar o span quer eu criei
    const cor_borda_nome = document.getElementById("input_nome"); // Pegar apenas o input não o valor


    if (!inputnome || inputnome.length < 3) {
        erronome.style.display = "flex" // Entrar no span ir no css e muldar o display

        cor_borda_nome.style.border = "1px solid red" // Entrar no input ir no css e aplicar na borda

    } else {
        // Devolver as propriedades padrão
        erronome.style.display = "none"

        cor_borda_nome.style.border = "solid 1px rgba(175, 175, 175, 0)"
    }

    ////// CPF //////////////////////////////////////////////
    const errocpf = document.getElementById("erro_cpf");
    const cor_borda_cpf = document.getElementById("input_CPF");

    if (!validaCPF(inputcpf)) {
        errocpf.style.display = "flex"
        cor_borda_cpf.style.border = "1px solid red"

    } else {
        errocpf.style.display = "none"
        cor_borda_cpf.style.border = "solid 1px rgba(175, 175, 175, 0)"
    }

    ////// Gmail /////////////////////////////////////////////
    const errogmail = document.getElementById("erro_gmail");
    const cor_borda_gmail = document.getElementById("input_gmail")

    if (!inputgmail || inputgmail.length < 6) {
        errogmail.style.display = "flex"
        cor_borda_gmail.style.border = "1px solid red"

    } else {
        errogmail.style.display = "none"
        cor_borda_gmail.style.border = "solid 1px rgba(175, 175, 175, 0)"
    }

    /////// Endereço ////////////////////////////////////////
    const erroendereco = document.getElementById("erro_endereco");
    const cor_borda_endereco = document.getElementById("input_endereco")

    if (!inputendereco || inputendereco.length < 10) {
        erroendereco.style.display = "flex"
        cor_borda_endereco.style.border = "1px solid red"

    } else {
        erroendereco.style.display = "none"
        cor_borda_endereco.style.border = "solid 1px rgba(175, 175, 175, 0)"
    }

    ///////// Número //////////////////////////////////////////  
    const erronumero = document.getElementById("erro_telefone");
    const cor_borda_telefone = document.getElementById("input_telefone")

    if (!inputnumero || inputnumero.length < 9) {  // .length para ler o coprimento
        erronumero.style.display = "flex"
        cor_borda_telefone.style.border = "1px solid red"

    } else {
        erronumero.style.display = "none"
        cor_borda_telefone.style.border = "solid 1px rgba(175, 175, 175, 0)"
    }

    /////////// Senha //////////////////////////////////////
    const errosenha = document.getElementById("erro_senha")
    const cor_borda_senha = document.getElementById("input_senha")

    if (!inputsenha || inputsenha.length < 8) {
        errosenha.style.display = "flex"
        cor_borda_senha.style.border = "1px solid red"

    } else {
        errosenha.style.display = "none"
        cor_borda_senha.style.border = "solid 1px rgba(175, 175, 175, 0)"
    }

    //////////// Confirmar senha ///////////////////////////
    const erroconfirmar = document.getElementById("erro_confirmar_senha");
    const cor_borda_confirmar = document.getElementById("input_confirmarSenha")

    if (inputconfirmar !== inputsenha) {
        erroconfirmar.style.display = "flex"
        cor_borda_confirmar.style.border = "1px solid red"

    } else {
        erroconfirmar.style.dysplay = "none"
        cor_borda_confirmar.style.border = "solid 1px rgba(175, 175, 175, 0)"
    }







}