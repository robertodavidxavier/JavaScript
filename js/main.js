function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Foi boa!</b>";
}
function redirecionar() {
    window.open("https://github.com/robertodavidxavier");
    //window.location.href = "https://github.com/robertodavidxavier";
}
function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";   
}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}
function load() {
    alert("Página carregada!");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}

/*
var validar = 0;
function validaIdade(idade){
    
    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}
var idade = prompt("Qual a sua idade?")
validaIdade(idade);
console.log(validar);
*/

/*
function soma(n1, n2) {
    return n1 + n2;
}
alert(soma(5, 10));
*/

/*
var d = new Date();
alert(d.getMonth()+1);
alert(d.getMinutes());
alert(d.getFullYear());
*/

/*
var count;
for(count = 0; count <= 5; count++){
    alert(count);
}
*/

/*
var count = 0;
while(count <= 5){
    console.log(count);
    alert(count);
    count++;
}
*/

/*
var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert(idade + " anos, maior de idade.");
}else{
    alert(idade + " anos, menor de idade.");
}
*/

/*
var fruta = [{nome:"caju", cor:"amarela"}, {nome: "acerola", cor: "vermelha"}];
console.log(fruta);
alert(fruta[1].nome);
*/

/*
var nome = "Roberto David Xavier";
var n1 = 5;
var n2 = 3;
var frase = "Nigéria é melhor time do mundo!"
console.log(nome);
console.log(n1 * n2);
console.log(frase);
console.log(frase.replace("Nigéria", "Camarões"));
alert(frase.toUpperCase("Nigéria", "Congo"));
*/

/*
var lista = ["maracujá", "acerola", "abacaxi"];
lista.pop();
lista.push("graviola");
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" | "));
*/