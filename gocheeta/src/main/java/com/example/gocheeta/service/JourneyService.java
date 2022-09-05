package com.example.gocheeta.service;

import com.example.gocheeta.dto.JourneyDto;
import com.example.gocheeta.model.Driver;
import com.example.gocheeta.model.Journey;
import com.example.gocheeta.model.Vehicle;
import com.example.gocheeta.repository.JourneyRepository;
import com.example.gocheeta.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class JourneyService {

    private JourneyRepository journeyRepository;
    private VehicleService vehicleService;

    public Journey BookJourney(JourneyDto journeyDto){

        Journey journey = new Journey();


        journey.setDestination(journeyDto.getDestination());
        journey.setPickup(journeyDto.getPickup());
        journey.setDistance(journeyDto.getDistance());
        journey.setPrice(journeyDto.getPrice());
        journey.setStatus("ongoing");
        Vehicle vehicle =vehicleService.findById(journeyDto.getVehicle());

        vehicle.setStatus("busy");
        vehicleService.saveVehicle(vehicle);

        journey.setVehicle(vehicleService.findById(journeyDto.getVehicle()));


        return journeyRepository.save(journey);

    }

    public Journey closeJourney(long id){

        Journey journey = journeyRepository.findById(id).orElseThrow(() -> new RuntimeException("journey not found key"));
        Vehicle vehicle = journey.getVehicle();
        vehicle.setStatus("free");
        vehicleService.saveVehicle(vehicle);

        journey.setStatus("done");
        return journeyRepository.save(journey);
    }

    public List<Journey> findAll(){return journeyRepository.findAll();}
}
