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
import { useDispatch } from 'react-redux';
import { add } from '../../Store/CartSlice';

const ElectronicsPage = () => {
  const dispatch = useDispatch();
  // const [products, setProduct] = useState([]);
  const handleAdd = (electronicsItem) => {
    dispatch(add(electronicsItem))
    alert('Your product is added in the cart 🎉🫠')
  }

  return (
    <div className='MainElectronicsPage'>
      <Header />
      <h2>Your Electric Products</h2>
      <div className="elcectronicWrapper">
        {
          electronicsItem.map((electronicsItem, i) => (
            <div className="electronicsCart" key={i}>
              <img src={electronicsItem.image} alt="Electronics" className='electronicsImage' />
              <h4 className='electronicTtitle'>{electronicsItem.title}</h4>
              <h5 className='electronicsPrice'>{electronicsItem.price}</h5>
              <button className='electronicsBtn' onClick={handleAdd}>Add to cart</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ElectronicsPage
