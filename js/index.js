var nome = "Rodrigo Pacheco"
var cargo = "Estudante"

var nomehtml = document.getElementById("nome-no-html");
var cargohtml = document.getElementById("cargo-no-html");
var texto1 = document.getElementById("texto1")
var texto2 = document.getElementById("texto2")

function colocarNomenoHtml(nome) {
    nomehtml.innerHTML = nome
}

function colocarcargonohtml(cargo) {
    cargohtml.innerHTML = cargo;
}

function logarnome() {
    console.log(nome)
}

function clicknoprojetos() {
    consele.log("clicou no botão projetos");
    texto2.style.display = "block";
    texto1.style.display = "none";
}

function clicknosobre() {
    consele.log("clicou no botão sobre");
    texto1.style.display = "block";
    texto2.style.display = "none";
}

colocarNomenoHtml(nome);
colocarcargonohtml(cargo);