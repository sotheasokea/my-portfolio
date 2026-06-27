import { useState } from 'react'
import './Header.css'
import { NavigationMenu } from './NavigationMenu'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const openMenu = () => setMenuOpen(true)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="top-header">
        <button className="hamburger-menu" aria-label="Open menu" onClick={openMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <h1 className="site-title">Welcome to my website</h1>
      </header>

      <NavigationMenu 
        menuOpen={menuOpen}
        closeMenu={closeMenu}
      />
    </>
  )
}
