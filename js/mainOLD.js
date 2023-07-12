const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar")
const braco = document.querySelector("#braco")

const controle = document.querySelectorAll(".controle-ajuste")


controle.forEach((elemento)=>{
    elemento.addEventListener("click", (evento)=> {
        console.log(evento.target.textContent)
        manipulaDados(evento.target.textContent,evento.target.parentNode)
        console.log(evento.target.parentNode)
        
    })
})



function manipulaDados(operacao,controle) {
    const peca = controle.querySelector(".controle-contador")
    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
        console.log("menos 1")
    } else {
        peca.value = parseInt(peca.value) + 1
        console.log("somou mais 1")
    }
}