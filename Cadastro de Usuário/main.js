const firstName = window.prompt("Digite seu primeiro nome:")
const surname = window.prompt("Digite seu último nome:")
const fieldOfStudy = window.prompt("Digite seu campo de estudo:")
const yearOfBirth = window.prompt("Digite seu ano de nascimento:")

alert (
  "RECRUTA CADASTRADO COM SUCESSO!!\n" +
  "\nNome Completo:" + " " + firstName + " " + surname +
  "\nCampo de Estudo:" + " " + fieldOfStudy +
  "\nIdade:" + " " + (2023 - yearOfBirth)
)
