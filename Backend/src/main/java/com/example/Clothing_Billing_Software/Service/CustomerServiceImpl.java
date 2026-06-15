package com.example.Clothing_Billing_Software.Service;

import com.example.Clothing_Billing_Software.Entity.Customer;
import com.example.Clothing_Billing_Software.Repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class CustomerServiceImpl implements CustomerService{

    @Autowired
    private CustomerRepository customerRepository;
    @Override
    public Customer addCustomer(Customer customer) {
        if (customerRepository.existsByPhone(customer.getPhone())) {
            throw new IllegalArgumentException("Customer with this phone number already exists!");
        }

        customer.setCustomerId(generateCustomerId());

        return customerRepository.save(customer);
    }

    @Override
    public List<Customer> getAllCustomer() {
        return customerRepository.findAll();
    }

    private String generateCustomerId(){
        return "TSAR-" + UUID.randomUUID()
                .toString()
                .substring(0,6)
                .toUpperCase();
    }
}
