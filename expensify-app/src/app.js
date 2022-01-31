import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import AppRouter from "./routers/AppRouter";
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore()

store.dispatch(addExpense({ description: 'Water Bill', note: 'The bill for the water', amount: 5000, createdAt: 10000 }))
store.dispatch(addExpense({ description: 'Gas Bill', note: 'The bill for the gas', amount: 15000, createdAt: 150000 }))
store.dispatch(addExpense({ description: 'Rent', note: 'The bill for the rent', amount: 1095, createdAt: 1000090 }))

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById("app"));