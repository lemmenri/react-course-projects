import React from "react";
import { useParams } from "react-router";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from '../actions/expenses'

const EditExpensePage = (props) => {
    const navigate = useNavigate();
    const { id } = useParams()
    const selectedExpense = props.expenses.find((expense) => expense.id === id)
    console.log(selectedExpense)
    return (
        <div>
            <ExpenseForm
                expense={selectedExpense}
                onSubmit={(selectedExpense) => {
                    props.dispatch(editExpense(id, selectedExpense))
                    navigate('/')
                }}
            />
            <button onClick={() => {
                props.dispatch(removeExpense({ id }))
                navigate('/')
            }}>Remove</button>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        expenses: state.expenses
    }
}

export default connect(mapStateToProps)(EditExpensePage);