import React, { useState, useEffect } from 'react';
import datas from '../../datas/db.json';
import Gallery from '../Gallery';
import Collapse from '../Collapse';
import Rating from '../Rating';
import Tag from '../Tag';
import { useParams } from 'react-router-dom';
import Header from '../Header';
import './style.scss'

const ApartmentPage = () => {
    const [apartment, setApartment] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        setTimeout(() => {
            const selectedApartment = datas.find(apartment => apartment.id === id);
            console.log("Selected Apartment:", selectedApartment);
            setApartment(selectedApartment);
            setIsLoading(false);
        }, 1000);
    }, [id]);

    if (isLoading) return <p>Loading...</p>;
    if (!apartment) return <p>Apartment not found for ID: {id}</p>;

    return (
        <div>
            <Header/>
            <section  className="annonce">
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
					<div className="rating-host-wrapper">
						<Rating rating={apartment.rating} />
						<div className="host-wrapper">
                        <div className="host-name">
  {apartment.host.name.split(' ').map((part, index) => (
    <React.Fragment key={index}>
      {part}
      {index !== apartment.host.name.split(' ').length - 1 && <br />}
    </React.Fragment>
  ))}
</div>
							<img
								className="host-picture"
								src={apartment.host.picture}
								alt="Host"
							/>
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
				</div>
			</section>
        </div>
    );
};

export default ApartmentPage;
