const mostrarMenu = () => {

    const menuMobile = document.getElementById("menu_mobile")

    if (menuMobile.style.display == "none") {
        menuMobile.style.display = "block"
    } else {
        menuMobile.style.display = "none"
    }
}


// Mostrar foto e nome na pagina inical PC

const pegar_informações = localStorage.getItem("gmail_salvo")

const pesquisar_conta = JSON.parse(localStorage.getItem("Cadastros")) || []

const ver_pefil_certo = pesquisar_conta.find(iten => iten.gmail == pegar_informações)

const existencia_usuario = []

if (ver_pefil_certo) {
    existencia_usuario.push({nome: ver_pefil_certo.nome})
} else {
    existencia_usuario.push({nome: "visitante"})
}

const pai = document.getElementById("cabeçalho_pai")

existencia_usuario.forEach(existencia_usuario => {
    const menu = document.createElement("div");

    menu.classList.add("menu_pc");

    menu.innerHTML = `
            <div class="menu_pc" id="menu_computador">
                <div class="links_pc">
                    <a href="pages/login/index.html" class="link_a">LOGAR</a>
                    <a href="pages/informações/index.html" class="link_a">MINHA CONTA</a>
                    <a href="pages/informações-Myplaneta/index.html" class="link_a">MEUS PLANETAS</a>
                    
                </div>

                <div class="foto_perfil">
                    <img src="assets/perfil.png" width="50px">
                    <p>Olá ${existencia_usuario.nome}</p>
                </div>

            </div>

    
    `

    pai.appendChild(menu)
})

// Mostrar foto e nome na pagina inical MOBILE
const pai_mobile = document.getElementById("pai_mobile")

existencia_usuario.forEach(existencia_usuario => {
    const menu = document.createElement("div");
    menu.classList.add("menu_mobile");

    menu.innerHTML = `
           

                <img src="assets/icone_galaxia (1).png" width="65px">

                <div id="menu_mobile">

                    <div class="conteudo_menu">
                        <div class="foto_perfil">
                            <img src="assets/perfil.png" width="50px">
                            <p>Olá ${existencia_usuario.nome}</p>
                        </div>
                        <div class="links">
                            <a class="links_menu" href="pages/informações/index.html">Pefil</a>
                            <a class="links_menu" href="pages/informações-Myplaneta/">Meus planetas</a>

                            <a class="links_menu" href="pages/Cadastrar/index.html">Cadastrar</a>
                            <a class="links_menu" href="pages/login/index.html">Login</a>
                        </div>
                    </div>

                </div>
    
    `

    pai_mobile.appendChild(menu)
})
