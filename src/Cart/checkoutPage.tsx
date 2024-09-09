// CheckoutPage.tsx

import React, { useState } from 'react';
import './checkout.css'; // You can create a separate CSS file for styling
import { Row } from 'react-bootstrap';

interface CartItem {
  name: string;
  quantity: number;
  price: number;
}

interface CreditCard {
  id: number;
  cardNumber: string;
  cardHolderName: string;
  expiryDate: string;
  cvv: string;
  // Add more card details as needed
}

interface CheckoutPageProps {
  cartItems: CartItem[];
  total: number;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ cartItems, total }) => {
  const [paymentMethod, setPaymentMethod] = useState<string>('credit-card');
  const [creditCards, setCreditCards] = useState<CreditCard[]>([]);
  const [newCard, setNewCard] = useState<CreditCard>({
    id: 0, // Assign a unique id to each card
    cardNumber: '',
    cardHolderName: '',
    expiryDate: '',
    cvv: '',
  });

  const handlePaymentMethodChange = (method: string) => {
    setPaymentMethod(method);
  };

  const handleCheckout = () => {
    // Implement your checkout logic here, such as sending the order to a server or a payment gateway
    console.log('Checkout clicked');
  };

  const handleAddCard = () => {
    setNewCard((prevCard) => ({
      ...prevCard,
      id: creditCards.length + 1, // Generate a unique id for the new card
    }));
    setCreditCards((prevCards) => [...prevCards, newCard]);
  };

  return (
    <div className="checkout-container">
      <div className="order-summary">
        <h2>Order Summary</h2>
        {cartItems.map((item, index) => (
          <div key={index} className="order-summary-card">
            <div className="card-content">
              <h3>{item.name}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Total: ${item.price * item.quantity}</p>
            </div>
          </div>
        ))}
        <div className="total-amount">
          <strong>Total: ${total}</strong>
        </div>
      </div>

      <div className="payment-options">
        <h2>Payment Options</h2>
        <div className="payment-methods">
          <label>
            <input
              type="radio"
              value="credit-card"
              checked={paymentMethod === 'credit-card'}
              onChange={() => handlePaymentMethodChange('credit-card')}
            />
            Credit Card
          </label>
          <label>
            <input
              type="radio"
              value="paypal"
              checked={paymentMethod === 'paypal'}
              onChange={() => handlePaymentMethodChange('paypal')}
            />
            PayPal
          </label>
          {/* Add more payment options as needed */}
        </div>

        {paymentMethod === 'credit-card' && (
          <div className="credit-card-form">
            <h2>Add Credit Card</h2>
            <div>
              <label>Card Number:</label>
              <input
                type="text"
                value={newCard.cardNumber}
                onChange={(e) => setNewCard({ ...newCard, cardNumber: e.target.value })}
              />
            </div>
            <div>
              <label>Card Holder Name:</label>
              <input
                type="text"
                value={newCard.cardHolderName}
                onChange={(e) => setNewCard({ ...newCard, cardHolderName: e.target.value })}
              />
            </div>
           
                <Row>
                <div className="row">
                <div>
                <label>Expiry Date:</label>
                <input
                  type="text"
                  value={newCard.expiryDate}
                  onChange={(e) => setNewCard({ ...newCard, expiryDate: e.target.value })}
                />
              </div>
              <div>
                <label>CVV:</label>
                <input
                  type="text"
                  value={newCard.cvv}
                  onChange={(e) => setNewCard({ ...newCard, cvv: e.target.value })}
                />
              </div>
              </div>
                </Row>
              
            
            <button onClick={handleAddCard} style={{ marginBottom: '10px' }}>
  Add Card
</button>
          </div>
        )}

        {/* Display added cards */}
        {creditCards.length > 0 && (
          <div className="added-cards">
            <h2>Added Cards</h2>
            {creditCards.map((card) => (
              <div key={card.id} className="added-card">
                <p>Card Number: {card.cardNumber}</p>
                <p>Card Holder: {card.cardHolderName}</p>
                <p>Expiry Date: {card.expiryDate}</p>
                <p>CVV: {card.cvv}</p>
              
              </div>
            ))}
          </div>
        )}

        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
};

export default CheckoutPage;
