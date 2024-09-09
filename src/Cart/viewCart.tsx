// ViewCart.tsx

import React, { useState, useEffect } from 'react';
import './viewCart.css';
import { useParams ,useNavigate} from 'react-router-dom';
interface CartItem {
  name: string;
  quantity: number;
  price: number;
}

interface ViewCartProps {
  cartItems: CartItem[];
}

const ViewCart: React.FC<ViewCartProps> = ({ cartItems }) => {
    const navigate = useNavigate();
  const [cart, setCart] = useState<CartItem[]>(cartItems);
  const [total, setTotal] = useState<number>(0);

  const handleIncrementQuantity = (index: number) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
  };

  const handleDecrementQuantity = (index: number) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCart(updatedCart);
    }
  };
  const handleViewCart = () => {
    console.log('View Cart clicked');
    // Implement the action you want when the "View Cart" button is clicked
    // For example, you can navigate to the cart page or show a modal
   
    navigate('/checkout');
  };
  // Calculate total amount whenever cart changes
  useEffect(() => {
    const calculatedTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(calculatedTotal);
  }, [cart]);

  return (
    <div className="view-container">
      {/* Cart View */}
      <div className="subgoal-checkout-container">
        <h2>Your Cart</h2>
        <table className="cart-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Amount</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                {/* Assuming you have an image URL in your CartItem */}
                <td>
                  <img
                    // src={item.imageUrl}
                    alt={item.name}
                    style={{ width: '50px', height: '50px' }}
                  />
                </td>
                <td>{item.name}</td>
                <td>
                  <div className="quantity-container">
                    <span className="decrement" onClick={() => handleDecrementQuantity(index)}>
                      -
                    </span>
                    <span className="quantity">{item.quantity}</span>
                    <span className="increment" onClick={() => handleIncrementQuantity(index)}>
                      +
                    </span>
                  </div>
                </td>
                <td>${item.price}</td>
                <td>${item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="cart-total">
          <strong>Total: ${total}</strong>
        </div>
      </div>

      {/* Subgoal and Checkout View */}
      <div className="view-cart-container">
        <h2>Subgoal and Checkout</h2>
        {/* Display the total amount from the cart */}
        <p>Total Amount: ${total}</p>
        {/* Add your checkout button */}
        <button className="viewCartButton" onClick={handleViewCart}>
                      Check Out
                    </button>
      </div>
    </div>
  );
};

export default ViewCart;
