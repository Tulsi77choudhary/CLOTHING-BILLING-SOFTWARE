package com.example.Clothing_Billing_Software.Entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.math.BigDecimal;

@Data
@Entity
@Table(name = "customers")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "customer_id", unique = true, nullable = false, length = 20)
    private String customerId;

    @NotBlank(message = "Customer name is required")
    @Column(name = "name", nullable = false)
    private String name;

    @NotBlank(message = "Contact phone number is required")
    @Column(name = "phone", nullable = false, unique = true)
    private String phone;

    @Email(message = "Please provide a valid email format")
    @Column(name = "email")
    private String email;

    @NotNull(message = "Total purchase value is required")
    @Column(name = "total_purchase", nullable = false)
    private BigDecimal totalPurchase = BigDecimal.ZERO;

    @NotNull(message = "Outstanding amount tracking is required")
    @Column(name = "outstanding", nullable = false)
    private BigDecimal outstanding = BigDecimal.ZERO;

    @Enumerated(EnumType.STRING)
    @Column(name = "customer_group", nullable = false)
    private CustomerGroup customerGroup;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false)
    private CustomerStatus status;

}
