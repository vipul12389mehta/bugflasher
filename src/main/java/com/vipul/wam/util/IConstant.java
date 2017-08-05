package com.vipul.wam.util;

public abstract class IConstant {
	
	public enum contextPath{   
		PROD("/"), LOCAL("/wwhackamole.herokuapp.com");
		
		private String value;
		
		private contextPath(String value){  
			this.value=value;  
		}
		
		public String getValue(){  
			return value;
		} 
	}
	
	public static String environment = contextPath.LOCAL.toString();
}