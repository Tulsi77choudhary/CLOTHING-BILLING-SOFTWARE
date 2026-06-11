import React, { useState } from 'react';

const UpiPayment = ({ totalBill, onPaymentComplete }) => {
  const [transactionId, setTransactionId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Parent component ko data wapas bhejna
    onPaymentComplete({
      type: 'UPI',
      transactionId: transactionId,
      received: totalBill, 
      change: 0
    });
  };

  return (
    <div style={styles.box}>
      <h3 style={{ color: '#8e44ad' }}>📱 UPI Payment Mode</h3>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={styles.label}>Enter UPI Transaction ID / UTR:</label>
          <input
            type="text"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
            placeholder="Enter 12-digit UTR number"
            required
            style={styles.input}
          />
        </div>

        <button type="submit" style={{ ...styles.submitBtn, backgroundColor: '#8e44ad' }}>
          Verify UPI & Save Bill
        </button>
      </form>
    </div>
  );
};

const styles = {
  box: { padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '8px', border: '1px solid #8e44ad', marginTop: '15px' },
  label: { display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '14px' },
  input: { width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px' },
  submitBtn: { width: '100%', padding: '12px', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }
};

export default UpiPayment;