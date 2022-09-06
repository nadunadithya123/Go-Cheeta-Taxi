package com.example.gocheeta.controller;

import com.example.gocheeta.dto.DriverDto;
import com.example.gocheeta.model.Driver;
import com.example.gocheeta.model.Vehicle;
import com.example.gocheeta.repository.DriverRepository;
import com.example.gocheeta.service.DriverService;
import com.example.gocheeta.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/driver")
@AllArgsConstructor
public class DriverController {

    private DriverRepository driverRepository;
    private DriverService driverService;

    @GetMapping("/findAll")
    public ResponseEntity<List<Driver>>  findAll(){
        return new ResponseEntity<>( driverRepository.findAll(), HttpStatus.ACCEPTED);
    }
    @PostMapping("/create")
    public ResponseEntity<Driver> driverRegistration(@RequestBody DriverDto driverDto){

        if(driverDto == null){

        }
        Driver driver = new Driver();
        driver.setUsername(driverDto.getUsername());
        driver.setFullName(driverDto.getFullName());
        driver.setEmail(driverDto.getEmail());
        driver.setPassword(driverDto.getPassword());
        driver.setRole("driver");
        driver.setBranch(driverDto.getBranch());


        return new ResponseEntity<>(driverService.saveDriver(driver),HttpStatus.CREATED);

    }

}
