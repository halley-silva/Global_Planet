// Criar os objeto que vão conter as infrmações
const planetas = [
    {
        imagen: "../../assets/marte.jpg",
        nome: "MARTE",
        dinheiro: 6000,
        pessoas: 100,
        tipo: "ROCHOSSO",
        informções: "DISTÂNCIA DO SOL: ~228 milhões km<br>Temperatura média: −63 °C"
        
    },
    {
        imagen: "../../assets/Jupiter.png",
        nome: "JUPITER",
        dinheiro: 3000,
        pessoas: 200,
        tipo: "GASOSO",
        informções: "DISTÂNCIA DO SOL: ~778 milhões km<br>Temperatura média: −110 °C"
    },
    {
        imagen: "../../assets/urano.png",
        nome: "URANO",
        dinheiro: 4000,
        pessoas: 400,
        tipo: "GASOSO",
        informções: "DISTÂNCIA DO SOL: ~2,87 bilhões km<br>Temperatura média: −224 °C"

    }

]
// Puchar o card em que os elementos vão ficar
const pai_dos_cards = document.getElementById("card_maximo")

// Percorrer cada objeto
planetas.forEach(planetas => {

    // Criar um div 
    const card = document.createElement("div");

    // Adiconar uma lista no card
    card.classList.add("card-glow");

    // Adiconar
    card.innerHTML = `
               <a href="../Detalhes/index.html" class="card">

                    <div class="imagen" style="background-image: url('${planetas.imagen}')"> 


                    </div>

                    <div class="conteudo">
                        <div class="h2">
                            <h2 class="nome-dos-planetas-marte" style= "">${planetas.nome}</h2>
                        </div>

                        <div class="paragrafos">
                            <div class="dinheiro">
                                <img src="../../assets/moedas.png" width="30px">
                                <h2>${planetas.dinheiro}</h2>
                            </div>

                            <div class="pessoas">
                                <img src="../../assets/pessoas.png" width="30px">
                                <h2>${planetas.pessoas}</h2>
                            </div>

                            <div class="tipo">
                                <img src="../../assets/rocha.png" width="30px">
                                <h2>${planetas.tipo}</h2>
                            </div>

                            <p>${planetas.informções}</p>
                        </div>

                    </div>

                </a>
    `
    // Aplicar
    pai_dos_cards.appendChild(card);

});