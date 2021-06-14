////////////
// CONFIG //
////////////
var nMinutes = 25; // 25, suggested
var rightAnswerPoints = 2
var wrongAnswerPoints = 1
var noAnswerPoints = 0
var numberOfQuestions = 40 // default number of questions that you want to show

// CUSTOMIZABLE PART OF THE PAGE - SHOWS OR HIDES SOME PARTS
// if a part is disabled, then the related functionality will be disabled
var showSlider = true
var showTimer = true
var showShuffleQuestions = true
var showShuffleAnswers = true

// FILES
var jsonFolder = "json" // json folder where to load your json files
var jsonFiles = { // load other quizzes
    "example.json": "Example questions"
};