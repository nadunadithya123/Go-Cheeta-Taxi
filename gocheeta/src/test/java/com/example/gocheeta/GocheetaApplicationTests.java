package com.example.gocheeta;

import com.example.gocheeta.controller.AuthenticationController;
import com.example.gocheeta.controller.DriverController;
import com.example.gocheeta.model.Customer;
import com.example.gocheeta.model.Driver;
import com.example.gocheeta.model.User;
import com.example.gocheeta.repository.DriverRepository;
import com.example.gocheeta.repository.UserRepository;
import com.example.gocheeta.service.DriverService;
import com.example.gocheeta.service.UserService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.mockito.internal.matchers.Equals;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import com.example.gocheeta.controller.AuthenticationController;

import javax.persistence.EntityManager;

import static org.assertj.core.api.Assertions.assertThat;
@SpringBootTest
class GocheetaApplicationTests {
    Driver driver;
    private UserService userService;
    private UserRepository userRepository;
    private DriverRepository driverRepository;
    private DriverService driverService;
    @Test
    void contextLoads() {

    }

    @Test
    void CustomerRegister(){
         Driver driver=new Driver();

        driver.setUsername("test");
        driver.setFullName("test driver");
        driver.setEmail("test@gmail.com");
        driver.setBranch("gampahaa");
        driver.setRole("driver");
        driver.setPassword("12345");



        Assertions.assertEquals("test",driver.getUsername());
        Assertions.assertEquals("test driver",driver.getFullName());
        Assertions.assertEquals("test@gmail.com",driver.getEmail());
        Assertions.assertEquals("gampahaa",driver.getBranch()) ;
        Assertions.assertEquals("driver",driver.getRole());
        Assertions.assertEquals("12345",driver.getPassword());



    }
}
