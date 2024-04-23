'use client'
import React, { useState } from 'react';
import './SelectSeat.css'; // Import the CSS file

const PaymentPage: React.FC = () => {
  const [cardNumber, setCardNumber] = useState<string>('');
  const [expiryDate, setExpiryDate] = useState<string>('');
  const [cvv, setCvv] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [paymentResult, setPaymentResult] = useState<any>(null);

  const handlePayment = async () => {
    setLoading(true);
    // Simulate a request to the payment gateway API
    try {
      const response = await fetch('https://api.example.com/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cardNumber,
          expiryDate,
          cvv,
          amount: 3000/* Provide the amount to be paid here */, // Provide the actual amount to be paid
        }),
      });
      const data = await response.json();
      setPaymentResult(data);
    } catch (error) {
      console.error('Error processing payment:', error);
      setPaymentResult({ success: false, message: 'An error occurred while processing your payment.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="payment-page">
      <h1>Payment Page</h1>
      <form className="payment-form" onSubmit={handlePayment}>
        <label>
          Card Number:
          <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
        </label>
        <label>
          Expiry Date:
          <input type="text" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
        </label>
        <label>
          CVV:
          <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? 'Processing...' : 'Pay Now'}
        </button>
      </form>
      {paymentResult && (
        <div className="payment-result">
          <p className={paymentResult.success ? 'success' : 'error'}>
            {paymentResult.success ? `Payment successful! Transaction ID: ${paymentResult.transactionId}` : paymentResult.message}
          </p>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
