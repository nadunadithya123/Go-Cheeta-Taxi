package com.example.gocheeta.controller;

import com.example.gocheeta.dto.VehicleDto;
import com.example.gocheeta.model.Vehicle;
import com.example.gocheeta.service.UserService;
import com.example.gocheeta.service.VehicleService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/vehicle")
@AllArgsConstructor
public class VehicleController {

    private VehicleService vehicleService;
    private UserService userService;

    @PostMapping("/create")
    public ResponseEntity<Vehicle> createVehicle(@RequestBody VehicleDto vehicleDto){

        Vehicle vehicle = new Vehicle();
        HttpStatus response = HttpStatus.CREATED;

        if(vehicleDto == null){
        response =  HttpStatus.BAD_REQUEST;
        }


        vehicle.setType(vehicleDto.getType());
        vehicle.setNumberPlate(vehicleDto.getNumberPlate());
        vehicle.setStatus("free");
        vehicle.setDriver(userService.findById(vehicleDto.getDriver()));

        return new ResponseEntity<>(vehicleService.saveVehicle(vehicle), HttpStatus.CREATED);
    }

    @GetMapping("/findAll")
    public ResponseEntity<List<Vehicle>>  findAll(){
        return new ResponseEntity<>( vehicleService.findAll(), HttpStatus.ACCEPTED);
    }

    @GetMapping("/findAllByType")
    public ResponseEntity<List<Vehicle>> findAllByType(@RequestParam(name = "type") String type){

        String test = type;
        return new ResponseEntity<>(vehicleService.findAllByType(type),HttpStatus.ACCEPTED);
    }

    @GetMapping("/findAllByStatus")
    public ResponseEntity<List<Vehicle>> findAllByStatus(@RequestParam(name = "status") String status){

        return new ResponseEntity<>(vehicleService.findAllBYStatus(status),HttpStatus.ACCEPTED);
    }

    @PostMapping("/findAllByTypeAndStatus")
    public ResponseEntity<List<Vehicle>> findAllByTypeAndStatus(@RequestBody VehicleDto vehicleDto){
        return new ResponseEntity<>(vehicleService.findAllByTypeAndStatus(vehicleDto.getType(),vehicleDto.getStatus()),HttpStatus.ACCEPTED);
    }
}
