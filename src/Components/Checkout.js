import React from 'react'
import './Checkout.css'
const Checkout = () => {
  return (
    <div className='checkout'>
      <div className="checkout-left">
        <div>
          <h2 className="checkout-title">
            Your shopping Basket
          </h2>
        </div>
      </div>
      <div className="checkout-right">
        <h2>The subtotal will go here</h2>
      </div>
    </div>
  )
}

export default Checkout


