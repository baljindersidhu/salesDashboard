package com.dashboard.country.service;

import java.util.List;

import com.dashboard.country.entity.Country;

public interface ICountryService {

	public List<Country> getAllCountries();
	
	public Country getCountryByName(String name);
	
	public Country getCountryByCode(String code);
	
	public Country saveCountry(Country country);
	
	public void deleteCountry(Country country);
	
	public void deleteCountry(Long id);

	public void deleteAllCountries();
}
