import React from 'react'
import '../../styles/index.css'
// import Button from '../../../utilities/Button'

const SingleSlide = ({ slide }) => {
	const { picture, subHeading, heading, description, btnText } = slide
	return (
		<div className='carousel-item relative w-full'>
			<div
				className='hero h-[85vh]'
				style={ { backgroundImage: `url(${ picture })` } }
			>
				<div className='hero-overlay bg-opacity-40'></div>
				<div className='hero-content text-center text-neutral-content'>
					<div className='max-w-xl text-white'>
						<h3 className='text-lg mb-5'>{ subHeading }</h3>
						<h1 className='mb-5 text-6xl font-extrabold uppercase'>
							{ heading }
						</h1>
						<p className='mb-5 text-base'>{ description }</p>
						<button className='btn btn-primary'>View Now</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SingleSlide
