import React, { useState, useEffect } from 'react';
import datas from '../../datas/db.json';
import Slider from 'react-slick'; // Import the Slider component from react-slick
import 'slick-carousel/slick/slick.css'; // Import slick carousel styles
import 'slick-carousel/slick/slick-theme.css'; // Import slick carousel theme styles

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
                        <Slider {...settings}>
                            {apartment.pictures.map((picture, index) => (
                                <div key={index}>
                                    <img src={picture} alt={`Apartment ${index + 1}`} />
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
