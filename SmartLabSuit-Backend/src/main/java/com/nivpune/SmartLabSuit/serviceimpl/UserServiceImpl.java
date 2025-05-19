package com.nivpune.SmartLabSuit.serviceimpl;

import com.nivpune.SmartLabSuit.paylods.UserDTO;
import com.nivpune.SmartLabSuit.entity.User;
import com.nivpune.SmartLabSuit.repository.LoginResponse;
import com.nivpune.SmartLabSuit.repository.UserRepository;
import com.nivpune.SmartLabSuit.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User createUser(UserDTO dto) {
        User user = new User();
        user.setEmployeeId(dto.getEmployeeId());
        user.setName(dto.getName());
        user.setEmail(dto.getEmail());
        user.setMobileNumber(dto.getMobileNumber());
        user.setDepartment(dto.getDepartment());
        user.setRole(dto.getRole());
        user.setUserType(dto.getUserType());
        return userRepository.save(user);
    }

     @Override
    public LoginResponse login(String username, String password) {
        Optional<User> optionalUser = userRepository.findByEmployeeIdAndPassword(username, password);
        if (optionalUser.isPresent()) {
            return new LoginResponse(optionalUser.get());
        } else {
            throw new RuntimeException("Invalid username or password");
        }
    }

    @Override
    public User updateUser(String employeeId, UserDTO dto) {
        Optional<User> optionalUser = userRepository.findByEmployeeId(employeeId);
        if (optionalUser.isEmpty()) throw new RuntimeException("User not found");

        User user = optionalUser.get();
        user.setName(dto.getName());
        user.setEmail(dto.getEmail());
        user.setMobileNumber(dto.getMobileNumber());
        user.setDepartment(dto.getDepartment());
        user.setRole(dto.getRole());
        user.setUserType(dto.getUserType());

        return userRepository.save(user);
    }

    @Override
    public User getUserByEmployeeId(String employeeId) {
        return userRepository.findByEmployeeId(employeeId)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    @Override
    public long countAllUsers() {
        return userRepository.count();
    }
}

