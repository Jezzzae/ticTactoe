// console.log("i'm working");
const squareElements = document.querySelectorAll(".square");
console.log("squareElements: ", squareElements);

//global variable
const player_x = "X";
const player_o = "O";

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

       if (!square[index]){
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
         

        //loop currentBoard thru the 8 winning conditions and if one hits return true
        currentBoard.forEach((square)=>{
            if (square.player == "O"){
                o_Array.push(square.cell);
            }
            if(square.player == "X"){
                x_Array.push(square.cell);
            }
        });

        console.log("o_Array: ", o_Array);
        console.log("x_Array: ", x_Array);

        if(
            firstCombo.every((current)=> o_Array.includes(current))||
            secondCombo.every((current)=> o_Array.includes(current))||
            thirdCombo.every((current)=> o_Array.includes(current))||
            fourthCombo.every((current)=> o_Array.includes(current))||
            fithCombo.every((current)=> o_Array.includes(current))||
            sixthCombo.every((current)=> o_Array.includes(current))||
            seventhCombo.every((current)=> o_Array.includes(current))||
            eigthCombo.every((current)=> o_Array.includes(current))
        ) {
            window.alert("o is the winner");
            }
            else if (
            firstCombo.every((current)=> x_Array.includes(current))||
            secondCombo.every((current)=> x_Array.includes(current))||
            thirdCombo.every((current)=> x_Array.includes(current))||
            fourthCombo.every((current)=> x_Array.includes(current))||
            fithCombo.every((current)=> x_Array.includes(current))||
            sixthCombo.every((current)=> x_Array.includes(current))||
            seventhCombo.every((current)=> x_Array.includes(current))||
            eigthCombo.every((current)=> x_Array.includes(current))
            ){
                 window.alert("x is the winner");
             }
         else if ( 
             secondCombo.every((current)=> x_Array.includes(current))
            // thirdCombo.every((current)=> x_Array.includes(current)) ||
            // fourthCombo.every((current)=> x_Array.includes(current)) ||
            // fithCombo.every((current)=> x_Array.includes(current)) ||
            // sixthCombo.every((current)=> x_Array.includes(current)) ||   
            // seventhCombo.every((current)=> x_Array.includes(current)) ||
            // eigthCombo.every((current)=> x_Array.includes(current)) || 

            // firstCombo.every((current)=> o_Array.includes(current)) ||
            // secondCombo.every((current)=> o_Array.includes(current)) ||
            // thirdCombo.every((current)=> o_Array.includes(current)) ||
            // fourthCombo.every((current)=> o_Array.includes(current)) ||
            // fithCombo.every((current)=> o_Array.includes(current)) ||
            // sixthCombo.every((current)=> o_Array.includes(current)) ||   
            // seventhCombo.every((current)=> o_Array.includes(current)) ||
            // eigthCombo.every((current)=> o_Array.includes(current)) 
        
         ){
             console.log("is draw");
             window.alert("draw");       
            }
      
    
})

})