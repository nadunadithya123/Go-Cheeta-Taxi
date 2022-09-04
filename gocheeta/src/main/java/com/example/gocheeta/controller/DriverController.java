package com.example.gocheeta.controller;

import com.example.gocheeta.model.Driver;
import com.example.gocheeta.model.Vehicle;
import com.example.gocheeta.repository.DriverRepository;
import com.example.gocheeta.service.DriverService;
import com.example.gocheeta.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/driver")
@AllArgsConstructor
public class DriverController {

    private DriverRepository driverRepository;

    @GetMapping("/findAll")
    public ResponseEntity<List<Driver>>  findAll(){
        return new ResponseEntity<>( driverRepository.findAll(), HttpStatus.ACCEPTED);
    }

}
