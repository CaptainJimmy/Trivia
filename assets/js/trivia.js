// variables used in the HTML
var jumbotronMessage;
var question;
var answer;
var timer;
var questionsLeft;
// vars used in the modal
var modalMessage;
var numCorrect;
var numWrong;
var numTimedOut;

// questions and answers object
var triviaQuestion = [
	{question: "chicken?",
	 	answer:{ "mammal",isCorrect=false},
	 	answer:{"bird", isCorrect=true},
 		answer:{"reptile",isCorrect=false},
 		answer:{"amphibian",isCorrect=false}
 	}
 	{question: "turkey?",
	 	answer:{ "mammal",isCorrect=false},
	 	answer:{"bird", isCorrect=true},
 		answer:{"reptile",isCorrect=false},
 		answer:{"amphibian",isCorrect=false}
 	}
 	{question: "cow?",
	 	answer:{ "mammal",isCorrect=true},
	 	answer:{"bird", isCorrect=false},
 		answer:{"reptile",isCorrect=false},
 		answer:{"amphibian",isCorrect=false}
 	}
 	{question: "spider?",
	 	answer:{ "mammal",isCorrect=false},
	 	answer:{"bird", isCorrect=false},
 		answer:{"reptile",isCorrect=false},
 		answer:{"amphibian",isCorrect=false},
 		answer:{"insect",isCorrect=true}
 	}
 	{question: "snake?",
	 	answer:{ "mammal",isCorrect=false},
	 	answer:{"bird", isCorrect=false},
 		answer:{"reptile",isCorrect=true},
 		answer:{"amphibian",isCorrect=false}
 	}

}];


//