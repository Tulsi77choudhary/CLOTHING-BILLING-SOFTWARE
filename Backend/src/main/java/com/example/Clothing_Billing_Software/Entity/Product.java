package com.example.Clothing_Billing_Software.Entity;

import com.alibaba.excel.annotation.ExcelProperty;
import jakarta.persistence.*;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Entity
@Table(name = "products")
@Data
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ExcelProperty("Product Name")
    private String name;

    @ExcelProperty("Product Name")
    @Column(unique = true)
    private String sku;

    @Enumerated(EnumType.STRING)
    @Column(name = "category")
    private ProductCategory category;

    private String brand;
    private String size;
    private Double price;
    private Integer stock;
    private String status;
    private String imageUrl;

//    @Column(unique = true)
//    private Integer barcode;
}
