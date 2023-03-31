import React from 'react'
import { useGlobalContext } from './Context'
import { FaProductHunt } from 'react-icons/fa';
import { Link } from 'react-router-dom'

function Home() {
    const { products } = useGlobalContext()
    console.log(products)
    return (
        <div className='flex'>
            {
                products.map((prod, pindex) => {
                    const { id, img, name, category, price } = prod;
                    return (
                        <div style={{ width: "20%" }}>
                            <div className='card' key={pindex}>
                                <img src={img} alt="" width='100%' />
                                <p className='name'>{name}</p>
                                <p className='category'>{category}</p>
                                <p className='price'> &#8377; {price}</p>
                                <Link to={`/productpage/${id}`}><button  ><FaProductHunt /></button></Link>




                            </div>

                        </div>
                    )

                })
            }

        </div>
    )
}

export default Home
