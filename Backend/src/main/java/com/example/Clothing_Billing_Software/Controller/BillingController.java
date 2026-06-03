package com.example.Clothing_Billing_Software.Controller;

import com.example.Clothing_Billing_Software.Entity.Billing;
import com.example.Clothing_Billing_Software.Service.BillingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

public class BillingController {

    @Autowired
    private BillingService billingService;
    @PostMapping("/checkout")
    public ResponseEntity<Billing> processCheckout(@RequestBody Billing billRequest) {
        try {
            Billing savedBill = billingService.saveTransaction(billRequest);
            return new ResponseEntity<>(savedBill, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
