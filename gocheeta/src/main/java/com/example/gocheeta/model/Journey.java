package com.example.gocheeta.model;

import lombok.AllArgsConstructor;
import lombok.Cleanup;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "Journey")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Journey {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "pickup")
    private String pickup;

    @Column(name = "destination")
    private String destination;

    @Column(name = "distance")
    private double distance;

    @Column(name = "price")
    private double price;

    @Column(name = "status")
    private String status;

    @ManyToOne
    @JoinColumn(name = "vehicle")
    private Vehicle vehicle;



}
