package com.example.gocheeta.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class VehicleDto {

    private long id;

    private String type;

    private String numberPlate;

    private String status;

    private long driver;
}
