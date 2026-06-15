package com.example.Clothing_Billing_Software.Controller;

import com.example.Clothing_Billing_Software.Entity.Customer;
import com.example.Clothing_Billing_Software.Service.CustomerService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/customers")
@CrossOrigin(origins = "http://localhost:5173")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @PostMapping("/add")
    public ResponseEntity<Customer> addCustomer(@RequestBody Customer customer) {
        Customer savedCustomer = customerService.addCustomer(customer);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedCustomer);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Customer>> getCustomer(){
        List<Customer> customers = customerService.getAllCustomer();
        return new ResponseEntity<>(customers,HttpStatus.OK);
    }
}
