
// import React from 'react';

// const CartItem = ({ product }) => {
//   return (
//     <div className="cart-item">
//       <div className="cart-item-image">
//         <img src={product.imageUrl} alt={product.name} />
//         <button className="remove-button">✖</button>
//       </div>
//       <div className="cart-item-details">
//         <h4>{product.name}</h4>
//         <p>Eligible for free shipping</p>
//         <p>Price: ${product.price}</p>
//         <div className="cart-item-quantity">
//           <button className="quantity-button">-</button>
//           <span>1 unit</span>
//           <button className="quantity-button">+</button>
//         </div>
//         <p className="subtotal">Subtotal: ${product.price}</p>
//       </div>
//     </div>
//   );
// };

// export default CartItem;

import React from 'react';

const CartItem = ({ product, onQuantityChange }) => {
  const handleIncrement = () => {
    onQuantityChange(product.id, product.quantity + 1);
  };

  const handleDecrement = () => {
    if (product.quantity > 1) {
      onQuantityChange(product.id, product.quantity - 1);
    }
  };

  return (
    <div className="cart-item">
      <img src={product.imageUrl} alt={product.name} />
      <div className="details">
        <h4>{product.name}</h4>
        <p>Price: ${product.price.toFixed(2)}</p>
        <div className="quantity-controls">
          <button onClick={handleDecrement}>-</button>
          <span>{product.quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
        <p>Subtotal: ${(product.price * product.quantity).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartItem;

