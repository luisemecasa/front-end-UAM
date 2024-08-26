import { Link } from 'react-router-dom'
import "../styles/Header.css"

const Header = () => {
  return (
    <header className='header'>
      <h1>Boeing</h1>
      <nav className='navbar'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/airplanes">Airplanes</Link></li>
          <li><Link to="/defense">Defense</Link></li>
          <li><Link to="/space">Space</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header