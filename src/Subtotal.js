/**
 * The Subtotal component displays the total price of items in the shopping basket and an option to
 * mark the order as a gift.
 * @returns The Subtotal component is being returned, which contains the JSX code for displaying the
 * subtotal of the items in the basket and a button to proceed to checkout.
 */
import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useSelector } from 'react-redux'
import { toast } from "react-toastify";

const Subtotal = () => {

  const succesfullyPlaced = () => {
    toast.success(`Order Placed Successfully`, {
      position: 'bottom-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }
  const cart = useSelector((state) => state.cart)
  return (
    <div className='subtotal'>
      <CurrencyFormat
      renderText={(value) => (
        <>
        <p>
            Subtotal ({cart.cartItems.length} items): <strong>{value}</strong>
        </p>
        <small className='subtotal-gift'>
            <input type="checkbox" /> This order contains a gift
        </small>
        </>
      )}
      decimalScale={2}
        value={cart.totalPrice}//part of the homework
      displayType={'text'}
      thousandSeparator={true}
      prefix={'$'}
      />
      <button onClick={succesfullyPlaced}>Proceed to Payment</button>
    </div>
  )
}

export default Subtotal
