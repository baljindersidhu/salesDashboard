package com.dashboard.shipment.repository;

import org.springframework.stereotype.Repository;

import com.dashboard.base.repository.BasePagingRepository;
import com.dashboard.shipment.entity.Shipment;

@Repository
public interface ShipmentRepository extends BasePagingRepository<Shipment, Long> {

}
