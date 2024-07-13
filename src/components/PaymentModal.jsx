import React from 'react';
import PaymentConfirmationModal from './PaymentConfirmationModal';
import Cart from './Cart';

const PaymentModal = ({ isOpen, onClose, onPaymentSuccess }) => {
    if (!isOpen) return null;
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onPaymentSuccess();
    };
  
    return (
      <div className="payment-modal-overlay">
        <div className="payment-modal">
          <button className="close-button" onClick={onClose}>✖</button>
          <h3>Payment Details</h3>
          <form onSubmit={handleSubmit}>
            <label>Email*</label>
            <input type="email"  />
            
            <label>Credit card Number*</label>
            <input type="text"  />
            
            <label>Cardholder Name*</label>
            <input type="text"  />
            
            <label>Expiring Date*</label>
            <input type="text"  placeholder="MM/YY" />
            
            <label>CVV/CVC*</label>
            <input type="text"  />
            
            <label>Delivery Address*</label>
            <input type="text"  />
            
            <div className="payment-summary">
              <p>Subtotal: $400.00</p>
              <p>VAT(10%): $40.00</p>
              <p>Total: $440.00</p>
            </div>
            
            <button type="submit" className="pay-button">Pay $440.00</button>
          </form>
        </div>
      </div>
    );
  };

export default PaymentModal;
