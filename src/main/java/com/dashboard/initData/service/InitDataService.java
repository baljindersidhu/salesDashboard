package com.dashboard.initData.service;

import java.util.HashMap;
import java.util.List;

import com.dashboard.country.entity.Country;

public interface InitDataService {

	public void saveCountries(List<Country> countries);
	
	public void saveStates(HashMap<String, List<String>> states);
}
