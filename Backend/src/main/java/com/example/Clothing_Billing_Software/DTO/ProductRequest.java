package com.example.Clothing_Billing_Software.DTO;

import com.example.Clothing_Billing_Software.Entity.ProductCategory;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class ProductRequest {

    private String name;
    private String sku;
    private ProductCategory category;
    private String brand;
    private Double purchasePrice;
    private Double sellingPrice;
    private String status;
    private Integer stockQuantity;
    private String size;

    private String image;

}
