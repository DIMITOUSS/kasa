import React, { useState, useEffect } from 'react';
import datas from '../../datas/db.json'; // Correct import path

const Appartementpage = () => {
    const [apartments, setApartments] = useState([]);

    useEffect(() => {
        setApartments(datas); // Assuming the top-level data is an array of apartments
    }, []);

    return (
        <div>
            <h2>Apartment Listings</h2>
            <ul>
                {apartments.map((apartment) => (
                    <li key={apartment.id}>
                        <h3>{apartment.title}</h3>
                        <p>{apartment.description}</p>
                        <img src={apartment.pictures} alt={apartment.title} />
                        <tag>{apartment.tags}</tag>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Appartementpage;
