package com.example.gocheeta.controller;

import com.example.gocheeta.dto.JourneyDto;
import com.example.gocheeta.model.Driver;
import com.example.gocheeta.model.Journey;
import com.example.gocheeta.model.Vehicle;
import com.example.gocheeta.repository.DriverRepository;
import com.example.gocheeta.repository.JourneyRepository;
import com.example.gocheeta.service.JourneyService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/journey")
@AllArgsConstructor
public class JourneyController {

    private JourneyService journeyService;
    private JourneyRepository journeyRepository;
    @PostMapping("/create")
    public ResponseEntity<Journey> createJourney(@RequestBody JourneyDto journeyDto){
        HttpStatus response = HttpStatus.CREATED;
        Journey journey = new Journey();

        if(journeyDto == null){
            response =  HttpStatus.BAD_REQUEST;
        }


        return new ResponseEntity<>(journeyService.BookJourney(journeyDto), HttpStatus.CREATED);


    }


    @PostMapping("/finish")
    public ResponseEntity<Journey> finishJourney(@RequestParam(name = "id") String id){

        return new ResponseEntity<>(journeyService.closeJourney(Long.valueOf(id)),HttpStatus.CREATED);
    }

    @GetMapping("/findAll")
    public ResponseEntity<List<Journey>>findAll(){
        return new ResponseEntity<>( journeyRepository.findAll(), HttpStatus.ACCEPTED);
    }
}
