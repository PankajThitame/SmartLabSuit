package com.nivpune.SmartLabSuit.repository;

import com.nivpune.SmartLabSuit.entity.User;

import lombok.Getter;

@Getter
public class LoginResponse {
    private String employeeId;
    private String name;
    private String role;
    private String department;
    private String userType;

    // Constructor
    public LoginResponse(User user) {
        this.employeeId = user.getEmployeeId();
        this.name = user.getName();
        this.role = user.getRole();
        this.department = user.getDepartment();
        this.userType = user.getUserType();
    }

    // Getters
}

