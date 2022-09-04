package com.example.gocheeta.service;

import com.example.gocheeta.model.Customer;
import com.example.gocheeta.model.Driver;
import com.example.gocheeta.model.User;
import com.example.gocheeta.repository.CustomerRepository;
import com.example.gocheeta.repository.DriverRepository;
import com.example.gocheeta.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UserService {

    private CustomerRepository customerRepository;
    private static DriverRepository driverRepository;
    private UserRepository userRepository;

    //save customer
    public Customer saveCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    //save driver
    public Driver saveDriver(Driver driver){return driverRepository.save(driver);}

    //find by username
    public User findByUsername(String username){ return userRepository.findByUsername(username);}

    //find by id
    public Driver findById(long id){
        User u =  userRepository.findById(id).orElseThrow(() -> new RuntimeException("user not found"));
        Driver driver = (Driver) u;
        return driver;
    }
}