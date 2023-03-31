import React from "react";
import { useGlobalContext } from "./Context";

function CartList() {
    const { cart, total, dispatch } = useGlobalContext();
    console.log(cart);
    if (cart.length === 0) {
        return (<div>
            <h2 style={{ textAlign: "center" }}>your cart is empty</h2>
        </div>)
    }

    return (<div>
        {
            cart.map((cartItem, cartIndex) => {
                const { id, img, name, price, category, quantity } = cartItem;
                return (
                    <div className='card1'>
                        <img src={img} alt="" width='20%' />
                        <div className='name1'>{name}</div>
                        <div className='category1'>{category}</div>
                        <button onClick={() => dispatch({ type: 'REMOVE', payload: id })} className='remove'>Remove</button>
                        <div className="plusMinus">
                            <button onClick={() => dispatch({ type: 'DECREASE', payload: id })}>-</button>

                            <div className='qty'>QTY : {quantity}</div>

                            <button onClick={() => dispatch({ type: 'INCREASE', payload: id })}>+</button>
                        </div>


                        <div className='price'>PRICE : &#8377; {price}</div>

                    </div>
                )
            })
        }
        <footer>
            <h4 className="total">TOTAL : $<span>{total}</span></h4>
            <div><button className="clear" onClick={() => dispatch({ type: 'CLEARCART' })}>Clear Cart</button></div>
        </footer>

    </div>



    );
}

export default CartList;

