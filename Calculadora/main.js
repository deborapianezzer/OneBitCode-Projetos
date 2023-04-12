const enter1 = window.prompt("Insira o primeiro valor:")
const enter2 = window.prompt("Insira o segundo valor:")

const x = parseFloat(enter1)
const y = parseFloat(enter2)

const sum = x + y
const subtraction = x - y
const multiplication = x * y
const division = x / y

alert (
  "Resultado:\n" +
  "\nSoma:" + sum +
  "\nSubtração:" + subtraction +
  "\nMultiplicação:" + multiplication +
  "\nDivisão:" + division 
)