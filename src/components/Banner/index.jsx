import imageBanner from '../../assets/banner-home.png'
import './banner.css'


function Banner() {

    return (
    <div className="banner"> 
        <div className="banner__bg"></div>
        <img src={imageBanner} alt="Nature" className="banner__image"/>
        <p className="banner__text">Chez vous, partout et ailleurs</p>
    </div>
    )
}

export default Banner