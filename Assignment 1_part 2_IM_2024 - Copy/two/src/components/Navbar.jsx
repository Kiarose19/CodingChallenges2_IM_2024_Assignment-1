import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return(
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>Available Routes</Link>
                </li>
                <li>
                    <Link to={"/ticketpurchase"}>Ticket Purchase</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;