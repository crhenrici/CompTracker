package com.cristian.CTServer.controller;


import com.cristian.CTServer.db.ComputerRepository;
import com.cristian.CTServer.model.Computer;
import com.google.common.base.Preconditions;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ComputerController {

    ComputerRepository repository;

    public ComputerController(ComputerRepository repository) {
        List<Computer> computers = new ArrayList<>();
        this.repository = Preconditions.checkNotNull(repository, "repository is null");
        Computer computer = new Computer(1, "CHWINB1", "Some test computer", "Cristian", "Henrici", "1903",new Date(2020, 06, 25), true);
        Computer computer1 = new Computer(2, "CHWINB2", "Some test computer", "Mess", "User", "1903",new Date(2020, 05, 25), false);
        Computer computer3 = new Computer(3, "CHWINB3", "Some test computer", "Hans", "Muster", "1903",new Date(2019, 06, 25), true);
        Computer computer4 = new Computer(4, "CHWINB4", "Some test computer", "Karin", "Würsten", "1903",new Date(2020, 06, 25), true);
        Computer computer5 = new Computer(5, "CHWINB5", "Some test computer", "Marc", "Muster", "1903",new Date(2020, 06, 25), true);
        computers.add(computer);
        computers.add(computer1);
        computers.add(computer3);
        computers.add(computer4);
        computers.add(computer5);
        repository.saveAll(computers);
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
        Computer result = Preconditions.checkNotNull(repository.save(computer), "computer is not defined");
        System.out.println("Computer after: " +  result.toString());
        return result;
    }

    @PutMapping("/computers/update")
    @ResponseBody
    public Optional<Computer> updateComputer(@RequestBody Computer newComputer) {
        Preconditions.checkNotNull(newComputer, "no computer to update");
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

    @DeleteMapping("/computers/delete/{id}")
    public void deleteComputer(@PathVariable Long id) {
        Preconditions.checkNotNull(id, "no computer to delete");
        System.out.println("Computer id : " + id);
        repository.deleteById(id);
    }
}

