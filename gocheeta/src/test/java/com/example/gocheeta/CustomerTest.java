package com.example.gocheeta;

import org.junit.jupiter.api.Test;


import com.example.gocheeta.model.Customer;
import com.example.gocheeta.model.Driver;
import com.example.gocheeta.repository.DriverRepository;
import com.example.gocheeta.repository.UserRepository;
import com.example.gocheeta.service.DriverService;
import com.example.gocheeta.service.UserService;
import org.junit.jupiter.api.Assertions;

import static org.assertj.core.api.Assertions.assertThat;

public class CustomerTest {
    Driver driver;
    private UserService userService;
    private UserRepository userRepository;
    private DriverRepository driverRepository;
    private DriverService driverService;
    @Test
    void customerRegister(){

        Customer customer = new Customer();
        customer.setUsername("testcustomer1");
        customer.setFullName("test customer");
        customer.setEmail("test@gmail.com");
        customer.setPassword("test123");
        customer.setRole("customer");
        customer.setTelephone("0236587945");



        Assertions.assertEquals("test customer",customer.getFullName());
        Assertions.assertEquals("testcustomer1",customer.getUsername());



    }

}


