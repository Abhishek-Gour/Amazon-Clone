/**
 * The HeaderBottom function returns a React component that displays a navigation menu and a link to
 * shop for electronics.
 * @returns A React functional component that renders a header bottom section with a left navigation
 * menu and a right navigation section. The left navigation menu contains a dropdown menu with links to
 * different pages, while the right navigation section contains a link to the electronics page.
 */
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
            <li className='cp hover'>Today's Deals</li>
          </Link>
          <Link to='/productpage'>
            <li className='cp hover'>Registry</li>
          </Link>
          <Link to='/productpage'>
            <li className='cp hover'>Customer Service</li>
          </Link>
          <Link to='/productpage'>
            <li className='Gift Card'>Gift Card</li>
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
