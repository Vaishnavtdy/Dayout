// CartButton.tsx
import React, { useState } from 'react';
import './CartButton.css';

interface CartButtonProps {
  onAddToCart: (quantity: number) => void;
}

const CartButton: React.FC<CartButtonProps> = ({ onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart(quantity);
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity || 1);
  };

  return (
    <div className="cart-button">
      <input
        type="number"
        value={quantity}
        onChange={handleQuantityChange}
        min={1}
        className="quantity-input"
      />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default CartButton;
