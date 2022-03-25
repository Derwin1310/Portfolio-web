import React from 'react';

export function Education() {
	const education = [
		{
			course: 'React JS',
			timelapse: 'Oct. 2021 - Mar. 2022',
			desc: 'React is an open source Javascript library designed to create user interfaces with the goal of making it easy to develop single-page applications. It is maintained by Facebook and the free software community.',
		},
		{
			course: 'JavaScript',
			timelapse: 'Jun. 2020 - Oct. 2020',
			desc: 'JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.',
		},
		{
			course: 'CSS3',
			timelapse: 'Feb. 2020 - Apr. 2020',
			desc: "It's a graphic design language to define and create the presentation of a structured document written in a markup language (like HTML). It's widely used to establish the visual design of web documents.",
		},
		{
			course: 'HTML5',
			timelapse: 'Jan. 2020 - Feb. 2020',
			desc: 'HTML is a markup language that allows us to indicate the structure of our website through tags. This language offers us great adaptability, a logical structure and is easy to interpret by both humans and machines.',
		},
	];

	return (

        education.map(({course, timelapse, desc}) => (
            <section key={course} className='section-education'>
                <div className='course-wrapper'>
                    <h4 className='course-wrapper__course'>{course}</h4>
                    <time className='course-wrapper__time'>{timelapse}</time>
                </div>

                <div className='education-wrapper'>
                    <p className='education-wrapper__desc'>{desc}</p>
                </div>
            </section>
        )
    ));
};
