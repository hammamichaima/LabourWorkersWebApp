package com.example.LabourWorkers;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;



//@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)

//@SpringBootApplication(

//		exclude = {SecurityAutoConfiguration.class}
//)
@SpringBootApplication
//@EntityScan(basePackages = "com.example.LabourWorkers.Entities")
//@SpringBootApplication(scanBasePackages = {"com.example.LabourWorkers"})
public class LabourWorkersApplication {
	public static void main(String[] args) {
		SpringApplication.run(LabourWorkersApplication.class, args);
	}
}
