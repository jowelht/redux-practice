import React from 'react'
import productItem from "../../data/products/products.json"
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../store/cart/cartSlice'

const ProductCard = () => {
    const cart = useSelector((state) => state.cart.items)
    const dispatch = useDispatch()
    console.log(cart)
    const addToCart = () => {
        dispatch(cartActions.addToCart({id: 1, title: "test", price: 100}))
    }
    return (
        <div className="mt-10">
            <div className="grid grid-cols-3">
                    {productItem.map( item=> 
                        <div key={item.id} className='col-span-1'>
                            <img src={item.image} alt={item.title} />
                            <h3>{item.title}</h3>
                            <p>{item.price}</p>
                            <button onClick={addToCart}>Add to cart</button>
                        </div>
                    )}
            </div>
        </div>
    )
}

export default ProductCard