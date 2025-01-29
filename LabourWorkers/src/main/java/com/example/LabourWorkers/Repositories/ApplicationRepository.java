package com.example.LabourWorkers.Repositories;
import com.example.LabourWorkers.Entities.Application;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import org.springframework.stereotype.Repository;

@Repository
public interface ApplicationRepository extends JpaRepository<Application, Long> {
    List<Application> findByJob_Id(Long jobId);
    List<Application> findByApplicant_Id(Long userId);
}
