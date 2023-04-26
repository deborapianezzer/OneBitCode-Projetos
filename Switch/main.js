const numericalValue = prompt(
  "Insira um valor em metros que deseja realizar a conversão:"
)
const unitOfMeasurement = prompt(
  "Digite qual a unidade de medida que realizar a conversão: \na) dm \nb) cm \nc) mm \nd) dam \ne) hm \nf) km"
)

switch (unitOfMeasurement) {
  case "a":
    alert(
      "Resultado:\n" +
        numericalValue +
        "m" +
        " " +
        "é igual a" +
        " " +
        numericalValue * 10 +
        "dm."
    )
    break
  case "b":
    alert(
      "Resultado:\n" +
        numericalValue +
        "m" +
        " " +
        "é igual a" +
        " " +
        numericalValue * 100 +
        "cm."
    )
    break
  case "c":
    alert(
      "Resultado:\n" +
        numericalValue +
        "m" +
        " " +
        "é igual a" +
        " " +
        numericalValue * 1000 +
        "mm."
    )
    break
  case "d":
    alert(
      "Resultado:\n" +
        numericalValue +
        "m" +
        " " +
        "é igual a" +
        " " +
        numericalValue / 10 +
        "dam."
    )
    break
  case "e":
    alert(
      "Resultado:\n" +
        numericalValue +
        "m" +
        " " +
        "é igual a" +
        " " +
        numericalValue / 100 +
        "hm."
    )
    break
  case "f":
    alert(
      "Resultado:\n" +
        numericalValue +
        "m" +
        " " +
        "é igual a" +
        " " +
        numericalValue / 1000 +
        "Km."
    )
  default:
    alert("Opção inválida!")
}
