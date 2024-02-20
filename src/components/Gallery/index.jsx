import React, { useState } from 'react'

import sliderArrow from '../../assets/arrowLeft.svg'

import './style.scss'

function Gallery({ images }) {
	
	const [current, setCurrent] = useState(0)
	const length = images.length

	/**
	 * The function nextSlide() takes the current value of current and adds one to it. If the current
	 * value is equal to the length of the array minus one, then the current value is set to zero.
	 * Otherwise, the current value is set to the current value plus one
	 */
	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1)
	}

	/**
	 * The function `previousSlide` takes in no parameters and returns no value.
	 * It sets the current slide to the previous slide.
	 * If the current slide is 0, it sets the current slide to the last slide.
	 */
	const previousSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1)
	}

	/* This is a simple check to make sure that the images array is not empty. If it is empty, then the
	slider will not render. */
	if (!Array.isArray(images) || length <= 0) {
		return null
	}

	return (
		<div className="gallery">
			{/* This is two ternary operator that checks if the length of the images array is greater than 1. If it
			is, then it will render the arrow. Otherwise, it will not render the arrow. */}
			{length > 1 && (
				<img
					src={sliderArrow}
					className="left-arrow"
					onClick={previousSlide}
					alt="Previous Arrow"
				/>
			)}
			{length > 1 && (
				<img
					src={sliderArrow}
					className="right-arrow"
					onClick={nextSlide}
					alt="Next Arrow"
				/>
			)}
			{images.map((slider, index) => {
				return (
					/* This is a ternary operator that checks if the index of the image is equal to the current value.
					If it is, then it will render the slide as active. Otherwise, it will render the slide as
					inactive. */
					<div
						className={index === current ? 'slide active' : 'slide'}
						key={`slider-${index}`}
					>
						{index === current && (
							<img
								src={slider}
								alt={'slide ' + (parseInt(index) + 1)}
								className="image"
							/>
						)}
					</div>
				)
			})}
		</div>
	)
}

export default Gallery
