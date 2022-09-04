package com.example.gocheeta.repository;

import com.example.gocheeta.model.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle,Long> {

    List<Vehicle> findAllByType(String type);

    List<Vehicle> findAllByStatus(String Status);

    List<Vehicle> findAllByTypeAndStatus(String type, String status);
}
