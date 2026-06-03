package com.example.Clothing_Billing_Software.DTO;


import com.example.Clothing_Billing_Software.Entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AuthResponse {
    private String token;
    private String message;
    private User user;
}
