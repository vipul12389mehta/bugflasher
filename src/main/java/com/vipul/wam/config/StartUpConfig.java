package com.vipul.wam.config;

import javax.annotation.PostConstruct;

import org.springframework.context.annotation.Configuration;

import com.vipul.wam.util.IConstant;

@Configuration
public class StartUpConfig {
	
	public StartUpConfig() {
		System.out.println("StartUpConfig");
	}
	
	@PostConstruct
	public void initializeEnv() {
		
		String env = System.getenv("ENVIRONMENT");
		
		if(env!=null)
			IConstant.environment=env;
		
		System.out.println("ENVIRONMENT "+env);
	}
}
