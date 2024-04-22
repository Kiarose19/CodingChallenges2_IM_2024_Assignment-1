import React from "react";
import { Link } from "react-router-dom";

const AvailableRoutes = () => {
    const routesData = [
        {id: 1, name: 'Route A'},
        {id: 2, name: 'Route B'},
        {id: 3, name: 'Route C'},
        {id: 4, name: 'Route D'},
    ];

    return(
        <div>
            <h1>Available Routes</h1>
      <ul>
        {routesData.map(route => (
          <li key={route.id}>
            <Link to={`/route/${route.id}`}>{route.name}</Link>
          </li>
        ))}
      </ul>
        </div>
    );
};

export default AvailableRoutes;