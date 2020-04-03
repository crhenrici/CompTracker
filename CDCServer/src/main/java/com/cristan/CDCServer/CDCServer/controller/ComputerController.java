package com.cristan.CDCServer.CDCServer.controller;


import com.cristan.CDCServer.CDCServer.db.ComputerRepository;
import com.cristan.CDCServer.CDCServer.model.Computer;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ComputerController {

    ComputerRepository repository;

    public ComputerController(ComputerRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/computers")
    public List<Computer> getComputers() {
        return (List<Computer>) repository.findAll();
    }

    @PostMapping("/computers")
    public void saveComputer(@RequestBody Computer computer) {
        repository.save(computer);
        System.out.println("Computer: " +  computer);
    }
}

