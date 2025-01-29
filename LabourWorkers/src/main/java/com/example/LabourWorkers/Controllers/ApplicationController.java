package com.example.LabourWorkers.Controllers;

import com.example.LabourWorkers.Entities.Application;
import com.example.LabourWorkers.Repositories.ApplicationRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/applications")
public class ApplicationController {

    private final ApplicationRepository applicationRepository;

    public ApplicationController(ApplicationRepository applicationRepository) {
        this.applicationRepository = applicationRepository;
    }

    // Get all applications
    @GetMapping
    public List<Application> getAllApplications() {
        return applicationRepository.findAll();
    }

    // Submit a new job application
    @PostMapping
    public Application applyForJob(@RequestBody Application application) {
        return applicationRepository.save(application);
    }

    // Get applications by job ID
    @GetMapping("/job/{jobId}")
    public ResponseEntity<List<Application>> getApplicationsByJob(@PathVariable Long jobId) {
        List<Application> applications = applicationRepository.findByJob_Id(jobId);
        return applications.isEmpty()
                ? ResponseEntity.notFound().build()
                : ResponseEntity.ok(applications);
    }

    // Get applications by applicant ID
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Application>> getApplicationsByUser(@PathVariable Long userId) {
        List<Application> applications = applicationRepository.findByApplicant_Id(userId);
        return applications.isEmpty()
                ? ResponseEntity.notFound().build()
                : ResponseEntity.ok(applications);
    }
}
