import React, { useState, useEffect } from 'react';
import datas from '../../datas/db.json';
import Slider from 'react-slick'; // Import the Slider component from react-slick
import './style.scss';
const Appartementpage = () => {
    const [apartments, setApartments] = useState([]);

    useEffect(() => {
        setApartments(datas);
    }, []);

    // Slick carousel settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div>
            <h2>Apartment Listings</h2>
            <ul>
                {apartments.map((apartment) => (
                    <li key={apartment.id}>
                        <h3>{apartment.title}</h3>
                        <p>{apartment.description}</p>
                        <Slider className='gallery' {...settings}>
                            {apartment.pictures.map((picture, index) => (
                                <div key={index}>
                                    <img className='image' src={picture} alt={`Apartment ${index + 1}`} />
                                </div>
                            ))}
                        </Slider>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Appartementpage;
