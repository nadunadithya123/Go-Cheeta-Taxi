package com.example.gocheeta.controller;

import com.example.gocheeta.dto.CustomerDto;
import com.example.gocheeta.dto.DriverDto;
import com.example.gocheeta.dto.LoginDto;
import com.example.gocheeta.model.Customer;
import com.example.gocheeta.model.Driver;
import com.example.gocheeta.model.User;
import com.example.gocheeta.model.Vehicle;
import com.example.gocheeta.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("api/v1/auth")
@AllArgsConstructor
public class AuthenticationController {

    private UserService userService;
@CrossOrigin
    @PostMapping("/customer/signup")
    public ResponseEntity<Customer> customerRegister(@RequestBody CustomerDto customerDto){


        if(customerDto == null){
//            throw new RuntimeException(()->{"dsfd"});
        }
        Customer customer = new Customer();
        customer.setUsername(customerDto.getUsername());
        customer.setFullName(customerDto.getFullName());
        customer.setEmail(customerDto.getEmail());
        customer.setPassword(customerDto.getPassword());
        customer.setRole("customer");
        customer.setTelephone(customerDto.getTelephone());

        return new ResponseEntity<>(userService.saveCustomer(customer), HttpStatus.CREATED);


    }



    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody LoginDto loginDto){

        User user = new User();
        HttpStatus response = HttpStatus.CREATED;

        if(loginDto.getUsername()=="" || loginDto.getUsername()==null){
            response = HttpStatus.BAD_REQUEST;
        }else{

            user = userService.findByUsername(loginDto.getUsername());

            if(user == null){
                response = HttpStatus.NOT_FOUND;
            }else{
                if(user.getPassword().equals(loginDto.getPassword())){
                    response = HttpStatus.ACCEPTED;
                }else{
                    response = HttpStatus.BAD_REQUEST;
                }
            }
        }
        return new ResponseEntity<>(user,response);
    }
}
