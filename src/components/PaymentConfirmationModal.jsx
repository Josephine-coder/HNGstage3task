import { useEffect } from 'react';

const PaymentConfirmationModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 10000); 

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="payment-confirmation-modal-overlay">
      <div className="payment-confirmation-modal">
        <div className="success-icon">✔</div>
        <h3>Payment Successful</h3>
        <p>You are being redirected to the store</p>
      </div>
    </div>
  );
};

export default PaymentConfirmationModal;
