# ticTactoe
project 1
I created a ticTactoe game using Html, Css, and Javascript
this game has the ability to change players when playing (playerx & playero)  and has a restart button to refresh the board for another game
I started this project in the html folder by linking all the files together and then starting to create my gameboard
from then I started working on event listeners that would enable users to click on each square on the gameboard
from there I had to develop code that would display content on each square and eventually keep track of who clicked on which square and to make sure another player wouldn't be able to override it if they clicked on it again.
Once I got that to work I created an array for the gameboard to keep track of who was on each square I would then use this information to compare it to the eight winning combo's needed to win but first I then created two empty arrays onw for playero and the other for playerx.
In these two empty arrays I pushed the square index of the appropriate player to each array so for example if current player in the square had a O in it that squares index would be pushed and held into the memory of the playero array and vice versa- keeping track which player was in which square and if that index of square matched a winning combonation
I looped through these combos and compared it to the array of playerx and playero which would then output to the screen which player had won.
I have yet to complete my draw function ..
