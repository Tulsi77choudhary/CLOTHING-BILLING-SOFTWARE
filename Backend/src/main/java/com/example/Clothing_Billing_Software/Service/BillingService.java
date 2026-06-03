package com.example.Clothing_Billing_Software.Service;

import com.example.Clothing_Billing_Software.Entity.Billing;

import java.util.List;
import java.util.Optional;

public interface BillingService {
    Optional<Billing> getBillByNumber(String billNumber);

    List<Billing> getTransactionHistory();


    Billing saveTransaction(Billing billRequest);
}
