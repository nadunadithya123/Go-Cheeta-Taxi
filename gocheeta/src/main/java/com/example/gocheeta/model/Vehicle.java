package com.example.gocheeta.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "vehicle")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Vehicle {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "type")
    private String type;

    @Column(name = "numberPlate" , unique = true)
    private String numberPlate;

    @Column(name = "status")
    private String status;

    @ManyToOne
    @JoinColumn(name = "driver")
    private Driver driver;



}
