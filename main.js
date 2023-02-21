const tributeChest = []
const payTribute = (tributeId, tributeDescription, queenId)=> {
  const tribute = {
    id:tributeId,
    description: tributeDescription,
    queenId: queenId

  }
  tributeChest.push(tribute)
}
 
const queens = []
const createQueen = (queenId, queenName) => {
    const queenObject = {
        id: queenId,
        name: queenName}


    queens.push(queenObject) 
}

createQueen( 1, "Athena Perez")
createQueen(2, "Charisse Ford")
createQueen(3,"Jenna Solis")
createQueen(4, "Amanda Wright")
createQueen(5,"Trish Moore")  
createQueen(6,"Elizabeth Slamick")
createQueen(7,"Ramona")
createQueen(8,"Monica Dinglehopper")

const hailTheQueen = (nameString) => {
return `Hail Her Majesty, ${nameString}.`
}
for (const queenObject of queens){
  const hailMessage = hailTheQueen(queenObject.name)
  console.log(hailMessage)
}

payTribute (1, "Goblet", 2)
payTribute (2, "Barrel of whiskey", 1)
payTribute (3, "Emerald Ring", 3)
payTribute (4, "Jewelry Box", 4)
//iterate the queen objests to show tribute for each one
for (const queen of queens) {
  // each queen will look through chest to see what item is hers
  for (const tribute of tributeChest){
    if (tribute.queenId === queen.id){
      console.log (`${queen.name} has tribute ${tribute.description}`)// watch and make sure you have the . here bc when you start typing it wants to autofinish these as variable names. 
    }
  }
}


