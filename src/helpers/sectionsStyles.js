import React, { useEffect, useRef, useState } from 'react';
import { SectionAnimations , Sections} from '/src/globalStyles';
import '/src/styles.css';

export function SectionsStyles({ children, name }) {

	const [animation, setAnimation] = useState()
	const animationRef = useRef()

	useEffect(() => {
		const handleScroll = () => {
			const scrollAnimation =  animationRef.current
			const sectionContent = scrollAnimation.getBoundingClientRect().top
			const screenHeight = window.innerHeight

			const fadeAnimation = sectionContent < screenHeight ? 'animation on' : ''
			setAnimation(fadeAnimation)
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<SectionAnimations variant={animation} id={name}>
			<Sections ref={animationRef} >{children}</Sections>
		</SectionAnimations>
	);
}
