package com.dashboard.country.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dashboard.country.entity.Country;
import com.dashboard.country.repository.CountryRepository;

@Service
public class CountryServiceImpl implements ICountryService {
	
	@Autowired
	private CountryRepository countryRepository;

	@Override
	public List<Country> getAllCountries() {
		return countryRepository.findAll();
	}

	@Override
	public Country getCountryByName(String name) {
		return countryRepository.findByName(name);
	}

	@Override
	public Country getCountryByCode(String code) {
		return countryRepository.findByCode(code);
	}

	@Override
	public Country saveCountry(Country country) {
		return countryRepository.save(country);
	}

	@Override
	public void deleteCountry(Country country) {
		countryRepository.delete(country);
	}

	@Override
	public void deleteCountry(Long id) {
		countryRepository.delete(id);
	}
	
	@Override
	public void deleteAllCountries(){
		countryRepository.deleteAll();
	}

}
