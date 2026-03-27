//botao do Ver mais

const verMais = document.getElementById("verMais")

//pega os dois dialogs
const sexoDialog = document.getElementById("sexoDialog")
const tipoDialog = document.getElementById("tipoDialog")

//botoes de dialog sexo
const btnSexoMasculino = document.getElementById("btnSexoMasculino")
const btnSexoFeminino = document.getElementById("btnSexoFeminino")
const btnCancelarSexo = document.getElementById("btnCancelarSexo")

//botoes de dialog tipo
const btnTipoOfical = document.getElementById("btnTipoOficial")
const btnTipoSoldado = document.getElementById("btnTipoSoldado")
const btnCancelarTipo = document.getElementById("btnCancelarTipo")

//variavel que guarda escolha do sexo
let sexoSelecionado = null; // "M" | "F"

//evento de clicar no Ver mais e abre o pop de escolha sexo
verMais.addEventListener("click", (e) => {
    e.preventDefault()
    sexoDialog.showModal() // aqui ele chama o pop up de escolha de sexo
})

//apos o escolha sexo ele abre o pop up do tipo
//btn masculino
btnMasculino.addEventListener("click", () => {
    sexoSelecionado = "M"
    sexoDialog.close()
    tipoDialog.showModal()
})

//btn feminino
btnFeminino.addEventListener("click", () => {
    sexoSelecionado = "F"
    sexoDialog.close()
    tipoDialog.showModal()
})

btnCancelarSexo.addEventListener("click", () => {
    sexoDialog.close()
})

btnCancelarTipo.addEventListener("click", () => {
    tipoDialog.close()
})

//btn feminino
btnTipoSoldado.addEventListener("click", () => {
    sexoSelecionado = "F"
    sexoDialog.close()
    tipoDialog.showModal()
})

//escolha to tipo

btnTipoOfical.addEventListener("click", () => {
    window.location.href = "taf-m-oficial.html"; //manda para pagina de tipo oficial
})

btnTipoSoldado.addEventListener("click", () => {
    window.location.href = "taf-m-soldado.html";
})

