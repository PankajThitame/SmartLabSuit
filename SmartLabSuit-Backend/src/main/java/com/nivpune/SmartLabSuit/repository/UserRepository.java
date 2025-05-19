package com.nivpune.SmartLabSuit.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nivpune.SmartLabSuit.entity.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmployeeId(String employeeId);
    User findByUsername(String username);
    Boolean existsByRole(String role);
    Optional<User> findByEmployeeIdAndPassword(String name, String password);

}

