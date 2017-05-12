package com.dashboard.country.entity;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.dashboard.base.entity.BaseEntity;
import com.dashboard.state.entity.State;

@Entity
public class Country extends BaseEntity{
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	private String name;
	private String code;
	@OneToMany(mappedBy="country", fetch=FetchType.LAZY, orphanRemoval=true)
	private Set<State> states;
	
	public Country(Long id, String name, String code, Set<State> states) {
		super();
		this.id = id;
		this.name = name;
		this.code = code;
		this.states = states;
	}
	
	public Country() {
		super();
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public Set<State> getStates() {
		return states;
	}
	public void setStates(Set<State> states) {
		this.states = states;
	}
	
}
