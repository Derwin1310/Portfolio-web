import React from 'react';
import {Careers} from './Careers';
import { Education } from './Education';
import { langContext } from '../helpers';
import { useContext } from 'react';
import { Sections, Subtitles } from '../../globalStyles';
import { Quote } from './styles';
import { Section } from '../helpers/Section';

export function Experience () {
	const {language} = useContext(langContext);

	const {quote, cite, title} = language.experience;

	return (
		<Section name='experience'>
			<Subtitles>{title}</Subtitles>

			<Quote>
				<blockquote>{quote}</blockquote>
				<cite>{cite}</cite>
			</Quote>

			<Careers />

			<Education />
		</Section>
	);
};
