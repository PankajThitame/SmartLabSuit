package com.nivpune.SmartLabSuit.controllers;

import com.nivpune.SmartLabSuit.paylods.UserDTO;
import com.nivpune.SmartLabSuit.entity.User;
import com.nivpune.SmartLabSuit.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public User createUser(@RequestBody UserDTO dto) {
        return userService.createUser(dto);
    }

    @PutMapping("/{employeeId}")
    public User updateUser(@PathVariable String employeeId, @RequestBody UserDTO dto) {
        return userService.updateUser(employeeId, dto);
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

