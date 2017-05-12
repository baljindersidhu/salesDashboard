package com.dashboard.state.service;

import java.util.List;

import com.dashboard.state.entity.State;

public interface IStateService {
	
	public List<State> getAllStates();
	
	public List<State> getAllStatesByCountryCode(String code);
	
	public State getStateByName(String name);
	
	public State saveState(State state);
	
	public void deleteState(State state);
	
	public void deleteAllStates();
}
