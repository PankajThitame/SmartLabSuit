package com.nivpune.SmartLabSuit.config;

import com.nivpune.SmartLabSuit.entity.User;
import com.nivpune.SmartLabSuit.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public DataInitializer(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) throws Exception {
        // Check if any admin user exists
        boolean adminExists = userRepository.existsByRole("ROLE_ADMIN");

        if (!adminExists) {
            User admin = new User();
            admin.setEmployeeId("EMP001");
            admin.setName("Pankaj Thitame");
            admin.setEmail("thitamepankaj2020@gmail.com");
            admin.setMobileNumber("7821828016");
            admin.setDepartment("Developer");
            admin.setUsername("admin");
            admin.setPassword(passwordEncoder.encode("admin"));  // default password
            admin.setRole("ROLE_ADMIN");
            admin.setEnabled(true);
            admin.setUserType("temporary");

            userRepository.save(admin);

            System.out.println("Admin user created: username='admin', password='admin'");
        }
    }
}

