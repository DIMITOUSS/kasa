import { Link } from 'react-router-dom'

import './style.scss'

function Error({
	/* Default values of the props. */
	title = 'Erreur',
	subtitle = 'Oops, une erreur est survenue.',
	subtitle2 = '',
}) {
	return (
		<section className="error">
			<h1 className="error-title">{title}</h1>
			<h2 className="error-subtitle">
				{subtitle}
				{subtitle2 && <br className="error404-subtitle-br" />}
				{subtitle2 && subtitle2}
			</h2>
			<Link className="error-link" to="/">
				Retourner sur la page d'accueil
			</Link>
		</section>
	)
}

export default Error
