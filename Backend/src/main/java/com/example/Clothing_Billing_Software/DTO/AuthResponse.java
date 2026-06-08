package com.example.Clothing_Billing_Software.DTO;


import com.example.Clothing_Billing_Software.Entity.Role;
import com.example.Clothing_Billing_Software.Entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AuthResponse {
    private String token;
    private Role role;
    private String message;
    private User user;

}
