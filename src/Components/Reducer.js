const reducer = (state, action) => {
    // console.log(action, state)
    if (action.type === "ADDTOCART") {
        return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] }

    }

    if (action.type === "CLEARCART") {
        return { ...state, cart: [] }
    }

    if (action.type === "REMOVE") {
        return { ...state, cart: state.cart.filter((citem) => citem.id !== action.payload) }
    }
    if (action.type === "INCREASE") {
        let tempcart = state.cart.map((citem) => {
            if (citem.id === action.payload) {
                return { ...citem, quantity: citem.quantity + 1 }
            }
            return citem
        })
        return { ...state, cart: tempcart }
    }


    if (action.type === "DECREASE") {
        let tempcart = state.cart.map((citem) => {
            if (citem.id === action.payload) {
                return { ...citem, quantity: citem.quantity - 1 }
            }
            return citem
        }).filter((citem) => citem.quantity !== 0)
        return { ...state, cart: tempcart }
    }

    if (action.type === "GET_TOTALS") {
        const { total, quantity } = state.cart.reduce((cartTotal, citem) => {
            console.log(cartTotal, citem)
            const { price, quantity } = citem
            const itemTotal = price * quantity
            cartTotal.total += itemTotal
            cartTotal.quantity += quantity
            return cartTotal
        },
            { total: 0, quantity: 0 })

        return { ...state, total, quantity }
    }

    // if (action.type === "GET_TOTALS") {
    //     const { total, quantity } = state.cart.reduce((preval, curval) => {
    //         return (preval + curval.price) * curval.quantity
    //     }, 0)
    //     return { ...state, total,  }
    // }
    return state



}




export default reducer