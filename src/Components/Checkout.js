import React from 'react'
import './Checkout.css'
import { Link } from 'react-router-dom'
import LockIcon from '@mui/icons-material/Lock';
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';
const Checkout = () => {
  return (
    <div className='mainCheckoutPage '>
      <div className="checkoutContainer">
        <div className="checkoutPageMainHeader">
          <div className="checkoutHeaderLogo">
            <Link to='/'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9IafszyEkRKd4sa2GrkS7nwHSak7RKmeEjn1HhoOn&s" className='cp hover headerLogo' alt="amazon logo" /></Link>
          </div>
          <div className="checkoutHeaderNavigation">
            <h1>Checkout <span></span></h1>
          </div>
          <div className='checkoutHeaderLock'>
            <LockIcon />
          </div>
        </div>
        <div className="checkoutBottom">
          <div className="checkoutBottomLeft">
              <Link to='/productpage' className='backToHome'>
                <ArrowBackIosSharpIcon style={{ color: 'black' }} />
                <span> <h5 style={{ color: 'black' }}>back to cart</h5></span>
              </Link>
            
            <div className="userInformation">
            <div className="checkoutDiv">
              <h2>Checkout</h2>
            </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout

