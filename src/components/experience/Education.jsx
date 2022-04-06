import React from 'react';
import { langContext } from '../helpers/langContext';
import { useContext } from 'react';

export function Education() {
    const {language} = useContext(langContext);

	const {education} = language.experience

	return (
        education.map(({name, time, desc}) => (
            <section key={name} className='section-education'>
                <div className='course-wrapper'>
                    <h4 className='course-wrapper__course'>{name}</h4>
                    <time>{time}</time>
                </div>

                <p>{desc}</p>
            </section>
        ))
    );
};
