import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { FiMenu, FiX } from 'react-icons/fi'
import './Navbar.css'

const navLinks = [
  { to: 'home', label: 'home' },
  { to: 'about', label: 'about' },
  { to: 'skills', label: 'expertise' },
  { to: 'experience', label: 'experience' },
  { to: 'projects', label: 'work' },
  { to: 'contact', label: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner container">
        <a href="#home" className="nav-logo">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">SP</span>
          <span className="logo-bracket"> /&gt;</span>
        </a>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {navLinks.map(({ to, label }, i) => (
            <li key={to}>
              <Link
                to={to}
                smooth
                duration={600}
                offset={-80}
                onClick={() => setOpen(false)}
                className="nav-link"
                activeClass="active"
                spy
              >
                <span className="nav-index mono-label">0{i + 1}</span>
                <span className="nav-comment">// </span>{label}
              </Link>
            </li>
          ))}
        </ul>

        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </nav>
  )
}
