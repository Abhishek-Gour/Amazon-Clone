import React from 'react'
import './Checkout.css'
import Subtotal from '../Subtotal'
import CheckoutProduct from './Pages/CheckoutProduct'
import { useStateValue } from '../StateProvider'
const Checkout = () => {
  const [{basket},dispatch] = useStateValue();
  return (
    <div className='checkout'>
      <div className="checkout-left">
        <div>
          <h2 className="checkout-title">
            Your shopping Basket
          </h2>
          {basket.map(item => (
            <CheckoutProduct
            id={item.id}
            title = {item.title}
            image={item.image}
            price = {item.price}
            rating={item.rating}
            />
          ))}
          {/* Checkout product */}
          <CheckoutProduct
          />
        </div>
      </div>
      <div className="checkout-right">
        <Subtotal/>
        <h2>The subtotal will go here</h2>
      </div>
    </div>
  )
}

export default Checkout


