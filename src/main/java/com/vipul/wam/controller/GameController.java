package com.vipul.wam.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(value="/game")
public class GameController {
	
	public GameController() {
		
	}
	
	@RequestMapping(value="/play", method=RequestMethod.GET)
	public String playGame() {
		System.out.println("in showHomePage");
		return "playGamePage";
	}
	
	@RequestMapping(value="/test", method=RequestMethod.GET)
	public @ResponseBody String TestShowHomePage() {
		return "This is test home page";
	}
}
