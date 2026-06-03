package com.example.Clothing_Billing_Software.Entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "bill_items")
@Data
public class BillItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String productName;

    @Column(nullable = false, length = 50)
    private String productCode;

    @Column(length = 20)
    private String size;

    @Column(nullable = false)
    private Integer quantity;

    @Column(nullable = false)
    private Double price;

    @Column(nullable = false)
    private Double totalPrice;
}
