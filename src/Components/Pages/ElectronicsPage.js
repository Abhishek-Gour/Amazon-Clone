import React, { useState } from 'react'
import './ElectronicsPage.css'
import electronicsItem from './ElectronicsItem'
import Header from '../Header';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../Store/CartSlice';
const ElectronicsPage = () => {
  const dispatch = useDispatch();
  const [products, setProduct] = useState([]);
  const handleAdd = (electronicsItem) => {
    dispatch(add(electronicsItem))
    alert('Your product is added in the cart')
  }
  // const data = useSelector((d) => {
  //   return d.show.value;
  // })
  return (
    <div className='MainElectronicsPage'>
      <Header/>
      <h2>Your Electric Products</h2>
        <div className="elcectronicWrapper">
          {
          electronicsItem.map((electronicsItem,i) => (
            <div className="electronicsCart" key={i}>
              <img src={electronicsItem.image} alt="Electronics image" className='electronicsImage'/>
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
