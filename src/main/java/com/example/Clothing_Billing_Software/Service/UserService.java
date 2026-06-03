package com.example.Clothing_Billing_Software.Service;

import com.example.Clothing_Billing_Software.DTO.UserRegisterDto;
import com.example.Clothing_Billing_Software.Entity.User;
import com.example.Clothing_Billing_Software.exception.UserException;

public interface UserService {
    User registerUser(UserRegisterDto registerDto) throws UserException;
    User login(String email, String password) throws UserException;

    User findUserProfileByJwt(String jwt) throws UserException;
}
