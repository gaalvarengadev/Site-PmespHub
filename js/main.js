//botao do Ver mais

const verMais = document.getElementById("verMais")

//pega os dois dialogs
const sexoDialog = document.getElementById("sexoDialog")
const tipoDialog = document.getElementById("tipoDialog")

//botoes de dialog sexo
const btnMasculino = document.getElementById("btnMasculino")
const btnFeminino = document.getElementById("btnFeminino")
const btnCancelarSexo = document.getElementById("btnCancelarSexo")

//botoes de dialog tipo
const btnTipoOficial = document.getElementById("btnTipoOficial")
const btnTipoSoldado = document.getElementById("btnTipoSoldado")
const btnCancelarTipo = document.getElementById("btnCancelarTipo")

//variavel que guarda escolha do sexo
let sexoSelecionado = null; // "M" | "F"

//evento de clicar no Ver mais e abre o pop de escolha sexo
if (verMais) {
    verMais.addEventListener("click", (e) => {
        e.preventDefault()
        sexoDialog.showModal() // aqui ele chama o pop up de escolha de sexo
    })
}

//apos o escolha sexo ele abre o pop up do tipo
//btn masculino
if (btnMasculino) {
    btnMasculino.addEventListener("click", () => {
        sexoSelecionado = "M"
        sexoDialog.close()
        tipoDialog.showModal()
    })
}

//btn feminino
if (btnFeminino) {
    btnFeminino.addEventListener("click", () => {
        sexoSelecionado = "F"
        sexoDialog.close()
        tipoDialog.showModal()
    })
}

if (btnCancelarSexo) {
    btnCancelarSexo.addEventListener("click", () => {
        sexoDialog.close()
    })
}

if (btnCancelarTipo) {
    btnCancelarTipo.addEventListener("click", () => {
        tipoDialog.close()
    })
}

//escolha do tipo
if (btnTipoOficial) {
    btnTipoOficial.addEventListener("click", () => {
        window.location.href = "/pages/taf-m-oficial.html"; //manda para pagina de tipo oficial
    })
}

if (btnTipoSoldado) {
    btnTipoSoldado.addEventListener("click", () => {
        window.location.href = "/pages/taf-m-soldado.html";
    })
}
