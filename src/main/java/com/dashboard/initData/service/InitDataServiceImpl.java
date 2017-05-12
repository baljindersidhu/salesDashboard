package com.dashboard.initData.service;

import java.util.HashMap;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dashboard.country.entity.Country;
import com.dashboard.country.service.ICountryService;
import com.dashboard.state.entity.State;
import com.dashboard.state.service.IStateService;

@Service
public class InitDataServiceImpl implements InitDataService {

	@Autowired
	private ICountryService countryService;
	
	@Autowired
	private IStateService stateService;
	
	@Override
	public void saveCountries(List<Country> countries) {
		for(Country country: countries){
			countryService.saveCountry(country);
		}
	}

	@Override
	public void saveStates(HashMap<String, List<String>> states) {
		Set<String> countryNames = states.keySet();
		for(String name: countryNames){
			if(name.isEmpty()){
				continue;
			}
			Country country = countryService.getCountryByName(name);
			if(null == country ||
					(null != country.getStates() && !country.getStates().isEmpty())){
				continue;
			}
			List<String> cities = states.get(name);
			for(String stateName: cities){
				if(stateName.isEmpty()){
					continue;
				}
				State state = new State();
				state.setName(stateName);
				state.setCountry(country);
				stateService.saveState(state);
			}
		}
	}

}
