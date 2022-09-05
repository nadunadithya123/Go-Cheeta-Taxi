package com.example.gocheeta.service;

import com.example.gocheeta.model.Vehicle;
import com.example.gocheeta.repository.VehicleRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class VehicleService {

    private VehicleRepository vehicleRepository;


    public Vehicle saveVehicle(Vehicle vehicle){return vehicleRepository.save(vehicle);}


    public List<Vehicle> findAll(){return vehicleRepository.findAll();}


    public List<Vehicle> findAllByType(String type){ return vehicleRepository.findAllByType(type);}


    public List<Vehicle> findAllBYStatus(String status){ return vehicleRepository.findAllByStatus(status);}


    public  List<Vehicle> findAllByTypeAndStatus( String type, String status){ return vehicleRepository.findAllByTypeAndStatus(type,status);}


    public Vehicle findById(long id){ return vehicleRepository.findById(id).orElseThrow(() -> new RuntimeException("vehicle not found key"));}

}
