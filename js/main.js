const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar")
const braco = document.querySelector("#braco")



// tipo objeto
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}


// eu busco pelo data-atribute la no HTML
// o data-atribute vai ter o valor q eu colocar la
// Assim a variavel controle vai receber o que o queryAll buscou la no HTML, ele vai buscar TUDDO ( all) q tiver data-controle
const controle = document.querySelectorAll("[data-controle]")
console.log(controle)

const estatistica = document.querySelectorAll("[data-estatistica]")
// console.log(estatistica)


controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {



        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca)


        // console.log("conteudo textContent: ", evento.target.textContent)
        // console.log("conteudo dataset: ", evento.target.dataset.controle)
        // console.log("pai do conteudo: ", evento.target.parentNode)
        // console.log("qual peca eu cliquei: ",evento.target.dataset.peca)
        // console.log("evento do click: ", evento)

    })
})
// manipulaDados(evento.target.textContent,evento.target.parentNode)
// aqui nao precisamos mais do TextContent, pq ja vamos receber o valor do data-controle ( data atribute) que ja vai vir com o valor q eu quero


function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")
    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
        // console.log("menos 1")
    } else {
        peca.value = parseInt(peca.value) + 1
        // console.log("somou mais 1")
    }
}

// pecas e o objeto
// peca vem la do dataset.peca que busca no html o attibute data-peca
function atualizaEstatisticas(peca) {
    // console.log(" qual e a paca q cliquei:",peca)
    // console.log("Array do Object pecas ",pecas[peca])
    
    estatistica.forEach((elemento) => {
        

       elemento.textContent = parseInt(elemento.textContent)+ pecas[peca][elemento.dataset.estatistica]

        console.log(estatistica)
        console.log("estatis",elemento.dataset.estatistica)
        console.log("elemento ",elemento.textContent)
    });
}


