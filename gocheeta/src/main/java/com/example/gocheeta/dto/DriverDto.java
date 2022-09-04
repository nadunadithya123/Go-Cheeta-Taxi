package com.example.gocheeta.dto;

import com.example.gocheeta.model.Vehicle;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@AllArgsConstructor
@NoArgsConstructor
@Data
public class DriverDto {


    private long userID;

    private String username;

    private String fullName;

    private String email;

    private String password;

    private String role;

    private String Branch;

    private Vehicle vehicle;
}
