import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; //had a big issue.Please look at bottom of file for explanation
import Navbar from "./components/Navbar";
import AvailableRoutes from "./pages/AvailableRoutes";
import RouteInformation from './pages/RouteInformation';
import TicketPurchase from './pages/TicketPurchase';
import ConfirmationPage from "./pages/ConfirmationPage";
import routesData from './routesData'; //This contains the mock data

const App = () => {
  const [cart, setCart] = useState([]); /* This code depicts the current state of the cart making use of an empty array 
  because the cart is empty at first.
   it also provides the updated state of the cart taking the new value 
   and replacing the current one. */

  const addToCart = (route) => {
    setCart([...cart, route]);
}
 
  return(
    <div className="App">
       <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" Component={<AvailableRoutes />} /> 
            <Route path="/ticketpurchase" component={TicketPurchase} /> 
          <Route path="/confirmation" component={ConfirmationPage}/> 
            <Route
            path="/route/:id"
            render={() => <RouteInformation routes={routesData} addToCart={addToCart} />}
          />
          <Route
            path="/ticketpurchase"
            render={() => <TicketPurchase cart={cart} />}
          />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

//The routes are used to create the different pages 
//using react-router-dom allows for display of pages as well as navigation between them.

/*When I installed react-router-dom I did not get any errors within the terminal, however the server brought up uncaught errors that I had no idea how to fix. 
I am assuming because of these errors that the server came up blank and therefore my work is not displayed. 
The errors spoke about something being wrong with BrowserRouter. 
I attempted to fix it it but to no avail the error kept occurring. */

//References

//https://www.geeksforgeeks.org/what-is-react-router-dom/
//https://www.geeksforgeeks.org/create-a-responsive-navbar-using-reactjs/
//https://react.dev/learn#responding-to-events
//https://www.w3schools.com/REACT/react_components.asp
//https://www.w3schools.com/REACT/default.asp
//https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/
//used e-commerce exercise as template as well
//chatgpt
//https://stackoverflow.com/questions/52034868/confirm-window-in-react