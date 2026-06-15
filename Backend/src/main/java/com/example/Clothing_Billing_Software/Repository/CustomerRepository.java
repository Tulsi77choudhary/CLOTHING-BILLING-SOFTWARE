package com.example.Clothing_Billing_Software.Repository;

import com.example.Clothing_Billing_Software.Entity.Customer;
import jdk.jfr.Registered;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
    boolean existsByPhone(String phone);
    boolean existsByCustomerId(String customerId);

}
