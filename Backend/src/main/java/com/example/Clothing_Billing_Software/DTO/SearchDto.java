package com.example.Clothing_Billing_Software.DTO;

import com.example.Clothing_Billing_Software.Entity.ProductCategory;
import lombok.Data;

@Data
public class SearchDto {
    private String name;
    private ProductCategory category;
    private String sku;
//    private int barcode;
}
