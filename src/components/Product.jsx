import React from 'react';

function Product({ product, addToCart }) {
  return (
    <div className="product">
        <img src={product.imageUrl} alt={product.name} />
      <h4>{product.name}</h4>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default Product;
