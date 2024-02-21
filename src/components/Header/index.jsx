import logo from '../../assets/logo.svg'
import './header.css'
import { NavLink } from 'react-router-dom'

function Header() {
    

    return (



    <header className="header"> 
        <img src={logo} alt="Kasa" className="header__logo"/>
        <nav className="header__link">
            <NavLink to="/" className="header__link__active">Accueil</NavLink>
            <NavLink to="/about">A Propos</NavLink>
        </nav>
  
    
    </header>
    )
}

export default Header