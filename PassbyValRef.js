//Pass by value
var orig_winner="harry potter"

function changeWinner(winner){
    winner="Draco malfoy"
}

console.log("The winner was "+orig_winner)
changeWinner(orig_winner)
console.log("Now the winner is "+orig_winner)

//pass by reference(psuedo)
var orig_winner=["harry potter","hermoine",'ron']

function changeWinner(winner){
    winner[0]="Draco malfoy"
    winner[1]="Pansey"
    winner[2]="Mohit"
}

console.log("The winner was "+orig_winner)
changeWinner(orig_winner)
console.log("Now the winner is "+orig_winner)
