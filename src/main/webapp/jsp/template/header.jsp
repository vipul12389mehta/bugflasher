
<%
	//String contextPath=IConstant.contextPath.valueOf("PROD").getValue();
	String contextPath="/wwhackamole.herokuapp.com";
%>

<script type="text/javascript" src="<%=contextPath %>/js/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="<%=contextPath %>/js/common.js"></script>
<script type="text/javascript" src="<%=contextPath %>/js/createBoard.js"></script>
<script type="text/javascript" src="<%=contextPath %>/js/controller.js"></script>

<script type="text/javascript">
	var contextPath = "<%=contextPath %>";
</script>

<input type="hidden" id="contextPath" value="<%=contextPath %>">