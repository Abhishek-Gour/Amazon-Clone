import React from 'react'
import './Checkout.css'
import Subtotal from '../Subtotal'
const Checkout = () => {
  return (
    <div className='checkout'>
      <div className="checkout-left">
        <div>
          <h2 className="checkout-title">
            Your shopping Basket
          </h2>
          {/* Basket items */}
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


