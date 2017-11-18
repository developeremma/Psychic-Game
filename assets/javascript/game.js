/////global variables//////
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];
//the choices that will be available for computer to choose
var choices = ["a", "b","c", "d","e", "f","g", "h","i", "j","k", "l","m", "n","o"
				,"p", "q","r", "s","t", "u","v", "w","x", "y", "z"];
var computerGuesses = []; //this will hold the random letter chosen



//upon load of page this function gets called and game starts
		window.onload = function(){
		var computerChooses = choices[Math.floor(Math.random()*choices.length)];
		computerGuesses.push(computerChooses);


};

		document.onkeyup = function(event){
		var userKeys = event.key;
		guessesSoFar.push(userKeys);



		if ((userKeys == computerGuesses[0]) && (guessesLeft > 0)){
				wins++;
				document.getElementById("wins").innerHTML = wins;
				// console.log(wins);
				reset();
				
			}
		else if ((userKeys !== computerGuesses[0]) && (guessesLeft >0)) {
			guessesLeft = guessesLeft -1;
			document.getElementById("guessesleft").innerHTML = " " + guessesLeft;
			// console.log(guessesLeft);

		}
		else {
			losses++
			document.getElementById("losses").innerHTML = losses;
			// console.log(losses);
			reset();

		}
			document.getElementById("guessessofar").innerHTML = " " + guessesSoFar;

		//reset all values
	function reset(){
				guessesLeft = 10;
				guessesSoFar.length = 0;
				computerGuesses.length = 10;
				var computerChooses = choices[Math.floor(Math.random()*choices.length)];
				computerGuesses.push(computerChooses);


			};

};


								

