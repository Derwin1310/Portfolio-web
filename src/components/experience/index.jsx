import React from 'react';
import {Careers} from './Careers';
import { Education } from './Education';
import { langContext } from '../helpers';
import { useContext } from 'react';
import { Sections, Subtitles } from '../../globalStyles';
import { Quote, SectionTitle } from './styles';


export function Experience () {
	const {language} = useContext(langContext);

	const {quote, cite, title, career, courses} = language.experience;

	return (
		<Sections id='experience'>
			<Subtitles>{title}</Subtitles>

			<Quote>
				<blockquote>{quote}</blockquote>
				<cite>{cite}</cite>
			</Quote>

			<SectionTitle>{career}</SectionTitle>
			<Careers />

			<SectionTitle>{courses}</SectionTitle>
			<Education />
		</Sections>
	);
};
