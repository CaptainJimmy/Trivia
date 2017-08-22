$(document).ready(function(){
// variables used in the HTML
var jumbotronMessage;
var questionOutput;
var answer;
var answerButtons;
var timer;
var questionsLeft;
// vars used in the modal
var modalMessage;
var numCorrect;
var numWrong;
var numTimedOut;

// questions and answers object
var triviaQuestion = [
	{
	question: "chicken?",
	answers: [
		{answer:"mammal",isCorrect:false},
	 	{answer:"bird", isCorrect:true},
 		{answer:"reptile",isCorrect:false},
 		{answer:"amphibian",isCorrect:false}
 		]
 	},
 	{
	question: "turkey?",
	answers: [	
	 	{answer: "mammal",isCorrect:false},
	 	{answer:"bird", isCorrect:true},
 		{answer:"reptile",isCorrect:false},
 		{answer:"amphibian",isCorrect:false}
 		]
 	},
 	{
 	question: "cow?",
 	answers: [
	 	{answer: "mammal",isCorrect:true},
	 	{answer:"bird", isCorrect:false},
 		{answer:"reptile",isCorrect:false},
 		{answer:"amphibian",isCorrect:false}
 		]
 	},
 	{
 	question: "spider?",
 	answers: [
	 	{answer: "mammal",isCorrect:false},
	 	{answer:"bird", isCorrect:false},
 		{answer:"reptile",isCorrect:false},
 		{answer:"amphibian",isCorrect:false},
 		{answer:"insect",isCorrect:true}
 		]
 	},
 	{
 	question: "snake?",
 	answers: [
	 	{answer: "mammal",isCorrect:false},
	 	{answer:"bird", isCorrect:false},
 		{answer:"reptile",isCorrect:true},
 		{answer:"amphibian",isCorrect:false}
 		]
 	}

];

//console.log(triviaQuestion[1].question + " " + triviaQuestion[1].answers[0].answer + " " + triviaQuestion[1].answers[0].isCorrect);




// functions

// create the question  list from the object array
function startModal(){
	 $("#startModal").modal();
	$("#startModalButton").on("click",startGame());
}

function startGame(){
$("#jumbotronMessage").text("Good Luck, Stupid");
questionsLeft=triviaQuestion.length;
numWrong=0;
numCorrect=0;
numTimedOut=0;
updateScore();
}

function updateScore(){
	$("#questionsLeft").text(questionsLeft);
	nextQuestion();
}

function nextQuestion(){

	if (questionsLeft <= triviaQuestion.length ) {
			questionOutput=triviaQuestion[questionsLeft].question;
			// Grab A question From The List
			$("#question").text(questionOutput);
			// display the question and the answers as buttons
			for (var i=0; i <= triviaQuestion[questionsLeft].answers.length; i++){
				console.log('<button class="btn btn-default btn-lg normal-button" id="' + i + '">' + triviaQuestion.answers[i].answer + ' </button>')
				$("#answers").append('<button class="btn btn-default btn-lg normal-button answer-button" id="' + i + '">' + triviaQuestion.answers[i].answer + ' </button>');
				
				}
			//start the timer
				timer=10;
				setInterval(countDown, 1000);
			//while the timer is running:
			// if statement to find if the answer picked isCorrect?
				$(".answer-button").on("click", verifyAnswer(this.id));
			
		}
	else {
	// if there are no questions, end the game and display the game over Modal

		endingScore();
	}
}
function isCorrect(){
	//if the answer is correct, numCorrect++, questionsLeft--, then display the next question if applicable

	$("#jumbotronMessage").text("Well done, sir");
	numCorrect++;
	questionsLeft--;
	updateScore();
}

function isWrong(){
	// if the answer is incorrect, numWrong++, questionsLeft--, then display the next quesion if applicable

	$("#jumbotronMessage").text("Good one, jackass. Try harder.");
	numWrong++;
	questionsLeft--;
	updateScore();
}

function timeRanOut(){
	//if the answer times out, timedOut++, questionsLeft--, then display the next question if applicable

	$("#jumbotronMessage").text("Work Faster. Quit texting your mother.");
	numTimedOut++;
	questionsLeft--;
	updateScore();
}

function countDown(){

	$("#timer").text(timer);
	// timer runs out, timeRanOut();
	//if the answer times out, timedOut++, questionsLeft--, then display the next question if applicable

	if (timer === 0){
		timeRanOut();
		}
}

function verifyAnswer(buttonClicked){
	// find out if the answer picked is correct

	if (triviaQuestion[questionsLeft].answers[buttonClicked].isCorrect){
		//if the answer is correct, numCorrect++, questionsLeft--, then display the next question if applicable

		isCorrect();
	}
	else if (!triviaQuestion[questionsLeft].answers[buttonClicked].isCorrect){
		// if the answer is incorrect, numWrong++, questionsLeft--, then display the next quesion if applicable

		isWrong();
	}
	
	else {
		console.log("ERROR IN verifyAnswer!");
		$("#jumbotronMessage").text("Error in verifyAnswer");

	}

}


function endingScore(){
	//pop out the score board modal
 	$("#scoreModal").modal();
 	$("#numCorrect").text(numCorrect);
 	$("#numWrong").text(numWrong);
 	$("#numTimedOut").text(numTimedOut);
}


//TESTING: starting the game with no modal
startGame();

// Start the game with startModal
//startModal();
});
