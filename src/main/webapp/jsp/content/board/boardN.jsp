<style>
#boardN:after {
	display: block; 
	height: 0px; 
	clear: both; 
	float: none;
}
#boardN div {
	float: left;
}

#menuOptionWrap {
    float: left;
    position: relative;
    left: 50%;
}

#menuOption {
    float: left;
    position: relative;
    left: -50%;
}
</style>

<div id="wam">
	<div id="panel" style="width: 100%; height: 5%">
		<div id="userScore" style="float: right;">Score : <span id="score">0</span></div>
		
		<div id="menuOptionWrap">
			<div id="menuOption" style="float: right; right: -50%; " onclick="replayGame('20');">Replay Game</div>
		</div>
		<!-- <div id="menuOption1" align="center" style="width: 80%;" onclick="replayGame('20');">Replay Game</div> -->
		<div id="timeLeft" style="float: left;">Time : <span id="time">00:00:00</span></div>
	</div>
	
	<div id="boardN" align="center" style="width: 100%; height: 90%;">
		
	</div>
</div>

<script type="text/javascript">
	createBoard("20");
</script>