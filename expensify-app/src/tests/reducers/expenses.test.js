import expensesReducer from "../../reducers/expenses";
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('should test default state', () => {
    expect(expensesReducer(undefined, { type: '@@INIT' })).toEqual([])
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 'acb'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[1], expenses[2]])
});

test('should add an expense', () => {
    const expense = {
        id: '4',
        description: 'Water Bill',
        note: 'Some note',
        amount: 2750,
        createdAt: moment(0).add(4, 'month').valueOf()
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, expense])
});

test('should edit an expense', () => {
    const updates = {
        description: 'Special Gum',
        note: 'Some gum',
        amount: 1950
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates
    }
    const state = expensesReducer(expenses, action)
    expect(state[0].description).toBe(updates.description)
});

test('should not edit expense if id not found', () => {
    const updates = {
        description: 'Special Gum',
        note: 'Some gum',
        amount: 1950
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: 'abc',
        updates
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[1], expenses[2]])
});
