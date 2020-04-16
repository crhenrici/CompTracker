package com.cristan.CTServer.controller;


import com.cristan.CTServer.db.ComputerRepository;
import com.cristan.CTServer.model.Computer;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ComputerController {

    ComputerRepository repository;

    public ComputerController(ComputerRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/computers/fetchAll")
    @ResponseBody
    public List<Computer> getComputers() {
        List<Computer> result = (List<Computer>) repository.findAll();
        System.out.println("Fetch all result: " +  result.toString());
        return result;
    }

    @PostMapping("/computers/save")
    @ResponseBody
    public Computer saveComputer(@RequestBody Computer computer) {
        System.out.println("Computer before insert: " +  computer.toString());
        Computer result =repository.save(computer);
        System.out.println("Computer after: " +  result.toString());
        return result;
    }

    @PutMapping("/computers/update")
    @ResponseBody
    public Optional<Computer> updateComputer(@RequestBody Computer newComputer) {
        System.out.println("Computer updateComputer: " +  newComputer.toString());
        long id = newComputer.getId();
        return repository.findById(id).map(
                computer -> {
                    computer.setComputerName(newComputer.getComputerName());
                    computer.setUserName(newComputer.getUserName());
                    computer.setUserSurname(newComputer.getUserSurname());
                    computer.setDescription(newComputer.getDescription());
                    computer.setWinVersion(newComputer.getWinVersion());
                    computer.setDomainMigration(newComputer.getDomainMigration());
                    computer.setLastUpdate(newComputer.getLastUpdate());
                    return repository.save(computer);
                }
        );
    }
}

