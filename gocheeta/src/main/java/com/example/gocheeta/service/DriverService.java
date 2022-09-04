package com.example.gocheeta.service;

import com.example.gocheeta.model.Driver;
import com.example.gocheeta.repository.DriverRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class DriverService {

    private DriverRepository driverRepository;

    public List<Driver> findAll(){
        return driverRepository.findAll();
    }
}
