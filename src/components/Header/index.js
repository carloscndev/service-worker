// Import Modules
import React from 'react'

// Import Styles
import './styles.css'

const MenuItems = [
  'Runaway',
  'The marc Jacobs',
  'Bookmarc'
]

const Header = () => (
  <header className="header">
    <div className="header-wrap">
      <div className="logo">
        Marc Jacobs
      </div>
      <nav className="nav">
        {
          MenuItems.map((item, index) =>
            <span key={index}>
              {item}
            </span>
          )
        }
      </nav>
      <div className="menu-social">
        <span className="text">Login</span>
        <span><i className="fas fa-search" /></span>
        <span><i className="fas fa-heart" /></span>
        <span><i className="fas fa-cart-plus" /></span>
        <span className="text">CART101</span>
      </div>
    </div>
  </header>
)


export default Header
