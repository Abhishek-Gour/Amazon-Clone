import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './ProductPage.css'
import { Link } from 'react-router-dom';
import Header from '../Header';
import { remove } from '../../Store/CartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  }
  const data = useSelector((c) => {
    console.log(c);
  })
  return (
    <div className='mainCartPage'>
      <Header />
      <h2>Your products is added here</h2>
      <div className="productsPageWrapper">
        {
          products.map(product => (
            <div className="ProductPageCard">
              <img src={product.image} alt="Product add to cart" />
              <h5>{product.title}</h5>
              <h5>{product.price}</h5>
              <div className='removeToCartBtn'>
                <button className='btn'onClick={() => handleRemove(product.id)}>Remove</button>
                <Link to='/checkout'>
                  <button className='btn'>Checkout</button>
                </Link>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cart


