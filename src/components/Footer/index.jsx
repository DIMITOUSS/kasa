import logo from '../../assets/logo_white.svg'
import './footer.scss'

function Footer() {

    return (
    <footer className="footer"> 
        <img src={logo} alt="Kaza"/>
        <p>© 2020 Kasa. All rights reserved</p>
    </footer>
    )
}

export default Footer