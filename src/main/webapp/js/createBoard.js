function createBoard(maxBoardCell) {
	
	clearBoardCell();
	
	var dimen = 100 / maxBoardCell;
	
	if(! (dimen % 1 === 0)) {
		dimen = Math.floor(dimen) - 1;
	}
	
	for(var i=1;i<=maxBoardCell;i++){
		
		var parentId = i+""+i+""+i;
		var parentDiv = "<div id='"+parentId+"' style='width: 100%; height: "+dimen+"%;'>";
		
		for(var j=1;j<=maxBoardCell;j++){
			
			var childId = i+""+j;
			var randomColor = getRandomColor();
			
			while(randomColor == "#FFFFFF"){
				randomColor = getRandomColor();
			}
			
			var childDiv = "<div id='"+childId+"' style='border-style: hidden; width: "+dimen+"%; height: 100%; background-color: "+randomColor+"'></div>";
			
			parentDiv=parentDiv+childDiv;
		}
		
		parentDiv=parentDiv+"</div>";
		$("#boardN").append(parentDiv);
	}
	
	initializeBoard(maxBoardCell);
}

function clearBoardCell(){
	$("#boardN").empty();
}