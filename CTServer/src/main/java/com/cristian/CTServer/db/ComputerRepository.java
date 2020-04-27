package com.cristian.CTServer.db;

import com.cristian.CTServer.model.Computer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ComputerRepository extends CrudRepository<Computer, Long> {
    List<Computer> findComputerByComputerName(String computerName);
    List<Computer> findComputerByUserName(String userName);
    List<Computer> findComputerByUserSurname(String userSurname);
}
