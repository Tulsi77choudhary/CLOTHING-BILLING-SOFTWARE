package com.example.Clothing_Billing_Software.Repository;

import com.example.Clothing_Billing_Software.Entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long > {

    @Query("""
       SELECT p FROM Product p
       WHERE (:category IS NULL OR p.category = :category)
       AND (:brand IS NULL OR p.brand = :brand)
       AND (:status IS NULL OR p.status = :status)
       """)
    List<Product> filterProducts(
            @Param("category") String category,
            @Param("brand") String brand,
            @Param("status") String status);

    List<Product> findByCategory(String category);

    List<Product> findByBrand(String brand);

    List<Product> findByStatus(String status);

    List<Product> findByCategoryAndBrand(String category, String brand);

    List<Product> findByCategoryAndStatus(String category, String status);

    List<Product> findByBrandAndStatus(String brand, String status);

    List<Product> findByCategoryAndBrandAndStatus(String category, String brand, String status);
}
