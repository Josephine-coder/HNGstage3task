import { useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import PaymentModal from "./PaymentModal";
import PaymentConfirmationModal from "./PaymentConfirmationModal";

function Cart({ cart: initialCart }) {
  const [cart, setCart] = useState(initialCart);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  //   const total = cart.reduce((sum, product) => sum + (product.price * product.quantity), 0);
  const total = cart.reduce((sum, product) => sum + product.price, 0);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handlePaymentSuccess = () => {
    setIsModalOpen(false);
    setIsConfirmationModalOpen(true);
    setTimeout(() => {
      setIsConfirmationModalOpen(false);
    }, 3000);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === productId
          ? { ...product, quantity: newQuantity }
          : product
      )
    );
  };

  return (
    <div className="cart">
      <Link to="/" className="arrow-link"> Return to store</Link>

      <h3>Shopping Cart</h3>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((product, index) => (
          <CartItem
            key={index}
            product={product}
            onQuantityChange={handleQuantityChange}
          />
        ))
      )}
      <div className="total">
        <h3>Price Details</h3>
        <p>Total: ${total}</p>
        <p>Delivery: ${0.0}</p>
        <p>Subtotal: ${total}</p>
        <button onClick={openModal} className="pay-button">
          Pay ${total}
        </button>
      </div>
      {/* <PaymentModal isOpen={isModalOpen} onClose={closeModal} onPaymentSuccess={handlePaymentSuccess} />
      <PaymentConfirmationModal isOpen={isConfirmationModalOpen} onClose={() => setIsConfirmationModalOpen(false)} /> */}

      <PaymentModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onPaymentSuccess={handlePaymentSuccess}
        total={total}
      />

      <PaymentConfirmationModal
        isOpen={isConfirmationModalOpen}
        onClose={() => setIsConfirmationModalOpen(false)}
      />
    </div>
  );
}

export default Cart;
