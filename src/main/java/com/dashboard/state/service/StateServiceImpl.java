package com.dashboard.state.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dashboard.state.entity.State;
import com.dashboard.state.repository.StateRepository;

@Service
public class StateServiceImpl implements IStateService {

	@Autowired
	private StateRepository stateRepository;
	
	@Override
	public List<State> getAllStates() {
		return stateRepository.findAll();
	}

	@Override
	public State getStateByName(String name) {
		return stateRepository.findByName(name);
	}

	@Override
	public State saveState(State state) {
		return stateRepository.save(state);
	}

	@Override
	public void deleteState(State state) {
		stateRepository.delete(state);
	}

	@Override
	public void deleteAllStates() {
		stateRepository.deleteAll();
	}

	@Override
	public List<State> getAllStatesByCountryCode(String code) {
		return stateRepository.findFirst100ByCountryCodeOrderByNameAsc(code);
	}

}
