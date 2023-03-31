import React, { createContext, useContext, useReducer, useEffect } from 'react';
import items from '../data';
import reducer from './Reducer'


const Cart = createContext()

const initialState = {
    products: items,
    cart: [],
    total: 0,
    quantity: 0,

}

const Context = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state)

    useEffect(() => {
        dispatch({ type: 'GET_TOTALS' })

    }, [state.cart])



    return (
        <Cart.Provider value={{ ...state, dispatch }}>
            {children}
        </Cart.Provider>
    )

}

export const useGlobalContext = () => {
    return useContext(Cart)
}

export { Cart, Context }