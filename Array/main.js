const charactersOfLordOfTheRings = [
  "Gandalf",
  "\nRadagast",
  "\nSaruman",
  "\nFrodo",
  "\nGaladriel",
  "\nBilbo",
  "\nGimli",
  "\nElrond",
  "\nPeregrin",
  "\nLegolas",
]

charactersOfLordOfTheRings.push("\nBoromir")
window.alert(charactersOfLordOfTheRings)

const hobbits = charactersOfLordOfTheRings.slice(0,3)
window.alert(hobbits)

const index = hobbits.indexOf("Radagast")
console.log(index)

