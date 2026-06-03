package com.example.Clothing_Billing_Software.Entity;

import jakarta.persistence.*;

import jakarta.validation.constraints.NotBlank;

import lombok.Data;

@Data
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "full_name", nullable = false)
    private String fullName;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @NotBlank(message = "Phone number is required")
    private String phone;

    @Column(name = "password", nullable = false)
    private String password;

    private String confirmPassword;

    @Column(name = "shop_name", nullable = false)
    private String shopName;

    @Column(name = "shop_address", nullable = false, columnDefinition = "TEXT")
    private String shopAddress;

    
}
