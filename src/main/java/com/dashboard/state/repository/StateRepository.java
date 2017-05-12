package com.dashboard.state.repository;

import java.util.List;

import com.dashboard.base.repository.BaseRepository;
import com.dashboard.state.entity.State;

public interface StateRepository extends BaseRepository<State, Long> {

	State findByName(String name);
	
	List<State> findFirst100ByCountryCodeOrderByNameAsc(String code);

}
