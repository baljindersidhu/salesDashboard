package com.dashboard.country.repository;

import com.dashboard.base.repository.BaseRepository;
import com.dashboard.country.entity.Country;

public interface CountryRepository extends BaseRepository<Country, Long>{

	public Country findByCode(String code);
	public Country findByName(String name);
	
}
