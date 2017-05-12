package com.dashboard.initData.controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.dashboard.country.entity.Country;
import com.dashboard.initData.service.InitDataService;

@RestController
@RequestMapping(value="/initData")
public class InitDataLoadController {
	
	@Autowired
	private InitDataService initDataService;

	@RequestMapping(value="/saveCountries", method=RequestMethod.POST)
	public void saveCountries(@RequestBody List<Country> countries){
		initDataService.saveCountries(countries);
	}
	
	@RequestMapping(value="/saveStates", method=RequestMethod.POST)
	public void saveStates(@RequestBody HashMap<String, List<String>> states){
		initDataService.saveStates(states);
	}
}
