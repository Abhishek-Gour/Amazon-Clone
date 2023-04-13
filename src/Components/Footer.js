
import React from 'react'
import './Footer.css';
function Footer() {
    return (
        <div className='footer'>
            <div className="fotterTop footerCp footerHover ">
                <h5>Back to top</h5>
            </div>
            <div className="footerMid container">
                <div className="footerList1 ">
                    <ul>
                        <li><h3>Get to Know Us</h3></li>
                        <li className='footerCp footerHover'>Careers</li>
                        <li className='footerCp footerHover'>Blog</li>
                        <li className='footerCp footerHover'>About Amazon</li>
                        <li className='footerCp footerHover'>Investor Relations</li>
                        <li className='footerCp footerHover'>Amazon Devices</li>
                        <li className='footerCp footerHover'>Amazon Science</li>
                    </ul>
                </div>
                <div className="footerList1">
                    <ul>
                        <li className=''><h3>Make Money with Us</h3></li>
                        <li className='footerCp footerHover'>Sell products on Amazon</li>
                        <li className='footerCp footerHover'>Sel on Amazon Business</li>
                        <li className='footerCp footerHover'>Sell apps on Amazon</li>
                        <li className='footerCp footerHover'>Become an Affiliate</li>
                        <li className='footerCp footerHover'>Advertise Your Products</li>
                        <li className='footerCp footerHover'>Self-Publish With Us</li>
                        <li className='footerCp footerHover'>Host an Amazon Hub</li>
                        <li className='footerCp footerHover'>See More Make Money with Us</li>
                    </ul>
                </div>
                <div className="footerList1">
                    <ul>
                        <li className=''><h3>Amazon Payment Product</h3></li>
                        <li className='footerCp footerHover'>Amazon Business Card</li>
                        <li className='footerCp footerHover'>Shop with Points</li>
                        <li className='footerCp footerHover'>Reload Your Balance</li>
                        <li className='footerCp footerHover'>Amazon Currency Converter</li>

                    </ul>
                </div>
                <div className="footerList1">
                    <ul>
                        <li className=''><h3>Let Us Help You</h3></li>
                        <li className='footerCp footerHover'>Amazon and COVID-19</li>
                        <li className='footerCp footerHover'>Your Account</li>
                        <li className='footerCp footerHover'>Your Orders</li>
                        <li className='footerCp footerHover'>Shipping Rates & Policies</li>
                        <li className='footerCp footerHover'>Manage Your Content and Devices</li>
                        <li className='footerCp footerHover'>Amazon Assistant</li>
                        <li className='footerCp footerHover'>Help</li>
                    </ul>
                </div>
            </div>
            <div className="footerLast">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9IafszyEkRKd4sa2GrkS7nwHSak7RKmeEjn1HhoOn&s" className='footerCp' alt="amazon logo" />
                <input type="button" value='English' className='footerLastBtn footerCp' />
                <input type="button" value='USD - U.S. Dollar' className='footerLastBtn footerCp' />
                <input type="button" value='United States ' className='footerLastBtn footerCp' />
            </div>
        </div>
    )
}

export default Footer
