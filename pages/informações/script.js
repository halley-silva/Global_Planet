// Pegar o Gmail salvo no login
const pegar_pessoa_logada = localStorage.getItem("gmail_salvo")

// Pegar todas as pessoas cadastradas
const pessoas = JSON.parse(localStorage.getItem("Cadastros"))

// Ver em qual objeto o gmail se encontra
const pessoa_salva = pessoas.find(iten => iten.gmail == pegar_pessoa_logada)

console.log(pessoa_salva)

const informações = [
    {
        nome: pessoa_salva.nome,
        cpf: pessoa_salva.CPF,
        gmail: pessoa_salva.gmail,
        numero_telefone: pessoa_salva.telefone,
        endereco: pessoa_salva.endereço,
        senha: pessoa_salva.senha

    }

]

const pai_das_infromações = document.getElementById("caixa_pai")

informações.forEach(informações => {

    const painel = document.createElement("div")

    painel.classList.add("caixa_total")

    painel.innerHTML = `
            <main class="caixa" id="caixa_total">
                <a class="mini-caixa-1">
                    <div class="nome-foto-1">
                        <img src="../../assets/icone-camera.png" width="22px">
                        <p class="letras-das-caixa">Profile photo</p>
                    </div>

                    <img src="../../assets/perfil.png" width="50px" id="imagen-rosto">
                </a>

                <div class="mini-caixa-configurações">
                    <img src="../../assets/icone-quadro.png" width="22px">
                    <div class="espaçamento-minimo">
                        <p class="letras-das-caixa">Name</p>
                        <p>${informações.nome}</p>
                    </div>
                </div>

                <div class="mini-caixa-configurações">
                    <img src="../../assets/icone-genero.png" width="22px">
                    <div class="espaçamento-minimo">
                        <p class="letras-das-caixa">CPF</p>
                        <p>${informações.cpf}</p>
                    </div>
                </div>

                <div class="mini-caixa-configurações">
                    <img src="../../assets/icone-gmail.png" width="22px">
                    <div class="espaçamento-minimo">
                        <p class="letras-das-caixa">E-mail</p>
                        <p>${informações.gmail}</p>
                    </div>
                </div>

                <div class="mini-caixa-configurações">
                    <img src="../../assets/icone-telefone.png" width="22px">
                    <div class="espaçamento-minimo">
                        <p class="letras-das-caixa">Number-Phone</p>
                        <p>${informações.numero_telefone}</p>
                    </div>
                </div>


                <div class="mini-caixa-configurações">
                    <img src="../../assets/icone-casa.png" width="22px">
                    <div class="espaçamento-minimo">
                        <p class="letras-das-caixa">Adress</p>
                        <p>${informações.endereco}</p>
                    </div>
                </div>

                <div class="mini-caixa-2">
                    <img src="../../assets/icone-senha.png" width="22px">
                    <div class="espaçamento-minimo">
                        <p class="letras-das-caixa">Passawold</p>
                        <p>${informações.senha}</p>
                    </div>

                </div>
            </main>


    `
    pai_das_infromações.appendChild(painel)



})