package com.example.LabourWorkers.Repositories;

import java.util.Optional;

import com.example.LabourWorkers.Entities.ERole;
import com.example.LabourWorkers.Entities.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}