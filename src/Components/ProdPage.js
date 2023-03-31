import React from 'react'
import { useGlobalContext } from './Context';
import { Link, useParams } from 'react-router-dom'


function ProdPage() {
    const { products, cart, dispatch } = useGlobalContext()
    console.log(cart)
    const { productId } = useParams()
    console.log(productId)
    const product = products.find(p => p.id === productId);
    console.log(product)

    const { img, name, price, category } = product
    return (
        <div>
            <div className="Pflex">
                <img src={img} alt="" width='40%' />
                <div className='details'>
                    <p className='name'>{name}</p>
                    <p className='category'>{category}</p>
                    <p className='price'> &#8377; {price}</p>
                    {
                        cart.find((p) => p.id === product.id) ? (< Link to="/cartList" ><button className='gotocart'>GO TO CART</button></Link >) : (< button onClick={() => dispatch({ type: 'ADDTOCART', payload: product })} className='addtocart'> ADD TO CART</button >)
                    }
                </div>
            </div>


        </div>

    )


}

export default ProdPage
