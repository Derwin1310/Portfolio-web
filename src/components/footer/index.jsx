import React, { useContext } from 'react';
import { Social } from './social';
import { SectionsStyles } from '/src/helpers';
import { appContext } from '/src/context'
import { Subtitles } from '/src/globalStyles';
import './style.css';

export function Footer() {
	const { language } = useContext(appContext);

	const {
		title,
		subtitle,
		contactDesc,
		formTitle,
		name,
		surname,
		email,
		message,
		typeYourMessage,
		submit,
	} = language.contact;

	return (
		<footer id='footer' className='footer-wrapper'>
			<SectionsStyles name='name'>
				<Subtitles className='footer'>{title}</Subtitles>

				<div className='subtitle-no'>
					<h3 className='subtitle__h3'>{subtitle}</h3>

					<p className='subtitle__p'>{contactDesc}</p>
				</div>

				<Social />

				<form className='form'>
					<h3 className='form__title'>{formTitle}</h3>

					<div className='form__fullname'>
						<div className='form__wrapper-name'>
							<label htmlFor='first name' className='form__label'>
								{name}
							</label>
							<input
								className='form__name input'
								placeholder={name}
								type='text'
								id='first name'
							/>
						</div>

						<div className='form__wrapper-lastname'>
							<label htmlFor='last name' className='form__label'>
								{surname}
							</label>
							<input
								className='form__lastname input'
								placeholder={surname}
								type='text'
								id='last name'
							/>
						</div>
					</div>

					<label htmlFor='email' className='form__label'>
						{email}
					</label>
					<input
						autoComplete='off'
						className='form__email input'
						placeholder={email}
						type='email'
						id='email'
					/>

					<label htmlFor='message' className='form__label'>
						{message}
					</label>
					<textarea
						className='form__text input'
						placeholder={typeYourMessage}
						id='message'
					/>

					<button className='form__submit' type='submit'>
						{submit}
					</button>
				</form>

				<div className='copyright'>
					<img
						src='https://raw.githubusercontent.com/Derwin1310/assets-for-portfolio/main/about-imgs/gaiden.webp'
						alt='gaiden'
					/>
				</div>
			</SectionsStyles>
		</footer>
	);
}
