package com.cristan.CDCServer.CDCServer;

import com.cristan.CDCServer.CDCServer.db.ComputerRepository;
import com.cristan.CDCServer.CDCServer.model.Computer;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Date;

@SpringBootApplication
public class CdcServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(CdcServerApplication.class, args);
	}
}
