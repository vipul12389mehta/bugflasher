package com.vipul.wam.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(value="/home")
public class HomeController {
	
	public HomeController() {
		
	}
	
	@RequestMapping(method=RequestMethod.GET)
	public String showHomePage() {
		System.out.println("in showHomePage");
		return "homePage";
	}
	
	@RequestMapping(value="/test", method=RequestMethod.GET)
	public @ResponseBody String TestShowHomePage() {
		return "This is test home page";
	}
}
