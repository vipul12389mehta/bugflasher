<style>
#board3:after {
	display: block; 
	height: 0px; 
	clear: both; 
	float: none;
}
#board3 div {
	float: left;
}
</style>

<div id="wam">
	<div id="panel" style="width: 100%; height: 5%">
		<div id="userScore" style="float: right;">Score : <span id="score">0 &nbsp;</span></div>
		<div id="timeLeft" style="float: left;">Time : <span id="time">0</span></div>
	</div>
	
	<div id="board3" align="center" style="width: 100%; height: 90%;">
		<div id="111" style="width: 100%; height: 33%; ">
			<div id="11" style="border-style: hidden; width: 32%; height: 100%; background-color: red; ">
				
			</div>
			<div id="12" style="border-style: hidden; width: 32%; height: 100%; background-color:yellow; ">
				
			</div>
			<div id="13" style="border-style: hidden; width: 32%; height: 100%; background-color:blue; ">
				
			</div>
		</div>
		<div id="222" style="width: 100%; height: 33%;">
			<div id="21" style="border-style: hidden; width: 32%; height: 100%; background-color:green;">
				
			</div>
			<div id="22" style="border-style: hidden; width: 32%; height: 100%; background-color:black;">
				
			</div>
			<div id="23" style="border-style: hidden; width: 32%; height: 100%; background-color:orange;">
				
			</div>
		</div>
		<div id="333" style="width: 100%; height: 33%;">
			<div id="31" style="border-style: hidden; width: 32%; height: 100%; background-color:purple;">
				
			</div>
			<div id="32" style="border-style: hidden; width: 32%; height: 100%; background-color:gray;">
				
			</div>
			<div id="33" style="border-style: hidden; width: 32%; height: 100%; background-color:aqua;">
				
			</div>
		</div>
	</div>
</div>
<script type="text/javascript" src="<%=request.getContextPath() %>/js/controller.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/js/common.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/js/jquery-3.2.1.min.js"></script>

<script type="text/javascript">
	initializeBoard("3");
</script>