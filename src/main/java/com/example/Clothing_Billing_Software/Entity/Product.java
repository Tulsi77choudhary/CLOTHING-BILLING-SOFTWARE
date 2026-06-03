package com.example.Clothing_Billing_Software.Entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "products")
@Data
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @Column(unique = true)
    private String sku;
    private String category;
    private String brand;
    private String size;
    private Double price;
    private Integer stock;
    private String status;
}
