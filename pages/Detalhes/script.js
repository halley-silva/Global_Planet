function salvar_imagen() {

    // Qunado for clicado chamar a função para muldar o nome
    let ver = false
    const salvar = document.getElementById("imagen_salvar")
    salvar.addEventListener("click", function () {

        if (ver) {
            salvar.src = "../../assets/icone_salvar_azul.png"
            ver = false
        } else {
            salvar.src = "../../assets/icone salvar sinza.png"
            ver = true
        }
        
    })
}


salvar_imagen()