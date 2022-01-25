import React from "react";
import { useParams } from "react-router";

const PortfolioItemPage = (props) => {
    console.log(useParams())
    return (
        <div>
            <h1>Portfolio: </h1>
            This is portfolio piece {useParams().id}
        </div>
    )
}

export default PortfolioItemPage;