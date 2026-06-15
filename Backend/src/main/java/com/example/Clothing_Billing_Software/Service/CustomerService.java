package com.example.Clothing_Billing_Software.Service;

import com.example.Clothing_Billing_Software.Entity.Customer;

import java.util.List;

public interface CustomerService {
    Customer addCustomer(Customer customer);
    List<Customer> getAllCustomer();
}
