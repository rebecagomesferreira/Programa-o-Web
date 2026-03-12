var area = document.getElementById('area');

function entrar() {

var nome = prompt("Digite seu nome:");

var curso = prompt("Digite seu curso:")

if (nome === '' || nome === null) {
alert("Ops, algo deu errado!");
area.innerHTML = "Clique no botão para acessar...";
} else if(curso === '' || curso === null) {
alert("Ops, algo deu errado!");
area.innerHTML = "Clique no botão para acessar...";
}else {
area.innerHTML = "Bem-vindo, " + nome + "! ";

// Cria um botão "Sair da conta"
let botaoSair = document.createElement("button");
botaoSair.innerText = "Sair da conta";
botaoSair.onclick = sair;
area.appendChild(botaoSair); // Adiciona o botão ao DOM
}

let n1 = parseFloat(prompt("Digite a primeira nota:"));
let n2 = parseFloat(prompt("Digite a segunda nota:"));
let n3 = parseFloat(prompt("Digite a terceira nota:"));

mediaTresNotas(n1, n2, n3);
}

function sair() {
alert("Até mais!");
area.innerHTML = "Você saiu!";
}

function mediaTresNotas(nota1, nota2, nota3){
    let media = (nota1 + nota2 + nota3) / 3;

    if(media >= 7){
        alert("Média = " + media + "   Aluno aprovado!");
    }else{
        alert("Média = " + media + "   Aluno reprovado!");
    }
}
