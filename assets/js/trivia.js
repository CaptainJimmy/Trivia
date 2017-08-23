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

//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

//prevents the clock from being sped up unnecessarily
var clockRunning = false;

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
	//console.log("startmodal");
	$("#startModal").modal();
	$(".startModalClass").on("click",function(){
			startGame();
	});
		//$("#startModalButton").on("click",startGame());
			//alert("Click OK to start");
}

function startGame(){
	console.log("startGame");
$("#jumbotronMessage").text("Good Luck, Stupid");
questionsLeft=triviaQuestion.length;
numWrong=0;
numCorrect=0;
numTimedOut=0;
	clearInterval(intervalId);
	clockRunning=false;
updateScore();
}

function updateScore(){
	//console.log("updateScore");
	$("#questionsLeft").text(questionsLeft);
	//console.log("IF LOOP");
	if (questionsLeft === 0) {
		endingScore();
	}
	else if (questionsLeft <= triviaQuestion.length ) {
		nextQuestion();
		}
	else {
		$("#message").text("ERROR IN updateScore!");
	}

}

function nextQuestion(){
//console.log("nextQuestion");
		
			questionOutput=triviaQuestion[questionsLeft-1];
			// Grab A question From The List
			$("#question").text(questionOutput.question);
			// display the question and the answers as buttons
			//console.log(questionOutput);
			$('#answers').text("");
			for (var i=0; i < questionOutput.answers.length; i++){
				// console.log(i);
				// console.log(questionOutput.answers[i]);
				// console.log('<button class="btn btn-default btn-lg normal-button answer-button" id="' + i + '">' + questionOutput.answers[i].answer + ' </button>');
				
				$("#answers").append('<button class="btn btn-default btn-lg normal-button answer-button" id="' + i + '">' + questionOutput.answers[i].answer + ' </button>');
				
				}
			//start the timer
			if (!clockRunning){
				timer=10;
				intervalId=setInterval(countDown, 1000);
				clockRunning=true;
			}
			//while the timer is running:
			// if statement to find if the answer picked isCorrect?
				
	
}
function isCorrect(){
	//if the answer is correct, numCorrect++, questionsLeft--, then display the next question if applicable
	//console.log("isCorrect");
	$("#jumbotronMessage").text("Well done, sir");
	numCorrect++;
	questionsLeft--;
	clearInterval(intervalId);
	clockRunning=false;
	updateScore();
}

function isWrong(){
	// if the answer is incorrect, numWrong++, questionsLeft--, then display the next quesion if applicable
	//console.log("isWrong");
	$("#jumbotronMessage").text("Good one, jackass. Try harder.");
	numWrong++;
	questionsLeft--;
	clearInterval(intervalId);
	clockRunning=false;
	updateScore();
}

	//if the answer times out, timedOut++, questionsLeft--, clear the timer, then display the next question if applicable
function timeRanOut(){
	//console.log("timeRanOut");
	$("#jumbotronMessage").text("Work Faster. Quit texting your mother.");
	numTimedOut++;
	questionsLeft--;
	clearInterval(intervalId);
	clockRunning=false;
	updateScore();
}

	// start the countdown. if timer runs out, timeRanOut();
function countDown(){
	$("#timer").text(timer);
	if (timer === 0){
		timeRanOut();

		}
	timer--;
}

function verifyAnswer(buttonClicked){
	//	var buttonClicked=this.id;
		//console.log("verifyAnswer " + buttonClicked);
	// find out if the answer picked is correct
	//console.log(questionOutput.answers[buttonClicked].isCorrect);
	// $("#message").text("TESTING");
	if (questionOutput.answers[buttonClicked].isCorrect) {
		//if the answer is correct, numCorrect++, questionsLeft--, then display the next question if applicable

		isCorrect();
	}
	else if (!questionOutput.answers[buttonClicked].isCorrect){
		// if the answer is incorrect, numWrong++, questionsLeft--, then display the next quesion if applicable

		isWrong();
	}
	
	else {
		//console.log("ERROR IN verifyAnswer!");
		$("#jumbotronMessage").text("Error in verifyAnswer");

	}

};


function endingScore(){
	//pop out the score board modal
	//console.log("ENDING SCORE");
	clearInterval(countDown);
	clockRunning=false;
 	$("#scoreModal").modal();
 	$("#numCorrect").text(numCorrect);
 	$("#numWrong").text(numWrong);
 	$("#numTimedOut").text(numTimedOut);
 	var totalQuestions=triviaQuestion.length
 	var percentIncorrect=((numWrong+numTimedOut)/totalQuestions)*100;
 	console.log(percentIncorrect);
 	var percentCorrect=(numCorrect/totalQuestions)*100;
 	console.log(percentCorrect);
 	$("#percentCorrect").text(percentCorrect);
 	$("#percentIncorrect").text(percentIncorrect);
 	if (percentCorrect >=80) {
 		$("#finalGrade").text("You Passed, Sucka");
 		}
 	else {
 		$("#finalGrade").text("You Failed, Fool.");
 	}
}

// Start the game with startModal
startModal();
//$("#answers").on("click", verifyAnswer(this.id));
$("body").on("click", ".answer-button", function(){
	var id=this.id;
	verifyAnswer(id);
});

});
