/**
 * The CheckoutProduct function is a React component that displays product information and a remove
 * button for items in a shopping cart.
 * @returns The CheckoutProduct component is being returned, which displays the product image, title,
 * price, rating, and a "Remove from basket" button.
 */
import React from 'react'
import './CheckoutProduct.css'
const CheckoutProduct = ({id,image,title,price,rating}) => {
  return (
    <div className='checkoutProduct'>
      <img src={image} alt="checkoutProduct img" className='checkoutProduct-image'/>

      <div className='checkoutProduct-info'>
        <p className='checkoutProduct-title'>{title}</p>
        <p className='checkoutProduct-price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className='checkoutProduct-rating'>
            {Array(rating)
            .fill()
            .map((_,i) => (
                <p>🌟</p>
            ))}
        </div>
        <button>Remove from basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct



