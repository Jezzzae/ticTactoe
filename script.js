console.log("i'm working");
const squareElements = document.querySelectorAll(".square");
console.log("squareElements: ", squareElements);

//global variable
const player_x = "X";
const player_o = "O";

let currentPlayer = player_x;

let squareLocations = [
    {index: 0, user: null},
    {index: 1, user: null},
    {index: 2, user: null},
    {index: 3, user: null},
    {index: 4, user: null},
    {index: 5, user: null},
    {index: 6, user: null},
    {index: 7, user: null},
    {index: 8, user: null},

]
//adding event listners to squares
Array.from(squareElements).forEach((square, index)=>{
    square.addEventListener("click", ()=>{
        console.log("clicked");
       if (!square[index]){
        square[index] = currentPlayer;
        console.log(index);
        square.textContent = currentPlayer;
         currentPlayer = currentPlayer === player_x ? player_o : player_x;
       }
        
              
})

})