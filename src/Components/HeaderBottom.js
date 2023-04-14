import React from 'react'
import './HeaderBottom.css'
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import { Link } from 'react-router-dom';
function HeaderBottom() {
  return (
    <div className='headerBottom'>
      <div className="leftNav">
        <Link to='/productpage'>
          <div className="menuAll cp hover">
            <MenuSharpIcon />
            <span>All</span>
          </div>
        </Link>
        <ul>
          <Link to='/productpage'>
            <li className='cp hover'><a href="#">Today's Deals</a></li>
          </Link>
          <Link to='/productpage'>
            <li className='cp hover'><a href="#">Registry</a></li>
          </Link>
          <Link to='/productpage'>
            <li className='cp hover'><a href="#">Customer Service</a></li>
          </Link>
          <Link to='/productpage'>
            <li className='cp hover'><a href="#">Gift Card</a></li>
          </Link>

        </ul>
      </div>
      <Link to='/electronicspage'>
        <div className="rightNav cp hover">
          <h4>Shop deals in Electronics</h4>
        </div>
      </Link>
    </div>
  )
}

export default HeaderBottom
