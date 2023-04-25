const nameCarOne =  window.prompt("Insira o nome do primeiro carro:")
const speedCarOne = window.prompt("Insira a velocidade do primeiro carro:")

const nameCarTwo = window.prompt("Insira o nome do segundo carro:")
const speedCarTwo = window.prompt("Insira a velocidade do segundo carro:")

if(speedCarOne > speedCarTwo){
  alert(nameCarOne + " " + "é mais rápido do que o" + " " + nameCarTwo)
} else if(speedCarOne == speedCarTwo){
  alert(nameCarOne + " " + "e" + " " + nameCarTwo + " " + "possuem velocidades iguais")
} else {
  alert(nameCarTwo + " " + "é mais rápido do que o" + " " + nameCarOne)
}








