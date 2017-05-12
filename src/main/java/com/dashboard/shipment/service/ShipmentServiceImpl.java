package com.dashboard.shipment.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dashboard.shipment.entity.Shipment;
import com.dashboard.shipment.repository.ShipmentRepository;
import com.dashboard.state.entity.State;
import com.dashboard.state.service.IStateService;

@Service
public class ShipmentServiceImpl implements IShipmentService {

	@Autowired
	private IStateService stateService;
	
	@Autowired
	private ShipmentRepository shipmentRepository;
	
	@Override
	public List<State> getAllStatesByCountryCode(String country) {
		return stateService.getAllStatesByCountryCode(country);
	}

	@Override
	public Shipment scheduleShipment(Shipment shipment) {
		return shipmentRepository.save(shipment);
	}
	
}
