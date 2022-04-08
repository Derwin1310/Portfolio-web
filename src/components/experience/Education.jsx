import React from 'react';
import { langContext } from '../helpers';
import { useContext } from 'react';
import { CourseAndJob, SectionExp} from './styles';

export function Education() {
    const {language} = useContext(langContext);

	const {education} = language.experience

	return (
        education.map(({name, time, desc}) => (
            <article key={name}>
                    <SectionExp>
                        <div>
                            <CourseAndJob>{name}</CourseAndJob>
                            <time>{time}</time>
                        </div>

                        <p>{desc}</p>
                    </SectionExp>
            </article>
        ))
    );
};
