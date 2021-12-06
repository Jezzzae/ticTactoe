// console.log("i'm working");
const squareElements = document.querySelectorAll(".square");
console.log("squareElements: ", squareElements);

//global variable
const player_x = "X";
const player_o = "O";

function isGameOver(currentBoard){
for(var i =0; i<9; i++){
    if(currentBoard[i].player===null){
        return false
    }
}
return true;
}

let currentPlayer = player_x;

//array of state of board
//array to keep track of board -storing state of board in memory
//this array should have nine elements refrencing a specific square 
 let currentBoard = [
    {cell:0, player:null},
    {cell:1, player:null},
    {cell:2, player:null},
    {cell:3, player:null},
    {cell:4, player:null},
    {cell:5, player:null},
    {cell:6, player:null},
    {cell:7, player:null},
    {cell:8, player:null},

];

 

//adding event listners to squares
Array.from(squareElements).forEach((square, index)=>{
    square.addEventListener("click", ()=>{
        console.log("clicked");

       if (!square[index]){ //if nothing is in square index then in that square index add input for current player
        square[index] = currentPlayer;
        console.log(index);

        square.textContent = currentPlayer;
         currentPlayer = currentPlayer === player_x ? player_o : player_x;//flipping turns
          currentBoard[index].player = currentPlayer === player_x ? player_o : player_x; //reuse same code from line above to set current player into the currentboard array
          console.log(currentBoard);
        }  

          let o_Array = [];
          let x_Array = [];
               const firstCombo = [0,1,2];
               const secondCombo = [3,4,5];
               const thirdCombo = [6,7,8];
               const fourthCombo = [0,3,6];
               const fithCombo = [1,4,7];
               const sixthCombo = [2,5,8];
               const seventhCombo = [0,4,8];
               const eigthCombo = [2,4,6];

            let allCombos=[
                [0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6]
            ];
         
            function xWins(allCombos, x_Array){
                for(let i = 0; i<allCombos.length; i++){
                    if( allCombos[i].every((current)=> x_Array.includes(current))){
                        return true
                    }
                }
                return false

            }

            function oWins(allCombos, o_Array){
                for(let i = 0; i<allCombos.length; i++){
                    if( allCombos[i].every((current)=> o_Array.includes(current))){
                        return true 
                    }
                }
                return false

            }


        //loop currentBoard thru the 8 winning conditions and if one hits return true
        currentBoard.forEach((square)=>{
            if (square.player == "O"){ //if it says "o" then push it to o array 
                o_Array.push(square.cell);
            }
            if(square.player == "X"){ //if it says "x" then push it to x array 
                x_Array.push(square.cell);
            }
        });

        console.log("o_Array: ", o_Array);
        console.log("x_Array: ", x_Array);

        if(  oWins(allCombos, o_Array) ) {
        
            window.alert("o is the winner");
            }

            else if ( xWins(allCombos, x_Array) )
            {
                 window.alert("x is the winner ");
             }

         else if( isGameOver(currentBoard))
        {
             
            window.alert("Draw")    
          }
      
})

})