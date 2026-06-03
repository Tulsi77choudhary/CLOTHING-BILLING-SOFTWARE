package com.example.Clothing_Billing_Software.Service;

import com.example.Clothing_Billing_Software.Entity.Product;
import com.example.Clothing_Billing_Software.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
    public List<Product> getProducts(String category) {
        if (category == null || category.trim().isEmpty() || category.equalsIgnoreCase("All")) {
            return productRepository.findAll();
        }
        return productRepository.findByCategory(category);
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
    public List<Product> getFilteredProducts(
            String category, String brand, String status) {

        if ((category == null || category.equalsIgnoreCase("all")) &&
                (brand == null || brand.equalsIgnoreCase("all")) &&
                (status == null || status.equalsIgnoreCase("all"))) {

            return productRepository.findAll();
        }

        // Single Filter
        if (category != null && !category.equalsIgnoreCase("all") &&
                (brand == null || brand.equalsIgnoreCase("all")) &&
                (status == null || status.equalsIgnoreCase("all"))) {

            return productRepository.findByCategory(category);
        }

        if (brand != null && !brand.equalsIgnoreCase("all") &&
                (category == null || category.equalsIgnoreCase("all")) &&
                (status == null || status.equalsIgnoreCase("all"))) {

            return productRepository.findByBrand(brand);
        }

        if (status != null && !status.equalsIgnoreCase("all") &&
                (category == null || category.equalsIgnoreCase("all")) &&
                (brand == null || brand.equalsIgnoreCase("all"))) {

            return productRepository.findByStatus(status);
        }

        if (category != null && !category.equalsIgnoreCase("all") &&
                brand != null && !brand.equalsIgnoreCase("all") &&
                (status == null || status.equalsIgnoreCase("all"))) {

            return productRepository.findByCategoryAndBrand(category, brand);
        }

        if (category != null && !category.equalsIgnoreCase("all") &&
                status != null && !status.equalsIgnoreCase("all") &&
                (brand == null || brand.equalsIgnoreCase("all"))) {

            return productRepository.findByCategoryAndStatus(category, status);
        }

        if (brand != null && !brand.equalsIgnoreCase("all") &&
                status != null && !status.equalsIgnoreCase("all") &&
                (category == null || category.equalsIgnoreCase("all"))) {

            return productRepository.findByBrandAndStatus(brand, status);
        }


        return productRepository.findByCategoryAndBrandAndStatus(
                category, brand, status);
    }
}
