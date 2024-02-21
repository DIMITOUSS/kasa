import React, { useState, useEffect } from 'react';
import datas from '../../datas/db.json';
import Gallery from '../Gallery'; 

import Collapse from '../Collapse';
import Rating from '../Rating';
import Tag from '../Tag'
import './style.scss';

const Appartementpage = () => {
    const [apartments, setApartments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulating an asynchronous data fetch
        setTimeout(() => {
            setApartments(datas);
            setIsLoading(false);
        }, 1000); // Adjust the timeout as needed
    }, []);
    if  (isLoading) return <p>Chargement...</p>;

    
    
    
    return (
        
        <div>
        
                <ul>
                    {apartments.map((apartment) => (
                        <li key={apartment.id}>
                            <section>
				<Gallery images={apartment.pictures} />
				<div className="annonce-info-rating-host-wrapper">
					<div className="annonce-info-wrapper">
						<h1 className="annonce-title">{apartment.title}</h1>
						<p className="annonce-location">
							{apartment.location}
						</p>
						<div className="tag-wrapper">
							{apartment.tags.map((tag, index) => (
								<Tag tagName={tag} key={`${tag}-${index}`} />
							))}
						</div>
					</div>
				 
				</div>
				<div className="description-equipments-wrapper">
					<Collapse
						title="Description"
						content={apartment.description}
					/>
					<Collapse
						title="Équipements"
						content={apartment.equipments}
					/>
                    <Rating  rating={apartment.rating} />
				</div>
               <>
               <p>{apartment.host.name}</p>
               <img src={apartment.host.picture} alt="" height='50' width='50'/>
               
               </>
			</section>
                                      
                        </li>
                    ))}
                </ul>
            
        </div>
    );
};

export default Appartementpage;
