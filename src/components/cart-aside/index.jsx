import React from 'react'
import { useSelector } from 'react-redux'

const Offcanvets = () => {
    const showcartItems = useSelector((state) => state.cart.items)
    console.log(showcartItems)
    return (
        <div className='border-t border-solid'>Offcanvets
            <span>
                {showcartItems.map(item=> 
                    <div key={item.id}>
                        <img src={item.image} alt={item.title} />
                        <h3>{item.title}</h3>
                    </div>
                )}
            </span>
        </div>
    )
}

export default Offcanvets