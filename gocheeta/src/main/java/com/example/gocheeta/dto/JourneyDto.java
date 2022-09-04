package com.example.gocheeta.dto;

import com.example.gocheeta.model.Driver;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class JourneyDto {

    private long id;

    private String pickup;

    private String destination;

    private double distance;

    private double price;

    private String status;

    private long vehicle;
}
