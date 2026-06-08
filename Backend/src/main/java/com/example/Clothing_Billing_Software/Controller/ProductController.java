package com.example.Clothing_Billing_Software.Controller;

import com.example.Clothing_Billing_Software.Entity.Product;
//import com.example.Clothing_Billing_Software.Service.ProductExcelService;
import com.example.Clothing_Billing_Software.Service.ProductExcelService;
import com.example.Clothing_Billing_Software.Service.ProductService;
import com.example.Clothing_Billing_Software.exception.ResourceNotFoundException;
import jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {

    @Autowired
    private ProductService productService;

    @Autowired
    private ProductExcelService excelService;
    @PostMapping
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {
        Product savedProduct = productService.createProduct(product);
        return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
    }

    @GetMapping ("/products")
    public ResponseEntity<List<Product>> filterProducts(
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String brand,
            @RequestParam(required = false) String status) {

        List<Product> products = productService.getFilteredProducts(
                category,brand, status
        );

        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("/cate")
    public ResponseEntity<List<?>> getProducts(
            @RequestParam(required = false) String category
    ){
             List<Product> products = productService.getProducts(
                     category
             )   ;
             return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/count")
    public ResponseEntity<Long> getTotalProductCount() {
        long totalProducts = productService.getTotalProductCount();
        return ResponseEntity.ok(totalProducts);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        return productService.getProductById(id)
                .map(product -> new ResponseEntity<>(product, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateProduct(@PathVariable Long id, @RequestBody Product productDetails) {
        try {
            Product updatedProduct = productService.updateProduct(id, productDetails);
            return new ResponseEntity<>(updatedProduct, HttpStatus.OK);

        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Product update karne me dikkat aayi: " + e.getMessage());
        }
    }

    @PostMapping("/import")
    public ResponseEntity<?> importExcel(@RequestParam("file") MultipartFile file) {
        if (file.isEmpty()) {
            return ResponseEntity.badRequest()
                    .body(Map.of("message", "Please upload a valid excel file!"));
        }

        try {
            excelService.importProductsFromExcel(file);
            return ResponseEntity.ok(Map.of("message", "Products imported successfully!"));
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "Failed to parse excel file: " + e.getMessage()));
        }
    }

    @GetMapping("/export")
    public ResponseEntity<Resource> exportExcel() {
        String filename = "products_catalogue.xlsx";
        try {
            ByteArrayInputStream in = excelService.exportProductsToExcel();
            InputStreamResource file = new InputStreamResource(in);

            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + filename)
                    .contentType(MediaType.parseMediaType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"))
                    .body((Resource) file);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteProduct(@PathVariable Long id) {
        try {
            productService.deleteProduct(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
