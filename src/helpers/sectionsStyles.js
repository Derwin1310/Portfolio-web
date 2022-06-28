import React, { useEffect, useRef, useState } from 'react';
import { SectionAnimations , Sections} from '/src/globalStyles';
import '/src/styles.css';

export function SectionsStyles({ children, name }) {

	const [animation, setAnimation] = useState()
	const sectionRef = useRef()

	useEffect(() => {
		const handleScroll = () => {
			const section =  sectionRef.current
			const sectionHeightScroll = section.getBoundingClientRect().top
			const windowHeightScroll = window.innerHeight

			const fadeAnimation = sectionHeightScroll < windowHeightScroll
			setAnimation(fadeAnimation)
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<SectionAnimations variant={animation} id={name}>
			<Sections ref={sectionRef} >{children}</Sections>
		</SectionAnimations>
	);
}
