function addPlayer(){
  const position = document.getElementById('position').value 
  const nameOfPlayer = document.getElementById("nameOfPlayer").value
  const number = document.getElementById("number").value

  const confirmation = confirm(
    "Escalar" + " " + nameOfPlayer + " " + "como" +  " "  + position + "?"
  )

  if(confirmation){
    const teamList = document.getElementById('teamList')
    const playerItem = document.createElement('li')
    playerItem.id = 'player-' + number 
    playerItem.innerText = position + ":" + " " + nameOfPlayer + "(" + number + ")"
    teamList.appendChild(playerItem)

    document.getElementById('position').value = ''
    document.getElementById("nameOfPlayer").value = ""
    document.getElementById('number').value = ''
  }
}

function removePlayer(){
  const number = document.getElementById('numberToRemove').value 
  const playerToRemove = document.getElementById('player-'+ number)

  const confirmation = confirm('Remover o jogador' + " " + playerToRemove.innerText + "?")

  if(confirmation){
    document.getElementById('teamList').removeChild(playerToRemove)
    document.getElementById('numberToRemove').value = ''
  }
}