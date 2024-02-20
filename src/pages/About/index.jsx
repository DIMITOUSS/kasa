import aproposBanner from '../../assets/apropos-banner.jpg'

import Collapse from '../../components/Collapse'

import './style.scss'

function APropos() {
	/* Setting the title of the page. */
	document.title = 'A Propos - Kasa'

	const aproposData = [
		{
			title: 'Fiabilité',
			content:
				'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
		},
		{
			title: 'Respect',
			content:
				'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
		},
		{
			title: 'Service',
			content:
				"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
		},
		{
			title: 'Sécurité',
			content:
				"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
		},
	]

	return (
		<section className="apropos-section">
			<h1 className="banner">
				<img
					src={aproposBanner}
					className="banner-img apropos-banner"
					alt="Banner"
				/>
			</h1>
			{/* Looping through the aproposData array and displaying each item as a Collapse. */}
			{aproposData.map((apropos, index) => (
				<Collapse
					title={apropos.title}
					content={apropos.content}
					key={`${apropos.title}-${index}`}
				/>
			))}
		</section>
	)
}

export default APropos
