const numberForMultiplication = prompt(
  "Olá, sou o Robô da Tabuáda!\n" +
    "Insira um número para que seja calculado sua tabuada."
)

let result = " "

for (let factor = 1; factor <= 20; factor++) {
  result +=
    "->" +
    factor +
    "*" +
    numberForMultiplication +
    "=" +
    factor * numberForMultiplication +
    "\n"
}

alert("Resultado da tabuada do" + numberForMultiplication + ":\n\n" + result)
