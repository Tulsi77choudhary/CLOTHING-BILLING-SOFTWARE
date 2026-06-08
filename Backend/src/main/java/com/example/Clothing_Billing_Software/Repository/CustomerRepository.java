package com.example.Clothing_Billing_Software.Repository;

import com.example.Clothing_Billing_Software.Entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
    boolean existsByPhone(String phone);
//    ScopedValue<Long> findMaxId();
}
