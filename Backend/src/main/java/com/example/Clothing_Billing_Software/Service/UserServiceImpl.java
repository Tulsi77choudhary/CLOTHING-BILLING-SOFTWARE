package com.example.Clothing_Billing_Software.Service;


import com.example.Clothing_Billing_Software.Config.JwtUtil;
import com.example.Clothing_Billing_Software.DTO.UserRegisterDto;

import com.example.Clothing_Billing_Software.Entity.User;
import com.example.Clothing_Billing_Software.Repository.UserRepository;
import com.example.Clothing_Billing_Software.exception.UserException;
import jakarta.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public User registerUser(UserRegisterDto registerDto) throws UserException{

        if (!registerDto.getPassword().equals(registerDto.getConfirmPassword())) {
            throw new IllegalArgumentException("Password and Confirm Password do not match!");
        }
        if (userRepository.existsByEmail(registerDto.getEmail())) {
            throw new IllegalStateException("Email identity is already registered inside SMMS system!");
        }
        if (userRepository.existsByPhone(registerDto.getPhone())) {
            throw new IllegalStateException("Phone number is already associated with another shop account!");
        }
        User newUser = new User();
        newUser.setFullName(registerDto.getFullName().trim());
        newUser.setEmail(registerDto.getEmail().toLowerCase().trim());
        newUser.setPhone(registerDto.getPhone().trim());
        newUser.setShopName(registerDto.getShopName().trim());
        newUser.setShopAddress(registerDto.getShopAddress().trim());
        newUser.setReferredBy(registerDto.getReferredBy().trim());

        String securePasswordHash = passwordEncoder.encode(registerDto.getPassword());
        newUser.setPassword(securePasswordHash);

        return userRepository.save(newUser);
    }

    @Override
    public User login(String email, String password) throws UserException {
        User user = userRepository.findByEmail(email)
                .orElseThrow(()-> new UserException("Invalid email or password"));

        if (!passwordEncoder.matches(password,user.getPassword())){
            throw new UserException("Invalid email or password");
        }

        user.setPassword(null);
        user.setConfirmPassword(null);
        return user;
    }


    @Override
    public User findUserProfileByJwt(String token) throws UserException {
        String email = jwtUtil.extractUsername(token);
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new UserException("User not found for this token"));
    }

}
