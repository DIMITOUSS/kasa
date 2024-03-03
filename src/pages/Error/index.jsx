import { Link } from 'react-router-dom'
import Header from '../../components/Header';

import './style.scss'

function Error({
	/* Default values of the props. */
	title = '404',
	subtitle = "Oups! La page que vous demandez n'existe pas.",
	subtitle2 = '',
}) {
	return (
		<>
		<Header/>
		
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
		</>
	)
}

export default Error
