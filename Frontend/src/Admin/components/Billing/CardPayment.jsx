import React, { useState } from 'react';

const CardPayment = ({ totalBill, onPaymentComplete }) => {
  const [cardLastDigits, setCardLastDigits] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [cardType, setCardType] = useState('Visa'); // Default type

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic Validation
    if (cardLastDigits.length !== 4 || isNaN(cardLastDigits)) {
      alert("Please enter valid last 4 digits of the card.");
      return;
    }
    if (!transactionId.trim()) {
      alert("Please enter the Transaction/Approval ID.");
      return;
    }

    // Main Billing System ko data bhej rahe hain
    onPaymentComplete({
      type: 'CARD',
      cardLastDigits: cardLastDigits,
      transactionId: transactionId,
      cardType: cardType,
      amountPaid: totalBill // Card payment me poora amount hi swipe hota hai
    });
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>💳 Card Payment Details</h3>
      <form onSubmit={handleSubmit}>
        
        {/* Card Type Selection */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Card Type:</label>
          <select 
            value={cardType} 
            onChange={(e) => setCardType(e.target.value)}
            style={styles.input}
          >
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Rupay">Rupay</option>
            <option value="Amex">Amex</option>
          </select>
        </div>

        {/* Card Last 4 Digits */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Card Last 4 Digits:</label>
          <input 
            type="text" 
            maxLength="4"
            placeholder="e.g., 4321"
            value={cardLastDigits}
            onChange={(e) => setCardLastDigits(e.target.value)}
            style={styles.input}
            required
          />
        </div>

        {/* Transaction ID */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Transaction / Approval ID:</label>
          <input 
            type="text" 
            placeholder="Enter Swipe Receipt No."
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
            style={styles.input}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" style={styles.submitBtn}>
          Confirm Card Swipe (₹{totalBill})
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: { marginTop: '20px', padding: '15px', border: '1px solid #34495e', borderRadius: '8px', backgroundColor: '#f8f9fa' },
  heading: { margin: '0 0 15px 0', color: '#2c3e50', fontSize: '18px' },
  inputGroup: { marginBottom: '12px', display: 'flex', flexDirection: 'column' },
  label: { fontSize: '14px', fontWeight: 'bold', marginBottom: '5px', color: '#34495e' },
  input: { padding: '10px', borderRadius: '4px', border: '1px solid #bdc3c7', fontSize: '14px' },
  submitBtn: { width: '100%', padding: '12px', backgroundColor: '#2980b9', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '15px', fontWeight: 'bold', marginTop: '10px' }
};

export default CardPayment;