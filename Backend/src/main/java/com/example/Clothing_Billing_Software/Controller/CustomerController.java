package com.example.Clothing_Billing_Software.Controller;

import com.example.Clothing_Billing_Software.Entity.Customer;
import com.example.Clothing_Billing_Software.Service.CustomerService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

public class CustomerController {

    private CustomerService customerService;
    @PostMapping("/add")
    public ResponseEntity<?> createCustomer(@Valid @RequestBody Customer customer) {
        try {
            Customer savedCustomer = customerService.addCustomer(customer);
            return new ResponseEntity<>(savedCustomer, HttpStatus.CREATED);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("An error occurred while saving client database profiles processing lifecycle.");
        }
    }
}
