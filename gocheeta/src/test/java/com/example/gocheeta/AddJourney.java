package com.example.gocheeta;


import org.junit.jupiter.api.Test;


import org.junit.jupiter.api.Assertions;

import static org.assertj.core.api.Assertions.assertThat;

import com.example.gocheeta.model.Journey;

public class AddJourney {
 @Test
  void AddJourneynew() {
     Journey journey = new Journey();

     journey.setDestination("Colombo");
     journey.setPickup("Kalutara");
     journey.setDistance(555);
     journey.setPrice(555);
     journey.setStatus("ongoing");


     Assertions.assertEquals("Colombo", journey.getDestination());
     Assertions.assertEquals("Kalutara", journey.getPickup());


 }}
