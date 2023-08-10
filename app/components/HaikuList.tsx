'use client'
import React, { useEffect } from 'react'
import { Haiku, IHaiku } from './Haiku'

type HaikuListProps = {
	haikus: IHaiku[]
}

export const HaikuList: React.FC<HaikuListProps> = ({ haikus }) => {

	useEffect(() => {
		// get all haiku elements
		const haikuElements = document.querySelectorAll('.haiku-fade');

		// create an observer that will fade in the haikus when they are in view
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				// if the haiku is in view, fade it in and stop observing it
				// isIntersecting is true when the element is in view relative to the intersection root
				// the intersection root is the viewport by default
				if (entry.isIntersecting) {
					entry.target.classList.remove('opacity-0');
					entry.target.classList.add('opacity-100', 'transition-opacity', 'duration-500', 'ease-in');
					observer.unobserve(entry.target);
				}
			});
		});

		haikuElements.forEach(haiku => observer.observe(haiku));

		// clean up the observer when the component unmounts
		return () => {
			haikuElements.forEach(haiku => observer.unobserve(haiku));
		};
	}, []);

	return (
		<div className='space-y-24'>
			{haikus.map((haiku, key) => (
				<Haiku key={key} haiku={haiku} className='block haiku-fade opacity-0' />
			))}
		</div>
	)
}
