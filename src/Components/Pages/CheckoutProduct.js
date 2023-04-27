/**
 * The CheckoutProduct function is a React component that displays product information and a remove
 * button for items in a shopping cart.
 * @returns The CheckoutProduct component is being returned, which displays the product image, title,
 * price, rating, and a "Remove from basket" button.
 */
import React from 'react'
import './CheckoutProduct.css'
import { remove } from '../../Store/CartSlice';
import { useDispatch } from 'react-redux'
const CheckoutProduct = ({ id, image, title, price, rating }) => {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id))
  }
  return (
    <div className='checkoutProduct'>

      <div className='checkoutProduct-info'>
        <img src={image} alt="checkoutProduct img" className='checkoutProduct-image' />
        <div className="checkoutProduct-info-main">
          <p className='checkoutProduct-title'>{title}</p>
          <div className="remove-quantity-btn">
            <button onClick={() => handleRemove(id)} className='remove-btn'>Remove from basket</button>

            <span className='quantity-btn'>
              Qty:
              <select name="quantity" id="itemQuantity" >
                <option value="1" selected>1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </span>
          </div>
        </div>

        <p className='checkoutProduct-price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
    </div>
  )
}

export default CheckoutProduct



