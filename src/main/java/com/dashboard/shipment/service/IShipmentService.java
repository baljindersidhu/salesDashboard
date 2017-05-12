package com.dashboard.shipment.service;

import java.util.List;

import com.dashboard.shipment.entity.Shipment;
import com.dashboard.state.entity.State;

public interface IShipmentService {

	public List<State> getAllStatesByCountryCode(String country);

	public Shipment scheduleShipment(Shipment shipment);

}
