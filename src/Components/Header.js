import React from 'react'
import './Header.css'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Header() {
    const items = useSelector((state) => state.cart);
    return (
        <div className='headerTop'>
            <div className="navLeft">
               <Link to ='/'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9IafszyEkRKd4sa2GrkS7nwHSak7RKmeEjn1HhoOn&s" className='cp hover headerLogo' alt="amazon logo" /></Link>
                <div className="deliverLocation cp hover container">
                    <FmdGoodOutlinedIcon />
                    <div className="deliverIndia">
                        <span className='upperLine'>Deliver to</span>
                        <span className='lowerLine'>India</span>
                    </div>
                </div>

            </div>
            <div className="searchArea">

                <select name="All Content" id="all content" className='itemSelection cp'>

                    <option defaultValue="All Department">All Department</option>
                    <option value="Baby" >Baby</option>
                    <option value="Automotive" >Automotive</option>
                    <option value="Beauty & Personal Care" >Beauty & Personal Care</option>
                    <option value="Books" >Books</option>
                    <option value="Boy's Fashion" >Boys Fashion</option>
                    <option value="Computers" >Computers</option>
                    <option value="Deals" >Deals</option>
                    <option value="Digital Music" >Digital Music</option>
                    <option value="Electronics" >Electronics</option>
                </select>
                <input type="search" placeholder='Search in the World' className='
searchInput'/>
                <SearchIcon className='searchIcon cp hover' />
            </div>
            <div className="rightNav">
                <Link to='/login' >
                    <div className='hederOption cp hover'>
                        <span className='upperLine'>Hello, sign in</span>
                        <span className='lowerLine'>Account & Lists</span>
                    </div>
                </Link>

                <div className="hederOption cp hover">
                    <span className='upperLine'>Returns</span>
                    <span className='lowerLine'>& Orders</span>
                </div>
            </div>
            <Link to='/checkout'>
                <div className="headerBasket cp hover">
                    <AddShoppingCartSharpIcon />
                    <span>{items.length}</span>
                </div>
            </Link>
        </div>

    )
}

export default Header
