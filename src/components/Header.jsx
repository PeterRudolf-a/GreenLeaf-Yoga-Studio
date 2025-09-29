import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <nav className="nav container">
        <h1 className="logo">GreenLeaf Yoga Studio</h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/classes">Classes</Link></li>
          <li><Link to="/instructors">Instructors</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
