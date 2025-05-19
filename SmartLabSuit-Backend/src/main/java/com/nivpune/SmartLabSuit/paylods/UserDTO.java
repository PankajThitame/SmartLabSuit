package com.nivpune.SmartLabSuit.paylods;

import lombok.*;

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
public class UserDTO {
    private String employeeId;
    private String name;
    private String email;
    private String mobileNumber;
    private String department;
    private String role;
    private String userType;
    private String username;
    private String password;
    private boolean enabled;
}

