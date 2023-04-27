const nameOfTourist = prompt("Insira seu nome:")
let city = ""
let score = 0

let questionOfTrip = prompt("Você já viajou para alguma cidade?\n(Responda Sim ou Não.")

while ( questionOfTrip === "Sim"){
  let cityOfVisit = prompt("Qual foi a cidade visitada?")
  city += "-" + cityOfVisit + "\n"
  score ++ 
  questionOfTrip = prompt("Você visitou alguma outra cidade?")
}

alert(
  "Turista:" + " " + nameOfTourist +
  "\nQuantidade de cidades visitadas:" + " " + score +
  "\nCidades visitadas:\n" + city
)