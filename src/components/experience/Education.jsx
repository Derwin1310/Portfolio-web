import React, { Fragment } from 'react';
import { langContext } from '../helpers';
import { useContext } from 'react';
import { CourseAndJob, SectionExp, SectionTitle} from './styles';

export function Education() {
    const {language} = useContext(langContext);

	const {education, courses} = language.experience

	return (
        <Fragment>
            <SectionTitle>{courses}</SectionTitle>
            {
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
            }
        </Fragment>
    );
};
