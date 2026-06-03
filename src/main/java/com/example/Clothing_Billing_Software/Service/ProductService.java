package com.example.Clothing_Billing_Software.Service;

import com.example.Clothing_Billing_Software.Entity.Product;

import java.util.List;
import java.util.Optional;

public interface ProductService {

    Product createProduct(Product product);
    List<Product> getAllProducts();
    Optional<Product> getProductById(Long id);
    void deleteProduct(Long id);
    long getTotalProductCount();

    List<Product> getFilteredProducts(String category, String brand, String status);
    Product updateProduct(Long id, Product productDetails);
    List<Product> getProducts(String category);
}
