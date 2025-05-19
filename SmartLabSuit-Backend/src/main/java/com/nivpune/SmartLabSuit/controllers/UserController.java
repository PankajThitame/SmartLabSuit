package com.nivpune.SmartLabSuit.controllers;

import com.nivpune.SmartLabSuit.paylods.LoginRequest;
import com.nivpune.SmartLabSuit.paylods.UserDTO;
import com.nivpune.SmartLabSuit.repository.LoginResponse;
import com.nivpune.SmartLabSuit.repository.UserRepository;
import com.nivpune.SmartLabSuit.entity.User;
import com.nivpune.SmartLabSuit.service.UserService;

import lombok.Getter;
import lombok.Setter;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;
    
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    @PostMapping
    public User createUser(@RequestBody UserDTO dto) {
        return userService.createUser(dto);
    }

    @PutMapping("/{employeeId}")
    public User updateUser(@PathVariable String employeeId, @RequestBody UserDTO dto) {
        return userService.updateUser(employeeId, dto);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        User user = userRepository.findByUsername(request.getUsername());
        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not found");
        }

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid password");
        }

        // If you’re not using JWT, just send success
        return ResponseEntity.ok(user);
    }
    @Getter @Setter
    public static class LoginRequest {
        private String username;
        private String password;
        // getters & setters
    }

    @GetMapping("/{employeeId}")
    public User getUser(@PathVariable String employeeId) {
        return userService.getUserByEmployeeId(employeeId);
    }

    @GetMapping("/count")
    public long countUsers() {
        return userService.countAllUsers();
    }
}

