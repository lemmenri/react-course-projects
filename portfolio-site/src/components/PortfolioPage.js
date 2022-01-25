import React from "react";
import { Link } from 'react-router-dom';

const PortfolioPage = () => (
    <div>
        <h1>Portfolio: </h1>
        <Link to="/portfolio/1">First Piece</Link>
        <Link to="/portfolio/2">Second Piece</Link>
    </div>
)

export default PortfolioPage;