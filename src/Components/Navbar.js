import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useGlobalContext } from './Context'
import { Link } from 'react-router-dom'

function Navbar() {
    const { quantity } = useGlobalContext()

    return (
        <nav className="Nav">
            <div className="subNav">
                <Link to="/" style={{ fontWeight: "bold", fontSize: "30px" }}>SHOPPING CART</Link>
                <input text="search" placeholder="search here" />
                <div>

                    <Link to="/cartList"><FaShoppingCart color="black" fontSize="25px" /></Link>
                    <span className="count">{quantity}</span>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
