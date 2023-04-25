/*const idade = window.prompt("Informe sua idade:")

if (idade >= 18) {
  console.log("Você é maior de idade.")
} else {
  console.log ("Você é menor de idade.")
}*/

const noteOne = window.prompt("Insira sua primeira nota:")
const noteTwo = window.prompt("Insira sua segunda nota:")

const x = parseFloat(noteOne)
const y = parseFloat(noteTwo)

if ((x + y) / 2 >= 7) {
  alert("APROVADO")
} else {
  alert("REPROVADO")
}
