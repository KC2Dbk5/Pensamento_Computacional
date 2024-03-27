//window.alert ('Meu primeiro texto')
//window.confirm ('Confirme clicando em OK')
//var nome = window.prompt("Escreva o seu nome")
//window.alert ("É um prazer te conhecer " + nome) // + é concatenação pois por padrão é sempre string

var nome = window.prompt ('Qual é o seu nome?')
var ciclo1 = Number.parseInt (window.prompt ('Digite sua nota do ciclo 1'))
var ciclo2 = Number.parseInt (window.prompt ('Digite sua nota do ciclo 2'))
var ciclo3 = Number.parseInt (window.prompt ('Digite sua nota do ciclo 3'))
var media = (ciclo1 + ciclo2 + ciclo3) /3
var aprovado = media>60
window.alert (`Olá ${nome} Sua média é ${media}`)
if (media > 59){
    window.alert("Você foi aprovado!")
}
else {
    window.alert("Você foi reprovado")
}

