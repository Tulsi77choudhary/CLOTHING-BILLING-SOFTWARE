package com.example.Clothing_Billing_Software.Service;

import com.example.Clothing_Billing_Software.DTO.SearchDto;
import com.example.Clothing_Billing_Software.Entity.Product;
import com.example.Clothing_Billing_Software.Entity.ProductCategory;
import com.example.Clothing_Billing_Software.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Locale;
import java.util.Optional;
import java.util.logging.Level;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Optional<Product> getProductById(Long id) {
        return productRepository.findById(id);
    }

    @Override
    public Product updateProduct(Long id, Product productDetails) {

        return productRepository.findById(id).map(existingProduct -> {
            existingProduct.setName(productDetails.getName());
            existingProduct.setSku(productDetails.getSku());
            existingProduct.setCategory(productDetails.getCategory());
            existingProduct.setBrand(productDetails.getBrand());
            existingProduct.setSize(productDetails.getSize());
            existingProduct.setPrice(productDetails.getPrice());
            existingProduct.setStock(productDetails.getStock());
            existingProduct.setStatus(productDetails.getStatus());

            return productRepository.save(existingProduct);

        }).orElseThrow(() -> new RuntimeException("Product not found with id: " + id));
    }

    @Override
    public List<Product> findProduct(SearchDto searchDto) {

        return productRepository.searchProducts(
                searchDto.getName(),
                searchDto.getCategory(),
                searchDto.getSku()
               // searchDto.getBarcode()
        );
    }


    @Override
    public void deleteProduct(Long id) {
        if (productRepository.existsById(id)) {
            productRepository.deleteById(id);
        } else {
            throw new RuntimeException("Product not found with id: " + id);
        }
    }

    @Override
    public long getTotalProductCount() {
        return productRepository.count();
    }


    @Override
    public List<Product> filterProducts(ProductCategory category, String brand, String status) {

        // 1. Agar category null hai ya ALL hai
        ProductCategory categoryFilter = (category == null || category == ProductCategory.ALL) ? null : category;

        // 2. Agar brand null hai,
        String brandFilter = (brand == null || brand.equalsIgnoreCase("all") || brand.trim().isEmpty()) ? null : brand;

        // 3. Agar status null hai
        String statusFilter = (status == null || status.equalsIgnoreCase("all") || status.trim().isEmpty()) ? null : status;

        return productRepository.filterProductsDynamic(categoryFilter, brandFilter, statusFilter);
    }
}
