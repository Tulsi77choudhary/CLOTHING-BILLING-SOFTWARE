package com.example.Clothing_Billing_Software.Service;

import com.example.Clothing_Billing_Software.DTO.ProductRequest;
import com.example.Clothing_Billing_Software.DTO.SearchDto;
import com.example.Clothing_Billing_Software.Entity.Product;
import com.example.Clothing_Billing_Software.Entity.ProductCategory;
import com.example.Clothing_Billing_Software.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.nio.file.*;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;


    @Override
    public Product createProduct(ProductRequest request) {

        try {

            String imageUrl = null;

            MultipartFile image = request.getImage();

            if (image != null && !image.isEmpty()) {

                String uploadDir = "uploads/products";

                Path uploadPath = Paths.get(uploadDir);
                if (!Files.exists(uploadPath)) {
                    Files.createDirectories(uploadPath);
                }

                String fileName =
                        System.currentTimeMillis() + "_" +
                                image.getOriginalFilename();

                Path filePath = uploadPath.resolve(fileName);

                Files.copy(
                        image.getInputStream(),
                        filePath,
                        StandardCopyOption.REPLACE_EXISTING
                );

                imageUrl = "/uploads/products/" + fileName;
            }
            Product product = new Product();

            product.setName(request.getName());
            product.setSku(request.getSku());

            product.setCategory(request.getCategory());

            product.setBrand(request.getBrand());
            product.setSize(request.getSize());

            product.setPrice(request.getSellingPrice());

            product.setStock(
                    request.getStockQuantity()
            );
            product.setStatus(request.getStatus());

            product.setImageUrl(imageUrl);

            return productRepository.save(product);

        } catch (IOException e) {

            throw new RuntimeException(
                    "Failed to upload image",
                    e
            );
        }
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
    public Product updateProduct(Long id, ProductRequest request) {

        return productRepository.findById(id).map(existingProduct -> {
            existingProduct.setName(request.getName());
            existingProduct.setSku(request.getSku());
            existingProduct.setCategory(request.getCategory());
            existingProduct.setBrand(request.getBrand());
            existingProduct.setSize(request.getSize());
            existingProduct.setPrice(request.getPurchasePrice());
            existingProduct.setPrice(request.getSellingPrice());
            existingProduct.setStock(request.getStockQuantity());
            existingProduct.setStatus(request.getStatus());
            existingProduct.setImageUrl(request.getImage());

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
