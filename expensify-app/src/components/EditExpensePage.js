import React from "react";
import { useParams } from "react-router";

const EditExpensePage = (props) => {
    console.log(useParams())
    return (
        <div>
            Editing the expense with id of {useParams().id}
        </div>
    )
}

export default EditExpensePage;