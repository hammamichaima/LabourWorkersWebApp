package com.example.LabourWorkers.Controllers;
import com.example.LabourWorkers.Entities.Job;
import com.example.LabourWorkers.Repositories.JobRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/jobs")
public class JobController {
    private final JobRepository jobRepository;

    public JobController(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    // Get all job postings
    @GetMapping
    public List<Job> getAllJobs() {
        return jobRepository.findAll();
    }

    // Create a new job posting
    @PostMapping
    public Job createJob(@RequestBody Job job) {
        return jobRepository.save(job);
    }

    // Get a job by ID
    @GetMapping("/{id}")
    public Job getJobById(@PathVariable Long id) {
        return jobRepository.findById(id).orElseThrow(() -> new RuntimeException("Job not found"));
    }
}
