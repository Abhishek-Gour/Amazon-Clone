/**
 * This is a React component that displays a list of electronics items and allows the user to add them
 * to their cart.
 * @returns The `ElectronicsPage` component is being returned, which contains the JSX code for
 * displaying a header, a list of electronic products with their images, titles, prices, and an "Add to
 * cart" button for each product. The `handleAdd` function is also defined to dispatch an action to add
 * the selected product to the cart.
 */
import React from 'react'
import './ElectronicsPage.css'

import './ElectronicsPage.css'
import electronicsItem from './ElectronicsItem'
import Header from '../Header';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../Store/CartSlice';
const ElectronicsPage = () => {
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(add(item))
  }

  return (
    <div className='MainElectronicsPage'>
      <Header />
      <h2>Your Electric Products</h2>
      <div className="elcectronicWrapper">
        {
          electronicsItem.map((item, i) => (
            <div className="electronicsCart" key={item.id}>
              <img src={item.image} alt="Electronics" className='electronicsImage' />
              <h4 className='electronicTtitle'>{item.title}</h4>
              <h5 className='electronicsPrice'>{item.price}</h5>
              <button className='electronicsBtn' onClick={() => handleAddToCart(item)}>Add to cart</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ElectronicsPage
