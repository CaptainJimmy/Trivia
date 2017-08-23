$(document).ready(function(){
	$("body").on("click", ".answer-button", verifyAnswer(this.id));


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

// functions

// create the question  list from the object array
function startModal(){
	console.log("startmodal");
	 $("#startModal").modal();
	$("#startModalButton").on("click",startGame());
}

function startGame(){
	console.log("startGame");
$("#jumbotronMessage").text("Good Luck, Stupid");
questionsLeft=triviaQuestion.length;
numWrong=0;
numCorrect=0;
numTimedOut=0;
updateScore();
}

function updateScore(){
	console.log("updateScore");
	$("#questionsLeft").text(questionsLeft);
	nextQuestion();
}

function nextQuestion(){
console.log("nextQuestion");
	if (questionsLeft <= triviaQuestion.length ) {
		console.log("IF LOOP");
			questionOutput=triviaQuestion[questionsLeft-1];
			// Grab A question From The List
			$("#question").text(questionOutput.question);
			// display the question and the answers as buttons
			//console.log(questionOutput);
//			for (var i=0; i <= triviaQuestion[questionsLeft-1].answers.length; i++){
			$('#answers').text("");
			for (var i=0; i < questionOutput.answers.length; i++){
				// console.log(i);
				// console.log(questionOutput.answers[i]);
				// console.log('<button class="btn btn-default btn-lg normal-button" id="' + i + '">' + triviaQuestion.answers[i].answer + ' </button>');
				$("#answers").append('<button class="btn btn-default btn-lg normal-button answer-button" id="' + i + '">' + questionOutput.answers[i].answer + ' </button>');
				
				}
			//start the timer
				timer=10;
				setInterval(countDown, 1000);
			//while the timer is running:
			// if statement to find if the answer picked isCorrect?
				
			
		}
	else {
	// if thereclearInterval(countdown); are no questions, end the game and display the game over Modal

		endingScore();
	}
}
function isCorrect(){
	//if the answer is correct, numCorrect++, questionsLeft--, then display the next question if applicable
	console.log("isCorrect");
	$("#jumbotronMessage").text("Well done, sir");
	numCorrect++;
	questionsLeft--;
	updateScore();
}

function isWrong(){
	// if the answer is incorrect, numWrong++, questionsLeft--, then display the next quesion if applicable
	console.log("isWrong");
	$("#jumbotronMessage").text("Good one, jackass. Try harder.");
	numWrong++;
	questionsLeft--;
	updateScore();
}

function timeRanOut(){
	console.log("timeRanOut");
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
	timer--;
}

function verifyAnswer(buttonClicked){
		console.log("verifyAnswer");
	// find out if the answer picked is correct
	//console.log(questionOutput.answers[buttonClicked].isCorrect);
	$("#message").text("TESTING");
	// if (questionOutput.answers[buttonClicked].isCorrect) {
	// 	//if the answer is correct, numCorrect++, questionsLeft--, then display the next question if applicable

	// 	isCorrect();
	// }
	// else if (!questionOutput.answers[buttonClicked].isCorrect){
	// 	// if the answer is incorrect, numWrong++, questionsLeft--, then display the next quesion if applicable

	// 	isWrong();
	// }
	
	// else {
	// 	console.log("ERROR IN verifyAnswer!");
	// 	$("#jumbotronMessage").text("Error in verifyAnswer");

	// }

}


function endingScore(){
	//pop out the score board modal
	console.log("ENDING SCORE");
	clearInterval(countdown);
 	$("#scoreModal").modal();
 	$("#numCorrect").text(numCorrect);
 	$("#numWrong").text(numWrong);
 	$("#numTimedOut").text(numTimedOut);
}


//$("body").on("click", ".answer-button", verifyAnswer(this.id));
//TESTING: starting the game with no modal
//startGame();

// Start the game with startModal
startModal();
});
