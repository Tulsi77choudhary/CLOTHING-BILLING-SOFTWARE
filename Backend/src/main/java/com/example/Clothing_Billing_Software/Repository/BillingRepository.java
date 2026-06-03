package com.example.Clothing_Billing_Software.Repository;

import com.example.Clothing_Billing_Software.Entity.Billing;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BillingRepository extends JpaRepository<Billing,Long> {
}
