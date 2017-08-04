package com.vipul.wam.util;

public interface IConstant {
	
	enum contextPath{   
		PROD("/wwhackamole.herokuapp.com"), LOCAL("/wwhackamole");
		
		private String value;
		
		private contextPath(String value){  
			this.value=value;  
		}
		
		public String getValue(){  
			return value;
		} 
	}
}
