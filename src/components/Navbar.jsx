import { useState } from 'react'
import { SearchIcon, UserIcon, CartIcon, SpeakerLogo } from './Icons'

export default function Navbar({ cartCount }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          <a href="#featured">Shop</a>
          <div className="dropdown">
            <a href="#featured">Products ▾</a>
            <div className="dropdown-menu">
              <a href="#featured">Portable Speakers</a>
              <a href="#arrivals">Studio Monitors</a>
              <a href="#smart">Smart Speakers</a>
            </div>
          </div>
          <a href="#smart">Accessories</a>
          <a href="#visit">Guide</a>
        </nav>

        <a href="#" className="logo">
          <SpeakerLogo />
          <span>
            SoundSphere
            <small>Audio Store</small>
          </span>
        </a>

        <div className="nav-icons">
          <button aria-label="Search"><SearchIcon /></button>
          <button aria-label="Account"><UserIcon /></button>
          <button aria-label="Cart" className="cart-btn">
            <CartIcon />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
          <button className="menu-toggle" aria-label="Menu" onClick={() => setOpen(!open)}>☰</button>
        </div>
      </div>
    </header>
  )
}
