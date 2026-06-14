package com.example.Clothing_Billing_Software.Repository;

import com.example.Clothing_Billing_Software.Entity.Product;
import com.example.Clothing_Billing_Software.Entity.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query("""
       SELECT p FROM Product p
       WHERE (:category IS NULL OR p.category = :category)
       AND (:brand IS NULL OR LOWER(p.brand) = LOWER(:brand))
       AND (:status IS NULL OR LOWER(p.status) = LOWER(:status))
       """)
    List<Product> filterProductsDynamic(
            @Param("category") ProductCategory category,
            @Param("brand") String brand,
            @Param("status") String status);

    List<Product> findByCategory(
            ProductCategory category
    );

    @Query("""
       SELECT p FROM Product p
       WHERE
       (:name IS NULL OR LOWER(p.name) LIKE LOWER(CONCAT('%', :name, '%')))
       AND (:category IS NULL OR p.category = :category)
       AND (:sku IS NULL OR LOWER(p.sku) LIKE LOWER(CONCAT('%', :sku, '%')))
       
       """)
    List<Product> searchProducts(
            @Param("name") String name,
            @Param("category") ProductCategory category,
            @Param("sku") String sku
    );
}
