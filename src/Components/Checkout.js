/**
 * The Checkout function displays the items in the shopping basket and the subtotal component.
 * @returns The Checkout component is being returned, which contains the shopping basket items and the
 * subtotal component.
 */
import React, { useEffect } from 'react'
import './Checkout.css'
import Subtotal from '../Subtotal'
import CheckoutProduct from './Pages/CheckoutProduct'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTotal, removeAllItems } from '../Store/CartSlice'
import ProcessToPayment from './ProcessToPayment'
const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const dispath = useDispatch();
  useEffect(() => {
    dispath(calculateTotal())
  }, [cart])
  const { cartItems, totalPrice } = useSelector((state) => state.cart)
  const deleteAllItem = () => {
    dispath(removeAllItems())
  }
  return (
    <div className='checkout'>
      <div className="checkout-left">
        <div>
          <h2 className="checkout-title">
            Your selceted products
          </h2>
          {
            cartItems.length === 0 ? (
              <h1>You cart is empty</h1>
            ) : (
              <>
                {
                  cartItems?.map(item => (
                    <CheckoutProduct
                      id={item.id}
                      title={item.title}
                      image={item.image}
                      price={item.price}
                      rating={item.rating}
                    />
                  ))
                }


                <div className="clearList-subTotal">
                  <button className='btnChekout' onClick={() => deleteAllItem()}>Remove all items</button>
                  <div className="subtotal-items-price">
                    <h2>Subtotal</h2>
                    <span>({cartItems.length} Items:)</span>
                    <h3>$ {totalPrice}</h3>
                  </div>
                  <button className='btnChekout
                    proceed-to-payment-left'>Proceed to Payment</button>
                </div>
              </>
            )
          }

        </div>
      </div>
      <ProcessToPayment />

    </div>
  )
}

export default Checkout


