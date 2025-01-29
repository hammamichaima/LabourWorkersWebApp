package com.example.LabourWorkers.Security;

import com.example.LabourWorkers.Entities.ERole;
import com.example.LabourWorkers.Entities.Role;
import com.example.LabourWorkers.Repositories.RoleRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class StartupRunner implements CommandLineRunner {

    private final RoleRepository roleRepository;

    public StartupRunner(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    @Override
    public void run(String... args) {
        insertRoleIfNotExists(ERole.ROLE_USER);
        insertRoleIfNotExists(ERole.ROLE_ADMIN);
        insertRoleIfNotExists(ERole.ROLE_MODERATOR);
    }

    private void insertRoleIfNotExists(ERole roleName) {
        Optional<Role> role = roleRepository.findByName(roleName);
        if (role.isEmpty()) {
            roleRepository.save(new Role(roleName));
            System.out.println("✅ Role " + roleName + " inserted!");
        }
    }
}
