package com.example.Clothing_Billing_Software.Entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "bills")
@Data
public class Billing {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false, length = 20)
    private String billNumber;

    @Column(nullable = false)
    private Double subTotal;

    private Double discount;

    @Column(nullable = false)
    private Double tax;

    @Column(nullable = false)
    private Double grandTotal;

    @Column(nullable = false, length = 30)
    private String paymentMode;

    @Column(length = 500)
    private String orderNotes;

    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
    @JoinColumn(name = "bill_id", nullable = false)
    private List<BillItem> items;

    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
    }
}
