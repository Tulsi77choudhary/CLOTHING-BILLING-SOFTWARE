package com.example.Clothing_Billing_Software.Service;

import com.example.Clothing_Billing_Software.DTO.ProductRequest;
import com.example.Clothing_Billing_Software.DTO.SearchDto;
import com.example.Clothing_Billing_Software.Entity.Product;
import com.example.Clothing_Billing_Software.Entity.ProductCategory;

import java.util.List;
import java.util.Optional;

public interface ProductService {

    Product createProduct(ProductRequest request);

    List<Product> getAllProducts();

    Optional<Product> getProductById(Long id);

    void deleteProduct(Long id);

    long getTotalProductCount();

    List<Product> filterProducts(ProductCategory category, String brand, String status);

    Product updateProduct(Long id,ProductRequest request );


    List<Product> findProduct(SearchDto searchDto);
}
