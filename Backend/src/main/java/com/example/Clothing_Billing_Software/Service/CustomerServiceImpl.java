package com.example.Clothing_Billing_Software.Service;

import com.example.Clothing_Billing_Software.Entity.Customer;
import com.example.Clothing_Billing_Software.Entity.CustomerGroup;
import com.example.Clothing_Billing_Software.Entity.CustomerStatus;
import com.example.Clothing_Billing_Software.Repository.CustomerRepository;

public class CustomerServiceImpl implements CustomerService{

    private CustomerRepository customerRepository;
    @Override
    public Customer addCustomer(Customer customer) {
        if (customerRepository.existsByPhone(customer.getPhone())) {
            throw new IllegalArgumentException("Customer with this phone number already exists!");
        }
        Customer customer1 = new Customer();

        customer1.setName(customer.getName().trim());
        customer1.setPhone(customer.getPhone().trim());
        customer1.setEmail(customer.getEmail() != null ? customer.getEmail().toLowerCase().trim() : null);

        customer1.setTotalPurchase(customer.getTotalPurchase() != null ? customer.getTotalPurchase() : java.math.BigDecimal.ZERO);
        customer1.setOutstanding(customer.getOutstanding() != null ? customer.getOutstanding() : java.math.BigDecimal.ZERO);

        customer1.setCustomerGroup(customer.getCustomerGroup() != null ? customer.getCustomerGroup() : CustomerGroup.REGULAR);
        customer1.setStatus(customer.getStatus() != null ? customer.getStatus() : CustomerStatus.ACTIVE);
//        customer1.setCustomerId(generateNextCustomerId());

        return customerRepository.save(customer1);
    }

//    private String generateNextCustomerId() {
//        Long maxId = customerRepository.findMaxId().orElse(0L);
//        long nextId = maxId + 1;
//        return String.format("CU%04d", nextId);
//    }
}
