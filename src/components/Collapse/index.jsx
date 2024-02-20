import React, { useState, useRef } from 'react'

import chevron from '../../assets/chevron.svg'

import './style.scss'

function Collapse({ title, content }) {
	/* This is setting the initial state of the collapse. */
	const [setActive, setActiveState] = useState('')
	/* This is setting the initial height of the collapse to 0px. */
	const [setHeight, setHeightState] = useState('0px')
	/* This is setting the initial state of the rotate class. */
	const [setRotate, setRotateState] = useState('collapse-icon')

	/* This is setting the contentCollapse to a ref. This is used to get the height of the content. */
	const contentCollapse = useRef(null)

	/**
	 * The function toggles the collapse by changing the active state, the height state, and the rotate
	 * state
	 */
	const toggleCollapse = () => {
		setActiveState(setActive === '' ? 'active' : '')
		setHeightState(
			setActive === 'active'
				? '0px'
				: `${contentCollapse.current.scrollHeight}px`
		)
		setRotateState(
			setActive === 'active' ? 'collapse-icon' : 'collapse-icon rotate'
		)
	}

	/* This is a way to check if the content is an array or not. If it is not an array, it will push the
	content into the contentArray. If it is an array, it will loop through the array and push each item into
	the contentArray. */
	const contentArray = []
	if (!Array.isArray(content)) {
		contentArray.push(content)
	} else {
		for (let i = 0; i < 9; i++) {
			contentArray.push(content[i])
		}
	}

	return (
		<div className="collapse-section">
			{/* This is the button that is used to toggle the collapse. */}
			<button
				className={`collapse ${setActive}`}
				onClick={toggleCollapse}
			>
				<span className="collapse-title">{title}</span>
				<img src={chevron} className={`${setRotate}`} alt="" />
			</button>
			<div
				ref={contentCollapse}
				style={{ maxHeight: `${setHeight}` }}
				className="collapse-content"
			>
				<div className="collapse-text">
					{contentArray.map((content, index) => (
						<div key={`${content}-${index}`}>{content}</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Collapse
