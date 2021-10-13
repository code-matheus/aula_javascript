function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>obrigado por clicar !</b>";

    //console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("https://pt.wikipedia.org/wiki/Modelo_de_Objeto_de_Documentos");
    //window.location.href = "https://pt.wikipedia.org/wiki/Modelo_de_Objeto_de_Documentos";

}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
    //alert("trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse aqui!";
}
function voltar (elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
    elemento.innerHTML = "Passe o mouse aqui !";
}
function load(){
    alert("pagina carregada");
}
function funcaoChange(elemento){
    console.log(elemento.value)
}


/*function soma(n1, n2){
return n1 + n2;

}
var validar = 0;
function validaIdade(idade){
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade ? ");
validaIdade(idade)
console.log(validar);
*/

/*var d = new Date();
alert(d.getMinutes());
alert(d.getDay());
alert(d.getHours());*/





/*var count;
for(count = 0; count <= 5; count++){
    alert(count);
};*/




/*var count = 0;
while (count <= 5 ){
    console.log(count);
    alert(count);
    count = count + 1;
};*/



/*var idade = prompt("Qual sua idade ?");
if (idade >= 18){
    alert("maior de idade")
}else{
    alert("menor de idade")
};*/

/*var frutas = [{nome :"maça" , cor:"vermelha"} , {nome:"uva" , cor:"roxa"}]
console.log(frutas);
alert(frutas[1].cor);*/



/*var nome = "Matheus Santos";
var n1 = 5; 
var n2 = 3;
var frase =  "Japão é o melhor time do mundo";
alert(nome + " tem " + idade + " anos!");
alert(idade + idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.replace("Japão" , "Brasil"));
console.log(frase.toLowerCase());
console.log(frase.toUpperCase());
alert(frase.replace("Japão" , "Brasil"));*/




//var lista = ["maça" , "pera" , "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista.reverse());
//console.log(lista[0]);
//console.log(lista.toString() [0]);
//console.log(lista.join(" | "))






/*var fruta = {nome :"maça" , cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);*/

