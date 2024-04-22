// RouteInformation.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

//RouteInformation component extracts the id parameter from the URL using useParams(), 
//allowing it to access specific route information.
const RouteInformation = ({ routes, addToCart }) => {
  const { id } = useParams();
  const history = useNavigate();

  const route = routes.find(route => route.id === parseInt(id));

  const handleAddToCart = () => {
    addToCart(route);
    history.push('/ticketpurchase');
  };

  /* this code renders the route information, including the route's name, description, and price, 
  if the route exists. 
  If the route is not found, it displays a message indicating so.  */
  return (
    <div>
      <h1>Route Information</h1>
      {route ? (
        <div>
          <h2>{route.name}</h2>
          <p>Description: {route.description}</p>
          <p>Price: ${route.price}</p>
          <button onClick={handleAddToCart}>Purchase Ticket</button>
        </div>
      ) : (
        <p>Route not found</p>
      )}
      <button onClick={() => history.push('/')}>Back</button>
    </div>
  );
};

export default RouteInformation;
