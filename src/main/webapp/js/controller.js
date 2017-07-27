var MAX_CELL_TO_DISPLAY;
var TIME_TO_PLAY;
var CURRENT_PLAY_TIME;
var USER_SCORE;
var GAME_SPEED;
var loopIntervalID;
var scoreTimeOut;
var BOARD_MAX_CELL = {"2":1,"3":2,"4":3,"5":3,"6":4,"7":4,"8":5,"9":5,"10":5};

function initializeBoard(maxBoardCell){
	
	stopGame(maxBoardCell);
	initializeValues();
	registerScoreHandler(maxBoardCell);
	startGame(maxBoardCell);
	updateTimer(TIME_TO_PLAY);
}

function initializeValues(maxBoardCell){
	TIME_TO_PLAY=10;
	CURRENT_PLAY_TIME=0;
	USER_SCORE=0;
	GAME_SPEED=1;
	loopIntervalID=null;
	scoreTimeOut=null;
	
	MAX_CELL_TO_DISPLAY = BOARD_MAX_CELL[maxBoardCell];
	
	if(MAX_CELL_TO_DISPLAY == undefined)
		MAX_CELL_TO_DISPLAY = BOARD_MAX_CELL["10"];
	
}

function startGame(maxBoardCell){
	
	CURRENT_PLAY_TIME = TIME_TO_PLAY;
	
	var logicFn = function() {
		CURRENT_PLAY_TIME = CURRENT_PLAY_TIME - (GAME_SPEED * 1);
		updateTimer(CURRENT_PLAY_TIME);
		handleBoardCell(maxBoardCell);
	};
	
	loopIntervalID = setInterval(logicFn, GAME_SPEED * 1000);
	
	triggerStopGame(maxBoardCell, loopIntervalID);
}

function registerScoreHandler(maxBoardCell){
	$("#boardN > div").children().click(function(){
		console.log(this.id);
		updateScore(this.id);
	});
}

function removeScoreHandler(maxBoardCell){
	$("#boardN > div").children().prop('onclick',null).off('click');
}

function updateTimer(timeElapsed){
	timeElapsed = ('0' + timeElapsed).slice(-2);
	$("#time").text("00:00:"+timeElapsed+":00");
}

function triggerStopGame(maxBoardCell, loopIntervalID){
	
	var timeToStop = (TIME_TO_PLAY * 1000) + 100;
	
	scoreTimeOut = setTimeout(function () {
		
		stopGame(maxBoardCell);
		
	}, timeToStop);
}

function stopGame(maxBoardCell){
	
	clearInterval(loopIntervalID);
	clearTimeout(scoreTimeOut);
	
	if(loopIntervalID!=null && scoreTimeOut!=null)
		initiateStopGame(maxBoardCell);
}

function initiateStopGame(maxBoardCell){
	handleScore(USER_SCORE);
	showGameMenu();
	
	alert("Game Finished");
	loopIntervalID=null;
	scoreTimeOut=null;
	USER_SCORE=0;
	removeScoreHandler(maxBoardCell);
	handleVisibilityBoardCellAll(maxBoardCell,true);
}

function replayGame(maxBoardCell){
	initializeBoard(maxBoardCell);
}

function handleScore(userScore){
	
	calcAndUpdateScore();
}

function calcAndUpdateScore(){
	
}

function showGameMenu(){
	
}

function updateScore(elementId){
	
	USER_SCORE++;
	//console.log("score = "+USER_SCORE);
	$("#score").text(USER_SCORE);
	handleVisibilityBoardCellSingle(elementId, false);
}

function handleBoardCell(maxBoardCell){
	
	console.log("MAX_CELL_TO_DISPLAY "+MAX_CELL_TO_DISPLAY);
	handleVisibilityBoardCellAll(maxBoardCell, false);
	
	for(var i=0; i<MAX_CELL_TO_DISPLAY; i++){
		var cellId1 = getRandomInt(1,maxBoardCell);
		var cellId2 = getRandomInt(1,maxBoardCell);
		
		var cellId = cellId1+""+cellId2;
		
		handleVisibilityBoardCellSingle(cellId, true);
	}
}

function handleVisibilityBoardCellSingle(cellId, shouldDisplay){
	
	console.log("cellId "+cellId);
	
	if(shouldDisplay)
		$("#"+cellId).css("visibility", "visible");
	else
		$("#"+cellId).css("visibility", "hidden");
}

function handleVisibilityBoardCellAll(boardDivId, shouldDisplay){
	
	if(shouldDisplay) {
		$("#boardN > div > div").css("visibility", "visible");
		
	} else {
		$("#boardN > div > div").css("visibility", "hidden");
	}
}

function displayBoardCell(){
	
}