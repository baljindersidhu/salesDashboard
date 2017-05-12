package com.dashboard.shipment.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dashboard.shipment.entity.Shipment;
import com.dashboard.shipment.service.IShipmentService;
import com.dashboard.state.entity.State;

@RestController
@RequestMapping(value="/shipment")
public class ShipmentController {
	
	@Autowired
	private IShipmentService shipmentService;

	@RequestMapping(value="/states", method=RequestMethod.GET, params={"country"})
	public List<State> getAllStatesByCountryCode(@RequestParam String country){
		return shipmentService.getAllStatesByCountryCode(country);
	}
	
	@RequestMapping(value="/schedule", method=RequestMethod.POST)
	public Shipment scheduleShipment(@RequestBody Shipment shipment){
		return shipmentService.scheduleShipment(shipment);
	}
	
}
