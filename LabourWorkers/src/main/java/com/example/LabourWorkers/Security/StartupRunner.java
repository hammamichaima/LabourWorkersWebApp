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

    //  @Override
    // public void run(String... args) {
    //    insertRoleIfNotExists(ERole.ROLE_USER);
    //    insertRoleIfNotExists(ERole.ROLE_ADMIN);
    //   insertRoleIfNotExists(ERole.ROLE_MODERATOR);
    // }

    @Override
    public void run(String... args) throws Exception {
        if (roleRepository.count() == 0) {
            roleRepository.save(new Role(ERole.ROLE_USER));
            roleRepository.save(new Role(ERole.ROLE_MODERATOR));
            roleRepository.save(new Role(ERole.ROLE_ADMIN));
        }

        //  private void insertRoleIfNotExists(ERole roleName) {
        //     Optional<Role> role = roleRepository.findByName(roleName);
        //    if (role.isEmpty()) {
        //       roleRepository.save(new Role(roleName));
        //      System.out.println("✅ Role " + roleName + " inserted!");
        //    }

    }
}