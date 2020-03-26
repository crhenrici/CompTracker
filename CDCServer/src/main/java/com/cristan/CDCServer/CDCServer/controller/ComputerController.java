package com.cristan.CDCServer.CDCServer.controller;


import com.cristan.CDCServer.CDCServer.db.ComputerRepository;
import com.cristan.CDCServer.CDCServer.model.Computer;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "https://localhost:4200")
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
    public void saveComputer(Computer computer) {
        repository.save(computer);
    }
}
