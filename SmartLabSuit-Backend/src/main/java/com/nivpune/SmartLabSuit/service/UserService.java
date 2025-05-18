package com.nivpune.SmartLabSuit.service;

import com.nivpune.SmartLabSuit.paylods.UserDTO;
import com.nivpune.SmartLabSuit.entity.User;

public interface UserService {
    User createUser(UserDTO dto);
    User updateUser(String employeeId, UserDTO dto);
    User getUserByEmployeeId(String employeeId);
    long countAllUsers();
}

