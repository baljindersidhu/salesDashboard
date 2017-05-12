package com.dashboard.shipment.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.dashboard.base.entity.BaseEntity;
import com.dashboard.state.entity.State;

@Entity
public class Shipment extends BaseEntity {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="shipped_from",referencedColumnName="id")
	private State shippedFrom;
	
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="shipped_to", referencedColumnName="id")
	private State shippedTo;
	
	private String name;
	private String description;
	
	private Date shippedOn;
	private Date deliveredOn;

	public Shipment(Long id, State shippedFrom, State shippedTo,
			Date shippedOn, Date deliveredOn, String name, String description) {
		super();
		this.id = id;
		this.shippedFrom = shippedFrom;
		this.shippedTo = shippedTo;
		this.setShippedOn(shippedOn);
		this.setDeliveredOn(deliveredOn);
		this.name = name;
		this.description = description;
	}

	public Shipment() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public State getShippedFrom() {
		return shippedFrom;
	}

	public void setShippedFrom(State shippedFrom) {
		this.shippedFrom = shippedFrom;
	}

	public State getShippedTo() {
		return shippedTo;
	}

	public void setShippedTo(State shippedTo) {
		this.shippedTo = shippedTo;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getShippedOn() {
		return shippedOn;
	}

	public void setShippedOn(Date shippedOn) {
		this.shippedOn = shippedOn;
	}

	public Date getDeliveredOn() {
		return deliveredOn;
	}

	public void setDeliveredOn(Date deliveredOn) {
		this.deliveredOn = deliveredOn;
	}
	
}
