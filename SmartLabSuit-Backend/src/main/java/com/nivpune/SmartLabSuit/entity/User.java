package com.nivpune.SmartLabSuit.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;  // Regular auto-increment ID

    @Column(unique = true, nullable = false)
    private String employeeId; // Manually entered unique ID

    private String name;

    @Column(unique = true)
    private String email;

    private String mobileNumber;

    private String department;

    private String role;

    private String username;

    @Column(nullable = false)
    private String password;

    private boolean enabled;

    

    private String userType; // e.g., Permanent, Temporary, Project Staff
}

