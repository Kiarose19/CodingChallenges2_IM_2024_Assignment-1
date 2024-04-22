// TicketPurchase.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//This manages state of ticket quantities and total amount due
const TicketPurchase = ({ cart, clearCart }) => {
  const [ticketQuantities, setTicketQuantities] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);
  const history = useNavigate(); 

  // Function to handle updating ticket quantities
  const handleTicketQuantityChange = (routeId, quantity) => {
    setTicketQuantities({ ...ticketQuantities, [routeId]: quantity });
  };

  // Function to calculate total amount due
  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach(route => {
      total += ticketQuantities[route.id] * route.price;
    });
    setTotalAmount(total);
  };

  // Function to handle checkout
  const handleCheckout = () => {
    // Simulate submitting the order (setTimeout used for demo purposes)
    setTimeout(() => {
      // Clear the cart
      clearCart();
      // Redirect to confirmation page
      history.push('/confirmation');
    }, 2000);
  };

  //This renders ticket info for each route in cart array and provides interactivity
  //for updating ticket quantities and removing routes from cart
  return (
    <div>
      <h1>Ticket Purchase</h1>
      {cart.length > 0 ? (
        <div>
          {cart.map(route => (
            <div key={route.id}>
              <h2>{route.name}</h2>
              <p>Price: ${route.price}</p>
              <label>
                Quantity:
                <input
                  type="number"
                  min="1"
                  value={ticketQuantities[route.id] || 1}
                  onChange={(e) => handleTicketQuantityChange(route.id, parseInt(e.target.value))}
                />
              </label>
              <button onClick={() => handleTicketQuantityChange(route.id, 0)}>Remove</button>
            </div>
          ))}
          <p>Total Amount Due: ${totalAmount}</p>
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      ) : (
        <p>No tickets in cart</p>
      )}
    </div>
  );
};

export default TicketPurchase;
